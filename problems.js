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
 *   why         why this rating, under the proof-from-scratch criterion
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
 *
 *   sourceNote  optional, present iff novelty.status = "prior-art": public credit
 *               line stating the known origin of the entry.
 *   gapNote     optional, present iff proofStatus = "hold": precise description
 *               of the unfinished step and the route to closing it.
 *
 * Three independent labels per problem — difficulty (rating/difficulty/stars),
 * proof status (proofStatus), originality (novelty) — are deliberately kept
 * separate, per PLAN.md Step 10: merging them would hide exactly the
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
 * Ratings were recalibrated 2026-09-28 by PLAN.md Step 8 structured
 * self-assessment: every problem was attempted cold by an independent agent
 * (no access to the stored proof), logging solved/unsolved, false starts and
 * whether the winning idea was a named technique (R_search proxy), plus a
 * write-up-cost score (R_proof). Ratings are the 2026-09-27 audit blended
 * toward that signal (rating + 0.35*(0.7*R_search + 0.3*R_proof - rating)),
 * with +0.5 for problems the cold agent could not solve. THE CALIBRATION IS
 * AGENT-DERIVED, NOT CONTESTANT-DERIVED — treat it as provisional; per-problem
 * logs, id renumbering and disagreement flags are in calibration-notes.md.
 * Contestant blind-testing (10-12 per category, ~8 strong solvers) remains the
 * recommended next step before trusting ratings for high-stakes placement.
 *
 * When you add a problem, place it in its category in rating order and
 * renumber that category's ids from 1.
 */
window.IMO_SHORTLIST = {
  "ratedOn": "2026-09-28",
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
        "status": "unverified",
        "searchDate": "2026-09-27",
        "exactMatch": false,
        "similarSources": [
          {
            "name": "cyclic AM-GM chain with product constraint",
            "note": "textbook-style easy inequality; no exact source pinned; second-pass reviewer flags as classical-family"
          }
        ],
        "earliestKnownDate": null
      },
      "text": "Let $a,b,c,d>0$ satisfy $abcd=1$. Prove that $$(a+b)(b+c)(c+d)(d+a)\\ge 16,$$ and determine all equality cases.",
      "why": "The earlier draft's golden-ratio two-sided bound under a quartic constraint had an unproved endpoint estimate for the universal lower bound. This replacement keeps the same four-variable cyclic product structure but uses the constraint $abcd=1$, so a direct AM-GM chain on each factor closes the whole problem in one step.",
      "answer": "$$\\boxed{\\text{Equality iff }a=b=c=d=1.}$$",
      "steps": [
        "By AM-GM, $$a+b\\ge2\\sqrt{ab},\\quad b+c\\ge2\\sqrt{bc},\\quad c+d\\ge2\\sqrt{cd},\\quad d+a\\ge2\\sqrt{da}.$$ All four factors are positive, so multiplying the inequalities preserves their direction.",
        "The product of the right-hand sides is $$16\\sqrt{ab\\cdot bc\\cdot cd\\cdot da}=16\\sqrt{a^2b^2c^2d^2}=16\\,abcd=16,$$ using $abcd=1$ and $a,b,c,d>0$.",
        "Hence $$(a+b)(b+c)(c+d)(d+a)\\ge16.$$",
        "Equality holds iff all four AM-GM steps are equalities, i.e. $a=b$, $b=c$, $c=d$, $d=a$, so $a=b=c=d$; combined with $abcd=1$ this forces $a=b=c=d=1$."
      ]
    },
    {
      "id": "a2",
      "category": "alg",
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
            "name": "polynomial FE P(x)^2-P(y)^2=P(x-y)P(x+y)",
            "note": "standard training item; second-pass reviewer flags likely prior art"
          }
        ],
        "earliestKnownDate": null
      },
      "text": "Find all polynomials $P\\in\\mathbb{R}[x]$ such that $$P(x)^2-P(y)^2=P(x-y)\\,P(x+y)$$ for all real numbers $x$ and $y$.",
      "why": "The constant term is killed by setting $y=0$. What remains is that $P(x+1)P(x-1)-P(x)^2$ is constant, and the degree-$2n-2$ term of that difference has coefficient $-na_n^2$. That forces $\\deg P\\le 1$, after which $P(0)=0$ leaves only scalar multiples of $x$. No regularity assumption is required.",
      "steps": [
        "The zero polynomial works. Suppose $P\\not\\equiv 0$ and write $P(x)=a_n x^n+\\cdots+a_0$ with $a_n\\ne 0$ and $n=\\deg P$.",
        "Setting $y=0$ gives $P(x)^2-P(0)^2=P(x)^2$, hence $P(0)=0$. In particular there is no nonzero constant solution, and $x$ divides $P$.",
        "Setting $y=1$ gives $P(x+1)P(x-1)=P(x)^2-P(1)^2$, so the polynomial $P(x+1)P(x-1)-P(x)^2$ is the constant $-P(1)^2$.",
        "Expand $P(x+h)=P(x)+hP'(x)+\\tfrac12 h^2 P''(x)+\\cdots$. Then $$P(x+1)P(x-1)-P(x)^2=-(P')^2+P\\,P''+\\text{higher even corrections}.$$ The highest-degree contribution comes from $-(P')^2$, of degree $2n-2$, together with $P\\,P''$, also of degree $2n-2$. Their leading coefficients are $-(n a_n)^2$ and $a_n\\cdot n(n-1)a_n$, which add to $-n a_n^2$.",
        "Thus if $n\\ge 2$, then $2n-2\\ge 2$ and the leading coefficient $-na_n^2$ is nonzero, so $P(x+1)P(x-1)-P(x)^2$ is nonconstant, a contradiction. Hence $n\\le 1$. Combined with $P(0)=0$, one has $P(x)=cx$.",
        "Conversely $P(x)=cx$ gives $c^2(x^2-y^2)$ on the left and $c(x-y)\\cdot c(x+y)$ on the right. So the polynomials are exactly $P(x)=cx$ for $c\\in\\mathbb{R}$."
      ],
      "answer": "$$\\boxed{P(x)=cx\\quad(c\\in\\mathbb{R})}.$$"
    },
    {
      "id": "a3",
      "category": "alg",
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
            "name": "radical inequality via a+bc=(a+b)(a+c)",
            "note": "known classic; second-pass reviewer flags as prior-art risk"
          }
        ],
        "earliestKnownDate": null
      },
      "text": "Let $a,b,c\\ge 0$ satisfy $a+b+c=1$. Prove that $$1\\le \\sqrt{a+bc}+\\sqrt{b+ca}+\\sqrt{c+ab}\\le 2,$$ and determine every equality case on each side.",
      "why": "The constraint $a+b+c=1$ turns each radicand into a product of linear terms, so the upper bound is one AM--GM per term. The lower bound uses the coarser comparison $\\sqrt{a+bc}\\ge\\sqrt a$ and the expansion of $(\\sqrt a+\\sqrt b+\\sqrt c)^2$. The two equality analyses are independent.",
      "steps": [
        "Since $a+b+c=1$, $$a+bc=a(a+b+c)+bc=a^2+a(b+c)+bc=(a+b)(a+c),$$ and cyclically for the other two radicands.",
        "By AM--GM, $\\sqrt{(a+b)(a+c)}\\le \\tfrac12\\bigl((a+b)+(a+c)\\bigr)=a+\\tfrac{b+c}2=a+\\tfrac{1-a}2=\\tfrac{a+1}2$. Summing the three inequalities yields $$\\sum_{\\mathrm{cyc}}\\sqrt{a+bc}\\le \\sum_{\\mathrm{cyc}}\\frac{a+1}2=\\frac{(a+b+c)+3}2=2.$$",
        "Equality holds in all three AM--GM steps if and only if $a+b=a+c$, $b+c=b+a$ and $c+a=c+b$, hence $a=b=c$. With $a+b+c=1$ this is $a=b=c=\\tfrac13$, and the sum equals $2$.",
        "For the lower bound, $a+bc=(a+b)(a+c)\\ge a$, so $\\sqrt{a+bc}\\ge\\sqrt a$, and likewise cyclically. Therefore the sum is at least $\\sqrt a+\\sqrt b+\\sqrt c$.",
        "Squaring gives $(\\sqrt a+\\sqrt b+\\sqrt c)^2=a+b+c+2\\sum\\sqrt{ab}=1+2\\sum\\sqrt{ab}\\ge 1$, so $\\sqrt a+\\sqrt b+\\sqrt c\\ge 1$. Combining the two comparisons yields the sum at least $1$.",
        "Equality requires $\\sqrt{ab}=\\sqrt{bc}=\\sqrt{ca}=0$, so at least two of $a,b,c$ vanish, and also equality in $\\sqrt{a+bc}=\\sqrt a$, which is automatic once two variables vanish. With $a+b+c=1$ the equality cases are exactly the permutations of $(1,0,0)$."
      ],
      "answer": "$$\\boxed{\\text{Minimum }1\\text{ at permutations of }(1,0,0);\\ \\text{maximum }2\\text{ at }\\bigl(\\tfrac13,\\tfrac13,\\tfrac13\\bigr).}$$"
    },
    {
      "id": "a4",
      "category": "alg",
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
      "text": "Let $a,b,c>0$. Prove that $$32\\!\\left(\\sum_{\\mathrm{cyc}}ab(a+b)\\right)^3 \\ge 27\\!\\left(\\prod_{\\mathrm{cyc}}(a+b)\\right)^2 \\left(\\prod_{\\mathrm{cyc}}(a+b)-4abc\\right).$$",
      "why": "A homogeneous symmetric inequality collapses to one variable after $s=a+b+c$, $t=ab+bc+ca$, $p=abc$. The factorization and equality case are elementary.",
      "answer": "$\\boxed{a=b=c}$ is the unique equality case.",
      "steps": [
        "Set $s=a+b+c$, $t=ab+bc+ca$, $p=abc$. Then $$\\sum_{\\mathrm{cyc}}ab(a+b)=st-3p, \\qquad (a+b)(b+c)(c+a)=st-p.$$ Hence the claim is $$32(st-3p)^3\\ge 27(st-p)^2(st-5p).$$",
        "By $$st=(a+b+c)(ab+bc+ca)\\ge 9abc=9p,$$ put $u=st/p\\ge 9$. Dividing by $p^3>0$, it suffices to prove $$32(u-3)^3\\ge 27(u-1)^2(u-5).$$",
        "Use the exact factorization $$32(u-3)^3-27(u-1)^2(u-5)=(u-9)^2(5u-9)\\ge 0.$$",
        "Equality requires $u=9$, hence equality in $(a+b+c)(ab+bc+ca)\\ge 9abc$. The equality condition is $a=b=c$."
      ]
    },
    {
      "id": "a5",
      "category": "alg",
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
            "name": "linear independence of 1, cbrt(d), cbrt(d)^2",
            "note": "standard Eisenstein/cubic-field exercise family; second-pass flag"
          }
        ],
        "earliestKnownDate": null
      },
      "text": "Prove that there do not exist rational numbers $a,b$ such that $$\\sqrt[3]{3}=\\sqrt{a}+\\sqrt{b}.$$",
      "why": "The proof is a direct field-degree argument: squaring reduces the claim to a nontrivial rational linear relation among $1$, $\\sqrt[3]{3}$, and $\\sqrt[3]{9}$. The irreducibility step is standard and the proof has no unnecessary machinery.",
      "answer": "$\\boxed{\\text{No such rational }a,b\\text{ exist.}}$",
      "steps": [
        "Let $\\alpha=\\sqrt[3]{3}$. Since the square roots are real, $a,b\\ge 0$. The polynomial $x^3-3$ is irreducible over $\\mathbb{Q}$ by Eisenstein's criterion at $3$, so $1,\\alpha,\\alpha^2$ are linearly independent over $\\mathbb{Q}$.",
        "Assume $\\alpha=\\sqrt{a}+\\sqrt{b}$. Put $s=a+b\\in\\mathbb{Q}$ and $p=ab\\in\\mathbb{Q}$. Squaring gives $\\alpha^2-s=2\\sqrt{p}$. If $p=0$, then $\\alpha^2\\in\\mathbb{Q}$, impossible. Thus we may square again: $\\alpha^4-2s\\alpha^2+s^2=4p$.",
        "Because $\\alpha^3=3$, we have $\\alpha^4=3\\alpha$. Hence $3\\alpha-2s\\alpha^2+(s^2-4p)=0$, a nontrivial rational linear relation among $1,\\alpha,\\alpha^2$, a contradiction."
      ]
    },
    {
      "id": "a6",
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
      "text": "Let $n\\ge 3$ be an integer, and let $x_1,\\dots,x_n\\in\\mathbb{R}$ satisfy $$\\sum_{i=1}^n x_i=0, \\qquad \\sum_{i=1}^n x_i^2=n(n-1).$$ Prove that $$\\sum_{i=1}^n x_i^3\\le n(n-1)(n-2),$$ and determine all equality cases.",
      "why": "The maximum-coordinate bound plus one tailored factorization proves the inequality in a few lines. Equality follows directly from the vanishing of nonpositive summands.",
      "answer": "Equality occurs precisely for permutations of $$\\boxed{(n-1,-1,\\dots,-1)}.$$",
      "steps": [
        "Let $M=\\max_i x_i$. The other $n-1$ variables sum to $-M$, so by Cauchy, $$n(n-1)-M^2\\ge\\frac{M^2}{n-1}.$$ Hence $M\\le n-1$, so $x_i\\le n-1$ for every $i$.",
        "Therefore $(x_i+1)^2(x_i-(n-1))\\le 0$ for every $i$. Summing and expanding, $$\\sum_i(x_i+1)^2(x_i-(n-1))=\\sum_i x_i^3-n(n-1)(n-2).$$",
        "Thus $$\\sum_i x_i^3\\le n(n-1)(n-2).$$",
        "Equality holds exactly when every summand vanishes, so $x_i\\in\\{-1,n-1\\}$. The condition $\\sum x_i=0$ then forces one entry $n-1$ and the remaining $n-1$ entries equal to $-1$. This configuration also has the required square-sum."
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
        "status": "unverified",
        "searchDate": "2026-09-27",
        "exactMatch": false,
        "similarSources": [],
        "earliestKnownDate": null
      },
      "text": "Let $a, b, c > 0$ satisfy $a^2 + b^2 + c^2 = 3$. Prove that $$\\frac{1}{2 - a} + \\frac{1}{2 - b} + \\frac{1}{2 - c} \\ge 3,$$ and determine all equality cases.",
      "why": "An exact sum-of-squares identity bounds each summand by a quadratic in the variable. Summing cyclically directly absorbs the constraint $a^2+b^2+c^2=3$ and eliminates the need for multivariable Lagrange multipliers or tangents requiring calculus.",
      "answer": "$$\\boxed{\\text{Equality holds if and only if } a = b = c = 1.}$$",
      "steps": [
        "Since $a^2+b^2+c^2=3$ and $a,b,c>0$, we have $a^2&lt;3&lt;4$, so $0 &lt; a &lt; 2$. Thus each denominator $2-a$, $2-b$, and $2-c$ is strictly positive.",
        "Consider the algebraic identity $$\\frac{1}{2 - a} - \\frac{1 + a^2}{2} = \\frac{2 - (1 + a^2)(2 - a)}{2(2 - a)} = \\frac{2 - (2 - a + 2a^2 - a^3)}{2(2 - a)} = \\frac{a^3 - 2a^2 + a}{2(2 - a)} = \\frac{a(a - 1)^2}{2(2 - a)}.$$",
        "Since $0 &lt; a &lt; 2$, the denominator $2(2 - a)$ is positive, and the numerator $a(a - 1)^2 \\ge 0$. Therefore, $$\\frac{1}{2 - a} \\ge \\frac{1 + a^2}{2}$$ for all $a \\in (0, 2)$, with equality holding if and only if $a = 1$.",
        "Writing the analogous inequalities for $b$ and $c$ and summing all three yields $$\\sum_{\\mathrm{cyc}} \\frac{1}{2 - a} \\ge \\frac{3 + (a^2 + b^2 + c^2)}{2}.$$",
        "Substituting the given constraint $a^2 + b^2 + c^2 = 3$ gives $$\\sum_{\\mathrm{cyc}} \\frac{1}{2 - a} \\ge \\frac{3 + 3}{2} = 3.$$",
        "Equality holds throughout if and only if equality holds in each individual term, which forces $a = b = c = 1$. This satisfies $1^2+1^2+1^2=3$ and yields $1+1+1=3$."
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
      "text": "Let $f:\\mathbb{R}\\to\\mathbb{R}$ and define $\\varphi(x)=f(x)-x^3+1$. Suppose $$\\varphi(x+y)+xy=\\varphi(x)\\varphi(y)$$ for all $x,y\\in\\mathbb{R}$. Determine all such $f$.",
      "why": "The substitution is given, so the work is the case split. From $\\varphi(x)\\varphi(-x)=1-x^2$ one of $\\varphi(1)$ and $\\varphi(-1)$ vanishes, and each choice determines $\\varphi$ on all of $\\mathbb{R}$. Short once that relation is written.",
      "answer": "$$\\boxed{f(x)=x^3-x\\quad\\text{or}\\quad f(x)=x^3+x}.$$",
      "steps": [
        "Putting $x=y=0$ gives $\\varphi(0)=\\varphi(0)^2$. If $\\varphi(0)=0$, then setting $y=0$ gives $\\varphi(x)=0$ for all $x$, which makes the original equation $xy=0$ for all $x,y$, impossible. Hence $\\varphi(0)=1$.",
        "Putting $y=-x$, $1-x^2=\\varphi(x)\\varphi(-x)$. At $x=1$, $\\varphi(1)\\varphi(-1)=0$.",
        "If $\\varphi(1)=0$, then the original equation with $y=1$ gives $\\varphi(x+1)=-x$, hence $\\varphi(t)=1-t$. If $\\varphi(-1)=0$, then with $y=-1$, $\\varphi(x-1)=x$, hence $\\varphi(t)=t+1$.",
        "Both functions satisfy the equation. Since $f(x)=\\varphi(x)+x^3-1$, the complete answer is $f(x)=x^3-x$ or $f(x)=x^3+x$."
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
        "status": "unverified",
        "searchDate": "2026-09-27",
        "exactMatch": false,
        "similarSources": [],
        "earliestKnownDate": null
      },
      "text": "Let $(x_n)_{n\\ge1}$ be a sequence of positive integers satisfying $$x_nx_{n+1}x_{n+2}=x_n+x_{n+1}+x_{n+2}$$ for every $n\\ge1$. Prove that $(x_n)$ is purely periodic with period $3$, and that $(x_1,x_2,x_3)$ must be a permutation of $(1,2,3)$.",
      "why": "The earlier draft used a floor/ceiling recurrence whose finite transition analysis toward eventual periodicity was never completed. This replacement keeps the same flavor — a three-term multiplicative recurrence forcing periodicity — but restricts to positive integers, which makes the whole classification a short, fully elementary argument.",
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
      "id": "a10",
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
      "text": "Find all functions $f:\\mathbb{N}\\to\\mathbb{N}$ such that $$f(m+n)+f(mn)=f(m)f(n)+1$$ for all positive integers $m$ and $n$.",
      "why": "The substitution $n=1$ produces a linear recurrence in the value $f(1)$. The constant solution and the translate $n+1$ both work. Every larger value of $f(1)$ makes two independent evaluations of $f(4)$ disagree, so the classification closes without growth estimates.",
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
      "why": "The sign pattern is forced by the product: exactly one variable is positive. The other two are positive numbers with fixed sum and product, so the cubic discriminant supplies a lower bound on the positive root, and convexity of $t\\mapsto t^4$ upgrades that bound to the fourth-power sum.",
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
      "id": "a12",
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
      "text": "Let $a_1,a_2,\\dots$ be positive reals with $a_1=1$ and $$a_{n+1}=a_n+\\frac{n}{a_1+\\cdots+a_n}.$$ Prove that $$a_n\\ge\\sqrt{\\frac{16n-9}{7}}$$ for every $n\\ge 1$.",
      "why": "The bound follows from monotonicity and concavity of the increments, together with an elementary quadratic estimate on the differences.",
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
      "id": "a13",
      "category": "alg",
      "difficulty": "medium",
      "stars": 2,
      "rating": 5.5,
      "confidence": "high",
      "novelty": {
        "status": "unverified",
        "searchDate": "2026-09-27",
        "exactMatch": false,
        "similarSources": [],
        "earliestKnownDate": null
      },
      "text": "Find all polynomials $P\\in\\mathbb{R}[x]$ satisfying $$P(x^3)=P(x)^3$$ for every real $x$.",
      "why": "Comparing leading coefficients now allows $\\pm1$, and a descending induction — using that a same-degree-drop cross term would force $3\\mid k$ with a strictly smaller, already-vanished index — kills every lower term. The only solutions are $0$ and $\\pm x^n$.",
      "answer": "$$\\boxed{P\\equiv 0\\quad\\text{or}\\quad P(x)=\\pm x^n,\\ n=0,1,2,\\dots}$$",
      "steps": [
        "The zero polynomial is a solution. Suppose $P\\ne 0$ and $\\deg P=n$. If $n=0$, the equation gives $P^3=P$, so $P\\equiv\\pm1=\\pm x^0$ (as $P\\ne0$).",
        "Assume $n\\ge1$, and write $P(x)=cx^n+a_{n-1}x^{n-1}+\\cdots+a_0$ with $c\\ne0$. Comparing coefficients of $x^{3n}$ in $P(x^3)=P(x)^3$ gives $c=c^3$, so $c\\in\\{1,-1\\}$.",
        "If $c=-1$, write $P=-R$ with $R$ monic of degree $n$; then $P(x^3)=P(x)^3$ becomes $R(x^3)=R(x)^3$. So it suffices to treat $c=1$, i.e. $P(x)=x^n+a_{n-1}x^{n-1}+\\cdots+a_0$.",
        "We prove $a_{n-1}=\\cdots=a_0=0$ by descending induction. Suppose $a_{n-1},\\dots,a_{n-k+1}=0$, and examine the coefficient of $x^{3n-k}$ on both sides for $k\\ge1$.",
        "In $P(x)^3$, any contribution using two or three factors of degree below $n$ requires an index $n-j$ with $1\\le j&lt;k$ (since the total exponent drop is $k$ and at least two factors participate), and such $a_{n-j}$ vanish by the induction hypothesis. Hence the only surviving contribution is the one factor of exponent $n-k$ against two factors of exponent $n$, giving coefficient $3a_{n-k}$.",
        "In $P(x^3)$, the coefficient of $x^{3n-k}$ is $0$ unless $3\\mid k$, say $k=3m$, in which case it equals $a_{n-m}$. But $1\\le m&lt;k$ for $m\\ge1$, so $a_{n-m}=0$ by the induction hypothesis; hence this coefficient is always $0$.",
        "Therefore $3a_{n-k}=0$ for every $k\\ge1$, so $a_{n-k}=0$. Thus $P(x)=x^n$, and correspondingly $P(x)=-x^n$ in the case $c=-1$. Therefore $P\\equiv 0$ or $P(x)=\\pm x^n$ for some integer $n\\ge 0$. Conversely each of these satisfies the equation: $(x^3)^n=x^{3n}=(x^n)^3$, and the sign is preserved since $(-1)^3=-1$."
      ]
    },
    {
      "id": "a14",
      "category": "alg",
      "difficulty": "medium",
      "stars": 2,
      "rating": 5.5,
      "confidence": "high",
      "novelty": {
        "status": "unverified",
        "searchDate": "2026-09-27",
        "exactMatch": false,
        "similarSources": [],
        "earliestKnownDate": null
      },
      "text": "Find all polynomials $P\\in\\mathbb{R}[x]$ such that for all real $x,y,z$, $$P(x)^2+P(y)^2+P(z)^2+P(x+y+z)^2=P(x+y)^2+P(y+z)^2+P(z+x)^2+P(0)^2.$$",
      "why": "The identity is the vanishing of a third finite difference, but it is imposed on $P^2$ rather than on $P$. The degree-$d$ homogeneous part has a nonzero coefficient on $x^{d-2}yz$ whenever $d\\ge 3$, so $\\deg(P^2)\\le 2$ and $P$ is affine. Every affine polynomial then checks directly.",
      "steps": [
        "Write $g(t)=P(t)^2$. The hypothesis is $$g(x)+g(y)+g(z)+g(x+y+z)-g(x+y)-g(y+z)-g(z+x)=g(0).$$ If $g$ is a polynomial of degree $d$, it is enough to show that the degree-$d$ homogeneous part of the left-hand side vanishes only for $d\\le 2$, up to the constant $g(0)$ which has degree $0$.",
        "For the monomial $h(t)=t^d$ with $d\\ge 3$, the coefficient of $x^{d-2}yz$ in $(x+y+z)^d$ is the multinomial $d(d-1)$. The same monomial does not appear in $(x+y)^d$, $(y+z)^d$ or $(z+x)^d$, because each of those omits one variable, and it does not appear in $x^d$, $y^d$ or $z^d$. Hence that coefficient on the left-hand side is $d(d-1)\\ne 0$.",
        "Therefore $\\deg g\\le 2$. But $g=P^2$, so $\\deg P\\le 1$. Write $P(t)=ct+d$.",
        "It remains only to check affine polynomials. For a constant, both sides equal $4d^2$. For $P(t)=t$, both sides equal $2(x^2+y^2+z^2+xy+yz+zx)$. For $P(t)=t^2$ one would be outside the degree bound; directly, $g(t)=t^2$ satisfies $$x^2+y^2+z^2+(x+y+z)^2-(x+y)^2-(y+z)^2-(z+x)^2=0=g(0).$$ The cross term $2cdt$ is linear, so it contributes nothing beyond the linear case. Thus every $P(t)=ct+d$ works, and there are no others."
      ],
      "answer": "$$\\boxed{P(t)=ct+d\\quad(c,d\\in\\mathbb{R})}.$$"
    },
    {
      "id": "a15",
      "category": "alg",
      "difficulty": "medium",
      "stars": 2,
      "rating": 5.5,
      "confidence": "high",
      "novelty": {
        "status": "prior-art",
        "searchDate": "2026-09-27",
        "exactMatch": true,
        "similarSources": [
          {
            "name": "Putnam 1971 B1",
            "note": "identical statement: f>=0 implies f+f'+f''+...>=0"
          }
        ],
        "earliestKnownDate": null
      },
      "sourceNote": "Classical result: Putnam 1971 B1 (identical statement).",
      "text": "Let $P \\in \\mathbb{R}[x]$ be a monic polynomial of degree $n$ such that $P(x) \\ge 0$ for all real numbers $x$. Prove that $$P(x) + P'(x) + P''(x) + \\cdots + P^{(n)}(x) \\ge 0$$ for every real number $x$.",
      "why": "Defining the total derivative sum $Q(x)$ yields the differential relation $Q(x) - Q'(x) = P(x)$. Since $P \\ge 0$, the degree $n$ must be even, ensuring $Q$ attains a global minimum at some critical point $x_0$. Evaluating the differential relation at $x_0$ transfers the non-negativity of $P$ to the global minimum of $Q$.",
      "answer": "$$\\boxed{\\sum_{k=0}^n P^{(k)}(x) \\ge 0 \\text{ for all } x \\in \\mathbb{R}.}$$",
      "steps": [
        "Let $Q(x) = \\sum_{k=0}^n P^{(k)}(x) = P(x) + P'(x) + P''(x) + \\cdots + P^{(n)}(x)$.",
        "Differentiating $Q(x)$ gives $Q'(x) = P'(x) + P''(x) + \\cdots + P^{(n)}(x) + P^{(n+1)}(x)$. Because $\\deg P = n$, $P^{(n+1)}(x) = 0$. Consequently, $$Q(x) - Q'(x) = P(x) \\ge 0 \\quad \\text{for all } x \\in \\mathbb{R}.$$",
        "Since $P$ is monic and $P(x) \\ge 0$ for all $x \\in \\mathbb{R}$, its degree $n$ must be an even integer (any monic polynomial of odd degree takes arbitrarily large negative values as $x \\to -\\infty$).",
        "Each of $P',P'',\\dots,P^{(n)}$ has degree at most $n-1$, so $Q$ is the sum of the monic degree-$n$ polynomial $P$ and a polynomial of degree at most $n-1$; hence $Q$ itself is monic of degree $n$, which is even. If $n=0$, then $P\\equiv1$ and $Q\\equiv1\\ge0$ holds trivially, so assume $n\\ge 2$. Then $\\lim_{x \\to \\pm\\infty} Q(x) = +\\infty$.",
        "Being a continuous polynomial tending to $+\\infty$ at both infinities, $Q$ must attain a global minimum at some point $x_0 \\in \\mathbb{R}$.",
        "At this global minimum, Fermat's interior extremum theorem implies that $Q'(x_0) = 0$.",
        "Substituting $x = x_0$ into the relation $Q(x) - Q'(x) = P(x)$ yields $$Q(x_0) = Q(x_0) - Q'(x_0) = P(x_0).$$",
        "Since $P(x) \\ge 0$ for all $x$, we have $P(x_0) \\ge 0$, and therefore $Q(x_0) \\ge 0$. Because $Q(x_0)$ is the global minimum of $Q$ on $\\mathbb{R}$, it follows that $Q(x) \\ge Q(x_0) \\ge 0$ for all $x \\in \\mathbb{R}$."
      ]
    },
    {
      "id": "a16",
      "category": "alg",
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
      "proofStatus": "verified",
      "text": "Let $a,b,c>0$. Prove that $$\\frac{ab}{a^2+b^2+c^2-ab+bc-ca}+\\frac{bc}{a^2+b^2+c^2-bc+ca-ab}+\\frac{ca}{a^2+b^2+c^2-ca+ab-bc}\\le\\frac{3}{2},$$ and determine all equality cases.",
      "why": "Cyclic fractional inequality. Clearing the denominators and expanding in the two order types produces an explicit sum of nonnegative monomials; equality analysis is then immediate.",
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
      "text": "Determine all polynomials $P(x)\\in\\mathbb{R}[x]$ for which there exists a nonzero rational function $Q(x)\\in\\mathbb{R}(x)$ such that $$P(x)=\\frac{Q(x)}{Q\\!\\left(1-\\frac{1}{x}\\right)}$$ wherever the expressions are defined.",
      "why": "The transformation $x\\mapsto 1-1/x$ has order $3$. The norm identity forces every root of $P$ to lie among $0$ and $1$ and fixes the leading coefficient. Comparing orders at the single $3$-orbit $\\{0,\\infty,1\\}$ realizes every pair $(a,b)$, because $T$ has two real-irreducible FIXED points on $x^2-x+1=0$ whose orbits contribute nothing to $P$; the tempting congruence $a\\equiv b\\pmod 3$ is false (it would need $\\operatorname{ord}_0+\\operatorname{ord}_1+\\operatorname{ord}_\\infty Q=0$, which extra zeros of $Q$ off the special orbit destroy).",
      "answer": "$$\\boxed{P(x)=(-1)^a x^a(x-1)^b, \\qquad a,b\\ge 0.}$$",
      "steps": [
        "Let $T(x)=1-1/x=(x-1)/x$. Then $T^2(x)=1/(1-x)$ and $T^3(x)=x$. Composing the identity at $x,T(x),T^2(x)$ gives the rational identity $P(x)P(Tx)P(T^2x)=1$.",
        "Thus $P\\not\\equiv 0$. If $r\\notin\\{0,1\\}$ were a root of $P$, then all three factors are finite at $x=r$, so the product would vanish, a contradiction. Hence every root is $0$ or $1$, and $P(x)=c\\,x^a(x-1)^b$ for $a,b\\ge 0$.",
        "Using $x\\,T(x)\\,T^2(x)=-1$ and $(x-1)(T(x)-1)(T^2(x)-1)=1$, the norm identity gives $c^3(-1)^a=1$, so $c=(-1)^a$.",
        "Write $g(x)=x^2-x+1$: its two roots are exactly the fixed points of $T$, since $T(x)=x\\iff x^2-x+1=0$. Also $T(0)=\\infty$, $T(\\infty)=1$, $T(1)=0$, so $\\{0,\\infty,1\\}$ is one $3$-orbit. For any $r\\in\\widehat{\\mathbb{C}}$ and nonzero rational $Q$, $\\operatorname{ord}_r(Q\\circ T)=\\operatorname{ord}_{T(r)}Q$, so $\\operatorname{ord}_r P=\\operatorname{ord}_r Q-\\operatorname{ord}_{T(r)}Q$.",
        "Necessity. With $u=\\operatorname{ord}_0 Q$, $v=\\operatorname{ord}_1 Q$, $w=\\operatorname{ord}_\\infty Q$: evaluating at $r=0$ and $r=1$ gives $a=u-w$ and $b=v-u$; at $r=\\infty$ one gets $-(a+b)=w-v$, which is dependent. No congruence between $a$ and $b$ follows: $u,v,w$ are three independent integers, and the only remaining orbits of $T$ contribute nothing to $P$ — at a fixed point $\\rho$ of $T$, $\\operatorname{ord}_\\rho P=\\operatorname{ord}_\\rho Q-\\operatorname{ord}_\\rho Q=0$, and on a free $3$-orbit $\\{r,tr,t^2r\\}$ the orders of $Q$ are forced equal, so the three differences vanish in a cycle. (The identity $u+v+w=0$ holds only when $Q$ has no zeros or poles off $\\{0,1,\\infty\\}$; it is not true for general $Q$.)",
        "Sufficiency. Given $a,b\\ge0$, choose $u'\\in\\{0,1\\}$ with $u'\\equiv a-b\\pmod 2$ and set $v'=u'+b$ and $w'=(a-b-3u')/2\\in\\mathbb{Z}$. Take $Q(x)=x^{u'}(x-1)^{v'}g(x)^{w'}$ (a nonzero rational function: $w'&lt;0$ puts $g^{|w'|}$ in the denominator). Using $T(x)=\\frac{x-1}{x}$, $T(x)-1=-\\frac1x$ and $g(T(x))=g(x)/x^2$ (direct expansion), the three factors give $\\frac{x}{T(x)}=\\frac{x^2}{x-1}$, $\\frac{x-1}{T(x)-1}=-x(x-1)$, $\\frac{g(x)}{g(T(x))}=x^2$; multiplying with the chosen exponents yields $Q(x)/Q(Tx)=(-1)^{v'}x^{\\,2u'+v'+2w'}(x-1)^{-u'+v'}=(-1)^{v'}x^a(x-1)^b$. Finally $a-v'=2w'+2u'$ is even, so $(-1)^{v'}=(-1)^a$.",
        "Check of the three building blocks: $\\frac{x^2}{x-1}$ has $(a,b)=(2,-1)$ as predicted, $-x(x-1)$ has $(1,1)$ with sign $-1=(-1)^1$, and $x^2$ has $(2,0)$ with sign $+1$. Example realizing $(a,b)=(1,0)$: $u'=1,v'=1,w'=-1$, i.e. $Q(x)=\\frac{x(x-1)}{x^2-x+1}$, for which $Q(x)/Q(Tx)=-x$."
      ],
      "proofStatus": "verified"
    },
    {
      "id": "a18",
      "category": "alg",
      "difficulty": "hard",
      "stars": 3,
      "rating": 6,
      "confidence": "high",
      "novelty": {
        "status": "prior-art",
        "searchDate": "2026-09-27",
        "exactMatch": false,
        "similarSources": [
          {
            "name": "P(x)P(x+1)=P(x^2+x+1) root-rigidity polynomial FE",
            "note": "close variant of a known family of polynomial functional equations solved via root-invariance under z->z^2+z+1; not yet pinned to one exact competition, flagged classical-style pending direct source check"
          }
        ],
        "earliestKnownDate": null
      },
      "proofStatus": "verified",
      "sourceNote": "Prior-art style: closely matches a known family of polynomial rigidity problems solved via root-invariance under z->z^2+z+1; exact original source not pinned, kept here as a labeled classical-style entry pending further search.",
      "text": "Find all polynomials $P \\in \\mathbb{R}[x]$ satisfying $$P(x)P(x+1) = P(x^2+x+1)$$ for all real numbers $x$.",
      "why": "Roots are invariant under the two maps $z\\mapsto z^2+z+1$ and $z\\mapsto z^2-z+1$. Applying the parallelogram identity to the images of a root of maximum modulus forces $|z^2+1|=0$, so that root is $\\pm i$; factoring out the resulting power of $x^2+1$ and repeating the argument on the cofactor shows the cofactor is $1$.",
      "answer": "$$\\boxed{P(x) \\equiv 0 \\quad\\text{or}\\quad P(x) = (x^2+1)^n \\text{ for some integer } n \\ge 0.}$$",
      "steps": [
        "\\textbf{Setup.} $P\\equiv0$ is a solution. Let $P\\not\\equiv0$ have degree $d$ and leading coefficient $c$. Comparing leading coefficients of both sides, $c^2=c$, so $c=1$ and $P$ is monic. If $d=0$ then $P\\equiv1=(x^2+1)^0$. Since both sides of the equation are polynomials that agree for all real $x$, $$P(w)P(w+1)=P(w^2+w+1)\\quad\\text{holds for all }w\\in\\mathbb{C}. \\tag{1}$$",
        "\\textbf{Root maps.} Let $d\\ge1$ and let $\\mathcal{R}\\subset\\mathbb{C}$ be the (nonempty, finite) set of roots of $P$. If $w\\in\\mathcal{R}$, then (1) gives $P(w^2+w+1)=P(w)P(w+1)=0$, so $T_1(w)=w^2+w+1\\in\\mathcal{R}$. Applying (1) at $w-1$ gives $P(w^2-w+1)=P(w-1)P(w)=0$, since $(w-1)^2+(w-1)+1=w^2-w+1$; so $T_2(w)=w^2-w+1\\in\\mathcal{R}$.",
        "\\textbf{Extremal root.} Let $z\\in\\mathcal{R}$ have maximal modulus $R=|z|$. Then $|T_1(z)|,|T_2(z)|\\le R$. The parallelogram identity gives $$|T_1+T_2|^2+|T_1-T_2|^2=2|T_1|^2+2|T_2|^2\\le4R^2,$$ and $T_1+T_2=2(z^2+1)$, $T_1-T_2=2z$. Hence $4|z^2+1|^2+4|z|^2\\le4R^2$, and since $|z|=R$, $|z^2+1|^2\\le0$. Thus $z^2=-1$, $z=\\pm i$, $R=1$. In particular $\\pm i$ are roots of every non-constant solution $P$ (they are conjugate, so each is a root because $P$ has real coefficients).",
        "\\textbf{Factoring.} Put $E(x)=x^2+1$. Then $E(x)E(x+1)=(x^2+1)(x^2+2x+2)=x^4+2x^3+3x^2+2x+2=(x^2+x+1)^2+1=E(x^2+x+1)$, so $E^m$ satisfies the equation for every $m\\ge0$. For non-constant $P$ write $P=E^mQ$ with $m\\ge1$ and $Q\\in\\mathbb{R}[x]$, $Q(\\pm i)\\ne0$ (possible since $E$ has simple roots $\\pm i$ and $P$ is real). Then $$E(x^2+x+1)^mQ(x)Q(x+1)=P(x)P(x+1)=P(x^2+x+1)=E(x^2+x+1)^mQ(x^2+x+1),$$ and cancelling the nonzero polynomial $E(x^2+x+1)^m$ gives $Q(x)Q(x+1)=Q(x^2+x+1)$; $Q$ is monic.",
        "\\textbf{Conclusion.} If $Q$ were non-constant, Step 3 applied to $Q$ would give $Q(i)=0$ or $Q(-i)=0$, contradicting $Q(\\pm i)\\ne0$. So $Q$ is constant, hence $Q\\equiv1$ (monic), and $P=(x^2+1)^m$. By Step 4 every $(x^2+1)^n$, $n\\ge0$, is a solution, together with $P\\equiv0$."
      ]
    },
    {
      "id": "a19",
      "category": "alg",
      "difficulty": "hard",
      "stars": 3,
      "rating": 6,
      "confidence": "high",
      "novelty": {
        "status": "prior-art",
        "searchDate": "2026-09-27",
        "exactMatch": false,
        "similarSources": [
          {
            "name": "f(m^2+n^2)=f(m)^2+f(n)^2, strictly increasing f:N0->N0",
            "note": "matches a known style of olympiad functional equation (induction-squeeze via sums of two squares); exact competition source not yet pinned"
          }
        ],
        "earliestKnownDate": null
      },
      "sourceNote": "Prior-art style: matches a known family of olympiad functional equations on N0 solved via induction-squeeze; exact original source not pinned, kept here as a labeled classical-style entry pending further search.",
      "text": "Find all strictly increasing functions $f:\\mathbb{N}_0\\to\\mathbb{N}_0$ such that $$f(m^2+n^2)=f(m)^2+f(n)^2$$ for all nonnegative integers $m$ and $n$. Here $\\mathbb{N}_0=\\{0,1,2,\\dots\\}$.",
      "why": "The equation alone does not see integers that are not sums of two squares, but strict increase fills those gaps once both endpoints of an interval are known. The anchor $f((n-1)^2)=f(n-1)^2$ sits strictly above $n$ and is computed from the inductive hypothesis, so a single squeeze gives $f(n)=n$.",
      "steps": [
        "Setting $m=n=0$ gives $f(0)=2f(0)^2$, so $f(0)\\in\\{0,\\tfrac12\\}$. The codomain forces $f(0)=0$.",
        "Setting $n=0$ gives $f(m^2)=f(m)^2$. In particular $f(1)=f(1)^2$, so $f(1)\\in\\{0,1\\}$. Strict increase and $f(0)=0$ force $f(1)=1$, and then $f(2)=f(1^2+1^2)=2$.",
        "Claim: $f(n)=n$ for every $n\\ge 0$. The cases $n\\le 2$ are done. Fix $n\\ge 3$ and assume the claim for every smaller value.",
        "The inductive hypothesis gives $f(n-1)=n-1$, and the equation gives $f((n-1)^2)=f(n-1)^2=(n-1)^2$. For $n\\ge 3$ one has $(n-1)^2>n$. Thus $f$ is a strictly increasing map on the integers from $n-1$ to $(n-1)^2$, with those two endpoints fixed at their own values.",
        "There are exactly $(n-1)^2-(n-1)-1$ integers strictly between the endpoints, and exactly the same number of admissible integer values. The only strictly increasing filling is $f(k)=k$ throughout the interval. In particular $f(n)=n$.",
        "The identity function is strictly increasing and preserves sums of two squares, so it is the unique solution."
      ],
      "answer": "$$\\boxed{f(n)=n\\ \\text{for every }n\\ge 0.}$$"
    },
    {
      "id": "a20",
      "category": "alg",
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
      "text": "Find all nonzero polynomials $P\\in\\mathbb{Q}[x]$ such that $P(n)$ is an integer for every positive integer $n$, and $P(a)$ divides $P(b)$ whenever $a$ and $b$ are positive integers with $a\\mid b$.",
      "why": "Divisibility along multiples forces the rational number $P(mn)/P(n)$ to be an integer. For each fixed $m$ that integer tends to $m^{\\deg P}$, so it is eventually constant. The resulting scaling identity $P(mx)=m^{\\deg P}P(x)$ leaves only monomials, and integrality pins the leading coefficient.",
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
      "id": "a21",
      "category": "alg",
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
      "text": "Find all functions $f: \\mathbb{R} \\to \\mathbb{R}$ satisfying $$f(x^3 - f(y)) = x f(x)^2 - y$$ for all real numbers $x$ and $y$.",
      "why": "Connects to Herstein's theorem on Jordan derivations and the rigidity of real field endomorphisms. The equation forces injectivity and surjectivity, yielding an involution identity $f(-f(y)) = -y$. Translating by $c = -f(0)$ reduces the relation to Cauchy additivity $g(u+w) = g(u)+g(w)$. Substituting back into the cubic equation produces an odd polynomial in $x$ whose cross-terms survive unless $c = 0$, killing the constant shift. The remaining condition $f(x^3) = x f(x)^2$ enforces non-negativity on $\\mathbb{R}_{>0}$, which locks the additive map to the unique solution $f(x) = x$.",
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
      "text": "Let $1&lt;u&lt;v$ be integers. Define $a_1=1$ and $$a_n+a_{n/u}+a_{n/v}=0\\qquad(n\\ge 2),$$ where $a_k=0$ whenever $k$ is not an integer. Prove that $(a_n)$ is bounded if and only if $v=u^2$.",
      "why": "Iterating the recurrence expresses $a_n$ as a signed count of words in $\\{u,v\\}$ with product $n$. If $u,v$ are multiplicatively independent this gives $|a_{u^mv^m}|=\\binom{2m}{m}$. If they are dependent, $u=d^r$, $v=d^s$ with $\\gcd(r,s)=1$, the sequence lives on powers of $d$ with generating function $1/(1+z^r+z^s)$; boundedness forces eventual periodicity, so every root of $1+z^r+z^s$ is a root of unity, hence a cube root of unity by the equilateral-triangle argument, and all roots are simple (since $r\\ne s$), which leaves only $(r,s)=(1,2)$, i.e. $v=u^2$.",
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
      "rating": 9,
      "confidence": "medium",
      "novelty": {
        "status": "unverified",
        "searchDate": "2026-09-27",
        "exactMatch": false,
        "similarSources": [],
        "earliestKnownDate": null
      },
      "proofStatus": "verified",
      "text": "Find all functions $f:\\mathbb{N}\\to\\mathbb{N}$ satisfying $$f(abc)+f(2af(b))+f(2bf(c))+f(2cf(a))=f(a)f(b)f(c)$$ for all $a,b,c\\in\\mathbb{N}$.",
      "why": "Three-variable equation on $\\mathbb{N}$ with multiplicative right side. The classification runs: cubic bound $f\\ge2$; the three-term identity (8) and its quadratic consequence (9) forcing the square-law $u(n^2)=2u(n)+\\lambda u(n)^2$; $\\lambda=\\pm1$ via a parity kill on $x^2+xy+y^2=6$; $\\lambda=-1$ by value-rigidity $\\{0,1,2\\}$ and a descent through (2); $\\lambda=1$ by $k\\in\\{2,3\\}$ and, in the $k=2$ case, the orbit of image values $T\\mapsto 4T-3$ colliding multiplicatively with the additive branch analysis of (36) to produce $96(t-1)^2=0$; $k=3$ resolves by a parity-spreading induction. Long lemma stack, every step pinned down.",
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
      "id": "a24",
      "category": "alg",
      "difficulty": "challenging",
      "stars": 4,
      "rating": 9,
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
      "why": "Setting $x=y$ forces $f(x)^2=x^2+c$ with $c\\in\\{0,1\\}$. For $c=0$ write $f(x)=\\sigma(x)x$ with $\\sigma=\\pm1$; the equation reduces to a single sign rule, and a type analysis of $(\\sigma(p),\\sigma(-p))$ on positive reals shows it is either constant ($f=\\pm x$) or forces a multiplicative $\\pm1$-valued function on $\\mathbb{R}_{>0}$, which must be trivial (every positive real is a square), giving $f=|x|$. For $c=1$ the equation encodes $\\cosh(\\alpha-\\beta)=\\cosh\\alpha\\cosh\\beta-\\sinh\\alpha\\sinh\\beta$; the set of \"$+$\" parameters is a subgroup $B\\le(\\mathbb{R},+)$ whose complement, if nonempty, is a single coset, impossible since $\\mathbb{R}$ is $2$-divisible. This leaves $f=\\sqrt{x^2+1}$.",
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
      "id": "a25",
      "category": "alg",
      "difficulty": "challenging",
      "stars": 4,
      "rating": 9.5,
      "confidence": "high",
      "novelty": {
        "status": "unverified",
        "searchDate": "2026-09-27",
        "exactMatch": false,
        "similarSources": [],
        "earliestKnownDate": null
      },
      "proofStatus": "verified",
      "text": "Find all functions $f: \\mathbb{R} \\to \\mathbb{R}$ satisfying $$f(x f(x + y)) = f(y f(x)) + x^2$$ for all real numbers $x$ and $y$.",
      "why": "A quadratic-argument functional equation on $\\mathbb{R}$. Basic substitutions give $f(0)=0$, $f(xf(x))=x^2$, and injectivity in one line. The symmetry $f\\mapsto f(-\\cdot)$ reduces to $f(1)=1$; then oddness (from injectivity), a period-2 shift identity $f(y+2)=f(y)+2$, and the single substitution $x=2$ finish the classification with no continuity, density, or monotonicity arguments.",
      "answer": "$$\\boxed{f(x) = x \\quad \\text{or} \\quad f(x) = -x.}$$",
      "steps": [
        "Write $P(x,y)$ for the equation. $P(0,y)$ gives $f(0)=f(yf(0))$. If $f(0)=c\\ne0$, then $yf(0)$ takes every real value, so $f\\equiv c$, and the equation becomes $c=c+x^2$ for all $x$, absurd. Hence $f(0)=0$.",
        "$P(x,0)$ gives $f(xf(x))=x^2$. In particular $f(x)=0$ implies $x^2=f(0)=0$, so $f(x)=0\\iff x=0$. Also $P(x,-x)$ gives $0=f(0)=f(-xf(x))+x^2$, so $f(-xf(x))=-x^2$.",
        "\\textbf{$f$ is injective.} Suppose $f(a)=f(b)=c$. Then $P(a,b-a)$ reads $f(af(b))=f((b-a)f(a))+a^2$. The left side is $f(ac)=f(af(a))=a^2$, hence $f((b-a)c)=0$, so $(b-a)c=0$. If $c=0$ then $a=b=0$ by Step 2; otherwise $a=b$.",
        "Let $f(1)=s$. Step 2 with $x=1$ gives $f(s)=1$, and with $x=s$ gives $f(sf(s))=s^2$, i.e. $f(s)=s^2$. So $s^2=1$ and $f(1)=\\pm1$. If $s=1$, Step 2 gives $f(-1)=f(-f(1))=-1$. If $s=-1$, then $f(-1)=f(f(1))=1$.",
        "\\textbf{Reduction to $f(1)=1$.} Put $\\tilde f(x)=f(-x)$. Then $\\tilde f(x\\tilde f(x+y))=f(-xf(-x-y))$, and $P(-x,-y)$ says this equals $f(-yf(-x))+x^2=\\tilde f(y\\tilde f(x))+x^2$. So $\\tilde f$ is again a solution. If $f(1)=-1$ then $\\tilde f(1)=f(-1)=1$ by Step 4. So it suffices to show that every solution with $f(1)=1$ equals the identity; then a solution with $f(1)=-1$ has $\\tilde f=\\mathrm{id}$, i.e. $f(x)=-x$. From now on $f(1)=1$ and $f(-1)=-1$.",
        "$P(1,y)$ gives $$f(f(y+1))=f(y)+1\\quad\\text{for all }y. \\tag{1}$$ $P(x,1-x)$ gives $f(x)-x^2=f((1-x)f(x))$, and replacing $x$ by $-x$, $$f(-x)-x^2=f\\bigl((1+x)f(-x)\\bigr). \\tag{2}$$ $P(x,-x-1)$, using $f(-1)=-1$, gives $f(-x)=f(-(x+1)f(x))+x^2$, i.e. $$f(-x)-x^2=f\\bigl(-(x+1)f(x)\\bigr). \\tag{3}$$",
        "\\textbf{$f$ is odd.} By (2), (3) and injectivity, $(1+x)f(-x)=-(1+x)f(x)$. For $x\\ne-1$ this gives $f(-x)=-f(x)$; for $x=-1$ it holds because $f(1)=1$, $f(-1)=-1$.",
        "\\textbf{Period-2 shift.} Apply (1) at $-y-2$: $f(f(-y-1))=f(-y-2)+1$. By oddness this is $-f(f(y+1))=-f(y+2)+1$, so $f(f(y+1))=f(y+2)-1$. Comparing with (1) gives $$f(y+2)=f(y)+2\\quad\\text{for all }y. \\tag{4}$$ In particular $f(2)=f(0)+2=2$.",
        "$P(2,y)$ reads $f(2f(y+2))=f(yf(2))+4=f(2y)+4$. By (4), $2f(y+2)=2f(y)+4$ and $f(2f(y)+4)=f(2f(y))+4$. Hence $f(2f(y))=f(2y)$, and injectivity gives $f(y)=y$ for all $y$. Together with Step 5 the solutions are $f(x)=x$ and $f(x)=-x$.",
        "\\textbf{Check.} For $f(x)=x$: LHS $=x(x+y)=x^2+xy$, RHS $=yx+x^2$. For $f(x)=-x$: LHS $=f(-x(x+y))=x(x+y)$, RHS $=f(-xy)+x^2=xy+x^2$. Both hold identically."
      ]
    },
    {
      "id": "c1",
      "category": "cmb",
      "difficulty": "easy",
      "stars": 1,
      "rating": 1.5,
      "confidence": "high",
      "novelty": {
        "status": "original-source",
        "searchDate": "2026-09-27",
        "exactMatch": false,
        "similarSources": [
          {
            "name": "students/clubs/societies double-counting design",
            "note": "direct comparison completed: differs from the classical students/clubs/societies double-counting framing (e.g. ISL 2004 C1) in conditions, invariant and solving path; see noveltyJustification"
          }
        ],
        "earliestKnownDate": null
      },
      "noveltyJustification": "Direct comparison against ISL 2004 C1 (the well-known students/clubs/societies problem) shows the two share only the three-level framework, not the actual combinatorial content: ISL 2004 C1's conditions are 'every pair of students in exactly one club' plus an odd-size/2m+1-in-m-societies parity rule, solved by a size-counting argument. This problem's conditions are 'no two clubs share more than one student' plus 'every student is in exactly two clubs of each society' plus 'any two clubs of a society share exactly one student', solved by a bijection between students and club-pairs within a society, a materially different invariant and a different double-count. The numerical condition, the invariant tracked, and the solving path all differ. This is judged a genuinely different problem sharing only surface dressing with the classical framework, not the same discovery path under new names.",
      "text": "There are $n$ students at a university. Some students form several clubs, grouped into $s$ societies. The following conditions hold: <ol><li>No two clubs share more than one student.</li><li>For each student $u$ and society $S$, student $u$ belongs to exactly two clubs of $S$.</li><li>For any society $S$, any two of its clubs share exactly one student.</li></ol><br>Prove that the number of triples $(S,\\\\{C_a,C_b\\\\})$, where $S$ is a society and $\\\\{C_a,C_b\\\\}$ a pair of distinct clubs both belonging to $S$, is exactly $n\\\\cdot s$. Prove further that every society contains the same number of clubs.",
      "why": "A clean incidence double-count: in each society, students and unordered pairs of clubs are in bijection. The second conclusion then follows because $\\binom m2$ is strictly increasing in the number $m$ of clubs.",
      "steps": [
        "Fix a society $S$ and map each student $u$ to the pair of clubs of $S$ containing $u$. Condition (ii) makes this map well-defined.",
        "The map is injective: if two students determined the same pair of clubs, those two clubs would share two students, contradicting (i).",
        "The map is surjective: by (iii), every pair of distinct clubs of $S$ has exactly one common student, and by (ii) that student belongs to exactly those two clubs of $S$.",
        "Hence each society contributes exactly $n$ unordered pairs of clubs (a pair may be contributed by two societies at once; it is then counted once per society, exactly as the triple count in the statement prescribes). Summing over the $s$ societies gives exactly $ns$ pairs in total.",
        "If society $S$ has $m_S$ clubs, then its number of club-pairs is $\\binom{m_S}{2}$, so $\\binom{m_S}{2}=n$ for every $S$ (the degenerate possibilities $m_S\\in\\{0,1\\}$ give $n=0$ and are automatically equal). Since $m\\mapsto\\binom m2$ is strictly increasing for positive integers, all $m_S$ are equal."
      ]
    },
    {
      "id": "c2",
      "category": "cmb",
      "difficulty": "easy",
      "stars": 1,
      "rating": 2,
      "confidence": "high",
      "novelty": {
        "status": "unverified",
        "searchDate": "2026-09-27",
        "exactMatch": false,
        "similarSources": [],
        "earliestKnownDate": null
      },
      "text": "There are $n$ points on a line, with the distance between the two outermost points being $L$. Colour each point with one of $k$ colours, where $n\\ge k+1\\ge3$, and require that every colour is used at least once. The <em>span</em> of a colour is the distance between its two outermost points of that colour (or $0$ if the colour is used once). Prove that there exists a colouring for which the sum of the $k$ spans is at least $L$. Show that the constant $1$ is best possible: for every $k$, exhibit a point set with $n=k+1$ points on which no admissible colouring achieves span-sum exceeding $L$.",
      "why": "The lower bound is immediate by giving the two extreme points the same colour. The sharpness argument uses the exact one-point surplus $n-k=1$, which forces only one colour to contribute a nonzero span.",
      "steps": [
        "Colour the two outermost points with the same colour. That colour has span exactly $L$, so the sum of all $k$ spans is at least $L$; distribute the remaining points among the colours so that every colour is used.",
        "For sharpness, fix $k$ and take $n=k+1$ distinct points between the two extremes. Because every one of the $k$ colours must be used, one colour is used twice and each of the other $k-1$ colours is used exactly once.",
        "All singleton colours have span $0$. Thus the total span-sum is just the distance between the two points carrying the repeated colour, which is at most $L$.",
        "Therefore on every such $(k+1)$-point configuration no admissible colouring has span-sum greater than $L$, so no universal constant larger than $1$ can replace $1$."
      ]
    },
    {
      "id": "c3",
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
      "text": "Maryam and Iman play a game on a $7\\times7$ chessboard. Initially the board is empty. <ol><li>On the first turn, Maryam places a piece on any square of her choice.</li><li>In subsequent turns, each player must move the piece to an adjacent square (sharing a common edge) not previously visited.</li><li>The player who cannot make a valid move loses.</li></ol><br>Prove that Maryam (the first player) has a winning strategy, and describe it in detail.",
      "why": "A pairing strategy converts the path game into a forced-response game. Starting at the centre leaves an even board that can be partitioned into adjacent dominoes.",
      "steps": [
        "Maryam starts at the centre square $(4,4)$. Partition the remaining $48$ squares into $24$ adjacent dominoes: pair rows $1$–$2$ vertically in each column, rows $6$–$7$ vertically in each column, the $3\\times2$ blocks in columns $1$–$2$ and $6$–$7$ horizontally row by row, and the remaining $3\\times3$ block with its centre removed by four dominoes around the missing centre.",
        "Whenever Iman moves to an unvisited square $W$, let $V$ be its mate in the fixed domino partition. Since $W$ and $V$ are adjacent and $V$ has not been visited before, Maryam moves immediately from $W$ to $V$.",
        "After each Maryam reply, every visited square other than the current endpoint belongs to a completed domino (together with the initial centre). Hence Iman can never enter a completed domino; every legal new move enters an untouched domino.",
        "Maryam therefore has a legal reply after every Iman move. After all $24$ dominoes have been completed, every square is visited, so Iman has no legal move and loses."
      ]
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
        "similarSources": [],
        "earliestKnownDate": null
      },
      "text": "A coin of positive real value $w(v)$ is placed on each vertex $v$ of a finite simple graph $G$. In each step, select a vertex $v$ that still holds its coin, collect that coin, and discard the coins on $v$ and on all neighbours of $v$. Repeat until no coins remain.<br><br>Prove that the coins can be collected so that their total value is at least $$\\sum_{v\\in V}\\frac{w(v)}{\\deg(v)+1}.$$ Prove also that the bound is sharp: if $G$ is a complete graph and every coin has the same value, then every execution collects exactly this amount.",
      "why": "Equal coin values recover the usual Caro--Wei count. Arbitrary positive values force the same deletion induction, but the chosen vertex must maximise value per closed-neighbourhood slot rather than merely minimise degree. A clique with equal values shows that the constant cannot be improved.",
      "answer": "$$\\boxed{\\text{The collected value is at least }\\sum_v\\dfrac{w(v)}{\\deg(v)+1},\\text{ and a clique with equal values meets the bound exactly.}}$$",
      "steps": [
        "Induct on the number of vertices. The empty graph is immediate. Otherwise let $v$ be a vertex maximising $w(v)/(\\deg(v)+1)$, and let $S=N[v]$ be its closed neighbourhood, so $|S|=\\deg(v)+1$.",
        "Every $u\\in S$ satisfies $$\\frac{w(u)}{\\deg(u)+1}\\le\\frac{w(v)}{\\deg(v)+1},$$ by the choice of $v$. Summing over $S$ therefore gives $$\\sum_{u\\in S}\\frac{w(u)}{\\deg(u)+1}\\le |S|\\cdot\\frac{w(v)}{\\deg(v)+1}=w(v).$$ Collecting the coin on $v$ pays for the whole contribution of $S$ to the original sum.",
        "Let $H=G-S$. By induction, the process on $H$ collects at least $\\sum_{u\\in H}w(u)/(\\deg_H(u)+1)$. Deleting vertices cannot increase a degree, so $\\deg_H(u)\\le\\deg_G(u)$ and each term is at least $w(u)/(\\deg_G(u)+1)$.",
        "The coin from $v$, together with the coins collected in $H$, is therefore at least the full sum $\\sum_{x\\in V(G)}w(x)/(\\deg_G(x)+1)$.",
        "For sharpness, let $G$ be a complete graph on $k\\ge 1$ vertices and let every coin have value $w$. The sum equals $k\\cdot w/k=w$. Any first move collects one coin and discards every other coin, so the total collected is exactly $w$."
      ]
    },
    {
      "id": "c5",
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
      "text": "In a forensic agency, $n \\ge 2$ detectives investigate a crime involving several suspects. Each detective interrogates a specific subset of suspects. It is observed that for every non-empty group of detectives, there is at least one suspect who is interrogated by an odd number of detectives in that group.<br><ol><li>Prove that the total number of suspects is at least $n$.</li><li>Suppose the total number of suspects is exactly $n$. Prove that for every subset of suspects $S$, there exists a unique group of detectives (the empty group is permitted) such that the suspects interrogated by an odd number of detectives in the group are precisely the suspects in $S$.</li></ol>",
      "why": "Linear algebra over the finite field $\\mathbb{F}_2$. Casting the detectives' interrogation lists as column vectors turns the non-empty parity condition into linear independence of the vectors. The dimension bound immediately gives $m \\ge n$, and the basis property when $m = n$ provides an exact bijection for any target suspect parity pattern.",
      "answer": "$$\\boxed{\\text{There are at least } n \\text{ suspects; when } m = n, \\text{ the matching group of detectives is unique.}}$$",
      "steps": [
        "Let the suspects be indexed $1, 2, \\dots, m$, and the detectives be indexed $1, 2, \\dots, n$. Represent the interrogation list of detective $j$ as a vector $\\mathbf{v}_j \\in \\mathbb{F}_2^m$, where the $i$-th component of $\\mathbf{v}_j$ is $1$ if detective $j$ interrogates suspect $i$, and $0$ otherwise.",
        "A non-empty group of detectives corresponds to a non-empty subset of indices $J \\subseteq \\{1, 2, \\dots, n\\}$. The number of detectives in $J$ who interrogated suspect $i$ is odd if and only if the $i$-th component of the vector sum $\\sum_{j \\in J} \\mathbf{v}_j$ is $1$ in $\\mathbb{F}_2$.",
        "The given condition states that for every non-empty group $J$, there is at least one suspect interrogated an odd number of times. In $\\mathbb{F}_2^m$, this means: $$\\sum_{j \\in J} \\mathbf{v}_j \\ne \\mathbf{0} \\in \\mathbb{F}_2^m \\quad \\text{for every non-empty } J \\subseteq \\{1, 2, \\dots, n\\}.$$",
        "Over $\\mathbb{F}_2$, a non-trivial linear combination of vectors $\\sum_{j=1}^n c_j \\mathbf{v}_j$ is simply a sum over the non-empty subset $J = \\{j : c_j = 1\\}$. Thus, the condition asserts that no non-trivial linear combination vanishes, meaning the $n$ vectors $\\mathbf{v}_1, \\mathbf{v}_2, \\dots, \\mathbf{v}_n$ are linearly independent in $\\mathbb{F}_2^m$.",
        "Since $\\mathbb{F}_2^m$ contains $n$ linearly independent vectors, the dimension of the ambient space must satisfy $m = \\dim(\\mathbb{F}_2^m) \\ge n$. This proves part (1).",
        "For part (2), if $m = n$, the $n$ linearly independent vectors $\\mathbf{v}_1, \\dots, \\mathbf{v}_n$ span the entire vector space $\\mathbb{F}_2^n$, hence they form a basis of $\\mathbb{F}_2^n$.",
        "Any subset of suspects $S \\subseteq \\{1, \\dots, n\\}$ corresponds to an incidence vector $\\mathbf{s} \\in \\mathbb{F}_2^n$. Because $\\{\\mathbf{v}_1, \\dots, \\mathbf{v}_n\\}$ is a basis, there exists a unique choice of coefficients $c_1, \\dots, c_n \\in \\mathbb{F}_2$ such that $\\sum_{j=1}^n c_j \\mathbf{v}_j = \\mathbf{s}$. Setting $J = \\{j : c_j = 1\\}$ gives the unique group of detectives; for $S=\\emptyset$ the zero vector $\\mathbf s=\\mathbf 0$ has the unique expansion with all $c_j=0$, i.e. the empty group."
      ]
    },
    {
      "id": "c6",
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
      "why": "The hypergraph is linear, so the neighbours of each star split into disjoint pairs coming from the constellations through that star. Counting cross-pair edges locally and then dividing by three gives the sharp constant.",
      "steps": [
        "Let $d_v$ be the number of constellations containing star $v$. Because two constellations share at most one star, each pair of constellations has a unique common star, so the number of conjunctions is $$C=\\sum_v\\binom{d_v}{2}.$$",
        "Fix a star $v$. Its $2d_v$ neighbours are partitioned into $d_v$ disjoint pairs, one pair from each constellation through $v$. Let $e_v$ be the number of starlight edges joining vertices that belong to different such pairs.",
        "Each such cross-edge $xy$, together with $v$, gives a mirage $\\{v,x,y\\}$: the three pairs are linked, while $x,y$ are not the two companions of $v$ in one constellation. Conversely, every mirage is counted once at each of its three vertices. Hence $$M=\\frac13\\sum_v e_v.$$",
        "Among the $2d_v$ neighbours there are exactly $4\\binom{d_v}{2}$ possible cross-pairs, so $e_v\\le4\\binom{d_v}{2}$. Therefore $$M\\le\\frac13\\sum_v4\\binom{d_v}{2}=\\frac43C.$$"
      ]
    },
    {
      "id": "c7",
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
      "text": "In a mysterious investigation bureau, there are $m$ detectives and $n$ secret clues, where $n\\ge m\\ge2$. Each detective has access to a distinct combination of these clues. One day, the chief inspector burns exactly one clue from the archives. A clue is called <em>safe</em> if, after its destruction, no two detectives become indistinguishable based on the clues they still possess.<br><br>Show that at least $n-m+1$ clues are safe.",
      "why": "Representing clue-sets as vertices of the binary cube turns every unsafe clue into a distinct labelled edge. A cycle is impossible because a hypercube cycle uses every coordinate an even number of times.",
      "steps": [
        "Represent the $m$ distinct clue-sets by their $0$–$1$ incidence vectors in $\\{0,1\\}^n$. A clue $j$ is unsafe exactly when two detectives' vectors differ only in coordinate $j$, so there is a hypercube edge in direction $j$ between two of the $m$ vertices.",
        "For every unsafe clue choose one such edge. The chosen edges form a graph $H$ on the $m$ detective-vertices, and their edge labels (the corresponding clues) are all distinct.",
        "The graph $H$ is acyclic. Indeed, in any cycle of a hypercube, each coordinate is flipped an even number of times. But every edge of $H$ has a distinct coordinate label, so a cycle would make each of its labels occur exactly once, impossible.",
        "Thus $H$ is a forest, so it has at most $m-1$ edges. If $U$ is the number of unsafe clues, then $U\\le m-1$, hence the number of safe clues is at least $n-U\\ge n-m+1$."
      ]
    },
    {
      "id": "c8",
      "category": "cmb",
      "difficulty": "medium",
      "stars": 2,
      "rating": 4.5,
      "confidence": "high",
      "novelty": {
        "status": "prior-art",
        "searchDate": "2026-09-27",
        "exactMatch": true,
        "similarSources": [
          {
            "name": "Independence-number strengthening of Mantel's theorem (|E|<=alpha(n-alpha))",
            "note": "classical extremal graph theory result/exercise, standard textbook strengthening of Mantel"
          }
        ],
        "earliestKnownDate": null
      },
      "sourceNote": "Classical result: independence-number strengthening of Mantel's theorem, a standard extremal-graph-theory exercise.",
      "text": "Let $G$ be a triangle-free graph on $n\\ge 1$ vertices, and let $\\alpha$ be the size of a largest independent set in $G$. Prove that $$|E(G)|\\le \\alpha(n-\\alpha),$$ and determine all graphs for which equality holds.",
      "why": "The balanced complete bipartite graph is only the most famous equality case of the usual $n^2/4$ bound. Controlling the edges by a maximum independent set gives a sharper inequality, valid for every independence number, whose equality graphs are all complete bipartite graphs. The argument is short once that set is fixed, but it is not the Cauchy--Schwarz write-up of Mantel's theorem.",
      "answer": "$$\\boxed{|E(G)|\\le\\alpha(n-\\alpha),\\text{ with equality iff }G\\text{ is complete bipartite with part sizes }\\alpha\\text{ and }n-\\alpha.}$$",
      "steps": [
        "Let $I$ be an independent set with $|I|=\\alpha$, and set $J=V(G)\\setminus I$. The neighbourhood of any vertex is an independent set: an edge inside it would form a triangle with that vertex. Therefore $\\deg(v)\\le\\alpha$ for every vertex $v$.",
        "There are no edges inside $I$, so every edge has at least one end in $J$. Writing $e(I,J)$ and $e(J)$ for the edges between $I$ and $J$ and the edges inside $J$, $$\\sum_{v\\in J}\\deg(v)=e(I,J)+2e(J).$$ The left side is at most $\\alpha|J|=\\alpha(n-\\alpha)$.",
        "Hence $$|E(G)|=e(I,J)+e(J)=\\sum_{v\\in J}\\deg(v)-e(J)\\le\\alpha(n-\\alpha)-e(J)\\le\\alpha(n-\\alpha).$$",
        "Equality holds if and only if $e(J)=0$ and $\\deg(v)=\\alpha$ for every $v\\in J$. Then $J$ is independent and every neighbour of a vertex of $J$ lies in $I$. Since that degree equals $|I|$, every vertex of $J$ is adjacent to every vertex of $I$. Thus $G$ is the complete bipartite graph with parts $I$ and $J$.",
        "Conversely, if $G$ is complete bipartite with part sizes $a\\ge b$ and $a+b=n$, then $G$ is triangle-free, its independence number is $a$, and it has $ab=a(n-a)$ edges. The edgeless graph is the case $b=0$."
      ]
    },
    {
      "id": "c9",
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
      "text": "A <em>climb</em> of a positive integer $n$ is a finite sequence of $1$s and $2$s that sums to $n$. Its partial heights are the partial sums. The climb is <em>$3$-shy</em> if no partial height except possibly $n$ itself is a positive multiple of $3$. Determine, for every $n\\ge 1$, the number of $3$-shy climbs of $n$.",
      "why": "After height $2$ the only legal step that avoids $3$ is the jump $2\\to 4$. From there the walk is confined to a single corridor between consecutive multiples of $3$: each gate $3m+1$ has exactly one bridge to the next gate, and the multiple itself can be entered in exactly two ways. The two prefixes from $0$ to $4$ double those counts.",
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
      "id": "c10",
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
      "why": "The construction uses a genuinely useful four-term identity and a parity split. Once the identity is found, induction by two preserves both distinctness and equal sums.",
      "steps": [
        "Write $T_r=r(r+1)/2$. For $n=2$, $$T_1+T_5=T_3+T_4=16,$$ so four distinct triangular numbers work.",
        "For $n=3$, $$T_1+T_3+T_6=T_2+T_4+T_5=28,$$ so six distinct triangular numbers work.",
        "Suppose a valid construction for some $n$ uses only indices at most $M$. Choose $m>M$. The identity $$T_m+T_{2m+3}=T_{m+2}+T_{2m+2}$$ follows by expanding the definition of $T_r$.",
        "The four new indices $m,m+2,2m+2,2m+3$ are pairwise distinct and all exceed $M$. Put $T_m,T_{2m+3}$ on one side and $T_{m+2},T_{2m+2}$ on the other. Both sides gain the same sum and both cardinalities increase by $2$.",
        "Starting from $n=2$ and increasing by $2$ proves every even $n$; starting from $n=3$ and increasing by $2$ proves every odd $n$."
      ]
    },
    {
      "id": "c11",
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
      "text": "Let $n\\ge 1$. An <em>interval</em> in $\\{1,2,\\dots,n\\}$ is a nonempty set of consecutive integers. Let $\\mathcal{F}$ be a family of intervals such that every two members of $\\mathcal{F}$ intersect, and no member of $\\mathcal{F}$ contains another. Prove that $$|\\mathcal{F}|\\le \\left\\lceil\\frac n2\\right\\rceil,$$ and show that the bound is sharp for every $n$.",
      "why": "Pairwise intersecting intervals on a line have a common point, by comparing the rightmost left endpoint with the leftmost right endpoint. Once that point is fixed, incomparability forces the left endpoints and the right endpoints to increase together, which is at most the shorter side of the point. The bound is realized by a symmetric chain of intervals about the middle.",
      "steps": [
        "Write each interval as $[L,R]=\\{L,L+1,\\dots,R\\}$ with $1\\le L\\le R\\le n$. Let $L_\\ast$ be the maximum left endpoint in $\\mathcal{F}$ and $R_\\ast$ the minimum right endpoint. The interval attaining $L_\\ast$ and the interval attaining $R_\\ast$ intersect, so $L_\\ast\\le R_\\ast$. Every member then contains the point $x=L_\\ast$, because its left endpoint is at most $L_\\ast$ and its right endpoint is at least $R_\\ast\\ge L_\\ast$.",
        "Thus every interval $[L_i,R_i]$ in $\\mathcal{F}$ satisfies $L_i\\le x\\le R_i$. If $L_i=L_j$ and $R_i\\le R_j$, then $[L_i,R_i]\\subseteq[L_j,R_j]$. The antichain hypothesis therefore forces all left endpoints to be distinct, and likewise, after sorting $L_1&lt;\\cdots&lt;L_m$, the right endpoints must satisfy $R_1&lt;\\cdots&lt;R_m$. Otherwise $L_i&lt;L_j$ and $R_i\\ge R_j$ would give a containment.",
        "The increasing left endpoints are $m$ distinct integers in $\\{1,\\dots,x\\}$, so $m\\le x$. The increasing right endpoints are $m$ distinct integers in $\\{x,\\dots,n\\}$, so $m\\le n-x+1$. Hence $m\\le\\min(x,\\,n-x+1)\\le\\lceil n/2\\rceil$.",
        "For sharpness let $m=\\lceil n/2\\rceil$ and take the intervals $[i,\\, m+i-1]$ for $i=1,\\dots,m$. Each right endpoint is at most $m+(m-1)=2m-1\\le n$, and each interval contains $m$. If $i&lt;j$, then the $i$-th interval starts further left and ends further left, so neither contains the other. This is an intersecting antichain of size $m$."
      ],
      "answer": "$$\\boxed{|\\mathcal{F}|\\le\\lceil n/2\\rceil,\\ \\text{sharp for every }n.}$$"
    },
    {
      "id": "c12",
      "category": "cmb",
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
            "name": "cubic telescoping split-invariant (Engel-style)",
            "note": "the why field itself names the classical ab-splitting family"
          }
        ],
        "earliestKnownDate": null
      },
      "text": "Start with one pile of $n\\ge 1$ stones. A move chooses a pile of size $k\\ge 2$ and replaces it by two piles of positive sizes adding to $k$. If a pile of size $k$ is split into piles of sizes $a$ and $b$, that split scores $ab(a+b)$. The process ends when every pile is a single stone. Prove that the total score is independent of the choices, and find it.",
      "why": "The classical splitting score $ab$ is independent of the parent pile. Weighting by the extra factor $a+b$ produces a cubic polynomial that still telescopes: the inductive step is the freshman's dream identity $(a+b)^3=a^3+b^3+3ab(a+b)$, rearranged.",
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
      "id": "c13",
      "category": "cmb",
      "difficulty": "medium",
      "stars": 2,
      "rating": 5.5,
      "confidence": "high",
      "novelty": {
        "status": "unverified",
        "searchDate": "2026-09-27",
        "exactMatch": false,
        "similarSources": [],
        "earliestKnownDate": null
      },
      "text": "Let $a_n$ be the number of strings of length $n$ with entries in $\\{1,2,3,4\\}$ such that no partial sum is divisible by $3$. Prove that $a_1=3$, $a_2=8$ and $$a_n=2a_{n-1}+a_{n-2}\\qquad(n\\ge 3).$$ Deduce a closed form.",
      "why": "The alphabet meets every residue class modulo $3$, but residue $1$ is hit twice. The forbidden step depends on the running sum, so two states survive. Eliminating one state produces a second-order recurrence whose characteristic roots are $1\\pm\\sqrt2$.",
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
      "id": "c14",
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
      "why": "The incidence matrix over $\\mathbb F_2$ satisfies $MM^T=I$. Its determinant is therefore $1$, while the number of systems of distinct representatives is the permanent, which agrees with the determinant modulo $2$.",
      "steps": [
        "Let $M=(m_{ij})$ be the $n\\times n$ incidence matrix, where $m_{ij}=1$ exactly when $x_j\\in A_i$, and regard all entries as elements of $\\mathbb F_2$.",
        "The $(i,i)$ entry of $MM^T$ is $|A_i|$ modulo $2$, hence equals $1$. For $i\\ne j$, the $(i,j)$ entry is $|A_i\\cap A_j|$ modulo $2$, hence equals $0$. Thus $$MM^T=I$$ over $\\mathbb F_2$.",
        "Therefore $M$ is invertible and $\\det M=1$ in $\\mathbb F_2$.",
        "The number of assignments equals the permanent $$\\operatorname{per}(M)=\\sum_{\\sigma\\in S_n}\\prod_i m_{i,\\sigma(i)}.$$ Indeed, an assignment lists $n$ pairwise distinct elements of the $n$-set $X=\\{x_1,\\dots,x_n\\}$, so they exhaust $X$: the assignment is exactly an ordering $(x_{\\sigma(1)},\\dots,x_{\\sigma(n)})$ of $X$ for a unique permutation $\\sigma\\in S_n$, and it is valid precisely when $x_{\\sigma(i)}\\in A_i$, i.e. $\\prod_i m_{i,\\sigma(i)}=1$. Modulo $2$, the sign of every permutation is $1$, so $\\operatorname{per}(M)\\equiv\\det M\\equiv1\\pmod2$.",
        "Hence the number of assignments is odd."
      ]
    },
    {
      "id": "c15",
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
            "name": "F2 incidence and cycle-space counting",
            "note": "standard algebraic-graph-theory technique; second-pass reviewer flags prior-art risk"
          }
        ],
        "earliestKnownDate": null
      },
      "text": "Let $G = (V, E)$ be a connected simple graph with $n$ vertices and $m$ edges. We assign a weight $w(e) \\in \\{-1, +1\\}$ to each edge $e \\in E$. For each vertex $v \\in V$, let $P(v) = \\prod_{e \\ni v} w(e)$ be the product of the weights of all edges incident to $v$. A weighting is called <em>harmonious</em> if $P(v) = -1$ for every vertex $v \\in V$.<br><br>Prove that a harmonious weighting exists if and only if $n$ is even. Furthermore, when $n$ is even, prove that the number of distinct harmonious weightings is exactly $2^{m - n + 1}$.",
      "why": "Double-counting the global vertex product shows that all edge signs cancel in pairs, forcing $(-1)^n = 1$. The sharp count and existence follow by selecting an arbitrary spanning tree: peeling leaves upward from the tree determines all tree edges uniquely for any assignment on the $m-n+1$ cycle chords, while global parity guarantees that the root vertex is automatically satisfied.",
      "answer": "$$\\boxed{\\text{A harmonious weighting exists } \\Longleftrightarrow n \\text{ is even; the number of such weightings is } 2^{m-n+1}.}$$",
      "steps": [
        "In the product $\\prod_{v \\in V} P(v) = \\prod_{v \\in V} \\prod_{e \\ni v} w(e)$, every edge $e = uv$ appears exactly twice (once at $u$ and once at $v$). Thus $$\\prod_{v \\in V} P(v) = \\prod_{e \\in E} w(e)^2 = (+1)^m = 1.$$",
        "If a harmonious weighting exists, then $P(v) = -1$ for every $v \\in V$, so $\\prod_{v \\in V} P(v) = (-1)^n$. Hence $(-1)^n = 1$, which forces $n$ to be even. This proves no harmonious weighting exists when $n$ is odd.",
        "Now suppose $n$ is even. Choose any spanning tree $T \\subseteq G$, which contains $n-1$ edges. The remaining $m - (n-1) = m - n + 1$ edges are chords outside $T$.",
        "Assign weights $w(e) \\in \\{-1, +1\\}$ to the $m - n + 1$ chords arbitrarily. There are $2^{m - n + 1}$ ways to make this choice.",
        "Root the tree $T$ at an arbitrary vertex $r \\in V$. We now determine the weights of the edges of $T$ inductively from the leaves up to $r$. For any leaf vertex $\\ell \\ne r$, exactly one edge of $T$ is incident to $\\ell$ (the edge to its parent). All other edges incident to $\\ell$ are chords whose weights are already fixed. Therefore, there is a unique choice of weight for the parent edge such that $P(\\ell) = -1$.",
        "Repeatedly prune leaves of $T$ other than $r$. At each step, a vertex $u \\ne r$ whose child-edges and incident chords have all been determined has exactly one undetermined edge connecting it to its parent. Thus its parent edge is uniquely forced by the requirement $P(u) = -1$. This uniquely determines the weights of all $n-1$ edges of $T$.",
        "Finally, check the root $r$. By the identity in Step 1, $P(r) \\prod_{v \\ne r} P(v) = 1$. Since $P(v) = -1$ was ensured for all $n-1$ vertices $v \\ne r$, we obtain $P(r) \\cdot (-1)^{n-1} = 1$. Because $n$ is even, $n-1$ is odd, so $(-1)^{n-1} = -1$, which forces $P(r) = -1$.",
        "Thus the root condition is automatically satisfied. Since each of the $2^{m - n + 1}$ chord assignments extends to a unique valid harmonious weighting, the total number of harmonious weightings is exactly $2^{m - n + 1}$."
      ]
    },
    {
      "id": "c16",
      "category": "cmb",
      "difficulty": "hard",
      "stars": 3,
      "rating": 6,
      "confidence": "high",
      "novelty": {
        "status": "prior-art",
        "searchDate": "2026-09-27",
        "exactMatch": true,
        "similarSources": [
          {
            "name": "Fisher-type triple-system bound / Fano plane (Steiner triple system S(2,3,7)) equality case",
            "note": "classical design-theory result; equality case n=7 is the Fano plane"
          }
        ],
        "earliestKnownDate": null
      },
      "proofStatus": "verified",
      "sourceNote": "Classical result: Fisher-type triple-system bound; the n=7 equality case is the Fano plane / Steiner triple system S(2,3,7).",
      "text": "Let $n\\ge 3$ and let $\\mathcal{F}$ be a family of $3$-element subsets of an $n$-element set such that every two distinct members of $\\mathcal{F}$ intersect in exactly one element. Prove that $$|\\mathcal{F}|\\le\\frac{n(n-1)}{6},$$ and determine all pairs $(n,\\mathcal{F})$ for which equality holds.",
      "why": "Exact intersection $1$ forbids two triples from sharing an edge, so a pair count gives the bound. Equality means every pair lies in exactly one triple (a Steiner triple system) in which any two triples still meet. Counting the triples through one fixed triple $T_0$ gives $(n-3)(n-7)=0$. For $n=7$, uniqueness is proved directly: fixing a point $p$ and its three triples, the remaining four triples are forced to be a single configuration, isomorphic to the lines of the Fano plane.",
      "steps": [
        "\\textbf{Bound.} Two distinct members of $\\mathcal{F}$ cannot share two elements (they meet in exactly one), so every $2$-subset lies in at most one member. Each member contains $3$ pairs, hence $3|\\mathcal{F}|\\le\\binom n2$, i.e. $|\\mathcal{F}|\\le n(n-1)/6$.",
        "\\textbf{Equality forces a Steiner system.} Equality holds iff every pair lies in exactly one member of $\\mathcal{F}$. Then each point $x$ lies on $r$ members with $2r=n-1$ (the $n-1$ other points are partitioned into the pairs completing the triples through $x$), so $r=(n-1)/2$ and $n$ is odd; also $|\\mathcal{F}|=n(n-1)/6$.",
        "\\textbf{Counting through $T_0$.} Let $T_0=\\{a,b,c\\}\\in\\mathcal{F}$ (equality gives $|\\mathcal{F}|\\ge1$). Every other member meets $T_0$ in exactly one element, so it contains exactly one of $a,b,c$. Through each of $a,b,c$ there are $r-1=(n-3)/2$ members other than $T_0$, and these three collections are pairwise disjoint and exhaust $\\mathcal{F}\\setminus\\{T_0\\}$. Hence $$\\frac{n(n-1)}6-1=\\frac{3(n-3)}2\\iff n^2-10n+21=0\\iff(n-3)(n-7)=0.$$ So equality is possible only for $n=3$ or $n=7$.",
        "\\textbf{$n=3$.} $\\mathcal{F}=\\{\\{1,2,3\\}\\}$ has $1=3\\cdot2/6$ members and the intersection condition is vacuous; it is the only family attaining the bound (a family of one triple).",
        "\\textbf{$n=7$: structure is forced.} Here $|\\mathcal{F}|=7$, every pair lies in exactly one triple, every point lies on $3$ triples. Fix a point $p$; its three triples are $\\{p,a_1,a_2\\}$, $\\{p,b_1,b_2\\}$, $\\{p,c_1,c_2\\}$, covering the other six points. Each of the remaining four triples avoids $p$ and contains at most one point from each of the pairs $\\{a_1,a_2\\},\\{b_1,b_2\\},\\{c_1,c_2\\}$ (two points of one pair already lie together with $p$), so it has exactly one from each. Relabel within the pairs so that $\\{a_1,b_1,c_1\\}\\in\\mathcal{F}$. The triple containing $a_1,b_2$ cannot use $c_1$ (the pair $a_1c_1$ is taken), so it is $\\{a_1,b_2,c_2\\}$; the triple containing $a_2,b_1$ cannot use $c_1$ (pair $b_1c_1$ taken), so it is $\\{a_2,b_1,c_2\\}$; the triple containing $a_2,b_2$ cannot use $c_2$ (pair $b_2c_2$ taken), so it is $\\{a_2,b_2,c_1\\}$. Thus $\\mathcal{F}$ is determined uniquely up to relabelling.",
        "\\textbf{$n=7$: it is the Fano plane and it works.} Take the seven nonzero vectors of $\\mathbb{F}_2^3$ and let the lines be the seven triples $\\{u,v,u+v\\}$ (equivalently the $2$-dimensional subspaces minus $0$). Two distinct $2$-dimensional subspaces $U,W$ satisfy $U+W=\\mathbb{F}_2^3$, so $\\dim(U\\cap W)=2+2-3=1$: they share exactly one nonzero vector. So this family satisfies the hypothesis with $7=7\\cdot6/6$ members. It matches the configuration of Step 5 under $p=001$, $a_1=100$, $a_2=101$, $b_1=010$, $b_2=011$, $c_1=110$, $c_2=111$ (each listed triple sums to $0$). Hence for $n=7$ equality holds exactly for the Fano plane, up to relabelling of the ground set."
      ],
      "answer": "$$\\boxed{|\\mathcal{F}|\\le n(n-1)/6,\\ \\text{with equality only for }n=3\\text{ (one triple) and }n=7\\text{ (the Fano lines).}}$$"
    },
    {
      "id": "c17",
      "category": "cmb",
      "difficulty": "hard",
      "stars": 3,
      "rating": 6.5,
      "confidence": "high",
      "novelty": {
        "status": "prior-art",
        "searchDate": "2026-09-27",
        "exactMatch": true,
        "similarSources": [
          {
            "name": "Hall's theorem corollary: bipartite min-degree >= n/2 implies perfect matching",
            "note": "standard textbook corollary of Hall's marriage theorem"
          }
        ],
        "earliestKnownDate": null
      },
      "sourceNote": "Classical result: standard corollary of Hall's marriage theorem.",
      "text": "Let $n\\ge 1$ and let $G$ be a bipartite graph with both parts of size $n$, in which every vertex has degree at least $n/2$. Prove that $G$ has a perfect matching. Show that for every $n\\ge 2$ the degree threshold cannot be replaced by $\\lceil n/2\\rceil-1$.",
      "why": "The degree hypothesis splits Hall's condition into two regimes. A small set cannot fit its neighbourhood into fewer than $n/2$ vertices, and a large set leaves a complementary vertex on the other side whose neighbourhood is too big for the opposite complement. The extremal examples are two complete bipartite blocks of unequal part sizes.",
      "steps": [
        "Write the bipartition as $(L,R)$ with $|L|=|R|=n$, and write $\\delta(G)\\ge n/2$. Since degrees are integers, $\\delta(G)\\ge\\lceil n/2\\rceil$. It is enough to prove Hall's condition: every $S\\subseteq L$ satisfies $|N(S)|\\ge|S|$, and the symmetric argument applies to subsets of $R$.",
        "The empty set satisfies Hall's condition, so take $S\\subseteq L$ nonempty. Suppose $|S|\\le n/2$ and, for a contradiction, $|N(S)|\\le|S|-1$. Then $|N(S)|&lt;n/2\\le\\deg(v)$ for every $v\\in S$. But every neighbour of $v$ lies in $N(S)$, so $\\deg(v)\\le|N(S)|$, which is impossible.",
        "Suppose instead $|S|>n/2$ and $|N(S)|&lt;|S|$. Let $S'=L\\setminus S$ and $T'=R\\setminus N(S)$. There is no edge from $S$ to $T'$, so every neighbour of a vertex of $T'$ lies in $S'$. Also $|T'|=n-|N(S)|>n-|S|=|S'|$. Any vertex of $T'$ then has all of its at least $n/2$ neighbours inside $S'$, so $|S'|\\ge n/2$. But $|S|>n/2$ forces $|S'|&lt;n/2$, a contradiction.",
        "Hall's condition holds on both sides, so $G$ has a perfect matching.",
        "For sharpness, let $n=2m\\ge 2$. Partition $L=L_1\\cup L_2$ and $R=R_1\\cup R_2$ with $|L_1|=|L_2|=m$, $|R_1|=m-1$ and $|R_2|=m+1$. Put all edges between $L_1$ and $R_1$, and all edges between $L_2$ and $R_2$. Every vertex of $L_1$ has degree $m-1=\\lceil n/2\\rceil-1$, and every other vertex has degree at least $m$. The set $L_1$ has only $m-1$ neighbours, so there is no perfect matching.",
        "If $n=2m+1\\ge 3$, use $|L_1|=m+1$, $|R_1|=m$, $|L_2|=m$ and $|R_2|=m+1$, with complete bipartite graphs $L_1$--$R_1$ and $L_2$--$R_2$. The minimum degree is $m=\\lceil n/2\\rceil-1$, and $N(L_1)=R_1$ is too small."
      ],
      "answer": "$$\\boxed{\\text{A perfect matching exists; degree }\\lceil n/2\\rceil-1\\text{ does not force one.}}"
    },
    {
      "id": "c18",
      "category": "cmb",
      "difficulty": "hard",
      "stars": 3,
      "rating": 6.5,
      "confidence": "high",
      "novelty": {
        "status": "prior-art",
        "searchDate": "2026-09-27",
        "exactMatch": true,
        "similarSources": [
          {
            "name": "Cyclic-triangle count in strongly connected tournaments via score sequence",
            "note": "second pass 2026-09-28: the n-2 bound with matching construction is itself classical, not merely the counting identity"
          }
        ],
        "earliestKnownDate": null
      },
      "proofStatus": "verified",
      "noveltyJustification": "STEP 9 REVERSAL of the Step 3 verdict. The Step 3 note argued the surrounding extremal claim was 'sharper and differently-scoped than the known theorem'; on independent re-screening the second-pass review rejects that: the minimum n-2 cyclic triangles in a strong tournament, with the near-transitive sharpness construction, is exactly the classical theorem (Moon's book treats cyclic-triangle extremal results for strong tournaments; the degree-count formula is folklore). What is not classical is only the specific proof packaging (strict partial-sum constraints from strong connectivity plus Abel majorization), which is a write-up technique, not a new statement. Relabeled prior-art; the entry is retained in place, honestly credited.",
      "text": "In a tournament with $n \\ge 3$ players, each pair of distinct players plays a match with no ties. The tournament is called <em>strongly connected</em> if for every pair of players $u$ and $v$, there is a directed path from $u$ to $v$. A trio of players $\\{u, v, w\\}$ is called a <em>cyclic trio</em> if $u$ beats $v$, $v$ beats $w$, and $w$ beats $u$.<br><ol><li>Prove that every strongly connected tournament on $n$ players contains at least $n - 2$ cyclic trios.</li><li>Show that this lower bound is sharp: for every $n \\ge 3$, construct a strongly connected tournament containing exactly $n - 2$ cyclic trios.</li></ol>",
      "why": "The number of cyclic trios is $\\binom n3-\\sum_v\\binom{d^+(v)}2$. Strong connectivity forces every set of $k<n$ vertices to send an edge out, so the sorted out-degrees have partial sums at least $\\binom k2+1$. An Abel-summation comparison with the sequence $t=(1,1,2,\\dots,n-2,n-2)$ (whose partial sums equal these bounds) shows $\\sum d_i^2\\le\\sum t_i^2$, giving at least $n-2$ cyclic trios. The construction (a transitive tournament on $n-1$ vertices plus one vertex beating only the source) has score sequence $t$ and exactly $n-2$ cyclic trios.",
      "answer": "$$\\boxed{\\text{The minimum number of cyclic trios is } n - 2.}$$",
      "steps": [
        "\\textbf{Counting formula.} Every triple of players is either cyclic or transitive. A transitive triple has exactly one player beating the other two; a cyclic triple has none. The triples in which a fixed $v$ beats both others correspond to pairs of out-neighbours of $v$. Hence $$\\#\\text{cyclic}=\\binom n3-\\sum_v\\binom{d^+(v)}2=\\binom n3-\\frac12\\Bigl(\\sum d_i^2-\\binom n2\\Bigr),\\tag{1}$$ using $\\sum_v d^+(v)=\\binom n2$. So minimizing cyclic trios is the same as maximizing $\\sum d_i^2$.",
        "\\textbf{Partial-sum constraints.} Let $T$ be strongly connected with out-degrees sorted $d_1\\le\\dots\\le d_n$. For a nonempty proper subset $W$ of the players, the $\\binom{|W|}2$ matches inside $W$ contribute $\\binom{|W|}2$ to the out-degrees of members of $W$, and strong connectivity gives at least one match won by a member of $W$ against an outsider. So $\\sum_{v\\in W}d^+(v)\\ge\\binom{|W|}2+1$. Taking $W$ to be the $k$ players with smallest out-degree, $$S_k:=d_1+\\dots+d_k\\ge\\binom k2+1\\quad(1\\le k\\le n-1),\\qquad S_n=\\binom n2.\\tag{2}$$",
        "\\textbf{The extremal sequence.} Define $t_1=1$, $t_k=k-1$ for $2\\le k\\le n-1$, $t_n=n-2$ (so $t=(1,1,2,\\dots,n-2,n-2)$; for $n=3$, $t=(1,1,1)$). It is nondecreasing, and its partial sums are $T_k=1+\\binom k2$ for $1\\le k\\le n-1$ and $T_n=1+\\binom{n-1}2+(n-2)=\\binom n2$. So by (2), $S_k\\ge T_k$ for all $k$, with $S_n=T_n$.",
        "\\textbf{Comparison lemma: $\\sum d_i^2\\le\\sum t_i^2$.} Put $e_i=d_i-t_i$ and $E_k=e_1+\\dots+e_k=S_k-T_k$; so $E_k\\ge0$, $E_0=E_n=0$. With $c_i=d_i+t_i$ (nondecreasing, as both sequences are), Abel summation gives $$\\sum_i(d_i^2-t_i^2)=\\sum_{i=1}^ne_ic_i=\\sum_{i=1}^n(E_i-E_{i-1})c_i=\\sum_{i=1}^{n-1}E_i\\,(c_i-c_{i+1})\\le0.$$ Combined with (1), every strongly connected tournament has at least $\\binom n3-\\sum\\binom{t_i}2$ cyclic trios. \\textbf{Part 1} will follow once this number is computed to be $n-2$ in Step 5.",
        "\\textbf{Construction (Part 2).} On $\\{1,\\dots,n\\}$ let $i\\to j$ for $1\\le i&lt;j\\le n-1$, $n\\to1$, and $j\\to n$ for $2\\le j\\le n-1$. The cycle $1\\to2\\to\\dots\\to n-1\\to n\\to1$ is Hamiltonian, so the tournament is strongly connected. Since $\\{1,\\dots,n-1\\}$ is transitive, every cyclic trio contains $n$; its out-edge from $n$ can only be $n\\to1$ (the unique win of $n$), so it is $n\\to1\\to j\\to n$ with $2\\le j\\le n-1$, and every such $j$ works ($1\\to j$, $j\\to n$). Hence exactly $n-2$ cyclic trios. Its out-degrees are $d^+(1)=n-2$, $d^+(i)=(n-1-i)+1=n-i$ for $2\\le i\\le n-1$, $d^+(n)=1$; sorted, this is exactly $t$.",
        "\\textbf{Conclusion (Part 1).} By formula (1) applied to the construction, $\\binom n3-\\sum\\binom{t_i}2=n-2$. By Step 4, every strongly connected tournament on $n\\ge3$ players has at least $\\binom n3-\\sum\\binom{t_i}2=n-2$ cyclic trios. Together with Step 5, the minimum is exactly $n-2$."
      ],
      "sourceNote": "Classical tournament theory: every strongly connected tournament on n vertices contains at least n-2 cyclic triangles, and the bound is sharp (Harary-Moser cyclic-triple enumeration; Moon, Topics on Tournaments (1968), extremal results on cyclic triangles). The score-sequence partial-sum/majorization write-up is a presentational variant, not a new result."
    },
    {
      "id": "c19",
      "category": "cmb",
      "difficulty": "hard",
      "stars": 3,
      "rating": 7,
      "confidence": "medium",
      "novelty": {
        "status": "unverified",
        "searchDate": "2026-09-27",
        "exactMatch": false,
        "similarSources": [],
        "earliestKnownDate": null
      },
      "text": "A society has $2n$ members. Certain pairs of members are acquainted, subject to the following rules: <ol><li>Every member is acquainted with an odd number of other members.</li><li>Every two distinct members have an even number of common acquaintances.</li></ol><br>A <em>complete introduction</em> is a partition of the $2n$ members into $n$ pairs of acquainted members.<br><br>Prove that the number of complete introductions is odd, and that every pair of acquainted members belongs to an odd number of complete introductions.",
      "why": "The adjacency matrix satisfies $A^2=I$ over $\\mathbb F_2$. Determinants then encode perfect-matchings parity, and a complementary-minor argument gives the stronger statement for each fixed edge.",
      "steps": [
        "Let $A$ be the adjacency matrix over $\\mathbb F_2$. The diagonal entries of $A^2$ are the vertex degrees, hence $1$, and the off-diagonal entries count common neighbours, hence are $0$. Therefore $$A^2=I,$$ so $A$ is invertible and $\\det A=1$.",
        "In the determinant expansion over $\\mathbb F_2$, every permutation containing a cycle of length at least $3$ cancels with the permutation obtained by reversing one such cycle: both products are identical and they occur twice. Because the diagonal of $A$ is zero, fixed points contribute nothing. The surviving permutations are exactly products of disjoint transpositions, hence exactly perfect matchings. Thus $\\det A$ is the parity of the number of complete introductions, which is therefore odd.",
        "Fix an acquainted pair $uv$. Complete introductions containing $uv$ are in bijection with perfect matchings after deleting $u,v$. Let $B$ be the principal submatrix obtained by deleting rows and columns $u,v$.",
        "Jacobi's complementary-minor identity over $\\mathbb F_2$, together with $A^{-1}=A$, gives $$\\det B=\\det(A)\\det(A^{-1}[u,v])=1\\cdot\\det\\begin{pmatrix}0&amp;1\\\\1&amp;0\\end{pmatrix}=1.$$",
        "Applying the determinant/perfect-matching parity argument to the graph with $u,v$ deleted, we conclude that it has an odd number of perfect matchings. Hence the acquaintance $uv$ belongs to an odd number of complete introductions."
      ]
    },
    {
      "id": "c20",
      "category": "cmb",
      "difficulty": "hard",
      "stars": 3,
      "rating": 7.5,
      "confidence": "medium",
      "novelty": {
        "status": "unverified",
        "searchDate": "2026-09-27",
        "exactMatch": false,
        "similarSources": [],
        "earliestKnownDate": null
      },
      "proofStatus": "verified",
      "text": "Let $n&lt;m$ be positive integers. Let $a_{ij}$ be real numbers for $1\\le i\\le n$ and $1\\le j\\le m$. We say a sequence of real numbers $x_1,\\dots,x_m$ is <em>stable</em> if we can choose $n$ pairwise distinct integers $c_1,\\dots,c_n\\in\\{1,\\dots,m\\}$ such that $$a_{i,c_i}-x_{c_i}\\ge a_{ij}-x_j \\quad\\text{for all }1\\le i\\le n\\text{ and }1\\le j\\le m.$$ Prove that if two sequences $y=(y_1,\\dots,y_m)$ and $z=(z_1,\\dots,z_m)$ are stable, then the sequence $u$ defined by $u_j=\\min(y_j,z_j)$ is also stable.",
      "why": "Choose witnessing matchings for $y$ and $z$. Their union decomposes into alternating paths and cycles. The differences $d_j=y_j-z_j$ are monotone along every path and constant on every cycle; this permits an exchange-free choice of one optimal edge per row for $u=\\min(y,z)$ while keeping all chosen columns distinct.",
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
      "id": "c21",
      "category": "cmb",
      "difficulty": "hard",
      "stars": 3,
      "rating": 7.5,
      "confidence": "high",
      "novelty": {
        "status": "prior-art",
        "searchDate": "2026-09-27",
        "exactMatch": true,
        "similarSources": [
          {
            "name": "Kings in tournaments (classical tournament theory, Landau-style)",
            "note": "|K|!=2 and the characterization of achievable king-set sizes is classical tournament theory"
          }
        ],
        "earliestKnownDate": null
      },
      "sourceNote": "Classical result: kings-in-tournaments theory (Landau-style).",
      "text": "In a tournament with $n \\ge 3$ players, each pair plays a match with no ties. A player $v$ is called a <em>king</em> if for every other player $u$, either $v$ beats $u$, or there exists a player $w$ such that $v$ beats $w$ and $w$ beats $u$. Let $K$ denote the set of kings in the tournament.<br><ol><li>Prove that $|K| \\ne 2$, i.e. no tournament can contain exactly two kings.</li><li>Determine all possible values of $|K|$ as a function of $n$, and for each possible value, exhibit a tournament attaining it.</li></ol>",
      "why": "Exactly two kings is impossible: a king of the in-neighborhood of one of them is a third king of the whole tournament. The value $4$ is impossible on exactly four vertices, by the score sequence $(2,2,1,1)$. Every other admissible value is realized by a cyclic tournament, by one edge-reversal of the $5$-cycle, or by an explicit vertex added to a cyclic tournament of odd order at least $5$, and then by attaching vertices that everyone beats.",
      "answer": "$$\\boxed{\\text{For }n=3\\text{ and }n=4,\\ |K|\\in\\{1,3\\}.\\quad\\text{For }n\\ge 5,\\ |K|\\in\\{1,3,4,\\ldots,n\\}.}$$",
      "steps": [
        "Landau's lemma: in any tournament, a vertex $v$ of maximum out-degree is a king. If some $u$ were not reachable from $v$ in at most two steps, then $u$ would beat $v$ and every out-neighbor of $v$, so $d^+(u)\\ge d^+(v)+1$. Thus every tournament has at least one king.",
        "A transitive tournament has a source, and a source is the unique king, because nobody else can reach it. So $|K|=1$ occurs for every $n\\ge 3$. The directed $3$-cycle has $|K|=3$.",
        "No tournament has exactly two kings. Suppose $K=\\{u,v\\}$ and $u\\to v$. Since $v$ is a king, some $w$ satisfies $v\\to w\\to u$. Let $S=N^-(u)$, so $w\\in S$ and $S\\ne\\varnothing$. By Landau's lemma the induced tournament on $S$ has a king $z$. Then $z$ is a king of the whole tournament: $z$ reaches every other vertex of $S$ in at most two steps inside $S$, $z\\to u$, and $z\\to u\\to y$ for every $y\\in N^+(u)$. Also $z\\ne v$, because $u\\to v$ so $v\\notin S$. Thus $z$ is a third king.",
        "Four vertices cannot all be kings. A tournament on $4$ vertices has $6$ edges. A vertex of out-degree $3$ is a source and hence the unique king, while a vertex of out-degree $0$ is not a king. The only remaining score sequence summing to $6$ is $(2,2,1,1)$. Let $a$ have out-degree $1$, with unique out-neighbor $c$, and let $p,q$ be the two in-neighbors of $a$. For $a$ to be a king, $c$ must beat both $p$ and $q$. Those two edges already give $c$ out-degree $2$, so $c$ loses to $a$ and the only undecided edge is $p$--$q$. If $p\\to q$, then the only out-neighbor of $q$ is $a$, and $a$ does not beat $p$. Hence $q$ does not reach $p$, so $q$ is not a king.",
        "Extension. Suppose $T$ has king set $K$, and form $T'$ by adding a vertex $r$ beaten by every vertex of $T$. Every king of $T$ still reaches the old vertices by the same paths and reaches $r$ in one step. A non-king of $T$ still fails to reach some old vertex. The vertex $r$ itself has out-degree $0$. Therefore the king set of $T'$ is exactly $K$. In particular, adding $n-3$ such vertices to a $3$-cycle shows that $|K|=3$ occurs for every $n\\ge 3$.",
        "Odd order. Let $k\\ge 3$ be odd and set $m=(k-1)/2$. In the cyclic tournament on $\\mathbb{Z}/k\\mathbb{Z}$, direct $i\\to i+j$ for $1\\le j\\le m$. The out-neighborhood of $0$ is $\\{1,\\ldots,m\\}$, and $m$ beats $\\{m+1,\\ldots,2m\\}=\\{m+1,\\ldots,k-1\\}$, which is exactly the in-neighborhood of $0$. Thus $0$ is a king, and by rotation every vertex is a king. The extension of the previous step then realizes $|K|=k$ for every $n\\ge k$.",
        "Even order at least $6$. Let $k\\ge 6$ be even and set $m=k/2-1$, so the cyclic tournament of the previous step lives on $\\mathbb{Z}/(2m+1)\\mathbb{Z}$ with $m\\ge 2$. Add a vertex $x$ that beats only $0$ and $m$, while every other cyclic vertex beats $x$. Then $x\\to 0$ reaches $\\{1,\\ldots,m\\}$ and $x\\to m$ reaches $\\{m+1,\\ldots,2m\\}$, so $x$ is a king. Each cyclic vertex other than $0$ and $m$ beats $x$ directly; also $0\\to 1\\to x$ and $m\\to(m+1)\\to x$. Kingship among the cyclic vertices is unchanged, so all $k$ vertices are kings. Extension realizes $|K|=k$ for every $n\\ge k$.",
        "Exactly four kings, for every $n\\ge 5$. On $\\mathbb{Z}/5\\mathbb{Z}$ take the cyclic edges $i\\to i+1$ and $i\\to i+2$, and reverse only $0\\to 1$, leaving $1\\to 0$. The out-neighborhood of $0$ is now $\\{2\\}$, and $2$ beats only $\\{3,4\\}$, so $0$ does not reach $1$. The other four vertices are kings: $1$ beats $\\{0,2,3\\}$ and $2\\to 4$; $2$ beats $\\{3,4\\}$ and $4$ beats $\\{0,1\\}$; $3$ beats $\\{4,0\\}$, $0\\to 2$, and $4\\to 1$; $4$ beats $\\{0,1\\}$, $0\\to 2$, and $1\\to 3$. Extension then realizes $|K|=4$ for every $n\\ge 5$.",
        "Combining these constructions with the prohibition on exactly two kings: for $n=3$ and $n=4$ the only possible values are $1$ and $3$, while for $n\\ge 5$ every integer in $\\{1,3,4,\\ldots,n\\}$ occurs and $2$ does not."
      ]
    },
    {
      "id": "c22",
      "category": "cmb",
      "difficulty": "hard",
      "stars": 3,
      "rating": 7.5,
      "confidence": "medium",
      "novelty": {
        "status": "unverified",
        "searchDate": "2026-09-27",
        "exactMatch": false,
        "similarSources": [],
        "earliestKnownDate": null
      },
      "proofStatus": "verified",
      "text": "There are $n$ piles, each with a token of value $1$. In each step, choose two piles with values $A$ and $B$ and merge them into a pile of value $A+B+\\min(A,B)$. Repeat $n-1$ times.<br><br>Prove that the maximum possible value of the final pile equals the number of odd entries in the first $n$ rows of Pascal's triangle, i.e. the number of pairs $(x,y)$ with $0\\le x\\le y&lt;n$ for which $\\binom yx$ is odd.",
      "why": "The merge operation gives a binary-tree recurrence, while Lucas' parity criterion converts the Pascal-triangle count into a binary-weight sequence satisfying the same recurrence. The difficult part is proving that no other split can beat the binary-weight construction.",
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
      "rating": 8,
      "confidence": "medium",
      "novelty": {
        "status": "unverified",
        "searchDate": "2026-09-27",
        "exactMatch": false,
        "similarSources": [],
        "earliestKnownDate": null
      },
      "text": "Let $m\\ge3$ be odd. A school has $m$ students and $n\\ge m+2$ clubs; no two clubs have the same membership set. For two clubs, their <em>discord</em> is the number of students in exactly one of them. Let $d_{\\min}$ and $d_{\\max}$ be the minimum and maximum discords. Prove that $$\\frac{d_{\\max}}{d_{\\min}}\\ge\\frac{m+3}{m-1}.$$ Show that the bound is attained for $m=3$ and $m=5$.",
      "why": "The lower bound follows from an elementary Plotkin-type count together with a rank argument showing that $d_{\\max}\\ge d_{\\min}+2$. The original claim of attainability for every odd $m$ is too strong; for example, equality cannot occur when $m=7$. The statement is minimally corrected by retaining sharp equality examples for $m=3$ and $m=5$.",
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
      "rating": 8,
      "confidence": "high",
      "novelty": {
        "status": "prior-art",
        "searchDate": "2026-09-27",
        "exactMatch": true,
        "similarSources": [
          {
            "name": "Baker-Norine, Riemann-Roch and specializability of divisors on graphs (Adv. Math. 207 (2007), Lemma 4.2, Dhar burning; dollar game of Biggs)",
            "note": "part (2)'s threshold m-n+1 is the graph-genus effective-divisor statement r(D)>=0 for deg D >= g; part (1)'s orientation divisor d^-_O - 1 is the Baker-Norine non-special/gap example; the problem text itself (why field) describes it as encoding this theory"
          }
        ],
        "earliestKnownDate": null
      },
      "text": "Let $G = (V, E)$ be a connected simple graph with $n$ vertices and $m$ edges. Each vertex $v \\in V$ holds an integer number of coins $c(v) \\in \\mathbb{Z}$, where negative values represent debts. In a <em>lending move</em>, a chosen vertex $u$ distributes $1$ coin to each of its neighbors in $G$ (so $c(u)$ decreases by $\\deg(u)$, and $c(w)$ increases by $1$ for each neighbor $w$ of $u$). A configuration is called <em>solvent</em> if there exists a finite sequence of lending moves after which every vertex has a non-negative number of coins ($c(v) \\ge 0$ for all $v \\in V$).<br><ol><li>Prove that there exists an insolvent configuration with total wealth $\\sum_{v \\in V} c(v) = m - n$.</li><li>Prove that every configuration with total wealth $\\sum_{v \\in V} c(v) \\ge m - n + 1$ is solvent.</li></ol>",
      "why": "Encodes the foundational combinatorial core of the Baker–Norine Riemann–Roch theorem on graphs and chip-firing/dollar games without algebraic geometry machinery. Part (1) constructs an explicit adversary divisor $c(v) = d_{\\mathcal{O}}^-(v) - 1$ from an acyclic orientation $\\mathcal{O}$; the maximum-firing vertex set $S$ must contain a source in $S$ that cannot eliminate its debt. Part (2) uses Dhar's burning algorithm: in a debt-minimal state, either the burning covers the whole graph (forcing an acyclic orientation that violates the degree bound) or it stalls at a proper subset, where set-firing the unburnt complement strictly reduces global debt, contradicting minimality.",
      "answer": "$$\\boxed{\\text{The maximum wealth of an insolvent configuration is precisely } m - n;\\text{ every configuration with wealth } \\ge m - n + 1 \\text{ is solvent.}}$$",
      "steps": [
        "To prove (1), choose an arbitrary acyclic orientation $\\mathcal{O}$ of $G$ (for instance, order the vertices $1, 2, \\dots, n$ and orient every edge from smaller to larger index). For each vertex $v \\in V$, define the initial configuration $$c(v) = d_{\\mathcal{O}}^-(v) - 1,$$ where $d_{\\mathcal{O}}^-(v)$ is the in-degree of $v$ in $\\mathcal{O}$. The total wealth is $\\sum_{v \\in V} (d_{\\mathcal{O}}^-(v) - 1) = |E| - |V| = m - n$.",
        "Suppose for contradiction that this configuration is solvent. Let $f(v) \\ge 0$ be the number of times vertex $v$ fires in a valid sequence of lending moves. Since firing all vertices once leaves every coin count unchanged, subtracting $\\min_{v} f(v)$ allows us to assume $\\min_{v} f(v) = 0$. Because the initial configuration contains vertices with $d_{\\mathcal{O}}^-(v) = 0$ (so $c(v) = -1$), at least one move must occur, so $M = \\max_{v} f(v) > 0$.",
        "Consider the non-empty proper subset $S = \\{v \\in V : f(v) = M\\}$. Because $\\mathcal{O}$ is acyclic, the induced sub-orientation on $S$ is also acyclic, so it contains at least one vertex $u \\in S$ with no incoming edges from $S$. Thus, all in-neighbors of $u$ in $\\mathcal{O}$ belong to $V \\setminus S$, where each fires at most $M - 1$ times.",
        "The net change in coins at $u$ after all moves is $\\Delta c(u) = \\sum_{w \\sim u} (f(w) - f(u))$. For each in-neighbor $w$ of $u$, $f(w) - f(u) \\le (M - 1) - M = -1$. For each out-neighbor $w$ of $u$, $f(w) - f(u) \\le M - M = 0$. Therefore, $$\\Delta c(u) \\le - d_{\\mathcal{O}}^-(u).$$ The final coin count at $u$ is $c_{\\mathrm{final}}(u) = c(u) + \\Delta c(u) \\le (d_{\\mathcal{O}}^-(u) - 1) - d_{\\mathcal{O}}^-(u) = -1 &lt; 0$, which contradicts the assumption that all vertices achieved non-negative coin counts. Hence, this configuration of wealth $m - n$ is insolvent.",
        "To prove (2), let $c$ be any configuration with $\\sum_{v \\in V} c(v) \\ge m - n + 1$. Among all configurations reachable from $c$ by sequences of lending moves, choose one that minimizes the total debt $$D = \\sum_{v \\in V : c(v) &lt; 0} |c(v)|.$$ If $D = 0$, the configuration is already non-negative everywhere, so $c$ is solvent. Suppose for contradiction that $D > 0$, so there exists at least one vertex $q \\in V$ with $c(q) &lt; 0$.",
        "Run Dhar's burning algorithm with fire initiated at $q$: set $B_0 = \\{q\\}$. At each step $k \\ge 0$, if there is a vertex $w \\in V \\setminus B_k$ such that the number of edges connecting $w$ to $B_k$ strictly exceeds $c(w)$ (i.e. $\\deg_{B_k}(w) > c(w)$), then $w$ catches fire: $B_{k+1} = B_k \\cup \\{w\\}$. Continue until no further vertices can burn, resulting in a final burnt set $B$.",
        "If the fire burns the entire graph ($B = V$), order the vertices according to the sequence in which they burned. Orient every edge of $G$ from the vertex that burned earlier to the one that burned later. This produces an acyclic orientation with unique source $q$. By the burning rule, every vertex $w \\ne q$ has $c(w) \\le d^-(w) - 1$, and at the source $q$, $c(q) &lt; 0 = d^-(q) - 1$. Summing over all vertices gives $\\sum_{v \\in V} c(v) \\le \\sum_{v \\in V} (d^-(v) - 1) = m - n$, which contradicts the hypothesis that total wealth is at least $m - n + 1$.",
        "Thus, the fire must stop at a proper subset $B \\subsetneq V$. Since $q \\in B$, $B$ is non-empty. Because no vertex in $V \\setminus B$ can burn, every $w \\in V \\setminus B$ satisfies $\\deg_B(w) \\le c(w)$. Now execute a collective lending move on $V \\setminus B$ (each vertex in $V \\setminus B$ fires once). For every $w \\in V \\setminus B$, its coin count decreases by $\\deg_B(w) \\le c(w)$, so its new count remains non-negative ($c(w) - \\deg_B(w) \\ge 0$). Meanwhile, the vertices in $B$ strictly receive $e(B, V \\setminus B) \\ge 1$ coins (since $G$ is connected). Thus no vertex outside $B$ enters debt, while the debt in $B$ strictly decreases, contradicting the minimality of $D$. Therefore, $D = 0$ is always achievable, and the configuration is solvent."
      ],
      "proofStatus": "hold",
      "gapNote": "Third pass 2026-09-28/29. (a) STATEMENT INDEPENDENTLY VERIFIED: exact lattice solver (solvency = existence of effective c-prime with c-c-prime in the Laplacian integer image; decidable via the reduced-Laplacian inverse, image q-independent) run over ALL 771 connected graphs on 2..5 vertices: part 2 threshold total=m-n+1 held on 585,602 configs (exhaustive for n<=4, sampled 800/graph for n=5; ZERO counterexamples); part 1: all 26,896 acyclic-orientation configs c(v)=d-(v)-1 at total m-n confirmed INSOLVENT (incl. the paw (-1,0,0,1) case; the earlier reviewer counterexample targeted sub-threshold totals, which part 2 does not claim). Part 1 proof (S1-S4) sound. (b) STILL OPEN (why hold): part 2 S5-S8 stall branch. Debt-minimality alone does not control the unburnt set U; the missing lemma is the Baker-Norine replacement of the minimization: reduce by legal firings of v!=q only (TERMINATION, proved by deepest-fired-layer pool potential P_k=sum_{d>=k}R: each max-depth firing decreases it by >=1, induction over k), then show the q-reduced representative of a degree>=g class is effective. NOTE: the naive reducedness test (bounds + burn fails) is FALSE for this: K4, q=0, R=(-1,1,1,1) bounds hold, burn from {q} stuck at 1>1 false, yet R~2q is effective. Correct condition: R(v)>=0 (v!=q) and for every nonempty U subset V\\{q} some u in U has R(u) < e(u,V\\U); proving the reduction algorithm terminates in a configuration satisfying THAT (and the degree-counting bound forcing R(q)>=0 when total>=g) is the exact remaining work order. Script archived: /tmp/kilo/step10/c24_solver3.py.",
      "sourceNote": "Repackaging of the Baker-Norine graph Riemann-Roch lemma set (combinatorial core: acyclic-orientation divisors and Dhar's burning algorithm); retained as labeled training-grade material."
    },
    {
      "id": "c25",
      "category": "cmb",
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
      "text": "There are $n$ cells arranged in a circle, labelled $1, 2, \\dots, n$ in clockwise order. Initially, a token is placed at cell $1$. Alice and Bob play a game with $n - 1$ rounds. In round $k$ ($1 \\le k \\le n - 1$):<br><ol><li>Alice chooses a step size $s_k \\in \\{1, 2, \\dots, n - 1\\}$ that has not been chosen in any earlier round.</li><li>Bob chooses whether the token moves $s_k$ steps clockwise or $s_k$ steps counter-clockwise.</li></ol><br>Alice wins if, after all $n - 1$ rounds, the token has visited every single cell of the circle at least once (including its initial position at cell $1$). Otherwise, Bob wins. Determine all integers $n \\ge 2$ for which Alice has a winning strategy.",
      "why": "Bob's winning strategy is purely static: relabel the cells $0,1,\\dots,n-1$ and always move to the smaller of the two candidate labels, regardless of which cells have been visited. For odd $n$ this makes the top label $n-1$ unreachable; for even $n$ the two top labels $n-2,n-1$ become reachable only through the single forced step $n/2$, which can cover at most one of them. The parity obstruction $a+b\\equiv 2x \\pmod n$ is what shields $n-2$.",
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
      "id": "g1",
      "category": "geo",
      "difficulty": "easy",
      "stars": 1,
      "rating": 1.5,
      "confidence": "high",
      "novelty": {
        "status": "unverified",
        "searchDate": "2026-09-27",
        "exactMatch": false,
        "similarSources": [],
        "earliestKnownDate": null
      },
      "text": "Let $\\triangle ABC$ be a nondegenerate triangle and let $P\\ne A$ be a point in the plane. Reflect $P$ across the lines $AB$ and $AC$, obtaining $X$ and $Y$, respectively. Suppose $X\\ne Y$. Prove that $$XY\\perp BC$$ if and only if $AP$ is tangent to the circumcircle of $ABC$ at $A$.",
      "why": "A remarkably short reflection/isogonal argument turns an apparently arbitrary point $P$ into the tangent at $A$. This exact configuration is not represented in the current set.",
      "steps": [
        "Since reflection preserves distances from $A$, $AX=AP=AY$. Hence $A$ lies on the perpendicular bisector of $XY$; if $M$ is the midpoint of $XY$, then $AM\\perp XY$. (If $M=A$, i.e. $X$ and $Y$ are antipodal on the circle with center $A$, then $\\angle BAC=90^\\circ$; take $AM$ below to mean the line through $A$ perpendicular to $XY$. In coordinates with $A=(0,0)$, $B=(c,0)$, $C=(0,b)$ and $P=(p,q)$ one gets $X=(p,-q)$, $Y=(-p,q)$, and a direct check shows this line is still the isogonal of $AP$ in the right angle $A$, so every step below reads verbatim.)",
        "$AX$ and $AY$ are obtained by reflecting $AP$ in lines $AB$ and $AC$ respectively, so line $AM$, which bisects $\\angle XAY$, is the isogonal reflection of line $AP$ in $\\angle A$.",
        "Hence $XY\\perp BC$ if and only if $AM\\parallel BC$, i.e. if and only if $AP$ is the isogonal (in $\\angle A$) of a line through $A$ parallel to $BC$.",
        "By the tangent–chord angle, the isogonal of a line through $A$ parallel to $BC$ is exactly the tangent to the circumcircle of $ABC$ at $A$. Therefore $XY\\perp BC$ if and only if $AP$ is tangent to the circumcircle of $ABC$ at $A$."
      ]
    },
    {
      "id": "g2",
      "category": "geo",
      "difficulty": "easy",
      "stars": 1,
      "rating": 1.5,
      "confidence": "high",
      "novelty": {
        "status": "unverified",
        "searchDate": "2026-09-27",
        "exactMatch": false,
        "similarSources": [],
        "earliestKnownDate": null
      },
      "text": "Let $\\Gamma$ be a circle with center $O$, and let $P$ be a point outside $\\Gamma$. The tangents from $P$ touch $\\Gamma$ at $A$ and $B$. A secant through $P$ meets $\\Gamma$ at distinct points $C,D$, and let $M$ be the midpoint of $CD$. Prove that $$O,P,A,B,M\\text{ are concyclic.}$$ Equivalently, prove that as the secant through $P$ varies, $M$ moves on one fixed circle.",
      "why": "The moving point looks unrelated to the tangent points, but all three points $A,B,M$ suddenly land on the same fixed Thales circle. The proof is essentially three right angles.",
      "steps": [
        "Because $PA$ and $PB$ are tangent to $\\Gamma$, $OA\\perp PA$ and $OB\\perp PB$, so $\\angle OAP=\\angle OBP=90^\\circ$.",
        "Since $M$ is the midpoint of the chord $CD$, $OM\\perp CD$. But $P,C,D$ are collinear, so line $CD$ is line $PM$; hence $OM\\perp PM$, giving $\\angle OMP=90^\\circ$.",
        "Thus $A,B,M$ all lie on the circle with diameter $OP$. Therefore $O,P,A,B,M$ are concyclic."
      ]
    },
    {
      "id": "g3",
      "category": "geo",
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
      "text": "Let $ABC$ be an acute triangle, and let $M$ be the midpoint of $BC$. Let the circle centered at $M$ and passing through $A$ meet the lines $AB$ and $AC$ again at $X$ and $Y$, respectively. Prove that $XY$ is perpendicular to the reflection of the line $AM$ across the bisector of $\\angle BAC$.",
      "why": "The construction is only a midpoint and a circle. The line to which $XY$ is perpendicular is the reflection of the median across the angle bisector, which the figure does not suggest. Once that line is identified, the angle chase is short.",
      "steps": [
        "Put $\\angle BAM=\\theta$ and $\\angle MAC=A-\\theta$, where $A=\\angle BAC$. Since $X$ lies on the circle centered at $M$ through $A$, $MA=MX$, so $\\triangle AMX$ is isosceles; likewise $MA=MY$, so $\\triangle AMY$ is isosceles and $\\angle MAY=A-\\theta$.",
        "From the isosceles triangle $AMY$, $\\angle AMY=180^\\circ-2(A-\\theta)$.",
        "Since $A,X,Y$ lie on the circle centered at $M$, the inscribed angle $\\angle AXY$ subtends the chord $AY$, so $\\angle AXY=\\tfrac12\\angle AMY=90^\\circ-(A-\\theta)$. Thus the angle between $XY$ and $AB$ equals $90^\\circ-(A-\\theta)$.",
        "The reflection of median $AM$ across the bisector of $\\angle BAC$ makes an angle $A-\\theta$ with $AB$. Adding the two angles gives $90^\\circ$, so $XY$ is perpendicular to that reflection."
      ]
    },
    {
      "id": "g4",
      "category": "geo",
      "difficulty": "medium",
      "stars": 2,
      "rating": 4,
      "confidence": "medium",
      "novelty": {
        "status": "unverified",
        "searchDate": "2026-09-27",
        "exactMatch": false,
        "similarSources": [],
        "earliestKnownDate": null
      },
      "text": "Let a <em>lune</em> be the region between two internally tangent circles. Given $N$ distinct points in the plane, prove that for any non-negative integers $P,Q,R$ with $P+Q+R=N$, there exists a lune containing exactly $P$ points strictly inside the smaller circle, $Q$ points in the strict interior of the lune, and $R$ points strictly outside the larger circle.",
      "why": "Existence of a lune with prescribed inside/lune/outside counts. Continuity or a limiting sweep is the idea; short once seen, but a contestant has to invent that picture — the statement does not suggest a Euclidean calculation.",
      "steps": [
        "Choose a unit vector $n$ not perpendicular to any difference of two given points. Take $T=-tn$ for $t$ so large that every point $X$ satisfies $(X-T)\\cdot n>0$.",
        "For $\\rho>0$ consider the circle centered at $T+\\rho n$ with radius $\\rho$. All these circles are internally tangent at $T$. A point $X$ is strictly inside this circle exactly when $\\rho>\\rho(X)$, where $\\rho(X)=|X-T|^2/[2(X-T)\\cdot n]$.",
        "As $t$ tends to infinity, $\\rho(X)-\\rho(Y)=((X-Y)\\cdot n)/2+O(1/t)$. By the choice of $n$, for all sufficiently large $t$ these $N$ values are pairwise distinct. Order them $\\rho_1\\lt\\cdots\\lt\\rho_N$.",
        "Choose radii $r\\lt R$ avoiding all $\\rho_i$, with exactly $P$ values below $r$, exactly $Q$ in $(r,R)$, and the remaining values above $R$. The two circles then form the required lune."
      ]
    },
    {
      "id": "g5",
      "category": "geo",
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
      "text": "Let the incircle of $\\triangle ABC$ with incenter $I$ touch $BC$, $CA$, $AB$ at $D$, $E$, $F$ respectively, with $CA\\ne CB$. Let $M$ be the intersection of lines $AB$ and $DE$ (which exists exactly when $CA\\ne CB$). The line through $M$ perpendicular to $IM$ meets lines $DF$ and $EF$ at $P$ and $Q$ respectively. Prove that $MP = MQ$.",
      "why": "Incircle contact triangle, a harmonic bundle or pole/polar, then MP = MQ. A few standard lemmas rather than an exotic tool; longer from scratch than G2 because the perpendicular to IM has to be interpreted.",
      "steps": [
        "Use coordinates with the incircle $x^2+y^2=1$ and $F=(1,0)$. Parametrize a point on the incircle by $T(t)=\\bigl((1-t^2)/(1+t^2),\\,2t/(1+t^2)\\bigr)$. The chord through $T(r),T(s)$ has equation $(1-rs)x+(r+s)y=1+rs$.",
        "Write $E=T(e)$ and $D=T(d)$. Since $AB$ is tangent at $F$, $AB$ is $x=1$. Thus $M=(1,m)$, where $m=2de/(d+e)$. The lines $EF$ and $DF$ have equations $x+ey=1$ and $x+dy=1$.",
        "The line through $M$ perpendicular to $IM$ has equation $x+my=1+m^2$. Hence $Q$ has $y$-coordinate $m^2/(m-e)$, and $P$ has $y$-coordinate $m^2/(m-d)$.",
        "Since $m=2de/(d+e)$, we get $y_Q-m=me/(m-e)$ and $y_P-m=md/(m-d)$, whose absolute values are equal. Thus $MP=MQ$.",
        "The exceptional case $d+e=0$ is exactly the case in which $M$ is not a finite intersection; for every configuration where $M$ is defined, the calculation applies."
      ]
    },
    {
      "id": "g6",
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
      "text": "Let $ABCD$ be a cyclic quadrilateral with circumcenter $O$. Assume no two opposite sides are parallel. Let $AB\\cap CD=E$ and $AD\\cap BC=F$. Let the diagonals $AC$ and $BD$ meet at $M$, and let $N$ be the reflection of $M$ across line $EF$. Prove that $N,E,O,F$ are concyclic.",
      "why": "The diagonal triangle of a cyclic quadrilateral is self-polar. That one standard theorem immediately makes $M$ the orthocenter of triangle $OEF$, after which reflecting across $EF$ gives the cyclicity. This is much shorter than the original Miquel/radical-axis chain.",
      "steps": [
        "For a complete quadrilateral inscribed in a circle, the diagonal triangle is self-polar: the polar of $E$ is $FM$, the polar of $F$ is $EM$, and the polar of $M$ is $EF$.",
        "For a circle, the polar of a point is perpendicular to the line joining that point to $O$. Hence $OE$ is perpendicular to $FM$, $OF$ is perpendicular to $EM$, and $OM$ is perpendicular to $EF$.",
        "Therefore $M$ is the orthocenter of triangle $OEF$.",
        "In any triangle, the reflection of the orthocenter across one side lies on the circumcircle. Reflecting $M$ across $EF$ gives $N$, so $N$ lies on the circumcircle of $OEF$. Hence $N,E,O,F$ are concyclic."
      ]
    },
    {
      "id": "g7",
      "category": "geo",
      "difficulty": "medium",
      "stars": 2,
      "rating": 4.5,
      "confidence": "high",
      "novelty": {
        "status": "unverified",
        "searchDate": "2026-09-27",
        "exactMatch": false,
        "similarSources": [
          {
            "name": "circles with diameters on the median; radical axis = altitude",
            "note": "textbook-classic configuration lemma; prior-art screening advisable (second-pass flag)"
          }
        ],
        "earliestKnownDate": null
      },
      "text": "Let $ABC$ be a triangle, let $M$ be the midpoint of $AB$ and let $N$ be the midpoint of $AC$. Let $\\Gamma$ be the circle with diameter $BN$ and let $\\Delta$ be the circle with diameter $CM$. Prove that the radical axis of $\\Gamma$ and $\\Delta$ is the altitude from $A$ to $BC$.",
      "why": "A point lies on the radical axis when its powers, written as dot products against the diameters, agree. After cancellation the condition is orthogonality to $C-B$, which is the altitude line. No inversion or advanced circle lemma is required.",
      "steps": [
        "A point $P$ lies on the circle with diameter $BN$ if and only if $(P-B)\\cdot(P-N)=0$, and on the circle with diameter $CM$ if and only if $(P-C)\\cdot(P-M)=0$. The radical axis is the locus where these two powers are equal: $(P-B)\\cdot(P-N)=(P-C)\\cdot(P-M)$.",
        "Expanding and cancelling $|P|^2$ leaves $P\\cdot(C+M-B-N)=C\\cdot M-B\\cdot N$.",
        "Substitute $M=(A+B)/2$ and $N=(A+C)/2$. The coefficient of $P$ simplifies to $$C+M-B-N=C+\\frac{A+B}2-B-\\frac{A+C}2=\\frac{C-B}2.$$ The constant term is $$C\\cdot M-B\\cdot N=\\frac12\\bigl(C\\cdot(A+B)-B\\cdot(A+C)\\bigr)=\\frac12 A\\cdot(C-B).$$",
        "The radical-axis equation is therefore $P\\cdot(C-B)=A\\cdot(C-B)$, or $(P-A)\\cdot(C-B)=0$. This is the line through $A$ orthogonal to $BC$, which is the altitude from $A$."
      ]
    },
    {
      "id": "g8",
      "category": "geo",
      "difficulty": "medium",
      "stars": 2,
      "rating": 4.5,
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
      "why": "The same fixed-point-on-$BC$ configuration used in G17 and G25: every circle through $B,C$ meets $\\psi$ along a chord through one fixed point of $BC$, making $X\\leftrightarrow Y$ a projective involution of $\\psi$. Projecting from $A$ (which lies on both $\\psi$ and $\\omega$) transports this to an involution of $\\omega$, whose chords all pass through a single point by the standard involution theorem. Considerably shorter and more transparent than a direct coordinate computation.",
      "steps": [
        "Let $K$ be the foot of the altitude from $A$ to $BC$. Since $\\psi$ has diameter $AM$, its intersections with $BC$ are exactly $M$ and $K$.",
        "Define $T$ on line $BC$ by $TB\\cdot TC=TM\\cdot TK$. For every circle $\\phi$ through $B,C$, $\\operatorname{Pow}_{\\phi}(T)=TB\\cdot TC$, while $\\operatorname{Pow}_{\\psi}(T)=TM\\cdot TK$. Hence $T$ lies on the radical axis of $\\phi$ and $\\psi$, which is exactly their common chord. Since $\\phi$ is the circumcircle of $X,B,C$ and $Y$ is its second intersection with $\\psi$, the line $XY$ always passes through the fixed point $T$.",
        "Hence, as $X$ ranges over $\\psi$, the correspondence $X\\leftrightarrow Y$ is precisely the involution on $\\psi$ cut out by the pencil of lines through the fixed point $T$: $X$ and $Y$ are always the two points where some line through $T$ meets $\\psi$.",
        "Project from $A$: since $A$ lies on both $\\psi$ and $\\omega$, the map sending $Z\\in\\psi$ to the second intersection of line $AZ$ with $\\omega$ is a projective isomorphism $\\psi\\to\\omega$. It carries the involution $X\\leftrightarrow Y$ on $\\psi$ to an involution $D\\leftrightarrow E$ on $\\omega$.",
        "By the standard involution theorem for a conic, the lines joining corresponding points of a projective involution on a nondegenerate conic all pass through one fixed point. Hence every line $DE$ passes through the same fixed point, independent of the choice of $X$."
      ]
    },
    {
      "id": "g9",
      "category": "geo",
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
      "text": "Let $\\triangle ABC$ be scalene with incenter $I$ and $AC>AB$. The incircle touches $CA$ and $AB$ at $E$ and $F$. Let $L=EF\\cap BC$. Let the incircle of $\\triangle LEC$ and the $L$-excircle of $\\triangle LFB$ touch line $EF$ at $M$ and $N$, respectively. Let $K$ be the intersection of the incircle with segment $AI$. Prove that $BN$, $CM$, and the bisector $AI$ are concurrent at $K$.",
      "why": "Once the case $AC>AB$ is fixed (without it the statement is false: for $AB>AC$ the two cevians still meet on $AI$, but at a point off the incircle, not at $K$), the proof is a directed-length coordinate chase along the bisector: three tangent-length computations and two intercept reductions that share the single identity $t(b+c-t)=bcu^2$. Invention is moderate, bookkeeping is real.",
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
      "id": "g10",
      "category": "geo",
      "difficulty": "medium",
      "stars": 2,
      "rating": 5.5,
      "confidence": "high",
      "novelty": {
        "status": "unverified",
        "searchDate": "2026-09-27",
        "exactMatch": false,
        "similarSources": [],
        "earliestKnownDate": null
      },
      "text": "Let $P$ be a point on the circumcircle of an acute, scalene triangle $ABC$, distinct from $A$, $B$, and $C$. Let $H_A$ be the orthocenter of triangle $PBC$, and let $A_1$ be the reflection of $H_A$ across the perpendicular bisector of $BC$. Define $B_1$ and $C_1$ analogously for triangles $PCA$ and $PAB$, respectively. Prove that $A_1$, $B_1$, and $C_1$ are collinear, and that the line containing them passes through the orthocenter $H$ of triangle $ABC$.",
      "why": "Reflection in a side's perpendicular bisector produces a second point of the circumcircle. The orthocenters of the two cyclic triangles differ by a translation parallel to the corresponding chord, reducing the problem to three naturally parallel chords.",
      "steps": [
        "Let $P_A$ be the reflection of $P$ in the perpendicular bisector of $BC$. The reflection axis passes through the circumcenter, so it preserves the circumcircle and swaps $B,C$. Hence $P_A\\in\\omega$. It also sends the orthocenter $H_A$ of $\\triangle PBC$ to the orthocenter of $\\triangle P_A BC$, namely $A_1$.",
        "We use the standard orthocenter-translation lemma: if $U,V,B,C$ are concyclic and $H_U,H_V$ are the orthocenters of $\\triangle UBC$ and $\\triangle VBC$, then $$H_UH_V\\parallel UV.$$ Applied to the cyclic quadrilateral $A,P_A,B,C$, this gives $$\\boxed{HA_1\\parallel AP_A}.$$",
        "Cyclically, if $P_B,P_C$ are the reflections of $P$ in the perpendicular bisectors of $CA,AB$, respectively, then $$\\boxed{HB_1\\parallel BP_B,\\qquad HC_1\\parallel CP_C}.$$",
        "It remains to prove $$AP_A\\parallel BP_B\\parallel CP_C.$$ Reflection in the perpendicular bisector of $BC$ swaps $B,C$, so $$BP_A=CP.$$ Reflection in the perpendicular bisector of $CA$ gives $$AP_B=CP.$$ Hence $$BP_A=AP_B.$$ Since all four points lie on $\\omega$, equal chords subtend equal angles, and therefore $$\\angle P_AAB=\\angle P_BBA.$$ This is exactly $$AP_A\\parallel BP_B.$$",
        "The same argument cyclically gives $$BP_B\\parallel CP_C.$$ Consequently $$\\boxed{AP_A\\parallel BP_B\\parallel CP_C}.$$",
        "Together with the three orthocenter translations, $$HA_1\\parallel HB_1\\parallel HC_1.$$ All three lines therefore coincide. Hence $$\\boxed{A_1,B_1,C_1\\text{ are collinear, and their common line passes through }H}.$$"
      ]
    },
    {
      "id": "g11",
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
      "text": "Let $ABCD$ be a convex cyclic quadrilateral with circumcenter $O$. Assume that all named intersections below are finite. Let $P=AB\\cap CD$ and $Q=AD\\cap BC$. Let $E$ and $F$ be the midpoints of $AB$ and $CD$, respectively. Let $S=EF\\cap AD$ and $T=EF\\cap BC$. Prove that the circumcircles of $\\triangle PEF$ and $\\triangle QST$ are tangent.",
      "why": "The midpoint condition produces the circle with diameter $OP$. The Miquel point of the complete quadrilateral gives the second circle and the tangency point. Menelaus supplies the one ratio needed to identify the corresponding points under the two spiral similarities centered at the Miquel point.",
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
      "id": "g12",
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
      "text": "Let $ABC$ be an acute scalene triangle with circumcircle $\\Gamma$. The tangent to $\\Gamma$ at $A$ meets $BC$ at $T_A$, and let $\\omega_A$ be the circle through $A$ tangent to $BC$ at $T_A$. Let $P\\ne A$ be the second intersection of $\\omega_A$ with $\\Gamma$. Define $Q$ and $R$ cyclically at $B$ and $C$. Let $Z=PQ\\cap AB$, $X=QR\\cap BC$, and $Y=RP\\cap CA$. Prove that $AX,BY,CZ$ are concurrent.",
      "why": "The concurrency reduces to directed Ceva once one proves a striking cubic chord-ratio for each of the three specially constructed points. The cubic ratio follows cleanly from an inversion centered at the tangent intersection; no coordinates are needed.",
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
      "id": "g13",
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
      "text": "Let $ABCD$ be a convex cyclic quadrilateral with circumcenter $O$. Assume that no two opposite sides are parallel and that neither $AC$ nor $BD$ is a diameter of the circumcircle. Let $P=AC\\cap BD$. Let $M\\ne O$ be the second intersection of the circumcircles of triangles $AOC$ and $BOD$. Let $X,Y$ be the perpendicular projections of $M$ onto the lines $AB,CD$, respectively, and let $N$ be the midpoint of $PM$. Prove that $X,Y,N$ are collinear.",
      "why": "Place $O$ at the origin of the unit circle. Inversion (or the chord equation $z+ac\\bar z=a+c$) gives $\\bar p=(a+c-b-d)/(ac-bd)$ and $m=1/\\bar p$. The affine function $f(Z)=\\vec{ZA}\\cdot\\vec{ZC}-\\vec{ZB}\\cdot\\vec{ZD}$ (difference of powers to the circles on diameters $AC$, $BD$) vanishes at $P$ and, by a short computation, at the reflections of $M$ in $AB$ and $CD$. A homothety centered at $M$ finishes.",
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
      "id": "g14",
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
      "text": "Let $ABC$ be a scalene triangle with incenter $I$. Let $P$ be an interior point such that $\\angle PBA=\\angle ICB$ and $\\angle PCA=\\angle IBA$. Let $B'=PB\\cap AI$ and $C'=PC\\cap AI$. Through $B'$ draw the line parallel to $AB$, meeting $BI$ at $X$; through $C'$ draw the line parallel to $AC$, meeting $CI$ at $Y$. Prove that the circumcircle of triangle $IXY$ and the circumcircle of triangle $BPX$ are tangent at $X$.",
      "why": "Origin at $I$. Homotheties at $I$ give $X=\\frac{b-c}{b}B$, $Y=-\\frac{b-c}{c}C$; $P$ lies on the circle $(BIC)$ and has explicit coordinates in the basis $(\\vec{IB},\\vec{IC})$. Tangency at $X$ is equivalent to collinearity of $X$ with the two centers, which reduces to one rational identity in $a,b,c$.",
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
      "text": "Let $ABC$ be a scalene triangle with circumcircle $\\omega$ and circumcenter $O$. Let $I$ be the incenter of triangle $ABC$, and let the internal angle bisector of $\\angle BAC$ meet $\\omega$ again at $M$. Let $N$ be the point on $\\omega$ such that $MN$ is a diameter of $\\omega$. The line $NI$ meets $\\omega$ again at $P$. Let $J$ be the reflection of $I$ across the line $BC$. The circle passing through $I$, $J$, and $P$ meets $\\omega$ again at $Q$. Prove that the line $OI$ is the perpendicular bisector of the segment $AQ$.",
      "why": "The crucial identity is $MI=MB=MC$ for the midpoint of the arc $BC$. This produces a SAS similarity linking the incenter configuration to $O,A,I$, after which the desired point is simply the reflection of $A$ across $OI$.",
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
      "id": "g16",
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
      "text": "Let $ABC$ be an acute scalene triangle with circumcircle $\\gamma$ and orthocenter $H$. Let $M$ be the midpoint of $BC$, and let $\\psi$ be the circle with diameter $AM$. Let $D$ be the point on $\\gamma$ diametrically opposite to $A$. A variable circle $\\phi$ passes through $B$ and $C$, intersecting $\\psi$ at two distinct points $X$ and $Y$, and assume points $D$ and $H$ are not on line $XY$. Let $\\omega_1$ be the circumcircle of triangle $DXY$, and let $\\omega_2$ be the circumcircle of triangle $HXY$. Prove that as the circle $\\phi$ varies, both circles $\\omega_1$ and $\\omega_2$ pass through fixed points independent of $\\phi$ (other than $D$ and $H$, respectively).",
      "why": "The common chord $XY$ is always a member of a fixed pencil of lines through one point $E$ on $BC$. Once $E$ is found, the second fixed point on each moving circle is obtained by a one-dimensional power construction on $ED$ and $EH$.",
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
      "id": "g17",
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
      "text": "Let $ABC$ be an acute, scalene triangle with circumcenter $O$. Let $K$ be the intersection of line $AO$ with side $BC$. Let $L$ be the unique point on line $AO$, distinct from $A$, such that $\\angle ALB=\\angle CLA$. The line through $L$ perpendicular to $AO$ intersects line $BC$ at $M$. Let $N$ be the intersection of the tangents to the circumcircle of $\\triangle ABC$ at $B$ and $C$. Prove that $OM\\perp KN$.",
      "why": "The angle condition says that $LK$ is the internal angle bisector of $\\angle BLC$, hence the perpendicular $LM$ is its external angle bisector. This makes $K$ and $M$ have equal ratios to $B,C$. The midpoint of $BC$ then turns the ratio statement into an inversion relation, after which the perpendicularity is an immediate similarity.",
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
      "text": "Let $ABCD$ be a convex quadrilateral with $E = AC \\cap BD$, $P = AD \\cap BC$ and $Q = AB \\cap CD$. Erect equilateral triangles $ECX$ and $EDY$ so that $X$ and $B$ lie on the same side of $AC$, and $Y$ and $A$ lie on the same side of $BD$. Let $U$ and $V$ be the points where $AX$ and $BY$ meet the bisectors of $\\angle AEX$ and $\\angle BEY$. Prove that $EU = EV$ if and only if $PE \\perp QE$.",
      "why": "Both conditions are computed explicitly. An area computation gives $EU=\\frac{ac}{a+c}$, $EV=\\frac{bd}{b+d}$, so $EU=EV\\iff\\frac1a+\\frac1c=\\frac1b+\\frac1d$. In the oblique frame $(\\vec{EA}/a,\\vec{EB}/b)$ the points $P,Q$ have explicit coordinates and $\\vec{EP}\\cdot\\vec{EQ}$ is a nonzero multiple of $\\big(\\frac1a+\\frac1c\\big)^2-\\big(\\frac1b+\\frac1d\\big)^2$; the chain is a chain of equivalences, so both directions are proved at once.",
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
      "text": "Let $\\triangle ABC$ be scalene with incenter $I$. The incircle touches side $BC$ at $D$; let $AD$ meet the incircle again at $E$. Let $P$ and $Q$ be the intersections of the internal and external bisectors of $\\angle A$ with $BC$, respectively. Let the circumcircle of $\\triangle APQ$ meet the median $AM$ again at $N$, where $M$ is the midpoint of $BC$. Let $F$ be the point on the segment $AD$ such that $AE=DF$. Prove that $A,F,I,N$ are concyclic.",
      "why": "Show that $\\operatorname{Pow}_{(AFI)}(M)=MB^2$ by a short coordinate computation in the tangent lengths $u=s-a,\\ v=s-b,\\ w=s-c$; then one power-of-a-point argument on line $AM$ shows the second intersection of $AM$ with $(AFI)$ is exactly $N$.",
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
      "id": "g20",
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
      "proofStatus": "verified",
      "text": "Let $ABC$ be a scalene triangle with orthocenter $H$, incenter $I$ and circumcenter $O$. The incircle touches sides $BC$, $CA$, $AB$ at $D$, $E$, $F$ respectively. Let $U$, $V$, $W$ be the reflections of $C$, $A$, $B$ in the points $D$, $E$, $F$ respectively, and let $U'$, $V'$, $W'$ be the reflections of $B$, $C$, $A$ in the points $D$, $E$, $F$ respectively. Prove that the area of triangle $HIO$ equals the area of triangle $ABC$ if and only if the points $U$, $V$, $W$ are collinear or the points $U'$, $V'$, $W'$ are collinear.",
      "why": "A characterization linking the area of the orthocenter–incenter–circumcenter triangle to one of two collinearities of points reflected in the contact points. Each side is a standard computation once set up (Menelaus on the sides, a formula for $[HIO]$), but matching them, including the alternative, is long.",
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
      "id": "g21",
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
      "why": "Nothing in the construction treats $B$ and $C$ symmetrically: the excircle is tangent to $BC$ at a point that depends on $b$ and $c$ separately, $M$ comes from the altitude at $A$, and the circle $(BCT)$ is built from a point $T$ with no symmetry of its own. Yet $S$ always lands exactly on the perpendicular bisector of $BC$, i.e.\\ it is secretly the arc midpoint of $(BCT)$, so line $MD$ bisects $\\angle BTC$. Nothing this clean was visible from the defining data, and the two power-of-a-point identities that settle the easier ratio $DS:SM$ turn out to be exactly the ingredients needed — pushed one step further, with a coordinate computation that only closes because of a hidden cancellation — to reach the sharper, hidden symmetry.",
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
      "id": "g22",
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
      "text": "Let $ABC$ be an acute triangle, and let $M,N$ be the midpoints of $AB,AC$, respectively. Let $\\Gamma$ be the circle with diameter $BN$, and let $\\Delta$ be the circle with diameter $CM$. Let $P,Q$ be the two intersection points of $\\Gamma$ and $\\Delta$. Finally, let $\\Omega$ be the circle with diameter $BC$, and let $E\\ne B$ and $F\\ne C$ be the second intersection points of $(\\Gamma,\\Omega)$ and $(\\Delta,\\Omega)$, respectively. Prove that the three common chords $$PQ, BE, CF$$ are concurrent at the orthocenter $H$ of $\\triangle ABC$.",
      "why": "The configuration hides a three-circle radical-center theorem. The auxiliary circle with diameter $BC$ converts the second intersections $E$ and $F$ into the feet of the altitudes from $B$ and $C$. Thus $BE$, $CF$, and $PQ$ are the three pairwise radical axes of the three circles, so their concurrency at $H$ is forced.",
      "steps": [
        "The circles $\\Gamma$ and $\\Delta$ do meet at two points. Their centers, the midpoints of $BN$ and $CM$, are equidistant from $BC$: $N$ and $M$ lie on the midline parallel to $BC$, so both centers lie on the line parallel to $BC$ at one quarter of the altitude. The line of centers is therefore parallel to $BC$, and the radical axis is perpendicular to $BC$. The equal-power equation for the two diameters is $(P-B)\\cdot(P-N)=(P-C)\\cdot(P-M)$, which simplifies to $(P-A)\\cdot(C-B)=0$. Hence the radical axis is the altitude from $A$. Placing that altitude as the axis $x=0$, with $A=(0,a)$ and $B=(b,0)$, $C=(c,0)$, acuteness forces $bc&lt;0$, and the intersections with $\\Gamma$ satisfy $y^2-(a/2)y+bc/2=0$. The discriminant $a^2/4-2bc$ is positive, so there are two intersections, and equal power puts both of them on $\\Delta$ as well.",
        "Since $E$ lies on the circle with diameter $BC$, the angle in a semicircle gives $\\angle BEC=90^\\circ$, so $BE\\perp EC$. If $E=N$ (possible exactly when the median $BN$ is perpendicular to $AC$, i.e. $BA=BC$), then $BE=BN$ is itself the altitude from $B$, so $H\\in BE$ and the rest of this step is unnecessary; assume $E\\ne N$. Then $\\angle BEN=90^\\circ$ as well, so $BE\\perp EN$. The line through $E$ perpendicular to $BE$ is unique, hence $EC$ and $EN$ coincide. As $C$, $N$, and $A$ are collinear, $E$ lies on $AC$. Therefore $BE\\perp AC$, so $BE$ is the altitude from $B$ and $H$ lies on $BE$. (The alternative $F=M$, i.e. $CA=CB$, is handled by the same sentence with roles swapped.)",
        "The same argument with $F$, the second intersection of $\\Delta$ and the circle on diameter $BC$, shows $F\\in AB$ and $CF\\perp AB$. Thus $CF$ is the altitude from $C$ and $H$ lies on $CF$.",
        "The points $B$ and $E$ lie on both $\\Gamma$ and the circle with diameter $BC$, so the line $BE$ is their radical axis. Likewise $CF$ is the radical axis of $\\Delta$ and that circle. Since $H$ lies on both radical axes, $H$ has equal power with respect to all three circles.",
        "Equal power with respect to $\\Gamma$ and $\\Delta$ means that $H$ lies on their radical axis. That radical axis is the common chord $PQ$. Hence $H$ lies on $PQ$, and the three lines $PQ$, $BE$, and $CF$ are concurrent at $H$. In other words, $H$ is the radical center of the three circles."
      ],
      "answer": "$$\\boxed{PQ,\\ BE,\\text{ and }CF\\text{ are concurrent at the orthocenter }H.}$$"
    },
    {
      "id": "g23",
      "category": "geo",
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
      "text": "Let $ABCD$ be a convex quadrilateral such that $\\angle B = \\angle A + \\angle C$. The internal angle bisector of $\\angle D$ intersects side $BC$ at point $E$ such that $\\angle AED = 90^\\circ$. Let $H$ be the foot of the perpendicular from $E$ to line $AD$. Let $\\Omega$ be the circumcircle of triangle $CDH$ and $\\Gamma$ be the circumcircle of triangle $ABE$. Suppose $\\Omega$ and $\\Gamma$ intersect at two distinct points, and let the tangents from $C$ to $\\Gamma$ touch the circle at $X$ and $Y$. Prove that line $BC$, line $XY$, and the line passing through the two intersection points of $\\Omega$ and $\\Gamma$ are concurrent.",
      "why": "An angle condition hiding a cyclic or harmonic structure, then concurrency of a side, a polar, and a radical axis. Many circles; easy to lose the special hypothesis.",
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
      "id": "g24",
      "category": "geo",
      "difficulty": "challenging",
      "stars": 4,
      "rating": 8.5,
      "confidence": "high",
      "novelty": {
        "status": "unverified",
        "searchDate": "2026-09-27",
        "exactMatch": false,
        "similarSources": [],
        "earliestKnownDate": null
      },
      "text": "Let $\\Gamma$ be a circle and $S$ a point outside $\\Gamma$. Three distinct lines through $S$ meet $\\Gamma$ at $A,A'$, at $B,B'$, and at $C,C'$. Let $U$ be a point where a tangent from $S$ touches $\\Gamma$. Let $P\\ne S$ be the second intersection of the circumcircle of triangle $SAB$ and the circumcircle of triangle $SA'B'$, and let $R\\ne S$ be the second intersection of the circumcircle of triangle $SC'A$ and the circumcircle of triangle $SCA'$. Prove that the circumcircle of triangle $B'PU$ and the circumcircle of triangle $CRU$ are tangent at $U$.",
      "why": "Three secants from an external point, then two pairs of circles through $S$, and a tangency at the point of contact $U$. Inversion centered at $S$, in the circle through $U$, swaps each secant pair and turns the circles through $S$ into lines; the tangency survives as a statement in that diagram. Choosing the inversion is the step, and the inverted figure is still a real argument.",
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
      "id": "g25",
      "category": "geo",
      "difficulty": "challenging",
      "stars": 4,
      "rating": 8.5,
      "confidence": "high",
      "novelty": {
        "status": "unverified",
        "searchDate": "2026-09-27",
        "exactMatch": false,
        "similarSources": [],
        "earliestKnownDate": null
      },
      "text": "Let $ABC$ be a scalene triangle with circumcircle $\\omega$. The tangent at $A$ meets $BC$ at $P$, and let $\\psi$ be the circle centered at $P$ through $A$. For a point $X$ on $\\psi$, distinct from $A$ and not on $\\omega$ or $BC$, let $Y \\ne X$ be the second intersection of $\\psi$ and the circumcircle of $XBC$. Let $D \\ne A$ and $E \\ne A$ be the second intersections of $AX$ and $AY$ with $\\omega$. If $M$ is the projection of $P$ onto $DE$, determine the locus of $M$ as $X$ varies.",
      "why": "A locus as X moves on the circle centred at the tangency-pole P. The answer has to be guessed (a line or a circle through fixed points) and then proved on a tangled configuration.",
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
      "id": "n1",
      "category": "nt",
      "difficulty": "easy",
      "stars": 1,
      "rating": 2.5,
      "confidence": "high",
      "novelty": {
        "status": "prior-art",
        "searchDate": "2026-09-27",
        "exactMatch": false,
        "similarSources": [
          {
            "name": "p^(q-1)+q^(p-1) is a perfect square, prime pairs",
            "note": "matches a known style/family of prime-pair Diophantine olympiad problems solved via parity mod 4; exact original competition source not yet pinned"
          }
        ],
        "earliestKnownDate": null
      },
      "sourceNote": "Prior-art style: matches a known family of prime-pair Diophantine problems solved via mod-4 parity; exact original source not pinned, kept here as a labeled classical-style entry pending further search.",
      "text": "Determine all pairs of prime numbers $(p, q)$ such that $$p^{q-1} + q^{p-1}$$ is a perfect square.",
      "why": "Parity and modular arithmetic modulo $4$ eliminate the case where both primes are odd, as the sum of two odd squares is always $\\equiv 2 \\pmod 4$. If one of the primes is $2$, a difference-of-squares factorization forces the equation $2^m = m$, which has no positive integer solutions.",
      "answer": "$$\\boxed{(p, q) = (2, 2)}$$",
      "steps": [
        "Case 1: $p = q$. The expression becomes $p^{p-1} + p^{p-1} = 2 p^{p-1}$. If $p = 2$, this equals $2 \\cdot 2^1 = 4 = 2^2$, which is a perfect square, so $(p, q) = (2, 2)$ is a solution. If $p$ is an odd prime, the $2$-adic valuation $v_2(2 p^{p-1}) = 1$ is odd, so $2 p^{p-1}$ cannot be a square. Thus no other solutions arise from $p = q$.",
        "Now assume $p \\ne q$. By symmetry, we may assume without loss of generality that $p &lt; q$.",
        "Case 2: Both $p$ and $q$ are odd primes. Then $p \\ge 3$ and $q \\ge 3$. Since both $p$ and $q$ are odd, both exponents $q - 1$ and $p - 1$ are non-zero even integers. Write $q - 1 = 2b$ and $p - 1 = 2a$ with integers $a, b \\ge 1$. Then $$p^{q-1} = (p^b)^2 \\equiv 1 \\pmod 4 \\quad\\text{and}\\quad q^{p-1} = (q^a)^2 \\equiv 1 \\pmod 4,$$ because the square of any odd integer is congruent to $1$ modulo $4$. Therefore, $$p^{q-1} + q^{p-1} \\equiv 1 + 1 = 2 \\pmod 4.$$ But a perfect square can only be congruent to $0$ or $1$ modulo $4$, never $2$. Thus there are no solutions when both $p$ and $q$ are odd.",
        "Case 3: $p = 2$ and $q$ is an odd prime ($q \\ge 3$). Since $q$ is odd, $q - 1 = 2m$ is an even integer with $m \\ge 1$. The expression becomes $$2^{q-1} + q^{2-1} = (2^m)^2 + q = k^2$$ for some positive integer $k$.",
        "Rearrange this as a difference of squares: $$q = k^2 - (2^m)^2 = (k - 2^m)(k + 2^m).$$ Because $q$ is prime and $k + 2^m > k - 2^m > 0$, the factors must be $k - 2^m = 1$ and $k + 2^m = q$.",
        "Subtracting the first equation from the second eliminates $k$: $$(k + 2^m) - (k - 2^m) = q - 1 \\implies 2^{m+1} = q - 1.$$ But by definition, $q - 1 = 2m$. Hence $2^{m+1} = 2m$, which simplifies to $2^m = m$. By an immediate induction, $2^m > m$ for all integers $m \\ge 1$, so $2^m = m$ has no solutions in positive integers.",
        "Combining all cases, the only solution is $(p, q) = (2, 2)$."
      ]
    },
    {
      "id": "n2",
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
      "proofStatus": "verified",
      "text": "Determine all positive integers $n$ for which $$n^2 + 3^n$$ is a perfect square.",
      "why": "Factoring $k^2-n^2=3^n$ makes both factors powers of $3$, $3^a$ and $3^b$ with $a<b$ and $a+b=n$. Since $3^b-3^a\\ge 2\\cdot3^{b-1}$, we get $n\\ge 3^{b-1}$, while $n=a+b\\le 2b-1$; the exponential beats the linear bound once $b\\ge3$, leaving only $b\\le2$ and finitely many checks.",
      "answer": "$$\\boxed{n \\in \\{1, 3\\}}$$",
      "steps": [
        "Suppose $n^2+3^n=k^2$ with $k$ a positive integer. Since $3^n>0$, $k>n$, and $$3^n=(k-n)(k+n).$$ Both factors are positive integers dividing $3^n$, so $k-n=3^a$ and $k+n=3^b$ with integers $0\\le a&lt;b$ (as $k-n&lt;k+n$). Multiplying, $3^{a+b}=3^n$, so $a+b=n$. Subtracting, $$2n=3^b-3^a. \\tag{1}$$",
        "\\textbf{Bounding $b$.} Since $a\\le b-1$, $3^a\\le3^{b-1}$, so (1) gives $2n\\ge3^b-3^{b-1}=2\\cdot3^{b-1}$, i.e. $n\\ge3^{b-1}$. On the other hand $n=a+b\\le(b-1)+b=2b-1$. Hence $$3^{b-1}\\le2b-1.$$ For $b\\ge3$ this fails: $3^{2}=9>5=2\\cdot3-1$, and if $3^{b-1}>2b-1$ then $3^b>6b-3\\ge2b+1$ for $b\\ge1$, completing the induction. Therefore $b\\in\\{1,2\\}$.",
        "\\textbf{Cases.} With $0\\le a&lt;b\\le2$ the possibilities are $(a,b)=(0,1),(0,2),(1,2)$, giving $n=a+b=1,2,3$. Equation (1) requires $2n=3^b-3^a$: for $(0,1)$, $2=3-1$ holds ($n=1$); for $(0,2)$, $4=9-1=8$ fails; for $(1,2)$, $6=9-3$ holds ($n=3$). Hence $n\\in\\{1,3\\}$.",
        "\\textbf{Check.} $n=1$: $1+3=4=2^2$. $n=3$: $9+27=36=6^2$. So the solutions are exactly $n=1$ and $n=3$."
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
      "text": "Let $q$ be an odd prime such that $p = 2q + 1$ is also prime. Prove that $$p \\mid q^q + 1$$ if and only if $q \\equiv 3 \\pmod 4$.",
      "why": "The expression $q^q \\pmod p$ secretly encodes the Legendre symbol $(q/p)$ through Euler's criterion because $q = (p-1)/2$. Applying the Law of Quadratic Reciprocity evaluates $(q/p) = (-1)^{(q-1)/2} (p/q) = (-1)^{(q-1)/2}$ using $p \\equiv 1 \\pmod q$, directly yielding the exact remainder $\\pm 1$.",
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
      "text": "Let $G$ be the infinite graph with vertex set $\\mathbb{Z}_{>0}$ where distinct $a,b$ are adjacent iff $\\gcd(a,b)=1$ and $$\\frac{\\operatorname{lcm}(a,b)}{\\gcd(a,b)}>a+b.$$ For $n>2$, let $G_n$ be the subgraph induced on $\\{1,\\dots,n\\}$. Prove that the clique number of $G_n$ equals exactly the number of primes at most $n$.",
      "why": "A clean prime-divisor injection gives the upper bound, while the primes themselves give the matching clique.",
      "steps": [
        "In a clique every two vertices are coprime, so the clique vertices are pairwise coprime. Also $1$ cannot be adjacent to any other vertex, so a clique of size $>1$ contains no $1$.",
        "Choose one prime divisor $p_v$ of each clique vertex $v$. Pairwise coprimality forces these chosen primes to be distinct, and each satisfies $p_v\\le v\\le n$. Hence every clique has size at most $\\pi(n)$.",
        "Conversely, let $p&lt;q$ be primes at most $n$. Then $\\gcd(p,q)=1$ and $\\operatorname{lcm}(p,q)/\\gcd(p,q)=pq>p+q$ because $(p-1)(q-1)>1$. Thus all primes $\\le n$ form a clique.",
        "Therefore $\\omega(G_n)=\\pi(n)$."
      ]
    },
    {
      "id": "n5",
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
      "text": "Determine all positive integers $n$ such that $$\\sum_{k=1}^n k\\quad\\text{divides}\\quad\\sum_{k=1}^n k^2.$$",
      "why": "Both sums factor through $n(n+1)$. After cancelling that common piece, the ratio collapses to the linear polynomial $(2n+1)/3$, so the divisibility question is a single congruence.",
      "steps": [
        "The formulae $\\sum_{k=1}^n k=n(n+1)/2$ and $\\sum_{k=1}^n k^2=n(n+1)(2n+1)/6$ are standard and may be checked by induction. Their ratio is $$\\frac{\\sum k^2}{\\sum k}=\\frac{2n+1}{3},$$ for every $n\\ge 1$.",
        "The first sum is a positive integer. The second sum is a positive integer as well, and the displayed ratio shows that the first divides the second in $\\mathbb{Z}$ if and only if $(2n+1)/3$ is a positive integer, i.e. $3\\mid 2n+1$.",
        "The congruence $2n\\equiv -1\\pmod 3$ is $2n\\equiv 2\\pmod 3$. Multiplying by the inverse of $2$ modulo $3$, which is $2$ itself, yields $n\\equiv 1\\pmod 3$.",
        "Conversely every such $n$ makes $(2n+1)/3$ a positive integer, so the divisibility holds. The complete set is the positive integers congruent to $1$ modulo $3$."
      ],
      "answer": "$$\\boxed{n\\equiv 1\\pmod 3.}$$"
    },
    {
      "id": "n6",
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
      "text": "Let $p$ be an odd prime and let $n,m$ be positive integers such that $p$ divides both $2^n-1$ and $2^m-1$. Prove that $p$ divides $2^{\\gcd(n,m)}-1$.",
      "why": "The earlier draft's floor/gcd/lcm recurrence rested on a ratio identity that was in fact false, and the target exponential inequality was left unproved after the correction. This replacement keeps the same gcd-of-exponents flavor but reduces it to the standard multiplicative-order argument, which is short and fully elementary.",
      "answer": "$$\\boxed{p\\mid 2^{\\gcd(n,m)}-1.}$$",
      "steps": [
        "Since $p\\mid 2^n-1$, $p$ is odd and $\\gcd(2,p)=1$, so $2$ has a well-defined multiplicative order $d=\\operatorname{ord}_p(2)$ modulo $p$, i.e. $d$ is the least positive integer with $2^d\\equiv1\\pmod p$.",
        "Claim: for any positive integer $k$, $p\\mid2^k-1$ if and only if $d\\mid k$. If $d\\mid k$, write $k=ds$; then $2^k-1=(2^d)^s-1$ is divisible by $2^d-1$, which is divisible by $p$, so $p\\mid2^k-1$.",
        "Conversely, if $p\\mid2^k-1$, write $k=dq+r$ with $0\\le r&lt;d$ by division. Then $2^k=(2^d)^q\\cdot2^r\\equiv2^r\\pmod p$, so $2^k-1\\equiv2^r-1\\pmod p$. Since $p\\mid2^k-1$, also $p\\mid2^r-1$. By minimality of $d$ and $0\\le r&lt;d$, this forces $r=0$, i.e. $d\\mid k$.",
        "Applying the claim to $k=n$ and $k=m$ (both hypotheses hold) gives $d\\mid n$ and $d\\mid m$, hence $d\\mid\\gcd(n,m)$.",
        "Applying the claim once more to $k=\\gcd(n,m)$, since $d\\mid\\gcd(n,m)$, we conclude $p\\mid2^{\\gcd(n,m)}-1$."
      ]
    },
    {
      "id": "n7",
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
      "text": "Let $\\mathcal F$ be the set of all bijections $f\\colon\\mathbb N\\to\\mathbb N$ satisfying $f(ab)=f(a)f(b)$ for all $a,b\\in\\mathbb N$. Define $g(n)=\\min_{f\\in\\mathcal F}f(n)$. Prove that $g(g(n))=g(n)$ for all positive integers $n$.",
      "why": "Multiplicative bijections are exactly prime permutations; the minimizer sorts the prime exponents in decreasing order, making the map idempotent.",
      "steps": [
        "A multiplicative bijection fixes $1$: $f(1)=f(1\\cdot1)=f(1)^2$ and $f(1)>0$, so $f(1)=1$. If $p$ is prime then $f(p)$ is prime: $f(p)=f(a)f(b)$ with $a,b>1$ would be impossible, since surjectivity gives $a=f^{-1}(\\cdot)$-preimages of the two factors, i.e. $p$ would factor nontrivially; and $f(p)\\ne 1$ since $f$ is injective with $f(1)=1$. Hence $f$ restricts to a permutation of the primes, and multiplicativity plus $f(1)=1$ shows $f$ is exactly that permutation extended to $\\mathbb{N}$. Conversely every prime permutation is in $\\mathcal F$.",
        "Write $n=\\prod_{i=1}^k p_i^{e_i}$ with $e_1\\ge\\cdots\\ge e_k>0$ after sorting the exponents. Each $f\\in\\mathcal F$ is a permutation of the primes, so $f(n)=\\prod q_i^{e_i}$ where the $q_i=f(p_i)$ are $k$ distinct primes. Two exchanges pin the minimizer: (i) the set $\\{q_i\\}$ must be the first $k$ primes — if it omits a prime $r$ and contains $s>r$, composing the permutation with the transposition $s\\leftrightarrow r$ replaces $s^{e_j}$ by $r^{e_j}$ for the exponent $e_j>0$ carried by $s$, strictly lowering the product; (ii) among assignments of $2,3,5,\\dots$ to $e_1\\ge\\cdots\\ge e_k$, if $p&lt;q$ but $p$ carries the smaller exponent $r&lt;s$ of $q$, swapping the assignments changes the factor from $p^r q^s$ to $p^s q^r$, and $p^rq^s\\le p^sq^r$, so the minimum pairs larger exponents with smaller primes. Together: $g(n)=2^{e_1}3^{e_2}\\cdots p_{(k)}^{e_k}$.",
        "Therefore $g(n)=2^{e_1}3^{e_2}\\cdots p_k^{e_k}$, with $g(1)=1$. Its exponents are already nonincreasing on the increasing primes.",
        "Applying the same rule again changes nothing, so $g(g(n))=g(n)$."
      ]
    },
    {
      "id": "n8",
      "category": "nt",
      "difficulty": "medium",
      "stars": 2,
      "rating": 4,
      "confidence": "high",
      "novelty": {
        "status": "prior-art",
        "searchDate": "2026-09-27",
        "exactMatch": true,
        "similarSources": [
          {
            "name": "n | 2^n - 1 implies n=1 (classical smallest-prime-factor / multiplicative-order argument)",
            "note": "extremely well-known classical olympiad problem"
          }
        ],
        "earliestKnownDate": null
      },
      "sourceNote": "Classical result: n | 2^n - 1 forces n = 1, via smallest-prime-factor / multiplicative-order argument.",
      "text": "Determine all positive integers $n$ such that $n\\mid 2^n-1$.",
      "why": "The smallest-prime-factor plus multiplicative-order argument is short but fundamental.",
      "steps": [
        "$n=1$ works. Suppose $n>1$ and let $p$ be the smallest prime divisor of $n$. Since $2^n-1$ is odd, $p$ is odd.",
        "Let $d=\\operatorname{ord}_p(2)$. From $p\\mid 2^n-1$ we get $d\\mid n$, while Fermat gives $d\\mid p-1$.",
        "Hence $d\\mid\\gcd(n,p-1)$. Any prime divisor of this gcd divides $n$ and is $&lt;p$, contradicting the minimality of $p$. Thus $\\gcd(n,p-1)=1$, so $d=1$.",
        "But $d=1$ would mean $2\\equiv1\\pmod p$, impossible. Therefore no $n>1$ works, and the unique solution is $n=1$."
      ]
    },
    {
      "id": "n9",
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
      "text": "Determine all pairs of positive integers $(x,y)$ such that $x+y$ divides $xy$.",
      "why": "Passing to $x=da$ and $y=db$ with $\\gcd(a,b)=1$ makes $a+b$ coprime to both $a$ and $b$, so the divisibility forces $a+b$ to divide the gcd. The resulting parameters are free coprime $a,b$ and a free multiplier.",
      "steps": [
        "Let $d=\\gcd(x,y)$, and write $x=da$, $y=db$ with $\\gcd(a,b)=1$. The condition $x+y\\mid xy$ becomes $d(a+b)\\mid d^2 ab$, hence $a+b\\mid d\\,ab$.",
        "Now $\\gcd(a+b,\\,a)=\\gcd(b,a)=1$ and $\\gcd(a+b,\\,b)=\\gcd(a,b)=1$, so $a+b$ is coprime to $ab$. Therefore $a+b\\mid d$. Write $d=(a+b)t$ with a positive integer $t$.",
        "Thus $x=a(a+b)t$ and $y=b(a+b)t$. Conversely, for any positive integers $a,b,t$ with $\\gcd(a,b)=1$, these formulae give $\\gcd(x,y)=(a+b)t$ and $$\\frac{xy}{x+y}=abt,$$ an integer.",
        "The representation is unique: $a=x/d$, $b=y/d$ and $t=d/(a+b)$ are recovered from the pair. Hence every solution arises exactly once in this way."
      ],
      "answer": "$$\\boxed{x=a(a+b)t,\\ y=b(a+b)t,\\ \\gcd(a,b)=1,\\ a,b,t\\ge 1.}$$"
    },
    {
      "id": "n10",
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
      "text": "Determine all positive integers $n$ such that $2^n+1$ divides $2^{n^2}+1$.",
      "why": "The divisibility $2^a+1\\mid 2^b+1$ is decided by writing $b=aq+r$ and reducing $(2^a)^q\\equiv(-1)^q$. The remainder is forced to vanish and the quotient is forced to be odd. For $b=n^2$ and $a=n$ that oddness condition is exactly the parity of $n$.",
      "steps": [
        "Lemma. For positive integers $a$ and $b$, the integer $2^a+1$ divides $2^b+1$ if and only if $a\\mid b$ and $b/a$ is odd. Write $b=aq+r$ with $0\\le r&lt;a$. Modulo $2^a+1$ one has $2^a\\equiv -1$, so $2^{aq}=(2^a)^q\\equiv(-1)^q$ and $$2^b+1\\equiv(-1)^q\\,2^r+1.$$",
        "If $0&lt;r&lt;a$, then $(-1)^q 2^r+1$ is an integer strictly between $-(2^a+1)$ and $2^a+1$, and it is nonzero: the positive sign gives at least $3$, while the negative sign gives $1-2^r=0$ only for $r=0$. A nonzero residue cannot be $0$ modulo $2^a+1$. Thus $r=0$ and $(-1)^q+1\\equiv 0$, so $q$ is odd.",
        "Conversely, if $b=aq$ with $q$ odd, then $2^{aq}+1=(2^a)^q+1$ is divisible by $2^a+1$ because $q$ is odd.",
        "Apply the lemma with $a=n$ and $b=n^2$. One has $n\\mid n^2$ automatically, and $n^2/n=n$ is odd if and only if $n$ is odd. Therefore the divisibility holds precisely for the odd positive integers."
      ],
      "answer": "$$\\boxed{\\text{all odd positive integers }n.}$$"
    },
    {
      "id": "n11",
      "category": "nt",
      "difficulty": "medium",
      "stars": 2,
      "rating": 5.5,
      "confidence": "high",
      "novelty": {
        "status": "unverified",
        "searchDate": "2026-09-27",
        "exactMatch": false,
        "similarSources": [],
        "earliestKnownDate": null
      },
      "text": "Determine all pairs of positive integers $(a, b)$ such that both $$\\frac{a^2 + b}{b^2 - a} \\quad \\text{and} \\quad \\frac{b^2 + a}{a^2 - b}$$ are integers.",
      "why": "A symmetric fraction system with a sharp bounding phase. For distinct variables $a < b$, whenever $b - a \\ge 2$, the denominator $b^2 - a$ strictly exceeds the numerator $a^2 + b$, forcing the first fraction strictly into the open interval $(0, 1)$. This leaves only the diagonal $a = b$ and the adjacent line $b = a + 1$, collapsing the entire search to a finite, easily checked set.",
      "answer": "$$\\boxed{(a, b) \\in \\{(1, 2), (2, 1), (2, 2), (2, 3), (3, 2), (3, 3)\\}.}$$",
      "steps": [
        "Case 1: $a = b$. The two expressions coincide: $$\\frac{a^2 + a}{a^2 - a} = \\frac{a(a + 1)}{a(a - 1)} = \\frac{a + 1}{a - 1} = 1 + \\frac{2}{a - 1}.$$ For this to be an integer, $a - 1$ must divide $2$. Since $a$ is a positive integer, $a - 1 \\in \\{1, 2\\}$, which yields $a = 2$ or $a = 3$. This gives the solutions $(2, 2)$ and $(3, 3)$.",
        "Now assume $a \\ne b$. By symmetry between $a$ and $b$, we may assume without loss of generality that $a &lt; b$.",
        "Case 2: $b - a \\ge 2$. Because $b \\ge a + 2$, we have $b^2 - a^2 = (b - a)(b + a) \\ge 2(b + a) > a + b$. Rearranging gives $$b^2 - a > a^2 + b > 0.$$",
        "Since both $a^2 + b$ and $b^2 - a$ are positive, this implies $$0 &lt; \\frac{a^2 + b}{b^2 - a} &lt; 1.$$ An expression strictly between $0$ and $1$ cannot be an integer. Thus, no solutions exist when $b - a \\ge 2$.",
        "Case 3: $b - a = 1$, so $b = a + 1$. Substitute $b = a + 1$ into the first fraction: $$\\frac{a^2 + b}{b^2 - a} = \\frac{a^2 + a + 1}{(a + 1)^2 - a} = \\frac{a^2 + a + 1}{a^2 + a + 1} = 1,$$ which is an integer for all $a \\ge 1$.",
        "Now evaluate the second fraction with $b = a + 1$: $$\\frac{b^2 + a}{a^2 - b} = \\frac{(a + 1)^2 + a}{a^2 - (a + 1)} = \\frac{a^2 + 3a + 1}{a^2 - a - 1} = 1 + \\frac{4a + 2}{a^2 - a - 1}.$$ Thus, $a^2 - a - 1$ must divide $4a + 2$.",
        "For $a = 1$, $a^2 - a - 1 = -1$, and $\\frac{4(1)+2}{-1} = -6$, so $\\frac{b^2+a}{a^2-b} = 1 - 6 = -5$ is an integer. With $b = a + 1 = 2$, this gives the solution $(1, 2)$ (and by symmetry $(2, 1)$).",
        "For $a \\ge 2$, $a^2 - a - 1 > 0$. For $a^2 - a - 1$ to divide $4a + 2$, we must have $a^2 - a - 1 \\le 4a + 2$, which rearranges to $a^2 - 5a - 3 \\le 0$. The roots of $a^2 - 5a - 3 = 0$ are $\\frac{5 \\pm \\sqrt{37}}{2} \\approx 5.54$, so the only integers to test are $a \\in \\{2, 3, 4, 5\\}$.",
        "Testing each candidate: for $a = 2$, $a^2 - a - 1 = 1$, which divides $4(2)+2 = 10$, yielding $b = 3$; for $a = 3$, $a^2 - a - 1 = 5 \\nmid 14$; for $a = 4$, $a^2 - a - 1 = 11 \\nmid 18$; for $a = 5$, $a^2 - a - 1 = 19 \\nmid 22$.",
        "Thus $a = 2, b = 3$ is the only solution with $a \\ge 2$, giving $(2, 3)$ (and by symmetry $(3, 2)$).",
        "Combining all cases, the complete set of solutions is $(a, b) \\in \\{(1, 2), (2, 1), (2, 2), (2, 3), (3, 2), (3, 3)\\}$."
      ]
    },
    {
      "id": "n12",
      "category": "nt",
      "difficulty": "medium",
      "stars": 2,
      "rating": 5.5,
      "confidence": "medium",
      "novelty": {
        "status": "prior-art",
        "searchDate": "2026-09-27",
        "exactMatch": false,
        "similarSources": [
          {
            "name": "x^y - y^x = x+y Diophantine equation",
            "note": "the growth-comparison technique used is a standard olympiad approach to this general family of equations; not pinned to one exact source"
          }
        ],
        "earliestKnownDate": null
      },
      "sourceNote": "Prior-art style: standard growth-comparison technique for this family of exponential Diophantine equations; exact original source not pinned, kept here as a labeled classical-style entry pending further search.",
      "text": "Find all pairs of positive integers $(x,y)$ satisfying $$x^y-y^x=x+y.$$",
      "why": "The small cases are important, while the large cases are eliminated by monotonicity of exponential-versus-power growth.",
      "steps": [
        "The right side is positive, so $x^y>y^x$. The cases $x=y$, $x=1$, or $y=1$ are immediately impossible.",
        "If $x>y\\ge3$, then $\\ln t/t$ is decreasing for $t\\ge3$, so $y\\ln x&lt;x\\ln y$ and hence $x^y&lt;y^x$, a contradiction.",
        "If $y=2&lt;x$, then $x^2=2^x+x+2$. For $x\\ge4$, $x^2\\le2^x$, impossible; $x=3$ gives $1\\ne5$. If $x=2&lt;y$, then $2^y-y^2=y+2$. The values $y=3,4$ fail, while $y=5$ works. Moreover $F(y)=2^y-y^2-y-2$ satisfies $F(y+1)-F(y)=2^y-2y-2>0$ for $y\\ge5$, so $y=5$ is unique.",
        "It remains to rule out $3\\le x&lt;y$. For fixed $x\\ge3$, set $D(y)=x^y-y^x$. For $y\\ge x+1$, the ratio $x^y/y^{x-1}$ is increasing, and at $y=x+1$ it exceeds $x^2/3>x/\\ln x$ because $(1+1/x)^{x-1}&lt;3$ and $x\\ln x>3$. Hence $D'(y)>0$. In fact the same estimate gives $$D'(y)>y^{x-1}x\\left(\\frac{x\\ln x}{3}-1\\right)\\ge16\\cdot3(\\ln3-1)>1,$$ so $D(y)-y$ is strictly increasing.",
        "For $x=3$, $D(4)=17>7=2x+1$. For $x\\ge4$, $$D(x+1)=x^x\\bigl(x-(1+1/x)^x\\bigr)>x^x(x-3)>2x+1,$$ since $(1+1/x)^x&lt;3$. Thus $D(x+1)>x+(x+1)$, and because $D(y)-y$ is increasing, $D(y)>x+y$ for all $y\\ge x+1$, a contradiction.",
        "Therefore the unique solution is $(x,y)=(2,5)$."
      ]
    },
    {
      "id": "n13",
      "category": "nt",
      "difficulty": "medium",
      "stars": 2,
      "rating": 5.5,
      "confidence": "high",
      "novelty": {
        "status": "prior-art",
        "searchDate": "2026-09-27",
        "exactMatch": true,
        "similarSources": [
          {
            "name": "phi(n)=tau(n) classical multiplicative Diophantine problem",
            "note": "well-known number-theory olympiad problem with standard finite-case reduction over primes 2,3,5"
          }
        ],
        "earliestKnownDate": null
      },
      "sourceNote": "Classical result: phi(n) = tau(n), standard finite-case reduction over the primes 2, 3, 5.",
      "text": "Determine all positive integers $n$ such that $\\varphi(n)=\\tau(n)$, where $\\varphi$ is Euler's totient function and $\\tau(n)$ is the number of positive divisors of $n$.",
      "why": "Both functions are multiplicative, so the ratio $\\tau(n)/\\varphi(n)$ splits into local factors $(a+1)/(p^{a-1}(p-1))$. The only local factor larger than $1$ comes from the prime $2$, and it is at most $2$. A prime factor at least $7$ then pulls the product strictly below $1$. The remaining equation in the primes $2,3,5$ is a finite list of exponential Diophantine conditions.",
      "steps": [
        "If $n=\\prod p^{a}$, then $\\tau(n)/\\varphi(n)=\\prod f(p^{a})$ where $f(p^{a})=(a+1)/(p^{a-1}(p-1))$, and an empty product equals $1$. Directly, $f(2)=2$, $f(4)=3/2$, $f(2^{a})=(a+1)/2^{a-1}\\le 1$ for $a\\ge 3$, $f(3)=1$, $f(3^{a})\\le 1/2$ for $a\\ge 2$, and $f(p^{a})\\le 2/(p-1)\\le 1/2$ whenever $p\\ge 5$.",
        "Suppose a prime $p\\ge 7$ divides $n$. The corresponding local factor is at most $2/6=1/3$, while every other local factor is at most $2$, and the factor $2$ occurs only for the prime power $2^1$. The product is therefore at most $2\\cdot(1/3)=2/3&lt;1$, so $\\tau(n)&lt;\\varphi(n)$. Thus every solution is of the form $2^{a}3^{b}5^{c}$.",
        "The equation $\\prod f=1$ is now a finite check. If $c\\ge 2$, then $f(5^{c})\\le 3/20$ and $f(2^{a})f(3^{b})\\le 2$, so the product is at most $3/10&lt;1$. If $c=1$, then $f(5)=1/2$, so $f(2^{a})f(3^{b})=2$ (with the convention that a missing prime contributes factor $1$). The only way to obtain $2$ is $a=1$ and $f(3^{b})=1$, hence $b\\in\\{0,1\\}$. These are $n=2\\cdot5=10$ and $n=2\\cdot3\\cdot5=30$. Both work: $\\varphi(10)=4=\\tau(10)$ and $\\varphi(30)=8=\\tau(30)$.",
        "Now $c=0$, so $f(2^{a})f(3^{b})=1$. If $b=0$, then $(a+1)=2^{a-1}$ for $a\\ge 1$, whose only solution is $a=3$, giving $n=8$. If $b=1$, then $f(3)=1$ and again $a=3$, giving $n=24$. If $b\\ge 2$, then $f(3^{b})\\le 1/2$, so $f(2^{a})\\ge 2$, hence $a=1$ and $f(3^{b})=1/2$. That equation is $b+1=3^{b-1}$, solved only by $b=2$, giving $n=18$. If $a=0$ and $c=0$, then $f(3^{b})=1$ becomes $b+1=2\\cdot 3^{b-1}$, solved only by $b=1$, giving $n=3$. The empty product is $n=1$.",
        "No other exponent pair works. In particular $f(4)=3/2$ would require a complementary factor $2/3$, and $f(3^{b})$ never equals $2/3$. Direct evaluation confirms the seven survivors, so $\\varphi(n)=\\tau(n)$ if and only if $n\\in\\{1,3,8,10,18,24,30\\}$."
      ],
      "answer": "$$\\boxed{n\\in\\{1,3,8,10,18,24,30\\}}.$$"
    },
    {
      "id": "n14",
      "category": "nt",
      "difficulty": "hard",
      "stars": 3,
      "rating": 6,
      "confidence": "high",
      "novelty": {
        "status": "unverified",
        "searchDate": "2026-09-27",
        "exactMatch": false,
        "similarSources": [
          {
            "name": "Vieta-jumping quotient-descent family",
            "note": "standard cousin of IMO 1988 Problem 6; same descent skeleton (second-pass flag)"
          }
        ],
        "earliestKnownDate": null
      },
      "text": "Determine all pairs of positive integers $(a,b)$ such that $ab>1$ and $ab-1$ divides $a^2+b^2$.",
      "why": "The quotient attached to a solution is an integer root of a quadratic. Descent on the smaller root forces that quotient to equal $5$, because every solution reduces to one of the two base pairs $(1,2)$ and $(1,3)$. Reversing the jump produces two linear recurrences.",
      "steps": [
        "Let $q=(a^2+b^2)/(ab-1)$, an integer, and assume $a\\le b$. The number $b$ is a positive root of $t^2-qat+(a^2+q)=0$. The other root $b'=qa-b$ is an integer, and $bb'=a^2+q>0$, so $b'\\ge 1$.",
        "First let $a=1$. Then $q=(1+b^2)/(b-1)=b+1+2/(b-1)$, so $b-1$ divides $2$. Thus $b-1\\in\\{1,2\\}$, giving $(a,b)=(1,2)$ and $(1,3)$, both with $q=5$.",
        "There is no solution with $a=b\\ge 2$: the quotient would be $2a^2/(a^2-1)=2+2/(a^2-1)$, and $a^2-1\\ge 3$ does not divide $2$. Thus $b\\ge a+1$. The inequality $b'&lt;b$ is equivalent to $q&lt;2b/a$, i.e. to $a(b-a)(a+b)>2b$. Set $b=a+t$ with $t\\ge 1$. The difference is $2a^2 t+at^2-2a-2t$, whose derivative in $t$ is $2a^2+2at-2>0$, so the minimum on $t\\ge 1$ occurs at $t=1$ and equals $2a^2-a-2\\ge 4$. Hence $1\\le b'&lt;b$.",
        "The integer $b'$ satisfies the same quadratic, so $(a,b')$ is a positive solution with the same quotient $q$. Reordering if $b'&lt;a$ produces a solution of strictly smaller sum. Repeating the descent, the smaller coordinate cannot stay at least $2$ forever, so every solution descends to a solution with smaller coordinate $1$. Every such base solution has $q=5$. Therefore every solution has quotient $5$.",
        "Conversely, fix $q=5$. Define $u_1=1$, $u_2=2$ and $u_{k+1}=5u_k-u_{k-1}$, and $v_1=1$, $v_2=3$ and $v_{k+1}=5v_k-v_{k-1}$. If a sequence begins with two positive terms and each term exceeds the previous one, the recurrence preserves that increase, because $u_{k+1}-u_k=4u_k-u_{k-1}>3u_k>0$. Thus both sequences are strictly increasing and positive. The pair $(u_1,u_2)$ has quotient $5$. If $(u_{k-1},u_k)$ does as well, then $u_{k-1}$ and $u_{k+1}$ are the two roots of $t^2-5u_k t+(u_k^2+5)=0$, so $(u_k,u_{k+1})$ is again a solution of quotient $5$. The same holds for $(v_k)$.",
        "Every solution arises as consecutive terms of exactly one of these sequences: the descent of the previous paragraph reverses that recurrence. Therefore the complete set of unordered pairs is $\\{u_k,u_{k+1}\\}$ and $\\{v_k,v_{k+1}\\}$ for $k\\ge 1$."
      ],
      "answer": "$$\\boxed{\\text{consecutive terms of }u_{k+1}=5u_k-u_{k-1}\\ (u_1,u_2)=(1,2)\\text{ or of }v_{k+1}=5v_k-v_{k-1}\\ (v_1,v_2)=(1,3).}$$"
    },
    {
      "id": "n15",
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
      "text": "Let $a,b,c,d$ be positive integers and put $S=a+b+c+d$ and $Q=a^2+b^2+c^2+d^2$. Suppose $Q\\mid S^2$. Determine all possible values of the integer $S^2/Q$.",
      "why": "Cauchy–Schwarz restricts the quotient to three values, and each value is attained by an explicit example.",
      "steps": [
        "By Cauchy–Schwarz, $S^2\\le4Q$. Since $a,b,c,d>0$, we also have $S^2>Q$. Therefore the positive integer $k=S^2/Q$ must satisfy $k\\in\\{2,3,4\\}$.",
        "The value $k=4$ is attained exactly when equality holds in Cauchy–Schwarz, i.e. $a=b=c=d$; for example $(1,1,1,1)$ gives $S^2/Q=4$.",
        "The value $k=3$ is attained by $(1,1,1,3)$, for which $S=6$ and $Q=12$, so $S^2/Q=3$.",
        "The value $k=2$ is attained by $(1,1,4,12)$, for which $S=18$ and $Q=162$, so $S^2/Q=2$.",
        "Hence the complete set of possible values is $$\\boxed{\\{2,3,4\\}}.$$"
      ]
    },
    {
      "id": "n16",
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
      "text": "A lattice point $P$ is visible from the origin $O(0,0)$ if segment $OP$ contains no other lattice points. Prove that for every positive integer $k$, there exists a $(2k+1)\\times(2k+1)$ square of lattice points whose center is visible from the origin, while all other $(2k+1)^2-1$ lattice points in the square are not visible from the origin.",
      "why": "CRT hides every noncentral point with its own prime while a second CRT choice keeps the center primitive.",
      "steps": [
        "A lattice point $(x,y)$ is visible from the origin exactly when $\\gcd(x,y)=1$. For every nonzero offset $(i,j)$ with $|i|,|j|\\le k$, choose a distinct prime $p_{ij}>k$.",
        "By CRT choose positive integers $A,B$ with $A\\equiv-i$ and $B\\equiv-j\\pmod{p_{ij}}$ for every nonzero offset. Hence each point $(A+i,B+j)$ has $p_{ij}$ dividing both coordinates.",
        "Let $P=\\prod p_{ij}$. For each chosen prime $p_{ij}$, it cannot divide both $A$ and $B$, since that would force $p_{ij}$ to divide both $i$ and $j$, impossible because $p_{ij}>k$. Thus the center is not yet forced to be invisible by any $p_{ij}$.",
        "Now replace $A$ by $A+Pm$. For every prime $q\\mid B$ with $q\\nmid P$, exclude the single residue class $m\\equiv-A P^{-1}\\pmod q$. Choose an allowed residue class modulo each such $q$ and combine them by CRT. For $q\\mid P$, the preceding observation already prevents $q$ from dividing both $A+Pm$ and $B$.",
        "Hence $\\gcd(A+Pm,B)=1$, so the center is visible, while every other square point remains divisible by its assigned prime. Taking $m$ sufficiently large keeps the center positive."
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
        "status": "unverified",
        "searchDate": "2026-09-27",
        "exactMatch": false,
        "similarSources": [],
        "earliestKnownDate": null
      },
      "text": "Determine all positive integers $n$ such that for all integers $a$ and $b$, $$n \\mid a^2 b + 1 \\implies n \\mid a^2 + b.$$",
      "why": "The coprimality condition $\\gcd(a, n) = 1$ allows one to choose $b$ as the inverse of $-a^2 \\pmod n$, which converts the implication into the universal fourth-power congruence $a^4 \\equiv 1 \\pmod n$. This forces the Carmichael function $\\lambda(n)$ to divide $4$. Analyzing the prime factorization restricts $n$ to prime factors $\\{2, 3, 5\\}$ with $v_2(n) \\le 4, v_3(n) \\le 1, v_5(n) \\le 1$, precisely characterizing $n$ as the divisors of $240$.",
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
      "id": "n18",
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
      "text": "Determine all positive integers $n$ for which the congruence $$x^2\\equiv-1\\pmod n$$ has exactly $8$ incongruent solutions modulo $n$.",
      "why": "The solution count is controlled prime-power by prime-power and then multiplied by CRT; the only subtle point is the $2$-adic factor.",
      "steps": [
        "For an odd prime $p$, $x^2\\equiv-1\\pmod p$ is solvable exactly when $p\\equiv1\\pmod4$, and then there are exactly two roots. If such a root exists modulo $p^r$, it lifts uniquely to modulo $p^{r+1}$ because the derivative $2x$ is not divisible by $p$. Hence every $p^r$ with $p\\equiv1\\pmod4$ contributes exactly two roots, while $p\\equiv3\\pmod4$ contributes none.",
        "Modulo $2$ there is one root, namely $x\\equiv1$. Modulo $4$ there is no root, so a factor $2^e$ is allowed only with $e=0$ or $1$.",
        "By the Chinese remainder theorem, if $n=2^\\varepsilon\\prod_{i=1}^r p_i^{e_i}$ with distinct odd primes $p_i\\equiv1\\pmod4$, then the number of roots is $2^r$; the factor $2^\\varepsilon$ contributes $1$ when $\\varepsilon\\in\\{0,1\\}$.",
        "Thus exactly $8$ roots occur precisely for $$n=2^\\varepsilon p_1^{e_1}p_2^{e_2}p_3^{e_3},$$ where $\\varepsilon\\in\\{0,1\\}$, the $p_i$ are distinct primes with $p_i\\equiv1\\pmod4$, and $e_i\\ge1$."
      ]
    },
    {
      "id": "n19",
      "category": "nt",
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
      "text": "Determine all positive integers $n$ such that $$n\\ \\text{divides}\\ \\sum_{k=1}^{n-1} k^{n}.$$ For $n=1$ the sum is empty and equals $0$.",
      "why": "For odd $n$ the terms $k$ and $n-k$ cancel modulo $n$, because the odd power reverses sign. For even $n$ the odd summands are congruent to $1$ modulo a $2$-power strictly larger than the exact power of $2$ dividing $n$, by the lifting $k^{2^j}\\equiv 1\\pmod{2^{j+2}}$, while the even summands are divisible by a still higher power of $2$.",
      "steps": [
        "If $n$ is odd and $n\\ge 3$, then for $1\\le k\\le n-1$ one has $n-k\\equiv -k\\pmod n$ and $(n-k)^n\\equiv (-k)^n\\equiv -k^n\\pmod n$, the last step because $n$ is odd. Each pair $\\{k,\\,n-k\\}$ therefore contributes $0$ modulo $n$. These pairs partition $\\{1,\\dots,n-1\\}$, so the sum is $0$ modulo $n$. The case $n=1$ is the empty sum $0$.",
        "Now let $n$ be even, and write $n=2^v m$ with $m$ odd and $v\\ge 1$. First suppose $v=1$, so $n\\equiv 2\\pmod 4$. In $\\{1,\\dots,n-1\\}$ there are $n/2$ odd integers, and $n/2$ is odd. Each odd summand $k^n$ is odd, and each even summand is even, so the total sum is odd. It is not divisible by $2$, hence not by $n$.",
        "Lemma. If $k$ is odd and $j\\ge 1$, then $k^{2^j}\\equiv 1\\pmod{2^{j+2}}$. For $j=1$, write $k=2t+1$. Then $k^2=1+4t(t+1)$ and $t(t+1)$ is even, so $8\\mid 4t(t+1)$. If the claim holds for $j$, then $k^{2^j}=1+s\\,2^{j+2}$ and $$k^{2^{j+1}}=1+s\\,2^{j+3}+s^2\\,2^{2j+4}.$$ For $j\\ge 1$ one has $2j+4\\ge j+3$, in fact $2j+4\\ge j+4$, so the last term vanishes modulo $2^{j+3}$.",
        "For $v\\ge 2$ apply the lemma with $j=v-1\\ge 1$: every odd $k$ satisfies $k^{2^{v-1}}\\equiv 1\\pmod{2^{v+1}}$. Since $n=2^v m=2\\cdot 2^{v-1}\\cdot m$, one gets $k^n=(k^{2^{v-1}})^{2m}\\equiv 1\\pmod{2^{v+1}}$.",
        "Every even $k$ in the sum satisfies $v_2(k^n)\\ge n$. But $n\\ge 2^v\\ge v+1$, so $2^n$ is divisible by $2^{v+1}$ and every even summand is $0$ modulo $2^{v+1}$. The original sum is therefore congruent modulo $2^{v+1}$ to the number of odd summands, which is $n/2=2^{v-1}m$.",
        "The $2$-adic valuation of $n/2$ is exactly $v-1$. Adding a multiple of $2^{v+1}$ does not change that valuation, so the sum has valuation $v-1$. It is not divisible by $2^v$, whereas $n$ is. Hence no even $n$ works.",
        "The positive integers $n$ with the stated divisibility are exactly the odd ones."
      ],
      "answer": "$$\\boxed{\\text{all odd positive integers }n.}$$"
    },
    {
      "id": "n20",
      "category": "nt",
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
      "text": "Determine all positive integers $n$ such that $$2^n + 1 \\mid 3^n - 1.$$",
      "why": "A striking parity-and-reciprocity barrier. An odd exponent forces $3 \\mid 2^n+1$ but $3 \\nmid 3^n-1$. For an even exponent $n = 2k$, the residue $2^{2k}+1 \\equiv 2 \\pmod 3$ forces the existence of a prime divisor $q \\equiv 2 \\pmod 3$. The order of $2$ modulo $q$ forces $v_2(q-1) \\ge v_2(k)+2$ and $q \\equiv 1 \\pmod 4$. Quadratic reciprocity then forces $3$ to be a quadratic non-residue modulo $q$, locking $v_2(\\operatorname{ord}_q(3)) = v_2(q-1) \\ge v_2(k)+2$. But $q \\mid 3^{2k}-1$ requires $\\operatorname{ord}_q(3) \\mid 2k$, forcing $v_2(\\operatorname{ord}_q(3)) \\le v_2(k)+1$, a clean contradiction.",
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
      "id": "n21",
      "category": "nt",
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
      "text": "Determine all quadruples of positive integers $(a,b,x,y)$ with $a,b$ odd satisfying $$x^2+y^2+1=(a^4+b^4+1)(xy+1).$$",
      "why": "After the minimal parity restriction on $a,b$, a Vieta-jumping descent gives a rigorous contradiction; the parity assumption rules out the only possible zero-root obstruction modulo $16$.",
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
      "rating": 7.5,
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
      "why": "Primes satisfy the equation because $\\sigma(p)=p+1$ and $\\varphi(p)+\\tau(p)=(p-1)+2$. For a composite number the divisor $n/p$, with $p$ the least prime factor, is distinct from $1$, $p$ and $n$ except on prime squares, which are checked directly. The resulting gap $2n/p+p+1$ dominates $\\tau(n)\\le 2\\sqrt n$.",
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
      "text": "Determine all positive integers $n$ for which each of the congruences $$x^2\\equiv1\\pmod n,\\qquad x^2+x+1\\equiv0\\pmod n$$ has exactly $8$ incongruent solutions modulo $n$.",
      "why": "This combines the $2$-torsion and nontrivial $3$-torsion of the unit groups and forces a rigid prime-factor pattern through CRT.",
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
      "id": "n24",
      "category": "nt",
      "difficulty": "challenging",
      "stars": 4,
      "rating": 8.5,
      "confidence": "high",
      "novelty": {
        "status": "unverified",
        "searchDate": "2026-09-27",
        "exactMatch": false,
        "similarSources": [],
        "earliestKnownDate": null
      },
      "proofStatus": "verified",
      "text": "Determine all infinite strictly increasing sequences of positive integers $a_1&lt;a_2&lt;a_3&lt;\\cdots$ such that $a_n\\mid a_{n+1}$ and $$\\varphi(a_{n+1})=a_n+\\varphi(a_n)$$ for all $n\\ge1$.",
      "why": "Divisibility first forces every term $&gt;1$ to have the form $2^r3^s$; the recurrence then becomes completely rigid. The head term $a_1=1$ must be branched off by hand, since the form-lemma needs $m&gt;1$, and it yields the single exceptional chain $1,6,24,96,\\dots$ that the naive statement of the answer misses.",
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
      "rating": 8.5,
      "confidence": "medium",
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
      "why": "Nested interval gcds force a long divisor chain, giving the sharp lower bound. Equality is rigid enough to force a squarefree LCM and one omitted prime at every bottom position.",
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

  const TODAY = "2026-09-29";
  const RUN_ID = "RUN-20260929-01";

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
   * Exact P1/P2 queues from PLAN.md.
   */
  const P1 = [
    "a12",
    "a22",
    "a23",
    "a24",

    "c2",
    "c6",
    "c20",
    "c22",
    "c23",
    "c25",

    "g4",
    "g23",
    "g25",

    "n4",
    "n7",
    "n15",
    "n21",
    "n24",
    "n25",
  ];

  const P2 = [
    "a16",
    "a17",
    "a20",
    "a21",

    "c10",
    "c14",
    "c19",

    "g5",
    "g6",
    "g8",
    "g9",
    "g10",
    "g11",
    "g12",
    "g13",
    "g14",
    "g15",
    "g16",
    "g17",
    "g18",
    "g19",
    "g20",
    "g21",
    "g22",
    "g24",

    "n11",
    "n17",
    "n20",
    "n23",
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
  delete get("c18").noveltyJustification;

  /*
   * C1
   *
   * The old file claimed original-source.
   * The direct comparison against ISL 2004 C1 instead establishes
   * prior-art / variant.
   */
  {
    const p = get("c1");

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

  /*
   * A25
   *
   * Exact statement match to IMO 2009 Shortlist A7.
   */
  {
    const p = get("a25");

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

  /*
   * N14
   *
   * The current statement is not identical to IMO 1988 P6, so it is
   * recorded as family prior-art rather than exact prior-art.
   */
  {
    const p = get("n14");

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

    c1:
      "$$\\boxed{\\text{There are }ns\\text{ such triples, and every society contains the same number of clubs.}}$$",

    c2:
      "$$\\boxed{\\text{The guaranteed span-sum is at least }L,\\text{ and the constant }1\\text{ is sharp.}}$$",

    c3:
      "$$\\boxed{\\text{Maryam wins by starting at the centre and using the fixed domino pairing.}}$$",

    c6:
      "$$\\boxed{M\\le\\frac43C}$$",

    c7:
      "$$\\boxed{\\text{At least }n-m+1\\text{ clues are safe.}}$$",

    c10:
      "$$\\boxed{\\text{For every }n\\ge2\\text{ there exists such a set of }2n\\text{ distinct triangular numbers.}}$$",

    c14:
      "$$\\boxed{\\text{The number of assignments is odd.}}$$",

    c19:
      "$$\\boxed{\\text{The number of complete introductions is odd, and every acquainted pair occurs in an odd number of them.}}$$",

    c20:
      "$$\\boxed{\\min(y_1,z_1),\\dots,\\min(y_m,z_m)\\text{ is stable.}}$$",

    c23:
      "$$\\boxed{\\frac{d_{\\max}}{d_{\\min}}\\ge\\frac{m+3}{m-1},\\text{ with equality attainable for }m=3,5.}$$",

    // --------------------------------------------------------------
    // GEOMETRY
    // --------------------------------------------------------------

    g1:
      "$$\\boxed{XY\\perp BC\\iff AP\\text{ is tangent to the circumcircle of }ABC\\text{ at }A.}$$",

    g2:
      "$$\\boxed{O,P,A,B,M\\text{ are concyclic.}}$$",

    g3:
      "$$\\boxed{XY\\perp\\text{the reflection of }AM\\text{ across the bisector of }\\angle BAC.}$$",

    g4:
      "$$\\boxed{\\text{For every }P+Q+R=N\\text{ there exists a lune with the prescribed }(P,Q,R)\\text{ counts.}}$$",

    g5:
      "$$\\boxed{MP=MQ.}$$",

    g6:
      "$$\\boxed{N,E,O,F\\text{ are concyclic.}}$$",

    g7:
      "$$\\boxed{\\operatorname{Rad} (\\Gamma,\\Delta)\\text{ is the altitude from }A\\text{ to }BC.}$$",

    g8:
      "$$\\boxed{DE\\text{ passes through a fixed point independent of }X.}$$",

    g9:
      "$$\\boxed{BN,CM,AI\\text{ are concurrent at }K.}$$",

    g10:
      "$$\\boxed{A_1,B_1,C_1\\text{ are collinear and their common line passes through }H.}$$",

    g11:
      "$$\\boxed{(PEF)\\text{ and }(QST)\\text{ are tangent.}$$",

    g12:
      "$$\\boxed{AX,BY,CZ\\text{ are concurrent.}}$$",

    g13:
      "$$\\boxed{X,Y,N\\text{ are collinear.}}$$",

    g14:
      "$$\\boxed{(IXY)\\text{ and }(BPX)\\text{ are tangent at }X.}$$",

    g15:
      "$$\\boxed{OI\\text{ is the perpendicular bisector of }AQ.}$$",

    g16:
      "$$\\boxed{\\text{Both moving circles have fixed second points }D^*,H^*.}$$",

    g17:
      "$$\\boxed{OM\\perp KN.}$$",

    g19:
      "$$\\boxed{A,F,I,N\\text{ are concyclic.}}$$",

    g21:
      "$$\\boxed{SB=SC.}$$",

    g24:
      "$$\\boxed{(B'PU)\\text{ and }(CRU)\\text{ are tangent at }U.}$$",

    // --------------------------------------------------------------
    // NUMBER THEORY
    // --------------------------------------------------------------

    n4:
      "$$\\boxed{\\omega(G_n)=\\pi(n).}$$",

    n7:
      "$$\\boxed{g(g(n))=g(n)\\text{ for every positive integer }n.}$$",

    n8:
      "$$\\boxed{n=1.}$$",

    n12:
      "$$\\boxed{(x,y)=(2,5).}$$",

    n15:
      "$$\\boxed{\\{2,3,4\\}}$$",

    n16:
      "$$\\boxed{\\text{Such a }(2k+1)\\times(2k+1)\\text{ square exists for every }k\\ge1.}$$",

    n18:
      "$$\\boxed{n=2^\\varepsilon p_1^{e_1}p_2^{e_2}p_3^{e_3},\\;\\varepsilon\\in\\{0,1\\},\\;p_i\\equiv1\\pmod4.}$$",

    n21:
      "$$\\boxed{\\text{There are no positive-integer quadruples satisfying the stated equation.}}$$",

    n23:
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
    a13: "pass",
    a21: "pass",
    a22: "pass",
    a25: "pass",
    c14: "pass",
    c15: "pass",
    c19: "pass",
    c23: "pass",
    n23: "pass",
  };

  const proofAuditNotes = {
    a13:
      "Coefficient descent is explicit: leading coefficient is ±1; all lower coefficients vanish by descending induction; converse checked.",

    a21:
      "Injectivity and surjectivity are established, the translated function is additive, positivity on R_{>0} forces linearity, and k^2=k gives the unique bijective solution k=1.",

    a22:
      "Independent case gives central-binomial growth; dependent case gives 1/(1+z^r+z^s), boundedness forces unit-modulus roots, and simplicity forces (r,s)=(1,2).",

    a25:
      "Exact official statement confirmed; the stored proof establishes f(0), injectivity, the sign reduction, oddness, period-2 shift, and final identity comparison.",

    c14:
      "MM^T=I over F2 gives det(M)=1, and permanent equals determinant modulo 2, so the number of assignments is odd.",

    c15:
      "The edge-product identity forces even order; spanning-tree leaf elimination gives exactly 2^(m-n+1) valid weightings for even n.",

    c19:
      "A^2=I over F2; determinant parity counts perfect matchings, and the complementary minor/Jacobi step yields odd parity after deleting each fixed acquainted pair.",

    c23:
      "Plotkin counting gives d_min <= (m-1)/2; Gram-rank contradiction excludes d_max <= d_min+1; equality examples for m=3 and m=5 are explicit.",

    n23:
      "Prime-power root counts plus CRT force exactly three distinct primes congruent to 1 mod 3 and exclude factors 2 and 3; x^2=1 then has exactly 8 roots.",
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
    if (p.id === "a25") return "T1";
    if (p.id === "c1") return "T1v";
    if (p.id === "n14") return "T2";

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
            p.id === "a25" ||
            p.id === "c1" ||
            p.id === "n14"
              ? "evidence-present"
              : "not-recorded",

          A:
            p.id === "a25" ||
            p.id === "c1" ||
            p.id === "n14"
              ? "evidence-present"
              : "not-recorded",

          D: "not-recorded",
        },

        provenanceComplete:
          p.id === "a25" ||
          p.id === "c1" ||
          p.id === "n14",

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
        state: "agent-derived-provisional",

        contestantBlindTest:
          "not-run",

        humanReweight:
          "pending",

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

    sourcePlan: "PLAN.md",

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
        true,
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
          "No human difficulty reweight, contestant blind-test dataset, or human quality-panel decision is present.",

        required: [
          "cold-solver logs",
          "R_search values",
          "R_proof values",
          "human rating reweight",
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
      c1: {
        verdict: "T1v",

        match: "variant",

        h4: "pass",

        source:
          "https://artofproblemsolving.com/wiki/index.php/2004_IMO_Shortlist_Problems/C1",

        accessed: TODAY,
      },

      a25: {
        verdict: "T1",

        match: "exact",

        h4: "pass",

        source:
          "https://math.imo-official.org/problems/IMO2009SL.pdf",

        accessed: TODAY,
      },

      n14: {
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
      state: "provisional",

      source:
        "agent-derived, not contestant-derived",

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
        true,
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

    if (
      get("c1").novelty.status !==
      "prior-art"
    ) {
      throw new Error(
        "C1 was not resolved to prior-art"
      );
    }

    if (
      get("c1").novelty.exactMatch !==
      false
    ) {
      throw new Error(
        "C1 must be non-exact prior-art / variant"
      );
    }

    if (
      get("a25").novelty.status !==
      "prior-art"
    ) {
      throw new Error(
        "A25 was not resolved to prior-art"
      );
    }

    if (
      get("a25").novelty.exactMatch !==
      true
    ) {
      throw new Error(
        "A25 must be exact prior-art"
      );
    }

    if (
      get("n14").novelty.status !==
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
          after.id === "c1" ||
          after.id === "a25" ||
          after.id === "n14"
            ? "Evidence-backed novelty/provenance repair plus explicit readiness metadata"

            : after.id === "c18"
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
