import os, re, json, sqlite3, sys

DB=os.environ.get('CORPUS_DB','/tmp/kilo/corpus.db')
ROOT=os.environ.get('CORPUS_ROOT','/tmp/kilo')
os.path.exists(DB) and os.remove(DB)
con=sqlite3.connect(DB)
con.execute('CREATE TABLE chunks(id INTEGER PRIMARY KEY, src TEXT, ord INTEGER, raw TEXT, norm TEXT)')
con.execute('CREATE VIRTUAL TABLE fts USING fts5(norm, content=chunks, tokenize="unicode61 remove_diacritics 2")')

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

def chunks_for(src, text):
    out=[]
    parts=re.split(r'\n(?=(?:#{1,6}\s*)?(?:\*\*)?(?:problem|preliminary problem|shortlist)[\s:#]*(?:[\w\-]*\d+[\w\-]*)?[\.:\)]?(?:\*\*)?)', text, flags=re.I)
    if len(parts)<3:
        parts=[text]
    for p in parts:
        w=p.split()
        if not w: continue
        step,win=120,250
        i=0
        while i < len(w):
            out.append(' '.join(w[i:i+win]))
            if i+win>=len(w): break
            i+=step
    return out

n=0
def add(src, text):
    global n
    text=re.sub(r'\\tag\{[^}]*\}',' ',text)
    for ordk,ch in enumerate(chunks_for(src,text)):
        if len(ch)<60: continue
        nn=norm(ch)
        if len(nn)<40: continue
        con.execute('INSERT INTO chunks(src,ord,raw,norm) VALUES (?,?,?,?)',(src,ordk,ch,nn))
        n+=1
    con.commit()

# aimo markdown corpus
root='/tmp/kilo/aimo'
cnt_files=0
for dp,dn,fn in os.walk(root):
    if '/raw' in dp or 'segmented' in dp: continue
    for f in fn:
        if not f.endswith(('.md','.txt')): continue
        p=os.path.join(dp,f)
        try: t=open(p,encoding='utf-8',errors='ignore').read()
        except: continue
        if len(t)>5_000_000: t=t[:5_000_000]
        add('aimo:'+os.path.relpath(p,root), t)
        cnt_files+=1
# putnam
for f,tag in (('/tmp/kilo/putnam_problems.json','putnamparquet'),):
    for r in json.load(open(f)):
        add(tag+':'+r['id'], r['text'])
import csv
for r in csv.DictReader(open('/tmp/kilo/putnambench.csv')):
    add('putnambench:'+r['name'], r['informal_statement'])
# official SL pdf texts
for f in os.listdir('/tmp/kilo'):
    if f.startswith('txt_') and f.endswith('.txt'):
        t=open('/tmp/kilo/'+f,encoding='utf-8',errors='ignore').read()
        add('officialpdf:'+f,t)

con.execute("INSERT INTO fts(fts) VALUES('rebuild')")
print('files:',cnt_files,'chunks:',n)
con.execute('CREATE INDEX ix_src ON chunks(src)')
con.commit()
