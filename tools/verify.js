#!/usr/bin/env node
/* tools/verify.js — hard gates V0–V8 for the shipped public dataset.
 * Run after every edit to problems.js or the tools/ ledgers (METHODOLOGY.md §8.1).
 * ERROR = must fix before anything ships. WARN = recorded, non-blocking.
 * The validator checks ONLY what this repo ships: 4 categories x 25 problems,
 * public fields, and the waves/signatures ledgers. Production-internal fields
 * (rating, answer, novelty, readiness, proofStatus, sourceNote) must NOT appear
 * in the public file — their absence is itself a gate (V2). */
const fs = require('fs'), path = require('path'), vm = require('vm');
const repo = path.resolve(__dirname, '..');

let errs = [], warns = [];
const err = m => errs.push(m);
const warn = m => warns.push(m);

/* ---- load dataset (fail fast and loud) ---- */
let I;
try {
  const ctx = { window: {}, console }; vm.createContext(ctx);
  vm.runInContext(fs.readFileSync(path.join(repo, 'problems.js'), 'utf8'), ctx);
  I = ctx.window.IMO_SHORTLIST;
} catch (e) { err(`V0 problems.js failed to load: ${e.message}`); }
if (!I) { report(); process.exit(1); }
if (!Array.isArray(I.problems)) err('V0 problems.js: `problems` is not an array');
if (!Array.isArray(I.categories)) err('V0 problems.js: `categories` is not an array');
if (!I.criterion) err('V0 problems.js: missing `criterion` (the difficulty claim this set makes)');
if (!errs.length) check(I);
report();
process.exit(errs.length ? 1 : 0);

/* ---- gates ---- */
function check(I) {
  const probs = I.problems;
  const CAT = { a: 'alg', c: 'cmb', g: 'geo', n: 'nt' };
  const BAND = { easy: 1, medium: 2, hard: 3, challenging: 4 };
  const REQUIRED = ['id', 'category', 'difficulty', 'stars', 'confidence', 'text', 'why', 'hints', 'steps'];
  const OPTIONAL = ['remark'];
  const INTERNAL = ['rating', 'answer', 'novelty', 'readiness', 'proofStatus', 'sourceNote', 'status'];
  const ALLOWED = new Set([...REQUIRED, ...OPTIONAL]);
  const catIds = new Set(I.categories.map(c => c.id));

  /* V1 structure: 4x25, ids exactly a1..a25 etc. in order, prefix matches category */
  for (const cat of catIds) {
    if (!Object.values(CAT).includes(cat)) err(`V1 unknown category id "${cat}" in categories`);
  }
  for (const [pre, cat] of Object.entries(CAT)) {
    const ps = probs.filter(p => p.category === cat);
    if (ps.length !== 25) err(`V1 ${cat}: ${ps.length} problems, expected 25`);
    ps.forEach((p, i) => {
      const want = pre + (i + 1);
      if (p.id !== want) err(`V1 ${cat}: slot ${i + 1} has id ${p.id}, expected ${want}`);
    });
  }
  const seen = new Set();
  for (const p of probs) {
    if (seen.has(p.id)) err(`V1 duplicate id ${p.id}`);
    seen.add(p.id);
  }

  /* V2 field contract: required present, no strays, no internal-production fields leaked */
  for (const p of probs) {
    for (const f of REQUIRED) {
      if (!(f in p)) err(`V2 ${p.id}: missing required field "${f}"`);
    }
    for (const f of Object.keys(p)) {
      if (INTERNAL.includes(f)) err(`V2 ${p.id}: internal field "${f}" leaked into the public dataset`);
      else if (!ALLOWED.has(f)) err(`V2 ${p.id}: field "${f}" is outside the contract`);
    }
  }

  /* V3 labels: enums + stars == band index (difficulty and stars must agree) */
  for (const p of probs) {
    if (!(p.difficulty in BAND)) err(`V3 ${p.id}: difficulty "${p.difficulty}" not in {easy,medium,hard,challenging}`);
    else if (p.stars !== BAND[p.difficulty]) err(`V3 ${p.id}: stars ${p.stars} != band index of "${p.difficulty}" (${BAND[p.difficulty]})`);
    if (!['high', 'medium', 'low'].includes(p.confidence)) err(`V3 ${p.id}: confidence "${p.confidence}" not in {high,medium,low}`);
  }

  /* V4 content: every card renders something; steps are the shipped solution path */
  for (const p of probs) {
    if (!str(p.text)) err(`V4 ${p.id}: empty text`);
    if (!str(p.why)) err(`V4 ${p.id}: empty why`);
    if (!nonEmptyArr(p.hints)) err(`V4 ${p.id}: needs >=1 non-empty hint`);
    if (!Array.isArray(p.steps) || p.steps.filter(str).length < 3) err(`V4 ${p.id}: needs >=3 non-empty steps`);
  }

  /* V5 order: ids are difficulty order inside a category (viewer relies on this) */
  for (const [pre, cat] of Object.entries(CAT)) {
    const ps = probs.filter(p => p.category === cat)
      .sort((x, y) => (+x.id.slice(1)) - (+y.id.slice(1)));
    for (let i = 1; i < ps.length; i++)
      if ((BAND[ps[i].difficulty] || 0) < (BAND[ps[i - 1].difficulty] || 0))
        err(`V5 ${ps[i].id} (${ps[i].difficulty}) ordered below ${ps[i - 1].id} (${ps[i - 1].difficulty})`);
  }

  /* V6 markup safety: balanced $...$ TeX spans; no raw "<" outside real HTML tags
   * in fields the viewer renders unescaped (text, steps) — a stray "<" is eaten
   * by the browser and silently corrupts the statement (write &lt; in math). */
  const TAG = /<\/?(?:ol|ul|li|br|p|b|i|em|strong|sup|sub|span|code)\b[^>]*>/g;
  for (const p of probs) {
    const fields = { text: p.text, steps: (p.steps || []).join('\n'), hints: (p.hints || []).join('\n') };
    for (const [f, v] of Object.entries(fields)) {
      if (typeof v !== 'string') continue;
      const dollars = (v.match(/(?<!\\)\$/g) || []).length;
      if (dollars % 2) err(`V6 ${p.id}.${f}: odd number of $ — unbalanced TeX`);
    }
    for (const f of ['text', 'steps']) {
      const raw = f === 'steps' ? (p.steps || []).join('\n') : String(p[f] || '');
      const cleaned = raw.replace(TAG, '').replace(/&lt;|&gt;/g, '');
      const at = cleaned.indexOf('<');
      if (at >= 0) err(`V6 ${p.id}.${f}: raw "<" outside a known tag (write &lt;): ${JSON.stringify(cleaned.slice(Math.max(0, at - 24), at + 4))}`);
    }
  }

  /* V7 waves ledger: W1..W4 partition the 100 ids exactly (no dupes, no gaps) */
  const waves = loadJSON('tools/waves.json');
  if (waves) {
    const cover = ['W1', 'W2', 'W3', 'W4'].flatMap(k => waves[k] || []);
    const set = new Set(cover);
    if (cover.length !== set.size) err('V7 waves.json: a problem id appears in two waves');
    if (set.size !== probs.length) err(`V7 waves.json covers ${set.size}/${probs.length} ids`);
    for (const id of set) if (!seen.has(id)) err(`V7 waves.json: unknown id ${id}`);
    for (const p of probs) if (!set.has(p.id)) err(`V7 ${p.id} assigned to no wave`);
  }

  /* V8 signature ledger: keys subset of ids; no (primary,secondary) pair twice
   * among planned/confirmed records (screen-extract entries are legacy, exempt) */
  const sigs = loadJSON('tools/signatures.json');
  if (sigs) {
    const items = sigs.items || {};
    for (const id of Object.keys(items)) if (!seen.has(id)) err(`V8 signatures.json: unknown id ${id}`);
    const pair = new Map();
    for (const [id, s] of Object.entries(items)) {
      if (s.status === 'screen-extract') continue;
      if (!['planned', 'confirmed', 'hold'].includes(s.status)) warn(`V8 ${id}: signature status "${s.status}" unrecognized`);
      const k = [s.primary, s.secondary || '-'].join('+');
      if (pair.has(k)) err(`V8 signature collision: ${id} and ${pair.get(k)} share (${k})`);
      pair.set(k, id);
    }
  }
}

function str(v) { return typeof v === 'string' && v.trim() !== ''; }
function nonEmptyArr(a) { return Array.isArray(a) && a.filter(str).length > 0; }
function loadJSON(rel) {
  try { return JSON.parse(fs.readFileSync(path.join(repo, rel), 'utf8')); }
  catch (e) { err(`ledger ${rel}: ${e.message}`); return null; }
}
function report() {
  for (const w of warns) console.log('WARN ', w);
  for (const e of errs) console.log('ERROR', e);
  console.log(`verify.js: ${errs.length} errors, ${warns.length} warnings`);
}
