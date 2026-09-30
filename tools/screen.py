#!/usr/bin/env python3
# tools/screen.py — D-lane evidence generator (METHODOLOGY.md, flow step 5)
# Honest rule (POLICY): a clean screen is NEVER proof of originality.
# Output: per-problem JSON evidence packs; tierEstimate is a mechanical estimate
# to be adjudicated by a human/orchestrator before any readiness verdict changes.
import os, sys, json, re, sqlite3, subprocess, collections

HERE=os.path.dirname(os.path.abspath(__file__))
DB=os.environ.get('CORPUS_DB','/tmp/kilo/corpus.db')
REPO=os.path.dirname(HERE)
PROBLEMS=os.path.join(REPO,'problems.js')
OUT=os.environ.get('SCREENS_DIR', os.path.join(HERE,'screens'))

def load_problems():
    js='''global.window={};require(process.argv[1]);
    const out=window.IMO_SHORTLIST.problems.map(p=>({id:p.id,category:p.category,rating:p.rating,
      novelty:(p.novelty||{}).status,text:p.text.replace(/<[^>]+>/g,''),answer:p.answer||''}));
    process.stdout.write(JSON.stringify(out));'''
    r=subprocess.run(['node','-e',js,PROBLEMS],capture_output=True,text=True,check=True)
    return json.loads(r.stdout)

def frag_list(text):
    parts=re.split(r'\$+', text)
    frags=[x.strip() for x in parts[1::2]]
    out=[]
    for f in frags:
        if len(f)<14: continue
        if '\\' not in f and not re.search(r'\d', f): continue
        if re.fullmatch(r'[^a-zA-Z]*', f): continue
        out.append(f)
    return sorted(set(out), key=len, reverse=True)[:6]

def answer_sig(text, answer):
    s=re.findall(r'\d{2,}', (answer or '')+' '+text)
    return sorted(set(s))[:8]

def screen_one(con, p, allchunks=None, fragmap=None):
    cur=con.cursor()
    frags=frag_list(p['text'])
    hits=[]
    if fragmap is not None:
        for f in frags:
            for src in fragmap.get(f,[])[:4]:
                hits.append({'kind':'exact-fragment','frag':f[:70],'src':src})
    else:
        for f in frags:
            rows=cur.execute("SELECT src FROM chunks WHERE instr(raw,?) LIMIT 5",(f,)).fetchall()
            for (src,) in rows: hits.append({'kind':'exact-fragment','frag':f[:70],'src':src})
    sys.path.insert(0,HERE)
    from query_all import query_candidate
    top=query_candidate(p['id'], p['text'], topk=20)
    top20=[{'src':t[0],'cont':round(t[1],3),'tcont':round(t[2],3),'excerpt':t[3][:180]} for t in top]
    asig=answer_sig(p['text'],p.get('answer'))
    asighits=[]
    if asig:
        q=' AND '.join('"%s"'%d for d in asig)
        try:
            asighits=[r[0] for r in cur.execute(
              "SELECT DISTINCT c.src FROM fts JOIN chunks c ON c.id=fts.rowid WHERE fts MATCH ? LIMIT 10",(q,)).fetchall()]
        except sqlite3.Error: pass
    maxc=max((t['cont'] for t in top20), default=0.0)
    strong=[h for h in hits if len(h['frag'])>=22]
    if strong: tier='T1-suspect'
    elif maxc>=0.60 or hits: tier='T2-suspect'
    else: tier='D-clean(lane only)'
    return {'id':p['id'],'db':DB,'date':__import__('datetime').date.today().isoformat(),'frags':frags,'exactHits':hits,
            'top20':top20[:20],'maxContainment':maxc,'answerSig':asig,'answerSigHits':asighits,
            'tierEstimate':tier,'note':'D-lane only; G1 requires N/A lanes >=8 queries each + H4 refetch before any T3 verdict'}

def build_fragmap(con, problems):
    allf=[]
    for p in problems:
        for f in frag_list(p['text']): allf.append(f)
    allf=sorted(set(allf))
    print('exact fragments:',len(allf),'scanning 187k chunks once...',flush=True)
    fm=collections.defaultdict(list)
    cur=con.cursor()
    for src,raw in cur.execute("SELECT src,raw FROM chunks"):
        for f in allf:
            if f in raw and len(fm[f])<6: fm[f].append(src)
    return fm

def main():
    args=sys.argv[1:]
    ids=args[1:] if args and args[0]=='--id' else None
    everything='--all' in args
    con=sqlite3.connect(DB)
    problems=load_problems()
    os.makedirs(OUT,exist_ok=True)
    if everything:
        fm=build_fragmap(con,problems)
        bundle={}
        for p in problems:
            bundle[p['id']]=screen_one(con,p,fragmap=fm)
            print('.',end='',flush=True)
        print()
        json.dump(bundle,open(os.path.join(HERE,'baseline_20260929.json'),'w'),indent=1)
        print('wrote tools/baseline_20260929.json')
    else:
        sel=[p for p in problems if (ids and p['id'] in ids)]
        for p in sel:
            rec=screen_one(con,p)
            json.dump(rec,open(os.path.join(OUT,p['id']+'.json'),'w'),indent=1)
            print(p['id'],rec['tierEstimate'],'maxCont=',rec['maxContainment'],'exactHits=',len(rec['exactHits']))

if __name__=='__main__': main()
