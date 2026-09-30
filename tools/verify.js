#!/usr/bin/env node
/* tools/verify.js — hard gates V1-V8 (METHODOLOGY.md, flow step 8).
 * ERROR = must fix before wave exit. WARN = recorded, deferred (e.g. renumbering
 * happens only at wave boundaries, so mid-wave rating order may lag). */
const fs=require('fs'),path=require('path'),vm=require('vm');
const repo=path.resolve(__dirname,'..');
const ctx={window:{},console};vm.createContext(ctx);
vm.runInContext(fs.readFileSync(path.join(repo,'problems.js'),'utf8'),ctx);
const I=ctx.window.IMO_SHORTLIST;
const probs=I.problems;
const waves=JSON.parse(fs.readFileSync(path.join(repo,'tools/waves.json'),'utf8'));
const sigs=JSON.parse(fs.readFileSync(path.join(repo,'tools/signatures.json'),'utf8'));
const CAT={a:'alg',c:'cmb',g:'geo',n:'nt'};
let errs=[],warns=[];
const bandOf=r=>r<4?'easy':r<6?'medium':r<8?'hard':'challenging';

// V1a structure
for(const [pre,cat] of Object.entries(CAT)){
  const ps=probs.filter(p=>p.category===cat);
  const want=Array.from({length:25},(_,i)=>pre+(i+1));
  if(ps.length!==25) errs.push(`V1 ${cat}: ${ps.length} problems`);
  ps.forEach((p,i)=>{ if(p.id!==want[i]) errs.push(`V1 ${cat}: id order ${p.id} expected ${want[i]}`); });
}
// V1b monotonicity (WARN mid-wave, ERROR at wave exit with --strict)
const strict=process.argv.includes('--strict');
for(const [pre,cat] of Object.entries(CAT)){
  const ps=probs.filter(p=>p.category===cat);
  for(let i=1;i<ps.length;i++) if(ps[i].rating<ps[i-1].rating-1e-9){
    const m=`V1b order: ${ps[i].id}(${ps[i].rating}) < ${ps[i-1].id}(${ps[i-1].rating})`;
    strict?errs.push(m):warns.push(m);
  }
}
// V1c difficulty derived from rating
for(const p of probs) if(p.difficulty!==bandOf(p.rating))
  warns.push(`V1c ${p.id}: difficulty ${p.difficulty} vs rating ${p.rating} → ${bandOf(p.rating)}`);
// V2 sourceNote <=> prior-art
for(const p of probs){
  const st=(p.novelty||{}).status;
  if(st==='prior-art' && !p.sourceNote) errs.push(`V2 ${p.id}: prior-art without sourceNote`);
  if(st!=='prior-art' && p.sourceNote) errs.push(`V2 ${p.id}: sourceNote on status=${st}`);
}
// V3 answer + steps completeness
for(const p of probs){
  if(!p.answer||!String(p.answer).trim()) errs.push(`V3 ${p.id}: missing answer`);
  if(!Array.isArray(p.steps)||p.steps.length<3) errs.push(`V3 ${p.id}: steps<3`);
}
// V4 transformed => seam && signature && verdict recorded
for(const p of probs){
  const nv=p.novelty||{};
  if(nv.transformedFrom){
    if(!nv.seam) errs.push(`V4 ${p.id}: transformed without seam`);
    if(!nv.signature) errs.push(`V4 ${p.id}: transformed without signature`);
    const v=(p.readiness||{}).novelty||{};
    if(!v.verdict||v.verdict==='T0') errs.push(`V4 ${p.id}: transformed but verdict ${v.verdict}`);
  }
}
// V5 signature pair collisions (planned/confirmed entries only)
const pair=new Map();
for(const [id,s] of Object.entries(sigs.items||{})){
  if(s.status==='screen-extract') continue;
  const k=[s.primary,s.secondary||'-'].join('+');
  if(pair.has(k)) errs.push(`V5 collision: ${id} and ${pair.get(k)} share (${k})`);
  pair.set(k,id);
}
const recPair=new Map();
for(const p of probs){
  const nv=p.novelty||{};
  if(nv.transformedFrom && nv.signature && !sigs.items[p.id])
    warns.push(`V5 ${p.id}: signature in problems.js not mirrored in tools/signatures.json`);
  if(typeof nv.signature==='string'){
    if(recPair.has(nv.signature)) errs.push(`V5 record collision: ${p.id} and ${recPair.get(nv.signature)} share string ${nv.signature}`);
    recPair.set(nv.signature,p.id);
    const li=(sigs.items||{})[p.id];
    if(li&&li.status==='confirmed'&&li.raw&&li.raw!==nv.signature)
      errs.push(`V5 drift ${p.id}: record ${nv.signature} != ledger ${li.raw}`);
  }
}
// V6 T3 lanes
for(const p of probs){
  const v=((p.readiness||{}).novelty)||{};
  if(v.verdict==='T3'){
    for(const lane of ['N','A','D']){
      const s=String(v.lanes&&v.lanes[lane]||'not-recorded');
      const ok = lane==='D' ? /screen pack|evidence-present/.test(s)
                            : /not-recorded/.test(s)===false && +(((s.match(/(\d+)\s*queries/)||[])[1])||0)>=8;
      if(!ok) errs.push(`V6 ${p.id}: T3 but lane ${lane}="${s}"`);
    }
  }
}
// V7 original-source requires human approval marker
for(const p of probs){
  if(((p.novelty||{}).status)==='original-source' && !((p.readiness||{}).novelty||{}).humanApproved)
    errs.push(`V7 ${p.id}: original-source without humanApproved`);
}
// V8 plan + baseline + waves coverage partition exactly the 100
{
  const cover=[...(waves.W1||[]),...(waves.W2||[]),...(waves.W3||[]),...(waves.W4||[])];
  const set=new Set(cover);
  if(cover.length!==100||set.size!==100) errs.push(`V8 waves cover ${set.size}/100 (dupes or gaps)`);
  for(const p of probs) if(!set.has(p.id)) errs.push(`V8 ${p.id} not assigned to any wave`);
}
for(const w of warns) console.log('WARN ',w);
for(const e of errs) console.log('ERROR',e);
console.log(`verify.js: ${errs.length} errors, ${warns.length} warnings ${strict?'(--strict)':''}`);
process.exit(errs.length?1:0);
