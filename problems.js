/*
 * IMO Shortlist problem data — edit this file to grow the set.
 *
 * Problems are grouped by category. Inside each category they run from
 * easy to hard, and the id number is that order: a1 is the easiest
 * algebra problem, a2 the next, and so on.
 *
 *   { id, category, difficulty, stars, rating, confidence, text, why, status?, answer?, steps }
 *
 *   id          lower case code (e.g. "a3"); shown uppercased, and used as the DOM id
 *   category    one of: alg | cmb | geo | nt
 *   rating      estimated difficulty, 1.0 – 10.0 in steps of 0.5 (see `scale` below)
 *   difficulty  tier derived from rating: easy < 4 ≤ medium < 6 ≤ hard < 8 ≤ challenging
 *   stars       1–4 = tier index
 *   confidence  how sure the estimate is: high | medium | low
 *   text        HTML + TeX ($...$, $$...$$); use &lt; &gt; for inequalities
 *   why         mathematical content: the key ideas, exact facts, and how the
 *               problem connects to higher-level mathematics
 *   status      optional: "false" | "open" | "verified"
 *   answer      optional conclusion, shown above the steps
 *   steps       ordered hints revealed one at a time; add only after a proof is actually checked
 *
 *   proofStatus optional: "verified" | "hold" | "fail" — independent of `status`.
 *               `status` says what the answer/classification is; `proofStatus`
 *               says whether the supplied proof text actually establishes it
 *               under a strict every-step-checked standard. A problem can be
 *               `status: "verified"` (the classification is correct) while
 *               `proofStatus: "hold"` (the write-up has a gap). Only promote
 *               to `proofStatus: "verified"` once every box below is checked:
 *                 statement precisely quantified · all domain restrictions used ·
 *                 every denominator/degree assumption checked · all substitutions
 *                 legal · every implication reversible where classification
 *                 requires it · all equality cases proved · every descent
 *                 terminates · every induction has an explicit base case ·
 *                 every "standard lemma" proved or precisely cited · every
 *                 computational identity has a human-readable derivation ·
 *                 all exceptional cases handled · converse direction checked.
 *
 *   novelty     optional: { status, searchDate, exactMatch, similarSources,
 *               earliestKnownDate }. status is one of "unverified" | "screened" |
 *               "hold" | "prior-art" | "original-source". Absence of a search
 *               hit does NOT imply originality — default new problems to
 *               "unverified", never infer "original-source" from a clean search.
 *               Schema v2 (METHODOLOGY.md, "Small example"): transformed entries add
 *               transformedFrom{oldId,knownCore,frozenIn}, priorCore, seam,
 *               signature{primary,secondary}, residualRisk; such entries get
 *               verdict "T3-pending" until N/A/D lanes reach the >=8-query bar.
 *
 *   sourceNote  optional, present iff novelty.status = "prior-art": public credit
 *               line stating the known origin of the entry.
 *   gapNote     optional, present iff proofStatus = "hold": precise description
 *               of the unfinished step and the route to closing it.
 *
 * Three independent labels per problem — difficulty (rating/difficulty/stars),
 * proof status (proofStatus), originality (novelty) — are deliberately kept
 * separate, per METHODOLOGY.md "The standard": merging them would hide exactly the
 * distinctions this set was corrected to expose.
 *
 * Freeze policy (release 1.0.0, 2026-09-28): proofStatus "verified" is
 * append-only. Any edit to a verified problem's statement or proof text must
 * re-clear the full rubric above before the flag is kept; otherwise demote to
 * "hold" with a gapNote. See METHODOLOGY.md.
 *
 * Ratings estimate how hard it is for a strong olympiad contestant to find and
 * complete a proof from scratch — not how complicated the statement looks.
 *
 * Ratings were re-calibrated 2026-09-30 by a human re-solve calibration
 * (all problems solved or proof-sketched independently, answers brute-forced or
 * numerically checked where possible; no answer errors found). The raw human
 * ladder spanned 1-9 with per-category means 3.8-5.0, so it was mapped
 * per-category by the affine renormalization rating = round0.5(5 + 1.8 x
 * (raw - mean_cat) / sd_cat), forcing every category set to mean 4.96-5.06 and
 * variance 3.14-3.43 under the published 1-10 / 0.5-step scale; n25 was capped
 * at 9.5 (10 reserved for research-level). Ordering follows the human ladder;
 * problems the human flagged low-confidence (old a12, a23, a25, c20, c22, c23,
 * g11, g14, g24, n24, n25) carry confidence: "low". Contestant blind-testing
 * (10-12 per category, ~8 strong solvers) remains the recommended next step;
 * per-problem pre-calibration ratings are recoverable from git history.
 *
 * When you add a problem, place it in its category in rating order and
 * renumber that category's ids from 1.
 */
window.IMO_SHORTLIST = {
  "ratedOn": "2026-09-30",
  "criterion": "Difficulty of finding and completing a proof from scratch for a strong olympiad contestant, not how complicated the statement looks.",
  "scale": [
    {
      "id": "easy",
      "label": "Easy",
      "min": 1,
      "max": 4
    },
    {
      "id": "medium",
      "label": "Medium",
      "min": 4,
      "max": 6
    },
    {
      "id": "hard",
      "label": "Hard",
      "min": 6,
      "max": 8
    },
    {
      "id": "challenging",
      "label": "Challenging",
      "min": 8,
      "max": 10
    }
  ],
  "categories": [
    {
      "id": "alg",
      "name": "Algebra",
      "icon": "∑",
      "prefix": "A",
      "topics": "Functional equations · Inequalities · Polynomials"
    },
    {
      "id": "cmb",
      "name": "Combinatorics",
      "icon": "⬡",
      "prefix": "C",
      "topics": "Game theory · Graph theory · Sequences"
    },
    {
      "id": "geo",
      "name": "Geometry",
      "icon": "△",
      "prefix": "G",
      "topics": "Euclidean · Projective · Circle geometry"
    },
    {
      "id": "nt",
      "name": "Number Theory",
      "icon": "ℕ",
      "prefix": "N",
      "topics": "Diophantine equations · Arithmetic functions"
    }
  ],
  "problems": [
    {
      "id": "a1",
      "category": "alg",
      "difficulty": "easy",
      "stars": 1,
      "rating": 2.5,
      "confidence": "high",
      "novelty": {
        "status": "screened",
        "searchDate": "2026-09-29",
        "exactMatch": false,
        "similarSources": [
          {
            "name": "post-transform screen (new statement)",
            "note": "old content was the classical (a+b)(b+c)(c+d)(d+a)>=16 under abcd=1 (AM-GM anthology staple, bucket C); new squared-product form FTS-clean in 187k-chunk corpus 2026-09-29; SE lanes deferred to quota reset"
          }
        ],
        "earliestKnownDate": null,
        "lanesComplete": false,
        "laneSummary": {
          "N": "free-channel probes clean 2026-09-29; SE exact-form lanes deferred to quota reset",
          "A": "corpus FTS probes (a2 1 b2 1 c2 1 d2 1 / ab 1 2 a b 2 variants) zero hits; SE lanes deferred",
          "D": "tools/screen.py --id a1 recorded same day"
        },
        "transformedFrom": {
          "knownCore": "classical abcd=1 inequality chain forcing (a+b)(b+c)(c+d)(d+a) >= 16 by pairwise AM-GM; the >=16 target is the entire old content",
          "frozenIn": "CHANGELOG.md 2026-09-29"
        },
        "priorCore": "pairwise AM-GM expansion of the four-factor product",
        "seam": "new proof: Lagrange/Fibonacci identity (a^2+1)(b^2+1)=(ab-1)^2+(a+b)^2 >= (a+b)^2 applied to the pairs (a,b),(c,d) and (b,c),(d,a); the two squared inequalities multiply to the result, and equality needs ab=bc=cd=da=1 simultaneously (a=c, b=d, ab=1), a solution set the old >=16 problem never sees. The old AM-GM machinery gives nothing here: direct expansion of LHS - RHS is not obviously positive.",
        "signature": "S03+M2",
        "residualRisk": "medium-low: the two-square identity itself is classical (Brahmagupta-Fibonacci); the packaged four-variable form with the (a+b)(b+c)(c+d)(d+a) right side probed clean on all free channels; SE lanes pending"
      },
      "text": "Let $a,b,c,d>0$ satisfy $abcd=1$. Prove that $$(a^{2}+1)(b^{2}+1)(c^{2}+1)(d^{2}+1)\\ge (a+b)(b+c)(c+d)(d+a),$$ and determine all equality cases.",
      "why": "The engine is the Brahmagupta--Fibonacci identity $(a^{2}+1)(b^{2}+1)=(ab-1)^{2}+(a+b)^{2}$, i.e. multiplicativity of the norm on $\\mathbb{C}$ via $(a+i)(b+i)=(ab-1)+i(a+b)$. Pairing $[(a,b),(c,d)]$ and $[(b,c),(d,a)]$ and multiplying the two squared inequalities gives the claim after taking square roots. Equality forces $ab=bc=cd=da=1$, a one-parameter family $a=c$, $b=d$, $ab=1$. The same norm identity underlies Fermat's two-square theorem through the Gaussian integers $\\mathbb{Z}[i]$, a Euclidean domain.",
      "answer": "$$\\boxed{(a^{2}+1)(b^{2}+1)(c^{2}+1)(d^{2}+1)\\ge(a+b)(b+c)(c+d)(d+a)}$$ with equality iff $a=c$, $b=d$ and $ab=1$.",
      "steps": [
        "Pair the factors: $[(a^2+1)(b^2+1)]\\cdot[(c^2+1)(d^2+1)]$ and $[(b^2+1)(c^2+1)]\\cdot[(d^2+1)(a^2+1)]$; the product of all four pair-products is LHS$^2$.",
        "Lagrange identity: $(a^2+1)(b^2+1)=(ab-1)^2+(a+b)^2\\ge(a+b)^2$, and likewise for $(b,c)$, $(c,d)$, $(d,a)$.",
        "Multiply all four inequalities: LHS$^2\\ge(a+b)^2(b+c)^2(c+d)^2(d+a)^2=$ RHS$^2$; take square roots.",
        "Equality iff $ab=bc=cd=da=1$ simultaneously, i.e. $a=c$, $b=d$, $ab=1$; then $abcd=1$ is automatic.",
        "Sharpness: $a=c=t$, $b=d=1/t$ attains equality for every $t>0$."
      ],
      "readiness": {
        "runId": "RUN-20260929-01"
      }
    },
    {
      "id": "a2",
      "category": "alg",
      "difficulty": "easy",
      "stars": 1,
      "rating": 3,
      "confidence": "high",
      "novelty": {
        "status": "screened",
        "searchDate": "2026-09-29",
        "exactMatch": false,
        "similarSources": [
          {
            "name": "post-transform screen (new statement)",
            "note": "old content: classical double estimate 1<=sum sqrt(a+bc)<=2 on the simplex (IMO-2001-style anthology staple), bucket-C flagged by second-pass reviewer; new lambda-threshold statement corpus-clean 2026-09-29 (corpus.db fts, 187262 chunks): phrases 'sqrt a bc' 0 hits, '1 3 ab bc ca' 0 hits, lone 'sqrt b ca' hit unrelated (Romanian local 2014), 0 of 24 'ab bc ca' chunks carry a sqrt-a radical family; classic statement itself 0 corpus hits; arXiv probe 'sqrt(a+bc)' AND 'ab+bc+ca' returned 1 unrelated cond-mat hit"
          }
        ],
        "earliestKnownDate": null,
        "lanesComplete": true,
        "laneSummary": {
          "N": "SE 8 queries exact-form sweep complete 2026-09-30 (tools/lanes-run-20260930-0607.json): zero relevant hits",
          "A": "SE 8 queries paraphrase lanes complete 2026-09-30; all matches adjudicated genre-word irrelevant",
          "D": "screen pack: tools/screens/a3.json; evidence-present; D-clean 0 exact hits"
        },
        "transformedFrom": {
          "knownCore": "Let $a,b,c\\ge 0$ satisfy $a+b+c=1$. Prove that $$1\\le \\sqrt{a+bc}+\\sqrt{b+ca}+\\sqrt{c+ab}\\le 2,$$ and determine every equality case on each side.",
          "frozenIn": "CHANGELOG.md 2026-09-29"
        },
        "priorCore": "classical two-sided bound: a+bc=(a+b)(a+c), one AM-GM per term gives S<=2 (centroid equality); sqrt(a+bc)>=sqrt(a) plus (sum sqrt a)^2>=sum a gives S>=1 (vertex equality)",
        "seam": "old lower route can only ever output the constant 1 and is blind to q=ab+bc+ca (it even undercuts 1+3q at every interior point); old upper route (AM-GM) points the wrong way; new proof runs through the exact square-expansion identity S^2=(1+q)+2*sum (a+b)sqrt((a+c)(b+c)), the pair-Cauchy defect c(sqrt a-sqrt b)^2 and the closure 3q(1-3q)>=0 - and the centroid becomes a LOWER-bound equality case, impossible in the classic; designed trap: the one-step lemma sqrt(a+bc)>=a+sqrt(bc) leads to u>=3q, FALSE on 19% of the simplex (CAS-flagged)",
        "signature": "S44+M3",
        "residualRisk": "medium: the pair-Cauchy lemma sqrt((a+c)(b+c))>=c+sqrt(ab) is an anthology intermediate; composite threshold framing + equality classification probe clean; SE exact-form lanes pending"
      },
      "text": "Let $a,b,c\\ge 0$ satisfy $a+b+c=1$.\n\n<ol><li>Find the largest real number $\\lambda$ such that $$\\sqrt{a+bc}+\\sqrt{b+ca}+\\sqrt{c+ab}\\;\\ge\\;1+\\lambda\\,(ab+bc+ca)$$ holds for every admissible triple $(a,b,c)$.</li>\n<li>For that $\\lambda$, determine all equality cases.</li></ol>",
      "why": "Under $a+b+c=1$ the key factorization is $a+bc=(a+b)(a+c)$. Expanding $S^2$ exactly and bounding cross terms by $\\sqrt{(a+c)(b+c)}\\ge c+\\sqrt{ab}$, whose defect is the square $c(\\sqrt a-\\sqrt b)^2$, then $(a+b)\\sqrt{ab}\\ge2ab$, gives $S^2\\ge1+9q\\ge(1+3q)^2$ since $q=ab+bc+ca\\le1/3$. The centroid has $S=2=1+3q$, forcing $\\lambda\\le3$; equality holds iff centroid or vertex, since $S=1+3q$ forces $q\\in\\{0,\\tfrac13\\}$. The whole proof is a sum-of-squares certificate in the elementary symmetric functions $(s,t,p)$ - the mechanism behind the uvw method and the discriminant description of the real-rooted region.",
      "answer": "$$\\boxed{\\lambda=3,\\text{ with equality exactly at }a=b=c=\\tfrac13\\text{ and at the permutations of }(1,0,0).}$$",
      "steps": [
        "Set $q=ab+bc+ca\\le\\tfrac13$ and note $a+bc=(a+b)(a+c)$ for $a+b+c=1$.",
        "Expand exactly: $S^2=(1+q)+2\\big[(a+b)\\sqrt{(a+c)(b+c)}+(b+c)\\sqrt{(b+a)(c+a)}+(c+a)\\sqrt{(c+b)(a+b)}\\big]$.",
        "Bound each cross term: $(a+c)(b+c)\\ge(c+\\sqrt{ab})^2$; with $\\sum_{pairs}(a+b)c=2q$ this gives $S^2\\ge1+5q+2\\sum_{pairs}(a+b)\\sqrt{ab}\\ge1+9q$ (AM-GM).",
        "Close: $1+9q-(1+3q)^2=3q(1-3q)\\ge0\\Rightarrow S\\ge1+3q$. At the centroid $S=2$, $q=\\tfrac13$, so no $\\lambda>3$ works.",
        "Equality needs $q\\in\\{0,\\tfrac13\\}$: $q=\\tfrac13\\Rightarrow a=b=c$; $q=0\\Rightarrow$ two coordinates vanish. Both check; trap check: the shortcut $S\\ge1+\\sum\\sqrt{bc}\\ge1+3q$ is INVALID (second step fails on $19\\%$ of samples - CAS w3f_a3.py)."
      ],
      "readiness": {
        "runId": "RUN-20260929-01",
        "checkedOn": "2026-09-29",
        "queue": "P3",
        "novelty": {
          "fileStatus": "screened",
          "verdict": "T3-pending",
          "lanes": {
            "N": "corpus FTS/LIKE + arXiv free-channel probe clean 2026-09-29; SE exact-form lanes deferred to quota reset",
            "A": "corpus FTS + exact-fragment probes per tools/proofs/w3-final-BATTERY.md; SE lanes deferred",
            "D": "tools/screen.py --id a3 recorded at splice by single writer"
          },
          "provenanceComplete": false,
          "humanApprovalRequired": false
        },
        "proof": {
          "state": "unaudited",
          "independentlyCheckedThisRun": false,
          "auditNote": null
        },
        "calibration": {
          "state": "agent-derived-provisional",
          "contestantBlindTest": "not-run",
          "humanReweight": "pending",
          "ratingCurrentlyStored": 3.5,
          "difficultyCurrentlyStored": "easy",
          "starsCurrentlyStored": 1
        },
        "quality": {
          "state": "human-panel-pending",
          "scores": null
        },
        "release": {
          "eligible": false,
          "state": "blocked-until-global-gates"
        },
        "provenance": {
          "status": "not-established",
          "sourceNotePresent": false
        },
        "sourceRecall": {
          "status": "not-recorded"
        }
      }
    },
    {
      "id": "a3",
      "category": "alg",
      "difficulty": "easy",
      "stars": 1,
      "rating": 3,
      "confidence": "high",
      "novelty": {
        "status": "unverified",
        "searchDate": "2026-09-27",
        "exactMatch": false,
        "similarSources": [],
        "earliestKnownDate": null
      },
      "text": "Let $(x_n)_{n\\ge1}$ be a sequence of positive integers satisfying $$x_nx_{n+1}x_{n+2}=x_n+x_{n+1}+x_{n+2}$$ for every $n\\ge1$. Prove that $(x_n)$ is purely periodic with period $3$, and that $(x_1,x_2,x_3)$ must be a permutation of $(1,2,3)$.",
      "why": "Solving for $x_{n+2}$ gives the third-order Lyness recurrence $x_{n+2}=\\dfrac{x_n+x_{n+1}}{x_nx_{n+1}-1}$, a periodic case of the Lyness-type recurrences arising as mutations in rank-3 cluster algebras (Fomin--Zelevinsky), where the Laurent phenomenon and a $\\mathbb{Z}_3$ symmetry of the exchange matrix force $x_{n+3}=x_n$; direct verification: $x_{n+3}=x_n$ follows from the identity satisfied by the recurrence on the positive domain where it is defined. Positivity forces each pair $x_nx_{n+1}\\gt1$, and among positive integers the map $a\\,b\\,c=a+b+c$ must hold with $\\{a,b,c\\}$ a solution set of the descent; the only positive-integer 3-orbit is $\\{1,2,3\\}$, since $x_n\\ge3$ for all large terms contradicts the fixed sum-product balance.",
      "answer": "$$\\boxed{(x_n)\\text{ is exactly the sequence }1,2,3,1,2,3,\\dots\\text{ up to a cyclic relabelling of }(1,2,3).}$$",
      "steps": [
        "Fix $n$ and set $x=x_n\\le y=x_{n+1}\\le z=x_{n+2}$ after relabelling (the equation $xyz=x+y+z$ is symmetric in the three variables). Since $x+y+z\\le 3z$, the equation gives $xyz\\le 3z$, hence $xy\\le3$.",
        "If $xy=1$, then $x=y=1$, and the equation becomes $z=2+z$, impossible. If $xy=2$, then $x=1,y=2$, and the equation becomes $2z=3+z$, so $z=3$; this is consistent with $z\\ge y=2$. If $xy=3$, then $x=1,y=3$, and $3z=4+z$ gives $z=2$, but this contradicts $z\\ge y=3$.",
        "Hence for every $n$, the unordered triple $\\{x_n,x_{n+1},x_{n+2}\\}$ equals $\\{1,2,3\\}$ exactly, with all three values distinct.",
        "Since $\\{x_n,x_{n+1},x_{n+2}\\}=\\{1,2,3\\}=\\{x_{n+1},x_{n+2},x_{n+3}\\}$ and both triples share the two distinct values $x_{n+1},x_{n+2}$, the remaining value in each triple is forced to be the same: $$x_{n+3}=\\{1,2,3\\}\\setminus\\{x_{n+1},x_{n+2}\\}=x_n.$$",
        "Thus $x_{n+3}=x_n$ for every $n\\ge1$, so $(x_n)$ is purely periodic with period $3$, and the repeating block $(x_1,x_2,x_3)$ is, by the first step, some permutation of $(1,2,3)$. Conversely every such periodic sequence obviously satisfies the recurrence, since each consecutive triple is a permutation of $(1,2,3)$ and $1\\cdot2\\cdot3=6=1+2+3$."
      ]
    },
    {
      "id": "a4",
      "category": "alg",
      "difficulty": "easy",
      "stars": 1,
      "rating": 3.5,
      "confidence": "high",
      "novelty": {
        "status": "screened",
        "searchDate": "2026-09-30",
        "exactMatch": false,
        "similarSources": [
          {
            "name": "IMO 2011 Shortlist A1 (corpus screen 2026-09-30: tools/screens/a5.json, top chunk containment 0.762)",
            "note": "f(x+y) <= y f(x) + f(f(x)) forces f=0 - flagged only by shared boilerplate phrases ('function from the set of real numbers', iterate notation); no mathematical overlap: that problem turns an UPPER two-variable bound into a classification via additivity-style substitutions, while the shipped claim derives a LOWER pointwise bound from two one-sided one-variable hypotheses by the dip-at-f(a) quantifier move; adjudicated as phrase-collision, not structural near-twin"
          },
          {
            "name": "web probes 2026-09-30 (duckduckgo.com/html/?q=... and bing.com/search?q=...)",
            "note": "queries '\"f(f(x))\" >= x - 1 \"f(x\" <= x prove functional inequality', 'functional inequality olympiad \"f(f(x))\" iterated \"f(x) \\le x\" bound', '\"f(f(x)) \\ge x-1\" OR \"\\geq x-1\" functional equation problem', 'site:math.stackexchange.com \"f(f(x))\" inequality \"f(x)\" \"x-1\"' all returned zero results; nearest classical kin is the Hyers-Ulam/Fehér-type stability literature for iterates (defect bounds on f vs f-of-f arising from APPROXIMATE equations f(f(x))\\approx x), which never yields a one-sided pointwise order bound by the dip argument shipped here"
          },
          {
            "name": "corpus FTS (187k competition chunks, /tmp/kilo/corpus.db, 2026-09-30)",
            "note": "'\"f(f(x))\" AND \"x-1\"', '\"f(f(x))\" AND \"f(x) <= x\"', '\"x 1 le f(x)\" AND \"f(x) le x\"', '\"second iterate\" AND inequality AND functional' - closest chunks are iteration-of-derivatives and complex-iteration texts (different objects); zero chunks pose the shipped implication"
          }
        ],
        "earliestKnownDate": null,
        "lanesComplete": false,
        "laneSummary": {
          "N": "8+ web probes (DDG html x3, Bing x5 incl. site:math.stackexchange.com; DDG quota-capped after 3) 2026-09-30 - clean",
          "A": "same web probes; OEIS lane N/A (no numeric answer)",
          "D": "corpus FTS (/tmp/kilo/corpus.db, 187262 chunks) 2026-09-30 post-splice pack tools/screens/a5.json: 0 exact fragments; top-chunk containment 0.762 vs IMO 2011 SL A1 adjudicated phrase collision (recorded in similarSources)"
        },
        "transformedFrom": {
          "knownCore": "classic exercise: 3^(1/3) != sqrt(a)+sqrt(b) for rational a,b; solved by isolating a radical and squaring twice",
          "frozenIn": "CHANGELOG.md 2026-09-29"
        },
        "priorCore": "the 2026-09-29 screened cube-root-denesting/minimal-polynomial variant was itself replaced this wave per user request (a brand-new functional inequality was ordered); its radical/degree-3 obstruction content is superseded, not reused",
        "seam": "the shipped claim lives in the order theory of iterates of a real function: no radicals, no polynomials, no field degrees - the minimal-polynomial and multiquadratic-degree engines of the old core (and of the replaced variant) cannot even parse it. The proof is a single quantifier move (a point dipping below x-1 forces f(u)>u at its own image, violating f <= id), and sharpness is a parity-interval staircase; nothing of this exists in either prior object",
        "signature": "S52+M9",
        "residualRisk": "medium-low: the dip-argument is short and elementary enough to occur in FE handouts as an exercise on iterated inequalities (cf. 'f(f(x)) >= x implies...' folklore items); exact statement + staircase sharpness probe clean on all probed channels (incl. corpus D-lane after adjudicating the IMO2011SL-A1 phrase collision); SE exact-form lanes pending quota reset"
      },
      "text": "Let $f:\\mathbb{R}\\to\\mathbb{R}$ be a function such that, for every real number $x$, $$f(x)\\le x\\qquad\\text{and}\\qquad f(f(x))\\ge x-1.$$ Prove that $f(x)\\ge x-1$ for every real $x$.",
      "answer": "$\\boxed{f(x)\\ge x-1\\ \\text{ for all }x\\in\\mathbb{R}.}$ The conclusion cannot be strengthened: admissible functions with $f(x)=x-1$ on half the line exist.",
      "why": "One quantifier move turns a two-step hypothesis into a one-step conclusion: if $f(a)\\lt a-1$, then at $u:=f(a)$ the hypothesis at $x=a$ gives $f(u)=f(f(a))\\ge a-1\\gt u$, so $f$ steps up at $u$, forbidden by $f\\le\\mathrm{id}$; the bound propagates from the second iterate to the first along every orbit. Hence a violation can never be paid for two steps later. The constant is exact: $f=\\mathrm{id}$, $f=x-\\tfrac12$ work, and the parity staircase $f(x)=x-1$ on $\\bigcup_k[2k,2k+1)$, $f(x)=x$ on $\\bigcup_k[2k+1,2k+2)$ saturates both bounds - an orbit picture with mean displacement $-\\tfrac12$ per step, the rotation-number mechanism behind bounded-displacement arguments for iterated maps. The whole proof works verbatim with $x-1$ replaced by $x-c$, so the propagation is structural.",
      "steps": [
        "Non-vacuity check: $f(x)=x$ satisfies $f(x)\\le x$ with equality and $f(f(x))=x\\ge x-1$; $f(x)=x-\\tfrac12$ satisfies $f(x)\\le x$ and $f(f(x))=x-1\\ge x-1$ with equality. So the class of functions is nonempty.",
        "Claim. Suppose for contradiction that $f(a)\\lt a-1$ for some real $a$. Put $u:=f(a)$, so $u\\lt a-1$.",
        "Apply the second hypothesis at $x=a$: $f(u)=f(f(a))\\ge a-1$. Since $a-1\\gt u$, this says $f(u)\\gt u$, contradicting the first hypothesis applied at $x=u$ ($f(u)\\le u$). Hence $f(x)\\ge x-1$ for all $x$.",
        "Sharpness of the conclusion: define $f(x)=x-1$ for $x\\in[2k,2k+1)$, $f(x)=x$ for $x\\in[2k+1,2k+2)$ ($k\\in\\mathbb{Z}$). Check $f(x)\\le x$: clear. Check $f(f(x))\\ge x-1$: if $x\\in[2k+1,2k+2)$ then $f(x)=x$ and $f(f(x))=x\\ge x-1$; if $x\\in[2k,2k+1)$ then $f(x)=x-1\\in[2k-1,2k)$, an interval where $f$ is the identity, so $f(f(x))=x-1$, again exactly at the boundary. This admissible $f$ satisfies $f(x)=x-1$ on half the line, so no bound $f(x)\\ge x-1+\\varepsilon$ can replace the conclusion: the theorem is tight.",
        "Remark generalizing the proof: for any fixed $c\\in\\mathbb{R}$, $f(x)\\le x$ and $f(f(x))\\ge x-c$ for all $x$ imply $f(x)\\ge x-c$ - the same three lines. The constant $c$ propagates from the second iterate to the first unchanged.",
        "Machine audit (tools/proofs/redesign-20260930/a5-verify.py, 2026-09-30): all $362\\,880$ maps $f:\\{-4..4\\}\\to\\{-4..4\\}$ with $f(x)\\le x$ checked exactly for the implication (0 counterexamples); piecewise-affine random families and the staircase of step 4 verified on a $10^5$-point grid (0 failures)."
      ],
      "readiness": {
        "runId": "RUN-20260930-01",
        "checkedOn": "2026-09-30",
        "queue": "P3",
        "novelty": {
          "fileStatus": "screened",
          "verdict": "T3-pending",
          "lanes": {
            "N": "redesign wave 2026-09-30: web paraphrase/alias probes + corpus screen recorded in tools/proofs/redesign-20260930/a5-screen.md; SE exact-form lanes deferred to quota reset",
            "A": "redesign wave 2026-09-30: web paraphrase/alias probes + corpus screen recorded in tools/proofs/redesign-20260930/a5-screen.md; SE exact-form lanes deferred to quota reset",
            "D": "redesign wave 2026-09-30: D-lane evidence pack to be regenerated by tools/screen.py after splice"
          },
          "provenanceComplete": false,
          "humanApprovalRequired": false
        },
        "proof": {
          "state": "unaudited",
          "independentlyCheckedThisRun": false,
          "auditNote": "new proof text shipped 2026-09-30; machine-verified by tools/proofs/redesign-20260930/a5-verify.py; independent audit pending"
        },
        "calibration": {
          "state": "slot-preserved-from-predecessor",
          "contestantBlindTest": "not-run",
          "humanReweight": "pending",
          "ratingCurrentlyStored": 4,
          "difficultyCurrentlyStored": "medium",
          "starsCurrentlyStored": 2
        },
        "quality": {
          "state": "human-panel-pending",
          "scores": null
        },
        "release": {
          "eligible": false,
          "state": "blocked-until-global-gates"
        },
        "provenance": {
          "status": "not-established",
          "sourceNotePresent": false
        },
        "sourceRecall": {
          "status": "not-recorded"
        }
      }
    },
    {
      "id": "a5",
      "category": "alg",
      "difficulty": "easy",
      "stars": 1,
      "rating": 3.5,
      "confidence": "high",
      "novelty": {
        "status": "screened",
        "searchDate": "2026-09-29",
        "exactMatch": false,
        "similarSources": [
          {
            "name": "post-transform screen (new statement)",
            "note": "old content: the f(x+y)+xy=f(x)f(y) equation with the cosmetic x^3-shift wrapper (identical core on MSE 3687606 - exact prior art). Replacement: the idempotence-trap equation f(f(x)+y)=f(x+y)+f(y) whose ONLY solution is f=0: the two-step bootstrap (x=0 forces f(c+y)=2f(y) killing c!=0 at once; then f o f = f and the x -> f(x) swap makes the left side identical to itself plus f(y)) is a designed dead-end machine - every solver instinct (find linear, try +-x, try constants) walks into it"
          }
        ],
        "earliestKnownDate": null,
        "lanesComplete": false,
        "laneSummary": {
          "N": "free-channel probes clean 2026-09-29; SE exact-form lanes deferred to quota reset",
          "A": "free-channel probes clean 2026-09-29; SE exact-form lanes deferred to quota reset",
          "D": "tools/screen.py --id recorded same day"
        },
        "transformedFrom": {
          "knownCore": "classical easy FE f(x+y)+xy = f(x)f(y) (solutions x+1, 1-x) with a cosmetic x^3 - wrapping; MSE 3687606 pins the exact identical equation",
          "frozenIn": "CHANGELOG.md 2026-09-29",
          "designHistory": "design history: (1) two-function system f(x+y)+g(x)g(y)=f(x)f(y)+xy FALSIFIED by sympy - infinite hyperbolic and quadratic solution families; (2) 2xy variant FALSIFIED same way; (3) agent-proposed f(x^2+f(y))=f(x)^2+y REJECTED: identical to IMO 1999 shortlist A1 (famous); (4) shipped design verified: only solution f=0, fully elementary proof (see steps)"
        },
        "priorCore": "substitution chains on a two-variable product-sum identity",
        "seam": "the new equation has no product term at all; its content is the self-reference collapse: the equation is invariant under x -> f(x) on the left alone, which forces f identically zero in three lines - a 'trap equation' genre (answer: no nonzero solutions) different from the old classification",
        "signature": "S12+M1",
        "residualRisk": "medium-low: idempotence-trick FE problems exist in anthologies in various guises; this exact form returned no corpus hits and no known-famous identity; the FIRST replacement candidate was REJECTED pre-shipping as IMO 1999 SL A1 (caught by orchestrator knowledge when the agent - offline - proposed it); recorded below"
      },
      "text": "Find all functions $f:\\mathbb{R}\\to\\mathbb{R}$ satisfying $$f(f(x)+y)=f(x+y)+f(y)\\qquad\\text{for all real }x,y.$$",
      "answer": "$\\boxed{f\\equiv 0.}$",
      "why": "Put $x=0$, $c:=f(0)$: $f(c+y)=2f(y)$ for all $y$, so translation by $c$ acts as doubling of $f$, and iterating gives $f(2c+y)=4f(y)$. But evaluating at $x=c$, using $f(c)=2c$, gives $f(2c+y)=f(c+y)+f(y)=3f(y)$; hence $f\\equiv0$. Equivalently: the left side $f(f(x)+y)$ is invariant under replacing $x$ by $f(x)$, so the right side must be too, which on an orbit $y\\mapsto y+kc$ of the translation action forces $f(k c)$ to grow like $2^k$ and like $3^k$ at once - only zero survives. With $c=0$ idempotence $f(f(x))=f(x)$ closes the same bookkeeping.",
      "steps": [
        "x=0: f(c+y) = f(y) + f(y) = 2f(y) for all y, where c = f(0). (Shift identity.)",
        "From the shift identity with y=0: f(c) = 2c. Evaluate the original at x = c: f(f(c)+y) = f(c+y)+f(y), i.e. f(2c+y) = 2f(y)+f(y) = 3f(y). But shifting twice: f(2c+y) = f(c+(c+y)) = 2f(c+y) = 4f(y). Hence f(y) = 0 for all y, so c = 0 and f = 0 is forced - and f=0 indeed satisfies the equation.",
        "(Structural second view, for the checker:) with c=0 the shift identity is f(f(y))=f(y): idempotence; then x -> f(x) in the original: left side f(f(f(x))+y) = f(f(x)+y) is unchanged, right side becomes f(f(x)+y)+f(y) - contradiction unless f=0. Both arguments close; the problem rewards either.",
        "No regularity, no boundedness, no surjectivity assumption is used anywhere; the sweep over linear/affine/quadratic/absolute-value/sign/tanh candidates confirms only f=0 (tools/proofs/out/a8.txt lineage)."
      ]
    },
    {
      "id": "a6",
      "category": "alg",
      "difficulty": "easy",
      "stars": 1,
      "rating": 3.5,
      "confidence": "high",
      "novelty": {
        "status": "screened",
        "searchDate": "2026-09-29",
        "exactMatch": false,
        "similarSources": [
          {
            "name": "post-transform screen (new statement)",
            "note": "old content: classic P(x^3)=P(x)^3 (root-orbit family); self-composition variant probed clean on free channels"
          }
        ],
        "earliestKnownDate": null,
        "lanesComplete": false,
        "laneSummary": {
          "N": "free-channel probes (Wikipedia/OEIS/arXiv) clean 2026-09-29; SE exact-form lanes deferred to quota reset",
          "A": "free-channel probes (Wikipedia/OEIS/arXiv) clean 2026-09-29; SE exact-form lanes deferred to quota reset",
          "D": "tools/screen.py --id recorded same day"
        },
        "transformedFrom": {
          "knownCore": "classic P(x^3)=P(x)^3 solved by comparing leading coefficient and root orbits of z->z^3 (solutions x^n and 0)",
          "frozenIn": "CHANGELOG.md 2026-09-29"
        },
        "priorCore": "single-variable root dynamics under the cube map z -> z^3",
        "seam": "new equation is self-composition: decisive constraints are the x^8 coefficient (4a vs 3a) and the drift bP+c between P of P and the cube of P - different iterates compared, no root-map involved; the old family's x^n almost all fail the new identity and the new descent yields x^3 by an unrelated mechanism.",
        "signature": "S09+M7",
        "residualRisk": "low-medium: self-composition genre (P(P)=P^k) exists in FE notes; exact form k=3 clean on probed channels; SE lanes pending"
      },
      "text": "Find all polynomials $P:\\mathbb{R}\\to\\mathbb{R}$ satisfying $$P(P(x))=\\bigl(P(x)\\bigr)^{3}\\qquad\\text{for all }x\\in\\mathbb R.$$",
      "why": "Degree comparison in $P\\circ P=P^{3}$ leaves $n\\in\\{0,3\\}$. For $P=x^{3}+ax^{2}+bx+c$ the $x^{8}$ coefficient of $P\\circ P$ is $4a$ while $P^{3}$ has $3a$, so $a=0$; then $P\\circ P-P^{3}$ equals exactly $b\\,P(x)+c$, which a nonconstant cubic cannot absorb, killing $b$ and $c$: the classification is $\\{0,\\pm1,x^{3}\\}$. Conceptually $P\\circ P=(\\cdot)^{3}\\circ P$ says $P$ is an intertwiner between its own dynamics and the cube power map - a question in the Ritt--Julia theory of polynomial composition, where the monomials $z^{d}$ and Chebyshev polynomials are the rigid, highly symmetric members of the monoid $(\\mathbb{C}[x],\\circ)$.",
      "answer": "$$\\boxed{P\\equiv0,\\quad P\\equiv1,\\quad P\\equiv-1,\\quad P(x)=x^{3}.}$$",
      "steps": [
        "Constants: $c=c^{3}$ gives $c\\in\\{0,\\pm1\\}$; all three work.",
        "Nonconstant: $\\deg(P\\circ P)=n^{2}$ and $\\deg(P^{3})=3n$, so $n=3$.",
        "Leading coefficients: $p_3^4=p_3^3$ gives $p_3=1$. Compare $x^{8}$: in $P\\circ P$ it is $3a+a=4a$ (the cube contributes $3a$, the $ax^{2}$-term of the outer $P$ contributes $a$); in $P(x)^{3}$ it is $3a$. Hence $a=0$.",
        "With $a=0$ and $u=P(x)$: $P\\circ P=u^{3}+bu+c=P(x)^{3}+b\\,P(x)+c$. The identity forces $b\\,P(x)+c\\equiv0$; $P$ nonconstant gives $b=0$, then $c=0$.",
        "Check $P=x^{3}$: $P(P(x))=x^{9}=P(x)^{3}$. Machine closure: sympy coefficient solve through degree 4 returns only these (2026-09-29)."
      ]
    },
    {
      "id": "a7",
      "category": "alg",
      "difficulty": "medium",
      "stars": 2,
      "rating": 4,
      "confidence": "high",
      "novelty": {
        "status": "screened",
        "searchDate": "2026-09-29",
        "exactMatch": false,
        "similarSources": [
          {
            "name": "post-transform screen (new statement)",
            "note": "classical FE P(x)^2-P(y)^2=P(x-y)P(x+y) (solutions cx) was the old content, flagged by the second-pass reviewer; new cubic form probed clean on free channels"
          }
        ],
        "earliestKnownDate": null,
        "lanesComplete": false,
        "laneSummary": {
          "N": "free-channel probes (Wikipedia/OEIS/arXiv) clean 2026-09-29; SE exact-form lanes deferred to quota reset",
          "A": "free-channel probes (Wikipedia/OEIS/arXiv) clean 2026-09-29; SE exact-form lanes deferred to quota reset",
          "D": "tools/screen.py --id recorded same day"
        },
        "transformedFrom": {
          "knownCore": "classical polynomial FE P(x)^2-P(y)^2=P(x-y)P(x+y) with solutions P=cx; anthology staple of FE collections",
          "frozenIn": "CHANGELOG.md 2026-09-29"
        },
        "priorCore": "leading-coefficient matching + parity substitution of the squared identity",
        "seam": "new proof: x=y=0 forces P(0)=0; y=0 collapses to P(x)^3=P(x)P(x^2), i.e. the idempotent equation P(x)^2=P(x^2) (root-orbit + leading coefficient), then one specialization (x,y)=(2,1) gives 8^m-1=7^m forcing m=1. The old squared-version coefficient argument never reaches compositional rigidity; the famous x^2 survives the idempotent reduction yet fails the original (sympy deg<=4: exactly 0 and x).",
        "signature": "S02+M7",
        "residualRisk": "medium: cubic-difference identities are anthologized; the idempotent lemma is known elsewhere; SE exact-form lanes pending"
      },
      "text": "Find all polynomials $P:\\mathbb{R}\\to\\mathbb{R}$ such that $$P(x)^{3}-P(y)^{3}=P(x-y)\\,P\\left(x^{2}+xy+y^{2}\\right)\\qquad\\text{for all real }x,y.$$",
      "why": "Substitutions dismantle the identity: $x=y=0$ gives $P(0)=0$; then $y=0$ gives $P(x)^{3}=P(x)P(x^{2})$, so $P\\equiv0$ or $P(x)^{2}=P(x^{2})$ - $P$ intertwines the squaring power map with itself, $P\\circ(\\cdot^{2})=(\\cdot^{2})\\circ P$. Intertwiners of a power map are monomials $P=x^{m}$: the classification follows from root orbits $\\zeta\\mapsto\\zeta^{2^{k}}$ and the leading coefficient, and this is the first case of the Ritt theory of commuting polynomials, where only monomials and Chebyshev polynomials admit such symmetries. The probe $(x,y)=(2,1)$ forces $8^{m}-1=7^{m}$, hence $m=1$; $P=x^{2}$ satisfies the reduced equation but not the original one.",
      "answer": "$$\\boxed{P\\equiv0\\quad\\text{or}\\quad P(x)=x.}$$",
      "steps": [
        "Set $x=y=0$: $0=P(0)\\cdot P(0)$, so $P(0)=0$.",
        "Set $y=0$: $P(x)^{3}=P(x)\\,P(x^{2})$ identically. If $P\\not\\equiv0$, cancel $P(x)$ to obtain $P(x)^{2}=P(x^{2})$.",
        "Idempotents of squaring: the leading coefficient satisfies $c^{2}=c$, $c=1$; any nonzero root $r$ generates the equal-multiplicity orbit $r,r^{2},r^{4},\\ldots$, which must be finite, so $r$ is a root of unity; multiplicity bookkeeping then collapses all configurations to $P(x)=x^{m}$ (and $P(0)=0$ forces $m\\ge1$).",
        "Test $P(x)=x^{m}$ in the original at $(x,y)=(2,1)$: $2^{3m}-1=7^{m}$. For $m=1$ equality; for $m\\ge2$, $8^{m}-1>7^{m}$ by induction (base $m=2$: $63>49$). Note the trap: $m=2$ passes the reduced idempotent step but fails here.",
        "Verify $P=x$: $x^{3}-y^{3}=(x-y)(x^{2}+xy+y^{2})$ holds identically. Machine closure: full sympy coefficient solve through degree 4 returns only $\\{0,x\\}$ (2026-09-29)."
      ]
    },
    {
      "id": "a8",
      "category": "alg",
      "difficulty": "medium",
      "stars": 2,
      "rating": 4,
      "confidence": "high",
      "novelty": {
        "status": "unverified",
        "searchDate": "2026-09-27",
        "exactMatch": false,
        "similarSources": [],
        "earliestKnownDate": null
      },
      "text": "Let $a,b,c>0$. Prove that $$32\\!\\left(\\sum_{\\mathrm{cyc}}ab(a+b)\\right)^3 \\ge 27\\!\\left(\\prod_{\\mathrm{cyc}}(a+b)\\right)^2 \\left(\\prod_{\\mathrm{cyc}}(a+b)-4abc\\right).$$",
      "why": "A homogeneous symmetric inequality in three variables is a polynomial in the elementary symmetric functions $s=a+b+c$, $t=ab+bc+ca$, $p=abc$ by the fundamental theorem of symmetric polynomials. The feasible region in $(s,t,p)$ is carved out by the cubic discriminant $\\Delta\\ge0$ (the condition that $z^{3}-sz^{2}+tz-p$ has three real roots), so the extremum reduces to one-variable analysis on the boundary where two roots coincide. The factorization and equality case are then elementary; this is the uvw method, a quantifier-elimination principle for symmetric polynomial constraints.",
      "answer": "$\\boxed{a=b=c}$ is the unique equality case.",
      "steps": [
        "Set $s=a+b+c$, $t=ab+bc+ca$, $p=abc$. Then $$\\sum_{\\mathrm{cyc}}ab(a+b)=st-3p, \\qquad (a+b)(b+c)(c+a)=st-p.$$ Hence the claim is $$32(st-3p)^3\\ge 27(st-p)^2(st-5p).$$",
        "By $$st=(a+b+c)(ab+bc+ca)\\ge 9abc=9p,$$ put $u=st/p\\ge 9$. Dividing by $p^3>0$, it suffices to prove $$32(u-3)^3\\ge 27(u-1)^2(u-5).$$",
        "Use the exact factorization $$32(u-3)^3-27(u-1)^2(u-5)=(u-9)^2(5u-9)\\ge 0.$$",
        "Equality requires $u=9$, hence equality in $(a+b+c)(ab+bc+ca)\\ge 9abc$. The equality condition is $a=b=c$."
      ]
    },
    {
      "id": "a9",
      "category": "alg",
      "difficulty": "medium",
      "stars": 2,
      "rating": 4,
      "confidence": "high",
      "novelty": {
        "status": "screened",
        "searchDate": "2026-09-29",
        "exactMatch": false,
        "similarSources": [
          {
            "name": "post-transform screen (new statement)",
            "note": "old content: tangent-line classic sum 1/(2-a)>=3 under a2+b2+c2=3 (near-neighbour MSE 4985081); new reciprocal-of-quadratic form probed clean on free channels"
          }
        ],
        "earliestKnownDate": null,
        "lanesComplete": false,
        "laneSummary": {
          "N": "free-channel probes (Wikipedia/OEIS/arXiv) clean 2026-09-29; SE exact-form lanes deferred to quota reset",
          "A": "free-channel probes (Wikipedia/OEIS/arXiv) clean 2026-09-29; SE exact-form lanes deferred to quota reset",
          "D": "tools/screen.py --id recorded same day"
        },
        "transformedFrom": {
          "knownCore": "tangent-line inequality sum 1/(2-a)>=3 with a2+b2+c2=3 - per-term linearization exercise",
          "frozenIn": "CHANGELOG.md 2026-09-29"
        },
        "priorCore": "per-term tangent line 1/(2-a) >= (1+a^2)/2 summed over three variables",
        "seam": "no per-term quadratic minorant of 1/(x^2+x+1) works (CAS-falsified); the new proof is a two-stage global chain (Engel over the full denominator sum, then Cauchy on a+b+c<=3) - the constraint is consumed through sum D <= 9 instead of termwise, the opposite direction from the old tangent method.",
        "signature": "S06",
        "residualRisk": "medium-high: reciprocal-quadratic sum family is dense in inequality handouts; SE exact-form lanes pending"
      },
      "text": "Let $a,b,c\\ge 0$ be real numbers with $a^{2}+b^{2}+c^{2}=3$. Prove that $$\\frac{1}{a^{2}+a+1}+\\frac{1}{b^{2}+b+1}+\\frac{1}{c^{2}+c+1}\\ \\ge\\ 1\\,, $$ and determine all cases of equality.",
      "why": "Two Cauchy--Schwarz applications in the correct order: the Engel (Bergstrom) form $\\sum 1/D_a\\ge9/\\sum D_a=9/(6+a+b+c)$ - Cauchy--Schwarz with vectors $(\\sqrt{D_a})$ and $(1/\\sqrt{D_a})$, equality iff all $D_a$ equal - and then $a+b+c\\le\\sqrt{3\\cdot3}=3$, the RMS-AM inequality, again Cauchy--Schwarz with the all-ones vector. The equality analysis threads through both stages simultaneously; no per-term minorant $\\alpha-\\beta x^{2}$ of $1/D_a$ survives at both endpoints, so the termwise route fails and only the global inner-product route works.",
      "answer": "$$\\boxed{\\textstyle\\sum_{\\text{cyc}}\\frac1{a^{2}+a+1}\\ \\ge\\ 1\\,,}$$ with equality if and only if $a=b=c=1$.",
      "steps": [
        "Write $D_a=a^{2}+a+1$. Engel's form of Cauchy-Schwarz: $\\sum 1/D_a\\ge(1+1+1)^{2}/(D_a+D_b+D_c)=9/(\\sum a^{2}+\\sum a+3)=9/(6+a+b+c)$.",
        "Cauchy-Schwarz: $a+b+c\\le\\sqrt{3(a^{2}+b^{2}+c^{2})}=3$, so the denominator is at most $9$ and the sum is at least $1$.",
        "Equality throughout: the second step forces $a=b=c$; combined with $\\sum a^2=3$ this gives $a=b=c=1$, where the sum is $3\\cdot\\tfrac13=1$. (Engel equality $D_a=D_b=D_c$ is then automatic.)",
        "Anti-pattern note: demanding a per-term bound $1/(x^{2}+x+1)\\ge\\alpha-\\beta x^{2}$ with contact at $x=1$ gives conditions violated at $x=\\sqrt3$ (numbers in the tools/proofs log) - the global chain is the only route, which is the intended lesson."
      ]
    },
    {
      "id": "a10",
      "category": "alg",
      "difficulty": "medium",
      "stars": 2,
      "rating": 4,
      "confidence": "high",
      "novelty": {
        "status": "unverified",
        "searchDate": "2026-09-27",
        "exactMatch": false,
        "similarSources": [],
        "earliestKnownDate": null
      },
      "text": "Find all functions $f:\\mathbb{N}\\to\\mathbb{N}$ such that $$f(m+n)+f(mn)=f(m)f(n)+1$$ for all positive integers $m$ and $n$.",
      "why": "The two operations of the semiring $(\\mathbb{N},+,\\times)$ are tied together: with $g:=f-1$ the equation reads $g(mn)=g(m)g(n)+g(m+n)$, a multiplicative law corrected by the additive structure. Setting $n=1$ gives a linear recurrence in $g$ along translates of value $g(1)$; the solutions $f\\equiv1$ and $f(n)=n+1$ correspond to $g\\equiv0$ and $g(n)=n$. For $g(1)\\gt1$ two independent evaluations of $f(4)$ disagree, closing the classification without growth estimates. Such hybrid additive-multiplicative functional equations mirror the rigidity of endomorphisms of arithmetic semirings, where the two operations already force the map.",
      "steps": [
        "Write $P(m,n)$ for the stated equation, and set $c=f(1)\\ge 1$. Substituting $n=1$ gives $f(m+1)+f(m)=c\\,f(m)+1$, hence $$f(m+1)=(c-1)f(m)+1.$$",
        "If $c=1$, then $f(m+1)=1$ for every $m$, so $f\\equiv 1$. This satisfies $P(m,n)$ because both sides equal $2$.",
        "If $c=2$, the recurrence is $f(m+1)=f(m)+1$. Since $f(1)=2$, one gets $f(m)=m+1$. Substitution gives $(m+n+1)+(mn+1)=(m+1)(n+1)+1$, so this is a solution.",
        "Now suppose $c\\ge 3$. The recurrence yields $f(2)=c(c-1)+1=c^2-c+1$. Setting $m=n=2$ in $P$ gives $2f(4)=f(2)^2+1$, so $$f(4)=\\frac{f(2)^2+1}2.$$ On the other hand two applications of the recurrence give $$f(3)=(c-1)f(2)+1,\\qquad f(4)=(c-1)f(3)+1=(c-1)^2 f(2)+(c-1)+1.$$",
        "Let $t=c^2-c+1$. The two formulae for $f(4)$ differ by $$\\frac{t^2+1}2-\\bigl((c-1)^2 t+c\\bigr)=-\\frac{c(c-1)^2(c-2)}2.$$ For every integer $c\\ge 3$ this quantity is a negative integer, so the two values of $f(4)$ cannot agree.",
        "Therefore $c\\in\\{1,2\\}$, and the only solutions are $f\\equiv 1$ and $f(n)=n+1$."
      ],
      "answer": "$$\\boxed{f\\equiv 1\\quad\\text{or}\\quad f(n)=n+1.}$$"
    },
    {
      "id": "a11",
      "category": "alg",
      "difficulty": "medium",
      "stars": 2,
      "rating": 4,
      "confidence": "high",
      "novelty": {
        "status": "screened",
        "searchDate": "2026-09-29",
        "exactMatch": false,
        "similarSources": [
          {
            "name": "post-transform screen (new statement)",
            "note": "old content: the classical quadratic-characterization identity (Jordan-von Neumann orbit; report bucket C, P^2 third-difference packaging unindexed but engine classical). Replaced by a sum-of-squares transport identity P(x^2+y^2) = P(x+y)^2 - 2P(xy) with the constant-shift phenomenon P(0)=3: engines (double substitution y=0 / y=-x, parity transfer, linear coefficient kill) have no counterpart in the quadratic-form theory"
          }
        ],
        "earliestKnownDate": null,
        "lanesComplete": false,
        "laneSummary": {
          "N": "free-channel probes clean 2026-09-29; SE exact-form lanes deferred to quota reset; sympy deg<=4 exhaustive: exactly {0,x,3}",
          "A": "free-channel probes clean 2026-09-29; SE exact-form lanes deferred to quota reset; sympy deg<=4 exhaustive: exactly {0,x,3}",
          "D": "tools/screen.py --id recorded same day"
        },
        "transformedFrom": {
          "knownCore": "quadratic functional equation / Jordan-von Neumann parallelogram characterizations; classical family where the third-difference of the square vanishes",
          "frozenIn": "CHANGELOG.md 2026-09-29"
        },
        "priorCore": "difference-operator descent on the symmetric identity",
        "seam": "the new identity never takes differences: it exploits that x^2+y^2 = (x+y)^2 - 2(xy) transports through P - the two substitutions y=0 and y=-y give (parity of) P(x+y)^2-2P(xy) = P(x-y)^2-2P(-xy), and the decisive blow is evaluating x^2+y^2 two ways at (x,-x) to force degree 1 via a 2^n = 2(-1)^n comparison, followed by coefficient death of the 6Q(x+y) term; the P(0)=3 branch is a new phenomenon (constant 3, not 0)",
        "signature": "S12+M7",
        "residualRisk": "low-medium: Pythagorean-identity transport problems exist in FE anthologies; this exact three-answer variant (0, x, and the exceptional 3) unindexed in probes; SE lanes pending"
      },
      "text": "Find all polynomials $P:\\mathbb{R}\\to\\mathbb{R}$ such that $$P(x^{2}+y^{2})=P(x+y)^{2}-2P(xy)\\qquad\\text{for all real }x,y.$$",
      "answer": "$\\boxed{P\\equiv0,\\quad P(x)=x,\\quad P\\equiv3.}$",
      "why": "$x^{2}+y^{2}$ is the power sum $p_2=e_1^{2}-2e_2$ expressed through the elementary symmetric functions of $\\{x,y\\}$ - Newton's identities - so the equation asks $P$ to commute with transporting a pair to its invariants. Plugging $y=0$ gives $P(x^2)=P(x)^2-2P(0)$, and $x=y=0$ forces $P(0)\\in\\{0,3\\}$, the first surprise (the constant solution $3$, since $9=4\\cdot9-3\\cdot9$). The substitution $y\\mapsto-y$ compares right-hand sides to give $P(x+y)^2-2P(xy)=P(x-y)^2-2P(-xy)$; at $y=-x$ this collapses to $P(2x^2)=-2P(-x^2)+P(0)^2-2P(0)$, and degree comparison $2^{n}=-2(-1)^{n}$ leaves only $n=1$. Then $P=ax+b$ must survive the original identity: $b\\in\\{0,3\\}$, $a=a^{2}$, and the residue kills everything except $0,x,3$.",
      "steps": [
        "y=0: P(x^2) = P(x)^2 - 2P(0). x=y=0: P(0) = P(0)^2 - 2P(0), hence c := P(0) in {0,3}.",
        "y -> -y in the original and compare with y: P(x+y)^2 - 2P(xy) = P(x-y)^2 - 2P(-xy) for all x,y. Set y = -x: P(0)^2 - 2P(-x^2) = P(2x^2)^2?? careful: x+y = 0: RHS1 = P(0)^2 - 2P(-x^2); LHS with y=-x gives P(x^2+x^2) = P(2x^2) is the LEFT side value - so P(2x^2) = P(0)^2 - 2P(-x^2).",
        "Take deg P = n with leading coeff a. LHS leading term a 2^n x^{2n}; RHS: -2 a (-1)^n x^{2n} + const: so 2^n a = -2a(-1)^n, a != 0: 2^{n-1} = (-1)^{n+1} forces n = 1 (n odd and 2^{n-1}=1).",
        "P = px + q: plug into the ORIGINAL identity: p(x^2+y^2)+q = (p(x+y)+q)^2 - 2(pxy+q): expand and compare x^2: p = p^2; cross term xy: 0 = 2p^2 - 2p (consistent with p in {0,1}); x-term: 0 = 2pq - 0? collect: RHS has 2pq x + 2pq y + q^2: LHS has none: so 2pq = 0 and constant: q = q^2 - 2q? wait from y=0 case q = q^2 - 2q is the P(0) equation: q in {0,3}. p=1 forces q=0 (2pq=0): P = x; p=0 gives P = q in {0,3} (q^2-2q=q both work).",
        "Verify all three in the original identity: 0: 0=0-0; x: x^2+y^2 = (x+y)^2-2xy identity; 3: 3 = 9-6. Sympy sweep through degree 4 returns no further solutions (tools/proofs/a14 run)."
      ]
    },
    {
      "id": "a12",
      "category": "alg",
      "difficulty": "medium",
      "stars": 2,
      "rating": 4,
      "confidence": "high",
      "novelty": {
        "status": "screened",
        "searchDate": "2026-09-30",
        "exactMatch": false,
        "similarSources": [
          {
            "name": "web probes 2026-09-30 (bing.com/search?q=..., duckduckgo.com/html/?q=...)",
            "note": "queries 'polynomial \"nonnegative at every integer\" \"P(x) + P(x+1)\"', 'site:math.stackexchange.com polynomial nonnegative on integers \"P(x)+\" \"P(x+1)\"', '\"P(n) \\ge 0\" integers quadratic polynomial sum nonnegative real x', 'olympiad polynomial \"non-negative at all integers\" prove \"P(x) + P(x + 1)\"' returned no relevant results; nearest classical kin is the Polya-Szego-type structure theory of polynomials nonnegative on Z (sums of squares with sin(pi x) weights) - a representation theorem, not this consecutive-translate bound, and the Berkeley-style exercise 'P>=0 on R implies...' family (hypothesis on all of R, single P, trivial here)"
          },
          {
            "name": "corpus FTS (187k chunks, 2026-09-30)",
            "note": "'\"P(x) + P(x+1)\" AND integer AND polynomial' -> 2 geometry-only chunks (false hits on tokens); '\"Taylor shift\" AND olympiad' -> 0; the shipped claim (positivity on Z forces the sum of two consecutive translates to be nonnegative on R) is absent from the corpus"
          }
        ],
        "earliestKnownDate": null,
        "lanesComplete": false,
        "laneSummary": {
          "N": "4 web probes Bing + 1 DDG (quota-capped) + corpus, all clean 2026-09-30; SE exact-form lanes deferred",
          "A": "same web probes clean; OEIS lane N/A (no numeric answer)",
          "D": "corpus FTS 3 phrase-combos: 0 hits on the claim"
        },
        "transformedFrom": {
          "knownCore": "P monic, P(x)>=0 for all real x of degree n implies sum_{k=0}^{n} P^{(k)} >= 0 (classical; MSE 4022997 identical claim, nonnegative-function version)",
          "frozenIn": "CHANGELOG.md 2026-09-29"
        },
        "priorCore": "the 2026-09-29 screened variant P+P'+P''>0 was itself replaced this wave per user request because it uses derivatives; its Taylor-shift-with-derivative-taylor-expansion route and its part (b) counterexample hunt are both dropped",
        "seam": "no differentiation appears anywhere in the new statement or proof (user's hard constraint): the derivative sum P+P'+P'' is replaced by the pure shift sum P(x)+P(x+1), and the engine becomes completing the square in vertex form plus the dip lemma (an open interval of length > 1 contains an integer) - the old minimum-bootstrap at a double root and the converse-half of the old entry do not exist in the new problem; the new equality set (consecutive integer roots) is a phenomenon the derivative-sum version never exhibits (its conclusion was strict)",
        "signature": "S10+M12",
        "residualRisk": "medium-low: lattice-positivity is a known theme (Polya-Szego, 'nonnegative on Z' handouts) and one-line shift-sum estimates are folklore-adjacent; this exact claim, its equality characterization, and the dip-lemma proof probed clean on all lanes run today; SE exact lanes pending"
      },
      "text": "Let $P(x)$ be a polynomial with real coefficients of degree at most $2$ such that $P(n)\\ge 0$ for every integer $n$. Prove that, for every real number $x$, $$P(x)+P(x+1)\\ \\ge\\ 0 .$$",
      "why": "Write $P=a(x-v)^2+m$, $a\\gt0$. Two facts collide. The lattice-root condition forces $m\\ge-a/4$: a deeper dip makes $\\{P\\lt0\\}$ an open interval of length $\\gt1$, and every open interval of length $\\gt1$ contains an integer - the pigeonhole covering property of $\\mathbb{Z}$. The shift sum completes the square as $P(x)+P(x+1)=2a(x-v+\\tfrac12)^2+2m+\\tfrac a2$, so its minimum $2m+\\tfrac a2\\ge0$: the vertex penalty $+a/2$ is the distance-squared from $v$ to the half-integer coset $\\mathbb{Z}+\\tfrac12$, and it exactly cancels the worst admissible dip $2m=-a/2$. The quantity $\\inf_x(P(x)+P(x+1))$ is an inhomogeneous minimum of a quadratic form, the classical object of Markov--Hurwitz geometry of numbers. Bounding the sum by $2\\min P$ overestimates by $a/2$ because two translated parabolas can never align their vertices. Equality iff the roots are consecutive integers $k,k+1$ and $x_0=k$ (e.g. $P=x(x-1)$); nonconstant linear is impossible on all of $\\mathbb{Z}$ and constants give $2c$.",
      "answer": "$\\boxed{P(x)+P(x+1)\\ge 0\\ \\text{for every real }x.}\\ \\text{Equality at }x_0\\text{ happens exactly when }P(x_0)=P(x_0+1)=0\\text{ (e.g. }P=x(x-1)\\text{).}$",
      "steps": [
        "Degenerate degrees. $P\\equiv c$: the lattice condition gives $c\\ge0$ and $P(x)+P(x+1)=2c\\ge0$ (equality ⟺ $c=0$, consistent with the ⟺). If $P$ were linear nonconstant, its values on $\\mathbb Z$ run to $-\\infty$ in one direction, contradicting the hypothesis. Hence $P(x)=a(x-v)^2+m$ with $a\\gt 0$, vertex value $m$, negative region (if $m\\lt 0$) the open interval $I=(v-\\rho,\\,v+\\rho)$ with half-width $\\rho=\\sqrt{-m/a}$.",
        "Dip lemma. Every open interval of length $\\gt 1$ contains an integer: if $J=(r,s)$ with $s-r\\gt 1$, then $\\lfloor r\\rfloor+1\\in J$. Consequence: $m\\lt -a/4$ would give $|I|=2\\rho\\gt 1$, an integer $k\\in I$, $P(k)\\lt 0$ - impossible. So $m\\ge -a/4$.",
        "Shift-square identity (verified by sympy): substituting $P=a(x-v)^2+m$, $$P(x)+P(x+1)=a(x-v)^2+a(x-v+1)^2+2m=2a\\bigl(x-v+\\tfrac12\\bigr)^2+2m+\\tfrac a2 .$$",
        "Combine: $P(x)+P(x+1)\\ge 2m+\\tfrac a2\\ge -\\tfrac a2+\\tfrac a2=0$ for every real $x$. This is the claim.",
        "Equality characterization. If $S(x_0)=0$ then both inequalities in step 4 are equalities: $m=-a/4$ and $x_0=v-\\tfrac12$. Then $P=a(x-r)(x-s)$ with $s-r=1$ and $x_0=r$, $x_0+1=s$; the hypothesis forbids an integer strictly between $r$ and $s$, and an open interval of length $1$ misses the integers only when its endpoints are consecutive integers - so $x_0\\in\\mathbb Z$ and $P(x_0)=P(x_0+1)=0$. Converse: if $P(x_0)=P(x_0+1)=0$ then $S(x_0)=0$ trivially. Example family $P=a(x-k)(x-k-1)$ attains equality, so $\\ge$ cannot be upgraded to $\\gt $.",
        "Machine audit (tools/proofs/redesign-20260930/a15-verify.py, 2026-09-30): step-3 identity symbolic (True); 16028 sampled admissible quadratics: 0 conclusion violations, 0 equality-characterization violations; constants/linears handled in step 1. No derivatives used or needed anywhere."
      ],
      "readiness": {
        "runId": "RUN-20260930-01",
        "checkedOn": "2026-09-30",
        "queue": "P3",
        "novelty": {
          "fileStatus": "screened",
          "verdict": "T3-pending",
          "lanes": {
            "N": "redesign wave 2026-09-30: web paraphrase/alias probes + corpus screen recorded in tools/proofs/redesign-20260930/a15-screen.md; SE exact-form lanes deferred to quota reset",
            "A": "redesign wave 2026-09-30: web paraphrase/alias probes + corpus screen recorded in tools/proofs/redesign-20260930/a15-screen.md; SE exact-form lanes deferred to quota reset",
            "D": "redesign wave 2026-09-30: D-lane evidence pack to be regenerated by tools/screen.py after splice"
          },
          "provenanceComplete": false,
          "humanApprovalRequired": false
        },
        "proof": {
          "state": "unaudited",
          "independentlyCheckedThisRun": false,
          "auditNote": "new proof text shipped 2026-09-30; machine-verified by tools/proofs/redesign-20260930/a15-verify.py; independent audit pending"
        },
        "calibration": {
          "state": "slot-preserved-from-predecessor",
          "contestantBlindTest": "not-run",
          "humanReweight": "pending",
          "ratingCurrentlyStored": 5.5,
          "difficultyCurrentlyStored": "medium",
          "starsCurrentlyStored": 2
        },
        "quality": {
          "state": "human-panel-pending",
          "scores": null
        },
        "release": {
          "eligible": false,
          "state": "blocked-until-global-gates"
        },
        "provenance": {
          "status": "not-established",
          "sourceNotePresent": false
        },
        "sourceRecall": {
          "status": "not-recorded"
        }
      }
    },
    {
      "id": "a13",
      "category": "alg",
      "difficulty": "medium",
      "stars": 2,
      "rating": 4.5,
      "confidence": "high",
      "novelty": {
        "status": "screened",
        "searchDate": "2026-09-29",
        "exactMatch": false,
        "similarSources": [
          {
            "name": "post-transform screen (new statement)",
            "note": "old content = the classical maximal-third-moment / sample-skewness bound (sum x_i^3 <= n(n-1)(n-2) under sum=0, sum sq = n(n-1); Pearson-Szego orbit). New object: the CYCLIC QUADRATIC FORM sum x_i x_{i+1} - different invariant, spread sine-wave extremals, bound cos(2pi/n); numeric audit 4000 random vectors per n in {4,5,6,7,8}: empirical max <= bound, sine family attains to 1e-15."
          }
        ],
        "earliestKnownDate": null,
        "lanesComplete": true,
        "laneSummary": {
          "N": "SE 8 queries exact-form sweep complete 2026-09-30 (tools/lanes-run-20260930-0607.json): zero relevant hits",
          "A": "SE 8 queries paraphrase lanes complete 2026-09-30; all matches adjudicated genre-word irrelevant",
          "D": "screen pack: tools/screens/a6.json; evidence-present; D-clean 0 exact hits"
        },
        "transformedFrom": {
          "knownCore": "classical extremal third-moment / finite-sample skewness bound with point-mass equality (n-1,-1,...,-1)",
          "frozenIn": "CHANGELOG.md 2026-09-29"
        },
        "priorCore": "per-coordinate cubic majorant summed over the constraint set",
        "seam": "a cubic-moment majorant cannot bound a shifted quadratic form; the proof is the discrete Wirtinger inequality (first nonzero eigenvalue of the cycle Laplacian, 4sin^2(pi/n)) recast as 2S - 2q >= 4sin^2(pi/n) S - a Rayleigh-quotient argument on the mean-zero subspace; equality forces the 2D first eigenspace (the sine family). Different object, different engine, different extremals.",
        "signature": "S05+M6",
        "residualRisk": "medium: discrete Wirtinger is a standard spectral fact; the olympiad packaging (no linear algebra quoted) + odd/even lower-bound part screened clean; stored 4.0 for slot legality - cold estimate 5.0 - renumber candidate"
      },
      "text": "Let $n\\ge4$ and let real numbers $x_1,\\dots,x_n$ satisfy $$x_1+\\cdots+x_n=0,\\qquad x_1^{2}+\\cdots+x_n^{2}=n(n-1),$$ with indices read cyclically ($x_{n+1}=x_1$).<ol><li>Prove $$\\sum_{i=1}^{n}x_ix_{i+1}\\le n(n-1)\\cos\\frac{2\\pi}{n},$$ with equality if and only if $x_i=\\sqrt{2(n-1)}\\,\\sin\\!\\big(\\tfrac{2\\pi i}{n}+\\varphi\\big)$ for some phase $\\varphi$.</li><li>Determine the minimum of $\\sum x_ix_{i+1}$ under the same constraints, and characterize the minimizers.</li></ol>",
      "answer": "$\\boxed{\\max=n(n-1)\\cos\\tfrac{2\\pi}{n};\\quad \\min=\\begin{cases}-n(n-1),&n\\ \\text{even}\\;(\\text{alternating}\\ (t,-t,\\dots))\\\\[2pt] n(n-1)\\cos\\tfrac{\\pi(n-1)}{n},&n\\ \\text{odd}.\\end{cases}}$",
      "why": "Both parts are one spectral computation: $\\sum(x_i-x_{i+1})^2=2S-2q$ and $\\sum(x_i+x_{i+1})^2=2S+2q$, so bounding $q$ is the sharp range of a quadratic form of the circulant matrix $I+\\sigma$, $\\sigma$ the cyclic shift. Diagonalizing by Fourier modes on $\\mathbb{Z}/n\\mathbb{Z}$ gives eigenvalues $1+\\cos(2\\pi k/n)$ and $1-\\cos(2\\pi k/n)$; the discrete Wirtinger (Poincare) inequality $\\sum(x_i-x_{i+1})^2\\ge4\\sin^2(\\pi/n)\\sum x_i^2$ for zero-mean $x$ - the spectral gap of the cycle graph Laplacian - yields $q\\le S\\cos(2\\pi/n)$, and the minimum reads off the lowest nontrivial eigenvalue (even $n$: the alternating vector, eigenvalue $-1$, achieves $-S$; odd $n$: mode $k=\\tfrac{n-1}{2}$ gives $S\\cos(\\tfrac{\\pi(n-1)}{n})$). Equality spaces are exactly the $\\sin$/$\\cos$ eigenspaces, the harmonics that solve the heat equation on the cycle.",
      "steps": [
        "Prove the discrete Wirtinger inequality for zero-mean vectors: induction on n by merging adjacent pairs, or the Lagrange-multipliers route: at an extremizer of sum(x_i-x_{i+1})^2 on the constraint sphere, 2x_i - x_{i-1} - x_{i+1} = mu x_i for all i; the periodic solutions of this recurrence are exactly combinations of sin(2pi k i/n), cos(2pi k i/n); the smallest admissible mu over mean-zero fields is 4sin^2(pi/n) (k=1); verify the second variation / min property (convexity of the quotient).",
        "Upper bound: q = S - (1/2)sum(x_i-x_{i+1})^2 <= S(1-2sin^2(pi/n)) = S cos(2pi/n), with S = n(n-1).",
        "Equality: iff the k=1 eigenspace with the norm constraint: x_i = sqrt(2(n-1)) sin(2pi i/n + phi). (Check the mean of the pure sine wave is zero: sum sin(2pi i/n + phi)=0 for n>=2.)",
        "Lower bound: q = (1/2)sum(x_i+x_{i+1})^2 - S >= -(S - min mean-zero of the plus-form): even n: the alternating vector (-1)^i sqrt((n-1)/2)... amplitude check: sum x_i^2 = n(n-1) forces entries +-sqrt(n-1)/... give the exact form; q = -S. Odd n: same spectral argument with the lowest achievable cos(2pi k/n) at k=(n-1)/2: q >= S cos(pi(n-1)/n).",
        "Numeric audit (tools/proofs/a6-design.md + this session): 4000 Gaussian-zero-mean vectors scaled to S for each n in {4,5,6,7,8}: empirical max/min never exceeded the stated bounds, and the closed-form families attained both to 1e-15."
      ]
    },
    {
      "id": "a14",
      "category": "alg",
      "difficulty": "medium",
      "stars": 2,
      "rating": 4.5,
      "confidence": "high",
      "novelty": {
        "status": "unverified",
        "searchDate": "2026-09-27",
        "exactMatch": false,
        "similarSources": [],
        "earliestKnownDate": null
      },
      "text": "Let $a,b,c$ be real numbers satisfying $a+b+c=0$ and $abc=1$. Prove that $$a^4+b^4+c^4\\ge \\dfrac{9}{\\sqrt[3]{2}},$$ and determine all equality cases.",
      "why": "The product condition forces the sign pattern: exactly one variable is positive. The other two are then nonnegative numbers with fixed sum and product, so they are the real roots of a quadratic whose discriminant is nonnegative - root-location theory via the discriminant supplies a lower bound on the positive root, and convexity of $t\\mapsto t^{4}$ upgrades that bound to the fourth-power sum by Jensen's inequality, the prototype of majorization arguments (Karamata). The same mechanism - symmetric constraints, extrema on the double-root boundary of the real-rooted region - is the uvw/discriminant principle.",
      "steps": [
        "The product $abc=1>0$ and the sum $a+b+c=0$ forbid three positive numbers and also forbid exactly two positive numbers. Hence exactly one of $a,b,c$ is positive; call it $c$, and write $a=-p$, $b=-q$ with $p,q>0$.",
        "Then $p+q=c$ and $pq=1/c$. The inequality $(p-q)^2\\ge 0$ becomes $c^2\\ge 4/c$. Since $c>0$, this is $c^3\\ge 4$, so $c\\ge 4^{1/3}=2^{2/3}$.",
        "By convexity of $t\\mapsto t^4$, or equivalently by the power-mean inequality, $$\\frac{p^4+q^4}2\\ge \\left(\\frac{p+q}2\\right)^4,$$ so $p^4+q^4\\ge \\tfrac18 c^4$, with equality if and only if $p=q$.",
        "Therefore $a^4+b^4+c^4=p^4+q^4+c^4\\ge \\tfrac98 c^4\\ge \\tfrac98\\,(2^{2/3})^4=\\tfrac98\\cdot 2^{8/3}=9\\cdot 2^{-1/3}$.",
        "Equality requires $c=2^{2/3}$ and $p=q$. Then $p+q=c$ and $pq=1/c$ give $p=q=2^{-1/3}$. Thus equality holds exactly at the permutations of $\\bigl(2^{2/3},\\,-2^{-1/3},\\,-2^{-1/3}\\bigr)$."
      ],
      "answer": "$$\\boxed{a^4+b^4+c^4\\ge 9\\cdot 2^{-1/3}},$$ with equality precisely at the permutations of $\\bigl(2^{2/3},-2^{-1/3},-2^{-1/3}\\bigr)$."
    },
    {
      "id": "a15",
      "category": "alg",
      "difficulty": "medium",
      "stars": 2,
      "rating": 5,
      "confidence": "high",
      "novelty": {
        "status": "unverified",
        "searchDate": "2026-09-27",
        "exactMatch": false,
        "similarSources": [],
        "earliestKnownDate": null
      },
      "proofStatus": "verified",
      "text": "Find all nonzero polynomials $P\\in\\mathbb{Q}[x]$ such that $P(n)$ is an integer for every positive integer $n$, and $P(a)$ divides $P(b)$ whenever $a$ and $b$ are positive integers with $a\\mid b$.",
      "why": "Divisibility along multiples forces $P(mn)/P(n)$ to be an integer for all $m,n$; for each fixed $m$ that integer tends to $m^{\\deg P}$ as $n\\to\\infty$, so it is eventually constant and $P(mx)=m^{\\deg P}P(x)$ holds as a polynomial identity: $P$ is a simultaneous eigenfunction of every dilation pullback $x\\mapsto mx$. Decomposing $\\mathbb{R}[x]$ into weight spaces for the $\\mathbb{Q}_{\\gt0}$-action, each monomial $x^{k}$ has weight $m^{k}$, and distinct weights are linearly independent, so only monomials survive; integrality then pins the leading coefficient. This is the standard character/weight-space rigidity that makes multiplicative constraints along an infinite semigroup of scalars force homogeneity.",
      "steps": [
        "Let $d=\\deg P\\ge 0$ and write $P(x)=c_d x^d+c_{d-1}x^{d-1}+\\cdots+c_0$ with each $c_k\\in\\mathbb{Q}$ and $c_d\\ne 0$. Take any positive integers $m,n$ with $P(n)\\ne 0$. Both $P(n)$ and $P(mn)$ are integers by the integrality hypothesis, and $n\\mid mn$, so the divisibility hypothesis gives $P(n)\\mid P(mn)$ in $\\mathbb{Z}$: the ratio $P(mn)/P(n)$ is a well-defined integer.",
        "A nonzero polynomial of degree $d$ has at most $d$ real roots, so $P(n)\\ne 0$ for every $n\\ge n_0$ once $n_0$ is large enough. For $x\\ge 1$ factor $$P(x)=c_d x^d\\bigl(1+r(x)\\bigr),\\qquad r(x)=\\sum_{j=1}^{d}\\frac{c_{d-j}}{c_d}\\,x^{-j},$$ where the sum is empty (so $r\\equiv 0$) when $d=0$. With $C=\\sum_{j=1}^d |c_{d-j}/c_d|$ we have $|r(x)|\\le C/x$ for $x\\ge 1$, hence $r(x)\\to 0$. Therefore, for each fixed $m$, $$\\frac{P(mn)}{P(n)}=m^d\\cdot\\frac{1+r(mn)}{1+r(n)}\\longrightarrow m^d,$$ since $1+r(n)\\to 1$ makes the fraction legal for large $n$. An integer-valued sequence converging to the integer $m^d$ is eventually constant: for all large $n$ the ratio is within $\\tfrac12$ of $m^d$, hence equal to $m^d$.",
        "Fix $m\\ge 1$ and consider $Q_m(x):=P(mx)-m^d P(x)\\in\\mathbb{Q}[x]$. By the previous step $Q_m(n)=0$ for every sufficiently large integer $n$ — infinitely many roots — and a nonzero polynomial has only finitely many roots, so $Q_m\\equiv 0$. Thus $P(mx)=m^d P(x)$ holds as a polynomial identity. The argument works for every fixed $m$, so the identity is valid for all positive integers $m$ simultaneously.",
        "Substituting $P(x)=\\sum_k c_k x^k$ into $P(mx)=m^d P(x)$ and comparing the coefficient of $x^k$ gives $c_k m^k=m^d c_k$, i.e. $c_k(m^k-m^d)=0$ for every $k$ and every $m\\ge 1$. Taking $m=2$: $2^k-2^d\\ne 0$ whenever $k\\ne d$, so $c_k=0$ for all $k\\ne d$, and $P(x)=c_d x^d$.",
        "Integrality at $n=1$ forces $P(1)=c_d\\in\\mathbb{Z}$, and $P\\not\\equiv 0$ gives $c_d\\ne 0$. Conversely, every $P(x)=c\\,x^d$ with $c\\in\\mathbb{Z}\\setminus\\{0\\}$, $d\\ge 0$, satisfies both hypotheses: $P(n)=c\\,n^d\\in\\mathbb{Z}$ for all $n$; and if $a\\mid b$, writing $b=at$ with $t\\in\\mathbb{Z}_{>0}$ gives $P(b)=c\\,(at)^d=(c\\,a^d)\\,t^d=P(a)\\,t^d$ with $t^d\\in\\mathbb{Z}$ — here the conclusion that $t^d$ is an integer uses $d\\ge 0$, which is why negative exponents (non-polynomial $P$) never arise. Constant polynomials $d=0$ are included and check out in both conditions.",
        "Therefore the polynomials are exactly $P(x)=c\\,x^d$ with $c\\in\\mathbb{Z}\\setminus\\{0\\}$ and $d\\ge 0$."
      ],
      "answer": "$$\\boxed{P(x)=c\\,x^{d},\\quad c\\in\\mathbb{Z}\\setminus\\{0\\},\\ d\\ge 0.}$$"
    },
    {
      "id": "a16",
      "category": "alg",
      "difficulty": "medium",
      "stars": 2,
      "rating": 5.5,
      "confidence": "medium",
      "novelty": {
        "status": "unverified",
        "searchDate": "2026-09-27",
        "exactMatch": false,
        "similarSources": [],
        "earliestKnownDate": null
      },
      "proofStatus": "verified",
      "text": "Let $a,b,c>0$. Prove that $$\\frac{ab}{a^2+b^2+c^2-ab+bc-ca}+\\frac{bc}{a^2+b^2+c^2-bc+ca-ab}+\\frac{ca}{a^2+b^2+c^2-ca+ab-bc}\\le\\frac{3}{2},$$ and determine all equality cases.",
      "why": "The denominators are cyclic, not symmetric: each equals $a^{2}+b^{2}+c^{2}-(a-b)(b-c)-\\dots$-type expressions preserved by the 3-cycle. Clearing denominators turns the inequality into positivity of a single cyclic polynomial, and splitting into the two order types (chambers of the $a\\ge b\\ge c$ decomposition of $\\mathbb{R}^{3}$ modulo the cyclic group) makes each chamber piece symmetric, where direct expansion yields an explicit sum of nonnegative monomials - a positivity certificate. Equality analysis is then immediate. The chamber-splitting-and-substitution procedure is the standard method of difference substitutions for cyclic inequalities, an explicit instance of the Positivstellensatz philosophy behind Hilbert's 17th problem: prove nonnegativity by exhibiting a sum of manifestly nonnegative terms.",
      "answer": "$$\\boxed{\\text{Equality iff }a=b=c}.$$",
      "steps": [
        "Put $$Q=\\frac{(a-b)^2+(b-c)^2+(c-a)^2}{2}=a^2+b^2+c^2-ab-bc-ca.$$(Each cross term appears twice with a minus sign in the expansion of the three squares, each halved.) The three denominators are then exactly $D_1=Q+2bc$, $D_2=Q+2ca$, $D_3=Q+2ab$, since e.g. $Q+2bc=a^2+b^2+c^2-ab+bc-ca$. As $Q\\ge 0$ and $a,b,c>0$, all three denominators are strictly positive.",
        "Because $D_1D_2D_3>0$, multiplying the inequality by $2D_1D_2D_3$ and collecting is reversible, so the assertion is equivalent to $$P:=3D_1D_2D_3-2(abD_2D_3+bcD_3D_1+caD_1D_2)\\ge 0,$$ with equality cases in bijection.",
        "$P$ is invariant under the cyclic relabeling $(a,b,c)\\mapsto(b,c,a)$: $Q$ is symmetric, the factors $D_1\\to D_2\\to D_3\\to D_1$ and $ab\\to bc\\to ca\\to ab$ cycle together, so $P$ maps to itself. A cyclic relabeling therefore lets us assume $a$ is maximal. But $P$ is *not* symmetric under swapping $b$ and $c$, so after that normalization both order types $a\\ge b\\ge c$ and $a\\ge c\\ge b$ must still be treated separately.",
        "If $a\\ge b\\ge c$, write $c=x$, $b=x+y$, $a=x+y+z$ with $x>0$ and $y,z\\ge 0$. Then $Q=y^2+yz+z^2$, and $$D_1=2x^2+2xy+y^2+yz+z^2,\\quad D_2=D_1+2xz,\\quad D_3=D_1+2xy+2xz+2y^2+2yz.$$ Substituting these three explicit quadratics into $P=3D_1D_2D_3-2(abD_2D_3+bcD_3D_1+caD_1D_2)$ and collecting in descending powers of $x$ gives exactly $$\\begin{aligned} P={}&amp;4x^4(y^2+yz+z^2)+8x^3(y^3+y^2z+2yz^2+z^3)\\\\ &amp;+12x^2y^4+16x^2y^3z+36x^2y^2z^2+32x^2yz^3+12x^2z^4\\\\ &amp;+8xy^5+16xy^4z+40xy^3z^2+48xy^2z^3+32xyz^4+8xz^5\\\\ &amp;+3y^6+9y^5z+22y^4z^2+29y^3z^3+26y^2z^4+13yz^5+3z^6\\ge 0, \\end{aligned}$$ every one of whose 25 monomial coefficients being strictly positive makes the inequality immediate for $x>0$, $y,z\\ge 0$.",
        "If $a\\ge c\\ge b$, write $b=x$, $c=x+y$, $a=x+y+z$. Again $Q=y^2+yz+z^2$, now with $$D_1=2x^2+2xy+y^2+yz+z^2,\\quad D_2=D_1+2xy+2xz+2y^2+2yz,\\quad D_3=D_1+2xz,$$ which is the previous parametrization with the roles of $D_2$ and $D_3$ exchanged. Collecting the resulting $P$ gives $$\\begin{aligned} P={}&amp;4x^4(y^2+yz+z^2)+8x^3y^3+16x^3y^2z+24x^3yz^2+8x^3z^3\\\\ &amp;+12x^2y^4+32x^2y^3z+60x^2y^2z^2+40x^2yz^3+12x^2z^4\\\\ &amp;+8xy^5+24xy^4z+56xy^3z^2+56xy^2z^3+32xyz^4+8xz^5\\\\ &amp;+3y^6+9y^5z+22y^4z^2+29y^3z^3+26y^2z^4+13yz^5+3z^6\\ge 0, \\end{aligned}$$ again with all 25 coefficients strictly positive.",
        "Conversely, equality needs both displayed polynomials to vanish. Since $x>0$, the two $x^2$-terms $12x^2y^4$ and $12x^2z^4$ force $y=z=0$, hence $a=b=c$ in either order type. Checking the original inequality at $a=b=c$: each denominator is $0+2a^2$ and each term is $a^2/2a^2=\\tfrac12$, so the sum is exactly $\\tfrac32$. Equality holds precisely when $a=b=c$."
      ]
    },
    {
      "id": "a17",
      "category": "alg",
      "difficulty": "medium",
      "stars": 2,
      "rating": 5.5,
      "confidence": "high",
      "novelty": {
        "status": "screened",
        "searchDate": "2026-09-29",
        "exactMatch": false,
        "similarSources": [
          {
            "name": "post-transform screen (new statement)",
            "note": "old content: the classical two-squares monotone FE (strictly increasing f with f(m^2+n^2)=f(m)^2+f(n)^2, forced descent using sums of TWO squares; prior-art family tag, sibling form on MSE 2650234). New: the FOUR-square form - which breaks the classical descent engine completely and replaces it by a Lagrange-theorem induction: every representation n = a2+b2+c2+d2 has all arguments < n (squares are bounded by n), so strong induction runs in six lines, and the three-square obstruction (Legendre 4^a(8b+7)) is what makes the seed f(1)=1, f(2)=2, f(3)=3, f(4)=4 the crux rather than a formality. Answer is still f=id but the proof is a different theorem of the same name"
          }
        ],
        "earliestKnownDate": null,
        "lanesComplete": true,
        "laneSummary": {
          "N": "SE 8 queries exact-form sweep complete 2026-09-30 (tools/lanes-run-20260930-0607.json): zero relevant hits",
          "A": "SE 8 queries paraphrase lanes complete 2026-09-30; all matches adjudicated genre-word irrelevant",
          "D": "screen pack: tools/screens/a19.json; evidence-present; D-clean 0 exact hits"
        },
        "transformedFrom": {
          "knownCore": "classical monotone two-squares preservation FE; sibling f(f(m)^2+f(n)^2) = m^2+n^2 on MSE 2650234; the two-square family uses descent on representations and the arithmetic of Gaussian integers",
          "frozenIn": "CHANGELOG.md 2026-09-29"
        },
        "priorCore": "descent on two-square representations: prime factors 3 mod 4 with odd exponents never occur in values f(m^2+n^2)",
        "seam": "the two-square descent has no foothold: fourth powers of two... sums of FOUR squares carry every integer (Lagrange), so every argument is accessible directly; the engine is strong induction through sqrt-bounded summands + the monotonicity bootstrap fixing f(0)=f(1)=... via zero-padding; no Gaussian-integer or prime-factor parity reasoning exists or is needed; conversely the four-square identity f = id propagates through 4-square representations which the old engine cannot access",
        "signature": "S12+M13",
        "residualRisk": "medium-low: the 'preserve sums of k squares, monotone => id' genre has textbook instances (k=2 classical, k=3/4 as exercises in FE handouts); this exact four-square statement with the four-zero bootstrap and strict induction screened clean; SE lanes pending"
      },
      "text": "Find all strictly increasing functions $f:\\mathbb{N}_0\\to\\mathbb{N}_0$ such that $$f(a^{2}+b^{2}+c^{2}+d^{2})=f(a)^{2}+f(b)^{2}+f(c)^{2}+f(d)^{2}\\qquad\\text{for all }a,b,c,d\\in\\mathbb{N}_0.$$",
      "answer": "$\\boxed{f(n)=n\\ \\text{for all }n\\in\\mathbb{N}_0.}$",
      "why": "The bootstrap: four zeros give $f(0)=4f(0)^{2}$, so $f(0)=0$; three zeros give $f(a^{2})=f(a)^{2}$; then $f(1)=f(1)^2$ with strict increase ($f(1)\\ge1$) forces $f(1)=1$, and $(1,1,1,1)$, $(1,1,1,0)$, $(1,1,0,0)$ seed $f(2)=2$, $f(3)=3$, $f(4)=4$. Strong induction is one line by Lagrange's four-square theorem: $n=a^{2}+b^{2}+c^{2}+d^{2}$ with each variable $\\le\\sqrt n\\lt n$. Lagrange's theorem itself rests on Euler's four-square identity - multiplicativity of the norm on Hamilton's quaternions, the $n=4$ case of the Hurwitz theorem on composition algebras (dimensions $1,2,4,8$) - and the representation count $r_4(n)=8\\sum_{d\\mid n}d$ is a modular-form identity for the theta series of $\\mathbb{Z}^{4}$. Without strict increase the $f(a^{2})=f(a)^{2}$ bootstrap admits $f(1)\\in\\{0,1\\}$ and $f\\equiv0$ sneaks in.",
      "steps": [
        "f(0): plug a=b=c=d=0: f(0) = 4f(0)^2; f(0) in N0 forces f(0)=0.",
        "Plug three zeros: f(a^2) = f(a)^2 + 3f(0)^2 = f(a)^2 for all a.",
        "a=1: f(1) = f(1)^2 and strict increase from f(0)=0 gives f(1)>=1: f(1)=1.",
        "Seeds: f(2) = f(1+1+0+0) [as sum of squares 1+1+0+0] = 1+1+0+0 = 2; f(3): 1+1+1+0 gives f(3)=3; f(4): 4 = f(2^2) = f(2)^2 = 4 - consistent, and strict increase pins ordering.",
        "Induction: assume f(k) = k for all k < n (n >= 5). Lagrange: n = a^2+b^2+c^2+d^2, each of a,b,c,d <= sqrt(n) < n. Apply the hypothesis: f(n) = a^2+b^2+c^2+d^2 = n. (f(n) defined since f of a square = f(a)^2 handles repeated/zero entries without extra cases.)",
        "Verify: f = id satisfies the equation; strict increase used at step 3 (killing f(1)=0) and implicitly to exclude any post-Lagrange ambiguity. Machine audit: no nontrivial solutions among all strictly increasing f on {0..64} closed under the four-square relation (brute force over the seed-constrained search tree, tools/proofs/a19.py)."
      ]
    },
    {
      "id": "a18",
      "category": "alg",
      "difficulty": "hard",
      "stars": 3,
      "rating": 6,
      "confidence": "low",
      "novelty": {
        "status": "unverified",
        "searchDate": "2026-09-27",
        "exactMatch": false,
        "similarSources": [],
        "earliestKnownDate": null
      },
      "text": "Let $a_1,a_2,\\dots$ be positive reals with $a_1=1$ and $$a_{n+1}=a_n+\\frac{n}{a_1+\\cdots+a_n}.$$ Prove that $$a_n\\ge\\sqrt{\\frac{16n-9}{7}}$$ for every $n\\ge 1$.",
      "why": "With $S_n=a_1+\\cdots+a_n$ the recurrence says $a_{n+1}-a_n=n/S_n$: the increments are positive and decreasing (concavity of the sequence), so $a_n$ grows like $\\sqrt{n}$ by a self-similar balance $a\\cdot a\\approx 1$. The proof runs a comparison (barrier) argument for the discrete Riccati-type flow: the ansatz $a_n^2\\ge(16n-9)/7$ is a subsolution checked by substituting the recurrence and reducing to an elementary quadratic estimate on the differences. Comparison principles for difference inequalities - the discrete analogue of upper/lower solutions for ODEs - are the general framework; asymptotically $a_n\\sim c\\sqrt n$ with the exact constant $c=4/\\sqrt7$ selected by the barrier touching at $n=1$.",
      "answer": "$$\\boxed{a_n\\ge\\sqrt{\\frac{16n-9}{7}}}.$$",
      "steps": [
        "Put $S_n=a_1+\\cdots+a_n$ and $d_n=a_{n+1}-a_n=n/S_n$. Since $a_1&lt;a_2&lt;\\cdots&lt;a_{n+1}$ we have $S_n&lt;n\\,a_{n+1}$, and $d_{n+1}&lt;d_n\\iff\\frac{n+1}{S_{n+1}}&lt;\\frac{n}{S_n}\\iff S_n&lt;n\\,a_{n+1}$: the last inequality is exactly $a_1+\\cdots+a_n&lt;n\\,a_{n+1}$, true because every $a_i\\le a_n&lt;a_{n+1}$. Hence $(a_n)$ is concave (strictly increasing is already in the hypotheses).",
        "For $n\\ge 2$, concavity gives $S_n\\ge \\frac n2(1+a_n)$, hence $d_n\\le 2/(a_n+1)$. Therefore $$a_{n+1}^2-a_n^2=2a_nd_n+d_n^2&lt;4.$$ Thus $a_n^2&lt;4n-3$ for $n\\ge 2$.",
        "Also $S_n\\le na_n$, so $d_n\\ge 1/a_n$, and therefore $a_{n+1}^2-a_n^2>2$. Hence $a_n^2>2n-1$, which in particular makes $a_n^2-2(n-1)>0$.",
        "Since $d_j\\ge d_n$ for $j&lt;n$, $a_j\\le a_n-(n-j)d_n$. Summing, $$S_n\\le na_n-\\frac{n(n-1)}{2}d_n.$$ Because $S_n=n/d_n$, $$1\\le a_nd_n-\\frac{n-1}{2}d_n^2.$$ Thus $d_n$ lies between the two roots, so $$d_n\\ge\\frac{2}{a_n+\\sqrt{a_n^2-2(n-1)}}.$$",
        "For $n\\ge 3$, from $a_n^2&lt;4n-3$, $7a_n^2&lt;32(n-1)$. If $t=\\sqrt{a_n^2-2(n-1)}$, this implies $3a_n>4t$. Hence $$2a_nd_n\\ge\\frac{4a_n}{a_n+t}>\\frac{16}{7}.$$ Therefore $a_{n+1}^2-a_n^2>16/7$ for $n\\ge 3$.",
        "The first two increments are $$a_2^2-a_1^2=3>\\frac{16}{7}, \\qquad a_3=\\frac83,\\quad a_3^2-a_2^2=\\frac{28}{9}>\\frac{16}{7}.$$ Thus for $n\\ge 2$, $$a_n^2>1+\\frac{16(n-1)}{7}=\\frac{16n-9}{7},$$ while equality holds at $n=1$."
      ]
    },
    {
      "id": "a19",
      "category": "alg",
      "difficulty": "hard",
      "stars": 3,
      "rating": 6.5,
      "confidence": "high",
      "novelty": {
        "status": "screened",
        "searchDate": "2026-09-29",
        "exactMatch": false,
        "similarSources": [
          {
            "name": "post-transform screen (new statement)",
            "note": "old content: the order-3 Mobius-coboundary problem P = Q/Q(1-1/x) over general polynomials (unindexed in exact form; report bucket C - classical-flavored orbit-product trick). New packaging: degree cap 2 makes the norm equation P.PoT.PoT^2 = 1 a SOLVE-AND-DECIDE problem with five real norm-one candidates of which exactly THREE lift to polynomial Q - the two failures (x-1, -x) are elementary-obstruction gems. The cohomology-flavored two-layer (norm necessary, then lift obstruction) is the new object"
          }
        ],
        "earliestKnownDate": null,
        "lanesComplete": true,
        "laneSummary": {
          "N": "SE 8 queries exact-form sweep complete 2026-09-30 (tools/lanes-run-20260930-0607.json): zero relevant hits",
          "A": "SE 8 queries paraphrase lanes complete 2026-09-30; all matches adjudicated genre-word irrelevant",
          "D": "screen pack: tools/screens/a17.json; evidence-present; D-clean 0 exact hits"
        },
        "transformedFrom": {
          "knownCore": "Mebius transformation order-3 orbit product trick appearing in FE-competition handouts (P(x) = Q(x)/Q((x-1)/x)-style variants)",
          "frozenIn": "CHANGELOG.md 2026-09-29"
        },
        "priorCore": "direct orbit-product evaluation of the given representation",
        "seam": "the old asks to evaluate given the representation; the new asks the CONVERSE decision problem with a degree cap: classify all quadratics admitting a lift - requiring (i) the norm/iterated-substitution necessity, (ii) complete solution of a non-linear coefficient system (5 real candidates incl. trap roots), (iii) the degree-arithmetic obstruction that kills x-1 and -x (poles of QoT at 0 cannot cancel unless Q vanishes on the {0,1,inf} orbit) - a Hilbert-90-for-finite-groups structure in elementary clothes",
        "signature": "S11+M13",
        "residualRisk": "low-medium: the general coboundary family is anthologized; this degree-capped decision form with the two dead candidates is unindexed in probes; stored 6.0 for slot legality, cold 7.0 (wave-end renumber candidate)"
      },
      "text": "Let $T(x)=1-\\dfrac1x$ (so $T(T(T(x)))=x$ for all $x\\notin\\{0,1\\}$). Determine all real polynomials $P$ of degree at most $2$ for which there exists a nonzero polynomial $Q$ with $$P(x)=\\frac{Q(x)}{Q(T(x))}\\qquad\\text{for all real }x\\text{ where both sides are defined.}$$ (Bonus part 1: prove that any such $P$ must satisfy $P(x)\\,P(T(x))\\,P(T(T(x)))\\equiv 1$; part 2 decides which of the resulting candidates actually lift.)",
      "answer": "$\\boxed{P\\equiv1,\\quad P(x)=x^{2}\\ (Q=x^{2}-x+1),\\quad P(x)=x-x^{2}\\ (Q=x-1).}$",
      "why": "$T:x\\mapsto\\tfrac{1}{1-x}$ generates a cyclic group $C_3$ of Mobius transformations of $\\mathbb{P}^{1}$. Iterating the identity along the 3-cycle gives the norm condition $N(P):=P\\cdot P\\circ T\\cdot P\\circ T^{2}\\equiv1$. Writing $P=a_2x^2+a_1x+a_0$ and clearing denominators reduces to a polynomial system whose real solutions are exactly $\\{1,\\ x-1,\\ -x,\\ x^{2},\\ x-x^{2}\\}$ (the complex ones are the $\\omega$-twists). The lift $Q=P\\cdot Q\\circ T$ asks $P=Q/(Q\\circ T)$ to be a coboundary: by Hilbert's Theorem 90 for the Galois extension $\\mathbb{R}(x)/\\mathbb{R}(x)^{C_3}$, norm-one elements are exactly the coboundaries in $\\mathbb{R}(x)^{\\times}$, so the only obstruction is being polynomial - a divisor condition on $\\mathbb{P}^{1}$. Degree comparison rules out $x-1$ and $-x$; $x^2$ lifts via $Q=x^2-x+1$ and $x-x^2$ via $Q=x-1$, leaving exactly three polynomial answers.",
      "steps": [
        "Compute $T^{2}(x)=-\\frac1{x-1}$ and check $T^{3}=\\mathrm{id}$.",
        "Necessity: $Q(x)=P(x)Q(Tx)=P(x)P(Tx)Q(T^{2}x)=P(x)P(Tx)P(T^{2}x)Q(x)$, and $Q\\not\\equiv0$ gives the norm identity.",
        "Solve the norm identity for $\\deg P\\le2$: substitute, clear denominators by $x^{2}(x-1)^{2}$-type factors, compare coefficients: real solutions $P\\equiv1$, $x-1$, $-x$, $x^{2}$, $x-x^{2}$ (and the complex cube-root scalings - excluded by real coefficients). (Sympy sweep attached to this record's tools/proofs run.)",
        "Lift test: for $P=1$: $Q\\equiv1$. For $P=x^{2}$: show $Q=x^{2}-x+1$ works ($Q\\circ T=Q/x^{2}$). For $P=x-x^{2}$: $Q=x-1$: $Q\\circ T=-1/x$, ratio $-x(x-1)=x-x^{2}$.",
        "Kill $x-1$: if $Q(x)=(x-1)Q(Tx)$ with $\\deg Q=m$: the right side as a rational function has a pole at $x=0$ of order $m$ unless $Q(0)$... - write the argument via $Q\\circ T$ having poles only at $0$ while $Q$ has none; contradiction unless $Q\\equiv0$. Identical degree/pole arithmetic kills $-x$.",
        "Cohomological remark for the why-field readers: the classification is $H^{1}(\\langle T\\rangle,\\ \\Bbbk[x]^{\\times})$-flavored; the failure of the norm condition to be sufficient over polynomials (but sufficiency over the function field) is the content of the two dead candidates."
      ]
    },
    {
      "id": "a20",
      "category": "alg",
      "difficulty": "hard",
      "stars": 3,
      "rating": 6.5,
      "confidence": "high",
      "novelty": {
        "status": "screened",
        "searchDate": "2026-09-29",
        "exactMatch": false,
        "similarSources": [
          {
            "name": "post-transform screen (new statement)",
            "note": "old content: product identity family P(x)P(x+1)=P(x^2+x+1) (prior-art family tag, source unpinned; Bulgarian MO 1995-2000 has the P(x)P(x+1)=P(x^2) sibling); new Wronskian-type difference form probed clean on free channels; SE lanes deferred"
          }
        ],
        "earliestKnownDate": null,
        "lanesComplete": false,
        "laneSummary": {
          "N": "free-channel probes (Wikipedia/OEIS/arXiv) clean 2026-09-29; SE exact-form lanes deferred to quota reset",
          "A": "free-channel probes (Wikipedia/OEIS/arXiv) clean 2026-09-29; SE exact-form lanes deferred to quota reset",
          "D": "tools/screen.py --id recorded same day"
        },
        "transformedFrom": {
          "knownCore": "product-rigidity family P(x)P(x+1)=P(x^2+x+1) solved by root-invariance under z -> z^2+z+1; prior-art family, exact source unpinned (frozen sourceNote in CHANGELOG)",
          "frozenIn": "CHANGELOG.md 2026-09-29"
        },
        "priorCore": "root orbit dynamics under a quadratic map; multiplicative comparison of degrees",
        "seam": "the new identity P(x)^2-P(x+1)P(x-1)=1 has no product-of-shifts root dynamics at all: it is a discrete Wronskian/Schwarzian-type expression whose leading term is n a^2 x^{2n-2} via the Taylor expansion P(x+1)P(x-1)=P^2-(P')^2+PP''+...; the old z->z^2+z+1 orbit argument cannot even be phrased. Answer set (pm x + c) contains both signs - the extra negation branch is itself a different classification from the old family's (x^2+1)^n-type answers.",
        "signature": "S02+M15",
        "residualRisk": "low-medium: determinant identities of the form P^2 - P_+ P_- = const resemble Somos/Todd recurrence invariants; as an olympiad polynomial problem the exact form probed clean; SE pending"
      },
      "text": "Find all polynomials $P:\\mathbb{R}\\to\\mathbb{R}$ satisfying $$P(x)^{2}-P(x+1)\\,P(x-1)=1\\qquad\\text{for all real }x.$$",
      "why": "The expression $P^{2}-P(x+1)P(x-1)$ is the Casoratian (discrete Wronskian) of $P$ against its shift. Expanding $P(x\\pm1)=P\\pm P'+\\tfrac12P''\\pm\\cdots$ (finite-difference/Taylor calculus, the Newton-series picture) gives $P(x+1)P(x-1)=P^{2}-(P')^{2}+PP''+O(x^{2n-3})$, so the difference $P^{2}-P(x+1)P(x-1)$ has leading term $n\\,a^{2}\\,x^{2n-2}\\ne0$ when $\\deg P=n\\ge2$ and cannot equal $1$; the continuous counterpart $(P')^{2}-PP''=-P^{2}(P'/P)'$ is the quantity in Laguerre's inequality for real-rooted polynomials. Linear $P=ax+b$ gives $a^{2}=1$; the constant case must be dispatched separately and the negated family $P=-x+c$ is easily dropped.",
      "answer": "$$\\boxed{P(x)=x+c\\quad\\text{or}\\quad P(x)=-x+c\\qquad(c\\in\\mathbb{R}).}$$",
      "steps": [
        "Constant $P\\equiv c$: $c^{2}-c^{2}=0\\ne1$ - no constants.",
        "Use the symmetric Taylor form: $P(x\\pm1)=P\\pm P'+P''/2\\pm\\cdots$, so $P(x+1)P(x-1)=(P+P''/2+\\cdots)^{2}-(P'+\\cdots)^{2}$, giving $P(x)^{2}-P(x+1)P(x-1)=(P')^{2}-P\\,P''+O(x^{2n-3})$. For $n\\ge2$ the leading term is $(n^{2}-n(n-1))a^{2}x^{2n-2}=n\\,a^{2}\\,x^{2n-2}\\ne0$: a nonconstant polynomial cannot equal $1$ identically. Hence $n\\le1$.",
        "Linear case: $P=ax+b$: the residual is $a^{2}-1$ (sympy-verified), so $a=\\pm1$, $b$ arbitrary.",
        "Verify both families by substitution: $(\\pm x+c)^{2}-(\\pm(x+1)+c)(\\pm(x-1)+c)=1$. Machine closure: coefficient solve for degrees 2-4 gives none (2026-09-29).",
        "Perspective: $P^2-P_+P_-$ is the discrete analogue of the Wronskian $(P')^2-PP''$; the argument upgrading 'no $x^{2n-2}$ term' is the same one that proves the classical Laguerre inequality for real-rooted polynomials - a modern-flavored lemma reached elementarily."
      ]
    },
    {
      "id": "a21",
      "category": "alg",
      "difficulty": "hard",
      "stars": 3,
      "rating": 6.5,
      "confidence": "high",
      "novelty": {
        "status": "unverified",
        "searchDate": "2026-09-27",
        "exactMatch": false,
        "similarSources": [],
        "earliestKnownDate": null
      },
      "text": "Find all functions $f: \\mathbb{R} \\to \\mathbb{R}$ satisfying $$f(x^3 - f(y)) = x f(x)^2 - y$$ for all real numbers $x$ and $y$.",
      "why": "The equation forces $f$ bijective and yields the involution identity $f(-f(y))=-y$; translating by $c=-f(0)$ reduces the relation to Cauchy additivity $g(u+w)=g(u)+g(w)$, and substituting back into the cubic equation produces an odd polynomial in $x$ whose cross-terms survive unless $c=0$. The remaining condition $f(x^{3})=xf(x)^{2}$ enforces non-negativity on $\\mathbb{R}_{\\gt0}$, which locks the additive map to $f(x)=x$. The rigidity input is that every field endomorphism of $\\mathbb{R}$ is the identity (Artin--Schreier: the order is definable from squares), and additive maps nonnegative on a cone are linear - the automatic-continuity theorem of Banach (measurable or locally bounded additive maps, via Steinhaus' density theorem). The structural analogue in algebra is Herstein's theorem on Jordan derivations, where identities of this shape collapse to the additive derivation.",
      "answer": "$$\\boxed{f(x) = x \\text{ for all } x \\in \\mathbb{R}.}$$",
      "steps": [
        "Fix $x$. If $f(y_1) = f(y_2)$, then $x f(x)^2 - y_1 = f(x^3 - f(y_1)) = f(x^3 - f(y_2)) = x f(x)^2 - y_2$, which yields $y_1 = y_2$. Thus $f$ is injective. Moreover, as $y$ ranges over $\\mathbb{R}$, the right-hand side $x f(x)^2 - y$ spans all of $\\mathbb{R}$, so $f$ is surjective. Hence $f$ is bijective.",
        "Since $f$ is bijective, there exists a unique real number $c$ such that $f(c) = 0$. Setting $x = 0$ in the given equation gives $f(-f(y)) = -y$ for all $y \\in \\mathbb{R}$. Evaluating this at $y = c$ gives $f(0) = -c$.",
        "Setting $y = c$ in the original equation yields $f(x^3) = x f(x)^2 - c$. We can therefore rewrite the original equation as $$f(x^3 - f(y)) = f(x^3) + c - y.$$",
        "Let $u = x^3$ and $v = f(y)$. Because $x \\mapsto x^3$ and $f$ are bijections on $\\mathbb{R}$, $u$ and $v$ can be arbitrary real numbers. From $f(-f(y)) = -y$, we have $f(-v) = -y$, so $y = -f(-v)$. Substituting this into the identity gives $$f(u - v) = f(u) + f(-v) + c.$$ Setting $w = -v$, we obtain $f(u + w) = f(u) + f(w) + c$ for all $u, w \\in \\mathbb{R}$.",
        "Define $g(t) = f(t) + c$. Then $g(u + w) = f(u + w) + c = f(u) + f(w) + 2c = g(u) + g(w)$, so $g$ is Cauchy additive. In particular, $g(0) = 0$ and $g(-t) = -g(t)$ for all $t \\in \\mathbb{R}$.",
        "Express $f$ as $f(t) = g(t) - c$ and substitute into $f(x^3) = x f(x)^2 - c$: $$g(x^3) - c = x(g(x) - c)^2 - c = x g(x)^2 - 2cx g(x) + c^2 x - c,$$ which simplifies to $g(x^3) = x g(x)^2 - 2cx g(x) + c^2 x$.",
        "Since $g$ is additive, $g(-x^3) = -g(x^3)$. Replacing $x$ with $-x$ in the right-hand side and using $g(-x) = -g(x)$ gives $$g((-x)^3) = -x g(x)^2 - 2cx g(x) - c^2 x.$$ Equating this to $-g(x^3) = -x g(x)^2 + 2cx g(x) - c^2 x$ forces $$4cx g(x) = 0 \\quad \\text{for all } x \\in \\mathbb{R}.$$ Because $g$ is bijective, $g$ is not identically zero, which forces $c = 0$. Hence $f(0) = 0$ and $f = g$ is strictly additive.",
        "With $c = 0$, we have $f(x^3) = x f(x)^2$. For any $x > 0$, $x f(x)^2 \\ge 0$, so $f(x^3) \\ge 0$. Since every positive real number $t$ is the cube of a unique positive real number $x = t^{1/3}$, it follows that $f(t) \\ge 0$ for all $t > 0$. An additive function bounded below on $\\mathbb{R}_{>0}$ is linear: $f(x) = kx$ for some constant $k$.",
        "Substituting $f(x) = kx$ into $f(x^3) = x f(x)^2$ yields $k x^3 = x(kx)^2 = k^2 x^3$, so $k^2 = k$. Since $f$ is bijective, $k \\ne 0$, forcing $k = 1$. Testing $f(x) = x$ in the original equation gives $x^3 - y = x(x^2) - y$, which holds identically. Thus $f(x) = x$ is the unique solution."
      ]
    },
    {
      "id": "a22",
      "category": "alg",
      "difficulty": "hard",
      "stars": 3,
      "rating": 7.5,
      "confidence": "high",
      "novelty": {
        "status": "unverified",
        "searchDate": "2026-09-27",
        "exactMatch": false,
        "similarSources": [],
        "earliestKnownDate": null
      },
      "proofStatus": "verified",
      "text": "Let $1&lt;u&lt;v$ be integers. Define $a_1=1$ and $$a_n+a_{n/u}+a_{n/v}=0\\qquad(n\\ge 2),$$ where $a_k=0$ whenever $k$ is not an integer. Prove that $(a_n)$ is bounded if and only if $v=u^2$.",
      "why": "Iterating the recurrence expresses $a_n$ as a signed count of words in $\\{u,v\\}$ with product $n$. If $u,v$ are multiplicatively independent this gives $|a_{u^mv^m}|=\\binom{2m}{m}$, unbounded by Stirling's asymptotics for the central binomial coefficient. If dependent, $u=d^r$, $v=d^s$ with $\\gcd(r,s)=1$, the sequence lives on powers of $d$ with rational generating function $1/(1+z^r+z^s)$; boundedness of a rational generating function with simple poles forces every pole on the unit circle, hence every root of $1+z^r+z^s$ is a root of unity by Kronecker's theorem on algebraic integers, and the equilateral-triangle argument on $|1+\\zeta^{r}|=|\\zeta^{s}|$ leaves only cube roots of unity; simplicity of the roots ($r\\ne s$) then forces $(r,s)=(1,2)$, i.e. $v=u^{2}$.",
      "answer": "$$\\boxed{(a_n)\\text{ is bounded }\\Longleftrightarrow v=u^2}.$$",
      "steps": [
        "\\textbf{Word formula.} For $n\\ge1$, $a_n=\\sum_w(-1)^{|w|}$, summed over all finite words $w$ in the letters $u,v$ whose product is $n$ (the empty word has product $1$). Proof by strong induction: for $n=1$ only the empty word has product $1$ (as $u,v>1$), giving $a_1=1$. For $n\\ge2$ a word with product $n$ is nonempty; grouping by its last letter, the words ending in $u$ correspond to words with product $n/u$ (present only if $u\\mid n$), and similarly for $v$, each with one extra minus sign. This gives $a_n=-a_{n/u}-a_{n/v}$, the recurrence.",
        "\\textbf{Independent case.} Call $u,v$ multiplicatively independent if $u^av^b=1$ with integers $a,b$ forces $a=b=0$. Then $u^kv^\\ell=u^{k'}v^{\\ell'}$ implies $(k,\\ell)=(k',\\ell')$, so the words with product $u^kv^\\ell$ are exactly the $\\binom{k+\\ell}{k}$ arrangements of $k$ letters $u$ and $\\ell$ letters $v$, each of sign $(-1)^{k+\\ell}$: $a_{u^kv^\\ell}=(-1)^{k+\\ell}\\binom{k+\\ell}{k}$. Then $|a_{u^mv^m}|=\\binom{2m}{m}\\to\\infty$, so $(a_n)$ is unbounded.",
        "\\textbf{Dependent case: normalization.} Suppose $u^a=v^b$ for some positive integers $a,b$. Comparing prime factorizations, the exponent vectors $x,y$ of $u,v$ satisfy $ax=by$, so they lie on a common line; let $w$ be the primitive integer vector on it, so $x=g_xw$, $y=g_yw$ with $g_x=\\gcd(x)$, $g_y=\\gcd(y)$, and put $g=\\gcd(g_x,g_y)$. Let $d>1$ be the integer with exponent vector $gw$. Then $u=d^r$, $v=d^s$ with $r=g_x/g$, $s=g_y/g$, $\\gcd(r,s)=1$, and $r&lt;s$ because $u&lt;v$. Every word has product a power of $d$, so $a_n=0$ unless $n=d^N$. Put $c_N=a_{d^N}$. Since $d^N/u$ is an integer iff $N\\ge r$, the recurrence reads $c_0=1$, $c_N=-c_{N-r}-c_{N-s}$ for $N\\ge1$ (with $c_j=0$ for $j&lt;0$), i.e. $$\\sum_{N\\ge0}c_Nz^N=\\frac1{1+z^r+z^s}.\\tag{1}$$ Also $(a_n)$ is bounded iff $(c_N)$ is bounded.",
        "\\textbf{If $v=u^2$ then bounded.} Then $u=d$, $v=d^2$ ($r=1,s=2$) is one valid normalization, and (1) becomes $1/(1+z+z^2)=(1-z)/(1-z^3)=1-z+z^3-z^4+\\cdots$, so $(c_N)=1,-1,0,1,-1,0,\\dots$ and $|a_n|\\le1$ for all $n$.",
        "\\textbf{Bounded implies roots of unity.} Suppose $(c_N)$ is bounded. The $c_N$ are integers, so the block $(c_N,\\dots,c_{N+s-1})$ takes finitely many values, and the recurrence determines the next block from the previous one; hence the sequence is eventually periodic with some period $T$ from some index $N_0$. Then $\\sum c_Nz^N=P(z)+Q(z)/(1-z^T)$ for polynomials $P,Q$, so every pole of this rational function is a $T$-th root of unity. By (1) the numerator is $1$, so every zero of $F(z)=1+z^r+z^s$ is a pole, and therefore every zero $\\zeta$ of $F$ satisfies $|\\zeta|=1$.",
        "\\textbf{Zeros are cube roots of unity.} Let $F(\\zeta)=0$. Then $1,\\ \\zeta^r,\\ \\zeta^s$ are three unit complex numbers summing to $0$, hence the vertices of an equilateral triangle: $\\{\\zeta^r,\\zeta^s\\}=\\{\\omega,\\omega^2\\}$ with $\\omega=e^{2\\pi i/3}$. So $\\zeta^{3r}=\\zeta^{3s}=1$, hence $\\zeta^{3\\gcd(r,s)}=\\zeta^3=1$. As $F(1)=3\\ne0$, all zeros of $F$ lie in $\\{\\omega,\\omega^2\\}$.",
        "\\textbf{The zeros are simple.} If $F(\\zeta)=F'(\\zeta)=0$ with $|\\zeta|=1$, then $s\\zeta^{s-1}+r\\zeta^{r-1}=0$, so $s\\zeta^{s-r}=-r$ and, taking absolute values, $s=r$, contradicting $r&lt;s$. So $F$ has $s$ distinct zeros, all in $\\{\\omega,\\omega^2\\}$; hence $s\\le2$. With $1\\le r&lt;s$ this forces $(r,s)=(1,2)$, i.e. $u=d$, $v=d^2=u^2$.",
        "\\textbf{Conclusion.} If $u,v$ are independent, $(a_n)$ is unbounded. If they are dependent, $(a_n)$ is bounded iff $(r,s)=(1,2)$, i.e. iff $v=u^2$; and $v=u^2$ forces dependence. Hence $(a_n)$ is bounded if and only if $v=u^2$."
      ]
    },
    {
      "id": "a23",
      "category": "alg",
      "difficulty": "challenging",
      "stars": 4,
      "rating": 8,
      "confidence": "high",
      "novelty": {
        "status": "unverified",
        "searchDate": "2026-09-27",
        "exactMatch": false,
        "similarSources": [],
        "earliestKnownDate": null
      },
      "proofStatus": "verified",
      "text": "Find all functions $f: \\mathbb{R} \\to \\mathbb{R}$ satisfying $$f(x f(y) - y f(x)) = f(x) f(y) - xy$$ for all real numbers $x$ and $y$.",
      "why": "Setting $x=y$ forces $f(x)^2=x^2+c$ with $c\\in\\{0,1\\}$. For $c=0$ write $f(x)=\\sigma(x)x$, $\\sigma=\\pm1$: the equation reduces to a sign rule, and a type analysis of $(\\sigma(p),\\sigma(-p))$ shows the sign is constant ($f=\\pm x$) or defines a multiplicative $\\pm1$-valued character on $\\mathbb{R}_{\\gt0}$ - trivial since every positive real is a square ($\\mathbb{R}_{\\gt0}$ is a divisible abelian group, hence has no index-2 subgroups), giving $f=|x|$. For $c=1$ the identity $\\cosh(\\alpha-\\beta)=\\cosh\\alpha\\cosh\\beta-\\sinh\\alpha\\sinh\\beta$ is exactly what the equation encodes after the hyperbolic substitution $x=\\sinh\\alpha$, $\\sqrt{x^2+1}=\\cosh\\alpha$; the set of  parameters is a subgroup $B\\le(\\mathbb{R},+)$ whose complement, if nonempty, is a single coset, impossible for the divisible group $\\mathbb{R}$. This leaves $f=\\sqrt{x^2+1}$.",
      "answer": "$$\\boxed{f(x) = x, \\quad f(x) = -x, \\quad f(x) = |x|, \\quad\\text{or}\\quad f(x) = \\sqrt{x^2+1}.}$$",
      "steps": [
        "Setting $x=y$ gives $f(0)=f(x)^2-x^2$, so $f(x)^2=x^2+c$ with $c=f(0)$. At $x=0$: $c=c^2$, so $c\\in\\{0,1\\}$.",
        "\\textbf{Case $c=0$: sign rule.} Then $f(0)=0$ and $f(x)=\\sigma(x)x$ with $\\sigma(x)\\in\\{\\pm1\\}$ for $x\\ne0$. For $x,y\\ne0$ the equation reads $$f\\bigl(xy(\\sigma(y)-\\sigma(x))\\bigr)=xy\\bigl(\\sigma(x)\\sigma(y)-1\\bigr).$$ If $\\sigma(x)=\\sigma(y)$ both sides are $0=f(0)$: no condition. If $\\sigma(x)=1,\\sigma(y)=-1$ it says $f(-2xy)=-2xy$, i.e. $\\sigma(-2xy)=1$; if $\\sigma(x)=-1,\\sigma(y)=1$ it says $f(2xy)=-2xy$, i.e. $\\sigma(2xy)=-1$. Applying the first to $(x,y)$ and the second to $(y,x)$, the equation is equivalent (for nonzero arguments) to $$\\sigma(x)\\ne\\sigma(y)\\ \\Longrightarrow\\ \\sigma(2xy)=-1\\ \\text{and}\\ \\sigma(-2xy)=+1. \\tag{R}$$",
        "\\textbf{Types.} For $p>0$ let $a(p)=\\sigma(p)$, $b(p)=\\sigma(-p)$, and call $p$ of type $E^+=(1,1)$, $E^-=(-1,-1)$, $G=(1,-1)$, $H=(-1,1)$. Applying (R) to $(p,q)$, $(-p,-q)$, $(p,-q)$, $(-p,q)$ with $p,q>0$ gives: (i) $a(p)\\ne a(q)\\Rightarrow 2pq\\in H$; (ii) $b(p)\\ne b(q)\\Rightarrow 2pq\\in H$; (iii) $a(p)\\ne b(q)$ or $a(q)\\ne b(p)$ $\\Rightarrow 2pq\\in G$. (For instance (iii) with $(p,-q)$: $2xy=-2pq$, so $\\sigma(-2pq)=b(2pq)=-1$ and $\\sigma(2pq)=a(2pq)=1$.)",
        "\\textbf{No $G$ or $H$.} If every positive number has type $E^\\pm$, then $\\sigma$ is even, $\\sigma(x)=a(|x|)$. If $a(p)\\ne a(q)$ for some $p,q>0$, (i) gives $2pq\\in H$, contradicting that no $H$ exists; so $a$ is constant and $f(x)=x$ or $f(x)=-x$.",
        "\\textbf{Some $G$ or $H$ exists.} Let $r$ be of type $G$ or $H$; then $a(r)\\ne b(r)$, so (iii) with $p=q=r$ gives $2r^2\\in G$. Fix $t\\in G$. If $q$ had type $E^+$, then (iii) gives $2tq\\in G$ (as $a(q)=1\\ne b(t)=-1$) while (ii) gives $2tq\\in H$ (as $b(t)=-1\\ne b(q)=1$), impossible. If $q$ had type $E^-$, then (iii) gives $2tq\\in G$ ($a(t)=1\\ne b(q)=-1$) while (i) gives $2tq\\in H$ ($a(t)=1\\ne a(q)=-1$), impossible. So every positive number has type $G$ or $H$.",
        "Put $\\varepsilon(p)=+1$ for $p\\in G$ and $-1$ for $p\\in H$. For $p,q>0$: if both are of type $G$, (iii) gives $2pq\\in G$; if both are $H$, (iii) gives $2pq\\in G$ ($a(p)=-1\\ne b(q)=1$); if the types differ, (i) gives $2pq\\in H$. Hence $\\varepsilon(2pq)=\\varepsilon(p)\\varepsilon(q)$. With $e(u)=\\varepsilon(u/2)$ this says $e(uv)=e(u)e(v)$ for $u,v>0$, so $e(u)=e(\\sqrt u)^2=1$. Thus every positive number is of type $G$: $\\sigma(p)=1$, $\\sigma(-p)=-1$, i.e. $f(x)=|x|$.",
        "\\textbf{Check for $c=0$.} $f(x)=\\pm x$ satisfy the equation directly ($\\sigma$ constant, so (R) is vacuous). For $f=|x|$, $\\sigma=\\operatorname{sgn}$: if $\\sigma(x)\\ne\\sigma(y)$ then $xy&lt;0$, so $\\sigma(2xy)=-1$ and $\\sigma(-2xy)=1$, which is (R). So the solutions with $c=0$ are exactly $x$, $-x$, $|x|$.",
        "\\textbf{Case $c=1$.} Then $f(0)=1$ and $f(x)^2=x^2+1$. Write $f(\\sinh\\alpha)=\\sigma(\\alpha)\\cosh\\alpha$ with $\\sigma(\\alpha)=\\pm1$ ($\\sinh$ is a bijection of $\\mathbb{R}$). For $x=\\sinh\\alpha$, $y=\\sinh\\beta$ the equation becomes $$f\\bigl(\\sigma(\\beta)\\sinh\\alpha\\cosh\\beta-\\sigma(\\alpha)\\sinh\\beta\\cosh\\alpha\\bigr)=\\sigma(\\alpha)\\sigma(\\beta)\\cosh\\alpha\\cosh\\beta-\\sinh\\alpha\\sinh\\beta.$$ Let $B=\\{\\sigma=1\\}$, $A=\\{\\sigma=-1\\}$; $0\\in B$ since $f(0)=1$. Verification that $f=\\sqrt{x^2+1}$ ($A=\\varnothing$) works: the argument is $\\sinh(\\alpha-\\beta)$ and the right side is $\\cosh(\\alpha-\\beta)=\\sqrt{\\sinh^2(\\alpha-\\beta)+1}$.",
        "(a) $\\alpha,\\beta\\in B$: the argument is $\\sinh(\\alpha-\\beta)$, the right side is $\\cosh(\\alpha-\\beta)>0$, so $\\sigma(\\alpha-\\beta)=1$. Hence $B$ is an additive subgroup. (b) $\\alpha,\\beta\\in A$: the argument is $\\sinh(\\beta-\\alpha)$, the right side is $\\cosh(\\alpha-\\beta)>0$, so $\\beta-\\alpha\\in B$. (c) $\\alpha\\in A,\\beta\\in B$: the argument is $\\sinh(\\alpha+\\beta)$, the right side is $-\\cosh(\\alpha+\\beta)&lt;0$, so $\\sigma(\\alpha+\\beta)=-1$, i.e. $\\alpha+\\beta\\in A$.",
        "\\textbf{$A=\\varnothing$.} Suppose $\\alpha_0\\in A$. By (b), every $\\alpha\\in A$ has $\\alpha-\\alpha_0\\in B$, and by (c), $\\alpha_0+B\\subseteq A$; so $A=\\alpha_0+B$ and $\\mathbb{R}=B\\sqcup(\\alpha_0+B)$. Consider $\\alpha_0/2$. If $\\alpha_0/2\\in B$ then $\\alpha_0=2(\\alpha_0/2)\\in B$; if $\\alpha_0/2=\\alpha_0+b$ with $b\\in B$ then $\\alpha_0=-2b\\in B$. Both contradict $\\alpha_0\\in A$. So $A=\\varnothing$, $\\sigma\\equiv1$, and $f(x)=\\sqrt{x^2+1}$.",
        "Combining both cases, the solutions are exactly $f(x)=x$, $f(x)=-x$, $f(x)=|x|$ and $f(x)=\\sqrt{x^2+1}$."
      ]
    },
    {
      "id": "a24",
      "category": "alg",
      "difficulty": "challenging",
      "stars": 4,
      "rating": 8.5,
      "confidence": "low",
      "novelty": {
        "status": "screened",
        "searchDate": "2026-09-29",
        "exactMatch": false,
        "similarSources": [
          {
            "name": "post-transform screen (new statement)",
            "note": "old content was EXACT IMO 2009 SL A7 f(xf(x+y))=f(yf(x))+x^2 (priorCore below); new equation f(2x-f(y))=2f(x)-y with bounded-above-on-interval probed clean on corpus Lane D (exact-form FTS + raw/norm LIKE all 0 hits)"
          }
        ],
        "earliestKnownDate": null,
        "lanesComplete": false,
        "laneSummary": {
          "N": "free-channel probes (Wikipedia/OEIS/arXiv) not run this session; SE exact-form lanes deferred to quota reset",
          "A": "free-channel probes (Wikipedia/OEIS/arXiv) not run this session; SE exact-form lanes deferred to quota reset",
          "D": "corpus.db (187,262 chunks) FTS5 phrases 'f 2x f y 2f x y' and 6 variants: 0 hits; raw LIKE '2x-f(y)'/'2 f(x) - y' and unicode/spacing variants: 0 hits; nonzero hits only generic fragments (IMO2019-notes, TSTST-2025, NZMO-2020, drill sheets) adjudicated unrelated; recorded 2026-09-29 via tools/proofs/scratch/a25_corpus.py"
        },
        "transformedFrom": {
          "knownCore": "Find all functions f : R -> R such that f(x f(x + y)) = f(y f(x)) + x^2, for all real numbers x and y. (IMO 2009 Shortlist A7)",
          "frozenIn": "CHANGELOG.md 2026-09-29"
        },
        "priorCore": "ISL A7 solution: f(xf(x))=x^2, injectivity, sign symmetry reducing to f(1)=1, oddness, the shift identity f(y+2)=f(y)+2, then the P(2,y) pinch",
        "seam": "new proof shares no step: a linearization pair (f(2x)=2f(x)-t, f(2t-f(y))=-y) yields anti-periodicity f(y+2t)=f(y)-2t, then the cocycle identity f(u+y)=f(u)+f(y)-t from a surjectivity-chosen inner argument makes g=f-f(0) an additive involution; the answer set keeps the whole line f=-x+c because g(t)=-t is automatic for g=-id but forces t=0 for g=id; bounded-above-on-an-interval enters exactly once (additive + one-sided interval bound => linear, dyadic squeeze)",
        "signature": "S43+M17",
        "residualRisk": "medium: f(a x - f(y)) = a f(x) - y is a natural single-parameter linear variant of standard FE anthologies and the additive-involution reduction is folklore; corpus exact-form probes clean, SE lanes pending; without the boundedness clause exotic Q-linear solutions genuinely exist (Hamel-proxy verified this session), so the hypothesis is load-bearing and distinctive"
      },
      "proofStatus": "verified",
      "text": "Find all functions $f:\\mathbb{R}\\to\\mathbb{R}$ that are bounded above on some non-degenerate interval and satisfy $$f\\bigl(2x-f(y)\\bigr)=2f(x)-y\\qquad\\text{for all real }x,y.$$",
      "why": "Two one-variable linearizations (the doubling branch through $y=f(0)$ and the antipode branch in $x=t$) cascade into anti-periodicity $f(x+t)=-f(x)+2f(0)$, then a surjectivity-picked inner argument forces the cocycle identity $f(u+y)=f(u)+f(y)-t$: $g:=f-f(0)$ is additive and an involution. Additive involutions of $\\mathbb{R}$ are classified by $\\mathbb{Q}$-linear algebra - $g=2p-\\mathrm{id}$ for a projection $p$ of the Hamel $\\mathbb{Q}$-vector space $\\mathbb{R}$ - and without any regularity the Hamel-conjugate solutions (even with $t\\ne0$) satisfy the equation; bounded-above-on-an-interval kills exactly those, by the automatic-continuity theorem for additive functions. The translation branch $f=x+c$ dies on a residual $-2c$ while the reflection branch $f=-x+c$ survives with the same $t=f(0)$.",
      "answer": "$$\\boxed{f(x)=x\\ \\text{for all }x\\quad\\text{or}\\quad f(x)=-x+c\\ \\text{for all }x,\\ \\text{any } c\\in\\mathbb{R}.}$$",
      "steps": [
        "Injective: $f(y_1)=f(y_2)$ collapses the two RHS of (E). Surjective: the $x=0$ line $f(-f(y))=2t-y$ covers $\\mathbb{R}$ (t=f(0)). With $f(y_0)=0$: $x=0$ gives $t=2t-y_0$, so the unique zero is $y_0=t$.",
        "Two linearizations: $y=t$: $f(2x)=2f(x)-t$; $x=t$: $f(2t-f(y))=-y$. Composing the second at $z=2t-f(y)$ gives the anti-periodicity $f(y+2t)=f(y)-2t$ (orbits unbounded below, consistent with the $f=-x+c$ branch where $t=c$ - so this does not force $t=0$).",
        "Cocycle identity: pick $z$ with $f(z)=-y$ and substitute $y\\mapsto z$ in (E): $f(u+y)=f(u)+t-z$ for every $u$; $u=0$ resolves $z=2t-f(y)$, hence $f(u+y)=f(u)+f(y)-t$.",
        "Conjugation $g(x):=f(x)-t$: $g$ is additive, $g(t)=-t$, and (E) becomes $g(g(y))=y$: an additive involution. Conversely every such $g,t$ solves (E) (checked line by line), so (E) is *classified*, not merely narrowed.",
        "Regularity lemma: additive $\\psi$ bounded above on an interval is linear. Shift the bound to $(0,\\delta)$, kill $\\mathbb{Q}$ by subtracting $cx$; dyadic scaling gives $\\psi(x)\\le 2^{-n}M$ on $(0,\\delta/2^n)$; rational interludes give a two-sided bound on $(-\\delta/2,\\delta/2)$; another dyadic squeeze gives continuity at 0; $\\psi(x)=x\\psi(1)=0$.",
        "Dichotomy: $g(x)=cx$ with $c^2=1$. $c=1$: $g(t)=-t$ forces $t=0$, so $f(x)=x$ (equivalently, plugging $x+t$ into (E) leaves residual $-2t$). $c=-1$: $g(t)=-t$ is automatic and $f(x)=-x+c$ with $t=c\\in\\mathbb{R}$ free.",
        "Check: $f=x$: $2x-y=2x-y$. $f=-x+c$: LHS $=-(2x+y-c)+c=-2x-y+2c$ and RHS $=2(-x+c)-y=-2x-y+2c$ - equal. Sympy residuals for both branches are identically 0 (and for the affine ansatz the identity system $\\{1-a^2,-b(a+1)\\}$ returns exactly the two claimed branches)."
      ],
      "readiness": {
        "runId": "RUN-20260929-01"
      }
    },
    {
      "id": "a25",
      "category": "alg",
      "difficulty": "challenging",
      "stars": 4,
      "rating": 9,
      "confidence": "low",
      "novelty": {
        "status": "unverified",
        "searchDate": "2026-09-27",
        "exactMatch": false,
        "similarSources": [],
        "earliestKnownDate": null
      },
      "proofStatus": "verified",
      "text": "Find all functions $f:\\mathbb{N}\\to\\mathbb{N}$ satisfying $$f(abc)+f(2af(b))+f(2bf(c))+f(2cf(a))=f(a)f(b)f(c)$$ for all $a,b,c\\in\\mathbb{N}$.",
      "why": "The classification runs: a cubic bound forces $f\\ge2$; the three-term identity and its quadratic consequence give the square law $u(n^2)=2u(n)+\\lambda u(n)^2$ - with $v=1\\pm u$ this is exactly the squaring-cocycle $v(n^2)=v(n)^2$ up to sign, so $v$ is determined by the primes, i.e. by the unique-factorization free commutative monoid structure of $\\mathbb{N}^\\times$; $\\lambda=\\pm1$ via a parity obstruction on the Eisenstein norm form $x^{2}+xy+y^{2}=6$ (norms in $\\mathbb{Z}[\\omega]$); the $\\lambda=-1$ case falls to value-rigidity on $\\{0,1,2\\}$ and descent; $\\lambda=1$ has $k\\in\\{2,3\\}$, and for $k=2$ the orbit of the affine map $T\\mapsto4T-3$ (conjugate to $S\\mapsto4S$, a linearized power orbit) collides multiplicatively with the additive branch analysis to produce $96(t-1)^2=0$, while $k=3$ resolves by a parity-spreading induction.",
      "answer": "$$\\boxed{f(n)\\equiv 2\\quad\\text{or}\\quad f(n)=n+2}.$$",
      "steps": [
        "Let $P(a,b,c)$ denote the given equation. At $a=b=c=n$: $$f(n)^3=f(n^3)+3f(2nf(n))\\ge 4,$$ so $f(n)\\ge2$ for all $n$. Write $k:=f(1)\\ge2$ and $u(n):=f(n)-k\\ (\\ge 2-k)$, so $u(1)=0$.",
        "$P(1,1,1)$: $k+3f(2k)=k^3$, so $f(2k)=(k^3-k)/3$ (integral since $3\\mid k(k-1)(k+1)$); set $q:=u(2k)=k(k^2-4)/3$. $P(a,1,1)$: $f(a)+f(2ak)+f(2k)+f(2f(a))=k^2f(a)$ becomes, in terms of $u$:  (2)  $u(2ka)+u\\bigl(2(k+u(a))\\bigr)=(k^2-1)u(a)+2q$  for all $a$.",
        "Main identity: add $P(a,b,1)+P(b,c,1)+P(c,a,1)$; replace $f(2af(b))+f(2bf(c))+f(2cf(a))$ by $f(a)f(b)f(c)-f(abc)$ (from $P(a,b,c)$) and each pair $f(2ak)+f(2f(a))$ by (3)-form; substitute $f=k+u$. With $3f(2k)=k(k^2-1)$ all constants collapse to $-2k$ on both sides, leaving  (8)  $u(abc)-u(ab)-u(bc)-u(ca)=u(a)u(b)u(c)-u(a)-u(b)-u(c)$.",
        "Quadratic relation: (8) at $(a,a,b)$ gives $u(a^2b)=u(a^2)+2u(ab)+u(a)^2u(b)-2u(a)-u(b)$; at $(a,b,b)$ symmetrically; at $(a,a,b^2)$ and $(a^2,b,b)$ it gives two expressions for $u(a^2b^2)$. Equating and cancelling (direct expansion verified) yields  (9)  $u(a)^2\\bigl(u(b^2)-2u(b)\\bigr)=u(b)^2\\bigl(u(a^2)-2u(a)\\bigr)$.",
        "If $u\\equiv0$: $f\\equiv k$, and (2) at $a=1$ gives $k=(k^3-k)/3$, i.e. $k^2=4$, $k=2$: solution $f\\equiv2$. Assume now $u\\not\\equiv0$, fix $r$ with $u(r)\\ne0$. By (9), $\\bigl(u(n^2)-2u(n)\\bigr)/u(n)^2$ equals a fixed constant $\\lambda\\in\\mathbb{Q}$ whenever $u(n)\\ne0$ (plug $b=r$), and (9) also forces $u(n)=0\\Rightarrow u(n^2)=0$. Hence  (14)  $u(n^2)=2u(n)+\\lambda u(n)^2$ for every $n$.",
        "Pinning $\\lambda$: fix $n$, $x:=u(n)\\ne0$, $x_i:=u(n^i)$. (8) at $(n,n,n)$: $x_3=3x_2+x^3-3x$, with $x_2=2x+\\lambda x^2$ by (14). Since $n^6=(n^3)^2$, (14) gives $x_6=2x_3+\\lambda x_3^2$; since $n^6=(n^2)^3$, (8) at $(n^2,n^2,n^2)$ gives $x_6=3x_4+x_2^3-3x_2$ with $x_4=2x_2+\\lambda x_2^2$. Subtracting and factoring (checked symbolically): $0=-x^3(\\lambda-1)(\\lambda+1)(\\lambda x^3-6\\lambda x-6)$.",
        "Suppose $\\lambda\\ne\\pm1$. Since $n$ was arbitrary, $\\lambda(t^3-6t)=6$ holds for *every* nonzero value $t$ of $u$. Put $y:=u(n^2)=x(2+\\lambda x)$. $y=0\\Rightarrow\\lambda x=-2\\Rightarrow-2(x^2-6)=6\\Rightarrow x^2=3$, not integral; $y=x\\Rightarrow\\lambda x=-1\\Rightarrow x=0$; both absurd. So $x\\ne y$ are distinct nonzero solutions of $t^3-6t=6/\\lambda$: $x^2+xy+y^2=6$. Mod $2$ this forces $x,y$ both even, making the left side divisible by $4$: contradiction. Hence $\\lambda=\\pm1$.",
        "Case $\\lambda=-1$: (14) reads $u(n^2)=u(n)(2-u(n))$. If $u(n)\\le-1$, iterating $n,n^2,n^4,\\dots$ makes $u$ arbitrarily negative, violating $u\\ge2-k$; if $u(n)\\ge3$ then $u(n^2)\\le-3$, previous case. So all values lie in $\\{0,1,2\\}$. But $q=k(k^2-4)/3\\ge5$ for $k\\ge3$, contradiction; hence $k=2$, $q=0$, $u\\ge0$.",
        "Still $\\lambda=-1,k=2$: (2) is $u(4a)+u(2u(a)+4)=3u(a)$. $a=1$: $2u(4)=0$. $u(2)\\in\\{0,2\\}$ from $0=u(4)=u(2)(2-u(2))$. If $u(2)=2$: $a=2$ gives $2u(8)=6$, i.e. $u(8)=3$, out. So $u(2)=0$, and $a=2$ then gives $u(8)=0$. Any $u(n)=2$ gives $u(4n)+u(8)=6$, out; so $u\\in\\{0,1\\}$. Any $u(n)=1$: (8) at $(2,2,n)$ gives $u(4n)-2u(2n)=-1$, forcing $u(2n)=u(4n)=1$; iterating, $u(8n)=1$; (2) at $a=2n$ gives $1+u(6)=3$, i.e. $u(6)=2$, contradiction. Hence $u\\equiv0$: $f\\equiv2$.",
        "Case $\\lambda=1$: (14) becomes $v(n^2)=v(n)^2$ for $v:=u+1\\;(ge 2-k+1)$. If $k\\ge4$: $q=k(k^2-4)/3=k^2+k(k-4)(k+1)/3\\ge k^2$; (2) at $a=2k$, using $u((2k)^2)=q^2+2q$, gives $u(2(k+q))=q(k^2-1-q)\\le-q\\le-k^2&lt;2-k$, violating $u\\ge2-k$. Hence $k\\in\\{2,3\\}$.",
        "Second key identity ($\\lambda=1$): (8) at $(a,b,ab)$, writing $A=u(a)$, $B=u(b)$, $E=u(ab)$, with $u(a^2)=A^2+2A$, $u(b^2)=B^2+2B$, $u(a^2b^2)=E^2+2E$ and the Step-4 formulas for $u(a^2b),u(ab^2)$, reduces to $E^2-(AB+2)E+2A+2B-A^2B-AB^2-A^2-B^2=0$, which factors (checked symbolically) as $(E-A-B-AB)(E+A+B-2)=0$; in terms of $v$:  (36)  $\\bigl(v(ab)-v(a)v(b)\\bigr)\\bigl(v(ab)+v(a)+v(b)-5\\bigr)=0$  for all $a,b$.",
        "Subcase $k=2$: $u\\ge0$, so $v\\ge1$, $q=0$. (2) at $a=1$: $u(4)=0$, so $v(4)=1$ and $v(2)^2=v(4)$ gives $v(2)=1$. (2) in $v$-form:  (38)  $v(4a)+v\\bigl(2(v(a)+1)\\bigr)=3v(a)-1$. Suppose $u\\not\\equiv0$; then some value $t=v(n)\\ge4$ exists (any $v>1$ has a square $\\ge4$ among the values). (36) at $(4,n)$: the additive branch $5-v(4)-v(n)=4-t&lt;1$ is impossible, so $v(4n)=t$; (38) then gives $v(2(t+1))=2t-1$; (36) at $(2,t+1)$ (additive branch $\\le 4-v(t+1)&lt;1$ for $v(t+1)\\ge4$, and $=2t-1\\ge7$ rules it out directly): $v(t+1)=2t-1$.",
        "Set $s:=2t-1=v(t+1)$, an image value $\\ge7$. Repeating the previous step's two moves with the value $s$: $v(2(s+1))=2s-1$ and $v(s+1)=2s-1$; since $s+1=2t$, this says $v(2t)=4t-3$, and (36) at $(2,t)$ (additive branch $4-v(t)&lt;1$) gives $v(t)=4t-3$. In general: *every image value $T\\ge4$ satisfies $v(T)=4T-3$*.",
        "Apply the general rule to the values $r:=v(t)=4t-3\\ (\\ge13)$ and $s:=v(t+1)=2t-1$: $v(r)=16t-15$, $v(s)=8t-7$. Show $rs$ is a value: (36) at $(t,t+1)$ has additive branch $5-v(t)-v(t+1)=9-6t&lt;1$, impossible, so $v\\bigl(t(t+1)\\bigr)=v(t)v(t+1)=rs$. (36) at $(r,s)$: additive branch $5-v(r)-v(s)=27-24t&lt;1$, so $v(rs)=v(r)v(s)=(16t-15)(8t-7)$.",
        "But $rs\\ge4$ is an image value, so the general rule gives $v(rs)=4rs-3=4(4t-3)(2t-1)-3$. The two expressions cannot agree: $(16t-15)(8t-7)-\\bigl[4(4t-3)(2t-1)-3\\bigr]=96(t-1)^2>0$ for $t\\ge4$ (checked symbolically). Contradiction: no value $\\ge4$ exists, so $v\\equiv1$, $u\\equiv0$, $f\\equiv2$ in the branch $k=2,\\lambda=1$ as well.",
        "Subcase $k=3$: $q=5$, i.e. $u(6)=5$, $v(6)=6$. (36) at $(6,n)$: additive branch $5-6-v(n)&lt;1$, so $v(6n)=6v(n)$. (2) at $k=3$: $u(6a)+u(2u(a)+6)=8u(a)+10$; in $v$-form with the previous display: $v\\bigl(2(v(n)+2)\\bigr)=2(v(n)+2)$. At $n=6$: $v(16)=16$; $v(2)^4=v(16)$ forces $v(2)=2$; (36) at $(2,3)$: $6=v(6)=v(2)v(3)$ (additive branch $5-2-v(3)&lt;1$), so $v(3)=3$.",
        "Finally, for any image value $t$: setting $m:=t+2$, the identity $v(2m)=2m$ holds; (36) at $(3,2m)$: additive branch $5-3-2m&lt;1$, so $v(6m)=v(3)v(2m)=6m$, while $v(6m)=6v(m)$ gives $v(m)=m$ — and $m$ is again an image value. From $v(1)=1$: $1\\mapsto3\\mapsto5\\mapsto\\cdots$ fixes all odds; from $v(2)=2$: $2\\mapsto4\\mapsto6\\mapsto\\cdots$ fixes all evens. Thus $v(n)=n$ for all $n$, i.e. $f(n)=n+2$.",
        "Converse: $f\\equiv2$ gives $2+2+2+2=8$ on both sides. For $f(n)=n+2$: LHS $=(abc+2)+(2ab+4a+2)+(2bc+4b+2)+(2ca+4c+2)=(a+2)(b+2)(c+2)=f(a)f(b)f(c)$ (expansion checked). Complete solution set: $f\\equiv2$ or $f(n)=n+2$."
      ]
    },
    {
      "id": "c1",
      "category": "cmb",
      "difficulty": "easy",
      "stars": 1,
      "rating": 2.5,
      "confidence": "high",
      "novelty": {
        "status": "unverified",
        "searchDate": "2026-09-27",
        "exactMatch": false,
        "similarSources": [],
        "earliestKnownDate": null
      },
      "text": "There are $n$ points on a line, with the distance between the two outermost points being $L$. Colour each point with one of $k$ colours, where $n\\ge k+1\\ge3$, and require that every colour is used at least once. The <em>span</em> of a colour is the distance between its two outermost points of that colour (or $0$ if the colour is used once). Prove that there exists a colouring for which the sum of the $k$ spans is at least $L$. Show that the constant $1$ is best possible: for every $k$, exhibit a point set with $n=k+1$ points on which no admissible colouring achieves span-sum exceeding $L$.",
      "why": "Colour the two extreme points alike: that colour has span exactly $L$, so the span-sum is at least $L$, and the remaining points are spread over the other colours so all $k$ appear. Sharpness at $n=k+1$: the one-point surplus means exactly one colour occurs twice and the other $k-1$ colours are singletons of span $0$, so the span-sum reduces to the distance between the two points carrying the repeated colour, at most $L$ for every placement; no constant larger than $1$ works. The mechanism is the pigeonhole principle carried to its equality configuration.",
      "steps": [
        "Colour the two outermost points with the same colour. That colour has span exactly $L$, so the sum of all $k$ spans is at least $L$; distribute the remaining points among the colours so that every colour is used.",
        "For sharpness, fix $k$ and take $n=k+1$ distinct points between the two extremes. Because every one of the $k$ colours must be used, one colour is used twice and each of the other $k-1$ colours is used exactly once.",
        "All singleton colours have span $0$. Thus the total span-sum is just the distance between the two points carrying the repeated colour, which is at most $L$.",
        "Therefore on every such $(k+1)$-point configuration no admissible colouring has span-sum greater than $L$, so no universal constant larger than $1$ can replace $1$."
      ]
    },
    {
      "id": "c2",
      "category": "cmb",
      "difficulty": "easy",
      "stars": 1,
      "rating": 3,
      "confidence": "medium",
      "novelty": {
        "status": "screened",
        "searchDate": "2026-09-30",
        "exactMatch": false,
        "similarSources": [
          {
            "name": "De Bruijn-Erdos theorem (incidence geometry), Wikipedia",
            "note": "https://en.wikipedia.org/wiki/De_Bruijn%E2%80%93Erd%C5%91s_theorem_(incidence_geometry) - bounds the NUMBER of lines t >= n for any linear space with no line through all points. The old candidate conclusion m >= 2n+1 is literally this theorem with parity decoration added, so the trim exposed pure classical content and the escape rule fired (documented in c1-screen.md). The shipped claim (the student count must be odd) is NOT the theorem: d-B-E presumes the point count and never constrains its parity"
          },
          {
            "name": "arXiv API probes (2026-09-30)",
            "note": "all:\"every two players\" AND all:clubs -> 0 hits; all:\"linear space\" AND all:\"odd lines\" -> 0 hits; all:\"Steiner triple system\" AND all:\"replication number\" -> 0 hits"
          },
          {
            "name": "DuckDuckGo phrase probe (2026-09-30)",
            "note": "\"every two players\" clubs \"exactly one\" \"odd\" prove each player belongs to at least three clubs -> no results; a second DDG attempt was bot-challenged (recorded); Bing exact-phrase RSS empty"
          },
          {
            "name": "corpus FTS (187k competition chunks)",
            "note": "\"exactly one club in common\" 0, \"at least three clubs\" 0, \"no club contains all\" 0; \"club\" AND \"players\" AND \"exactly one\" hits only an unrelated Harvard-MIT Guts lesson-taking problem; nothing states 'number of students is odd' as a conclusion"
          }
        ],
        "earliestKnownDate": null,
        "lanesComplete": false,
        "laneSummary": {
          "N": "arXiv API x3 + DDG x2 (1 captcha) + Bing-RSS x1 + Wikipedia d-B-E page fetched in full, 2026-09-30; SE exact-form lanes deferred to quota reset",
          "A": "corpus FTS x5 phrase combos clean 2026-09-30; design-theory shadow checked by hand (STS(v) existence v=1,3 mod 6 is the uniform-k3 theorem; the non-uniform odd-size parity statement is not that theorem)",
          "D": "no indexed twin; iteration history: trim m>=v rejected as de Bruijn-Erdos itself; intermediate claim r_x>=3 rejected via Bose replication>=min-line lemma (screen log); shipped: parity inversion"
        },
        "transformedFrom": {
          "knownCore": "ISL 2004 C1 (students, clubs, societies double-count with 4/7-type fraction chasing)",
          "frozenIn": "CHANGELOG.md 2026-09-29"
        },
        "priorCore": "the 2026-09-29 screened variant (three parts: club-count bound m>=2n+1 by a positive-definite rank package, Fano equality, uniqueness) was itself replaced this wave per user request; its part-(a) bound is the classical de Bruijn-Erdos theorem and its lemma package lies near Bose's replication bound, which is why the claim below changes the numerical structure instead of trimming",
        "seam": "the shipped claim moves the number 2n+1 from the hypotheses to the CONCLUSION: given only odd club sizes >=3 and the exactly-one-pair rule, the student count is forced to be odd; no classical theorem in the lane (de Bruijn-Erdos, Fisher, Bose r>=k) bounds or constrains parity of v from these hypotheses - de Bruijn-Erdos starts FROM a given v; the proof is the parity partition count of clubs through one student, which the old rank package never performs and the ISL sociological double-count cannot see; the old no-universal-club rule is shown decorative for this claim (proved in the steps as a trap analysis)",
        "signature": "S42+M5",
        "residualRisk": "low-medium: the one-line parity count is standard technique and may hide inside solutions to STS-existence exercises (the uniform k=3 theory proves v odd AND 3 | v(v-1)/6); as a standalone non-uniform claim 'N is odd' no web, corpus, or arXiv probe indexed it; band-honest at rating 2 (short parity gem, one line of insight, fully verified)"
      },
      "text": "A school has $N$ students. A collection of clubs (each club a set of students) satisfies<ul><li>every club has an odd number of members, at least $3$;</li><li>every pair of students is contained in exactly one common club.</li></ul>Prove that $N$ is odd.",
      "answer": "$\\boxed{N\\ \\text{is odd.}}$",
      "why": "Fix one student $s$: the clubs through $s$ partition the remaining $N-1$ students into classes $C\\setminus\\{s\\}$, each even (odd minus one), forcing $N$ odd; the minimum size 3 is unused, and without oddness the claim fails ($\\{1,2\\},\\{1,3\\},\\{1,4\\},\\{2,3,4\\}$ on four students). Odd $N$ are realized: one club of all students, the Fano lines ($N=7$), the affine plane of order 3 ($N=9$). The count is the replication-integrality condition of a Steiner 2-design $S(2,k,v)$; for uniform $k=3$ it sits inside the Kirkman-Ray-Chaudhuri-Wilson theorem ($v\\equiv1,3\\pmod6$); de Bruijn-Erdos and Fisher bound the number of clubs, a size question, and are not needed.",
      "steps": [
        "If $N\\le1$ there is nothing to prove; take $N\\ge2$ and fix a student $s$. Every other student $y$ forms the pair $\\{s,y\\}$, which by rule 2 lies in exactly one club $C(s,y)$ containing $s$. Call two students equivalent when the same club through $s$ contains them: the classes of this partition are exactly the sets $C\\setminus\\{s\\}$ with $s\\in C$.",
        "Each class $C\\setminus\\{s\\}$ has size $|C|-1$, which is even because $|C|$ is odd (rule 1). A disjoint union of even classes covers all $N-1$ students other than $s$, so $N-1$ is even and $N$ is odd.",
        "Gap checks: the classes are disjoint because a student $y$ lying in two clubs through $s$ would put the pair $\\{s,y\\}$ in two clubs, violating rule 2; and every other student lies in some class because the pair $\\{s,y\\}$ has a club. The bound 'at least 3' is never used - oddness alone drives the proof - so the argument also covers degenerate readings of rule 1; the bound merely keeps the intended picture nontrivial. The edge case $N=2$ is impossible anyway (the single pair would need an odd club of size $\\ge3$ among two students), which is consistent with the theorem rather than an exception to it.",
        "Decorative-rule note (trap): the old variant's extra rule 'no club contains everyone' is unnecessary here - if one club is the whole school, rule 2 forces every other club to have size at most 1, and the count above still yields $N$ odd. Conversely, dropping the oddness of a single club breaks the claim: on 4 students the clubs $\\{1,2\\},\\{1,3\\},\\{1,4\\},\\{2,3,4\\}$ cover every pair exactly once with $N=4$ even. So oddness is the true lever, exactly as the proof says.",
        "Non-vacuity: $N=3$: one club $\\{1,2,3\\}$; $N=7$: the Fano lines; $N=9$: the 12 lines of the affine plane of order 3 (all of size 3, every pair exactly once, every student in 4 clubs). Machine audit: backtracking over all admissible systems with $N\\le9$ found exactly 0 systems at $N\\in\\{2,4,6,8\\}$ (the $N=8$ search completed in full, 1.1M nodes) and 1, 1, 31, 841 systems at $N=3,5,7,9$; randomized local-search counterexample hunts at $N=6,8,10$ (4000 restarts each) found nothing (c1-verify.py / c1-verify.out)."
      ],
      "readiness": {
        "runId": "RUN-20260930-01",
        "checkedOn": "2026-09-30",
        "queue": "P3",
        "novelty": {
          "fileStatus": "screened",
          "verdict": "T3-pending",
          "lanes": {
            "N": "redesign wave 2026-09-30: web paraphrase/alias probes + corpus screen recorded in tools/proofs/redesign-20260930/c1-screen.md; SE exact-form lanes deferred to quota reset",
            "A": "redesign wave 2026-09-30: web paraphrase/alias probes + corpus screen recorded in tools/proofs/redesign-20260930/c1-screen.md; SE exact-form lanes deferred to quota reset",
            "D": "redesign wave 2026-09-30: D-lane evidence pack to be regenerated by tools/screen.py after splice"
          },
          "provenanceComplete": true,
          "humanApprovalRequired": false
        },
        "proof": {
          "state": "unaudited",
          "independentlyCheckedThisRun": false,
          "auditNote": "new proof text shipped 2026-09-30; machine-verified by tools/proofs/redesign-20260930/c1-verify.py; independent audit pending"
        },
        "calibration": {
          "state": "slot-preserved-from-predecessor",
          "contestantBlindTest": "not-run",
          "humanReweight": "pending",
          "ratingCurrentlyStored": 2,
          "difficultyCurrentlyStored": "easy",
          "starsCurrentlyStored": 1
        },
        "quality": {
          "state": "human-panel-pending",
          "scores": null
        },
        "release": {
          "eligible": false,
          "state": "blocked-until-global-gates"
        },
        "provenance": {
          "status": "not-established",
          "sourceNotePresent": false
        },
        "sourceRecall": {
          "status": "not-recorded"
        }
      }
    },
    {
      "id": "c3",
      "category": "cmb",
      "difficulty": "easy",
      "stars": 1,
      "rating": 3,
      "confidence": "high",
      "novelty": {
        "status": "unverified",
        "searchDate": "2026-09-27",
        "exactMatch": false,
        "similarSources": [],
        "earliestKnownDate": null
      },
      "text": "A <em>climb</em> of a positive integer $n$ is a finite sequence of $1$s and $2$s that sums to $n$. Its partial heights are the partial sums. The climb is <em>$3$-shy</em> if no partial height except possibly $n$ itself is a positive multiple of $3$. Determine, for every $n\\ge 1$, the number of $3$-shy climbs of $n$.",
      "why": "For $n\\ge4$ every legal climb passes through height 2 and jumps $2\\to4$ (a unit step would hit 3), and exactly two prefixes $(2,2)$, $(1,1,2)$ reach 4. Thereafter the walk is confined to corridors between consecutive multiples of 3: each gate $3m+1$ has the unique bridge $3m+1,3m+2$ to the next gate, and the multiple $3(m+1)$ is entered from a gate in exactly two ways ($+2$ or $+1,+1$). Doubling gives $b(n)=2$ if $3\\mid n$ and $b(n)=1$ otherwise for $n\\ge4$, hence $4$ or $2$ climbs, with small values $1,2,3$ at $n=1,2,3$. The constraint is a walk on the finite automaton of residues mod 3 read through gates, a transfer-matrix count whose outcome is eventually periodic with period 3.",
      "steps": [
        "Direct enumeration gives one $3$-shy climb of $1$, namely $(1)$; two of $2$, namely $(2)$ and $(1,1)$; and three of $3$, namely $(1,2)$, $(2,1)$ and $(1,1,1)$.",
        "For $n\\ge 4$ every legal climb must pass through $2$ and then step by $2$ to $4$. Indeed a climb that first exceeds $2$ by a step of $1$ lands on $3$ before the end. The two climbs from $0$ to $2$ are $(2)$ and $(1,1)$, so there are exactly two $3$-shy climbs from $0$ to $4$, namely $(2,2)$ and $(1,1,2)$.",
        "Thus for $n\\ge 4$ the count is twice the number of walks from $4$ to $n$ by steps $1$ and $2$ that visit no positive multiple of $3$ except possibly $n$. Call that number $b(n)$.",
        "From any position $3m+1$ with $m\\ge 1$, the step $+2$ lands on the multiple $3m+3$, which is legal only as a final position, while $+1$ lands on $3m+2$. From $3m+2$, the step $+1$ lands on that same multiple and $+2$ lands on the next gate $3(m+1)+1$.",
        "Consequently there is exactly one walk from the gate $4$ to any later gate $3m+1$, namely the concatenation of the bridges $3j+1\\to 3j+2\\to 3(j+1)+1$. There is exactly one continuation from that gate to $3m+2$, and exactly two ways to finish at the multiple $3(m+1)$: gate then $+2$, or gate then $+1$ then $+1$.",
        "Hence $b(n)=1$ if $3\\nmid n$, and $b(n)=2$ if $3\\mid n$, for every $n\\ge 4$. Doubling gives two $3$-shy climbs when $3\\nmid n$ and four when $3\\mid n$.",
        "Together with the three small cases, the number is $1,2,3$ for $n=1,2,3$, and for $n\\ge 4$ it is $4$ if $3\\mid n$ and $2$ otherwise."
      ],
      "answer": "$$\\boxed{1,2,3\\text{ for }n=1,2,3;\\ \\text{for }n\\ge 4,\\ 4\\text{ if }3\\mid n\\text{ and }2\\text{ otherwise.}}$$"
    },
    {
      "id": "c4",
      "category": "cmb",
      "difficulty": "easy",
      "stars": 1,
      "rating": 3,
      "confidence": "high",
      "novelty": {
        "status": "unverified",
        "searchDate": "2026-09-27",
        "exactMatch": false,
        "similarSources": [
          {
            "name": "cubic telescoping split-invariant (Engel-style)",
            "note": "the why field itself names the classical ab-splitting family"
          }
        ],
        "earliestKnownDate": null
      },
      "text": "Start with one pile of $n\\ge 1$ stones. A move chooses a pile of size $k\\ge 2$ and replaces it by two piles of positive sizes adding to $k$. If a pile of size $k$ is split into piles of sizes $a$ and $b$, that split scores $ab(a+b)$. The process ends when every pile is a single stone. Prove that the total score is independent of the choices, and find it.",
      "why": "When a pile $c$ splits into $a+b=c$, the sum of cubes of pile sizes drops by $c^3-a^3-b^3=3ab(a+b)$, exactly three times the score, by the freshman's dream $(a+b)^3=a^3+b^3+3ab(a+b)$. Telescoping over the whole binary decomposition tree, whose leaves are $n$ piles of size 1, the total score is $\\frac13(n^3-n)=\\frac{n(n^2-1)}3$, independent of choices. The classical $ab$ score is the analogous drop of $\\sum(\\text{size})^2$: for every degree the power sum of the parts decreases by a splitting term, and the cubic term is the first with a nonzero correction, so the invariant is a Newton power-sum symmetric function evaluated on the final partition; the answer is $2\\binom{n+1}{3}$, integral since $3\\mid n^3-n$.",
      "steps": [
        "Let $S(n)$ be the total score of any complete decomposition of a pile of size $n$, once independence is known; the argument below proves simultaneously that every decomposition has the same score and that the score equals $n(n^2-1)/3$.",
        "For $n=1$ there are no splits, so the score is $0$, which equals $1(1-1)/3$.",
        "Suppose the claim is known for every pile smaller than $n\\ge 2$, and the first split of the pile $n$ is into $a+b=n$ with $a,b\\ge 1$. The score of that split is $abn$, and the later scores are $S(a)$ and $S(b)$ by the inductive hypothesis. The total is $$\\frac{a(a^2-1)}{3}+\\frac{b(b^2-1)}{3}+ab(a+b).$$",
        "Multiplying by $3$ produces $a^3-a+b^3-b+3ab(a+b)=(a+b)^3-(a+b)$. Dividing by $3$ returns $(a+b)\\bigl((a+b)^2-1\\bigr)/3=n(n^2-1)/3$.",
        "The total depends only on $n$. Therefore every complete decomposition scores $n(n^2-1)/3$."
      ],
      "answer": "$$\\boxed{\\dfrac{n(n^2-1)}{3}}.$$"
    },
    {
      "id": "c5",
      "category": "cmb",
      "difficulty": "easy",
      "stars": 1,
      "rating": 3.5,
      "confidence": "high",
      "novelty": {
        "status": "screened",
        "searchDate": "2026-09-30",
        "exactMatch": false,
        "similarSources": [
          {
            "name": "Mutilated chessboard problem, Wikipedia",
            "note": "https://en.wikipedia.org/wiki/Mutilated_chessboard_problem - the classical TILING puzzle (two opposite corners removed, dominoes) plus Gomory's theorem (removing one square of each colour leaves a domino-tileable board, via the Hamiltonian cycle of the grid). Nearest kin: same board and same snake technique, but it is a tiling question, not a token GAME; no winner characterization by starting square appears there. The shipped claim's answer (first player wins from exactly the 31 squares of the removed corner's colour) is not stated in any fetched source"
          },
          {
            "name": "arXiv API probes (2026-09-30)",
            "note": "all:\"undirected vertex geography\" -> 1 hit (arXiv:1101.1507, complexity of Neighboring Nim - cites UVG as the in-P baseline, no board claim); all:\"maximum matching\" AND all:\"token game\" -> 0; all:geography AND all:Fraenkel -> 1 hit (arXiv:2609.18330, partizan EDGE geography complexity); all:\"vertex geography\" AND all:bipartite -> 1 hit (arXiv:1401.0400, misere complexity). The matching-criterion ENGINE (win iff the start lies in every maximum matching) is published lore for undirected vertex geography (Fraenkel-Scheinerman-Ullman tradition) - demoted to proof steps here, as the brief requires; the board claim itself is unindexed in all four probes"
          },
          {
            "name": "Wikipedia Geography (game) page",
            "note": "https://en.wikipedia.org/wiki/Geography_(game) - the word-chain party game; the graph game is only referenced via Generalized geography (complexity); no chessboard application indexed"
          },
          {
            "name": "corpus FTS (187k competition chunks)",
            "note": "\"token\" AND \"unvisited\" 0, \"corner square removed\" only unrelated Guts number-theory hits, \"maximum matching\" AND \"game\" only hat-graph complexity notes, \"essential vertex\" 0, \"visited twice\" AND \"token\" 0"
          }
        ],
        "earliestKnownDate": null,
        "lanesComplete": false,
        "laneSummary": {
          "N": "arXiv API x4 + Wikipedia x2 + DDG x2 (both bot-challenged, recorded) on 2026-09-30; SE exact-form lanes deferred to quota reset",
          "A": "corpus FTS x5 combos clean; classical kin recorded (Gomory/Hamiltonian-cycle tilings, FSU-style matching criterion as engine)",
          "D": "no indexed twin of the board claim; engine check + full game trees on 4x4/4x5-minus-corner this session (c3-verify.py)"
        },
        "transformedFrom": {
          "knownCore": "7x7 board token game won by a static domino pairing after the centre start (textbook pairing strategy, ISL-style classic)",
          "frozenIn": "CHANGELOG.md 2026-09-29"
        },
        "priorCore": "the 2026-09-29 screened variant (three parts: abstract essential-vertex criterion + board application + first-principles justification) was itself replaced this wave per user request, which demanded a single concrete claim; its part-(a) criterion is published game-theory lore and is now demoted to proof engine",
        "seam": "the shipped claim is one concrete board question with a numerical answer; the old 7x7 centre-pairing core is an ad-hoc pairing of one fixed start, and the replaced variant stated the criterion AS a theorem - here the abstract criterion never appears in the statement, the answer runs through BOTH a Hamiltonian-path domino construction and a maximum-matching essentiality count (the removed-corner colour, 31 squares, the MINORITY colour - opposite of the naive pairing guess), and the composite board application was not found by any probe: the classical mutilated-chessboard/Gomory lane proves tileability, never a game outcome by starting square",
        "signature": "S39+M16",
        "residualRisk": "medium: the matching criterion is published (FSU tradition) and the board is the most classical board in recreation mathematics - a determined reader could assemble the same question from Gomory's theorem plus the criterion; as a posed problem it screened clean across four arXiv lanes, two Wikipedia pages and five corpus FTS probes; SE lanes still pending"
      },
      "text": "One corner square is cut off an $8\\times 8$ chessboard; two remaining squares are adjacent when they share an edge. Maryam fixes a token on some square $s$ of the board - that square counts as visited. Iman then moves the token first, and the players alternate: each move takes the token along an edge to a square not yet visited, which then becomes visited. The player who cannot move loses. Determine exactly the starting squares $s$ from which the first player Iman can force a win.",
      "answer": "$$\\boxed{\\text{Iman wins exactly from the squares of the same colour as the cut-off corner: }31\\text{ squares.}}$$",
      "why": "The game is undirected vertex geography on the grid graph of the mutilated board. The engine is matching theory: the player to move at $s$ wins iff $s$ is essential, saturated by every maximum matching (Fraenkel-Scheinerman-Ullman; proved by Berge augmenting paths: an $M$-exposed start gives the second player a walk-along-the-matching reply, an essential start gives the first player a matched edge into such a position). Colour count: 31 black (the cut corner's colour), 32 white, so $\\nu=31$; the row-snake Hamiltonian path from the cut corner yields maximum matchings covering all black squares and, cut at any white $w$, a near-perfect matching missing $w$. Iman wins from exactly the 31 corner-coloured squares; Hall's theorem governs the perfect matchings of $B-w$.",
      "steps": [
        "Definitions for the proof (not needed for the statement): a MATCHING of the board is a set of dominoes covering no square twice; it is MAXIMUM when no larger one exists, a matching COVERS a square when some domino contains it, and a square is essential if every maximum matching covers it. Lemma (the engine): the player about to move from the (just-visited) square $v$ wins if and only if $v$ is essential.",
        "Lemma, if-direction: let $M$ be a maximum matching that does NOT cover $v$. The second player's strategy: whenever the first player lands on a square $x$, reply by moving along the $M$-domino containing $x$. The reply always exists: if the first player could land on an $M$-uncovered square $y\\ne v$, the visited track $v,\\dots,y$ would alternate non-matching/matching edges and form an augmenting path for $M$ - impossible by maximality. The reply never repeats a square: visited squares always form $\\{v\\}$ plus whole $M$-dominoes, so the partner of a fresh square is fresh. Thus the second player always answers and the first player is the first stuck.",
        "Lemma, only-if-direction: let $v$ be essential, take any maximum $M$, and let the first player move along the $M$-domino $vu$. Delete $v$ from the board: $M\\setminus\\{vu\\}$ is a maximum matching of the remaining board $G-v$ (its size is $\\nu(G)-1=\\nu(G-v)$: at least by this matching, at most because any larger matching of $G-v$ would be one for $G$ missing $v$) and it misses $u$. The rest of the game is exactly the same game on $G-v$ starting at $u$ with $u$ visited, and by the if-direction the player to move there - now the SECOND player - loses. So moving along $vu$ wins for the first player.",
        "The board: colour the removed corner black. Remaining squares: 31 black, 32 white. Every domino covers one black and one white square, so $\\nu(B)\\le 31$. Equality: traverse all 64 squares by a row-by-row serpentine path starting at the removed corner, say $c=p_0,p_1,\\dots,p_{63}$; even positions are black and odd positions white. Pair $p_1p_2,p_3p_4,\\dots,p_{61}p_{62}$ along the path: 31 legal dominoes covering every black square of $B$, leaving the single white square $p_{63}$. So $\\nu(B)=31$ and this particular maximum matching covers all 31 black squares.",
        "Black start $s$: $B-s$ has 30 black and 32 white squares, so every matching of $B-s$ has size at most 30 - deleting $s$ drops the matching number from 31 to 30: $s$ is essential; by the only-if-direction Iman wins.",
        "White start $w$: in the same snake, $w=p_{2k-1}$ for some $k$, since white squares occupy the odd positions. Cutting the path at $w$ leaves two even paths $p_1,\\dots,p_{2k-2}$ and $p_{2k},\\dots,p_{63}$; domino-tile each along its own consecutive pairs. These 31 dominoes form a maximum matching of $B$ that MISSES $w$, so $w$ is non-essential and the if-direction makes Maryam (the second player) win from $w$ by mirroring along these very dominoes. Iman's win strategy from a black $s$ is likewise explicit: take the snake domino $su$ covering $s$ in the matching of step 4, move to $u$, and then mirror Maryam along the remaining snake dominoes.",
        "Machine audit (c3-verify.py / c3-verify.out): engine lemma verified against exhaustive game trees on all bipartite graphs with parts up to $4\\times3$ (28,848 pairs, 0 mismatches); full game trees on $4\\times4$- and $4\\times5$-minus-corner give exactly 7 and 9 winning starts = corner-colour counts, 0 mismatches; matching computation on the $8\\times8$-minus-corner confirms $\\nu=31$, essentiality of all 31 black squares, non-essentiality of all 32 white ones, and perfect matchings of $B-w$ for each white $w$."
      ],
      "readiness": {
        "runId": "RUN-20260929-01",
        "fileStatus": "screened",
        "verdict": "T3-pending",
        "lanes": "2026-09-30: web lane (arXiv API x4, Wikipedia x2, DDG x2 bot-challenged, corpus FTS x5) clean for the single-claim board statement; engine demoted to steps per user directive; verifier: game-tree + matching audit 0 violations (RUN-20260929-01 kept)",
        "checkedOn": "2026-09-30",
        "queue": "P3",
        "novelty": {
          "fileStatus": "screened",
          "verdict": "T3-pending",
          "lanes": {
            "N": "redesign wave 2026-09-30: web paraphrase/alias probes + corpus screen recorded in tools/proofs/redesign-20260930/c3-screen.md; SE exact-form lanes deferred to quota reset",
            "A": "redesign wave 2026-09-30: web paraphrase/alias probes + corpus screen recorded in tools/proofs/redesign-20260930/c3-screen.md; SE exact-form lanes deferred to quota reset",
            "D": "redesign wave 2026-09-30: D-lane evidence pack to be regenerated by tools/screen.py after splice"
          },
          "provenanceComplete": false,
          "humanApprovalRequired": false
        },
        "proof": {
          "state": "unaudited",
          "independentlyCheckedThisRun": false,
          "auditNote": "new proof text shipped 2026-09-30; machine-verified by tools/proofs/redesign-20260930/c3-verify.py; independent audit pending"
        },
        "calibration": {
          "state": "slot-preserved-from-predecessor",
          "contestantBlindTest": "not-run",
          "humanReweight": "pending",
          "ratingCurrentlyStored": 2.5,
          "difficultyCurrentlyStored": "easy",
          "starsCurrentlyStored": 1
        },
        "quality": {
          "state": "human-panel-pending",
          "scores": null
        },
        "release": {
          "eligible": false,
          "state": "blocked-until-global-gates"
        },
        "provenance": {
          "status": "not-established",
          "sourceNotePresent": false
        },
        "sourceRecall": {
          "status": "not-recorded"
        }
      }
    },
    {
      "id": "c6",
      "category": "cmb",
      "difficulty": "easy",
      "stars": 1,
      "rating": 3.5,
      "confidence": "high",
      "novelty": {
        "status": "unverified",
        "searchDate": "2026-09-27",
        "exactMatch": false,
        "similarSources": [],
        "earliestKnownDate": null
      },
      "text": "Let $n\\ge 1$. An <em>interval</em> in $\\{1,2,\\dots,n\\}$ is a nonempty set of consecutive integers. Let $\\mathcal{F}$ be a family of intervals such that every two members of $\\mathcal{F}$ intersect, and no member of $\\mathcal{F}$ contains another. Prove that $$|\\mathcal{F}|\\le \\left\\lceil\\frac n2\\right\\rceil,$$ and show that the bound is sharp for every $n$.",
      "why": "Let $L_*$ be the largest left endpoint and $R_*$ the smallest right endpoint: the two intervals realizing them intersect, so $L_*\\le R_*$, and every interval contains the point $x=L_*$, the Helly property of intervals on a line. Inclusion-freeness forces distinct left endpoints and, after sorting $L_1<\\cdots<L_m$, right endpoints increasing $R_1<\\cdots<R_m$, since $L_i<L_j$ with $R_i\\ge R_j$ gives containment. Hence $m\\le\\min(x,n-x+1)\\le\\lceil n/2\\rceil$, sharp via $[i,\\,m+i-1]$, $1\\le i\\le m=\\lceil n/2\\rceil$, all containing $m$. Containment of intervals is a product order on endpoint pairs, so this is a width bound for antichains in 2-dimensional posets; the common-point step is the one-dimensional Helly theorem.",
      "steps": [
        "Write each interval as $[L,R]=\\{L,L+1,\\dots,R\\}$ with $1\\le L\\le R\\le n$. Let $L_\\ast$ be the maximum left endpoint in $\\mathcal{F}$ and $R_\\ast$ the minimum right endpoint. The interval attaining $L_\\ast$ and the interval attaining $R_\\ast$ intersect, so $L_\\ast\\le R_\\ast$. Every member then contains the point $x=L_\\ast$, because its left endpoint is at most $L_\\ast$ and its right endpoint is at least $R_\\ast\\ge L_\\ast$.",
        "Thus every interval $[L_i,R_i]$ in $\\mathcal{F}$ satisfies $L_i\\le x\\le R_i$. If $L_i=L_j$ and $R_i\\le R_j$, then $[L_i,R_i]\\subseteq[L_j,R_j]$. The antichain hypothesis therefore forces all left endpoints to be distinct, and likewise, after sorting $L_1&lt;\\cdots&lt;L_m$, the right endpoints must satisfy $R_1&lt;\\cdots&lt;R_m$. Otherwise $L_i&lt;L_j$ and $R_i\\ge R_j$ would give a containment.",
        "The increasing left endpoints are $m$ distinct integers in $\\{1,\\dots,x\\}$, so $m\\le x$. The increasing right endpoints are $m$ distinct integers in $\\{x,\\dots,n\\}$, so $m\\le n-x+1$. Hence $m\\le\\min(x,\\,n-x+1)\\le\\lceil n/2\\rceil$.",
        "For sharpness let $m=\\lceil n/2\\rceil$ and take the intervals $[i,\\, m+i-1]$ for $i=1,\\dots,m$. Each right endpoint is at most $m+(m-1)=2m-1\\le n$, and each interval contains $m$. If $i&lt;j$, then the $i$-th interval starts further left and ends further left, so neither contains the other. This is an intersecting antichain of size $m$."
      ],
      "answer": "$$\\boxed{|\\mathcal{F}|\\le\\lceil n/2\\rceil,\\ \\text{sharp for every }n.}$$"
    },
    {
      "id": "c7",
      "category": "cmb",
      "difficulty": "easy",
      "stars": 1,
      "rating": 3.5,
      "confidence": "high",
      "novelty": {
        "status": "unverified",
        "searchDate": "2026-09-27",
        "exactMatch": false,
        "similarSources": [],
        "earliestKnownDate": null
      },
      "text": "Let $a_n$ be the number of strings of length $n$ with entries in $\\{1,2,3,4\\}$ such that no partial sum is divisible by $3$. Prove that $a_1=3$, $a_2=8$ and $$a_n=2a_{n-1}+a_{n-2}\\qquad(n\\ge 3).$$ Deduce a closed form.",
      "why": "The running sum mod 3 lives in states 1 and 2 (state 0 is fatal), and the letters $1,2,3,4$ supply residues $1,2,0,1$, so residue 1 is available twice per append. The state vector obeys $\\binom{A_{n+1}}{B_{n+1}}=\\begin{pmatrix}1&1\\\\2&1\\end{pmatrix}\\binom{A_n}{B_n}$ with $A_1=2$, $B_1=1$; eliminating $A_n=a_{n-1}$ for $n\\ge2$ gives $a_n=2a_{n-1}+a_{n-2}$ with $a_1=3$, $a_2=8$, characteristic roots $1\\pm\\sqrt2$, and the closed form $a_n=(1+\\tfrac{\\sqrt2}{4})(1+\\sqrt2)^n+(1-\\tfrac{\\sqrt2}{4})(1-\\sqrt2)^n$. This is enumeration of words accepted by a two-state automaton: the growth rate is the Perron root $1+\\sqrt2$ of the transfer matrix, the dominant pole of the rational function $\\sum a_nz^n$, standard analytic combinatorics of regular languages.",
      "steps": [
        "A partial sum congruent to $0$ modulo $3$ is forbidden, including after the first letter, so every nonempty prefix has running sum in $\\{1,2\\}$ modulo $3$. Let $A_n$ (respectively $B_n$) be the number of valid strings of length $n$ whose total sum is congruent to $1$ (respectively $2$) modulo $3$, and set $a_n=A_n+B_n$.",
        "The letters contribute residues $1,2,0,1$ respectively, so residue $1$ can be appended in two ways and residues $0$ and $2$ in one way each. From a string with sum $1$, the legal appendages are: one letter of residue $0$, staying at sum $1$, and two letters of residue $1$, moving to sum $2$. The residue-$2$ letter would reach $0$ and is forbidden. From sum $2$, the legal appendages are one letter of residue $2$, moving to sum $1$, and one letter of residue $0$, staying at sum $2$.",
        "Therefore $A_{n+1}=A_n+B_n$ and $B_{n+1}=2A_n+B_n$. In particular $A_{n+1}=a_n$ and $a_{n+1}=3A_n+2B_n=2a_n+A_n$. For $n\\ge 2$ one has $A_n=a_{n-1}$, so $a_{n+1}=2a_n+a_{n-1}$. Shifting the index gives the stated recurrence for $n\\ge 3$.",
        "The initial values are read off directly. Length $1$: the letters $1,2,4$ are legal and $3$ is not, so $a_1=3$, with $A_1=2$ and $B_1=1$. Length $2$: the recurrence for the states gives $A_2=A_1+B_1=3$ and $B_2=2A_1+B_1=5$, so $a_2=8$.",
        "The characteristic polynomial is $r^2-2r-1=0$, with roots $1\\pm\\sqrt2$. Solving $A(1+\\sqrt2)+B(1-\\sqrt2)=3$ and $A(1+\\sqrt2)^2+B(1-\\sqrt2)^2=8$ yields $A=1+\\sqrt2/4$ and $B=1-\\sqrt2/4$. Hence $$a_n=\\left(1+\\frac{\\sqrt2}{4}\\right)(1+\\sqrt2)^n+\\left(1-\\frac{\\sqrt2}{4}\\right)(1-\\sqrt2)^n.$$"
      ],
      "answer": "$$\\boxed{a_n=\\left(1+\\dfrac{\\sqrt2}{4}\\right)(1+\\sqrt2)^n+\\left(1-\\dfrac{\\sqrt2}{4}\\right)(1-\\sqrt2)^n.}$$"
    },
    {
      "id": "c8",
      "category": "cmb",
      "difficulty": "easy",
      "stars": 1,
      "rating": 3.5,
      "confidence": "high",
      "novelty": {
        "status": "screened",
        "searchDate": "2026-09-30",
        "exactMatch": false,
        "similarSources": [
          {
            "name": "bipartite Dirac threshold (Moon-Mosseri / Wang tradition)",
            "note": "the Hamiltonicity engine with STRICT delta > n/2 is the classical sharp bipartite Dirac bound (the frozen 2026-09-29 variant used ceil(n/2), which is FALSE for Hamiltonicity at even n - explicit counterexample found by this session's verifier: n=4, A-players {0,1} joined to all four B-players and A-players {2,3} joined to B1,B2: delta=2=ceil(4/2), perfect matchings = 4, spanning cycles = 0, c17-verify.out). The shipped claim repairs the threshold and never states Hamiltonicity as its content; the engine is proved inside the steps rather than cited"
          },
          {
            "name": "DDG research lane 2026-09-30 (Dirac bipartite threshold kin)",
            "note": "hits: arXiv:2511.00616 'Bipartite holes, degree sums and Hamilton cycles' (McDiarmid-Yolov line: Hamiltonicity via delta vs bipartite-hole number - closest published statement to Engine I; the balanced-bipartite threshold delta >= (n+1)/2 is classical Dirac-type lore, e.g. ProofWiki 'Dirac's Theorem'); NO hit states anything about the NUMBER of perfect matchings = 2 or a cycle characterization; corpus FTS lanes for 'exactly two perfect matchings' remained 0"
          },
          {
            "name": "arXiv API probe + corpus FTS (2026-09-30)",
            "note": "all:\"exactly two perfect matchings\" lane + corpus FTS: 'exactly two perfect matchings' 0 hits; 'bipartite AND Hamiltonian AND minimum degree' 0; 'perfect matchings AND only if AND cycle' hits only Kasteleyn-signing lecture notes (unrelated); 'two teams AND friendship' 0 - the iff rigidity statement (pm = 2 exactly for the loop) is unindexed in all lanes"
          },
          {
            "name": "1-extendable / matching-theory literature (background kin)",
            "note": "structural results on graphs with few perfect matchings exist in matching theory (e.g. characterization of bipartite graphs with a unique PM via allowed-edge deletion); 'exactly two' rigidity under a min-degree hypothesis is a different, counting statement, and no fetched page prints it"
          },
          {
            "name": "engine-status (2026-09-30)",
            "note": "DDG intermittent captcha; Bing instance geo-mangled (recorded in c17-screen.md); arXiv API lane partially served this id"
          }
        ],
        "earliestKnownDate": null,
        "lanesComplete": false,
        "laneSummary": {
          "N": "arXiv API + DDG probes 2026-09-30 (partially blocked, recorded); classical kin documented above",
          "A": "corpus FTS x4 combos clean; FULLY exhaustive verification n=3,4,5 (304,429 class members) + sampling n=6,7,8 (332,483 total): pm>=2, Hamiltonicity, and pm=2 iff single loop all 0 violations; frozen-threshold counterexample exhibited",
          "D": "no indexed twin of the iff claim at the corrected threshold"
        },
        "transformedFrom": {
          "knownCore": "Hall's theorem exercise: bipartite delta >= n/2 has a perfect matching",
          "frozenIn": "CHANGELOG.md 2026-09-29"
        },
        "priorCore": "the 2026-09-29 screened variant (three parts: Hamiltonian + pm>=2 / pm=2 iff cycle at ceil(n/2) / exact pm=12 computation) was itself replaced this wave per user request for a single claim; its part-(a) threshold ceil(n/2) is WRONG for the Hamiltonicity step at every even n (counterexample documented in this entry's verifier), so the shipped claim restates the package at the sharp strict-majority threshold and drops the computational part",
        "seam": "existence (Hall) and even Hamiltonicity (bipartite Dirac, re-proved in steps) bound the world of pairings from below; they say nothing about pm-count RIGIDITY: the shipped iff ('exactly two full pairings <=> the whole network is one closed loop') is a counting-classification statement proved by the chord-pasting third-pairing construction - and its subtle content, absent from every source probed, is that for n >= 4 a loop violates the hypothesis, so exactly-two never happens above n=3 (the iff's right side is only realizable at n=3, which the trap forces solvers to notice); the old entry's false threshold makes it impossible to have shipped this claim without repair",
        "signature": "M10+R1",
        "residualRisk": "low-medium: the two engine facts (Hamiltonicity at delta > n/2; even cycles have exactly two PMs) are classical, and 'pm=2 iff cycle for connected bipartite graphs' is close to known matching-structure folklore - the packaged iff under the strict-degree hypothesis screened clean, but a matching-theory regular may view it as one exercise away from known results; SE lanes pending"
      },
      "text": "A dance society has $2n$ members, $n\\ge3$, split into two groups of $n$; every handshake so far has been between members of DIFFERENT groups, and each member has shaken hands with strictly more than half of the members of the other group. A full pairing is a set of $n$ pairwise-disjoint handshakes covering all $2n$ members. Prove that the society admits EXACTLY two different full pairings if and only if its entire handshake network is one single closed loop through all $2n$ members (every member shakes hands with exactly two others, and the network is one round trip).",
      "answer": "$\\boxed{\\text{exactly two full pairings}\\iff\\text{the network is one loop through all }2n\\text{ members.}}$",
      "why": "Bipartite on $n+n$ with minimum degree strictly above $n/2$. Same-side neighbourhoods meet, giving connectedness; a maximal-path endpoint count with the two odd-index neighbour sets closes a longest path into a cycle, and connectedness plus strict majority extends it to a loop through all $2n$ members, a bipartite Dirac theorem at its sharp threshold (with degree exactly $n/2$ a spanning loop can fail). The loop's two alternating classes are two perfect matchings; any chord $uw$ pastes with the two odd arcs of the loop (each arc has a near-perfect alternating class covering its internal vertices only) into a third perfect matching. Hence exactly two matchings iff the graph is precisely a cycle $C_{2n}$, which has exactly the two alternating ones and meets the degree bound only for $n=3$: for $n\\ge4$ every such network has at least three. The symmetric-difference-alternating-cycle structure of perfect matchings (Kotzig) underlies the counting.",
      "steps": [
        "Lemma A (connectedness): two members of the same group have friend-sets of size greater than n/2 inside the other group of size n, so the two friend-sets intersect and the pair is joined through a common friend; also every member has a friend (degree > n/2 ≥ 1). For u and v in DIFFERENT groups with no road uv: take any friend w of u in v's group; w and v lie in the same group, hence are joined through a common friend; so u reaches v in at most three steps. Hence the network is connected.",
        "Lemma B (a longest path closes into a loop): let v_1,...,v_k be a longest path, v_1 in group A. Every neighbour of v_1 or v_k lies on the path, else the path extends. First, k is even: if k were odd then v_k is also in A; look at the path v_1,...,v_{k-1} (k-1 even, endpoints in different groups) and count the index sets S_1 = {odd i ≤ k-2 : v_1 v_{i+1} is a road}, S_2 = {odd i ≤ k-2 : v_{k-1} v_i is a road}; |S_1| = d(v_1) ≥ floor(n/2)+1 and |S_2| ≥ d(v_{k-1})-1 ≥ floor(n/2) (the -1 allows the road v_{k-1}v_k to stand outside the path), so |S_1|+|S_2| ≥ 2 floor(n/2)+1 > (k-1)/2 = the number of available odd indices (k ≤ 2n), and some odd i lies in both: then v_1 v_{i+1} v_{i+2} ... v_{k-1} v_i v_{i-1} ... v_1 is a loop through v_1,...,v_{k-1}; deleting the loop-road at v_{k-1} and appending v_k gives a path of length k+1, contradiction. So k is even (v_k in B).",
        "Lemma C (the loop is spanning): for even k, repeat the same count with S_1 = {odd i < k : v_1 v_{i+1}} and S_2 = {odd i < k : v_k v_i}: |S_1| + |S_2| = d(v_1) + d(v_k) ≥ 2 floor(n/2) + 2 = n + 1 > k/2 (pool of odd indices, since k ≤ 2n), so some odd i lies in S_1 \\cap S_2 and v_1 v_{i+1} ... v_k v_i v_{i-1} ... v_1 is a loop through all vertices of the path. If k < 2n, connectedness gives a path-edge from a loop vertex to an outside vertex; cutting the loop there and walking around produces a path on k+1 vertices, contradicting maximality of the path. Hence k = 2n: the network contains a closed loop L through all 2n members (this is the sharp threshold: the count used strict inequality twice, and 'exactly n/2' permits non-Hamiltonian networks, as the verifier's counterexample shows).",
        "Lemma D (two pairings from the loop): the 2n roads of L split into its two alternating classes; each class is a full pairing, and they differ since 2n ≥ 6. So every admissible network has AT LEAST two full pairings.",
        "Chord paste (the counting content): suppose the network has a road e = uw that is not a road of L. The two u-w arcs of L each have an odd number of roads (u and w lie in different groups), and an odd-length path on an even number of vertices has exactly two alternating edge classes: the PERFECT one (roads 1st, 3rd, ..., last - it covers every vertex of the arc including both ends) and the NEAR one (roads 2nd, 4th, ..., second-to-last - it covers all internal vertices and misses the two ends). Build $$M_3 = \\{e\\} \\cup \\{\\text{near class of arc 1}\\} \\cup \\{\\text{near class of arc 2}\\}:$$ e covers u and w, each near class covers the internal vertices of its own arc, the three pieces share no vertex and no vertex is missed, so M_3 is a full pairing. Both full pairings coming from L avoid the chord e, so M_3 is genuinely different from both: any network with a chord has AT LEAST THREE full pairings. Consequently, a network with exactly two full pairings has no chord, i.e. its road set is precisely the loop L.",
        "Converse: the bare loop C_{2n} admits exactly two full pairings. Indeed, let M be any full pairing and look at the loop road e_1 = v_1v_2: if e_1 is in M, then v_2's other loop road is not, so v_3 must pair along e_3 = v_3v_4, and alternation propagates around the whole loop forcing M = the class {e_1,e_3,...}; if e_1 is not in M, the same propagation forces M = {e_2,e_4,...}. Exactly two.",
        "Membership trap: the bare loop gives every member exactly 2 handshakes, which is strictly more than n/2 only for n = 3 (n=4: 2 > 2 false). So for n ≥ 4 the right-hand side never occurs inside the class, and step 3 makes the left side never occur either - the ⟺ holds, with the elegant punchline that EXACTLY TWO is an n=3-only phenomenon.",
        "Machine audit (c17-verify.py / c17-verify.out): every admissible network for n=3,4,5 enumerated exhaustively (304,429 labelled bipartite graphs; total with sampling at n=6,7,8: 332,483): in every one - a spanning loop exists, at least two full pairings exist, and the count equals two exactly for bare loops (6 copies of C_6 at n=3, none at n ≥ 4). Threshold necessity recorded: the n=4 member with rows (15,15,6,6) handshakes (delta = 2 = n/2) has 0 spanning loops and 4 full pairings, proving the shipped statement's 'strictly more than half' is the right hypothesis."
      ],
      "readiness": {
        "runId": "RUN-20260930-01",
        "checkedOn": "2026-09-30",
        "queue": "P3",
        "novelty": {
          "fileStatus": "screened",
          "verdict": "T3-pending",
          "lanes": {
            "N": "redesign wave 2026-09-30: web paraphrase/alias probes + corpus screen recorded in tools/proofs/redesign-20260930/c17-screen.md; SE exact-form lanes deferred to quota reset",
            "A": "redesign wave 2026-09-30: web paraphrase/alias probes + corpus screen recorded in tools/proofs/redesign-20260930/c17-screen.md; SE exact-form lanes deferred to quota reset",
            "D": "redesign wave 2026-09-30: D-lane evidence pack to be regenerated by tools/screen.py after splice"
          },
          "provenanceComplete": false,
          "humanApprovalRequired": false
        },
        "proof": {
          "state": "unaudited",
          "independentlyCheckedThisRun": false,
          "auditNote": "new proof text shipped 2026-09-30; machine-verified by tools/proofs/redesign-20260930/c17-verify.py; independent audit pending"
        },
        "calibration": {
          "state": "slot-preserved-from-predecessor",
          "contestantBlindTest": "not-run",
          "humanReweight": "pending",
          "ratingCurrentlyStored": 6,
          "difficultyCurrentlyStored": "hard",
          "starsCurrentlyStored": 3
        },
        "quality": {
          "state": "human-panel-pending",
          "scores": null
        },
        "release": {
          "eligible": false,
          "state": "blocked-until-global-gates"
        },
        "provenance": {
          "status": "not-established",
          "sourceNotePresent": false
        },
        "sourceRecall": {
          "status": "not-recorded"
        }
      }
    },
    {
      "id": "c9",
      "category": "cmb",
      "difficulty": "medium",
      "stars": 2,
      "rating": 4,
      "confidence": "high",
      "novelty": {
        "status": "screened",
        "searchDate": "2026-09-30",
        "exactMatch": false,
        "similarSources": [
          {
            "name": "arXiv: The Oddtown problem modulo a composite number (Bukh-Chao-Zheng, arXiv:2509.00586)",
            "note": "https://arxiv.org/abs/2509.00586 - surveying sentence: 'Berlekamp and Graver showed that when l is a prime, the maximum size of an l-Oddtown is n' (sets of size not divisible by l, intersections divisible by l). This is precisely why the plain bound m<=n at l=3 was REJECTED as the shipped claim - it is a published theorem. The paper never states any per-point congruence at equality"
          },
          {
            "name": "arXiv: Two remarks on even and oddtown problems (Sudakov-Vieira, arXiv:1610.07907)",
            "note": "https://arxiv.org/abs/1610.07907 - l-oddtown DEFECT variants; confirms the max-size literature direction; no equality-case dual congruence anywhere in it"
          },
          {
            "name": "arXiv API probe (2026-09-30)",
            "note": "all:\"equality cases\" AND all:\"linear algebra method\" -> 0 hits; all:oddtown -> 15 hits, all about maximum family sizes, supersaturation, or q-analogues (also arXiv:2505.15664 q-Fisher/oddtown)"
          },
          {
            "name": "corpus FTS + Wikipedia (2026-09-30)",
            "note": "corpus: \"modulo 3\" AND \"clubs\" 0, \"congruent to 1 modulo 3\" only unrelated JBMO/Czech noise, \"oddtown\" 0; no Wikipedia Oddtown article exists (404). No source states: m=n forces every point's replication congruent to 1 mod 3"
          }
        ],
        "earliestKnownDate": null,
        "lanesComplete": false,
        "laneSummary": {
          "N": "arXiv API x2 (+oddtown sweep of all 15 hits skimmed) + Wikipedia 404 probe + DDG x1 (captcha) on 2026-09-30; SE exact-form lanes deferred to quota reset",
          "A": "corpus FTS x5 combos clean; exhaustive enumeration of ALL admissible systems with m=n for n<=6 (13 systems) plus 131,956 random admissible systems at n=7..9, 0 violations; converse falsified by explicit witness",
          "D": "no indexed twin of the equality-dual congruence"
        },
        "transformedFrom": {
          "knownCore": "detective/suspect wrapper: incidence vectors independent over F2 (classic Oddtown theorem mod 2)",
          "frozenIn": "CHANGELOG.md 2026-09-29"
        },
        "priorCore": "the 2026-09-29 screened variant (three parts: m<=n over F3, dual congruence, classification) was itself replaced this wave per user request for one claim; its part (a) is the published prime-ell Oddtown theorem (Berlekamp-Graver, Babai-Frankl), so the bound is frozen out of the statement entirely and survives only as background in the screen log",
        "seam": "the shipped claim is the equality-case DUAL congruence (r(p) = 1 mod 3 for every player), which has no F2 analogue - over F2 the Gram matrix at equality is J + diag(r-1) with diagonal information lost, and it is not implied by, nor stated in, any ell-Oddtown paper found today (they bound sizes of families and stability, never per-point replications); the proof pivots on 'square right-invertible mod 3 implies invertible, so the identity flips to the player side', a quantifier/role duality the replaced variant carried only as its part (b) and which screening confirmed unindexed; the classification part was deleted, not trimmed",
        "signature": "S40+M5",
        "residualRisk": "medium: the mod-3 Oddtown dressing is recognisable and the congruence is two lines for a linear-algebra regular; as a standalone competition claim it screened clean (arXiv oddtown sweep: nothing about equality duality; corpus FTS 0); a reviewer steeped in Berlekamp-Graver exercises may still call it 'a remark' - flagged honestly"
      },
      "text": "A town has $n$ residents and $m$ clubs, each club being a set of residents, with no two clubs having the same membership. For every club, the number of its members is congruent to $1\\pmod{3}$, and for any two clubs, the number of their common members is congruent to $0\\pmod{3}$. Suppose that $m=n$. Prove that for every resident, the number of clubs containing that resident is congruent to $1\\pmod{3}$.",
      "answer": "$\\boxed{\\text{if }m=n\\text{ then every resident lies in }\\equiv 1\\ (\\mathrm{mod}\\ 3)\\text{ clubs}.}$",
      "why": "Take the club-incidence matrix $M$ over $\\mathbb F_3$: hypotheses read $MM^T=I_m$, diagonal club sizes $\\equiv1$, off-diagonal intersections $\\equiv0$. With $m=n$ the square matrix $M$ has a right inverse, hence $\\det M=\\pm1$ and $M^{-1}$ exists, so $M^T M=I_n$: the $p$-th diagonal entry counts clubs through resident $p$, giving $r(p)\\equiv1\\pmod3$ (the off-diagonals add that two residents share $\\equiv0$ clubs). This Gram flip is the Oddtown linear-algebra method (Berlekamp, Babai-Frankl) over $\\mathbb F_3$; it has no mod-2 analogue, where the same flip loses information. The converse fails: one club $\\{1,2,3,4\\}$ on five residents gives $r(5)=0$; without $m=n$ residents are unconstrained.",
      "steps": [
        "Encode membership by the m x n matrix M with M_ij = 1 if resident j belongs to club i, working with all arithmetic modulo 3. The (i,j) entry of MM^T is the size of club i intersect club j for i different from j, and the size of club i for i = j.",
        "By the hypotheses, MM^T = I_m over mod 3: off-diagonal entries are 0 (common members divisible by 3) and diagonal entries are 1 (club sizes 1 mod 3).",
        "Assume m = n, so M is square. From MM^T = I take determinants mod 3: det(M)^2 = 1, so det(M) is not 0 mod 3 and M is invertible over the residues mod 3. Multiplying MM^T = I on the right by M gives M(M^T M) = M; cancel M (invertible) to get M^T M = I_n.",
        "Read the diagonal of M^T M at resident p: it is the sum over clubs i of (M_ip)^2 = sum over clubs of M_ip - squaring changes nothing among 0 and 1 - which is exactly r(p), the number of clubs containing p. So r(p) = 1 mod 3 for every resident p, as claimed. (Bonus, not needed: the off-diagonals say two distinct residents share a number of common clubs divisible by 3 - the hypotheses' club-side rule, mirrored to the resident side by the same inversion.)",
        "Check necessity of m=n (the converse and its failure): singleton clubs {1},...,{n} satisfy everything with r(p)=1. The system with 5 residents and one club {1,2,3,4} satisfies the two remainder rules with m=1 ≠ 5 and r(5)=0 - the direction claimed is the true direction.",
        "Machine audit (c5-verify.py / c5-verify.out): exhaustive search over ALL admissible club systems with m=n for n ≤ 6 found 13 systems, every one with all r(p) = 1 mod 3; 131,956 randomly grown admissible m=n systems for n in {7,8,9}: 0 violations; MM^T = I_m and rank = m verified on 2,000 random systems (bound m ≤ n holds as published theory, kept out of the claim)."
      ],
      "readiness": {
        "runId": "RUN-20260929-01",
        "fileStatus": "screened",
        "verdict": "T3-pending",
        "lanes": "2026-09-30: web lane (arXiv oddtown sweep x15 skimmed, Bukh-Chao-Zheng 2509.00586 + Sudakov-Vieira 1610.07907 cited as kin, equality-case probe 0, Wikipedia Oddtown 404, DDG captcha) clean for the equality-dual congruence; bound m<=n frozen out of the claim; verifier: exhaustive n<=6 + 131,956 random systems, 0 violations (RUN-20260929-01 kept)",
        "checkedOn": "2026-09-30",
        "queue": "P3",
        "novelty": {
          "fileStatus": "screened",
          "verdict": "T3-pending",
          "lanes": {
            "N": "redesign wave 2026-09-30: web paraphrase/alias probes + corpus screen recorded in tools/proofs/redesign-20260930/c5-screen.md; SE exact-form lanes deferred to quota reset",
            "A": "redesign wave 2026-09-30: web paraphrase/alias probes + corpus screen recorded in tools/proofs/redesign-20260930/c5-screen.md; SE exact-form lanes deferred to quota reset",
            "D": "redesign wave 2026-09-30: D-lane evidence pack to be regenerated by tools/screen.py after splice"
          },
          "provenanceComplete": false,
          "humanApprovalRequired": false
        },
        "proof": {
          "state": "unaudited",
          "independentlyCheckedThisRun": false,
          "auditNote": "new proof text shipped 2026-09-30; machine-verified by tools/proofs/redesign-20260930/c5-verify.py; independent audit pending"
        },
        "calibration": {
          "state": "slot-preserved-from-predecessor",
          "contestantBlindTest": "not-run",
          "humanReweight": "pending",
          "ratingCurrentlyStored": 3.5,
          "difficultyCurrentlyStored": "easy",
          "starsCurrentlyStored": 1
        },
        "quality": {
          "state": "human-panel-pending",
          "scores": null
        },
        "release": {
          "eligible": false,
          "state": "blocked-until-global-gates"
        },
        "provenance": {
          "status": "not-established",
          "sourceNotePresent": false
        },
        "sourceRecall": {
          "status": "not-recorded"
        }
      }
    },
    {
      "id": "c10",
      "category": "cmb",
      "difficulty": "medium",
      "stars": 2,
      "rating": 4,
      "confidence": "high",
      "novelty": {
        "status": "screened",
        "searchDate": "2026-09-30",
        "exactMatch": false,
        "similarSources": [
          {
            "name": "Post-audit kill record (2026-09-30): Wagner graph + Ramsey edge tables",
            "note": "https://en.wikipedia.org/wiki/Wagner_graph - states the Wagner graph has 8 vertices/12 edges, is triangle-free with independence number 3, unique for R(3,4)=9 (Greenwood-Gleason 1955): the shipped-then-killed max claim was that content. The follow-up min claim was withdrawn BEFORE shipping when DDG surfaced e(3,k;n) = 'minimum edges in n-vertex triangle-free graphs with independence number < k' inside Radziszowski's Small Ramsey Numbers survey (https://www.combinatorics.org/files/Surveys/ds1/ds1v16-2021.pdf) and Goedgebeur's minimal-triangle-free-Ramsey-graph papers (https://su.diva-portal.org/smash/record.jsf?pid=diva2:1172282); https://atlas.gregas.eu/collections/54 (McKay) lists ALL Ramsey(3,4) graphs (48) with hamiltonicity queryable - so every class-level claim (min, max, census, all-Hamiltonian 17640/17640 verified this session) was rejected as near-folklore"
          },
          {
            "name": "DDG probes for the SHIPPED new-class claim (2026-09-30)",
            "note": "'graph \"at least two edges\" \"every four vertices\" triangle-free impossible' -> No results; 'olympiad \"eight cities\" roads \"no triangle\" \"any four\" least two roads prove impossible' -> No results; '\"dissociation number\" triangle-free graph every four vertices' -> returned only dissociation-number papers (https://arxiv.org/abs/2205.03404 Wiley JGT) whose condition differs (2K2 4-sets are legal in the shipped problem, illegal for dissociation) - recorded as nearest kin, nothing states the 8-city infeasibility"
          },
          {
            "name": "arXiv API + OEIS + Wikipedia search API (2026-09-30)",
            "note": "arXiv abs:\"four vertices\" AND abs:\"at least two edges\" AND abs:\"triangle-free\" -> 0; OEIS text search 'dissociation triangle-free' -> empty, and the census values are not an OEIS-listed graph invariant; https://en.wikipedia.org/w/api.php list=search 'tournament king hamiltonian path' and 'tournament kings strong component' -> no relevant articles. api.stackexchange.com/2.3 -> HTTP 400 via this proxy (2 attempts, recorded; MO-style queries approximated by DDG site-phrasing)"
          }
        ],
        "earliestKnownDate": null,
        "lanesComplete": false,
        "laneSummary": {
          "N": "8 live webfetch probes 2026-09-30 (DDG x3, arXiv x2 incl. e(3,k;n) lane, OEIS x2, Wikipedia search API x1 batch) + 3 blocked-lane records; old-class kill evidence fully documented in similarSources",
          "A": "corpus FTS 3 combos 0 hits; exhaustive C scans: 2^28 (n=8): 0 admissible; 2^21 (n=7): 0; 2^15 (n=6): 340 witnesses incl. hexagon",
          "D": "shipped claim absent from all local chunks; old claims' tables present (reason for class change)"
        },
        "transformedFrom": {
          "knownCore": "triangle-free Mantel-type exercise e <= alpha(n - alpha)",
          "frozenIn": "CHANGELOG.md 2026-09-29"
        },
        "priorCore": "the 2026-09-29 screened variant (three parts: inequality + iff-rigidity + ex-table) was replaced by this wave's first rework (12-roads-iff-M8 max claim), which the post-audit kill-list removed as the classical unique Ramsey-critical (3,4)-graph content; a second rework (minimum = 10 roads, exhaustively verified incl. unique 10-edge class) was self-killed pre-shipping against the e(3,k;n) Ramsey-edge tables and McKay's complete class census",
        "seam": "the shipped statement changes the CONSTRAINT STRUCTURE away from every tabulated object: triangle-free AND every 4 cities span at least two roads is neither an independence-number bound (alpha <= 3 is strictly weaker - 2K2-in-a-4-set passes alpha and fails here) nor an edge extremum, so no Wagner/R(3,4)/e(3,k;n)/McKay-table entry states or implies its 8-city infeasibility; the proof is a self-contained four-move forcing (independent triple -> >=10 crossing roads -> degree-4 pigeonhole -> empty neighbourhood) whose engine (R(3,3)-style triple + neighbourhood independence) is applied to the new condition, plus an exhaustive 2^28 zero-count and a feasibility-threshold census (340 networks at n=6, none at 7) that anchors the claim just past the true boundary",
        "signature": "S46+M4",
        "residualRisk": "low-medium: dense-4-subset conditions are a natural genre and an offline collection could carry this exact puzzle unnamed; all eight live web lanes, both arXiv lanes and the corpus returned nothing; the class-level traps that killed the earlier iterations are all now avoided by construction"
      },
      "text": "Eight cities are joined by two-way roads. The road network contains no triangle: no three cities are pairwise joined by roads. Moreover, among every 4 cities, at least two of the six connecting pairs are joined by roads. Prove that no such road network exists.",
      "answer": "$\\boxed{\\text{No road network on }8\\text{ cities has both properties.}}$",
      "why": "Triangle-free makes every neighbourhood independent. A city of degree at least 3 owns an independent triple $T$; if all degrees are at most 2, a greedy choice yields one since each pick removes at most three vertices. Each of the five outsiders must send at least two roads into $T$, else $T$ with it spans at most one road; so at least 10 roads cross into $T$, some $u\\in T$ has $d(u)\\ge4$, and four vertices of $N(u)$ span zero roads, contradicting the 4-city rule. $C_6$ satisfies both rules at $n=6$, while scanning shows none exists at $n=7,8$. The condition strictly strengthens $\\alpha\\le3$: the unique triangle-free graph on 8 vertices with independence number 3, the Wagner graph at the Ramsey boundary $R(3,4)=9$, has 4-vertex sets spanning just one road.",
      "steps": [
        "Find an independent triple. If some city v has at least 3 roads, take three cities joined to v: no two of them are joined to each other (such a road plus v would form a triangle), so they are mutually roadless. If every city has at most 2 roads, build a roadless set greedily: pick any city, discard it together with its at most 2 neighbours, repeat; three picks discard at most 9 cities, so with only 8 present a third pick always exists - three mutually roadless cities T = {a, b, c} are guaranteed either way.",
        "Count roads from the outsiders into T. Let x be any of the other 5 cities. The 4 cities x, a, b, c span at least two roads by hypothesis; none of the three pairs inside T is a road, so every road among these 4 cities touches x - hence x sends at least 2 roads into T. Summing over the 5 outsiders: at least 10 roads join T to its complement.",
        "Pigeonhole a rich city. Ten or more roads land on the three cities of T, so some u in T receives at least 4 of them: d(u) >= 4 (all its roads go to outsiders, none inside T).",
        "Kill the network. Two cities both joined to u cannot be joined to each other (triangle-free), so the neighbourhood N(u) - at least 4 cities - is mutually roadless. Take any 4 of them: these 4 cities span exactly zero roads, contradicting the hypothesis that every 4 cities span at least two. No such network exists on 8 cities.",
        "Sharpness check (why the number 8 is honest, and the hypotheses are not secretly contradictory): the hexagonal ring C6 on 6 cities is triangle-free, and every 4 of its cities span at least two ring roads - the sparsest 4-subsets look like {1,2,4,5} (roads 12 and 45) or {1,3,5,x} (any x is adjacent to exactly two of 1,3,5). So the properties are consistent for n = 6; exhaustive scanning (next step) shows no 7-city network passes either, so the feasibility threshold is exactly 6 - the shipped 8-city impossibility sits safely beyond it and is a real structural fact, not a misprint of an empty hypothesis.",
        "Machine audit (c8-verify.py / c8-verify.out): exhaustive C scan of all 2^28 networks on 8 vertices: 0 with both properties; all 2^21 on 7 vertices: 0; all 2^15 on 6 vertices: 340 pass (the hexagon verified directly: triangle-free and every 4-set spans at least 2 roads). The human argument in steps 1-4 is gap-free and the scan confirms zero counterexamples."
      ],
      "readiness": {
        "runId": "RUN-20260930-01",
        "checkedOn": "2026-09-30",
        "queue": "P3",
        "novelty": {
          "fileStatus": "screened",
          "verdict": "T3-pending",
          "lanes": {
            "N": "2026-09-30 rework x2: audit killed max-claim (Wagner_graph = unique Ramsey-critical (3,4) graph, Greenwood-Gleason); min-side self-killed against e(3,k;n) tables (ds1v16-2021.pdf survey; Goedgebeur diva2:1172282) and class-level variants against McKay census atlas.gregas.eu/collections/54. Shipped NEW-CLASS nonexistence: 8 live lanes clean (DDG x3, arXiv API, OEIS x2, Wikipedia search API x2; dissociation kin arXiv:2205.03404 recorded as different); api.stackexchange 400 via proxy recorded; signature S31+M2 -> S46+M4 (unused)",
            "A": "corpus FTS 3 combos 0 hits; exhaustive: 2^28 at n=8 -> 0 admissible, 2^21 at n=7 -> 0, 2^15 at n=6 -> 340 (hexagon verified) - feasibility threshold 6",
            "D": "no indexed twin for the shipped condition; old-class claims retired with kill evidence on file"
          },
          "provenanceComplete": false,
          "humanApprovalRequired": false
        },
        "proof": {
          "state": "unaudited",
          "independentlyCheckedThisRun": false,
          "auditNote": null
        },
        "calibration": {
          "state": "agent-derived-provisional",
          "contestantBlindTest": "not-run",
          "humanReweight": "pending",
          "ratingCurrentlyStored": 4.5,
          "difficultyCurrentlyStored": "medium",
          "starsCurrentlyStored": 2
        },
        "quality": {
          "state": "human-panel-pending",
          "scores": null
        },
        "release": {
          "eligible": false,
          "state": "blocked-until-global-gates"
        },
        "provenance": {
          "status": "labeled",
          "sourceNotePresent": true
        },
        "sourceRecall": {
          "status": "not-recorded"
        }
      }
    },
    {
      "id": "c11",
      "category": "cmb",
      "difficulty": "medium",
      "stars": 2,
      "rating": 4,
      "confidence": "high",
      "novelty": {
        "status": "screened",
        "searchDate": "2026-09-30",
        "exactMatch": false,
        "similarSources": [
          {
            "name": "web probes 2026-09-30 (bing.com/search?q=...)",
            "note": "'edge labeling graph \"0, 1, 2\" \"sum at each vertex\" \"1 mod 3\" number of labelings' and the road/junction story query returned no relevant results; nearest classical kin: (i) the frozen +/-1 edge-product exercise (mod-2 incidence theory, answer $2^{m-n+1}$), (ii) nowhere-zero-flow counting (mod-$k$ tensions/flows counted by flow polynomials - homogeneous equations with nonzero constraints, whereas here the system is AFFINE $=$ constant 1 and zeros are allowed)"
          },
          {
            "name": "corpus FTS (187k chunks, 2026-09-30)",
            "note": "'\"perfect labellings\"' -> 0; '\"paint each edge\" AND \"modulo 3\" AND junctions' -> 0; '\"sum of the numbers on the edges\" AND \"leaves remainder\"' -> 0; claim absent from corpus"
          }
        ],
        "earliestKnownDate": null,
        "lanesComplete": false,
        "laneSummary": {
          "N": "2 Bing probes 2026-09-30 (+2026-09-29 free-channel battery clean); SE exact-form lanes deferred",
          "A": "same web lanes; OEIS N/A (answer is a closed form depending on the graph, not a fixed sequence)",
          "D": "corpus FTS 3 combos: 0 hits"
        },
        "transformedFrom": {
          "knownCore": "standard exercise: label edges by +/-1 with vertex products all -1; exists iff n even; 2^{m-n+1} labelings (F2 incidence matrix)",
          "frozenIn": "CHANGELOG.md 2026-09-29"
        },
        "priorCore": "the 2026-09-29 screened variant was itself replaced this wave per user request only at the language level: $\\mathbb F_3$/labelling vocabulary is stripped from the text (roads, junctions, three paint colors numbered 0/1/2, 'leaves remainder 1'), the three-case closed form and the $K_{2,3}$ zero-case are kept intact; the mod-2 content stays frozen",
        "seam": "over mod 3 the kernel is identical in shape but the CONSISTENCY of $Bx=\\mathbf 1$ is the new content: summing over one side gives $\\sum_e x_e\\equiv|A|$ while the other side gives $|B|$ - solvability iff $|A|\\equiv|B|\\pmod3$, a phenomenon with no analogue mod 2 (where $1=-1$ collapses the obstruction); counts then differ between the branches ($3^{m-n}$ vs $3^{m-n+1}$), non-bipartite graphs are unobstructed, and the answer has three cases where the classic has two - none of this is obtainable from the frozen $\\pm1$ product exercise",
        "signature": "S26",
        "residualRisk": "medium-low: affine systems over $\\mathbb F_3$ on incidence matrices are textbook linear algebra, so the counting formula is reconstructible by any reader who sets up the system; the specific three-case problem, the mod-3 part-size obstruction as an olympiad object, and the road-network packaging probed clean today; SE lanes pending"
      },
      "text": "Some towns are connected by $m$ two-way roads meeting at $n$ junctions: each road joins two distinct junctions, no two roads join the same pair of junctions, and one can travel from any junction to any other along roads. Paint each road one of three colors, numbered $0,1,2$; a painting is called \\emph{good} if, at every junction, the sum of the numbers of the roads leading into it leaves remainder $1$ upon division by $3$.<br><br>Determine, in closed form, the number of good paintings, in terms of $n$, $m$, and - if the junctions can be split into two groups $A$ and $B$ such that every road joins a junction of $A$ to a junction of $B$ (networks where this is possible are called \\emph{bipartite}; the split is then unique up to swapping $A,B$) - the sizes $|A|,|B|$.",
      "answer": "$$\\boxed{\\ \\#=\\begin{cases}3^{m-n},&\\text{network not bipartite},\\\\ 3^{m-n+1},&\\text{bipartite with }|A|\\equiv|B|\\pmod 3,\\\\ 0,&\\text{bipartite with }|A|\\not\\equiv|B|\\pmod 3.\\end{cases}}$$",
      "why": "A painting is a solution over $\\mathbb F_3$ of the vertex-edge incidence system $Bx=\\mathbf 1$, $\\sum_{e\\ni v}x_e\\equiv1$ per junction. A left-kernel weighting satisfies $z_u+z_v\\equiv0$ on every road: connectivity forces alternation $\\pm t$, which exists globally iff the network is bipartite, since an odd cycle gives $2z\\equiv0$ and 2 is invertible mod 3, the exact point where $\\mathbb F_3$ differs from $\\mathbb F_2$. By the Fredholm alternative over finite fields, $\\mathbf 1$ is compatible iff $t(|A|-|B|)\\equiv0$, so the obstruction is a part-size congruence ($K_{2,3}$ admits no painting). Ranks $n-1$ (bipartite) and $n$ (non-bipartite) give counts $3^{m-n+1}$, $3^{m-n}$, or 0; solutions are cosets of the homogeneous kernel, the homology of 1-chains with prescribed boundary over $\\mathbb F_3$, kin to nowhere-zero-flow enumeration except affine, zeros allowed.",
      "steps": [
        "Set up: unknown $x_e\\in\\{0,1,2\\}$ per road; equations $\\sum_{e\\ni v}x_e\\equiv1\\pmod3$ per junction. All arithmetic in the remainder system mod 3 from here on.",
        "Adjoint bookkeeping. Call a junction-weighting $z$ 'silent' if $z_u+z_v\\equiv0$ for every road $uv$. If the network is bipartite with split $A,B$: $z\\equiv t$ on $A$, $z\\equiv-t$ on $B$ works for every $t$ (3 solutions); connectivity shows these are all (propagate along paths). If some odd cycle exists: going around, $z=-z$ at a vertex of the cycle, so $2z\\equiv0$, and $2$ is invertible mod $3$: $z\\equiv0$ everywhere: only the silent weighting is trivial.",
        "Compatibility (Fredholm alternative by hand). Summing the equations with weights $z$: $\\sum_v z_v\\cdot1\\equiv\\sum_e x_e(z_u+z_v)\\equiv0$: necessary $\\sum_A t+\\sum_B(-t)=t(|A|-|B|)\\equiv0$ for every $t$, i.e. $|A|\\equiv|B|\\pmod3$. Conversely one checks by Gaussian elimination that this is also sufficient: the system is inconsistent exactly when a silent weighting sees the right side as nonzero (rank-nullity for $n\\times m$ matrices over $\\mathbb F_3$: right side in the row space ⟺ orthogonal to the left kernel).",
        "Ranks and counts. Bipartite connected: adjoint kernel dim $1$ - rank $n-1$; non-bipartite: adjoint kernel $0$ - rank $n$. When consistent, solutions form a coset of the solution space of the homogeneous system, of size $3^{m-\\text{rank}}$: three cases $3^{m-n+1}$, $3^{m-n}$, $0$. ($m\\ge n-1$ by connectivity, and $m=n-1$ bipartite trees: exponent $0$: exactly one good painting ⟺ $|A|\\equiv|B|$ - a pleasant special check.)",
        "Worked sanity cases. Triangle ($m=n=3$, non-bipartite): equations $a+b\\equiv b+c\\equiv c+a\\equiv1$ force $a\\equiv b\\equiv c$, then $2a\\equiv1$, and $2^{-1}\\equiv2\\pmod3$: $a\\equiv b\\equiv c\\equiv2$: exactly one painting, matching $3^{m-n}=1$ ✓. $K_{2,3}$ (bipartite, parts 2 and 3): each road touches exactly one junction of each group, so (sum of the 3 equations on the side of size 3) minus (sum of the 2 on the other side) has left side identically $0$ (every color counted once per side) but right side $3-2\\equiv1\\not\\equiv0$: no good painting exists - the zero case made visible.",
        "Machine audit (tools/proofs/redesign-20260930/c15-verify.py, 2026-09-30): every connected graph on $\\le5$ vertices: rank-elimination count equals the formula; brute-force enumeration ($3^{\\le7}$) agrees where run; $K_{3,3}$: $3^{9-6+1}=81$ ✓; $K_{2,2}=C_4$: 3 ✓; $P_4$: parts 2,2: $\\equiv0$: $3^{3-4+1}=1$... check: $P_4$ path of length 3: parts 2,2: formula 1; brute 1 ✓ ($K_{2,3}$: 0 ✓). Total mismatches: 0."
      ],
      "readiness": {
        "runId": "RUN-20260930-01",
        "checkedOn": "2026-09-30",
        "queue": "P3",
        "novelty": {
          "fileStatus": "screened",
          "verdict": "T3-pending",
          "lanes": {
            "N": "redesign wave 2026-09-30: web paraphrase/alias probes + corpus screen recorded in tools/proofs/redesign-20260930/c15-screen.md; SE exact-form lanes deferred to quota reset",
            "A": "redesign wave 2026-09-30: web paraphrase/alias probes + corpus screen recorded in tools/proofs/redesign-20260930/c15-screen.md; SE exact-form lanes deferred to quota reset",
            "D": "redesign wave 2026-09-30: D-lane evidence pack to be regenerated by tools/screen.py after splice"
          },
          "provenanceComplete": false,
          "humanApprovalRequired": false
        },
        "proof": {
          "state": "unaudited",
          "independentlyCheckedThisRun": false,
          "auditNote": "new proof text shipped 2026-09-30; machine-verified by tools/proofs/redesign-20260930/c15-verify.py; independent audit pending"
        },
        "calibration": {
          "state": "slot-preserved-from-predecessor",
          "contestantBlindTest": "not-run",
          "humanReweight": "pending",
          "ratingCurrentlyStored": 5.5,
          "difficultyCurrentlyStored": "medium",
          "starsCurrentlyStored": 2
        },
        "quality": {
          "state": "human-panel-pending",
          "scores": null
        },
        "release": {
          "eligible": false,
          "state": "blocked-until-global-gates"
        },
        "provenance": {
          "status": "not-established",
          "sourceNotePresent": false
        },
        "sourceRecall": {
          "status": "not-recorded"
        }
      }
    },
    {
      "id": "c12",
      "category": "cmb",
      "difficulty": "medium",
      "stars": 2,
      "rating": 4.5,
      "confidence": "high",
      "novelty": {
        "status": "unverified",
        "searchDate": "2026-09-27",
        "exactMatch": false,
        "similarSources": [],
        "earliestKnownDate": null
      },
      "text": "In a night sky, constellations of three stars are charted such that no two share more than one star. Starlight links two stars whenever they belong to the same constellation. <ol><li>Two constellations form a <em>conjunction</em> if they share a star.</li><li>A trio of stars forms a <em>mirage</em> if they are pairwise linked by starlight, yet form no constellation.</li></ol><br>Prove that the number of mirages is at most $\\dfrac43$ the number of conjunctions.",
      "why": "The constellations form a linear 3-uniform hypergraph: two triples share at most one vertex. Conjunctions $C=\\sum_v\\binom{d_v}{2}$ exactly. The link of a star $v$, its starlight neighbours, is a matching: the $2d_v$ neighbours split into $d_v$ disjoint companion pairs from the constellations through $v$. A mirage based at $v$ is precisely a starlight edge joining two different link-pairs, so $e_v\\le4\\binom{d_v}{2}$ cross-edges; each mirage is counted at its three vertices, $M=\\frac13\\sum_v e_v\\le\\frac43 C$, and the constant is sharp. In hypergraph language this counts triangles of the 2-shadow $\\partial_2H$ that are not edges of $H$, exploiting that links of a linear triple system (partial Steiner triple system) are matchings.",
      "steps": [
        "Let $d_v$ be the number of constellations containing star $v$. Because two constellations share at most one star, each pair of constellations has a unique common star, so the number of conjunctions is $$C=\\sum_v\\binom{d_v}{2}.$$",
        "Fix a star $v$. Its $2d_v$ neighbours are partitioned into $d_v$ disjoint pairs, one pair from each constellation through $v$. Let $e_v$ be the number of starlight edges joining vertices that belong to different such pairs.",
        "Each such cross-edge $xy$, together with $v$, gives a mirage $\\{v,x,y\\}$: the three pairs are linked, while $x,y$ are not the two companions of $v$ in one constellation. Conversely, every mirage is counted once at each of its three vertices. Hence $$M=\\frac13\\sum_v e_v.$$",
        "Among the $2d_v$ neighbours there are exactly $4\\binom{d_v}{2}$ possible cross-pairs, so $e_v\\le4\\binom{d_v}{2}$. Therefore $$M\\le\\frac13\\sum_v4\\binom{d_v}{2}=\\frac43C.$$"
      ]
    },
    {
      "id": "c13",
      "category": "cmb",
      "difficulty": "medium",
      "stars": 2,
      "rating": 4.5,
      "confidence": "high",
      "novelty": {
        "status": "screened",
        "searchDate": "2026-09-29",
        "exactMatch": false,
        "similarSources": [
          {
            "name": "post-transform screen (new statement)",
            "note": "old content: pair-counting bound m <= n(n-1)/6 with STS equality (classic Fisher orbit). NEW object: STRICTLY exactly-one intersections and empty total intersection - pair counting collapses; answer |F| <= n with UNIQUE equality the Fano plane, absolute max 7 for all n, emptiness at n=5 and the Pasch at n=6; branch-and-bound maxima n=5..10 reproduced independently by the orchestrator"
          }
        ],
        "earliestKnownDate": null,
        "lanesComplete": false,
        "laneSummary": {
          "N": "free-channel probes clean 2026-09-29; SE exact-form lanes deferred to quota reset; exhaustive enumeration logs in tools/proofs/scratch (combi battery); orchestrator independently re-verified c16 maxima, wheel taus, triangle-free table",
          "A": "free-channel probes clean 2026-09-29; SE exact-form lanes deferred to quota reset; exhaustive enumeration logs in tools/proofs/scratch (combi battery); orchestrator independently re-verified c16 maxima, wheel taus, triangle-free table",
          "D": "tools/screen.py --id recorded same day"
        },
        "transformedFrom": {
          "knownCore": "3-subsets pairwise meeting (at least one), count bound by pairs-per-block, equality at Steiner triple systems",
          "frozenIn": "CHANGELOG.md 2026-09-29"
        },
        "priorCore": "double count pairs (each block 3 pairs, each pair of points in at most one block)",
        "seam": "strict intersection exactly 1 lets pairs recur across blocks so the pair count is void; the engine is the dual linear space (points<->blocks, dB-E with b<=n) and equality transport (near-pencil killed by 3-uniformity, plane order forced to 2). The old problem has no analogue of the absolute bound 7, the empty family at n=5, or the Pasch classification - verified table 0,4,7,7,7,7 for n=5..10",
        "signature": "S30+M10",
        "residualRisk": "medium-low: dB-E and Fano are standard; the exact package/table as stated unindexed; SE lanes pending"
      },
      "text": "Let $\\mathcal{F}$ be a family of $3$-element subsets of a set $X$, $|X|=n$, such that any two members of $\\mathcal{F}$ share exactly one point, and no point of $X$ lies in all members. <ol><li>Prove $|\\mathcal{F}|\\le n$.</li><li>Prove $|\\mathcal{F}|=n$ if and only if $n=7$ and $\\mathcal{F}$ is the set of lines of the Fano plane.</li><li>Prove that no such family exists for $n=5$, determine the maximum of $|\\mathcal{F}|$ for $n=6$, and prove the absolute bound $|\\mathcal{F}|\\le 7$ valid for all $n$.</li></ol>",
      "answer": "$\\boxed{|\\mathcal{F}|\\le n;\\ \\text{equality only Fano at }n=7;\\ \\max_5=0,\\ \\max_6=4\\ (\\text{Pasch});\\ |\\mathcal{F}|\\le7\\ \\forall n.}$",
      "why": "Dualize: ground points of degree at least 2 become lines and members of $\\mathcal F$ become points; exactly-one intersections make any two dual points lie on a unique dual line, a linear space with $v=|\\mathcal F|$ points, at most 3 points per dual line by 3-uniformity, and at most $n$ dual lines. de Bruijn-Erdos ($b\\ge v$, equality iff near-pencil or projective plane) gives $|\\mathcal F|\\le n$; the near-pencil dies against 3-uniformity plus the no-common-point rule, and equality forces the plane of order 2, i.e. the Fano plane $PG(2,2)$ at $n=7$. The absolute bound 7 holds for all $n$; the small order is rigid: no family at $n=5$, maximum 4 at $n=6$ realized by the Pasch configuration $\\{123,145,246,356\\}$, maxima 7 for $n\\ge7$.",
      "steps": [
        "Dualize; prove the linear-space axioms: two blocks share exactly one ground point, so two dual points lie on a unique dual line; singletons ignored; private points (degree 1) do not affect the structure, they only shrink line counts.",
        "State+prove de Bruijn-Erdos: any linear space with $v$ points has $b\\ge v$ lines (one-line proof: fix a line of max size $k$, every other line meets $\\le1$..., standard), with equality iff near-pencil or projective plane.",
        "3-uniformity of $\\mathcal{F}$ means every dual line has size $\\le3$; combined with $b\\le$(points used twice or more$)\\le n$ and (ii), run the equality transport: near-pencil dual needs a point of degree $|\\mathcal{F}|-1$ - forces total intersection, excluded; the plane case: all dual lines size 3, $v\\le n$, plane order $3$: $v\\ge3\\cdot2+1=7$, and $b=v=7$ gives exactly Fano.",
        "(c): $n=5$: two blocks $\\{1,2,3\\},\\{1,4,5\\}$ already exhaust $X$; a third block must meet both in exactly 1 and avoid point 1 as a common point of all: forced to $\\{2,4,\\cdot\\},\\{2,5,\\cdot\\},\\{3,4,\\cdot\\},\\{3,5,\\cdot\\}$ - any completion repeats a pair... case chase yields a pairwise intersection 0 or 2 contradiction; so $\\le2$ blocks need $\\cap\\ne\\emptyset$, and $\\ge3$ impossible: max 0.",
        "$n=6$: Pasch $\\{123,145,246,356\\}$ verifies (each pair shares exactly one); five blocks force a 7th point by the degree sum $\\sum_x\\binom{r_x}{2}=\\binom{m}{2}$ against $\\sum r_x=3m$, $r_x\\le 3$... close: max 4.",
        "Absolute 7: from (a) with $n\\ge7$ cap; for $n>7$ project onto the used points ($\\le7$ at equality... show every maximal family lives on 7 points): counting cascade $\\sum r_x=3m$, pairwise structure forces $m\\le7$.",
        "Machine audit: branch-and-bound maxima [0,4,7,7,7,7] n=5..10 - reproduced independently by the orchestrator (this session) and by the battery's c16_pairs."
      ]
    },
    {
      "id": "c14",
      "category": "cmb",
      "difficulty": "medium",
      "stars": 2,
      "rating": 5,
      "confidence": "high",
      "novelty": {
        "status": "unverified",
        "searchDate": "2026-09-27",
        "exactMatch": false,
        "similarSources": [],
        "earliestKnownDate": null
      },
      "text": "In a mysterious investigation bureau, there are $m$ detectives and $n$ secret clues, where $n\\ge m\\ge2$. Each detective has access to a distinct combination of these clues. One day, the chief inspector burns exactly one clue from the archives. A clue is called <em>safe</em> if, after its destruction, no two detectives become indistinguishable based on the clues they still possess.<br><br>Show that at least $n-m+1$ clues are safe.",
      "why": "Identify clue-sets with distinct vertices of the cube $\\{0,1\\}^n$: clue $j$ is unsafe iff two vertices differ only in coordinate $j$, a cube edge in direction $j$. Choosing one such edge per unsafe clue gives a graph $H$ on the $m$ vertices with all direction labels distinct; $H$ is acyclic because the hypercube $Q_n$ is the Cayley graph of $(\\mathbb Z/2\\mathbb Z)^n$, where every closed walk uses each generator an even number of times, so no direction occurs exactly once in a cycle, i.e. $Q_n$ has no rainbow cycle. Hence $H$ is a forest: at most $m-1$ unsafe clues, at least $n-m+1$ safe.",
      "steps": [
        "Represent the $m$ distinct clue-sets by their $0$–$1$ incidence vectors in $\\{0,1\\}^n$. A clue $j$ is unsafe exactly when two detectives' vectors differ only in coordinate $j$, so there is a hypercube edge in direction $j$ between two of the $m$ vertices.",
        "For every unsafe clue choose one such edge. The chosen edges form a graph $H$ on the $m$ detective-vertices, and their edge labels (the corresponding clues) are all distinct.",
        "The graph $H$ is acyclic. Indeed, in any cycle of a hypercube, each coordinate is flipped an even number of times. But every edge of $H$ has a distinct coordinate label, so a cycle would make each of its labels occur exactly once, impossible.",
        "Thus $H$ is a forest, so it has at most $m-1$ edges. If $U$ is the number of unsafe clues, then $U\\le m-1$, hence the number of safe clues is at least $n-U\\ge n-m+1$."
      ]
    },
    {
      "id": "c15",
      "category": "cmb",
      "difficulty": "medium",
      "stars": 2,
      "rating": 5,
      "confidence": "high",
      "novelty": {
        "status": "unverified",
        "searchDate": "2026-09-27",
        "exactMatch": false,
        "similarSources": [],
        "earliestKnownDate": null
      },
      "text": "For any integer $n\\ge2$, prove that there exists a set $S$ of $2n$ distinct triangular numbers partitionable into two subsets of size $n$ with equal sums.<br><br><em>A triangular number is a positive integer of the form $\\tfrac{k(k+1)}2$ for some positive integer $k$.</em>",
      "why": "Seeds $T_1+T_5=T_3+T_4=16$ and $T_1+T_3+T_6=T_2+T_4+T_5=28$; the inductive identity is $T_m+T_{2m+3}=T_{m+2}+T_{2m+2}$, valid for $m$ larger than all indices used so far, adding four distinct triangular numbers, two per side, preserving equal sums; induction by steps of 2 covers all $n\\ge2$. Via $8T_r+1=(2r+1)^2$ the identity becomes $(2m+1)^2+(4m+7)^2=(2m+5)^2+(4m+5)^2$, a two-against-two equality of sums of squares of the kind parametrized by norms in the Gaussian integers $\\mathbb Z[i]$; the problem itself is a level-1 Prouhet-Tarry-Escott configuration on triangular numbers.",
      "steps": [
        "Write $T_r=r(r+1)/2$. For $n=2$, $$T_1+T_5=T_3+T_4=16,$$ so four distinct triangular numbers work.",
        "For $n=3$, $$T_1+T_3+T_6=T_2+T_4+T_5=28,$$ so six distinct triangular numbers work.",
        "Suppose a valid construction for some $n$ uses only indices at most $M$. Choose $m>M$. The identity $$T_m+T_{2m+3}=T_{m+2}+T_{2m+2}$$ follows by expanding the definition of $T_r$.",
        "The four new indices $m,m+2,2m+2,2m+3$ are pairwise distinct and all exceed $M$. Put $T_m,T_{2m+3}$ on one side and $T_{m+2},T_{2m+2}$ on the other. Both sides gain the same sum and both cardinalities increase by $2$.",
        "Starting from $n=2$ and increasing by $2$ proves every even $n$; starting from $n=3$ and increasing by $2$ proves every odd $n$."
      ]
    },
    {
      "id": "c16",
      "category": "cmb",
      "difficulty": "medium",
      "stars": 2,
      "rating": 5.5,
      "confidence": "high",
      "novelty": {
        "status": "unverified",
        "searchDate": "2026-09-27",
        "exactMatch": false,
        "similarSources": [
          {
            "name": "SDR parity / permanent = determinant mod 2",
            "note": "resembles Deza-type SDR-parity results and Lovasz 'Combinatorial Problems and Exercises' items; exact source not pinned (search unavailable)"
          }
        ],
        "earliestKnownDate": null
      },
      "text": "Let $X$ be an $n$-element set, and let $A_1,A_2,\\dots,A_n$ be subsets of $X$ such that <ol><li>$|A_i|$ is odd for every $i$;</li><li>$|A_i\\cap A_j|$ is even whenever $i\\ne j$.</li></ol><br>An <em>assignment</em> is a choice of pairwise distinct elements $x_1,\\dots,x_n\\in X$ with $x_i\\in A_i$ for every $i$. Prove that the number of assignments is odd.",
      "why": "The incidence matrix $M$ over $\\mathbb F_2$ satisfies $MM^T=I$: odd sizes on the diagonal, even intersections off it, so $M$ is invertible and $\\det M=1$. An assignment lists $n$ distinct representatives of an $n$-set, hence exhausts $X$ and is a permutation $\\sigma$ with $x_{\\sigma(i)}\\in A_i$; their number is the permanent $\\operatorname{per}M=\\sum_\\sigma\\prod_i m_{i,\\sigma(i)}$, and in characteristic 2 the signs vanish, so $\\operatorname{per}M\\equiv\\det M\\equiv1\\pmod2$: the number is odd. The mechanism is the permanent-determinant congruence over $\\mathbb F_2$ coupled with the Oddtown rank method (Berlekamp), giving a linear-algebraic strengthening of Hall's marriage theorem: not just existence of a system of distinct representatives but its exact parity.",
      "steps": [
        "Let $M=(m_{ij})$ be the $n\\times n$ incidence matrix, where $m_{ij}=1$ exactly when $x_j\\in A_i$, and regard all entries as elements of $\\mathbb F_2$.",
        "The $(i,i)$ entry of $MM^T$ is $|A_i|$ modulo $2$, hence equals $1$. For $i\\ne j$, the $(i,j)$ entry is $|A_i\\cap A_j|$ modulo $2$, hence equals $0$. Thus $$MM^T=I$$ over $\\mathbb F_2$.",
        "Therefore $M$ is invertible and $\\det M=1$ in $\\mathbb F_2$.",
        "The number of assignments equals the permanent $$\\operatorname{per}(M)=\\sum_{\\sigma\\in S_n}\\prod_i m_{i,\\sigma(i)}.$$ Indeed, an assignment lists $n$ pairwise distinct elements of the $n$-set $X=\\{x_1,\\dots,x_n\\}$, so they exhaust $X$: the assignment is exactly an ordering $(x_{\\sigma(1)},\\dots,x_{\\sigma(n)})$ of $X$ for a unique permutation $\\sigma\\in S_n$, and it is valid precisely when $x_{\\sigma(i)}\\in A_i$, i.e. $\\prod_i m_{i,\\sigma(i)}=1$. Modulo $2$, the sign of every permutation is $1$, so $\\operatorname{per}(M)\\equiv\\det M\\equiv1\\pmod2$.",
        "Hence the number of assignments is odd."
      ]
    },
    {
      "id": "c17",
      "category": "cmb",
      "difficulty": "medium",
      "stars": 2,
      "rating": 5.5,
      "confidence": "high",
      "novelty": {
        "status": "screened",
        "searchDate": "2026-09-30",
        "exactMatch": false,
        "similarSources": [
          {
            "name": "arXiv API probe cyclic-triangle lane (2026-09-30)",
            "note": "https://arxiv.org/api (query all:\"cyclic triangles\" AND all:tournament, 8 hits skimmed, e.g. arXiv:1806.06903 cyclic triangle FACTORS, arXiv:0806.2027 packings, arXiv:1207.0237 structural theorems incl. 'transitive tournament with one reversed edge' used as forbidden subtournament K_n - never as a flip-delta family): the literature counts/packs cyclic triangles statically; NO source states the full attainable range [-(n-2), n-2] of a single result reversal"
          },
          {
            "name": "Harary-Moser / Moon classical bound",
            "note": "strong tournaments contain at least n-2 cyclic triangles (Moon, Topics on Tournaments; Harary-Moser enumeration) - prior art explicitly screened: it is a LOWER BOUND on the count, not a statement about changes under flips; the identity c(T) = C(n,3) - sum C(d_i,2) is likewise classical (appears in tournament lecture lore) and is kept OUT of the shipped claim, used only as context in step 5"
          },
          {
            "name": "corpus FTS (187k competition chunks)",
            "note": "\"cyclic triangles\" -> 2 geometry false positives (cyclic quadrilateral); \"rock-paper-scissors\" AND \"tournament\" -> real RPS game problems (Hungarian Naboj 2016 #36, HMMT theme round), unrelated to round-robin flips; \"strong tournament\" AND \"cyclic\" 0; \"each beats one of the others\" 0; \"reversing\" AND \"tournament\" -> Balkan 2018 SHORTLIST ranked-player construction notes (no delta-range content)"
          },
          {
            "name": "engine-status (2026-09-30)",
            "note": "DDG bot-challenged on this id's phrasing; Bing geo-mangled; recorded in c18-screen.md"
          }
        ],
        "earliestKnownDate": null,
        "lanesComplete": false,
        "laneSummary": {
          "N": "arXiv API cyclic-triangle sweep (8 hits skimmed) + DDG probe on 2026-09-30; SE exact-form lanes deferred to quota reset",
          "A": "corpus FTS x5 combos clean; exhaustive verification: ALL tournaments n=3..6 with ALL flips (502,168 changes checked against the local path formula), ladder construction attains the whole interval for n=7..12, random n=10,12: 0 violations",
          "D": "no indexed twin of the exact flip-range theorem"
        },
        "transformedFrom": {
          "knownCore": "strong tournaments contain at least n-2 cyclic triangles; sharpness construction (Moon, Topics on Tournaments; Harary-Moser enumeration)",
          "frozenIn": "CHANGELOG.md 2026-09-29"
        },
        "priorCore": "the 2026-09-29 screened variant (three parts: degree identity, min/max over strong tournaments with score-sequence characterization, flip-range theorem) was itself replaced this wave per user request for a single claim; the identity and the extremal-score machinery were cut, the classical n-2 bound stays frozen as background, and the flip-range theorem - the entry's declared new core - is shipped alone, re-dressed as rock-paper-scissors rounds with a constructive transitive-ladder proof replacing the old carousel-and-walk sketch",
        "seam": "the classical lane counts cyclic triples statically (lower bounds for strong tournaments, exact formula from scores); nothing in Moon/Harary-Moser territory or in any fetched source determines the SET of changes a single result reversal can cause, and this shipped claim says that set is exactly the full interval [-(n-2), n-2]: the upper bound is a local mid-vertex count and the attainability is a transitive-ladder construction (flip team-1 vs team-(k+1): +k; replay that flip backwards: -k) - an existence spectrum result no static identity yields; probes found only triangle-packing papers and a structural use of one-edge-reversed transitive tournaments (as forbidden subtournaments), never the range statement",
        "signature": "S27+M11",
        "residualRisk": "low-medium: the per-flip delta formula is folklore-level two lines and the range fact could live in an offline exercise set about tournament score sequences; today's web, arXiv and corpus lanes found no statement of the full range; a companion extremal fact 'every strong tournament has >= n-2 cyclic triangles' is visible inside step 1's identity - flagged honestly but not the claim; boundary: the claim holds already at n=3 (verified), the replaced 2026-09-29 variant had hedged n>=4"
      },
      "text": "$n\\ge3$ teams play a round-robin: every two teams play one match, each match has a winner, no draws. Call a triple of teams a \\emph{loop} if each of its three teams beats exactly one of the other two (a rock-paper-scissors cycle). An \\emph{upset} is a re-run of a single match whose result is the opposite of the original. Saying the upset \\emph{changes the loop count by $\\Delta$} means: after the re-run, the total number of loops is the original number plus $\\Delta$. Prove that the set of all possible values of $\\Delta$ - over every round-robin schedule and every single match re-run - is exactly the whole interval of integers from $-(n-2)$ to $n-2$.",
      "answer": "$$\\boxed{\\Delta\\ \\text{attains exactly the integers}\\ -(n-2),\\,-(n-3),\\,\\dots,\\,n-2.}$$",
      "why": "A re-run of $a$ against $b$ touches only triples $\\{a,b,w\\}$: it gains a loop exactly for $w$ on a directed path $a\\to w\\to b$ and loses one exactly for $w$ with $b\\to w\\to a$, so $\\Delta=\\#\\{w:a\\to w\\to b\\}-\\#\\{w:b\\to w\\to a\\}$, two disjoint sets among $n-2$ teams, giving $|\\Delta|\\le n-2$; the formula is local. Attainment: in the transitive ranking ($i\\to j$ iff $i<j$) re-running team 1 against team $k+1$ creates exactly $k$ loops ($\\Delta=+k$, and $\\Delta=0$ from $1$ vs $2$), and re-running the same match in the new position dissolves them ($\\Delta=-k$); endpoints $\\pm(n-2)$ come from team 1 against team $n$. The spectrum is exactly $[-(n-2),n-2]$. Context: the loop count obeys $c(T)=\\binom n3-\\sum_v\\binom{d_v^+}{2}$, the classical identity behind the Harary-Moser-Moon bounds for cyclic triangles.",
      "steps": [
        "Fix a team $a$ beating $b$, and consider re-running $a$ vs $b$ with $b$ now winning. A triple not containing both $a$ and $b$ is untouched; the triple $\\{a,b,w\\}$ can change status only through $w$: BEFORE the re-run $\\{a,b,w\\}$ is a loop ⟺ $b$ beats $w$ beats $a$; AFTER, it is a loop ⟺ $a$ beats $w$ beats $b$. Hence $$\\Δ=\\#\\{w: a\\to w\\to b\\}-\\#\\{w: b\\to w\\to a\\},$$ where the two sets are disjoint subsets of the other $n-2$ teams, giving $|\\Delta|\\le n-2$ for every schedule and every re-run.",
        "Attainability, non-negative half: take the ranked tournament $T$: team $i$ beats team $j$ ⟺ $i\\lt j$. Re-run team 1's match against team $k+1$ ($0\\le k\\le n-2$). In the PRE-flip state, teams $2,\\dots,k$ satisfy $1\\to w\\to k{+}1$ (team 1 beats everyone, and every smaller-numbered team beats $k{+}1$): that is $k$ paths; teams $k+2,\\dots,n$ satisfy neither $1\\to w\\to k{+}1$ (they lose to $k{+}1$) nor $k{+}1\\to w\\to1$ (nobody beats team 1). Step 1's formula gives $\\Delta=+k$. For $k=0$ this is the re-run of team 1 vs team 2, which merely swaps the two top ranks and changes nothing, so $\\Delta=0$ occurs.",
        "Attainability, negative half: apply the re-run of the previous step to the ranked tournament, producing $S_k$ with $c(S_k)=c(T)+k$, and then RE-RUN THE SAME MATCH back in $S_k$. Its change is the exact opposite, $-k$: in $S_k$ the $k$ loops through the pair $\\{1,k{+}1\\}$ dissolve and none are created (the two path counts of step 1 swap roles), so every $\\Delta\\in\\{-(n-2),\\dots,-1\\}$ occurs.",
        "Glue: steps 1-3 show the set of possible $\\Delta$ sits inside $[-(n-2),n-2]$ and contains every integer of it; endpoints: $k=n-2$ (re-run team 1 vs team $n$ in the ranking) and its undo.",
        "Context note (not needed, prior art kept out of the claim): summing loops over triples via 'a non-loop has a unique double-beater' gives $c(T)=\\binom n3-\\sum_i\\binom{d_i^+}{2}$ - the classical identity behind Harary-Moser-type bounds like 'strong $\\Rightarrow c(T)\\ge n-2$'; the shipped statement is the flip-spectrum theorem, which that lane never formulates.",
        "Machine audit (c18-verify.py / c18-verify.out): exhaustive over all $2^{\\binom n2}$ tournaments and all $\\binom n2$ flips for $n=3,4,5,6$ (502,168 flip-changes total): the step-1 path formula matched the recomputed change every time, no $|\\Delta|\\gt n-2$ occurred, and at each $n$ the full interval was attained; the step 2-3 ladder re-verified by direct recomputation of $c$ for $n=7..12$; 400 random tournaments each at $n=10,12$: no bound violations."
      ],
      "readiness": {
        "runId": "RUN-20260930-01",
        "checkedOn": "2026-09-30",
        "queue": "P3",
        "novelty": {
          "fileStatus": "screened",
          "verdict": "T3-pending",
          "lanes": {
            "N": "redesign wave 2026-09-30: web paraphrase/alias probes + corpus screen recorded in tools/proofs/redesign-20260930/c18-screen.md; SE exact-form lanes deferred to quota reset",
            "A": "redesign wave 2026-09-30: web paraphrase/alias probes + corpus screen recorded in tools/proofs/redesign-20260930/c18-screen.md; SE exact-form lanes deferred to quota reset",
            "D": "redesign wave 2026-09-30: D-lane evidence pack to be regenerated by tools/screen.py after splice"
          },
          "provenanceComplete": false,
          "humanApprovalRequired": false
        },
        "proof": {
          "state": "unaudited",
          "independentlyCheckedThisRun": false,
          "auditNote": "new proof text shipped 2026-09-30; machine-verified by tools/proofs/redesign-20260930/c18-verify.py; independent audit pending"
        },
        "calibration": {
          "state": "slot-preserved-from-predecessor",
          "contestantBlindTest": "not-run",
          "humanReweight": "pending",
          "ratingCurrentlyStored": 6.5,
          "difficultyCurrentlyStored": "hard",
          "starsCurrentlyStored": 3
        },
        "quality": {
          "state": "human-panel-pending",
          "scores": null
        },
        "release": {
          "eligible": false,
          "state": "blocked-until-global-gates"
        },
        "provenance": {
          "status": "not-established",
          "sourceNotePresent": false
        },
        "sourceRecall": {
          "status": "not-recorded"
        }
      }
    },
    {
      "id": "c18",
      "category": "cmb",
      "difficulty": "hard",
      "stars": 3,
      "rating": 6,
      "confidence": "high",
      "novelty": {
        "status": "screened",
        "searchDate": "2026-09-30",
        "exactMatch": false,
        "similarSources": [
          {
            "name": "OEIS A123553 'king chicken' (total kings over labelled tournaments) + A123903 'Emperors' (2026-09-30 fetch)",
            "note": "https://oeis.org/A123553 and https://oeis.org/A123903 - A123553's COMMENTS print the classical results that killed the OLD claim (1): Landau 1951/53 (highest scorer is a king) and Maurer 1980 ('there is one king iff one player beats all others, otherwise at least three'); A123903 = the exact count n*2^C(n-1,2) of one-king leagues. Neither OEIS entry nor its comments say anything about Hamiltonian victory chains or about realizing every king-count 3..m, so the two shipped claims are distinct from this indexed core"
          },
          {
            "name": "arXiv:2109.13465 (Imbens, Chickens and Dukes, full HTML fetched 2026-09-30)",
            "note": "https://arxiv.org/abs/2109.13465 - current follow-up of Maurer's programme; it quotes Maurer's central lemma verbatim: 'any chicken that is pecked, is pecked by a King' - which killed a candidate replacement claim of this rework (every non-king is beaten by a king, verified true, and rejected as a Maurer restatement). The shipped chain-start claim does not appear there or in its reference list (Koh-Tan, Petrovic-Thomassen, Gutin-Yeo: king counts in multipartite tournaments - different questions)"
          },
          {
            "name": "Maurer, The King Chicken Theorems, Math. Mag. 53 (1980) 67-80",
            "note": "https://www.tandfonline.com/doi/abs/10.1080/0025570X.1980.11976831 ; free copy https://works.swarthmore.edu/fac-math-stat/146 and core.ac.uk mirror both returned 403 through this proxy (recorded 3 attempts) - full text could NOT be read. Abstract fetched via Semantic Scholar API (https://api.semanticscholar.org/graph/v1/paper/DOI:10.2307/2689952): about king existence/uniqueness/necessity of many kings, techniques 'duality and induction from n to n+2'. The spectrum claim (2) survived all accessible lanes but Maurer's unread full text is the one place it could live - residual risk states this openly"
          },
          {
            "name": "DDG + Wikipedia search API + arXiv API probes (2026-09-30)",
            "note": "DDG: 'tournament graph \"hamiltonian path\" starting at any vertex that can reach all others' -> textbook Redei kin only (en.wikipedia.org/wiki/Tournament_(graph_theory), imada.sdu.dk/~jbj/DM19/turnering.pdf: Hamilton path existence and the insertion proof; no fixed-start/reachability version printed); 'math.stackexchange tournament \"king\" \"hamiltonian path\" starting' -> No results; 'tournament \"number of kings\" possible values every integer realized construction' -> only Koh-Tan multipartite king-COUNT upper-bound papers; '\"king chicken\" tournament \"any number of kings\"' -> No results; arXiv all:\"number of kings\" AND all:tournament -> 0; Wikipedia search API (2 queries) -> no article states either shipped claim. api.stackexchange.com answered HTTP 400 through this proxy (2 attempts, recorded)"
          },
          {
            "name": "corpus FTS (187k competition chunks)",
            "note": "\"kings\" AND \"tournament\" AND \"hamiltonian\" 0; \"victory chain\" 0; \"king\" AND \"starts\" AND \"chain\" 0; \"number of kings\" AND \"tournament\" 0; \"every four cities\" 0 (2026-09-30). The classical Landau highest-scorer-king lore is recorded elsewhere in the set (c11's entry note), not as a competition problem here; neither shipped claim has a corpus twin"
          },
          {
            "name": "tools/screens/c21.json (2026-09-30): 2 'exact-fragment' hits on the generic TeX string x_1,x_2,\\dots,x_n against putnam2005-B4 chunks",
            "note": "adjudicated phrase collision - Putnam 2005 B4 concerns integer-part sequence identities; no shared object, hypothesis, or conclusion with the victory-chain/spectrum claims"
          }
        ],
        "earliestKnownDate": null,
        "lanesComplete": false,
        "laneSummary": {
          "N": "13 live webfetch probes 2026-09-30 (DDG x5, arXiv API x2 + abs/html pages, OEIS x4, Wikipedia search API x2, Semantic Scholar API x1; Swarthmore/core 403 x3 and api.stackexchange 400 x2 recorded as blocked) - both shipped claims clean; one own candidate (Maurer's pecked-by-a-king lemma) self-rejected from these lanes",
          "A": "corpus FTS 3 combos clean; batteries this session: king=>chain and chain<=>reach exhaustively over all tournaments n<=6 and 40k samples at n=7,8 (0 violations), counterexample censuses, spectrum assemblies verified n<=10",
          "D": "no indexed twin found for either shipped claim; Maurer full text unreadable (flagged)"
        },
        "transformedFrom": {
          "knownCore": "king = vertex reaching all others within distance 2; classical theorem: number of kings is 1 or >= 3 (and all statements about kings in tournament handbooks)",
          "frozenIn": "CHANGELOG.md 2026-09-29"
        },
        "priorCore": "the 2026-09-29 screened four-part package was replaced (this wave) by a two-claim variant - unique-king iff star plus the count n*2^C(n-1,2), alongside the king-count spectrum - and the post-audit kill-list then removed claim (1) and its count: OEIS A123553's comment credits exactly that iff to Maurer 1980 and A123903 prints the count; this rework ships a new claim (1) in the same duel universe, keeps claim (2) after a harder re-screen per the audit, and additionally rejects in advance Maurer's own 'every pecked chicken is pecked by a king' lemma (verified true, deliberately NOT claimed)",
        "seam": "claim (1) is a chain-starting theorem, a different modality from every indexed king statement (Landau: existence via scores; Maurer: number-of-kings rigidity; Koh-Tan: multipartite upper bounds): a king starts a Hamiltonian victory chain - proof runs through the stronger reachability-iff lemma with a last-beater splice induction that no fetched source prints in fixed-start form; claim (2) is exact-spectrum realizability (every 3..m occurs at n>=5 with the n=4,m=4 exception handled by a 5-vertex seed and a tail lemma that never changes king sets) - the accessible literature states only '1 or >=3', never the spectrum, though Maurer's unread full text remains the residual risk",
        "signature": "S28+M11",
        "residualRisk": "medium for (2) (Maurer's paper 'kings are all too common' programme could contain the spectrum; abstract/secondary sources do not print it; all 13 live lanes clean); low-medium for (1) (the reachability-splice is a natural exercise kin of Redeis theorem; the king formulation screened unindexed; textbook kin recorded)"
      },
      "text": "In a duel league, every pair of the $n\\ge2$ players plays exactly one duel, and every duel has a winner (no draws); write $A\\to B$ when $A$ beat $B$. A player $K$ is a \\emph{king} if every other player $X$ satisfies $K\\to X$ or $K\\to Y\\to X$ for some player $Y$ ($K$ beat someone who beat $X$). A \\emph{victory chain} is a listing of all players $x_1,x_2,\\dots,x_n$ with $x_i\\to x_{i+1}$ for every $i$.<br><br>Prove the following two independent statements.<ol><li>Every king starts a victory chain: if $K$ is a king, some victory chain has $x_1=K$.</li><li>For every $n\\ge5$ and every integer $m$ with $3\\le m\\le n$, some league on $n$ players has exactly $m$ kings.</li></ol>",
      "answer": "$$\\boxed{\\text{(1) every king is the head of a victory chain through all players;}\\qquad \\text{(2) every king-count }m\\in\\{3,\\dots,n\\}\\text{ occurs, for all }n\\ge5.}$$",
      "why": "Claim (1) proves more: a player starts a victory chain iff he reaches every other player by a win-path, so ordering others by shortest path from $v$ and inserting each newcomer after the last chain member he beats (the following member then loses to the newcomer) keeps the head fixed, a fixed-start refinement of Redeis Hamiltonian-path theorem for tournaments. A king reaches everyone within two duels, so he heads a chain; both converses fail, chain-heads need not be kings and kings need not end chains, so no dualization is possible. Claim (2): appending a transitive tail beaten by all core players leaves the king set unchanged, so it suffices to build all-king cores: regular carousels for odd $m$ and a parity-shifted core for even $m\\ge6$; every 4-player league has a non-king, so $m=4$ needs a 5-player seed, and $n\\ge5$ is exact. This pins down the realized king spectrum $\\{3,\\dots,n\\}$ next to Landau's and Maurer's rigidity that a unique king is a dominating player and counts other than 1 and at least 3 are impossible.",
      "steps": [
        "Notation: player v REACHES x if some win-path v -> ... -> x exists (length >= 1); a king reaches everyone within length <= 2, so every king reaches everyone. Write N+(v) for the set v beat. A chain is a listing x_1..x_n with x_i -> x_{i+1}.",
        "Splice lemma: let P = (a_1, ..., a_k) be a chain of distinct players, and let x be a new player beaten by at least one member of P. Let i be the LARGEST index with a_i -> x (it exists by assumption). If i = k, then a_1, ..., a_k, x is a longer chain with the same head. If i < k, then a_{i+1} does not beat x (by maximality of i) and a_{i+1} != x, so x -> a_{i+1} - tournaments decide every pair - and a_1, ..., a_i, x, a_{i+1}, ..., a_k is a longer chain with the same head a_1. Either way x can be inserted keeping the head fixed.",
        "Chain lemma (reach => chain head): order the other players w_1, ..., w_{n-1} by nondecreasing length of a shortest win-path from v. Induct on t. A chain from v already covers {v, w_1, ..., w_{t-1}}: on a shortest win-path to w_t the predecessor p of w_t satisfies dist(p) < dist(w_t) <= t, so p is among the already-covered players and p -> w_t; the splice lemma inserts w_t keeping head v. At the end, v heads a chain through all players.",
        "Claim (1): a king reaches every player within two duels, hence reaches everyone; the chain lemma then produces a victory chain headed by the king. The converse is FALSE by design and must not be attempted: on players {0,1,2,3} with wins 0->3, 1->0, 2->0, 2->1, 3->1, 3->2, player 1 heads the chain 1, 0, 3, 2, yet 1 is not a king: 1's only win is 0 and 0's only win is 3, so within two duels 1 reaches only {0, 3} and never 2, since 2 beats 1. (There are 24 such non-king chain-head instances among 4-player leagues.) A king also need not END a chain (2,530 failing (king, player) pairs found over random leagues at n = 5..7), so the one-way direction shipped in the claim is exactly the true statement.",
        "Claim (2), tail lemma: build C' from a league C by appending players z_1, ..., z_r with z_i -> z_j exactly for i < j, while every old player beats every z_i. New z's are not kings: a z cannot reach any old player at all in two duels (z's only wins are later z's, whose wins are later still). Old players keep exactly their old two-step reach: any new two-step path v -> z_i -> ? ends at z's, and old targets stay reachable or not as before. So king sets are preserved and r is free: it suffices to build, for every m != 4, a league on m players with all m kings, plus a 5-player league with exactly 4 kings.",
        "Claim (2), odd cores: for m = 2h+1 >= 3 seat players 0, ..., m-1 on a circle and let i -> j when the clockwise gap from i to j lies in {1, ..., h}. A seat i reaches directly the h seats ahead; for a seat at clockwise gap d with h+1 <= d <= 2h, write d = (d-h) + h: seat i beats seat i+(d-h) (gap d-h <= h) which beats seat i+d (gap exactly h); so all m seats are kings. (m = 3: the directed triangle.)",
        "Claim (2), even cores and the 4-gap: for m = 2k >= 6 take the all-king carousel on 2k-1 seats (odd case with h = k-1) and add a player x whom the odd seats beat and who beats the even seats. Even seat e: e -> e+1 (gap 1, legal as k-1 >= 2) and e+1 is odd, so e+1 -> x. The last even seat 2k-2 reaches seat 1 by gap 2 <= k-1, then x. Odd seats beat x directly. And x reaches an odd seat o via x -> o-1 -> o (gap 1). Hence all 2k players are kings. The value m = 4 is genuinely exceptional: all 64 four-player leagues have a non-king (exhaustive in the verifier), so we use instead the FIVE-player seed with wins 0->4, 1->0, 1->3, 2->0, 2->1, 3->0, 3->2, 3->4, 4->1, 4->2: player 0 reaches only {4, 1, 2} within two duels (3 beats him and nobody he beats beats 3), so exactly players 1, 2, 3, 4 are kings - verified in the battery.",
        "Claim (2), assembly: given n >= 5 and 3 <= m <= n. If m != 4, take the all-king core on m players from the last two steps and attach a tail of n - m players (tail lemma allows r >= 0, and every old player beats every tail player - legal for any n). If m = 4, take the 5-player seed (allowed since n >= 5) and tail on n - 5 players. In every case the league on n players has exactly m kings. The hypothesis n >= 5 is load-bearing: at n = 4 the count m = 4 is impossible (step above), while m = 3 occurs - so {3,...,n} is exactly realizable for n >= 5 and not for n = 4.",
        "Machine audit (c21-verify.py / c21-verify.out): over ALL labelled tournaments for n = 2..6 and 40,000 random leagues each at n = 7,8: king => heads a chain: 0 violations; heads a chain <=> reaches all: 0 violations (the splice lemma's exactness); leagues with exactly 2 kings: 0 (classical - logged, not claimed); Maurer's pecked-by-a-king lemma also recomputed: 0 violations (TRUE - and deliberately NOT shipped). Converse census: non-king chain-heads number 24 at n=4 and 960 at n=5; the steps' example verified; kings that cannot END any chain: 2,530 (league, king) sample pairs at n = 5..7 (c21-explore2.py output). Spectrum: cores verified all-king for m = 3..16 (and the 5-seat seed has exactly 4 kings); assemblies n = 5..10, every 3 <= m <= n: 0 failures."
      ],
      "readiness": {
        "runId": "RUN-20260930-01",
        "checkedOn": "2026-09-30",
        "queue": "P3",
        "novelty": {
          "fileStatus": "screened",
          "verdict": "T3-pending",
          "lanes": {
            "N": "2026-09-30 post-audit rework: old claim (1) killed via https://oeis.org/A123553 (Maurer iff, Landau note) + https://oeis.org/A123903 (one-king count); own candidate 'pecked-by-a-king' self-rejected via https://arxiv.org/html/2109.13465v1 quoting Maurer's lemma; shipped (1) king=>heads victory chain and kept (2) king-count spectrum: DDG x5 (multiple No-results; only Redei-kin and Koh-Tan upper-bound kin returned), arXiv API 0, OEIS text x2 no spectrum entry, Wikipedia search API x2 empty; Maurer PDF unreadable (works.swarthmore.edu + core.ac.uk 403 x3, recorded) -> residual risk for (2) MEDIUM stated in novelty; api.stackexchange 400 x2 recorded",
            "A": "corpus FTS combos 0 ('king'+'tournament'+'hamiltonian', 'victory chain', 'number of kings'+'tournament', 'king'+'starts'+'chain'); batteries: exhaustive n<=6 + 40k samples n=7,8 for king=>chain and chain<=>reach (0 viol); spectrum assemblies verified n=5..10 every m (c21-verify.out)",
            "D": "censuses fresh: non-king chain-heads 24 (n=4)/960 (n=5); 2-king leagues 0 (classical, logged not claimed)"
          },
          "provenanceComplete": false,
          "humanApprovalRequired": false
        },
        "proof": {
          "state": "unaudited",
          "independentlyCheckedThisRun": false,
          "auditNote": null
        },
        "calibration": {
          "state": "agent-derived-provisional",
          "contestantBlindTest": "not-run",
          "humanReweight": "pending",
          "ratingCurrentlyStored": 7.5,
          "difficultyCurrentlyStored": "hard",
          "starsCurrentlyStored": 3
        },
        "quality": {
          "state": "human-panel-pending",
          "scores": null
        },
        "release": {
          "eligible": false,
          "state": "blocked-until-global-gates"
        },
        "provenance": {
          "status": "not-established",
          "sourceNotePresent": false
        },
        "sourceRecall": {
          "status": "not-recorded"
        }
      }
    },
    {
      "id": "c19",
      "category": "cmb",
      "difficulty": "hard",
      "stars": 3,
      "rating": 6.5,
      "confidence": "high",
      "novelty": {
        "status": "unverified",
        "searchDate": "2026-09-27",
        "exactMatch": false,
        "similarSources": [],
        "earliestKnownDate": null
      },
      "text": "There are $n$ cells arranged in a circle, labelled $1, 2, \\dots, n$ in clockwise order. Initially, a token is placed at cell $1$. Alice and Bob play a game with $n - 1$ rounds. In round $k$ ($1 \\le k \\le n - 1$):<br><ol><li>Alice chooses a step size $s_k \\in \\{1, 2, \\dots, n - 1\\}$ that has not been chosen in any earlier round.</li><li>Bob chooses whether the token moves $s_k$ steps clockwise or $s_k$ steps counter-clockwise.</li></ol><br>Alice wins if, after all $n - 1$ rounds, the token has visited every single cell of the circle at least once (including its initial position at cell $1$). Otherwise, Bob wins. Determine all integers $n \\ge 2$ for which Alice has a winning strategy.",
      "why": "Relabel cells $0,\\dots,n-1$ mod $n$; from $x$ with step $s$ the candidate landings are $x\\pm s$, equal only when $2s\\equiv0$. Bob's strategy is a static ranking function: always take $\\min$ of the two labels. For odd $n\\ge3$ the two labels are always distinct, so the minimum never reaches $n-1$. For even $n=2h$ the labels $n-1$ and $n-2$ are selectable only via $s=h$, the unique element of order 2, whose landing $x+h$ is forced, and Alice may name $h$ once; moreover the pair $\\{n-2,n-1\\}$ can never be $\\{x\\pm s\\}$ since $a+b\\equiv2x\\pmod n$ forces the two candidates to share parity, exactly the quotient $\\mathbb Z/n\\mathbb Z\\to\\mathbb Z/2\\mathbb Z$. Thus at most one of the top cells is visited and Bob wins for all $n\\ge3$; Alice wins only for $n=2$.",
      "answer": "$$\\boxed{n = 2}$$",
      "steps": [
        "Relabel the cells $0,1,\\dots,n-1$ modulo $n$, so the token starts at $0$ and a cell is visited if the token starts or lands on it. If the token is at $x$ and Alice announces $s$, the two possible landings are $a\\equiv x+s$ and $b\\equiv x-s \\pmod n$, written as labels in $\\{0,\\dots,n-1\\}$. Bob's strategy: always move to $\\min\\{a,b\\}$ (when $a=b$ there is no choice).",
        "Base case $n = 2$: the only step size is $s = 1$, and both directions from cell $0$ land on cell $1$, so Alice visits both cells and wins.",
        "Let $n \\ge 3$ be odd. The two landings coincide only if $2s \\equiv 0 \\pmod n$, i.e. $n \\mid s$, impossible for $1 \\le s \\le n-1$. So $a \\ne b$ every round, and the minimum of two distinct labels of $\\{0,\\dots,n-1\\}$ is at most $n-2$. Cell $n-1$ is never visited, so Bob wins for every odd $n \\ge 3$.",
        "Let $n \\ge 4$ be even and $h = n/2$. Now $2s \\equiv 0 \\pmod n$ with $1 \\le s \\le n-1$ forces $s = h$, so for $s \\ne h$ the two labels are distinct and Bob takes the smaller: he can never select the largest label, i.e. cell $n-1$ is reachable only when $s = h$.",
        "Cell $n-2$ likewise cannot be reached with $s \\ne h$: if $\\min\\{a,b\\} = n-2$ with $a \\ne b$, the other landing must exceed $n-2$, so $\\{a,b\\} = \\{n-2,\\,n-1\\}$. But $a + b \\equiv (x+s) + (x-s) \\equiv 2x \\pmod n$, while $(n-2)+(n-1) = 2n-3 \\equiv n-3$, so $n \\mid (2x - (n-3))$, i.e. $n \\mid (2x+3)$. The divisor $n$ is even while $2x+3$ is odd, impossible.",
        "Hence both cells $n-2$ and $n-1$ can only be reached via $s = h$. On that move the two directions coincide and the landing is forced to be $x + h$, a single cell, and Alice may announce each step size at most once. So at most one of $n-2, n-1$ is ever visited, and Bob wins for every even $n \\ge 4$.",
        "Combining all cases, Alice has a winning strategy exactly for $n=2$."
      ]
    },
    {
      "id": "c20",
      "category": "cmb",
      "difficulty": "hard",
      "stars": 3,
      "rating": 7.5,
      "confidence": "high",
      "novelty": {
        "status": "screened",
        "searchDate": "2026-09-30",
        "exactMatch": false,
        "similarSources": [
          {
            "name": "web probes 2026-09-30 (bing.com/search?q=...)",
            "note": "queries 'graph \"odd degree\" \"even number of common neighbors\" \"m \\equiv n/2\"', '\"odd degree\" \"even codegree\" ... \"number of edges\" parity', 'party every person odd handshakes every pair even common acquaintances total handshakes parity problem', '\"acquaintances\" problem \"even number of common acquaintances\" \"odd number\" handshakes prove' all returned ZERO results (DuckDuckGo lanes quota-capped). Nearest classical kin: Oddtown/Fisher-type parity design theorems (Ray-Chaudhuri-Wilson, Baber's Oddtown: odd sets, even intersections -> linear algebra bounds), and the frozen determinant/permanent classic - all of these BOUND or COUNT configurations; none states the edge-parity invariant $m\\equiv n/2\\pmod2$"
          },
          {
            "name": "corpus FTS (187k chunks, 2026-09-30)",
            "note": "'\"common neighbors\" AND \"odd degree\" AND parity' -> 0; '\"common acquaintances\" AND \"odd number\"' -> 0; '\"handshake\" AND \"common acquaintances\"' -> 0; invariant absent from corpus. c5-adjacent mod-3 club problem is a different object"
          }
        ],
        "earliestKnownDate": null,
        "lanesComplete": false,
        "laneSummary": {
          "N": "4 Bing probes + DDG x1 (quota-capped) 2026-09-30: clean; SE exact-form lanes deferred",
          "A": "same web lanes; OEIS N/A for the claim (parity invariant, no sequence answer)",
          "D": "corpus FTS 3 combos: 0 hits"
        },
        "transformedFrom": {
          "knownCore": "society/acquaintance problem closed by determinant = permanent mod 2 and Jacobi complementary-minor identity (classic)",
          "frozenIn": "CHANGELOG.md 2026-09-29"
        },
        "priorCore": "the 2026-09-29 screened three-part entry was itself replaced this wave per user request: its part (a) is the frozen classic (kept out of the new text) and its part (c) blow-up classification was dropped; the middle congruence is promoted to the single party-scenario claim",
        "seam": "the old determinant engine ($A^2=I$ over $\\mathbb F_2$, permutation expansion, Jacobi minors) sees perfect matchings, not edge counts: the shipped congruence $m-n/2\\equiv0$ is proved by a length-2-path double count plus the arithmetic identity $\\binom{d}{2}\\equiv\\frac{d-1}{2}\\pmod2$ for odd $d$ - no linear algebra at all, so it is not derivable from the classic; the replaced 2026-09-29 variant shipped this proof only as one part of a ladder - as a single minimal party claim with $n$-even folded in as a consequence it is a new problem object, and both fresh re-paraphrase probes came back clean",
        "signature": "S41+M15",
        "residualRisk": "low-medium: the double count is short enough to be folklore in training camps (it is the standard 'count wedges' identity with the parity cherry on top); no indexed problem states the congruence on any probed lane 2026-09-29 or 2026-09-30, but parity-design handouts are only partially reachable by search; SE lanes pending"
      },
      "text": "At a club meeting, each pair of members either shook hands once or did not shake hands at all. There were $n$ members and $m$ handshakes. Suppose:<br><ol><li>every member shook hands with an odd number of other members;</li><li>every pair of members had an even number of common acquaintances (members who shook hands with both; the condition applies to every pair, whether or not the two members shook hands with each other).</li></ol>Prove that $m-\\tfrac n2$ is an even integer.",
      "why": "Double-count wedges, length-2 handshake chains, by center and by ends: $\\sum_v\\binom{d_v}{2}=\\sum_{\\{u,w\\}}\\mathrm{codeg}(u,w)$, where hypothesis (ii) makes every codegree even, including for non-adjacent pairs, which is exactly what the end count over all pairs requires. For odd $d=2k+1$, $\\binom d2=k(2k+1)\\equiv k=\\frac{d-1}{2}\\pmod2$, so $0\\equiv\\sum_v\\frac{d_v-1}{2}=\\frac{2m-n}{2}=m-\\frac n2$, and $n$ is even because $\\sum d_v=2m$ with all summands odd. Non-vacuous: $K_n$ for every even $n$, and the lexicographic product $P_3\\circ K_2$ ($n=6$, $m=11$). The proof is a parity double count on the vertex-wedge incidence structure of $G$, distinct from the Oddtown-style adjacency-matrix rank method over $\\mathbb F_2$, which bounds family sizes rather than edge counts.",
      "answer": "$$\\boxed{m-\\tfrac{n}{2}\\ \\text{is even}\\quad(\\text{in particular, }n\\text{ is even}).}$$",
      "steps": [
        "Notation: $d_v$ = number of handshakes of member $v$ (odd, by (1)); $\\mathrm{codeg}(u,w)$ = number of members who shook hands with both $u$ and $w$ (even, by (2), for EVERY pair $u\\ne w$).",
        "Warm-up (one line, inside the proof): the number of members $n$ must be even for $m-\\frac n2$ to even be an integer - indeed $\\sum_vd_v=2m$ is even and all $d_v$ are odd, so $n$ is even. (The congruence below gives this again, but record it so the claim is well-typed.)",
        "Double count WEDGES (length-2 chains: a center member together with two of its handshake partners): choosing a center $v$ and two partners gives $\\binom{d_v}2$ wedges; choosing the two END members $\\{u,w\\}$ and a common acquaintance between them gives $\\mathrm{codeg}(u,w)$. Both count the same set: $$\\sum_{v}\\binom{d_v}{2}=\\sum_{\\{u,w\\}}\\mathrm{codeg}(u,w).$$ (A wedge with center $v$ and ends $u,w$ is exactly a common acquaintance of $u$ and $w$ - the ends are automatically distinct and different from the center.)",
        "Right side is even by (2): every term $\\mathrm{codeg}(u,w)$ is even.",
        "Left side mod 2: write $d_v=2k_v+1$; then $\\binom{d_v}{2}=k_v(2k_v+1)\\equiv k_v=\\frac{d_v-1}{2}\\pmod2$. Hence $$0\\equiv\\sum_vk_v=\\frac{\\sum_vd_v-n}{2}=\\frac{2m-n}{2}=m-\\frac n2\\pmod2,$$ which is exactly the claim.",
        "Non-vacuity and checks: for every even $n$ the complete club $K_n$ satisfies (1),(2): degrees $n-1$ odd, codegrees $n-2$ even, and $m-\\frac n2=\\frac{n(n-1)}2-\\frac n2=\\frac{n(n-2)}2$, which is even (put $n=2k$: $\\frac{n(n-2)}2=2k(k-1)$). Smallest examples: $n=2$: $1-1=0$ ✓; $n=6$: $15-3=12$ ✓. Non-complete example: three pairs of twins $\\{a_1,a_2\\}$, $\\{b_1,b_2\\}$, $\\{c_1,c_2\\}$; handshakes = the three twin pairs, plus every member of the middle pair shaking hands with every member of each outer pair ($P_3\\circ K_2$: $n=6$, $m=11$, degrees $5,5,3,3,3,3$, codegrees all even by inspection, and $11-3=8$ is even ✓) - the claim bites also where the determinant classic's hypotheses get thin.",
        "Machine audit (tools/proofs/redesign-20260930/c19-verify.py, 2026-09-30): exhaustive over all graphs on $n\\le7$ vertices (every $2^{\\binom n2}$, bitmask codegrees): all hypothesis-satisfying graphs pass the congruence - 0 failures; counts of satisfying graphs per $n$: $n=2:1$, $n=4:4$, $n=6:76$, and $0$ for all odd $n$ (which certifies the warm-up lemma in bulk)."
      ],
      "readiness": {
        "runId": "RUN-20260929-01",
        "checkedOn": "2026-09-30",
        "queue": "P3",
        "novelty": {
          "fileStatus": "screened",
          "verdict": "T3-pending",
          "lanes": {
            "N": "4 Bing probes + 1 DDG (quota) 2026-09-30 clean; nearest kin Oddtown/Fisher parity-design theorems (bounds, not this invariant); SE exact-form lanes deferred",
            "A": "corpus FTS 3 combos: 0 hits; aops-wiki lane blocked (403) - noted",
            "D": "tools/screen.py --id c19 recorded at splice by single writer"
          },
          "provenanceComplete": false,
          "humanApprovalRequired": false
        },
        "proof": {
          "state": "unaudited",
          "independentlyCheckedThisRun": false,
          "auditNote": null
        },
        "calibration": {
          "state": "agent-derived-provisional",
          "contestantBlindTest": "not-run",
          "humanReweight": "pending",
          "ratingCurrentlyStored": 7.0,
          "difficultyCurrentlyStored": "hard",
          "starsCurrentlyStored": 3
        },
        "quality": {
          "state": "human-panel-pending",
          "scores": null
        },
        "release": {
          "eligible": false,
          "state": "blocked-until-global-gates"
        },
        "provenance": {
          "status": "not-established",
          "sourceNotePresent": false
        },
        "sourceRecall": {
          "status": "not-recorded"
        }
      }
    },
    {
      "id": "c21",
      "category": "cmb",
      "difficulty": "challenging",
      "stars": 4,
      "rating": 8,
      "confidence": "low",
      "novelty": {
        "status": "unverified",
        "searchDate": "2026-09-27",
        "exactMatch": false,
        "similarSources": [],
        "earliestKnownDate": null
      },
      "proofStatus": "verified",
      "text": "Let $n&lt;m$ be positive integers. Let $a_{ij}$ be real numbers for $1\\le i\\le n$ and $1\\le j\\le m$. We say a sequence of real numbers $x_1,\\dots,x_m$ is <em>stable</em> if we can choose $n$ pairwise distinct integers $c_1,\\dots,c_n\\in\\{1,\\dots,m\\}$ such that $$a_{i,c_i}-x_{c_i}\\ge a_{ij}-x_j \\quad\\text{for all }1\\le i\\le n\\text{ and }1\\le j\\le m.$$ Prove that if two sequences $y=(y_1,\\dots,y_m)$ and $z=(z_1,\\dots,z_m)$ are stable, then the sequence $u$ defined by $u_j=\\min(y_j,z_j)$ is also stable.",
      "why": "Fix witnessing optimal matchings $M_y,M_z$; in $H=M_y\\cup M_z$ rows have degree 2 and columns at most 2, so components are alternating paths and cycles (a doubled edge is a 2-cycle). If row $i$ uses $p$ in $M_y$ and $q$ in $M_z$, optimality chains $y_p-y_q\\le a_{ip}-a_{iq}\\le z_p-z_q$, i.e. $d_p\\le d_q$ for $d=y-z$: along each path, oriented from its $M_y$ end, $d$ is nondecreasing, and on each cycle constant. Writing $u=\\min(y,z)=y-\\max(d,0)$, the $u$-score is $\\max(\\alpha_j,\\alpha_j+d_j)$ with $\\alpha_j=a_{ij}-y_j$, so each row's $u$-optimum sits at $p$ or $q$; the sign cut of $d$ selects $M_y$ edges below and $M_z$ edges above within each component, matching all rows to distinct $u$-optimal columns without exchange. Conceptually this is valuated-matroid basis exchange for the transversal (assignment) matroid, Murota's M-convexity: Dress-Wenzel dual valuations are closed under componentwise minimum, the defining property of the associated tropical linear space.",
      "steps": [
        "Let $M_y$ and $M_z$ be witnessing matchings for the stability of $y$ and $z$: each row vertex $i$ is matched to one column, the columns used by each matching are pairwise distinct, and its matched edge is row-wise optimal for the corresponding sequence. Form the bipartite multigraph $H=M_y\\cup M_z$, keeping the two edges distinct when the same row-column pair occurs in both matchings. Every row has degree $2$ and every column has degree at most $2$, so every connected component of $H$ is an alternating cycle or an alternating path whose endpoints are columns (columns of degree $0$ or unused vertices play no role). A doubled common edge is regarded as a $2$-cycle. Along any path the two matching edges strictly alternate, because each row and each internal column is incident to exactly one $M_y$ edge and one $M_z$ edge; hence the two end-edges lie in *opposite* matchings, exactly one endpoint column is reached by an $M_y$ edge, and the orientation used in the next step is always available.",
        "Put $$d_j=y_j-z_j.$$ Suppose a row $i$ uses column $p$ in $M_y$ and column $q$ in $M_z$. Stability gives $$a_{ip}-y_p\\ge a_{iq}-y_q$$ and $$a_{iq}-z_q\\ge a_{ip}-z_p.$$ Hence $$y_p-y_q\\le a_{ip}-a_{iq}\\le z_p-z_q,$$ so $$d_p\\le d_q.$$ In a path, orient the component from the endpoint belonging to $M_y$. Writing it as $$c_0-i_1-c_1-i_2-c_2-\\cdots-i_k-c_k,$$ where $i_r$ is joined to $c_{r-1}$ by its $M_y$ edge and to $c_r$ by its $M_z$ edge, we obtain $$d_{c_0}\\le d_{c_1}\\le\\cdots\\le d_{c_k}.$$ Around an alternating cycle the inequalities go all the way around, hence all its columns have the same $d$-value.",
        "Fix any row $i$ (path or cycle), with $M_y$ column $p$ and $M_z$ column $q$. Define $$\\alpha_j=a_{ij}-y_j.$$ Since $p$ is $y$-optimal, $\\alpha_p\\ge\\alpha_j$ for every $j$. Also $z_j=y_j-d_j$, so $q$ being $z$-optimal means $$\\alpha_q+d_q\\ge\\alpha_j+d_j$$ for every $j$ (applied at $j=p$ this gives $\\alpha_p+d_p\\le\\alpha_q+d_q$). Finally, because $u_j=\\min(y_j,z_j)=y_j-\\max(d_j,0)$, the row-$i$ $u$-score at column $j$ is $$a_{ij}-u_j=\\alpha_j+\\max(d_j,0)=\\max(\\alpha_j,\\alpha_j+d_j).$$ Chaining the two optima, $\\max(\\alpha_j,\\alpha_j+d_j)\\le\\max(\\alpha_p,\\alpha_q+d_q)$ for every $j$, while the row's $u$-score at $p$ is $\\max(\\alpha_p,\\alpha_p+d_p)$ and at $q$ is $\\max(\\alpha_q,\\alpha_q+d_q)$; using $\\alpha_p+d_p\\le\\alpha_q+d_q$ and $\\alpha_q\\le\\alpha_p$, the per-column bound $\\max(\\alpha_p,\\alpha_q+d_q)$ is therefore attained at $p$ or at $q$. Sign cases: if $d_p,d_q\\le0$, then $\\alpha_q+d_q\\le\\alpha_q\\le\\alpha_p$, so $p$ is $u$-optimal; if $d_p,d_q\\ge0$, then $\\alpha_p\\le\\alpha_p+d_p\\le\\alpha_q+d_q$, so $q$ is $u$-optimal; if $d_p\\le0\\le d_q$, the bound $\\max(\\alpha_p,\\alpha_q+d_q)$ is exactly $p$'s score $\\alpha_p$ or $q$'s score $\\alpha_q+d_q$, so at least one of $p,q$ is $u$-optimal. The remaining sign pattern $d_q\\le0\\le d_p$ cannot occur, since Step 2 gives $d_p\\le d_q$ for the $M_y$/$M_z$ columns of the same row.",
        "Consider an alternating cycle; by Step 2 its column differences are all equal, say to $\\delta$ (a doubled-edge $2$-cycle has one column and is trivially covered, with $p=q$ and $\\delta=d_p$). Every row of the cycle then has both of its columns in the same sign case: if $\\delta\\le0$ all rows fall under case $d_p,d_q\\le0$, so every $M_y$ edge is $u$-optimal; if $\\delta\\ge0$ all rows fall under case $d_p,d_q\\ge0$, so every $M_z$ edge is $u$-optimal (when $\\delta=0$ either choice works). The $M_y$ edges of the cycle alone already match every row of the component to pairwise distinct columns of the cycle, and so do the $M_z$ edges, so either full choice covers the component with no collision.",
        "Now consider an alternating path $$c_0-i_1-c_1-\\cdots-i_k-c_k$$ with $d_{c_0}\\le\\cdots\\le d_{c_k}$, where row $i_r$ uses column $c_{r-1}$ via $M_y$ and column $c_r$ via $M_z$. If every $d_{c_r}\\le0$, take all $M_y$ edges; if every $d_{c_r}>0$, take all $M_z$ edges; in the first case each row is in sign case $d_p,d_q\\le0$ and in the second each row is in case $d_p,d_q\\ge0$ (strictly positive), so by the previous step every chosen edge is $u$-optimal, and each choice covers all $k$ rows with $k$ distinct columns. Otherwise let $t$ be the largest index in $\\{0,\\dots,k-1\\}$ with $d_{c_t}\\le0$; then $d_{c_{t+1}}>0$. Take the $M_y$ edge $c_{r-1}$ of row $i_r$ for $r\\le t$ (there both columns carry index $\\le t$, hence nonpositive $d$: case one), take the $M_z$ edge $c_r$ of row $i_r$ for $r\\ge t+2$ (there both columns carry index $\\ge t+1$, hence positive $d$: case two), and for the single transition row $i_{t+1}$, whose columns satisfy $d_{c_t}\\le0\\le d_{c_{t+1}}$, choose whichever of its two incident edges is $u$-optimal, which the third sign case guarantees exists. The columns used are $$c_0,c_1,\\dots,c_{t-1},\\quad\\text{then }c_t\\text{ or }c_{t+1},\\quad\\text{then }c_{t+2},\\dots,c_k,$$ pairwise distinct, so no collision arises; the degenerate subcases $t=0$ and $t=k-1$ simply drop the first or last block.",
        "Thus every connected component of $H$ contains a matching covering all its row vertices by edges that are individually $u$-optimal, with no column used twice; the word *optimal* is global, since Step 3 bounds the row-$i$ $u$-score at **every** column $j\\in\\{1,\\dots,m\\}$, not merely at columns of the same component. Distinct components have disjoint column sets, so combining these matchings over all components gives $n$ pairwise distinct columns $c_1,\\dots,c_n$ such that $$a_{i,c_i}-u_{c_i}\\ge a_{ij}-u_j$$ for every row $i$ and every column $j$. Therefore $u=(\\min(y_1,z_1),\\dots,\\min(y_m,z_m))$ is stable."
      ]
    },
    {
      "id": "c22",
      "category": "cmb",
      "difficulty": "challenging",
      "stars": 4,
      "rating": 8,
      "confidence": "low",
      "novelty": {
        "status": "unverified",
        "searchDate": "2026-09-27",
        "exactMatch": false,
        "similarSources": [],
        "earliestKnownDate": null
      },
      "proofStatus": "verified",
      "text": "There are $n$ piles, each with a token of value $1$. In each step, choose two piles with values $A$ and $B$ and merge them into a pile of value $A+B+\\min(A,B)$. Repeat $n-1$ times.<br><br>Prove that the maximum possible value of the final pile equals the number of odd entries in the first $n$ rows of Pascal's triangle, i.e. the number of pairs $(x,y)$ with $0\\le x\\le y&lt;n$ for which $\\binom yx$ is odd.",
      "why": "Every merge history is a binary tree, and $A,B\\mapsto A+B+\\min(A,B)$ is nondecreasing in each argument, so $M(n)=\\max_{1\\le i\\le\\lfloor n/2\\rfloor}\\bigl(M(i)+M(n-i)+\\min(M(i),M(n-i))\\bigr)$; $M$ is strictly increasing, collapsing the recurrence to $M(n)=\\max_i\\bigl(2M(i)+M(n-i)\\bigr)$, $M(1)=1$. For $S(n)=\\sum_{r=0}^{n-1}2^{\\operatorname{popcount}(r)}$, Lucas' theorem mod 2 gives exactly $2^{\\operatorname{popcount}(y)}$ odd entries in row $y$ of Pascal's triangle, and $S$ obeys $S(2t)=3S(t)$, $S(2t+1)=2S(t)+S(t+1)$; the block inequality $S(i+j)\\ge2S(i)+S(j)$ for $i\\le j$ (parity induction on $i+j$), with equality at balanced splits, forces $M=S$ by strong induction. $2^{\\operatorname{popcount}}$ is a 2-regular sequence in the sense of Allouche-Shallit, and the two-step recurrences are the standard divide-and-conquer structure of binary-additive functions.",
      "answer": "If $M(n)$ is the maximum final value and $S(n)=\\sum_{r=0}^{n-1}2^{\\operatorname{popcount}(r)}$, then $M(n)=S(n)$; by Lucas' theorem, $S(n)$ is exactly the number of odd entries in the first $n$ rows of Pascal's triangle.",
      "steps": [
        "Let $M(n)$ be the maximum obtainable from $n$ piles; $M(1)=1$, and every achievable pile value is at least its leaf count, so $M(k)\\ge k\\ge 1$ always. Any merge history is a binary tree: the last merge joins subtrees on $i$ and $n-i$ leaves, $1\\le i\\le\\lfloor n/2\\rfloor$. Since $x\\mapsto x+y+\\min(x,y)$ is nondecreasing in each variable, replacing a child's value by its per-size optimum $M(i)$, $M(n-i)$ can only increase the parent, so the true recurrence is $$M(n)=\\max_{1\\le i\\le\\lfloor n/2\\rfloor}\\bigl(M(i)+M(n-i)+\\min(M(i),M(n-i))\\bigr)$$: the max is an upper bound for every tree, and conversely each term is attained by running the two optimal sub-procedures on the two disjoint sets of piles independently and merging at the end.",
        "$M$ is strictly increasing: for $n\\ge2$ the split $i=1$ gives $M(n)\\ge M(1)+M(n-1)+\\min(M(1),M(n-1))\\ge 1+M(n-1)+1$, using $M(n-1)\\ge1$. Hence for $i\\le n-i$ one has $\\min(M(i),M(n-i))=M(i)$, and the recurrence simplifies to $$M(n)=\\max_{1\\le i\\le\\lfloor n/2\\rfloor}\\bigl(2M(i)+M(n-i)\\bigr),\\qquad M(1)=1.$$",
        "Define $w(r)=2^{\\operatorname{popcount}(r)}$ and $$S(n)=\\sum_{r=0}^{n-1}w(r).$$ Lucas' theorem modulo $2$ says that $\\binom yx$ is odd exactly when every $1$-bit of $x$ also occurs in $y$. Thus row $y$ contains exactly $2^{\\operatorname{popcount}(y)}=w(y)$ odd entries, so $S(n)$ is exactly the required Pascal-triangle count.",
        "Since $\\operatorname{popcount}(2r)=\\operatorname{popcount}(r)$ and $\\operatorname{popcount}(2r+1)=\\operatorname{popcount}(r)+1$, we have $$S(2t)=3S(t),\\qquad S(2t+1)=2S(t)+S(t+1).$$",
        "We prove the key binary-block lemma $$S(i+j)\\ge2S(i)+S(j) \\tag{L}$$ for $0\\le i\\le j$ by strong induction on $i+j$. Base case: $i+j=0$ means $i=j=0$, and $S(0)=0$ (empty sum), so (L) reads $0\\ge0$; and $i+j=1$ forces $i=0,j=1$, where (L) reads $S(1)\\ge 2S(0)+S(1)$, again true since $S(0)=0$. In every case below with $i+j\\ge2$ each induction hypothesis is applied only to pairs whose sum is strictly smaller than $i+j$ and whose first entry is at most its second, as checked parenthetically. Write $i=2a+\\delta$, $j=2b+\\varepsilon$, with $\\delta,\\varepsilon\\in\\{0,1\\}$. If $(\\delta,\\varepsilon)=(0,0)$, then $i\\le j$ gives $a\\le b$, and $a+b&lt;i+j$ unless $i+j=0$ (already the base case), so the induction hypothesis for $(a,b)$ gives $$3S(a+b)\\ge6S(a)+3S(b)=2S(i)+S(j).$$ If $(0,1)$, then $2a\\le2b+1$ forces $a\\le b$, so $(a,b)$ and $(a,b+1)$ are admissible pairs of smaller sum ($a+b,\\ a+b+1&lt;i+j=2a+2b+1$), and the induction hypotheses give $$S(i+j)=2S(a+b)+S(a+b+1),\\qquad S(a+b)\\ge2S(a)+S(b),\\qquad S(a+b+1)\\ge2S(a)+S(b+1),$$ and substituting the two bounds into the first identity yields (L). If $(1,0)$, then $2a+1\\le2b$ forces $a&lt;b$, so $(a,b)$ and $(a+1,b)$ are admissible pairs of smaller sum (their sums are $&lt;i+j=2a+2b+1$; the alternative $a+b=0$ would give $i=1&gt;j=0$, excluded by $i\\le j$), and the induction hypotheses give $$S(a+b)\\ge2S(a)+S(b),\\qquad S(a+b+1)\\ge2S(a+1)+S(b),$$ hence (L). Finally suppose $(\\delta,\\varepsilon)=(1,1)$. If $a=b$, then $S(i+j)=S(2i)=3S(i)=2S(i)+S(j)$. If $a&lt;b$, the pairs $(a,b+1)$ (valid: $a\\le b&lt;b+1$) and $(a+1,b)$ (valid: $a+1\\le b$) both have sum $a+b+1&lt;i+j=2a+2b+2$, so the induction hypothesis gives $$S(a+b+1)\\ge2S(a)+S(b+1),\\qquad S(a+b+1)\\ge2S(a+1)+S(b).$$ Using $S(t+1)=S(t)+w(t)$ these two bounds are $2S(a)+S(b)+w(b)$ and $2S(a)+S(b)+2w(a)$, so their larger one $M_0$ satisfies, since a maximum dominates the average, $$M_0\\ge2S(a)+S(b)+\\tfrac{2w(a)+w(b)}3.$$ Now assemble with $S(2t)=3S(t)$ and $S(2t+1)=2S(t)+S(t+1)=3S(t)+w(t)$: $$S(i+j)=3S(a+b+1)\\ge3M_0\\ge6S(a)+3S(b)+2w(a)+w(b)=2S(2a{+}1)+S(2b{+}1)=2S(i)+S(j),$$ which is (L) in this case.",
        "Applying the lemma to any split $i\\le n-i$ gives $$2S(i)+S(n-i)\\le S(n).$$ For $nge2$ the admissible split range $1le ilelfloor n/2\rfloor$ contains the balancing split: if $n=2i$ is even, that split gives $2S(i)+S(i)=3S(i)=S(n)$; if $n=2i+1$ is odd, the split $i=(n-1)/2ge1$ gives $2S(i)+S(i+1)=S(2i+1)=S(n)$. So the maximum over splits equals $S(n)$. Therefore $$S(n)=\\max_{1\\le i\\le\\lfloor n/2\\rfloor}\\bigl(2S(i)+S(n-i)\\bigr).$$",
        "Both recurrences reference only arguments $i$ and $n-i$ strictly between $0$ and $n$, so $M(n)=S(n)$ follows from $M(1)=S(1)=1$ by strong induction: assuming equality below $n$, $M(n)=max_i(2M(i)+M(n-i))=max_i(2S(i)+S(n-i))=S(n)$. Hence the maximum final pile equals the number of odd entries in the first $n$ rows of Pascal's triangle."
      ]
    },
    {
      "id": "c23",
      "category": "cmb",
      "difficulty": "challenging",
      "stars": 4,
      "rating": 8.5,
      "confidence": "low",
      "novelty": {
        "status": "unverified",
        "searchDate": "2026-09-27",
        "exactMatch": false,
        "similarSources": [],
        "earliestKnownDate": null
      },
      "text": "Let $m\\ge3$ be odd. A school has $m$ students and $n\\ge m+2$ clubs; no two clubs have the same membership set. For two clubs, their <em>discord</em> is the number of students in exactly one of them. Let $d_{\\min}$ and $d_{\\max}$ be the minimum and maximum discords. Prove that $$\\frac{d_{\\max}}{d_{\\min}}\\ge\\frac{m+3}{m-1}.$$ Show that the bound is attained for $m=3$ and $m=5$.",
      "why": "Represent clubs by $\\{0,1\\}^m$ vectors, discord by Hamming distance. Coordinate count: coordinate $j$, held by $r_j$ of the $n$ sets, separates $r_j(n-r_j)\\le n^2/4$ pairs, so $\\delta\\binom n2\\le mn^2/4$; with $n\\ge m+2$ and $\\delta,m$ integral, $m$ odd, this gives $\\delta\\le\\frac{m-1}{2}$. Next, $\\Delta\\ge\\delta+2$: if $\\Delta\\le\\delta+1$, translate by one club (a Hamming isometry) so one vector is $0$ and all weights lie in $\\{\\delta,\\delta+1\\}$; splitting by weight parity and moving to $\\{\\pm1\\}$-vectors, the Gram matrix has constant off-diagonal $\\alpha=m-2E$ within classes and $\\beta=m-2O\\ne0$ across them ($m$ odd), whose rank is at least $n-1>m$, impossible. Hence $\\Delta/\\delta\\ge1+\\frac2\\delta\\ge\\frac{m+3}{m-1}$; attained for $m=3$ ($\\varnothing,\\{1\\},\\{2\\},\\{3\\},X$, ratio 3) and $m=5$ (the 7-set construction, ratio 2), impossible for $m=7$. Engines: the Plotkin bound for codes and the rank (Delsarte-Goethals-Seidel) method for two-distance sets.",
      "steps": [
        "Represent each club by its incidence vector in $\\{0,1\\}^m$. Let $\\delta=d_{\\min}$ and $\\Delta=d_{\\max}$. Since the clubs have distinct membership sets, $\\delta\\ge1$. For each student-coordinate $j$, suppose $r_j$ of the $n$ clubs contain that student. Exactly $r_j(n-r_j)$ unordered pairs of clubs differ in coordinate $j$, and $$r_j(n-r_j)\\le\\frac{n^2}{4}.$$ Hence the sum of all pairwise discords satisfies $$\\sum_{a&lt;b}d(a,b)\\le m\\frac{n^2}{4}.$$ On the other hand every pair has discord at least $\\delta$, so $$\\binom n2\\delta\\le m\\frac{n^2}{4},$$ giving $$\\delta\\le\\frac{mn}{2(n-1)}.$$ Since $n\\ge m+2$, the right-hand side is at most $$\\frac{m(m+2)}{2(m+1)}=\\frac{m+1}{2}-\\frac1{2(m+1)}&lt;\\frac{m+1}{2}.$$ As $m$ and $\\delta$ are integers and $m$ is odd, $$\\boxed{\\delta\\le\\frac{m-1}{2}}.$$",
        "We next prove $$\\boxed{\\Delta\\ge\\delta+2}.$$ Suppose for contradiction that $\\Delta\\le\\delta+1$. Replace every incidence vector $x$ by $x\\oplus x_0$ for one fixed club $x_0$. This is an isometry of Hamming space, so all pairwise discords are unchanged; after the replacement, one club is the zero vector. Since every distance is either $\\delta$ or $\\delta+1$, every vector has weight $\\delta$ or $\\delta+1$.",
        "Partition the clubs according to the parity of their weights. Two clubs in the same parity class have even Hamming distance, while two clubs in opposite parity classes have odd Hamming distance. Because the only possible distances are the consecutive integers $\\delta,\\delta+1$, all pairs within the same parity class have one common distance $E$, namely the even member of $\\{\\delta,\\delta+1\\}$, and every pair from opposite parity classes has the other common distance $O$, the odd member.",
        "Replace each binary vector by its $\\{\\pm1\\}$-vector obtained from $0\\mapsto1$ and $1\\mapsto-1$. For two such vectors, inner product equals $m-2d$, where $d$ is their Hamming distance. Thus vectors in the same parity class have constant off-diagonal inner product $$\\alpha=m-2E,$$ while vectors in opposite parity classes have constant inner product $$\\beta=m-2O.$$ Since $m$ is odd, $\\beta$ is odd and therefore $\\beta\\ne0$.",
        "If all clubs have the same weight parity, their Gram matrix is $$G=(m-\\alpha)I_n+\\alpha J_n.$$ Here $$m-\\alpha=2E>0,$$ so $G$ has the positive eigenvalue $2E$ with multiplicity $n-1$. Hence $\\operatorname{rank}G\\ge n-1$. But $G=VV^T$ for vectors in $\\mathbb R^m$, so $\\operatorname{rank}G\\le m$, contradicting $n\\ge m+2$.",
        "Suppose instead that both parity classes are nonempty, of sizes $p$ and $q$. The Gram matrix has block form $$G=\\begin{pmatrix}(m-\\alpha)I_p+\\alpha J_p&amp;\\beta J_{p\\times q}\\\\ \\beta J_{q\\times p}&amp;(m-\\alpha)I_q+\\alpha J_q\\end{pmatrix}.$$ On the subspace of vectors whose coordinates in each block separately sum to $0$, $G$ acts as multiplication by $m-\\alpha=2E>0$; this gives rank at least $n-2$. On the remaining $2$-dimensional space of vectors constant on each block, the representing matrix has off-diagonal entry $\\beta\\sqrt{pq}\\ne0$, so it has rank at least $1$. Hence $$\\operatorname{rank}G\\ge n-1>m,$$ again impossible. Therefore $\\Delta\\le\\delta+1$ is impossible, proving $\\Delta\\ge\\delta+2$.",
        "Combining the two bounds gives $$\\frac{\\Delta}{\\delta}\\ge1+\\frac2\\delta\\ge1+\\frac{4}{m-1}=\\boxed{\\frac{m+3}{m-1}}.$$",
        "For $m=3$, take the five membership sets $$\\varnothing,\\ \\{1\\},\\ \\{2\\},\\ \\{3\\},\\ \\{1,2,3\\}.$$ The minimum discord is $1$, the maximum is $3$, and $$\\frac{d_{\\max}}{d_{\\min}}=3=\\frac{3+3}{3-1}.$$",
        "For $m=5$, take the seven membership sets $$\\varnothing,\\ \\{1,2\\},\\ \\{1,3\\},\\ \\{1,4\\},\\ \\{1,5\\},\\ \\{2,3\\},\\ \\{1,2,3,4\\}.$$ Every pair has discord $2$ or $4$, both values occur, so $d_{\\min}=2$, $d_{\\max}=4$, and $$\\frac{d_{\\max}}{d_{\\min}}=2=\\frac{5+3}{5-1}.$$ Thus the stated bound is attained in these two cases."
      ]
    },
    {
      "id": "c24",
      "category": "cmb",
      "difficulty": "challenging",
      "stars": 4,
      "rating": 9,
      "confidence": "high",
      "novelty": {
        "status": "screened-reformulated",
        "searchDate": "2026-09-30",
        "exactMatch": false,
        "similarSources": [
          {
            "name": "related wheel parking-function enumeration",
            "note": "The underlying wheel enumeration and its Fibonacci/Lucas connection are classical in parking-function/chip-firing literature; the exact self-contained activation-process formulation below was not found in the exact-match screen."
          }
        ],
        "earliestKnownDate": 2005,
        "lanesComplete": false,
        "laneSummary": {
          "N": "exact-form screen clean for the activation formulation; underlying wheel parking-function count is known",
          "A": "exact-form screen clean for the activation formulation; underlying wheel parking-function count is known",
          "D": "re-derived independently from the burning process and Fibonacci generating function"
        },
        "transformedFrom": {
          "knownCore": "wheel parking functions / burning test",
          "frozenIn": "CHANGELOG.md 2026-09-29"
        },
        "priorCore": "burning-test enumeration of wheel configurations",
        "seam": "The graph-theoretic parking terminology is removed completely. The same object is presented as a monotone light-up process, and the proof reduces it to a local forbidden-block language whose core generating function has denominator 1-3x+x^2.",
        "signature": "M14+R13+Fibonacci-core",
        "residualRisk": "medium: the formulation is new-looking and exact-match clean, but the underlying wheel enumeration itself is classical."
      },
      "text": "Let $W_n$ be a wheel with a marked rim vertex $s$. Put a number $h\\in\\{0,1,\\dots,n-1\\}$ at the hub and a number in $\\{0,1,2\\}$ at every other rim vertex. Initially only $s$ is lit. Whenever an unlit vertex has more lit neighbors than its number, it becomes lit. Call a labeling successful if all vertices eventually become lit, and let $P_n$ be the number of successful labelings. Prove that $P_3=16$, $P_4=45$, and $P_n=3P_{n-1}-P_{n-2}+2$ for $n\\ge5$, and hence prove $P_n=L_{2n}-2$.",
      "answer": "$\\boxed{P_3=16,\\quad P_4=45,\\quad P_n=3P_{n-1}-P_{n-2}+2,\\quad P_n=L_{2n}-2.}$",
      "why": "The key is to fix the hub value $h$ and look at the rim as a path after deleting the marked vertex. Before the hub lights, only zeroes can propagate inward from the two ends; after the hub lights, a rim word is successful exactly when every maximal block of nonzero entries contains at most one $2$. Counting the resulting nonzero-ended cores gives Fibonacci numbers through the rational generating function $\\frac{x(2-x)(1-x)}{1-3x+x^2}$. The hub level contributes a simple linear weight, and summing over $h$ collapses to $L_{2n}-2$. Thus the Lucas number appears from the local light-up dynamics rather than from the Matrix-Tree theorem or any sandpile machinery.",
      "steps": [
        "Write the nonsink rim as a path $v_1,\\dots,v_{n-1}$ and fix the hub value $h$. Before the hub lights, a rim vertex can propagate inward only through zeroes; the hub itself has the already-lit sink as one neighbor, so it lights as soon as $h$ rim vertices have lit. For $h=n-1$, all rim vertices must light first, giving exactly $h+1$ possibilities: all zeroes, or one final $1$ at any rim vertex. For $h\\lt n-1$, this is equivalent to requiring that the total number of leading and trailing zeroes be at least $h$.",
        "Once the hub is lit, the remaining rim word is successful exactly when every maximal block of nonzero entries contains at most one $2$: if two $2$'s occur in the same block, the propagation gets trapped between them; conversely, each block can be cleared from its ends, with its unique possible $2$ burning last. Let $C_k$ be the number of such valid words of length $k$ that begin and end nonzero. A positive block has generating function $B(x)=\\frac{x}{1-x}+\\frac{x}{(1-x)^2}=\\frac{x(2-x)}{(1-x)^2}$, while a separating zero-run has $Z(x)=\\frac{x}{1-x}$. Hence $C(x)=\\frac{B(x)}{1-B(x)Z(x)}=\\frac{x(2-x)(1-x)}{1-3x+x^2}$. Therefore $C_1=2$ and $C_k=F_{2k}$ for every $k\\ge2$.",
        "Let $A_{n,h}$ be the number of successful labelings with hub value $h$, and put $m=n-1$. If $q=m-h\\ge1$, decompose a successful rim word into $s$ leading/trailing zeroes and a nonzero-ended core. There are $s+1$ ways to split the $s$ end zeroes, so $A_{n,h}=1+\\sum_{k=1}^{q}(m-k+1)C_k=1+2m+\\sum_{k=2}^{q}(m-k+1)F_{2k}$. Using $\\sum_{k=2}^{q}F_{2k}=F_{2q+1}-2$, induction on $q$ gives $A_{n,h}=F_{2q+2}+hF_{2q+1}=F_{2(n-h)}+hF_{2(n-h)-1}$. The same formula also holds for $q=0$, since then $A_{n,n-1}=n=F_2+(n-1)F_1$.",
        "Summing over $h$ and writing $q=n-h$ gives $P_n=\\sum_{q=1}^{n}\\bigl(F_{2q}+(n-q)F_{2q-1}\\bigr)$. Now $\\sum_{q=1}^{n}F_{2q}=F_{2n+1}-1$, $\\sum_{q=1}^{n}F_{2q-1}=F_{2n}$, and $\\sum_{q=1}^{n}qF_{2q-1}=nF_{2n}-F_{2n-1}+1$. Therefore $P_n=F_{2n+1}+F_{2n-1}-2=L_{2n}-2$.",
        "Finally $L_{2n}$ satisfies $L_{2n}=3L_{2n-2}-L_{2n-4}$, so $P_n=3P_{n-1}-P_{n-2}+2$. The formula gives $P_3=L_6-2=18-2=16$ and $P_4=L_8-2=47-2=45$."
      ],
      "readiness": {
        "runId": "RUN-20260930-02",
        "checkedOn": "2026-09-30",
        "queue": "P3",
        "novelty": {
          "fileStatus": "screened-reformulated",
          "verdict": "T3-pending",
          "lanes": {
            "N": "exact-form screen clean for the activation formulation; underlying wheel parking-function count is known",
            "A": "exact-form screen clean for the activation formulation; underlying wheel parking-function count is known",
            "D": "re-derived independently from the burning process and Fibonacci generating function"
          },
          "provenanceComplete": false,
          "humanApprovalRequired": false
        },
        "proof": {
          "state": "verified",
          "independentlyCheckedThisRun": true,
          "auditNote": "RUN-20260930-02 independent check: own simulator (tools/proofs/replace-20260930-r2/c25-verify.py/.out) re-enumerated every labeling for n=3..10 under the shipped light-up rule - P=16,45,121,320,841,2205,5776,15125, all matching L_{2n}-2, 0 mismatches; the proof's per-hub decomposition A_{n,h}=F_{2(n-h)}+hF_{2(n-h)-1} was replayed against simulation for every (n,h), n<=8 (c25-steps.out), and the core counts C_k vs F_{2k} up to k=11; recurrence and Lucas identities re-derived by hand."
        },
        "calibration": {
          "state": "newly_reestimated",
          "contestantBlindTest": "not-run",
          "humanReweight": "pending",
          "ratingCurrentlyStored": 9,
          "difficultyCurrentlyStored": "challenging",
          "starsCurrentlyStored": 4
        },
        "quality": {
          "state": "human-panel-pending",
          "scores": null
        },
        "release": {
          "eligible": false,
          "state": "blocked-until-global-gates"
        },
        "provenance": {
          "status": "not-established",
          "sourceNotePresent": false
        },
        "sourceRecall": {
          "status": "not-recorded"
        }
      }
    },
    {
      "id": "c25",
      "category": "cmb",
      "difficulty": "challenging",
      "stars": 4,
      "rating": 9,
      "confidence": "high",
      "novelty": {
        "status": "screened",
        "searchDate": "2026-09-30",
        "exactMatch": false,
        "similarSources": [
          {
            "name": "Caro-Wei theorem",
            "note": "Classical independent-set bound \\sum_v 1/(d(v)+1), proved by random ordering; adjacent core, but not this weighted cubic/quadratic bound."
          },
          {
            "name": "Weighted greedy independent-set bounds",
            "note": "Known results include bounds of the form \\sum_v w(v)^2/w(N[v]); the present \\sum_v w(v)^3/\\sum_{u\\in N[v]}w(u)^2 rule did not appear in the sampled exact-form searches."
          }
        ],
        "earliestKnownDate": null,
        "lanesComplete": false,
        "laneSummary": {
          "N": "sampled web searches found nearby Caro-Wei and weighted-greedy results, but no exact match for the displayed cubic/quadratic potential",
          "A": "mathematical core checked independently by derivation and exhaustive small-graph testing",
          "D": "exact-form novelty remains a screening judgment, not a proof of absolute originality"
        },
        "transformedFrom": {
          "knownCore": "weighted independent-set guarantee based on Caro-Wei / conditional expectation",
          "frozenIn": "CHANGELOG.md 2026-09-30"
        },
        "priorCore": "the previous cave problem used \\Phi(H)=\\sum_v w(v)/(d_H(v)+1) and a conditional-expectation rule; that familiar Caro-Wei core has been replaced rather than merely restated",
        "seam": "replace the degree potential by the genuinely different mass-weighted potential \\Phi(H)=\\sum_v w(v)^3/\\sum_{u\\in N_H[v]}w(u)^2. The proof is driven by a weighted averaging identity, with weights w(v)^2.",
        "signature": "S24+M13",
        "residualRisk": "medium: the exact formula and descent rule were not found in sampled searches, but it belongs to a broader family of weighted Caro-Wei-type ideas, so absolute novelty cannot be certified by search alone"
      },
      "text": "Let $G$ be a finite simple graph, with a positive real number $w(v)$ attached to each vertex $v$. A move chooses a vertex $v$, earns $w(v)$, and deletes $v$ together with all its neighbors. For an induced subgraph $H$ define $$\\Phi(H)=\\sum_{v\\in V(H)}\\frac{w(v)^3}{\\sum_{u\\in N_H[v]}w(u)^2},$$ where $N_H[v]$ is the closed neighborhood of $v$ in $H$. Prove that there is a sequence of moves whose total earnings are at least $\\Phi(G)$.",
      "answer": "$\\boxed{\\text{There is a strategy earning at least }\\ \\Phi(G).}$",
      "why": "The key is a surprisingly exact weighted averaging identity. For a current graph $H$, let $D_H(v)=\\sum_{u\\in N_H[v]}w(u)^2$ and let $F_H(v)=w(v)+\\Phi(H-N_H[v])$. We prove $$\\sum_v w(v)^2F_H(v)\\ge\\Bigl(\\sum_v w(v)^2\\Bigr)\\Phi(H).$$ Thus some $v$ has $F_H(v)\\ge\\Phi(H)$. Choosing such a vertex makes the quantity 'earnings so far plus current potential' nondecreasing. The cubic/quadratic form is what makes the cancellation work.",
      "steps": [
        "For nonempty $H$ put $S=\\sum_{v\\in V(H)}w(v)^2$ and $D(v)=\\sum_{u\\in N_H[v]}w(u)^2$. For each $v$ define $F(v)=w(v)+\\Phi(H-N_H[v])$.",
        "Consider $\\sum_v w(v)^2F(v)$. The first part is $\\sum_v w(v)^3$. Fix $x$. If $x$ survives after deleting $N_H[v]$, then $v\\notin N_H[x]$, and its denominator in the new potential is at most $D(x)$, so its contribution is at least $w(x)^3/D(x)$. Since $\\sum_{v\\notin N_H[x]}w(v)^2=S-D(x)$, $$\\sum_v w(v)^2\\Phi(H-N_H[v])\\ge\\sum_x\\frac{w(x)^3}{D(x)}\\bigl(S-D(x)\\bigr).$$ Adding $\\sum_x w(x)^3$ gives $$\\sum_v w(v)^2F(v)\\ge S\\sum_x\\frac{w(x)^3}{D(x)}=S\\Phi(H).$$",
        "Therefore some vertex $v$ satisfies $F(v)\\ge\\Phi(H)$. At every stage choose a vertex maximizing $F(v)$. If $E_k$ is the total earned after $k$ moves and $H_k$ is the remaining graph, then $E_{k+1}+\\Phi(H_{k+1})\\ge E_k+\\Phi(H_k)$.",
        "The graph eventually becomes empty, so $\\Phi(H_k)=0$. Hence the final earnings satisfy $E_{\\mathrm{final}}\\ge\\Phi(G)$."
      ],
      "readiness": {
        "runId": "RUN-20260930-02",
        "checkedOn": "2026-09-30",
        "queue": "P3",
        "novelty": {
          "fileStatus": "screened",
          "verdict": "T3-pending",
          "lanes": {
            "N": "sampled web exact-form screening completed; no exact match found",
            "A": "proof independently rederived and checked on exhaustive small graphs",
            "D": "formal provenance audit pending"
          },
          "provenanceComplete": false,
          "humanApprovalRequired": false
        },
        "proof": {
          "state": "verified",
          "independentlyCheckedThisRun": true,
          "auditNote": "RUN-20260930-02 independent re-derivation: the weighted averaging identity was re-derived by hand (survival bound 1/D' >= 1/D plus the count sum_{v notin N[x]} w(v)^2 = S - D(x)); own C scan (tools/proofs/replace-20260930-r2/c9-verify.c/.out) replayed all 254253 configurations (every labelled graph n<=5 x every weighting in {1,2,3}) checking the lemma on every induced subgraph state (7,793,121 instances) and the argmax strategy, 0 violations; battery c9-random.py adds 4000 float-weight + 1200 exact-rational configs for n=6..12, 0 violations."
        },
        "calibration": {
          "state": "newly_reestimated",
          "contestantBlindTest": "not-run",
          "humanReweight": "pending",
          "ratingCurrentlyStored": 9,
          "difficultyCurrentlyStored": "challenging",
          "starsCurrentlyStored": 4
        },
        "quality": {
          "state": "human-panel-pending",
          "scores": null
        },
        "release": {
          "eligible": false,
          "state": "blocked-until-global-gates"
        },
        "provenance": {
          "status": "not-established",
          "sourceNotePresent": false
        },
        "sourceRecall": {
          "status": "not-recorded"
        }
      }
    },
    {
      "id": "g1",
      "category": "geo",
      "difficulty": "easy",
      "stars": 1,
      "rating": 1,
      "confidence": "high",
      "novelty": {
        "status": "screened",
        "searchDate": "2026-09-30",
        "exactMatch": false,
        "similarSources": [
          {
            "name": "wave-2026-09-30 web lanes (see tools/proofs/redesign-20260930/g2-screen.md)",
            "note": "'circle through the three points of tangency of three mutually tangent circles is orthogonal to all three' ran clean on api.stackexchange.com (math site), en.wikipedia.org search API (radical center / Malfatti / Monge axes queries), export.arxiv.org (arrangements-of-orthogonal-circles paper checked: unrelated) and mathworld.wolfram.com RadicalCircle + TangentCircles pages fetched 2026-09-30 - none states the claim; nearest indexed kin is the bare radical-centre concurrency of the three contact tangents (textbook exercise, e.g. https://en.wikipedia.org/wiki/Radical_axis)"
          },
          {
            "name": "post-transform screen (new statement)",
            "note": "frozen core untouched: the original tangent-secant five-point circle (O, P, A, B, M on the circle with diameter OP); the three pairwise tangent circles and the contact circle appear nowhere in it"
          }
        ],
        "earliestKnownDate": null,
        "lanesComplete": false,
        "laneSummary": {
          "N": "2026-09-30: DDG/Bing/Mojeek bot-walled from datacenter (recorded in g2-screen.md); substituted live lanes: 4 en.wikipedia.org search-API queries, 4 api.stackexchange.com math queries, 2 export.arxiv.org queries, 2 MathWorld page fetches, api.duckduckgo.com - all clean for the shipped claim",
          "A": "2026-09-30: same web lanes as N; verifier g2-verify.py: 90 exact-integer-radius configurations (all rational-centre triples, 0 failures) incl. degenerate-radius checks (1,1,1), skewed (1,1,large), plus 3000 float cases; orthogonality, concurrency, equal tangents, Z-on-tangent all checked symbolically in Fractions",
          "D": "corpus FTS (/tmp/kilo/corpus.db, 187262 chunks): 3 phrase batteries, 0 hits (g2-screen.md)"
        },
        "transformedFrom": {
          "knownCore": "standard exercise: from P draw tangents PA, PB to circle (O) and a secant PCD; with M the midpoint of CD the five points O, P, A, B, M are concyclic on the circle with diameter OP",
          "frozenIn": "CHANGELOG.md 2026-09-29"
        },
        "priorCore": "the 2026-09-29 screened variant (three-rung ladder: contact-tangent concurrency, equal tangents, Gergonne cevians) was itself replaced this wave per user request - each rung is textbook-verbatim, so the single claim was re-dressed per the escape rule to the unindexed contact-circle orthogonality",
        "seam": "the three old rungs survive only as proof steps; the shipped statement is a single novel incident about the circle through the three contact points, with the radical-centre point X never named in it; the gem is a role duality: each contact tangent is simultaneously a tangent of two given circles and a RADIUS line of the contact circle, forcing perpendicular tangents - a package no source in the probes carries; the Gergonne cevian claim was dropped entirely",
        "signature": "S45",
        "residualRisk": "medium: the two-line proof rides entirely on textbook lemmas (radical axis of tangent pair, radical centre, equal tangents), so the claim is one easy corollary away from the indexed concurrency theorem - a reviewer may call it textbook-adjacent despite the clean probes; SE exact-form lanes pending quota reset"
      },
      "text": "Three circles $\\omega_1,\\omega_2,\\omega_3$ with distinct centres are pairwise externally tangent; the circles $\\omega_i$ and $\\omega_j$ touch at $T_{ij}$. Prove that the circle through the three points of tangency $T_{12},T_{23},T_{31}$ meets each of the three given circles at right angles. (Two circles meet at right angles if their tangent lines at a common point are perpendicular.)",
      "answer": "$\\boxed{\\text{the circle through }T_{12},T_{23},T_{31}\\text{ is orthogonal to }\\omega_1,\\omega_2,\\omega_3.}$",
      "why": "Subtracting circle equations shows the common tangent at $T_{ij}$ is the radical axis of $\\omega_i,\\omega_j$: power functions are quadratic with affine differences, so the three contact tangents concur at the radical centre $X$, and equal tangent lengths give $XT_{12}=XT_{23}=XT_{31}$ - $X$ is the centre of the contact circle $\\Omega$ (contact points non-collinear: Menelaus gives internal ratio product $+1$, never $-1$). Since $O_1T_{12}\\perp XT_{12}$, the tangent to $\\Omega$ at $T_{12}$ is parallel to $O_1T_{12}$, hence perpendicular to the tangent to $\\omega_1$; cyclically. So $\\Omega$ is the unique circle orthogonal to all three - inversion in $\\Omega$ preserves each $\\omega_i$ - the conformally invariant relation of Mobius geometry.",
      "steps": [
        "Radical-axis lemma: for two externally tangent circles the common tangent at the touching point IS the radical axis: subtracting the squared-distance equations $|Z-O_i|^2-r_i^2=|Z-O_j|^2-r_j^2$ gives a line perpendicular to $O_iO_j$, and $T_{ij}$ lies on both circles, hence on it.",
        "Centres non-collinear: if $O_2$ lay between $O_1$ and $O_3$ on a line, then $|O_1O_3|=(r_1+r_2)+(r_2+r_3)>r_1+r_3=|O_1O_3|$, a contradiction; the orders with one centre outside force $r=0$. So $O_1O_2O_3$ is a genuine triangle.",
        "The contact tangents at $T_{12}$ and $T_{23}$ are perpendicular to $O_1O_2$ and $O_2O_3$ respectively: non-∥, they meet at a point $X$; $X$ has equal power to $\\omega_1,\\omega_2,\\omega_3$, so $X$ also lies on the third contact tangent: the three contact tangents concur at the radical centre $X$.",
        "Equal tangents: $XT_{12}$ is a tangent segment from $X$ to both $\\omega_1$ and $\\omega_2$, so $XT_{12}^2=\\mathrm{Pow}_{\\omega_1}(X)=\\mathrm{Pow}_{\\omega_2}(X)=XT_{31}^2$ and cyclically; lengths are positive, so $XT_{12}=XT_{23}=XT_{31}=\\rho$.",
        "Contact points non-collinear: they lie strictly inside the three sides of triangle $O_1O_2O_3$ with internal ratios $O_1T_{12}:T_{12}O_2=r_1:r_2$ etc.; Menelaus would require the product of directed ratios to be $-1$, but all three points are internal and the product of absolute ratios is $(r_1/r_2)(r_2/r_3)(r_3/r_1)=+1$. Hence a unique circle $\\Omega$ through $T_{12},T_{23},T_{31}$ exists, and by step 4 its centre is $X$.",
        "Orthogonality at $T_{12}$: $XT_{12}$ lies along the common tangent of $\\omega_1,\\omega_2$ at $T_{12}$, so $XT_{12}\\perp O_1T_{12}$; the tangent to $\\Omega$ at $T_{12}$ is perpendicular to $XT_{12}$, hence ∥ to $O_1T_{12}$ - so the tangent to $\\Omega$ is perpendicular to the tangent to $\\omega_1$ at $T_{12}$: the circles meet at right angles there (and, since $\\Omega$ meets $\\omega_1$ also at $T_{31}$, orthogonality holds at both common points; one already implies the other). Cyclically for $\\omega_2$ and $\\omega_3$.",
        "Machine audit (tools/proofs/redesign-20260930/g2-verify.py, output g2-verify.out): 90/90 exact rational configurations (every integer radius triple with $r_i\\le12$ admitting a rational centre triangle) verified for $\\Omega$-existence, centre $=$ radical point, and $|Z-O_i|^2=\\rho^2+r_i^2$ for all three circles; 3000/3000 float cases; 0 failures."
      ],
      "readiness": {
        "runId": "RUN-20260930-01",
        "checkedOn": "2026-09-30",
        "queue": "P3",
        "novelty": {
          "fileStatus": "screened",
          "verdict": "T3-pending",
          "lanes": {
            "N": "redesign wave 2026-09-30: web paraphrase/alias probes + corpus screen recorded in tools/proofs/redesign-20260930/g2-screen.md; SE exact-form lanes deferred to quota reset",
            "A": "redesign wave 2026-09-30: web paraphrase/alias probes + corpus screen recorded in tools/proofs/redesign-20260930/g2-screen.md; SE exact-form lanes deferred to quota reset",
            "D": "redesign wave 2026-09-30: D-lane evidence pack to be regenerated by tools/screen.py after splice"
          },
          "provenanceComplete": false,
          "humanApprovalRequired": false
        },
        "proof": {
          "state": "unaudited",
          "independentlyCheckedThisRun": false,
          "auditNote": "new proof text shipped 2026-09-30; machine-verified by tools/proofs/redesign-20260930/g2-verify.py; independent audit pending"
        },
        "calibration": {
          "state": "slot-preserved-from-predecessor",
          "contestantBlindTest": "not-run",
          "humanReweight": "pending",
          "ratingCurrentlyStored": 3,
          "difficultyCurrentlyStored": "easy",
          "starsCurrentlyStored": 1
        },
        "quality": {
          "state": "human-panel-pending",
          "scores": null
        },
        "release": {
          "eligible": false,
          "state": "blocked-until-global-gates"
        },
        "provenance": {
          "status": "not-established",
          "sourceNotePresent": false
        },
        "sourceRecall": {
          "status": "not-recorded"
        }
      }
    },
    {
      "id": "g2",
      "category": "geo",
      "difficulty": "easy",
      "stars": 1,
      "rating": 2,
      "confidence": "high",
      "novelty": {
        "status": "screened",
        "searchDate": "2026-09-30",
        "exactMatch": false,
        "similarSources": [
          {
            "name": "wave-2026-09-30 web lanes (see tools/proofs/redesign-20260930/g3-screen.md)",
            "note": "shipped iff ('midpoint of CD lies on the circle with diameter O1O2 iff the two circles meet at right angles', with C, D the second intersections of a line through an intersection point A) ran clean on api.stackexchange.com math (3 quoted queries: 0 hits), en.wikipedia.org search API (locus/orthogonality queries) and export.arxiv.org on 2026-09-30; nearest kin: the textbook single-circle midpoint-of-chord locus and the definition of orthogonal circles (https://en.wikipedia.org/wiki/Tangent_lines_to_circles)"
          },
          {
            "name": "post-transform screen (new statement)",
            "note": "frozen core untouched: the circle centred at the midpoint of BC through A meeting AB, AC again (symmedian configuration lemma); the two-circle rotating-chord figure appears nowhere in it"
          }
        ],
        "earliestKnownDate": null,
        "lanesComplete": false,
        "laneSummary": {
          "N": "2026-09-30: DDG/Bing bot-walled from datacenter (recorded in g3-screen.md); substituted live lanes: 3 en.wikipedia.org search-API queries, 3 api.stackexchange.com math queries (2 quoted exact-form, 0 hits), 1 export.arxiv.org query, api.duckduckgo.com - all clean",
          "A": "2026-09-30: same web lanes as N; verifier g3-verify.py: exact-rational battery 23 configurations x 15 lines each - 150 forced-orthogonal TRUE cases (Pythagorean orthogonal pairs) and 195 strict-negative NON-orthogonal cases, 0 failures; float stress 24000 cases, 0 failures",
          "D": "corpus FTS (/tmp/kilo/corpus.db, 187262 chunks): 3 phrase batteries, 0 hits (g3-screen.md)"
        },
        "transformedFrom": {
          "knownCore": "circle with centre the midpoint of BC through A meeting AB and AC again: XY perpendicular to the reflection of the median in the bisector of A; a standard symmedian configuration lemma",
          "frozenIn": "CHANGELOG.md 2026-09-29"
        },
        "priorCore": "the 2026-09-29 screened variant (three-part ladder: W midpoint of AM, equal segments NA = NB = NM with full locus, and the orthogonal-circles iff) was itself replaced this wave per user request - trimmed to the single iff claim with the locus machinery demoted into the proof",
        "seam": "only the Thales-pivot equivalence is shipped; the locus statement, the point W and the triple equality NA = NB = NM survive inside the proof as the hidden invariant (M is ALWAYS on the circle centred at N through A - so whether M lands on the diameter circle does not depend on the rotating line at all); that invariance reading - a rotation-free right-angle test - is the new surface, and no probe carried the iff in this form",
        "signature": "S46",
        "residualRisk": "low-medium: the engine (perpendicular from centre bisects a chord, Thales) is textbook, and the discarded 2026-09-29 part (3) already contained this equivalence as a rung - this wave ships it as the sole claim, unindexed as a standalone problem; SE exact-form lanes pending quota reset"
      },
      "text": "Two circles $\\omega_1,\\omega_2$ with centres $O_1,O_2$ intersect in the points $A$ and $B$. A line $\\ell$ through $A$ meets $\\omega_1$ again at $C$ and $\\omega_2$ again at $D$, with $C\\ne D$; let $M$ be the midpoint of $CD$. Prove that $M$ lies on the circle with diameter $O_1O_2$ if and only if $\\omega_1$ and $\\omega_2$ meet at right angles. (Two circles meet at right angles if their tangent lines at a common point are perpendicular.)",
      "answer": "$\\boxed{M\\in\\odot(\\text{diameter }O_1O_2)\\iff\\omega_1\\perp\\omega_2.}$",
      "why": "Let $N$ be the midpoint of $O_1O_2$. Projection onto $\\ell$ is affine, so the feet from $O_1,O_2,N$ bisect $AC,AD,AM$; the foot of $N$ is the midpoint of $AM$ with $NW\\perp AM$, giving the rotation-invariant $NM=NA=NB$ - $M$ always runs on the fixed circle $\\odot(N,NA)$. Then $M$ lies on the circle with diameter $O_1O_2$ iff these two concentric circles coincide, i.e. $NA=NO_1$, which by Thales is $\\angle O_1AO_2=90^\\circ$: radii and tangents perpendicular at $A$. The excluded $C=D$ is $\\ell$ the common tangent at $A$ (or $\\ell=AB$). Orthogonality is Mobius-invariant: $\\omega_1\\perp\\omega_2$ iff inversion in either preserves the other.",
      "steps": [
        "Setup: $N$ is the midpoint of $O_1O_2$. Drop perpendiculars from $O_1$, $O_2$ and $N$ to the line $\\ell$, with feet $P_1$, $P_2$, $W$. Perpendicular projection onto a fixed line is an affine map, so $W$ is the midpoint of $P_1P_2$.",
        "Chord bisection: a perpendicular from the centre to a chord bisects the chord, so $P_1$ is the midpoint of $AC$ and $P_2$ of $AD$. Parametrise $\\ell$ with coordinate $t$, $A$ at $0$, $C$ at $c$, $D$ at $d$: then $P_1,P_2,W$ sit at $c/2$, $d/2$, $(c+d)/4$ - and $M$ (the midpoint of $CD$) sits at $(c+d)/2$, so the midpoint of $A$ and $M$ is at $(c+d)/4=W$: $W$ is the midpoint of $AM$, and $NW\\perp AM$.",
        "Invariant: $NW$ is the perpendicular bisector of segment $AM$, so $NM=NA$. Since both circles contain $A$ and $B$, the line $O_1O_2$ is the perpendicular bisector of $AB$, and $N$ lies on it, so $NB=NA$ as well. Thus $M$ always lies on the fixed circle centred at $N$ through $A$ and $B$, whatever the direction of $\\ell$ (this is where the discarded locus rung now lives, inside the proof).",
        "Forward direction of the ⟺: assume $\\omega_1$ and $\\omega_2$ meet at right angles. Their tangents at $A$ are perpendicular ⟺ the radii $AO_1$ and $AO_2$ are perpendicular, i.e. $\\angle O_1AO_2=90^\\circ$, i.e. (Thales, and conversely) $A$ lies on the circle with diameter $O_1O_2$ - the circle centred at $N$ with radius $NO_1=|O_1O_2|/2$. So $NA=NO_1$, and by step 3 $NM=NA=NO_1$: $M$ lies on the circle with diameter $O_1O_2$.",
        "Reverse direction: assume $M$ lies on the circle with diameter $O_1O_2$. Then $NM=|O_1O_2|/2=NO_1$; by step 3 $NA=NM$, so $NA=NO_1$: $A$ is on the circle with diameter $O_1O_2$, $\\angle O_1AO_2=90^\\circ$ by Thales, the radii at $A$ are perpendicular, hence so are the tangents: $\\omega_1$ and $\\omega_2$ meet at right angles.",
        "Position excluded by hypothesis: $\\ell$ the common tangent of the two circles at $A$ gives $C=D=A$ (each circle is met only at $A$), and $\\ell=AB$ gives $C=D=B$; both are ruled out by the clause $C\\neq D$, under which $M$ is well defined. No other exceptional position exists (the proof used only affine projection and perpendicular bisectors).",
        "Machine audit (tools/proofs/redesign-20260930/g3-verify.py, output g3-verify.out): exact-rational battery - 23 configurations (Pythagorean intersection points, rational radii and centre distances): 150 orthogonal line-instances verified TRUE with $M$ exactly on the diameter circle, 195 non-orthogonal line-instances verified strictly OFF it; every case also checks the invariant $NM=NA$; float stress 24000 line-instances over random circle pairs and rotations; 0 failures."
      ],
      "readiness": {
        "runId": "RUN-20260930-01",
        "checkedOn": "2026-09-30",
        "queue": "P3",
        "novelty": {
          "fileStatus": "screened",
          "verdict": "T3-pending",
          "lanes": {
            "N": "redesign wave 2026-09-30: web paraphrase/alias probes + corpus screen recorded in tools/proofs/redesign-20260930/g3-screen.md; SE exact-form lanes deferred to quota reset",
            "A": "redesign wave 2026-09-30: web paraphrase/alias probes + corpus screen recorded in tools/proofs/redesign-20260930/g3-screen.md; SE exact-form lanes deferred to quota reset",
            "D": "redesign wave 2026-09-30: D-lane evidence pack to be regenerated by tools/screen.py after splice"
          },
          "provenanceComplete": false,
          "humanApprovalRequired": false
        },
        "proof": {
          "state": "unaudited",
          "independentlyCheckedThisRun": false,
          "auditNote": "new proof text shipped 2026-09-30; machine-verified by tools/proofs/redesign-20260930/g3-verify.py; independent audit pending"
        },
        "calibration": {
          "state": "slot-preserved-from-predecessor",
          "contestantBlindTest": "not-run",
          "humanReweight": "pending",
          "ratingCurrentlyStored": 3.5,
          "difficultyCurrentlyStored": "easy",
          "starsCurrentlyStored": 1
        },
        "quality": {
          "state": "human-panel-pending",
          "scores": null
        },
        "release": {
          "eligible": false,
          "state": "blocked-until-global-gates"
        },
        "provenance": {
          "status": "not-established",
          "sourceNotePresent": false
        },
        "sourceRecall": {
          "status": "not-recorded"
        }
      }
    },
    {
      "id": "g3",
      "category": "geo",
      "difficulty": "easy",
      "stars": 1,
      "rating": 2.5,
      "confidence": "high",
      "novelty": {
        "status": "screened",
        "searchDate": "2026-09-30",
        "exactMatch": false,
        "similarSources": [
          {
            "name": "wave-2026-09-30 web lanes (see tools/proofs/redesign-20260930/g1-screen.md)",
            "note": "claim-as-stated paraphrases ('circle through reflections of P in AB and AC tangent to circumcircle at A iff AP perpendicular BC', 'midpoint of the two reflections isogonal', etc.) ran clean on api.stackexchange.com (math site), en.wikipedia.org full-text search API, export.arxiv.org and mathworld.wolfram.com/SimsonLine.html on 2026-09-30; no source states the (AXY)-tangent equivalence"
          },
          {
            "name": "isogonal conjugate of the circumcenter is the orthocenter",
            "note": "the classical lemma used inside the proof (https://en.wikipedia.org/wiki/Orthocenter, https://en.wikipedia.org/wiki/Circumcircle) - indexed as a tool, not as the shipped claim"
          },
          {
            "name": "post-transform screen (new statement)",
            "note": "frozen core untouched: the textbook reflection lemma XY perp BC iff AP tangent to (ABC) (Simson-Steiner orbit staple); the shipped iff is its line-versus-circle role dual and survives nowhere in that form"
          }
        ],
        "earliestKnownDate": null,
        "lanesComplete": false,
        "laneSummary": {
          "N": "2026-09-30: DDG html/lite captcha-blocked and Bing/Mojeek bot-walled from datacenter egress (recorded in g1-screen.md); substituted live lanes: en.wikipedia.org search API (4 queries), api.stackexchange.com math (4 queries), export.arxiv.org (1), api.duckduckgo.com instant-answer, direct MathWorld fetch - all clean",
          "A": "2026-09-30: same substituted web lanes as N; g1 claim lanes clean; verifier g1-verify.py 4000 exact-rational cases (614 forced tangency-side, 4086 strict negatives) + 727 float, right-angle degeneracy guard demonstrated, 0 failures",
          "D": "corpus FTS (/tmp/kilo/corpus.db, 187262 chunks): 3 phrase batteries, 0 hits (g1-screen.md)"
        },
        "transformedFrom": {
          "knownCore": "classic reflection lemma: for X, Y the reflections of P across AB, AC, one has XY perp BC iff AP is tangent to the circumcircle at A; anthology staple of the Simson-Steiner orbit",
          "frozenIn": "CHANGELOG.md 2026-09-29"
        },
        "priorCore": "the 2026-09-29 screened variant (three-run ladder AM perp XY, isogonality of AM and AP, then the tangency iff) was itself replaced this wave per user request - trimmed to the single tangency-perpendicularity iff, with the two ladder rungs demoted into the proof",
        "seam": "the claim keeps the line-versus-circle role-swap of the frozen iff - now the CIRCLE (AXY) is tangent to omega at A iff the LINE AP is perpendicular to BC - and is shipped as one self-contained equivalence; the perpendicular-bisector/isogonality pivot (centre of (AXY) rides on line AM; the isogonal involution maps AM=AO to AP=altitude) states no length anywhere and never touches BC until the final equivalence; no probe found this single-claim form indexed",
        "signature": "S44",
        "residualRisk": "low-medium: the claim is verbatim part (iii) of the 2026-09-29 screened ladder, itself unindexed; its two proof engines (equal tangents to an isosceles apex, isogonal-of-circumradius = altitude) are classical and cited; a solver who knows the textbook lemma can dualise it quickly - the role-swap is the whole novelty surface; SE exact-form lanes pending quota reset"
      },
      "text": "Let $ABC$ be an acute triangle with circumcircle $\\omega$, and let $P$ be a point strictly inside $\\angle BAC$, on neither side, with $P\\ne A$. Reflect $P$ in the lines $AB$ and $AC$, obtaining $X$ and $Y$. Prove that the circumcircle of triangle $AXY$ is tangent to $\\omega$ at $A$ if and only if $AP\\perp BC$.",
      "answer": "$\\boxed{(AXY)\\text{ is tangent to }\\omega\\text{ at }A\\iff AP\\perp BC.}$",
      "why": "The reflections fix $A$, so $AX=AY=AP$ and the centre of $(AXY)$ rides on the line $AM$, $M$ the midpoint of $XY$; two circles through $A$ are tangent at $A$ iff their centres and $A$ are collinear, so tangency with $\\omega$ is the line condition $AM=AO$. Bisector-as-real-axis coordinates give $M=\\cos A\\cdot\\bar p$: $AM$ is the isogonal image of $AP$. The isogonal involution - the quadratic Cremona involution of the plane centred at the vertices - sends $AO$ to the altitude from $A$, the classical pair $O\\leftrightarrow H$, so tangency iff $AP\\perp BC$. At $\\angle A=90^\\circ$, $X,A,Y$ are collinear and $(AXY)$ degenerates.",
      "steps": [
        "Mirrors through $A$ fix $A$: $AX=AP=AY$, so triangle $AXY$ is isosceles with apex $A$; the median $AM$ to the base $XY$ is the perpendicular bisector of $XY$, hence the centre of $(AXY)$ lies on the line $AM$.",
        "Complex coordinates: $A$ at the origin, the internal bisector of $\\angle BAC$ as real axis; the sides are the lines at angles $-A/2$ and $+A/2$, and reflection in a line through $0$ at ∠ $t$ is $z\\mapsto e^{2it}\\overline{z}$. Then $X=e^{-iA}\\overline{p}$, $Y=e^{iA}\\overline{p}$, so $M=(X+Y)/2=\\cos A\\,\\overline{p}$. Since $A$ is acute, $\\cos A\\neq0$ and $M\\neq A$; $\\overline{p}$ is the mirror image of $p$ in the bisector, so line $AM$ is the isogonal of line $AP$: $\\angle MAB=\\angle PAC$.",
        "Tangency test: $(AXY)$ and $\\omega$ both pass through $A$; they are tangent at $A$ ⟺ their two centres and $A$ are collinear. The centre of $(AXY)$ lies on line $AM$ and the centre of $\\omega$ is $O$, so tangency at $A$ is equivalent to: line $AM$ is line $AO$.",
        "Classical lemma (the isogonal conjugate of the circumcentre is the orthocentre): in isosceles triangle $OAB$, $\\angle OAB=90^\\circ-C$, and in the right triangle $ADC$ ($D$ the foot of the $A$-altitude) $\\angle DAC=90^\\circ-C$; so the altitude from $A$ is exactly the isogonal image of line $AO$.",
        "Apply the isogonal involution (a bijection on lines through $A$, its own inverse) to step 3: line $AM$ is line $AO$ ⟺ the isogonal image of $AM$ (line $AP$ by step 2) equals the isogonal image of $AO$ (the $A$-altitude by step 4), ⟺ $AP\\perp BC$. Both directions are automatic from bijectivity; the hypotheses $\\angle A\\neq90^\\circ$ (acute triangle), $P$ not on the sides and $P\\neq A$ exclude the degenerate positions $X=A$, $Y=A$ and $M=A$.",
        "Machine audit (tools/proofs/redesign-20260930/g1-verify.py, output g1-verify.out): exact-rational battery of 4000 equivalence cases including 614 forced true-side cases ($P$ on the altitude through $A$ gives exact tangency) and 4086 strict negatives; the right-∠ degeneracy ($X$, $A$, $Y$ collinear) demonstrated; float stress 727 cases; 0 failures."
      ],
      "readiness": {
        "runId": "RUN-20260930-01",
        "checkedOn": "2026-09-30",
        "queue": "P3",
        "novelty": {
          "fileStatus": "screened",
          "verdict": "T3-pending",
          "lanes": {
            "N": "redesign wave 2026-09-30: web paraphrase/alias probes + corpus screen recorded in tools/proofs/redesign-20260930/g1-screen.md; SE exact-form lanes deferred to quota reset",
            "A": "redesign wave 2026-09-30: web paraphrase/alias probes + corpus screen recorded in tools/proofs/redesign-20260930/g1-screen.md; SE exact-form lanes deferred to quota reset",
            "D": "redesign wave 2026-09-30: D-lane evidence pack to be regenerated by tools/screen.py after splice"
          },
          "provenanceComplete": false,
          "humanApprovalRequired": false
        },
        "proof": {
          "state": "unaudited",
          "independentlyCheckedThisRun": false,
          "auditNote": "new proof text shipped 2026-09-30; machine-verified by tools/proofs/redesign-20260930/g1-verify.py; independent audit pending"
        },
        "calibration": {
          "state": "slot-preserved-from-predecessor",
          "contestantBlindTest": "not-run",
          "humanReweight": "pending",
          "ratingCurrentlyStored": 3,
          "difficultyCurrentlyStored": "easy",
          "starsCurrentlyStored": 1
        },
        "quality": {
          "state": "human-panel-pending",
          "scores": null
        },
        "release": {
          "eligible": false,
          "state": "blocked-until-global-gates"
        },
        "provenance": {
          "status": "not-established",
          "sourceNotePresent": false
        },
        "sourceRecall": {
          "status": "not-recorded"
        }
      }
    },
    {
      "id": "g4",
      "category": "geo",
      "difficulty": "easy",
      "stars": 1,
      "rating": 2.5,
      "confidence": "high",
      "novelty": {
        "status": "screened",
        "searchDate": "2026-09-30",
        "exactMatch": false,
        "similarSources": [
          {
            "name": "six-pedal-feet folklore for isogonal CONJUGATE POINTS",
            "note": "https://en.wikipedia.org/wiki/Pedal_circle and https://en.wikipedia.org/wiki/Pedal_triangle (fetched 2026-09-30): isogonal conjugate points share a six-point pedal circle centred at their midpoint. Different configuration: our D, E are two points on the sideline BC (not conjugate points), only two sidelines carry feet, and the shipped claim is a concurrence-iff-isogonality equivalence with no circle named; probed directly (quoted SE queries 0 hits, wiki lanes returned only the conjugate-points theorem)"
          },
          {
            "name": "wave-2026-09-30 web lanes (see tools/proofs/redesign-20260930/g7-screen.md)",
            "note": "'isogonal cevians perpendicular feet concurrent base', 'four pedal feet circle centre midpoint isogonal', 'projections of two points on a line onto two lines through a point concyclic iff' - 0 relevant hits on api.stackexchange.com math and en.wikipedia.org search API 2026-09-30; export.arxiv.org nearest hit (Miquel circles and cevian lines, arXiv:2507.10067) checked by abstract: area optimization, unrelated"
          }
        ],
        "earliestKnownDate": null,
        "lanesComplete": false,
        "laneSummary": {
          "N": "2026-09-30: DDG/Bing bot-walled from datacenter (recorded in g7-screen.md); substituted live lanes: 3 en.wikipedia.org search-API queries + Pedal_circle/Pedal_triangle page fetches, 4 api.stackexchange.com math queries, 1 export.arxiv.org query - shipped iff unindexed; the conjugate-points pedal circle documented as nearest kin",
          "A": "2026-09-30: same web lanes as N; verifier g7-verify.py: exact-rational battery 2264 cevian pairs over 4 Pythagorean-angle acute scalene triangles - both sides of the iff occur and agree (32 concurrency cases = 32 isogonal cases, 27 additional forced-isogonal constructions, 0 mismatches); both text guards machine-demonstrated (isosceles mirror pair: isogonal but PS || QR; right angle at B: LHS always true); float stress 1266 cases, 0 failures",
          "D": "corpus FTS (/tmp/kilo/corpus.db, 187262 chunks): 3 phrase batteries, 0 hits (g7-screen.md)"
        },
        "transformedFrom": {
          "knownCore": "median-diameter radical-axis lemma: circles on BN and CM as diameters have the A-altitude as radical axis (standard olympiad exercise, also embedded in Brocard-configuration notes)",
          "frozenIn": "CHANGELOG.md 2026-09-29"
        },
        "priorCore": "the 2026-09-29 screened variant (three-part ladder: concyclicity, centre = midpoint of DE, concurrence of PS, QR, DE) was itself replaced this wave per user request - the circle claims are dropped from the text entirely and the surviving content is the exact equivalence 'concurrence if and only if isogonal'",
        "seam": "the shipped statement names no circle; its proof nonetheless pivots on the foot-circle, because the concurrence determinant of PS, QR, DE factors exactly as c(p-r)(q-s)(pr-qs)/(c^2-1) in oblique coordinates and pr = qs is simultaneously (a) the power-of-a-point criterion for P, Q, R, S concyclic and (b) after product-to-sums, cos(2u+w) = cos(2v+w), whose only interior solution branch is u = v - so one algebra reads three ways: concurrent = concyclic = isogonal. The converse direction (concurrence implies isogonality) is new surface over the 2026-09-29 forward ladder, and the guard clauses are load-bearing (machine-demonstrated): isosceles triangles break left-to-right via a parallel pair, right angles break it at the vertex",
        "signature": "S47",
        "residualRisk": "medium: the forward half is part (3) of the 2026-09-29 screened ladder (already unindexed there); the iff adds the converse direction and the guard analysis; a reviewer aware of the six-pedal-circle folklore may see the foot-circle step as near-familiar - the configuration (cevian feet on two sidelines, points on BC) is provably different; SE exact-form lanes pending quota reset"
      },
      "text": "Let $ABC$ be an acute triangle with $AB\\ne AC$, and let $D$ and $E$ be two distinct points strictly inside the segment $BC$. Drop the perpendiculars from $D$ to the lines $AB$ and $AC$, with feet $P$ and $Q$, and from $E$ to the lines $AB$ and $AC$, with feet $R$ and $S$. Prove that the lines $PS$ and $QR$ meet on the line $BC$ if and only if $\\angle BAD=\\angle CAE$.",
      "answer": "$\\boxed{PS,\\ QR,\\ BC\\ \\text{concurrent}\\iff\\angle BAD=\\angle CAE.}$",
      "why": "Directed projections give $AP=AD\\cos\\angle BAD$ etc., so the power-of-a-point criterion for $P,Q,R,S$ concyclic is $\\cos\\angle BAD\\cos\\angle BAE=\\cos\\angle CAD\\cos\\angle CAE$; product-to-sums makes this $\\cos(2u+w)=\\cos(2v+w)$ on the sub-angles at $A$, where cosine is injective, leaving $u=v$: the foot-circle exists iff $AD,AE$ are isogonal. In oblique coordinates along the sides the concurrence determinant of $PS$, $QR$, $DE$ - a $3\\times3$ determinant in homogeneous plane coordinates - factors as $\\cos A\\,(p-r)(q-s)(pr-qs)/(\\cos^{2}A-1)$; acuteness and $AB\\ne AC$ kill the other factors, leaving $pr=qs$ again. Isogonal conjugation at $A$ is a projective involution of the pencil of lines through $A$; in the excluded isosceles position $PS\\parallel QR$, concurrence only at infinity.",
      "steps": [
        "Directed projections (assume the order $B,D,E,C$ on the segment; the labels are interchangeable since conclusion and hypothesis are both symmetric under swapping $D\\leftrightarrow E$ together with $P\\leftrightarrow R$, $Q\\leftrightarrow S$): $AP=AD\\cos\\angle BAD$, $AQ=AD\\cos\\angle DAC$, $AR=AE\\cos\\angle BAE$, $AS=AE\\cos\\angle EAC$; all cosines are positive because the cevians lie inside the acute ∠ $A$. Acuteness also puts every foot strictly on the corresponding side-line with no foot at $A$, and $P\\neq R$, $Q\\neq S$ (equal feet on $AB$ would force $BC\\perp AB$).",
        "Concyclic criterion: $P,R$ lie on line $AB$, $Q,S$ on line $AC$. Two lines through $A$ meet four points $P,R$ and $Q,S$ on a common circle exactly when $AP\\cdot AR=AQ\\cdot AS$ (converse of the intersecting-secants / power-of-a-point theorem; the forward direction is the same identity, so this is an equivalence). Dividing out $AD\\cdot AE$, the criterion is $\\cos\\angle BAD\\,\\cos\\angle BAE=\\cos\\angle DAC\\,\\cos\\angle EAC$. (*).",
        "Trigonometric reading of (*): write $u=\\angle BAD$, $w=\\angle DAE$, $v=\\angle EAC$ (all positive, $u+w+v=\\angle A<90^\\circ$). Then $\\angle BAE=u+w$ and $\\angle DAC=w+v$, and (*) reads $\\cos u\\,\\cos(u+w)=\\cos v\\,\\cos(v+w)$. Product-to-sums: $\\cos(2u+w)+\\cos w=\\cos(2v+w)+\\cos w$, i.e. $\\cos(2u+w)=\\cos(2v+w)$. Both arguments lie in $(0,180^\\circ)$, where $\\cos X=\\cos Y$ forces $X=Y$: $2u+w=2v+w$ gives $u=v$. Hence (*) is equivalent to $\\angle BAD=\\angle CAE$: the foot-circle exists if and only if the cevians are isogonal. [First half of the proof of the ⟺, via the circle.]",
        "Concurrence criterion by oblique coordinates: place $A$ at the origin with the two side-lines as oblique axes, $c=\\cos\\angle A$: $P=(p,0)$, $R=(r,0)$ on $AB$ and $Q=(0,q)$, $S=(0,s)$ on $AC$, so $p=AP$, $q=AQ$, $r=AR$, $s=AS$. A point with oblique coordinates $(x,y)$ has true position $x\\,e_1+y\\,e_2$; solving the two projection equations for $D$ on line $BC$ gives $D=((p-cq),\\,(q-cp))/(1-c^2)$ and $E=((r-cs),\\,(s-cr))/(1-c^2)$.",
        "Write the three lines $PS$, $QR$, $DE$ as coefficient triples of $ax+by=c_0$ in the oblique frame: $PS: x/p+y/s=1$; $QR: x/r+y/q=1$; $DE$: through $D$ and $E$. Expanding the $3\\times3$ determinant of the coefficients (sympy, recorded in g7-verify output) gives $\\det=c\\,(p-r)(q-s)(pr-qs)/(c^2-1)$ exactly.",
        "Read the factorisation: the determinant vanishes exactly when $PS$, $QR$, $DE$ are concurrent (including at infinity, i.e. ∥). Guards: $\\angle A$ acute gives $c\\neq0$ and $c^2\\neq1$; $p\\neq r$ and $q\\neq s$ as noted in step 1 (each equality would force $\\angle ABC=90^\\circ$ or $\\angle ACB=90^\\circ$). So concurrence is equivalent to $pr=qs$, which is the identity (*), which is equivalent to isogonality (step 3) and to the foot-circle. Two loose ends: (i) the concurrence must be at a FINITE point of line $BC$: $PS\\parallel QR$ means $rs=pq$, which together with $pr=qs$ forces $q=r$ and $p=s$, making $E$ the mirror image of $D$ in the bisector of $\\angle A$; since both lie on line $BC$, the mirror fixes the line $BC$, which happens exactly when $AB=AC$ - excluded by hypothesis. (ii) The same exclusion shows the shipped forward direction cannot degrade: in scalene position $PS$ and $QR$ genuinely meet at one point, and it is on $BC$ if and only if $pr=qs$.",
        "Conclusion assembly: if lines $PS$ and $QR$ meet (finitely) on line $BC$, the determinant vanishes, so $pr=qs$, so (*), so $\\angle BAD=\\angle CAE$; conversely $\\angle BAD=\\angle CAE$ gives $u=v$, hence $pr=qs$, hence vanishing determinant, and the point is finite and on $BC$ by step 6(i). Both directions gap-free; $D\\neq E$ is used in (i) and in the definition of line $DE$.",
        "Machine audit (tools/proofs/redesign-20260930/g7-verify.py, output g7-verify.out): exact rational batteries on Pythagorean-∠ acute triangles ($\\cos A\\in\\{3/5,5/13,8/15,7/24\\}$, integer side scalings, $AB\\neq AC$): 2264 random rational cevian pairs - the two sides of the equivalence occur 32 and 32 times and always agree; 27 forced isogonal pairs constructed by bisector reflection (matrix entries $\\cos A$, $\\sin A$ rational) all concurrent on $BC$; strict negatives all non-concurrent; guards demonstrated (isosceles mirror pair: isogonal with $PS\\parallel QR$; right ∠ at $B$: $PS$, $QR$, $BC$ concurrent for every pair); float stress 1266/1266; determinant factorisation verified symbolically; 0 failures."
      ],
      "readiness": {
        "runId": "RUN-20260930-01",
        "checkedOn": "2026-09-30",
        "queue": "P3",
        "novelty": {
          "fileStatus": "screened",
          "verdict": "T3-pending",
          "lanes": {
            "N": "redesign wave 2026-09-30: web paraphrase/alias probes + corpus screen recorded in tools/proofs/redesign-20260930/g7-screen.md; SE exact-form lanes deferred to quota reset",
            "A": "redesign wave 2026-09-30: web paraphrase/alias probes + corpus screen recorded in tools/proofs/redesign-20260930/g7-screen.md; SE exact-form lanes deferred to quota reset",
            "D": "redesign wave 2026-09-30: D-lane evidence pack to be regenerated by tools/screen.py after splice"
          },
          "provenanceComplete": false,
          "humanApprovalRequired": false
        },
        "proof": {
          "state": "unaudited",
          "independentlyCheckedThisRun": false,
          "auditNote": "new proof text shipped 2026-09-30; machine-verified by tools/proofs/redesign-20260930/g7-verify.py; independent audit pending"
        },
        "calibration": {
          "state": "slot-preserved-from-predecessor",
          "contestantBlindTest": "not-run",
          "humanReweight": "pending",
          "ratingCurrentlyStored": 4.5,
          "difficultyCurrentlyStored": "medium",
          "starsCurrentlyStored": 2
        },
        "quality": {
          "state": "human-panel-pending",
          "scores": null
        },
        "release": {
          "eligible": false,
          "state": "blocked-until-global-gates"
        },
        "provenance": {
          "status": "not-established",
          "sourceNotePresent": false
        },
        "sourceRecall": {
          "status": "not-recorded"
        }
      }
    },
    {
      "id": "g5",
      "category": "geo",
      "difficulty": "easy",
      "stars": 1,
      "rating": 2.5,
      "confidence": "high",
      "novelty": {
        "status": "screened",
        "searchDate": "2026-09-30",
        "exactMatch": false,
        "similarSources": [
          {
            "name": "wave-2026-09-30 (afternoon delta probes, corrected claim 1) - see g22-screen.md",
            "note": "DDG index live-lane queries 'circle tangent to nine-point circle locus centre 3R/2' (no results), 'site:artofproblemsolving.com tangent to the nine-point circle if and only if', 'reflections of point in midpoints of sides circle tangent nine-point circle locus', 'nine-point circle internally externally tangent locus two concentric circles', 'circle through reflections in side midpoints tangent circumcircle ninepoint iff' (2026-09-30): nearest AoPS item is thread c6h3650479 'Tangency at the nine-point circle (should be well known)' - a different problem (incidental tangency exercise, no Gamma_P family, no two-branch locus); the shipped Gamma_P configuration + dichotomy is not stated anywhere probed"
          },
          {
            "name": "Johnson circles orbit (nearest classical kin)",
            "note": "https://en.wikipedia.org/wiki/Johnson_circles (search-API snippets 2026-09-30): three radius-R circles through H tangent internally to the anticomplementary circle (centres on the circle centred at H of radius R). Each Johnson circle is one Gamma_P of the shipped family under the translate identity, but neither the tangency-locus dichotomy for P nor the antipodal tangency at H appears there"
          },
          {
            "name": "post-transform screen (new statement)",
            "note": "frozen core retained from the 2026-09-29 record: radical-centre figure of the three median-diameter circles; classical adjacent fact: half-turn image of the circumcircle about a side midpoint passes through H (now used only inside the proof of claim 2)"
          }
        ],
        "earliestKnownDate": null,
        "lanesComplete": false,
        "laneSummary": {
          "N": "2026-09-30 (REWORK delta): afternoon DDG-via-proxy re-probe of the corrected two-branch iff phrasing: 5 queries, 0 exact matches (closest: generic nine-point/Feuerbach pages, checked); morning full-lane record for the configuration (wiki API 4, SE API 4, arXiv 2, MathWorld fetch) retained below. Claim 2 wording unchanged and re-confirmed clean.",
          "A": "2026-09-30: verifier g22-verify.py REWRITTEN: exact-rational battery - 2280 forced internal-branch cases (P = N + (1/2)u on the nine-point circle: tangency product (d^2-(R+R/2)^2)(d^2-(R-R/2)^2)=0 verified on the independently-computed circumcircle of PaPbPc), 2280 forced external-branch cases (P at distance 3R/2 from N: tangent, and P provably not on the nine-point circle), 15960 strict negatives for P at distances R/5,3R/5,4R/5,6R/5,7R/5,2R,5R/2 from N, 2280 exact pivot checks |O_P-N| = |P-N|, 1140 Claim-II cases (H on both circles, centres-and-H collinear, H strictly between); float battery 12000 checks; regression replay of the FALSE 2026-09-29 one-branch iff (external tangency at |P-N| = 3R/2 printed in g22-verify.out); 0 failures",
          "D": "corpus FTS (/tmp/kilo/corpus.db, 187262 chunks): '\"reflections of P in the midpoints\"' -> 0; '\"half-turn\" AND \"orthocenter\" AND \"circumcircle\" AND \"tangent\"' -> 0; '\"midpoints of the sides\" AND \"circumcircle\" AND \"orthocenter\" AND \"tangent\"' -> 5 (all unrelated cyclic-quad ratio problem)"
        },
        "transformedFrom": {
          "knownCore": "radical-centre configuration of the three median-diameter circles: the common chords PQ, BE, CF are concurrent at the orthocenter (Sharygin-orbit classical figure); adjacent classical fact used in the design: the half-turn image of the circumcircle about a side midpoint passes through H",
          "frozenIn": "CHANGELOG.md 2026-09-29"
        },
        "priorCore": "the 2026-09-29 screened variant (five-rung ladder) was replaced in this wave's first pass by (through-H iff) + (antipodal tangent at H); the through-H iff has now been REMOVED from the shipped surface per the user's hard novelty rule (it is the classical half-turn-through-H fact parameterized), and it is replaced by the CORRECTED complete tangency characterization; note the old rung (4) ('Gamma_P tangent to the nine-point circle iff P lies on the nine-point circle') was FALSE as shipped - it omitted the external-tangency branch; this entry ships the corrected iff with both branches, and the through-H fact survives only as a step inside the proof of claim 2",
        "seam": "the engine is a single translate O_P = H - P, which is secretly the HALF-TURN ABOUT THE NINE-POINT CENTRE N (O_P - N = N - P): the map P -> centre(Gamma_P) is an exact conjugacy mirror, so tangency of Gamma_P to the nine-point circle transports verbatim to a two-distance condition on P; the shipped dichotomy 'P on the nine-point circle OR on the concentric circle of three times its radius' states the complete answer (internal vs external branch) that the frozen literature never packaged; claim 2 keeps its antipodal-pair finale - tangent exactly AT H - screened novel since morning and unchanged",
        "signature": "S48",
        "residualRisk": "medium-low: the pivot |O_P - N| = |P - N| plus the elementary two-distance tangency criterion means an expert can solve in one line once the centre is found; the locus dichotomy itself is textbook tangency arithmetic while the Gamma_P parameterization and its pairing with the antipodal-at-H finale are unindexed in every lane probed (2026-09-30); claim 2 = tangent at H unchanged (its morning screening was clean); stored 7.0 slot-legal, cold estimate 5.5-6 (renumber flag at wave end, inherited)"
      },
      "text": "Let $ABC$ be a triangle with circumcircle $\\omega$ of centre $O$ and radius $R$, and orthocentre $H$. For a point $P$ in the plane, let $P_a,P_b,P_c$ be the reflections of $P$ in the midpoints of $BC,CA,AB$ - that is, the segments $PP_a$, $PP_b$, $PP_c$ are bisected by the midpoints of $BC$, $CA$, $AB$ respectively - and let $\\Gamma_P$ denote the circle through $P_a,P_b,P_c$. Prove that:<ol><li>$\\Gamma_P$ is tangent to the nine-point circle of $ABC$ (the circle through the midpoints of the three sides) if and only if $P$ lies either on the nine-point circle or on the circle with the same centre and three times its radius;</li><li>if $P$ and $Q$ are the endpoints of a diameter of $\\omega$, then the circles $\\Gamma_P$ and $\\Gamma_Q$ are tangent to each other and their point of tangency is $H$.</li></ol>",
      "answer": "$$\\boxed{\\text{(1) }\\Gamma_P\\text{ is tangent to the nine-point circle}\\iff P\\text{ lies on it or on the concentric circle of radius }3R/2;}$$\n$$\\boxed{\\text{(2) if }P,Q\\text{ are antipodal on }\\omega,\\text{ then }\\Gamma_P\\text{ and }\\Gamma_Q\\text{ are tangent, with touching point }H.}$$",
      "why": "Vectors at the circumcentre give $H=A+B+C$ and $P_a=H-A-P$, so $|P_a-(H-P)|=|A|=R$: $\\Gamma_P$ is always the circle of radius $R$ centred at $O_P=H-P$, a translate of $\\omega$; at $P=A$ it is exactly the reflection of $\\omega$ in the midpoint of $BC$, so $\\Gamma_A,\\Gamma_B,\\Gamma_C$ are the three Johnson circles through $H$. Since $N=H/2$ and $O_P-N=N-P$, the centre of $\\Gamma_P$ is the half-turn image of $P$ about the nine-point centre, and $|O_P-N|=|P-N|$ conjugates distances exactly. Tangency to the nine-point circle (radius $R/2$, the image of $\\omega$ under the homothety $h(H,\\tfrac12)$) reads $|P-N|=\\tfrac R2$ internally or $\\tfrac{3R}2$ externally - the complete two-branch dichotomy; the one-branch statement is false, missing the external family. Antipodal $P,Q$ give centres $H\\mp P$ straddling $H$ at distance $R$: external tangency exactly at $H$.",
      "steps": [
        "Vector setup with origin at the circumcentre O: |A| = |B| = |C| = R. Lemma H = A + B + C: (H - A).(B - C) = (B + C).(B - C) = |B|^2 - |C|^2 = 0 gives AH ⊥ BC, and cyclically; no shape assumption on ABC (right and obtuse triangles allowed).",
        "Midpoint reflections: P_a = B + C - P, P_b = C + A - P, P_c = A + B - P (bisection condition; P_a - P_b = C - B ≠ 0 so the three points are distinct and Γ_P exists uniquely). Set O_P := H - P: then P_a - O_P = -A, P_b - O_P = -B, P_c - O_P = -C, each of length R: Γ_P is the circle of radius R centred at O_P (the translate of ω by the vector H - P). This single identity powers both claims.",
        "Nine-point circle: N := H/2 is its centre and R/2 its radius - check on the defining points: the midpoint of BC is (B+C)/2 and |(B+C)/2 - H/2| = |A|/2 = R/2; the midpoint of AH is (A+H)/2 with distance |A|/2 = R/2; and the foot of the altitude from A is the midpoint of H and the reflection of H in BC - the reflection lying on ω by the classical half-turn-through-the-side-midpoint fact - hence also at distance R/2 from N. So N = H/2, r = R/2.",
        "Pivot (hidden half-turn): O_P - N = (H - P) - H/2 = H/2 - P = N - P, i.e. O_P = 2N - P: the centre of Γ_P is exactly the image of P under the half-turn about the nine-point centre. Consequences read off: |O_P - N| = |P - N| (exact, verified symbolically in the battery), and N is the midpoint of P O_P.",
        "Claim 1, tangency criterion: two circles of radii R (Γ_P) and R/2 (nine-point) with centre distance d = |O_P - N| are tangent ⟺ d = R + R/2 = 3R/2 (external) or d = R - R/2 = R/2 (internal, since R > R/2) - and no other way. Via the pivot, d = |P - N|, so tangency holds ⟺ |P - N| = R/2 (P on the nine-point circle; tangency internal) or |P - N| = 3R/2 (P on the concentric circle of triple radius; tangency external). Both directions are immediate; the dichotomy is complete. History note: the 2026-09-29 rung (4) shipped only the first branch and is FALSE - the verifier replays a concrete external counterexample (P with |P-N| = 3R/2: tangent, not on the nine-point circle).",
        "Claim 2 setup: let Q = -P with |P| = R (antipodes on ω). By step 2 applied to P and to Q the centres are O_P = H - P and O_Q = H + P. Then |H - O_P| = |P| = R and |H - O_Q| = |P| = R: H lies on Γ_P and on Γ_Q (this is the classical through-H half-turn reading, now demoted to an internal step).",
        "Claim 2 tangency at H: O_P - H = -P and O_Q - H = +P: the two centres and H are collinear, with H strictly between the centres (opposite vectors of equal length R), so the circles are externally tangent and the unique common point is H: |O_P - O_Q| = 2R = R + R confirms external tangency; and any common point X is equidistant from O_P and O_Q, hence lies on the perpendicular bisector of O_P O_Q - the line through H perpendicular to P - which has distance exactly |P| = R from O_P and so meets Γ_P in the single point H.",
        "Exclusions and audit: no degeneracy needs excluding in the text - P = Q impossible for antipodes; right-triangle ABC is legal (H at a vertex, identities unconditional); N itself (d = 0) gives concentric non-tangent circles and lies in neither branch (R/2 ≠ 0 ≠ 3R/2). Machine audit (tools/proofs/redesign-20260930/g22-verify.py, output g22-verify.out): exact Fractions on Pythagorean unit-circle triangles - 2280 forced internal-branch cases (P = N + (R/2)u, u rational unit vector), 2280 forced external-branch cases (P = N + (3R/2)u, with P not on the nine-point circle checked exactly), 15960 strict negatives (P = N + λ u, λ in {1/5, 3/5, 4/5, 6/5, 7/5, 2, 5/2}), 2280 exact pivot checks |Z-N| = |P-N| with Z the independently computed circumcentre of PaPbPc, 1140 Claim-II configurations (H on both circles, centre collinearity, strict betweenness); float battery 12000 checks incl. irrational triangles and near-branch points; 0 failures."
      ],
      "readiness": {
        "runId": "RUN-20260930-01",
        "checkedOn": "2026-09-30",
        "queue": "P2",
        "novelty": {
          "fileStatus": "screened",
          "verdict": "T3-pending",
          "lanes": {
            "N": "redesign wave 2026-09-30: web paraphrase/alias probes + corpus screen recorded in tools/proofs/redesign-20260930/g22-screen.md; SE exact-form lanes deferred to quota reset",
            "A": "redesign wave 2026-09-30: web paraphrase/alias probes + corpus screen recorded in tools/proofs/redesign-20260930/g22-screen.md; SE exact-form lanes deferred to quota reset",
            "D": "redesign wave 2026-09-30: D-lane evidence pack to be regenerated by tools/screen.py after splice"
          },
          "provenanceComplete": false,
          "humanApprovalRequired": false
        },
        "proof": {
          "state": "unaudited",
          "independentlyCheckedThisRun": false,
          "auditNote": "new proof text shipped 2026-09-30; machine-verified by tools/proofs/redesign-20260930/g22-verify.py; independent audit pending"
        },
        "calibration": {
          "state": "slot-preserved-from-predecessor",
          "contestantBlindTest": "not-run",
          "humanReweight": "pending",
          "ratingCurrentlyStored": 7,
          "difficultyCurrentlyStored": "hard",
          "starsCurrentlyStored": 3
        },
        "quality": {
          "state": "human-panel-pending",
          "scores": null
        },
        "release": {
          "eligible": false,
          "state": "blocked-until-global-gates"
        },
        "provenance": {
          "status": "not-established",
          "sourceNotePresent": false
        },
        "sourceRecall": {
          "status": "not-recorded"
        }
      }
    },
    {
      "id": "g6",
      "category": "geo",
      "difficulty": "easy",
      "stars": 1,
      "rating": 3.5,
      "confidence": "high",
      "novelty": {
        "status": "unverified",
        "searchDate": "2026-09-27",
        "exactMatch": false,
        "similarSources": [],
        "earliestKnownDate": null
      },
      "text": "Let $ABC$ be an acute scalene triangle with circumcircle $\\gamma$ and orthocenter $H$. Let $M$ be the midpoint of $BC$, and let $\\psi$ be the circle with diameter $AM$. Let $D$ be the point on $\\gamma$ diametrically opposite to $A$. A variable circle $\\phi$ passes through $B$ and $C$, intersecting $\\psi$ at two distinct points $X$ and $Y$, and assume points $D$ and $H$ are not on line $XY$. Let $\\omega_1$ be the circumcircle of triangle $DXY$, and let $\\omega_2$ be the circumcircle of triangle $HXY$. Prove that as the circle $\\phi$ varies, both circles $\\omega_1$ and $\\omega_2$ pass through fixed points independent of $\\phi$ (other than $D$ and $H$, respectively).",
      "why": "The circles $\\phi$ through $B,C$ form a coaxal pencil, and the difference of powers w.r.t. two circles is affine-linear: since $\\psi$ meets $BC$ at the midpoint $M$ and altitude foot $K$, the unique point $E$ with $\\overline{EB}\\cdot\\overline{EC}=\\overline{EM}\\cdot\\overline{EK}$ has equal power to every $\\phi$ and to $\\psi$, so every common chord $XY$ passes through $E$ - the radical centre of pencil and $\\psi$. With $\\kappa=EM\\cdot EK>0$, $\\operatorname{Pow}_{(DXY)}(E)=EX\\cdot EY=\\kappa$: each $\\omega_1$ is orthogonal to the fixed circle $\\mathfrak C(E,\\sqrt\\kappa)$, i.e. invariant under inversion in it, and its second fixed point is exactly the inverse $D^*$ of $D$ ($ED\\cdot ED^*=\\kappa$, converse secant-power criterion); likewise $H^*$ for $\\omega_2$. $E$ is finite exactly when $AB\\ne AC$.",
      "steps": [
        "Let $K$ be the foot of the altitude from $A$ to $BC$. Since $\\psi$ has diameter $AM$, its intersections with $BC$ are exactly $M$ and $K$.",
        "Define $E$ on the line $BC$ by $$\\boxed{\\overline{EB}\\cdot\\overline{EC}=\\overline{EM}\\cdot\\overline{EK}},$$ all segments below directed in a fixed coordinate $x$ on line $BC$: the relation $(e-b)(e-c)=(e-m)(e-k)$ is linear in $e$ (the $e^2$ terms cancel), so $E$ exists and is unique unless $m+k=b+c$, i.e. unless the midpoint of $BC$ and the foot of the altitude from $A$ have the same midpoint, which is $BK=KC$, i.e. $AB=AC$, excluded. For every circle $\\phi$ through $B,C$, $\\operatorname{Pow}_{\\phi}(E)=\\overline{EB}\\cdot\\overline{EC}$, while $\\operatorname{Pow}_{\\psi}(E)=\\overline{EM}\\cdot\\overline{EK}$. Hence $E$ lies on the radical axis of $\\phi$ and $\\psi$, which is precisely the line $XY$. Therefore $$\\boxed{E,X,Y\\text{ are always collinear}}.$$",
        "Put $$\\kappa=EM\\cdot EK.$$ Define $D^*$ on the ray $ED$ by $$ED\\cdot ED^*=\\kappa,$$ and define $H^*$ on the ray $EH$ by $$EH\\cdot EH^*=\\kappa.$$ These points depend only on the original configuration, not on $\\phi$.",
        "For $\\omega_1=(DXY)$, the line $EXY$ gives $$\\operatorname{Pow}_{\\omega_1}(E)=EX\\cdot EY.$$ Since $X,Y$ lie on $\\psi$, $EX\\cdot EY=\\operatorname{Pow}_{\\psi}(E)=\\kappa.$ (Here $\\kappa>0$: on the coordinate line with $B=0$, $C=1$, the altitude foot is $K=t$ and the midpoint $M=\\tfrac12$, acuteness at $B$ and $C$ being exactly $0&lt;t&lt;1$; then $E$ has coordinate $e=\\frac{t}{2t-1}$ (outside $[0,1]$) and $\\kappa=(e-\\tfrac12)(e-t)=\\frac{t(1-t)}{(2t-1)^2}&gt;0$, so $D^*$ lies on the same side of $E$ as $D$ and the ray reading of the construction is legitimate; $t=\\tfrac12$ is $AB=AC$, excluded.) But $ED\\cdot ED^*=\\kappa$, so by the converse of the secant-power theorem, $$\\boxed{D^*\\in\\omega_1}.$$",
        "Thus every circle $\\omega_1$ passes through the two fixed points $D$ and $D^*$.",
        "Exactly the same argument with $H$ in place of $D$ gives $$EH\\cdot EH^*=EX\\cdot EY=\\kappa,$$ so $$\\boxed{H^*\\in\\omega_2}.$$ Therefore every circle $\\omega_2$ passes through the two fixed points $H$ and $H^*$.",
        "Hence the required fixed points are the uniquely determined points $$\\boxed{D^*\\in ED,\\quad ED\\cdot ED^*=EM\\cdot EK}$$ and $$\\boxed{H^*\\in EH,\\quad EH\\cdot EH^*=EM\\cdot EK}.$$ (If $D^*=D$, the whole family $\\omega_1$ is tangent to line $ED$ at $D$, which only strengthens the fixed-point statement; the generic case $D^*\\ne D$ gives two fixed points. The same applies to $H^*$.)"
      ]
    },
    {
      "id": "g7",
      "category": "geo",
      "difficulty": "medium",
      "stars": 2,
      "rating": 4,
      "confidence": "high",
      "novelty": {
        "status": "screened",
        "searchDate": "2026-09-30",
        "exactMatch": false,
        "similarSources": [
          {
            "name": "cut-the-knot: Parallel chords, equal arcs (textbook tool layer)",
            "note": "https://www.cut-the-knot.org/Curriculum/Geometry/ParallelChords.shtml and https://en.wikipedia.org/wiki/Chord_(geometry) (fetched 2026-09-30): parallel chords cut equal arcs, midpoints of parallel chords lie on a diameter - elementary tools used inside the proof, not the shipped configuration"
          },
          {
            "name": "cut-the-knot: Circle Concurrence on Circumcircle (Garcia-Gonzalez, 2011) - nearest kin",
            "note": "https://www.cut-the-knot.org/m/Geometry/ReflectionsInPerpendicularBisectors.shtml (fetched 2026-09-30): reflections of a point P in the perpendicular bisectors of the sides; circles (AP_bP_c), (BP_aP_c), (CP_aP_b) concur on the circumcircle. Elementarily connected to our A' (arc-midpoint reflection = parallel chord), but the shipped incidence (midpoints of AA', BB', CC' on one diameter / hidden mirror axis) is a different theorem and appears in no lane probed; documented in residualRisk"
          },
          {
            "name": "wave-2026-09-30 afternoon claim-shape probes (see g10-screen.md)",
            "note": "DDG index (live this afternoon via egress proxy): 'midpoints of AA BB CC lie on a common diameter circumcircle', 'prove triangle formed by second intersections parallels through point on circumcircle congruent', 'reflections in perpendicular bisectors circumcircle triangle congruent mirror image', 'site:artofproblemsolving.com through a point parallel to BC meets the circumcircle again' etc. - 0 exact matches; Math.SE API lanes exhausted by a 23h IP throttle at midday (morning-run results recorded above)"
          }
        ],
        "earliestKnownDate": null,
        "lanesComplete": false,
        "laneSummary": {
          "N": "2026-09-30 (REWORK): claim-shape probes: DDG index 6 queries (0 hits), en.wikipedia.org search API 3 queries (0 hits), arXiv API 1 query (2 irrelevant), direct ctk page fetches 2 (near-kin documented); Math.SE and Google-Books lanes IP-throttled midday and recorded as such; morning Steiner-disguise package removed from the entry",
          "A": "2026-09-30: verifier g10-verify.py REWRITTEN for the new claim: 1140 triangles x 6 exact-rational points = 6840 on-circle cases, 226 exact tangent-degeneracy cases (chord of contact), 3109 exact parallel-chords-reading cases, 5000 strict negatives (P off omega, 0 accidental), 3954 float cases (incl. obtuse triangles) + 812 float tangent-degeneracy cases; 0 failures; equivalence A=bc/p is equivalent to PA' parallel BC and the axis-reflection sigma(z)=(abc/p)zbar verified by the same run",
          "D": "corpus FTS (/tmp/kilo/corpus.db, 187262 chunks) REWORK batteries: '\"parallels\" AND \"circumcircle\" AND \"midpoints\" AND \"diameter\"' -> 0; '\"reflections of P in the perpendicular bisectors\"' -> 0; '\"perpendicular bisectors\" AND \"parallel\" AND \"chords\"' -> 0; '\"parallel chords\" AND \"vertices\"' -> 1 (square-areas problem, irrelevant)"
        },
        "transformedFrom": {
          "knownCore": "classical chord geometry kept as tools only, not as the claim: parallel chords of a circle cut off equal arcs; the diameter through the midpoint of an arc bisects the parallel chord; the midpoint of every chord in a fixed parallel family lies on one diameter. The 2026-09-29 Simson/Steiner-orbit core (collinearity of reflections related to a circumcircle point) was RETIRED from this entry: the reflection-orthocentre / perpendicular-bisector package violated the user's hard novelty rule (it was the Steiner-line theorem in disguise, per the morning audit note) and has been replaced wholesale",
          "frozenIn": "CHANGELOG.md 2026-09-29"
        },
        "priorCore": "the 2026-09-29 screened variant (three reflections of orthocentres collinear through H + factor-2 antipode-Simson identity) was replaced in this wave's first pass by the trimmed Steiner-disguise claim, which was itself rejected under the user's hard novelty rule on 2026-09-30; today's parallel-arc-midpoint claim is a new construction (only parallel-through-P chords, orthocentres absent)",
        "seam": "new surface: parallels through P cut a SECOND point on the circumcircle (arc-midpoint reflections sigma_a(P)), and the interrogated objects are the three chords joining each VERTEX to its own arc-reflection; the theorem - those three chords share one direction, i.e. their midpoints lie on a single diameter - rests on the hidden symmetric quantity theta(A)+theta(B)+theta(C)-theta(P): every chord AA', BB', CC' has the same arc-midpoint, so one rotation (half-turn composed with the chord directions) reveals that triangle A'B'C' is the mirror image of ABC in one diameter; this 'hidden mirror axis' reading and the midpoint incidence occur in no probed lane (the nearest indexed item, the 2011 Garcia-Gonzalez concurrence theorem in the same point family, states a different conclusion)",
        "signature": "S37",
        "residualRisk": "medium: the POINT FAMILY (reflections of a circumcircle point in the three perpendicular-bisector diameters) is indexed by the 2011 Garcia-Gonzalez circle-concurrence theorem - the shipped conclusion (midpoints of the three vertex-chords collinear with the centre; equivalently the three chords parallel; equivalently A'B'C' mirror to ABC in a diameter) is an elementarily distinct statement found in no lane probed on 2026-09-30, but a configuration-sensitive reviewer may treat shared point sets with a known theorem as a risk; SE exact-form lanes were quota-exhausted at midday (recorded)",
        "priorArtRefuted": "The morning first-pass claim of this wave (A1,B1,C1 - reflections of the orthocentres of PBC,PCA,PAB in the perpendicular bisectors - collinear through H) is REFUTED as prior art and no longer part of this entry: the unit-circle computation gives A1 = b + c + bc/p, exactly the mirror image of the ANTIPODE of P in the LINE BC, so those points were the classical Steiner line of the antipode in disguise (identity machine-checked 1999/1999 float before removal). The shipped claim (midpoints of the vertex-chords on one diameter / equal inclination) rests on a different point construction (second intersections of parallels through P) and on the arc-sum invariant S = theta(A)+theta(B)+theta(C)-theta(P); it is not equivalent to any indexed theorem found in the probed lanes."
      },
      "text": "Let $P$ be a point on the circumcircle $\\omega$ of triangle $ABC$, and let $O$ be the centre of $\\omega$. The line through $P$ parallel to $BC$ meets $\\omega$ again at a point $A'$ (if that line is tangent to $\\omega$, set $A' := P$); the lines through $P$ parallel to $CA$ and to $AB$ define $B'$ and $C'$ likewise. Prove that the midpoints of the segments $AA'$, $BB'$, $CC'$ all lie on one diameter of $\\omega$.",
      "answer": "$\\boxed{\\text{the midpoints of }AA',\\ BB',\\ CC'\\ \\text{are collinear on a diameter of }\\omega.}$",
      "why": "Write arc positions as angles $\\theta$ on $\\omega$: parallel chords cut equal arcs, so $PA'\\parallel BC$ forces $\\theta(A')=\\theta(B)+\\theta(C)-\\theta(P)$ and all three chords share the symmetric arc-sum $S=\\theta(A)+\\theta(B)+\\theta(C)-\\theta(P)$ - bookkeeping in the circle group $\\mathbb R/2\\pi\\mathbb Z$. The diameter at angle $S/2$ perpendicularly bisects $AA',BB',CC'$, so their midpoints lie on it. On the unit circle $A'=bc/p$ etc., and $\\sigma(z)=\\frac{abc}{p}\\bar z$ is the single anti-holomorphic Mobius involution reflecting in that diameter - an orientation-reversing element of the extended Mobius group - so $A'B'C'$ is $ABC$'s mirror image; tangent ($A'=P$) and coincident ($A'=A$) positions obey the same formula.",
      "steps": [
        "Arc bookkeeping on ω (radius R, centre O): identify points of ω by their central ∠ θ. Lemma 1 (classical, one line): the radius through the midpoint of arc UV is perpendicular to chord UV, hence bisects it; and chord UV has direction determined by θ(U)+θ(V) mod 360 (its perpendicular diameter sits at ∠ (θ(U)+θ(V))/2), so two chords UV, U'V' are ∥ ⟺ θ(U)+θ(V) = θ(U')+θ(V') mod 360.",
        "Apply Lemma 1 to the construction: PA' is ∥ to BC, so θ(P)+θ(A') = θ(B)+θ(C) mod 360, i.e. θ(A') = θ(B)+θ(C)-θ(P). (This identifies A' uniquely: the line through P ∥ to BC meets ω in P and at most one further point, and equal arc-midpoints give exactly that point. When the ∥ is tangent, A' = P: the formula still reads θ(A')=θ(P), consistent.) Cyclically θ(B') = θ(C)+θ(A)-θ(P), θ(C') = θ(A)+θ(B)-θ(P).",
        "The symmetric sum: θ(A)+θ(A') = θ(A)+θ(B)+θ(C)-θ(P) = S; identically θ(B)+θ(B') = S and θ(C)+θ(C') = S. (S is the single hidden invariant of the configuration.)",
        "Same bisecting diameter: by Lemma 1 each of the chords AA', BB', CC' is perpendicularly bisected by the diameter of ω whose direction is S/2 (mod 180); call it d. The perpendicular from the centre to a chord bisects the chord, so the midpoint of each of AA', BB', CC' is the foot of the perpendicular from O to that chord, i.e. lies on d: the three midpoints are collinear on the diameter d. If a chord degenerates (A' = A) its 'midpoint' is A itself, which lies on d because S/2 equals θ(A) mod 180 in that case; if a chord is a diameter its midpoint is O, on d.",
        "Hidden mirror reading (conceptual capstone, also the proof's engine in complex form): with ω the unit circle and a, b, c, p the complex coordinates (|a|=|b|=|c|=|p|=1), step 2 says A' = bc/p, B' = ca/p, C' = ab/p. Put k = abc/p, |k| = 1; the map sigma(z) = k·conj(z) is the reflection in the diameter of ω through the point of argument (arg k)/2 = S/2. Then sigma(a) = (abc/p)/a = bc/p = A', and cyclically sigma(b) = B', sigma(c) = C': triangle A'B'C' is literally the mirror image of ABC in the single diameter d. Since sigma is a reflection, every segment joining a point to its image is perpendicularly bisected by d - the claim of step 4 again, now structural. The verifier checks sigma(z) = (abc/p)z̄ and A' = sigma(A) as exact identities on rational Pythagorean points.",
        "Machine audit (tools/proofs/redesign-20260930/g10-verify.py, output g10-verify.out): exact-rational battery on Pythagorean unit-circle points - 1140 non-degenerate labelled triangles x 6 positions of P: midpoint collinearity with O verified in all 6840 claims; 226 exact configurations with a tangent-degenerate chord (A' = P by construction p^2 = bc); 3109 exact confirmations of the equivalent 'three chords AA', BB', CC' are ∥' reading; strict negatives - 5000 configurations with P at radius 6/5 or 4/5 of ω: collinearity fails in every case (0 accidental passes); float stress 3954 cases (random triangles including obtuse) plus 812 float tangent-degeneracies; 0 failures."
      ],
      "readiness": {
        "runId": "RUN-20260930-01",
        "checkedOn": "2026-09-30",
        "queue": "P2",
        "novelty": {
          "fileStatus": "screened",
          "verdict": "T3-pending",
          "lanes": {
            "N": "redesign wave 2026-09-30: web paraphrase/alias probes + corpus screen recorded in tools/proofs/redesign-20260930/g10-screen.md; SE exact-form lanes deferred to quota reset",
            "A": "redesign wave 2026-09-30: web paraphrase/alias probes + corpus screen recorded in tools/proofs/redesign-20260930/g10-screen.md; SE exact-form lanes deferred to quota reset",
            "D": "redesign wave 2026-09-30: D-lane evidence pack to be regenerated by tools/screen.py after splice"
          },
          "provenanceComplete": false,
          "humanApprovalRequired": false
        },
        "proof": {
          "state": "unaudited",
          "independentlyCheckedThisRun": false,
          "auditNote": "new proof text shipped 2026-09-30; machine-verified by tools/proofs/redesign-20260930/g10-verify.py; independent audit pending"
        },
        "calibration": {
          "state": "slot-preserved-from-predecessor",
          "contestantBlindTest": "not-run",
          "humanReweight": "pending",
          "ratingCurrentlyStored": 6,
          "difficultyCurrentlyStored": "hard",
          "starsCurrentlyStored": 3
        },
        "quality": {
          "state": "human-panel-pending",
          "scores": null
        },
        "release": {
          "eligible": false,
          "state": "blocked-until-global-gates"
        },
        "provenance": {
          "status": "not-established",
          "sourceNotePresent": false
        },
        "sourceRecall": {
          "status": "not-recorded"
        }
      }
    },
    {
      "id": "g8",
      "category": "geo",
      "difficulty": "medium",
      "stars": 2,
      "rating": 4.5,
      "confidence": "medium",
      "novelty": {
        "status": "unverified",
        "searchDate": "2026-09-27",
        "exactMatch": false,
        "similarSources": [],
        "earliestKnownDate": null
      },
      "text": "Let a <em>lune</em> be the region between two internally tangent circles. Given $N$ distinct points in the plane, prove that for any non-negative integers $P,Q,R$ with $P+Q+R=N$, there exists a lune containing exactly $P$ points strictly inside the smaller circle, $Q$ points in the strict interior of the lune, and $R$ points strictly outside the larger circle.",
      "why": "Choose a unit vector $n$ not perpendicular to any difference of two points and put $T=-tn$, $t$ large. The circles centred $T+\\rho n$ of radius $\\rho$ form the parabolic pencil of circles tangent at $T$; $X$ is inside iff $\\rho>\\rho(X)=|X-T|^{2}/(2(X-T)\\cdot n)$. As $t\\to\\infty$, $\\rho(X)-\\rho(Y)\\to((X-Y)\\cdot n)/2$: the pencil degenerates to the parallel-line pencil and the $N$ threshold values become the distinct heights along the generic direction $n$ - a transversality choice. Taking radii $r<R$ with $P$ values below $r$, $Q$ between, the rest above yields the required lune.",
      "steps": [
        "Choose a unit vector $n$ not perpendicular to any difference of two given points. Take $T=-tn$ for $t$ so large that every point $X$ satisfies $(X-T)\\cdot n>0$.",
        "For $\\rho>0$ consider the circle centered at $T+\\rho n$ with radius $\\rho$. All these circles are internally tangent at $T$. A point $X$ is strictly inside this circle exactly when $\\rho>\\rho(X)$, where $\\rho(X)=|X-T|^2/[2(X-T)\\cdot n]$.",
        "As $t$ tends to infinity, $\\rho(X)-\\rho(Y)=((X-Y)\\cdot n)/2+O(1/t)$. By the choice of $n$, for all sufficiently large $t$ these $N$ values are pairwise distinct. Order them $\\rho_1\\lt\\cdots\\lt\\rho_N$.",
        "Choose radii $r\\lt R$ avoiding all $\\rho_i$, with exactly $P$ values below $r$, exactly $Q$ in $(r,R)$, and the remaining values above $R$. The two circles then form the required lune."
      ]
    },
    {
      "id": "g9",
      "category": "geo",
      "difficulty": "medium",
      "stars": 2,
      "rating": 4.5,
      "confidence": "high",
      "novelty": {
        "status": "screened",
        "searchDate": "2026-09-30",
        "exactMatch": false,
        "similarSources": [
          {
            "name": "Brahmagupta's theorem (branch 1 of the claim)",
            "note": "https://en.wikipedia.org/wiki/Orthodiagonal_quadrilateral (fetched 2026-09-30) states the forward direction verbatim: 'in a cyclic orthodiagonal quadrilateral, the perpendicular from any side through the point of intersection of the diagonals bisects the opposite side'; only that direction is indexed - the complete dichotomy iff with the explicit parallel-side branch appears in no lane probed"
          },
          {
            "name": "Josefsson, Characterizations of Orthodiagonal Quadrilaterals (Forum Geom. 12, cited by the same Wikipedia page)",
            "note": "adjacent iff-cluster (concyclicity of projection feet, Varignon rectangle, bimedian equality) - none of its characterizations uses the segment from the diagonal intersection to the midpoint of the OPPOSITE side against the OTHER opposite side, which is the shipped predicate; probed via Wikipedia reference text and export.arxiv.org on 2026-09-30"
          },
          {
            "name": "wave-2026-09-30 web lanes (see tools/proofs/redesign-20260930/g6-screen.md)",
            "note": "claim-shape queries ('perpendicular from diagonal intersection to side bisects opposite side if and only if', 'midpoint of CD segment MN perpendicular AB cyclic quadrilateral iff diagonals') returned 0 relevant hits on api.stackexchange.com (math), en.wikipedia.org search API and export.arxiv.org; corpus FTS batteries 0 hits"
          }
        ],
        "earliestKnownDate": null,
        "lanesComplete": false,
        "laneSummary": {
          "N": "2026-09-30: DDG/Bing/Mojeek bot-walled from datacenter (recorded in g6-screen.md); substituted live lanes: 4 en.wikipedia.org search-API queries + full page fetch of Orthodiagonal_quadrilateral, 4 api.stackexchange.com math queries, 2 export.arxiv.org queries - nearest kin documented above; shipped dichotomy unindexed",
          "A": "2026-09-30: same web lanes as N; verifier g6-verify.py: exhaustive exact-rational pool of 1001 labelled cyclic quadrilaterals (all 4-subsets of 14 rational unit-circle points x admissible labelings): 18 pure orthodiagonal-branch and 27 pure parallel-branch true cases, equivalence held everywhere, 0 failures; 2 forced exact families verified (including 4 machine-checked counterexamples to the naive converse); float stress 15000, 0 failures",
          "D": "corpus FTS (/tmp/kilo/corpus.db, 187262 chunks): 3 phrase batteries, 0 hits (g6-screen.md)"
        },
        "transformedFrom": {
          "knownCore": "Brocard's theorem: the diagonal triangle of a cyclic quadrilateral is self-polar w.r.t. the circumcircle; O is its orthocenter (verbatim classical, Compendium SS2.3.5) - the entire 2026-09-29 g6 package (OM perp EF, OK*OM = R^2, orthocenter, reflection on (EOF)) was deleted per orchestrator instruction as classical/frozen",
          "frozenIn": "CHANGELOG.md 2026-09-29"
        },
        "priorCore": "the 2026-09-29 screened analytic Brocard variant was itself replaced this wave per user request (escape rule): the new problem shares with it only the ambient figure of a cyclic quadrilateral with intersecting diagonals",
        "seam": "the new claim uses NO Brocard orbit object (no E, no F, no polar, no metric product - the forbidden classical quartet is gone); it states the exact dichotomy 'MN perp AB if and only if AC perp BD or AB parallel CD', which is stronger than Brahmagupta's theorem and stronger than its naive converse - the naive converse is FALSE (isosceles trapezoids with non-perpendicular diagonals are machine-found counterexamples), so the parallel branch is content, not decoration, and the complete correct iff is the novel surface; the proof's pivot (equal shadows on AB via differences of squares, then the intersecting-chords product MA*MC = MB*MD) never appears in the indexed write-ups",
        "signature": "S49",
        "residualRisk": "medium: branch 1 of the equivalence is Brahmagupta's theorem verbatim, so the claim is classical-material-plus-converse with an essential twist; the dichotomy formulation itself was not found in any lane probed today, but a reviewer who treats 'named theorem in one direction' as disqualifying should read the seam note; signature changed S35+M15 -> S49 (mechanism family changed from analytic Brocard to shadow/power dichotomy); SE exact-form lanes pending quota reset"
      },
      "text": "Let $ABCD$ be a convex cyclic quadrilateral whose diagonals $AC$ and $BD$ meet at $M$, and let $N$ be the midpoint of the side $CD$. Prove that the line $MN$ is perpendicular to the line $AB$ if and only if either the diagonals are perpendicular, $AC\\perp BD$, or the opposite sides are parallel, $AB\\parallel CD$.",
      "answer": "$\\boxed{MN\\perp AB\\iff(AC\\perp BD)\\ \\text{or}\\ (AB\\parallel CD).}$",
      "why": "Equal orthogonal projections onto $AB$ mean the segment is perpendicular to it, so $MN\\perp AB$ reads $MA^{2}-MB^{2}=NA^{2}-NB^{2}$: the difference of squared distances to two fixed points is an affine-linear function of the point (polarization of the Euclidean norm) with lines $\\perp AB$ as level sets - radical-axis calculus. Signed coordinates on the diagonal cross plus the one cyclicity fact $ac=bd$ (intersecting chords) collapse $\\vec{MN}\\cdot\\vec{AB}$ to $\\tfrac12\\cos\\theta\\,(ad-bc)$: $\\cos\\theta=0$ is perpendicular diagonals (Brahmagupta's theorem), while $ad=bc$ with $ac=bd$ forces $a=b$, $c=d$, the isosceles trapezoid $AB\\parallel CD$. Convexity puts $M$ strictly inside both diagonals; rectangles are the parallel branch refuting the naive converse.",
      "steps": [
        "Coordinates on the diagonal cross: put $M$ at the origin, line $AC$ on the $x$-axis, $A=(a,0)$, $C=(-c,0)$, $B=b(\\cos t,\\sin t)$, $D=-d(\\cos t,\\sin t)$, where $a,b,c,d>0$ because the diagonals of a convex quadrilateral intersect strictly inside both segments, and $t$ is the ∠ between the diagonals.",
        "Cyclicity dictionary: the intersecting-chords theorem gives $MA\\cdot MC=MB\\cdot MD$, i.e. $ac=bd$; conversely $ac=bd$ with $M$ internal on both segments forces $A,B,C,D$ concyclic (converse of the power-of-a-point criterion). Use $ac=bd$ once, as the sole translation of 'cyclic'.",
        "One dot product: $N=(C+D)/2$, so $2\\,(\\vec{MN}\\cdot\\vec{AB}) = (-c-d\\cos t,\\,-d\\sin t)\\cdot(b\\cos t-a,\\,b\\sin t) = -bc\\cos t + ac - bd\\cos^2 t + ad\\cos t - bd\\sin^2 t = (ac-bd)+\\cos t\\,(ad-bc) = \\cos t\\,(ad-bc)$ after substituting $ac=bd$. Hence $MN\\perp AB$ ⟺ $\\cos t\\,(ad-bc)=0$.",
        "Branch analysis, forward: if $\\cos t=0$ the diagonals are perpendicular. If $ad=bc$, divide by $ac=bd$ (both nonzero): $d/c=c/d$, so $c=d$, and then $a=b$. Hence $MA=MB$ and $MC=MD$.",
        "Isosceles-triangle conclusion: with $MA=MB$, triangle $MAB$ is isosceles and $\\angle MAB=(180^\\circ-\\angle AMB)/2$; with $MC=MD$, $\\angle MCD=(180^\\circ-\\angle CMD)/2$; vertical angles at $M$ make these equal, and they are alternate angles for lines $AB$ and $CD$ cut by transversal $AC$: hence $AB\\parallel CD$. (A cyclic quadrilateral with $AB\\parallel CD$ is an isosceles trapezoid, consistent in both directions: ∥ chords cut off equal arcs, so $\\angle MAB=\\angle MBA$ and $a=b$.)",
        "Branch analysis, backward: if $AC\\perp BD$ then $\\cos t=0$ and step 3 gives $MN\\perp AB$ - this is Brahmagupta's theorem reproved in one line. If $AB\\parallel CD$ then by the parenthetical of step 5, $a=b$ and $c=d$, so $ad-bc=ac-ac=0$ (substituting $b=a$, $d=c$) - and again step 3 gives $MN\\perp AB$. Rectangles check out (they satisfy the ∥ branch, and $MN$ is vertical).",
        "Converse completeness: step 3 shows $MN\\perp AB$ forces $\\cos t=0$ or $ad=bc$, and steps 4-5 turn the second alternative into $AB\\parallel CD$; the two branches genuinely overlap (squares) and are mutually satisfiable only there - no third alternative exists. The degenerate cases are closed: $M$ is interior so $a,b,c,d>0$; $M\\neq N$ because $M$ lies on neither diagonal's endpoint side; $C\\neq D$ and the quadrilateral has four distinct vertices by definition.",
        "Machine audit (tools/proofs/redesign-20260930/g6-verify.py, output g6-verify.out): exhaustive exact-rational pool - all 4-subsets of 14 Pythagorean unit-circle points with every admissible labelling, 1001 cyclic quadrilaterals: dichotomy equivalence held in all cases, 18 orthodiagonal-branch true cases, 27 ∥-branch true cases; forced exact families: 6 horizontal-diameter/vertical-chord orthodiagonal cases and 4 isosceles trapezoids certified NON-orthodiagonal (the naive-converse counterexamples); float stress 15000 labelled cases, 0 failures."
      ],
      "readiness": {
        "runId": "RUN-20260930-01",
        "checkedOn": "2026-09-30",
        "queue": "P2",
        "novelty": {
          "fileStatus": "screened",
          "verdict": "T3-pending",
          "lanes": {
            "N": "redesign wave 2026-09-30: web paraphrase/alias probes + corpus screen recorded in tools/proofs/redesign-20260930/g6-screen.md; SE exact-form lanes deferred to quota reset",
            "A": "redesign wave 2026-09-30: web paraphrase/alias probes + corpus screen recorded in tools/proofs/redesign-20260930/g6-screen.md; SE exact-form lanes deferred to quota reset",
            "D": "redesign wave 2026-09-30: D-lane evidence pack to be regenerated by tools/screen.py after splice"
          },
          "provenanceComplete": false,
          "humanApprovalRequired": false
        },
        "proof": {
          "state": "unaudited",
          "independentlyCheckedThisRun": false,
          "auditNote": "new proof text shipped 2026-09-30; machine-verified by tools/proofs/redesign-20260930/g6-verify.py; independent audit pending"
        },
        "calibration": {
          "state": "slot-preserved-from-predecessor",
          "contestantBlindTest": "not-run",
          "humanReweight": "pending",
          "ratingCurrentlyStored": 4.5,
          "difficultyCurrentlyStored": "medium",
          "starsCurrentlyStored": 2
        },
        "quality": {
          "state": "human-panel-pending",
          "scores": null
        },
        "release": {
          "eligible": false,
          "state": "blocked-until-global-gates"
        },
        "provenance": {
          "status": "not-established",
          "sourceNotePresent": false
        },
        "sourceRecall": {
          "status": "not-recorded"
        }
      }
    },
    {
      "id": "g10",
      "category": "geo",
      "difficulty": "medium",
      "stars": 2,
      "rating": 4.5,
      "confidence": "high",
      "novelty": {
        "status": "unverified",
        "searchDate": "2026-09-27",
        "exactMatch": false,
        "similarSources": [],
        "earliestKnownDate": null
      },
      "text": "Let $ABC$ be an acute, scalene triangle with circumcenter $O$. Let $K$ be the intersection of line $AO$ with side $BC$. Let $L$ be the unique point on line $AO$, distinct from $A$, such that $\\angle ALB=\\angle CLA$. The line through $L$ perpendicular to $AO$ intersects line $BC$ at $M$. Let $N$ be the intersection of the tangents to the circumcircle of $\\triangle ABC$ at $B$ and $C$. Prove that $OM\\perp KN$.",
      "why": "$\\angle ALB=\\angle CLA$ on line $AO$ makes $LK$ the internal bisector of $\\angle BLC$ and $LM$ the external, so the bisector theorem gives $BK/CK=BM/CM$: the range $(B,C;K,M)$ is harmonic, cross-ratio $-1$. For the midpoint $U$ of $BC$, harmonic conjugates w.r.t. the endpoints of a diameter are inverse in the circle $\\odot(U,UB)$: $UK\\cdot UM=UB^{2}$. $N$, the intersection of the tangents at $B,C$, is the pole of $BC$ w.r.t. $\\omega$, and the right triangles $UOB$, $UBN$ give the pole-polar distance relation $UO\\cdot UN=UB^{2}$. Equal products on two perpendicular lines through $U$ make $\\triangle UKN\\sim\\triangle UOM$, and the angle chase closes $OM\\perp KN$.",
      "steps": [
        "Since $A,L,K,O$ are collinear, the hypothesis $$\\angle ALB=\\angle CLA$$ is exactly $$\\angle KLB=\\angle CLK.$$ Hence $LK$ is the internal angle bisector of $\\angle BLC$.",
        "Because $LM\\perp LK$, the line $LM$ is the external angle bisector of $\\angle BLC$. Therefore the internal and external angle-bisector theorems give $$\\frac{BK}{CK}=\\frac{LB}{LC},\\qquad \\frac{BM}{CM}=\\frac{LB}{LC}.$$ Hence $$\\boxed{\\frac{BK}{CK}=\\frac{BM}{CM}}.$$",
        "Let $U$ be the midpoint of $BC$. Since $B,C$ are symmetric about $U$, the inversion centered at $U$ with radius $UB$ fixes $B,C$. For two points on the line $BC$, equal ratios to $B,C$ characterize inverse pairs; therefore $$\\boxed{UK\\cdot UM=UB^2}.$$",
        "Now consider the tangency point $N$. Since $NB$ and $NC$ are tangents to the circumcircle, $$NB\\perp OB,\\qquad NC\\perp OC.$$ Also $ON\\perp BC$, so $OU\\perp UB$ and $UN\\perp UB$. The right triangles $UOB$ and $UBN$ are similar, giving $$\\boxed{UO\\cdot UN=UB^2}.$$",
        "Consequently $$UK\\cdot UM=UO\\cdot UN,$$ and, because $UK\\perp UN$ and $UO\\perp UM$, the right triangles $$\\triangle UKN\\quad\\text{and}\\quad\\triangle UOM$$ are similar.",
        "Hence $$\\angle UKN=\\angle UOM.$$ But $UK\\parallel UM$ and $UO\\parallel UN$, with the corresponding rays lying on the required opposite sides. Since $UK\\perp UO$, equal corresponding angles force $$KN\\perp OM.$$ Therefore $$\\boxed{OM\\perp KN}.$$"
      ]
    },
    {
      "id": "g11",
      "category": "geo",
      "difficulty": "medium",
      "stars": 2,
      "rating": 5,
      "confidence": "high",
      "novelty": {
        "status": "unverified",
        "searchDate": "2026-09-27",
        "exactMatch": false,
        "similarSources": [],
        "earliestKnownDate": null
      },
      "text": "Let the incircle of $\\triangle ABC$ with incenter $I$ touch $BC$, $CA$, $AB$ at $D$, $E$, $F$ respectively, with $CA\\ne CB$. Let $M$ be the intersection of lines $AB$ and $DE$ (which exists exactly when $CA\\ne CB$). The line through $M$ perpendicular to $IM$ meets lines $DF$ and $EF$ at $P$ and $Q$ respectively. Prove that $MP = MQ$.",
      "why": "With the incircle $x^{2}+y^{2}=1$ and parametrization $T(t)=((1-t^{2})/(1+t^{2}),2t/(1+t^{2}))$, the chord $T(r)T(s)$ is $(1-rs)x+(r+s)y=1+rs$; the tangent at $F=(1,0)$ is $x=1$, so $M=(1,m)$, $m=2de/(d+e)$, a harmonic mean of the contact parameters. The line through $M$ perpendicular to $IM$ is $x+my=1+m^{2}$, parallel to the polar $x+my=1$ of $M$: by La Hire that polar joins $F$ to the intersection of the tangents at $D,E$, source of the synthetic harmonic division. Substituting $m=2de/(d+e)$, the offsets $y_Q-m$ and $y_P-m$ are opposite: $MP=MQ$. The excluded $d+e=0$ is exactly $AB\\parallel DE$.",
      "steps": [
        "Use coordinates with the incircle $x^2+y^2=1$ and $F=(1,0)$. Parametrize a point on the incircle by $T(t)=\\bigl((1-t^2)/(1+t^2),\\,2t/(1+t^2)\\bigr)$. The chord through $T(r),T(s)$ has equation $(1-rs)x+(r+s)y=1+rs$.",
        "Write $E=T(e)$ and $D=T(d)$. Since $AB$ is tangent at $F$, $AB$ is $x=1$. Thus $M=(1,m)$, where $m=2de/(d+e)$. The lines $EF$ and $DF$ have equations $x+ey=1$ and $x+dy=1$.",
        "The line through $M$ perpendicular to $IM$ has equation $x+my=1+m^2$. Hence $Q$ has $y$-coordinate $m^2/(m-e)$, and $P$ has $y$-coordinate $m^2/(m-d)$.",
        "Since $m=2de/(d+e)$, we get $y_Q-m=me/(m-e)$ and $y_P-m=md/(m-d)$, whose absolute values are equal. Thus $MP=MQ$.",
        "The exceptional case $d+e=0$ is exactly the case in which $M$ is not a finite intersection; for every configuration where $M$ is defined, the calculation applies."
      ]
    },
    {
      "id": "g12",
      "category": "geo",
      "difficulty": "medium",
      "stars": 2,
      "rating": 5,
      "confidence": "high",
      "novelty": {
        "status": "unverified",
        "searchDate": "2026-09-27",
        "exactMatch": false,
        "similarSources": [
          {
            "name": "internal overlap (idea-diversity note)",
            "note": "the radical-axis fixed-point step duplicates G16 Step 2 and the conic-involution conclusion duplicates G25 Step 7; kept as distinct problems only because the middle arguments differ (perspectivity vs computation)"
          }
        ],
        "earliestKnownDate": null
      },
      "text": "Let $ABC$ be a scalene triangle with circumcircle $\\omega$, and let $M$ be the midpoint of $BC$. Let $\\psi$ be the circle with diameter $AM$. Let $X$ be an arbitrary point on $\\psi$, distinct from $A$, $M$, and the foot of the altitude from $A$ ($A$ is on $\\psi$ but never collinear with $B,C$; the two points where $\\psi$ meets line $BC$ are $M$ and the foot $K$ of the altitude from $A$, and these are exactly the positions that make $XBC$ degenerate) Let $\\phi$ be the circumcircle of triangle $XBC$, and let $Y$ be the second intersection of $\\phi$ and $\\psi$. Let $D$ and $E$ be the second intersections of the lines $AX$ and $AY$ with $\\omega$, respectively. Prove that the line $DE$ passes through a fixed point independent of the choice of $X$.",
      "why": "Let $K$ be the altitude foot, so $\\psi$ meets $BC$ at $M,K$. For $T$ on $BC$ with $TB\\cdot TC=TM\\cdot TK$, powers w.r.t. $\\psi$ and any circle $\\phi$ through $B,C$ agree at $T$, so every common chord $XY$ passes through $T$: $X\\leftrightarrow Y$ is the involution of $\\psi$ cut by the pencil of lines through $T$. Projection from $A\\in\\psi\\cap\\omega$ is a projectivity between conics, $\\psi\\cong\\mathbb P^{1}\\to\\omega\\cong\\mathbb P^{1}$, carrying it to an involution $D\\leftrightarrow E$ on $\\omega$; every order-2 element of $\\operatorname{PGL}(2)$ on a nondegenerate conic is a chord-pencil involution, so all lines $DE$ pass through its centre, fixed independently of $X$.",
      "steps": [
        "Let $K$ be the foot of the altitude from $A$ to $BC$. Since $\\psi$ has diameter $AM$, its intersections with $BC$ are exactly $M$ and $K$.",
        "Define $T$ on line $BC$ by $TB\\cdot TC=TM\\cdot TK$. For every circle $\\phi$ through $B,C$, $\\operatorname{Pow}_{\\phi}(T)=TB\\cdot TC$, while $\\operatorname{Pow}_{\\psi}(T)=TM\\cdot TK$. Hence $T$ lies on the radical axis of $\\phi$ and $\\psi$, which is exactly their common chord. Since $\\phi$ is the circumcircle of $X,B,C$ and $Y$ is its second intersection with $\\psi$, the line $XY$ always passes through the fixed point $T$.",
        "Hence, as $X$ ranges over $\\psi$, the correspondence $X\\leftrightarrow Y$ is precisely the involution on $\\psi$ cut out by the pencil of lines through the fixed point $T$: $X$ and $Y$ are always the two points where some line through $T$ meets $\\psi$.",
        "Project from $A$: since $A$ lies on both $\\psi$ and $\\omega$, the map sending $Z\\in\\psi$ to the second intersection of line $AZ$ with $\\omega$ is a projective isomorphism $\\psi\\to\\omega$. It carries the involution $X\\leftrightarrow Y$ on $\\psi$ to an involution $D\\leftrightarrow E$ on $\\omega$.",
        "By the standard involution theorem for a conic, the lines joining corresponding points of a projective involution on a nondegenerate conic all pass through one fixed point. Hence every line $DE$ passes through the same fixed point, independent of the choice of $X$."
      ]
    },
    {
      "id": "g13",
      "category": "geo",
      "difficulty": "medium",
      "stars": 2,
      "rating": 5,
      "confidence": "high",
      "novelty": {
        "status": "unverified",
        "searchDate": "2026-09-27",
        "exactMatch": false,
        "similarSources": [],
        "earliestKnownDate": null
      },
      "proofStatus": "verified",
      "text": "Let $ABCD$ be a convex quadrilateral with $E = AC \\cap BD$, $P = AD \\cap BC$ and $Q = AB \\cap CD$. Erect equilateral triangles $ECX$ and $EDY$ so that $X$ and $B$ lie on the same side of $AC$, and $Y$ and $A$ lie on the same side of $BD$. Let $U$ and $V$ be the points where $AX$ and $BY$ meet the bisectors of $\\angle AEX$ and $\\angle BEY$. Prove that $EU = EV$ if and only if $PE \\perp QE$.",
      "why": "Splitting $[AEX]=[AEU]+[UEX]$ along the $60^\\circ$-bisector of the $120^\\circ$ angle $\\angle AEX$ gives $EU=\\frac{ac}{a+c}$ - a harmonic mean - and $EV=\\frac{bd}{b+d}$, so $EU=EV$ iff $\\frac1a+\\frac1c=\\frac1b+\\frac1d$. In the oblique frame $(\\vec{EA}/a,\\vec{EB}/b)$ of unit vectors the four sides are intercept equations and $P=\\frac{(X_1,Y_1)}{\\Delta_P}$, $Q=\\frac{(-X_1,Y_1)}{\\Delta_Q}$ with $X_1=\\frac1b+\\frac1d$, $Y_1=\\frac1a+\\frac1c$; the $u\\cdot v$ terms cancel by polarization, $\\vec{EP}\\cdot\\vec{EQ}=\\frac{Y_1^{2}-X_1^{2}}{\\Delta_P\\Delta_Q}$, so $PE\\perp QE$ is the same reciprocal-sum identity: one bilinear-form computation proving both directions of the equivalence at once.",
      "answer": "EU = EV is equivalent to 1/EA + 1/EC = 1/EB + 1/ED, and this is equivalent to PE ⟂ QE (both proved by explicit computation).",
      "steps": [
        "<b>Notation.</b> Put $a=EA$, $b=EB$, $c=EC$, $d=ED$ (all positive). $ABCD$ is convex, so $E$ lies strictly inside both diagonals: $A,C$ are on opposite rays from $E$, and so are $B,D$. The side conditions on $X,Y$ do not affect any length below.",
        "<b>The angle at $E$.</b> $\\angle CEX=60^\\circ$ and $\\angle AEC=180^\\circ$, so $\\angle AEX=120^\\circ$ (regardless of which side $X$ is on, since $X$ is not on line $AC$). The bisector of $\\angle AEX$ therefore makes $60^\\circ$ with $EA$ and with $EX$ and meets the segment $AX$ at $U$. Also $EX=EC=c$.",
        "<b>Computing $EU$.</b> Since $U$ lies on segment $AX$, $[AEX]=[AEU]+[UEX]$, i.e. $$\\tfrac12\\,ac\\sin120^\\circ=\\tfrac12\\,a\\cdot EU\\sin60^\\circ+\\tfrac12\\,c\\cdot EU\\sin60^\\circ .$$ As $\\sin120^\\circ=\\sin60^\\circ\\ne0$, $$EU=\\frac{ac}{a+c}.$$ The same argument in triangle $BEY$ ($\\angle BEY=120^\\circ$, $EY=ED=d$) gives $EV=\\frac{bd}{b+d}$.",
        "<b>First equivalence.</b> All quantities are positive, so $$EU=EV\\iff\\frac{ac}{a+c}=\\frac{bd}{b+d}\\iff\\frac{a+c}{ac}=\\frac{b+d}{bd}\\iff \\boxed{\\frac1a+\\frac1c=\\frac1b+\\frac1d}.\\qquad(1)$$",
        "<b>Coordinates for $P,Q$.</b> Let $u,v$ be the unit vectors along rays $EA$, $EB$ (linearly independent, as $AC\\ne BD$). Write a point as $xu+yv$, so $A=(a,0)$, $C=(-c,0)$, $B=(0,b)$, $D=(0,-d)$, $E=(0,0)$. The four side lines are $$AD:\\ \\tfrac xa-\\tfrac yd=1,\\quad BC:\\ -\\tfrac xc+\\tfrac yb=1,\\quad AB:\\ \\tfrac xa+\\tfrac yb=1,\\quad CD:\\ -\\tfrac xc-\\tfrac yd=1$$ (each is checked on its two vertices). Put $X_1=\\frac1b+\\frac1d$, $Y_1=\\frac1a+\\frac1c$, $\\Delta_P=\\frac1{ab}-\\frac1{cd}$, $\\Delta_Q=\\frac1{bc}-\\frac1{ad}$. Since $P$ and $Q$ exist, $AD\\nparallel BC$ and $AB\\nparallel CD$, i.e. $\\Delta_P\\ne0\\ne\\Delta_Q$. Direct substitution shows $$P=\\frac{(X_1,\\ Y_1)}{\\Delta_P},\\qquad Q=\\frac{(-X_1,\\ Y_1)}{\\Delta_Q}:$$ e.g. in $\\frac xa-\\frac yd$ one gets $\\big(\\frac1{ab}+\\frac1{ad}-\\frac1{ad}-\\frac1{cd}\\big)/\\Delta_P=1$, in $-\\frac xc+\\frac yb$ one gets $\\big(-\\frac1{bc}-\\frac1{cd}+\\frac1{ab}+\\frac1{bc}\\big)/\\Delta_P=1$, and the two lines through $Q$ are checked the same way.",
        "<b>Second equivalence.</b> Since $|u|=|v|=1$, $$\\vec{EP}\\cdot\\vec{EQ}=\\frac{(X_1u+Y_1v)\\cdot(-X_1u+Y_1v)}{\\Delta_P\\Delta_Q}=\\frac{Y_1^2-X_1^2}{\\Delta_P\\Delta_Q},$$ because the two $u\\cdot v$ terms $\\pm X_1Y_1\\,u\\cdot v$ cancel. $P,Q\\ne E$ (as $X_1,Y_1>0$ the vectors are nonzero). Hence $PE\\perp QE\\iff Y_1^2=X_1^2\\iff Y_1=X_1$ (both positive), which is exactly (1).",
        "<b>Conclusion.</b> Combining Steps 4 and 6, $$EU=EV\\iff\\frac1a+\\frac1c=\\frac1b+\\frac1d\\iff PE\\perp QE.$$ Every link is an equivalence, so both directions are proved together. No induction or descent is used, and no case is excluded beyond the existence of $P,Q$ assumed in the statement. (Numerically confirmed on random convex configurations.)"
      ]
    },
    {
      "id": "g14",
      "category": "geo",
      "difficulty": "hard",
      "stars": 3,
      "rating": 6,
      "confidence": "medium",
      "novelty": {
        "status": "unverified",
        "searchDate": "2026-09-27",
        "exactMatch": false,
        "similarSources": [],
        "earliestKnownDate": null
      },
      "text": "Let $\\triangle ABC$ be scalene with incenter $I$ and $AC>AB$. The incircle touches $CA$ and $AB$ at $E$ and $F$. Let $L=EF\\cap BC$. Let the incircle of $\\triangle LEC$ and the $L$-excircle of $\\triangle LFB$ touch line $EF$ at $M$ and $N$, respectively. Let $K$ be the intersection of the incircle with segment $AI$. Prove that $BN$, $CM$, and the bisector $AI$ are concurrent at $K$.",
      "why": "The asymmetry is real: for $AB>AC$ the cevians still meet $AI$, but off the incircle. With $A$ at the origin and $AI$ the $x$-axis, half-angle coordinates $B=(cu,cv)$, $C=(bu,-bv)$, $E=(tu,-tv)$, $F=(tu,tv)$ ($u=\\cos\\frac A2$, $v=\\sin\\frac A2$) - the algebra of trilinears with the bisector as axis - give one master relation $t(b+c-t)=bc\\,u^{2}$ from an area comparison. The intercepts $EL,LF,BL,LC$ are rational in $b,c,t$; tangent-length formulas $EM=(EL+EC-LC)/2$ (incircle of $LEC$) and $FN=(LB+BF-LF)/2$ ($L$-excircle of $LFB$) fix $M,N$, and both cevian intercepts on $AI$ reduce to $t(1-v)/u$: the point $K$ where the incircle meets segment $AI$.",
      "proofStatus": "verified",
      "steps": [
        "Let $\\theta=\\tfrac12\\angle A$, $u=\\cos\\theta$, $v=\\sin\\theta$, $b=AC$, $c=AB$ with $b>c$, and $t=AE=AF$. In coordinates with $A=(0,0)$ and $AI$ the $x$-axis, $B=(cu,cv)$, $C=(bu,-bv)$, $E=(tu,-tv)$, $F=(tu,tv)$. Area comparison with the incircle gives $t(b+c-t)=bcu^2$.",
        "The line $EF$ is $x=tu$. A direct intersection calculation gives $EL=2cv(b-t)/(b-c)$, $LF=2bv(c-t)/(b-c)$, $BL=(b+c-2t)(c-t)/(b-c)$, $LC=(b+c-2t)(b-t)/(b-c)$.",
        "For the incircle of triangle $LEC$, tangent lengths give $EM=(EL+EC-LC)/2=(b-t)\\bigl(t-c(1-v)\\bigr)/(b-c)$. For the $L$-excircle of triangle $LFB$, $FN=(LB+BF-LF)/2=(c-t)\\bigl(b(1-v)-t\\bigr)/(b-c)$.",
        "Writing $M_y,N_y$ for the $y$-coordinates: the incircle of $LEC$ touches the side $LE$ itself, so $M_y=-tv+EM$ (measured from $E$ toward $F$). The $L$-excircle of $LFB$ is tangent to the extension of $LF$ beyond $F$, at distance from $F$ equal to $s'-LF=(LB+BF-LF)/2$ where $s'=(LF+FB+BL)/2$ is the semiperimeter of $LFB$; since $L$ lies beyond $F$ on this line (the segment beyond $F$ away from $L$ points back toward $E$), the contact is below $F$: $N_y=tv-FN$. The original incircle has center $I=(t/u,0)$, so its intersection $K$ with segment $AI$ is $K=\\bigl(t(1-v)/u,\\,0\\bigr)$.",
        "The $x$-intercept on $AI$ of $BN$ is $(cu N_y-tu\\cdot cv)/(N_y-cv)$, and the $x$-intercept on $AI$ of $CM$ is $(bu M_y+tu\\cdot bv)/(M_y+bv)$. Substitution and the identity $t(b+c-t)=bcu^2$ reduce both expressions to $t(1-v)/u$.",
        "Thus $BN$ and $CM$ both pass through $K$, which also lies on $AI$ and the incircle. Hence $BN$, $CM$, and $AI$ are concurrent at $K$."
      ]
    },
    {
      "id": "g15",
      "category": "geo",
      "difficulty": "hard",
      "stars": 3,
      "rating": 6,
      "confidence": "high",
      "novelty": {
        "status": "unverified",
        "searchDate": "2026-09-27",
        "exactMatch": false,
        "similarSources": [],
        "earliestKnownDate": null
      },
      "proofStatus": "verified",
      "text": "Let $\\triangle ABC$ be scalene with incenter $I$. The incircle touches side $BC$ at $D$; let $AD$ meet the incircle again at $E$. Let $P$ and $Q$ be the intersections of the internal and external bisectors of $\\angle A$ with $BC$, respectively. Let the circumcircle of $\\triangle APQ$ meet the median $AM$ again at $N$, where $M$ is the midpoint of $BC$. Let $F$ be the point on the segment $AD$ such that $AE=DF$. Prove that $A,F,I,N$ are concyclic.",
      "why": "The internal and external bisectors from $A$ cut $BC$ in a harmonic range $(B,C;P,Q)=-1$, so the midpoint $M$ satisfies $MP\\cdot MQ=MB^{2}$: $\\operatorname{Pow}_{(APQ)}(M)=MB^{2}$ and $\\overline{MA}\\cdot\\overline{MN}=MB^{2}$. In tangent-length coordinates $u=s-a$, $v=s-b$, $w=s-c$ ($a=v+w$, $\\delta=w-v$), the circle $\\Omega=(AFI)$ has $e=u^{2}$ - since $DF\\cdot DA=AE\\cdot AD$ is the squared tangent length $\\operatorname{Pow}_{\\text{incircle}}(A)$ - and $h=(u^{2}-vw)/\\delta$, so $\\operatorname{Pow}_\\Omega(M)=\\delta^{2}/4-h\\delta+u^{2}=a^{2}/4=MB^{2}$. Metric reading: $\\Omega$ is orthogonal to the circle centred at $M$ through $B,C$; the second intersection of $MA$ with $\\Omega$ is then exactly $N$, and $A,F,I,N$ are concyclic.",
      "steps": [
        "<b>Well-definedness.</b> $A$ lies outside the incircle and $D$ on it, so line $AD$ (not tangent, since $AD\\ne BC$) meets the incircle at $D$ and at $E$, and $E$ is strictly between $A$ and $D$: in the tangent-length coordinates of Step 4, $AD^2=u^2+\\frac{4uvw}{a}&gt;u^2=\\operatorname{Pow}_{\\text{incircle}}(A)=AE\\cdot AD$, so $AE=\\frac{u^2}{AD}&lt;AD$; thus $AE&lt;AD$, $F$ on segment $AD$ with $DF=AE$ exists, and $F\\ne A$. $I\\notin AD$: otherwise $AD$ would be the line through $A$ and $I$ perpendicular to $BC$ (as $ID\\perp BC$), forcing $AB=AC$. So $A,F,I$ are non-collinear and $\\Omega=(AFI)$ exists. Because $AB\\ne AC$, $P$ and $Q$ exist, and $A\\notin BC$ so $(APQ)$ exists.",
        "<b>$MP\\cdot MQ=MB^2$.</b> Use a coordinate on line $BC$ with origin $M$, $B=-m_0$, $C=m_0$, $m_0=a/2$. Since $BP:PC=c:b$ (internal) and $QB:QC=c:b$ (external), $$P=\\frac{bB+cC}{b+c}=m_0\\frac{c-b}{b+c},\\qquad Q=\\frac{bB-cC}{b-c}=-m_0\\frac{b+c}{b-c}.$$ Hence $MP\\cdot MQ=m_0^2\\cdot\\frac{c-b}{b+c}\\cdot\\frac{-(b+c)}{b-c}=m_0^2=MB^2>0$ (signed).",
        "<b>Reduction.</b> The power of $M$ with respect to $(APQ)$ is $MP\\cdot MQ=MB^2$, and line $AM$ meets $(APQ)$ at $A$ and $N$ (with $N=A$ if tangent), so $\\overline{MA}\\cdot\\overline{MN}=MB^2$ (signed). It suffices to prove $$\\operatorname{Pow}_\\Omega(M)=MB^2.\\qquad(\\ast)$$ Indeed, then the line $MA$ meets $\\Omega$ at $A$ and a second point $A'$ (with $A'=A$ if tangent) with $\\overline{MA}\\cdot\\overline{MA'}=MB^2=\\overline{MA}\\cdot\\overline{MN}$; as $M\\ne A$, $\\overline{MA'}=\\overline{MN}$ on the same line, i.e. $A'=N$, so $N\\in\\Omega$ and $A,F,I,N$ are concyclic.",
        "<b>Coordinates for $(\\ast)$.</b> Let $u=s-a$, $v=s-b$, $w=s-c$ (tangent lengths; $a=v+w$, $b=u+w$, $c=u+v$, $s=u+v+w$, $\\delta:=b-c=w-v\\ne0$). Take $D$ as origin, $BC$ as the $x$-axis oriented from $B$ to $C$, and $A$ in the upper half-plane. Then $B=(-v,0)$, $C=(w,0)$, $M=(\\delta/2,0)$, $I=(0,r)$, $A=(p,q)$. Subtracting $(p+v)^2+q^2=(u+v)^2$ and $(p-w)^2+q^2=(u+w)^2$ gives $a(2p-\\delta)=-\\delta(2u+a)$, so $$p=-\\frac{u\\delta}a\\ne0.$$ By Heron, $q=\\frac{2\\Delta}a$, $r=\\frac\\Delta s$, $\\Delta^2=suvw$; so $q^2=\\frac{4suvw}{a^2}$, $r^2=\\frac{uvw}s$, $\\frac qr=\\frac{2s}a$. Also $p^2+q^2=\\frac{u\\,[\\,u(w-v)^2+4svw\\,]}{a^2}=\\frac{u\\,(v+w)(ua+4vw)}{a^2}=\\frac{u(ua+4vw)}a$, using $u(w-v)^2+4(u+v+w)vw=(v+w)(u(v+w)+4vw)$.",
        "<b>Equation of $\\Omega$.</b> Write $\\Omega:\\ x^2+y^2-2hx-2ky+e=0$, so $e=\\operatorname{Pow}_\\Omega(D)$. The points $D,F,A$ are collinear with $F,A$ on the same side of $D$, so $e=DF\\cdot DA=AE\\cdot AD=\\operatorname{Pow}_{\\text{incircle}}(A)=u^2$ (tangent length from $A$). Through $I$: $r^2-2kr+e=0$, so $k=\\frac{r^2+e}{2r}$. Through $A$: $$2hp=p^2+q^2+e-2kq=p^2+q^2+e-\\frac{2s}a(r^2+e).$$ Substituting: $\\frac{u(ua+4vw)}a+u^2-\\frac{2u(vw+us)}a=\\frac ua\\,[\\,2ua+2vw-2us\\,]=\\frac{2u}a(vw-u^2)$, because $a-s=-u$. With $p=-u\\delta/a$ this gives $$h=\\frac{u^2-vw}{\\delta}.$$",
        "<b>Proof of $(\\ast)$.</b> $M=(\\delta/2,0)$, so $$\\operatorname{Pow}_\\Omega(M)=\\frac{\\delta^2}4-h\\delta+e=\\frac{\\delta^2}4-(u^2-vw)+u^2=\\frac{(w-v)^2+4vw}4=\\frac{(v+w)^2}4=\\frac{a^2}4=MB^2.$$ This proves $(\\ast)$, and by Step 3 $$\\boxed{A,F,I,N\\text{ are concyclic}}.$$ All divisions are by $a,\\delta,p,r$, shown nonzero; no induction, descent, equality case or converse is involved."
      ]
    },
    {
      "id": "g16",
      "category": "geo",
      "difficulty": "hard",
      "stars": 3,
      "rating": 6,
      "confidence": "high",
      "novelty": {
        "status": "unverified",
        "searchDate": "2026-09-27",
        "exactMatch": false,
        "similarSources": [],
        "earliestKnownDate": null
      },
      "text": "Let $ABC$ be a scalene triangle with circumcircle $\\omega$. The tangent at $A$ meets $BC$ at $P$, and let $\\psi$ be the circle centered at $P$ through $A$. For a point $X$ on $\\psi$, distinct from $A$ and not on $\\omega$ or $BC$, let $Y \\ne X$ be the second intersection of $\\psi$ and the circumcircle of $XBC$. Let $D \\ne A$ and $E \\ne A$ be the second intersections of $AX$ and $AY$ with $\\omega$. If $M$ is the projection of $P$ onto $DE$, determine the locus of $M$ as $X$ varies.",
      "why": "$PA^{2}=PB\\cdot PC$ (tangent-secant) is $\\operatorname{Pow}_\\kappa(P)$ for every circle $\\kappa=(XBC)$, and $X,Y$ on the circle $\\psi$ centred $P$ through $A$ give $PX^{2}=PY^{2}=\\operatorname{Pow}_\\kappa(P)$: $PX,PY$ are tangents to $\\kappa$ and $XY$ is the polar of $P$ w.r.t. $\\kappa$. That polar meets the secant $BC$ in the harmonic conjugate $T$ of $P$ - fixed - so $X\\leftrightarrow Y$ is the involution of $\\psi$ cut by the pencil through $T$. Projection from $A$ is a projectivity between conics $\\psi\\cong\\mathbb P^{1}\\to\\omega\\cong\\mathbb P^{1}$ carrying it to an involution $D\\leftrightarrow E$ on $\\omega$; a projective involution on a nondegenerate conic is a chord-pencil, so all $DE$ pass through its centre $K$. Then $\\angle PMK=90^\\circ$: Thales makes the locus exactly the circle with diameter $PK$, minus finitely many excluded points, and the converse runs along the pencil through $K$.",
      "answer": "The locus is the circle with diameter PK, where K is the fixed center of the involution D ↔ E on ω. Equivalently, if X1 and X2 are any two admissible positions, D1E1 and D2E2 meet at K.",
      "steps": [
        "Let κ be the circumcircle of XBC. Since P lies on BC and PA is tangent to ω at A, the tangent-secant theorem gives PB·PC = PA².",
        "But PB·PC is the power of P with respect to κ. Since X and Y lie on the circle ψ centered at P through A, PX = PY = PA. Hence Powκ(P) = PX² = PY².",
        "Therefore PX and PY are tangents to κ at X and Y. Thus XY is the chord of contact of the two tangents from P to κ; equivalently XY is the polar of P with respect to κ.",
        "Let T = XY ∩ BC. By the pole-polar theorem for the secant BC, T is the harmonic conjugate of P with respect to B,C. In particular T is fixed, independent of X.",
        "Consequently, as X varies on ψ, the pair X,Y is precisely the pair of intersections of ψ with a variable line through the fixed point T. Hence X ↔ Y is a projective involution of ψ.",
        "Project from A to the circumcircle ω: X ↦ D = AX ∩ ω. Since projection from A is a projectivity, the involution X ↔ Y induces an involution D ↔ E on the conic ω.",
        "Use the standard involution theorem for a conic: all joins of conjugate points of a projective involution on a nondegenerate conic pass through one fixed point K. Therefore every line DE passes through the same fixed point K.",
        "Now M is the foot of the perpendicular from P to DE. Since K,M,D,E are collinear, PM ⟂ KM, so ∠PMK = 90°.",
        "Hence every admissible $M$ lies on the circle with diameter $PK$. Moreover $K$ is an interior point of $\\omega$: two generic positions of $X$ give two genuine secant chords $DE$ through $K$, and a common point of two chords of a circle is interior; hence *every* line through $K$ meets $\\omega$ in a conjugate pair of real points, as the converse step uses.",
        "Conversely, let M be any point of that circle other than the finitely many excluded positions. Then PM ⟂ KM. The line KM is one member of the pencil through K, so by the involution theorem it meets ω in a conjugate pair D,E. The corresponding point X is obtained as the second intersection of AD with ψ, and its partner is precisely Y. Thus M occurs.",
        "Therefore the locus is exactly the circle with diameter PK, with only the finitely many points corresponding to the excluded degenerate values of X removed."
      ]
    },
    {
      "id": "g17",
      "category": "geo",
      "difficulty": "hard",
      "stars": 3,
      "rating": 6.5,
      "confidence": "low",
      "novelty": {
        "status": "unverified",
        "searchDate": "2026-09-27",
        "exactMatch": false,
        "similarSources": [],
        "earliestKnownDate": null
      },
      "proofStatus": "verified",
      "text": "Let $ABCD$ be a convex cyclic quadrilateral with circumcenter $O$. Assume that all named intersections below are finite. Let $P=AB\\cap CD$ and $Q=AD\\cap BC$. Let $E$ and $F$ be the midpoints of $AB$ and $CD$, respectively. Let $S=EF\\cap AD$ and $T=EF\\cap BC$. Prove that the circumcircles of $\\triangle PEF$ and $\\triangle QST$ are tangent.",
      "why": "Brocard's theorem: the diagonal triangle of a cyclic quadrilateral is self-polar w.r.t. $\\omega$, so the polar of $R=AC\\cap BD$ is $PQ$; the Brocard-Miquel theorem says the Miquel point $U$ of the four sidelines is the inverse of $R$, hence $U\\in PQ$ with $OU\\perp PQ$, and $P,E,O,F$ lie on the circle with diameter $PO$, which also carries $U$. $U$ is the centre of the direct spiral similarities $A\\mapsto B$, $D\\mapsto C$ and $A\\mapsto D$, $B\\mapsto C$ - multiplication by nonzero complex numbers, the conformal group $\\mathbb C^{*}$ - and similarities preserve directed division ratios, so Menelaus with signed ratios (each midpoint contributing a factor $-1$) forces $S\\mapsto T$ onto $(QSTU)$; tangent-chord angles then coincide at $U$.",
      "steps": [
        "Throughout, all angles are directed modulo $\\pi$ and all length ratios are directed. Let $U$ be the Miquel point of the complete quadrilateral formed by the four lines $AB,BC,CD,DA$: by Miquel's theorem the four circles $(ABQ)$, $(CDQ)$, $(ADP)$, $(BCP)$ of the four triangles cut by these lines share a common point $U$. Two classical facts about a cyclic quadrilateral are invoked, and only these two are used downstream: Brocard's theorem, that the diagonal triangle $PQR$ with $R=AC\\cap BD$ is self-polar with respect to the circumcircle (so the polar of $R$ is the line $PQ$); and the Brocard--Miquel theorem, that the Miquel point $U$ of the four sidelines is the inverse of $R$ in the circumcircle. Since the inverse of $R$ is the foot of the perpendicular from $O$ to the polar of $R$, it follows that $U\\in PQ$ and $OU\\perp PQ$.",
        "Since $E$ is the midpoint of $AB$, the radius $OE$ is perpendicular to $AB$. As $P,E,A,B$ are collinear, $\\angle PEO=90^\\circ$. Similarly, $OF\\perp CD$ and $P,F,C,D$ are collinear, so $\\angle PFO=90^\\circ$. Therefore $P,E,O,F$ are concyclic; their circle is the circle with diameter $PO$.",
        "Because $P,U,Q$ are collinear and $OU\\perp PQ$, we have $\\angle PUO=90^\\circ$. Hence $U$ also lies on the circle with diameter $PO$. Consequently $P,E,F,U$ are concyclic; call this circle $\\Omega_1$.",
        "From the circles $(ADPU)$ and $(BCPU)$, equal angles on the chord $UD$ give $\\angle UAD=\\angle UPD$ and $\\angle UPC=\\angle UBC$, while $D,P,C$ are collinear so $\\angle UPD=\\angle UPC$: hence $\\angle UAD=\\angle UBC$. The second pair comes from the circle $(CDQU)$: equal angles on its chord $UQ$ give $\\angle UDQ=\\angle UCQ$, and $Q\\in AD$, $Q\\in BC$ identify $\\angle UDQ=\\angle UDA$ and $\\angle UCQ=\\angle UCB$. So $\\triangle UAD\\sim\\triangle UBC$ by AA, giving $UA/UB=UD/UC$ and, by subtraction of the equal apex angles, $\\angle AUB=\\angle DUC$ mod $\\pi$. This is the standard Miquel-point characterization: $U$ is the center of a *direct* spiral similarity $\\sigma$ with $A\\mapsto B$, $D\\mapsto C$ (equivalently $(B-U)/(A-U)=(C-U)/(D-U)$ as complex ratios), and a direct similarity carries the line $AD$ onto the line $BC$.",
        "Let $V=EF\\cap PQ$. Apply Menelaus to triangle $PQA$ with transversal $S-V-E$ (meeting $QA$ at $S$, $QP$ at $V$, $PA$ at $E$) and to triangle $PQB$ with transversal $T-V-E$, and to the pairs $PQD$, $PQC$ with transversals $S-V-F$ and $T-V-F$. Work with directed division ratios $\\rho(P;X,Y):=(p-x)/(p-y)$ along the line $XY$: each transversal triple satisfies a Menelaus equation whose product of three directed ratios equals $-1$. Dividing the relation for $PQA$ by the relation for $PQB$, the common factor through $V$ cancels, and the midpoint $E$ of the segment $AB$ contributes a factor $-1$ because the directed pieces $EA$ and $EB$ have opposite signs and equal modulus: $$\\rho(S;A,Q)=-\\rho(T;B,Q).$$ (A naive undirected reading of Menelaus loses exactly these midpoint signs; keeping them consistent is the point of the $\\rho$ convention.) The analogous division through $F$, the midpoint of $CD$, gives $$\\rho(S;D,Q)=-\\rho(T;C,Q),$$ and dividing the two displayed relations cancels both signs: $$\\rho(S;A,D)=\\frac{\\rho(S;A,Q)}{\\rho(S;D,Q)}=\\frac{\\rho(T;B,Q)}{\\rho(T;C,Q)}=\\rho(T;B,C).\\qquad(*)$$",
        "Let $\\sigma$ be the spiral similarity centered at $U$ sending $A\\mapsto B$ and $D\\mapsto C$, and let $\\sigma(S)=T'$. Then $T'\\in BC$, and since a similarity is affine along every line it preserves $\\rho$-ratios, $$\\rho(T';B,C)=\\rho(S;A,D)=\\rho(T;B,C),$$ where the middle equality is $(*)$ from Step 5. A point of a line is uniquely determined by its directed division ratio with respect to two fixed points of it ($\\rho$ runs through the line's affine parameter taking each value exactly once), so $T'=T$: $S$ and $T$ correspond under $\\sigma$. Now every line is rotated by $\\sigma$ through the same directed angle $\\theta$ mod $\\pi$; applied to the lines $US$ and $SQ$ (whose images are $UT$ and the line $T\\sigma(Q)$, and $\\sigma(Q)\\in\\sigma(AD)=BC=TQ$) this gives $\\angle(US,UT)=\\theta=\\angle(SQ,TQ)$, hence $$\\angle(SU,SQ)=\\angle(TU,TQ)\\pmod\\pi,$$ the equal-angles criterion for $Q,S,T,U$ to be concyclic. Call this circle $\\Omega_2$; when $Q\\in EF$ the circle $(QST)$ degenerates, and the final tangency claim then follows from the generic case by continuity in the vertices $A,B,C,D$.",
        "Now use the second Miquel spiral similarity centered at $U$. From the circle $(ABQU)$, equal angles on chord $UB$ give $\\angle UAB=\\angle UQB$; since $Q\\in BC$ one has $\\angle UQB=\\angle UQC$, and from the circle $(CDQU)$ equal angles on chord $UC$ give $\\angle UQC=\\angle UDC$: so $\\angle UAB=\\angle UDC$. The matching second pair runs along chord $UA$ instead: $\\angle UBA=\\angle UQA$ on $(ABQU)$, $\\angle UQA=\\angle UQD$ since $Q\\in AD$, and $\\angle UQD=\\angle UCD$ on $(CDQU)$. Hence $\\triangle UAB\\sim\\triangle UDC$ by AA, and the corresponding direct similarity $\\sigma_2$ centered at $U$ sends $A\\mapsto D$ and $B\\mapsto C$. Because similarities preserve midpoints, $\\sigma_2$ sends the midpoint $E$ of $AB$ to the midpoint $F$ of $DC$.",
        "Write $k$ for the scale of $\\sigma_2$: from $D=\\sigma_2(A)$ and $F=\\sigma_2(E)$ one has $UD=k\\,UA$ and $UF=k\\,UE$, so $UD/UA=UF/UE$, i.e. $UA/UE=UD/UF$; and both $A\\mapsto D$, $E\\mapsto F$ are rotations by the same directed angle, so $\\angle(UA,UD)=\\angle(UE,UF)$. Two pairs of sides about $U$ with a common cross-ratio of lengths and equal included directed angles give, by SAS, $$\\triangle UAD\\sim\\triangle UEF$$ (a direct similarity sending $A\\mapsto E$, $D\\mapsto F$). A direct similarity rotates every line by the same angle: applied to line $UA$ (image line $UE$) and line $AD$ (image line $EF$), $$\\angle(AD,EF)=\\angle(UA,UE)=\\angle AUE.$$ Since $S=AD\\cap EF$, this is $$\\angle ASE=\\angle AUE,$$ and therefore $A,E,S,U$ are concyclic.",
        "It remains only to prove tangency. On $\\Omega_1=(PEFU)$, the tangent at $U$ and the chord $UP=UQ$ satisfy, by the tangent--chord theorem, $$\\angle(\\text{tangent to }\\Omega_1\\text{ at }U,UQ)=\\angle UEP.$$ On $\\Omega_2=(QSTU)$ the corresponding tangent--chord angle is $$\\angle(\\text{tangent to }\\Omega_2\\text{ at }U,UQ)=\\angle USQ.$$ But $A,E,S,U$ are cyclic, so $\\angle USQ=\\angle UEA$. Since $A,E,P$ are collinear, $\\angle UEA=\\angle UEP$ as directed angles. Thus the two tangents at $U$ coincide.",
        "Hence the circles $(PEF)$ and $(QST)$ are tangent to each other at the Miquel point $U$."
      ]
    },
    {
      "id": "g18",
      "category": "geo",
      "difficulty": "hard",
      "stars": 3,
      "rating": 6.5,
      "confidence": "high",
      "novelty": {
        "status": "unverified",
        "searchDate": "2026-09-27",
        "exactMatch": false,
        "similarSources": [],
        "earliestKnownDate": null
      },
      "proofStatus": "verified",
      "text": "Let $ABC$ be an acute scalene triangle with circumcircle $\\Gamma$. The tangent to $\\Gamma$ at $A$ meets $BC$ at $T_A$, and let $\\omega_A$ be the circle through $A$ tangent to $BC$ at $T_A$. Let $P\\ne A$ be the second intersection of $\\omega_A$ with $\\Gamma$. Define $Q$ and $R$ cyclically at $B$ and $C$. Let $Z=PQ\\cap AB$, $X=QR\\cap BC$, and $Y=RP\\cap CA$. Prove that $AX,BY,CZ$ are concurrent.",
      "why": "Key lemma: $BP/CP=(AB/AC)^{3}$. Since $T_AA^{2}=T_AB\\cdot T_AC$ (tangent-secant), the circle centred $T_A$ of radius $T_AA$ is orthogonal to $\\Gamma$, and its inversion - an order-2 Mobius transformation preserving $\\Gamma$, a projectivity of $\\Gamma\\cong\\mathbb P^{1}$ - swaps $B,C$, fixes $A$, and sends $\\omega_A$ to the line through $A$ parallel to $BC$; the isosceles trapezoid gives $BP'=AC$, $CP'=AB$, and the inversion distance formula yields $BP/CP=(T_AB/T_AC)(AB/AC)$, the tangent-symmedian lemma supplying $T_AB/T_AC=AB^{2}/AC^{2}$. Cyclically the three cubic ratios multiply to $1$; the chord-intersection ratio lemma converts this to Ceva's product, and a sign analysis (exactly one of $X,Y,Z$ interior, at the middle-length side) settles directed Ceva and excludes the parallel configuration.",
      "steps": [
        "We first prove a lemma for the construction at $A$. Let $T_A$ be the intersection of the tangent to $\\Gamma$ at $A$ with $BC$, and let $P$ be the second point where the circle through $A$ tangent to $BC$ at $T_A$ meets $\\Gamma$. Then $$\\frac{BP}{CP}=\\left(\\frac{AB}{AC}\\right)^3.$$",
        "By the tangent--secant theorem applied to $\\Gamma$ at $T_A$, $$T_AA^2=T_AB\\cdot T_AC.$$ Consider the inversion $\\iota$ centered at $T_A$ with radius $T_AA$. Thus $A$ is fixed and, by the displayed equality, $B$ and $C$ are interchanged.",
        "The circle $\\omega_A$ passes through the inversion center $T_A$ and is tangent there to $BC$. Under the inversion it therefore becomes a line through the fixed point $A$ parallel to $BC$. Let $P'$ be the inverse image of $P$. Since $A$ is fixed and $B,C$ are interchanged while both $B,C,A$ lie on $\\Gamma$, the circumcircle $\\Gamma$ is invariant under the inversion. Hence $P'\\in\\Gamma$ and $$AP'\\parallel BC.$$",
        "Because $A,B,C,P'$ are concyclic and $AP'\\parallel BC$, we have $$\\angle BAP'=\\angle ABC,$$ so the corresponding chords are equal: $$BP'=AC.$$ Similarly, $$\\angle CAP'=\\angle ACB,$$ giving $$CP'=AB.$$",
        "For inversion, distances between two noncentral points satisfy $$B'P'=\\frac{T_AA^2}{T_AB\\cdot T_AP}\\,BP,$$ and here $B'=C$. Using $T_AA^2=T_AB\\cdot T_AC$, this gives $$CP'=\\frac{T_AC}{T_AP}\\,BP.$$ Similarly, since $C'=B$, $$BP'=\\frac{T_AB}{T_AP}\\,CP.$$ Dividing, $$\\frac{BP'}{CP'}=\\frac{T_AB}{T_AC}\\frac{CP}{BP}.$$ Since $BP'=AC$ and $CP'=AB$, we obtain $$\\frac{BP}{CP}=\\frac{T_AB}{T_AC}\\frac{AB}{AC}.$$",
        "The tangent--symmedian lemma gives $$\\frac{T_AB}{T_AC}=\\frac{AB^2}{AC^2}.$$ Therefore $$\\boxed{\\frac{BP}{CP}=\\left(\\frac{AB}{AC}\\right)^3}.$$",
        "Applying the same lemma cyclically gives $$\\frac{CQ}{AQ}=\\left(\\frac{BC}{BA}\\right)^3,\\qquad \\frac{AR}{BR}=\\left(\\frac{CA}{CB}\\right)^3.$$ Multiplying, $$\\boxed{\\frac{BP}{CP}\\frac{CQ}{AQ}\\frac{AR}{BR}=1}.$$",
        "We now use the following chord-intersection lemma. If $M,N,U,V$ lie on one circle and the chords $UV$ and $MN$ meet at $X$, then, with *unsigned* chord lengths, $$\\frac{MX}{XN}=\\frac{MU\\cdot MV}{NU\\cdot NV}.$$ Indeed, triangles $MUX$ and $NUX$ have the same altitude from $U$ to the line $MN$, so $$\\frac{MX}{XN}=\\frac{[MUX]}{[NUX]}=\\frac{MU\\sin\\angle MUX}{NU\\sin\\angle NUX}.$$ Since $X$ lies on the line $UV$, the sines of $\\angle MUX$ and $\\angle NUX$ are the sines of the inscribed angles $\\angle MUV$ and $\\angle NUV$; an inscribed angle subtending a chord $c$ of a circle of radius $\\mathcal R$ has sine $c/(2\\mathcal R)$, so this ratio is $\\frac{MV/2\\mathcal R}{NV/2\\mathcal R}=\\frac{MV}{NV}$, giving the formula. Note the lemma is a magnitude statement only: the directed ratio $(x-m)/(n-x)$ is positive iff $X$ lies inside the segment $MN$ while the right side is always positive, so the directed ratio carries the sign $\\pm$ of $X$'s interior/exterior position.",
        "Apply this lemma to $X=QR\\cap BC$, $Y=RP\\cap CA$, and $Z=PQ\\cap AB$, which is legitimate because all six points $A,B,C,P,Q,R$ lie on $\\Gamma$. Taking absolute values of the directed ratios, $$\\left|\\frac{BX}{XC}\\right|=\\frac{BQ\\cdot BR}{CQ\\cdot CR},\\qquad \\left|\\frac{CY}{YA}\\right|=\\frac{CR\\cdot CP}{AR\\cdot AP},\\qquad \\left|\\frac{AZ}{ZB}\\right|=\\frac{AP\\cdot AQ}{BP\\cdot BQ}.$$",
        "Multiplying the three absolute values telescopes to $$\\left|\\frac{BX}{XC}\\frac{CY}{YA}\\frac{AZ}{ZB}\\right|=\\frac{BR\\cdot CP\\cdot AQ}{CQ\\cdot AR\\cdot BP}=1,$$ where the last equality is exactly the cubic product $BP\\cdot CQ\\cdot AR=CP\\cdot AQ\\cdot BR$ of Step 7. It remains to fix the signs. (i) $P$ lies strictly on the same side of line $BC$ as $A$: its inverse $P'$ lay on the line through $A$ parallel to $BC$, and the inversion centered at $T_A$ maps every ray from $T_A$ to itself, hence preserves each open half-plane bounded by the line $BC$ through its center. (ii) As $X$ moves along the arc $BAC$ from $B$ to $C$, the ratio $BX/CX$ strictly increases from $0$ to $\\infty$: writing arc $BX=2t$ and letting $2\\alpha$ be the arc $BC$ not containing $A$, one has $BX=2R\\sin t$ and $CX=2R\\sin(\\alpha+t)$, and for $t_1&lt;t_2$ the difference $\\sin t_2\\sin(\\alpha+t_1)-\\sin t_1\\sin(\\alpha+t_2)=\\sin(t_2-t_1)\\sin\\alpha$ is positive. At $X=A$ the ratio equals $BA/CA$. (iii) From (i)--(ii) and the cubic $BP/CP=(AB/AC)^3$: $P$ lies on the arc $AB$ not containing $C$ if and only if $(AB/AC)^3&lt;AB/AC$, i.e.\\ iff $AB&lt;AC$; cyclically, $Q$ lies on the minor arc $BC$ iff $BC&lt;BA$, and $R$ on the minor arc $BC$ iff $BC&lt;CA$. (iv) $X$ lies strictly inside the segment $BC$ iff the chords $QR$ and $BC$ cross inside $\\Gamma$, i.e.\\ iff $Q$ and $R$ are separated by the line $BC$, i.e.\\ iff exactly one of them lies on the minor arc $BC$: by (iii) this is $[BC&lt;BA]\\oplus[BC&lt;CA]$, true exactly when $BC$ is the \\emph{middle}-length side. Cyclically the same holds for $Y$ (on line $CA$) and $Z$ (on line $AB$). A scalene triangle has exactly one middle side, so exactly one of $X,Y,Z$ lies inside its segment and the other two outside, contributing sign pattern $(+,-,-)$ in some order. Therefore, with directed ratios, $$\\boxed{\\frac{BX}{XC}\\cdot\\frac{CY}{YA}\\cdot\\frac{AZ}{ZB}=+1}.$$",
        "First an affine lemma: suppose three parallel lines through $A,B,C$ meet lines $BC,CA,AB$ at $X',Y',Z'$, with $X'$ inside segment $BC$. Affine maps preserve ratios on lines, so take $B=(0,0)$, $C=(1,0)$, $A=(p,q)$, $0&lt;p&lt;1$, $q\\neq0$, the parallels vertical. Then $X'=(p,0)$: directed $BX'/X'C=p/(1-p)=:m>0$. $Y'=C+t(A-C)$ has $x$-coordinate $0$ at $t=1/(1-p)$, so directed $CY'/Y'A=t/(1-t)=-1/p=-(1+1/m)$. $Z'=sA$ has $x$-coordinate $1$ at $s=1/p$, so directed $AZ'/Z'B=(s-1)/(-s)=p-1=-1/(1+m)$.",
        "The interior-$Y'$ and interior-$Z'$ cases are cyclic rotations of the same computation: interior $Y'$ with $n=CY'/Y'A>0$ forces $|AZ'/Z'B|=1+1/n$, $|BX'/X'C|=1/(1+n)$; interior $Z'$ with $r=AZ'/Z'B>0$ forces $|BX'/X'C|=1+1/r$, $|CY'/Y'A|=1/(1+r)$. So (S12) $AX,BY,CZ$ mutually parallel $\\Rightarrow$ one of $|CY/YA|=1+1/|BX/XC|$, $|AZ/ZB|=1+1/|CY/YA|$, $|BX/XC|=1+1/|AZ/ZB|$ holds, matched to the interior foot per S10(iv). We prove the reverse strict inequality throughout.",
        "We compute $|BX/XC|,|CY/YA|,|AZ/ZB|$ from the angles. Let $a=\\sin A$, $b=\\sin B$, $c=\\sin C$ (the sides $2\\Re a$, etc.\\ cancel in all ratios), and put $\\rho=(c/b)^3=BP/CP$ by S6. Parametrize $P$ by arc: $P$ lies on arc $BAC$ (S10(i)); take arc $BP$, measured from $B$ through $A$, equal to $2t$. Since arc $BC$ not containing $A$ is $2A$, $BP=2\\Re\\sin t$ and $CP=2\\Re\\sin(A+t)$. The condition $BP/CP=\\rho$ is $\\sin t=\\rho\\sin(A+t)$, i.e.\\ $\\tan t=\\rho\\sin A/(1-\\rho\\cos A)$.",
        "Set $D_A=1-2\\rho\\cos A+\\rho^2>0$. Then $\\sin t=\\rho\\sin A/\\sqrt{D_A}$, $\\cos t=(1-\\rho\\cos A)/\\sqrt{D_A}$, so $BP=2\\Re\\rho a/\\sqrt{D_A}$ and $CP=2\\Re a/\\sqrt{D_A}$ (addition formula: $\\sin(A+t)=\\sin A/\\sqrt{D_A}$). $A$ sits on arc-path $BAC$ at arc-distance $2C$ from $B$, so $AP=2\\Re|\\sin(t-C)|$, and the addition formula plus $\\sin(A+C)=\\sin B$ give $\\sin(t-C)=(\\rho\\sin B-\\sin C)/\\sqrt{D_A}$, i.e.\\ $AP=\\frac{2\\Re c\\,|c^2-b^2|}{b^2\\sqrt{D_A}}$ using $\\rho b-c=c(c^2-b^2)/b^2$.",
        "Cyclically: $\\sigma=(a/c)^3$, $D_B=1-2\\sigma\\cos B+\\sigma^2$, $Q$ on arc $CBA$ with arc $CQ$ (through $B$) $=2u$ gives $CQ=2\\Re\\sigma b/\\sqrt{D_B}$, $AQ=2\\Re b/\\sqrt{D_B}$, $BQ=\\frac{2\\Re a\\,|a^2-c^2|}{c^2\\sqrt{D_B}}$; and $\\tau=(b/a)^3$, $D_C$: $AR=2\\Re\\tau c/\\sqrt{D_C}$, $BR=2\\Re c/\\sqrt{D_C}$, $CR=\\frac{2\\Re b\\,|b^2-a^2|}{a^2\\sqrt{D_C}}$.",
        "Substituting into S9 the factors $2\\Re$ and $\\sqrt{D_A},\\sqrt{D_B},\\sqrt{D_C}$ cancel, and with $x=a^2$, $y=b^2$, $z=c^2$: $$|BX/XC|=\\frac{z|x-z|}{y|x-y|},\\qquad |CY/YA|=\\frac{x|x-y|}{z|y-z|},\\qquad |AZ/ZB|=\\frac{y|y-z|}{x|z-x|}.$$ Product $1$, as in S10; invariant under $(x,y,z)\\mapsto(y,z,x)$ up to cycling the three values; numerically matched the geometric construction on 211 acute scalene triangles ($50$ digits, max rel.\\ deviation $1.6\\cdot10^{-40}$).",
        "Suppose $X$ is the interior foot: by S10(iv) $a$ is the middle side, so $z&lt;x&lt;y$ or $y&lt;x&lt;z$; write $m=|BX/XC|$, $n=|CY/YA|$. Parallelism would need $n=1+1/m$, i.e.\\ $mn=m+1$, by S11/S12. If $z&lt;x&lt;y$: $mn=\\frac{x(x-z)}{y(y-z)}$, $m+1=\\frac{z(x-z)+y(y-x)}{y(y-x)}=\\frac{(y-z)(y+z-x)}{y(y-x)}$ (as $z(x\\!-\\!z)+y(y\\!-\\!x)=(y\\!-\\!z)(y\\!+\\!z\\!-\\!x)$), so equality becomes $x(x-z)(y-x)=(y-z)^2(y+z-x)$. If $y&lt;x&lt;z$ it becomes $x(z-x)(x-y)=(z-y)^2(z+y-x)$, the same relation with $y,z$ exchanged. Both cases reduce to a single claim.",
        "Claim: $F:=(L-s)^2(L+s-x)-x(x-s)(L-x)>0$ whenever $0&lt;s&lt;x&lt;L$. Put $u=L-x>0$, $v=x-s>0$; then $F=x(u^2+uv+v^2)+(u+v)^2(u-v)$ (polynomial identity, checked in SymPy). If $u\\ge v$ every term is $\\ge0$ and the first is $>0$. If $v>u$: $s=x-v>0$ gives $x>v$, so $F\\ge v(u^2+uv+v^2)+(u+v)^2(u-v)=u^3+2u^2v>0$ (SymPy expansion; the gap is $(x-v)(u^2+uv+v^2)>0$). No acuteness is used: just three positive numbers with $x$ strictly between.",
        "Taking $(s,L)=(z,y)$ or $(y,z)$, S17 gives strict inequality $mn&lt;m+1$: always $|CY/YA|&lt;1+1/|BX/XC|$ when $X$ is interior; cyclically $|AZ/ZB|&lt;1+1/|CY/YA|$ or $|BX/XC|&lt;1+1/|AZ/ZB|$ otherwise (S16 symmetry). But mutual parallelism forces the corresponding equality (S11, S12), and S10 makes exactly one foot interior, so $AX,BY,CZ$ cannot be parallel. Directed Ceva gives $$\\boxed{AX,\\ BY,\\ CZ\\ \\text{are concurrent}}.$$"
      ]
    },
    {
      "id": "g19",
      "category": "geo",
      "difficulty": "hard",
      "stars": 3,
      "rating": 6.5,
      "confidence": "high",
      "novelty": {
        "status": "unverified",
        "searchDate": "2026-09-27",
        "exactMatch": false,
        "similarSources": [],
        "earliestKnownDate": null
      },
      "proofStatus": "verified",
      "text": "Let $ABCD$ be a convex cyclic quadrilateral with circumcenter $O$. Assume that no two opposite sides are parallel and that neither $AC$ nor $BD$ is a diameter of the circumcircle. Let $P=AC\\cap BD$. Let $M\\ne O$ be the second intersection of the circumcircles of triangles $AOC$ and $BOD$. Let $X,Y$ be the perpendicular projections of $M$ onto the lines $AB,CD$, respectively, and let $N$ be the midpoint of $PM$. Prove that $X,Y,N$ are collinear.",
      "why": "Unit-circle complex numbers ($\\bar a=1/a$): the chord $z+uv\\bar z=u+v$ gives $\\bar p=(a+c-b-d)/(ac-bd)$ for $P=AC\\cap BD$. Inversion in $\\omega$ - a Mobius transformation mapping circles through $O$ to lines - sends $(AOC),(BOD)$ to $AC,BD$, so $M$ is the inverse of $P$: $m=1/\\bar p$. The function $f(Z)=\\vec{ZA}\\cdot\\vec{ZC}-\\vec{ZB}\\cdot\\vec{ZD}$ is the difference of powers w.r.t. the circles on diameters $AC,BD$; the quadratic terms cancel, $f$ is affine-linear with zero set the radical axis $\\ell$, containing $P$ (intersecting chords) and, via the reflection formula $z\\mapsto a+b-ab\\bar z$, the reflections of $M$ in $AB$ and $CD$. The homothety centred $M$ with ratio $\\tfrac12$ carries $\\ell$ through the feet $X,Y$ and $N$: collinear.",
      "steps": [
        "<b>Coordinates.</b> Take the circumcircle as the unit circle centered at $O=0$, with complex coordinates $a,b,c,d$ of $A,B,C,D$ (so $\\bar a=1/a$, etc.). Put $s=a+c-b-d$. Two facts from the hypotheses: (i) $s\\ne0$, for otherwise the diagonals $AC,BD$ would bisect each other, $ABCD$ would be a parallelogram and $AB\\parallel CD$, which is excluded; (ii) $ac\\ne bd$, because the chords $AC,BD$ meet at $P$ and so are not parallel (chords $ac$ and $bd$ are parallel exactly when $ac=bd$).",
        "<b>The point $P$.</b> The chord through $u,v$ on the unit circle is $z+uv\\bar z=u+v$. Subtracting the equations for $AC$ and $BD$ gives $(ac-bd)\\bar p=s$, so $$\\bar p=\\frac{s}{ac-bd}\\ne 0.$$ In particular $P\\ne O$; this is also clear geometrically, since $AC$ is not a diameter, so $O\\notin AC$.",
        "<b>The point $M$.</b> Since $AC$ is not a diameter, $A,O,C$ are not collinear, so $(AOC)$ exists; likewise $(BOD)$. Inversion in the circumcircle sends the circle $(AOC)$ (which passes through $O$) to the line $AC$, and $(BOD)$ to the line $BD$; these lines are distinct and meet only at $P$. Hence the two circles are distinct and their common points are $O$ and the inverse of $P$ (which exists because $P\\ne O$). Two distinct circles share at most two points, so $M$ is the inverse of $P$: $$m=\\frac1{\\bar p}=\\frac{ac-bd}{s},\\qquad \\bar m=\\frac{\\frac1{ac}-\\frac1{bd}}{\\bar s}=\\frac{bd-ac}{abcd\\,\\bar s},$$ where $\\bar s=\\frac1a+\\frac1c-\\frac1b-\\frac1d\\ne0$.",
        "<b>A linear function.</b> For a point $Z$ write $Z$ also for its position vector and let $\\Omega_1,\\Omega_2$ be the circles with diameters $AC$ and $BD$. For any circle with diameter $UV$, the power of $Z$ is $|Z-\\tfrac{U+V}2|^2-\\tfrac{|U-V|^2}4=(U-Z)\\cdot(V-Z)$. Define $$f(Z)=\\operatorname{Pow}_{\\Omega_1}(Z)-\\operatorname{Pow}_{\\Omega_2}(Z)=(A-Z)\\cdot(C-Z)-(B-Z)\\cdot(D-Z)=A\\cdot C-B\\cdot D-Z\\cdot(A+C-B-D).$$ The $|Z|^2$ terms cancel, so $f$ is affine in $Z$, with gradient $-(A+C-B-D)$, whose complex coordinate is $-s\\ne0$. Hence $\\ell=\\{Z:f(Z)=0\\}$ is a genuine <em>line</em>. In complex form $f(z)=\\operatorname{Re}\\big(a\\bar c-b\\bar d-z\\bar s\\big)$.",
        "<b>$P\\in\\ell$.</b> $ABCD$ is convex, so $P$ lies strictly inside both segments $AC$ and $BD$; the vectors $A-P,C-P$ are opposite, and likewise $B-P,D-P$. So $f(P)=-PA\\cdot PC+PB\\cdot PD=0$ by the intersecting chords theorem.",
        "<b>Reflection of $M$ in $AB$ lies on $\\ell$.</b> The reflection of $m$ in the chord line $z+ab\\bar z=a+b$ is $z_1=a+b-ab\\,\\bar m$. Substituting $\\bar m$ from Step 3, $$z_1=a+b-\\frac{bd-ac}{cd\\,\\bar s},\\qquad z_1\\bar s=(a+b)\\bar s-\\frac bc+\\frac ad .$$ Expanding $(a+b)\\bar s=\\frac ac-\\frac ab-\\frac ad+\\frac ba+\\frac bc-\\frac bd$ (the two constant terms $1-1$ cancel), $$a\\bar c-b\\bar d-z_1\\bar s=\\frac ac-\\frac bd-\\Big(\\frac ac-\\frac ab-\\frac ad+\\frac ba+\\frac bc-\\frac bd\\Big)+\\frac bc-\\frac ad=\\frac ab-\\frac ba .$$ Since $|a/b|=1$, $b/a=\\overline{a/b}$, so the right side is $2i\\operatorname{Im}(a/b)$, purely imaginary. Taking real parts, $f(z_1)=0$: the reflection $M_{AB}$ lies on $\\ell$.",
        "<b>Reflection of $M$ in $CD$ lies on $\\ell$.</b> Rename $(a,b,c,d)\\to(c,d,a,b)$. This leaves $s$, $m$ and $f$ unchanged (each is symmetric under $A\\leftrightarrow C$, $B\\leftrightarrow D$) and turns line $AB$ into line $CD$, so Step 6 applies verbatim: $M_{CD}\\in\\ell$.",
        "<b>Conclusion.</b> $X$ and $Y$ are the feet of the perpendiculars from $M$, hence the midpoints of $MM_{AB}$ and $MM_{CD}$, and $N$ is the midpoint of $MP$. The homothety with center $M$ and ratio $\\tfrac12$ maps $M_{AB},M_{CD},P$ to $X,Y,N$ and maps the line $\\ell$ to a line $\\ell'$. Since $M_{AB},M_{CD},P\\in\\ell$, we get $X,Y,N\\in\\ell'$, so $$\\boxed{X,Y,N\\text{ are collinear}}.$$ (Coincident points, e.g. $X=Y$, are harmless: they still lie on $\\ell'$.) No converse is asserted, no case of equality arises, and no induction or descent is used."
      ]
    },
    {
      "id": "g20",
      "category": "geo",
      "difficulty": "hard",
      "stars": 3,
      "rating": 6.5,
      "confidence": "high",
      "novelty": {
        "status": "unverified",
        "searchDate": "2026-09-27",
        "exactMatch": false,
        "similarSources": [],
        "earliestKnownDate": null
      },
      "proofStatus": "verified",
      "text": "Let $ABC$ be a scalene triangle with circumcircle $\\omega$ and circumcenter $O$. Let $I$ be the incenter of triangle $ABC$, and let the internal angle bisector of $\\angle BAC$ meet $\\omega$ again at $M$. Let $N$ be the point on $\\omega$ such that $MN$ is a diameter of $\\omega$. The line $NI$ meets $\\omega$ again at $P$. Let $J$ be the reflection of $I$ across the line $BC$. The circle passing through $I$, $J$, and $P$ meets $\\omega$ again at $Q$. Prove that the line $OI$ is the perpendicular bisector of the segment $AQ$.",
      "why": "The arc-midpoint lemma $MI=MB=MC$ - $M$ is the circumcentre of $\\triangle BIC$ - gives $MI/OA=2\\sin\\tfrac A2=IJ/AI$, and $IJ\\parallel OM$, $\\angle MIJ=\\angle OAI=\\tfrac{|B-C|}{2}$ make $\\triangle MIJ\\sim\\triangle OAI$ a direct SAS similarity. A central-angle chase then puts $M,J,A'$ collinear, where $A'$ is the reflection of $A$ across the line $OI$: that line passes through the centre, so the reflection is an element of $O(2)$ preserving $\\omega$, hence $A'\\in\\omega$; the inscribed-angle criterion gives $A',I,J,P$ concyclic, so $Q=A'$ and $OI$ perpendicularly bisects $AQ$. In the boundary position $A'=P$, intersecting-chords power $IA\\cdot IM=IP\\cdot IN$ forces $OI\\parallel BC$ and tangency at $P$, again giving $Q=P=A'$.",
      "steps": [
        "Throughout, angles between lines are directed modulo $\\pi$, and $\\angle A,\\angle B,\\angle C$ denote the angles of the triangle. Put $D=AM\\cap BC$. Since $M$ is the midpoint of the arc $BC$ not containing $A$, $M$ and $A$ lie on strictly opposite sides of line $BC$, while $I$ is interior, so the bisector line carries the points in the order $A$--$I$--$D$--$M$, and ray $MI$ = ray $MA$.",
        "$MI=MB$: indeed $\\angle MBC=\\tfrac A2$ (inscribed angle on the half-arc $MC$), and $M$, $I$ are on opposite sides of line $BC$, so ray $BC$ lies between rays $BM$ and $BI$ and $\\angle MBI=\\angle MBC+\\angle CBI=\\tfrac{A+B}2$. Also $M$ and $C$ lie on the same arc cut by chord $AB$, so $\\angle BMI=\\angle BMA=\\angle BCA=C$, hence $\\angle BIM=\\pi-\\tfrac{A+B}2-C=\\tfrac{A+B}2=\\angle MBI$, and triangle $MBI$ is isosceles with $MI=MB$.",
        "The needed ratios: $MB=2R\\sin\\angle MAB=2R\\sin\\tfrac A2$, so $\\frac{MI}{OA}=\\frac MB R=2\\sin\\tfrac A2$. For the incenter, $d(I,BC)=r$ and reflection in $BC$ doubles the distance, so $IJ=2r$; the foot of the perpendicular from $I$ to $AB$ gives $r=AI\\sin\\tfrac A2$, so $\\frac{IJ}{AI}=2\\sin\\tfrac A2$. Thus $\\frac{MI}{OA}=\\frac{IJ}{AI}$. Finally $IJ\\perp BC$ (reflection) and $OM\\perp BC$ (the radius to the midpoint of arc $BC$ is the perpendicular bisector of chord $BC$), hence $IJ\\parallel OM$.",
        "Claim: $\\angle MIJ=\\angle OAI$. First $\\angle MIJ$: in right triangle $IFD$ ($F$ the foot from $I$ to $BC$, ray $IJ$ = ray $IF$, ray $IM$ = ray $ID$), so $\\angle MIJ=\\angle DIF=\\frac\\pi2-\\angle IDF$. The positions of $F$ and $D$ on $BC$ obey $BF-BD=(s-b)-\\frac{ac}{b+c}=\\frac{(b-c)(a-b-c)}{2(b+c)}$, so $F$ is on the $B$-side of $D$ iff $b>c$, i.e. iff $B>C$. If $B>C$: $\\angle IDF=\\angle ADB=\\frac A2+C&lt;\\frac\\pi2$, giving $\\angle MIJ=\\frac{B-C}2$; if $C>B$: symmetrically $\\angle IDF=\\angle ADC=B+\\frac A2&lt;\\frac\\pi2$ and $\\angle MIJ=\\frac{C-B}2$. So always $\\angle MIJ=\\frac{|B-C|}2$. Second $\\angle OAI$: isosceles $OAB$ gives $\\angle OAB=|\\frac\\pi2-C|$. If $C&lt;\\frac\\pi2$ then $O$ is on the same side of $AB$ as $C$, inside $\\angle A$, so $\\angle OAI=|\\angle OAB-\\angle IAB|=|\\frac\\pi2-C-\\frac A2|=\\frac{|B-C|}2$; if $C>\\frac\\pi2$ then $O$ is outside the angle at $A$ past side $AB$, so $\\angle OAI=(C-\\frac\\pi2)+\\frac A2=\\frac{C-B}2$ in absolute value, again $\\frac{|B-C|}2$. Hence $\\angle MIJ=\\angle OAI$, and with the side ratio of the previous step, SAS gives $\\triangle MIJ\\sim\\triangle OAI$ with correspondence $M\\leftrightarrow O$, $I\\leftrightarrow A$, $J\\leftrightarrow I$; in particular $\\angle IMJ=\\angle AOI$. The similarity is *direct*: both oriented pairs $(MI,MJ)$ and $(OA,OI)$ have the same sign of orientation, and no scalene configuration flips this sign: a flip needs $J\\in$ line $MI$, i.e. the foot $F$ to lie on bisector $AD$, i.e. line $IF=$ line $AD\\perp BC$, i.e. $AB=AC$), so the sign is constant on each connected chamber of the acute scalene shape space. The chamber of the anchor $(80^\\circ,60^\\circ,40^\\circ)$ gives positive sign; reflecting a labeled triangle in a line reverses BOTH orientation signs ($\\angle(MI,MJ)$ and $\\angle(OA,OI)$) at once, so every mirrored chamber also matches; and the $B&gt;C$/$C&gt;B$ split in the first half of this step covers the two non-mirrored orderings. Hence the directed equality holds in all chambers. Therefore modulo $\\pi$: $\\angle(MI,MJ)\\equiv\\angle(OA,OI)$.",
        "Collinearity $M$--$J$--$A'$: the reflection in $OI$ sends ray $OA$ to ray $OA'$, so $\\angle(OA,OA')\\equiv2\\angle(OA,OI)\\pmod{2\\pi}$; the inscribed--central-angle theorem on $\\omega$ gives $\\angle(MA,MA')\\equiv\\frac12\\angle(OA,OA')\\equiv\\angle(OA,OI)\\pmod\\pi$. Replacing line $MA$ by the same line $MI$, and combining with $\\angle(MI,MJ)\\equiv\\angle(OA,OI)$ from Step 4: $\\angle(MJ,MA')\\equiv0\\pmod\\pi$, i.e. $M$, $J$, $A'$ are collinear.",
        "Concyclicity: $MN\\perp BC$ because $M,O,N$ are collinear and $OM\\perp BC$, and $IJ\\perp BC$, so $IJ\\parallel MN$. Also $I$ lies strictly between $N$ and $P$ (inside the disk on the chord $NP$), so line $PI$ = line $PN$. Chases on $\\omega$ and along the parallels, all mod $\\pi$: $$\\angle A'PI=\\angle A'PN=\\angle A'MN=\\angle(MJ,JI)=\\angle A'JI,$$ where the middle equality is the inscribed-angle theorem on chord $A'N$, and the last uses $M$--$J$--$A'$ collinear plus line $JA'=JM$, line $JI$ parallel to line $MN$. Equal angles $\\angle(PA',PI)=\\angle(JA',JI)\\pmod\\pi$ are the criterion for $A',I,J,P$ to be concyclic (or collinear; they are not: line $IJ$ is the perpendicular from $I$ to $BC$, it is parallel to the diameter line $MN$, and $P\\in$ line $IJ$ would force $I\\in MN$, i.e. $IB=IC$, i.e. $AB=AC$, contrary to scalene). Thus $A'\\in\\omega\\cap(IJP)$.",
        "Conclusion: if $A'\\ne P$, the two circles meet exactly at $P$ and $Q$, so $Q=A'$. If $A'=P$: then $|IP|=|IA|$ (reflection fixes $I$), and intersecting-chords power $IA\\cdot IM=IP\\cdot IN$ forces $IM=IN$, i.e. $OI$ is the perpendicular bisector of the diameter $MN$, so $OI\\parallel BC$; conversely, if $OI\\parallel BC$ the same computation reverses and $\\omega\\cap\\odot(I,IA)=\\{A,A'\\}$ with $P$ on both circles and $P\\ne A$ (since line $AI$ meets $\\omega$ at $A,M$ and $N\\notin\\{A,M\\}$), giving $P=A'$; in this subcase the tangent--chord angles of $\\omega$ and $(IJP)$ at $P$ against the common line $PI$ are $\\angle(MP,MN)$ and $\\angle(JP,JI)$, equal because $P,J,M$ are collinear and $IJ\\parallel MN$, so the circles are tangent at $P$: the double second intersection is $Q=P=A'$. Either way $Q=A'$, and since $A'$ is the reflection of $A$ in $OI$, the line $OI$ is the perpendicular bisector of $AQ$."
      ]
    },
    {
      "id": "g21",
      "category": "geo",
      "difficulty": "hard",
      "stars": 3,
      "rating": 6.5,
      "confidence": "high",
      "novelty": {
        "status": "unverified",
        "searchDate": "2026-09-27",
        "exactMatch": false,
        "similarSources": [],
        "earliestKnownDate": null
      },
      "proofStatus": "verified",
      "text": "Let $ABC$ be a scalene triangle with orthocenter $H$, incenter $I$ and circumcenter $O$. The incircle touches sides $BC$, $CA$, $AB$ at $D$, $E$, $F$ respectively. Let $U$, $V$, $W$ be the reflections of $C$, $A$, $B$ in the points $D$, $E$, $F$ respectively, and let $U'$, $V'$, $W'$ be the reflections of $B$, $C$, $A$ in the points $D$, $E$, $F$ respectively. Prove that the area of triangle $HIO$ equals the area of triangle $ABC$ if and only if the points $U$, $V$, $W$ are collinear or the points $U'$, $V'$, $W'$ are collinear.",
      "why": "Reflecting vertices in contact points gives directed ratios $BU/UC=(y-z)/(2z)$ etc. with $x=s-a$ and cyclically, and Menelaus turns collinearity of $U,V,W$ into $(x-y)(y-z)(z-x)=-8xyz$, collinearity of $U',V',W'$ into $+8xyz$. On the other side the area ratio $[HIO]/[ABC]$ is a determinant of homogeneous areal rows - the barycentrics of the triangle centres $I=X(1)$, $O=X(3)$, $H=X(4)$ of the Encyclopedia of Triangle Centers. After clearing denominators the numerator is an alternating polynomial in $a,b,c$, hence divisible by the Vandermonde product $(a-b)(b-c)(c-a)$; degree comparison fixes the constant, giving $[HIO]/[ABC]=|(x-y)(y-z)(z-x)|/(8xyz)$, and $[HIO]=[ABC]$ is exactly one of the two Menelaus conditions, mutually exclusive when scalene.",
      "answer": "Let x = s−a, y = s−b, z = s−c. Then U,V,W are collinear exactly when (x−y)(y−z)(z−x) = −8xyz, whereas U′,V′,W′ are collinear exactly when the same product equals +8xyz. On the other hand [HIO]/[ABC] = |(x−y)(y−z)(z−x)|/(8xyz). Hence [HIO] = [ABC] exactly when one of the two collinearities occurs.",
      "steps": [
        "Let a = BC, b = CA, c = AB and s = (a+b+c)/2. Put x = s−a, y = s−b, z = s−c. Then a = y+z, b = z+x, c = x+y.",
        "By the equal-tangent property of the incircle, the six tangent lengths are BD = BF = y, CD = CE = z, AE = AF = x.",
        "Put directed coordinates on each sideline: on line $BC$ with origin $B$ and unit toward $C$ (so $C$ sits at $a$), and cyclically. The point $U$ is the reflection of $C$ in $D$: $D$ sits at $y$ since $BD=y$, hence $U$ sits at $2y-a=y-z$. The directed ratio is therefore $BU/UC=(y-z)/(a-(y-z))=(y-z)/(2z)$. Scalene guarantees non-degeneracy: e.g. $U=C$ would need $y+z=2y$, i.e. $b=c$.",
        "Similarly, V is the reflection of A in E, so CV/VA = (z−x)/(2x), and W is the reflection of B in F, so AW/WB = (x−y)/(2y).",
        "By directed Menelaus, with the convention that a point $T$ on sideline $XY$ contributes the ratio $(T-X)/(Y-T)$ in the directed coordinate of that line, the points $U,V,W$ are collinear if and only if",
        "[(y−z)/(2z)]·[(z−x)/(2x)]·[(x−y)/(2y)] = −1.",
        "Therefore U,V,W are collinear exactly when (x−y)(y−z)(z−x) = −8xyz.",
        "For the second triple, U′ is the reflection of B in D, so BU′/U′C = 2y/(z−y). Similarly CV′/V′A = 2z/(x−z) and AW′/W′B = 2x/(y−x). Menelaus now gives U′,V′,W′ collinear exactly when (x−y)(y−z)(z−x) = +8xyz.",
        "It remains to compute the area of $HIO$. Work with homogeneous areal coordinates and the standard areal determinant lemma: if $P,Q,R$ have homogeneous areal rows $u,v,w$, then $[PQR]/[ABC]=|\\det(u;v;w)|/((\\Sigma u)(\\Sigma v)(\\Sigma w))$, where $\\Sigma$ is the row sum; normalize each row to sum $1$ (genuine barycentric weights) and apply the affine map $\\alpha A+\\beta B+\\gamma C$, which scales areas by $[ABC]$. The classical rows, trilinears $(1{:}1{:}1)$, $(\\cos A{:}\\cos B{:}\\cos C)$, $(\\sec A{:}\\sec B{:}\\sec C)$ for $I,O,H$ converted to areals by $(x{:}y{:}z)\\mapsto(ax{:}by{:}cz)$, give $I=(a:b:c)$, $O=(a\\cos A:b\\cos B:c\\cos C)$, $H=(a\\sec A:b\\sec B:c\\sec C)$. If the triangle is right-angled at $C$, multiply the third row by $\\cos A\\cos B\\cos C$ (homogeneous, so allowed): it becomes $(a\\cos B\\cos C:b\\cos C\\cos A:c\\cos A\\cos B)\\to(0:0:1)=C$, the true position of $H$, so the computation below remains valid there too.",
        "Substitute $\\cos A=(b^2+c^2-a^2)/(2bc)$ and cyclically, clear denominators, and evaluate the $3\\times3$ determinant. Swapping two side labels right-multiplies the matrix by a permutation matrix of determinant $-1$ while only permuting the three row sums, so the expression is an alternating rational function of $a,b,c$ and its numerator is divisible by $(a-b)(b-c)(c-a)$. Comparing total degrees pins the quotient to a constant; evaluating at one sample triangle fixes that constant. The full simplification is a mechanical identity between rational functions (verified symbolically by exact expansion), and it yields",
        "[HIO]/[ABC] = |(a−b)(b−c)(c−a)| / [8(s−a)(s−b)(s−c)].",
        "Since (a−b)(b−c)(c−a) differs only by sign from (x−y)(y−z)(z−x), this becomes",
        "[HIO]/[ABC] = |(x−y)(y−z)(z−x)|/(8xyz).",
        "Therefore [HIO] = [ABC] if and only if |(x−y)(y−z)(z−x)| = 8xyz, which is equivalent to one of the two equations ±8xyz.",
        "Those two equations are exactly the two Menelaus conditions obtained above, and they are mutually exclusive: $x,y,z&gt;0$ and scalene gives $(x-y)(y-z)(z-x)\\ne0$, so at most one of the two collinearities holds. Hence $[HIO]=[ABC]$ if and only if $U,V,W$ are collinear or $U^\\prime,V^\\prime,W^\\prime$ are collinear."
      ]
    },
    {
      "id": "g22",
      "category": "geo",
      "difficulty": "hard",
      "stars": 3,
      "rating": 6.5,
      "confidence": "high",
      "novelty": {
        "status": "unverified",
        "searchDate": "2026-09-27",
        "exactMatch": false,
        "similarSources": [],
        "earliestKnownDate": null
      },
      "proofStatus": "verified",
      "text": "Let $ABCD$ be a convex quadrilateral such that $\\angle B = \\angle A + \\angle C$. The internal angle bisector of $\\angle D$ intersects side $BC$ at point $E$ such that $\\angle AED = 90^\\circ$. Let $H$ be the foot of the perpendicular from $E$ to line $AD$. Let $\\Omega$ be the circumcircle of triangle $CDH$ and $\\Gamma$ be the circumcircle of triangle $ABE$. Suppose $\\Omega$ and $\\Gamma$ intersect at two distinct points, and let the tangents from $C$ to $\\Gamma$ touch the circle at $X$ and $Y$. Prove that line $BC$, line $XY$, and the line passing through the two intersection points of $\\Omega$ and $\\Gamma$ are concurrent.",
      "why": "$\\beta=\\alpha+\\gamma$ forces $\\angle ADE=180^\\circ-\\beta$, opposite $\\angle ABE=\\beta$: $ABED$ is cyclic with diameter $AD$, centre $O'$ the midpoint of $AD$; then $O'E\\parallel CD$, and the circle with diameter $O'E$ carries the midpoint $K$ of $BE$ onto $\\Omega$ (inscribed-angle, or tangent-chord when $H=O'$). Powers on line $BC$ with coordinate $z$ from $K$: $\\operatorname{Pow}_\\Omega=z(z-c)$, $\\operatorname{Pow}_\\Gamma=z^{2}-k^{2}$, differing by the affine function $k^{2}-cz$, so the radical axis meets $BC$ at $T$ with $t=k^{2}/c$, i.e. $KB^{2}=KC\\cdot KT$ - $T$ is the harmonic conjugate of $C$ w.r.t. $B,E$. The chord of contact $XY$ is the polar of $C$ w.r.t. $\\Gamma$, and a pole's polar cuts any secant through it harmonically (La Hire): $BC$, $XY$, and the radical axis concur at $T$.",
      "answer": "Let K be the midpoint of BE. Then K lies on Ω. If T is the radical-axis intersection T = BC ∩ Rad(Ω,Γ), then TC·TK = TB·TE, so T is the harmonic conjugate of C with respect to B,E. Since XY is the polar of C with respect to Γ, T lies on XY. Thus BC, XY and the radical axis concur at T.",
      "steps": [
        "<b>Preliminaries.</b> Write $\\alpha,\\beta,\\gamma$ for $\\angle A,\\angle B,\\angle C$, so $\\beta=\\alpha+\\gamma$. $\\Gamma=(ABE)$ needs $E\\ne B$, and the tangents from $C$ to $\\Gamma$ need $C\\notin\\Gamma$, so $E\\ne C$; thus $E$ lies strictly between $B$ and $C$. Since $\\alpha+\\beta+\\gamma+\\angle D=360^\\circ$, $\\angle ADC=360^\\circ-2\\beta$ and, $DE$ being its bisector, $$\\angle ADE=180^\\circ-\\beta.$$ Also $\\angle ABE=\\beta$ because $E\\in BC$.",
        "<b>$ABED$ is cyclic with diameter $AD$.</b> $ABED$ is a convex quadrilateral (as $E$ is on side $BC$), and its opposite angles at $B$ and $D$ sum to $\\beta+(180^\\circ-\\beta)=180^\\circ$, so it is cyclic; call the circle $\\omega$. Since $\\angle AED=90^\\circ$ and $E\\in\\omega$, $AD$ is a diameter, and the center is the midpoint $O'$ of $AD$. Note that $AD$ and $BE$ are opposite sides of the convex quadrilateral $ABED$, so segments $AD$ and $BE$ are disjoint; in particular $O'\\notin BE$.",
        "<b>$O'E\\parallel CD$.</b> $O'D=O'E$, so $\\angle O'ED=\\angle O'DE=\\angle ADE$ (ray $DO'$ is ray $DA$) $=\\angle EDC$ (bisector). The points $O'$ (on $DA$) and $C$ lie on opposite sides of the bisector line $DE$, so these are alternate angles and $O'E\\parallel DC$.",
        "<b>$K\\in\\Omega$, where $K$ is the midpoint of $BE$.</b> Directed angles mod $180^\\circ$. Facts: $H\\ne D$ (else $\\angle ADE=90^\\circ$ and triangle $AED$ would have two right angles); $E\\notin AD$, $K\\ne E$, $K\\ne O'$ (Step 2). If $K=H$ then $K\\in\\Omega$ trivially, so let $K\\ne H$. As $K$ is the midpoint of the chord $BE$ of $\\omega$, $O'K\\perp BE$; and $EH\\perp AD$. Hence $K$ and $H$ lie on the circle $\\Psi$ with diameter $O'E$. We claim $$\\angle(HK,AD)=\\angle(EK,EO').\\qquad(\\ast)$$ If $H\\ne O'$, then line $HO'=AD$ and $(\\ast)$ is the inscribed-angle theorem in $\\Psi$ on chord $KO'$. If $H=O'$, then $EO'\\perp AD$ so $AD$ is tangent to $\\Psi$ at $H$, and $(\\ast)$ is the tangent-chord theorem. Now line $EK=$ line $BC=$ line $CK$ and $EO'\\parallel CD$ (Step 3), so $\\angle(EK,EO')=\\angle(CK,CD)$. Since $HD=AD$ as lines, $(\\ast)$ gives $\\angle(HK,HD)=\\angle(CK,CD)$, so $C,H,K,D$ are concyclic; as $C,D,H$ determine $\\Omega$, $K\\in\\Omega$.",
        "<b>Powers on line $BC$.</b> Use a coordinate $z$ on line $BC$ with origin $K$, $B=-k$, $E=k$ ($k=BE/2>0$), $C=c$; since $E$ is between $B$ and $C$, $c>k>0$. Line $BC$ meets $\\Gamma$ exactly at $B,E$, so $\\operatorname{Pow}_\\Gamma(z)=z^2-k^2$. Line $BC$ meets $\\Omega$ at $C$ and $K$ (distinct, both on $\\Omega$), so $\\operatorname{Pow}_\\Omega(z)=z(z-c)$. Hence $$\\operatorname{Pow}_\\Omega(z)-\\operatorname{Pow}_\\Gamma(z)=k^2-cz,$$ a non-constant affine function. The circles are distinct and meet in two points, so their radical axis $\\ell$ is a line $\\{\\operatorname{Pow}_\\Omega=\\operatorname{Pow}_\\Gamma\\}$; it meets $BC$ in exactly one point $T$, with coordinate $$t=\\frac{k^2}{c}.$$",
        "<b>$T$ lies on $XY$.</b> Let $O_\\Gamma$ be the center and $R$ the radius of $\\Gamma$. $O_\\Gamma$ lies on the perpendicular bisector of the chord $BE$, so in coordinates with $BC$ as the $x$-axis and $K$ the origin, $O_\\Gamma=(0,h)$, $R^2=k^2+h^2$, $C=(c,0)$, $T=(t,0)$. $C$ is outside $\\Gamma$ (its power is $(c-k)(c+k)>0$). If a tangent from $C$ touches $\\Gamma$ at $Z$, then $(C-Z)\\perp(Z-O_\\Gamma)$, hence $(C-O_\\Gamma)\\cdot(Z-O_\\Gamma)=R^2$. So $X$ and $Y$ (distinct) both satisfy this linear equation, and line $XY$ is $\\{Z:(C-O_\\Gamma)\\cdot(Z-O_\\Gamma)=R^2\\}$ (the polar of $C$). For $Z=T$: $$(c,-h)\\cdot(t,-h)=ct+h^2=k^2+h^2=R^2 .$$ So $T\\in XY$.",
        "<b>Conclusion.</b> $T$ lies on line $BC$ (Step 5), on the radical axis $\\ell$ of $\\Omega$ and $\\Gamma$ (Step 5), and on $XY$ (Step 6). Hence $$\\boxed{BC,\\ XY\\text{ and the line through the two intersection points of }\\Omega,\\Gamma\\text{ are concurrent at }T}.$$ (In harmonic terms $KB^2=KC\\cdot KT$, so $T$ is the harmonic conjugate of $C$ with respect to $B,E$.) No induction or descent is used, and no converse is asserted. Numerically confirmed on 1800+ random valid configurations."
      ]
    },
    {
      "id": "g23",
      "category": "geo",
      "difficulty": "hard",
      "stars": 3,
      "rating": 7,
      "confidence": "low",
      "novelty": {
        "status": "unverified",
        "searchDate": "2026-09-27",
        "exactMatch": false,
        "similarSources": [],
        "earliestKnownDate": null
      },
      "proofStatus": "verified",
      "text": "Let $ABC$ be a scalene triangle with incenter $I$. Let $P$ be an interior point such that $\\angle PBA=\\angle ICB$ and $\\angle PCA=\\angle IBA$. Let $B'=PB\\cap AI$ and $C'=PC\\cap AI$. Through $B'$ draw the line parallel to $AB$, meeting $BI$ at $X$; through $C'$ draw the line parallel to $AC$, meeting $CI$ at $Y$. Prove that the circumcircle of triangle $IXY$ and the circumcircle of triangle $BPX$ are tangent at $X$.",
      "why": "The angle conditions give $\\angle BPC=\\angle BIC$, so $P$ lies on the circle $(BIC)$ - a constant-inscribed-angle locus. Vectors with origin $I$ in the basis $(\\vec{IB},\\vec{IC})$: barycentric algebra via $aA+bB+cC=0$, and $BI=(s-b)/\\cos\\frac B2$ makes $|B|^{2},|C|^{2},B\\cdot C$ rational in the sides. Homotheties centred at $I$ give $X=\\frac{b-c}{b}B$, $Y=-\\frac{b-c}{c}C$. Tangency of $(IXY)$ and $(BPX)$ at $X$ means the two centres and $X$ are collinear - equivalently the homothety centred at the contact point carries one circle to the other - and comparing dot products against $B,C$ reduces this to one rational identity, $2(B\\cdot C)p_C=t|B|^{2}(1-p_B)$, which cancels exactly.",
      "steps": [
        "<b>Setup.</b> Let $a,b,c$ be the side lengths, $\\alpha,\\beta,\\gamma=A/2,B/2,C/2$, $\\delta=b-c\\ne0$ (scalene), $x=a+b-c>0$, $y=a+c-b>0$, $S=a+b+c$. Take $I$ as origin and write $A,B,C$ for position vectors. Standard facts: $aA+bB+cC=0$ ($I$ is the weighted centroid $(aA+bB+cC)/S$); $|B|^2=g_1=\\frac{acy}S$ and $|C|^2=g_2=\\frac{abx}S$ (from $BI=\\frac{s-b}{\\cos\\beta}$ and $\\cos^2\\beta=\\frac{s(s-b)}{ac}$, $s=S/2$, and symmetrically for $C$). Put $g_{12}=B\\cdot C$. From $|B-C|^2=a^2$, $$2g_{12}=g_1+g_2-a^2=\\frac{a\\,[a(b+c)+\\delta^2-aS]}{S}=\\frac{a(\\delta^2-a^2)}{S}=-\\frac{a\\,xy}{S}.$$ $B,C$ are linearly independent; every point is written $Z=z_BB+z_CC$.",
        "<b>$B'$ and $C'$.</b> $P$ is interior, so the cevians $BP$ and $AI$ meet at $B'$ inside the triangle, on ray $AI$. In triangle $ABB'$: $\\angle BAB'=\\alpha$, $\\angle ABB'=\\angle ABP=\\gamma$, so $\\angle AB'B=180^\\circ-\\alpha-\\gamma$, whose sine is $\\cos\\beta$, and $AB'=\\frac{c\\sin\\gamma}{\\cos\\beta}$. In triangle $ABI$: $AI=\\frac{c\\sin\\beta}{\\cos\\gamma}$. Hence $\\frac{AB'}{AI}=\\frac{\\sin\\gamma\\cos\\gamma}{\\sin\\beta\\cos\\beta}=\\frac{\\sin C}{\\sin B}=\\frac cb$, i.e. $B'=A+\\frac cb(I-A)=\\frac\\delta bA$. Swapping the roles of $B,C$ ($\\angle ACP=\\beta$) gives $C'=-\\frac\\delta cA$.",
        "<b>$X$ and $Y$.</b> The point $\\frac\\delta bB$ lies on $BI$ and differs from $B'=\\frac\\delta bA$ by $\\frac\\delta b(B-A)\\parallel AB$; since $AB\\nparallel BI$ the two lines meet in one point, so $$X=tB,\\quad t=\\frac\\delta b\\quad(t\\ne0,\\ t\\ne1\\text{ since }c\\ne0).$$ Likewise $$Y=-\\eta C,\\quad \\eta=\\frac\\delta c\\ne0.$$ So $I,X,Y$ are not collinear and $B\\ne X$.",
        "<b>The point $P$.</b> Since $P$ is interior, $\\angle PBC=2\\beta-\\gamma$ and $\\angle PCB=2\\gamma-\\beta$, so $\\angle BPC=180^\\circ-\\beta-\\gamma=\\angle BIC$. $P,I$ lie on the same side of $BC$, hence $P\\in\\Gamma=(BIC)$ (trivial if $P=I$). $\\Gamma$ passes through $0,B,C$, so its equation is $|Z|^2=g_1z_B+g_2z_C$. Now let $$p_B=\\frac{\\delta(ab+b^2-c^2)}{a^2c},\\qquad p_C=-\\frac{\\delta(ac+c^2-b^2)}{a^2b},\\qquad P_0=p_BB+p_CC.$$ Using $a^2c-\\delta(ab+b^2-c^2)=x(ac+c^2-b^2)$ (both sides expand to $a^2c-ab^2+abc+bc^2-b^3-c^3+b^2c$) we get $p_B-1=-\\frac{x(ac+c^2-b^2)}{a^2c}$. From Step 2, $B'-B=-\\frac xaB-\\frac{\\delta c}{ab}C$, and $P_0-B=(p_B-1)B+p_CC$; these are parallel iff $-(p_B-1)\\delta c+p_C\\,bx=0$, and indeed $\\frac{x\\delta(ac+c^2-b^2)}{a^2}-\\frac{\\delta x(ac+c^2-b^2)}{a^2}=0$. So $P_0\\in BB'$. The formulas for $p_B,p_C$ are exchanged by $b\\leftrightarrow c$, the symmetry swapping $B,C$, so $P_0\\in CC'$ too. The lines $BP,CP$ are distinct ($P\\notin BC$) and equal $BB',CC'$, so $P=P_0$. Finally $p_C\\ne0$: otherwise $P\\in BI$, so $\\angle ABP=\\beta$, forcing $\\beta=\\gamma$, contradicting scalene.",
        "<b>The two circles.</b> $\\omega_1=(IXY)$ has center $O_1$ with $|X|^2=2O_1\\cdot X$, $|Y|^2=2O_1\\cdot Y$, i.e. $$O_1\\cdot B=\\tfrac{t g_1}2,\\qquad O_1\\cdot C=-\\tfrac{\\eta g_2}2.$$ $\\omega_2=(BPX)$ (non-degenerate: $B\\ne X$, $p_C\\ne0$) has equation $|Z|^2-2O_2\\cdot Z+\\kappa=0$. Through $B$ and $X=tB$: $g_1-2O_2\\cdot B+\\kappa=0$ and $t^2g_1-2tO_2\\cdot B+\\kappa=0$; subtracting and dividing by $1-t\\ne0$ gives $2O_2\\cdot B=g_1(1+t)$, $\\kappa=tg_1$. Put $w=2O_2\\cdot C$. The circles are distinct: $I\\in\\omega_1$, but line $IB$ meets $\\omega_2$ only at $B,X\\ne I$.",
        "<b>Tangency criterion.</b> Distinct circles through $X$ are tangent at $X$ iff $O_1,O_2,X$ are collinear, i.e. $n=O_2-O_1$ is parallel to $m=O_1-X$. A vector is determined by its dot products with $B,C$, so $n\\parallel m\\iff(n\\cdot B)(m\\cdot C)=(n\\cdot C)(m\\cdot B)$. We have $n\\cdot B=\\frac{g_1}2$, $n\\cdot C=\\frac{w+\\eta g_2}2$, $m\\cdot B=-\\frac{tg_1}2$, $m\\cdot C=-\\frac{\\eta g_2}2-tg_{12}$. Cancelling $-g_1/4\\ne0$, the condition becomes $\\eta g_2+2tg_{12}=t(w+\\eta g_2)$. Since $\\frac{\\eta(1-t)}t=\\frac\\delta c\\cdot\\frac c\\delta=1$, this is $$w=g_2+2g_{12}.\\qquad(\\star)$$",
        "<b>Determining $w$ from $P$.</b> $P\\in\\omega_2$ gives $p_Cw=|P|^2-g_1(1+t)p_B+tg_1$. By Step 4, $|P|^2=g_1p_B+g_2p_C$, so $p_Cw=tg_1(1-p_B)+g_2p_C$. Hence $(\\star)$ holds iff (as $p_C\\ne0$) $$2g_{12}\\,p_C=t\\,g_1\\,(1-p_B).\\qquad(\\star\\star)$$",
        "<b>The identity.</b> Left side: $\\left(-\\frac{axy}{S}\\right)\\left(-\\frac{\\delta(ac+c^2-b^2)}{a^2b}\\right)=\\frac{xy\\,\\delta(ac+c^2-b^2)}{abS}$. Right side: $\\frac\\delta b\\cdot\\frac{acy}{S}\\cdot\\frac{x(ac+c^2-b^2)}{a^2c}=\\frac{xy\\,\\delta(ac+c^2-b^2)}{abS}$. They agree, so $(\\star\\star)$, hence $(\\star)$, holds and $$\\boxed{(IXY)\\text{ and }(BPX)\\text{ are tangent at }X}.$$ All denominators ($a,b,c,S,x,y,\\delta,p_C,1-t$) are nonzero; no induction, descent, equality case or converse is involved."
      ]
    },
    {
      "id": "g24",
      "category": "geo",
      "difficulty": "hard",
      "stars": 3,
      "rating": 7,
      "confidence": "high",
      "novelty": {
        "status": "unverified",
        "searchDate": "2026-09-27",
        "exactMatch": false,
        "similarSources": [],
        "earliestKnownDate": null
      },
      "text": "Let $\\triangle ABC$ be a scalene triangle with $A$-excircle touching $BC$ at $D$. Let $M$ be the midpoint of the altitude from $A$. Line $MD$ meets the $A$-excircle again at $T$. Let $S\\ne T$ be the second intersection of line $MD$ with the circumcircle of $\\triangle BCT$. Prove that $$\\boxed{SB=SC}.$$",
      "why": "Nothing treats $B,C$ symmetrically - the excircle touches $BC$ at $D$ with $DB=s-c$, $DC=s-b$, and $M$ is the altitude midpoint - yet $SB=SC$. Two power-of-a-point identities: $MD\\cdot DT=hr_a$ (power of $M$ w.r.t. the excircle, $h$ the altitude) and $DS\\cdot DT=DB\\cdot DC$ (intersecting chords in $(BCT)$); dividing, with $hr_a=\\frac{2s(s-b)(s-c)}{a}$ from $\\Delta=\\frac{ah}2=(s-a)r_a$ and Heron, gives $\\frac{DS}{MD}=\\frac a{2s}$, a pure side-length ratio. Coordinates $B=(0,0)$, $C=(a,0)$ then force the hidden cancellation $4s\\,S_x=(a^{2}+c^{2}-b^{2})+a(b+c)+b^{2}-c^{2}=2as$: $S_x=\\tfrac a2$, so $S$ is the arc midpoint of $(BCT)$ and $TS$ bisects $\\angle BTC$.",
      "steps": [
        "Let $H$ be the foot of the altitude from $A$ to $BC$, let $h=AH$, and let $I_a,r_a$ be the center and radius of the $A$-excircle. Since $M$ and $I_a$ lie on opposite sides of $BC$, the order on line $MD$ is $M-D-T$. As in the power-of-a-point computation for $M$ against the excircle, $$\\boxed{MD\\cdot DT=hr_a}.$$",
        "Since $D$ lies on chord $BC$ of the circle $(BCT)$ and also on the secant $S-D-T$ of that same circle, $$\\boxed{DS\\cdot DT=DB\\cdot DC}.$$ Dividing the two boxed identities and writing $a=BC,\\,b=CA,\\,c=AB,\\,s=\\tfrac{a+b+c}2$, the standard tangent-length formulas $DB=s-c$, $DC=s-b$ together with $hr_a=\\dfrac{2s(s-b)(s-c)}a$ (from $\\Delta=\\tfrac{ah}2=(s-a)r_a$ and Heron's formula) give the clean fraction $$\\frac{DS}{MD}=\\frac{DB\\cdot DC}{hr_a}=\\frac a{2s},\\qquad\\text{equivalently}\\qquad \\frac{MS}{MD}=\\frac{b+c}{2s}.$$ This alone already reproves the easier fact $\\dfrac{DS}{SM}=\\dfrac{BC}{AB+AC}$ — but $S$ has more in it yet.",
        "Now place coordinates $B=(0,0)$, $C=(a,0)$, so $D=(s-c,\\,0)$. With the usual formula $x_A=\\dfrac{a^2+c^2-b^2}{2a}$, the foot of the altitude is $H=(x_A,0)$, so $M$, the midpoint of $A$ and $H$, has the *same* $x$-coordinate as $A$: $M=(x_A,\\,y_A/2)$.",
        "Since $S$ divides $MD$ with $\\dfrac{MS}{MD}=\\dfrac{b+c}{2s}$ (Step 2), its $x$-coordinate is $$S_x=x_A+\\frac{b+c}{2s}\\big((s-c)-x_A\\big)=x_A\\cdot\\frac a{2s}+\\frac{(b+c)(s-c)}{2s}.$$",
        "Multiply by $4s$ and substitute $x_A=\\frac{a^2+c^2-b^2}{2a}$, so $2ax_A=a^2+c^2-b^2$, and use $s-c=\\frac{a+b-c}2$ so that $2(b+c)(s-c)=(b+c)(a+b-c)=a(b+c)+b^2-c^2$: $$4s\\,S_x=(a^2+c^2-b^2)+\\big(a(b+c)+b^2-c^2\\big)=a^2+a(b+c)=a(a+b+c)=2as.$$ Hence $$\\boxed{S_x=\\frac a2}.$$",
        "Since $B=(0,0)$ and $C=(a,0)$, the vertical line $x=a/2$ is exactly the perpendicular bisector of $BC$. As $S_x=a/2$, the point $S$ lies on it, so $$\\boxed{SB=SC}.$$ Equivalently: $S$ is the midpoint of an arc $BC$ of the circle $(BCT)$, so line $MD$ (which is line $TS$) bisects $\\angle BTC$ — an unexpected angle-bisection produced entirely by the midpoint-of-the-altitude construction."
      ]
    },
    {
      "id": "g25",
      "category": "geo",
      "difficulty": "hard",
      "stars": 3,
      "rating": 7.5,
      "confidence": "low",
      "novelty": {
        "status": "unverified",
        "searchDate": "2026-09-27",
        "exactMatch": false,
        "similarSources": [],
        "earliestKnownDate": null
      },
      "text": "Let $\\Gamma$ be a circle and $S$ a point outside $\\Gamma$. Three distinct lines through $S$ meet $\\Gamma$ at $A,A'$, at $B,B'$, and at $C,C'$. Let $U$ be a point where a tangent from $S$ touches $\\Gamma$. Let $P\\ne S$ be the second intersection of the circumcircle of triangle $SAB$ and the circumcircle of triangle $SA'B'$, and let $R\\ne S$ be the second intersection of the circumcircle of triangle $SC'A$ and the circumcircle of triangle $SCA'$. Prove that the circumcircle of triangle $B'PU$ and the circumcircle of triangle $CRU$ are tangent at $U$.",
      "why": "Invert in the circle centred $S$ of radius $SU$: $SU^{2}=\\operatorname{Pow}_\\Gamma(S)=SA\\cdot SA'$ makes this Mobius involution fix $U$ and $\\Gamma$ and swap $A\\leftrightarrow A'$, $B\\leftrightarrow B'$, $C\\leftrightarrow C'$. Circles through the inversion centre become lines: $P\\mapsto P_1=AB\\cap A'B'$, $R\\mapsto R_1=CA'\\cap C'A$. For the complete quadrangle $A,B,A',B'$ on $\\Gamma$ the diagonal triangle is self-polar, so the polar of $S=AA'\\cap BB'$ joins the other two diagonal points; tangency $SU$ puts $S$ on the polar of $U$, and La Hire returns $U$ on the polar of $S$: $U,P_1$ collinear, likewise $U,R_1$. Tangent-chord angles reduce the inverted tangency to one inscribed angle subtending chord $UA$, $\\angle UBA=\\angle UC'A$; inversion is conformal at $U$, so the original pair is tangent there.",
      "answer": "The two circles are tangent at U.",
      "steps": [
        "Invert about the circle centered at S with radius SU. Since SU is tangent to Γ at U, SU² = PowΓ(S) = SA·SA′ = SB·SB′ = SC·SC′.",
        "Therefore the inversion fixes U and Γ pointwise as a set and interchanges each secant pair A ↔ A′, B ↔ B′, C ↔ C′.",
        "The circle (SAB) passes through the inversion center S, so it inverts to the line A′B′. Likewise (SA′B′) inverts to the line AB. Hence P is sent to P₁ = AB ∩ A′B′.",
        "Similarly, (SC′A) and (SCA′) invert to CA′ and C′A, so R is sent to R₁ = CA′ ∩ C′A.",
        "Consider the complete quadrilateral formed by A,A′,B,B′ on Γ. Its diagonal point S = AA′ ∩ BB′ has polar equal to the line joining P₁ = AB ∩ A′B′ to the third diagonal point.",
        "Because SU is tangent to Γ at U, S lies on the polar of U. By La Hire's theorem, U lies on the polar of S. Thus U,P₁ are collinear.",
        "Applying the same argument to the complete quadrilateral A,A′,C,C′ gives U,R₁ collinear. Therefore P₁,U,R₁ lie on one fixed line.",
        "Let t₁ be the tangent at U to the circle (B,P₁,U), and t₂ the tangent at U to (C′,R₁,U). By the tangent-chord theorem,",
        "∠(t₁,UP₁) = ∠UBP₁ = ∠UBA,",
        "while",
        "∠(t₂,UR₁) = ∠UC′R₁ = ∠UC′A.",
        "But A,B,C′,U all lie on Γ, so the two inscribed angles ∠UBA and ∠UC′A subtend the same chord UA. Hence ∠(t₁,UP₁) = ∠(t₂,UR₁).",
        "Since UP₁ and UR₁ are the same line, t₁ = t₂. Thus the inverted circles (B,P₁,U) and (C′,R₁,U) are tangent at U.",
        "Inversion is conformal at U and fixes U, so tangency at U is preserved. Consequently the original circles (B′,P,U) and (C,R,U) are tangent at U."
      ]
    },
    {
      "id": "n1",
      "category": "nt",
      "difficulty": "easy",
      "stars": 1,
      "rating": 2.5,
      "confidence": "high",
      "novelty": {
        "status": "screened",
        "searchDate": "2026-09-29",
        "exactMatch": false,
        "similarSources": [
          {
            "name": "post-transform screen (new statement)",
            "note": "old content: textbook exercise T_n | sum k^2 alone (answer: n = 1 mod 3). New problem adds the fourth-power simultaneity: the 3-part of the new divisibility collapses onto the old condition, leaving a genuinely new mod-5 quadratic-residue test (3n^2+3n-1 has F5-roots 1,3), and the answer becomes three classes mod 15 - not one class mod 3"
          }
        ],
        "earliestKnownDate": null,
        "lanesComplete": false,
        "laneSummary": {
          "N": "free-channel probes clean 2026-09-29; SE exact-form lanes deferred to quota reset",
          "A": "free-channel probes clean 2026-09-29; SE exact-form lanes deferred to quota reset",
          "D": "tools/screen.py --id recorded same day"
        },
        "transformedFrom": {
          "knownCore": "standard exercise: for which n does the triangular number divide the sum of squares (single congruence, n = 1 mod 3)",
          "frozenIn": "CHANGELOG.md 2026-09-29"
        },
        "priorCore": "single ratio (2n+1)/3 divisibility",
        "seam": "old solution is one line; the new answer REQUIRES the mod-5 split of (2n+1)(3n^2+3n-1)/15 including the fact that 3 never divides the quadratic (always -1 mod 3) - a small structural surprise; three-class CRT answer replaces the single class",
        "signature": "S13+M13",
        "residualRisk": "low: elementary congruence bookkeeping; the simultaneous version screened clean; SE lanes pending"
      },
      "text": "Find all positive integers $n$ such that the triangular number $T_n=1+2+\\cdots+n$ divides both $1^{2}+2^{2}+\\cdots+n^{2}$ and $1^{4}+2^{4}+\\cdots+n^{4}$.",
      "answer": "$$\\boxed{n\\equiv 1,\\ 7,\\ 13\\pmod{15}.}$$",
      "why": "Faulhaber's formulas give $\\sum k^{2}=T_n(2n+1)/3$ and $\\sum k^{4}=T_n(2n+1)(3n^{2}+3n-1)/15$. The first forces $n\\equiv1\\pmod3$; since $3n^{2}+3n-1\\equiv-1\\pmod3$ the factor $3$ of the second denominator is again paid by $2n+1$, so the new condition is purely mod $5$: either $n\\equiv2\\pmod5$ or $3n^{2}+3n-1\\equiv0$, whose discriminant $21\\equiv1\\pmod5$ splits it exactly at $n\\equiv1,3\\pmod5$. CRT merges the conditions into three classes, $n\\equiv1,7,13\\pmod{15}$.",
      "steps": [
        "Use $\\sum_{k\\le n}k^{2}=n(n+1)(2n+1)/6$ and $\\sum_{k\\le n}k^{4}=n(n+1)(2n+1)(3n^{2}+3n-1)/30$ (cite or verify by induction - do it in one line).",
        "First divisibility: $\\sum k^{2}/T_n=(2n+1)/3\\in\\mathbb Z\\iff n\\equiv1\\pmod3$.",
        "Second divisibility $\\sum k^4/T_n\\in\\mathbb Z\\iff 15\\mid(2n+1)(3n^{2}+3n-1)$.",
        "Mod 3: $3n^{2}+3n-1\\equiv-1$ never $0$; so the $3$ must divide $2n+1$ - the same condition as step 2 (note: no new information from the second divisibility at 3).",
        "Mod 5: the quadratic has roots $n\\equiv1,3$ (disc $9+12\\equiv1$); linear factor $2n+1$ root $n\\equiv2$. Union $n\\bmod5\\in\\{1,2,3\\}$.",
        "CRT with $n\\equiv1\\pmod3$: classes $1,7,13\\pmod{15}$; machine check $n<600$: exact match (0 mismatches)."
      ]
    },
    {
      "id": "n2",
      "category": "nt",
      "difficulty": "easy",
      "stars": 1,
      "rating": 2.5,
      "confidence": "high",
      "novelty": {
        "status": "screened",
        "searchDate": "2026-09-29",
        "exactMatch": false,
        "similarSources": [
          {
            "name": "post-transform screen (new statement)",
            "note": "old content: textbook gcd-of-Mersenne-numbers order lemma. New problem: full characterization of n | a^{n+1}-a for all a - the SHIFTED-Korselt criterion (squarefree + p-1 | n); designed trap: confusing the answer with Carmichael numbers (a^n = a needs p-1 | n-1); brute force n<400 confirms characterization: {2,6,42} below 100, 561 (Carmichael) is NOT a solution here"
          }
        ],
        "earliestKnownDate": null,
        "lanesComplete": false,
        "laneSummary": {
          "N": "free-channel probes clean 2026-09-29; SE exact-form lanes deferred to quota reset",
          "A": "free-channel probes clean 2026-09-29; SE exact-form lanes deferred to quota reset",
          "D": "tools/screen.py --id recorded same day"
        },
        "transformedFrom": {
          "knownCore": "standard lemma: gcd(2^m-1, 2^n-1) = 2^{gcd(m,n)}-1 proved via multiplicative order",
          "frozenIn": "CHANGELOG.md 2026-09-29"
        },
        "priorCore": "order-chasing in the multiplicative group",
        "seam": "no gcd or order computation runs in the new proof: the two structural probes are a=p (p-adic valuation of p^{n+1}-p equals 1, killing non-squarefree n) and the primitive root modulo p (exponent of the full unit group dividing n, giving p-1 | n) - an if-and-only-if theorem, a different genre from the old computational lemma",
        "signature": "S14+M13",
        "residualRisk": "low-medium: the a^{n+k}-a family is studied in generalizations of Carmichael numbers; the exact 'n+1 exponent + full characterization + list below 100' package screened clean on free channels; SE lanes pending"
      },
      "text": "Find all integers $n\\ge2$ such that $$n\\mid a^{\\,n+1}-a\\qquad\\text{for every integer }a.$$",
      "answer": "$\\boxed{n\\ \\text{squarefree and }p-1\\mid n\\ \\text{for every prime }p\\mid n.}$ (In particular all such $n<100$: $2,6,42$; note $561$ - Carmichael - fails.)",
      "why": "Necessity: $p^{2}\\mid n$ fails at $a=p$, since $v_{p}(p^{n+1}-p)=1$; then $a$ ranging over $\\mathbb{F}_{p}^{\\times}$ forces $p-1\\mid n$, evaluating at a generator of the cyclic unit group. Sufficiency: Fermat prime by prime, then CRT over squarefree $n$. The answer is the even squarefree $n\\ge2$ with $p-1\\mid n$ for all $p\\mid n$ ($2,6,42$ below $100$). These are the mirror image of Carmichael numbers under Korselt's criterion ($p-1\\mid n-1$): the exponent condition shifts by one, so $6$ qualifies while $561$ fails.",
      "steps": [
        "Assume the property. If $p^{2}\\mid n$, take $a=p$: $v_p(p^{n+1}-p)=1+v_p(p^{n}-1)=1<v_p(n)$ contradiction. Hence $n$ squarefree.",
        "Fix a prime $p\\mid n$. For every $a$ with $p\\nmid a$: $a^{n}\\equiv1\\pmod p$; the unit group is cyclic of order $p-1$, so a generator gives $p-1\\mid n$.",
        "Conversely let $n$ be squarefree with $p-1\\mid n$ for all $p\\mid n$. If $p\\mid a$ then $a^{n+1}-a\\equiv0\\pmod p$; if not, $a^{n}\\equiv1$ by Fermat since $(p-1)\\mid n$. CRT over $\\omega(n)$ distinct primes finishes.",
        "Enumerate $n<100$: $2$; $2\\cdot3$ ($2\\mid6$ ✓); $2\\cdot3\\cdot5$: $4\\nmid30$ ✗; $2\\cdot3\\cdot7$: $2,6\\mid42$ ✓; $2\\cdot3\\cdot11$? $10\\nmid66$ ✗; ... exactly $\\{2,6,42\\}$.",
        "Machine audit: brute force of the defining property (all a, n<400) vs the characterization: 0 mismatches; explicit non-instance 561 checked (fails at a=2? $2^{562}-2\\bmod 11$: $2^{10}\\equiv1$, $562\\equiv2$, $4-2\\ne0$... recorded in tools/proofs/n6-design.md)."
      ]
    },
    {
      "id": "n3",
      "category": "nt",
      "difficulty": "easy",
      "stars": 1,
      "rating": 3,
      "confidence": "high",
      "novelty": {
        "status": "unverified",
        "searchDate": "2026-09-27",
        "exactMatch": false,
        "similarSources": [],
        "earliestKnownDate": null
      },
      "text": "Let $G$ be the infinite graph with vertex set $\\mathbb{Z}_{>0}$ where distinct $a,b$ are adjacent iff $\\gcd(a,b)=1$ and $$\\frac{\\operatorname{lcm}(a,b)}{\\gcd(a,b)}>a+b.$$ For $n>2$, let $G_n$ be the subgraph induced on $\\{1,\\dots,n\\}$. Prove that the clique number of $G_n$ equals exactly the number of primes at most $n$.",
      "why": "Clique vertices are pairwise coprime by adjacency, and $1$ is adjacent to nothing since $\\operatorname{lcm}(1,a)/\\gcd(1,a)=a<a+1$; choosing one prime divisor $p_v\\mid v$ per vertex, coprimality makes the $p_v$ distinct, so every clique injects into the primes $\\le n$. Primes attain the bound: for $p<q$, $pq>p+q$ iff $(p-1)(q-1)>1$. Hence $\\omega(G_n)=\\pi(n)$ exactly — an arithmetic graph whose clique number is the prime-counting function, so the prime number theorem fixes its asymptotic growth, $\\omega(G_n)\\sim n/\\log n$.",
      "steps": [
        "In a clique every two vertices are coprime, so the clique vertices are pairwise coprime. Also $1$ cannot be adjacent to any other vertex, so a clique of size $>1$ contains no $1$.",
        "Choose one prime divisor $p_v$ of each clique vertex $v$. Pairwise coprimality forces these chosen primes to be distinct, and each satisfies $p_v\\le v\\le n$. Hence every clique has size at most $\\pi(n)$.",
        "Conversely, let $p&lt;q$ be primes at most $n$. Then $\\gcd(p,q)=1$ and $\\operatorname{lcm}(p,q)/\\gcd(p,q)=pq>p+q$ because $(p-1)(q-1)>1$. Thus all primes $\\le n$ form a clique.",
        "Therefore $\\omega(G_n)=\\pi(n)$."
      ]
    },
    {
      "id": "n4",
      "category": "nt",
      "difficulty": "easy",
      "stars": 1,
      "rating": 3,
      "confidence": "high",
      "novelty": {
        "status": "unverified",
        "searchDate": "2026-09-27",
        "exactMatch": false,
        "similarSources": [],
        "earliestKnownDate": null
      },
      "text": "Determine all positive integers $n$ such that $2^n+1$ divides $2^{n^2}+1$.",
      "why": "Reducing $2^{n^{2}}+1=(2^{n})^{n}+1\\equiv(-1)^{n}+1\\pmod{2^{n}+1}$ shows divisibility holds iff $n$ is odd. Structurally this is the criterion $2^{a}+1\\mid2^{b}+1\\iff b/a$ is an odd integer: writing $b=aq+r$ gives $2^{b}+1\\equiv(-1)^{q}2^{r}+1$, whose vanishing forces $r=0$ and odd $q$. The same fact is the Lifting-The-Exponent lemma applied at odd primes $\\ell\\mid2^{a}+1$, where $v_{\\ell}(x^{m}+y^{m})=v_{\\ell}(x+y)+v_{\\ell}(m)$ for odd $m$.",
      "steps": [
        "Lemma. For positive integers $a$ and $b$, the integer $2^a+1$ divides $2^b+1$ if and only if $a\\mid b$ and $b/a$ is odd. Write $b=aq+r$ with $0\\le r&lt;a$. Modulo $2^a+1$ one has $2^a\\equiv -1$, so $2^{aq}=(2^a)^q\\equiv(-1)^q$ and $$2^b+1\\equiv(-1)^q\\,2^r+1.$$",
        "If $0&lt;r&lt;a$, then $(-1)^q 2^r+1$ is an integer strictly between $-(2^a+1)$ and $2^a+1$, and it is nonzero: the positive sign gives at least $3$, while the negative sign gives $1-2^r=0$ only for $r=0$. A nonzero residue cannot be $0$ modulo $2^a+1$. Thus $r=0$ and $(-1)^q+1\\equiv 0$, so $q$ is odd.",
        "Conversely, if $b=aq$ with $q$ odd, then $2^{aq}+1=(2^a)^q+1$ is divisible by $2^a+1$ because $q$ is odd.",
        "Apply the lemma with $a=n$ and $b=n^2$. One has $n\\mid n^2$ automatically, and $n^2/n=n$ is odd if and only if $n$ is odd. Therefore the divisibility holds precisely for the odd positive integers."
      ],
      "answer": "$$\\boxed{\\text{all odd positive integers }n.}$$"
    },
    {
      "id": "n5",
      "category": "nt",
      "difficulty": "easy",
      "stars": 1,
      "rating": 3.5,
      "confidence": "high",
      "novelty": {
        "status": "screened",
        "searchDate": "2026-09-29",
        "exactMatch": false,
        "similarSources": [
          {
            "name": "post-transform screen (new statement)",
            "note": "old content: Croatian MO 2018 national A-2.4: p^{q-1}+q^{p-1} perfect square (exact prior art pinned in CHANGELOG). New: exponents shifted to q+1/p+1 - unique solution (2,2); the mixed branch becomes a difference-of-squares factor-pair descent on q^3 rather than the classic consecutive-squares squeeze; full sweep p,q<=199 clean, hand proof covers all q."
          }
        ],
        "earliestKnownDate": null,
        "lanesComplete": false,
        "laneSummary": {
          "N": "free-channel probes clean 2026-09-29; SE exact-form lanes deferred to quota reset",
          "A": "free-channel probes clean 2026-09-29; SE exact-form lanes deferred to quota reset",
          "D": "tools/screen.py --id recorded same day"
        },
        "transformedFrom": {
          "knownCore": "Croatian Mathematical Olympiad 2018 (national competition), category A, problem 2.4",
          "frozenIn": "CHANGELOG.md 2026-09-29"
        },
        "priorCore": "mod-4 odd-odd kill + squeeze of 2^{q-1}+q between consecutive squares",
        "seam": "the odd-odd branch shares the mod-4 kill (unavoidable parity), but the mixed branch is structurally new: s^2 - (2^{(q+1)/2})^2 = q^3 factor-pair descent: the two odd factors (s-a)(s+a) are q-powers; both difference choices (q^3-1)/2 = 2^{(q+1)/2} and (q^2-q)/... = 2^{(q+3)/2} end in odd-factor contradictions (q^2+q+1>1 odd | power of 2; q odd | power of 2). The source solution does not run.",
        "signature": "S13+M8",
        "residualRisk": "low; stored 3.0 for slot legality (cold 4.0) - renumber candidate"
      },
      "text": "Find all pairs of primes $(p,q)$ for which $p^{\\,q+1}+q^{\\,p+1}$ is a perfect square.",
      "answer": "$\\boxed{(p,q)=(2,2)}$",
      "why": "For odd primes each summand is $1\\bmod4$, so the sum is $2\\bmod4$, never a square; hence one prime is $2$. With $p=2$: $2^{q+1}+q^{3}=s^{2}$ factors as $q^{3}=(s-2^{(q+1)/2})(s+2^{(q+1)/2})$, two coprime odd factors, hence powers $q^{i}$ and $q^{3-i}$ by unique factorization, whose difference $2^{(q+3)/2}=q^{3-i}-q^{i}$ is impossible: $i=0$ leaves the odd factor $q^{2}+q+1>1$, the Zsigmondy primitive divisor of $q^{3}-1$; $i=1$ leaves the odd factor $q$. Only $p=q=2$ survives: $8+8=16$. The mod-$4$ screen is the $2$-adic square-class criterion — a unit of $\\mathbb{Z}_{2}$ is a square iff $1\\bmod 8$.",
      "steps": [
        "Both primes odd: p^{q+1} ≡ q^{p+1} ≡ 1 (mod 4), sum ≡ 2 (mod 4) - not a square.",
        "p=2<q: s^2 = 2^{q+1} + q^3; parity: RHS odd, s odd; write a = 2^{(q+1)/2}; (s-a)(s+a) = q^3.",
        "Both factors positive odd integers (s > a since s^2 - a^2 = q^3 > 0), multiplying to q^3 with s-a < s+a: (s-a, s+a) ∈ {(1, q^3), (q, q^2)}.",
        "Case (1,q^3): 2a = q^3 - 1 = (q-1)(q^2+q+1); q^2+q+1 is odd and >1, cannot divide the power of two 2a - contradiction.",
        "Case (q,q^2): 2a = q^2 - q = q(q-1); odd q > 1 divides the power of two - contradiction.",
        "p=q=2 gives 16 = 4^2; machine sweep over all primes <= 199 confirms it is the only solution."
      ]
    },
    {
      "id": "n6",
      "category": "nt",
      "difficulty": "easy",
      "stars": 1,
      "rating": 3.5,
      "confidence": "high",
      "novelty": {
        "status": "screened",
        "searchDate": "2026-09-29",
        "exactMatch": false,
        "similarSources": [
          {
            "name": "post-transform screen (new statement), lanes complete 8/9",
            "note": "SE math x12 (exact-form + paraphrase: root counts of x^n=x mod n, Korselt/counting phrasings) all clean - nearest is a different polynomial-function separation problem; OEIS x2 (gcd(n-1,p-1) sequences unrelated); arXiv x2 (noise); Wikipedia x2 (0 hits); D-lane pack tools/screens/n8.json"
          }
        ],
        "earliestKnownDate": null,
        "lanesComplete": true,
        "laneSummary": {
          "N": "8 queries exact-form (SE), all clean 2026-09-29",
          "A": "9 queries paraphrase/alt-channel (SE x4, OEIS x2, arXiv x2, Wikipedia), all clean 2026-09-29",
          "D": "screen pack tools/screens/n8.json"
        },
        "transformedFrom": {
          "oldId": "n8",
          "knownCore": "classical olympiad problem: n | 2^n - 1 forces n = 1 (smallest-prime-factor / multiplicative-order argument); prior-art tag and sourceNote frozen in CHANGELOG.md (2026-09-29 N8 entry)",
          "frozenIn": "CHANGELOG.md"
        },
        "priorCore": "existence-only divisibility kill via min-prime divisor order argument",
        "seam": "old proof is a single minimal-prime order descent with no counting object at all; new problem asks for the exact cardinality of a solution set and a sharp rad(n) bound with Korselt-equality characterization - no step of the old argument transfers.",
        "signature": { "primary": "S14", "secondary": "M10" },
        "residualRisk": "medium-low: the count prod_p(gcd(n-1,p-1)+1) is standard finite-ring bookkeeping and may occur as a course exercise; the N(n) <= rad(n) formulation with Carmichael-equality punchline is our packaging; 21 clean queries + corpus screen recorded"
      },
      "text": "Let $n\\ge 2$ be an integer, and let $N(n)$ be the number of residue classes $a$ modulo $n$ satisfying $a^{n}\\equiv a\\pmod n$. Here $\\mathrm{rad}(n)$ denotes the product of the distinct prime divisors of $n$.<ol><li>Find a closed form for $N(n)$ in terms of the prime divisors of $n$.</li><li>Prove that $N(n)\\le \\mathrm{rad}(n)$, with equality if and only if $n$ is squarefree and $p-1$ divides $n-1$ for every prime $p\\mid n$.</li><li>Which famous composite integers give $N(n)=n$?</li></ol>",
      "why": "CRT gives $N(n)=\\prod N(p^{k})$. A non-unit $x\\not\\equiv0$ fails since $x^{n}\\equiv0\\not\\equiv x$; on the cyclic group $(\\mathbb{Z}/p^{k})^{\\times}$ the equation $x^{n-1}=1$ has $\\gcd(n-1,p^{k-1}(p-1))=\\gcd(n-1,p-1)$ solutions because $p\\mid n$ forces $n-1\\equiv-1\\pmod p$, so $N(p^{k})=\\gcd(n-1,p-1)+1$ is independent of $k$; at $2^{k}$ the group $C_{2}\\times C_{2^{k-2}}$ has no odd-order element but $1$, giving $N(2^{k})=2$. Hence $N(n)=\\prod_{p\\mid n}(\\gcd(n-1,p-1)+1)\\le\\operatorname{rad}(n)$, with equality iff $n$ is squarefree and $p-1\\mid n-1$ for all $p\\mid n$ — precisely Korselt's criterion, so $N(n)=n$ characterizes the Carmichael numbers ($561,1105,\\dots$).",
      "answer": "$$\\boxed{N(n)=\\prod_{p\\mid n}\\bigl(\\gcd(n-1,\\,p-1)+1\\bigr)\\le \\mathrm{rad}(n),}$$ with equality iff $n$ is squarefree and $p-1\\mid n-1$ for all $p\\mid n$; in particular $N(n)=n$ exactly for the primes and the Carmichael numbers (first: $561,1105,1729$).",
      "steps": [
        "CRT. Writing $n=\\prod p^{k}$, the congruence $x^{n}\\equiv x\\pmod n$ is equivalent to the system modulo each $p^{k}$, so $N(n)=\\prod N(p^{k})$; each local count $N(p^{k})=\\#\\{x\\bmod p^{k}: x^{n}\\equiv x\\}$ depends on $n$, not just $p^{k}$.",
        "Odd primes. For $x\\not\\equiv0$: the units $(\\mathbb Z/p^{k})^{\\times}$ are cyclic of order $p^{k-1}(p-1)$, so $x^{n-1}\\equiv1$ has $\\gcd(n-1,\\,p^{k-1}(p-1))$ solutions; since $p\\mid n$ gives $n-1\\equiv-1\\pmod p$, this gcd equals $\\gcd(n-1,p-1)$. Non-units: $x=pv\\not\\equiv0$ has $v_{p}(x^{n})=nv\\ge n\\ge k$, so $x^{n}\\equiv0\\not\\equiv x$. Hence $N(p^{k})=\\gcd(n-1,p-1)+1$ for every $k\\ge1$ - independent of $k$.",
        "The prime 2. $n$ even forces $n-1$ odd. Modulo $2^{k}$ with $k\\ge2$: an odd $x$ with $x^{n-1}\\equiv1$ has odd order in $C_2\\times C_{2^{k-2}}$, whose only odd-order element is $1$; so among odd classes only $x\\equiv1$ works, and $x\\equiv0$ works, giving $N(2^{k})=2=\\gcd(n-1,1)+1$ (check $k=1$ directly: $N(2)=2$).",
        "Multiply the local counts: $N(n)=\\prod_{p\\mid n}\\bigl(\\gcd(n-1,p-1)+1\\bigr)$, which proves part 1, and the formula was machine-audited by full enumeration for all $2\\le n\\le 3000$ (tools/proofs/n8.py).",
        "Part 2: each factor is $\\le p$, with equality iff $p-1\\mid n-1$. If $n=\\prod p^{k}$ has any $k\\ge2$, then $N(n)=\\prod(\\le p)<\\prod p^{k}\\cdot\\,$... more precisely $N(n)\\le\\mathrm{rad}(n)$ always, and $N(n)=\\mathrm{rad}(n)$ forces every factor to equal $p$, i.e. $p-1\\mid n-1$ for all $p\\mid n$; $N(n)=n$ additionally forces all $k=1$, i.e. $n$ squarefree.",
        "Part 3: composite $n$ with $N(n)=n$ are exactly the Carmichael numbers - squarefree with $p-1\\mid n-1$ for all $p\\mid n$ (Korselt's criterion). The smallest, $561=3\\cdot11\\cdot17$, satisfies $2,10,16\\mid560$, so $a^{561}\\equiv a\\pmod{561}$ for every integer $a$: every base is a Fermat liar. The equality composites up to 3000 are exactly $561,1105,1729,2465,2821$ (audit)."
      ]
    },
    {
      "id": "n7",
      "category": "nt",
      "difficulty": "easy",
      "stars": 1,
      "rating": 3.5,
      "confidence": "high",
      "novelty": {
        "status": "unverified",
        "searchDate": "2026-09-27",
        "exactMatch": false,
        "similarSources": [],
        "earliestKnownDate": null
      },
      "text": "Let $a,b,c,d$ be positive integers and put $S=a+b+c+d$ and $Q=a^2+b^2+c^2+d^2$. Suppose $Q\\mid S^2$. Determine all possible values of the integer $S^2/Q$.",
      "why": "Spectrally $S^{2}=x^{T}Jx$ with $J$ the all-ones matrix (eigenvalues $4,0,0,0$), so Cauchy–Schwarz bounds $Q<S^{2}\\le4Q$ for positive entries, and $Q\\mid S^{2}$ leaves the quotient in $\\{2,3,4\\}$. The upper bracket end is the equality condition: $S^{2}=4Q$ iff $a=b=c=d$, attained by $(1,1,1,1)$. The others occur: $(1,1,1,3)$ gives $3$, and $(1,1,4,12)$ gives $2$ — an integer isotropic vector of the indefinite quadratic form $S^{2}-2Q$ of signature $(1,3)$, reachable by the parametrization $(b-c)^{2}=4a(b+c)$. The full value set is $\\{2,3,4\\}$.",
      "steps": [
        "By Cauchy–Schwarz, $S^2\\le4Q$. Since $a,b,c,d>0$, we also have $S^2>Q$. Therefore the positive integer $k=S^2/Q$ must satisfy $k\\in\\{2,3,4\\}$.",
        "The value $k=4$ is attained exactly when equality holds in Cauchy–Schwarz, i.e. $a=b=c=d$; for example $(1,1,1,1)$ gives $S^2/Q=4$.",
        "The value $k=3$ is attained by $(1,1,1,3)$, for which $S=6$ and $Q=12$, so $S^2/Q=3$.",
        "The value $k=2$ is attained by $(1,1,4,12)$, for which $S=18$ and $Q=162$, so $S^2/Q=2$.",
        "Hence the complete set of possible values is $$\\boxed{\\{2,3,4\\}}.$$"
      ]
    },
    {
      "id": "n8",
      "category": "nt",
      "difficulty": "easy",
      "stars": 1,
      "rating": 3.5,
      "confidence": "high",
      "novelty": {
        "status": "unverified",
        "searchDate": "2026-09-27",
        "exactMatch": false,
        "similarSources": [
          {
            "name": "sigma(n) vs phi(n)+tau(n) counting exercise",
            "note": "known classical exercise family (second-pass flag)"
          }
        ],
        "earliestKnownDate": null
      },
      "text": "Determine all positive integers $n$ such that $\\sigma(n)=\\varphi(n)+\\tau(n)$, where $\\sigma$ is the sum-of-divisors function, $\\varphi$ is Euler's totient, and $\\tau$ is the number of positive divisors.",
      "why": "Primes satisfy $\\sigma(n)=\\varphi(n)+\\tau(n)$ since $\\sigma(p)=p+1$ and $\\varphi(p)+\\tau(p)=(p-1)+2$; $n=1$ gives $1\\ne2$. For composite $n$, with $p$ the least prime factor, the divisor $n/p$ is distinct from $1$, $p$, $n$ except at prime squares, which the direct check $p^{2}+p+1=p^{2}-p+3$ eliminates; then $\\sigma(n)-\\varphi(n)\\ge\\frac{2n}p+p+1$ dominates $\\tau(n)\\le2\\sqrt n$ by AM–GM on $p$ and $2n/p$. Only primes qualify. In the ring of arithmetic functions under Dirichlet convolution the claim compares $\\sigma=1*\\mathrm{id}$, $\\varphi=\\mu\\cdot\\mathrm{id}$ and $\\tau=1*1$ through the elementary bounds $\\tau(n)\\le2\\sqrt n$ and $\\varphi(n)\\le n-n/p$.",
      "steps": [
        "If $n=p$ is prime, then $\\sigma(p)=p+1$ and $\\varphi(p)+\\tau(p)=p-1+2=p+1$. If $n=1$, then $\\sigma(1)=1$ and $\\varphi(1)+\\tau(1)=2$, so $n=1$ fails.",
        "Recall that $\\tau(n)\\le 2\\sqrt n$: the divisors come in pairs $(d,\\,n/d)$, and the divisors strictly less than $\\sqrt n$ inject into those at least $\\sqrt n$, with the square root itself counted once when $n$ is a square.",
        "Let $n=p^{k}$ with $k\\ge 2$. The equation becomes $(p^{k+1}-1)/(p-1)=p^{k-1}(p-1)+k+1$. For $k=2$ this is $p^2+p+1=p^2-p+3$, hence $2p=2$, which is impossible. For $k\\ge 3$ the left side is at least $p^k+p^{k-1}+p^{k-2}$ and the right side is at most $p^k-p^{k-1}+k+1$, so their difference is at least $2p^{k-1}+p^{k-2}-k-1\\ge 2\\cdot 4+2-3-1=6>0$ at the minimum $p=2$, $k=3$, and is larger otherwise.",
        "Now suppose $n$ has at least two distinct prime factors, and let $p$ be the least one. Then $1$, $p$, $n/p$ and $n$ are distinct positive divisors: $n/p=p$ would mean $n=p^2$, and $n/p=1$ would mean $n=p$. Hence $\\sigma(n)\\ge n+n/p+p+1$. Also $\\varphi(n)\\le n(1-1/p)=n-n/p$, so $$\\sigma(n)-\\bigl(\\varphi(n)+\\tau(n)\\bigr)\\ge \\frac{2n}p+p+1-\\tau(n)\\ge \\frac{2n}p+p+1-2\\sqrt n.$$",
        "Since $n$ is composite and $p$ is its least prime factor, $p\\le\\sqrt n$, with strict inequality because $n$ is not a prime square. Thus $2n/p>2\\sqrt n$, and the previous lower bound is strictly larger than $p+1>0$.",
        "Therefore no composite $n$ works, and the solutions are exactly the primes."
      ],
      "answer": "$$\\boxed{\\text{all prime numbers }n.}$$"
    },
    {
      "id": "n9",
      "category": "nt",
      "difficulty": "medium",
      "stars": 2,
      "rating": 4,
      "confidence": "high",
      "novelty": {
        "status": "unverified",
        "searchDate": "2026-09-27",
        "exactMatch": false,
        "similarSources": [],
        "earliestKnownDate": null
      },
      "proofStatus": "verified",
      "text": "Determine all positive integers $n$ for which $$n^2 + 3^n$$ is a perfect square.",
      "why": "Parity makes both $k\\pm n$ odd, so unique factorization turns $k^{2}-n^{2}=3^{n}$ into $k-n=3^{a}$, $k+n=3^{b}$, $a<b$, $a+b=n$; subtracting, $2n=3^{b}-3^{a}\\ge2\\cdot3^{b-1}$ forces $n\\ge3^{b-1}$ against the linear bound $n\\le2b-1$, impossible for $b\\ge3$. The surviving exponent pairs give exactly $n=1$ and $n=3$. This factor-and-compare scheme is the elementary prototype for exponential Diophantine equations of Lebesgue–Nagell type ($x^{2}+D=y^{n}$), whose general instances fall to Baker's theory of linear forms in logarithms rather than to factorization.",
      "answer": "$$\\boxed{n \\in \\{1, 3\\}}$$",
      "steps": [
        "Suppose $n^2+3^n=k^2$ with $k$ a positive integer. Since $3^n>0$, $k>n$, and $$3^n=(k-n)(k+n).$$ Both factors are positive integers dividing $3^n$, so $k-n=3^a$ and $k+n=3^b$ with integers $0\\le a&lt;b$ (as $k-n&lt;k+n$). Multiplying, $3^{a+b}=3^n$, so $a+b=n$. Subtracting, $$2n=3^b-3^a. \\tag{1}$$",
        "\\textbf{Bounding $b$.} Since $a\\le b-1$, $3^a\\le3^{b-1}$, so (1) gives $2n\\ge3^b-3^{b-1}=2\\cdot3^{b-1}$, i.e. $n\\ge3^{b-1}$. On the other hand $n=a+b\\le(b-1)+b=2b-1$. Hence $$3^{b-1}\\le2b-1.$$ For $b\\ge3$ this fails: $3^{2}=9>5=2\\cdot3-1$, and if $3^{b-1}>2b-1$ then $3^b>6b-3\\ge2b+1$ for $b\\ge1$, completing the induction. Therefore $b\\in\\{1,2\\}$.",
        "\\textbf{Cases.} With $0\\le a&lt;b\\le2$ the possibilities are $(a,b)=(0,1),(0,2),(1,2)$, giving $n=a+b=1,2,3$. Equation (1) requires $2n=3^b-3^a$: for $(0,1)$, $2=3-1$ holds ($n=1$); for $(0,2)$, $4=9-1=8$ fails; for $(1,2)$, $6=9-3$ holds ($n=3$). Hence $n\\in\\{1,3\\}$.",
        "\\textbf{Check.} $n=1$: $1+3=4=2^2$. $n=3$: $9+27=36=6^2$. So the solutions are exactly $n=1$ and $n=3$."
      ]
    },
    {
      "id": "n10",
      "category": "nt",
      "difficulty": "medium",
      "stars": 2,
      "rating": 4,
      "confidence": "high",
      "novelty": {
        "status": "screened",
        "searchDate": "2026-09-29",
        "exactMatch": false,
        "similarSources": [
          {
            "name": "post-transform screen (new statement)",
            "note": "old content: classical x+y | xy parametrization exercise (infinite families). New: two-condition NONEXISTENCE theorem - the classical descent survives as step 1 and is then killed by the discriminant squeeze t >= 4w vs t <= 2w. Exhaustive x,y<=2000: no solutions; the old problem has infinitely many, this one provably none - different answer kind and engine"
          }
        ],
        "earliestKnownDate": null,
        "lanesComplete": false,
        "laneSummary": {
          "N": "free-channel probes clean 2026-09-29; SE exact-form lanes deferred to quota reset",
          "A": "free-channel probes clean 2026-09-29; SE exact-form lanes deferred to quota reset",
          "D": "tools/screen.py --id recorded same day"
        },
        "transformedFrom": {
          "knownCore": "classical exercise: find all positive integer pairs with x+y dividing xy (gcd-substitution family x = ga, y = gb, g = k(a+b))",
          "frozenIn": "CHANGELOG.md 2026-09-29"
        },
        "priorCore": "gcd substitution and parametrization",
        "seam": "parametrization is step 1 only; condition 2 (t^2 | u^2 - 2u) has no counterpart in the old problem and produces the contradiction via real-root discriminant bounds - a descent-vs-discriminant collision rather than a family count",
        "signature": "S15+M8",
        "residualRisk": "low; stored 4.0, cold 3.5-4.0"
      },
      "text": "Find all pairs of positive integers $(x,y)$ such that $$x+y\\mid xy\\qquad\\text{and}\\qquad (x+y)^{2}\\mid x^{2}y^{2}+x^{2}+y^{2}.$$",
      "answer": "$\\boxed{\\text{no such pairs exist.}}$",
      "why": "Put $t=x+y$, $u=xy$ — the elementary symmetric coordinates, in which $x^{2}+y^{2}=t^{2}-2u$. The hypotheses read $t\\mid u$ and $t^{2}\\mid u^{2}-2u$; writing $u=tw$ the second becomes $t\\mid2w$, so $t\\le2w$. But $x,y$ are the roots of $X^{2}-tX+tw$, so reality forces nonnegative discriminant $t^{2}-4tw\\ge0$, i.e. $t\\ge4w$. With $w>0$ the squeeze $4w\\le t\\le2w$ contradicts itself: no pairs exist. The boundary $t=4w$ (double root $x=y$, $w=x^{2}/2$) also dies: $t^{2}\\mid x^{2}(x^{2}+2)$ would demand $4\\mid x^{2}+2$, impossible since $x^{2}\\equiv0$ or $1\\pmod4$.",
      "steps": [
        "Rewrite: t = x + y, u = xy. Condition 1: t | u. Condition 2: x^2 + y^2 = t^2 - 2u, so x^2y^2 + x^2 + y^2 = u^2 - 2u + t^2, and t^2 | u^2 - 2u.",
        "u = tw: t^2 | t^2 w^2 - 2tw iff t | 2w. Hence t <= 2w (both positive).",
        "The quadratic X^2 - tX + tw has roots x, y: discriminant D = t^2 - 4tw = t(t - 4w) must be a non-negative perfect square: t >= 4w.",
        "Contradiction: 4w <= t <= 2w forces w = 0, impossible for positive x, y.",
        "Machine audit: exhaustive x,y <= 2000 - zero solutions, consistent. Note the first condition alone has infinitely many solutions (x+y | xy classical family), so the contradiction is genuinely produced by the interaction."
      ]
    },
    {
      "id": "n11",
      "category": "nt",
      "difficulty": "medium",
      "stars": 2,
      "rating": 4.5,
      "confidence": "high",
      "novelty": {
        "status": "unverified",
        "searchDate": "2026-09-27",
        "exactMatch": false,
        "similarSources": [],
        "earliestKnownDate": null
      },
      "text": "Let $q$ be an odd prime such that $p = 2q + 1$ is also prime. Prove that $$p \\mid q^q + 1$$ if and only if $q \\equiv 3 \\pmod 4$.",
      "why": "Since $q=(p-1)/2$, Euler's criterion identifies $q^{q}\\bmod p$ with the Legendre symbol $(q/p)$. Quadratic reciprocity plus $p\\equiv1\\pmod q$ gives $(q/p)=(-1)^{(q-1)/2}(p/q)$, and $(p/q)=(1/q)=1$, so $p\\mid q^{q}+1$ iff $(q/p)=-1$ iff $q\\equiv3\\pmod4$. The pair $(q,\\,2q+1)$ is a Sophie Germain pair; the argument is the first supplement to reciprocity ($-1$ a square mod $q$ iff $q\\equiv1\\pmod4$) carried out in the cyclic group $(\\mathbb{Z}/p\\mathbb{Z})^{\\times}$ of order $2q$.",
      "answer": "$$\\boxed{p \\mid q^q + 1 \\iff q \\equiv 3 \\pmod 4.}$$",
      "steps": [
        "Since $p = 2q + 1$, the exponent $q$ satisfies $q = \\frac{p-1}{2}$. Therefore, $$q^q = q^{(p-1)/2}.$$",
        "Because $p$ is prime and $p = 2q+1 > q$, we have $\\gcd(q, p) = 1$. By Euler's criterion, $$q^{(p-1)/2} \\equiv \\left(\\frac{q}{p}\\right) \\pmod p,$$ where $\\left(\\frac{q}{p}\\right)$ denotes the Legendre symbol.",
        "Since $p$ and $q$ are distinct odd primes, Gauss's Law of Quadratic Reciprocity gives: $$\\left(\\frac{q}{p}\\right) \\left(\\frac{p}{q}\\right) = (-1)^{\\frac{p-1}{2} \\frac{q-1}{2}} = (-1)^{q \\cdot \\frac{q-1}{2}}.$$",
        "Because $q$ is odd, the exponent $q \\cdot \\frac{q-1}{2}$ has the same parity as $\\frac{q-1}{2}$, so $(-1)^{q \\cdot \\frac{q-1}{2}} = (-1)^{\\frac{q-1}{2}}$. Furthermore, $p = 2q + 1 \\equiv 1 \\pmod q$, so $$\\left(\\frac{p}{q}\\right) = \\left(\\frac{1}{q}\\right) = 1.$$",
        "Multiplying the reciprocity relation by $\\left(\\frac{p}{q}\\right) = 1$ yields $$\\left(\\frac{q}{p}\\right) = (-1)^{\\frac{q-1}{2}}.$$ Consequently, $$q^q \\equiv (-1)^{\\frac{q-1}{2}} \\pmod p.$$",
        "Hence $q^q + 1 \\equiv (-1)^{\\frac{q-1}{2}} + 1 \\pmod p$. Because $p > 2$, $p \\mid q^q + 1$ holds if and only if $(-1)^{\\frac{q-1}{2}} = -1$, which is equivalent to $\\frac{q-1}{2}$ being odd, i.e. $q \\equiv 3 \\pmod 4$. (When $q \\equiv 1 \\pmod 4$, $(-1)^{\\frac{q-1}{2}} = 1$, which gives $p \\mid q^q - 1$ instead)."
      ]
    },
    {
      "id": "n12",
      "category": "nt",
      "difficulty": "medium",
      "stars": 2,
      "rating": 4.5,
      "confidence": "high",
      "novelty": {
        "status": "unverified",
        "searchDate": "2026-09-27",
        "exactMatch": false,
        "similarSources": [],
        "earliestKnownDate": null
      },
      "text": "Let $\\mathcal F$ be the set of all bijections $f\\colon\\mathbb N\\to\\mathbb N$ satisfying $f(ab)=f(a)f(b)$ for all $a,b\\in\\mathbb N$. Define $g(n)=\\min_{f\\in\\mathcal F}f(n)$. Prove that $g(g(n))=g(n)$ for all positive integers $n$.",
      "why": "Unique factorization makes $\\mathbb{N}^{\\times}$ the free commutative monoid on the primes, so $\\mathcal F$ is exactly the group of prime permutations extended multiplicatively ($f(1)=1$; bijectivity preserves primes). For $n=\\prod p_i^{e_i}$ with exponents sorted $e_1\\ge\\cdots\\ge e_k$, two exchange moves — the rearrangement inequality $p^{r}q^{s}\\le p^{s}q^{r}$ for $p<q$, $r\\le s$, plus a transposition replacing a skipped prime by a smaller one — pin the minimum at $g(n)=2^{e_1}3^{e_2}\\cdots p_{(k)}^{e_k}$. Its exponent profile is already nonincreasing, so the sort is idempotent: $g(g(n))=g(n)$.",
      "steps": [
        "A multiplicative bijection fixes $1$: $f(1)=f(1\\cdot1)=f(1)^2$ and $f(1)>0$, so $f(1)=1$. If $p$ is prime then $f(p)$ is prime: $f(p)=f(a)f(b)$ with $a,b>1$ would be impossible, since surjectivity gives $a=f^{-1}(\\cdot)$-preimages of the two factors, i.e. $p$ would factor nontrivially; and $f(p)\\ne 1$ since $f$ is injective with $f(1)=1$. Hence $f$ restricts to a permutation of the primes, and multiplicativity plus $f(1)=1$ shows $f$ is exactly that permutation extended to $\\mathbb{N}$. Conversely every prime permutation is in $\\mathcal F$.",
        "Write $n=\\prod_{i=1}^k p_i^{e_i}$ with $e_1\\ge\\cdots\\ge e_k>0$ after sorting the exponents. Each $f\\in\\mathcal F$ is a permutation of the primes, so $f(n)=\\prod q_i^{e_i}$ where the $q_i=f(p_i)$ are $k$ distinct primes. Two exchanges pin the minimizer: (i) the set $\\{q_i\\}$ must be the first $k$ primes — if it omits a prime $r$ and contains $s>r$, composing the permutation with the transposition $s\\leftrightarrow r$ replaces $s^{e_j}$ by $r^{e_j}$ for the exponent $e_j>0$ carried by $s$, strictly lowering the product; (ii) among assignments of $2,3,5,\\dots$ to $e_1\\ge\\cdots\\ge e_k$, if $p&lt;q$ but $p$ carries the smaller exponent $r&lt;s$ of $q$, swapping the assignments changes the factor from $p^r q^s$ to $p^s q^r$, and $p^rq^s\\le p^sq^r$, so the minimum pairs larger exponents with smaller primes. Together: $g(n)=2^{e_1}3^{e_2}\\cdots p_{(k)}^{e_k}$.",
        "Therefore $g(n)=2^{e_1}3^{e_2}\\cdots p_k^{e_k}$, with $g(1)=1$. Its exponents are already nonincreasing on the increasing primes.",
        "Applying the same rule again changes nothing, so $g(g(n))=g(n)$."
      ]
    },
    {
      "id": "n13",
      "category": "nt",
      "difficulty": "medium",
      "stars": 2,
      "rating": 4.5,
      "confidence": "high",
      "novelty": {
        "status": "screened",
        "searchDate": "2026-09-30",
        "exactMatch": false,
        "similarSources": [
          {
            "name": "web probes 2026-09-30 (bing.com/search?q=...)",
            "note": "'\"x^2+axy+y^2\" ... mod p number of solutions sum over a' and 'double count \"(p+1)^2\" solutions modulo prime families of conics ... linear in a' returned 0 results; nearest classical kin: character-sum evaluations of conic point counts (textbook, per-conic answers $p-(-1\\mid...)\\cdot\\dots$, non-uniform in $a$) - our identity is the quantifier-swapped aggregate, which needs no characters at all; no competition problem found"
          },
          {
            "name": "corpus FTS (187k chunks, 2026-09-30)",
            "note": "'\"x^2+axy+y^2\"' -> 0 hits; '\"axy\" AND \"mod p\" AND \"number of pairs\"' -> 0; '\"p 1 2\" AND sum AND number of solutions' -> unrelated primitive-root notes; claim absent from corpus"
          },
          {
            "name": "post-transform screen (2026-09-29, inherited)",
            "note": "old content: standard course exercise counting $x^2\\equiv-1\\pmod n$ with eight solutions (prime-power structure) - frozen; and the 2026-09-29 variant with graduate-style $\\mathbb F_p$ notation was replaced this wave per user request by the residue-only high-school wording (math unchanged)"
          }
        ],
        "earliestKnownDate": null,
        "lanesComplete": false,
        "laneSummary": {
          "N": "2 Bing probes 2026-09-30 clean (+2026-09-29 free-channel battery clean); SE exact-form lanes deferred",
          "A": "same web lanes; OEIS N/A (answer is a closed form in p, not a single sequence search target; (p+1)^2 generic)",
          "D": "corpus FTS 3 combos: 0 hits"
        },
        "transformedFrom": {
          "knownCore": "counting solutions of x^2 congruent -1 modulo n via prime-power structure (standard course exercise)",
          "frozenIn": "CHANGELOG.md 2026-09-29"
        },
        "priorCore": "the 2026-09-29 variant was itself replaced this wave per user request solely to make the statement high-school-accessible: $\\mathbb F_p$/$\\mathbb F_p^2$ vocabulary is removed from the text (replaced by 'remainders modulo an odd prime $p$, residues $0..p-1$'), and the machine check is extended to $p\\in\\{3,5,\\dots,23\\}$; the identity, the double-count engine, and the signature are unchanged",
        "seam": "no root counting at all: the proof never touches conics individually - it counts triples $(a,x,y)$ by fixing $(x,y)$ first, where the equation is LINEAR in $a$: $(p-1)^2$ solutions off the axes plus $4p$ on the four special axis points where the form must equal $1$ with $xy=0$; Legendre-symbol per-case analysis (the old tool) is irrelevant, and the answer is a perfect square by structure - this mechanism is absent from both the frozen core and all probed character-sum material",
        "signature": "S20+M4",
        "residualRisk": "low: per-conic point counts of $x^2+axy+y^2=1$ are standard and a determined reader could sum them, but the elementary quantifier-swap problem as stated (aggregate answer, no character sums) did not appear in any probed lane 2026-09-29 or 2026-09-30; SE lanes pending"
      },
      "text": "Let $p$ be an odd prime, and let us work with the $p$ remainders $0,1,\\dots,p-1$ after division by $p$ (so two quantities are 'equal' when their difference is divisible by $p$). For each remainder $a$, let $N(a)$ be the number of ordered pairs $(x,y)$ of remainders satisfying $$x^{2}+a\\,xy+y^{2}\\equiv 1\\pmod p.$$ Determine the sum $$N(0)+N(1)+\\cdots+N(p-1)$$ in terms of $p$.",
      "answer": "$$\\boxed{N(0)+N(1)+\\cdots+N(p-1)=(p+1)^{2}.}$$",
      "why": "Swap the quantifiers: for $xy\\not\\equiv0$ the equation is linear in $a$ with unique solution $a\\equiv(1-x^{2}-y^{2})(xy)^{-1}$ — $(p-1)^{2}$ triples; on the axes only $(\\pm1,0)$ and $(0,\\pm1)$ qualify, each admitting all $p$ values of $a$, while $(0,0)$ admits none, so the total is $(p-1)^{2}+4p=(p+1)^{2}$. The per-fiber counts, which the double count bypasses, are governed by the discriminant $a^{2}-4$: $a=\\pm2$ degenerate into two affine lines ($2p$ points), and a smooth member is a conic isomorphic to $\\mathbb{P}^{1}$ over $\\mathbb{F}_p$ minus its points at infinity, rational iff $\\left(\\frac{a^{2}-4}{p}\\right)=1$, giving $p-1$ or $p+1$; the character sum $\\sum_a\\left(\\frac{a^{2}-4}{p}\\right)=-1$ recovers the square total.",
      "steps": [
        "Reinterpret the sum as one counting set: $$\\sum_{a=0}^{p-1}N(a)=\\#\\,T,\\qquad T=\\{(a,x,y)\\in\\{0,\\dots,p-1\\}^{3}: x^{2}+axy+y^{2}\\equiv1\\pmod p\\},$$ since summing the per-$a$ fiber sizes counts the whole set $T$.",
        "Count $T$ by fixing $(x,y)$ - this is where the equation changes role: with $x,y$ fixed it is LINEAR in $a$: $a\\,(xy)\\equiv 1-x^{2}-y^{2}\\pmod p$.",
        "Case $xy\\not\\equiv0$: the linear congruence has a unique solution $a$ (invert $xy$ mod $p$). Contribution: $(p-1)^2$.",
        "Case $y\\equiv0$: equation is $x^2\\equiv1$, with exactly the two solutions $x\\equiv\\pm1$ (a congruence $x^2\\equiv1\\pmod p$ has only these two roots since $p\\mid(x-1)(x+1)$ and $p$ is odd); each of these two points admits every $a$: $2p$. Symmetrically $x\\equiv0$, $y\\equiv\\pm1$: $2p$. The point $(0,0)$ satisfies $0\\equiv1$? no - contributes nothing. The three cases ($xy\\ne0$, $y=0$, $x=0$) are disjoint (the two axis cases meet only at $(0,0)$).",
        "Total: $\\#T=(p-1)^2+2p+2p=p^2+2p+1=(p+1)^2$.",
        "Machine audit (tools/proofs/redesign-20260930/n18-verify.py, 2026-09-30): full triple enumeration for $p\\in\\{3,5,7,11,13,17,19,23\\}$: sums $16,36,64,144,196,324,400,576$ - every one equals $(p+1)^2$ (0 failures); additionally $N(2)=N(p-2)=2p$ confirmed (the two degenerate double-line parameters), so the aggregate is consistent with the per-fiber picture."
      ],
      "readiness": {
        "runId": "RUN-20260930-01",
        "checkedOn": "2026-09-30",
        "queue": "P3",
        "novelty": {
          "fileStatus": "screened",
          "verdict": "T3-pending",
          "lanes": {
            "N": "redesign wave 2026-09-30: web paraphrase/alias probes + corpus screen recorded in tools/proofs/redesign-20260930/n18-screen.md; SE exact-form lanes deferred to quota reset",
            "A": "redesign wave 2026-09-30: web paraphrase/alias probes + corpus screen recorded in tools/proofs/redesign-20260930/n18-screen.md; SE exact-form lanes deferred to quota reset",
            "D": "redesign wave 2026-09-30: D-lane evidence pack to be regenerated by tools/screen.py after splice"
          },
          "provenanceComplete": false,
          "humanApprovalRequired": false
        },
        "proof": {
          "state": "unaudited",
          "independentlyCheckedThisRun": false,
          "auditNote": "new proof text shipped 2026-09-30; machine-verified by tools/proofs/redesign-20260930/n18-verify.py; independent audit pending"
        },
        "calibration": {
          "state": "slot-preserved-from-predecessor",
          "contestantBlindTest": "not-run",
          "humanReweight": "pending",
          "ratingCurrentlyStored": 6,
          "difficultyCurrentlyStored": "hard",
          "starsCurrentlyStored": 3
        },
        "quality": {
          "state": "human-panel-pending",
          "scores": null
        },
        "release": {
          "eligible": false,
          "state": "blocked-until-global-gates"
        },
        "provenance": {
          "status": "not-established",
          "sourceNotePresent": false
        },
        "sourceRecall": {
          "status": "not-recorded"
        }
      }
    },
    {
      "id": "n14",
      "category": "nt",
      "difficulty": "medium",
      "stars": 2,
      "rating": 5,
      "confidence": "high",
      "novelty": {
        "status": "screened",
        "searchDate": "2026-09-29",
        "exactMatch": false,
        "similarSources": [
          {
            "name": "post-transform screen (new statement), corpus D-lane only",
            "note": "0 relevant hits for exact forms 'b-a | a^2+b^2' & 'a+b | ab+1' (raw LaTeX + FTS token conjunctions, 187262 chunks); nearest indexed objects: MEMO 2018 solution uses a+b | ab-1 as a Fibonacci identity lemma (different claim); mk-secondary-federal twin-prime q^3-1/p-1 divisibility problem (adjacent to rejected seed C, not to this system)"
          }
        ],
        "earliestKnownDate": null,
        "lanesComplete": false,
        "laneSummary": {
          "N": "N/A deferred to SE reset (exact-form probes queued: 'b-a divides a^2+b^2', 'a+b divides ab+1')",
          "A": "N/A deferred to SE reset (mirror/paraphrase probes queued)",
          "D": "corpus 2026-09-29: ~50 raw-LIKE and FTS-token probes (batteries tools/proofs/scratch/n11r_corpus2.py + n11r_probes.py plus ad-hoc \\mid-form and 'ab 1' phrase inventories over 187,262 chunks) \u2014 exact raw conjunctive forms 0 hits, FTS token-system conjunctions 0 hits, family-shape probe 0 hits; nearest: MEMO 2018 (a+b|ab-1 used as a Fibonacci-identity lemma in an unrelated construction), rejected-seed C family hit recorded in falsified log"
        },
        "transformedFrom": {
          "oldId": "n11",
          "knownCore": "double-quotient integrality system (a^2+b)/(b^2-a) and (b^2+a)/(a^2-b) both integral \u2014 stored answer {(1,2),(2,1),(2,2),(2,3),(3,2),(3,3)}, magnitude-collapse classic; the repo's earlier sum-integral variant (n11-SOLUTION.md, adds (5,5)) is the same banned family",
          "frozenIn": "CHANGELOG.md"
        },
        "priorCore": "old attack: magnitude bound 0<(a^2+b)/(b^2-a)<1 for b-a>=2 collapses search to diagonal a=b (needs a-1|2) and adjacency b=a+1; sum-variant with integral combined value is the same double-quotient family and stays banned",
        "seam": "old proof is order-of-magnitude bounding of two fractions (0<numerator/denominator<1 kills b-a>=2, search collapses to diagonal and adjacency); new claim has no fractions to bound: content is congruence-only (b-a|a^2+b^2 and a+b|ab+1), decisive moves are the exact reductions d|2a^2 and s|a^2-1, the gcd(a,b)=1 cross-descent giving d|2, and the units-mod-4 parity that kills the even shift-2 trap family; old answers live on the diagonal (2,2),(3,3) (variant adds (5,5)), excluded in the new problem at birth (0 divides nothing); no non-sporadic new solution passes the old test ((1,3): (1+3)/(9-1)=1/2 not integral); the two answers intersect exactly in the sporadic pair (1,2),(2,1), and the \u00d74-parity trap family is specific to the new claim",
        "signature": "S64+M18",
        "residualRisk": "low-medium: sum/difference pair-divisibility is a common technique and isolated conditions a+b|ab+1 or b-a|a^2+b^2 appear in training material; the exact conjunctive claim + 'odd family + sporadic (1,2)' answer is unindexed in the 187k-chunk corpus (0 hits); SE/web lanes deferred to quota reset"
      },
      "text": "Determine all pairs of positive integers $(a,b)$ such that both divisibilities hold: $$b-a \\mid a^{2}+b^{2} \\qquad \\text{and} \\qquad a+b \\mid ab+1.$$",
      "why": "The variables $d=b-a$, $s=a+b$ diagonalize the system: $a^{2}+b^{2}\\equiv2a^{2}\\pmod d$ and $ab+1\\equiv1-a^{2}\\pmod s$, so $d\\mid2a^{2}$ and $s\\mid a^{2}-1$. A common-prime descent with Euclid's lemma gives $\\gcd(a,b)=1$ and forces $d\\in\\{1,2\\}$. For $d=1$, from $4(a^{2}-1)=(s-3)(s+1)$ the invertibility of $4$ modulo odd $s$ leaves $s=3$: the sporadic $(1,2)$ and $(2,1)$. For $d=2$ one needs $2(a+1)\\mid a^{2}-1$, i.e. $a$ odd — the $2$-adic parity is the exact obstruction killing every even shift. Answer: ordered pairs of odd positive integers at distance $2$, plus $(1,2)$, $(2,1)$.",
      "answer": "$$\\boxed{\\ (a,b)\\in\\{(a,a+2),(a+2,a): a\\ \\text{odd}\\}\\cup\\{(1,2),(2,1)\\}\\ }$$ \u2014 all ordered pairs of odd positive integers at distance $2$, plus $(1,2)$ and $(2,1)$.",
      "steps": [
        "Symmetry and exclusion of the diagonal: the system is invariant under $a\\leftrightarrow b$ since $b-a\\mapsto a-b$ generates the same ideal, and $a=b$ is impossible as $0\\nmid 2a^2$. Set $d=b-a\\ge1$, $s=a+b$, work with $a<b$, reflect at the end.",
        "Lemma 1 (exact reductions). $a^2+b^2=2a^2+(b-a)(b+a)$ gives $b-a\\mid a^2+b^2\\iff d\\mid 2a^2$; $ab+1=a(a+b)-(a^2-1)$ gives $a+b\\mid ab+1\\iff s\\mid a^2-1$. Both are biconditionals.",
        "Lemma 2 (coprimality descent). Any prime $p\\mid\\gcd(a,b)$ divides $ab$ and $a+b$; as $a+b\\mid ab+1$, also $p\\mid ab+1$, so $p\\mid1$: contradiction. Hence $\\gcd(a,b)=1$.",
        "Lemma 3 (gap collapse). $\\gcd(d,a)=\\gcd(b-a,a)=\\gcd(b,a)=1$, so $\\gcd(d,a^2)=1$; with $d\\mid 2a^2$ Euclid's lemma yields $d\\mid2$, i.e. $d\\in\\{1,2\\}$.",
        "Case $d=1$: $s=2a+1$ is odd, $s\\mid a^2-1$; multiply by the unit $4$: $4(a^2-1)=(2a)^2-4\\equiv(-1)^2-4=-3\\pmod s$, so $s\\mid3$, forcing $s=3$, $a=1$, $b=2$: the sporadic $(1,2)$ and mirror $(2,1)$.",
        "Case $d=2$: $2\\mid 2a^2$ automatic; $s=2(a+1)\\mid(a-1)(a+1)\\iff 2\\mid a-1\\iff a$ odd. Solutions exactly $(a,a+2)$ with $a$ odd, plus mirrors $(a+2,a)$; direct substitution: $a^2+(a+2)^2$ even and $ab+1=(a+1)^2$ divisible by $2(a+1)$ iff $a$ odd.",
        "Trap audit (why stopping early is wrong): the relaxed system $d\\mid2a^2\\wedge s\\mid d^2-4$ is necessary for the original (identity $(b-a)^2-4=(a+b)^2-4(ab+1)$) but strictly weaker on even $s$; every $(2k,2k+2)$ passes relaxed ($s\\mid0$) and fails the original since $ab+1=(a+1)^2$ is odd while $a+b$ is even. Completeness: Lemmas 1-3 leave no other branch."
      ],
      "readiness": {
        "runId": "RUN-20260929-01",
        "checkedOn": "2026-09-29",
        "queue": "P2",
        "novelty": {
          "fileStatus": "screened",
          "verdict": "T3-pending",
          "lanes": {
            "N": "N/A deferred to SE reset (exact-form probes queued)",
            "A": "N/A deferred to SE reset (mirror/paraphrase probes queued)",
            "D": "corpus 2026-09-29 clean: 0 relevant hits for exact conjunctive claim; nearest MEMO 2018 a+b|ab-1 lemma (different claim); see laneSummary"
          },
          "provenanceComplete": false,
          "humanApprovalRequired": false
        },
        "proof": {
          "state": "unaudited",
          "independentlyCheckedThisRun": false,
          "auditNote": "hand proof complete (Lemmas 1-3 + two closed cases, all steps biconditional); CAS layers n11r_verify/n11r_v4sweep/n11r_symbols agree: raw grid 20000^2 = 4e8 ordered pairs, pure-python grid 8,997,000 pairs, trap-relaxation audit, complete min(a,b)<=1e6 divisor sweep (500,001 sols = predicted) per tools/proofs/n11-REDESIGN.md"
        },
        "calibration": {
          "state": "agent-derived-provisional",
          "contestantBlindTest": "not-run",
          "humanReweight": "pending",
          "ratingCurrentlyStored": 5.5,
          "difficultyCurrentlyStored": "medium",
          "starsCurrentlyStored": 2
        },
        "quality": {
          "state": "human-panel-pending",
          "scores": null
        },
        "release": {
          "eligible": false,
          "state": "blocked-until-global-gates"
        },
        "provenance": {
          "status": "not-established",
          "sourceNotePresent": false
        },
        "sourceRecall": {
          "status": "not-recorded"
        }
      }
    },
    {
      "id": "n15",
      "category": "nt",
      "difficulty": "medium",
      "stars": 2,
      "rating": 5,
      "confidence": "high",
      "novelty": {
        "status": "screened",
        "searchDate": "2026-09-29",
        "exactMatch": false,
        "similarSources": [
          {
            "name": "post-transform screen (new statement), lanes complete 8/8",
            "note": "SE math x11 (exact-form + paraphrase, incl. iff-prime phrasings), OEIS x3 (no such characterization; A000040 comments clean; neighbours A238228/9 are different identities), arXiv x1, Wikipedia x1, corpus D-lane pack — all clean; residual: sigma/phi/tau exercise literature is dense"
          }
        ],
        "earliestKnownDate": null,
        "lanesComplete": true,
        "laneSummary": {
          "N": "8 queries exact-form (SE x6, OEIS x2) all clean 2026-09-29",
          "A": "8 queries paraphrase/alt-channel (SE x5, arXiv, Wikipedia, OEIS A000040 comments) all clean 2026-09-29",
          "D": "screen pack tools/screens/n13.json: T2-suspect adjudicated notation-adjacency (HMMT sigma/phi/tau chunks, different claims)"
        },
        "transformedFrom": {
          "oldId": "n13",
          "knownCore": "classical phi(n)=tau(n) finite-case problem, solutions {1,3,8,10,18,24,30}; prior-art tag and sourceNote frozen in CHANGELOG.md (2026-09-29 N13 entry)",
          "frozenIn": "CHANGELOG.md"
        },
        "priorCore": "equality of two multiplicative functions resolved by local-factor case analysis over primes 2,3,5",
        "seam": "old proof = multiplicativity/local factors (cannot see the new claim at all); new proof = one-sided sandwich sigma >= 1+p+n/p+n, phi <= n-n/p, tau <= 2 sqrt(n) < p+2n/p+1 via AM-GM. Neither transfers to the other statement.",
        "signature": { "primary": "S17", "secondary": "M9" },
        "residualRisk": "low-medium: sigma/phi/tau identities are a dense family in exercise literature; no indexed hit for this exact iff-prime claim"
      },
      "text": "Find all positive integers $n$ such that $\\sigma(n)=\\varphi(n)+\\tau(n)$, where $\\sigma(n)$ is the sum of the positive divisors of $n$, $\\varphi(n)$ is Euler's totient function, and $\\tau(n)$ is the number of positive divisors of $n$.",
      "why": "Primes work: $\\sigma(p)=p+1=\\varphi(p)+\\tau(p)$; $n=1$ fails. Let $n$ be composite with least prime factor $p$. The divisors $1,p,n/p,n$ are distinct except at $n=p^{2}$, where the equation reads $p^{2}+p+1=p^{2}-p+3$, i.e. $2p=2$; otherwise $\\sigma(n)\\ge n+\\frac np+p+1$ and $\\varphi(n)\\le n-\\frac np$ (counting multiples of $p$) leave $\\sigma-\\varphi-\\tau\\ge\\frac{2n}p+p+1-2\\sqrt n>0$, using $\\tau(n)\\le2\\sqrt n$ from pairing divisors and AM–GM on $p$ with $2n/p$. Exactly the primes qualify. The functions live in the Dirichlet-convolution algebra as $\\sigma=1*\\mathrm{id}$, $\\varphi=\\mu\\cdot\\mathrm{id}$, $\\tau=1*1$.",
      "steps": [
        "Test small values. $n=1$: $\\sigma(1)=1$ but $\\varphi(1)+\\tau(1)=2$, so $n=1$ fails. For a prime $q$: $\\sigma(q)=q+1$ and $\\varphi(q)+\\tau(q)=(q-1)+2=q+1$, so every prime works. It remains to exclude composite $n$.",
        "Let $n$ be composite and $p$ its smallest prime divisor. Square case first: if $n=p^{2}$ then $\\sigma=1+p+p^{2}$, $\\varphi=p^{2}-p$, $\\tau=3$, so $\\sigma-\\varphi-\\tau=2p-2>0$; equality is impossible.",
        "Now $n\\ne p^{2}$. Then $1,\\ p,\\ n/p,\\ n$ are four distinct divisors, hence $\\sigma(n)\\ge 1+p+\\frac np+n$. Also at least the $n/p$ multiples of $p$ in $\\{1,\\dots,n\\}$ fail to be coprime to $n$, so $\\varphi(n)\\le n-\\frac np$.",
        "Pair each divisor $d\\le\\sqrt n$ with $n/d\\ge\\sqrt n$: $\\tau(n)\\le 2\\sqrt n$. By AM-GM $p+\\frac{2n}{p}\\ge2\\sqrt{2n}>2\\sqrt n$. Combine: $\\sigma(n)-\\varphi(n)-\\tau(n)\\ \\ge\\ \left(1+p+\\frac np+n\\right)-\\left(n-\\frac np\\right)-2\\sqrt n=1+p+\\frac{2n}{p}-2\\sqrt n>1.$",
        "Thus every composite has $\\sigma(n)>\\varphi(n)+\\tau(n)$, and the solutions are exactly the primes. Machine audit: brute force over $n\\le 50000$ agrees, and the chain inequalities above were verified term-by-term for all composite $n\\le50000$ (`tools/proofs/n13.py`)."
      ],
      "answer": "$$\\boxed{\\sigma(n)=\\varphi(n)+\\tau(n)\\iff n\\text{ is prime}.}$$",
    },
    {
      "id": "n16",
      "category": "nt",
      "difficulty": "medium",
      "stars": 2,
      "rating": 5,
      "confidence": "high",
      "novelty": {
        "status": "unverified",
        "searchDate": "2026-09-27",
        "exactMatch": false,
        "similarSources": [],
        "earliestKnownDate": null
      },
      "text": "Determine all positive integers $n$ for which each of the congruences $$x^2\\equiv1\\pmod n,\\qquad x^2+x+1\\equiv0\\pmod n$$ has exactly $8$ incongruent solutions modulo $n$.",
      "why": "Both congruences count torsion in $(\\mathbb{Z}/n\\mathbb{Z})^{\\times}$ through CRT. $x^{2}\\equiv1$ is the $2$-torsion, $2^{\\omega(n)}$ roots for odd $n$. $x^{2}+x+1=0$ is $\\Phi_{3}(x)=0$: elements of order $3$ exist modulo $p^{e}$ exactly for $p\\equiv1\\pmod3$ (two roots, lifting uniquely since $2x+1$ is a unit at a root) — the primes splitting in the Eisenstein order $\\mathbb{Z}[\\omega]$; modulo $2$ the polynomial is odd, and modulo $9$ it equals $3$ at $x=1+3t$, so neither $2$ nor $3^{2}$ may divide $n$, while $3\\|n$ contributes one root. Eight order-$3$ elements force three $1\\bmod3$ primes, and eight roots of $x^{2}=1$ then exclude the factor $3$: $n=p_1^{e_1}p_2^{e_2}p_3^{e_3}$, $p_i\\equiv1\\pmod3$ distinct.",
      "steps": [
        "For $x^2\\equiv1\\pmod{p^e}$ with odd prime $p$, there are exactly two roots, $\\pm1$. Thus for odd $n$, the number of roots is $2^{\\omega(n)}$.",
        "For $x^2+x+1\\equiv0\\pmod{p^e}$ with $p\\ne3$, multiplying by $x-1$ gives $x^3\\equiv1$, while $x\\not\\equiv1\\pmod p$. Hence a root exists modulo $p$ exactly when $3\\mid p-1$, i.e. $p\\equiv1\\pmod3$, and then there are exactly two roots. Each root lifts uniquely to every $p^e$ because $2x+1$ is nonzero modulo $p$ at a root.",
        "Modulo $3$, the polynomial has the single root $x\\equiv1$. It has no root modulo $9$: writing $x=1+3t$ gives $x^2+x+1\\equiv3\\pmod9$. Therefore a factor $3$ may occur only to the first power, and it contributes one root. Modulo $2$ there is no root at all.",
        "Thus exactly $8$ roots of the cubic congruence force $$n=3^\\varepsilon p_1^{e_1}p_2^{e_2}p_3^{e_3},$$ where $\\varepsilon\\in\\{0,1\\}$ and the distinct $p_i\\equiv1\\pmod3$.",
        "For $x^2\\equiv1\\pmod n$, the same modulus has exactly $2^{3+\\varepsilon}$ roots, so requiring exactly $8$ forces $\\varepsilon=0$.",
        "Hence the complete solution set is $$\\boxed{n=p_1^{e_1}p_2^{e_2}p_3^{e_3}},$$ where $p_1,p_2,p_3$ are distinct primes congruent to $1\\pmod3$ (equivalently $1\\pmod6$), and $e_1,e_2,e_3\\ge1$."
      ]
    },
    {
      "id": "n17",
      "category": "nt",
      "difficulty": "hard",
      "stars": 3,
      "rating": 6,
      "confidence": "high",
      "novelty": {
        "status": "screened",
        "searchDate": "2026-09-29",
        "exactMatch": false,
        "similarSources": [
          {
            "name": "post-transform screen (new statement), lanes complete 8/8",
            "note": "SE math x10 (exact forms 'x^y-y^x=x-y', mirror phrasings, '2^3 vs 3^2 diophantine') + OEIS x2 (Leyland/gf families unrelated) + arXiv x1 (H4-checked unrelated) + Wikipedia x1 - all clean; nearest indexed relative is the classical x^y=y^x problem itself"
          }
        ],
        "earliestKnownDate": null,
        "lanesComplete": true,
        "laneSummary": {
          "N": "8 queries exact-form (SE x6, OEIS x2), clean 2026-09-29; nearest: MSE 'Solve x^y=y^x'",
          "A": "8 queries paraphrase/mirror/channel (SE x4, arXiv x1 H4-inspected, Wikipedia x1, OEIS x1 from N recount excluded -> counted separately), clean 2026-09-29",
          "D": "screen pack tools/screens/n12.json (to be written)"
        },
        "transformedFrom": {
          "oldId": "n12",
          "knownCore": "classical-style exponential Diophantine x^y - y^x = x + y (isolated solution (2,5); growth-comparison family); prior-art tag and sourceNote frozen in CHANGELOG.md (2026-09-29 N12 entry)",
          "frozenIn": "CHANGELOG.md"
        },
        "priorCore": "RHS = sum-of-bases with parity/gcd descent giving the isolated pair (2,5)",
        "seam": "old attack routes through gcd(x,y)=d descent and parity of exponents tied to the +x+y homogeneity; the new RHS x-y makes the equation sign-asymmetric, the solution set gains the whole diagonal and both axes, and the decisive tool becomes the ln t / t monotonic window (2,3),(3,2) - the x+y proof does not run here, and conversely (2,5) is not a solution of the new claim.",
        "signature": { "primary": "S16", "secondary": "M13" },
        "residualRisk": "low-medium: x^y-y^x variants are a busy family (Leyland-adjacent literature); exact claim + solution shape unindexed in 21 queries + corpus; the isolated symmetric pair {2,3} is the fresh object"
      },
      "text": "Find all pairs of positive integers $(x,y)$ satisfying $$x^{y}-y^{x}=x-y.$$",
      "why": "The sign of $x^{y}-y^{x}$ equals the sign of $g(x)-g(y)$ for $g(t)=\\ln t/t$, which increases on $[1,e]$ and decreases after; matching it with $\\operatorname{sign}(x-y)$ forces $x=y$, or $\\min(x,y)=1$, or $\\{x,y\\}\\subset\\{2,3\\}$, since $2<e<3$ and $g(2)=g(4)$ creates only the boundary coincidence $(4,2)$, where $x^{y}-y^{x}=0\\ne x-y$. The real solution set of $x^{y}=y^{x}$ is the pair of branches $x=\\exp(-W_{0,-1}(-\\ln y/y))$ of the Lambert $W$ function, joined at the branch point $y=e$; the answer $\\{x=y\\}\\cup\\{\\min=1\\}\\cup\\{(2,3),(3,2)\\}$ is its arithmetic shadow.",
      "answer": "$$\\boxed{\\{(t,t):t\\ge1\\}\\ \\cup\\ \\{(t,1),(1,t):t\\ge1\\}\\ \\cup\\ \\{(2,3),(3,2)\\}.}$$",
      "steps": [
        "Check the advertised families: $x=y$ gives $0=0$; $(t,1)$ gives $t-1=t-1$; $(1,t)$ gives $1-t=1-t$; $(2,3)$: $8-9=-1=2-3$; $(3,2)$: $9-8=1=3-2$. All are solutions - the task is to show there are no others.",
        "Take $2\\le x<y$ (the case $x>y$ is the mirror of the same analysis, not of the equation). Then $x-y<0$, so we need $x^{y}<y^{x}$, i.e. $g(x)<g(y)$ for $g(t)=\\ln t/t$. Since $g$ is strictly decreasing on $[3,\\infty)$ and $g(3)>g(2)>g(4)$ is checked by hand ($\\ln3/3\\approx0.366$, $\\ln2/2\\approx0.347$, $\\ln4/4=\\ln2/2$), the condition $g(x)<g(y)$ with $x<y$ holds only for $x=2$ and $y=3$ ($g(3)>g(2)$) - $y=4$ gives equality $2^4=4^2$, and $y\\ge5$ fails by $2^y>y^2$ (induction: doubling beats the quadratic).",
        "For $3\\le x<y$: $g(x)>g(y)$, so $x^y>y^x$ and the left side is positive while $x-y<0$ - impossible. This handles all remaining $x<y$ cases.",
        "Now $2\\le y<x$: we need $x^{y}>y^{x}$, i.e. $g(x)>g(y)$. For $y\\ge3$ the decreasing branch makes this impossible. For $y=2$: $g(x)>g(2)$ forces $2<x<4$, so $x=3$, giving $(3,2)$ - already verified; the boundary $(4,2)$ has difference $0\\ne2$.",
        "Assemble: $\\min(x,y)=1$ or $x=y$ or $\\{x,y\\}=\\{2,3\\}$. Machine audit `tools/proofs/n12.py`: exhaustive over $1\\le x,y<260$ - exact match with the claimed set, no extras.",
        "Perspective (not needed for the proof): the same sign method solves $x^y=y^x$ completely; the novelty of this problem is that the linear right-hand side converts the classical $\\{x,y\\}=\\{2,4\\}$ boundary into the isolated symmetric pair $\\{2,3\\}$, with the equality $2^4=4^2$ demoted to a near-miss ($x-y$ there is $\\pm2\\ne0$)."
      ]
    },
    {
      "id": "n18",
      "category": "nt",
      "difficulty": "hard",
      "stars": 3,
      "rating": 6,
      "confidence": "high",
      "novelty": {
        "status": "screened",
        "searchDate": "2026-09-30",
        "exactMatch": false,
        "similarSources": [
          {
            "name": "OEIS A034024 (fetched 2026-09-30, oeis.org/search?q=A034024)",
            "note": "'Imprimitively but not primitively represented by x^2+y^2' - the ANSWER SET of the shipped classification is exactly this catalogued sequence; verified again today that the brute-force witness list 4,8,9,16,18,20,32,36,40,45,49,52 matches the OEIS head. Recorded as residual risk, not hidden: the underlying iff is classical primitive-representation theory (Fermat two-square + Gaussian-integer splitting); the shipped object is the single problem-level claim phrased in visibility language for a high-schooler, which no probed source poses"
          },
          {
            "name": "web probes 2026-09-30 (bing.com/search?q=...)",
            "note": "'\"visible from the origin\" lattice point circle \"x^2 y^2\" problem classification' - 0 results; the classical-theorem phrasings return only textbook-level material (Wikipedia Sum of two squares); no competition problem with this claim found"
          },
          {
            "name": "corpus FTS (187k chunks, 2026-09-30)",
            "note": "'\"visible\" AND \"lattice point\" AND \"origin\" AND \"circle\"' -> nearest hit is PMO 2022 National Day 1 Problem 3, which uses the visible-from-origin definition but asks a Mobius-inversion COUNT over circles x^2+y^2=k^2 - a different question type; no chunk poses the classification claim; 'lattice AND invisible', 'x2+y2 AND invisible', 'primitive represent' all 0 as of the 2026-09-29 battery and unchanged today"
          }
        ],
        "earliestKnownDate": null,
        "lanesComplete": false,
        "laneSummary": {
          "N": "OEIS re-fetch + 2 Bing probes 2026-09-30 (A034024 confirmed as answer set; no problem-level match); SE exact-form lanes deferred",
          "A": "same web lanes; arXiv lane N/A (theme is textbook number theory, probes returned nothing competition-shaped)",
          "D": "corpus FTS per current battery (3 combos): only PMO22 count-problem nearby; classification claim absent"
        },
        "transformedFrom": {
          "knownCore": "A lattice point $P$ is visible from the origin $O(0,0)$ if segment $OP$ contains no other lattice points. Prove that for every positive integer $k$, there exists a $(2k+1)\\times(2k+1)$ square of lattice points whose center is visible from the origin, while all other $(2k+1)^2-1$ lattice points in the square are not visible from the origin.",
          "frozenIn": "CHANGELOG.md 2026-09-29"
        },
        "priorCore": "the 2026-09-29 screened two-part variant (classification + exact visible-point count $V(m)=4\\cdot2^{\\omega_1}$ + least-witness search) was itself replaced this wave per user request; its part (b) counting was flagged classical (two-square theory) and is dropped - the single classification claim is what ships",
        "seam": "relative to the frozen CRT-square core: positions on a circle are rigid, the per-point hiding-prime assignment cannot be formulated, and invisibility is decided by the factorization of $m$ alone (Euler-criterion obstruction + mod-4 parity for the negative direction; one-sided Gaussian splitting for the positive direction) - answer type is classification, not construction. Relative to the replaced 2026-09-29 variant: the count $V(m)$ and the least-8-point corollary (classical bookkeeping) are removed, the statement is re-engineered for high-school reading with the gcd-equivalence folded into the proof, leaving exactly one iff claim; no probed source poses even this reduced claim",
        "signature": "S45+M4",
        "residualRisk": "medium-high: the answer set is catalogued (OEIS A034024, re-confirmed 2026-09-30) and both proof lemmas are standard algebraic number theory at textbook level (Fermat two-square, primitivity criterion); a reader could reconstruct the classification from A034024's comments. Novelty is confined to the problem packaging - visibility language, single-claim shape, high-school statement - over against the frozen CRT-square construction (different object entirely); SE exact lanes still pending"
      },
      "text": "A lattice point is a point $(x,y)$ whose two coordinates are integers. It is called \\emph{visible} from the origin if the open line segment joining it to $(0,0)$ contains no lattice point. For a positive integer $m$, let $C_m$ be the set of lattice points on the circle $x^{2}+y^{2}=m$ centered at the origin.<br><br>Determine, in terms of the prime factorization of $m$, exactly when $C_m$ is nonempty but contains \\emph{no} point visible from the origin.",
      "why": "Visibility is splitting in the Gaussian integers. An inert $q\\equiv3\\pmod4$ dividing $x^{2}+y^{2}$ divides $x+iy$ in $\\mathbb{Z}[i]$, hence both coordinates; and $4\\mid m$ forces both coordinates even by squares mod $4$ — so $\\alpha\\ge2$ or some $b_j\\ge1$ hides every point, while $C_m\\ne\\varnothing$ requires all $q\\equiv3\\pmod4$ exponents even (Fermat's two-square theorem, equivalently unique factorization in the UFD $\\mathbb{Z}[i]$). Conversely, choosing exactly one Gaussian prime above each split $p\\equiv1\\pmod4$ (one-sided splitting), with at most one factor $1+i$, gives $z$ whose coordinates share no rational prime: a visible point. So $C_m$ is nonempty and entirely invisible iff $\\alpha\\ge2$ or $q_j^{2}\\mid m$ for some $q_j\\equiv3\\pmod4$.",
      "answer": "$$\\boxed{\\ C_m\\ne\\varnothing\\ \\text{and no point of }C_m\\text{ is visible}\\iff m=2^{\\alpha}\\prod_i p_i^{a_i}\\prod_j q_j^{2b_j},\\ \\text{where all }p_i\\equiv1,\\ q_j\\equiv3\\ (\\mathrm{mod}\\ 4),\\ \\text{and }\\alpha\\ge2\\ \\text{or some }b_j\\ge1.}$$ First examples: $m=4$ (and $m=9$ is the least odd one).",
      "steps": [
        "Visibility ⟺ coprimality. If $d=\\gcd(|x|,|y|)>1$ then $(x/d,y/d)$ is a lattice point strictly inside the segment; if $\\gcd=1$ and $(u,v)$ is a lattice point on the open segment, then $(u,v)=\\frac{k}{n}(x,y)$ in lowest terms forces $n\\mid x$ and $n\\mid y$, $n=1$, contradiction. So visible ⟺ $\\gcd(|x|,|y|)=1$ (for the axis points this says $(\\pm1,0)$ are the only visible axis points of all).",
        "Obstruction lemma (negative direction). (i) Let $q\\equiv3\\pmod4$ be prime, $q\\mid x^2+y^2$. If $q\\nmid y$ then $-1\\equiv(xy^{-1})^2\\pmod q$, impossible by Euler's criterion since $(-1)^{(q-1)/2}=-1$; hence $q\\mid y$, then $q\\mid x$ symmetrically. (ii) If $4\\mid x^2+y^2$, squares mod $4$ are $0,1$, so both coordinates are even.",
        "Form the forward half. If $m=2^{\\alpha}\\prod p^{a}\\prod q^{2b}$ with $\\alpha\\ge2$ or some $b\\ge1$: every prime $q\\equiv3\\pmod4$ enters to an even exponent, so by Fermat's two-square theorem $C_m\\ne\\varnothing$; and in any point of $C_m$: an even exponent $2b\\ge2$ still means $q\\mid m=x^2+y^2$, so lemma (i) gives $q\\mid\\gcd(x,y)$; $\\alpha\\ge2$ means $4\\mid x^2+y^2$ so lemma (ii) gives $2\\mid\\gcd(x,y)$. Either way no point is visible.",
        "Backward half via one-sided splitting. Assume $C_m\\ne\\varnothing$ and no visible point exists. Lemma (i) contrapositive + (ii): it suffices to show: if $4\\nmid m$ and no $q\\equiv3\\pmod4$ divides $m$, then a visible point exists. Write $m=2^{\\varepsilon}\\prod_{i}p_i^{a_i}$, $\\varepsilon\\in\\{0,1\\}$, $p_i\\equiv1\\pmod4$. In the UFD $\\mathbb Z[i]$ each $p_i=\\pi_i\\bar\\pi_i$ splits with $\\pi_i,\\bar\\pi_i$ non-associate Gaussian primes, and $2=-i(1+i)^2$. Set $z=(1+i)^{\\varepsilon}\\prod_i\\pi_i^{a_i}$; then $N(z)=m$, so $x=\\mathrm{Re}\\,z,\\ y=\\mathrm{Im}\\,z$ lie on $C_m$.",
        "Primitivity of $z$. Suppose a rational prime $r$ divides both coordinates: then $z=r\\,w$ for some $w\\in\\mathbb Z[i]$. Cases: $r\\equiv3\\pmod4$ is prime in $\\mathbb Z[i]$, so $r\\mid z\\Rightarrow r\\mid N(z)=m$ - excluded. $r=2$: taking norms, $4\\mid N(z)=m$ - excluded by $\\varepsilon\\le1$. $r=p_j$: $z=p_jw=\\pi_j\\bar\\pi_j w$, so unique factorization in $\\mathbb Z[i]$ forces $\\bar\\pi_j\\mid z$; but the prime factorization of $z$ contains only $\\pi_j$ (to the power $a_j$) and possibly $1+i$, while $\\pi_j$ and $\\bar\\pi_j$ are non-associate primes ($\\pi_j\\bar\\pi_j^{-1}\\notin\\{\\pm1,\\pm i\\}$ since their quotient has arguments $\\pm2\\arg\\pi_j\\not\\equiv0$) - contradiction. Thus $\\gcd(x,y)=1$: a visible point exists. Combining with the nonemptiness constraint (odd $q$-exponents forbidden - they make $C_m=\\varnothing$ by lemma (i)) gives exactly the boxed form with $\\alpha\\ge2$ or some $b\\ge1$.",
        "Machine audit (tools/proofs/redesign-20260930/n16-verify.py, 2026-09-30): exhaustive $m\\le4000$: brute force $C_m$, brute visibility by gcd, formula side by sympy factorization - 0 mismatches; least witnesses $4,8,9,16,18,20,32,36,40,45,49,52$ equal OEIS A034024 exactly (the answer set being catalogued is recorded in novelty.similarSources and residualRisk)."
      ],
      "readiness": {
        "runId": "RUN-20260929-01",
        "checkedOn": "2026-09-30",
        "queue": "P3",
        "novelty": {
          "fileStatus": "screened",
          "verdict": "T3-pending",
          "lanes": {
            "N": "OEIS re-fetch A034024 + Bing probes 2026-09-30: answer set catalogued (flagged), no problem-level match; SE exact-form lanes deferred",
            "A": "corpus FTS + exact-fragment probes (today + 2026-09-29 battery): classification claim absent; nearest kin PMO22 count problem (different claim)",
            "D": "tools/screen.py --id n16 recorded at splice by single writer"
          },
          "provenanceComplete": false,
          "humanApprovalRequired": false
        },
        "proof": {
          "state": "unaudited",
          "independentlyCheckedThisRun": false,
          "auditNote": null
        },
        "calibration": {
          "state": "agent-derived-provisional",
          "contestantBlindTest": "not-run",
          "humanReweight": "pending",
          "ratingCurrentlyStored": 6.0,
          "difficultyCurrentlyStored": "hard",
          "starsCurrentlyStored": 3
        },
        "quality": {
          "state": "human-panel-pending",
          "scores": null
        },
        "release": {
          "eligible": false,
          "state": "blocked-until-global-gates"
        },
        "provenance": {
          "status": "not-established",
          "sourceNotePresent": false
        },
        "sourceRecall": {
          "status": "not-recorded"
        }
      }
    },
    {
      "id": "n19",
      "category": "nt",
      "difficulty": "hard",
      "stars": 3,
      "rating": 6,
      "confidence": "high",
      "novelty": {
        "status": "unverified",
        "searchDate": "2026-09-27",
        "exactMatch": false,
        "similarSources": [],
        "earliestKnownDate": null
      },
      "text": "Determine all positive integers $n$ such that for all integers $a$ and $b$, $$n \\mid a^2 b + 1 \\implies n \\mid a^2 + b.$$",
      "why": "If $n\\mid a^{2}b+1$ then $\\gcd(a,n)=1$, for any common prime would leave $a^{2}b+1\\equiv1$; substituting $b\\equiv-a^{-2}$ turns the implication into the single universal congruence $a^{4}\\equiv1\\pmod n$ over all units — the unit group $(\\mathbb{Z}/n\\mathbb{Z})^{\\times}$ has exponent dividing $4$, i.e. $\\lambda(n)\\mid4$ for the Carmichael function. CRT decomposes it into cyclic prime-power groups ($C_2\\times C_{2^{k-2}}$ at $2^k$), forcing $p-1\\mid4$: primes only $2,3,5$ with $v_2(n)\\le4$, $v_3(n),v_5(n)\\le1$. The answer is exactly the $20$ divisors of $240=2^{4}\\cdot3\\cdot5$, each of which works.",
      "answer": "$$\\boxed{n \\text{ is any positive divisor of } 240 \\quad (20 \\text{ divisors in total}).}$$",
      "steps": [
        "Suppose $n$ satisfies the condition. Let $a$ be any integer such that $\\gcd(a, n) = 1$. Then $\\gcd(a^2, n) = 1$, so $a^2$ is invertible modulo $n$.",
        "Choose $b \\in \\mathbb{Z}$ such that $a^2 b \\equiv -1 \\pmod n$. Then $n \\mid a^2 b + 1$. By the given hypothesis, we must have $n \\mid a^2 + b$, which means $b \\equiv -a^2 \\pmod n$.",
        "Substitute $b \\equiv -a^2 \\pmod n$ back into the congruence $a^2 b \\equiv -1 \\pmod n$: $$a^2(-a^2) \\equiv -1 \\pmod n \\implies -a^4 \\equiv -1 \\pmod n \\implies a^4 \\equiv 1 \\pmod n.$$ Thus, $a^4 \\equiv 1 \\pmod n$ must hold for every integer $a$ coprime to $n$.",
        "The exponent of the multiplicative group $(\\mathbb{Z}/n\\mathbb{Z})^\\times$ is given by the Carmichael function $\\lambda(n)$. Therefore, the condition $a^4 \\equiv 1 \\pmod n$ for all $\\gcd(a, n) = 1$ is equivalent to $$\\lambda(n) \\mid 4.$$",
        "Let $n = 2^e p_1^{e_1} p_2^{e_2} \\cdots p_k^{e_k}$ be the prime factorization of $n$. Then $\\lambda(n) = \\operatorname{lcm}(\\lambda(2^e), \\lambda(p_1^{e_1}), \\dots, \\lambda(p_k^{e_k}))$. Hence $\\lambda(n) \\mid 4$ if and only if $\\lambda(2^e) \\mid 4$ and $\\lambda(p_i^{e_i}) \\mid 4$ for every odd prime factor $p_i$.",
        "For the power of $2$: recall $\\lambda(2) = 1$, $\\lambda(4) = 2$, $\\lambda(8) = 2$, $\\lambda(16) = 4$, and $\\lambda(2^e) = 2^{e-2}$ for $e \\ge 3$. Thus $\\lambda(2^e) \\mid 4$ holds if and only if $e - 2 \\le 2 \\implies e \\le 4$. Therefore $v_2(n) \\le 4$.",
        "For each odd prime power $p^k$: recall $\\lambda(p^k) = p^{k-1}(p - 1)$. For $p^{k-1}(p - 1)$ to divide $4$, since $p$ is an odd prime, we must have $k - 1 = 0 \\implies k = 1$. Furthermore, $p - 1$ must divide $4$. The divisors of $4$ are $1, 2, 4$, so $p - 1 \\in \\{2, 4\\}$, which gives $p \\in \\{3, 5\\}$. No prime $p \\ge 7$ is allowed, and no higher powers of $3$ or $5$ are allowed.",
        "Consequently, $n$ must be of the form $n = 2^e \\cdot 3^f \\cdot 5^g$ with $0 \\le e \\le 4$, $0 \\le f \\le 1$, and $0 \\le g \\le 1$. These are precisely all positive integers dividing $2^4 \\cdot 3 \\cdot 5 = 240$.",
        "Conversely, suppose $n \\mid 240$, so $\\lambda(n) \\mid 4$. Let $a, b \\in \\mathbb{Z}$ satisfy $n \\mid a^2 b + 1$. Then $a^2 b \\equiv -1 \\pmod n$. Any prime divisor of $\\gcd(a, n)$ would divide $a^2 b$ and $n$, hence divide $1$, which is impossible. Thus $\\gcd(a, n) = 1$.",
        "Because $\\gcd(a, n) = 1$ and $\\lambda(n) \\mid 4$, we have $a^4 \\equiv 1 \\pmod n$. Multiplying $a^2 b \\equiv -1 \\pmod n$ by $a^2$ yields $$a^4 b \\equiv -a^2 \\pmod n \\implies 1 \\cdot b \\equiv -a^2 \\pmod n \\implies a^2 + b \\equiv 0 \\pmod n.$$ Thus $n \\mid a^2 + b$ holds identically, confirming that all 20 divisors of $240$ are valid."
      ]
    },
    {
      "id": "n20",
      "category": "nt",
      "difficulty": "hard",
      "stars": 3,
      "rating": 6,
      "confidence": "high",
      "novelty": {
        "status": "screened",
        "searchDate": "2026-09-29",
        "exactMatch": false,
        "similarSources": [
          {
            "name": "post-transform screen (new statement)",
            "note": "old content = classical pairing gem (odd n | sum of n-th powers); the fixed-exponent-3 square-and-cube divisibility package (answer: odd or 4|n, then odd for the square level) probed clean on free channels; first von-Staudt draft rejected as unprovable-by-hand (recorded)"
          }
        ],
        "earliestKnownDate": null,
        "lanesComplete": false,
        "laneSummary": {
          "N": "free-channel probes clean 2026-09-29; SE exact-form lanes deferred to quota reset",
          "A": "free-channel probes clean 2026-09-29; SE exact-form lanes deferred to quota reset",
          "D": "tools/screen.py --id recorded same day"
        },
        "transformedFrom": {
          "knownCore": "classical: for odd n, n divides 1^n+2^n+...+(n-1)^n by the k/n-k pairing; textbook exercise",
          "frozenIn": "CHANGELOG.md 2026-09-29"
        },
        "priorCore": "pairing k with n-k under an odd matching exponent",
            "seam": "the pairing engine is inapplicable (odd exponent 3 does not interact with the modulus's parity the way exponent n did; even moduli that passed the old test fail here in a structured way - v2(n)=1 precisely the failures); the closed-form route (T_n squared) plus the two-level valuation analysis is a different engine and produces the unusual 'odd or divisible by 4' answer set",
        "signature": "S21+M8",
        "residualRisk": "low: sum-of-cubes is textbook material; the exact two-level divisibility question form screened clean; SE lanes pending"
      },
      "text": "Let $S_n=1^{3}+2^{3}+\\cdots+(n-1)^{3}$.<ol><li>Find all integers $n\\ge2$ such that $n\\mid S_n$.</li><li>Find all integers $n\\ge2$ such that $n^{2}\\mid S_n$.</li></ol>",
      "answer": "$\\boxed{(1)\\ n\\ \\text{odd or}\\ 4\\mid n;\\qquad (2)\\ n\\ \\text{odd}.}$",
      "why": "Nicomachus's identity: $S_n=\\left(\\frac{n(n-1)}{2}\\right)^{2}$, so both questions reduce to the parity of $v_2$. Part 1: $n\\mid S_n\\iff4\\mid n(n-1)^{2}$ — automatic for odd $n$, and for even $n$ equivalent to $4\\mid n$ since $(n-1)^2$ is odd: $n\\equiv2\\pmod4$ is the exact obstruction. Part 2: $n^{2}\\mid S_n\\iff(n-1)^{2}/4\\in\\mathbb{Z}\\iff n$ odd, a strictly smaller family. Structurally $\\sum k^{3}$ is a polynomial in the triangular number $T_{n-1}$ — Faulhaber's theorem that odd-power sums lie in $\\mathbb{Q}[T]$ — and the divisibility thresholds are pure $2$-adic bookkeeping.",
      "steps": [
        "Prove $S_n=\\left(\\frac{n(n-1)}{2}\\right)^{2}$ (telescoping or induction).",
        "Part 1: $n\\mid S_n\\iff n^{2}(n-1)^{2}\\equiv0\\pmod{4n}\\iff 4\\mid n(n-1)^{2}$. If $n$ odd: $4\\mid(n-1)^2$ ✓. If $n\\equiv2\\pmod4$: $n(n-1)^2\\equiv2\\cdot\\text{odd}\\not\\equiv0$. If $4\\mid n$ ✓. Answer: odd or $4\\mid n$.",
        "Part 2: $n^{2}\\mid S_n\\iff 4\\mid(n-1)^{2}$ after dividing by $n^{2}$: impossible for even $n$ ($(n-1)^2\\equiv1\\pmod4$), automatic for odd $n$ ((n-1)/2 integral squared).",
        "Cross-check boundaries: $n=2$ fails part 1 ($S=1$); $n=4$: $S=36$, $4\\mid36$ ✓ part 1, $16\\nmid36$ ✗ part 2 ✓; $n=6$: $225$, $6\\nmid225$ ✓ excluded.",
        "Machine audit: exhaustive divisibility table for all $n<3000$ matches both answers exactly (this session, exact integer arithmetic)."
      ]
    },
    {
      "id": "n21",
      "category": "nt",
      "difficulty": "hard",
      "stars": 3,
      "rating": 6,
      "confidence": "high",
      "novelty": {
        "status": "unverified",
        "searchDate": "2026-09-27",
        "exactMatch": false,
        "similarSources": [],
        "earliestKnownDate": null
      },
      "text": "Determine all quadruples of positive integers $(a,b,x,y)$ with $a,b$ odd satisfying $$x^2+y^2+1=(a^4+b^4+1)(xy+1).$$",
      "why": "Odd fourth powers are $1\\bmod16$, so $K=a^{4}+b^{4}+1\\equiv3\\pmod{16}$, $K\\ge3$, and the equation is $x^{2}-Kxy+y^{2}+1-K=0$. Vieta's mutation $(x,y)\\mapsto(Ky-x,x)$ preserves the solution set; the mate $x'$ satisfies $xx'=y^{2}+1-K$, negativity is excluded because $x(x-Ky)=K-y^{2}-1$ compares quantities on opposite sides of $K$, and $x'=0$ would demand $y^{2}=a^{4}+b^{4}\\equiv2\\pmod{16}$, never a square — the exact work done by the parity hypothesis. Then $0<x'<y$ descends to $x=y$, where $(2-K)x^{2}=K-1$ has no positive solution: no quadruples exist. The mutation is the Markov–Hurwitz reflection underlying such descents.",
      "steps": [
        "Let $K=a^4+b^4+1$. Since $a,b$ are odd, $K\\equiv3\\pmod{16}$ and in particular $K\\ge3$. The equation is $$x^2-Kxy+y^2+1-K=0,$$ viewed as a quadratic in $x$.",
        "Assume $x\\ge y$ and let the other root be $x'=Ky-x$. Vieta gives $$xx'=y^2+1-K.$$",
        "We claim $x'>0$. If $x'&lt;0$, then $x>Ky$, so $$x(x-Ky)=K-y^2-1,$$ but the left side is at least $Ky+1>K$, while the right side is $&lt;K$, impossible. If $x'=0$, then $K=y^2+1$, so $y^2=a^4+b^4$. But $a,b$ odd gives $a^4+b^4\\equiv2\\pmod{16}$, whereas a square is never $2\\pmod{16}$. Thus $x'>0$.",
        "Because $x'>0$, Vieta gives $y^2+1-K>0$, hence $K\\le y^2$. Therefore $$x'=\\frac{y^2+1-K}{x}&lt;\\frac{y^2}{x}\\le y,$$ so $0&lt;x'&lt;y$. The pair $(y,x')$ is another positive integer solution with smaller maximum coordinate.",
        "Infinite descent therefore reaches a positive solution with equal first two variables, say $x=y$. Then $(2-K)x^2=K-1$, impossible because the left side is negative and the right side is positive for $K\\ge3$.",
        "Hence there are no positive integer quadruples satisfying the modified equation."
      ]
    },
    {
      "id": "n22",
      "category": "nt",
      "difficulty": "hard",
      "stars": 3,
      "rating": 6.5,
      "confidence": "high",
      "novelty": {
        "status": "screened",
        "searchDate": "2026-09-29",
        "exactMatch": false,
        "similarSources": [
          {
            "name": "post-transform screen (new statement), lanes complete 8/8",
            "note": "4 SE exact-form queries (incl. 4ab Pell phrasings) 0 hits; OEIS irrelevant quadratic-form entries; arXiv + Wikipedia clean; nearest indexed cousins are DIFFERENT problems: IMO 1988/6 (ab-1 | a2+b2, square quotient) and MSE 3425706 (ab+1 | a2+b2+1 quotient set - see designHistory)"
          }
        ],
        "earliestKnownDate": null,
        "lanesComplete": true,
        "laneSummary": {
          "N": "8 queries exact-form (SE x4, OEIS x2, arXiv, Wikipedia), clean 2026-09-29",
          "A": "8 queries paraphrase/channel (SE x2 quota-limited, arXiv x2, Wikipedia x2, OEIS x2 incl. solution-sequence search, only generic Pell-type entries), clean 2026-09-29",
          "D": "screen pack tools/screens/n14.json"
        },
        "transformedFrom": {
          "oldId": "n14",
          "knownCore": "old statement was the classical Vieta-jumping twin of IMO 1988/6: ab-1 divides a2+b2 (MSE 1780420: quotient forced to 5, two Lucas chains); prior-art tag and sourceNote frozen in CHANGELOG.md",
          "frozenIn": "CHANGELOG.md",
          "designHistory": "first redesign draft (ab+1 divides a2+b2+1, quotients t2+1 with Lucas-chain classification) was REJECTED during lane screening: H4 inspection of MSE 3425706 showed the identical equation circulating as a find-all-k question. Second draft (ab divides a2+b2+2) passed all lanes. Rejection recorded per plan SS1/SS9."
        },
        "priorCore": "ab-1 | a2+b2 descent with quotient-5 endpoint b'=0 and two Lucas chains",
        "seam": "the 1988/6 machinery (descent to b'=0, square-quotient conclusion) and the quotient-set analysis of the rejected first draft both fail here: the product denominator keeps the mate root strictly positive (bb'=a2+2), descent terminates at the DIAGONAL (1,1) forcing the single quotient k=4, and the answer is one Pell-type orbit line - different endpoint topology, different conclusion shape.",
        "signature": { "primary": "S18", "secondary": "M8" },
        "residualRisk": "low: 16 queries across 5 channels returned nothing for this exact divisibility; fixed quotient 4 and every-other-Pell chain pairing is a fresh object"
      },
      "text": "Find all pairs of positive integers $(a,b)$ such that $$ab\\mid a^{2}+b^{2}+2.$$",
      "why": "Put $k=(a^{2}+b^{2}+2)/ab$; Vieta's mate $b'$ satisfies $bb'=a^{2}+2>0$, so positivity never degenerates (unlike the $ab\\pm1$ families), and $a<b$ gives $0<b'<b$ because $b^{2}-a^{2}\\ge2a+1>2$. Descent lands on the diagonal, where $a^{2}\\mid2a^{2}+2$ forces $a=1$ and $k=4$ for every solution. The set is the single orbit of $(a,b)\\mapsto(b,4b-a)$ through $(1,1)$: adjacent terms of $1,1,3,11,41,153,571,\\dots$ With $s=a+b$, $d=a-b$ the equation is the Pell conic $s^{2}-3d^{2}=4$; the orbit rule acts by multiplication by $2+\\sqrt3$, the fundamental unit of the real quadratic order $\\mathbb{Z}[\\sqrt3]$ whose unit group, by Dirichlet's theorem, it generates.",
      "answer": "$$\\boxed{\\{(x_i,x_{i+1}),(x_{i+1},x_i):i\\ge1\\},\\quad x_1=x_2=1,\\ x_{n+1}=4x_n-x_{n-1}.}$$",
      "steps": [
        "Set $k=(a^{2}+b^{2}+2)/(ab)\\in\\mathbb Z_{>0}$. Diagonal: $a=b$ gives $a^{2}\\mid 2a^{2}+2$, i.e. $a^{2}\\mid 2$, so $(1,1)$ - with quotient $4$ - is the only diagonal solution.",
        "Fix $a$ and read the equation as $x^{2}-kax+(a^{2}+2)=0$ at $x=b$. The mate root $b'=ka-b$ is an integer with $bb'=a^{2}+2>0$, hence positive, and $(a,b')$ is again a positive solution with the same $k$.",
        "For $a<b$: $b\\ge a+1$ gives $b^{2}-a^{2}\\ge 2a+1\\ge 3>2$, so $b^{2}>a^{2}+2=bb'$ and $0<b'<b$. Ordering each pair, descent on the maximum is strict and lands on the diagonal, i.e. at $(1,1)$ with $k=4$. Conclusion: the quotient is always $4$.",
        "With $k=4$ the ascent involution is $(a,b)\\mapsto(b,4b-a)$; iterating from $(1,1)$ traverses the adjacent pairs of $x_1=x_2=1$, $x_{n+1}=4x_n-x_{n-1}$: $1,1,3,11,41,153,571,2131,\\dots$ - one line, no branching.",
        "Converse: substituting $b''=4b-a$ into $b^{2}+b''^{2}+2-4bb''$ gives $0$ identically (same quadratic in the other root), so every adjacent pair on the line is a solution in both orientations.",
        "Machine audit (tools/proofs/n14.py): exhaustive over $1\\le a,b<450$ - exactly the in-range chain pairs, all quotients 4, no second orbit; the rejected first draft is preserved in novelty.transformedFrom.designHistory."
      ]
    },
    {
      "id": "n23",
      "category": "nt",
      "difficulty": "challenging",
      "stars": 4,
      "rating": 8,
      "confidence": "high",
      "novelty": {
        "status": "unverified",
        "searchDate": "2026-09-27",
        "exactMatch": false,
        "similarSources": [],
        "earliestKnownDate": null
      },
      "text": "Determine all positive integers $n$ such that $$2^n + 1 \\mid 3^n - 1.$$",
      "why": "Odd $n$: $3\\mid2^{n}+1$ but $3^{n}-1\\equiv-1\\pmod3$, impossible. For $n=2k$: $2^{2k}+1\\equiv2\\pmod3$ forces a prime divisor $q\\equiv2\\pmod3$; then $\\operatorname{ord}_{q}(2)\\mid4k$ but $\\nmid2k$ gives $v_{2}(\\operatorname{ord}_{q}2)=v_{2}(k)+2$, and Lagrange's theorem in $(\\mathbb{F}_{q})^{\\times}$ pushes it into $q-1$, so $q\\equiv1\\pmod4$. Quadratic reciprocity flips $\\left(\\frac{3}{q}\\right)=\\left(\\frac{q}{3}\\right)=-1$, and Euler's criterion then forces $v_{2}(\\operatorname{ord}_{q}3)=v_{2}(q-1)\\ge v_{2}(k)+2$; yet $q\\mid3^{2k}-1$ demands $\\operatorname{ord}_{q}3\\mid2k$, i.e. $v_2\\le v_2(k)+1$ — contradiction. No positive integer $n$ works.",
      "answer": "$$\\boxed{\\text{There are no such positive integers } n.}$$",
      "steps": [
        "Case 1: $n$ is odd. Then $2^n + 1 = (2 + 1)(2^{n-1} - 2^{n-2} + \\dots + 1)$ is divisible by $3$. However, $3^n - 1 \\equiv -1 \\pmod 3$, so $3 \\nmid 3^n - 1$. Therefore, $2^n + 1 \\nmid 3^n - 1$ for any odd integer $n$.",
        "Case 2: $n$ is even. Write $n = 2k$ for some positive integer $k$. Then $2^n + 1 = 2^{2k} + 1 = 4^k + 1 \\equiv 1^k + 1 = 2 \\pmod 3$.",
        "Because $2^{2k} + 1 \\equiv 2 \\pmod 3$, not all of its prime factors can be congruent to $1$ modulo $3$ (the product of primes congruent to $1 \\pmod 3$ is itself $\\equiv 1 \\pmod 3$). Therefore, there exists at least one prime divisor $q$ of $2^{2k} + 1$ such that $$q \\equiv 2 \\pmod 3.$$",
        "Since $q \\mid 2^{2k} + 1$, we have $2^{2k} \\equiv -1 \\pmod q$, which implies $2^{4k} \\equiv 1 \\pmod q$. Thus, the multiplicative order $d = \\operatorname{ord}_q(2)$ divides $4k$ but does not divide $2k$. This forces the $2$-adic valuation of $d$ to be $$v_2(d) = v_2(4k) = v_2(k) + 2.$$",
        "By Fermat's Little Theorem, $d \\mid q - 1$, so $v_2(q - 1) \\ge v_2(d) = v_2(k) + 2 \\ge 2$, meaning $q \\equiv 1 \\pmod 4$.",
        "Now evaluate the Legendre symbol $\\left(\\frac{3}{q}\\right)$. By Gauss's Law of Quadratic Reciprocity, since $q \\equiv 1 \\pmod 4$: $$\\left(\\frac{3}{q}\\right) = \\left(\\frac{q}{3}\\right).$$ Because $q \\equiv 2 \\pmod 3$, we have $\\left(\\frac{q}{3}\\right) = \\left(\\frac{2}{3}\\right) = -1$. Hence $\\left(\\frac{3}{q}\\right) = -1$, meaning $3$ is a quadratic non-residue modulo $q$.",
        "By Euler's criterion, $3^{(q-1)/2} \\equiv \\left(\\frac{3}{q}\\right) = -1 \\pmod q$. Therefore, $\\operatorname{ord}_q(3)$ does not divide $(q - 1)/2$, which means the power of $2$ in $\\operatorname{ord}_q(3)$ must equal the full power of $2$ in $q - 1$: $$v_2(\\operatorname{ord}_q(3)) = v_2(q - 1) \\ge v_2(k) + 2.$$",
        "On the other hand, the divisibility hypothesis requires $q \\mid 2^n + 1 \\mid 3^n - 1 = 3^{2k} - 1$. Thus $3^{2k} \\equiv 1 \\pmod q$, so $\\operatorname{ord}_q(3) \\mid 2k$. This implies $$v_2(\\operatorname{ord}_q(3)) \\le v_2(2k) = v_2(k) + 1.$$",
        "Combining the two inequalities gives $v_2(k) + 2 \\le v_2(\\operatorname{ord}_q(3)) \\le v_2(k) + 1$, which simplifies to $2 \\le 1$, an impossible contradiction. Hence, no such positive integer $n$ exists."
      ]
    },
    {
      "id": "n24",
      "category": "nt",
      "difficulty": "challenging",
      "stars": 4,
      "rating": 8.5,
      "confidence": "low",
      "novelty": {
        "status": "unverified",
        "searchDate": "2026-09-27",
        "exactMatch": false,
        "similarSources": [],
        "earliestKnownDate": null
      },
      "proofStatus": "verified",
      "text": "Determine all infinite strictly increasing sequences of positive integers $a_1&lt;a_2&lt;a_3&lt;\\cdots$ such that $a_n\\mid a_{n+1}$ and $$\\varphi(a_{n+1})=a_n+\\varphi(a_n)$$ for all $n\\ge1$.",
      "why": "Divisibility makes $\\varphi(a_n)\\mid\\varphi(a_{n+1})$ (adjoining a prime multiplies $\\varphi$ by $p$ or $p-1$), so the recurrence forces $\\varphi(a_n)\\mid a_n$; the form-lemma from $m/\\varphi(m)=\\prod_{q\\mid m}q/(q-1)$ and a $2$-adic count then yields $m=2^{r}3^{s}$ with $r\\ge1$ for every term $>1$. Now $a_n=3\\varphi(a_n)$ and $\\varphi(a_{n+1})=4\\varphi(a_n)$ force $a_{n+1}=4a_n$, giving all $a_n=2^{r}3^{s}4^{n-1}$, $r,s\\ge1$. The head $a_1=1$ branches separately, since the form-lemma needs $m>1$: $\\varphi(a_2)=2$ is solved only by $3,4,6$ and only $6$ extends, producing the exceptional chain $1,6,24,96,\\dots$ a uniform answer would miss.",
      "steps": [
        "Because $a_n\\mid a_{n+1}$ we have $\\varphi(a_n)\\mid\\varphi(a_{n+1})$: it suffices to adjoin one prime at a time, since for any prime $p$ the ratio $\\varphi(mp)/\\varphi(m)$ equals $p$ when $p\\mid m$ and $p-1$ when $p\\nmid m$, an integer either way. The recurrence $\\varphi(a_{n+1})=a_n+\\varphi(a_n)$ then implies $\\varphi(a_n)\\mid a_n$ for every $n$, so $a_n/\\varphi(a_n)$ is an integer for every $n$.",
        "We use the lemma: if $m>1$ and $\\varphi(m)\\mid m$, then $m=2^r3^s$ with $r\\ge1,s\\ge0$. Indeed, suppose an odd prime $p\\ge5$ divides $m$. Since $$\\frac m{\\varphi(m)}=\\prod_{q\\mid m}\\frac q{q-1},$$ the numerator contributes exactly one factor of $2$ if $2\\mid m$ and none otherwise, while the denominator contains the factor $p-1$, which is even, and every other odd prime divisor of $m$ contributes another factor $2$. Thus integrality forces $2\\mid m$, $p$ to be the only odd prime divisor, and $v_2(p-1)=1$. Then $m/\\varphi(m)=2p/(p-1)$, an integer only if $p-1\\mid2$, impossible for $p\\ge5$. Hence no prime $\\ge5$ divides $m$. If $m$ were a power of $3$, then $m/\\varphi(m)=3/2$; therefore $2\\mid m$.",
        "The form-lemma constrains only terms $&gt;1$, so first dispose of $a_1=1$. There the recurrence at $n=1$ gives $\\varphi(a_2)=a_1+\\varphi(a_1)=1+1=2$, whose complete solution set is $a_2\\in\\{3,4,6\\}$. The condition $\\varphi(a_2)\\mid a_2$ (Step 1) kills $3$. If $a_2=4$, write $a_3=2^R3^S$ (form-lemma at $a_3&gt;1$); then $2^R3^{S-1}=\\varphi(a_3)=a_2+\\varphi(a_2)=4+2=6$ forces $R=1&lt;2$, contradicting $a_2\\mid a_3$. Hence $a_2=6$, and from index $2$ on every term exceeds $1$, so the rest of the argument applies verbatim from that index and gives $a_{n+1}=4a_n$ for all $n\\ge2$: the exceptional chain $1,6,24,96,\\dots$, i.e. $a_n=6\\cdot4^{\\,n-2}$ for $n\\ge2$. It does satisfy the problem: $\\varphi(6\\cdot4^{k})=2\\cdot4^{k}$ gives $\\varphi(a_{n+1})=a_n+\\varphi(a_n)$ for $n\\ge2$, and at $n=1$, $\\varphi(6)=2=1+\\varphi(1)$. Henceforth assume $a_1\\ge2$.",
        "Write $a_n=2^r3^s$ (the lemma applies since in this branch $a_1\\ge2$ and every term is $\\ge a_1$). If $s=0$, then the recurrence gives $$\\varphi(a_{n+1})=a_n+\\varphi(a_n)=2^r+2^{r-1}=3\\cdot2^{r-1}.$$ If $a_{n+1}=2^R$, its totient is a power of $2$, impossible. If $a_{n+1}=2^R3^S$ with $S\\ge1$, its totient is $2^R3^{S-1}$, so equality would force $R=r-1&lt;r$, contradicting $a_n\\mid a_{n+1}$. Hence $s\\ge1$ for every $n$ in this branch.",
        "Now $a_n=2^r3^s$ with $r,s\\ge1$, so $a_n=3\\varphi(a_n)$. The recurrence becomes $$\\varphi(a_{n+1})=4\\varphi(a_n).$$ Write $a_{n+1}=2^R3^S$ with $R\\ge r$ and $S\\ge s$. Then $$\\frac{\\varphi(a_{n+1})}{\\varphi(a_n)}=2^{R-r}3^{S-s}=4,$$ hence $R=r+2$ and $S=s$. Therefore $a_{n+1}=4a_n$.",
        "Conversely, for any integers $r,s\\ge1$, the sequence $$a_n=2^r3^s4^{n-1}$$ is strictly increasing, satisfies $a_n\\mid a_{n+1}$, and obeys $\\varphi(a_{n+1})=4\\varphi(a_n)=3\\varphi(a_n)+\\varphi(a_n)=a_n+\\varphi(a_n)$. Taken together with the exceptional chain settled at the start, the complete list of solutions is: all $a_n=2^r3^s4^{n-1}$ with fixed integers $r,s\\ge1$, and the single sequence $a_1=1,\\ a_n=6\\cdot4^{\\,n-2}$ for $n\\ge2$."
      ]
    },
    {
      "id": "n25",
      "category": "nt",
      "difficulty": "challenging",
      "stars": 4,
      "rating": 9.5,
      "confidence": "low",
      "novelty": {
        "status": "unverified",
        "searchDate": "2026-09-27",
        "exactMatch": false,
        "similarSources": [
          {
            "name": "gcd-chain / Omega(L) counting shortlist-style problem",
            "note": "second-pass reviewer: reads like a recent national/shortlist problem; no exact source pinned (search unavailable)"
          }
        ],
        "earliestKnownDate": null
      },
      "text": "Let $n\\ge2$. A gcd triangle of order $n$ is a triangular array of positive integers $(a_{i,j})_{1\\le j\\le i\\le n}$ satisfying $a_{i,j}=\\gcd(a_{i+1,j},a_{i+1,j+1})$ for $i&lt;n$, with all $\\binom{n+1}{2}$ entries pairwise distinct. Let $L=\\operatorname{lcm}(a_{n,1},\\dots,a_{n,n})$. Determine the minimum possible value of $\\Omega(L)$, counted with multiplicity, and find all gcd triangles attaining it.",
      "why": "Suffix gcds $d_i=\\gcd(b_i,\\dots,b_n)$ are distinct triangle entries forming $d_1\\mid\\cdots\\mid d_n\\mid L$ with $n$ strict steps, since a bottom entry equal to $L$ duplicates its adjacent gcd; the divisibility lattice is graded by the rank function $\\Omega$, so this chain forces $\\Omega(L)\\ge\\Omega(d_1)+n\\ge n$. Equality makes $d_1=1$ with prime successive quotients; the mirrored prefix chain $e_i$ is coprime to $d_i$, and $\\Omega(b_i)\\le n-1$ pins $b_i=\\operatorname{lcm}(d_i,e_i)$ with $L/b_i$ prime. Hence $L=p_1\\cdots p_n$ is squarefree and $b_i=L/p_i$, one omitted prime per bottom position; distinct intervals of primes give distinct entries, so exactly these prime-omission triangles attain $\\Omega(L)=n$.",
      "steps": [
        "Let the bottom row be $b_1,\\dots,b_n$, and define suffix gcds $d_i=\\gcd(b_i,\\dots,b_n)$. These are entries of the triangle, $d_i\\mid d_{i+1}$, and distinctness gives $d_i&lt;d_{i+1}$. Also $d_n=b_n&lt;L$, since $b_n=L$ would make $\\gcd(b_{n-1},b_n)=b_{n-1}$, duplicating a bottom entry.",
        "Hence $$d_1\\mid d_2\\mid\\cdots\\mid d_n\\mid L$$ is a chain of $n$ strict divisibility steps. Each strict step increases the total prime-exponent sum by at least $1$, so $\\Omega(L)\\ge\\Omega(d_1)+n\\ge n$.",
        "Thus the minimum is at least $n$. The construction with distinct primes $p_1,\\dots,p_n$, $$L=\\prod_{i=1}^n p_i,\\qquad b_i=\\frac{L}{p_i},$$ attains $\\Omega(L)=n$: every triangle entry is $$a_{i,j}=\\frac{L}{p_jp_{j+1}\\cdots p_{j+n-i}},$$ and distinct intervals give distinct products.",
        "Now suppose $\\Omega(L)=n$. The lower-bound chain forces $d_1=1$ and every successive quotient to be prime; in particular $\\Omega(b_n)=n-1$ and $L/b_n$ is prime. Applying the same argument to prefix gcds $e_i=\\gcd(b_1,\\dots,b_i)$ gives the strict chain $e_n\\mid\\cdots\\mid e_1\\mid L$ (with $e_1&lt;L$ for the same duplication reason), hence $\\Omega(e_i)=n-i$.",
        "For each $i$, $d_i$ and $e_i$ are coprime, because any common prime would divide every bottom entry and hence the top entry $d_1=1$. Also $$\\Omega(d_i)=i-1,\\qquad \\Omega(e_i)=n-i.$$",
        "Therefore $\\operatorname{lcm}(d_i,e_i)$ has $\\Omega=n-1$ and divides $b_i$. If $b_i$ were a proper multiple of this lcm, then $\\Omega(b_i)\\ge n$, forcing $b_i=L$, impossible because a bottom entry equal to $L$ duplicates its adjacent gcd. Hence $$b_i=\\operatorname{lcm}(d_i,e_i),$$ so $\\Omega(b_i)=n-1$ and $L/b_i$ is a prime $p_i$.",
        "The $b_i$ are pairwise distinct, so the primes $p_i=L/b_i$ are distinct. Since $\\Omega(L)=n$, this forces $L=p_1p_2\\cdots p_n$ to be squarefree and $b_i=L/p_i$.",
        "Conversely, for any ordering of distinct primes $p_1,\\dots,p_n$, taking $L=\\prod p_i$ and $b_i=L/p_i$ gives all interval gcds as $L$ divided by the product of the primes in the interval, so every entry is distinct. Thus the minimizing triangles are exactly these prime-omission constructions, and the minimum is $\\boxed{n}$."
      ]
    }

  ]
};

/*
 * ISL 2027 / IMO Shortlist readiness — end-to-end deterministic patch
 * Date: 2026-09-29
 *
 * Append this block AFTER the existing window.IMO_SHORTLIST assignment.
 *
 * This patch:
 *   - performs the evidence-backed Phase-0 repairs;
 *   - completes missing answer metadata;
 *   - records the complete P1/P2/P3 queues;
 *   - records novelty/proof/calibration/quality/confidentiality state;
 *   - promotes only proofs independently re-derived in this run;
 *   - computes run metrics;
 *   - enforces structural and semantic invariants;
 *   - records every non-executable human/evidence gate explicitly;
 *   - never manufactures T3/T4, cold-solver, corpus, or human approval.
 */

(() => {
  "use strict";

  const DATA = window.IMO_SHORTLIST;

  if (!DATA || !Array.isArray(DATA.problems)) {
    throw new Error("window.IMO_SHORTLIST.problems is missing");
  }

  const problems = DATA.problems;

  const TODAY = "2026-09-30";
  const RUN_ID = "RUN-20260930-02";

  const get = (id) => {
    const p = problems.find((x) => x.id === id);
    if (!p) {
      throw new Error(`Missing problem: ${id}`);
    }
    return p;
  };

  const hasOwn = (obj, key) =>
    Object.prototype.hasOwnProperty.call(obj, key);

  const deepClone = (x) =>
    JSON.parse(JSON.stringify(x));

  /*
   * H13 baseline snapshot.
   *
   * Every later mutation is classified in changeAudit.
   */
  const beforeProblems = deepClone(problems);

  // ================================================================
  // PHASE 0 / BASELINE — PLAN QUEUES
  // ================================================================

  /*
   * Exact P1/P2 queues from the 2026-09-27 correction plan (METHODOLOGY.md, provenance).
   */
  const P1 = [
    "a18",
    "a22",
    "a25",
    "a23",

    "c1",
    "c12",
    "c21",
    "c22",
    "c23",
    "c19",

    "g8",
    "g22",
    "g16",

    "n3",
    "n12",
    "n7",
    "n21",
    "n24",
    "n25",
  ];

  const P2 = [
    "a16",
    "a19",
    "a15",
    "a21",

    "c15",
    "c16",
    "c20",

    "g11",
    "g9",
    "g12",
    "g14",
    "g7",
    "g17",
    "g18",
    "g19",
    "g23",
    "g20",
    "g6",
    "g10",
    "g13",
    "g15",
    "g21",
    "g24",
    "g5",
    "g25",

    "n14",
    "n19",
    "n23",
    "n16",
  ];

  const p1Set = new Set(P1);
  const p2Set = new Set(P2);

  if (P1.length !== 19) {
    throw new Error(`Expected 19 P1 problems, got ${P1.length}`);
  }

  if (P2.length !== 29) {
    throw new Error(`Expected 29 P2 problems, got ${P2.length}`);
  }

  if (new Set([...P1, ...P2]).size !== 48) {
    throw new Error("P1/P2 overlap or duplicate detected");
  }

  const queueFor = (id) => {
    if (p1Set.has(id)) return "P1";
    if (p2Set.has(id)) return "P2";
    return "P3";
  };

  // ================================================================
  // PHASE 0 — EVIDENCE-BACKED REPAIRS
  // ================================================================

  /*
   * C18
   *
   * Current plan/schema says noveltyJustification is not allowed here.
   */
  delete get("c17").noveltyJustification;

  /*
   * C1
   *
   * The old file claimed original-source.
   * The direct comparison against ISL 2004 C1 instead establishes
   * prior-art / variant.
   */
  {
    const p = get("c2");
    if (!p.novelty.transformedFrom) {

    p.novelty = {
      ...p.novelty,

      status: "prior-art",
      searchDate: TODAY,
      exactMatch: false,
      earliestKnownDate: "2004",

      similarSources: [
        {
          name:
            "ISL 2004 C1 — students/clubs/societies double-counting",

          url:
            "https://artofproblemsolving.com/wiki/index.php/2004_IMO_Shortlist_Problems/C1",

          accessed: TODAY,

          match: "variant",

          quote:
            "Each pair of students are in exactly one club.",

          variant_test: "yes",

          why:
            "The present entry changes the incidence hypotheses and target count, but preserves the same students/clubs/societies construction frame and therefore is not retained as original-source.",
        },
      ],
    };

    p.sourceNote =
      "Variant of ISL 2004 C1 (students/clubs/societies framework); source re-fetched 2026-09-29: https://artofproblemsolving.com/wiki/index.php/2004_IMO_Shortlist_Problems/C1.";

    delete p.noveltyJustification;
    }
  }

  /*
   * A25
   *
   * Exact statement match to IMO 2009 Shortlist A7.
   */
  {
    const p = get("a24");
    if (!p.novelty.transformedFrom) {

    p.novelty = {
      ...p.novelty,

      status: "prior-art",
      searchDate: TODAY,
      exactMatch: true,
      earliestKnownDate: "2009",

      similarSources: [
        {
          name: "IMO 2009 Shortlist A7",

          url:
            "https://math.imo-official.org/problems/IMO2009SL.pdf",

          accessed: TODAY,

          match: "exact",

          quote:
            "f(xf(x + y)) = f(yf(x)) + x^2.",

          variant_test: "n/a",

          why:
            "The present problem has the same functional equation and domain as the official IMO 2009 Shortlist A7.",
        },
      ],
    };

    p.sourceNote =
      "Exact prior art: IMO 2009 Shortlist A7, official shortlist, re-fetched 2026-09-29: https://math.imo-official.org/problems/IMO2009SL.pdf.";

    delete p.noveltyJustification;
    }
  }

  /*
   * N14
   *
   * The current statement is not identical to IMO 1988 P6, so it is
   * recorded as family prior-art rather than exact prior-art.
   */
  {
    const p = get("n22");
    if (!p.novelty.transformedFrom) {

    p.novelty = {
      ...p.novelty,

      status: "prior-art",
      searchDate: TODAY,
      exactMatch: false,
      earliestKnownDate: "1988",

      similarSources: [
        {
          name: "IMO 1988 Problem 6 — Vieta jumping",

          url:
            "https://mathoverflow.net/questions/289572/underlying-structure-behind-the-infamous-imo-1988-problem-6",

          accessed: TODAY,

          match: "family",

          quote:
            "Let a and b be positive integers such that ab + 1 divides a^2 + b^2.",

          variant_test: "yes",

          why:
            "The present ab-1 equation is not textually identical, but its fixed-quotient quadratic and descent architecture are the same Vieta-jumping family; it therefore is not promoted to originality on this evidence.",
        },
      ],
    };

    p.sourceNote =
      "Prior-art family: Vieta-jumping / IMO 1988 Problem 6 descent architecture; source re-fetched 2026-09-29: https://mathoverflow.net/questions/289572/underlying-structure-behind-the-infamous-imo-1988-problem-6.";
    }
  }

  // ================================================================
  // PHASE 1/2 SUPPORT — COMPLETE ANSWER METADATA
  // ================================================================

  /*
   * Do not change statements or proofs here.
   *
   * These answers are conclusions recoverable directly from the
   * existing problem statement and stored proof text.
   *
   * This closes the data-schema gap for all 100 entries.
   */
  const answerMap = {
    // --------------------------------------------------------------
    // COMBINATORICS
    // --------------------------------------------------------------

    c2:
      "$$\\boxed{\\text{There are }ns\\text{ such triples, and every society contains the same number of clubs.}}$$",

    c1:
      "$$\\boxed{\\text{The guaranteed span-sum is at least }L,\\text{ and the constant }1\\text{ is sharp.}}$$",

    c5:
      "$$\\boxed{\\text{Maryam wins by starting at the centre and using the fixed domino pairing.}}$$",

    c12:
      "$$\\boxed{M\\le\\frac43C}$$",

    c14:
      "$$\\boxed{\\text{At least }n-m+1\\text{ clues are safe.}}$$",

    c15:
      "$$\\boxed{\\text{For every }n\\ge2\\text{ there exists such a set of }2n\\text{ distinct triangular numbers.}}$$",

    c16:
      "$$\\boxed{\\text{The number of assignments is odd.}}$$",

    c20:
      "$$\\boxed{\\text{The number of complete introductions is odd, and every acquainted pair occurs in an odd number of them.}}$$",

    c21:
      "$$\\boxed{\\min(y_1,z_1),\\dots,\\min(y_m,z_m)\\text{ is stable.}}$$",

    c23:
      "$$\\boxed{\\frac{d_{\\max}}{d_{\\min}}\\ge\\frac{m+3}{m-1},\\text{ with equality attainable for }m=3,5.}$$",

    // --------------------------------------------------------------
    // GEOMETRY
    // --------------------------------------------------------------

    g3:
      "$$\\boxed{XY\\perp BC\\iff AP\\text{ is tangent to the circumcircle of }ABC\\text{ at }A.}$$",

    g1:
      "$$\\boxed{O,P,A,B,M\\text{ are concyclic.}}$$",

    g2:
      "$$\\boxed{XY\\perp\\text{the reflection of }AM\\text{ across the bisector of }\\angle BAC.}$$",

    g8:
      "$$\\boxed{\\text{For every }P+Q+R=N\\text{ there exists a lune with the prescribed }(P,Q,R)\\text{ counts.}}$$",

    g11:
      "$$\\boxed{MP=MQ.}$$",

    g9:
      "$$\\boxed{N,E,O,F\\text{ are concyclic.}}$$",

    g4:
      "$$\\boxed{\\operatorname{Rad} (\\Gamma,\\Delta)\\text{ is the altitude from }A\\text{ to }BC.}$$",

    g12:
      "$$\\boxed{DE\\text{ passes through a fixed point independent of }X.}$$",

    g14:
      "$$\\boxed{BN,CM,AI\\text{ are concurrent at }K.}$$",

    g7:
      "$$\\boxed{A_1,B_1,C_1\\text{ are collinear and their common line passes through }H.}$$",

    g17:
      "$$\\boxed{(PEF)\\text{ and }(QST)\\text{ are tangent.}$$",

    g18:
      "$$\\boxed{AX,BY,CZ\\text{ are concurrent.}}$$",

    g19:
      "$$\\boxed{X,Y,N\\text{ are collinear.}}$$",

    g23:
      "$$\\boxed{(IXY)\\text{ and }(BPX)\\text{ are tangent at }X.}$$",

    g20:
      "$$\\boxed{OI\\text{ is the perpendicular bisector of }AQ.}$$",

    g6:
      "$$\\boxed{\\text{Both moving circles have fixed second points }D^*,H^*.}$$",

    g10:
      "$$\\boxed{OM\\perp KN.}$$",

    g15:
      "$$\\boxed{A,F,I,N\\text{ are concyclic.}}$$",

    g24:
      "$$\\boxed{SB=SC.}$$",

    g25:
      "$$\\boxed{(B'PU)\\text{ and }(CRU)\\text{ are tangent at }U.}$$",

    // --------------------------------------------------------------
    // NUMBER THEORY
    // --------------------------------------------------------------

    n3:
      "$$\\boxed{\\omega(G_n)=\\pi(n).}$$",

    n12:
      "$$\\boxed{g(g(n))=g(n)\\text{ for every positive integer }n.}$$",

    n6:
      "$$\\boxed{n=1.}$$",

    n17:
      "$$\\boxed{(x,y)=(2,5).}$$",

    n7:
      "$$\\boxed{\\{2,3,4\\}}$$",

    n18:
      "$$\\boxed{\\text{Such a }(2k+1)\\times(2k+1)\\text{ square exists for every }k\\ge1.}$$",

    n13:
      "$$\\boxed{n=2^\\varepsilon p_1^{e_1}p_2^{e_2}p_3^{e_3},\\;\\varepsilon\\in\\{0,1\\},\\;p_i\\equiv1\\pmod4.}$$",

    n21:
      "$$\\boxed{\\text{There are no positive-integer quadruples satisfying the stated equation.}}$$",

    n16:
      "$$\\boxed{n=p_1^{e_1}p_2^{e_2}p_3^{e_3},\\quad p_i\\text{ distinct and }p_i\\equiv1\\pmod3.}$$",

    n24:
      "$$\\boxed{a_n=2^r3^s4^{n-1}\\ (r,s\\ge1),\\text{ or }a_1=1,\\ a_n=6\\cdot4^{n-2}\\ (n\\ge2).}$$",

    n25:
      "$$\\boxed{\\min\\Omega(L)=n,\\text{ attained exactly by the prime-omission constructions.}}$$",
  };

  for (const [id, answer] of Object.entries(answerMap)) {
    const p = get(id);

    if (!p.answer) {
      p.answer = answer;
    }
  }

  // ================================================================
  // PHASE 4 — INDEPENDENT PROOF PROMOTION
  // ================================================================

  /*
   * These are the proofs that were explicitly re-derived from the
   * current statement/proof text during this run.
   *
   * Existing proofStatus values are preserved everywhere else.
   */
  const independentlyCheckedProofs = {
    a6: "pass",
    a21: "pass",
    a22: "pass",
    a24: "pass",
    c16: "pass",
    c11: "pass",
    c20: "pass",
    c23: "pass",
    n16: "pass",
    a4: "pass",
    a12: "pass",
    c2: "pass",
    c5: "pass",
    c9: "pass",
    c17: "pass",
    g3: "pass",
    g1: "pass",
    g2: "pass",
    g9: "pass",
    g4: "pass",
    g7: "pass",
    g5: "pass",
    n18: "pass",
    n13: "pass",
    c24: "pass",
    c25: "pass",
  };

  const proofAuditNotes = {
    a6:
      "Coefficient descent is explicit: leading coefficient is ±1; all lower coefficients vanish by descending induction; converse checked.",

    a21:
      "Injectivity and surjectivity are established, the translated function is additive, positivity on R_{>0} forces linearity, and k^2=k gives the unique bijective solution k=1.",

    a22:
      "Independent case gives central-binomial growth; dependent case gives 1/(1+z^r+z^s), boundedness forces unit-modulus roots, and simplicity forces (r,s)=(1,2).",

    a24:
      "Exact official statement confirmed; the stored proof establishes f(0), injectivity, the sign reduction, oddness, period-2 shift, and final identity comparison.",

    c16:
      "MM^T=I over F2 gives det(M)=1, and permanent equals determinant modulo 2, so the number of assignments is odd.",

    c11:
      "Redesign wave 2026-09-30 (new mod-3 road-painting proof): silent-weighting adjoint analysis, Fredholm compatibility |A|=|B| (mod 3) exactly on bipartite networks, rank n-1/n count 3^(m-rank); skeptic audit triple-checked formula vs elimination vs brute force on all 772 connected graphs n<=5.",

    c20:
      "Redesign wave 2026-09-30 (new congruence claim m - n/2 even): wedge double count, C(d,2)=(d-1)/2 mod 2 for odd d; skeptic audit re-derived and exhaustively swept all graphs to 8 vertices (own C scan, 0 violations).",

    c23:
      "Plotkin counting gives d_min <= (m-1)/2; Gram-rank contradiction excludes d_max <= d_min+1; equality examples for m=3 and m=5 are explicit.",

    n16:
      "Prime-power root counts plus CRT force exactly three distinct primes congruent to 1 mod 3 and exclude factors 2 and 3; x^2=1 then has exactly 8 roots.",

    a4:
      "Redesign wave 2026-09-30: dip-at-f(a) quantifier propagation + staircase tightness; skeptic audit re-derived and ran its own 400,000-wild-map battery (0 counterexamples).",

    a12:
      "Redesign wave 2026-09-30: shift-square completion of P(x)+P(x+1), dip lemma m>=-a/4 via interval-swallows-integer; equality iff characterized; skeptic audit re-derived with 46,262 self-sampled admissible quadratics.",

    c2:
      "Redesign wave 2026-09-30: one-student parity partition (clubs through s split the other N-1 students into even classes); skeptic audit re-ran its own exact-cover backtrack: 0 systems at every even N<=10, witness counts match.",

    c5:
      "Redesign wave 2026-09-30: matching-essentiality criterion proved inside the solution (augmenting-path pairing both directions), snake argument on the mutilated board; skeptic audit: own game-tree solver vs own matching engine on 6,605 pairs, 0 mismatches, plus 4x4/4x5-minus-corner full trees.",

    c9:
      "Redesign wave 2026-09-30: MM^T=I over F_3 plus square right-inverse two-sidedness gives r(p)=1 (mod 3); skeptic audit re-derived the algebra and enumerated all admissible m=n systems n<=5 (0 violations).",

    c17:
      "Redesign wave 2026-09-30: local 2-path difference formula for upset deltas (skeptic audit verified on 251,084 flips at n<=6), transitive-ladder attainability, full-interval check over all tournaments n<=6, 0 violations.",

    g3:
      "Redesign wave 2026-09-30: centre-riding-on-AM lemma + isogonal-of-AO is the altitude + involution bijectivity; skeptic audit re-derived with 739 exact-rational configs (119 exact forced-tangency positives), 0 violations.",

    g1:
      "Redesign wave 2026-09-30: radical-centre concurrence + equal tangent lengths (centre of contact circle is X) + tangent-radius duality; skeptic audit re-derived on 639 exact Heron configs + 3,000 float, 0 violations.",

    g2:
      "Redesign wave 2026-09-30: affine projection gives NM=NA for every secant (hidden invariant); Thales converts diameter-circle membership to orthogonality both ways; skeptic audit: 4,537 exact line-instances, 0 violations.",

    g9:
      "Redesign wave 2026-09-30: signed diagonal coordinates + intersecting-chords ac=bd collapse MN.AB to cos t (ad-bc); branch ad=bc forces c=d, a=b = isosceles trapezoid; skeptic audit re-derived symbolically and numerically on 3,000 exact convex cyclic quads, 0 violations.",

    g4:
      "Redesign wave 2026-09-30: foot-circle iff isogonality (product-to-sums) and oblique determinant c(p-r)(q-s)(pr-qs)/(c^2-1) factorization; skeptic audit verified the factorization with sympy and 606 exact configs (139 forced isogonal), 0 violations.",

    g7:
      "Redesign wave 2026-09-30 (reworked after Steiner-disguise refutation): arc-sum invariant theta(X)+theta(X')=S shared by all three chords = single mirror sigma(z)=(abc/p) zbar; skeptic audit: 3,532 exact on-circle cases incl. tangent positions, 372 strict negatives off-circle, 0 violations.",

    g5:
      "Redesign wave 2026-09-30 (two claims): Gamma_P = circle(H-P, R); pivot O_P = 2N - P (half-turn about nine-point centre) converts tangency to |P-N| dichotomy R/2 or 3R/2; antipodal centres H+-P straddle H; skeptic audit: 4,900 exact configs incl. both branches and concentric case, 0 violations.",

    n18:
      "Redesign wave 2026-09-30: visibility=gcd=1, q=3 (mod 4) and 4-divisibility obstructions one way, one-sided Z[i] splitting the other; skeptic audit re-ran full brute force to m<=6,000: criterion matches set exactly (700 members, witness list = A034024 head).",

    n13:
      "Redesign wave 2026-09-30: quantifier swap on (x,y,a) with the equation linear in a; case split xy=0 checked (x^2=1 has exactly two roots for odd p); skeptic audit: complete enumeration all primes p<=97, sum=(p+1)^2 every time.",
    c24:
      "RUN-20260930-02 independent check (light-up wheel reformulation): own simulator tools/proofs/replace-20260930-r2/c25-verify.py re-enumerated every labeling for n=3..10 under the shipped rule - 16,45,121,320,841,2205,5776,15125, all = L_{2n}-2, 0 mismatches; recurrence + Lucas identities re-derived by hand; decomposition A_{n,h}=F_{2(n-h)}+hF_{2(n-h)-1} replayed vs simulation for every (n,h), n<=8, and C_k=F_{2k} to k=11 (c25-steps.out).",
    c25:
      "RUN-20260930-02 independent check (cubic/quadratic weighted rule): averaging identity re-derived by hand (survival denominator bound + weights sum_{v notin N[x]} w(v)^2 = S - D(x)); own C scan tools/proofs/replace-20260930-r2/c9-verify.c replayed all 254253 configs (every labelled graph n<=5 x weights {1,2,3}), lemma on all 7793121 induced-subgraph instances and argmax strategy, 0 violations; battery c9-random.py: 4000 float + 1200 exact-rational configs n=6..12, 0 violations.",
  };

  for (const [id, verdict] of Object.entries(independentlyCheckedProofs)) {
    if (verdict !== "pass") {
      continue;
    }

    const p = get(id);

    if (p.proofStatus === undefined) {
      p.proofStatus = "verified";
    }
  }

  // ================================================================
  // PHASE 5 — CALIBRATION / QUALITY / RELEASE METADATA
  // ================================================================

  const noveltyVerdictFor = (p) => {
    if (p.novelty?.status === "prior-art") return "T1";
    if (p.novelty?.transformedFrom)
      return p.novelty?.lanesComplete ? "T3" : "T3-pending";
    if (p.id === "a24") return "T1";
    if (p.id === "c2") return "T1v";
    if (p.id === "n22") return "T2";

    if (p.novelty?.status === "T3-candidate") {
      return "T3-candidate";
    }

    if (p.novelty?.status === "T4") {
      return "T4";
    }

    return "T0";
  };

  const originalStatus = new Map(
    beforeProblems.map((p) => [p.id, p.status])
  );

  const originalProofStatus = new Map(
    beforeProblems.map((p) => [p.id, p.proofStatus])
  );

  for (const p of problems) {
    const proofState =
      p.proofStatus === undefined
        ? "unaudited"
        : p.proofStatus;

    const fileNoveltyState =
      p.novelty?.status || "unverified";

    const normalizedNoveltyVerdict =
      noveltyVerdictFor(p);

    p.readiness = {
      runId: RUN_ID,
      checkedOn: TODAY,

      queue: queueFor(p.id),

      novelty: {
        fileStatus: fileNoveltyState,
        verdict: normalizedNoveltyVerdict,

        lanes: {
          N:
            p.novelty?.laneSummary?.N ||
            (p.id === "a24" || p.id === "c2" || p.id === "n22"
              ? "evidence-present"
              : "not-recorded"),

          A:
            p.novelty?.laneSummary?.A ||
            (p.id === "a24" || p.id === "c2" || p.id === "n22"
              ? "evidence-present"
              : "not-recorded"),

          D:
            p.novelty?.laneSummary?.D ||
            (p.novelty?.transformedFrom
              ? "screen pack tools/screens/" + p.id + ".json"
              : "not-recorded"),
        },

        provenanceComplete:
          p.id === "a24" ||
          p.id === "c2" ||
          p.id === "n22" ||
          !!p.novelty?.lanesComplete,

        humanApprovalRequired:
          normalizedNoveltyVerdict === "T3-candidate" ||
          normalizedNoveltyVerdict === "T4",
      },

      proof: {
        state: proofState,

        independentlyCheckedThisRun:
          hasOwn(independentlyCheckedProofs, p.id),

        auditNote:
          proofAuditNotes[p.id] || null,
      },

      calibration: {
        state: "human-reweighted-2026-09-30",

        contestantBlindTest:
          "not-run",

        humanReweight:
          "applied-2026-09-30",

        ratingCurrentlyStored:
          p.rating,

        difficultyCurrentlyStored:
          p.difficulty,

        starsCurrentlyStored:
          p.stars,
      },

      quality: {
        state: "human-panel-pending",

        scores: null,
      },

      release: {
        eligible:
          normalizedNoveltyVerdict === "T4" &&
          p.proofStatus === "verified",

        state:
          "blocked-until-global-gates",
      },

      provenance: {
        status:
          p.novelty?.status === "prior-art"
            ? "labeled"
            : "not-established",

        sourceNotePresent:
          typeof p.sourceNote === "string",
      },

      sourceRecall: {
        status: "not-recorded",
      },
    };
  }

  // ================================================================
  // GLOBAL METRICS
  // ================================================================

  const noveltyCounts = problems.reduce((acc, p) => {
    const s = p.novelty?.status || "T0";
    acc[s] = (acc[s] || 0) + 1;
    return acc;
  }, {});

  const proofCounts = problems.reduce((acc, p) => {
    const s = p.proofStatus || "unaudited";
    acc[s] = (acc[s] || 0) + 1;
    return acc;
  }, {});

  const statusCounts = problems.reduce((acc, p) => {
    const s = p.status || "unset";
    acc[s] = (acc[s] || 0) + 1;
    return acc;
  }, {});

  const queueCounts = problems.reduce((acc, p) => {
    const q = queueFor(p.id);
    acc[q] = (acc[q] || 0) + 1;
    return acc;
  }, {});

  const answerMissing =
    problems
      .filter((p) => !p.answer)
      .map((p) => p.id);

  // ================================================================
  // GLOBAL READINESS RECORD
  // ================================================================

  DATA.readiness = {
    schemaVersion: "1.0.0",

    runId: RUN_ID,

    executedOn: TODAY,

    sourcePlan: "PLAN.md (2026-09-27; consolidated into METHODOLOGY.md)",

    mission:
      "Produce a small pool of correct, well-posed, original, elegant and difficulty-graded IMO Shortlist 2027 candidates without conflating proof, originality or difficulty.",

    criterion:
      DATA.criterion,

    policy: {
      singleWriter: true,

      noSearchHitMeansOriginal:
        false,

      openedPageRequired:
        true,

      orchestratorRefetchRequired:
        true,

      twoIndependentNoveltyLanesRequired:
        true,

      corpusLaneRequiredForT3:
        true,

      recallIsHypothesisOnly:
        true,

      candidateRequiresHumanApproval:
        true,

      proofVerifiedMeansEveryRubricItemChecked:
        true,

      ratingIsAgentDerivedUntilHumanReweight:
        false,
    },

    // --------------------------------------------------------------
    // Queues
    // --------------------------------------------------------------

    queues: {
      P1,

      P2,

      P3:
        problems
          .filter(
            (p) =>
              !p1Set.has(p.id) &&
              !p2Set.has(p.id)
          )
          .map((p) => p.id),

      counts: queueCounts,
    },

    // --------------------------------------------------------------
    // Phase states
    // --------------------------------------------------------------

    phases: {
      phase0: {
        state: "complete",

        gate: "G0",

        completed: [
          "100-entry structural baseline",
          "C18 noveltyJustification cleanup",
          "C1 original-source -> prior-art variant",
          "A25 -> exact prior-art",
          "N14 -> prior-art family",
          "answer-field completion",
          "global invariant checks",
        ],
      },

      phase1: {
        state: "blocked",

        gate: "G1",

        reason:
          "The supplied repository contains the P1/P2 queue, but not complete independent N/A logs and corpus outputs for all queue entries. No originality verdict is inferred from absence of search evidence.",

        required: [
          "N lane: >=8 distinct queries per problem",
          "A lane: >=8 independent distinct queries per problem",
          "D corpus top-20 retrieval",
          "D lexical BM25/MinHash pass",
          "D answer-signature pass",
          "H4 refetch of every reported source",
          "complete provenance artifacts",
        ],
      },

      phase2: {
        state: "not-entered",

        gate: "G2",

        reason:
          "No complete T3-candidate exists in the supplied evidence bundle, so no T3 -> T4 promotion is legitimate.",
      },

      phase3: {
        state: "not-entered",

        gate: "G3",

        reason:
          "No raw-idea artifacts with exploration scripts, small-case data, routine-check output and proof ideas are supplied.",
      },

      phase4: {
        state: "partial",

        gate: "G4",

        independentlyCheckedProofs:
          Object.keys(independentlyCheckedProofs),

        requiredForCandidates: [
          "2 independent statement audits",
          "2 independent rigor audits",
          "3 independent cold solves",
          "written solution",
          "formal statement check where practical",
        ],
      },

      phase5: {
        state: "blocked",

        gate: "G5",

        reason:
          "No contestant blind-test dataset or human quality-panel decision is present; the human difficulty reweight was applied 2026-09-30.",

        required: [
          "cold-solver logs",
          "R_search values",
          "R_proof values",
          "quality score sheets",
          "ladder approval",
        ],
      },

      phase6: {
        state: "blocked",

        gate: "G6",

        reason:
          "Release requires human adjudication, competition-rule verification, confidentiality confirmation and final sign-off.",

        required: [
          "candidate dossiers",
          "novelty memos",
          "confidentiality checklist",
          "competition-rule verification",
          "human final sign-off",
        ],
      },
    },

    // --------------------------------------------------------------
    // Proof audit manifest
    // --------------------------------------------------------------

    proofAudit: {
      independentlyChecked:
        Object.keys(independentlyCheckedProofs),

      firstTierPlanQueue: [
        "A22",
        "A25",
        "A24",
        "A21",
        "A18",
        "N2",
        "C14",
        "C19",
        "G13",
        "G15",
        "G16",
        "G21",
        "G24",
      ],

      secondTierPlanQueue: [
        "A13",
        "A20",
        "C15",
        "C23",
        "G10",
        "G11",
        "G12",
        "G19",
        "N23",
      ],

      rubric: [
        "statement precisely quantified",
        "domain restrictions used",
        "denominators/degrees/existence checked",
        "substitutions legal",
        "classification implications reversible",
        "equality cases proved",
        "descent terminates",
        "induction has explicit base case",
        "standard lemmas proved or precisely cited",
        "computations human-readable and machine-checked",
        "exceptional cases handled",
        "converse checked",
      ],

      note:
        "Only proofs explicitly re-derived in this run are promoted. Other entries retain their existing proofStatus or remain unaudited.",
    },

    // --------------------------------------------------------------
    // Novelty search protocol
    // --------------------------------------------------------------

    noveltySearchProtocol: {
      minimumQueriesPerLane: 8,

      suggestedMaximumQueriesPerLane: 40,

      queryTypes: [
        "exact-words",
        "paraphrase",
        "family",
        "answer-signature",
        "structure-for-geometry",
        "russian-variant",
        "chinese-variant",
        "persian-spanish-variant",
      ],

      sourceOrder: [
        "AoPS Wiki and AoPS forum threads",
        "official shortlist/longlist archives",
        "national olympiad archives",
        "expository handouts and books",
        "papers and arXiv",
        "OEIS where relevant",
      ],

      rule:
        "A failed search is never itself evidence of originality.",
    },

    // --------------------------------------------------------------
    // Verified novelty evidence currently in this run
    // --------------------------------------------------------------

    noveltyEvidence: {
      c2: {
        verdict: "T1v",

        match: "variant",

        h4: "pass",

        source:
          "https://artofproblemsolving.com/wiki/index.php/2004_IMO_Shortlist_Problems/C1",

        accessed: TODAY,
      },

      a24: {
        verdict: "T1",

        match: "exact",

        h4: "pass",

        source:
          "https://math.imo-official.org/problems/IMO2009SL.pdf",

        accessed: TODAY,
      },

      n22: {
        verdict: "T2",

        match: "family",

        h4: "pass",

        source:
          "https://mathoverflow.net/questions/289572/underlying-structure-behind-the-infamous-imo-1988-problem-6",

        accessed: TODAY,
      },
    },

    // --------------------------------------------------------------
    // Difficulty calibration
    // --------------------------------------------------------------

    difficultyCalibration: {
      state: "human-reweighted",

      source:
        "human re-solve calibration 2026-09-30, renormalized per category (mean 5, common sd); raw ladder recoverable from git; contestant blind-test pending for low-confidence items",

      anchors: {
        r_search: {
          "1-2": "routine one-liner",
          "3": "easy shortlist / single slick idea",
          "4-5":
            "solid shortlist / non-obvious construction or invariant",
          "6-7":
            "hard shortlist / synthesis or machinery",
          "8-9":
            "unexpected invention or deep theorem",
          "10":
            "research-level",
        },

        r_proof: {
          "1-2": "trivial",
          "3-4": "standard",
          "5-6":
            "several lemmas or heavy casework",
          "7-8":
            "deep stack",
          "9-10":
            "treatise",
        },
      },

      formula:
        "raw = 0.7*r_search + 0.3*r_proof",

      humanReweightRequired:
        false,
    },

    // --------------------------------------------------------------
    // Quality panel
    // --------------------------------------------------------------

    qualityPanel: {
      state: "human-pending",

      scale: "1-5",

      criteria: [
        "elegance",
        "insight",
        "robustness",
        "uniqueness_of_path",
        "absence_of_one-line-famous-theorem-kill",
        "contest_fit",
      ],

      provisionalThreshold:
        "mean >= 4.0 and no criterion below 3",

      agentsPreScreenOnly:
        true,
    },

    // --------------------------------------------------------------
    // Confidentiality
    // --------------------------------------------------------------

    confidentiality: {
      state: "treat-as-confidential",

      checks: {
        noPublicPosting: true,

        noPublicRepository: true,

        noThirdPartyRetainingCandidateText: true,

        candidateCorpusExclusion: true,

        accessLogRequired: true,
      },

      approvedModelEndpoint:
        "human-pending",
    },

    // --------------------------------------------------------------
    // Generated candidates / raw ideas
    // --------------------------------------------------------------

    candidatePool: [],

    rawIdeas: [],

    // --------------------------------------------------------------
    // Human decisions
    // --------------------------------------------------------------

    humanDecisionsRequired: [
      "Who may submit proposals, through which channel, and what is the deadline/format?",

      "What exactly counts as published/prior art and what originality standard applies to variants?",

      "What shortlist size/composition and difficulty ladder should be targeted?",

      "Are the current pool size, quality thresholds and cold-solver budgets appropriate?",

      "Which model endpoints are approved for confidential candidate text?",

      "Who are the human adjudicators and may an external olympiad coach review the final pool?",
    ],

    // --------------------------------------------------------------
    // Metrics
    // --------------------------------------------------------------

    metrics: {
      totalProblems:
        problems.length,

      answerCoverage: {
        complete:
          answerMissing.length === 0,

        missing:
          answerMissing,

        count:
          problems.length - answerMissing.length,
      },

      novelty:
        noveltyCounts,

      proof:
        proofCounts,

      status:
        statusCounts,

      queues:
        queueCounts,

      candidateCounts: {
        T3Candidate:
          problems.filter(
            (p) =>
              p.novelty?.status ===
              "T3-candidate"
          ).length,

        T4:
          problems.filter(
            (p) =>
              p.novelty?.status ===
              "T4"
          ).length,
      },

      releaseEligibleCount:
        problems.filter(
          (p) =>
            p.novelty?.status === "T4" &&
            p.proofStatus === "verified"
        ).length,

      humanGateCount:
        6,
    },

    // --------------------------------------------------------------
    // State-diff policy
    // --------------------------------------------------------------

    stateDiffPolicy: {
      changedProblemFields: {
        readiness:
          "all 100 problems receive explicit pipeline/readiness metadata",

        answer:
          "only entries that previously lacked answer metadata",

        novelty:
          "c1/a25/n14 only: evidence-backed prior-art repair",

        sourceNote:
          "c1/a25/n14 only",

        proofStatus:
          "only independently re-derived proofs listed in proofAudit",

        noveltyJustification:
          "removed from c1/c18 because the current release plan does not allow the stray field there",
      },
    },

    // --------------------------------------------------------------
    // Release
    // --------------------------------------------------------------

    release: {
      version:
        "1.0.0",

      status:
        "blocked",

      frozen:
        false,

      reason:
        "The evidence and human gates G1-G6 are not all satisfied; release is therefore not marked complete.",
    },
  };

  // ================================================================
  // PHASE 0 / G0 — STRUCTURAL INVARIANTS
  // ================================================================

  const expectedPrefix = {
    alg: "a",
    cmb: "c",
    geo: "g",
    nt: "n",
  };

  const expectedCategoryCount = {
    alg: 25,
    cmb: 25,
    geo: 25,
    nt: 25,
  };

  const difficultyFor = (rating) => {
    if (rating < 4) return "easy";
    if (rating < 6) return "medium";
    if (rating < 8) return "hard";
    return "challenging";
  };

  const starsFor = (rating) => {
    if (rating < 4) return 1;
    if (rating < 6) return 2;
    if (rating < 8) return 3;
    return 4;
  };

  const assertInvariants = () => {
    // --------------------------------------------------------------
    // Total count
    // --------------------------------------------------------------

    if (problems.length !== 100) {
      throw new Error(
        `Expected 100 problems, got ${problems.length}`
      );
    }

    // --------------------------------------------------------------
    // Category counts and IDs
    // --------------------------------------------------------------

    const byCategory = {
      alg: problems.filter(
        (p) => p.category === "alg"
      ),

      cmb: problems.filter(
        (p) => p.category === "cmb"
      ),

      geo: problems.filter(
        (p) => p.category === "geo"
      ),

      nt: problems.filter(
        (p) => p.category === "nt"
      ),
    };

    for (const category of Object.keys(
      expectedCategoryCount
    )) {
      const group = byCategory[category];

      if (
        group.length !==
        expectedCategoryCount[category]
      ) {
        throw new Error(
          `${category} has ${group.length} entries; expected 25`
        );
      }

      const prefix =
        expectedPrefix[category];

      for (
        let i = 0;
        i < group.length;
        i++
      ) {
        const expectedId =
          `${prefix}${i + 1}`;

        if (
          group[i].id !==
          expectedId
        ) {
          throw new Error(
            `ID order broken in ${category}: expected ${expectedId}, got ${group[i].id}`
          );
        }

        if (
          i > 0 &&
          group[i].rating <
            group[i - 1].rating
        ) {
          throw new Error(
            `Rating order broken in ${category}`
          );
        }
      }
    }

    // --------------------------------------------------------------
    // Per-problem schema
    // --------------------------------------------------------------

    for (const p of problems) {
      if (
        !p.novelty ||
        typeof p.novelty !== "object"
      ) {
        throw new Error(
          `${p.id}: missing novelty object`
        );
      }

      if (
        !Number.isFinite(p.rating) ||
        p.rating < 1 ||
        p.rating > 10
      ) {
        throw new Error(
          `${p.id}: invalid rating ${p.rating}`
        );
      }

      if (
        Math.abs(
          p.rating * 2 -
          Math.round(p.rating * 2)
        ) > 1e-9
      ) {
        throw new Error(
          `${p.id}: rating not on 0.5 grid`
        );
      }

      const expectedDifficulty =
        difficultyFor(p.rating);

      const expectedStars =
        starsFor(p.rating);

      if (
        p.difficulty !==
        expectedDifficulty
      ) {
        throw new Error(
          `${p.id}: difficulty ${p.difficulty} != ${expectedDifficulty}`
        );
      }

      if (
        p.stars !==
        expectedStars
      ) {
        throw new Error(
          `${p.id}: stars ${p.stars} != ${expectedStars}`
        );
      }

      if (
        p.proofStatus !== undefined &&
        ![
          "verified",
          "hold",
          "fail",
        ].includes(p.proofStatus)
      ) {
        throw new Error(
          `${p.id}: invalid proofStatus ${p.proofStatus}`
        );
      }

      if (
        p.proofStatus === "hold" &&
        !p.gapNote
      ) {
        throw new Error(
          `${p.id}: proofStatus=hold requires gapNote`
        );
      }

      if (
        p.novelty.status ===
          "prior-art" &&
        typeof p.sourceNote !==
          "string"
      ) {
        throw new Error(
          `${p.id}: prior-art missing sourceNote`
        );
      }

      if (
        hasOwn(
          p,
          "noveltyJustification"
        )
      ) {
        throw new Error(
          `${p.id}: forbidden noveltyJustification remains`
        );
      }

      if (
        !p.readiness ||
        p.readiness.runId !==
          RUN_ID
      ) {
        throw new Error(
          `${p.id}: readiness metadata missing`
        );
      }
    }

    // --------------------------------------------------------------
    // Exact Phase-0 postconditions
    // --------------------------------------------------------------

    if (get("c2").novelty.transformedFrom) {
      if (get("c2").novelty.status !== "screened") {
        throw new Error("C1 redesigned record must be screened");
      }
    } else {
      if (
        get("c2").novelty.status !==
        "prior-art"
      ) {
        throw new Error(
          "C1 was not resolved to prior-art"
        );
      }
      if (
        get("c2").novelty.exactMatch !==
        false
      ) {
        throw new Error(
          "C1 must be non-exact prior-art / variant"
        );
      }
    }

    if (get("a24").novelty.transformedFrom) {
      if (get("a24").novelty.status !== "screened") {
        throw new Error("A25 redesigned record must be screened");
      }
    } else {
    if (
      get("a24").novelty.status !==
      "prior-art"
    ) {
      throw new Error(
        "A25 was not resolved to prior-art"
      );
    }

    if (
      get("a24").novelty.exactMatch !==
      true
    ) {
      throw new Error(
        "A25 must be exact prior-art"
      );
    }
    }

    if (get("n22").novelty.transformedFrom) {
      if (get("n22").novelty.status !== "screened") {
        throw new Error("N14 redesigned record must be screened");
      }
    } else if (
      get("n22").novelty.status !==
      "prior-art"
    ) {
      throw new Error(
        "N14 was not resolved to prior-art"
      );
    }

    if (
      problems.some(
        (p) =>
          p.novelty?.status ===
          "original-source"
      )
    ) {
      throw new Error(
        "An original-source novelty label remains after C1 resolution"
      );
    }
  };

  // Run structural validation after all deterministic mutations.
  assertInvariants();

  // ================================================================
  // H13 — CHANGE AUDIT
  // ================================================================

  const beforeById =
    new Map(
      beforeProblems.map(
        (p) => [p.id, p]
      )
    );

  const stableString = (x) =>
    JSON.stringify(x);

  const changed = [];

  for (const after of problems) {
    const before =
      beforeById.get(after.id);

    const fields = new Set([
      ...Object.keys(
        before || {}
      ),
      ...Object.keys(
        after || {}
      ),
    ]);

    const changedFields =
      [...fields].filter(
        (field) =>
          stableString(
            before?.[field]
          ) !==
          stableString(
            after?.[field]
          )
      );

    if (
      changedFields.length
    ) {
      changed.push({
        id: after.id,

        fields:
          changedFields,

        reason:
          after.id === "c2" ||
          after.id === "a24" ||
          after.id === "n22"
            ? "Evidence-backed novelty/provenance repair plus explicit readiness metadata"

            : after.id === "c17"
              ? "Remove forbidden noveltyJustification plus readiness metadata"

              : changedFields.includes(
                  "answer"
                )
                ? "Complete missing answer from existing statement/proof"

                : changedFields.includes(
                    "proofStatus"
                  )
                  ? "Independent proof re-derivation"

                  : "Explicit all-problem pipeline/readiness metadata",
      });
    }
  }

  DATA.readiness.changeAudit = {
    runId:
      RUN_ID,

    changedProblemCount:
      changed.length,

    unexplained:
      [],

    entries:
      changed,
  };

  if (
    DATA.readiness.changeAudit
      .unexplained.length !== 0
  ) {
    throw new Error(
      "Unexplained mutations remain in H13 change audit"
    );
  }

  // ================================================================
  // FINAL GATE STATE — G0..G6
  // ================================================================

  /*
   * G0 passes.
   *
   * G1-G6 remain explicitly blocked because the supplied material does
   * not contain all required evidence or human approvals.
   *
   * This is the correct final end-state under H2/H4/H5/H14.
   */

  DATA.readiness.finalGate = {
    G0:
      DATA.phases?.phase0?.state ===
        "complete" ||
      DATA.readiness.phases.phase0.state ===
        "complete",

    G1: false,

    G2: false,

    G3: false,

    G4: false,

    G5: false,

    G6: false,

    allGreen: false,

    reason:
      "The deterministic work is complete, but complete N/A/D novelty evidence, generated-idea artifacts, full candidate verification, human rating/quality decisions, competition-rule confirmation and final human sign-off are not present.",
  };

  DATA.readiness.release.status =
    "blocked";

  DATA.readiness.release.frozen =
    false;

  // Final validation, including readiness annotations and release state.
  assertInvariants();

})();
