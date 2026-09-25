/*
 * IMO Shortlist problem data — edit this file to grow the set.
 *
 * Problems are grouped by category. Inside each category they run from
 * easy to hard, and the id number is that order: a1 is the easiest
 * algebra problem, a2 the next, and so on.
 *
 *   { id, category, difficulty, stars, rating, confidence, text, why, status?, steps }
 *
 *   id          lower case code (e.g. "a3"); shown uppercased, and used as the DOM id
 *   category    one of: alg | cmb | geo | nt
 *   rating      estimated difficulty, 1.0 – 10.0 (see `scale` below)
 *   difficulty  tier derived from rating: easy < 4 ≤ medium < 6 ≤ hard < 8 ≤ challenging
 *   stars       1–4 = tier index
 *   confidence  how sure the estimate is: high | medium | low
 *   text        HTML + TeX ($...$, $$...$$); use &lt; &gt; for inequalities
 *   why         why this rating, under the proof-from-scratch criterion
 *   status      optional: "false" | "open"
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
    // Algebra — 14 problems, easy to hard
    {
      id: "a1",
      category: "alg",
      difficulty: "medium",
      stars: 2,
      rating: 4,
      confidence: "medium",
      text: "Let $a, b, c$ be positive real numbers. Prove that $$32 \\!(\\sum_{\\mathrm{cyc}} ab(a+b))^{\\!3} \\;\\ge\\; 27 \\!(\\prod_{\\mathrm{cyc}}(a+b))^{\\!2} \\cdot(\\prod_{\\mathrm{cyc}}(a+b) - 4abc).$$",
      why: "A homogeneous symmetric inequality collapses to one variable after $s=a+b+c$, $t=ab+bc+ca$, $p=abc$. The factorization and equality case are elementary.",
      steps: [
        "Set $s=a+b+c$, $t=ab+bc+ca$ and $p=abc$. Then $\\sum_{\\mathrm{cyc}} ab(a+b)=st-3p$ and $\\prod_{\\mathrm{cyc}}(a+b)=st-p$, so the inequality is $32(st-3p)^3 \\ge 27(st-p)^2(st-5p)$.",
        "By AM-GM, $st\\ge 9p$. Since $p>0$, put $u=st/p\\ge 9$. After dividing by $p^3$, it is enough to prove $32(u-3)^3 \\ge 27(u-1)^2(u-5)$.",
        "Use the exact identity $32(u-3)^3-27(u-1)^2(u-5)=(u-9)^2(5u-9)$.",
        "For $u\\ge 9$ this is nonnegative. Equality requires $u=9$, and equality in the AM-GM estimates forces $a=b=c$."
      ]
    },
    {
      id: "a2",
      category: "alg",
      difficulty: "medium",
      stars: 2,
      rating: 4.5,
      confidence: "high",
      text: "Prove that there do not exist rational numbers $a$ and $b$ such that $$\\sqrt[3]{2} \\;=\\; \\sqrt{a} + \\sqrt{b}.$$",
      why: "The proof is a direct field-degree argument: squaring reduces the claim to a nontrivial rational linear relation among $1$, $\\sqrt[3]{2}$, and $\\sqrt[3]{4}$. The irreducibility step is standard and the proof has no unnecessary machinery.",
      steps: [
        "Let $\\alpha=\\sqrt[3]{2}$. Since $a,b\\ge 0$ and $x^3-2$ is irreducible over $\\mathbb{Q}$ by Eisenstein at $2$, $\\{1,\\alpha,\\alpha^2\\}$ is $\\mathbb{Q}$-linearly independent.",
        "Suppose $\\alpha=\\sqrt{a}+\\sqrt{b}$. Put $s=a+b\\in\\mathbb{Q}$ and $p=ab\\in\\mathbb{Q}$. Squaring gives $\\alpha^2-s=2\\sqrt{p}$.",
        "If $p=0$, then $\\alpha^2$ is rational, impossible. Squaring again gives $\\alpha^4-2s\\,\\alpha^2+s^2=4p$. Since $\\alpha^4=2\\alpha$, this becomes $2\\alpha-2s\\,\\alpha^2+(s^2-4p)=0$.",
        "This is a nontrivial $\\mathbb{Q}$-linear relation among $1,\\alpha,\\alpha^2$ because the coefficient of $\\alpha$ is $2$, a contradiction."
      ]
    },
    {
      id: "a3",
      category: "alg",
      difficulty: "medium",
      stars: 2,
      rating: 4.5,
      confidence: "high",
      text: "Let $n \\ge 3$ be an integer, and let $x_1, x_2, \\dots, x_n$ be real numbers satisfying: $$\\sum_{i=1}^n x_i = 0 \\quad \\text{and} \\quad \\sum_{i=1}^n x_i^2 = n(n-1).$$ Prove that $\\displaystyle\\sum_{i=1}^n x_i^3 \\le n(n-1)(n-2)$. Determine all configurations of $(x_1, \\dots, x_n)$ for which equality holds.",
      why: "The maximum-coordinate bound plus one tailored factorization proves the inequality in a few lines. Equality follows directly from the vanishing of nonpositive summands.",
      steps: [
        "Let $M=\\max_i x_i$. The other $n-1$ variables sum to $-M$, so Cauchy–Schwarz gives $n(n-1)-M^2 \\ge M^2/(n-1)$, hence $M\\le n-1$.",
        "For every $i$, $x_i\\le n-1$, so $(x_i+1)^2(x_i-(n-1))\\le 0$.",
        "Expanding and using $\\sum x_i=0$ and $\\sum x_i^2=n(n-1)$, we obtain $\\sum (x_i+1)^2(x_i-(n-1))=\\sum x_i^3-n(n-1)(n-2)$. Hence the desired upper bound follows.",
        "Equality holds exactly when every summand is zero, so $x_i$ is $-1$ or $n-1$. The zero-sum condition then forces exactly one entry $n-1$ and the other $n-1$ entries $-1$; these also satisfy the square-sum condition."
      ]
    },
    {
      id: "a4",
      category: "alg",
      difficulty: "medium",
      stars: 2,
      rating: 4.5,
      confidence: "high",
      text: "Let $f\\colon\\mathbb{R}\\to\\mathbb{R}$ and define $\\varphi(x)=f(x)-x^3+1$. Suppose $$\\varphi(x+y)+xy=\\varphi(x)\\,\\varphi(y)$$ for all real numbers $x$ and $y$. Determine all such functions $f$.",
      why: "The substitution is given, so the work is the case split. From $\\varphi(x)\\varphi(-x)=1-x^2$ one of $\\varphi(1)$ and $\\varphi(-1)$ vanishes, and each choice determines $\\varphi$ on all of $\\mathbb{R}$. Short once that relation is written.",
      steps: [
        "Set $x=y=0$: $\\varphi(0)=\\varphi(0)^2$, so $\\varphi(0)\\in\\{0,1\\}$. If $\\varphi(0)=0$, then $y=0$ forces $\\varphi\\equiv 0$, and $xy=0$ fails. Hence $\\varphi(0)=1$.",
        "Set $y=-x$: $1-x^2=\\varphi(x)\\varphi(-x)$. In particular $\\varphi(1)\\varphi(-1)=0$.",
        "If $\\varphi(1)=0$, then $\\varphi(x+1)=-x$, so $\\varphi(t)=1-t$. If $\\varphi(-1)=0$, then $\\varphi(x-1)=x$, so $\\varphi(t)=t+1$. Both satisfy the equation for $\\varphi$.",
        "Since $f(x)=\\varphi(x)+x^3-1$, the two solutions are $f(x)=x^3-x$ and $f(x)=x^3+x$."
      ]
    },
    {
      id: "a5",
      category: "alg",
      difficulty: "medium",
      stars: 2,
      rating: 5,
      confidence: "medium",
      text: "Let $a_1, a_2, a_3, \\dots$ be a sequence of positive reals with $a_1=1$ and $$a_{n+1}=a_n+\\frac{n}{a_1+a_2+\\dots+a_n}$$ for all $n\\ge1$. Prove that for every positive integer $n$, $$a_n\\ge\\sqrt{\\frac{16n-9}{7}}.$$",
      why: "The original statement does not survive a high-precision audit. The corrected bound follows from monotonicity/concavity of the increments and an elementary quadratic estimate; it avoids an artificial exact invariant.",
      steps: [
        "Write $S_n=a_1+\\cdots+a_n$ and $d_n=a_{n+1}-a_n=n/S_n$. Then $d_n>0$. Also $d_{n+1}\\lt d_n$ because $(n+1)/S_{n+1}\\lt n/S_n$ is equivalent to $S_n\\lt n a_{n+1}$, which follows from $a_1\\lt\\cdots\\lt a_{n+1}$. Thus $(a_n)$ is increasing and concave.",
        "Concavity gives $S_n\\ge n(1+a_n)/2$ for $n\\ge 2$. Hence $d_n\\le 2/(a_n+1)$, and therefore $a_{n+1}^2-a_n^2=2a_n d_n+d_n^2\\lt 4$. Thus $a_n^2\\lt 4n-3$ for every $n\\ge 2$.",
        "For $n\\ge 2$, $d_j\\ge d_n$ for $j\\lt n$, so $a_j\\le a_n-(n-j)d_n$. Summing gives $S_n\\le n a_n-n(n-1)d_n/2$. Using $S_n=n/d_n$, this becomes $1\\le a_n d_n-(n-1)d_n^2/2$. Solving the quadratic in $d_n$ yields $d_n\\ge 2/(a_n+\\sqrt{a_n^2-2(n-1)})$.",
        "Let $t=\\sqrt{a_n^2-2(n-1)}$. For $n\\ge 3$, $a_n^2\\lt 4n-3$ implies $7a_n^2\\lt 32(n-1)$, hence $3a_n>4t$. Consequently $2a_n d_n\\ge 4a_n/(a_n+t)>16/7$. For $n=1$, $a_2^2-a_1^2=3>16/7$, and for $n=2$, $a_3^2-a_2^2=5>16/7$.",
        "Thus $a_{n+1}^2-a_n^2>16/7$ for every $n\\ge 1$. Starting from $a_1^2=1$ gives $a_n^2>1+16(n-1)/7=(16n-9)/7$ for $n\\ge 2$, with equality at $n=1$. Hence the corrected bound holds."
      ]
    },
    {
      id: "a6",
      category: "alg",
      difficulty: "medium",
      stars: 2,
      rating: 5.5,
      confidence: "high",
      text: "Let $a,b,c>0$ with $a+b+c=3$. Prove that $$\\frac{1}{a^2+b+c} + \\frac{1}{b^2+c+a} + \\frac{1}{c^2+a+b} \\le 1.$$",
      why: "A tangent-line bound at the equality point $a=b=c=1$ turns each term into a linear function of the variable, and the resulting cubic inequality factors as a perfect square times a positive factor. Finding and justifying the tangent line is the whole difficulty.",
      steps: [
        "Since $a+b+c=3$, rewrite $a^2+b+c = a^2-a+3$, and similarly for the other two terms.",
        "Claim: for $0<a<3$, $\\dfrac{1}{a^2-a+3} \\le \\dfrac{4-a}{9}$ — the tangent line to $f(a)=1/(a^2-a+3)$ at $a=1$.",
        "Since $a^2-a+3>0$ always, the claim is equivalent to $9 \\le (4-a)(a^2-a+3)$, i.e. $(a-1)^2(3-a) \\ge 0$, which holds because $0<a<3$.",
        "Summing the tangent-line bound over $a,b,c$ gives $\\displaystyle\\sum \\frac{1}{a^2-a+3} \\le \\frac{(4-a)+(4-b)+(4-c)}{9} = \\frac{12-3}{9}=1$, with equality iff $a=b=c=1$."
      ]
    },
    {
      id: "a7",
      category: "alg",
      difficulty: "hard",
      stars: 3,
      rating: 6,
      confidence: "medium",
      text: "Let $a, b, c > 0$. Prove that $$\\frac{ab}{a^2+b^2+c^2-ab+bc-ca} + \\frac{bc}{a^2+b^2+c^2-bc+ca-ab} + \\frac{ca}{a^2+b^2+c^2-ca+ab-bc} \\le \\frac{3}{2},$$ and determine all cases of equality.",
      why: "Cyclic fractional inequality. Clearing the awkward denominators (SOS, tangent line, or a substitution) is the whole problem; equality analysis is short. Looks messier than it is to prove.",
      steps: [
        "Put $D_1=a^2+b^2+c^2-ab+bc-ca$ and define $D_2,D_3$ cyclically. If $Q=\\bigl((a-b)^2+(b-c)^2+(c-a)^2\\bigr)/2$, then $D_1=Q+2bc$, $D_2=Q+2ca$, $D_3=Q+2ab$, so all denominators are positive.",
        "The claim is equivalent to $P=3D_1 D_2 D_3-2(ab D_2 D_3+bc D_3 D_1+ca D_1 D_2)\\ge 0$. Rotate variables so that $a$ is maximal. There are two order types.",
        "If $a\\ge b\\ge c$, write $c=x$, $b=x+y$, $a=x+y+z$ with $x>0$ and $y,z\\ge 0$. Direct expansion gives $P=4x^4(y^2+yz+z^2)+8x^3(y^3+y^2z+2yz^2+z^3)+12x^2 y^4+16x^2 y^3 z+36x^2 y^2 z^2+32x^2 y z^3+12x^2 z^4+8x y^5+16x y^4 z+40x y^3 z^2+48x y^2 z^3+32x y z^4+8x z^5+R(y,z)$, where $R=3y^6+9y^5 z+22y^4 z^2+29y^3 z^3+26y^2 z^4+13y z^5+3z^6$.",
        "If $a\\ge c\\ge b$, write $b=x$, $c=x+y$, $a=x+y+z$ with $x>0$ and $y,z\\ge 0$. Direct expansion gives $P=4x^4(y^2+yz+z^2)+8x^3 y^3+16x^3 y^2 z+24x^3 y z^2+8x^3 z^3+12x^2 y^4+32x^2 y^3 z+60x^2 y^2 z^2+40x^2 y z^3+12x^2 z^4+8x y^5+24x y^4 z+56x y^3 z^2+56x y^2 z^3+32x y z^4+8x z^5+R(y,z)$. Every coefficient is nonnegative, so $P\\ge 0$.",
        "Equality requires $y=z=0$ in either case, hence $a=b=c$. Conversely $a=b=c$ gives equality."
      ]
    },
    {
      id: "a8",
      category: "alg",
      difficulty: "hard",
      stars: 3,
      rating: 6,
      confidence: "low",
      text: "Let $a, b, c$ be non-negative real numbers such that $ab + bc + ca = 1$. Prove that: $$\\sqrt{a^3+b+c} + \\sqrt{b^3+c+a} + \\sqrt{c^3+a+b} \\;\\ge\\; \\sqrt{(a+b+c)^3 + 4(a+b+c)^2 - (a+b+c) - 4}$$",
      why: "Non-symmetric radicals, equality at a boundary point. Cauchy–Schwarz in Engel form (or a two-variable substitution) is enough if the pairing is chosen well. A strong contestant can complete a proof without new theory.",
      steps: []
    },
    {
      id: "a9",
      category: "alg",
      difficulty: "hard",
      stars: 3,
      rating: 6.5,
      confidence: "high",
      text: "Determine all polynomials $P(x)$ with real coefficients for which there exists a rational function $Q(x)$ with real coefficients, not identically zero, such that $$P(x) \\;=\\; \\frac{Q(x)}{Q\\!\\left(1 - \\dfrac{1}{x}\\right)}$$ for all real numbers $x$ except finitely many where the expressions are undefined.<br><br><em>Note: A rational function is an expression $A(x)/B(x)$, where $A,B$ are polynomials with $B \\not\\equiv 0$.</em>",
      why: "The transformation $x\\mapsto 1-1/x$ has order $3$. The resulting norm identity first forces every root of $P$ to lie among $0$ and $1$, and comparing divisor orders gives the congruence $a\\equiv b\\pmod 3$. The converse has an explicit rational $Q$. This is substantially cleaner than a generic valuation-theory approach.",
      steps: [
        "Let $T(x)=1-1/x=(x-1)/x$. Then $T$ has order $3$, since $T^2(x)=1/(1-x)$ and $T^3(x)=x$. Composing the given equation at $x$, $T(x)$, $T^2(x)$ yields $P(x)P(T(x))P(T^2(x))=1$.",
        "If $r$ is a root of $P$ with $r$ not equal to $0$ or $1$, then $T(r)$ and $T^2(r)$ are finite, so the product above vanishes at $x=r$, impossible. Hence every root of $P$ is $0$ or $1$, and therefore $P(x)=c\\,x^a(x-1)^b$ for some $a,b\\ge 0$.",
        "The three-factor norm is $x\\cdot T(x)\\cdot T^2(x)=-1$, whereas $(x-1)(T(x)-1)(T^2(x)-1)=1$. Therefore $c^3(-1)^a=1$, so over the reals $c=(-1)^a$.",
        "It remains to determine which exponents occur. Let $u=\\operatorname{ord}_0 Q$, $v=\\operatorname{ord}_1 Q$ and $w=\\operatorname{ord}_\\infty Q$. Since $Q$ is rational, $u+v+w=0$. Comparing orders in $P=Q/(Q\\circ T)$, and using $T(0)=\\infty$, $T(1)=0$, gives $a=u-w$ and $b=v-u$. Hence $a-b=3u$, so $a\\equiv b\\pmod 3$.",
        "Conversely, suppose $a,b\\ge 0$ and $a\\equiv b\\pmod 3$. Put $u=(a-b)/3$ and $v=(a+2b)/3$, which are integers, and define $Q(x)=x^u(x-1)^v$. Then $Q(x)/Q(T(x))=(-1)^v x^a(x-1)^b$. Since $v-a=2(b-a)/3$ is even, $(-1)^v=(-1)^a$. Thus every polynomial solution is exactly $P(x)=(-1)^a x^a(x-1)^b$ with $a,b\\ge 0$ and $a\\equiv b\\pmod 3$."
      ]
    },
    {
      id: "a10",
      category: "alg",
      difficulty: "hard",
      stars: 3,
      rating: 7,
      confidence: "low",
      text: "Let $(x_n)_{n\\ge 1}$ be a sequence of positive real numbers satisfying $$\\lfloor x_n\\rfloor\\, x_{n+1}\\, \\lceil x_{n+2}\\rceil = x_n + x_{n+1} + x_{n+2}$$ for every integer $n\\ge 1$. Prove that $(x_n)_{n\\ge 1}$ is eventually periodic.",
      why: "Eventual periodicity for a floor/ceiling recurrence. The plan — bound the integer parts, then a finite list of types — is clear; carrying out the case analysis from scratch is long and easy to leak a case.",
      steps: []
    },
    {
      id: "a11",
      category: "alg",
      difficulty: "hard",
      stars: 3,
      rating: 7.5,
      confidence: "low",
      text: "Find all functions $f\\colon \\mathbb{N} \\to \\mathbb{N}$ satisfying $$f(abc) + f\\!\\left(2a\\,f(b)\\right) + f\\!\\left(2b\\,f(c)\\right) + f\\!\\left(2c\\,f(a)\\right) = f(a)\\,f(b)\\,f(c)$$ for all $a, b, c \\in \\mathbb{N}$.",
      why: "Three-variable equation on ℕ with a product on the right. Many substitutions and a long classification; a complete solution set is not obvious from the statement. No complete write-up was checked.",
      steps: []
    },
    {
      id: "a12",
      category: "alg",
      difficulty: "hard",
      stars: 3,
      rating: 7.5,
      confidence: "low",
      text: "Let $a, b, c, d$ be positive real numbers satisfying $$\\prod_{\\mathrm{cyc}} (a+b) = \\left(\\sum_{\\mathrm{cyc}} ab\\right)^2.$$ Prove that $$\\frac{1+\\sqrt{5}}{4} &lt; \\frac{\\sum_{\\mathrm{cyc}} ab}{\\sum_{\\mathrm{cyc}} ac} \\le 1.$$ Determine all quadruples $(a, b, c, d)$ for which equality holds, and show that the constant $\\frac{1+\\sqrt{5}}{4}$ cannot be replaced by any larger number.",
      why: "Four-variable cyclic constraint, a two-sided bound with the golden-ratio constant, all equality cases, and a sharpness example. Several independent pieces; easy to stall on the lower bound. No complete write-up was checked.",
      steps: []
    },
    {
      id: "a13",
      category: "alg",
      difficulty: "challenging",
      stars: 4,
      rating: 8,
      confidence: "low",
      text: "Let $u$ and $v$ be integers with $1 &lt; u &lt; v$. A sequence of real numbers $(a_n)$ is defined by $a_1 = 1$ and $$a_n + a_{n/u} + a_{n/v} = 0 \\quad \\text{for all } n \\ge 2,$$ where $a_k = 0$ for any non-integer $k$. Prove that the sequence $(a_n)$ is bounded if and only if $v = u^2$.",
      why: "Both directions: a structural argument when v = u², and unboundedness otherwise. Generating functions or unfolding along (u, v)-multiples; not a template problem. No complete write-up was checked.",
      steps: []
    },
    {
      id: "a14",
      category: "alg",
      difficulty: "challenging",
      stars: 4,
      rating: 8,
      confidence: "medium",
      text: "Find all surjective functions $f\\colon \\mathbb{R} \\to \\mathbb{R}$ satisfying $$f(x f(y)) + f(y f(x)) = f(x)f(y) + f(xy)$$ for all $x, y \\in \\mathbb{R}$.",
      why: "Surjective functional equation on ℝ. The substitutions look standard, but closing every branch (zero set, multiplicativity, linear vs involution-type solutions) is long from scratch; a complete classification sits with the hardest algebra problems in the set.",
      steps: []
    },
    // Combinatorics — 14 problems, easy to hard
    {
      id: "c1",
      category: "cmb",
      difficulty: "easy",
      stars: 1,
      rating: 1.5,
      confidence: "high",
      text: "There are $n$ students at a university. Some students form several clubs, grouped into $s$ societies. The following conditions hold: <ol><li>No two clubs share more than one student.</li><li>For each student $u$ and society $S$, student $u$ belongs to exactly two clubs of $S$.</li><li>For any society $S$, any two of its clubs share exactly one student.</li></ol><br>Prove that the total number of pairs of distinct clubs $\\{C_a, C_b\\}$ in the same society is exactly $n \\cdot s$. Prove further that every society contains the same number of clubs.",
      why: "The count itself is pure double counting from the three axioms. The added claim needs one more observation: each society's club-pair count equals $\\binom{m}{2}$ for its own club total $m$, and $m\\mapsto\\binom{m}{2}$ is strictly increasing, so all societies must share the same $m$ — a small but genuine extra step beyond the bijection.",
      steps: [
        "Fix a society $S$. By condition (ii), every student belongs to exactly two clubs of $S$, and therefore determines a pair of clubs of $S$.",
        "Two different students cannot determine the same pair, because then those two clubs would share at least two students, contradicting condition (i).",
        "Every pair of distinct clubs of $S$ shares exactly one student by (iii); by (ii) that student lies in exactly those two clubs of $S$. Thus the student-to-pair map is a bijection.",
        "So $S$ contributes exactly $n$ pairs of clubs. Summing over the $s$ societies gives $ns$.",
        "If $S$ has $m_S$ clubs, the pairs of clubs in $S$ number $\\binom{m_S}{2}$, so $\\binom{m_S}{2}=n$ for every society $S$. Since $m\\mapsto\\binom{m}{2}$ is strictly increasing on positive integers, this equation has at most one solution, so $m_S$ is the same for every society."
      ]
    },
    {
      id: "c2",
      category: "cmb",
      difficulty: "easy",
      stars: 1,
      rating: 2.5,
      confidence: "high",
      text: "There are $n$ points on a line, with the distance between the two outermost points being $L$. Colour each point with one of $k$ colours, where $n \\ge k+1 \\ge 3$. The <em>span</em> of a colour is the distance between its two outermost points of that colour (or $0$ if the colour is used at most once).<br><br>Prove that there exists a colouring for which the sum of the $k$ spans is at least $L$. Show that the constant $1$ is best possible: for every $k$, exhibit a point set with $n = k+1$ points on which no colouring achieves span-sum exceeding $L$.",
      why: "Colour the two outermost points the same: that colour has span $L$. The sharpening asks for tightness at every $k$ rather than a single checked case ($n=3,k=2$): with $n=k+1$ points, pigeonhole forces exactly one colour to be doubled, so the span-sum collapses to a single pairwise distance, at most $L$. Seeing that this generalises cleanly is the one real idea needed.",
      steps: [
        "Colour the two outermost points with the same colour. That colour has span $L$, so the sum of all $k$ spans is at least $L$.",
        "For sharpness, fix any $k$ and take $n=k+1$ points on the line. Since there are only $n-k=1$ more points than colours, any colouring must assign exactly one colour to two of the points and every other colour to exactly one point.",
        "Colours used exactly once contribute span $0$. Hence the span-sum equals the distance between the two points sharing the doubled colour, which is at most $L$ since all $n$ points lie between the two outermost ones.",
        "Thus for every $k$, this configuration with $n=k+1$ points has span-sum at most $L$ under every colouring, so the constant $1$ cannot be replaced by any larger number that works for every point set and every $k$."
      ]
    },
    {
      id: "c3",
      category: "cmb",
      difficulty: "easy",
      stars: 1,
      rating: 2.5,
      confidence: "high",
      text: "Maryam and Iman play a game on a $7\\times 7$ chessboard. Initially the board is empty. <ol><li>On the first turn, Maryam places a piece on any square of her choice.</li><li>In subsequent turns, each player must move the piece to an adjacent square (sharing a common edge) not previously visited.</li><li>The player who cannot make a valid move loses.</li></ol><br>Prove that Maryam (the first player) has a winning strategy, and describe it in detail.",
      why: "Path game on a $7\\times7$ board. A pairing strategy after a well-chosen first move is a standard olympiad idea; writing the pairing carefully is the only work.",
      steps: [
        "Start at the centre square. The remaining $48$ squares admit a domino tiling: use vertical dominoes in rows $1$–$2$ and $6$–$7$; use three horizontal dominoes in each of the two $3\\times2$ blocks in columns $1$–$2$ and $6$–$7$, rows $3$–$5$; and tile the remaining $3\\times3$ square with its centre removed by four dominoes around the missing centre.",
        "Whenever Iman moves to a new square $W$, let $V$ be the other square of the unique domino containing $W$. Maryam moves from $W$ to $V$. This is legal because $V$ is adjacent to $W$ and unvisited.",
        "After each Maryam move, all visited squares other than the current endpoint are the centre together with completed dominoes. Hence Iman must enter an untouched domino, and Maryam can always answer with its partner.",
        "There are $24$ dominoes. Maryam makes all $24$ replies, so after her last reply every square is visited and Iman has no legal move."
      ]
    },
    {
      id: "c4",
      category: "cmb",
      difficulty: "easy",
      stars: 1,
      rating: 3,
      confidence: "high",
      text: "A coin is placed on each vertex of a finite simple graph $G$. In each step, select a vertex $v$ containing a coin, collect its coin, and discard coins on $v$ and all neighbors. Repeat until no coins remain.<br><br>Prove that we can always collect at least $$\\sum_{v \\in V} \\frac{1}{\\deg(v) + 1} \\quad \\text{coins.}$$",
      why: "Caro–Wei / greedy: choose a minimum-degree vertex and induct. The key observation is that the weights on a closed neighborhood sum to at most $1$.",
      steps: [
        "Induct on the number of vertices. Choose a vertex $v$ of minimum degree $d$, take its coin, and delete the closed neighbourhood $N[v]$.",
        "For every $u$ in $N[v]$, $\\deg(u)\\ge d$, so the sum of $1/(\\deg(u)+1)$ over $N[v]$ is at most $1$.",
        "Apply induction to $G-N[v]$. Deleting vertices only decreases degrees, so the amount guaranteed there is at least the sum of $1/(\\deg_G(u)+1)$ over $u$ outside $N[v]$.",
        "Adding the coin at $v$ gives at least the full sum in the statement."
      ]
    },
    {
      id: "c5",
      category: "cmb",
      difficulty: "medium",
      stars: 2,
      rating: 5,
      confidence: "high",
      text: "In a night sky, constellations of three stars are charted such that no two share more than one star. Starlight links two stars whenever they belong to the same constellation. <ol><li>Two constellations form a <em>conjunction</em> if they share a star.</li><li>A trio of stars forms a <em>mirage</em> if they are pairwise linked by starlight, yet form no constellation.</li></ol><br>Prove that the number of mirages is at most $\\dfrac{4}{3}$ the number of conjunctions.",
      why: "A linear 3-uniform hypergraph: double-count length-2 paths against triangles (mirages vs conjunctions). The $4/3$ constant emerges from a local extremal count.",
      steps: [
        "Let $d_v$ be the number of constellations containing star $v$. Since two constellations share at most one star, the number $C$ of conjunctions is $C=\\sum_v \\binom{d_v}{2}$.",
        "For a fixed $v$, its $2d_v$ neighbours are split into $d_v$ disjoint pairs, one pair from each constellation through $v$. Let $e_v$ be the number of graph-edges joining vertices from different pairs.",
        "Every such cross-edge $xy$ gives a mirage $\\{v,x,y\\}$; conversely every mirage is counted at each of its three vertices. Hence $M=(1/3)\\sum_v e_v$.",
        "Among the $2d_v$ neighbours there are $4\\binom{d_v}{2}$ possible cross-pairs, so $e_v\\le 4\\binom{d_v}{2}$. Therefore $M\\le 4C/3$."
      ]
    },
    {
      id: "c6",
      category: "cmb",
      difficulty: "medium",
      stars: 2,
      rating: 5,
      confidence: "high",
      text: "In a mysterious investigation bureau, there are $m$ detectives and $n$ secret clues, where $n \\ge m \\ge 2$. Each detective has access to a distinct combination of these clues. One day, the chief inspector burns exactly one clue from the archives. A clue is called <em>safe</em> if, after its destruction, no two detectives become indistinguishable based on the clues they still possess.<br><br>Show that at least $n-m+1$ clues are safe.",
      why: "View the detectives as vertices of the binary cube. Every unsafe coordinate gives an edge, and distinct coordinate labels force those edges to form a forest.",
      steps: [
        "View the $m$ distinct clue-sets as vertices of the hypercube $\\{0,1\\}^n$. A clue $j$ is unsafe precisely when two of the sets differ only in coordinate $j$.",
        "Pick one such pair for each unsafe coordinate and draw the corresponding hypercube edge. This produces a graph $G$ on $m$ vertices with $U$ edges, where $U$ is the number of unsafe clues, and the $U$ edges carry distinct coordinate-labels.",
        "$G$ cannot contain a cycle: a cycle in the hypercube must flip every used coordinate an even number of times, but the labels on the chosen edges are all distinct, so each appears once. Thus $G$ is a forest and $U\\le m-1$.",
        "Therefore at least $n-U\\ge n-m+1$ clues are safe."
      ]
    },
    {
      id: "c7",
      category: "cmb",
      difficulty: "medium",
      stars: 2,
      rating: 5,
      confidence: "high",
      text: "Let $G$ be a simple graph on $n$ vertices containing no triangle. Prove that $G$ has at most $\\lfloor n^2/4 \\rfloor$ edges.",
      why: "Mantel's theorem. The double-counting proof via $\\sum \\deg(v)^2 \\ge (2|E|)^2/n$ (Cauchy–Schwarz) combined with the triangle-free bound $\\deg(u)+\\deg(v)\\le n$ on every edge is short but requires assembling two standard tools correctly.",
      steps: [
        "If $uv$ is an edge, $u$ and $v$ have no common neighbour (else a triangle would form), so every other vertex is a neighbour of at most one of $u,v$: $\\deg(u)+\\deg(v)\\le n$.",
        "Summing this bound over all edges gives $\\displaystyle\\sum_{v} \\deg(v)^2 = \\sum_{uv\\in E}(\\deg(u)+\\deg(v)) \\le n|E|$.",
        "By Cauchy–Schwarz, $\\displaystyle\\sum_v \\deg(v)^2 \\ge \\frac{\\left(\\sum_v \\deg(v)\\right)^2}{n} = \\frac{(2|E|)^2}{n}$.",
        "Combining the two bounds: $\\dfrac{4|E|^2}{n}\\le n|E|$, so $|E|\\le n^2/4$; since $|E|$ is an integer, $|E|\\le \\lfloor n^2/4\\rfloor$."
      ]
    },
    {
      id: "c8",
      category: "cmb",
      difficulty: "medium",
      stars: 2,
      rating: 5.5,
      confidence: "high",
      text: "For any integer $n \\ge 2$, prove that there exists a set $S$ of $2n$ distinct triangular numbers partitionable into two subsets of size $n$ with equal sums.<br><br><em>A triangular number is a positive integer of the form $\\tfrac{k(k+1)}2$ for some positive integer $k$.</em>",
      why: "The construction is pleasantly recursive. Two small base cases cover the two parities of $n$, and the four-term identity $T_m+T_{2m+3}=T_{m+2}+T_{2m+2}$ lets us increase $n$ by $2$ while keeping every triangular number distinct. The proof is short once the identity is found, but discovering it is the real medium-level step.",
      steps: [
        "Let $T_r=r(r+1)/2$. For $n=2$, we have $T_1+T_5=T_3+T_4=16$, so four distinct triangular numbers split into two equal-sum pairs.",
        "For $n=3$, we have $T_1+T_3+T_6=T_2+T_4+T_5=28$, giving six distinct triangular numbers split into two equal-sum triples.",
        "Now suppose a construction exists for some $n$, using triangular numbers with indices at most $M$. Choose an integer $m>M$. The identity $T_m+T_{2m+3}=T_{m+2}+T_{2m+2}$ follows immediately by expanding $T_r=r(r+1)/2$.",
        "The four new indices $m$, $m+2$, $2m+2$, $2m+3$ are positive, pairwise distinct, and all exceed $M$. Put $T_m$ and $T_{2m+3}$ on one side and $T_{m+2}$ and $T_{2m+2}$ on the other. Adding these four numbers to the previous construction increases both subset sizes by $2$ and preserves equality of the sums.",
        "Starting from $n=2$ and repeatedly applying this step proves the result for every even $n$. Starting from $n=3$ proves it for every odd $n$."
      ]
    },
    {
      id: "c9",
      category: "cmb",
      difficulty: "medium",
      stars: 2,
      rating: 5.5,
      confidence: "high",
      text: "Let $n\\ge 1$ and let $a_1,a_2,\\dots,a_{n^2+1}$ be $n^2+1$ distinct real numbers. Prove that among them there is either an increasing subsequence of length $n+1$ or a decreasing subsequence of length $n+1$.",
      why: "The Erdős–Szekeres theorem. The pigeonhole argument via the pair $(x_i,y_i)$ of longest increasing/decreasing subsequence lengths ending at index $i$ is a genuine idea, but is short to write up once seen.",
      steps: [
        "For each index $i$, let $x_i$ be the length of the longest increasing subsequence ending at $a_i$, and $y_i$ the length of the longest decreasing subsequence ending at $a_i$.",
        "If $i<j$ and $a_i<a_j$, any increasing subsequence ending at $a_i$ extends by $a_j$, so $x_i<x_j$. Likewise if $a_i>a_j$ then $y_i<y_j$. Since all values are distinct, one of these holds for every $i\\ne j$.",
        "Hence the map $i \\mapsto (x_i,y_i)$ is injective on $\\{1,\\dots,n^2+1\\}$.",
        "If no increasing or decreasing subsequence of length $n+1$ existed, every $x_i,y_i$ would lie in $\\{1,\\dots,n\\}$, giving only $n^2$ possible pairs for $n^2+1$ indices — contradicting injectivity by pigeonhole."
      ]
    },
    {
      id: "c10",
      category: "cmb",
      difficulty: "hard",
      stars: 3,
      rating: 7,
      confidence: "low",
      text: "Let $n&lt;m$ be positive integers. Let $a_{ij}$ be real numbers for $1\\le i\\le n$ and $1\\le j\\le m$. We say a sequence of real numbers $x_1,\\dots,x_m$ is <em>stable</em> if we can choose $n$ pairwise distinct integers $c_1,\\dots,c_n\\in\\{1,\\dots,m\\}$ such that $$a_{i,c_i}-x_{c_i}\\ge a_{ij}-x_j \\quad\\text{for all }1\\le i\\le n\\text{ and }1\\le j\\le m.$$ Prove that if two sequences $y=(y_1,\\dots,y_m)$ and $z=(z_1,\\dots,z_m)$ are stable, then the sequence $u$ defined by $u_j=\\min(y_j,z_j)$ is also stable.",
      why: "A closure phenomenon for stable assignment vectors. The natural proof is an alternating-path/exchange argument related to assignment markets.",
      steps: []
    },
    {
      id: "c11",
      category: "cmb",
      difficulty: "hard",
      stars: 3,
      rating: 7.5,
      confidence: "high",
      text: "Let $X$ be an $n$-element set, and let $A_1,A_2,\\dots,A_n$ be subsets of $X$ such that <ol><li>$|A_i|$ is odd for every $i$;</li><li>$|A_i\\cap A_j|$ is even whenever $i\\ne j$.</li></ol><br>An <em>assignment</em> is a choice of pairwise distinct elements $x_1,\\dots,x_n\\in X$ with $x_i\\in A_i$ for every $i$. Prove that the number of assignments is odd.",
      why: "The natural incidence matrix over $\\mathbb F_2$ satisfies $MM^T=I$. Hence $\\det M=1$, while the number of systems of distinct representatives is the permanent of $M$, which equals the determinant modulo $2$. This gives the oddness immediately and is much cleaner than the previous involution argument.",
      steps: [
        "Let $M=(m_{ij})$ be the $n\\times n$ incidence matrix of the sets $A_i$, considered over the field $\\mathbb F_2$, so $m_{ij}=1$ exactly when $x_j$ belongs to $A_i$.",
        "The diagonal entries of $MM^T$ are $|A_i|$ modulo $2$, hence equal to $1$. For $i\\ne j$, the $(i,j)$-entry is $|A_i\\cap A_j|$ modulo $2$, hence equal to $0$. Therefore $MM^T=I$.",
        "Thus $M$ is invertible over $\\mathbb F_2$ and $\\det M=1$.",
        "The number of assignments is the permanent of $M$. Modulo $2$, the sign of a permutation is irrelevant, so $\\operatorname{per}(M)\\equiv\\det(M)\\equiv 1\\pmod 2$.",
        "Hence the number of assignments is odd."
      ]
    },
    {
      id: "c12",
      category: "cmb",
      difficulty: "challenging",
      stars: 4,
      rating: 8,
      confidence: "medium",
      text: "Let $m\\ge3$ be odd. A school has $m$ students and $n\\ge m+2$ clubs; no two clubs have the same membership set. For two clubs, their <em>discord</em> is the number of students in exactly one of them. Let $d_{\\min}$ and $d_{\\max}$ be the minimum and maximum discords.<br><br>Prove that $$\\frac{d_{\\max}}{d_{\\min}}\\ge\\frac{m+3}{m-1},$$ and show that the bound is attainable for every odd $m\\ge3$.",
      why: "A sharp extremal statement for Hamming distances in a set system. The oddness of $m$ and the extra two clubs force a non-obvious gap between the smallest and largest distances.",
      steps: []
    },
    {
      id: "c13",
      category: "cmb",
      difficulty: "challenging",
      stars: 4,
      rating: 8,
      confidence: "high",
      text: "A society has $2n$ members. Certain pairs of members are acquainted, subject to the following rules: <ol><li>Every member is acquainted with an odd number of other members.</li><li>Every two distinct members have an even number of common acquaintances.</li></ol><br>A <em>complete introduction</em> is a partition of the $2n$ members into $n$ pairs of acquainted members.<br><br>Prove that the number of complete introductions is odd, and that every pair of acquainted members belongs to an odd number of complete introductions.",
      why: "A graph-theoretic parity theorem disguised as a natural pairing story. The hypotheses secretly say that the adjacency matrix satisfies $A^2=I$ over $\\mathbb F_2$. The determinant then counts perfect matchings modulo $2$, and a complementary-minor argument gives the stronger edge-by-edge assertion.",
      steps: [
        "Let $A$ be the adjacency matrix of the acquaintance graph, considered over $\\mathbb F_2$. Because every vertex has odd degree, the diagonal entries of $A^2$ are $1$. Because every two distinct vertices have an even number of common neighbors, the off-diagonal entries of $A^2$ are $0$. Hence $A^2=I$.",
        "Therefore $A$ is invertible and $\\det A=1$ in $\\mathbb F_2$.",
        "Since the graph has no loops, terms in the determinant expansion corresponding to permutations containing a cycle of length at least $3$ cancel in pairs modulo $2$. The surviving terms correspond exactly to products of disjoint transpositions, hence to perfect matchings. Thus $\\det A$ is the parity of the number of perfect matchings.",
        "Consequently the number of complete introductions is odd.",
        "Now fix an acquaintance $uv$. Complete introductions containing $uv$ are in bijection with perfect matchings of the graph obtained by deleting $u$ and $v$. Let $B$ be the corresponding principal submatrix of $A$.",
        "By Jacobi's complementary-minor identity applied over $\\mathbb F_2$, since $A^{-1}=A$, we have $$\\det B=\\det(A)\\det\\begin{pmatrix}0&1\\\\1&0\\end{pmatrix}=1.$$",
        "Applying the determinant/perfect-matching parity argument to the graph with $u,v$ deleted shows that it has an odd number of perfect matchings. Hence the acquaintance $uv$ belongs to an odd number of complete introductions."
      ]
    },
    {
      id: "c14",
      category: "cmb",
      difficulty: "challenging",
      stars: 4,
      rating: 8,
      confidence: "low",
      text: "There are $n$ piles, each with a token of value $1$. In each step, choose two piles with values $A$ and $B$ and merge them into a pile of value $A+B+\\min(A,B)$. Repeat $n-1$ times.<br><br>Prove that the maximum possible value of the final pile equals the number of odd entries in the first $n$ rows of Pascal's triangle, i.e. $\\binom yx$ with $0\\le x\\le y&lt;n$.",
      why: "The identity links an optimization over binary merge trees to Lucas-theorem parity in Pascal's triangle. Establishing the exact optimum is a genuinely nontrivial structural problem.",
      steps: []
    },
    // Geometry — 25 problems, easy to hard
    {
      id: "g1",
      category: "geo",
      difficulty: "easy",
      stars: 1,
      rating: 3,
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
      rating: 3.5,
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
      rating: 4.5,
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
      difficulty: "medium",
      stars: 2,
      rating: 5,
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
      difficulty: "medium",
      stars: 2,
      rating: 5.5,
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
      rating: 5.5,
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
      difficulty: "hard",
      stars: 3,
      rating: 6.5,
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
      difficulty: "hard",
      stars: 3,
      rating: 6.5,
      confidence: "medium",
      text: "Let $ABC$ be a scalene triangle with circumcircle $\\omega$, and let $M$ be the midpoint of $BC$. Let $\\psi$ be the circle with diameter $AM$. Let $X$ be an arbitrary point on $\\psi$ (distinct from $A$ and $M$). Let $\\phi$ be the circumcircle of triangle $XBC$, and let $Y$ be the second intersection of $\\phi$ and $\\psi$. Let $D$ and $E$ be the second intersections of the lines $AX$ and $AY$ with $\\omega$, respectively. Prove that the line $DE$ passes through a fixed point independent of the choice of $X$.",
      why: "A moving point on the circle with diameter AM, and DE through a fixed point. Radical axis / inversion in the circumcircle is the natural path; moderate length once the fixed point is guessed (midpoint of the arc or a diameter point).",
      steps: [
        "Set $B=(-1,0)$, $C=(1,0)$, $M=(0,0)$, $A=(u,v)$, with $u,v$ nonzero. Then $\\psi$ is $x^2+y^2-ux-vy=0$, while $\\omega$ is $x^2+y^2+wy-1=0$, where $w=(1-u^2-v^2)/v$.",
        "Any circle through $B$ and $C$ has equation $x^2+y^2+ky-1=0$. Its common chord with $\\psi$ is $ux+(v+k)y=1$. Hence every pair $X,Y=\\phi_k\\cap\\psi$ lies on the fixed line through $K=(1/u,0)$.",
        "Parameterize $X$ by the slope $t$ of $AX$: $X(t)=\\bigl((ut^2-vt)/(1+t^2),\\,(v-ut)/(1+t^2)\\bigr)$. The second intersection $D$ of $AX$ with $\\omega$ is $D(t)=\\bigl((ut^2-u-(2v+w)t)/(1+t^2),\\,(v-2ut-(v+w)t^2)/(1+t^2)\\bigr)$. The analogous point $E$ is $D(s)$, where $s$ is the parameter of $Y$.",
        "The condition $K$ lies on $XY$ is equivalent to $u(1-u^2)ts-v(1-u^2)(t+s)-u(v^2+1)=0$.",
        "Define $P=\\bigl((v^2+1)/(u(u^2+v^2)),\\,(u^2-1)/(v(u^2+v^2))\\bigr)$. A determinant calculation using $D(t),D(s)$, after clearing denominators, has as a factor $(s-t)(u^2-2u+v^2+1)(u^2+2u+v^2+1)\\bigl[u(u^2-1)st+v(1-u^2)(s+t)+u(v^2+1)\\bigr]$. The bracket is the negative of the condition above, so the determinant is zero.",
        "The rational parametrization omits at most one parameter value; the same determinant identity extends to that value by the projective (equivalently, limiting) interpretation. Thus $P$ lies on $DE$ for every admissible $X$. Hence $DE$ passes through the fixed point $P$."
      ]
    },
    {
      id: "g9",
      category: "geo",
      difficulty: "hard",
      stars: 3,
      rating: 7,
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
      difficulty: "hard",
      stars: 3,
      rating: 7,
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
      rating: 7,
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
      rating: 7.5,
      confidence: "medium",
      text: "Let $\\triangle ABC$ be scalene with $A$-excircle touching $BC$ at $D$. Let $M$ be the midpoint of the altitude from $A$. Line $MD$ meets the excircle again at $T$. Let $S$ be a point on line $MD$ such that $B, S, C, T$ are concyclic. Prove that $S$ lies on the perpendicular bisector of $BC$.",
      why: "A-excircle, midpoint of the altitude, then a concyclic point forced onto the perpendicular bisector of BC. A short synthetic path exists (symmetry across the altitude line) but it is easy to miss; otherwise a calculation. No complete write-up was checked.",
      steps: []
    },
    {
      id: "g13",
      category: "geo",
      difficulty: "hard",
      stars: 3,
      rating: 7.5,
      confidence: "medium",
      text: "Let $ABC$ be a scalene triangle with circumcircle $\\omega$ and circumcenter $O$. Let $I$ be the incenter of triangle $ABC$, and let the internal angle bisector of $\\angle BAC$ meet $\\omega$ again at $M$. Let $N$ be the point on $\\omega$ such that $MN$ is a diameter of $\\omega$. The line $NI$ meets $\\omega$ again at $P$. Let $J$ be the reflection of $I$ across the line $BC$. The circle passing through $I$, $J$, and $P$ meets $\\omega$ again at $Q$. Prove that the line $OI$ is the perpendicular bisector of the segment $AQ$.",
      why: "Incentre, arc midpoint, reflection of I across BC, then OI as perpendicular bisector of AQ. Several concyclicities in a standard incenter/circumcenter mix; the last step is the one that usually costs time. No complete write-up was checked.",
      steps: []
    },
    {
      id: "g14",
      category: "geo",
      difficulty: "hard",
      stars: 3,
      rating: 7.5,
      confidence: "low",
      text: "Let $ABCD$ be a convex cyclic quadrilateral with circumcenter $O$. Assume that no two opposite sides are parallel and that neither $AC$ nor $BD$ is a diameter of the circumcircle. Let $P$ be the intersection of $AC$ and $BD$. Let $M \\ne O$ be the second intersection of the circumcircles of triangles $AOC$ and $BOD$. Let $X$, $Y$ be the perpendicular projections of $M$ onto the lines $AB$, $CD$, respectively, and let $N$ be the midpoint of $PM$. Prove that $X$, $Y$, $N$ are collinear.",
      why: "Second intersection of (AOC) and (BOD), two projections and a midpoint collinear. The inverse-in-the-circumcircle picture (or a pedal line) is the key; once seen, the collinearity is a standard lemma rather than a G8-length chase.",
      steps: []
    },
    {
      id: "g15",
      category: "geo",
      difficulty: "hard",
      stars: 3,
      rating: 7.5,
      confidence: "high",
      text: "Let $P$ be a point on the circumcircle of an acute, scalene triangle $ABC$. Let $H_A$ be the orthocenter of triangle $PBC$, and let $A_1$ be the reflection of $H_A$ across the perpendicular bisector of $BC$. Define $B_1$ and $C_1$ analogously for triangles $PCA$ and $PAB$, respectively. Prove that $A_1$, $B_1$, and $C_1$ are collinear, and that the line containing them passes through the orthocenter $H$ of triangle $ABC$.",
      why: "A point on the circumcircle produces three orthocenters, each reflected across a perpendicular bisector, and the images must lie on one line through $H$. The orthocenter formula makes the line plausible; writing the reflections so that both claims fall out together is the work. No complete write-up was checked.",
      steps: []
    },
    {
      id: "g16",
      category: "geo",
      difficulty: "hard",
      stars: 3,
      rating: 7.5,
      confidence: "medium",
      text: "Let $ABC$ be a scalene triangle with incenter $I$. Let $P$ be an interior point such that $\\angle PBA=\\angle ICB$ and $\\angle PCA=\\angle IBA$. Let $B'=PB\\cap AI$ and $C'=PC\\cap AI$. Through $B'$ draw the line parallel to $AB$, meeting $BI$ at $X$; through $C'$ draw the line parallel to $AC$, meeting $CI$ at $Y$. Prove that the circumcircle of triangle $IXY$ and the circumcircle of triangle $BPX$ are tangent at $X$.",
      why: "The two angle conditions are the half-angles at $I$, so $P$ is cut out by two rays, and the parallels to $AB$ and $AC$ make similar triangles on the bisectors. Tangency of $(IXY)$ and $(BPX)$ at $X$ is a homothety along $BI$. The figure is small, but the comparison that identifies the common tangent is easy to miss. Checked on random scalene triangles; no contest write-up is recorded.",
      steps: []
    },
    {
      id: "g17",
      category: "geo",
      difficulty: "challenging",
      stars: 4,
      rating: 8,
      confidence: "low",
      text: "Let $\\triangle ABC$ be scalene with incenter $I$. The incircle touches $BC$ at $D$; let $AD$ meet the incircle again at $E$. Let $P$ and $Q$ be the intersections of the internal and external bisectors of $\\angle A$ with $BC$, and let the circumcircle of $\\triangle APQ$ and median $AM$ meet again at $N$. If $F$ lies on $AD$ with $AE = DF$, prove $A, F, I, N$ are concyclic.",
      why: "Many named points (incircle chord, internal/external bisectors, median). Controlling A, F, I, N from scratch needs a slick lemma or a long computation; easy to drown in the configuration. No complete write-up was checked.",
      steps: []
    },
    {
      id: "g18",
      category: "geo",
      difficulty: "challenging",
      stars: 4,
      rating: 8.5,
      confidence: "low",
      text: "Let $ABC$ be an acute scalene triangle with circumcircle $\\gamma$ and orthocenter $H$. Let $M$ be the midpoint of $BC$, and let $\\psi$ be the circle with diameter $AM$. Let $D$ be the point on $\\gamma$ diametrically opposite to $A$. A variable circle $\\phi$ passes through $B$ and $C$, intersecting $\\psi$ at two distinct points $X$ and $Y$, and assume points $D$ and $H$ are not on line $XY$. Let $\\omega_1$ be the circumcircle of triangle $DXY$, and let $\\omega_2$ be the circumcircle of triangle $HXY$. Prove that as the circle $\\phi$ varies, both circles $\\omega_1$ and $\\omega_2$ pass through fixed points independent of $\\phi$ (other than $D$ and $H$, respectively).",
      why: "A variable circle through B and C, two derived circles each forced through a hidden fixed point. Identifying those points (and proving they stay put) is a genuine G7–G8 step, not a one-lemma chase. No complete write-up was checked.",
      steps: []
    },
    {
      id: "g19",
      category: "geo",
      difficulty: "challenging",
      stars: 4,
      rating: 8.5,
      confidence: "low",
      text: "Let $ABC$ be an acute, scalene triangle with circumcenter $O$. Let $K$ be the intersection of line $AO$ with side $BC$. Let $L$ be the unique point on line $AO$, distinct from $A$, such that $\\angle ALB = \\angle CLA$. The line through $L$ perpendicular to $AO$ intersects line $BC$ at $M$. Let $N$ be the intersection of the tangents to the circumcircle of $\\triangle ABC$ at $B$ and $C$.<br><br> Prove that $OM \\perp KN$.",
      why: "A non-standard point L on AO defined by equal angles, then a perpendicularity. Typical of harder ISL geometry: inversion or a careful trigonometric/coordinate attack. No complete write-up was checked.",
      steps: []
    },
    {
      id: "g20",
      category: "geo",
      difficulty: "challenging",
      stars: 4,
      rating: 8.5,
      confidence: "low",
      text: "Let $ABC$ be a scalene triangle with circumcircle $\\omega$. The tangent at $A$ meets $BC$ at $P$, and let $\\psi$ be the circle centered at $P$ through $A$. For a point $X$ on $\\psi$, distinct from $A$ and not on $\\omega$ or $BC$, let $Y \\ne X$ be the second intersection of $\\psi$ and the circumcircle of $XBC$. Let $D \\ne A$ and $E \\ne A$ be the second intersections of $AX$ and $AY$ with $\\omega$. If $M$ is the projection of $P$ onto $DE$, determine the locus of $M$ as $X$ varies.",
      why: "A locus as X moves on the circle centred at the tangency-pole P. The answer has to be guessed (a line or a circle through fixed points) and then proved on a tangled configuration. No complete write-up was checked.",
      steps: []
    },
    {
      id: "g21",
      category: "geo",
      difficulty: "challenging",
      stars: 4,
      rating: 8.5,
      confidence: "low",
      text: "Let $ABCD$ be a convex quadrilateral with $E = AC \\cap BD$, $P = AD \\cap BC$ and $Q = AB \\cap CD$. Erect equilateral triangles $ECX$ and $EDY$ so that $X$ and $B$ lie on the same side of $AC$, and $Y$ and $A$ lie on the same side of $BD$. Let $U$ and $V$ be the points where $AX$ and $BY$ meet the bisectors of $\\angle AEX$ and $\\angle BEY$. Prove that $EU = EV$ if and only if $PE \\perp QE$.",
      why: "Two equilateral triangles on the diagonal triangle of a complete quadrilateral, then an equality of segments cut by angle bisectors, equivalent to a perpendicularity. A $60^\\circ$ rotation is the natural start, but both directions of the equivalence have to be carried through the same configuration. No complete write-up was checked.",
      steps: []
    },
    {
      id: "g22",
      category: "geo",
      difficulty: "challenging",
      stars: 4,
      rating: 8.5,
      confidence: "low",
      text: "Let $ABC$ be a scalene triangle with orthocenter $H$, incenter $I$ and circumcenter $O$. The incircle touches sides $BC$, $CA$, $AB$ at $D$, $E$, $F$ respectively. Let $U$, $V$, $W$ be the reflections of $C$, $A$, $B$ in the points $D$, $E$, $F$ respectively, and let $U'$, $V'$, $W'$ be the reflections of $B$, $C$, $A$ in the points $D$, $E$, $F$ respectively. Prove that the area of triangle $HIO$ equals the area of triangle $ABC$ if and only if the points $U$, $V$, $W$ are collinear or the points $U'$, $V'$, $W'$ are collinear.",
      why: "A characterization linking the area of the orthocenter–incenter–circumcenter triangle to one of two collinearities of points reflected in the contact points. Each side is a standard computation once set up (Menelaus on the sides, a formula for $[HIO]$), but matching them, including the alternative, is long. No complete write-up was checked.",
      steps: []
    },
    {
      id: "g23",
      category: "geo",
      difficulty: "challenging",
      stars: 4,
      rating: 8.5,
      confidence: "medium",
      text: "Let $\\Gamma$ be a circle and $S$ a point outside $\\Gamma$. Three distinct lines through $S$ meet $\\Gamma$ at $A,A'$, at $B,B'$, and at $C,C'$. Let $U$ be a point where a tangent from $S$ touches $\\Gamma$. Let $P\\ne S$ be the second intersection of the circumcircle of triangle $SAB$ and the circumcircle of triangle $SA'B'$, and let $R\\ne S$ be the second intersection of the circumcircle of triangle $SC'A$ and the circumcircle of triangle $SCA'$. Prove that the circumcircle of triangle $B'PU$ and the circumcircle of triangle $CRU$ are tangent at $U$.",
      why: "Three secants from an external point, then two pairs of circles through $S$, and a tangency at the point of contact $U$. Inversion centered at $S$, in the circle through $U$, swaps each secant pair and turns the circles through $S$ into lines; the tangency survives as a statement in that diagram. Choosing the inversion is the step, and the inverted figure is still a real argument. Checked on random secants; no contest write-up is recorded.",
      steps: []
    },
    {
      id: "g24",
      category: "geo",
      difficulty: "challenging",
      stars: 4,
      rating: 9,
      confidence: "low",
      text: "Let $ABCD$ be a convex quadrilateral such that $\\angle B = \\angle A + \\angle C$. The internal angle bisector of $\\angle D$ intersects side $BC$ at point $E$ such that $\\angle AED = 90^\\circ$. Let $H$ be the foot of the perpendicular from $E$ to line $AD$. Let $\\Omega$ be the circumcircle of triangle $CDH$ and $\\Gamma$ be the circumcircle of triangle $ABE$. Suppose $\\Omega$ and $\\Gamma$ intersect at two distinct points, and let the tangents from $C$ to $\\Gamma$ touch the circle at $X$ and $Y$. Prove that line $BC$, line $XY$, and the line passing through the two intersection points of $\\Omega$ and $\\Gamma$ are concurrent.",
      why: "An angle condition hiding a cyclic or harmonic structure, then concurrency of a side, a polar, and a radical axis. Many circles; easy to lose the special hypothesis. No complete write-up was checked.",
      steps: []
    },
    {
      id: "g25",
      category: "geo",
      difficulty: "challenging",
      stars: 4,
      rating: 9,
      confidence: "low",
      text: "Let $P$ be a set of $n \\ge 6$ points on a circle with no three connecting chords concurrent in the interior. Let $S$ be the set of all interior chord-intersection points. Find, in terms of $n$, the exact number of lines containing at least three points of $S$ but no point of $P$.",
      why: "Exact count of lines through at least three interior chord-crossings and no vertex. Needs a Pascal-line classification, a proof that nothing else occurs, then the count in n. A genuine G8-type enumerative geometry problem. No complete write-up was checked.",
      steps: []
    },
    // Number Theory — 14 problems, easy to hard
    {
      id: "n1",
      category: "nt",
      difficulty: "easy",
      stars: 1,
      rating: 3.5,
      confidence: "high",
      text: "Let $G$ be the infinite graph with vertex set $\\mathbb{Z}_{>0}$ where distinct $a,b$ are adjacent iff $\\gcd(a,b)=1$ and $$\\frac{\\operatorname{lcm}(a,b)}{\\gcd(a,b)}>a+b.$$ For $n>2$, let $G_n$ be the subgraph induced on $\\{1,\\dots,n\\}$. Prove that the clique number of $G_n$ equals exactly the number of primes at most $n$.",
      why: "With pairwise coprimality added, the upper bound is a prime-divisor injection and the lower bound is the clique formed by the primes at most $n$.",
      steps: [
        "If $a,b$ are adjacent, $\\gcd(a,b)=1$. Therefore every clique consists of pairwise coprime integers; $1$ cannot belong to a clique of size greater than one.",
        "Choose one prime divisor of each clique vertex. Pairwise coprimality makes these primes distinct, and each is at most $n$. Hence every clique has size at most $\\pi(n)$.",
        "Conversely, the primes $p\\le n$ form a clique: they are pairwise coprime, and for $p\\lt q$, $\\operatorname{lcm}(p,q)/\\gcd(p,q)=pq>p+q$ because $(p-1)(q-1)>1$.",
        "Therefore the clique number of $G_n$ is exactly $\\pi(n)$."
      ]
    },
    {
      id: "n2",
      category: "nt",
      difficulty: "medium",
      stars: 2,
      rating: 4,
      confidence: "high",
      text: "Let $\\mathcal{F}$ be the set of all bijections $f\\colon \\mathbb{N} \\to \\mathbb{N}$ satisfying $f(ab) = f(a)f(b)$ for all $a, b \\in \\mathbb{N}$. Define $g(n) = \\min_{f \\in \\mathcal{F}} f(n)$ for each positive integer $n$.<br><br> Prove that $g(g(n)) = g(n)$ for all positive integers $n$.",
      why: "Multiplicative bijections of ℕ are permutations of the primes. The minimising g is then a rearrangement, and g ∘ g = g is a short structural observation. Easy for a strong contestant.",
      steps: [
        "Every multiplicative bijection $f$ of $\\mathbb{N}$ fixes $1$ and maps primes to primes. Thus $f$ is exactly a permutation of the primes, extended multiplicatively.",
        "For $n=\\prod p_i^{e_i}$, the minimum $f(n)$ is obtained by using the $k=\\omega(n)$ smallest primes and assigning larger exponents to smaller primes.",
        "Hence $g(n)=2^{e_1}3^{e_2}\\cdots p_k^{e_k}$, where $e_1\\ge e_2\\ge\\cdots\\ge e_k$ are the exponents sorted in descending order; $g(1)=1$.",
        "The exponents of $g(n)$ are already in decreasing order on the increasing primes, so applying the same minimisation recipe changes nothing. Therefore $g(g(n))=g(n)$."
      ]
    },
    {
      id: "n3",
      category: "nt",
      difficulty: "medium",
      stars: 2,
      rating: 5,
      confidence: "high",
      text: "Find all pairs of positive integers $(x, y)$ satisfying $$x^y - y^x = x + y.$$",
      why: "Exponential Diophantine equation x^y − y^x = x + y. Growth bounds kill large values, but the remaining small-case analysis (including x = y, 1, 2) is fiddly enough that a strong contestant can still lose time. Not an N1-style one-liner.",
      steps: [
        "The right side is positive, so $x^y>y^x$. Thus $x=y$ is impossible. The cases $x=1$ or $y=1$ give no solution directly.",
        "If $y=2\\lt x$, positivity requires $x^2>2^x$. For $x\\ge 4$, $x^2\\le 2^x$, while $x=3$ gives $9-8=1$ not equal to $5$. Hence there is no solution with $y=2$.",
        "If $x=2\\lt y$, the equation is $2^y-y^2=y+2$. Values $y=3,4$ fail, $y=5$ works. For $y\\ge 5$, $F(y)=2^y-y^2-y-2$ has $F(y+1)-F(y)=2^y-2y-2>0$, so $y=5$ is unique.",
        "For $3\\le x\\lt y$, the function $x^y/y^x$ increases with real $y\\ge x+1$ because the derivative of its logarithm is $\\ln x-x/y>\\ln 3-1>0$. At $y=x+1$, for $x=3$ the difference is $17>7$; for $x\\ge 4$, $(1+1/x)^x\\lt e\\lt 3$, so $x^{x+1}-(x+1)^x>x^x(x-3)\\ge 16>2x+1$. No solutions occur here.",
        "If $x>y\\ge 3$, $\\ln t/t$ is decreasing on $[3,\\infty)$, so $x^y\\lt y^x$, contradicting $x^y>y^x$. Therefore the unique solution is $(2,5)$."
      ]
    },
    {
      id: "n4",
      category: "nt",
      difficulty: "medium",
      stars: 2,
      rating: 5,
      confidence: "high",
      text: "Determine all positive integers $n$ such that $n \\mid 2^n - 1$.",
      why: "The minimal-prime-factor argument — the order of $2$ modulo the smallest prime divisor of $n$ must divide $\\gcd(n,p-1)=1$ — is a standard but essential number-theory trick, short once found.",
      steps: [
        "$n=1$ works trivially. Suppose $n>1$ satisfies $n\\mid 2^n-1$; let $p$ be the smallest prime dividing $n$. Note $p$ is odd, since $2^n-1$ is odd.",
        "Let $d = \\operatorname{ord}_p(2)$, the multiplicative order of $2$ mod $p$. Since $p\\mid n \\mid 2^n-1$, we get $2^n\\equiv 1 \\pmod p$, so $d \\mid n$. Also $d \\mid p-1$ by Fermat's little theorem.",
        "So $d \\mid \\gcd(n,p-1)$. Any prime factor $q$ of $\\gcd(n,p-1)$ divides $n$ and is at most $p-1<p$, contradicting that $p$ is the smallest prime factor of $n$ — unless $\\gcd(n,p-1)=1$.",
        "Hence $d=1$, i.e. $2\\equiv 1\\pmod p$, impossible for a prime $p$. So no $n>1$ works, and $n=1$ is the only solution."
      ]
    },
    {
      id: "n5",
      category: "nt",
      difficulty: "hard",
      stars: 3,
      rating: 6,
      confidence: "high",
      text: "A lattice point $P$ is <em>visible from the origin</em> $O(0,0)$ if segment $OP$ contains no other lattice points.<br><br> Prove that for every positive integer $k$, there exists a $(2k+1)\\times(2k+1)$ square of lattice points whose center is visible from the origin, while all other $(2k+1)^2 - 1$ lattice points in the square are not visible from the origin.",
      why: "CRT construction with distinct primes to hide all non-centre lattice points of a (2k+1)-square, plus one extra condition so the centre itself stays visible. Standard olympiad CRT; the centre-visibility detail is the only extra twist.",
      steps: [
        "A lattice point $(x,y)$ is visible from the origin exactly when $\\gcd(x,y)=1$. We therefore seek a centre $(a,b)$ with $\\gcd(a,b)=1$ while every other point $(a+i,b+j)$, $\\lvert i\\rvert,\\lvert j\\rvert\\le k$, has a common prime divisor.",
        "For each nonzero offset $(i,j)$, choose a distinct prime $p_{ij}>k$. By the Chinese remainder theorem choose $a,b$ with $a\\equiv -i\\pmod{p_{ij}}$ and $b\\equiv -j\\pmod{p_{ij}}$ for every offset. Thus every non-centre point is invisible.",
        "Let $P$ be the product of all $p_{ij}$ and write $a=a_0+Pm$. No $p_{ij}$ divides both $a_0$ and $b$, for otherwise $p_{ij}$ would divide both $i$ and $j$, impossible because $p_{ij}>k$ and $(i,j)$ is nonzero.",
        "For each prime $q$ dividing $b$ with $q$ not dividing $P$, only one residue class of $m$ modulo $q$ makes $q$ divide $a$. Choose a different residue for every such $q$ and combine them by CRT. Then $\\gcd(a,b)=1$, so the centre is visible."
      ]
    },
    {
      id: "n6",
      category: "nt",
      difficulty: "hard",
      stars: 3,
      rating: 6,
      confidence: "high",
      text: "Let $F_k = 2^{2^k}+1$ denote the $k$-th Fermat number. Prove that $F_m$ and $F_n$ are coprime whenever $m \\ne n$.",
      why: "Requires first discovering and proving the telescoping identity $F_0F_1\\cdots F_{n-1}=F_n-2$ by induction, then extracting coprimality from it — two separate steps, each easy once seen, but the identity is not obvious in advance.",
      steps: [
        "Prove by induction that $F_0 F_1 \\cdots F_{n-1} = F_n - 2$ for all $n\\ge 1$. Base case $n=1$: $F_0 = 3 = F_1-2 = 5-2$. ✓",
        "Inductive step: if $F_0\\cdots F_{n-1}=F_n-2$, then $F_0\\cdots F_n = (F_n-2)F_n = F_n^2-2F_n = (2^{2^n}+1)(2^{2^n}-1) = 2^{2^{n+1}}-1 = F_{n+1}-2$.",
        "Now take $m<n$. Since $F_m$ is one of the factors $F_0,\\dots,F_{n-1}$, we have $F_m \\mid F_0\\cdots F_{n-1} = F_n-2$.",
        "Let $d=\\gcd(F_m,F_n)$. Then $d\\mid F_m$, so $d \\mid F_n - 2$; also $d\\mid F_n$, so $d\\mid 2$. But every $F_k$ is odd, so $d$ is odd, forcing $d=1$."
      ]
    },
    {
      id: "n7",
      category: "nt",
      difficulty: "hard",
      stars: 3,
      rating: 6.5,
      confidence: "medium",
      text: "Find all quadruples of positive integers $(a, b, c, d)$ such that $$a^2 + b^2 + c^2 + d^2 \\;\\mid\\; (a + b + c + d)^2.$$",
      why: "a²+b²+c²+d² divides (a+b+c+d)². Cauchy–Schwarz bounds the ratio, but finishing the classification means solving several Diophantine families, not a single bounded check. Previously underrated relative to the length of a complete list.",
      steps: [
        "Let $S=a+b+c+d$ and $Q=a^2+b^2+c^2+d^2$. Cauchy–Schwarz gives $S^2\\le 4Q$, while positivity gives $S^2>Q$. Since $Q$ divides $S^2$, the quotient $k=S^2/Q$ lies in $\\{2,3,4\\}$.",
        "Define $x=a+b-c-d$, $y=a-b+c-d$, $z=a-b-c+d$. The Hadamard identity is $S^2+x^2+y^2+z^2=4Q$.",
        "If $k=4$, then $x=y=z=0$, hence $a=b=c=d$. If $k=2$, then $x^2+y^2+z^2=S^2$. If $k=3$, then $3(x^2+y^2+z^2)=S^2$.",
        "Conversely, recover $a=(S+x+y+z)/4$, $b=(S+x-y-z)/4$, $c=(S-x+y-z)/4$, $d=(S-x-y+z)/4$. Thus the three cases above, subject exactly to these four quantities being positive integers, give every solution."
      ]
    },
    {
      id: "n8",
      category: "nt",
      difficulty: "hard",
      stars: 3,
      rating: 7,
      confidence: "low",
      text: "Let $n \\ge 3$ be an integer. A sequence $a_1, a_2, \\dots, a_n$ of positive integers satisfies $$a_k = \\frac{[a_{k-1}, a_{k-2}]}{(a_{k-1}, a_{k-2})} \\quad \\text{for all } 3 \\le k \\le n$$ where $[x,y]$ and $(x,y)$ denote lcm and gcd. Prove that if the sequence is strictly decreasing, then $$a_1 \\ge \\frac{2^{n-2}\\,a_{n-1}}{a_n}.$$",
      why: "Iterated lcm/gcd under a strict decrease. The size bound is plausible by looking at 2-adic valuations, but a complete induction from scratch is easy to get wrong. No complete write-up was checked.",
      steps: []
    },
    {
      id: "n9",
      category: "nt",
      difficulty: "hard",
      stars: 3,
      rating: 7.5,
      confidence: "low",
      text: "Determine all infinite strictly increasing sequences of positive integers $a_1 &lt; a_2 &lt; a_3 &lt; \\dots$ such that <ol><li>$a_n \\mid a_{n+1}$ for all $n \\ge 1$;</li><li>$\\varphi(a_{n+1}) = a_n + \\varphi(a_n)$ for all $n \\ge 1$.</li></ol><br><em>Here $\\varphi$ denotes Euler's totient function.</em>",
      why: "Infinite divisibility chains with a totient recurrence. Small searches produce several families, so a full classification has to control every prime and every jump. Typical hard ISL N6–N7.",
      steps: []
    },
    {
      id: "n10",
      category: "nt",
      difficulty: "challenging",
      stars: 4,
      rating: 8,
      confidence: "low",
      text: "Determine all quadruples of positive integers $(a, b, x, y)$ satisfying $$x^2 + y^2 + 1 = (a^4 + b^4 + 1)(xy + 1).$$",
      why: "Quadratic Diophantine in x, y with parameter a⁴+b⁴+1. Vieta jumping plus modular/size constraints. A brute-force search finds no small nontrivial solutions, which does not shorten the proof. No complete write-up was checked.",
      steps: []
    },
    {
      id: "n11",
      category: "nt",
      difficulty: "challenging",
      stars: 4,
      rating: 8.5,
      confidence: "low",
      text: "Two lattice points are called <em>mutually visible</em> if the line segment connecting them contains no other lattice points. Determine all positive integers $k$ for which there exists a triangle with lattice vertices whose three vertices are pairwise mutually visible, containing exactly $k$ interior lattice points, such that no interior lattice point is mutually visible to all three vertices.",
      why: "Lattice triangles with pairwise visible vertices, exact interior count k, and no interior point visible from all three vertices. Pick plus gcd conditions; the obstruction and the construction for every admissible k are the hard parts. No complete write-up was checked.",
      steps: []
    },
    {
      id: "n12",
      category: "nt",
      difficulty: "challenging",
      stars: 4,
      rating: 8.5,
      confidence: "low",
      text: "Let $n \\ge 2$ be an integer. A <em>gcd triangle</em> of order $n$ is a triangular array of positive integers $(a_{i,j})_{1 \\le j \\le i \\le n}$ satisfying $a_{i,j} = \\gcd(a_{i+1,j}, a_{i+1,j+1})$ for $1 \\le j \\le i &lt; n$ such that all $\\binom{n+1}{2}$ entries in the array are pairwise distinct. Let $L = \\operatorname{lcm}(a_{n,1}, a_{n,2}, \\dots, a_{n,n})$. Determine the minimum possible number of prime factors of $L$ (counted with multiplicity), and find all gcd triangles for which this minimum is attained.",
      why: "Gcd triangles: the bottom-row LCM’s total exponent is governed by an interval / prime-exponent packing rather than a heavy ad-hoc construction. Still a genuine characterisation problem, but cleaner than a “wild combinatorial NT” reading suggested. No complete write-up was checked.",
      steps: []
    },
    {
      id: "n13",
      category: "nt",
      difficulty: "challenging",
      stars: 4,
      rating: 9,
      confidence: "low",
      text: "Determine all positive integers $m$ with the property: there exists a positive integer $n$ such that $x^2 + my^2 = n$ is solvable in rationals, but for every positive integer $k < m$ the equation $x^2 + ky^2 = n$ is not solvable in rationals.",
      why: "Which m arise as the least denominator of a rational point on x² + my² = n. This is quadratic-form / Hilbert-symbol territory; a strong contestant can start it, but a complete list of m is deep. No complete write-up was checked.",
      steps: []
    },
    {
      id: "n14",
      category: "nt",
      difficulty: "challenging",
      stars: 4,
      rating: 9,
      confidence: "low",
      text: "A sequence is defined by $a_1 = 2$, $a_2 = 4$, and $$a_{n+2} = \\binom{a_{n+1}}{a_n} \\quad \\text{for all } n \\ge 1.$$ Prove that for every prime $p$, there exists a positive integer $n$ such that $p \\mid a_n$.",
      why: "Iterated binomial coefficients a_{n+2} = C(a_{n+1}, a_n) must hit every prime. Lucas/Kummer control of the 2-adic and odd-prime valuations is delicate; a contestant can stall for a long time. No complete write-up was checked.",
      steps: []
    }
  ]
};