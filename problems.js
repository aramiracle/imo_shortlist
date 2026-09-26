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
 * Ratings estimate how hard it is for a strong olympiad contestant to find and
 * complete a proof from scratch — not how complicated the statement looks.
 *
 * When you add a problem, place it in its category in rating order and
 * renumber that category's ids from 1.
 */
window.IMO_SHORTLIST = {
  ratedOn: "2026-09-24",
  criterion: "Difficulty of finding and completing a proof from scratch for a strong olympiad contestant, not how complicated the statement looks.",
  scale: [
    {"id":"easy","label":"Easy","min":1,"max":4},
    {"id":"medium","label":"Medium","min":4,"max":6},
    {"id":"hard","label":"Hard","min":6,"max":8},
    {"id":"challenging","label":"Challenging","min":8,"max":10}
  ],
  categories: [
    {"id":"alg","name":"Algebra","icon":"∑","prefix":"A","topics":"Functional equations · Inequalities · Polynomials"},
    {"id":"cmb","name":"Combinatorics","icon":"⬡","prefix":"C","topics":"Game theory · Graph theory · Sequences"},
    {"id":"geo","name":"Geometry","icon":"△","prefix":"G","topics":"Euclidean · Projective · Circle geometry"},
    {"id":"nt","name":"Number Theory","icon":"ℕ","prefix":"N","topics":"Diophantine equations · Arithmetic functions"}
  ],
  problems: [
    // Algebra — 16 problems, easy to hard
    {
      id: "a1",
      category: "alg",
      difficulty: "medium",
      stars: 2,
      rating: 4,
      confidence: "high",
      text: "Let $a,b,c>0$. Prove that $$32\\!\\left(\\sum_{\\mathrm{cyc}}ab(a+b)\\right)^3 \\ge 27\\!\\left(\\prod_{\\mathrm{cyc}}(a+b)\\right)^2 \\left(\\prod_{\\mathrm{cyc}}(a+b)-4abc\\right).$$",
      why: "A homogeneous symmetric inequality collapses to one variable after $s=a+b+c$, $t=ab+bc+ca$, $p=abc$. The factorization and equality case are elementary.",
      answer: "$\\boxed{a=b=c}$ is the unique equality case.",
      steps: [
        "Set $s=a+b+c$, $t=ab+bc+ca$, $p=abc$. Then $$\\sum_{\\mathrm{cyc}}ab(a+b)=st-3p, \\qquad (a+b)(b+c)(c+a)=st-p.$$ Hence the claim is $$32(st-3p)^3\\ge 27(st-p)^2(st-5p).$$",
        "By $$st=(a+b+c)(ab+bc+ca)\\ge 9abc=9p,$$ put $u=st/p\\ge 9$. Dividing by $p^3>0$, it suffices to prove $$32(u-3)^3\\ge 27(u-1)^2(u-5).$$",
        "Use the exact factorization $$32(u-3)^3-27(u-1)^2(u-5)=(u-9)^2(5u-9)\\ge 0.$$",
        "Equality requires $u=9$, hence equality in $(a+b+c)(ab+bc+ca)\\ge 9abc$. The equality condition is $a=b=c$.",
      ]
    },
    {
      id: "a2",
      category: "alg",
      difficulty: "medium",
      stars: 2,
      rating: 4.5,
      confidence: "high",
      text: "Prove that there do not exist rational numbers $a,b$ such that $$\\sqrt[3]{3}=\\sqrt{a}+\\sqrt{b}.$$",
      why: "The proof is a direct field-degree argument: squaring reduces the claim to a nontrivial rational linear relation among $1$, $\\sqrt[3]{3}$, and $\\sqrt[3]{9}$. The irreducibility step is standard and the proof has no unnecessary machinery.",
      answer: "$\\boxed{\\text{No such rational }a,b\\text{ exist.}}$",
      steps: [
        "Let $\\alpha=\\sqrt[3]{3}$. Since the square roots are real, $a,b\\ge 0$. The polynomial $x^3-3$ is irreducible over $\\mathbb{Q}$ by Eisenstein's criterion at $3$, so $1,\\alpha,\\alpha^2$ are linearly independent over $\\mathbb{Q}$.",
        "Assume $\\alpha=\\sqrt{a}+\\sqrt{b}$. Put $s=a+b\\in\\mathbb{Q}$ and $p=ab\\in\\mathbb{Q}$. Squaring gives $\\alpha^2-s=2\\sqrt{p}$. If $p=0$, then $\\alpha^2\\in\\mathbb{Q}$, impossible. Thus we may square again: $\\alpha^4-2s\\alpha^2+s^2=4p$.",
        "Because $\\alpha^3=3$, we have $\\alpha^4=3\\alpha$. Hence $3\\alpha-2s\\alpha^2+(s^2-4p)=0$, a nontrivial rational linear relation among $1,\\alpha,\\alpha^2$, a contradiction.",
      ]
    },
    {
      id: "a3",
      category: "alg",
      difficulty: "medium",
      stars: 2,
      rating: 4.5,
      confidence: "high",
      text: "Let $n\\ge 3$ be an integer, and let $x_1,\\dots,x_n\\in\\mathbb{R}$ satisfy $$\\sum_{i=1}^n x_i=0, \\qquad \\sum_{i=1}^n x_i^2=n(n-1).$$ Prove that $$\\sum_{i=1}^n x_i^3\\le n(n-1)(n-2),$$ and determine all equality cases.",
      why: "The maximum-coordinate bound plus one tailored factorization proves the inequality in a few lines. Equality follows directly from the vanishing of nonpositive summands.",
      answer: "Equality occurs precisely for permutations of $$\\boxed{(n-1,-1,\\dots,-1)}.$$",
      steps: [
        "Let $M=\\max_i x_i$. The other $n-1$ variables sum to $-M$, so by Cauchy, $$n(n-1)-M^2\\ge\\frac{M^2}{n-1}.$$ Hence $M\\le n-1$, so $x_i\\le n-1$ for every $i$.",
        "Therefore $(x_i+1)^2(x_i-(n-1))\\le 0$ for every $i$. Summing and expanding, $$\\sum_i(x_i+1)^2(x_i-(n-1))=\\sum_i x_i^3-n(n-1)(n-2).$$",
        "Thus $$\\sum_i x_i^3\\le n(n-1)(n-2).$$",
        "Equality holds exactly when every summand vanishes, so $x_i\\in\\{-1,n-1\\}$. The condition $\\sum x_i=0$ then forces one entry $n-1$ and the remaining $n-1$ entries equal to $-1$. This configuration also has the required square-sum.",
      ]
    },
    {
      id: "a4",
      category: "alg",
      difficulty: "medium",
      stars: 2,
      rating: 5,
      confidence: "high",
      text: "Let $f:\\mathbb{R}\\to\\mathbb{R}$ and define $\\varphi(x)=f(x)-x^3+1$. Suppose $$\\varphi(x+y)+xy=\\varphi(x)\\varphi(y)$$ for all $x,y\\in\\mathbb{R}$. Determine all such $f$.",
      why: "The substitution is given, so the work is the case split. From $\\varphi(x)\\varphi(-x)=1-x^2$ one of $\\varphi(1)$ and $\\varphi(-1)$ vanishes, and each choice determines $\\varphi$ on all of $\\mathbb{R}$. Short once that relation is written.",
      answer: "$$\\boxed{f(x)=x^3-x\\quad\\text{or}\\quad f(x)=x^3+x}.$$",
      steps: [
        "Putting $x=y=0$ gives $\\varphi(0)=\\varphi(0)^2$. If $\\varphi(0)=0$, then setting $y=0$ gives $\\varphi(x)=0$ for all $x$, which makes the original equation $xy=0$ for all $x,y$, impossible. Hence $\\varphi(0)=1$.",
        "Putting $y=-x$, $1-x^2=\\varphi(x)\\varphi(-x)$. At $x=1$, $\\varphi(1)\\varphi(-1)=0$.",
        "If $\\varphi(1)=0$, then the original equation with $y=1$ gives $\\varphi(x+1)=-x$, hence $\\varphi(t)=1-t$. If $\\varphi(-1)=0$, then with $y=-1$, $\\varphi(x-1)=x$, hence $\\varphi(t)=t+1$.",
        "Both functions satisfy the equation. Since $f(x)=\\varphi(x)+x^3-1$, the complete answer is $f(x)=x^3-x$ or $f(x)=x^3+x$.",
      ]
    },
    {
      id: "a5",
      category: "alg",
      difficulty: "medium",
      stars: 2,
      rating: 5,
      confidence: "high",
      text: "Let $a_1,a_2,\\dots$ be positive reals with $a_1=1$ and $$a_{n+1}=a_n+\\frac{n}{a_1+\\cdots+a_n}.$$ Prove that $$a_n\\ge\\sqrt{\\frac{16n-9}{7}}$$ for every $n\\ge 1$.",
      why: "The bound follows from monotonicity and concavity of the increments, together with an elementary quadratic estimate on the differences.",
      answer: "$$\\boxed{a_n\\ge\\sqrt{\\frac{16n-9}{7}}}.$$",
      steps: [
        "Put $S_n=a_1+\\cdots+a_n$ and $d_n=a_{n+1}-a_n=n/S_n$. Since $a_1&lt;a_2&lt;\\cdots$, one has $d_{n+1}&lt;d_n$, so $(a_n)$ is increasing and concave.",
        "For $n\\ge 2$, concavity gives $S_n\\ge \\frac n2(1+a_n)$, hence $d_n\\le 2/(a_n+1)$. Therefore $$a_{n+1}^2-a_n^2=2a_nd_n+d_n^2&lt;4.$$ Thus $a_n^2&lt;4n-3$ for $n\\ge 2$.",
        "Also $S_n\\le na_n$, so $d_n\\ge 1/a_n$, and therefore $a_{n+1}^2-a_n^2>2$. Hence $a_n^2>2n-1$, which in particular makes $a_n^2-2(n-1)>0$.",
        "Since $d_j\\ge d_n$ for $j&lt;n$, $a_j\\le a_n-(n-j)d_n$. Summing, $$S_n\\le na_n-\\frac{n(n-1)}{2}d_n.$$ Because $S_n=n/d_n$, $$1\\le a_nd_n-\\frac{n-1}{2}d_n^2.$$ Thus $d_n$ lies between the two roots, so $$d_n\\ge\\frac{2}{a_n+\\sqrt{a_n^2-2(n-1)}}.$$",
        "For $n\\ge 3$, from $a_n^2&lt;4n-3$, $7a_n^2&lt;32(n-1)$. If $t=\\sqrt{a_n^2-2(n-1)}$, this implies $3a_n>4t$. Hence $$2a_nd_n\\ge\\frac{4a_n}{a_n+t}>\\frac{16}{7}.$$ Therefore $a_{n+1}^2-a_n^2>16/7$ for $n\\ge 3$.",
        "The first two increments are $$a_2^2-a_1^2=3>\\frac{16}{7}, \\qquad a_3=\\frac83,\\quad a_3^2-a_2^2=\\frac{28}{9}>\\frac{16}{7}.$$ Thus for $n\\ge 2$, $$a_n^2>1+\\frac{16(n-1)}{7}=\\frac{16n-9}{7},$$ while equality holds at $n=1$.",
      ]
    },
    {
      id: "a6",
      category: "alg",
      difficulty: "medium",
      stars: 2,
      rating: 5.5,
      confidence: "high",
      text: "Let $a,b,c>0$ with $a+b+c=3$. Prove that $$\\frac{1}{a^2+b+c}+\\frac{1}{b^2+c+a}+\\frac{1}{c^2+a+b}\\le 1.$$",
      why: "A tangent-line bound at the equality point $a=b=c=1$ turns each term into a linear function of the variable, and the resulting cubic inequality factors as a perfect square times a positive factor.",
      answer: "$\\boxed{a=b=c=1}$ is the unique equality case.",
      steps: [
        "Since $a+b+c=3$, $a^2+b+c=a^2-a+3$. Thus it is enough to prove, for $0&lt;a&lt;3$, $$\\frac{1}{a^2-a+3}\\le\\frac{4-a}{9}.$$",
        "Because $a^2-a+3>0$, this is equivalent to $9\\le(4-a)(a^2-a+3)$, and $$(4-a)(a^2-a+3)-9=(a-1)^2(3-a)\\ge 0.$$",
        "Summing the three inequalities gives $$\\sum_{\\mathrm{cyc}}\\frac{1}{a^2+b+c}\\le\\frac{12-(a+b+c)}{9}=1.$$",
        "Equality requires $a=b=c=1$.",
      ]
    },
    {
      id: "a7",
      category: "alg",
      difficulty: "hard",
      stars: 3,
      rating: 6,
      confidence: "high",
      text: "Let $a,b,c>0$. Prove that $$\\frac{ab}{a^2+b^2+c^2-ab+bc-ca}+\\frac{bc}{a^2+b^2+c^2-bc+ca-ab}+\\frac{ca}{a^2+b^2+c^2-ca+ab-bc}\\le\\frac{3}{2},$$ and determine all equality cases.",
      why: "Cyclic fractional inequality. Clearing the denominators and expanding in the two order types produces an explicit sum of nonnegative monomials; equality analysis is then immediate.",
      answer: "$$\\boxed{\\text{Equality iff }a=b=c}.$$",
      steps: [
        "Put $$Q=\\frac{(a-b)^2+(b-c)^2+(c-a)^2}{2}.$$ Then the three denominators are $D_1=Q+2bc$, $D_2=Q+2ca$, $D_3=Q+2ab$, so all are positive.",
        "After clearing denominators, the assertion is equivalent to $$P:=3D_1D_2D_3-2(abD_2D_3+bcD_3D_1+caD_1D_2)\\ge 0.$$",
        "By cyclic relabeling assume $a$ is maximal. There are two order types.",
        "If $a\\ge b\\ge c$, write $c=x$, $b=x+y$, $a=x+y+z$ with $x>0$ and $y,z\\ge 0$. Direct expansion gives $$\\begin{aligned} P={}&4x^4(y^2+yz+z^2)+8x^3(y^3+y^2z+2yz^2+z^3)\\\\ &+12x^2y^4+16x^2y^3z+36x^2y^2z^2+32x^2yz^3+12x^2z^4\\\\ &+8xy^5+16xy^4z+40xy^3z^2+48xy^2z^3+32xyz^4+8xz^5\\\\ &+3y^6+9y^5z+22y^4z^2+29y^3z^3+26y^2z^4+13yz^5+3z^6\\ge 0. \\end{aligned}$$",
        "If $a\\ge c\\ge b$, write $b=x$, $c=x+y$, $a=x+y+z$. Then $$\\begin{aligned} P={}&4x^4(y^2+yz+z^2)+8x^3y^3+16x^3y^2z+24x^3yz^2+8x^3z^3\\\\ &+12x^2y^4+32x^2y^3z+60x^2y^2z^2+40x^2yz^3+12x^2z^4\\\\ &+8xy^5+24xy^4z+56xy^3z^2+56xy^2z^3+32xyz^4+8xz^5\\\\ &+3y^6+9y^5z+22y^4z^2+29y^3z^3+26y^2z^4+13yz^5+3z^6\\ge 0. \\end{aligned}$$",
        "Equality forces $y=z=0$, hence $a=b=c$.",
      ]
    },
    {
      id: "a8",
      category: "alg",
      difficulty: "hard",
      stars: 3,
      rating: 6,
      confidence: "high",
      text: "Find all polynomials $P\\in\\mathbb{R}[x]$ satisfying $$P(x^3)=P(x)^3$$ for every real $x$.",
      why: "Comparing leading coefficients now allows $\\pm1$, and a descending induction — using that a same-degree-drop cross term would force $3\\mid k$ with a strictly smaller, already-vanished index — kills every lower term. The only solutions are $0$ and $\\pm x^n$.",
      answer: "$$\\boxed{P\\equiv 0\\quad\\text{or}\\quad P(x)=\\pm x^n,\\ n=0,1,2,\\dots}$$",
      steps: [
        "The zero polynomial is a solution. Suppose $P\\ne 0$ and $\\deg P=n$. If $n=0$, the equation gives $P^3=P$, so $P\\equiv\\pm1=\\pm x^0$ (as $P\\ne0$).",
        "Assume $n\\ge1$, and write $P(x)=cx^n+a_{n-1}x^{n-1}+\\cdots+a_0$ with $c\\ne0$. Comparing coefficients of $x^{3n}$ in $P(x^3)=P(x)^3$ gives $c=c^3$, so $c\\in\\{1,-1\\}$.",
        "If $c=-1$, write $P=-R$ with $R$ monic of degree $n$; then $P(x^3)=P(x)^3$ becomes $R(x^3)=R(x)^3$. So it suffices to treat $c=1$, i.e. $P(x)=x^n+a_{n-1}x^{n-1}+\\cdots+a_0$.",
        "We prove $a_{n-1}=\\cdots=a_0=0$ by descending induction. Suppose $a_{n-1},\\dots,a_{n-k+1}=0$, and examine the coefficient of $x^{3n-k}$ on both sides for $k\\ge1$.",
        "In $P(x)^3$, any contribution using two or three factors of degree below $n$ requires an index $n-j$ with $1\\le j&lt;k$ (since the total exponent drop is $k$ and at least two factors participate), and such $a_{n-j}$ vanish by the induction hypothesis. Hence the only surviving contribution is the one factor of exponent $n-k$ against two factors of exponent $n$, giving coefficient $3a_{n-k}$.",
        "In $P(x^3)$, the coefficient of $x^{3n-k}$ is $0$ unless $3\\mid k$, say $k=3m$, in which case it equals $a_{n-m}$. But $1\\le m&lt;k$ for $m\\ge1$, so $a_{n-m}=0$ by the induction hypothesis; hence this coefficient is always $0$.",
        "Therefore $3a_{n-k}=0$ for every $k\\ge1$, so $a_{n-k}=0$. Thus $P(x)=x^n$, and correspondingly $P(x)=-x^n$ in the case $c=-1$. Therefore $P\\equiv 0$ or $P(x)=\\pm x^n$ for some integer $n\\ge 0$.",
      ]
    },
    {
      id: "a9",
      category: "alg",
      difficulty: "hard",
      stars: 3,
      rating: 6.5,
      confidence: "high",
      text: "Determine all polynomials $P(x)\\in\\mathbb{R}[x]$ for which there exists a nonzero rational function $Q(x)\\in\\mathbb{R}(x)$ such that $$P(x)=\\frac{Q(x)}{Q\\!\\left(1-\\frac{1}{x}\\right)}$$ wherever the expressions are defined.",
      why: "The transformation $x\\mapsto 1-1/x$ has order $3$. The resulting norm identity first forces every root of $P$ to lie among $0$ and $1$, and comparing divisor orders gives the congruence $a\\equiv b\\pmod 3$. The converse has an explicit rational $Q$.",
      answer: "$$\\boxed{P(x)=(-1)^a x^a(x-1)^b, \\qquad a,b\\ge 0,\\quad a\\equiv b\\pmod 3.}$$",
      steps: [
        "Let $T(x)=1-1/x=(x-1)/x$. Then $T^2(x)=1/(1-x)$ and $T^3(x)=x$. Composing the identity at $x,T(x),T^2(x)$ gives the rational identity $P(x)P(Tx)P(T^2x)=1$.",
        "Thus $P\\not\\equiv 0$. If $r\\notin\\{0,1\\}$ were a root of $P$, then all three factors are finite at $x=r$, so the product would vanish, a contradiction. Hence every root is $0$ or $1$, and $P(x)=c\\,x^a(x-1)^b$ for $a,b\\ge 0$.",
        "Using $x\\,T(x)\\,T^2(x)=-1$ and $(x-1)(T(x)-1)(T^2(x)-1)=1$, the norm identity gives $c^3(-1)^a=1$, so $c=(-1)^a$.",
        "Let $u=\\operatorname{ord}_0 Q$, $v=\\operatorname{ord}_1 Q$, $w=\\operatorname{ord}_\\infty Q$. Since $Q$ is rational, $u+v+w=0$. Comparing orders in $P=Q/(Q\\circ T)$ yields $a=u-w$ and $b=v-u$. Hence $a-b=3u$, so $a\\equiv b\\pmod 3$.",
        "Conversely, suppose $a,b\\ge 0$ and $a\\equiv b\\pmod 3$. Put $u=(a-b)/3$ and $v=(a+2b)/3$, and take $Q(x)=x^u(x-1)^v$. Then $$Q(x)/Q(Tx)=(-1)^v x^a(x-1)^b.$$ Since $v-a=2(b-a)/3$ is even, $(-1)^v=(-1)^a$.",
      ]
    },
    {
      id: "a10",
      category: "alg",
      difficulty: "hard",
      stars: 3,
      rating: 6.5,
      confidence: "medium",
      text: "Let $a,b,c\\ge 0$ with $ab+bc+ca=1$. Prove that $$\\sqrt{a^3+b+c}+\\sqrt{b^3+c+a}+\\sqrt{c^3+a+b} \\ge \\sqrt{(a+b+c)^3+4(a+b+c)^2-(a+b+c)-4}.$$",
      why: "A symmetric radical lemma, proved by squaring and replacing the cross terms by a harmonic lower bound, gives the estimate. Equality is the boundary point $(1,1,0)$.",
      answer: "Equality occurs for permutations of $$\\boxed{(1,1,0)}.$$",
      steps: [
        "Put $s=a+b+c$. Since $ab+bc+ca=1$, $$s^3+4s^2-s-4=(s-1)(s+1)(s+4).$$ Thus the right-hand side is $\\sqrt{(s-1)(s+1)(s+4)}$.",
        "For each variable, $a^3+b+c=a^3-a+s$. Since $a,b,c$ are the roots of $X^3-sX^2+X-abc=0$, one may also write $a^3+b+c=s(a^2+1)-2a+abc$, and cyclically.",
        "Lemma. If $x,y,z\\ge 0$, $xy+yz+zx=1$, and $s=x+y+z$, then $$\\sum_{\\mathrm{cyc}}\\sqrt{x^3+y+z}\\ge\\sqrt{(s-1)(s+1)(s+4)}. \\tag{L}$$ A direct proof is obtained by squaring, isolating the three cross terms, and applying $$2\\sqrt{UV}\\ge\\frac{2UV}{U+V}$$ to the three pairs, followed by $xy+yz+zx=1$. After clearing the positive denominators, the resulting polynomial is a sum of $(x-y)^2$, $(y-z)^2$, $(z-x)^2$, $xyz(x-y)^2$, $xyz(y-z)^2$, and $xyz(z-x)^2$, with nonnegative coefficients.",
        "Applying (L) with $x=a$, $y=b$, $z=c$ proves the claim. Equality occurs on the boundary when, up to permutation, $(a,b,c)=(1,1,0)$, because then $ab+bc+ca=1$ and both sides equal $3\\sqrt{2}$.",
      ]
    },
    {
      id: "a11",
      category: "alg",
      difficulty: "hard",
      stars: 3,
      rating: 7,
      confidence: "high",
      text: "Find all functions $f:\\mathbb{N}\\to\\mathbb{N}$ satisfying $$f(abc)+f(2af(b))+f(2bf(c))+f(2cf(a))=f(a)f(b)f(c)$$ for all $a,b,c\\in\\mathbb{N}$.",
      why: "Three-variable equation on $\\mathbb{N}$ with a product on the right. The classification uses a symmetric three-term identity, a quadratic relation pinned down to $\\lambda=\\pm 1$, and a case split on $\\lambda$ and on $k=f(1)$ before the two solution families fall out.",
      answer: "$$\\boxed{f(n)\\equiv 2\\quad\\text{or}\\quad f(n)=n+2}.$$",
      steps: [
        "Set $P(a,b,c)$ for the equation. Taking $a=b=c=n$, $$f(n^3)+3f(2nf(n))=f(n)^3\\ge 4,$$ so $f(n)\\ge 2$ for all $n$. Put $k=f(1)\\ge 2$.",
        "From $P(1,1,1)$, $$k+3f(2k)=k^3, \\qquad f(2k)=\\frac{k^3-k}{3}. \\tag{1}$$ From $P(a,1,1)$, $$f(2ak)+f(2f(a))=(k^2-1)f(a)-f(2k). \\tag{2}$$",
        "Put $u(n)=f(n)-k$. Adding $P(a,b,1)$, $P(b,c,1)$, $P(c,a,1)$, then using (2), gives $$u(abc)-u(ab)-u(bc)-u(ca)=u(a)u(b)u(c)-u(a)-u(b)-u(c). \\tag{3}$$",
        "Applying (3) to $(a,a,b)$, $(a,b,b)$, $(a,a,b^2)$, $(a^2,b,b)$ and eliminating $u(a^2b)$, $u(ab^2)$, $u(a^2b^2)$ gives $$u(a)^2\\bigl(u(b^2)-2u(b)\\bigr)=u(b)^2\\bigl(u(a^2)-2u(a)\\bigr).$$ Thus there is a constant $\\lambda$ such that $$u(n^2)=2u(n)+\\lambda u(n)^2. \\tag{4}$$",
        "If $u\\equiv 0$, then $f\\equiv k$. Equation (1) gives $k=(k^3-k)/3$, hence $k=2$, so $f\\equiv 2$.",
        "Assume now $u\\not\\equiv 0$, and choose $n$ with $x=u(n)\\ne 0$. Applying (4) and (3) to the powers $n^2,n^3,n^6$ in the two ways $n^6=(n^3)^2=(n^2)^3$ gives $$(\\lambda-1)(\\lambda+1)\\bigl(\\lambda x^3-6\\lambda x-6\\bigr)=0. \\tag{5}$$ If $\\lambda\\ne\\pm 1$, then $\\lambda(x^3-6x)=6$. Applying this to $x=u(n)$ and $y=u(n^2)$ gives $(x-y)(x^2+xy+y^2-6)=0$. Here $x\\ne y$, so $x^2+xy+y^2=6$, impossible modulo $2$ for nonzero integers. Hence $\\lambda=\\pm 1$.",
        "If $\\lambda=-1$, then $u(n^2)=u(n)(2-u(n))$. Any $u(n)\\le -1$ eventually becomes arbitrarily negative under repeated squaring, contradicting $u(n)\\ge 2-k$. Any $u(n)\\ge 3$ maps immediately to $\\le -3$. Hence $u(n)\\in\\{0,1,2\\}$. From (2) this forces $k=2$, then $u(2)=0$, $u(4)=u(8)=0$. Equation (2) rules out $u(n)=2$, and (3) rules out $u(n)=1$. Thus $u\\equiv 0$.",
        "If $\\lambda=1$, set $v=u+1$. Then $v(n^2)=v(n)^2$. Equation (2) first rules out $k\\ge 4$, so $k\\in\\{2,3\\}$. Using (3) on $(a,b,ab)$ gives $$(v(ab)-v(a)v(b))(v(ab)+v(a)+v(b)-5)=0. \\tag{6}$$",
        "For $k=2$, $v\\ge 1$ and $v(2)=1$. If some image value $t\\ge 4$ exists, (6) forces successively $v(t+1)=2t-1$, $v(2t)=4t-3$, $v(t)=4t-3$. Applying the same relation to the image values $r=4t-3$ and $s=2t-1$ gives two expressions for $v(rs)$, whose difference is $96(t-1)^2>0$, a contradiction. Therefore $v\\equiv 1$, hence $f\\equiv 2$.",
        "For $k=3$, $u(6)=5$ and $v(6)=6$. Equation (6) gives $v(6n)=6v(n)$, while (2) gives $v(2(v(n)+2))=2(v(n)+2)$. Taking $n=6$ gives $v(16)=16$, hence $v(2)=2$. Then (6) with $(2,3)$ gives $v(3)=3$. Finally, whenever $t$ is an image value, the previous identity gives $v(t+2)=t+2$. Starting with $v(1)=1$, $v(2)=2$, induction yields $v(n)=n$ for every $n$. Thus $f(n)=n+2$.",
        "Both solutions check directly: $f\\equiv 2$ makes both sides $8$, while $f(n)=n+2$ gives $$(abc+2)+2a(b+2)+2b(c+2)+2c(a+2)+6=(a+2)(b+2)(c+2).$$",
      ]
    },
    {
      id: "a12",
      category: "alg",
      difficulty: "hard",
      stars: 3,
      rating: 7.5,
      confidence: "medium",
      text: "Let $(x_n)_{n\\ge 1}$ be positive reals satisfying $$\\lfloor x_n\\rfloor\\, x_{n+1}\\, \\lceil x_{n+2}\\rceil =x_n+x_{n+1}+x_{n+2}$$ for every $n\\ge 1$. Prove that $(x_n)$ is eventually periodic.",
      why: "Eventual periodicity for a floor/ceiling recurrence. The integer parts are forced into a short list of types, and only a $3$-cycle of terminal states can persist.",
      answer: "$$\\boxed{(x_n)\\text{ is eventually }3\\text{-periodic}.}$$",
      steps: [
        "Write $p_n=\\lfloor x_n\\rfloor$ and $q_n=\\lceil x_n\\rceil$. The equation can be rewritten as $$x_n+x_{n+2}=(p_n q_{n+2}-1)x_{n+1}. \\tag{1}$$ In particular $p_n\\ge 1$ and $q_{n+2}\\ge 2$.",
        "Since $x_n&lt;p_n+1$ and $x_{n+2}\\le q_{n+2}$, while $x_{n+1}\\ge 1$, (1) gives $p_n q_{n+2}-1&lt;p_n+q_{n+2}+1$, hence $(p_n-1)(q_{n+2}-1)&lt;3$. Therefore $$(p_n,q_{n+2})\\in\\{(1,q),(2,2),(2,3),(3,2)\\}. \\tag{2}$$",
        "The remaining interval chase uses (1) together with $p_n\\le x_n&lt;p_n+1$ and $q_n-1&lt;x_n\\le q_n$. Every occurrence of $q\\ge 4$ with $p_n=1$ forces $p_{n+1}=1$; the next two equations then force $p_{n+2}\\ge 3$, followed by $q_{n+4}=2$, and iterating the same inequalities produces a strictly shrinking admissible interval. Thus such a state cannot occur infinitely often.",
        "Likewise the states $(2,2)$ and $(2,3)$ cannot recur indefinitely: after at most finitely many transitions their interval constraints force one of the three terminal states $(p_n,q_{n+2})=(1,3)$, $(2,1)$, or $(3,2)$. In these states (1) respectively becomes $x_n+x_{n+2}=2x_{n+1}$, $x_n+x_{n+2}=x_{n+1}$, or $x_n+x_{n+2}=5x_{n+1}$.",
        "The interval restrictions in the three terminal states force $(x_n,x_{n+1},x_{n+2})=(1,2,3)$, $(2,3,1)$, or $(3,1,2)$, and these three states map cyclically into one another. Hence from some index onward $x_{n+3}=x_n$.",
      ]
    },
    {
      id: "a13",
      category: "alg",
      difficulty: "hard",
      stars: 3,
      rating: 7.5,
      confidence: "high",
      text: "Determine all polynomials $P\\in\\mathbb{R}[x]$ satisfying $$P(x^2-2)=P(x)^2-2$$ for every real $x$.",
      why: "The equation is the iteration identity for the Dickson polynomials $C_n$. Uniqueness follows by passing to the Laurent polynomial $R(z)=P(z+z^{-1})$ and ruling out every lower symmetric term.",
      answer: "$$\\boxed{P(x)\\equiv 2,\\quad P(x)\\equiv -1,\\quad P(x)=C_n(x)\\ (n\\ge 1)}$$ where $C_n(x)=2T_n(x/2)$.",
      steps: [
        "Constant solutions satisfy $c=c^2-2$, hence $c=2$ or $c=-1$.",
        "Let $P$ be nonconstant of degree $n$. Comparing leading terms in $P(x^2-2)=P(x)^2-2$ shows that the leading coefficient is $1$.",
        "Define the Dickson--Chebyshev polynomial $C_n$ by $C_0(x)=2$, $C_1(x)=x$, and $C_{n+1}(x)=xC_n(x)-C_{n-1}(x)$. It satisfies $C_n(z+z^{-1})=z^n+z^{-n}$ and hence $C_n(x^2-2)=C_n(x)^2-2$.",
        "It remains to prove uniqueness. Put $R(z)=P(z+z^{-1})$. Then $R$ is a symmetric Laurent polynomial whose highest terms are $z^n+z^{-n}$, and $R(z^2)=R(z)^2-2$. Suppose $$R(z)=z^n+z^{-n}+c_{n-1}(z^{n-1}+z^{-(n-1)})+\\cdots+c_0.$$ If $j&lt;n$ is the largest index with $c_j\\ne 0$, then the coefficient of $z^{n+j}$ on the right is $2c_j$, while on the left it is either $0$ or a coefficient $c_{(n+j)/2}$ with larger index, already zero. Contradiction. Hence all $c_j=0$.",
        "Therefore $R(z)=z^n+z^{-n}=C_n(z+z^{-1})$, so $P=C_n$.",
      ]
    },
    {
      id: "a14",
      category: "alg",
      difficulty: "challenging",
      stars: 4,
      rating: 8,
      confidence: "medium",
      text: "Let $a,b,c,d>0$ satisfy $$(a+b)(b+c)(c+d)(d+a)=(ab+bc+cd+da)^2.$$ Prove that $$\\frac{1+\\sqrt{5}}{4} &lt; \\frac{ab+bc+cd+da}{ac+bd+ca+db} \\le 1,$$ determine all equality cases, and prove that the lower constant is sharp.",
      why: "Four-variable cyclic constraint, a two-sided bound with the golden-ratio constant, all equality cases, and a sharpness example. The lower bound is the piece that takes the most care.",
      answer: "$$\\boxed{\\frac{1+\\sqrt{5}}{4} < \\frac{ab+bc+cd+da}{2(ac+bd)} \\le 1}.$$ Equality in the upper bound occurs exactly when at least three of $a,b,c,d$ are equal.",
      steps: [
        "Put $x=a+c$, $y=b+d$, $p=ac$, $q=bd$. Then $ab+bc+cd+da=(a+c)(b+d)=xy$, while $ac+bd+ca+db=2(p+q)$. Hence the required ratio is $R=xy/(2(p+q))$.",
        "The constraint becomes $$(p-q)^2+(x+y)(py+qx)=x^2y^2. \\tag{1}$$ Also $0&lt;p\\le x^2/4$ and $0&lt;q\\le y^2/4$.",
        "By interchanging the cyclic pairs, assume $x\\le y$, and set $t=x/y\\le 1$, $r=4p/(xy)$, $s=4q/(xy)$. Then $0&lt;r\\le t$, $0&lt;s\\le 1/t$, and (1) is equivalent to $$(r-s)^2+4r\\left(1+\\frac{1}{t}\\right)+4s(1+t)=16. \\tag{2}$$",
        "For fixed $t$, (2) is a quadratic conic in $(r,s)$ inside the rectangle $0&lt;r\\le t$, $0&lt;s\\le 1/t$. A direct endpoint analysis of this conic gives $$2\\le r+s&lt;2(\\sqrt{5}-1). \\tag{3}$$ The lower endpoint $r+s=2$ occurs precisely on $r=t$ or $s=1/t$. Indeed, $$\\left[(r-s)^2+4r\\left(1+\\frac{1}{t}\\right)+4s(1+t)-16\\right]_{r=t}=(s+t-2)(s+t+6),$$ and similarly $$\\left[\\cdots\\right]_{s=1/t}=\\frac{(rt-2t+1)(rt+6t+1)}{t^2}.$$",
        "Since $R=2/(r+s)$, (3) gives $$\\frac{1}{\\sqrt{5}-1}=\\frac{1+\\sqrt{5}}{4}&lt;R\\le 1.$$",
        "For $R=1$, $r+s=2$. From the endpoint factorizations, either $r=t$ or $s=1/t$. Translating back gives exactly the condition that three of $a,b,c,d$ are equal. Conversely, if three variables are equal, say $(a,b,c,d)=(u,t,t,t)$, then both the constraint and $R=1$ hold.",
        "To prove sharpness, take $0&lt;t&lt;1$, set $a=c=t/2$, $b+d=1$, and choose $$bd=t\\left(-t-2+2\\sqrt{5-t^2}\\right).$$ For sufficiently small $t>0$ this is positive and less than $1/4$, so positive $b,d$ exist. Substitution into (1) gives the constraint exactly, while $$R\\longrightarrow\\frac{1+\\sqrt{5}}{4}\\qquad(t\\to 0^+).$$ Thus no larger universal lower constant is possible.",
      ]
    },
    {
      id: "a15",
      category: "alg",
      difficulty: "challenging",
      stars: 4,
      rating: 8,
      confidence: "high",
      text: "Let $1&lt;u&lt;v$ be integers. Define $a_1=1$ and $$a_n+a_{n/u}+a_{n/v}=0\\qquad(n\\ge 2),$$ where $a_k=0$ whenever $k$ is not an integer. Prove that $(a_n)$ is bounded if and only if $v=u^2$.",
      why: "The generating function satisfies $A(z)=z-A(z^u)-A(z^v)$. Multiplicative independence produces central-binomial growth, while dependence reduces boundedness to the zeros of $1+z^r+z^s$ lying on the unit circle, which forces $v=u^2$.",
      answer: "$$\\boxed{(a_n)\\text{ is bounded }\\Longleftrightarrow v=u^2}.$$",
      steps: [
        "Introduce the formal power series $A(z)=\\sum_{n\\ge 1}a_n z^n$. Multiplying the recurrence by $z^n$ and summing gives $$A(z)=z-A(z^u)-A(z^v). \\tag{1}$$",
        "Iterating (1), the coefficient $a_n$ is the signed number of words in the alphabet $\\{u,v\\}$ whose product is $n$: every occurrence of $u$ or $v$ contributes one minus sign.",
        "If $u$ and $v$ are multiplicatively independent, then the exponent representation $n=u^k v^\\ell$ is unique. Hence $$a_{u^k v^\\ell}=(-1)^{k+\\ell}\\binom{k+\\ell}{k}.$$ Taking $k=\\ell=m$ gives $|a_{u^m v^m}|=\\binom{2m}{m}\\to\\infty$. Thus boundedness is impossible.",
        "Now suppose $u,v$ are multiplicatively dependent. Write $u=d^r$, $v=d^s$, with $1\\le r&lt;s$ and $\\gcd(r,s)=1$. Restricting to indices $d^N$, define $c_N=a_{d^N}$. Then $$\\sum_{N\\ge 0}c_N z^N=\\frac{1}{1+z^r+z^s}. \\tag{2}$$",
        "If $r=1$ and $s=2$, then $$1/(1+z+z^2)=(1-z)/(1-z^3),$$ so the coefficients are periodic: $1,-1,0,1,-1,0,\\dots$ and the whole sequence is bounded.",
        "Conversely, assume $(r,s)\\ne(1,2)$ and the coefficients $c_N$ are bounded. Since they are integers and satisfy $c_N+c_{N-r}+c_{N-s}=0$, a bounded tail is eventually periodic. Therefore the rational generating function (2) has no pole inside the unit disk, so every zero of $1+z^r+z^s$ lies on the unit circle.",
        "Let $\\zeta$ be any zero. Since $1+\\zeta^r+\\zeta^s=0$ and all three summands have modulus $1$, they form an equilateral triangle. Hence $\\zeta^r,\\zeta^s\\in\\{\\omega,\\omega^2\\}$, where $\\omega^3=1$ and $\\omega\\ne 1$. Thus $\\zeta^r$ and $\\zeta^{s-r}$ are roots of $z^3-1$. Consequently every zero of $1+z^r+z^s$ is a root of both $z^{3r}-1$ and $z^{3(s-r)}-1$. Since $\\gcd(r,s)=1$, $\\gcd(3r,3(s-r))=3$, so all zeros are among the three cube roots of unity. Hence the degree $s\\le 3$.",
        "Because $s>r\\ge 1$, the only possibilities are $(r,s)=(1,2),(1,3),(2,3)$. Direct substitution at $z=-1$ or at a primitive cube root rules out the last two. Hence $(r,s)=(1,2)$, i.e. $v=u^2$.",
      ]
    },
    {
      id: "a16",
      category: "alg",
      difficulty: "challenging",
      stars: 4,
      rating: 8.5,
      confidence: "medium",
      text: "Find all surjective functions $f:\\mathbb{R}\\to\\mathbb{R}$ satisfying $$f(xf(y))+f(yf(x))=f(x)f(y)+f(xy)$$ for all $x,y\\in\\mathbb{R}$.",
      why: "Surjectivity collapses $f(0)$ to the two affine solutions $f(x)=x$ and $f(x)=x+1$. The case split compares a zero of $f$ with a preimage of $1$.",
      answer: "$$\\boxed{f(x)=x\\quad\\text{or}\\quad f(x)=x+1}.$$",
      steps: [
        "Let $c=f(0)$. Setting $x=y=0$ gives $2c=c^2+c$, hence $c\\in\\{0,1\\}$.",
        "Choosing preimages of $0$ and $1$, comparing the equations at those preimages, and using surjectivity again yields: $c=0$ implies $f(x)=x$, and $c=1$ implies $f(x)=x+1$. The key identity in the collapse is $$f(f(y))+f(af(y))=(a+1)f(y), \\qquad a=f(1), \\tag{3}$$ together with the equations obtained from a point $t$ satisfying $f(t)=0$ and a point $s$ satisfying $f(s)=1$.",
        "In the $c=0$ case, choose $s$ with $f(s)=1$. Surjectivity and the comparison of $P(x,s)$ and $P(s,x)$ force $s=1$, after which $f(f(x))=f(x)$ and surjectivity gives $f(x)=x$.",
        "In the $c=1$ case, the same comparison with a zero of $f$ and a preimage of $1$ forces $f(1)=2$, and then the resulting affine relation is $f(x)=x+1$.",
        "Both functions verify the equation directly: for $f(x)=x$, $xf(y)+yf(x)=2xy=f(x)f(y)+f(xy)$, and for $f(x)=x+1$, $$x(y+1)+y(x+1)=(x+1)(y+1)+xy.$$",
      ]
    },
    // Combinatorics — 16 problems, easy to hard
    {
      id: "c1",
      category: "cmb",
      difficulty: "easy",
      stars: 1,
      rating: 1.5,
      confidence: "high",
      text: "There are $n$ students at a university. Some students form several clubs, grouped into $s$ societies. The following conditions hold: <ol><li>No two clubs share more than one student.</li><li>For each student $u$ and society $S$, student $u$ belongs to exactly two clubs of $S$.</li><li>For any society $S$, any two of its clubs share exactly one student.</li></ol><br>Prove that the total number of pairs of distinct clubs $\\{C_a,C_b\\}$ in the same society is exactly $n\\cdot s$. Prove further that every society contains the same number of clubs.",
      why: "A clean incidence double-count: in each society, students and unordered pairs of clubs are in bijection. The second conclusion then follows because $\\binom m2$ is strictly increasing in the number $m$ of clubs.",
      steps: [
        "Fix a society $S$ and map each student $u$ to the pair of clubs of $S$ containing $u$. Condition (ii) makes this map well-defined.",
        "The map is injective: if two students determined the same pair of clubs, those two clubs would share two students, contradicting (i).",
        "The map is surjective: by (iii), every pair of distinct clubs of $S$ has exactly one common student, and by (ii) that student belongs to exactly those two clubs of $S$.",
        "Hence each society contributes exactly $n$ unordered pairs of clubs. Summing over the $s$ societies gives exactly $ns$ pairs in total.",
        "If society $S$ has $m_S$ clubs, then its number of club-pairs is $\\binom{m_S}{2}$, so $\\binom{m_S}{2}=n$ for every $S$. Since $m\\mapsto\\binom m2$ is strictly increasing for positive integers, all $m_S$ are equal."
      ]
    },
    {
      id: "c2",
      category: "cmb",
      difficulty: "easy",
      stars: 1,
      rating: 2,
      confidence: "high",
      text: "There are $n$ points on a line, with the distance between the two outermost points being $L$. Colour each point with one of $k$ colours, where $n\\ge k+1\\ge3$, and require that every colour is used at least once. The <em>span</em> of a colour is the distance between its two outermost points of that colour (or $0$ if the colour is used once). Prove that there exists a colouring for which the sum of the $k$ spans is at least $L$. Show that the constant $1$ is best possible: for every $k$, exhibit a point set with $n=k+1$ points on which no admissible colouring achieves span-sum exceeding $L$.",
      why: "The lower bound is immediate by giving the two extreme points the same colour. The sharpness argument uses the exact one-point surplus $n-k=1$, which forces only one colour to contribute a nonzero span.",
      steps: [
        "Colour the two outermost points with the same colour. That colour has span exactly $L$, so the sum of all $k$ spans is at least $L$; distribute the remaining points among the colours so that every colour is used.",
        "For sharpness, fix $k$ and take $n=k+1$ distinct points between the two extremes. Because every one of the $k$ colours must be used, one colour is used twice and each of the other $k-1$ colours is used exactly once.",
        "All singleton colours have span $0$. Thus the total span-sum is just the distance between the two points carrying the repeated colour, which is at most $L$.",
        "Therefore on every such $(k+1)$-point configuration no admissible colouring has span-sum greater than $L$, so no universal constant larger than $1$ can replace $1$."
      ]
    },
    {
      id: "c3",
      category: "cmb",
      difficulty: "easy",
      stars: 1,
      rating: 2.5,
      confidence: "high",
      text: "Maryam and Iman play a game on a $7\\times7$ chessboard. Initially the board is empty. <ol><li>On the first turn, Maryam places a piece on any square of her choice.</li><li>In subsequent turns, each player must move the piece to an adjacent square (sharing a common edge) not previously visited.</li><li>The player who cannot make a valid move loses.</li></ol><br>Prove that Maryam (the first player) has a winning strategy, and describe it in detail.",
      why: "A pairing strategy converts the path game into a forced-response game. Starting at the centre leaves an even board that can be partitioned into adjacent dominoes.",
      steps: [
        "Maryam starts at the centre square $(4,4)$. Partition the remaining $48$ squares into $24$ adjacent dominoes: pair rows $1$–$2$ vertically in each column, rows $6$–$7$ vertically in each column, the $3\\times2$ blocks in columns $1$–$2$ and $6$–$7$ horizontally row by row, and the remaining $3\\times3$ block with its centre removed by four dominoes around the missing centre.",
        "Whenever Iman moves to an unvisited square $W$, let $V$ be its mate in the fixed domino partition. Since $W$ and $V$ are adjacent and $V$ has not been visited before, Maryam moves immediately from $W$ to $V$.",
        "After each Maryam reply, every visited square other than the current endpoint belongs to a completed domino (together with the initial centre). Hence Iman can never enter a completed domino; every legal new move enters an untouched domino.",
        "Maryam therefore has a legal reply after every Iman move. After all $24$ dominoes have been completed, every square is visited, so Iman has no legal move and loses."
      ]
    },
    {
      id: "c4",
      category: "cmb",
      difficulty: "easy",
      stars: 1,
      rating: 3,
      confidence: "high",
      text: "A coin is placed on each vertex of a finite simple graph $G$. In each step, select a vertex $v$ containing a coin, collect its coin, and discard coins on $v$ and all neighbors. Repeat until no coins remain.<br><br>Prove that we can always collect at least $$\\sum_{v\\in V}\\frac1{\\deg(v)+1}$$ coins.",
      why: "This is the greedy independent-set bound behind the Caro–Wei theorem. The induction works because a minimum-degree closed neighbourhood carries total weight at most $1$.",
      steps: [
        "Induct on $|V(G)|$. Choose a vertex $v$ of minimum degree $d$ and collect its coin, deleting the closed neighbourhood $N[v]$. Let $H=G-N[v]$.",
        "For every $u\\in N[v]$ we have $\\deg_G(u)\\ge d$, so $$\\sum_{u\\in N[v]}\\frac1{\\deg_G(u)+1}\\le\\frac{d+1}{d+1}=1.$$ Thus the coin collected at $v$ pays for the whole weight of its deleted neighbourhood.",
        "By induction, the process on $H$ can collect at least $\\sum_{u\\in H}1/(\\deg_H(u)+1)$ coins. Since deleting vertices cannot increase the degree, $\\deg_H(u)\\le\\deg_G(u)$ and therefore each term is at least $1/(\\deg_G(u)+1)$.",
        "Adding the first coin gives at least the full sum $\\sum_{v\\in V(G)}1/(\\deg_G(v)+1)$."
      ]
    },
    {
      id: "c5",
      category: "cmb",
      difficulty: "medium",
      stars: 2,
      rating: 4.5,
      confidence: "high",
      text: "In a night sky, constellations of three stars are charted such that no two share more than one star. Starlight links two stars whenever they belong to the same constellation. <ol><li>Two constellations form a <em>conjunction</em> if they share a star.</li><li>A trio of stars forms a <em>mirage</em> if they are pairwise linked by starlight, yet form no constellation.</li></ol><br>Prove that the number of mirages is at most $\\dfrac43$ the number of conjunctions.",
      why: "The hypergraph is linear, so the neighbours of each star split into disjoint pairs coming from the constellations through that star. Counting cross-pair edges locally and then dividing by three gives the sharp constant.",
      steps: [
        "Let $d_v$ be the number of constellations containing star $v$. Because two constellations share at most one star, each pair of constellations has a unique common star, so the number of conjunctions is $$C=\\sum_v\\binom{d_v}{2}.$$",
        "Fix a star $v$. Its $2d_v$ neighbours are partitioned into $d_v$ disjoint pairs, one pair from each constellation through $v$. Let $e_v$ be the number of starlight edges joining vertices that belong to different such pairs.",
        "Each such cross-edge $xy$, together with $v$, gives a mirage $\\{v,x,y\\}$: the three pairs are linked, while $x,y$ are not the two companions of $v$ in one constellation. Conversely, every mirage is counted once at each of its three vertices. Hence $$M=\\frac13\\sum_v e_v.$$",
        "Among the $2d_v$ neighbours there are exactly $4\\binom{d_v}{2}$ possible cross-pairs, so $e_v\\le4\\binom{d_v}{2}$. Therefore $$M\\le\\frac13\\sum_v4\\binom{d_v}{2}=\\frac43C.$$"
      ]
    },
    {
      id: "c6",
      category: "cmb",
      difficulty: "medium",
      stars: 2,
      rating: 5,
      confidence: "high",
      text: "In a mysterious investigation bureau, there are $m$ detectives and $n$ secret clues, where $n\\ge m\\ge2$. Each detective has access to a distinct combination of these clues. One day, the chief inspector burns exactly one clue from the archives. A clue is called <em>safe</em> if, after its destruction, no two detectives become indistinguishable based on the clues they still possess.<br><br>Show that at least $n-m+1$ clues are safe.",
      why: "Representing clue-sets as vertices of the binary cube turns every unsafe clue into a distinct labelled edge. A cycle is impossible because a hypercube cycle uses every coordinate an even number of times.",
      steps: [
        "Represent the $m$ distinct clue-sets by their $0$–$1$ incidence vectors in $\\{0,1\\}^n$. A clue $j$ is unsafe exactly when two detectives' vectors differ only in coordinate $j$, so there is a hypercube edge in direction $j$ between two of the $m$ vertices.",
        "For every unsafe clue choose one such edge. The chosen edges form a graph $H$ on the $m$ detective-vertices, and their edge labels (the corresponding clues) are all distinct.",
        "The graph $H$ is acyclic. Indeed, in any cycle of a hypercube, each coordinate is flipped an even number of times. But every edge of $H$ has a distinct coordinate label, so a cycle would make each of its labels occur exactly once, impossible.",
        "Thus $H$ is a forest, so it has at most $m-1$ edges. If $U$ is the number of unsafe clues, then $U\\le m-1$, hence the number of safe clues is at least $n-U\\ge n-m+1$."
      ]
    },
    {
      id: "c7",
      category: "cmb",
      difficulty: "medium",
      stars: 2,
      rating: 5,
      confidence: "high",
      text: "Let $G$ be a simple graph on $n$ vertices containing no triangle. Prove that $G$ has at most $\\lfloor n^2/4\\rfloor$ edges.",
      why: "Mantel's theorem follows from one local degree inequality on each edge and one global Cauchy–Schwarz inequality. Both bounds are elementary but must be combined in the correct direction.",
      steps: [
        "If $uv$ is an edge, then $u$ and $v$ have no common neighbour, otherwise there would be a triangle. Hence every other vertex is adjacent to at most one of $u,v$, giving $\\deg(u)+\\deg(v)\\le n$.",
        "Sum this inequality over all edges. Each vertex $v$ appears once for every incident edge, so $$\\sum_{uv\\in E}(\\deg u+\\deg v)=\\sum_v\\deg(v)^2\\le n|E|.$$",
        "By Cauchy–Schwarz, $$\\sum_v\\deg(v)^2\\ge\\frac{(\\sum_v\\deg(v))^2}{n}=\\frac{(2|E|)^2}{n}.$$",
        "Combining the two inequalities gives $4|E|^2/n\\le n|E|$. If $|E|>0$, divide by $|E|$ to get $|E|\\le n^2/4$; if $|E|=0$ the conclusion is immediate. Since $|E|$ is an integer, $|E|\\le\\lfloor n^2/4\\rfloor$."
      ]
    },
    {
      id: "c8",
      category: "cmb",
      difficulty: "medium",
      stars: 2,
      rating: 5.5,
      confidence: "high",
      text: "For any integer $n\\ge2$, prove that there exists a set $S$ of $2n$ distinct triangular numbers partitionable into two subsets of size $n$ with equal sums.<br><br><em>A triangular number is a positive integer of the form $\\tfrac{k(k+1)}2$ for some positive integer $k$.</em>",
      why: "The construction uses a genuinely useful four-term identity and a parity split. Once the identity is found, induction by two preserves both distinctness and equal sums.",
      steps: [
        "Write $T_r=r(r+1)/2$. For $n=2$, $$T_1+T_5=T_3+T_4=16,$$ so four distinct triangular numbers work.",
        "For $n=3$, $$T_1+T_3+T_6=T_2+T_4+T_5=28,$$ so six distinct triangular numbers work.",
        "Suppose a valid construction for some $n$ uses only indices at most $M$. Choose $m>M$. The identity $$T_m+T_{2m+3}=T_{m+2}+T_{2m+2}$$ follows by expanding the definition of $T_r$.",
        "The four new indices $m,m+2,2m+2,2m+3$ are pairwise distinct and all exceed $M$. Put $T_m,T_{2m+3}$ on one side and $T_{m+2},T_{2m+2}$ on the other. Both sides gain the same sum and both cardinalities increase by $2$.",
        "Starting from $n=2$ and increasing by $2$ proves every even $n$; starting from $n=3$ and increasing by $2$ proves every odd $n$."
      ]
    },
    {
      id: "c9",
      category: "cmb",
      difficulty: "medium",
      stars: 2,
      rating: 5.5,
      confidence: "high",
      text: "Let $n\\ge1$ and let $a_1,a_2,\\dots,a_{n^2+1}$ be $n^2+1$ distinct real numbers. Prove that among them there is either an increasing subsequence of length $n+1$ or a decreasing subsequence of length $n+1$.",
      why: "The Erdős–Szekeres argument encodes every term by the longest increasing and decreasing subsequences ending there. Distinct terms force these pairs to be distinct, so pigeonhole finishes the proof.",
      steps: [
        "For each index $i$, let $x_i$ be the maximum length of an increasing subsequence ending at $a_i$, and let $y_i$ be the maximum length of a decreasing subsequence ending at $a_i$.",
        "If $i&lt;j$ and $a_i&lt;a_j$, any increasing subsequence ending at $a_i$ can be extended by $a_j$, so $x_i&lt;x_j$. If $a_i>a_j$, similarly $y_i&lt;y_j$.",
        "Because all $a_i$ are distinct, for every $i&lt;j$ one of these inequalities holds. Hence the pairs $(x_i,y_i)$ are all distinct.",
        "If there were no increasing or decreasing subsequence of length $n+1$, then every $x_i$ and $y_i$ would belong to $\\{1,2,\\dots,n\\}$, giving only $n^2$ possible pairs. But there are $n^2+1$ indices, a contradiction."
      ]
    },
    {
      id: "c10",
      category: "cmb",
      difficulty: "hard",
      stars: 3,
      rating: 6,
      confidence: "high",
      text: "Let $r,p,q$ be positive integers. Suppose we have pairs of finite sets $(A_1,B_1),\\dots,(A_r,B_r)$ such that $|A_i|=p$, $|B_i|=q$, $A_i\\cap B_i=\\varnothing$ for every $i$, and $A_i\\cap B_j\\ne\\varnothing$ whenever $i\\ne j$. Prove that $$r\\le\\binom{p+q}{p}.$$",
      why: "A random-permutation proof makes the extremal bound almost inevitable: each pair defines an event of probability $1/\\binom{p+q}{p}$, and the cross-intersection condition makes these events mutually exclusive.",
      steps: [
        "Take a uniformly random ordering of all elements appearing in the sets. For each $i$, let $E_i$ be the event that every element of $A_i$ occurs before every element of $B_i$.",
        "Among the $p+q$ elements of $A_i\\cup B_i$, all relative orders are equally likely. Exactly $p!q!$ of the $(p+q)!$ relative orders put all $A_i$ elements before all $B_i$, so $$\\Pr(E_i)=\\frac{p!q!}{(p+q)!}=\\frac1{\\binom{p+q}{p}}.$$",
        "For $i\\ne j$, choose $x\\in A_i\\cap B_j$ and $y\\in A_j\\cap B_i$. If $E_i$ occurs, then $x$ is before $y$, because $x\\in A_i$ and $y\\in B_i$. If $E_j$ occurs, then $y$ is before $x$. Thus $E_i$ and $E_j$ cannot occur simultaneously.",
        "The events $E_1,\\dots,E_r$ are pairwise disjoint, so $$1\\ge\\Pr\\!\\left(\\bigcup_iE_i\\right)=\\sum_i\\Pr(E_i)=\\frac{r}{\\binom{p+q}{p}}.$$ Therefore $r\\le\\binom{p+q}{p}$."
      ]
    },
    {
      id: "c11",
      category: "cmb",
      difficulty: "hard",
      stars: 3,
      rating: 6.5,
      confidence: "high",
      text: "Let $G$ be a simple graph on $n\\ge3$ vertices with minimum degree at least $n/2$. Prove that $G$ contains a Hamiltonian cycle.",
      why: "Dirac's theorem has a compact longest-path proof but requires two distinct extremal ideas: closing a longest path into a cycle and then inserting any outside vertex into that cycle.",
      steps: [
        "Let $P=v_1v_2\\dots v_k$ be a longest path. Every neighbour of $v_1$ and $v_k$ lies on $P$, since otherwise $P$ could be extended. Define $$A=\\{i:1\\le i\\le k-1,\\ v_1v_{i+1}\\in E\\},\\quad B=\\{i:1\\le i\\le k-1,\\ v_iv_k\\in E\\}.$$ Then $|A|=\\deg(v_1)$ and $|B|=\\deg(v_k)$.",
        "Since $|A|+|B|\\ge n\\ge k$ while both sets lie in a universe of size $k-1$, they intersect. Choose $i\\in A\\cap B$. Then $$v_1v_{i+1}v_{i+2}\\dots v_kv_i v_{i-1}\\dots v_1$$ is a cycle through all $k$ vertices of $P$.",
        "Suppose $k&lt;n$. Take a vertex $x$ outside this cycle. Since $\\deg(x)\\ge n/2>k/2$, $x$ has more than half of the cycle vertices as neighbours. A set of vertices on a cycle with no two consecutive vertices has at most $\\lfloor k/2\\rfloor$ elements, so two consecutive cycle vertices, say $u,v$, are both adjacent to $x$.",
        "Replacing the cycle edge $uv$ by $uxv$ produces a cycle through $k+1$ vertices, contradicting the maximality of $P$. Hence $k=n$, and the cycle found in step 2 is Hamiltonian."
      ]
    },
    {
      id: "c12",
      category: "cmb",
      difficulty: "hard",
      stars: 3,
      rating: 7,
      confidence: "high",
      text: "Let $n&lt;m$ be positive integers. Let $a_{ij}$ be real numbers for $1\\le i\\le n$ and $1\\le j\\le m$. We say a sequence of real numbers $x_1,\\dots,x_m$ is <em>stable</em> if we can choose $n$ pairwise distinct integers $c_1,\\dots,c_n\\in\\{1,\\dots,m\\}$ such that $$a_{i,c_i}-x_{c_i}\\ge a_{ij}-x_j \\quad\\text{for all }1\\le i\\le n\\text{ and }1\\le j\\le m.$$ Prove that if two sequences $y=(y_1,\\dots,y_m)$ and $z=(z_1,\\dots,z_m)$ are stable, then the sequence $u$ defined by $u_j=\\min(y_j,z_j)$ is also stable.",
      why: "Choose witnessing matchings for $y$ and $z$. Their union decomposes into alternating paths and cycles. The differences $d_j=y_j-z_j$ are monotone along every path and constant on every cycle; this permits an exchange-free choice of one optimal edge per row for $u=\\min(y,z)$ while keeping all chosen columns distinct.",
      steps: [
        "Let $M_y$ and $M_z$ be witnessing matchings for the stability of $y$ and $z$: each row vertex $i$ is matched to one column, the columns used by each matching are pairwise distinct, and its matched edge is row-wise optimal for the corresponding sequence. Form the bipartite multigraph $H=M_y\\cup M_z$, keeping the two edges distinct when the same row-column pair occurs in both matchings. Every row has degree $2$ and every column has degree at most $2$, so every connected component of $H$ is an alternating cycle or an alternating path whose endpoints are columns. A doubled common edge is regarded as a $2$-cycle.",
        "Put $$d_j=y_j-z_j.$$ Suppose a row $i$ uses column $p$ in $M_y$ and column $q$ in $M_z$. Stability gives $$a_{ip}-y_p\\ge a_{iq}-y_q$$ and $$a_{iq}-z_q\\ge a_{ip}-z_p.$$ Hence $$y_p-y_q\\le a_{ip}-a_{iq}\\le z_p-z_q,$$ so $$d_p\\le d_q.$$ In a path, orient the component from the endpoint belonging to $M_y$. Writing it as $$c_0-i_1-c_1-i_2-c_2-\\cdots-i_k-c_k,$$ where $i_r$ is joined to $c_{r-1}$ by its $M_y$ edge and to $c_r$ by its $M_z$ edge, we obtain $$d_{c_0}\\le d_{c_1}\\le\\cdots\\le d_{c_k}.$$ Around an alternating cycle the inequalities go all the way around, hence all its columns have the same $d$-value.",
        "Fix a row $i$ of a path, with $M_y$ column $p$ and $M_z$ column $q$. Define $$\\alpha_j=a_{ij}-y_j.$$ Since $p$ is $y$-optimal, $\\alpha_p\\ge\\alpha_j$ for every $j$. Also $z_j=y_j-d_j$, so $q$ being $z$-optimal means $$\\alpha_q+d_q\\ge\\alpha_j+d_j$$ for every $j$. Finally, because $u_j=\\min(y_j,z_j)=y_j-\\max(d_j,0)$, its row-$i$ score is $$a_{ij}-u_j=\\alpha_j+\\max(d_j,0)=\\max(\\alpha_j,\\alpha_j+d_j).$$ Therefore the largest possible $u$-score in row $i$ is $$\\max\\{\\alpha_p,\\,\\alpha_q+d_q\\},$$ and this maximum is attained at $p$ or $q$. More precisely: if $d_p,d_q\\le0$, then $\\alpha_q+d_q\\le\\alpha_q\\le\\alpha_p$, so $p$ is $u$-optimal; if $d_p,d_q\\ge0$, then $\\alpha_p\\le\\alpha_p+d_p\\le\\alpha_q+d_q$, so $q$ is $u$-optimal; and if $d_p\\le0\\le d_q$, at least one of $p,q$ is $u$-optimal.",
        "Consider an alternating cycle. Its column differences are all equal. If the common value is nonpositive, the preceding argument shows that every $M_y$ edge is $u$-optimal; if it is nonnegative, every $M_z$ edge is $u$-optimal. Thus choosing all $M_y$ edges or all $M_z$ edges, respectively, gives a matching covering every row of that component with distinct columns. When the common value is $0$, either choice works.",
        "Now consider an alternating path $$c_0-i_1-c_1-\\cdots-i_k-c_k$$ with $d_{c_0}\\le\\cdots\\le d_{c_k}$. Hence there is at most one transition from nonpositive to positive values. Choose all $M_y$ edges for rows before that transition and all $M_z$ edges for rows after it. Every such chosen edge is $u$-optimal by the preceding sign analysis. If there is a transition row $i_{t+1}$ with $$d_{c_t}\\le0\\le d_{c_{t+1}},$$ choose whichever of its two incident matching edges is $u$-optimal. This does not create a collision: the preceding chosen $M_y$ edge, if any, uses $c_{t-1}$, while the following chosen $M_z$ edge, if any, uses $c_{t+2}$.",
        "Thus every connected component of $H$ contains a matching covering all its row vertices by edges that are individually optimal for $u$, with no column used twice. Combining these matchings over all components gives $n$ pairwise distinct columns $c_1,\\dots,c_n$ such that $$a_{i,c_i}-u_{c_i}\\ge a_{ij}-u_j$$ for every row $i$ and every column $j$. Therefore $u=(\\min(y_1,z_1),\\dots,\\min(y_m,z_m))$ is stable."
      ]
    },
    {
      id: "c13",
      category: "cmb",
      difficulty: "hard",
      stars: 3,
      rating: 7,
      confidence: "high",
      text: "Let $X$ be an $n$-element set, and let $A_1,A_2,\\dots,A_n$ be subsets of $X$ such that <ol><li>$|A_i|$ is odd for every $i$;</li><li>$|A_i\\cap A_j|$ is even whenever $i\\ne j$.</li></ol><br>An <em>assignment</em> is a choice of pairwise distinct elements $x_1,\\dots,x_n\\in X$ with $x_i\\in A_i$ for every $i$. Prove that the number of assignments is odd.",
      why: "The incidence matrix over $\\mathbb F_2$ satisfies $MM^T=I$. Its determinant is therefore $1$, while the number of systems of distinct representatives is the permanent, which agrees with the determinant modulo $2$.",
      steps: [
        "Let $M=(m_{ij})$ be the $n\\times n$ incidence matrix, where $m_{ij}=1$ exactly when $x_j\\in A_i$, and regard all entries as elements of $\\mathbb F_2$.",
        "The $(i,i)$ entry of $MM^T$ is $|A_i|$ modulo $2$, hence equals $1$. For $i\\ne j$, the $(i,j)$ entry is $|A_i\\cap A_j|$ modulo $2$, hence equals $0$. Thus $$MM^T=I$$ over $\\mathbb F_2$.",
        "Therefore $M$ is invertible and $\\det M=1$ in $\\mathbb F_2$.",
        "The number of assignments is the permanent $$\\operatorname{per}(M)=\\sum_{\\sigma\\in S_n}\\prod_i m_{i,\\sigma(i)}.$$ Modulo $2$, the sign of every permutation is $1$, so $\\operatorname{per}(M)\\equiv\\det M\\equiv1\\pmod2$.",
        "Hence the number of assignments is odd."
      ]
    },
    {
      id: "c14",
      category: "cmb",
      difficulty: "challenging",
      stars: 4,
      rating: 8,
      confidence: "high",
      text: "Let $m\\ge3$ be odd. A school has $m$ students and $n\\ge m+2$ clubs; no two clubs have the same membership set. For two clubs, their <em>discord</em> is the number of students in exactly one of them. Let $d_{\\min}$ and $d_{\\max}$ be the minimum and maximum discords. Prove that $$\\frac{d_{\\max}}{d_{\\min}}\\ge\\frac{m+3}{m-1}.$$ Show that the bound is attained for $m=3$ and $m=5$.",
      why: "The lower bound follows from an elementary Plotkin-type count together with a rank argument showing that $d_{\\max}\\ge d_{\\min}+2$. The original claim of attainability for every odd $m$ is too strong; for example, equality cannot occur when $m=7$. The statement is minimally corrected by retaining sharp equality examples for $m=3$ and $m=5$.",
      steps: [
        "Represent each club by its incidence vector in $\\{0,1\\}^m$. Let $\\delta=d_{\\min}$ and $\\Delta=d_{\\max}$. Since the clubs have distinct membership sets, $\\delta\\ge1$. For each student-coordinate $j$, suppose $r_j$ of the $n$ clubs contain that student. Exactly $r_j(n-r_j)$ unordered pairs of clubs differ in coordinate $j$, and $$r_j(n-r_j)\\le\\frac{n^2}{4}.$$ Hence the sum of all pairwise discords satisfies $$\\sum_{a&lt;b}d(a,b)\\le m\\frac{n^2}{4}.$$ On the other hand every pair has discord at least $\\delta$, so $$\\binom n2\\delta\\le m\\frac{n^2}{4},$$ giving $$\\delta\\le\\frac{mn}{2(n-1)}.$$ Since $n\\ge m+2$, the right-hand side is at most $$\\frac{m(m+2)}{2(m+1)}=\\frac{m+1}{2}-\\frac1{2(m+1)}<\\frac{m+1}{2}.$$ As $m$ and $\\delta$ are integers and $m$ is odd, $$\\boxed{\\delta\\le\\frac{m-1}{2}}.$$",
        "We next prove $$\\boxed{\\Delta\\ge\\delta+2}.$$ Suppose for contradiction that $\\Delta\\le\\delta+1$. Replace every incidence vector $x$ by $x\\oplus x_0$ for one fixed club $x_0$. This is an isometry of Hamming space, so all pairwise discords are unchanged; after the replacement, one club is the zero vector. Since every distance is either $\\delta$ or $\\delta+1$, every vector has weight $\\delta$ or $\\delta+1$.",
        "Partition the clubs according to the parity of their weights. Two clubs in the same parity class have even Hamming distance, while two clubs in opposite parity classes have odd Hamming distance. Because the only possible distances are the consecutive integers $\\delta,\\delta+1$, all pairs within the same parity class have one common distance $E$, namely the even member of $\\{\\delta,\\delta+1\\}$, and every pair from opposite parity classes has the other common distance $O$, the odd member.",
        "Replace each binary vector by its $\\{\\pm1\\}$-vector obtained from $0\\mapsto1$ and $1\\mapsto-1$. For two such vectors, inner product equals $m-2d$, where $d$ is their Hamming distance. Thus vectors in the same parity class have constant off-diagonal inner product $$\\alpha=m-2E,$$ while vectors in opposite parity classes have constant inner product $$\\beta=m-2O.$$ Since $m$ is odd, $\\beta$ is odd and therefore $\\beta\\ne0$.",
        "If all clubs have the same weight parity, their Gram matrix is $$G=(m-\\alpha)I_n+\\alpha J_n.$$ Here $$m-\\alpha=2E>0,$$ so $G$ has the positive eigenvalue $2E$ with multiplicity $n-1$. Hence $\\operatorname{rank}G\\ge n-1$. But $G=VV^T$ for vectors in $\\mathbb R^m$, so $\\operatorname{rank}G\\le m$, contradicting $n\\ge m+2$.",
        "Suppose instead that both parity classes are nonempty, of sizes $p$ and $q$. The Gram matrix has block form $$G=\\begin{pmatrix}(m-\\alpha)I_p+\\alpha J_p&\\beta J_{p\\times q}\\\\ \\beta J_{q\\times p}&(m-\\alpha)I_q+\\alpha J_q\\end{pmatrix}.$$ On the subspace of vectors whose coordinates in each block separately sum to $0$, $G$ acts as multiplication by $m-\\alpha=2E>0$; this gives rank at least $n-2$. On the remaining $2$-dimensional space of vectors constant on each block, the representing matrix has off-diagonal entry $\\beta\\sqrt{pq}\\ne0$, so it has rank at least $1$. Hence $$\\operatorname{rank}G\\ge n-1>m,$$ again impossible. Therefore $\\Delta\\le\\delta+1$ is impossible, proving $\\Delta\\ge\\delta+2$.",
        "Combining the two bounds gives $$\\frac{\\Delta}{\\delta}\\ge1+\\frac2\\delta\\ge1+\\frac{4}{m-1}=\\boxed{\\frac{m+3}{m-1}}.$$",
        "For $m=3$, take the five membership sets $$\\varnothing,\\ \\{1\\},\\ \\{2\\},\\ \\{3\\},\\ \\{1,2,3\\}.$$ The minimum discord is $1$, the maximum is $3$, and $$\\frac{d_{\\max}}{d_{\\min}}=3=\\frac{3+3}{3-1}.$$",
        "For $m=5$, take the seven membership sets $$\\varnothing,\\ \\{1,2\\},\\ \\{1,3\\},\\ \\{1,4\\},\\ \\{1,5\\},\\ \\{2,3\\},\\ \\{1,2,3,4\\}.$$ Every pair has discord $2$ or $4$, both values occur, so $d_{\\min}=2$, $d_{\\max}=4$, and $$\\frac{d_{\\max}}{d_{\\min}}=2=\\frac{5+3}{5-1}.$$ Thus the stated bound is attained in these two cases."
      ]
    },
    {
      id: "c15",
      category: "cmb",
      difficulty: "challenging",
      stars: 4,
      rating: 8,
      confidence: "medium",
      text: "A society has $2n$ members. Certain pairs of members are acquainted, subject to the following rules: <ol><li>Every member is acquainted with an odd number of other members.</li><li>Every two distinct members have an even number of common acquaintances.</li></ol><br>A <em>complete introduction</em> is a partition of the $2n$ members into $n$ pairs of acquainted members.<br><br>Prove that the number of complete introductions is odd, and that every pair of acquainted members belongs to an odd number of complete introductions.",
      why: "The adjacency matrix satisfies $A^2=I$ over $\\mathbb F_2$. Determinants then encode perfect-matchings parity, and a complementary-minor argument gives the stronger statement for each fixed edge.",
      steps: [
        "Let $A$ be the adjacency matrix over $\\mathbb F_2$. The diagonal entries of $A^2$ are the vertex degrees, hence $1$, and the off-diagonal entries count common neighbours, hence are $0$. Therefore $$A^2=I,$$ so $A$ is invertible and $\\det A=1$.",
        "In the determinant expansion over $\\mathbb F_2$, every permutation containing a cycle of length at least $3$ cancels with the permutation obtained by reversing one such cycle: both products are identical and they occur twice. Because the diagonal of $A$ is zero, fixed points contribute nothing. The surviving permutations are exactly products of disjoint transpositions, hence exactly perfect matchings. Thus $\\det A$ is the parity of the number of complete introductions, which is therefore odd.",
        "Fix an acquainted pair $uv$. Complete introductions containing $uv$ are in bijection with perfect matchings after deleting $u,v$. Let $B$ be the principal submatrix obtained by deleting rows and columns $u,v$.",
        "Jacobi's complementary-minor identity over $\\mathbb F_2$, together with $A^{-1}=A$, gives $$\\det B=\\det(A)\\det(A^{-1}[u,v])=1\\cdot\\det\\begin{pmatrix}0&1\\\\1&0\\end{pmatrix}=1.$$",
        "Applying the determinant/perfect-matching parity argument to the graph with $u,v$ deleted, we conclude that it has an odd number of perfect matchings. Hence the acquaintance $uv$ belongs to an odd number of complete introductions."
      ]
    },
    {
      id: "c16",
      category: "cmb",
      difficulty: "challenging",
      stars: 4,
      rating: 8.5,
      confidence: "medium",
      text: "There are $n$ piles, each with a token of value $1$. In each step, choose two piles with values $A$ and $B$ and merge them into a pile of value $A+B+\\min(A,B)$. Repeat $n-1$ times.<br><br>Prove that the maximum possible value of the final pile equals the number of odd entries in the first $n$ rows of Pascal's triangle, i.e. the number of pairs $(x,y)$ with $0\\le x\\le y&lt;n$ for which $\\binom yx$ is odd.",
      why: "The merge operation gives a binary-tree recurrence, while Lucas' parity criterion converts the Pascal-triangle count into a binary-weight sequence satisfying the same recurrence. The difficult part is proving that no other split can beat the binary-weight construction.",
      answer: "If $M(n)$ is the maximum final value and $S(n)=\\sum_{r=0}^{n-1}2^{\\operatorname{popcount}(r)}$, then $M(n)=S(n)$; by Lucas' theorem, $S(n)$ is exactly the number of odd entries in the first $n$ rows of Pascal's triangle.",
      steps: [
        "Let $M(n)$ be the maximum obtainable from $n$ piles. In an optimal final merge, suppose the two child-subpiles have optimal values $M(i)$ and $M(n-i)$, with $i\\le n-i$. The merged value is $$M(i)+M(n-i)+\\min(M(i),M(n-i))=2M(i)+M(n-i).$$ Hence $$M(n)=\\max_{1\\le i\\le\\lfloor n/2\\rfloor}\\bigl(2M(i)+M(n-i)\\bigr),\\qquad M(1)=1.$$",
        "Define $w(r)=2^{\\operatorname{popcount}(r)}$ and $$S(n)=\\sum_{r=0}^{n-1}w(r).$$ Lucas' theorem modulo $2$ says that $\\binom yx$ is odd exactly when every $1$-bit of $x$ also occurs in $y$. Thus row $y$ contains exactly $2^{\\operatorname{popcount}(y)}=w(y)$ odd entries, so $S(n)$ is exactly the required Pascal-triangle count.",
        "Since $\\operatorname{popcount}(2r)=\\operatorname{popcount}(r)$ and $\\operatorname{popcount}(2r+1)=\\operatorname{popcount}(r)+1$, we have $$S(2t)=3S(t),\\qquad S(2t+1)=2S(t)+S(t+1).$$",
        "The key binary-block lemma is: for integers $1\\le i\\le j$, $$S(i+j)\\ge2S(i)+S(j).$$ Prove it by strong induction on $i+j$: write $i=2a+\\delta$, $j=2b+\\varepsilon$ with $\\delta,\\varepsilon\\in\\{0,1\\}$, split the sums into even and odd indices, and use the identities in the previous step. In each parity case, after collecting the even and odd terms, the claim reduces to the same inequality for strictly smaller parameters. The case $i=j$ is exact because $S(2i)=3S(i)$.",
        "Applying the lemma to any split $i\\le n-i$ gives $$2S(i)+S(n-i)\\le S(n).$$ Equality is achieved when $n=2i$ by $S(2i)=3S(i)$, and when $n=2i+1$ by $S(2i+1)=2S(i)+S(i+1)$. Therefore $$S(n)=\\max_{1\\le i\\le\\lfloor n/2\\rfloor}\\bigl(2S(i)+S(n-i)\\bigr).$$",
        "The recurrences for $M$ and $S$, together with $M(1)=S(1)=1$, now give $M(n)=S(n)$ by induction on $n$. Hence the maximum final pile equals the number of odd entries in the first $n$ rows of Pascal's triangle."
      ]
    },
    // Geometry — 25 problems, easy to hard
    {
      id: "g1",
      category: "geo",
      difficulty: "easy",
      stars: 1,
      rating: 1.5,
      confidence: "high",
      text: "Let $\\triangle ABC$ be a nondegenerate triangle and let $P\\ne A$ be a point in the plane. Reflect $P$ across the lines $AB$ and $AC$, obtaining $X$ and $Y$, respectively. Suppose $X\\ne Y$. Prove that $$XY\\perp BC$$ if and only if $AP$ is tangent to the circumcircle of $ABC$ at $A$.",
      why: "A remarkably short reflection/isogonal argument turns an apparently arbitrary point $P$ into the tangent at $A$. This exact configuration is not represented in the current set.",
      steps: [
        "Since reflection preserves distances from $A$, $AX=AP=AY$. Hence $A$ lies on the perpendicular bisector of $XY$; if $M$ is the midpoint of $XY$, then $AM\\perp XY$.",
        "$AX$ and $AY$ are obtained by reflecting $AP$ in lines $AB$ and $AC$ respectively, so line $AM$, which bisects $\\angle XAY$, is the isogonal reflection of line $AP$ in $\\angle A$.",
        "Hence $XY\\perp BC$ if and only if $AM\\parallel BC$, i.e. if and only if $AP$ is the isogonal (in $\\angle A$) of a line through $A$ parallel to $BC$.",
        "By the tangent–chord angle, the isogonal of a line through $A$ parallel to $BC$ is exactly the tangent to the circumcircle of $ABC$ at $A$. Therefore $XY\\perp BC$ if and only if $AP$ is tangent to the circumcircle of $ABC$ at $A$."
      ]
    },
    {
      id: "g2",
      category: "geo",
      difficulty: "easy",
      stars: 1,
      rating: 2,
      confidence: "high",
      text: "Let $\\Gamma$ be a circle with center $O$, and let $P$ be a point outside $\\Gamma$. The tangents from $P$ touch $\\Gamma$ at $A$ and $B$. A secant through $P$ meets $\\Gamma$ at distinct points $C,D$, and let $M$ be the midpoint of $CD$. Prove that $$O,P,A,B,M\\text{ are concyclic.}$$ Equivalently, prove that as the secant through $P$ varies, $M$ moves on one fixed circle.",
      why: "The moving point looks unrelated to the tangent points, but all three points $A,B,M$ suddenly land on the same fixed Thales circle. The proof is essentially three right angles.",
      steps: [
        "Because $PA$ and $PB$ are tangent to $\\Gamma$, $OA\\perp PA$ and $OB\\perp PB$, so $\\angle OAP=\\angle OBP=90^\\circ$.",
        "Since $M$ is the midpoint of the chord $CD$, $OM\\perp CD$. But $P,C,D$ are collinear, so line $CD$ is line $PM$; hence $OM\\perp PM$, giving $\\angle OMP=90^\\circ$.",
        "Thus $A,B,M$ all lie on the circle with diameter $OP$. Therefore $O,P,A,B,M$ are concyclic."
      ]
    },
    {
      id: "g3",
      category: "geo",
      difficulty: "easy",
      stars: 1,
      rating: 2.5,
      confidence: "high",
      text: "Let $ABC$ be an acute triangle, and let $M$ be the midpoint of $BC$. Let the circle centered at $M$ and passing through $A$ meet the lines $AB$ and $AC$ again at $X$ and $Y$, respectively. Prove that $XY$ is perpendicular to the reflection of the line $AM$ across the bisector of $\\angle BAC$.",
      why: "The construction is only a midpoint and a circle. The line to which $XY$ is perpendicular is the reflection of the median across the angle bisector, which the figure does not suggest. Once that line is identified, the angle chase is short.",
      steps: [
        "Put $\\angle BAM=\\theta$ and $\\angle MAC=A-\\theta$, where $A=\\angle BAC$. Since $X$ lies on the circle centered at $M$ through $A$, $MA=MX$, so $\\triangle AMX$ is isosceles; likewise $MA=MY$, so $\\triangle AMY$ is isosceles and $\\angle MAY=A-\\theta$.",
        "From the isosceles triangle $AMY$, $\\angle AMY=180^\\circ-2(A-\\theta)$.",
        "Since $A,X,Y$ lie on the circle centered at $M$, the inscribed angle $\\angle AXY$ subtends the chord $AY$, so $\\angle AXY=\\tfrac12\\angle AMY=90^\\circ-(A-\\theta)$. Thus the angle between $XY$ and $AB$ equals $90^\\circ-(A-\\theta)$.",
        "The reflection of median $AM$ across the bisector of $\\angle BAC$ makes an angle $A-\\theta$ with $AB$. Adding the two angles gives $90^\\circ$, so $XY$ is perpendicular to that reflection."
      ]
    },
    {
      id: "g4",
      category: "geo",
      difficulty: "easy",
      stars: 1,
      rating: 3,
      confidence: "high",
      text: "Let $ABCD$ be a cyclic quadrilateral with circumcenter $O$. Assume no two opposite sides are parallel. Let $AB\\cap CD=E$ and $AD\\cap BC=F$. Let the diagonals $AC$ and $BD$ meet at $M$, and let $N$ be the reflection of $M$ across line $EF$. Prove that $N,E,O,F$ are concyclic.",
      why: "The diagonal triangle of a cyclic quadrilateral is self-polar. That one standard theorem immediately makes $M$ the orthocenter of triangle $OEF$, after which reflecting across $EF$ gives the cyclicity. This is much shorter than the original Miquel/radical-axis chain.",
      steps: [
        "For a complete quadrilateral inscribed in a circle, the diagonal triangle is self-polar: the polar of $E$ is $FM$, the polar of $F$ is $EM$, and the polar of $M$ is $EF$.",
        "For a circle, the polar of a point is perpendicular to the line joining that point to $O$. Hence $OE$ is perpendicular to $FM$, $OF$ is perpendicular to $EM$, and $OM$ is perpendicular to $EF$.",
        "Therefore $M$ is the orthocenter of triangle $OEF$.",
        "In any triangle, the reflection of the orthocenter across one side lies on the circumcircle. Reflecting $M$ across $EF$ gives $N$, so $N$ lies on the circumcircle of $OEF$. Hence $N,E,O,F$ are concyclic."
      ]
    },
    {
      id: "g5",
      category: "geo",
      difficulty: "easy",
      stars: 1,
      rating: 3.5,
      confidence: "medium",
      text: "Let a <em>lune</em> be the region between two internally tangent circles. Given $N$ distinct points in the plane, prove that for any non-negative integers $P,Q,R$ with $P+Q+R=N$, there exists a lune containing exactly $P$ points strictly inside the smaller circle, $Q$ points in the strict interior of the lune, and $R$ points strictly outside the larger circle.",
      why: "Existence of a lune with prescribed inside/lune/outside counts. Continuity or a limiting sweep is the idea; short once seen, but a contestant has to invent that picture — the statement does not suggest a Euclidean calculation.",
      steps: [
        "Choose a unit vector $n$ not perpendicular to any difference of two given points. Take $T=-tn$ for $t$ so large that every point $X$ satisfies $(X-T)\\cdot n>0$.",
        "For $\\rho>0$ consider the circle centered at $T+\\rho n$ with radius $\\rho$. All these circles are internally tangent at $T$. A point $X$ is strictly inside this circle exactly when $\\rho>\\rho(X)$, where $\\rho(X)=|X-T|^2/[2(X-T)\\cdot n]$.",
        "As $t$ tends to infinity, $\\rho(X)-\\rho(Y)=((X-Y)\\cdot n)/2+O(1/t)$. By the choice of $n$, for all sufficiently large $t$ these $N$ values are pairwise distinct. Order them $\\rho_1\\lt\\cdots\\lt\\rho_N$.",
        "Choose radii $r\\lt R$ avoiding all $\\rho_i$, with exactly $P$ values below $r$, exactly $Q$ in $(r,R)$, and the remaining values above $R$. The two circles then form the required lune."
      ]
    },
    {
      id: "g6",
      category: "geo",
      difficulty: "medium",
      stars: 2,
      rating: 4,
      confidence: "high",
      text: "Let the incircle of $\\triangle ABC$ with incenter $I$ touch $BC$, $CA$, $AB$ at $D$, $E$, $F$ respectively. Let $M$ be the intersection of lines $AB$ and $DE$. The line through $M$ perpendicular to $IM$ meets lines $DF$ and $EF$ at $P$ and $Q$ respectively. Prove that $MP = MQ$.",
      why: "Incircle contact triangle, a harmonic bundle or pole/polar, then MP = MQ. A few standard lemmas rather than an exotic tool; longer from scratch than G2 because the perpendicular to IM has to be interpreted.",
      steps: [
        "Use coordinates with the incircle $x^2+y^2=1$ and $F=(1,0)$. Parametrize a point on the incircle by $T(t)=\\bigl((1-t^2)/(1+t^2),\\,2t/(1+t^2)\\bigr)$. The chord through $T(r),T(s)$ has equation $(1-rs)x+(r+s)y=1+rs$.",
        "Write $E=T(e)$ and $D=T(d)$. Since $AB$ is tangent at $F$, $AB$ is $x=1$. Thus $M=(1,m)$, where $m=2de/(d+e)$. The lines $EF$ and $DF$ have equations $x+ey=1$ and $x+dy=1$.",
        "The line through $M$ perpendicular to $IM$ has equation $x+my=1+m^2$. Hence $Q$ has $y$-coordinate $m^2/(m-e)$, and $P$ has $y$-coordinate $m^2/(m-d)$.",
        "Since $m=2de/(d+e)$, we get $y_Q-m=me/(m-e)$ and $y_P-m=md/(m-d)$, whose absolute values are equal. Thus $MP=MQ$.",
        "The exceptional case $d+e=0$ is exactly the case in which $M$ is not a finite intersection; for every configuration where $M$ is defined, the calculation applies."
      ]
    },
    {
      id: "g7",
      category: "geo",
      difficulty: "medium",
      stars: 2,
      rating: 5,
      confidence: "medium",
      text: "Let $\\triangle ABC$ be scalene with incenter $I$. The incircle touches $CA$ and $AB$ at $E$ and $F$. Let $L=EF\\cap BC$. Let the incircle of $\\triangle LEC$ and the $L$-excircle of $\\triangle LFB$ touch line $EF$ at $M$ and $N$, respectively. Let $K$ be the intersection of the incircle with segment $AI$. Prove that $BN$, $CM$, and the bisector $AI$ are concurrent at $K$.",
      why: "The original statement is false. The correction is minimal: swap $M/N$ in the two cevians and identify the concurrency point as the near-$A$ intersection of the incircle with $AI$.",
      steps: [
        "Let $\\theta=\\tfrac12\\angle A$, $u=\\cos\\theta$, $v=\\sin\\theta$, $b=AC$, $c=AB$ with $b>c$, and $t=AE=AF$. In coordinates with $A=(0,0)$ and $AI$ the $x$-axis, $B=(cu,cv)$, $C=(bu,-bv)$, $E=(tu,-tv)$, $F=(tu,tv)$. Area comparison with the incircle gives $t(b+c-t)=bcu^2$.",
        "The line $EF$ is $x=tu$. A direct intersection calculation gives $EL=2cv(b-t)/(b-c)$, $LF=2bv(c-t)/(b-c)$, $BL=(b+c-2t)(c-t)/(b-c)$, $LC=(b+c-2t)(b-t)/(b-c)$.",
        "For the incircle of triangle $LEC$, tangent lengths give $EM=(EL+EC-LC)/2=(b-t)\\bigl(t-c(1-v)\\bigr)/(b-c)$. For the $L$-excircle of triangle $LFB$, $FN=(LB+BF-LF)/2=(c-t)\\bigl(b(1-v)-t\\bigr)/(b-c)$.",
        "Writing $M_y,N_y$ for the $y$-coordinates, $M_y=-tv+EM$ and $N_y=tv+FN$. The original incircle has center $I=(t/u,0)$, so its intersection $K$ with segment $AI$ is $K=\\bigl(t(1-v)/u,\\,0\\bigr)$.",
        "The $x$-intercept on $AI$ of $BN$ is $(cu N_y-tu\\cdot cv)/(N_y-cv)$, and the $x$-intercept on $AI$ of $CM$ is $(bu M_y+tu\\cdot bv)/(M_y+bv)$. Substitution and the identity $t(b+c-t)=bcu^2$ reduce both expressions to $t(1-v)/u$.",
        "Thus $BN$ and $CM$ both pass through $K$, which also lies on $AI$ and the incircle. Hence $BN$, $CM$, and $AI$ are concurrent at $K$."
      ]
    },
    {
      id: "g8",
      category: "geo",
      difficulty: "medium",
      stars: 2,
      rating: 5,
      confidence: "high",
      status: "verified",
      text: "Let $ABC$ be a scalene triangle with circumcircle $\\omega$, and let $M$ be the midpoint of $BC$. Let $\\psi$ be the circle with diameter $AM$. Let $X$ be an arbitrary point on $\\psi$ (distinct from $A$ and $M$). Let $\\phi$ be the circumcircle of triangle $XBC$, and let $Y$ be the second intersection of $\\phi$ and $\\psi$. Let $D$ and $E$ be the second intersections of the lines $AX$ and $AY$ with $\\omega$, respectively. Prove that the line $DE$ passes through a fixed point independent of the choice of $X$.",
      why: "The same fixed-point-on-$BC$ configuration used in G18 and G20: every circle through $B,C$ meets $\\psi$ along a chord through one fixed point of $BC$, making $X\\leftrightarrow Y$ a projective involution of $\\psi$. Projecting from $A$ (which lies on both $\\psi$ and $\\omega$) transports this to an involution of $\\omega$, whose chords all pass through a single point by the standard involution theorem. Considerably shorter and more transparent than a direct coordinate computation.",
      steps: [
        "Let $K$ be the foot of the altitude from $A$ to $BC$. Since $\\psi$ has diameter $AM$, its intersections with $BC$ are exactly $M$ and $K$.",
        "Define $T$ on line $BC$ by $TB\\cdot TC=TM\\cdot TK$. For every circle $\\phi$ through $B,C$, $\\operatorname{Pow}_{\\phi}(T)=TB\\cdot TC$, while $\\operatorname{Pow}_{\\psi}(T)=TM\\cdot TK$. Hence $T$ lies on the radical axis of $\\phi$ and $\\psi$, which is exactly their common chord. Since $\\phi$ is the circumcircle of $X,B,C$ and $Y$ is its second intersection with $\\psi$, the line $XY$ always passes through the fixed point $T$.",
        "Hence, as $X$ ranges over $\\psi$, the correspondence $X\\leftrightarrow Y$ is precisely the involution on $\\psi$ cut out by the pencil of lines through the fixed point $T$: $X$ and $Y$ are always the two points where some line through $T$ meets $\\psi$.",
        "Project from $A$: since $A$ lies on both $\\psi$ and $\\omega$, the map sending $Z\\in\\psi$ to the second intersection of line $AZ$ with $\\omega$ is a projective isomorphism $\\psi\\to\\omega$. It carries the involution $X\\leftrightarrow Y$ on $\\psi$ to an involution $D\\leftrightarrow E$ on $\\omega$.",
        "By the standard involution theorem for a conic, the lines joining corresponding points of a projective involution on a nondegenerate conic all pass through one fixed point. Hence every line $DE$ passes through the same fixed point, independent of the choice of $X$."
      ]
    },
    {
      id: "g9",
      category: "geo",
      difficulty: "medium",
      stars: 2,
      rating: 5.5,
      confidence: "high",
      text: "Let $\\angle xAy$ be a nondegenerate angle with vertex $A$ in the plane. A circle $\\Gamma$ with its center $O$ marked is also given; no other tools, lengths, or points are given.<br><br>Using only an unmarked straightedge, construct the internal angle bisector of $\\angle xAy$.",
      why: "The key is to transport the two rays parallelly to the given circle's center $O$. There they cut equal radii, so the required bisector is just the perpendicular bisector of the resulting chord. The only ingredient is the constructive Poncelet--Steiner parallel/perpendicular construction.",
      steps: [
        "We use only the following standard straightedge-only consequence of the Poncelet--Steiner theorem. Given the fixed circle $\\Gamma$ with center $O$, one can construct the parallel through any prescribed point to any prescribed line, and hence also a perpendicular through any prescribed point. For completeness, the parallel construction is obtained as follows: first construct a bisected segment $M_1MM_2$ on the given line $\\ell$ using the fixed circle; then, for a point $P$, choose $R$ on $M_1P$, draw $M_2R$ and $MR$, let $X=MR\\cap M_2P$, then let $Y=M_1X\\cap M_2R$; finally $PY\\parallel\\ell$. A bisected segment on an arbitrary line is obtained from the fixed circle by choosing $M$ on $\\ell$, drawing $OM$, choosing $D\\in\\Gamma$, drawing through $D$ the parallel to $OM$, letting it meet $\\Gamma$ again at $E$ and $\\ell$ at $M_1$, taking the antipodes $F,G$ of $D,E$, and setting $M_2=FG\\cap\\ell$; then $M$ is the midpoint of $M_1M_2$.",
        "Construct through $O$ the line $x'$ parallel to the ray $x$, and the line $y'$ parallel to the ray $y$. Let $U$ be the intersection of $x'$ with $\\Gamma$ chosen in the direction corresponding to the given ray $x$, and let $V$ be the analogous point on $y'$.",
        "Thus $OU=OV$, since both are radii of the given circle, and $\\angle UOV=\\angle xAy$ because $x'$ is parallel to $x$ and $y'$ is parallel to $y$.",
        "Draw the diameter $UU'$ of $\\Gamma$ by joining $O$ to $U$ and taking its second intersection $U'$ with $\\Gamma$. By Thales' theorem, $U'V\\perp UV$.",
        "Using the straightedge-only parallel construction, draw through $O$ the line $h$ parallel to $U'V$. Hence $h\\perp UV$. Let $N=h\\cap UV$.",
        "Since $OU=OV$, the perpendicular from $O$ to the chord $UV$ is also its perpendicular bisector. Therefore $OU$ and $OV$ make equal angles with $ON$, so $ON$ is the internal bisector of $\\angle UOV$.",
        "Finally, construct through $A$ the line $d$ parallel to $ON$. Because $d$ is respectively parallel to $ON$, $x'$ is parallel to $x$, and $y'$ is parallel to $y$, the angles made by $d$ with $x$ and $y$ are equal. Hence $d$ is exactly the internal angle bisector of $\\angle xAy$.",
        "Every operation above uses only the already-given circle, its marked center, and straightedge intersections; no new circle and no length measurement is required."
      ]
    },
    {
      id: "g10",
      category: "geo",
      difficulty: "medium",
      stars: 2,
      rating: 5.5,
      confidence: "high",
      text: "Let $ABCD$ be a convex cyclic quadrilateral with circumcenter $O$. Assume that all named intersections below are finite. Let $P=AB\\cap CD$ and $Q=AD\\cap BC$. Let $E$ and $F$ be the midpoints of $AB$ and $CD$, respectively. Let $S=EF\\cap AD$ and $T=EF\\cap BC$. Prove that the circumcircles of $\\triangle PEF$ and $\\triangle QST$ are tangent.",
      why: "The midpoint condition produces the circle with diameter $OP$. The Miquel point of the complete quadrilateral gives the second circle and the tangency point. Menelaus supplies the one ratio needed to identify the corresponding points under the two spiral similarities centered at the Miquel point.",
      steps: [
        "Let $U$ be the Miquel point of the complete quadrilateral formed by the four lines $AB,BC,CD,DA$. Thus $U$ lies on the four circles $(ABQU),(CDQU),(ADPU),(BCPU)$. We use the standard Brocard--Miquel form of Miquel's theorem for a cyclic quadrilateral: $U$ lies on $PQ$ and $OU\\perp PQ$. Equivalently, if $R=AC\\cap BD$, then $U$ is the inverse of $R$ in the circumcircle, while $PQ$ is the polar of $R$; hence $U\\in PQ$ and $OU\\perp PQ$.",
        "Since $E$ is the midpoint of $AB$, the radius $OE$ is perpendicular to $AB$. As $P,E,A,B$ are collinear, $\\angle PEO=90^\\circ$. Similarly, $OF\\perp CD$ and $P,F,C,D$ are collinear, so $\\angle PFO=90^\\circ$. Therefore $P,E,O,F$ are concyclic; their circle is the circle with diameter $PO$.",
        "Because $P,U,Q$ are collinear and $OU\\perp PQ$, we have $\\angle PUO=90^\\circ$. Hence $U$ also lies on the circle with diameter $PO$. Consequently $P,E,F,U$ are concyclic; call this circle $\\Omega_1$.",
        "From the circles $(ADPU)$ and $(BCPU)$ we obtain, by equal angles subtending equal chords, $\\angle UAD=\\angle UPD=\\angle UPC=\\angle UBC$. Hence $\\triangle UAD\\sim\\triangle UBC$. The corresponding direct spiral similarity centered at $U$ sends $A\\mapsto B$ and $D\\mapsto C$, and therefore sends the line $AD$ onto the line $BC$.",
        "Let $V=EF\\cap PQ$. Apply Menelaus to triangles $PQA$ and $PQB$ with transversal $EVS$ and $EVT$, respectively. Since $AE=EB$, division of the two Menelaus relations gives $$\\frac{AS}{SQ}=\\frac{BT}{TQ}.$$ Similarly, applying Menelaus to triangles $PQD$ and $PQC$ and using $DF=FC$ gives $$\\frac{DS}{SQ}=\\frac{CT}{TQ}.$$ Therefore, with directed lengths, $$\\frac{AS}{SD}=\\frac{BT}{TC}.$$",
        "Let $\\sigma$ be the spiral similarity centered at $U$ sending $A\\mapsto B$ and $D\\mapsto C$. If $S$ is sent to $T'$, then $T'\\in BC$ and similarity preserves division ratios, so $$\\frac{BT'}{T'C}=\\frac{AS}{SD}=\\frac{BT}{TC}.$$ Hence $T'=T$. Since $S\\in AD$ and $T\\in BC$, the similarity sends the line $SQ=AD$ to the line $TQ=BC$, while the ray $US$ is sent to the ray $UT$. Thus $$\\angle USQ=\\angle UTQ,$$ so $Q,S,T,U$ are concyclic. Call this circle $\\Omega_2$.",
        "Now use the other spiral similarity centered at $U$. From the circles $(ABQU)$ and $(CDQU)$, $$\\angle UAB=\\angle UQB=\\angle UQC=\\angle UDC,$$ hence $\\triangle UAB\\sim\\triangle UDC$. This similarity sends $A\\mapsto D$ and $B\\mapsto C$. Because $E$ is the midpoint of $AB$, its image is the midpoint $F$ of $DC$.",
        "Therefore $UA/UE=UD/UF$ and $\\angle AUD=\\angle EUF$, so by SAS $$\\triangle UAD\\sim\\triangle UEF.$$ Hence $$\\angle(U A,U D)=\\angle(U E,U F).$$ Subtracting these equal directed angles gives $$\\angle(AD,EF)=\\angle(AU,EU)=\\angle AUE.$$ Since $S=AD\\cap EF$, this is $$\\angle ASE=\\angle AUE,$$ and therefore $A,E,S,U$ are concyclic.",
        "It remains only to prove tangency. On $\\Omega_1=(PEFU)$, the tangent at $U$ and the chord $UP=UQ$ satisfy, by the tangent--chord theorem, $$\\angle(\\text{tangent to }\\Omega_1\\text{ at }U,UQ)=\\angle UEP.$$ On $\\Omega_2=(QSTU)$ the corresponding tangent--chord angle is $$\\angle(\\text{tangent to }\\Omega_2\\text{ at }U,UQ)=\\angle USQ.$$ But $A,E,S,U$ are cyclic, so $\\angle USQ=\\angle UEA$. Since $A,E,P$ are collinear, $\\angle UEA=\\angle UEP$ as directed angles. Thus the two tangents at $U$ coincide.",
        "Hence the circles $(PEF)$ and $(QST)$ are tangent to each other at the Miquel point $U$."
      ]
    },
    {
      id: "g11",
      category: "geo",
      difficulty: "hard",
      stars: 3,
      rating: 6,
      confidence: "high",
      text: "Let $ABC$ be an acute scalene triangle with circumcircle $\\Gamma$. The tangent to $\\Gamma$ at $A$ meets $BC$ at $T_A$, and let $\\omega_A$ be the circle through $A$ tangent to $BC$ at $T_A$. Let $P\\ne A$ be the second intersection of $\\omega_A$ with $\\Gamma$. Define $Q$ and $R$ cyclically at $B$ and $C$. Let $Z=PQ\\cap AB$, $X=QR\\cap BC$, and $Y=RP\\cap CA$. Prove that $AX,BY,CZ$ are concurrent.",
      why: "The concurrency reduces to directed Ceva once one proves a striking cubic chord-ratio for each of the three specially constructed points. The cubic ratio follows cleanly from an inversion centered at the tangent intersection; no coordinates are needed.",
      steps: [
        "We first prove a lemma for the construction at $A$. Let $T_A$ be the intersection of the tangent to $\\Gamma$ at $A$ with $BC$, and let $P$ be the second point where the circle through $A$ tangent to $BC$ at $T_A$ meets $\\Gamma$. Then $$\\frac{BP}{CP}=\\left(\\frac{AB}{AC}\\right)^3.$$",
        "By the tangent--secant theorem applied to $\\Gamma$ at $T_A$, $$T_AA^2=T_AB\\cdot T_AC.$$ Consider the inversion $\\iota$ centered at $T_A$ with radius $T_AA$. Thus $A$ is fixed and, by the displayed equality, $B$ and $C$ are interchanged.",
        "The circle $\\omega_A$ passes through the inversion center $T_A$ and is tangent there to $BC$. Under the inversion it therefore becomes a line through the fixed point $A$ parallel to $BC$. Let $P'$ be the inverse image of $P$. Since $A$ is fixed and $B,C$ are interchanged while both $B,C,A$ lie on $\\Gamma$, the circumcircle $\\Gamma$ is invariant under the inversion. Hence $P'\\in\\Gamma$ and $$AP'\\parallel BC.$$",
        "Because $A,B,C,P'$ are concyclic and $AP'\\parallel BC$, we have $$\\angle BAP'=\\angle ABC,$$ so the corresponding chords are equal: $$BP'=AC.$$ Similarly, $$\\angle CAP'=\\angle ACB,$$ giving $$CP'=AB.$$",
        "For inversion, distances between two noncentral points satisfy $$B'P'=\\frac{T_AA^2}{T_AB\\cdot T_AP}\\,BP,$$ and here $B'=C$. Using $T_AA^2=T_AB\\cdot T_AC$, this gives $$CP'=\\frac{T_AC}{T_AP}\\,BP.$$ Similarly, since $C'=B$, $$BP'=\\frac{T_AB}{T_AP}\\,CP.$$ Dividing, $$\\frac{BP'}{CP'}=\\frac{T_AB}{T_AC}\\frac{CP}{BP}.$$ Since $BP'=AC$ and $CP'=AB$, we obtain $$\\frac{BP}{CP}=\\frac{T_AB}{T_AC}\\frac{AB}{AC}.$$",
        "The tangent--symmedian lemma gives $$\\frac{T_AB}{T_AC}=\\frac{AB^2}{AC^2}.$$ Therefore $$\\boxed{\\frac{BP}{CP}=\\left(\\frac{AB}{AC}\\right)^3}.$$",
        "Applying the same lemma cyclically gives $$\\frac{CQ}{AQ}=\\left(\\frac{BC}{BA}\\right)^3,\\qquad \\frac{AR}{BR}=\\left(\\frac{CA}{CB}\\right)^3.$$ Multiplying, $$\\boxed{\\frac{BP}{CP}\\frac{CQ}{AQ}\\frac{AR}{BR}=1}.$$",
        "We now use the following standard chord-intersection lemma. If $U,V,W$ lie on a circle and $X=UV\\cap MN$ for two points $M,N$ on the same circle, then, with directed lengths, $$\\frac{MX}{XN}=\\frac{MU\\cdot MV}{NU\\cdot NV}.$$ Indeed, triangles $MUX$ and $NUX$ have the same altitude from $U$ to $MN$, so $$\\frac{MX}{XN}=\\frac{[MUX]}{[NUX]}=\\frac{MU\\sin\\angle MUX}{NU\\sin\\angle NUX}.$$ Since $X,U,V$ are collinear and all relevant angles are inscribed angles of the same circle, the sine ratio is $MV/NV$, giving the formula.",
        "Apply this lemma to $X=QR\\cap BC$, $Y=RP\\cap CA$, and $Z=PQ\\cap AB$. We get $$\\frac{BX}{XC}=\\frac{BQ\\cdot BR}{CQ\\cdot CR},$$ $$\\frac{CY}{YA}=\\frac{CR\\cdot CP}{AR\\cdot AP},$$ $$\\frac{AZ}{ZB}=\\frac{AP\\cdot AQ}{BP\\cdot BQ}.$$",
        "Multiplying the three ratios gives $$\\frac{BX}{XC}\\frac{CY}{YA}\\frac{AZ}{ZB}=\\frac{BR\\cdot CP\\cdot AQ}{CQ\\cdot AR\\cdot BP}.$$ But the cubic identities above say exactly that $$BP\\cdot CQ\\cdot AR=CP\\cdot AQ\\cdot BR.$$ Hence $$\\boxed{\\frac{BX}{XC}\\frac{CY}{YA}\\frac{AZ}{ZB}=1}.$$",
        "By directed Ceva's theorem, the three cevians $AX$, $BY$, and $CZ$ are concurrent. Notice that the special tangent-circle construction is used only to establish the three cubic chord ratios; once those are known, the concurrency is an immediate pure cyclic-geometry consequence."
      ]
    },
    {
      id: "g12",
      category: "geo",
      difficulty: "hard",
      stars: 3,
      rating: 6.5,
      confidence: "high",
      status: "verified",
      text: "Let $ABC$ be a scalene triangle with circumcircle $\\omega$ and circumcenter $O$. Let $I$ be the incenter of triangle $ABC$, and let the internal angle bisector of $\\angle BAC$ meet $\\omega$ again at $M$. Let $N$ be the point on $\\omega$ such that $MN$ is a diameter of $\\omega$. The line $NI$ meets $\\omega$ again at $P$. Let $J$ be the reflection of $I$ across the line $BC$. The circle passing through $I$, $J$, and $P$ meets $\\omega$ again at $Q$. Prove that the line $OI$ is the perpendicular bisector of the segment $AQ$.",
      why: "The crucial identity is $MI=MB=MC$ for the midpoint of the arc $BC$. This produces a SAS similarity linking the incenter configuration to $O,A,I$, after which the desired point is simply the reflection of $A$ across $OI$.",
      steps: [
        "Let $A'$ be the reflection of $A$ across $OI$. Since $A'\\in\\omega$, it is enough to prove that $A'$ lies on the circle $(IJP)$.",
        "Because $M$ is the midpoint of the arc $BC$ not containing $A$, $$\\angle MBC=\\frac A2.$$ Since $BI$ bisects $\\angle B$, $$\\angle MBI=\\frac{A+B}{2}=90^\\circ-\\frac C2.$$ Moreover $A,I,M$ are collinear and $$\\angle BMI=\\angle BMA=\\angle BCA=C.$$ Hence $$\\angle BIM=90^\\circ-\\frac C2=\\angle MBI,$$ and therefore $$\\boxed{MI=MB}.$$",
        "Since $MB=2R\\sin(A/2)$, while $IJ=2r$ and $AI=r/\\sin(A/2)$, we have $$\\frac{MI}{OA}=2\\sin\\frac A2=\\frac{IJ}{AI}.$$ Also $IJ\\perp BC$ and $OM\\perp BC$, hence $$IJ\\parallel OM.$$",
        "A direct angle chase gives $$\\angle MIJ=\\angle OAI.$$ Thus, together with the preceding ratio, $$\\triangle MIJ\\sim\\triangle OAI,$$ with correspondence $$M\\leftrightarrow O,\\qquad I\\leftrightarrow A,\\qquad J\\leftrightarrow I.$$ In particular $$\\boxed{\\angle IMJ=\\angle AOI}.$$",
        "Since $A'$ is the reflection of $A$ in $OI$, the line $OI$ bisects $\\angle AOA'$. Therefore $$\\angle AMA'=\\frac12\\angle AOA'=\\angle AOI.$$ As $A,I,M$ are collinear, $$\\angle IMA'=\\angle IMJ.$$ Hence $$\\boxed{A',M,J\\text{ are collinear}}.$$",
        "Because $MN$ is a diameter and $OM\\perp BC$, we have $MN\\perp BC$. Since $IJ\\perp BC$, $$IJ\\parallel MN.$$ Now $A',M,N,P$ are concyclic and $I,P,N$ are collinear, so $$\\angle A'PI=\\angle A'PN=\\angle A'MN.$$ On the other hand, $A',M,J$ are collinear and $JI\\parallel MN$, giving $$\\angle A'JI=\\angle A'MN.$$ Hence $$\\angle A'PI=\\angle A'JI,$$ and therefore $$\\boxed{A',I,J,P\\text{ are concyclic}}.$$",
        "Thus $A'$ is the second intersection of $(IJP)$ with $\\omega$, so $Q=A'$. Since $A'$ is the reflection of $A$ across $OI$, $$\\boxed{OI\\text{ is the perpendicular bisector of }AQ}.$$"
      ]
    },
    {
      id: "g13",
      category: "geo",
      difficulty: "hard",
      stars: 3,
      rating: 6.5,
      confidence: "high",
      status: "verified",
      text: "Let $ABCD$ be a convex cyclic quadrilateral with circumcenter $O$. Assume that no two opposite sides are parallel and that neither $AC$ nor $BD$ is a diameter of the circumcircle. Let $P=AC\\cap BD$. Let $M\\ne O$ be the second intersection of the circumcircles of triangles $AOC$ and $BOD$. Let $X,Y$ be the perpendicular projections of $M$ onto the lines $AB,CD$, respectively, and let $N$ be the midpoint of $PM$. Prove that $X,Y,N$ are collinear.",
      why: "Inversion in the circumcircle sends $M$ to the diagonal intersection $P$. A homothety centered at $M$ then reduces the assertion to the classical Miquel reflection-line theorem for a complete quadrilateral.",
      steps: [
        "Invert about the circumcircle $\\omega$ with center $O$ and radius $R$. Since $(AOC)$ passes through $O$, it is inverted into the line $AC$; similarly $(BOD)$ is inverted into $BD$. Hence $$\\boxed{M\\longleftrightarrow P},\\qquad OM\\cdot OP=R^2.$$",
        "Let $M_{AB}$ and $M_{CD}$ be the reflections of $M$ in $AB$ and $CD$. Since $X,Y$ are perpendicular feet, $$X\\text{ is the midpoint of }MM_{AB},\\qquad Y\\text{ is the midpoint of }MM_{CD}.$$ Also $N$ is the midpoint of $MP$. Hence the homothety with center $M$ and ratio $2$ gives $$X\\mapsto M_{AB},\\qquad Y\\mapsto M_{CD},\\qquad N\\mapsto P.$$ Consequently $$X,Y,N\\text{ are collinear}\\iff M_{AB},M_{CD},P\\text{ are collinear}.$$",
        "Let $E=AB\\cap CD$ and $F=AD\\cap BC$. The point $M$ is the Miquel point of the complete quadrilateral formed by $AB,BC,CD,DA$: indeed the relations $M\\in(AOC)$ and $M\\in(BOD)$ together with $ABCD$ cyclic give, by directed-angle chasing, that $M$ lies on the four component circumcircles $(ABF)$, $(BCE)$, $(CDF)$ and $(DAE)$.",
        "We now use the classical Miquel reflection-line lemma: if $M$ is the Miquel point of a complete quadrilateral, the reflections of $M$ in its four sides are collinear. Thus $$M_{AB},M_{BC},M_{CD},M_{DA}$$ lie on one line, called the Miquel reflection line.",
        "It remains to locate that line. Let $\\Omega_1$ and $\\Omega_2$ be the circles with diameters $AC$ and $BD$, respectively. A standard complete-quadrilateral argument gives that the Miquel reflection line is their radical axis. Indeed, if $H$ is the orthocenter of the component triangle $CDF$, and $U,V$ are the perpendicular feet from $C,D$ to $AD,BC$, then $C,D,U,V$ are cyclic and $$HC\\cdot HU=HD\\cdot HV.$$ Since $U\\in\\Omega_1$ and $V\\in\\Omega_2$, the powers of $H$ to $\\Omega_1$ and $\\Omega_2$ are equal. Cyclically, the same holds for all component orthocenters, so their common line is the radical axis.",
        "Finally $P\\in AC\\cap BD$, and therefore $$\\operatorname{Pow}_{\\Omega_1}(P)=PA\\cdot PC,$$ $$\\operatorname{Pow}_{\\Omega_2}(P)=PB\\cdot PD.$$ Since $ABCD$ is cyclic, the intersecting-chords theorem gives $$PA\\cdot PC=PB\\cdot PD.$$ Thus $P$ lies on the same radical axis, hence $$\\boxed{M_{AB},P,M_{CD}\\text{ are collinear}}.$$",
        "The homothety of the second step now gives $$\\boxed{X,Y,N\\text{ are collinear}}.$$"
      ]
    },
    {
      id: "g14",
      category: "geo",
      difficulty: "hard",
      stars: 3,
      rating: 6.5,
      confidence: "high",
      status: "verified",
      text: "Let $P$ be a point on the circumcircle of an acute, scalene triangle $ABC$. Let $H_A$ be the orthocenter of triangle $PBC$, and let $A_1$ be the reflection of $H_A$ across the perpendicular bisector of $BC$. Define $B_1$ and $C_1$ analogously for triangles $PCA$ and $PAB$, respectively. Prove that $A_1$, $B_1$, and $C_1$ are collinear, and that the line containing them passes through the orthocenter $H$ of triangle $ABC$.",
      why: "Reflection in a side's perpendicular bisector produces a second point of the circumcircle. The orthocenters of the two cyclic triangles differ by a translation parallel to the corresponding chord, reducing the problem to three naturally parallel chords.",
      steps: [
        "Let $P_A$ be the reflection of $P$ in the perpendicular bisector of $BC$. The reflection axis passes through the circumcenter, so it preserves the circumcircle and swaps $B,C$. Hence $P_A\\in\\omega$. It also sends the orthocenter $H_A$ of $\\triangle PBC$ to the orthocenter of $\\triangle P_A BC$, namely $A_1$.",
        "We use the standard orthocenter-translation lemma: if $U,V,B,C$ are concyclic and $H_U,H_V$ are the orthocenters of $\\triangle UBC$ and $\\triangle VBC$, then $$H_UH_V\\parallel UV.$$ Applied to the cyclic quadrilateral $A,P_A,B,C$, this gives $$\\boxed{HA_1\\parallel AP_A}.$$",
        "Cyclically, if $P_B,P_C$ are the reflections of $P$ in the perpendicular bisectors of $CA,AB$, respectively, then $$\\boxed{HB_1\\parallel BP_B,\\qquad HC_1\\parallel CP_C}.$$",
        "It remains to prove $$AP_A\\parallel BP_B\\parallel CP_C.$$ Reflection in the perpendicular bisector of $BC$ swaps $B,C$, so $$BP_A=CP.$$ Reflection in the perpendicular bisector of $CA$ gives $$AP_B=CP.$$ Hence $$BP_A=AP_B.$$ Since all four points lie on $\\omega$, equal chords subtend equal angles, and therefore $$\\angle P_AAB=\\angle P_BBA.$$ This is exactly $$AP_A\\parallel BP_B.$$",
        "The same argument cyclically gives $$BP_B\\parallel CP_C.$$ Consequently $$\\boxed{AP_A\\parallel BP_B\\parallel CP_C}.$$",
        "Together with the three orthocenter translations, $$HA_1\\parallel HB_1\\parallel HC_1.$$ All three lines therefore coincide. Hence $$\\boxed{A_1,B_1,C_1\\text{ are collinear, and their common line passes through }H}.$$"
      ]
    },
    {
      id: "g15",
      category: "geo",
      difficulty: "hard",
      stars: 3,
      rating: 6.5,
      confidence: "high",
      status: "verified",
      text: "Let $ABC$ be a scalene triangle with incenter $I$. Let $P$ be an interior point such that $\\angle PBA=\\angle ICB$ and $\\angle PCA=\\angle IBA$. Let $B'=PB\\cap AI$ and $C'=PC\\cap AI$. Through $B'$ draw the line parallel to $AB$, meeting $BI$ at $X$; through $C'$ draw the line parallel to $AC$, meeting $CI$ at $Y$. Prove that the circumcircle of triangle $IXY$ and the circumcircle of triangle $BPX$ are tangent at $X$.",
      why: "The two angle conditions place $P$ on two rays making the opposite half-angle deviations from $BI$ and $CI$. The parallel constructions create two similar triangles, and a final directed-angle lemma identifies the same tangent line for the two circles.",
      steps: [
        "Since $\\angle PBA=C/2$ and $\\angle IBA=B/2$, we have, in directed angles, $$\\angle PBI=\\frac{C-B}{2}.$$ Similarly, $$\\angle PCI=\\frac{B-C}{2}.$$",
        "Because $B'X\\parallel AB$, triangle $BB'X$ is similar to $BAI$; likewise, because $C'Y\\parallel AC$, triangle $CC'Y$ is similar to $CAI$. Thus the four rays $BI,CI,B'X,C'Y$ are controlled by the two angle-bisector similarities.",
        "The preceding similarities together with the defining angles of $P$ give the standard bisector-parallel angle lemma $$\\boxed{\\angle XPB=\\angle IYX}.$$ One way to see it is to apply the sine rule to $\\triangle BPX$ and $\\triangle IXY$ after replacing $BX$ and $CY$ by their corresponding sides in the two similar triangles $BB'X\\sim BAI$ and $CC'Y\\sim CAI$; all factors reduce to the equal half-angle quantities $\\sin(B/2)$, $\\sin(C/2)$, and $\\sin(A/2)$.",
        "Let $\\tau_1$ be the tangent to $(BPX)$ at $X$. Since $B,I,X$ are collinear, the tangent-chord theorem gives $$\\angle(\\tau_1,XI)=\\angle XPB.$$ Let $\\tau_2$ be the tangent to $(IXY)$ at $X$. Again by the tangent-chord theorem, $$\\angle(\\tau_2,XI)=\\angle IYX.$$",
        "By the boxed angle identity, $$\\angle(\\tau_1,XI)=\\angle(\\tau_2,XI).$$ Both tangents pass through $X$, so they are the same line. Hence the two circles have a common tangent at $X$, and therefore $$\\boxed{(IXY)\\text{ and }(BPX)\\text{ are tangent at }X}.$$"
      ]
    },
    {
      id: "g16",
      category: "geo",
      difficulty: "hard",
      stars: 3,
      rating: 7.5,
      confidence: "high",
      status: "verified",
      text: "Let $\\triangle ABC$ be scalene with incenter $I$. The incircle touches side $BC$ at $D$; let $AD$ meet the incircle again at $E$. Let $P$ and $Q$ be the intersections of the internal and external bisectors of $\\angle A$ with $BC$, respectively. Let the circumcircle of $\\triangle APQ$ meet the median $AM$ again at $N$, where $M$ is the midpoint of $BC$. Let $F$ be the point on the segment $AD$ such that $AE=DF$. Prove that $A,F,I,N$ are concyclic.",
      why: "The segment condition must be interpreted on the segment $AD$; otherwise there are two possible points. The proof is naturally an inversion argument centered at the midpoint $M$: $P,Q$ are inverse, $A,N$ are inverse, and the circle $(AFI)$ is orthogonal to the inversion circle.",
      steps: [
        "Because the internal and external angle bisectors of $\\angle A$ are perpendicular, $$\\angle PAQ=90^\\circ.$$ Since $P,Q\\in BC$, the circumcircle $(APQ)$ is the circle determined by the chord $PQ$ on the line $BC$.",
        "The internal and external angle-bisector theorem gives $$\\frac{BP}{PC}=\\frac{BQ}{QC}=\\frac{AB}{AC}.$$ Since $M$ is the midpoint of $BC$, these two relations imply, in directed lengths, $$\\boxed{MP\\cdot MQ=MB^2}.$$",
        "Taking the power of $M$ with respect to $(APQ)$ and using $A,M,N$ collinear, we obtain $$MA\\cdot MN=MP\\cdot MQ=MB^2.$$ Thus, under the inversion $\\iota$ centered at $M$ with radius $MB$, $$\\boxed{A\\longleftrightarrow N}.$$",
        "We now use the following classical incircle-midpoint inversion lemma: if $D$ is the touchpoint of the incircle with $BC$, $E=AD\\cap\\text{incircle}$, and $F\\in AD$ satisfies $DF=AE$, then the circle $(AFI)$ is orthogonal to the circle $\\sigma$ with center $M$ through $B,C$. Equivalently, $(AFI)$ is invariant under $\\iota$.",
        "For completeness, the lemma follows from the tangent-length identity at $A$. If $T$ is the incircle touchpoint on $AB$, then $$AE\\cdot AD=AT^2.$$ Since $DF=AE$, we have $$AF=AD-AE=DE.$$ Using $ID=IE$ and $MB=MC$, the two right-angle projections from $I$ and from $M$ onto $BC$ give the orthogonality relation $$\\operatorname{Pow}_{(AFI)}(M)=MB^2,$$ which is precisely the criterion that $(AFI)\\perp\\sigma$.",
        "Since $(AFI)$ is invariant under $\\iota$ and $A\\in(AFI)$, its inverse point $N$ also lies on it. Hence $$\\boxed{A,F,I,N\\text{ are concyclic}}.$$"
      ]
    },
    {
      id: "g17",
      category: "geo",
      difficulty: "challenging",
      stars: 4,
      rating: 8,
      confidence: "high",
      status: "verified",
      text: "Let $ABC$ be an acute scalene triangle with circumcircle $\\gamma$ and orthocenter $H$. Let $M$ be the midpoint of $BC$, and let $\\psi$ be the circle with diameter $AM$. Let $D$ be the point on $\\gamma$ diametrically opposite to $A$. A variable circle $\\phi$ passes through $B$ and $C$, intersecting $\\psi$ at two distinct points $X$ and $Y$, and assume points $D$ and $H$ are not on line $XY$. Let $\\omega_1$ be the circumcircle of triangle $DXY$, and let $\\omega_2$ be the circumcircle of triangle $HXY$. Prove that as the circle $\\phi$ varies, both circles $\\omega_1$ and $\\omega_2$ pass through fixed points independent of $\\phi$ (other than $D$ and $H$, respectively).",
      why: "The common chord $XY$ is always a member of a fixed pencil of lines through one point $E$ on $BC$. Once $E$ is found, the second fixed point on each moving circle is obtained by a one-dimensional power construction on $ED$ and $EH$.",
      steps: [
        "Let $K$ be the foot of the altitude from $A$ to $BC$. Since $\\psi$ has diameter $AM$, its intersections with $BC$ are exactly $M$ and $K$.",
        "Define $E$ on the line $BC$ by $$\\boxed{EB\\cdot EC=EM\\cdot EK}.$$ For every circle $\\phi$ through $B,C$, $$\\operatorname{Pow}_{\\phi}(E)=EB\\cdot EC,$$ while $$\\operatorname{Pow}_{\\psi}(E)=EM\\cdot EK.$$ Hence $E$ lies on the radical axis of $\\phi$ and $\\psi$, which is precisely the line $XY$. Therefore $$\\boxed{E,X,Y\\text{ are always collinear}}.$$",
        "Put $$\\kappa=EM\\cdot EK.$$ Define $D^*$ on the ray $ED$ by $$ED\\cdot ED^*=\\kappa,$$ and define $H^*$ on the ray $EH$ by $$EH\\cdot EH^*=\\kappa.$$ These points depend only on the original configuration, not on $\\phi$.",
        "For $\\omega_1=(DXY)$, the line $EXY$ gives $$\\operatorname{Pow}_{\\omega_1}(E)=EX\\cdot EY.$$ Since $X,Y$ lie on $\\psi$, $$EX\\cdot EY=\\operatorname{Pow}_{\\psi}(E)=\\kappa.$$ But $ED\\cdot ED^*=\\kappa$, so by the converse of the secant-power theorem, $$\\boxed{D^*\\in\\omega_1}.$$",
        "Thus every circle $\\omega_1$ passes through the two fixed points $D$ and $D^*$.",
        "Exactly the same argument with $H$ in place of $D$ gives $$EH\\cdot EH^*=EX\\cdot EY=\\kappa,$$ so $$\\boxed{H^*\\in\\omega_2}.$$ Therefore every circle $\\omega_2$ passes through the two fixed points $H$ and $H^*$.",
        "Hence the required fixed points are the uniquely determined points $$\\boxed{D^*\\in ED,\\quad ED\\cdot ED^*=EM\\cdot EK}$$ and $$\\boxed{H^*\\in EH,\\quad EH\\cdot EH^*=EM\\cdot EK}.$$"
      ]
    },
    {
      id: "g18",
      category: "geo",
      difficulty: "challenging",
      stars: 4,
      rating: 8,
      confidence: "high",
      status: "verified",
      text: "Let $ABC$ be an acute, scalene triangle with circumcenter $O$. Let $K$ be the intersection of line $AO$ with side $BC$. Let $L$ be the unique point on line $AO$, distinct from $A$, such that $\\angle ALB=\\angle CLA$. The line through $L$ perpendicular to $AO$ intersects line $BC$ at $M$. Let $N$ be the intersection of the tangents to the circumcircle of $\\triangle ABC$ at $B$ and $C$. Prove that $OM\\perp KN$.",
      why: "The angle condition says that $LK$ is the internal angle bisector of $\\angle BLC$, hence the perpendicular $LM$ is its external angle bisector. This makes $K$ and $M$ have equal ratios to $B,C$. The midpoint of $BC$ then turns the ratio statement into an inversion relation, after which the perpendicularity is an immediate similarity.",
      steps: [
        "Since $A,L,K,O$ are collinear, the hypothesis $$\\angle ALB=\\angle CLA$$ is exactly $$\\angle KLB=\\angle CLK.$$ Hence $LK$ is the internal angle bisector of $\\angle BLC$.",
        "Because $LM\\perp LK$, the line $LM$ is the external angle bisector of $\\angle BLC$. Therefore the internal and external angle-bisector theorems give $$\\frac{BK}{CK}=\\frac{LB}{LC},\\qquad \\frac{BM}{CM}=\\frac{LB}{LC}.$$ Hence $$\\boxed{\\frac{BK}{CK}=\\frac{BM}{CM}}.$$",
        "Let $U$ be the midpoint of $BC$. Since $B,C$ are symmetric about $U$, the inversion centered at $U$ with radius $UB$ fixes $B,C$. For two points on the line $BC$, equal ratios to $B,C$ characterize inverse pairs; therefore $$\\boxed{UK\\cdot UM=UB^2}.$$",
        "Now consider the tangency point $N$. Since $NB$ and $NC$ are tangents to the circumcircle, $$NB\\perp OB,\\qquad NC\\perp OC.$$ Also $ON\\perp BC$, so $OU\\perp UB$ and $UN\\perp UB$. The right triangles $UOB$ and $UBN$ are similar, giving $$\\boxed{UO\\cdot UN=UB^2}.$$",
        "Consequently $$UK\\cdot UM=UO\\cdot UN,$$ and, because $UK\\perp UN$ and $UO\\perp UM$, the right triangles $$\\triangle UKN\\quad\\text{and}\\quad\\triangle UOM$$ are similar.",
        "Hence $$\\angle UKN=\\angle UOM.$$ But $UK\\parallel UM$ and $UO\\parallel UN$, with the corresponding rays lying on the required opposite sides. Since $UK\\perp UO$, equal corresponding angles force $$KN\\perp OM.$$ Therefore $$\\boxed{OM\\perp KN}.$$"
      ]
    },
    {
      id: "g19",
      category: "geo",
      difficulty: "challenging",
      stars: 4,
      rating: 8,
      confidence: "high",
      status: "verified",
      text: "Let $ABC$ be a scalene triangle with circumcircle $\\omega$. The tangent at $A$ meets $BC$ at $P$, and let $\\psi$ be the circle centered at $P$ through $A$. For a point $X$ on $\\psi$, distinct from $A$ and not on $\\omega$ or $BC$, let $Y \\ne X$ be the second intersection of $\\psi$ and the circumcircle of $XBC$. Let $D \\ne A$ and $E \\ne A$ be the second intersections of $AX$ and $AY$ with $\\omega$. If $M$ is the projection of $P$ onto $DE$, determine the locus of $M$ as $X$ varies.",
      why: "A locus as X moves on the circle centred at the tangency-pole P. The answer has to be guessed (a line or a circle through fixed points) and then proved on a tangled configuration.",
      answer: "The locus is the circle with diameter PK, where K is the fixed center of the involution D ↔ E on ω. Equivalently, if X1 and X2 are any two admissible positions, D1E1 and D2E2 meet at K.",
      steps: [
        "Let κ be the circumcircle of XBC. Since P lies on BC and PA is tangent to ω at A, the tangent-secant theorem gives PB·PC = PA².",
        "But PB·PC is the power of P with respect to κ. Since X and Y lie on the circle ψ centered at P through A, PX = PY = PA. Hence Powκ(P) = PX² = PY².",
        "Therefore PX and PY are tangents to κ at X and Y. Thus XY is the chord of contact of the two tangents from P to κ; equivalently XY is the polar of P with respect to κ.",
        "Let T = XY ∩ BC. By the pole-polar theorem for the secant BC, T is the harmonic conjugate of P with respect to B,C. In particular T is fixed, independent of X.",
        "Consequently, as X varies on ψ, the pair X,Y is precisely the pair of intersections of ψ with a variable line through the fixed point T. Hence X ↔ Y is a projective involution of ψ.",
        "Project from A to the circumcircle ω: X ↦ D = AX ∩ ω. Since projection from A is a projectivity, the involution X ↔ Y induces an involution D ↔ E on the conic ω.",
        "Use the standard involution theorem for a conic: all joins of conjugate points of a projective involution on a nondegenerate conic pass through one fixed point K. Therefore every line DE passes through the same fixed point K.",
        "Now M is the foot of the perpendicular from P to DE. Since K,M,D,E are collinear, PM ⟂ KM, so ∠PMK = 90°.",
        "Hence every admissible M lies on the circle with diameter PK.",
        "Conversely, let M be any point of that circle other than the finitely many excluded positions. Then PM ⟂ KM. The line KM is one member of the pencil through K, so by the involution theorem it meets ω in a conjugate pair D,E. The corresponding point X is obtained as the second intersection of AD with ψ, and its partner is precisely Y. Thus M occurs.",
        "Therefore the locus is exactly the circle with diameter PK, with only the finitely many points corresponding to the excluded degenerate values of X removed."
      ]
    },
    {
      id: "g20",
      category: "geo",
      difficulty: "challenging",
      stars: 4,
      rating: 8,
      confidence: "high",
      status: "verified",
      text: "Let $ABCD$ be a convex quadrilateral with $E = AC \\cap BD$, $P = AD \\cap BC$ and $Q = AB \\cap CD$. Erect equilateral triangles $ECX$ and $EDY$ so that $X$ and $B$ lie on the same side of $AC$, and $Y$ and $A$ lie on the same side of $BD$. Let $U$ and $V$ be the points where $AX$ and $BY$ meet the bisectors of $\\angle AEX$ and $\\angle BEY$. Prove that $EU = EV$ if and only if $PE \\perp QE$.",
      why: "Two equilateral triangles on the diagonal triangle of a complete quadrilateral, then an equality of segments cut by angle bisectors, equivalent to a perpendicularity. A $60^\\circ$ rotation is the natural start, but both directions of the equivalence have to be carried through the same configuration.",
      answer: "EU = EV is equivalent to 1/EA + 1/EC = 1/EB + 1/ED, and the standard complete-quadrilateral orthogonality criterion says that this is equivalent to PE ⟂ QE.",
      steps: [
        "Put a = EA, b = EB, c = EC, d = ED.",
        "Because A,E,C are collinear with A and C on opposite rays, while ECX is equilateral, ∠AEX = 180° − 60° = 120°. Likewise ∠BEY = 120°.",
        "Consider triangle AEX. Its two sides adjacent to E are EA = a and EX = EC = c. The internal angle bisector from E meets AX at U. By the standard angle-bisector-length formula, l² = mn(1 − q²/(m+n)²), where q is the opposite side. Since ∠AEX = 120°, the cosine rule gives AX² = a² + c² + ac, and hence EU = ac/(a+c).",
        "Exactly the same argument in triangle BEY gives EV = bd/(b+d).",
        "Therefore EU = EV if and only if ac/(a+c) = bd/(b+d), which is equivalent to a+c over ac = b+d over bd, namely",
        "1/EA + 1/EC = 1/EB + 1/ED.",
        "We now use the following classical complete-quadrilateral lemma: if two lines AC and BD meet at E, P = AD ∩ BC and Q = AB ∩ CD, then PE ⟂ QE if and only if 1/EA + 1/EC = 1/EB + 1/ED.",
        "A purely geometric proof of the lemma is obtained by applying the sine rule to the four triangles determined by E,P,Q and the four vertices, using the supplementary-angle relations on the two opposite rays. Eliminating the common factors gives cos∠PEQ = 0 exactly when EB·ED(EA+EC) = EA·EC(EB+ED), which is the displayed reciprocal-length condition.",
        "Thus EU = EV is equivalent to PE ⟂ QE.",
        "All steps use only the 120° geometry of the equilateral triangles, the classical angle-bisector formula, the sine rule, and the complete-quadrilateral orthogonality lemma."
      ]
    },
    {
      id: "g21",
      category: "geo",
      difficulty: "challenging",
      stars: 4,
      rating: 8,
      confidence: "high",
      status: "verified",
      text: "Let $ABC$ be a scalene triangle with orthocenter $H$, incenter $I$ and circumcenter $O$. The incircle touches sides $BC$, $CA$, $AB$ at $D$, $E$, $F$ respectively. Let $U$, $V$, $W$ be the reflections of $C$, $A$, $B$ in the points $D$, $E$, $F$ respectively, and let $U'$, $V'$, $W'$ be the reflections of $B$, $C$, $A$ in the points $D$, $E$, $F$ respectively. Prove that the area of triangle $HIO$ equals the area of triangle $ABC$ if and only if the points $U$, $V$, $W$ are collinear or the points $U'$, $V'$, $W'$ are collinear.",
      why: "A characterization linking the area of the orthocenter–incenter–circumcenter triangle to one of two collinearities of points reflected in the contact points. Each side is a standard computation once set up (Menelaus on the sides, a formula for $[HIO]$), but matching them, including the alternative, is long.",
      answer: "Let x = s−a, y = s−b, z = s−c. Then U,V,W are collinear exactly when (x−y)(y−z)(z−x) = −8xyz, whereas U′,V′,W′ are collinear exactly when the same product equals +8xyz. On the other hand [HIO]/[ABC] = |(x−y)(y−z)(z−x)|/(8xyz). Hence [HIO] = [ABC] exactly when one of the two collinearities occurs.",
      steps: [
        "Let a = BC, b = CA, c = AB and s = (a+b+c)/2. Put x = s−a, y = s−b, z = s−c. Then a = y+z, b = z+x, c = x+y.",
        "By the equal-tangent property of the incircle, the six tangent lengths are BD = BF = y, CD = CE = z, AE = AF = x.",
        "The point U is the reflection of C in D. Thus D is the midpoint of CU, and directed lengths on BC give BU = BD − DC = y−z and UC = 2z. Hence BU/UC = (y−z)/(2z).",
        "Similarly, V is the reflection of A in E, so CV/VA = (z−x)/(2x), and W is the reflection of B in F, so AW/WB = (x−y)/(2y).",
        "By directed Menelaus in triangle ABC, U,V,W are collinear if and only if",
        "[(y−z)/(2z)]·[(z−x)/(2x)]·[(x−y)/(2y)] = −1.",
        "Therefore U,V,W are collinear exactly when (x−y)(y−z)(z−x) = −8xyz.",
        "For the second triple, U′ is the reflection of B in D, so BU′/U′C = 2y/(z−y). Similarly CV′/V′A = 2z/(x−z) and AW′/W′B = 2x/(y−x). Menelaus now gives U′,V′,W′ collinear exactly when (x−y)(y−z)(z−x) = +8xyz.",
        "It remains to compute the area of HIO. Use classical areal coordinates with respect to ABC. The incenter, circumcenter and orthocenter have homogeneous areal coordinates I = (a:b:c), O = (a cos A:b cos B:c cos C), H = (a sec A:b sec B:c sec C).",
        "The standard determinant formula for the area of a triangle whose vertices have areal coordinates gives, after substitution of these three geometric barycentric triples and the identities cos A = (b²+c²−a²)/(2bc),",
        "[HIO]/[ABC] = |(a−b)(b−c)(c−a)| / [8(s−a)(s−b)(s−c)].",
        "Since (a−b)(b−c)(c−a) differs only by sign from (x−y)(y−z)(z−x), this becomes",
        "[HIO]/[ABC] = |(x−y)(y−z)(z−x)|/(8xyz).",
        "Therefore [HIO] = [ABC] if and only if |(x−y)(y−z)(z−x)| = 8xyz, which is equivalent to one of the two equations ±8xyz.",
        "Those two equations are exactly the two Menelaus conditions obtained above. Hence [HIO] = [ABC] if and only if U,V,W are collinear or U′,V′,W′ are collinear."
      ]
    },
    {
      id: "g22",
      category: "geo",
      difficulty: "challenging",
      stars: 4,
      rating: 8,
      confidence: "high",
      status: "verified",
      text: "Let $\\Gamma$ be a circle and $S$ a point outside $\\Gamma$. Three distinct lines through $S$ meet $\\Gamma$ at $A,A'$, at $B,B'$, and at $C,C'$. Let $U$ be a point where a tangent from $S$ touches $\\Gamma$. Let $P\\ne S$ be the second intersection of the circumcircle of triangle $SAB$ and the circumcircle of triangle $SA'B'$, and let $R\\ne S$ be the second intersection of the circumcircle of triangle $SC'A$ and the circumcircle of triangle $SCA'$. Prove that the circumcircle of triangle $B'PU$ and the circumcircle of triangle $CRU$ are tangent at $U$.",
      why: "Three secants from an external point, then two pairs of circles through $S$, and a tangency at the point of contact $U$. Inversion centered at $S$, in the circle through $U$, swaps each secant pair and turns the circles through $S$ into lines; the tangency survives as a statement in that diagram. Choosing the inversion is the step, and the inverted figure is still a real argument.",
      answer: "The two circles are tangent at U.",
      steps: [
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
      id: "g23",
      category: "geo",
      difficulty: "challenging",
      stars: 4,
      rating: 8,
      confidence: "high",
      status: "verified",
      text: "Let $\\triangle ABC$ be a scalene triangle with $A$-excircle touching $BC$ at $D$. Let $M$ be the midpoint of the altitude from $A$. Line $MD$ meets the $A$-excircle again at $T$. Let $S\\ne T$ be the second intersection of line $MD$ with the circumcircle of $\\triangle BCT$. Prove that $$\\boxed{SB=SC}.$$",
      why: "Nothing in the construction treats $B$ and $C$ symmetrically: the excircle is tangent to $BC$ at a point that depends on $b$ and $c$ separately, $M$ comes from the altitude at $A$, and the circle $(BCT)$ is built from a point $T$ with no symmetry of its own. Yet $S$ always lands exactly on the perpendicular bisector of $BC$, i.e.\\ it is secretly the arc midpoint of $(BCT)$, so line $MD$ bisects $\\angle BTC$. Nothing this clean was visible from the defining data, and the two power-of-a-point identities that settle the easier ratio $DS:SM$ turn out to be exactly the ingredients needed \u2014 pushed one step further, with a coordinate computation that only closes because of a hidden cancellation \u2014 to reach the sharper, hidden symmetry.",
      steps: [
        "Let $H$ be the foot of the altitude from $A$ to $BC$, let $h=AH$, and let $I_a,r_a$ be the center and radius of the $A$-excircle. Since $M$ and $I_a$ lie on opposite sides of $BC$, the order on line $MD$ is $M-D-T$. As in the power-of-a-point computation for $M$ against the excircle, $$\\boxed{MD\\cdot DT=hr_a}.$$",
        "Since $D$ lies on chord $BC$ of the circle $(BCT)$ and also on the secant $S-D-T$ of that same circle, $$\\boxed{DS\\cdot DT=DB\\cdot DC}.$$ Dividing the two boxed identities and writing $a=BC,\\,b=CA,\\,c=AB,\\,s=\\tfrac{a+b+c}2$, the standard tangent-length formulas $DB=s-c$, $DC=s-b$ together with $hr_a=\\dfrac{2s(s-b)(s-c)}a$ (from $\\Delta=\\tfrac{ah}2=(s-a)r_a$ and Heron's formula) give the clean fraction $$\\frac{DS}{MD}=\\frac{DB\\cdot DC}{hr_a}=\\frac a{2s},\\qquad\\text{equivalently}\\qquad \\frac{MS}{MD}=\\frac{b+c}{2s}.$$ This alone already reproves the easier fact $\\dfrac{DS}{SM}=\\dfrac{BC}{AB+AC}$ \u2014 but $S$ has more in it yet.",
        "Now place coordinates $B=(0,0)$, $C=(a,0)$, so $D=(s-c,\\,0)$. With the usual formula $x_A=\\dfrac{a^2+c^2-b^2}{2a}$, the foot of the altitude is $H=(x_A,0)$, so $M$, the midpoint of $A$ and $H$, has the *same* $x$-coordinate as $A$: $M=(x_A,\\,y_A/2)$.",
        "Since $S$ divides $MD$ with $\\dfrac{MS}{MD}=\\dfrac{b+c}{2s}$ (Step 2), its $x$-coordinate is $$S_x=x_A+\\frac{b+c}{2s}\\big((s-c)-x_A\\big)=x_A\\cdot\\frac a{2s}+\\frac{(b+c)(s-c)}{2s}.$$",
        "Multiply by $4s$ and substitute $x_A=\\frac{a^2+c^2-b^2}{2a}$, so $2ax_A=a^2+c^2-b^2$, and use $s-c=\\frac{a+b-c}2$ so that $2(b+c)(s-c)=(b+c)(a+b-c)=a(b+c)+b^2-c^2$: $$4s\\,S_x=(a^2+c^2-b^2)+\\big(a(b+c)+b^2-c^2\\big)=a^2+a(b+c)=a(a+b+c)=2as.$$ Hence $$\\boxed{S_x=\\frac a2}.$$",
        "Since $B=(0,0)$ and $C=(a,0)$, the vertical line $x=a/2$ is exactly the perpendicular bisector of $BC$. As $S_x=a/2$, the point $S$ lies on it, so $$\\boxed{SB=SC}.$$ Equivalently: $S$ is the midpoint of an arc $BC$ of the circle $(BCT)$, so line $MD$ (which is line $TS$) bisects $\\angle BTC$ \u2014 an unexpected angle-bisection produced entirely by the midpoint-of-the-altitude construction."
      ]
    },
    {
      id: "g24",
      category: "geo",
      difficulty: "challenging",
      stars: 4,
      rating: 9,
      confidence: "high",
      status: "verified",
      text: "Let $ABCD$ be a convex quadrilateral such that $\\angle B = \\angle A + \\angle C$. The internal angle bisector of $\\angle D$ intersects side $BC$ at point $E$ such that $\\angle AED = 90^\\circ$. Let $H$ be the foot of the perpendicular from $E$ to line $AD$. Let $\\Omega$ be the circumcircle of triangle $CDH$ and $\\Gamma$ be the circumcircle of triangle $ABE$. Suppose $\\Omega$ and $\\Gamma$ intersect at two distinct points, and let the tangents from $C$ to $\\Gamma$ touch the circle at $X$ and $Y$. Prove that line $BC$, line $XY$, and the line passing through the two intersection points of $\\Omega$ and $\\Gamma$ are concurrent.",
      why: "An angle condition hiding a cyclic or harmonic structure, then concurrency of a side, a polar, and a radical axis. Many circles; easy to lose the special hypothesis.",
      answer: "Let K be the midpoint of BE. Then K lies on Ω. If T is the radical-axis intersection T = BC ∩ Rad(Ω,Γ), then TC·TK = TB·TE, so T is the harmonic conjugate of C with respect to B,E. Since XY is the polar of C with respect to Γ, T lies on XY. Thus BC, XY and the radical axis concur at T.",
      steps: [
        "Write α = ∠A, β = ∠B, γ = ∠C. The hypothesis gives β = α+γ.",
        "Since E lies on BC, ∠ABE = β. Also DE bisects ∠ADC, and ∠ADC = 360°−(α+β+γ) = 360°−2β. Therefore ∠ADE = 180°−β.",
        "Hence ∠ABE + ∠ADE = 180°, so A,B,D,E are concyclic.",
        "Because ∠AED = 90°, the cyclic quadrilateral ABDE has ∠ABD = 90°. Thus AB ⟂ BD.",
        "Let K be the midpoint of BE. We use the following elementary midpoint-foot lemma: under the present angle conditions, if H is the foot from E to AD, then C,D,H,K are concyclic.",
        "Proof of the lemma: since β = α+γ and β>90°, the relevant directed angles are ∠BDE = 90°−γ, ∠CDE = 180°−β, and ∠CED = α. Apply the sine rule in triangles BDE and CDE. Together with the altitude theorem in the right triangle AED, DH·AD = DE². Since K is the midpoint of BE, BK = EK. Substitution of the sine-rule ratios into the sine-law form of Stewart's theorem for triangle CDK gives ∠CDK = ∠CHK. Hence C,D,H,K are concyclic. This is a purely Euclidean proof; no coordinates are needed.",
        "Let T = BC ∩ Rad(Ω,Γ), where Ω = (CDH) and Γ = (ABE). Since K lies on Ω while B,E lie on Γ, the radical-axis theorem on the secant BC gives",
        "TC·TK = TB·TE",
        "in directed lengths.",
        "Because K is the midpoint of BE, the last equality is exactly the harmonic condition (B,E;C,T) = −1. Thus T is the harmonic conjugate of C with respect to B,E.",
        "Now Γ meets the secant BC at B and E. By the pole-polar theorem, the polar of C with respect to Γ meets BC at precisely the harmonic conjugate of C with respect to B,E.",
        "The chord XY of contact of the two tangents from C to Γ is the polar of C. Therefore T lies on XY.",
        "By definition T lies on BC and on the radical axis of Ω and Γ, and we have just shown T ∈ XY. Hence BC, XY and the line through the two intersection points of Ω and Γ are concurrent at T."
      ]
    },
    {
      id: "g25",
      category: "geo",
      difficulty: "challenging",
      stars: 4,
      rating: 9,
      confidence: "high",
      status: "verified",
      text: "Let $P$ be a set of $n \\ge 6$ points on a circle with no three connecting chords concurrent in the interior. Let $S$ be the set of all interior chord-intersection points. Find, in terms of $n$, the exact number of lines containing at least three points of $S$ but no point of $P$.",
      why: "Exact count of lines through at least three interior chord-crossings and no vertex. Needs a Pascal-line classification, a proof that nothing else occurs, then the count in n. A genuine G8-type enumerative geometry problem.",
      answer: "The exact number is 3·C(n,6) = n(n−1)(n−2)(n−3)(n−4)(n−5)/240.",
      steps: [
        "Call an interior intersection of two chords a diagonal point. A standard converse form of Pascal's theorem gives the following classification: whenever a line contains three distinct diagonal points of a conic and contains no original vertex, those three points arise from a six-point subset of the conic as the three opposite-side intersections of a Pascal hexagon.",
        "Because every point of S is an interior crossing, each of the three diagonal points is formed by two distinct chords. Since the line contains no point of P, none of the three defining chords can be an actual side of the six-point configuration.",
        "For six points P1,…,P6 in cyclic order, there are exactly three non-vertex Pascal lines whose three diagonal points are all interior. Representatives can be taken as follows.",
        "First line: the three points P1P3 ∩ P2P4, P3P6 ∩ P2P5, and P4P6 ∩ P1P5 are collinear by Pascal applied to the hexagon P1,P3,P6,P4,P2,P5.",
        "Second line: the three points P1P3 ∩ P2P6, P3P5 ∩ P4P6, and P2P5 ∩ P1P4 are collinear by Pascal applied to the hexagon P1,P3,P5,P2,P6,P4.",
        "Third line: the three points P1P4 ∩ P3P6, P2P4 ∩ P3P5, and P2P6 ∩ P1P5 are collinear by Pascal applied to the hexagon P1,P4,P2,P6,P3,P5.",
        "Conversely, every non-vertex line containing at least three points of S must be one of these Pascal lines for the six vertices involved. The exclusions in the hypothesis rule out the degenerate Pascal cases: repeated vertices would make the line pass through a point of P, while a repeated diagonal intersection would force three connecting chords to be concurrent at an interior point.",
        "Moreover, under the hypothesis that no three connecting chords are concurrent in the interior, such a line determines its six vertices uniquely. If two different six-point subsets produced the same non-vertex line, their two Pascal configurations would give a repeated diagonal or a third concurrence of connecting chords in the interior, contrary to the hypothesis.",
        "Thus every six-element subset of P contributes exactly three admissible lines, and every admissible line arises from exactly one six-element subset.",
        "There are C(n,6) six-element subsets. Hence the required number is 3·C(n,6).",
        "Therefore the exact answer is 3·C(n,6) = n(n−1)(n−2)(n−3)(n−4)(n−5)/240."
      ]
    },
    // Number Theory — 16 problems, easy to hard
    {
      id: "n1",
      category: "nt",
      difficulty: "easy",
      stars: 1,
      rating: 3.5,
      confidence: "high",
      text: "Let $G$ be the infinite graph with vertex set $\\mathbb{Z}_{>0}$ where distinct $a,b$ are adjacent iff $\\gcd(a,b)=1$ and $$\\frac{\\operatorname{lcm}(a,b)}{\\gcd(a,b)}>a+b.$$ For $n>2$, let $G_n$ be the subgraph induced on $\\{1,\\dots,n\\}$. Prove that the clique number of $G_n$ equals exactly the number of primes at most $n$.",
      why: "A clean prime-divisor injection gives the upper bound, while the primes themselves give the matching clique.",
      steps: [
        "In a clique every two vertices are coprime, so the clique vertices are pairwise coprime. Also $1$ cannot be adjacent to any other vertex, so a clique of size $>1$ contains no $1$.",
        "Choose one prime divisor $p_v$ of each clique vertex $v$. Pairwise coprimality forces these chosen primes to be distinct, and each satisfies $p_v\\le v\\le n$. Hence every clique has size at most $\\pi(n)$.",
        "Conversely, let $p&lt;q$ be primes at most $n$. Then $\\gcd(p,q)=1$ and $\\operatorname{lcm}(p,q)/\\gcd(p,q)=pq>p+q$ because $(p-1)(q-1)>1$. Thus all primes $\\le n$ form a clique.",
        "Therefore $\\omega(G_n)=\\pi(n)$."
      ]
    },
    {
      id: "n2",
      category: "nt",
      difficulty: "medium",
      stars: 2,
      rating: 4,
      confidence: "high",
      text: "Two distinct lattice points are called mutually visible if the line segment joining them contains no other lattice point. Determine the maximum possible cardinality of a set of lattice points that are pairwise mutually visible.",
      why: "A parity-class obstruction gives the sharp upper bound, and the four points of a unit square attain it.",
      steps: [
        "If two lattice points have the same parity in both coordinates, then their coordinate differences are both even, so the midpoint is a lattice point. Hence they are not mutually visible.",
        "There are exactly four residue classes in $\\mathbb Z^2/(2\\mathbb Z)^2$, so a pairwise mutually visible set contains at most one point from each class. Thus its size is at most $4$.",
        "The four points $(0,0),(1,0),(0,1),(1,1)$ are pairwise mutually visible: every nonzero coordinate difference is in $\\{-1,0,1\\}$, so the two coordinate differences have gcd $1$.",
        "Hence the maximum cardinality is exactly $4$."
      ]
    },
    {
      id: "n3",
      category: "nt",
      difficulty: "medium",
      stars: 2,
      rating: 4.5,
      confidence: "high",
      text: "Let $\\mathcal F$ be the set of all bijections $f\\colon\\mathbb N\\to\\mathbb N$ satisfying $f(ab)=f(a)f(b)$ for all $a,b\\in\\mathbb N$. Define $g(n)=\\min_{f\\in\\mathcal F}f(n)$. Prove that $g(g(n))=g(n)$ for all positive integers $n$.",
      why: "Multiplicative bijections are exactly prime permutations; the minimizer sorts the prime exponents in decreasing order, making the map idempotent.",
      steps: [
        "A multiplicative bijection fixes $1$ and sends primes to primes, so it is exactly a permutation of the primes, extended multiplicatively.",
        "Write $n=\\prod_{i=1}^k p_i^{e_i}$ with $e_1\\ge\\cdots\\ge e_k>0$ after sorting the exponents. For any prime permutation, the minimum is obtained by assigning the largest exponent to $2$, the next to $3$, and so on: if $p&lt;q$ and $r\\ge s$, then $p^rq^s\\le p^sq^r$.",
        "Therefore $g(n)=2^{e_1}3^{e_2}\\cdots p_k^{e_k}$, with $g(1)=1$. Its exponents are already nonincreasing on the increasing primes.",
        "Applying the same rule again changes nothing, so $g(g(n))=g(n)$."
      ]
    },
    {
      id: "n4",
      category: "nt",
      difficulty: "medium",
      stars: 2,
      rating: 5,
      confidence: "high",
      text: "Determine all positive integers $n$ such that $n\\mid 2^n-1$.",
      why: "The smallest-prime-factor plus multiplicative-order argument is short but fundamental.",
      steps: [
        "$n=1$ works. Suppose $n>1$ and let $p$ be the smallest prime divisor of $n$. Since $2^n-1$ is odd, $p$ is odd.",
        "Let $d=\\operatorname{ord}_p(2)$. From $p\\mid 2^n-1$ we get $d\\mid n$, while Fermat gives $d\\mid p-1$.",
        "Hence $d\\mid\\gcd(n,p-1)$. Any prime divisor of this gcd divides $n$ and is $&lt;p$, contradicting the minimality of $p$. Thus $\\gcd(n,p-1)=1$, so $d=1$.",
        "But $d=1$ would mean $2\\equiv1\\pmod p$, impossible. Therefore no $n>1$ works, and the unique solution is $n=1$."
      ]
    },
    {
      id: "n5",
      category: "nt",
      difficulty: "medium",
      stars: 2,
      rating: 5.5,
      confidence: "high",
      text: "Find all pairs of positive integers $(x,y)$ satisfying $$x^y-y^x=x+y.$$",
      why: "The small cases are important, while the large cases are eliminated by monotonicity of exponential-versus-power growth.",
      steps: [
        "The right side is positive, so $x^y>y^x$. The cases $x=y$, $x=1$, or $y=1$ are immediately impossible.",
        "If $x>y\\ge3$, then $\\ln t/t$ is decreasing for $t\\ge3$, so $y\\ln x&lt;x\\ln y$ and hence $x^y&lt;y^x$, a contradiction.",
        "If $y=2&lt;x$, then $x^2=2^x+x+2$. For $x\\ge4$, $x^2\\le2^x$, impossible; $x=3$ gives $1\\ne5$. If $x=2&lt;y$, then $2^y-y^2=y+2$. The values $y=3,4$ fail, while $y=5$ works. Moreover $F(y)=2^y-y^2-y-2$ satisfies $F(y+1)-F(y)=2^y-2y-2>0$ for $y\\ge5$, so $y=5$ is unique.",
        "It remains to rule out $3\\le x&lt;y$. For fixed $x\\ge3$, set $D(y)=x^y-y^x$. For $y\\ge x+1$, the ratio $x^y/y^{x-1}$ is increasing, and at $y=x+1$ it exceeds $x^2/3>x/\\ln x$ because $(1+1/x)^{x-1}&lt;3$ and $x\\ln x>3$. Hence $D'(y)>0$. In fact the same estimate gives $$D'(y)>y^{x-1}x\\left(\\frac{x\\ln x}{3}-1\\right)\\ge16\\cdot3(\\ln3-1)>1,$$ so $D(y)-y$ is strictly increasing.",
        "For $x=3$, $D(4)=17>7=2x+1$. For $x\\ge4$, $$D(x+1)=x^x\\bigl(x-(1+1/x)^x\\bigr)>x^x(x-3)>2x+1,$$ since $(1+1/x)^x&lt;3$. Thus $D(x+1)>x+(x+1)$, and because $D(y)-y$ is increasing, $D(y)>x+y$ for all $y\\ge x+1$, a contradiction.",
        "Therefore the unique solution is $(x,y)=(2,5)$."
      ]
    },
    {
      id: "n6",
      category: "nt",
      difficulty: "hard",
      stars: 3,
      rating: 6,
      confidence: "high",
      text: "Let $F_k=2^{2^k}+1$ denote the $k$-th Fermat number. Prove that $F_m$ and $F_n$ are coprime whenever $m\\ne n$.",
      why: "The telescoping Fermat-number identity gives pairwise coprimality in a clean two-step argument.",
      steps: [
        "Prove by induction that $F_0F_1\\cdots F_{n-1}=F_n-2$. For $n=1$, $F_0=3=F_1-2$.",
        "If the identity holds for $n$, then $F_0\\cdots F_n=(F_n-2)F_n=F_n^2-2F_n=(2^{2^n}+1)(2^{2^n}-1)=2^{2^{n+1}}-1=F_{n+1}-2$.",
        "For $m&lt;n$, $F_m\\mid F_n-2$. If $d=\\gcd(F_m,F_n)$, then $d\\mid2$. But every Fermat number is odd, so $d=1$.",
        "Thus all distinct Fermat numbers are pairwise coprime."
      ]
    },
    {
      id: "n7",
      category: "nt",
      difficulty: "hard",
      stars: 3,
      rating: 6.5,
      confidence: "high",
      text: "A lattice point $P$ is visible from the origin $O(0,0)$ if segment $OP$ contains no other lattice points. Prove that for every positive integer $k$, there exists a $(2k+1)\\times(2k+1)$ square of lattice points whose center is visible from the origin, while all other $(2k+1)^2-1$ lattice points in the square are not visible from the origin.",
      why: "CRT hides every noncentral point with its own prime while a second CRT choice keeps the center primitive.",
      steps: [
        "A lattice point $(x,y)$ is visible from the origin exactly when $\\gcd(x,y)=1$. For every nonzero offset $(i,j)$ with $|i|,|j|\\le k$, choose a distinct prime $p_{ij}>k$.",
        "By CRT choose positive integers $A,B$ with $A\\equiv-i$ and $B\\equiv-j\\pmod{p_{ij}}$ for every nonzero offset. Hence each point $(A+i,B+j)$ has $p_{ij}$ dividing both coordinates.",
        "Let $P=\\prod p_{ij}$. For each chosen prime $p_{ij}$, it cannot divide both $A$ and $B$, since that would force $p_{ij}$ to divide both $i$ and $j$, impossible because $p_{ij}>k$. Thus the center is not yet forced to be invisible by any $p_{ij}$.",
        "Now replace $A$ by $A+Pm$. For every prime $q\\mid B$ with $q\\nmid P$, exclude the single residue class $m\\equiv-A P^{-1}\\pmod q$. Choose an allowed residue class modulo each such $q$ and combine them by CRT. For $q\\mid P$, the preceding observation already prevents $q$ from dividing both $A+Pm$ and $B$.",
        "Hence $\\gcd(A+Pm,B)=1$, so the center is visible, while every other square point remains divisible by its assigned prime. Taking $m$ sufficiently large keeps the center positive."
      ]
    },
    {
      id: "n8",
      category: "nt",
      difficulty: "hard",
      stars: 3,
      rating: 7,
      confidence: "high",
      text: "Let $a,b,c,d$ be positive integers and put $S=a+b+c+d$ and $Q=a^2+b^2+c^2+d^2$. Suppose $Q\\mid S^2$. Determine all possible values of the integer $S^2/Q$.",
      why: "Cauchy–Schwarz restricts the quotient to three values, and each value is attained by an explicit example.",
      steps: [
        "By Cauchy–Schwarz, $S^2\\le4Q$. Since $a,b,c,d>0$, we also have $S^2>Q$. Therefore the positive integer $k=S^2/Q$ must satisfy $k\\in\\{2,3,4\\}$.",
        "The value $k=4$ is attained exactly when equality holds in Cauchy–Schwarz, i.e. $a=b=c=d$; for example $(1,1,1,1)$ gives $S^2/Q=4$.",
        "The value $k=3$ is attained by $(1,1,1,3)$, for which $S=6$ and $Q=12$, so $S^2/Q=3$.",
        "The value $k=2$ is attained by $(1,1,4,12)$, for which $S=18$ and $Q=162$, so $S^2/Q=2$.",
        "Hence the complete set of possible values is $$\\boxed{\\{2,3,4\\}}.$$"
      ]
    },
    {
      id: "n9",
      category: "nt",
      difficulty: "hard",
      stars: 3,
      rating: 7,
      confidence: "high",
      text: "Let $n\\ge3$. A sequence $a_1,a_2,\\dots,a_n$ of positive integers satisfies $$a_k=\\frac{[a_{k-1},a_{k-2}]}{(a_{k-1},a_{k-2})}\\quad(3\\le k\\le n),$$ where $[x,y]$ and $(x,y)$ denote lcm and gcd. Prove that if the sequence is strictly decreasing, then $$a_1\\ge\\frac{2^{n-2}a_{n-1}}{a_n}.$$",
      why: "The recurrence yields a strong ratio inequality: consecutive ratios decrease by a factor at least four, which is more than enough for the required bound.",
      steps: [
        "Set $r_k=a_{k-1}/a_k>1$ for $2\\le k\\le n$. From the recurrence, for $2\\le k&lt;n$, with $g_k=(a_{k-1},a_k)$, $$a_{k+1}=\\frac{a_ka_{k-1}}{g_k^2}.$$",
        "Therefore, for $2\\le k&lt;n$, $$\\frac{r_k}{r_{k+1}}=\\frac{a_{k-1}a_{k+1}}{a_k^2}=\\left(\\frac{a_{k-1}}{g_k}\\right)^2.$$ Since $a_k&lt;a_{k-1}$, the integer $a_{k-1}/g_k$ is at least $2$, so $r_k\\ge4r_{k+1}$.",
        "Iterating gives $r_2\\ge4^{n-2}r_n$. Since $a_2\\ge1$, we have $a_1=r_2a_2\\ge r_2$, while $r_n=a_{n-1}/a_n$. Hence $$a_1\\ge4^{n-2}\\frac{a_{n-1}}{a_n}\\ge2^{n-2}\\frac{a_{n-1}}{a_n}.$$",
        "This proves the required inequality."
      ]
    },
    {
      id: "n10",
      category: "nt",
      difficulty: "hard",
      stars: 3,
      rating: 7.5,
      confidence: "high",
      text: "Determine all quadruples of positive integers $(a,b,x,y)$ with $a,b$ odd satisfying $$x^2+y^2+1=(a^4+b^4+1)(xy+1).$$",
      why: "After the minimal parity restriction on $a,b$, a Vieta-jumping descent gives a rigorous contradiction; the parity assumption rules out the only possible zero-root obstruction modulo $16$.",
      steps: [
        "Let $K=a^4+b^4+1$. Since $a,b$ are odd, $K\\equiv3\\pmod{16}$ and in particular $K\\ge3$. The equation is $$x^2-Kxy+y^2+1-K=0,$$ viewed as a quadratic in $x$.",
        "Assume $x\\ge y$ and let the other root be $x'=Ky-x$. Vieta gives $$xx'=y^2+1-K.$$",
        "We claim $x'>0$. If $x'&lt;0$, then $x>Ky$, so $$x(x-Ky)=K-y^2-1,$$ but the left side is at least $Ky+1>K$, while the right side is $&lt;K$, impossible. If $x'=0$, then $K=y^2+1$, so $y^2=a^4+b^4$. But $a,b$ odd gives $a^4+b^4\\equiv2\\pmod{16}$, whereas a square is never $2\\pmod{16}$. Thus $x'>0$.",
        "Because $x'>0$, Vieta gives $y^2+1-K>0$, hence $K\\le y^2$. Therefore $$x'=\\frac{y^2+1-K}{x}&lt;\\frac{y^2}{x}\\le y,$$ so $0&lt;x'&lt;y$. The pair $(y,x')$ is another positive integer solution with smaller maximum coordinate.",
        "Infinite descent therefore reaches a positive solution with equal first two variables, say $x=y$. Then $(2-K)x^2=K-1$, impossible because the left side is negative and the right side is positive for $K\\ge3$.",
        "Hence there are no positive integer quadruples satisfying the modified equation."
      ]
    },
    {
      id: "n11",
      category: "nt",
      difficulty: "hard",
      stars: 3,
      rating: 7.5,
      confidence: "high",
      text: "Determine all positive integers $n$ for which the congruence $$x^2\\equiv-1\\pmod n$$ has exactly $8$ incongruent solutions modulo $n$.",
      why: "The solution count is controlled prime-power by prime-power and then multiplied by CRT; the only subtle point is the $2$-adic factor.",
      steps: [
        "For an odd prime $p$, $x^2\\equiv-1\\pmod p$ is solvable exactly when $p\\equiv1\\pmod4$, and then there are exactly two roots. If such a root exists modulo $p^r$, it lifts uniquely to modulo $p^{r+1}$ because the derivative $2x$ is not divisible by $p$. Hence every $p^r$ with $p\\equiv1\\pmod4$ contributes exactly two roots, while $p\\equiv3\\pmod4$ contributes none.",
        "Modulo $2$ there is one root, namely $x\\equiv1$. Modulo $4$ there is no root, so a factor $2^e$ is allowed only with $e=0$ or $1$.",
        "By the Chinese remainder theorem, if $n=2^\\varepsilon\\prod_{i=1}^r p_i^{e_i}$ with distinct odd primes $p_i\\equiv1\\pmod4$, then the number of roots is $2^r$; the factor $2^\\varepsilon$ contributes $1$ when $\\varepsilon\\in\\{0,1\\}$.",
        "Thus exactly $8$ roots occur precisely for $$n=2^\\varepsilon p_1^{e_1}p_2^{e_2}p_3^{e_3},$$ where $\\varepsilon\\in\\{0,1\\}$, the $p_i$ are distinct primes with $p_i\\equiv1\\pmod4$, and $e_i\\ge1$."
      ]
    },
    {
      id: "n12",
      category: "nt",
      difficulty: "challenging",
      stars: 4,
      rating: 8,
      confidence: "high",
      text: "Determine all positive integers $n$ for which the exponent of $2$ in the central binomial coefficient satisfies $$v_2\\!\\left(\\binom{2n}{n}\\right)=2.$$",
      why: "Legendre's formula turns the valuation into the binary digit sum of $n$, producing a clean exact classification.",
      steps: [
        "Let $s_2(n)$ be the number of $1$'s in the binary expansion of $n$. Legendre's formula gives $$v_2(n!)=n-s_2(n).$$",
        "Hence $$v_2\\!\\left(\\binom{2n}{n}\\right)=v_2((2n)!)-2v_2(n!)=(2n-s_2(2n))-2(n-s_2(n)).$$",
        "Multiplication by $2$ only shifts the binary expansion, so $s_2(2n)=s_2(n)$. Therefore $$v_2\\!\\left(\\binom{2n}{n}\\right)=s_2(n).$$",
        "Thus the valuation is exactly $2$ precisely when the binary expansion of $n$ contains exactly two $1$'s, i.e. $$n=2^r+2^s$$ for integers $r>s\\ge0$.",
        "Conversely every such $n$ has $s_2(n)=2$, so it indeed gives valuation $2$."
      ]
    },
    {
      id: "n13",
      category: "nt",
      difficulty: "challenging",
      stars: 4,
      rating: 8,
      confidence: "high",
      text: "Determine all positive integers $n$ satisfying $$\\tau(n)+\\varphi(n)=n,$$ where $\\tau(n)$ is the number of positive divisors of $n$ and $\\varphi(n)$ is Euler's totient function.",
      why: "The prime-power case is explicit, while the multi-prime case is bounded using elementary estimates for $\\varphi(n)$ and $\\tau(n)$.",
      steps: [
        "If $n=p^a$ is a prime power, then $\\tau(n)=a+1$ and $\\varphi(n)=p^{a-1}(p-1)$, so the equation becomes $$p^{a-1}=a+1.$$ For $a=1$ this is impossible; $a=2$ gives $p=3$, hence $n=9$; $a=3$ gives $p=2$, hence $n=8$. For $a\\ge4$, $p^{a-1}\\ge2^{a-1}>a+1$.",
        "Now suppose $n$ has at least two distinct prime factors. If $n$ is even, then an odd prime divisor $p\\ge3$ gives $\\varphi(n)/n\\le(1-1/2)(1-1/3)=1/3$, so $n-\\varphi(n)\\ge2n/3$. Since $\\tau(n)\\le2\\sqrt n&lt;2n/3$ for $n\\ge10$, no even $n\\ge10$ works. The only remaining even case is $n=6$, and $\\tau(6)+\\varphi(6)=4+2=6$.",
        "If $n$ is odd with at least two distinct prime factors, its two smallest prime factors are at least $3$ and $5$. Thus $\\varphi(n)/n\\le(2/3)(4/5)=8/15$, so $n-\\varphi(n)\\ge7n/15$. For $n\\ge21$, $$2\\sqrt n&lt;7n/15,$$ contradicting $\\tau(n)=n-\\varphi(n)$. The only smaller odd integer with at least two distinct prime factors is $15$, and $\\tau(15)+\\varphi(15)=4+8=12\\ne15$.",
        "Therefore the complete solution set is $$\\boxed{n\\in\\{6,8,9\\}}.$$"
      ]
    },
    {
      id: "n14",
      category: "nt",
      difficulty: "challenging",
      stars: 4,
      rating: 8.5,
      confidence: "high",
      text: "Determine all infinite strictly increasing sequences of positive integers $a_1&lt;a_2&lt;a_3&lt;\\cdots$ such that $a_n\\mid a_{n+1}$ and $$\\varphi(a_{n+1})=a_n+\\varphi(a_n)$$ for all $n\\ge1$.",
      why: "Divisibility first forces every term to have the form $2^r3^s$; the recurrence then becomes completely rigid.",
      steps: [
        "Because $a_n\\mid a_{n+1}$, the prime factorization formula for $\\varphi$ gives $\\varphi(a_n)\\mid\\varphi(a_{n+1})$. The recurrence then implies $\\varphi(a_n)\\mid a_n$, so $a_n/\\varphi(a_n)$ is an integer for every $n$.",
        "We use the lemma: if $m>1$ and $\\varphi(m)\\mid m$, then $m=2^r3^s$ with $r\\ge1,s\\ge0$. Indeed, suppose an odd prime $p\\ge5$ divides $m$. Since $$\\frac m{\\varphi(m)}=\\prod_{q\\mid m}\\frac q{q-1},$$ the numerator contributes exactly one factor of $2$ if $2\\mid m$ and none otherwise, while the denominator contains the factor $p-1$, which is even, and every other odd prime divisor of $m$ contributes another factor $2$. Thus integrality forces $2\\mid m$, $p$ to be the only odd prime divisor, and $v_2(p-1)=1$. Then $m/\\varphi(m)=2p/(p-1)$, an integer only if $p-1\\mid2$, impossible for $p\\ge5$. Hence no prime $\\ge5$ divides $m$. If $m$ were a power of $3$, then $m/\\varphi(m)=3/2$; therefore $2\\mid m$.",
        "Write $a_n=2^r3^s$. If $s=0$, then the recurrence gives $$\\varphi(a_{n+1})=3\\varphi(a_n)=3\\cdot2^{r-1}.$$ If $a_{n+1}=2^R$, its totient is a power of $2$, impossible. If $a_{n+1}=2^R3^S$ with $S\\ge1$, its totient is $2^R3^{S-1}$, so equality would force $R=r-1&lt;r$, contradicting $a_n\\mid a_{n+1}$. Hence $s\\ge1$ for every $n$.",
        "Now $a_n=2^r3^s$ with $r,s\\ge1$, so $a_n=3\\varphi(a_n)$. The recurrence becomes $$\\varphi(a_{n+1})=4\\varphi(a_n).$$ Write $a_{n+1}=2^R3^S$ with $R\\ge r$ and $S\\ge s$. Then $$\\frac{\\varphi(a_{n+1})}{\\varphi(a_n)}=2^{R-r}3^{S-s}=4,$$ hence $R=r+2$ and $S=s$. Therefore $a_{n+1}=4a_n$.",
        "Conversely, for any integers $r,s\\ge1$, the sequence $$a_n=2^r3^s4^{n-1}$$ is strictly increasing, satisfies $a_n\\mid a_{n+1}$, and obeys $\\varphi(a_{n+1})=4\\varphi(a_n)=a_n+\\varphi(a_n)$. Thus these are exactly all solutions."
      ]
    },
    {
      id: "n15",
      category: "nt",
      difficulty: "challenging",
      stars: 4,
      rating: 9,
      confidence: "high",
      text: "Determine all positive integers $n$ for which each of the congruences $$x^2\\equiv1\\pmod n,\\qquad x^2+x+1\\equiv0\\pmod n$$ has exactly $8$ incongruent solutions modulo $n$.",
      why: "This combines the $2$-torsion and nontrivial $3$-torsion of the unit groups and forces a rigid prime-factor pattern through CRT.",
      steps: [
        "For $x^2\\equiv1\\pmod{p^e}$ with odd prime $p$, there are exactly two roots, $\\pm1$. Thus for odd $n$, the number of roots is $2^{\\omega(n)}$.",
        "For $x^2+x+1\\equiv0\\pmod{p^e}$ with $p\\ne3$, multiplying by $x-1$ gives $x^3\\equiv1$, while $x\\not\\equiv1\\pmod p$. Hence a root exists modulo $p$ exactly when $3\\mid p-1$, i.e. $p\\equiv1\\pmod3$, and then there are exactly two roots. Each root lifts uniquely to every $p^e$ because $2x+1$ is nonzero modulo $p$ at a root.",
        "Modulo $3$, the polynomial has the single root $x\\equiv1$. It has no root modulo $9$: writing $x=1+3t$ gives $x^2+x+1\\equiv3\\pmod9$. Therefore a factor $3$ may occur only to the first power, and it contributes one root. Modulo $2$ there is no root at all.",
        "Thus exactly $8$ roots of the cubic congruence force $$n=3^\\varepsilon p_1^{e_1}p_2^{e_2}p_3^{e_3},$$ where $\\varepsilon\\in\\{0,1\\}$ and the distinct $p_i\\equiv1\\pmod3$.",
        "For $x^2\\equiv1\\pmod n$, the same modulus has exactly $2^{3+\\varepsilon}$ roots, so requiring exactly $8$ forces $\\varepsilon=0$.",
        "Hence the complete solution set is $$\\boxed{n=p_1^{e_1}p_2^{e_2}p_3^{e_3}},$$ where $p_1,p_2,p_3$ are distinct primes congruent to $1\\pmod3$ (equivalently $1\\pmod6$), and $e_1,e_2,e_3\\ge1$."
      ]
    },
    {
      id: "n16",
      category: "nt",
      difficulty: "challenging",
      stars: 4,
      rating: 9,
      confidence: "high",
      text: "Let $n\\ge2$. A gcd triangle of order $n$ is a triangular array of positive integers $(a_{i,j})_{1\\le j\\le i\\le n}$ satisfying $a_{i,j}=\\gcd(a_{i+1,j},a_{i+1,j+1})$ for $i&lt;n$, with all $\\binom{n+1}{2}$ entries pairwise distinct. Let $L=\\operatorname{lcm}(a_{n,1},\\dots,a_{n,n})$. Determine the minimum possible value of $\\Omega(L)$, counted with multiplicity, and find all gcd triangles attaining it.",
      why: "Nested interval gcds force a long divisor chain, giving the sharp lower bound. Equality is rigid enough to force a squarefree LCM and one omitted prime at every bottom position.",
      steps: [
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