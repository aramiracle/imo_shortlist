# Corpus (D-lane) — rebuild notes

The screening corpus (~230 MB text, SQLite FTS5 at `$CORPUS_DB`, default
`/tmp/kilo/corpus.db`) is intentionally NOT committed. Rebuild:

1. `GIT_LFS_SKIP_SMUDGE=1 git clone --depth 1 https://huggingface.co/datasets/AI-MO/olympiads aimo`
   — ~32k markdown/txt files: full IMO Compendium (IMO + shortlists 1959–2004),
   IMO/SL 2006–2023, ~45 national & regional contests, USAMO/TST/TSTST, HMMT,
   Baltic Way, Kürschák/Croatian/Serbian/etc. (English md where present).
2. Putnam: `https://huggingface.co/datasets/eef123/putnam_archive` (1995–2024,
   parquet) + PutnamBench informal statements (`amitayusht/PutnamBench/putnam.csv`).
3. Official shortlist PDFs 2006–2009, 2011–2024 from `imo-official.org/problems/IMO{Y}SL.pdf`
   → `pdftotext`. (2025 shortlist not yet posted as of 2026-09-29.)
4. Build: `python3 ../build_index.py` (chunking + normalization + FTS5; ~11 min, 187k chunks).
5. Optional (China TST/CMO coverage is thin): `aimo/China` holds LFS pointers only;
   real files via `curl -L https://huggingface.co/datasets/AI-MO/olympiads/resolve/main/<path>`.

Known gaps carried into every screening decision: AIME/AMC, China (TST), Korea,
Japan, Turkey, Poland, journal problem columns, printed books beyond the Compendium.
Per repo policy, a clean D-lane is evidence recorded, never a novelty proof.
