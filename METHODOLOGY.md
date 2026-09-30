# METHODOLOGY — how this set is produced (and how to reproduce it)

Short version of the full protocol; the audit trail is an append-only
`CHANGELOG.md` per production run (this repo ships `CHANGELOG.example.md` with the
required entry format; the 2026-09 log is archived out-of-repo), and the machine
state is `problems.js → IMO_SHORTLIST.readiness`.
This supersedes the retired dated plans (PLAN.md 2026-09-27; the 2026-09-29
novelty census and transformation plan) — their durable rules are the steps below.

## The standard

Every problem carries three labels that are **never merged**:

| Axis | Field(s) | Bar |
|---|---|---|
| Difficulty | `rating` 1–10 (0.5 grid), `difficulty`, `stars`, `confidence` | how hard it is to find *and complete* a proof from scratch; `raw = 0.7·R_search + 0.3·R_proof` |
| Proof | `proofStatus` (+ `gapNote` when `hold`) | `verified` only when ALL 12 rubric items pass (file header): quantified statement, domain restrictions, denominators/degrees, legal substitutions, reversible implications where needed, equality cases, descent termination, induction bases, standard lemmas proved/cited, human-readable computations, exceptional cases, converse |
| Originality | `novelty` (+ `sourceNote` when `prior-art`) | ladder T0 unverified → T1/T1v/T2 (found/variant/suspect) → T3 screened-original → T4 original-source (**human-only**) |

Non-negotiable policy: a clean search is **never** proof of originality
(noSearchHitMeansOriginal: false); every cited source must have been physically
opened (H4 refetch); N and A lanes ≥8 independent queries each; no half-finished
wave is ever committed; mathematical repairs are one problem per turn.

## Flow of creation (per problem, in order)

1. **Corpus first.** Build the D-lane index once: fetch sources per
   `tools/corpus/README.md`, `python3 tools/build_index.py` (~187k chunks,
   `/tmp/kilo/corpus.db`).
2. **Design.** Pick a mechanism (M1 system coupling · M2 obstruction pairing ·
   M3 mismatched equality · M4 finite-field lift · M5 linear algebra mod p ·
   M6 spectral cyclic form · M7 composition degree-growth · M8 p-adic valuation ·
   M9 arithmetic-function identities · M10 counting upgrade · M11 matching games ·
   M12 discrete↔continuous bridge · M13 field-degree obstruction · M14 chip-firing
   winding · M15 polar duality · M16 CAS-certified identity — each a modern idea
   with a proven elementary collapse) + wrapper domain; one sentence to state,
   ≤2 pages to solve.
   Cosmetic-only changes (renaming, number swaps, vacuous hypotheses, re-skins)
   are auto-rejected: the redesign must break the old proof's first moves, the
   solution set, the question type, or the constraint geometry.
 3. **Solve before shipping.** Write the full solution, then a C++ machine-check
    harness `tools/proofs/<id>.cpp` — verification code is C++ for performance
    (exhaustive brute force / minimax / enumeration; the Python/Node tools are
    I/O-bound screening glue only). Build:
    `g++ -std=c++17 -O2 -Wall -Wextra -Werror tools/proofs/<id>.cpp -o tools/proofs/build/<id>`.
    Harness rules: exhaustive within stated bounds (sampling only with a fixed,
    printed seed); exact integer arithmetic with the overflow bound argued in the
    header comment; printed anchors for the smallest claimed cases; exit 0 only on
    full PASS; sources commit, binaries never. A failing harness kills the design;
    falsified drafts are archived.
4. **Seam test** (for reworks): OLD and NEW proofs side by side; pass only if
   the first 3 moves of OLD are false/dead for NEW; record the one-line `seam`.
5. **Screen** all three lanes: `python3 tools/screen.py --id <id>` (D-lane pack
   → `tools/screens/<id>.json`: exact TeX fragments, bigram containment ≤0.45
   clean bar, answer-signature FTS); `node tools/lanes.py <ids>` drives the
   StackExchange N-lane (exact form) and A-lane (paraphrase), ≥8 queries each;
   open every hit; set verdict T0–T3 + `residualRisk`.
6. **Register** the signature `(primary S-code, secondary, wrapper)` in
   `tools/signatures.json` — no (primary,secondary) pair twice in the set, and
   never the primary S-code of the problem's own known original.
7. **Rate & renumber.** Re-rate with the formula; keep within ±1.0 of the old
   band; renumber ids at wave boundaries only
   (`node tools/renumber.js <a|c|g|n> --apply`); human re-solve calibration
   (2026-09-30 pass) mapped per category via
   `rating = round0.5(5 + 1.8·(raw − mean_cat)/sd_cat)`, top cap 9.5.
8. **Gate & log.** `node tools/verify.js --strict` must be 0/0 (checks V1–V8:
   4×25 structure & id order, sourceNote⇔prior-art, answer+≥3 steps, seam &
   signature on reworks, ledger collisions, lane-query bars, human-only T4,
   waves cover 100); every proof/statement rewrite gets a before/after entry in
   `CHANGELOG.md` (format: `CHANGELOG.example.md`). Release = freeze
   (`proofStatus verified` append-only) +
   independent second-pass review re-derived from the file, not from memory.

Uniqueness/universality set-level rules: no method family >1/3 of a category,
each named technique family ≥3 uses with ≥1 hard-tier member; wrapper ≤5×;
mechanism as primary engine ≤4 problems; answer-type ladder complete.

## Small example — the minimum a shipped entry needs

Real entry, abridged (n13, a wave-3 rework of a standard course exercise):

```js
{ id: "n13", category: "nt", rating: 4.5, difficulty: "medium", stars: 2,
  confidence: "high", proofStatus: "verified",
  text: "Let p be an odd prime … N(a) = #{(x,y) : x²+axy+y² ≡ 1 (mod p)}.
         Determine the sum of N(a) over all a.",          // one-sentence claim
  answer: "(p+1)²",
  why: "counting triples (a,x,y) by fixing (x,y) first makes the equation linear in a …",
  steps: [ /* ≥3 ordered hints, added only after the proof cleared the rubric */ ],
  novelty: {
    status: "screened", searchDate: "2026-09-30", exactMatch: false,
    similarSources: [ /* what WAS found — here: classical per-conic counts */ ],
    lanesComplete: false, verdict: "T3-pending",
    laneSummary: { N: "…queries, clean…", A: "…", D: "corpus FTS 3 combos: 0 hits" },
    transformedFrom: { knownCore: "x²≡−1 (mod n) root-counting exercise",
                       frozenIn: "CHANGELOG.md 2026-09-29" },
    seam: "no root counting at all: fix (x,y) first — equation is LINEAR in a; …",
    signature: "S20+M4",
    residualRisk: "low: per-conic counts are standard; aggregate form unprobed-hit" } }
```

That entry's surrounding artifacts: `tools/proofs/n13.cpp` (C++ machine check —
the identity verified exhaustively for all odd primes p ≤ 23, exit-0 on PASS),
`tools/screens/n13.json` (D-lane
evidence pack), `tools/signatures.json` (`S20+M4`, status confirmed, wave W3),
and a before/after `CHANGELOG.md` entry (format shown by `CHANGELOG.example.md`).
A new problem must be able to produce
all of these; anything missing keeps it at T0/`unaudited`.

*(Only this example pair ships with the repo — the 2026-09 run's full evidence
archive (`tools/screens/`, `tools/proofs/`, baselines, lane-run logs) and the
77 KB production `CHANGELOG.md` were pruned
on 2026-09-30 once their per-problem results were recorded in `problems.js`
metadata; regenerate them for your own set with the
step-5 commands.)*
