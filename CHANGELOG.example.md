# CHANGELOG.example.md — required audit-log format

A production run maintains an append-only `CHANGELOG.md` in this format: every edit
to a problem's statement, proof, rating or verdict gets one entry, and nothing ships
without its entry. (The full 2026-09 production log — ~1,050 entries of set
correction, the 46-item redesign waves, calibration and the 2026-09-30 archive
prunes — was retained outside this repo at `../imo_shortlist.CHANGELOG.full-2026-09.md`
when the repo was reduced to the worked example; the public `problems.js` ships
without production-internal fields, and the waves/signature record lives in
`tools/waves.json` and `tools/signatures.json`.)

## Entry template

    ## <short title> (<YYYY-MM-DD>[, RUN-YYYYMMDD-NN])
    - **What & why**: field-level diff or verbatim before/after for math edits
      (statement, proof steps, answer, verdicts). Gaps found during repair state
      the concrete failure mode, e.g. "the a_1=1 branch was never considered".
    - **Verification**: machine check (`tools/proofs/<id>.cpp` + exit status),
      independent re-derivation note, evidence files (`tools/screens/<id>.json`).
    - **Ledgers**: waves/signatures/id-map updates applied by identity; old→new map.
    - **Gates**: `node tools/verify.js`: 0 errors, 0 warnings.

## Rules the log enforces

- One entry per problem per wave; **never batch silent edits**; honest gaps ("their
  before-text was not preserved — recorded rather than reconstructed") are written
  as gaps, not papered over.
- Rejected/falsified designs are logged as killed with evidence, not quietly dropped.
- Wording-only edits must say so and argue why the verified-proof rubric is
  unaffected (claim, quantifiers and all other fields unchanged).
- Renumber waves include the old→new id map; evidence artifacts keep their
  capture-time names so historical path strings stay interpretable.

## Example (real, abridged — a wording-only entry)

    ## c9 statement wording (2026-09-30): plain-residue phrases -> mod notation
    - **What & why**: c9's text now states hypotheses/conclusion with "≡ 1 (mod 3)"
      instead of "leaves remainder 1 upon division by 3". Wording-only: claim,
      quantifiers and all fields except `text` unchanged → verified rubric unaffected.
    - **Verification**: D-lane pack tools/screens/c9.json regenerated
      (D-clean(lane only), maxCont 0.167, 0 exact fragments).
    - **Gates**: node tools/verify.js: 0 errors, 0 warnings.
