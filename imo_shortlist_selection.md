# IMO Shortlist 2027: Proposed 36-Problem Selection
### Chosen from the 100-problem dataset to cover the three IMO difficulty slots: P1/P4, P2/P5 and P3/P6

> I read your “imo1/3, imo2/4, imo3/6” as the three IMO slot pairs P1/P4, P2/P5 and P3/P6. If you meant something else, the slot assignments in §2 are the only part that changes.

---

## 1 · Summary

| Slot | Meaning | Dataset rating | Algebra | Combinatorics | Geometry | Number Theory | Total |
|:--|:--|:-:|:-:|:-:|:-:|:-:|:-:|
| **P1 / P4** | Opening problem of each day | rating 4.0 – 5.5 | 3 | 3 | 3 | 3 | **12** |
| **P2 / P5** | Middle problem of each day | rating 6.0 – 7.5 | 3 | 3 | 4 | 3 | **13** |
| **P3 / P6** | Closing problem of each day | rating ≥ 8.0 | 3 | 3 | 2 | 3 | **11** |
| **All** | | | **9** | **9** | **9** | **9** | **36** |

**Why this shape**

- Every subject has at least 2 candidates in every slot, so a paper with any subject mix can be assembled (two sample papers in §6).
- Geometry has only 2 problems rated ≥ 8.0 that I would stand behind (G24, G25), so it gets 4 in the middle slot instead; G21 and G22 (rated 7.5) can also serve as an easier closing problem.
- The 36 are not simply the top 36 by score: I enforced the slot ranges, nine problems per subject, and avoided repeating a mechanism (§5).
- Mean total score of the selection: **34.1** / 50 (dataset mean 27.6).

---

## 2 · The Selection by Slot

Labels (A1 … N9) follow the shortlist convention: within each subject, numbered by increasing difficulty. “Dataset ID” is the id in `problems.js`. Scores come from the earlier rubric report (AE, CN, SD, IS judged; DP = rating).

### P1 / P4 · rating 4.0 – 5.5

| Label | Dataset ID | Subject | *r* | AE | CN | SD | IS | **Total** | Why it earns a place |
|:-:|:-:|:--|:-:|:-:|:-:|:-:|:-:|:-:|:--|
| **A1** | A8 | Algebra | 4.5 | 7.0 | 4.5 | 5.0 | 5.0 | **26.0** | Four-square theorem plus induction: neat, but one-idea. |
| **A2** | A11 | Algebra | 5.0 | 8.0 | 4.0 | 3.5 | 5.0 | **25.5** | Very natural statement, but standard substitution ladder. |
| **A3** | A12 | Algebra | 5.0 | 7.5 | 4.5 | 4.0 | 5.5 | **26.5** | Symmetric-function flavour; solid but conventional polynomial FE. |
| **C1** | C8 | Combinatorics | 4.0 | 7.5 | 5.0 | 6.0 | 5.0 | **27.5** | Permanent equals determinant over F₂: a lovely twist on oddtown. |
| **C3** | C11 | Combinatorics | 4.5 | 6.0 | 5.0 | 5.5 | 5.0 | **26.0** | Hypercube-edge acyclicity is nice but buried under a story. |
| **C2** | C12 | Combinatorics | 4.5 | 5.5 | 5.0 | 4.5 | 5.0 | **24.5** | Linear hypergraph counting with 4/3; narrative obscures it. |
| **G1** | G9 | Geometry | 4.5 | 8.0 | 5.0 | 6.0 | 5.5 | **29.0** | Polar/harmonic argument on incircle; short and clean. |
| **G2** | G11 | Geometry | 5.0 | 7.5 | 5.0 | 5.0 | 5.5 | **28.0** | Short excircle statement; power-of-point chain. |
| **G3** | G12 | Geometry | 5.0 | 8.5 | 6.5 | 6.0 | 6.5 | **32.5** | Original-feeling lune counting; inversion separates points. |
| **N1** | N12 | Number Theory | 5.0 | 8.0 | 4.5 | 5.5 | 5.5 | **28.5** | Reduces to unit-group exponent dividing 4; nice reformulation. |
| **N2** | N14 | Number Theory | 5.0 | 7.5 | 5.5 | 5.0 | 5.5 | **28.5** | Swapping the quantifier makes the count trivial: a good aha. |
| **N3** | N15 | Number Theory | 5.0 | 8.0 | 6.0 | 6.0 | 6.0 | **31.0** | Free-monoid structure and rearrangement; elegant. |

### P2 / P5 · rating 6.0 – 7.5

| Label | Dataset ID | Subject | *r* | AE | CN | SD | IS | **Total** | Why it earns a place |
|:-:|:-:|:--|:-:|:-:|:-:|:-:|:-:|:-:|:--|
| **A4** | A15 | Algebra | 6.0 | 7.5 | 6.0 | 6.0 | 6.5 | **32.0** | Dilation-eigenfunction idea is real; good mid-paper problem. |
| **A6** | A20 | Algebra | 7.0 | 8.0 | 8.0 | 8.5 | 7.0 | **38.5** | Order-3 Möbius map and norm condition (Hilbert 90 flavour); deep but degree ≤ 2 is restrictive. |
| **A5** | A21 | Algebra | 7.0 | 6.5 | 6.5 | 7.5 | 6.0 | **33.5** | Fourier/circulant spectrum behind it; two parts dilute the statement. |
| **C4** | C19 | Combinatorics | 7.0 | 8.0 | 6.5 | 6.5 | 7.0 | **35.0** | Natural game on a mutilated board; matching-theory criterion decides it. |
| **C5** | C21 | Combinatorics | 7.0 | 7.5 | 7.5 | 7.0 | 7.0 | **36.0** | Unexpected link to odd entries of Pascal's triangle. |
| **C6** | C22 | Combinatorics | 7.5 | 6.0 | 8.0 | 7.5 | 7.0 | **36.0** | Weighted Caro–Wei type bound; potential Φ is handed over. |
| **G4** | G19 | Geometry | 7.0 | 7.0 | 6.0 | 7.0 | 6.5 | **33.5** | Locus question; same pencil family as G8 and G18. |
| **G5** | G20 | Geometry | 7.0 | 7.5 | 7.0 | 7.0 | 7.0 | **35.5** | Inversion and Simson-type collinearity; clean statement. |
| **G6** | G21 | Geometry | 7.5 | 7.0 | 7.0 | 6.5 | 7.0 | **35.0** | Symmetric cyclic construction; cubic ratio via inversion. |
| **G7** | G22 | Geometry | 7.5 | 6.5 | 7.0 | 7.5 | 7.0 | **35.5** | Miquel/Brocard structure behind tangent circles. |
| **N4** | N20 | Number Theory | 7.0 | 7.5 | 6.5 | 7.5 | 7.0 | **35.5** | Cyclotomic Φ₃ and unit-group torsion; symmetric pair of conditions. |
| **N5** | N21 | Number Theory | 7.0 | 8.0 | 6.5 | 8.0 | 6.5 | **36.0** | Visibility as Gaussian-integer divisibility; elegant but known theory. |
| **N6** | N22 | Number Theory | 7.5 | 5.5 | 7.0 | 6.5 | 7.0 | **33.5** | Vieta descent with odd fourth powers; constant a⁴ + b⁴ + 1 is contrived. |

### P3 / P6 · rating ≥ 8.0

| Label | Dataset ID | Subject | *r* | AE | CN | SD | IS | **Total** | Why it earns a place |
|:-:|:-:|:--|:-:|:-:|:-:|:-:|:-:|:-:|:--|
| **A7** | A22 | Algebra | 8.0 | 8.5 | 8.5 | 8.5 | 8.0 | **41.5** | Striking 'bounded iff v = u²'; cyclotomic polynomials hide in 1 + z + z². |
| **A8** | A24 | Algebra | 8.5 | 8.5 | 8.0 | 7.0 | 8.0 | **40.0** | Sleek statement; sign-character/divisibility argument is surprising. |
| **A9** | A25 | Algebra | 9.0 | 7.0 | 8.5 | 8.0 | 7.5 | **40.0** | Deep squaring-cocycle structure; the term cluster looks engineered. |
| **C7** | C23 | Combinatorics | 8.5 | 7.0 | 8.5 | 8.0 | 7.5 | **39.5** | Plotkin-type two-distance argument with sharp small cases. |
| **C8** | C24 | Combinatorics | 8.5 | 8.0 | 7.5 | 9.0 | 7.5 | **40.5** | Lattice of stable price vectors (assignment-game theory) in elementary dress. |
| **C9** | C25 | Combinatorics | 9.0 | 8.0 | 9.0 | 8.5 | 7.5 | **42.0** | Local parity forces a quadratic form; min and count via Walsh sums. |
| **G8** | G24 | Geometry | 8.5 | 5.5 | 8.0 | 7.0 | 7.5 | **36.5** | Tangency of two circles after heavy construction; deep core. |
| **G9** | G25 | Geometry | 9.0 | 6.5 | 8.0 | 7.5 | 7.0 | **38.0** | Inversion at tangent length makes tangency visible; long to state. |
| **N7** | N23 | Number Theory | 8.0 | 7.5 | 7.5 | 7.5 | 7.5 | **38.0** | φ and divisibility chain force the form 2ʳ3ˢ; sharp. |
| **N8** | N24 | Number Theory | 8.5 | 8.5 | 8.0 | 7.5 | 8.0 | **40.5** | Extremely clean statement; order/LTE argument is deep. |
| **N9** | N25 | Number Theory | 9.0 | 7.5 | 9.0 | 8.5 | 7.5 | **41.5** | Divisibility-lattice rank counting; fresh and structural. |

---

## 3 · Master Table: Full Shortlist in 2027 Order

| Label | Dataset ID | *r* | Total | Verification | Statement edit before use |
|:-:|:-:|:-:|:-:|:--|:--|
| **A1** | A8 | 4.5 | 26.0 | Outline read; not machine-checked | None needed |
| **A2** | A11 | 5.0 | 25.5 | Answer set matches the outline; classical-type FE | None needed |
| **A3** | A12 | 5.0 | 26.5 | ✔ Polynomial solutions of degree ≤ 4 solved symbolically: {0, 3, x} | None needed |
| **A4** | A15 | 6.0 | 32.0 | Outline read; not machine-checked | None needed |
| **A5** | A21 | 7.0 | 33.5 | ✔ Numerical optimisation n = 4…7 reproduces both extremal values | Present as one question; keep part (b) only if time allows |
| **A6** | A20 | 7.0 | 38.5 | ✔ Lifting test with Q of degree ≤ 8: exactly {1, x², x−x²} survive | None needed |
| **A7** | A22 | 8.0 | 41.5 | ✔ Sequences to 60 000: bounded for v = u² (u = 2, 3, 4), unbounded for all other pairs tested | None needed |
| **A8** | A24 | 8.5 | 40.0 | ✔ Four solutions satisfy the equation; −\|x\|, −√(x²+1) fail | None needed |
| **A9** | A25 | 9.0 | 40.0 | Both solutions (f ≡ 2, f(n) = n+2) check algebraically; completeness not machine-checked | None needed |
| **C1** | C8 | 4.0 | 27.5 | ✔ Random families, n = 2…5: assignment count always odd | None needed |
| **C2** | C12 | 4.5 | 24.5 | ✔ Random linear hypergraphs: ratio never exceeds 4/3 and reaches it | Remove the constellation story; state as linear 3-uniform hypergraph |
| **C3** | C11 | 4.5 | 26.0 | ✔ Random tests: at least n−m+1 safe directions | Remove the detective story; state it as vertices of an n-cube and edge directions |
| **C4** | C19 | 7.0 | 35.0 | ✔ Matching computation: exactly 31 winning squares (colour of removed corner) | Rename the players; check against published vertex-geography problems |
| **C5** | C21 | 7.0 | 36.0 | ✔ Exhaustive over all merge orders for n ≤ 9; formula to n < 300 | None needed |
| **C6** | C22 | 7.5 | 36.0 | ✔ 4 000 random weighted graphs: optimum ≥ Φ, equality attained | None needed |
| **C7** | C23 | 8.5 | 39.5 | ✔ m = 3 exhaustive (bound 3 attained); m = 5 search attains 2 | None needed |
| **C8** | C24 | 8.5 | 40.5 | ✔ 949 random instances: componentwise minimum of stable vectors is stable | None needed |
| **C9** | C25 | 9.0 | 42.0 | ✔ Exact computation n = 2…7: minimum and count match the closed form | None needed |
| **G1** | G9 | 4.5 | 29.0 | ✔ Numerical test, 300 random triangles (error ≈ 1e−11) | None needed |
| **G2** | G11 | 5.0 | 28.0 | ✔ Numerical test, 300 random triangles | None needed |
| **G3** | G12 | 5.0 | 32.5 | Argument checked by hand (ordering of tangent-circle thresholds) | None needed |
| **G4** | G19 | 7.0 | 33.5 | ✔ Locus verified numerically to be a circle (residual ≈ 1e−14) | Ask for the locus as a named circle |
| **G5** | G20 | 7.0 | 35.5 | ✔ Numerical test, 300 random cyclic quadrilaterals | None needed |
| **G6** | G21 | 7.5 | 35.0 | ✔ Numerical test, 300 random triangles | None needed |
| **G7** | G22 | 7.5 | 35.5 | ✔ Numerical test, 300 random cyclic quadrilaterals | None needed |
| **G8** | G24 | 8.5 | 36.5 | ✔ Numerical test, 300 random triangles | None needed |
| **G9** | G25 | 9.0 | 38.0 | ✔ Numerical test, 300 random configurations | None needed |
| **N1** | N12 | 5.0 | 28.5 | ✔ Brute force n < 300: valid n are exactly the divisors of 240 | None needed |
| **N2** | N14 | 5.0 | 28.5 | ✔ Direct count for p = 3, 5, 7, 11, 13 | None needed |
| **N3** | N15 | 5.0 | 31.0 | ✔ Idempotence for n < 3000; g matches brute-force minimum for n < 400 | None needed |
| **N4** | N20 | 7.0 | 35.5 | ✔ Search to 3600: smallest solutions 1729, 2821, 3367 (products of three primes ≡ 1 mod 3) | None needed |
| **N5** | N21 | 7.0 | 36.0 | ✔ All m < 3000 agree with the stated characterisation | None needed |
| **N6** | N22 | 7.5 | 33.5 | Search finds no solutions (a, b odd ≤ 11, x < 3000); consistent with the outline’s proof | State as “Prove that no such quadruple exists” |
| **N7** | N23 | 8.0 | 38.0 | ✔ Chain search consistent: only a_n = 2ʳ3ˢ4ⁿ⁻¹ and the 1, 6, 24, … branch | None needed |
| **N8** | N24 | 8.5 | 40.5 | ✔ No n < 3000; proof via order of 3 and 2 mod a prime q ≡ 2 (mod 3) re-derived | State as “Prove that 2ⁿ+1 never divides 3ⁿ−1”: the answer set is empty |
| **N9** | N25 | 9.0 | 41.5 | Minimum n and extremal triangles re-derived (chain argument); small cases checked | None needed |

*✔ = checked by computation in this session. A finite check is evidence, not a proof; every problem still needs a full jury solution.*

---

## 4 · Reserves (Next Best, by Slot)

| Slot | Reserves in order | Reason they missed the cut |
|:--|:--|:--|
| **P1 / P4** | A9, A13, C14, C13, G14, N13, N17 | Overlap with a chosen problem (A12; C14 repeats the matching theme of C19 and C24), long statement (C13), or classical technique (N17) |
| **P2 / P5** | A17, C18, C16, G18, N19 | A17 is a standard FE; C18 shares a mechanism with C25; C16 has three parts; G18 repeats G19’s pencil of circles; N19 overlaps N20 and N12 |
| **P3 / P6** | A23, G23 | A23 is the same FE family as A24; G23 can be done by direct computation (verified true, but low discrimination) |

---

## 5 · Balance and Risk Checks

**Mechanism overlap inside the selection**

- Matching theory appears in C19 and C24 (different mechanisms: a game criterion and a lattice of prices).
- Linear algebra over F₂ appears in C8 and C25; they are far apart in difficulty and technique.
- Unit-group/CRT structure appears in N12 and N20, again at different levels.
- Functional equations: A8, A11, A24, A25 (four of nine Algebra problems), plus polynomial equations A12 and A20.

**Gaps in the dataset**

- The dataset has few strong inequalities. Only A21 is selected; a real shortlist would normally add one or two more.
- No hard-tier Geometry besides G24 and G25.

**Originality risk (important)**

Web searches I ran for the most suspicious statements returned nothing conclusive, so **I cannot confirm that any problem is original.** The following resemble well-known problem types and need a formal prior-art check before use: A2 (A11), A4 (A15), A8 (A24), C4 (C19), C8 (C24), N3 (N15), N5 (N21). C19 uses player names that suggest an existing competition source.

**Answer-set caveats**

- N24 and N22 have an *empty* answer set; phrase them as “prove that no …”.
- N20 has an infinite answer family; the smallest solution is 1729.

---

## 6 · Sample Papers (Feasibility Check)

| | P1 | P2 | P3 | P4 | P5 | P6 |
|:--|:-:|:-:|:-:|:-:|:-:|:-:|
| **Paper I** | G2 (Geo, 5) | A6 (Alg, 7) | N9 (Num, 9) | C3 (Com, 4.5) | G7 (Geo, 7.5) | A7 (Alg, 8) |
| **Paper II** | N1 (Num, 5) | C5 (Com, 7) | G9 (Geo, 9) | A3 (Alg, 5) | N4 (Num, 7) | C8 (Com, 8.5) |

Both papers rise in difficulty within each day, keep P3 and P6 in different subjects, and cover all four subjects.

---

## Appendix · Statements of the 36 Selected Problems

Statements are reproduced from `problems.js` (HTML entities decoded). Apply the edits in §3 before circulating.

### Algebra

**A1** · A8 · rating 4.5 · slot P1 / P4

> Find all strictly increasing functions $f:\mathbb{N}_0\to\mathbb{N}_0$ such that $$f(a^{2}+b^{2}+c^{2}+d^{2})=f(a)^{2}+f(b)^{2}+f(c)^{2}+f(d)^{2}\qquad\text{for all }a,b,c,d\in\mathbb{N}_0.$$

**A2** · A11 · rating 5.0 · slot P1 / P4

> Find all functions $f:\mathbb Z\to\mathbb Z$ such that $$f(x+y)+f(xy)=f(x)f(y)+1\qquad\text{for all }x,y\in\mathbb Z.$$

**A3** · A12 · rating 5.0 · slot P1 / P4

> Find all polynomials $P:\mathbb{R}\to\mathbb{R}$ such that $$P(x^{2}+y^{2})=P(x+y)^{2}-2P(xy)\qquad\text{for all real }x,y.$$

**A4** · A15 · rating 6.0 · slot P2 / P5

> Find all nonzero polynomials $P\in\mathbb{Q}[x]$ such that $P(n)$ is an integer for every positive integer $n$, and $P(a)$ divides $P(b)$ whenever $a$ and $b$ are positive integers with $a\mid b$.

**A5** · A21 · rating 7.0 · slot P2 / P5

> Let $n\ge4$ and let real numbers $x_1,\dots,x_n$ satisfy $$x_1+\cdots+x_n=0,\qquad x_1^{2}+\cdots+x_n^{2}=n(n-1),$$ with indices read cyclically ($x_{n+1}=x_1$).<ol><li>Prove $$\sum_{i=1}^{n}x_ix_{i+1}\le n(n-1)\cos\frac{2\pi}{n},$$ with equality if and only if $x_i=\sqrt{2(n-1)}\,\sin\!\big(\tfrac{2\pi i}{n}+\varphi\big)$ for some phase $\varphi$.</li><li>Determine the minimum of $\sum x_ix_{i+1}$ under the same constraints, and characterize the minimizers.</li></ol>

**A6** · A20 · rating 7.0 · slot P2 / P5

> Let $T(x)=1-\dfrac1x$. Determine all real polynomials $P$ of degree at most $2$ for which there exists a nonzero polynomial $Q$ with $$P(x)=\frac{Q(x)}{Q(T(x))}\qquad\text{for all real }x\text{ where both sides are defined.}$$

**A7** · A22 · rating 8.0 · slot P3 / P6

> Let $1<u<v$ be integers. Define $a_1=1$ and $$a_n+a_{n/u}+a_{n/v}=0\qquad(n\ge 2),$$ where $a_k=0$ whenever $k$ is not an integer. Prove that $(a_n)$ is bounded if and only if $v=u^2$.

**A8** · A24 · rating 8.5 · slot P3 / P6

> Find all functions $f: \mathbb{R} \to \mathbb{R}$ satisfying $$f(x f(y) - y f(x)) = f(x) f(y) - xy$$ for all real numbers $x$ and $y$.

**A9** · A25 · rating 9.0 · slot P3 / P6

> Find all functions $f:\mathbb{N}\to\mathbb{N}$ satisfying $$f(abc)+f(2af(b))+f(2bf(c))+f(2cf(a))=f(a)f(b)f(c)$$ for all $a,b,c\in\mathbb{N}$.

### Combinatorics

**C1** · C8 · rating 4.0 · slot P1 / P4

> Let $X$ be an $n$-element set, and let $A_1,A_2,\dots,A_n$ be subsets of $X$ such that <ol><li>$|A_i|$ is odd for every $i$;</li><li>$|A_i\cap A_j|$ is even whenever $i\ne j$.</li></ol><br>An <em>assignment</em> is a choice of pairwise distinct elements $x_1,\dots,x_n\in X$ with $x_i\in A_i$ for every $i$. Prove that the number of assignments is odd.

**C2** · C12 · rating 4.5 · slot P1 / P4

> In a night sky, constellations of three stars are charted such that no two share more than one star. Starlight links two stars whenever they belong to the same constellation. <ol><li>Two constellations form a <em>conjunction</em> if they share a star.</li><li>A trio of stars forms a <em>mirage</em> if they are pairwise linked by starlight, yet form no constellation.</li></ol><br>Prove that the number of mirages is at most $\dfrac43$ the number of conjunctions.

**C3** · C11 · rating 4.5 · slot P1 / P4

> In a mysterious investigation bureau, there are $m$ detectives and $n$ secret clues, where $n\ge m\ge2$. Each detective has access to a distinct combination of these clues. One day, the chief inspector burns exactly one clue from the archives. A clue is called <em>safe</em> if, after its destruction, no two detectives become indistinguishable based on the clues they still possess.<br><br>Show that at least $n-m+1$ clues are safe.

**C4** · C19 · rating 7.0 · slot P2 / P5

> One corner square is cut off an $8\times 8$ chessboard; two remaining squares are adjacent when they share an edge. Maryam fixes a token on some square $s$ of the board - that square counts as visited. Iman then moves the token first, and the players alternate: each move takes the token along an edge to a square not yet visited, which then becomes visited. The player who cannot move loses. Determine exactly the starting squares $s$ from which the first player Iman can force a win.

**C5** · C21 · rating 7.0 · slot P2 / P5

> There are $n$ piles, each with a token of value $1$. In each step, choose two piles with values $A$ and $B$ and merge them into a pile of value $A+B+\min(A,B)$. Repeat $n-1$ times.<br><br>Prove that the maximum possible value of the final pile equals the number of odd entries in the first $n$ rows of Pascal's triangle, i.e. the number of pairs $(x,y)$ with $0\le x\le y<n$ for which $\binom yx$ is odd.

**C6** · C22 · rating 7.5 · slot P2 / P5

> Let $G$ be a finite simple graph, with a positive real number $w(v)$ attached to each vertex $v$. A move chooses a vertex $v$, earns $w(v)$, and deletes $v$ together with all its neighbors. For an induced subgraph $H$ define $$\Phi(H)=\sum_{v\in V(H)}\frac{w(v)^3}{\sum_{u\in N_H[v]}w(u)^2},$$ where $N_H[v]$ is the closed neighborhood of $v$ in $H$. Prove that there is a sequence of moves whose total earnings are at least $\Phi(G)$.

**C7** · C23 · rating 8.5 · slot P3 / P6

> Let $m\ge3$ be odd. A school has $m$ students and $n\ge m+2$ clubs; no two clubs have the same membership set. For two clubs, their <em>discord</em> is the number of students in exactly one of them. Let $d_{\min}$ and $d_{\max}$ be the minimum and maximum discords. Prove that $$\frac{d_{\max}}{d_{\min}}\ge\frac{m+3}{m-1}.$$ Show that the bound is attained for $m=3$ and $m=5$.

**C8** · C24 · rating 8.5 · slot P3 / P6

> Let $n<m$ be positive integers. Let $a_{ij}$ be real numbers for $1\le i\le n$ and $1\le j\le m$. We say a sequence of real numbers $x_1,\dots,x_m$ is <em>stable</em> if we can choose $n$ pairwise distinct integers $c_1,\dots,c_n\in\{1,\dots,m\}$ such that $$a_{i,c_i}-x_{c_i}\ge a_{ij}-x_j \quad\text{for all }1\le i\le n\text{ and }1\le j\le m.$$ Prove that if two sequences $y=(y_1,\dots,y_m)$ and $z=(z_1,\dots,z_m)$ are stable, then the sequence $u$ defined by $u_j=\min(y_j,z_j)$ is also stable.

**C9** · C25 · rating 9.0 · slot P3 / P6

> For $n\ge2$, identify the vertices of the $n$-dimensional cube with the binary vectors in $\{0,1\}^n$. Color every vertex black or white, and call the coloring square-odd if every $2$-dimensional face contains an odd number of black vertices. Determine the minimum possible number of black vertices, and determine the number of square-odd colorings attaining that minimum.

### Geometry

**G1** · G9 · rating 4.5 · slot P1 / P4

> Let the incircle of $\triangle ABC$ with incenter $I$ touch $BC$, $CA$, $AB$ at $D$, $E$, $F$ respectively, with $CA\ne CB$. Let $M$ be the intersection of lines $AB$ and $DE$ (which exists exactly when $CA\ne CB$). The line through $M$ perpendicular to $IM$ meets lines $DF$ and $EF$ at $P$ and $Q$ respectively. Prove that $MP = MQ$.

**G2** · G11 · rating 5.0 · slot P1 / P4

> Let $\triangle ABC$ be a scalene triangle with $A$-excircle touching $BC$ at $D$. Let $M$ be the midpoint of the altitude from $A$. Line $MD$ meets the $A$-excircle again at $T$. Let $S\ne T$ be the second intersection of line $MD$ with the circumcircle of $\triangle BCT$. Prove that $$\boxed{SB=SC}.$$

**G3** · G12 · rating 5.0 · slot P1 / P4

> Let a <em>lune</em> be the region between two internally tangent circles. Given $N$ distinct points in the plane, prove that for any non-negative integers $P,Q,R$ with $P+Q+R=N$, there exist two internally tangent circles bounding a lune such that exactly $P$ of the points lie strictly inside the smaller circle, exactly $Q$ lie strictly inside the lune, and exactly $R$ lie strictly outside the larger circle.

**G4** · G19 · rating 7.0 · slot P2 / P5

> Let $ABC$ be a scalene triangle with circumcircle $\omega$. The tangent at $A$ meets $BC$ at $P$, and let $\psi$ be the circle centered at $P$ through $A$. For each admissible point $X\in\psi$, meaning $X\ne A$, $X\notin\omega\cup BC$, the circle $(XBC)$ has a second intersection $Y\ne X,A$ with $\psi$, and the second intersections $D\ne A$ and $E\ne A$ of $AX$ and $AY$ with $\omega$ exist and satisfy $D\ne E$. If $M$ is the projection of $P$ onto $DE$, determine the locus of $M$ as $X$ varies over all admissible positions.

**G5** · G20 · rating 7.0 · slot P2 / P5

> Let $ABCD$ be a convex cyclic quadrilateral with circumcenter $O$. Assume that no two opposite sides are parallel and that neither $AC$ nor $BD$ is a diameter of the circumcircle. Let $P=AC\cap BD$. Let $M\ne O$ be the second intersection of the circumcircles of triangles $AOC$ and $BOD$. Let $X,Y$ be the perpendicular projections of $M$ onto the lines $AB,CD$, respectively, and let $N$ be the midpoint of $PM$. Prove that $X,Y,N$ are collinear.

**G6** · G21 · rating 7.5 · slot P2 / P5

> Let $ABC$ be an acute scalene triangle with circumcircle $\Gamma$. The tangent to $\Gamma$ at $A$ meets $BC$ at $T_A$, and let $\omega_A$ be the circle through $A$ tangent to $BC$ at $T_A$. Let $P\ne A$ be the second intersection of $\omega_A$ with $\Gamma$. Define $Q$ and $R$ cyclically at $B$ and $C$, and assume $P,Q,R$ are pairwise distinct. Let $Z=PQ\cap AB$, $X=QR\cap BC$, and $Y=RP\cap CA$. Prove that $AX,BY,CZ$ are concurrent.

**G7** · G22 · rating 7.5 · slot P2 / P5

> Let $ABCD$ be a convex cyclic quadrilateral with circumcenter $O$. Assume that all named intersections below are finite. Let $P=AB\cap CD$ and $Q=AD\cap BC$. Let $E$ and $F$ be the midpoints of $AB$ and $CD$, respectively. Let $S=EF\cap AD$ and $T=EF\cap BC$. Prove that the circumcircles of $\triangle PEF$ and $\triangle QST$ are tangent.

**G8** · G24 · rating 8.5 · slot P3 / P6

> Let $ABC$ be a scalene triangle with incenter $I$. Let $P$ be an interior point such that $\angle PBA=\angle ICB$ and $\angle PCA=\angle IBA$. Let $B'=PB\cap AI$ and $C'=PC\cap AI$. Through $B'$ draw the line parallel to $AB$, meeting $BI$ at $X$; through $C'$ draw the line parallel to $AC$, meeting $CI$ at $Y$. Prove that the circumcircle of triangle $IXY$ and the circumcircle of triangle $BPX$ are tangent at $X$.

**G9** · G25 · rating 9.0 · slot P3 / P6

> Let $\Gamma$ be a circle and $S$ a point outside $\Gamma$. Three distinct lines through $S$ meet $\Gamma$ at $A,A'$, at $B,B'$, and at $C,C'$. Let $U$ be a point where a tangent from $S$ touches $\Gamma$. Let $P\ne S$ be the second intersection of the circumcircle of triangle $SAB$ and the circumcircle of triangle $SA'B'$, and let $R\ne S$ be the second intersection of the circumcircle of triangle $SC'A$ and the circumcircle of triangle $SCA'$. Prove that the circumcircle of triangle $B'PU$ and the circumcircle of triangle $CRU$ are tangent at $U$.

### Number Theory

**N1** · N12 · rating 5.0 · slot P1 / P4

> Determine all positive integers $n$ such that for all integers $a$ and $b$, $$n \mid a^2 b + 1 \implies n \mid a^2 + b.$$

**N2** · N14 · rating 5.0 · slot P1 / P4

> Let $p$ be an odd prime, and let us work with the $p$ remainders $0,1,\dots,p-1$ after division by $p$ (so two quantities are 'equal' when their difference is divisible by $p$). For each remainder $a$, let $N(a)$ be the number of ordered pairs $(x,y)$ of remainders satisfying $$x^{2}+a\,xy+y^{2}\equiv 1\pmod p.$$ Determine the sum $$N(0)+N(1)+\cdots+N(p-1)$$ in terms of $p$.

**N3** · N15 · rating 5.0 · slot P1 / P4

> Let $\mathcal F$ be the set of all bijections $f\colon\mathbb N\to\mathbb N$ satisfying $f(ab)=f(a)f(b)$ for all $a,b\in\mathbb N$. Define $g(n)=\min_{f\in\mathcal F}f(n)$. Prove that $g(g(n))=g(n)$ for all positive integers $n$.

**N4** · N20 · rating 7.0 · slot P2 / P5

> Determine all positive integers $n$ for which each of the congruences $$x^2\equiv1\pmod n,\qquad x^2+x+1\equiv0\pmod n$$ has exactly $8$ incongruent solutions modulo $n$.

**N5** · N21 · rating 7.0 · slot P2 / P5

> A lattice point is a point $(x,y)$ whose two coordinates are integers. It is called <em>visible</em> from the origin if the open line segment joining it to $(0,0)$ contains no lattice point. For a positive integer $m$, let $C_m$ be the set of lattice points on the circle $x^{2}+y^{2}=m$ centered at the origin.<br><br>Determine, in terms of the prime factorization of $m$, exactly when $C_m$ is nonempty but contains <em>no</em> point visible from the origin.

**N6** · N22 · rating 7.5 · slot P2 / P5

> Determine all quadruples of positive integers $(a,b,x,y)$ with $a,b$ odd satisfying $$x^2+y^2+1=(a^4+b^4+1)(xy+1).$$

**N7** · N23 · rating 8.0 · slot P3 / P6

> Determine all infinite strictly increasing sequences of positive integers $a_1<a_2<a_3<\cdots$ such that $a_n\mid a_{n+1}$ and $$\varphi(a_{n+1})=a_n+\varphi(a_n)$$ for all $n\ge1$.

**N8** · N24 · rating 8.5 · slot P3 / P6

> Determine all positive integers $n$ such that $$2^n + 1 \mid 3^n - 1.$$

**N9** · N25 · rating 9.0 · slot P3 / P6

> Let $n\ge2$. A gcd triangle of order $n$ is a triangular array of positive integers $(a_{i,j})_{1\le j\le i\le n}$ satisfying $a_{i,j}=\gcd(a_{i+1,j},a_{i+1,j+1})$ for $i<n$, with all $\binom{n+1}{2}$ entries pairwise distinct. Let $L=\operatorname{lcm}(a_{n,1},\dots,a_{n,n})$. Determine the minimum possible value of $\Omega(L)$, counted with multiplicity, and find all gcd triangles attaining it.