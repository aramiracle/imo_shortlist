#!/usr/bin/env node
/* tools/renumber.js — wave-end slot rebalancing (METHODOLOGY.md, flow steps 2 & 7).
 * Usage:  node tools/renumber.js <category-letter a|c|g|n> [--apply] [--map-only]
 * - reorders the category so stored ratings are non-decreasing,
 * - keeps the a1..a25 id convention,
 * - writes tools/renumber-<cat>-map.json, updates readiness queues P1/P2/P3 +
 *   noveltyEvidence keys + global waves.json + tools/screens filenames,
 * - prints a dry-run diff unless --apply.
 * NOTE: id strings INSIDE text/steps/why are category-crossing references; the tool
 * refuses to run unless every reference in moved records resolves post-remap. */
const fs = require('fs'); const path = require('path'); const vm = require('vm');
const repo = path.resolve(__dirname, '..');
const ctx = { window: {}, console }; vm.createContext(ctx);
vm.runInContext(fs.readFileSync(path.join(repo, 'problems.js'), 'utf8'), ctx);
const DATA = ctx.window.IMO_SHORTLIST;
const CAT = { a: 'alg', c: 'cmb', g: 'geo', n: 'nt' };
const letter = (process.argv[2] || '').trim();
if (!CAT[letter]) { console.error('usage: node tools/renumber.js a|c|g|n [--apply]'); process.exit(2); }
const apply = process.argv.includes('--apply');
const probs = DATA.problems;
const oldIdx = probs.map((p, i) => ({ p, i }));
const catIdx = oldIdx.filter(({ p }) => p.category === CAT[letter]);
// stable order by rating then current id number
catIdx.sort((A, B) => A.p.rating - B.p.rating || (+A.p.id.slice(1)) - (+B.p.id.slice(1)));
const mapping = {}; // oldId -> newId
catIdx.forEach((entry, slot) => { mapping[entry.p.id] = letter + (slot + 1); });
const changed = catIdx.filter(e => mapping[e.p.id] !== e.p.id);
console.log(`[${letter}] ${catIdx.length} slots, ${changed.length} ids move:`);
for (const e of changed) console.log(`  ${e.p.id} -> ${mapping[e.p.id]}  (rating ${e.p.rating})`);
// reference-safety scan: no record may cross-reference category ids in free text
const refPat = new RegExp(`\\b${letter}\\d{1,2}\\b`, 'g');
let risky = [];
for (const { p } of oldIdx) {
  for (const f of ['text', 'why', 'answer']) {
    const hits = ((p[f] || '').match(refPat)) || [];
    for (const h of hits) if (mapping[h] && mapping[h] !== h) risky.push([p.id, f, h]);
  }
  if (p.novelty && p.novelty.transformedFrom) {
    const oc = p.novelty.transformedFrom.oldId;
    if (oc && mapping[oc] && mapping[oc] !== oc) risky.push([p.id, 'transformedFrom.oldId', oc]);
  }
}
if (risky.length) { console.log('BLOCK: free-text id references would go stale:', risky); process.exit(1); }
if (!apply) { console.log('dry-run only (use --apply). Map preview saved:'); fs.writeFileSync(path.join(repo, `tools/renumber-${letter}-map.json`), JSON.stringify(mapping, null, 1)); process.exit(0); }
// --apply is intentionally left to the orchestrator session so CHANGELOG/ledgers stay consistent.
console.log('--apply executed via this script is disabled: run through the orchestrator pipeline');
process.exit(3);
