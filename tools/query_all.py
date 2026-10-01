import sqlite3, json, re, collections, math, sys, os

DB = os.environ.get('CORPUS_DB', '/tmp/kilo/corpus.db')

GREEK = dict([('alpha','a'),('beta','b'),('gamma','g'),('delta','d'),('epsilon','e'),('varepsilon','e'),('zeta','z'),('eta','h'),('theta','th'),('iota','i'),('kappa','k'),('lambda','l'),('mu','m'),('nu','n'),('xi','x'),('pi','p'),('rho','r'),('sigma','s'),('tau','t'),('phi','f'),('varphi','f'),('chi','c'),('psi','y'),('omega','w'),('Gamma','G'),('Delta','D'),('Theta','Th'),('Lambda','L'),('Xi','X'),('Pi','P'),('Sigma','S'),('Phi','F'),('Psi','Y'),('Omega','W')])

def norm(t):
    t=t.lower()
    t=re.sub(r'\\(left|right|mathrm|text|textrm|operatorname|mathbb|mathcal|tfrac|dfrac|displaystyle|limits|quad|qquad|,|;|!|:)(\{[^}]*\})?',' ',t)
    t=re.sub(r'\\(geq|ge|geqq)',' >= ',t)
    t=re.sub(r'\\(leq|le|leqq)',' <= ',t)
    t=re.sub(r'\\(neq|ne)',' != ',t)
    t=re.sub(r'\\(cdot|times|ast)',' * ',t)
    t=re.sub(r'\\(frac)\{([^{}]*)\}\{([^{}]*)\}', r'( \2 ) / ( \3 ) ',t)
    t=re.sub(r'\\sqrt\[([^\]]*)\]\{([^{}]*)\}', r' root( \1 ) ( \2 ) ',t)
    t=re.sub(r'\\sqrt\{([^{}]*)\}', r' sqrt( \1 ) ',t)
    t=re.sub(r'\\(sqrt|sum|prod|int|gcd|lcm|lvert|rvert|vert|mid|pmod|bmod|pmod)',' \\1 ',t)
    for k,v in GREEK.items():
        t=re.sub(r'\\'+k+r'\b', ' '+v+' ', t)
    t=re.sub(r'\\[a-zA-Z]+',' ',t)
    t=re.sub(r'[{}()^_\[\]$*&\\|/,;:.?!\'"`=<>+-]',' ',t)
    t=re.sub(r'\s+',' ',t)
    return t.strip()

STOP=set('the a an of and or to for all is are be such that prove find determine let which with in on if there where when every any it its this these those show i i i i n k x y z s t u v w p q a b c d e f g h l m o r j'.split())

con=sqlite3.connect(DB)
cur=con.cursor()

def toks(t): return norm(t).split()

def bigrams(ts):
    return [' '.join(pair) for pair in zip(ts, ts[1:])]

# global df for bigrams sampling lazily per query (expensive); use token df from a sample table? do on the fly with count from fts match
def query_candidate(cid, text, topk=8):
    ts=toks(text)
    bs=sorted(set(bigrams(ts)), key=lambda b:-sum(ch.isdigit() for ch in b))
    # pick most distinctive bigrams: prefer ones with digits, then with rare long tokens
    def scoreb(b):
        w=b.split()
        s=0.0
        if any(x.isdigit() for x in w): s+=10
        s+=max(len(x) for x in w)
        return s
    bs=sorted(set(bigrams(ts)), key=scoreb, reverse=True)
    sel=bs[:20]
    # digit tokens must all appear? collect distinctive tokens
    qt=' OR '.join('"'+b.replace('"','')+'"' for b in sel)
    try:
        rows=cur.execute("SELECT c.src, c.raw, bm25(fts) s, fts.norm FROM fts JOIN chunks c ON c.id=fts.rowid WHERE fts MATCH ? ORDER BY s LIMIT 250",(qt,)).fetchall()
    except Exception as e:
        print('fts err', cid, e); return []
    cb=set(bigrams(ts)); ct=set(t for t in ts)
    out=[]
    for src, raw, s, nrm in rows:
        dt=set(nrm.split()); db=set(bigrams(nrm.split()))
        if not cb: continue
        cont=len(cb & db)/len(cb)
        tcont=len(ct & dt)/max(1,len(ct))
        out.append((src, cont, tcont, raw[:350]))
    out.sort(key=lambda r:-(r[1]*1.0 + 0.15*r[2]))
    return out[:topk]

if __name__=='__main__':
    probs=json.load(open('/tmp/kilo/problems.json'))
    results={}
    for p in probs:
        results[p['id']]={'cat':p['category'],'rating':p['rating'],'novelty':p.get('novelty'),'sourceNote':p.get('sourceNote'),'hits':query_candidate(p['id'], p['text'])}
        print('.', end='', flush=True)
    print()
    json.dump(results, open('/tmp/kilo/match_results.json','w'), indent=1)
