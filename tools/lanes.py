#!/usr/bin/env python3
# tools/lanes.py — N/A lane completion driver (METHODOLOGY.md, §6).
# For each transformed record with lanesComplete=false, runs the SE daily-reset
# quota on 8 exact-form (N) + 8 paraphrase (A) queries, prints verdicts for
# orchestrator review, and NEVER edits problems.js itself.
import json, subprocess, sys, time, urllib.request, urllib.parse, html, os

HERE = os.path.dirname(os.path.abspath(__file__))
REPO = os.path.dirname(HERE)

def problems():
    js = 'global.window={};require(process.argv[1]);const P=window.IMO_SHORTLIST.problems.map(p=>({id:p.id,t:p.text,n:p.novelty||{}}));process.stdout.write(JSON.stringify(P));'
    out = subprocess.run(['node', '-e', js, os.path.join(REPO, 'problems.js')], capture_output=True, text=True, check=True)
    return json.loads(out.stdout)

def se(q):
    url = 'https://api.stackexchange.com/2.3/search/advanced?order=desc&sort=relevance&pagesize=4&site=math&q=' + urllib.parse.quote(q)
    d = json.loads(urllib.request.urlopen(url, timeout=25).read())
    return d.get('quota_remaining'), d.get('quota', 'err'), [html.unescape(i['title']) + ' :: ' + i['link'] for i in d.get('items', [])]

def variants(p):
    import re
    body = re.sub(r'<[^>]+>', ' ', p['t'])
    body = re.sub(r'\$+', ' ', body)
    words = re.findall(r'[A-Za-z]{3,}|[\w\^\+\-\*\[\]\{\}\\/()=0-9]{8,}', body)
    core = [w for w in words if any(ch.isdigit() or ch in '^=+\\' for ch in w) or len(w) > 7]
    qN = ['"' + w.replace('"', '') + '"' for w in dict.fromkeys(core[:6])]
    qN += [' '.join(dict.fromkeys(words[:7])), ' '.join(dict.fromkeys(words[-8:]))]
    gN = []
    for k in (12, 9, 7, 5):
        for i in range(0, max(1, len(words) - k + 1), 3):
            g = ' '.join(words[i:i+k])
            if g.strip() and g not in gN: gN.append(g)
            if len(gN) >= 6: break
        if len(gN) >= 6: break
    for g in gN:
        if len(qN) >= 8: break
        qN.append(g)
    qN = list(dict.fromkeys(q for q in qN if q.strip()))[:8]
    alpha = [w for w in words if w.isalpha()]
    qA = [' '.join(dict.fromkeys(alpha))[:70],
          'math olympiad ' + ' '.join(core[:3]),
          'find all ' + ' '.join(dict.fromkeys(words[2:9])),
          'prove ' + ' '.join(dict.fromkeys(words[-9:-1])),
          ' '.join(core[1:5]) + ' equality',
          'characterize ' + ' '.join(words[4:11]),
          ('functional equation ' + ' '.join(core[:2])) if 'f(' in body else ('polynomial ' + ' '.join(core[:2])),
          ' '.join(sorted(set(words))[:9])]
    gA = [' '.join(dict.fromkeys(alpha[i:i+8])) for i in range(0, max(1, len(alpha)-6), 4)]
    for g in gA:
        if len(qA) >= 12: break
        qA.append(g)
    qA = list(dict.fromkeys(q for q in qA if q.strip()))[:8]
    return qN, qA

def main():
    ids = sys.argv[1:]
    P = problems()
    if not any(p['n'] for p in P):
        print('Nothing to do: the N/A web-lane driver targets transformed records in the '
              'production dataset (per-problem `novelty` ledgers). The public problems.js '
              'ships without them; its screening record lives in METHODOLOGY.md + the ledger files.')
        return
    pend = [p for p in P if p['n'].get('transformedFrom') and not p['n'].get('lanesComplete')]
    if ids:
        pend = [p for p in pend if p['id'] in ids]
        unknown = set(ids) - {p['id'] for p in P}
        if unknown: print('unknown ids (skipped):', ' '.join(sorted(unknown)))
    report = []
    for p in pend:
        qN, qA = variants(p)
        rows = []
        stop = False
        for lane, qs in (('N', qN), ('A', qA)):
            for q in qs:
                try:
                    rem, tot, hits = se(q)
                except Exception as e:
                    body = ''
                    try: body = e.read().decode()[:120]
                    except Exception: pass
                    rows.append((lane, q, 'ERR', (str(e) + ' ' + body)[:60]))
                    stop = ('quota' in str(e).lower() or 'quota' in body or 'throttle' in body or 'too many requests' in body)
                    break
                rows.append((lane, q, len(hits), ' | '.join(h[:70] for h in hits[:2])))
                if rem is not None and rem <= 1:
                    stop = True; break
                time.sleep(1.1)
            if stop: break
        report.append({'id': p['id'], 'rows': rows, 'truncated': stop})
        print('###', p['id'], '(truncated)' if stop else 'complete')
        for lane, q, n, hits in rows:
            print(f'  {lane} n={n} | {q[:58]} | {hits[:100]}')
        if stop:
            break
    json.dump(report, open(os.path.join('tools','lanes-run-' + time.strftime('%Y%m%d-%H%M') + '.json'), 'w'), indent=1)
    print('saved lanes-run json; orchestrator: review hits, then set lanesComplete per item')

if __name__ == '__main__':
    main()
