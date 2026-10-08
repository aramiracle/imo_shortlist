#!/usr/bin/env node
/* tools/verify.js — hard gates V0–V8 for the shipped public dataset.
 * Run after every edit to problems.js or the tools/ ledgers (METHODOLOGY.md §8.1).
 * ERROR = must fix before anything ships. WARN = recorded, non-blocking.
 * The validator checks ONLY what this repo ships: 4 categories x 25 problems,
 * public fields, and the waves/signatures ledgers. Since 2026-10-01 the numeric
 * `rating` (1–10, 0.5 steps, calibrated per METHODOLOGY §7) is a public field;
 * the remaining production-internal fields (answer, novelty, readiness,
 * proofStatus, sourceNote) must NOT appear in the public file — their absence
 * is itself a gate (V2). */
const fs = require('fs'), path = require('path'), vm = require('vm');
const repo = path.resolve(__dirname, '..');

let errs = [], warns = [];
const err = m => errs.push(m);
const warn = m => warns.push(m);

/* ---- load dataset (fail fast and loud) ---- */
let I, SRC = '';
try {
  const ctx = { window: {}, console }; vm.createContext(ctx);
  SRC = fs.readFileSync(path.join(repo, 'problems.js'), 'utf8');
  vm.runInContext(SRC, ctx);
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
  const BAND = { warmup: 1, easy: 2, medium: 3, hard: 4, challenging: 5 };
  const REQUIRED = ['id', 'category', 'difficulty', 'stars', 'rating', 'confidence', 'text', 'why', 'hints', 'steps'];
  const OPTIONAL = ['remark'];
  const INTERNAL = ['answer', 'novelty', 'readiness', 'proofStatus', 'sourceNote', 'status'];
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
  const BAND_RANGE = {};
  for (const s of I.scale || []) BAND_RANGE[s.id] = [s.min, s.max];
  for (const p of probs) {
    if (!(p.difficulty in BAND)) err(`V3 ${p.id}: difficulty "${p.difficulty}" not in {warmup,easy,medium,hard,challenging}`);
    else if (p.stars !== BAND[p.difficulty]) err(`V3 ${p.id}: stars ${p.stars} != band index of "${p.difficulty}" (${BAND[p.difficulty]})`);
    if (!['high', 'medium', 'low'].includes(p.confidence)) err(`V3 ${p.id}: confidence "${p.confidence}" not in {high,medium,low}`);
    if (!BAND_RANGE[p.difficulty]) continue; /* band check needs the label; V3 already flagged it */
    const r = p.rating;
    if (typeof r !== 'number' || !Number.isFinite(r)) { err(`V3 ${p.id}: rating must be a number`); continue; }
    if (Math.abs(r * 2 - Math.round(r * 2)) > 1e-9) err(`V3 ${p.id}: rating ${r} is not a multiple of 0.5`);
    if (r < 1 || r > 10) err(`V3 ${p.id}: rating ${r} outside 1–10`);
    if (r > 9.5) err(`V3 ${p.id}: rating ${r} above the 9.5 cap (10 is reserved for research level, §7)`);
    const [blo, bhi] = BAND_RANGE[p.difficulty];
    if (r < blo || r > bhi) err(`V3 ${p.id}: rating ${r} outside "${p.difficulty}" band ${blo}–${bhi}`);
  }

  /* V4 content: every card renders something; steps are the shipped solution path */
  for (const p of probs) {
    if (!str(p.text)) err(`V4 ${p.id}: empty text`);
    if (!str(p.why)) err(`V4 ${p.id}: empty why`);
    if (!nonEmptyArr(p.hints)) err(`V4 ${p.id}: needs >=1 non-empty hint`);
    if (!Array.isArray(p.steps) || p.steps.filter(str).length < 3) err(`V4 ${p.id}: needs >=3 non-empty steps`);
  }

  /* V5 order: ids are difficulty order inside a category (viewer relies on this);
   * where numeric ratings exist they must be non-decreasing along the same ids */
  for (const [pre, cat] of Object.entries(CAT)) {
    const ps = probs.filter(p => p.category === cat)
      .sort((x, y) => (+x.id.slice(1)) - (+y.id.slice(1)));
    for (let i = 1; i < ps.length; i++) {
      if ((BAND[ps[i].difficulty] || 0) < (BAND[ps[i - 1].difficulty] || 0))
        err(`V5 ${ps[i].id} (${ps[i].difficulty}) ordered below ${ps[i - 1].id} (${ps[i - 1].difficulty})`);
      if (typeof ps[i].rating === 'number' && typeof ps[i - 1].rating === 'number' && ps[i].rating < ps[i - 1].rating)
        err(`V5 ${ps[i].id} (rating ${ps[i].rating}) ordered below ${ps[i - 1].id} (rating ${ps[i - 1].rating})`);
    }
  }

  /* V6 markup safety — problems.js content is pure LaTeX, single backslashes in
   * String.raw`...` templates; the viewer injects every field through
   * escapeHtml() and MathJax is configured with $ / $$ delimiters only
   * (verified end-to-end against the page's CDN tex-mml-chtml bundle, 2026-10-08):
   *  a) content fields must be String.raw literals — a normal JS string eats
   *     single backslashes ("\lt" -> "lt", "\times" -> TAB+"imes");
   *  b) no HTML in the data file at all: no tags, no entities, no raw "<" or
   *     ">" — write \lt/\gt inside math;
   *  c) "$" delimiters must balance into $...$ / $$...$$ regions;
   *  d) "&" is legal in math only inside \begin{env}..\end{env};
   *  e) \( \) and \[ \] delimiters are disabled in the page config — banned
   *     (\\[4pt] row spacing inside environments is fine);
   *  f) no control chars (a backslash silently eaten by a non-raw string). */
  const NO_HTML = /<\/?[A-Za-z!?]|&(?:lt|gt|amp|quot|nbsp|#[A-Za-z0-9]+)(?:;|(?![A-Za-z0-9]))/;
  const CTRL = /[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/;
  const mathRegions = s => {
    const regs = []; let i = 0;
    while (i < s.length) {
      if (s[i] === '$' && s[i - 1] !== '\\') {
        if (s.startsWith('$$', i)) {
          const e = s.indexOf('$$', i + 2);
          if (e < 0) return null;
          regs.push([i, e + 2]); i = e + 2; continue;
        }
        const e = s.indexOf('$', i + 1);
        if (e < 0) return null;
        regs.push([i, e + 1]); i = e + 1; continue;
      }
      i++;
    }
    return regs;
  };
  for (const p of probs) {
    const fields = { text: p.text, why: p.why, remark: p.remark,
      steps: (p.steps || []).join('\n'), hints: (p.hints || []).join('\n') };
    for (const [f, v] of Object.entries(fields)) {
      if (typeof v !== 'string') continue;
      const dollars = (v.match(/(?<!\\)\$/g) || []).length;
      if (dollars % 2) err(`V6 ${p.id}.${f}: odd number of $ — unbalanced TeX`);
      if (CTRL.test(v)) {
        const i = v.search(CTRL);
        err(`V6 ${p.id}.${f}: control char U+0${v.charCodeAt(i).toString(16)} — backslash eaten by a JS string escape (content must be a String.raw\`...\` literal)`);
      }
      const h = v.match(NO_HTML);
      if (h) {
        const i = v.indexOf(h[0]);
        err(`V6 ${p.id}.${f}: HTML in data file "${h[0]}" — no HTML allowed; write \\lt/\\gt inside math: ${JSON.stringify(v.slice(Math.max(0, i - 24), i + 10))}`);
      }
      const regs = mathRegions(v);
      if (!regs) { err(`V6 ${p.id}.${f}: unbalanced $ region`); continue; }
      for (const [a, b] of regs) {
        const seg = v.slice(a, b);
        if (/(?<!\\)\\\(|(?<!\\)\\\)/.test(seg)) err(`V6 ${p.id}.${f}: \\( \\) delimiter in math — use $ $ (page config allows $ only)`);
        if (/(?<!\\)\\\[|(?<!\\)\\\]/.test(seg)) err(`V6 ${p.id}.${f}: \\[ \\] delimiter in math — use $$ $$ (page config allows $ only)`);
        const envSpans = [];
        for (const em of seg.matchAll(/\\begin\{[^}]*\}[\s\S]*?\\end\{[^}]*\}/g)) envSpans.push([em.index, em.index + em[0].length]);
        for (const am of seg.matchAll(/&/g))
          if (!envSpans.some(([x, y]) => am.index >= x && am.index < y))
            err(`V6 ${p.id}.${f}: bare & in math outside \\begin{env} — MathJax renders "Misplaced &": ${JSON.stringify(seg.slice(Math.max(0, am.index - 24), am.index + 16))}`);
      }
    }
  }
  /* source-level: content must live in String.raw`...` literals */
  for (const key of ['text', 'why', 'remark']) {
    const re = new RegExp(`"${key}":(?!\\s*String\\.raw\`)`, 'g');
    if (re.test(SRC)) err(`V6 problems.js: "${key}" is not a String.raw\`...\` literal — TeX backslashes need single-slash raw strings`);
  }
  {
    let inArr = null, inRaw = false;
    for (const line of SRC.split('\n')) {
      const ticks = ((line.match(/`/g) || []).length % 2) === 1;
      const trimmed = line.trim();
      if (!inRaw) {
        const start = trimmed.match(/"(hints|steps)":\s*\[/);
        if (start) { inArr = !/"(?:hints|steps)":\s*\[\s*\]/.test(trimmed); }
        else if (inArr && /^\]/.test(trimmed)) inArr = null;
        else if (inArr && trimmed && !/^String\.raw`/.test(trimmed)) {
          err(`V6 problems.js: a ${inArr} element is not a String.raw\`...\` literal: ${trimmed.slice(0, 40)}`);
          inArr = null;
        }
      }
      if (ticks) inRaw = !inRaw;
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

  /* V9 set stats (owner calibration constraint, METHODOLOGY §7): every category
   * (set of 25) must carry rating mean in [5, 5.5]. */
  for (const [, cat] of Object.entries(CAT)) {
    const rs = probs.filter(p => p.category === cat && typeof p.rating === 'number').map(p => p.rating);
    if (rs.length !== 25) { warn(`V9 ${cat}: only ${rs.length} numeric ratings, set stats not checked`); continue; }
    const m = rs.reduce((a, b) => a + b, 0) / rs.length;
    if (m < 5 || m > 5.5) err(`V9 ${cat}: rating mean ${m.toFixed(3)} outside 5–5.5`);
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
