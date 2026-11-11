# IMO Shortlist — Problem Set

A 100-problem olympiad mathematics collection across Algebra (`A1–A25`), Combinatorics (`C1–C25`), Geometry (`G1–G25`), and Number Theory (`N1–N25`), graded from `Warm-up` to `Challenging` (`1.5–9.5`) with progressive hints, step-by-step proofs, mathematical commentary, and prior-art screening tools.

## Quick Start

### View the problem set

No build step is required. Open `imo_shortlist.html` directly in a browser, or serve the directory locally:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000/imo_shortlist.html` (requires internet access for CDN MathJax 3 and web fonts).

### Validate the dataset

Run the verification suite (`V0–V9`) after any edit to `problems.js` or `tools/*.json`:

```bash
node tools/verify.js
```

This checks the `4 × 25` category structure, field schema, difficulty ordering and rating bounds, LaTeX/`String.raw` markup safety, and ledger consistency.

## Repository Layout

```text
imo_shortlist.html     Static browser viewer
app.js                 UI rendering, filtering, and on-demand MathJax typesetting
problems.js            Public 100-problem dataset (window.IMO_SHORTLIST)
METHODOLOGY.md         Design rules, 12-item proof rubric, screening lanes, and gates
REPORT.md              Problem-by-problem evaluation and prior-art audit
CHANGELOG.example.md   Entry template for dataset and proof updates
tools/
  verify.js            Hard dataset and ledger validator (V0–V9)
  renumber.js          Category slot rebalancer by difficulty rating
  build_index.py       SQLite FTS5 corpus builder (see tools/corpus/README.md)
  query_all.py         Corpus n-gram and containment search helper
  screen.py            Automated D-lane corpus screening script
  lanes.py             N/A-lane StackExchange prior-art query runner
  waves.json           Redesign/screening wave ledger (W1–W4)
  signatures.json      Mechanism-pair signature ledger
  proofs/              Standalone C++17 verification harnesses
```

## Verification Harnesses & Screening

- **C++ harnesses:** Compile and run exhaustive checks under `tools/proofs/`:
  ```bash
  mkdir -p tools/proofs/build
  g++ -std=c++17 -O2 -Wall -Wextra -Werror tools/proofs/n13.cpp -o tools/proofs/build/n13
  ./tools/proofs/build/n13
  ```
- **Prior-art corpus:** Instructions for rebuilding the local SQLite FTS5 olympiad corpus (`$CORPUS_DB`) and running `screen.py` / `lanes.py` are in [`tools/corpus/README.md`](tools/corpus/README.md).

## Documentation

- [`METHODOLOGY.md`](METHODOLOGY.md) — Full authoring workflow, schema contract, difficulty calibration, and human/machine gates.
- [`REPORT.md`](REPORT.md) — Independent audit of mathematical quality, difficulty calibration, and prior-art eligibility across all 100 problems.
