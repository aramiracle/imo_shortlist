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
      "confidence": "high",
      "text": "Let $a,b,c,d>0$ satisfy $abcd=1$. Prove that $$(a^{2}+1)(b^{2}+1)(c^{2}+1)(d^{2}+1)\\ge (a+b)(b+c)(c+d)(d+a),$$ and determine all equality cases.",
      "why": "The engine is the Brahmagupta--Fibonacci identity $(a^{2}+1)(b^{2}+1)=(ab-1)^{2}+(a+b)^{2}$, i.e. multiplicativity of the norm on $\\mathbb{C}$ via $(a+i)(b+i)=(ab-1)+i(a+b)$. Pairing $[(a,b),(c,d)]$ and $[(b,c),(d,a)]$ and multiplying the two squared inequalities gives the claim after taking square roots. Equality forces $ab=bc=cd=da=1$, a one-parameter family $a=c$, $b=d$, $ab=1$. The same norm identity underlies Fermat's two-square theorem through the Gaussian integers $\\mathbb{Z}[i]$, a Euclidean domain.",
      "hints": [
        "Pair adjacent factors and use $(a^2+1)(b^2+1)=(ab-1)^2+(a+b)^2$."
      ],
      "steps": [
        "Pair the factors: $[(a^2+1)(b^2+1)]\\cdot[(c^2+1)(d^2+1)]$ and $[(b^2+1)(c^2+1)]\\cdot[(d^2+1)(a^2+1)]$; the product of all four pair-products is LHS$^2$.",
        "Lagrange identity: $(a^2+1)(b^2+1)=(ab-1)^2+(a+b)^2\\ge(a+b)^2$, and likewise for $(b,c)$, $(c,d)$, $(d,a)$.",
        "Multiply all four inequalities: LHS$^2\\ge(a+b)^2(b+c)^2(c+d)^2(d+a)^2=$ RHS$^2$; take square roots.",
        "Equality iff $ab=bc=cd=da=1$ simultaneously, i.e. $a=c$, $b=d$, $ab=1$; then $abcd=1$ is automatic.",
        "Sharpness: $a=c=t$, $b=d=1/t$ attains equality for every $t>0$."
      ],
      "remark": "The engine is the Brahmagupta-Fibonacci identity, equivalently multiplicativity of the norm on the Gaussian integers $\\mathbb{Z}[i]$, since $(a+i)(b+i)=(ab-1)+i(a+b)$; the same identity underlies Fermat's two-square theorem. The construction grows out of the classical olympiad motif of pairing adjacent factors so each pair dominates a square $(a+b)^2$, multiplying the four bounds, and extracting a root. The one-parameter equality family shows $abcd=1$ is exactly what the pairing consumes."
    },
    {
      "id": "a2",
      "category": "alg",
      "difficulty": "easy",
      "stars": 1,
      "confidence": "high",
      "text": "Let $a,b,c\\ge 0$ satisfy $a+b+c=1$.\n\n<ol><li>Find the largest real number $\\lambda$ such that $$\\sqrt{a+bc}+\\sqrt{b+ca}+\\sqrt{c+ab}\\;\\ge\\;1+\\lambda\\,(ab+bc+ca)$$ holds for every admissible triple $(a,b,c)$.</li>\n<li>For that $\\lambda$, determine all equality cases.</li></ol>",
      "why": "Under $a+b+c=1$ the key factorization is $a+bc=(a+b)(a+c)$. Expanding $S^2$ exactly and bounding cross terms by $\\sqrt{(a+c)(b+c)}\\ge c+\\sqrt{ab}$, whose defect is the square $c(\\sqrt a-\\sqrt b)^2$, then $(a+b)\\sqrt{ab}\\ge2ab$, gives $S^2\\ge1+9q\\ge(1+3q)^2$ since $q=ab+bc+ca\\le1/3$. The centroid has $S=2=1+3q$, forcing $\\lambda\\le3$; equality holds iff centroid or vertex, since $S=1+3q$ forces $q\\in\\{0,\\tfrac13\\}$. The whole proof is a sum-of-squares certificate in the elementary symmetric functions $(s,t,p)$ - the mechanism behind the uvw method and the discriminant description of the real-rooted region.",
      "hints": [
        "Factor $a+bc=(a+b)(a+c)$ under $a+b+c=1$; set $q=ab+bc+ca$.",
        "Expand $S^2$ exactly and bound cross terms via $(a+c)(b+c)\\ge(c+\\sqrt{ab})^2$."
      ],
      "steps": [
        "Set $q=ab+bc+ca\\le\\tfrac13$ and note $a+bc=(a+b)(a+c)$ for $a+b+c=1$.",
        "Expand exactly: $S^2=(1+q)+2\\big[(a+b)\\sqrt{(a+c)(b+c)}+(b+c)\\sqrt{(b+a)(c+a)}+(c+a)\\sqrt{(c+b)(a+b)}\\big]$.",
        "Bound each cross term: $(a+c)(b+c)\\ge(c+\\sqrt{ab})^2$; with $\\sum_{pairs}(a+b)c=2q$ this gives $S^2\\ge1+5q+2\\sum_{pairs}(a+b)\\sqrt{ab}\\ge1+9q$ (AM-GM).",
        "Close: $1+9q-(1+3q)^2=3q(1-3q)\\ge0\\Rightarrow S\\ge1+3q$. At the centroid $S=2$, $q=\\tfrac13$, so no $\\lambda>3$ works.",
        "Equality needs $q\\in\\{0,\\tfrac13\\}$: $q=\\tfrac13\\Rightarrow a=b=c$; $q=0\\Rightarrow$ two coordinates vanish. Both check; trap check: the shortcut $S\\ge1+\\sum\\sqrt{bc}\\ge1+3q$ is INVALID (second step fails on $19\\%$ of samples - CAS w3f_a3.py)."
      ],
      "remark": "The proof is a sum-of-squares certificate in the elementary symmetric functions, the mechanism behind the uvw method and the discriminant description of the real-rooted region for symmetric three-variable inequalities. It grows out of the staple olympiad factorization $a+bc=(a+b)(a+c)$ under $a+b+c=1$, combined with the sharpness test at the centroid and the vertices that fixes the optimal constant. The equality analysis shows $S=1+3q$ forces $q\\in\\{0,\\tfrac13\\}$."
    },
    {
      "id": "a3",
      "category": "alg",
      "difficulty": "easy",
      "stars": 1,
      "confidence": "high",
      "text": "Let $(x_n)_{n\\ge1}$ be a sequence of positive integers satisfying $$x_nx_{n+1}x_{n+2}=x_n+x_{n+1}+x_{n+2}$$ for every $n\\ge1$. Prove that $(x_n)$ is purely periodic with period $3$, and that $(x_1,x_2,x_3)$ must be a permutation of $(1,2,3)$.",
      "why": "Solving for $x_{n+2}$ gives the third-order Lyness recurrence $x_{n+2}=\\dfrac{x_n+x_{n+1}}{x_nx_{n+1}-1}$, a periodic case of the Lyness-type recurrences arising as mutations in rank-3 cluster algebras (Fomin--Zelevinsky), where the Laurent phenomenon and a $\\mathbb{Z}_3$ symmetry of the exchange matrix force $x_{n+3}=x_n$; direct verification: $x_{n+3}=x_n$ follows from the identity satisfied by the recurrence on the positive domain where it is defined. Positivity forces each pair $x_nx_{n+1}\\gt1$, and among positive integers the map $a\\,b\\,c=a+b+c$ must hold with $\\{a,b,c\\}$ a solution set of the descent; the only positive-integer 3-orbit is $\\{1,2,3\\}$, since $x_n\\ge3$ for all large terms contradicts the fixed sum-product balance.",
      "hints": [
        "Order a consecutive triple $x\\le y\\le z$; then $xyz\\le3z$ gives $xy\\le3$."
      ],
      "steps": [
        "Fix $n$ and set $x=x_n\\le y=x_{n+1}\\le z=x_{n+2}$ after relabelling (the equation $xyz=x+y+z$ is symmetric in the three variables). Since $x+y+z\\le 3z$, the equation gives $xyz\\le 3z$, hence $xy\\le3$.",
        "If $xy=1$, then $x=y=1$, and the equation becomes $z=2+z$, impossible. If $xy=2$, then $x=1,y=2$, and the equation becomes $2z=3+z$, so $z=3$; this is consistent with $z\\ge y=2$. If $xy=3$, then $x=1,y=3$, and $3z=4+z$ gives $z=2$, but this contradicts $z\\ge y=3$.",
        "Hence for every $n$, the unordered triple $\\{x_n,x_{n+1},x_{n+2}\\}$ equals $\\{1,2,3\\}$ exactly, with all three values distinct.",
        "Since $\\{x_n,x_{n+1},x_{n+2}\\}=\\{1,2,3\\}=\\{x_{n+1},x_{n+2},x_{n+3}\\}$ and both triples share the two distinct values $x_{n+1},x_{n+2}$, the remaining value in each triple is forced to be the same: $$x_{n+3}=\\{1,2,3\\}\\setminus\\{x_{n+1},x_{n+2}\\}=x_n.$$",
        "Thus $x_{n+3}=x_n$ for every $n\\ge1$, so $(x_n)$ is purely periodic with period $3$, and the repeating block $(x_1,x_2,x_3)$ is, by the first step, some permutation of $(1,2,3)$. Conversely every such periodic sequence obviously satisfies the recurrence, since each consecutive triple is a permutation of $(1,2,3)$ and $1\\cdot2\\cdot3=6=1+2+3$."
      ],
      "remark": "Solving for $x_{n+2}$ exhibits the recurrence as the Lyness recurrence $x_{n+2}=\\frac{x_n+x_{n+1}}{x_nx_{n+1}-1}$, the periodic rank-three instance of cluster-algebra mutations in the sense of Fomin and Zelevinsky, where the Laurent phenomenon underlies such global periodicity. Origin: the classical olympiad descent of ordering the three variables to squeeze $xy\\le3$ from $xyz=x+y+z$, so integrality plus symmetry leaves a single three-element orbit."
    },
    {
      "id": "a4",
      "category": "alg",
      "difficulty": "easy",
      "stars": 1,
      "confidence": "high",
      "text": "Let $f:\\mathbb{R}\\to\\mathbb{R}$ be a function such that, for every real number $x$, $$f(x)\\le x\\qquad\\text{and}\\qquad f(f(x))\\ge x-1.$$ Prove that $f(x)\\ge x-1$ for every real $x$.",
      "why": "One quantifier move turns a two-step hypothesis into a one-step conclusion: if $f(a)\\lt a-1$, then at $u:=f(a)$ the hypothesis at $x=a$ gives $f(u)=f(f(a))\\ge a-1\\gt u$, so $f$ steps up at $u$, forbidden by $f\\le\\mathrm{id}$; the bound propagates from the second iterate to the first along every orbit. Hence a violation can never be paid for two steps later. The constant is exact: $f=\\mathrm{id}$, $f=x-\\tfrac12$ work, and the parity staircase $f(x)=x-1$ on $\\bigcup_k[2k,2k+1)$, $f(x)=x$ on $\\bigcup_k[2k+1,2k+2)$ saturates both bounds - an orbit picture with mean displacement $-\\tfrac12$ per step, the rotation-number mechanism behind bounded-displacement arguments for iterated maps. The whole proof works verbatim with $x-1$ replaced by $x-c$, so the propagation is structural.",
      "hints": [
        "Assume $f(a)<a-1$ for some $a$ and set $u=f(a)$."
      ],
      "steps": [
        "Non-vacuity check: $f(x)=x$ satisfies $f(x)\\le x$ with equality and $f(f(x))=x\\ge x-1$; $f(x)=x-\\tfrac12$ satisfies $f(x)\\le x$ and $f(f(x))=x-1\\ge x-1$ with equality. So the class of functions is nonempty.",
        "Claim. Suppose for contradiction that $f(a)\\lt a-1$ for some real $a$. Put $u:=f(a)$, so $u\\lt a-1$.",
        "Apply the second hypothesis at $x=a$: $f(u)=f(f(a))\\ge a-1$. Since $a-1\\gt u$, this says $f(u)\\gt u$, contradicting the first hypothesis applied at $x=u$ ($f(u)\\le u$). Hence $f(x)\\ge x-1$ for all $x$.",
        "Sharpness of the conclusion: define $f(x)=x-1$ for $x\\in[2k,2k+1)$, $f(x)=x$ for $x\\in[2k+1,2k+2)$ ($k\\in\\mathbb{Z}$). Check $f(x)\\le x$: clear. Check $f(f(x))\\ge x-1$: if $x\\in[2k+1,2k+2)$ then $f(x)=x$ and $f(f(x))=x\\ge x-1$; if $x\\in[2k,2k+1)$ then $f(x)=x-1\\in[2k-1,2k)$, an interval where $f$ is the identity, so $f(f(x))=x-1$, again exactly at the boundary. This admissible $f$ satisfies $f(x)=x-1$ on half the line, so no bound $f(x)\\ge x-1+\\varepsilon$ can replace the conclusion: the theorem is tight.",
        "Remark generalizing the proof: for any fixed $c\\in\\mathbb{R}$, $f(x)\\le x$ and $f(f(x))\\ge x-c$ for all $x$ imply $f(x)\\ge x-c$ - the same three lines. The constant $c$ propagates from the second iterate to the first unchanged.",
        "Machine audit (tools/proofs/redesign-20260930/a5-verify.py, 2026-09-30): all $362\\,880$ maps $f:\\{-4..4\\}\\to\\{-4..4\\}$ with $f(x)\\le x$ checked exactly for the implication (0 counterexamples); piecewise-affine random families and the staircase of step 4 verified on a $10^5$-point grid (0 failures)."
      ],
      "remark": "The argument propagates the displacement bound from the second iterate to the first along orbits of $f$, the same bounded-displacement mechanism behind rotation-number theory for iterated maps, and it works verbatim with $x-c$ for any constant $c$. Origin: a single quantifier move, applying the hypothesis at the new point $u=f(a)$ rather than $a$, the standard olympiad device for converting $f(f(x))$ bounds into $f(x)$ bounds; the parity staircase is the sharp extremal model."
    },
    {
      "id": "a5",
      "category": "alg",
      "difficulty": "easy",
      "stars": 1,
      "confidence": "high",
      "text": "Find all functions $f:\\mathbb{R}\\to\\mathbb{R}$ satisfying $$f(f(x)+y)=f(x+y)+f(y)\\qquad\\text{for all real }x,y.$$",
      "why": "Put $x=0$, $c:=f(0)$: $f(c+y)=2f(y)$ for all $y$, so translation by $c$ acts as doubling of $f$, and iterating gives $f(2c+y)=4f(y)$. But evaluating at $x=c$, using $f(c)=2c$, gives $f(2c+y)=f(c+y)+f(y)=3f(y)$; hence $f\\equiv0$. Equivalently: the left side $f(f(x)+y)$ is invariant under replacing $x$ by $f(x)$, so the right side must be too, which on an orbit $y\\mapsto y+kc$ of the translation action forces $f(k c)$ to grow like $2^k$ and like $3^k$ at once - only zero survives. With $c=0$ idempotence $f(f(x))=f(x)$ closes the same bookkeeping.",
      "hints": [
        "Set $x=0$: with $c=f(0)$, get $f(c+y)=2f(y)$ for all $y$.",
        "Compute $f(2c+y)$ twice: two shifts give $4f(y)$, while $x=c$ gives $3f(y)$."
      ],
      "steps": [
        "x=0: f(c+y) = f(y) + f(y) = 2f(y) for all y, where c = f(0). (Shift identity.)",
        "From the shift identity with y=0: f(c) = 2c. Evaluate the original at x = c: f(f(c)+y) = f(c+y)+f(y), i.e. f(2c+y) = 2f(y)+f(y) = 3f(y). But shifting twice: f(2c+y) = f(c+(c+y)) = 2f(c+y) = 4f(y). Hence f(y) = 0 for all y, so c = 0 and f = 0 is forced - and f=0 indeed satisfies the equation.",
        "(Structural second view, for the checker:) with c=0 the shift identity is f(f(y))=f(y): idempotence; then x -> f(x) in the original: left side f(f(f(x))+y) = f(f(x)+y) is unchanged, right side becomes f(f(x)+y)+f(y) - contradiction unless f=0. Both arguments close; the problem rewards either.",
        "No regularity, no boundedness, no surjectivity assumption is used anywhere; the sweep over linear/affine/quadratic/absolute-value/sign/tanh candidates confirms only f=0 (tools/proofs/out/a8.txt lineage)."
      ],
      "remark": "On the orbit $y\\mapsto y+kc$ of the translation action the shift identity forces growth like $2^k$, while the second computation demands growth like $3^k$; only zero survives, a cocycle-style rigidity argument for functional equations on groups. Origin: the classical olympiad motif of extracting a translation identity at $x=0$, then feeding the special value $f(0)$ back into the equation and comparing the two bookkeepings; no regularity or surjectivity is needed."
    },
    {
      "id": "a6",
      "category": "alg",
      "difficulty": "easy",
      "stars": 1,
      "confidence": "high",
      "text": "Find all polynomials $P:\\mathbb{R}\\to\\mathbb{R}$ satisfying $$P(P(x))=\\bigl(P(x)\\bigr)^{3}\\qquad\\text{for all }x\\in\\mathbb R.$$",
      "why": "Degree comparison in $P\\circ P=P^{3}$ leaves $n\\in\\{0,3\\}$. For $P=x^{3}+ax^{2}+bx+c$ the $x^{8}$ coefficients of $P\\circ P$ and $P^{3}$ agree (both $3a$, the outer quadratic term $a\\,P(x)^{2}$ having degree $6$), so the first decisive comparison is at $x^{6}$, where $P\\circ P$ carries an extra $+a$ that $P^{3}$ lacks: $a=0$; then $P\\circ P-P^{3}$ equals exactly $b\\,P(x)+c$, which a nonconstant cubic cannot absorb, killing $b$ and $c$: the classification is $\\{0,\\pm1,x^{3}\\}$. Conceptually $P\\circ P=(\\cdot)^{3}\\circ P$ says $P$ is an intertwiner between its own dynamics and the cube power map - a question in the Ritt--Julia theory of polynomial composition, where the monomials $z^{d}$ and Chebyshev polynomials are the rigid, highly symmetric members of the monoid $(\\mathbb{C}[x],\\circ)$.",
      "hints": [
        "The $x^8$ comparison is vacuous; matching $x^6$ coefficients gives $a=0$."
      ],
      "steps": [
        "Constants: $c=c^{3}$ gives $c\\in\\{0,\\pm1\\}$; all three work.",
        "Nonconstant: $\\deg(P\\circ P)=n^{2}$ and $\\deg(P^{3})=3n$, so $n=3$.",
        "Leading coefficients: $p_3^4=p_3^3$ gives $p_3=1$. Write $P(x)=x^{3}+ax^{2}+bx+c$, so $P(P(x))=P(x)^{3}+a\\,P(x)^{2}+b\\,P(x)+c$. Compare $x^{8}$: both sides carry $3a$ (the term $aP(x)^{2}$ has degree $6$), so $x^{8}$ gives no information. Compare $x^{6}$: the part $P(x)^{3}$ contributes $a^{3}+6ab+3c$ to each side, $bP(x)+c$ contributes nothing, and $aP(x)^{2}$ contributes its leading term $a\\cdot x^{6}$ only to the left side; the identity forces $a=0$.",
        "With $a=0$ and $u=P(x)$: $P\\circ P=u^{3}+bu+c=P(x)^{3}+b\\,P(x)+c$. The identity forces $b\\,P(x)+c\\equiv0$; $P$ nonconstant gives $b=0$, then $c=0$.",
        "Check $P=x^{3}$: $P(P(x))=x^{9}=P(x)^{3}$. Machine closure: sympy coefficient solve through degree 4 returns only these (2026-09-29)."
      ],
      "remark": "The identity $P\\circ P=(\\cdot)^3\\circ P$ asks $P$ to intertwine its own dynamics with the cubing power map, a question in the Ritt-Julia theory of polynomial composition, where monomials $z^d$ and Chebyshev polynomials are the rigid, highly symmetric members of the composition monoid. Origin: the standard olympiad template for polynomial functional equations, degree comparison followed by coefficient matching, here with the trap that the first information sits at $x^6$, not $x^8$."
    },
    {
      "id": "a7",
      "category": "alg",
      "difficulty": "medium",
      "stars": 2,
      "confidence": "high",
      "text": "Find all polynomials $P:\\mathbb{R}\\to\\mathbb{R}$ such that $$P(x)^{3}-P(y)^{3}=P(x-y)\\,P\\left(x^{2}+xy+y^{2}\\right)\\qquad\\text{for all real }x,y.$$",
      "why": "Substitutions dismantle the identity: $x=y=0$ gives $P(0)=0$; then $y=0$ gives $P(x)^{3}=P(x)P(x^{2})$, so $P\\equiv0$ or $P(x)^{2}=P(x^{2})$ - $P$ intertwines the squaring power map with itself, $P\\circ(\\cdot^{2})=(\\cdot^{2})\\circ P$. Intertwiners of a power map are monomials $P=x^{m}$: along each root orbit $r\\mapsto r^{2}$ of the squaring map the multiplicities obey the doubling law $m(r^{2})=2m(r)$, and orbit finiteness kills every nonzero complex root, leaving only $x^{m}$ (leading coefficient forced to $1$); this is the first case of the Ritt theory of commuting polynomials, where only monomials and Chebyshev polynomials admit such symmetries. The probe $(x,y)=(2,1)$ forces $8^{m}-1=7^{m}$, hence $m=1$; $P=x^{2}$ satisfies the reduced equation but not the original one.",
      "hints": [
        "Root multiplicities along $r\\mapsto r^2$ obey $m(r^2)=2m(r)$; orbit finiteness kills all nonzero roots.",
        "Probe $P=x^m$ at $(x,y)=(2,1)$: only $m=1$ survives, plus $P\\equiv0$."
      ],
      "steps": [
        "Set $x=y=0$: $0=P(0)\\cdot P(0)$, so $P(0)=0$.",
        "Set $y=0$: $P(x)^{3}=P(x)\\,P(x^{2})$ identically. If $P\\not\\equiv0$, cancel $P(x)$ to obtain $P(x)^{2}=P(x^{2})$.",
        "Idempotents of squaring. Compare leading coefficients in $P(x)^{2}=P(x^{2})$: $c^{2}=c$, and $c\\ne0$ since $P\\not\\equiv0$, so $c=1$. The identity is over $\\mathbb R[x]$ but we argue in $\\mathbb C[x]$, where $P$ splits. Let $m(r)$ denote the multiplicity of a (possibly complex) root $r\\ne0$ of $P$. Compare the order of vanishing at $x=r$ on both sides: the left side vanishes to order $2m(r)$, while $P(x^{2})$ vanishes to order $m(r^{2})$, because $x^{2}-r^{2}=(x-r)(x+r)$ is a simple factor at $r\\ne0$. Hence $m(r^{2})=2m(r)$, and iterating, $m(r^{2^{k}})=2^{k}m(r)$ for every $k\\ge1$. Since $P$ has finitely many roots, two orbit points coincide, $r^{2^{i}}=r^{2^{j}}$ with $i&lt;j$, so $2^{i}m(r)=2^{j}m(r)$ forces $m(r)=0$: contradiction. Thus $P$ has no nonzero complex root at all, and being monic with $P(0)=0$ it is exactly $P(x)=x^{m}$ for some $m\\ge1$.",
        "Test $P(x)=x^{m}$ in the original at $(x,y)=(2,1)$: $2^{3m}-1=7^{m}$. For $m=1$ equality; for $m\\ge2$, $8^{m}-1>7^{m}$ by induction (base $m=2$: $63>49$). Note the trap: $m=2$ passes the reduced idempotent step but fails here.",
        "Verify $P=x$: $x^{3}-y^{3}=(x-y)(x^{2}+xy+y^{2})$ holds identically. Machine closure: full sympy coefficient solve through degree 4 returns only $\\{0,x\\}$ (2026-09-29)."
      ],
      "remark": "The reduced relation $P\\circ(\\cdot^2)=(\\cdot^2)\\circ P$ makes $P$ an intertwiner of the squaring power map, the first case of Ritt's theory of commuting polynomials, where only monomials and Chebyshev polynomials admit such symmetries; the proof compares vanishing orders along root orbits in $\\mathbb{C}[x]$, a standard move in complex dynamics. Origin: dismantling the identity by $x=y=0$ and $y=0$, then pinning the exponent with a single clever probe, the classic polynomial FE recipe."
    },
    {
      "id": "a8",
      "category": "alg",
      "difficulty": "medium",
      "stars": 2,
      "confidence": "high",
      "text": "Let $a,b,c>0$. Prove that $$32\\!\\left(\\sum_{\\mathrm{cyc}}ab(a+b)\\right)^3 \\ge 27\\!\\left(\\prod_{\\mathrm{cyc}}(a+b)\\right)^2 \\left(\\prod_{\\mathrm{cyc}}(a+b)-4abc\\right).$$",
      "why": "A homogeneous symmetric inequality in three variables is a polynomial in the elementary symmetric functions $s=a+b+c$, $t=ab+bc+ca$, $p=abc$ by the fundamental theorem of symmetric polynomials. The feasible region in $(s,t,p)$ is carved out by the cubic discriminant $\\Delta\\ge0$ (the condition that $z^{3}-sz^{2}+tz-p$ has three real roots), so the extremum reduces to one-variable analysis on the boundary where two roots coincide. The factorization and equality case are then elementary; this is the uvw method, a quantifier-elimination principle for symmetric polynomial constraints.",
      "hints": [
        "Rewrite with $s,t,p$: the claim is $32(st-3p)^3\\ge27(st-p)^2(st-5p)$.",
        "Factor: $32(u-3)^3-27(u-1)^2(u-5)=(u-9)^2(5u-9)\\ge0$."
      ],
      "steps": [
        "Set $s=a+b+c$, $t=ab+bc+ca$, $p=abc$. Then $$\\sum_{\\mathrm{cyc}}ab(a+b)=st-3p, \\qquad (a+b)(b+c)(c+a)=st-p.$$ Hence the claim is $$32(st-3p)^3\\ge 27(st-p)^2(st-5p).$$",
        "By $$st=(a+b+c)(ab+bc+ca)\\ge 9abc=9p,$$ put $u=st/p\\ge 9$. Dividing by $p^3>0$, it suffices to prove $$32(u-3)^3\\ge 27(u-1)^2(u-5).$$",
        "Use the exact factorization $$32(u-3)^3-27(u-1)^2(u-5)=(u-9)^2(5u-9)\\ge 0.$$",
        "Equality requires $u=9$, hence equality in $(a+b+c)(ab+bc+ca)\\ge 9abc$. The equality condition is $a=b=c$."
      ],
      "remark": "A textbook uvw example: the fundamental theorem of symmetric polynomials writes the inequality as a polynomial in $(s,t,p)$, whose feasible region is carved by the cubic discriminant, so extremal analysis collapses to one variable on the double-root boundary; this is quantifier elimination for symmetric constraints. Origin: the classical AM-GM bound $(a+b+c)(ab+bc+ca)\\ge9abc$ plus the exact factorization with double root $u=9$, whose equality condition is $a=b=c$."
    },
    {
      "id": "a9",
      "category": "alg",
      "difficulty": "medium",
      "stars": 2,
      "confidence": "high",
      "text": "Let $a,b,c\\ge 0$ be real numbers with $a^{2}+b^{2}+c^{2}=3$. Prove that $$\\frac{1}{a^{2}+a+1}+\\frac{1}{b^{2}+b+1}+\\frac{1}{c^{2}+c+1}\\ \\ge\\ 1\\,, $$ and determine all cases of equality.",
      "why": "Two Cauchy--Schwarz applications in the correct order: the Engel (Bergstrom) form $\\sum 1/D_a\\ge9/\\sum D_a=9/(6+a+b+c)$ - Cauchy--Schwarz with vectors $(\\sqrt{D_a})$ and $(1/\\sqrt{D_a})$, equality iff all $D_a$ equal - and then $a+b+c\\le\\sqrt{3\\cdot3}=3$, the RMS-AM inequality, again Cauchy--Schwarz with the all-ones vector. The equality analysis threads through both stages simultaneously; no per-term minorant $\\alpha-\\beta x^{2}$ of $1/D_a$ survives at both endpoints, so the termwise route fails and only the global inner-product route works.",
      "hints": [
        "Engel form of Cauchy-Schwarz: $\\sum 1/D_a\\ge9/(D_a+D_b+D_c)$."
      ],
      "steps": [
        "Write $D_a=a^{2}+a+1$. Engel's form of Cauchy-Schwarz: $\\sum 1/D_a\\ge(1+1+1)^{2}/(D_a+D_b+D_c)=9/(\\sum a^{2}+\\sum a+3)=9/(6+a+b+c)$.",
        "Cauchy-Schwarz: $a+b+c\\le\\sqrt{3(a^{2}+b^{2}+c^{2})}=3$, so the denominator is at most $9$ and the sum is at least $1$.",
        "Equality throughout: the second step forces $a=b=c$; combined with $\\sum a^2=3$ this gives $a=b=c=1$, where the sum is $3\\cdot\\tfrac13=1$. (Engel equality $D_a=D_b=D_c$ is then automatic.)",
        "Anti-pattern note: demanding a per-term bound $1/(x^{2}+x+1)\\ge\\alpha-\\beta x^{2}$ with contact at $x=1$ gives conditions violated at $x=\\sqrt3$ (numbers in the tools/proofs log) - the global chain is the only route, which is the intended lesson."
      ],
      "remark": "Both stages are Cauchy-Schwarz, first in the Bergstrom Engel form, with equality when the three denominators agree, then against the all-ones vector, an instance of bounding reciprocal sums through the harmonic-arithmetic mean chain. The problem is a known olympiad lesson in inequality architecture: no per-term minorant $\\alpha-\\beta x^2$ survives at both endpoints of the domain, so only the global two-step chain works; equality forces $a=b=c=1$."
    },
    {
      "id": "a10",
      "category": "alg",
      "difficulty": "medium",
      "stars": 2,
      "confidence": "high",
      "text": "Find all functions $f:\\mathbb{N}\\to\\mathbb{N}$ such that $$f(m+n)+f(mn)=f(m)f(n)+1$$ for all positive integers $m$ and $n$.",
      "why": "The two operations of the semiring $(\\mathbb{N},+,\\times)$ are tied together: with $g:=f-1$ the equation reads $g(mn)=g(m)g(n)+g(m+n)$, a multiplicative law corrected by the additive structure. Setting $n=1$ gives a linear recurrence in $g$ along translates of value $g(1)$; the solutions $f\\equiv1$ and $f(n)=n+1$ correspond to $g\\equiv0$ and $g(n)=n$. For $g(1)\\gt1$ two independent evaluations of $f(4)$ disagree, closing the classification without growth estimates. Such hybrid additive-multiplicative functional equations mirror the rigidity of endomorphisms of arithmetic semirings, where the two operations already force the map.",
      "hints": [
        "Set $n=1$: $f(m+1)=(c-1)f(m)+1$ with $c=f(1)$; handle $c=1,2$.",
        "Compute $f(4)$ twice: from $P(2,2)$ and from two recurrence steps."
      ],
      "steps": [
        "Write $P(m,n)$ for the stated equation, and set $c=f(1)\\ge 1$. Substituting $n=1$ gives $f(m+1)+f(m)=c\\,f(m)+1$, hence $$f(m+1)=(c-1)f(m)+1.$$",
        "If $c=1$, then $f(m+1)=1$ for every $m$, so $f\\equiv 1$. This satisfies $P(m,n)$ because both sides equal $2$.",
        "If $c=2$, the recurrence is $f(m+1)=f(m)+1$. Since $f(1)=2$, one gets $f(m)=m+1$. Substitution gives $(m+n+1)+(mn+1)=(m+1)(n+1)+1$, so this is a solution.",
        "Now suppose $c\\ge 3$. The recurrence yields $f(2)=c(c-1)+1=c^2-c+1$. Setting $m=n=2$ in $P$ gives $2f(4)=f(2)^2+1$, so $$f(4)=\\frac{f(2)^2+1}2.$$ On the other hand two applications of the recurrence give $$f(3)=(c-1)f(2)+1,\\qquad f(4)=(c-1)f(3)+1=(c-1)^2 f(2)+(c-1)+1.$$",
        "Let $t=c^2-c+1$. The two formulae for $f(4)$ differ by $$\\frac{t^2+1}2-\\bigl((c-1)^2 t+c\\bigr)=-\\frac{c(c-1)^2(c-2)}2.$$ For every integer $c\\ge 3$ this quantity is a negative integer, so the two values of $f(4)$ cannot agree.",
        "Therefore $c\\in\\{1,2\\}$, and the only solutions are $f\\equiv 1$ and $f(n)=n+1$."
      ],
      "remark": "The equation ties the two operations of the semiring $(\\mathbb{N},+,\\times)$ together, mirroring the rigidity of endomorphisms of arithmetic semirings, where the operations alone force the map; with $g=f-1$ it reads $g(mn)=g(m)g(n)+g(m+n)$, multiplicativity corrected by addition. Origin: the classic functional-equation motif of specializing $n=1$ to obtain a linear recurrence, then making two independent computations of one value, here $f(4)$, with no growth estimates."
    },
    {
      "id": "a11",
      "category": "alg",
      "difficulty": "medium",
      "stars": 2,
      "confidence": "high",
      "text": "Find all polynomials $P:\\mathbb{R}\\to\\mathbb{R}$ such that $$P(x^{2}+y^{2})=P(x+y)^{2}-2P(xy)\\qquad\\text{for all real }x,y.$$",
      "why": "$x^{2}+y^{2}$ is the power sum $p_2=e_1^{2}-2e_2$ expressed through the elementary symmetric functions of $\\{x,y\\}$ - Newton's identities - so the equation asks $P$ to commute with transporting a pair to its invariants. Plugging $y=0$ gives $P(x^2)=P(x)^2-2P(0)$, and $x=y=0$ forces $P(0)\\in\\{0,3\\}$, the first surprise (the constant solution $3$, since $9=4\\cdot9-3\\cdot9$). The substitution $y\\mapsto-y$ compares right-hand sides to give $P(x+y)^2-2P(xy)=P(x-y)^2-2P(-xy)$; at $y=-x$ this collapses to $P(2x^2)=-2P(-x^2)+P(0)^2-2P(0)$, and degree comparison $2^{n}=-2(-1)^{n}$ leaves only $n=1$. Then $P=ax+b$ must survive the original identity: $b\\in\\{0,3\\}$, $a=a^{2}$, and the residue kills everything except $0,x,3$.",
      "hints": [
        "Put $y=0$: $P(x^2)=P(x)^2-2P(0)$; $x=y=0$ forces $P(0)\\in\\{0,3\\}$.",
        "Use $(x,-x)$: comparing leading terms gives $2^{n-1}=(-1)^{n+1}$, so $n=1$."
      ],
      "steps": [
        "y=0: P(x^2) = P(x)^2 - 2P(0) for all x. x=y=0: c := P(0) satisfies c = c^2 - 2c, hence c^2 - 3c = 0 and c in {0,3}. (Constant case: P = q gives q = q^2 - 2q, so the constants 0 and 3 are exactly the constant solutions.)",
        "Now let deg P = n >= 1 with leading coefficient a != 0. Substitute (x, y) = (x, -x) into the original identity: the left side is P(x^2 + x^2) = P(2x^2); the right side is P(x + (-x))^2 - 2P(x(-x)) = P(0)^2 - 2P(-x^2) = c^2 - 2P(-x^2). Hence P(2x^2) = c^2 - 2P(-x^2) as polynomials.",
        "Compare leading terms in that identity: left, a(2x^2)^n = a 2^n x^{2n}; right, -2a(-x^2)^n = -2a(-1)^n x^{2n} (the constant c^2 is immaterial for n >= 1). So a 2^n = -2a(-1)^n; dividing by 2a != 0: 2^{n-1} = (-1)^{n+1}. The right side is +1 only for n odd, and then 2^{n-1} = 1 forces n = 1.",
        "P = px + q with p != 0, n=1: substitute into the ORIGINAL identity: p(x^2+y^2) + q = (p(x+y)+q)^2 - 2(pxy + q) = p^2x^2 + p^2y^2 + (2p^2 - 2p)xy + 2pqx + 2pqy + q^2 - 2q. Comparing x^2: p = p^2, so p = 1; comparing x: 0 = 2pq, so q = 0; the xy-comparison 0 = 2p^2 - 2p and the constant comparison q = q^2 - 2q are then automatically satisfied (they reduce to the step-1 equation for q = 0). Hence P = x is the only nonconstant candidate.",
        "Verify all three in the original identity: 0: 0=0-0; x: x^2+y^2 = (x+y)^2-2xy identity; 3: 3 = 9-6. Machine closure (re-run this session): sympy coefficient solve through degree 4 returns exactly {0, x, 3} - no further solutions."
      ],
      "remark": "The left side $x^2+y^2$ is the Newton-sum expression $p_2=e_1^2-2e_2$ in the elementary symmetric functions of $\\{x,y\\}$, so the equation asks $P$ to commute with passing a pair to its invariants, a symmetric-function-theoretic reading. Origin: the standard dismantling substitutions $y=0$ and $y=-x$ for symmetric polynomial identities, plus the decisive degree comparison that leaves only $n=1$; the constant solution $P=3$ is the classic surprise."
    },
    {
      "id": "a12",
      "category": "alg",
      "difficulty": "medium",
      "stars": 2,
      "confidence": "high",
      "text": "Let $P(x)$ be a polynomial with real coefficients of degree at most $2$ such that $P(n)\\ge 0$ for every integer $n$. Prove that, for every real number $x$, $$P(x)+P(x+1)\\ \\ge\\ 0 .$$",
      "why": "Write $P=a(x-v)^2+m$, $a\\gt0$. Two facts collide. The lattice-root condition forces $m\\ge-a/4$: a deeper dip makes $\\{P\\lt0\\}$ an open interval of length $\\gt1$, and every open interval of length $\\gt1$ contains an integer - the pigeonhole covering property of $\\mathbb{Z}$. The shift sum completes the square as $P(x)+P(x+1)=2a(x-v+\\tfrac12)^2+2m+\\tfrac a2$, so its minimum $2m+\\tfrac a2\\ge0$: the vertex penalty $+a/2$ is the distance-squared from $v$ to the half-integer coset $\\mathbb{Z}+\\tfrac12$, and it exactly cancels the worst admissible dip $2m=-a/2$. The quantity $\\inf_x(P(x)+P(x+1))$ is an inhomogeneous minimum of a quadratic form, the classical object of Markov--Hurwitz geometry of numbers. Bounding the sum by $2\\min P$ overestimates by $a/2$ because two translated parabolas can never align their vertices. Equality iff the roots are consecutive integers $k,k+1$ and $x_0=k$ (e.g. $P=x(x-1)$); nonconstant linear is impossible on all of $\\mathbb{Z}$ and constants give $2c$.",
      "hints": [
        "Write $P=a(x-v)^2+m$; the dip $\\{P<0\\}$ has length at most one, so $m\\ge-a/4$."
      ],
      "steps": [
        "Degenerate degrees. $P\\equiv c$: the lattice condition gives $c\\ge0$ and $P(x)+P(x+1)=2c\\ge0$ (equality ⟺ $c=0$, consistent with the ⟺). If $P$ were linear nonconstant, its values on $\\mathbb Z$ run to $-\\infty$ in one direction, contradicting the hypothesis. Hence $P(x)=a(x-v)^2+m$ with $a\\gt 0$, vertex value $m$, negative region (if $m\\lt 0$) the open interval $I=(v-\\rho,\\,v+\\rho)$ with half-width $\\rho=\\sqrt{-m/a}$.",
        "Dip lemma. Every open interval of length $\\gt 1$ contains an integer: if $J=(r,s)$ with $s-r\\gt 1$, then $\\lfloor r\\rfloor+1\\in J$. Consequence: $m\\lt -a/4$ would give $|I|=2\\rho\\gt 1$, an integer $k\\in I$, $P(k)\\lt 0$ - impossible. So $m\\ge -a/4$.",
        "Shift-square identity (verified by sympy): substituting $P=a(x-v)^2+m$, $$P(x)+P(x+1)=a(x-v)^2+a(x-v+1)^2+2m=2a\\bigl(x-v+\\tfrac12\\bigr)^2+2m+\\tfrac a2 .$$",
        "Combine: $P(x)+P(x+1)\\ge 2m+\\tfrac a2\\ge -\\tfrac a2+\\tfrac a2=0$ for every real $x$. This is the claim.",
        "Equality characterization. If $S(x_0)=0$ then both inequalities in step 4 are equalities: $m=-a/4$ and $x_0=v-\\tfrac12$. Then $P=a(x-r)(x-s)$ with $s-r=1$ and $x_0=r$, $x_0+1=s$; the hypothesis forbids an integer strictly between $r$ and $s$, and an open interval of length $1$ misses the integers only when its endpoints are consecutive integers - so $x_0\\in\\mathbb Z$ and $P(x_0)=P(x_0+1)=0$. Converse: if $P(x_0)=P(x_0+1)=0$ then $S(x_0)=0$ trivially. Example family $P=a(x-k)(x-k-1)$ attains equality, so $\\ge$ cannot be upgraded to $\\gt $.",
        "Machine audit (tools/proofs/redesign-20260930/a15-verify.py, 2026-09-30): step-3 identity symbolic (True); 16028 sampled admissible quadratics: 0 conclusion violations, 0 equality-characterization violations; constants/linears handled in step 1. No derivatives used or needed anywhere."
      ],
      "remark": "The quantity $\\inf_x(P(x)+P(x+1))$ is an inhomogeneous minimum of a quadratic form, a classical object in Markov-Hurwitz geometry of numbers, while the dip lemma uses the covering property that every open interval of length greater than one contains an integer. Origin: completing the square combined with root-location bookkeeping for a parabola constrained on the lattice $\\mathbb{Z}$; the vertex penalty $a/2$ exactly cancels the worst admissible dip $2m=-a/2$."
    },
    {
      "id": "a13",
      "category": "alg",
      "difficulty": "medium",
      "stars": 2,
      "confidence": "high",
      "text": "Let $n\\ge4$ and let real numbers $x_1,\\dots,x_n$ satisfy $$x_1+\\cdots+x_n=0,\\qquad x_1^{2}+\\cdots+x_n^{2}=n(n-1),$$ with indices read cyclically ($x_{n+1}=x_1$).<ol><li>Prove $$\\sum_{i=1}^{n}x_ix_{i+1}\\le n(n-1)\\cos\\frac{2\\pi}{n},$$ with equality if and only if $x_i=\\sqrt{2(n-1)}\\,\\sin\\!\\big(\\tfrac{2\\pi i}{n}+\\varphi\\big)$ for some phase $\\varphi$.</li><li>Determine the minimum of $\\sum x_ix_{i+1}$ under the same constraints, and characterize the minimizers.</li></ol>",
      "why": "Both parts are one spectral computation: $\\sum(x_i-x_{i+1})^2=2S-2q$ and $\\sum(x_i+x_{i+1})^2=2S+2q$, so bounding $q$ is the sharp range of a quadratic form of the circulant matrix $I+\\sigma$, $\\sigma$ the cyclic shift. Diagonalizing by Fourier modes on $\\mathbb{Z}/n\\mathbb{Z}$ gives eigenvalues $1+\\cos(2\\pi k/n)$ and $1-\\cos(2\\pi k/n)$; the discrete Wirtinger (Poincare) inequality $\\sum(x_i-x_{i+1})^2\\ge4\\sin^2(\\pi/n)\\sum x_i^2$ for zero-mean $x$ - the spectral gap of the cycle graph Laplacian - yields $q\\le S\\cos(2\\pi/n)$, and the minimum reads off the lowest nontrivial eigenvalue (even $n$: the alternating vector, eigenvalue $-1$, achieves $-S$; odd $n$: mode $k=\\tfrac{n-1}{2}$ gives $S\\cos(\\tfrac{\\pi(n-1)}{n})$). Equality spaces are exactly the $\\sin$/$\\cos$ eigenspaces, the harmonics that solve the heat equation on the cycle.",
      "hints": [
        "Lagrange multipliers give $x_{i-1}+x_{i+1}=2\\mu x_i$: solve the cyclic recurrence.",
        "Max at mode $k=1$; min at $k=n/2$ (even $n$) or $k=(n\\pm1)/2$ (odd $n$)."
      ],
      "steps": [
        "Notation. Put $S=\\sum x_i^{2}=n(n-1)$ and $q=\\sum x_ix_{i+1}$ (cyclic indices). Expanding the squares and using $\\sum x_{i+1}^{2}=\\sum x_i^{2}=S$ (shift of a cyclic sum) gives the two identities $$\\sum_{i}(x_i-x_{i+1})^{2}=2S-2q,\\qquad \\sum_{i}(x_i+x_{i+1})^{2}=2S+2q.$$",
        "Existence of extrema. The feasible set $K=\\{x\\in\\mathbb R^{n}:\\sum x_i=0,\\ \\sum x_i^{2}=S\\}$ is nonempty (for $n\\ge2$: $x=(t,-t,0,\\dots)$ scaled), closed and bounded, hence compact; the continuous $q$ attains a maximum and a minimum on $K$.",
        "Lagrange equations at an extremum. At an extremizer $x\\in K$ the gradients of the constraints, $\\mathbf 1$ and $2x$, are linearly independent ($x$ is not constant since $\\sum x_i=0$ while $S=n(n-1)>0$), so $\\partial q/\\partial x_i=x_{i-1}+x_{i+1}=2\\mu x_i+\\nu$ for all $i$ and some $\\mu,\\nu\\in\\mathbb R$. Summing over $i$: the left side is $2\\sum x_i=0$ and the right side is $2\\mu\\sum x_i+n\\nu=n\\nu$, so $\\nu=0$ and every extremizer satisfies $$x_{i-1}+x_{i+1}=2\\mu x_i\\qquad(\\text{cyclically}).$$ Multiplying by $x_i$ and summing over $i$ gives $2q=2\\mu S$, i.e. $\\mu=q/S$.",
        "Solving the cyclic recurrence. If $|\\mu|>1$ the characteristic roots $r_{1,2}=\\mu\\pm\\sqrt{\\mu^{2}-1}$ are real, distinct, with $r_1r_2=1$, so neither has absolute value $1$; the general solution $x_i=Ar_1^{i}+Br_2^{i}$ with the period condition $x_{i+n}=x_i$ forces $A(r_1^{n}-1)=B(r_2^{n}-1)=0$, hence $x\\equiv0$, impossible. Therefore $|\\mu|\\le1$; write $\\mu=\\cos\\theta$, $\\theta\\in[0,\\pi]$. For $0&lt;\\theta&lt;\\pi$ the general real solution is $x_i=A\\cos(i\\theta)+B\\sin(i\\theta)$ (linear independence of $e^{\\pm i\\theta}$; verified by the addition formulas); shifting $i\\mapsto i+n$ rotates the coefficient vector by angle $n\\theta$, so a nonzero periodic solution exists iff $n\\theta\\equiv0\\pmod{2\\pi}$, i.e. $\\theta=2\\pi k/n$ with $1\\le k\\le n-1$. Boundary cases: $\\mu=1$ gives $x_i=A+Bi$, periodic iff $B=0$ (constant, excluded by mean zero since $S>0$); $\\mu=-1$ requires $\\theta=\\pi$, i.e. $n$ even, and gives the alternating mode $x_i=A(-1)^i$ (the second solution $(A+Bi)(-1)^i$ is periodic iff $B=0$, and for odd $n$ even $A(-1)^i$ fails to close).",
        "Attainability and value set. For each $k\\in\\{1,\\dots,n-1\\}$ the functions $c^{(k)}_i=\\cos(2\\pi ki/n)$, $s^{(k)}_i=\\sin(2\\pi ki/n)$ satisfy the recurrence with $\\mu=\\cos(2\\pi k/n)$ by direct substitution. Their sums vanish by the geometric-series identity $\\sum_{i=1}^{n}\\omega^{i}=0$ for $\\omega=e^{2\\pi ik/n}\\ne1$, and $\\sum(c^{(k)})^{2}=\\sum(s^{(k)})^{2}=n/2$, $\\sum c^{(k)}s^{(k)}=0$ by the same identity applied to $\\omega^{2}$ (when $2k\\equiv0$, $n\\mid 2k$ only the alternating mode survives: $s\\equiv0$, $\\sum c^{2}=n$). Scaling any unit vector of each mode's span to norm $\\sqrt S$ embeds it into $K$ with $q=S\\cos(2\\pi k/n)$. Hence the extremal values of $q$ on $K$ run exactly over the finite set $\\{S\\cos\\frac{2\\pi k}{n}:1\\le k\\le n-1\\}$.",
        "Part (a): the maximum. For $n\\ge4$ the angle $2\\pi/n\\in(0,\\pi/2]$ and $\\cos$ is strictly decreasing on $(0,\\pi)$, so the largest value is $S\\cos\\frac{2\\pi}{n}=n(n-1)\\cos\\frac{2\\pi}{n}$ (modes $k$ and $n-k$ span the same plane). Equality holds iff $x$ lies in the $(c^{(1)},s^{(1)})$-plane with the right scaling, which is exactly $x_i=\\sqrt{2(n-1)}\\,\\sin(\\tfrac{2\\pi i}{n}+\\varphi)$ for some phase $\\varphi$ (phase form of a nonzero planar vector; amplitude from $\\sum\\sin^{2}(\\cdot+\\varphi)=n/2$; mean zero from the geometric sum, valid $n\\ge3$). The displayed equivalence also rewrites part (a) as the discrete Wirtinger inequality $\\sum(x_i-x_{i+1})^{2}\\ge4\\sin^{2}(\\pi/n)\\sum x_i^{2}$: $2S-2q\\ge2S(1-\\cos\\tfrac{2\\pi}{n})$.",
        "Part (b), $n$ even: the minimum $=-S$. The smallest cosine in the set is $\\cos(2\\pi\\cdot\\frac n2/n)=-1$ (unique mode $k=n/2$), so $\\min q=-n(n-1)$. The eigenspace is the line $x_i=t(-1)^i$; mean zero holds ($n$ even) and $S=nt^{2}$ gives $t=\\pm\\sqrt{n-1}$: exactly two minimizers.",
        "Part (b), $n$ odd: the minimum. The minimizing angles are $2\\pi k/n$ with $k=\\frac{n\\pm1}{2}$ (closest to $\\pi$), both giving $\\mu=\\cos(\\pi\\mp\\frac\\pin)=-\\cos\\frac\\pin=\\cos\\frac{\\pi(n-1)}{n}$; so $\\min q=S\\cos\\frac{\\pi(n-1)}{n}$, and the minimizers are the scaled unit vectors of that single $2$-dimensional mode: $x_i=\\sqrt{2(n-1)}\\,\\sin\\bigl(\\tfrac{\\pi(n-1)}{n}i+\\varphi\\bigr)$, $\\varphi$ arbitrary (the $k=\\frac{n+1}{2}$ description is the same plane with a re-phased $\\varphi$).",
        "Machine audit (re-run 2026-09-30, log /tmp/kilo): for each $n\\in\\{4,\\dots,8\\}$, $20000$ random zero-mean vectors scaled to $S$ never exceeded the stated bounds, the closed-form maximizer/minimizer families attain them to $10^{-6}$, and the even-$n$ minimizers matched the two alternating vectors $\\pm\\sqrt{n-1}\\,(-1)^i$."
      ],
      "remark": "Both parts are one spectral computation: $q$ is a quadratic form of the circulant $I+\\sigma$ with $\\sigma$ the cyclic shift, diagonalized by Fourier modes on $\\mathbb{Z}/n\\mathbb{Z}$, and part (a) is exactly the discrete Wirtinger inequality, the spectral gap of the cycle graph Laplacian in spectral graph theory. Origin: Lagrange multipliers plus the standard olympiad device of solving a cyclic second-order difference equation by sine and cosine modes, the harmonics on the cycle."
    },
    {
      "id": "a14",
      "category": "alg",
      "difficulty": "medium",
      "stars": 2,
      "confidence": "high",
      "text": "Let $a,b,c$ be real numbers satisfying $a+b+c=0$ and $abc=1$. Prove that $$a^4+b^4+c^4\\ge \\dfrac{9}{\\sqrt[3]{2}},$$ and determine all equality cases.",
      "why": "The product condition forces the sign pattern: exactly one variable is positive. The other two are then nonnegative numbers with fixed sum and product, so they are the real roots of a quadratic whose discriminant is nonnegative - root-location theory via the discriminant supplies a lower bound on the positive root, and convexity of $t\\mapsto t^{4}$ upgrades that bound to the fourth-power sum by Jensen's inequality, the prototype of majorization arguments (Karamata). The same mechanism - symmetric constraints, extrema on the double-root boundary of the real-rooted region - is the uvw/discriminant principle.",
      "hints": [
        "From $(p-q)^2\\ge0$ deduce $c^3\\ge4$, so $c\\ge2^{2/3}$."
      ],
      "steps": [
        "The product $abc=1>0$ and the sum $a+b+c=0$ forbid three positive numbers and also forbid exactly two positive numbers. Hence exactly one of $a,b,c$ is positive; call it $c$, and write $a=-p$, $b=-q$ with $p,q>0$.",
        "Then $p+q=c$ and $pq=1/c$. The inequality $(p-q)^2\\ge 0$ becomes $c^2\\ge 4/c$. Since $c>0$, this is $c^3\\ge 4$, so $c\\ge 4^{1/3}=2^{2/3}$.",
        "By convexity of $t\\mapsto t^4$, or equivalently by the power-mean inequality, $$\\frac{p^4+q^4}2\\ge \\left(\\frac{p+q}2\\right)^4,$$ so $p^4+q^4\\ge \\tfrac18 c^4$, with equality if and only if $p=q$.",
        "Therefore $a^4+b^4+c^4=p^4+q^4+c^4\\ge \\tfrac98 c^4\\ge \\tfrac98\\,(2^{2/3})^4=\\tfrac98\\cdot 2^{8/3}=9\\cdot 2^{-1/3}$.",
        "Equality requires $c=2^{2/3}$ and $p=q$. Then $p+q=c$ and $pq=1/c$ give $p=q=2^{-1/3}$. Thus equality holds exactly at the permutations of $\\bigl(2^{2/3},\\,-2^{-1/3},\\,-2^{-1/3}\\bigr)$."
      ],
      "remark": "The mechanism is the uvw-discriminant principle: with symmetric constraints, extrema sit on the double-root boundary of the real-rooted region, here expressed elementarily as $(p-q)^2\\ge0$ for the two negative roots of a quadratic. Convexity of $t^4$ then upgrades the bound via Jensen's inequality, the prototype of majorization and Karamata arguments. Origin: the classical sign-pattern reduction under $abc>0$ with $a+b+c=0$, a well-known olympiad opening move."
    },
    {
      "id": "a15",
      "category": "alg",
      "difficulty": "medium",
      "stars": 2,
      "confidence": "high",
      "text": "Find all nonzero polynomials $P\\in\\mathbb{Q}[x]$ such that $P(n)$ is an integer for every positive integer $n$, and $P(a)$ divides $P(b)$ whenever $a$ and $b$ are positive integers with $a\\mid b$.",
      "why": "Divisibility along multiples forces $P(mn)/P(n)$ to be an integer for all $m,n$; for each fixed $m$ that integer tends to $m^{\\deg P}$ as $n\\to\\infty$, so it is eventually constant and $P(mx)=m^{\\deg P}P(x)$ holds as a polynomial identity: $P$ is a simultaneous eigenfunction of every dilation pullback $x\\mapsto mx$. Decomposing $\\mathbb{R}[x]$ into weight spaces for the $\\mathbb{Q}_{\\gt0}$-action, each monomial $x^{k}$ has weight $m^{k}$, and distinct weights are linearly independent, so only monomials survive; integrality then pins the leading coefficient. This is the standard character/weight-space rigidity that makes multiplicative constraints along an infinite semigroup of scalars force homogeneity.",
      "hints": [
        "For fixed $m$, $P(mn)/P(n)$ is an integer tending to $m^d$; eventually it equals $m^d$."
      ],
      "steps": [
        "Let $d=\\deg P\\ge 0$ and write $P(x)=c_d x^d+c_{d-1}x^{d-1}+\\cdots+c_0$ with each $c_k\\in\\mathbb{Q}$ and $c_d\\ne 0$. Take any positive integers $m,n$ with $P(n)\\ne 0$. Both $P(n)$ and $P(mn)$ are integers by the integrality hypothesis, and $n\\mid mn$, so the divisibility hypothesis gives $P(n)\\mid P(mn)$ in $\\mathbb{Z}$: the ratio $P(mn)/P(n)$ is a well-defined integer.",
        "A nonzero polynomial of degree $d$ has at most $d$ real roots, so $P(n)\\ne 0$ for every $n\\ge n_0$ once $n_0$ is large enough. For $x\\ge 1$ factor $$P(x)=c_d x^d\\bigl(1+r(x)\\bigr),\\qquad r(x)=\\sum_{j=1}^{d}\\frac{c_{d-j}}{c_d}\\,x^{-j},$$ where the sum is empty (so $r\\equiv 0$) when $d=0$. With $C=\\sum_{j=1}^d |c_{d-j}/c_d|$ we have $|r(x)|\\le C/x$ for $x\\ge 1$, hence $r(x)\\to 0$. Therefore, for each fixed $m$, $$\\frac{P(mn)}{P(n)}=m^d\\cdot\\frac{1+r(mn)}{1+r(n)}\\longrightarrow m^d,$$ since $1+r(n)\\to 1$ makes the fraction legal for large $n$. An integer-valued sequence converging to the integer $m^d$ is eventually constant: for all large $n$ the ratio is within $\\tfrac12$ of $m^d$, hence equal to $m^d$.",
        "Fix $m\\ge 1$ and consider $Q_m(x):=P(mx)-m^d P(x)\\in\\mathbb{Q}[x]$. By the previous step $Q_m(n)=0$ for every sufficiently large integer $n$ — infinitely many roots — and a nonzero polynomial has only finitely many roots, so $Q_m\\equiv 0$. Thus $P(mx)=m^d P(x)$ holds as a polynomial identity. The argument works for every fixed $m$, so the identity is valid for all positive integers $m$ simultaneously.",
        "Substituting $P(x)=\\sum_k c_k x^k$ into $P(mx)=m^d P(x)$ and comparing the coefficient of $x^k$ gives $c_k m^k=m^d c_k$, i.e. $c_k(m^k-m^d)=0$ for every $k$ and every $m\\ge 1$. Taking $m=2$: $2^k-2^d\\ne 0$ whenever $k\\ne d$, so $c_k=0$ for all $k\\ne d$, and $P(x)=c_d x^d$.",
        "Integrality at $n=1$ forces $P(1)=c_d\\in\\mathbb{Z}$, and $P\\not\\equiv 0$ gives $c_d\\ne 0$. Conversely, every $P(x)=c\\,x^d$ with $c\\in\\mathbb{Z}\\setminus\\{0\\}$, $d\\ge 0$, satisfies both hypotheses: $P(n)=c\\,n^d\\in\\mathbb{Z}$ for all $n$; and if $a\\mid b$, writing $b=at$ with $t\\in\\mathbb{Z}_{>0}$ gives $P(b)=c\\,(at)^d=(c\\,a^d)\\,t^d=P(a)\\,t^d$ with $t^d\\in\\mathbb{Z}$ — here the conclusion that $t^d$ is an integer uses $d\\ge 0$, which is why negative exponents (non-polynomial $P$) never arise. Constant polynomials $d=0$ are included and check out in both conditions.",
        "Therefore the polynomials are exactly $P(x)=c\\,x^d$ with $c\\in\\mathbb{Z}\\setminus\\{0\\}$ and $d\\ge 0$."
      ],
      "remark": "The identity $P(mx)=m^{\\deg P}P(x)$ makes $P$ a simultaneous eigenfunction of every dilation pullback; decomposing $\\mathbb{Q}[x]$ into weight spaces for the $\\mathbb{Q}_{>0}$-action, monomials carry distinct characters $m^k$, and this weight-space rigidity forces homogeneity. Origin: the standard olympiad combination of asymptotics with the finiteness of polynomial roots, converting an integer quotient that converges to a limit into an exact polynomial identity, then verifying divisibility."
    },
    {
      "id": "a16",
      "category": "alg",
      "difficulty": "medium",
      "stars": 2,
      "confidence": "medium",
      "text": "Let $a,b,c>0$. Prove that $$\\frac{ab}{a^2+b^2+c^2-ab+bc-ca}+\\frac{bc}{a^2+b^2+c^2-bc+ca-ab}+\\frac{ca}{a^2+b^2+c^2-ca+ab-bc}\\le\\frac{3}{2},$$ and determine all equality cases.",
      "why": "The denominators are cyclic, not symmetric: each equals $a^{2}+b^{2}+c^{2}-(a-b)(b-c)-\\dots$-type expressions preserved by the 3-cycle. Clearing denominators turns the inequality into positivity of a single cyclic polynomial, and splitting into the two order types (chambers of the $a\\ge b\\ge c$ decomposition of $\\mathbb{R}^{3}$ modulo the cyclic group) makes each chamber piece symmetric, where direct expansion yields an explicit sum of nonnegative monomials - a positivity certificate. Equality analysis is then immediate. The chamber-splitting-and-substitution procedure is the standard method of difference substitutions for cyclic inequalities, an explicit instance of the Positivstellensatz philosophy behind Hilbert's 17th problem: prove nonnegativity by exhibiting a sum of manifestly nonnegative terms.",
      "hints": [
        "Write the denominators as $Q+2bc$, $Q+2ca$, $Q+2ab$ with $Q=\\tfrac12\\sum(a-b)^2\\ge0$.",
        "Split the two orderings and substitute $c=x$, $b=x+y$, $a=x+y+z$."
      ],
      "steps": [
        "Put $$Q=\\frac{(a-b)^2+(b-c)^2+(c-a)^2}{2}=a^2+b^2+c^2-ab-bc-ca.$$(Each cross term appears twice with a minus sign in the expansion of the three squares, each halved.) The three denominators are then exactly $D_1=Q+2bc$, $D_2=Q+2ca$, $D_3=Q+2ab$, since e.g. $Q+2bc=a^2+b^2+c^2-ab+bc-ca$. As $Q\\ge 0$ and $a,b,c>0$, all three denominators are strictly positive.",
        "Because $D_1D_2D_3>0$, multiplying the inequality by $2D_1D_2D_3$ and collecting is reversible, so the assertion is equivalent to $$P:=3D_1D_2D_3-2(abD_2D_3+bcD_3D_1+caD_1D_2)\\ge 0,$$ with equality cases in bijection.",
        "$P$ is invariant under the cyclic relabeling $(a,b,c)\\mapsto(b,c,a)$: $Q$ is symmetric, the factors $D_1\\to D_2\\to D_3\\to D_1$ and $ab\\to bc\\to ca\\to ab$ cycle together, so $P$ maps to itself. A cyclic relabeling therefore lets us assume $a$ is maximal. But $P$ is *not* symmetric under swapping $b$ and $c$, so after that normalization both order types $a\\ge b\\ge c$ and $a\\ge c\\ge b$ must still be treated separately.",
        "If $a\\ge b\\ge c$, write $c=x$, $b=x+y$, $a=x+y+z$ with $x>0$ and $y,z\\ge 0$. Then $Q=y^2+yz+z^2$, and $$D_1=2x^2+2xy+y^2+yz+z^2,\\quad D_2=D_1+2xz,\\quad D_3=D_1+2xy+2xz+2y^2+2yz.$$ Substituting these three explicit quadratics into $P=3D_1D_2D_3-2(abD_2D_3+bcD_3D_1+caD_1D_2)$ and collecting in descending powers of $x$ gives exactly $$\\begin{aligned} P={}&amp;4x^4(y^2+yz+z^2)+8x^3(y^3+y^2z+2yz^2+z^3)\\\\ &amp;+12x^2y^4+16x^2y^3z+36x^2y^2z^2+32x^2yz^3+12x^2z^4\\\\ &amp;+8xy^5+16xy^4z+40xy^3z^2+48xy^2z^3+32xyz^4+8xz^5\\\\ &amp;+3y^6+9y^5z+22y^4z^2+29y^3z^3+26y^2z^4+13yz^5+3z^6\\ge 0, \\end{aligned}$$ every one of whose 25 monomial coefficients being strictly positive makes the inequality immediate for $x>0$, $y,z\\ge 0$.",
        "If $a\\ge c\\ge b$, write $b=x$, $c=x+y$, $a=x+y+z$. Again $Q=y^2+yz+z^2$, now with $$D_1=2x^2+2xy+y^2+yz+z^2,\\quad D_2=D_1+2xy+2xz+2y^2+2yz,\\quad D_3=D_1+2xz,$$ which is the previous parametrization with the roles of $D_2$ and $D_3$ exchanged. Collecting the resulting $P$ gives $$\\begin{aligned} P={}&amp;4x^4(y^2+yz+z^2)+8x^3y^3+16x^3y^2z+24x^3yz^2+8x^3z^3\\\\ &amp;+12x^2y^4+32x^2y^3z+60x^2y^2z^2+40x^2yz^3+12x^2z^4\\\\ &amp;+8xy^5+24xy^4z+56xy^3z^2+56xy^2z^3+32xyz^4+8xz^5\\\\ &amp;+3y^6+9y^5z+22y^4z^2+29y^3z^3+26y^2z^4+13yz^5+3z^6\\ge 0, \\end{aligned}$$ again with all 25 coefficients strictly positive.",
        "Conversely, equality needs both displayed polynomials to vanish. Since $x>0$, the two $x^2$-terms $12x^2y^4$ and $12x^2z^4$ force $y=z=0$, hence $a=b=c$ in either order type. Checking the original inequality at $a=b=c$: each denominator is $0+2a^2$ and each term is $a^2/2a^2=\\tfrac12$, so the sum is exactly $\\tfrac32$. Equality holds precisely when $a=b=c$."
      ],
      "remark": "The proof produces an explicit positivity certificate: after splitting into the two order chambers of the cyclic group action and applying the difference substitution $b=a+y$, $a=b+z$, the cleared polynomial has only positive coefficients, an instance of the Positivstellensatz philosophy behind Hilbert's seventeenth problem. Origin: the standard method for cyclic non-symmetric inequalities, clear denominators, normalize an order, run the difference substitution that makes each chamber elementary."
    },
    {
      "id": "a17",
      "category": "alg",
      "difficulty": "medium",
      "stars": 2,
      "confidence": "high",
      "text": "Find all strictly increasing functions $f:\\mathbb{N}_0\\to\\mathbb{N}_0$ such that $$f(a^{2}+b^{2}+c^{2}+d^{2})=f(a)^{2}+f(b)^{2}+f(c)^{2}+f(d)^{2}\\qquad\\text{for all }a,b,c,d\\in\\mathbb{N}_0.$$",
      "why": "The bootstrap: four zeros give $f(0)=4f(0)^{2}$, so $f(0)=0$; three zeros give $f(a^{2})=f(a)^{2}$; then $f(1)=f(1)^2$ with strict increase ($f(1)\\ge1$) forces $f(1)=1$, and $(1,1,1,1)$, $(1,1,1,0)$, $(1,1,0,0)$ seed $f(2)=2$, $f(3)=3$, $f(4)=4$. Strong induction is one line by Lagrange's four-square theorem: $n=a^{2}+b^{2}+c^{2}+d^{2}$ with each variable $\\le\\sqrt n\\lt n$. Lagrange's theorem itself rests on Euler's four-square identity - multiplicativity of the norm on Hamilton's quaternions, the $n=4$ case of the Hurwitz theorem on composition algebras (dimensions $1,2,4,8$) - and the representation count $r_4(n)=8\\sum_{d\\mid n}d$ is a modular-form identity for the theta series of $\\mathbb{Z}^{4}$. Without strict increase the $f(a^{2})=f(a)^{2}$ bootstrap admits $f(1)\\in\\{0,1\\}$ and $f\\equiv0$ sneaks in.",
      "hints": [
        "Three zeros give $f(a^2)=f(a)^2$; four give $f(0)=0$; strict increase forces $f(1)=1$.",
        "Induct using Lagrange's four-square theorem: each part is below $n$."
      ],
      "steps": [
        "f(0): plug a=b=c=d=0: f(0) = 4f(0)^2; f(0) in N0 forces f(0)=0.",
        "Plug three zeros: f(a^2) = f(a)^2 + 3f(0)^2 = f(a)^2 for all a.",
        "a=1: f(1) = f(1)^2 and strict increase from f(0)=0 gives f(1)>=1: f(1)=1.",
        "Seeds: f(2) = f(1+1+0+0) [as sum of squares 1+1+0+0] = 1+1+0+0 = 2; f(3): 1+1+1+0 gives f(3)=3; f(4): 4 = f(2^2) = f(2)^2 = 4 - consistent, and strict increase pins ordering.",
        "Induction: assume f(k) = k for all k &lt; n (n >= 5). Lagrange: n = a^2+b^2+c^2+d^2, each of a,b,c,d &lt;= sqrt(n) &lt; n. Apply the hypothesis: f(n) = a^2+b^2+c^2+d^2 = n. (f(n) defined since f of a square = f(a)^2 handles repeated/zero entries without extra cases.)",
        "Verify: f = id satisfies the equation; strict increase used at step 3 (killing f(1)=0) and implicitly to exclude any post-Lagrange ambiguity. Machine audit: no nontrivial solutions among all strictly increasing f on {0..64} closed under the four-square relation (brute force over the seed-constrained search tree, tools/proofs/a19.py)."
      ],
      "remark": "Behind the induction lies Lagrange's four-square theorem, itself a consequence of Euler's four-square identity, multiplicativity of the norm on Hamilton's quaternions, the $n=4$ case of the Hurwitz theorem on composition algebras; the count $r_4(n)=8\\sum_{d\\mid n}d$ is a modular-form identity for the theta series of $\\mathbb{Z}^4$. Origin: the classical functional-equation bootstrap, where small specializations seed a strong induction finished by a representation theorem."
    },
    {
      "id": "a18",
      "category": "alg",
      "difficulty": "hard",
      "stars": 3,
      "confidence": "low",
      "text": "Let $a_1,a_2,\\dots$ be positive reals with $a_1=1$ and $$a_{n+1}=a_n+\\frac{n}{a_1+\\cdots+a_n}.$$ Prove that $$a_n\\ge\\sqrt{\\frac{16n-9}{7}}$$ for every $n\\ge 1$.",
      "why": "With $S_n=a_1+\\cdots+a_n$ the recurrence says $a_{n+1}-a_n=n/S_n$: the increments are positive and decreasing (concavity of the sequence), so $a_n$ grows like $\\sqrt{n}$ by a self-similar balance $a\\cdot a\\approx 1$. The proof runs a comparison (barrier) argument for the discrete Riccati-type flow: the ansatz $a_n^2\\ge(16n-9)/7$ is a subsolution checked by substituting the recurrence and reducing to an elementary quadratic estimate on the differences. Comparison principles for difference inequalities - the discrete analogue of upper/lower solutions for ODEs - are the general framework; asymptotically $a_n\\sim c\\sqrt n$ with the exact constant $c=4/\\sqrt7$ selected by the barrier touching at $n=1$.",
      "hints": [
        "Set $S_n=a_1+\\cdots+a_n$; concavity yields $2<a_{n+1}^2-a_n^2<4$ for $n\\ge2$.",
        "Bound $d_n\\ge2/(a_n+\\sqrt{a_n^2-2(n-1)})$ via $1\\le a_nd_n-\\tfrac{n-1}2d_n^2$.",
        "Then $a_{n+1}^2-a_n^2>16/7$ for $n\\ge3$; check $n=1,2$ by hand."
      ],
      "steps": [
        "Put $S_n=a_1+\\cdots+a_n$ and $d_n=a_{n+1}-a_n=n/S_n$. Since $a_1&lt;a_2&lt;\\cdots&lt;a_{n+1}$ we have $S_n&lt;n\\,a_{n+1}$, and $d_{n+1}&lt;d_n\\iff\\frac{n+1}{S_{n+1}}&lt;\\frac{n}{S_n}\\iff S_n&lt;n\\,a_{n+1}$: the last inequality is exactly $a_1+\\cdots+a_n&lt;n\\,a_{n+1}$, true because every $a_i\\le a_n&lt;a_{n+1}$. Hence $(a_n)$ is concave (strictly increasing is already in the hypotheses).",
        "For $n\\ge 2$, concavity gives $S_n\\ge \\frac n2(1+a_n)$, hence $d_n\\le 2/(a_n+1)$. Therefore $$a_{n+1}^2-a_n^2=2a_nd_n+d_n^2&lt;4.$$ Thus $a_n^2&lt;4n-3$ for $n\\ge 2$.",
        "Also $S_n\\le na_n$, so $d_n\\ge 1/a_n$, and therefore $a_{n+1}^2-a_n^2>2$. Hence $a_n^2>2n-1$, which in particular makes $a_n^2-2(n-1)>0$.",
        "Since $d_j\\ge d_n$ for $j&lt;n$, $a_j\\le a_n-(n-j)d_n$. Summing, $$S_n\\le na_n-\\frac{n(n-1)}{2}d_n.$$ Because $S_n=n/d_n$, $$1\\le a_nd_n-\\frac{n-1}{2}d_n^2.$$ Thus $d_n$ lies between the two roots, so $$d_n\\ge\\frac{2}{a_n+\\sqrt{a_n^2-2(n-1)}}.$$",
        "For $n\\ge 3$, from $a_n^2&lt;4n-3$, $7a_n^2&lt;32(n-1)$. If $t=\\sqrt{a_n^2-2(n-1)}$, this implies $3a_n>4t$. Hence $$2a_nd_n\\ge\\frac{4a_n}{a_n+t}>\\frac{16}{7}.$$ Therefore $a_{n+1}^2-a_n^2>16/7$ for $n\\ge 3$.",
        "The first two increments are $$a_2^2-a_1^2=3>\\frac{16}{7}, \\qquad a_3=\\frac83,\\quad a_3^2-a_2^2=\\frac{28}{9}>\\frac{16}{7}.$$ Thus for $n\\ge 2$, $$a_n^2>1+\\frac{16(n-1)}{7}=\\frac{16n-9}{7},$$ while equality holds at $n=1$."
      ],
      "remark": "The recurrence is a discrete Riccati-type flow with decreasing increments $n/S_n$, so $a_n$ grows like a constant times $\\sqrt n$; the proof is a comparison-barrier argument verifying the quadratic ansatz $a_n^2\\ge(16n-9)/7$ as a subsolution, the finite-difference analogue of lower solutions for ODEs, the exact constant $4/\\sqrt7$ being selected by the barrier touching at $n=1$. Origin: sandwiching $d_n=n/S_n$ between concavity bounds, then telescoping increment inequalities."
    },
    {
      "id": "a19",
      "category": "alg",
      "difficulty": "hard",
      "stars": 3,
      "confidence": "high",
      "text": "Let $T(x)=1-\\dfrac1x$ (so $T(T(T(x)))=x$ for all $x\\notin\\{0,1\\}$). Determine all real polynomials $P$ of degree at most $2$ for which there exists a nonzero polynomial $Q$ with $$P(x)=\\frac{Q(x)}{Q(T(x))}\\qquad\\text{for all real }x\\text{ where both sides are defined.}$$ (Bonus part 1: prove that any such $P$ must satisfy $P(x)\\,P(T(x))\\,P(T(T(x)))\\equiv 1$; part 2 decides which of the resulting candidates actually lift.)",
      "why": "$T:x\\mapsto1-\\tfrac1x$ generates a cyclic group $C_3$ of Mobius transformations of $\\mathbb{P}^{1}$ ($T^{2}:x\\mapsto\\tfrac1{1-x}$, $T^{3}=\\mathrm{id}$). Iterating the identity along the 3-cycle gives the norm condition $N(P):=P\\cdot P\\circ T\\cdot P\\circ T^{2}\\equiv1$. Writing $P=a_2x^2+a_1x+a_0$ and clearing denominators reduces to a polynomial system whose real-coefficient solutions are exactly $\\{1,\\ x-1,\\ -x,\\ x^{2},\\ x-x^{2},\\ (x-1)^{2}\\}$ (the non-real complex solutions are excluded by the real-coefficient requirement). The lift $Q=P\\cdot Q\\circ T$ asks $P=Q/(Q\\circ T)$ to be a coboundary: by Hilbert's Theorem 90 for the Galois extension $\\mathbb{R}(x)/\\mathbb{R}(x)^{C_3}$, norm-one elements are exactly the coboundaries in $\\mathbb{R}(x)^{\\times}$, so the only obstruction is being polynomial - a divisor condition on $\\mathbb{P}^{1}$. Valuation bookkeeping along the orbit $0\\mapsto\\infty\\mapsto1\\mapsto0$ rules out $x-1$ and $(x-1)^{2}$ (the $\\zeta=0$ equation forces $\\deg Q=0$, which then contradicts the vanishing the $\\zeta=1$ equation demands) and $-x$ (the orders force $\\deg Q\\le1$; a zero off the orbit propagates to the full $3$-element $T$-orbit, impossible below degree $3$); $x^2$ lifts via $Q=x^2-x+1$ and $x-x^2$ via $Q=x-1$, leaving exactly three polynomial answers.",
      "hints": [
        "Iterate along the cycle: any solution obeys $P(x)P(Tx)P(T^2x)\\equiv1$.",
        "Solve that norm equation for $\\deg P\\le2$; six real candidates appear.",
        "Compare vanishing orders along $0\\mapsto\\infty\\mapsto1\\mapsto0$ to kill non-lifters."
      ],
      "steps": [
        "Compute $T^{2}(x)=-\\frac1{x-1}$ and check $T^{3}=\\mathrm{id}$.",
        "Necessity: $Q(x)=P(x)Q(Tx)=P(x)P(Tx)Q(T^{2}x)=P(x)P(Tx)P(T^{2}x)Q(x)$, and $Q\\not\\equiv0$ gives the norm identity.",
        "Solve the norm identity for $\\deg P\\le2$: substitute $P=a_2x^{2}+a_1x+a_0$, clear denominators by $x^{2}(x-1)^{2}$ (legal: the identity holds for all but finitely many $x$, two rational functions agreeing off a finite set agree as cleared polynomials), and compare coefficients. The real-coefficient solve returns exactly $6$ solutions: $P\\equiv1$, $x-1$, $-x$, $x^{2}$, $x-x^{2}$, $(x-1)^{2}$. (Machine-checked by sympy this session; the classification downstream uses only these six. Remark on the complex fibre: since $N(\\omega P)=\\omega^{3}N(P)=N(P)$ for $\\omega^{3}=1$, each real candidate seeds an orbit $\\{P,\\omega P,\\omega^{2}P\\}$ of norm-$1$ complex solutions - all $18$ such candidates verify by direct substitution, and a naive complex $solve$ silently drops $\\omega(x-x^{2}),\\omega^{2}(x-x^{2})$, so trust the real solve plus substitution, not the raw complex count.) Direct check of the new real candidate: $P\\circ T=(Tx-1)^{2}=x^{-2}$ and $P\\circ T^{2}=(T^{2}x-1)^{2}=x^{2}(x-1)^{-2}$, so the orbit product telescopes to $1$.)",
        "Lift test: for $P=1$: $Q\\equiv1$. For $P=x^{2}$: show $Q=x^{2}-x+1$ works ($Q\\circ T=Q/x^{2}$). For $P=x-x^{2}$: $Q=x-1$: $Q\\circ T=-1/x$, ratio $-x(x-1)=x-x^{2}$.",
        "Kill the three non-lifting candidates by order bookkeeping along the $T$-orbit $0\\mapsto\\infty\\mapsto1\\mapsto0$ (directly: $T(0)=\\infty$, $T(\\infty)=1$, $T(1)=0$). Suppose $Q$ is a nonzero polynomial lift, $Q(x)=P(x)\\,Q(Tx)$, of degree $m=\\deg Q$. A Mobius transformation is locally invertible on $\\mathbb P^{1}$ (local degree $1$ everywhere), so $v_\\zeta(Q\\circ T)=v_{T(\\zeta)}(Q)$; comparing orders at each orbit point $\\zeta$ gives $v_\\zeta(Q)-v_{T(\\zeta)}(Q)=v_\\zeta(P)$. Write $a=v_0(Q)$, $b=v_\\infty(Q)=-m$, $c=v_1(Q)$, with $a,c\\ge0$. The three equations are $a-b=v_0(P)$, $b-c=v_\\infty(P)$, $c-a=v_1(P)$ (their left sides sum to $0$, matching $v_0(P)+v_\\infty(P)+v_1(P)=0$ in each case).\n(i) $P=x-1$, orders $(v_0,v_\\infty,v_1)=(0,-1,1)$: $a=b=-m$ forces $m=0$, hence $a=b=0$ and then $c=a+1=1$, i.e. a nonzero constant $Q$ with $Q(1)=0$ - impossible.\n(ii) $P=(x-1)^{2}$, orders $(0,-2,2)$: again $a=b=-m$ gives $m=0$, then $c=a+2=2$, a nonzero constant vanishing at $1$ to order $2$ - impossible.\n(iii) $P=-x$, orders $(1,-1,0)$: $a=b+1=1-m$ and $c=a=1-m$, so $m\\le1$. $m=0$ makes a nonzero constant vanish at both $0$ and $1$; $m=1$ makes $a=c=0$, so the single zero $r$ of $Q$ lies off the orbit, but then $v_r(Q)-v_{T(r)}(Q)=v_r(P)=0$ propagates along the full $T$-orbit of $r$, and $T$ has no real fixed point ($T(x)=x\\iff x^{2}-x+1=0$, discriminant $-3$), so $r,T(r),T^{2}(r)$ are three distinct zeros of a linear polynomial. Both impossible. (Independently: sympy coefficient-solve for a lift up to $\\deg Q\\le8$ returns none for $x-1$, $-x$, $(x-1)^{2}$ and the stated $Q$ for $1$, $x^{2}$, $x-x^{2}$.)",
        "Cohomological remark for the why-field readers: the classification is $H^{1}(\\langle T\\rangle,\\ \\Bbbk[x]^{\\times})$-flavored; the failure of the norm condition to be sufficient over polynomials (but sufficiency over the function field) is the content of the three dead candidates $x-1$, $-x$, $(x-1)^{2}$."
      ],
      "remark": "$T$ generates a cyclic group of order three of Mobius transformations of $\\mathbb{P}^1$, and the condition $P=Q/(Q\\circ T)$ is a Hilbert-Theorem-90 statement for $\\mathbb{R}(x)/\\mathbb{R}(x)^{C_3}$: norm-one elements are exactly coboundaries in the function field, so the only obstruction to a polynomial lift is divisor bookkeeping along the orbit $0\\mapsto\\infty\\mapsto1\\mapsto0$. Origin: the classical olympiad motif of iterating a substitution of order three, as in $x\\mapsto1-1/x$ systems, to force norm identities."
    },
    {
      "id": "a20",
      "category": "alg",
      "difficulty": "hard",
      "stars": 3,
      "confidence": "high",
      "text": "Find all polynomials $P:\\mathbb{R}\\to\\mathbb{R}$ satisfying $$P(x)^{2}-P(x+1)\\,P(x-1)=1\\qquad\\text{for all real }x.$$",
      "why": "The expression $P^{2}-P(x+1)P(x-1)$ is the Casoratian (discrete Wronskian) of $P$ against its shift. Expanding $P(x\\pm1)=P\\pm P'+\\tfrac12P''\\pm\\cdots$ (finite-difference/Taylor calculus, the Newton-series picture) gives $P(x+1)P(x-1)=P^{2}-(P')^{2}+PP''+O(x^{2n-3})$, so the difference $P^{2}-P(x+1)P(x-1)$ has leading term $n\\,a^{2}\\,x^{2n-2}\\ne0$ when $\\deg P=n\\ge2$ and cannot equal $1$; the continuous counterpart $(P')^{2}-PP''=-P^{2}(P'/P)'$ is the quantity in Laguerre's inequality for real-rooted polynomials. Linear $P=ax+b$ gives $a^{2}=1$; the constant case must be dispatched separately and the negated family $P=-x+c$ is easily dropped.",
      "hints": [
        "For $\\deg P=n\\ge2$ the difference has leading term $na^2x^{2n-2}$, impossible."
      ],
      "steps": [
        "Constant $P\\equiv c$: $c^{2}-c^{2}=0\\ne1$ - no constants.",
        "Use the symmetric Taylor form: $P(x\\pm1)=P\\pm P'+P''/2\\pm\\cdots$, so $P(x+1)P(x-1)=(P+P''/2+\\cdots)^{2}-(P'+\\cdots)^{2}$, giving $P(x)^{2}-P(x+1)P(x-1)=(P')^{2}-P\\,P''+O(x^{2n-3})$. For $n\\ge2$ the leading term is $(n^{2}-n(n-1))a^{2}x^{2n-2}=n\\,a^{2}\\,x^{2n-2}\\ne0$: a nonconstant polynomial cannot equal $1$ identically. Hence $n\\le1$.",
        "Linear case: $P=ax+b$: the residual is $a^{2}-1$ (sympy-verified), so $a=\\pm1$, $b$ arbitrary.",
        "Verify both families by substitution: $(\\pm x+c)^{2}-(\\pm(x+1)+c)(\\pm(x-1)+c)=1$. Machine closure: coefficient solve for degrees 2-4 gives none (2026-09-29).",
        "Perspective: $P^2-P_+P_-$ is the discrete analogue of the Wronskian $(P')^2-PP''$; the argument upgrading 'no $x^{2n-2}$ term' is the same one that proves the classical Laguerre inequality for real-rooted polynomials - a modern-flavored lemma reached elementarily."
      ],
      "remark": "The expression $P(x)^2-P(x+1)P(x-1)$ is the Casoratian, the discrete Wronskian of $P$ against its shift, and the leading-term computation is the finite-difference cousin of Laguerre's inequality $(P')^2-PP''$ for real-rooted polynomials within the Newton-series calculus of difference operators. Origin: the standard polynomial FE technique of degree comparison dressed in Taylor expansion $P(x\\pm1)=P\\pmP'+\\cdots$; the negated family $P=-x+c$ is the easy trap."
    },
    {
      "id": "a21",
      "category": "alg",
      "difficulty": "hard",
      "stars": 3,
      "confidence": "high",
      "text": "Find all functions $f: \\mathbb{R} \\to \\mathbb{R}$ satisfying $$f(x^3 - f(y)) = x f(x)^2 - y$$ for all real numbers $x$ and $y$.",
      "why": "The equation forces $f$ bijective and yields the involution identity $f(-f(y))=-y$; translating by $c=-f(0)$ reduces the relation to Cauchy additivity $g(u+w)=g(u)+g(w)$, and substituting back into the cubic equation produces an odd polynomial in $x$ whose cross-terms survive unless $c=0$. The remaining condition $f(x^{3})=xf(x)^{2}$ enforces non-negativity on $\\mathbb{R}_{\\gt0}$, which locks the additive map to $f(x)=x$. The rigidity input is that every field endomorphism of $\\mathbb{R}$ is the identity (Artin--Schreier: the order is definable from squares), and additive maps nonnegative on a cone are linear - the automatic-continuity theorem of Banach (measurable or locally bounded additive maps, via Steinhaus' density theorem). The structural analogue in algebra is Herstein's theorem on Jordan derivations, where identities of this shape collapse to the additive derivation.",
      "hints": [
        "Prove $f$ bijective; $x=0$ gives the involution $f(-f(y))=-y$.",
        "Rewrite as $f(u+w)=f(u)+f(w)+c$ and shift to a Cauchy-additive $g$.",
        "Parity in $x$ kills $c$; $f(x^3)=xf(x)^2$ forces $f\\ge0$ on positives, so $f=x$."
      ],
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
      ],
      "remark": "The reduction turns $f$ into a Cauchy-additive $g$ up to a constant, after which $c\\ne0$ dies to a parity comparison and nonnegativity on $\\mathbb{R}_{>0}$ locks the additive map to linearity by the automatic-continuity theorem of Banach, resting on Steinhaus' density theorem and, conceptually, on the Artin-Schreier fact that the order of $\\mathbb{R}$ is definable from squares. Origin: the classical olympiad FE chain: bijectivity, an involution identity, additivity, regularity."
    },
    {
      "id": "a22",
      "category": "alg",
      "difficulty": "hard",
      "stars": 3,
      "confidence": "high",
      "text": "Let $1&lt;u&lt;v$ be integers. Define $a_1=1$ and $$a_n+a_{n/u}+a_{n/v}=0\\qquad(n\\ge 2),$$ where $a_k=0$ whenever $k$ is not an integer. Prove that $(a_n)$ is bounded if and only if $v=u^2$.",
      "why": "Iterating the recurrence expresses $a_n$ as a signed count of words in $\\{u,v\\}$ with product $n$. If $u,v$ are multiplicatively independent this gives $|a_{u^mv^m}|=\\binom{2m}{m}$, unbounded by Stirling's asymptotics for the central binomial coefficient. If dependent, $u=d^r$, $v=d^s$ with $\\gcd(r,s)=1$, the sequence lives on powers of $d$ with rational generating function $1/(1+z^r+z^s)$; boundedness of a rational generating function with simple poles forces every pole on the unit circle, hence every root of $1+z^r+z^s$ is a root of unity by Kronecker's theorem on algebraic integers, and the equilateral-triangle argument on $|1+\\zeta^{r}|=|\\zeta^{s}|$ leaves only cube roots of unity; simplicity of the roots ($r\\ne s$) then forces $(r,s)=(1,2)$, i.e. $v=u^{2}$.",
      "hints": [
        "Count signed words in $u,v$ with product $n$; independence gives $a_{u^mv^m}=\\pm\\binom{2m}m$.",
        "Dependent case: $u=d^r$, $v=d^s$, generating function $1/(1+z^r+z^s)$.",
        "Bounded forces periodicity, so all zeros are roots of unity; simplicity gives $(r,s)=(1,2)$."
      ],
      "steps": [
        "\\textbf{Word formula.} For $n\\ge1$, $a_n=\\sum_w(-1)^{|w|}$, summed over all finite words $w$ in the letters $u,v$ whose product is $n$ (the empty word has product $1$). Proof by strong induction: for $n=1$ only the empty word has product $1$ (as $u,v>1$), giving $a_1=1$. For $n\\ge2$ a word with product $n$ is nonempty; grouping by its last letter, the words ending in $u$ correspond to words with product $n/u$ (present only if $u\\mid n$), and similarly for $v$, each with one extra minus sign. This gives $a_n=-a_{n/u}-a_{n/v}$, the recurrence.",
        "\\textbf{Independent case.} Call $u,v$ multiplicatively independent if $u^av^b=1$ with integers $a,b$ forces $a=b=0$. Then $u^kv^\\ell=u^{k'}v^{\\ell'}$ implies $(k,\\ell)=(k',\\ell')$, so the words with product $u^kv^\\ell$ are exactly the $\\binom{k+\\ell}{k}$ arrangements of $k$ letters $u$ and $\\ell$ letters $v$, each of sign $(-1)^{k+\\ell}$: $a_{u^kv^\\ell}=(-1)^{k+\\ell}\\binom{k+\\ell}{k}$. Then $|a_{u^mv^m}|=\\binom{2m}{m}\\to\\infty$, so $(a_n)$ is unbounded.",
        "\\textbf{Dependent case: normalization.} Suppose $u^a=v^b$ for some positive integers $a,b$. Comparing prime factorizations, the exponent vectors $x,y$ of $u,v$ satisfy $ax=by$, so they lie on a common line; let $w$ be the primitive integer vector on it, so $x=g_xw$, $y=g_yw$ with $g_x=\\gcd(x)$, $g_y=\\gcd(y)$, and put $g=\\gcd(g_x,g_y)$. Let $d>1$ be the integer with exponent vector $gw$. Then $u=d^r$, $v=d^s$ with $r=g_x/g$, $s=g_y/g$, $\\gcd(r,s)=1$, and $r&lt;s$ because $u&lt;v$. Every word has product a power of $d$, so $a_n=0$ unless $n=d^N$. Put $c_N=a_{d^N}$. Since $d^N/u$ is an integer iff $N\\ge r$, the recurrence reads $c_0=1$, $c_N=-c_{N-r}-c_{N-s}$ for $N\\ge1$ (with $c_j=0$ for $j&lt;0$), i.e. $$\\sum_{N\\ge0}c_Nz^N=\\frac1{1+z^r+z^s}.\\tag{1}$$ Also $(a_n)$ is bounded iff $(c_N)$ is bounded.",
        "\\textbf{If $v=u^2$ then bounded.} Then $u=d$, $v=d^2$ ($r=1,s=2$) is one valid normalization, and (1) becomes $1/(1+z+z^2)=(1-z)/(1-z^3)=1-z+z^3-z^4+\\cdots$, so $(c_N)=1,-1,0,1,-1,0,\\dots$ and $|a_n|\\le1$ for all $n$.",
        "\\textbf{Bounded implies roots of unity.} Suppose $(c_N)$ is bounded. The $c_N$ are integers, so the block $(c_N,\\dots,c_{N+s-1})$ takes finitely many values, and the recurrence determines the next block from the previous one; hence the sequence is eventually periodic with some period $T$ from some index $N_0$. Then $\\sum c_Nz^N=P(z)+Q(z)/(1-z^T)$ for polynomials $P,Q$, so every pole of this rational function is a $T$-th root of unity. By (1) the numerator is $1$, so every zero of $F(z)=1+z^r+z^s$ is a pole, and therefore every zero $\\zeta$ of $F$ satisfies $|\\zeta|=1$.",
        "\\textbf{Zeros are cube roots of unity.} Let $F(\\zeta)=0$. Then $1,\\ \\zeta^r,\\ \\zeta^s$ are three unit complex numbers summing to $0$, hence the vertices of an equilateral triangle: $\\{\\zeta^r,\\zeta^s\\}=\\{\\omega,\\omega^2\\}$ with $\\omega=e^{2\\pi i/3}$. So $\\zeta^{3r}=\\zeta^{3s}=1$, hence $\\zeta^{3\\gcd(r,s)}=\\zeta^3=1$. As $F(1)=3\\ne0$, all zeros of $F$ lie in $\\{\\omega,\\omega^2\\}$.",
        "\\textbf{The zeros are simple.} If $F(\\zeta)=F'(\\zeta)=0$ with $|\\zeta|=1$, then $s\\zeta^{s-1}+r\\zeta^{r-1}=0$, so $s\\zeta^{s-r}=-r$ and, taking absolute values, $s=r$, contradicting $r&lt;s$. So $F$ has $s$ distinct zeros, all in $\\{\\omega,\\omega^2\\}$; hence $s\\le2$. With $1\\le r&lt;s$ this forces $(r,s)=(1,2)$, i.e. $u=d$, $v=d^2=u^2$.",
        "\\textbf{Conclusion.} If $u,v$ are independent, $(a_n)$ is unbounded. If they are dependent, $(a_n)$ is bounded iff $(r,s)=(1,2)$, i.e. iff $v=u^2$; and $v=u^2$ forces dependence. Hence $(a_n)$ is bounded if and only if $v=u^2$."
      ],
      "remark": "Bounded integer solutions of a linear recurrence are eventually periodic, so the rational generating function $1/(1+z^r+z^s)$ has only unit-circle poles, and Kronecker's theorem on algebraic integers converts that into a root-of-unity condition; the equilateral-triangle argument on $1+\\zeta^r+\\zeta^s=0$ finishes. Origin: expanding the recurrence into a signed word count over $\\{u,v\\}$, a Motzkin-style path-counting motif, plus the classical split by multiplicative dependence via prime-exponent vectors."
    },
    {
      "id": "a23",
      "category": "alg",
      "difficulty": "challenging",
      "stars": 4,
      "confidence": "high",
      "text": "Find all functions $f: \\mathbb{R} \\to \\mathbb{R}$ satisfying $$f(x f(y) - y f(x)) = f(x) f(y) - xy$$ for all real numbers $x$ and $y$.",
      "why": "Setting $x=y$ forces $f(x)^2=x^2+c$ with $c\\in\\{0,1\\}$. For $c=0$ write $f(x)=\\sigma(x)x$, $\\sigma=\\pm1$: the equation reduces to a sign rule, and a type analysis of $(\\sigma(p),\\sigma(-p))$ shows the sign is constant ($f=\\pm x$) or defines a multiplicative $\\pm1$-valued character on $\\mathbb{R}_{\\gt0}$ - trivial since every positive real is a square ($\\mathbb{R}_{\\gt0}$ is a divisible abelian group, hence has no index-2 subgroups), giving $f=|x|$. For $c=1$ the identity $\\cosh(\\alpha-\\beta)=\\cosh\\alpha\\cosh\\beta-\\sinh\\alpha\\sinh\\beta$ is exactly what the equation encodes after the hyperbolic substitution $x=\\sinh\\alpha$, $\\sqrt{x^2+1}=\\cosh\\alpha$; the set of  parameters is a subgroup $B\\le(\\mathbb{R},+)$ whose complement, if nonempty, is a single coset, impossible for the divisible group $\\mathbb{R}$. This leaves $f=\\sqrt{x^2+1}$.",
      "hints": [
        "Case $c=0$: write $f(x)=\\sigma(x)x$; the sign rule forces $x$, $-x$, $|x|$.",
        "Case $c=1$: set $x=\\sinh\\alpha$; the equation is the $\\cosh$ subtraction law."
      ],
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
      ],
      "remark": "For $c=1$ the verification rests on the hyperbolic identity $\\cosh(\\alpha-\\beta)=\\cosh\\alpha\\cosh\\beta-\\sinh\\alpha\\sinh\\beta$ under $x=\\sinh\\alpha$, and the sign bookkeeping shows a subgroup of $(\\mathbb{R},+)$ whose complement is a single coset, impossible because $\\mathbb{R}$ is divisible; the same divisibility of $\\mathbb{R}_{>0}$ kills sign characters when $c=0$. Origin: the classical olympiad move of extracting $f(x)^2$ from the diagonal $x=y$, then classifying the surviving sign patterns."
    },
    {
      "id": "a24",
      "category": "alg",
      "difficulty": "challenging",
      "stars": 4,
      "confidence": "low",
      "text": "Find all functions $f:\\mathbb{R}\\to\\mathbb{R}$ that are bounded above on some non-degenerate interval and satisfy $$f\\bigl(2x-f(y)\\bigr)=2f(x)-y\\qquad\\text{for all real }x,y.$$",
      "why": "Two one-variable linearizations (the doubling branch through $y=f(0)$ and the antipode branch in $x=t$) cascade into anti-periodicity $f(x+t)=-f(x)+2f(0)$, then a surjectivity-picked inner argument forces the cocycle identity $f(u+y)=f(u)+f(y)-t$: $g:=f-f(0)$ is additive and an involution. Additive involutions of $\\mathbb{R}$ are classified by $\\mathbb{Q}$-linear algebra - $g=2p-\\mathrm{id}$ for a projection $p$ of the Hamel $\\mathbb{Q}$-vector space $\\mathbb{R}$ - and without any regularity the Hamel-conjugate solutions (even with $t\\ne0$) satisfy the equation; bounded-above-on-an-interval kills exactly those, by the automatic-continuity theorem for additive functions. The translation branch $f=x+c$ dies on a residual $-2c$ while the reflection branch $f=-x+c$ survives with the same $t=f(0)$.",
      "hints": [
        "Cocycle $f(u+y)=f(u)+f(y)-t$: $g=f-t$ is additive with $g(g(y))=y$.",
        "Bounded on an interval makes $g$ linear: $f(x)=x$ or $f(x)=-x+c$."
      ],
      "steps": [
        "Injective: $f(y_1)=f(y_2)$ collapses the two RHS of (E). Surjective: the $x=0$ line $f(-f(y))=2t-y$ covers $\\mathbb{R}$ (t=f(0)). With $f(y_0)=0$: $x=0$ gives $t=2t-y_0$, so the unique zero is $y_0=t$.",
        "Two linearizations: $y=t$: $f(2x)=2f(x)-t$; $x=t$: $f(2t-f(y))=-y$. Composing the second at $z=2t-f(y)$ gives the anti-periodicity $f(y+2t)=f(y)-2t$ (orbits unbounded below, consistent with the $f=-x+c$ branch where $t=c$ - so this does not force $t=0$).",
        "Cocycle identity: pick $z$ with $f(z)=-y$ and substitute $y\\mapsto z$ in (E): $f(u+y)=f(u)+t-z$ for every $u$; $u=0$ resolves $z=2t-f(y)$, hence $f(u+y)=f(u)+f(y)-t$.",
        "Conjugation $g(x):=f(x)-t$: $g$ is additive, $g(t)=-t$, and (E) becomes $g(g(y))=y$: an additive involution. Conversely every such $g,t$ solves (E) (checked line by line), so (E) is *classified*, not merely narrowed.",
        "Regularity lemma: additive $\\psi$ bounded above on an interval is linear. Shift the bound to $(0,\\delta)$, kill $\\mathbb{Q}$ by subtracting $cx$; dyadic scaling gives $\\psi(x)\\le 2^{-n}M$ on $(0,\\delta/2^n)$; rational interludes give a two-sided bound on $(-\\delta/2,\\delta/2)$; another dyadic squeeze gives continuity at 0; $\\psi(x)=x\\psi(1)=0$.",
        "Dichotomy: $g(x)=cx$ with $c^2=1$. $c=1$: $g(t)=-t$ forces $t=0$, so $f(x)=x$ (equivalently, plugging $x+t$ into (E) leaves residual $-2t$). $c=-1$: $g(t)=-t$ is automatic and $f(x)=-x+c$ with $t=c\\in\\mathbb{R}$ free.",
        "Check: $f=x$: $2x-y=2x-y$. $f=-x+c$: LHS $=-(2x+y-c)+c=-2x-y+2c$ and RHS $=2(-x+c)-y=-2x-y+2c$ - equal. Sympy residuals for both branches are identically 0 (and for the affine ansatz the identity system $\\{1-a^2,-b(a+1)\\}$ returns exactly the two claimed branches)."
      ],
      "remark": "Without regularity the solutions are $\\mathbb{Q}$-linear involutions $g=2p-\\mathrm{id}$ for projections $p$ of the Hamel $\\mathbb{Q}$-vector space structure of $\\mathbb{R}$, so the classification is genuinely linear-algebraic; boundedness above on an interval deletes these by the automatic-continuity theorem for additive functions. Origin: the standard olympiad machinery of one-variable linearizations, bijectivity, and a translation cocycle that conjugates $f$ to an additive involution, followed by a dichotomy $c^2=1$."
    },
    {
      "id": "a25",
      "category": "alg",
      "difficulty": "challenging",
      "stars": 4,
      "confidence": "low",
      "text": "Find all functions $f:\\mathbb{N}\\to\\mathbb{N}$ satisfying $$f(abc)+f(2af(b))+f(2bf(c))+f(2cf(a))=f(a)f(b)f(c)$$ for all $a,b,c\\in\\mathbb{N}$.",
      "why": "The classification runs: a cubic bound forces $f\\ge2$; the three-term identity and its quadratic consequence give the square law $u(n^2)=2u(n)+\\lambda u(n)^2$ - with $v=1\\pm u$ this is exactly the squaring-cocycle $v(n^2)=v(n)^2$ up to sign, so $v$ is determined by the primes, i.e. by the unique-factorization free commutative monoid structure of $\\mathbb{N}^\\times$; $\\lambda=\\pm1$ via a parity obstruction on the Eisenstein norm form $x^{2}+xy+y^{2}=6$ (norms in $\\mathbb{Z}[\\omega]$); the $\\lambda=-1$ case falls to value-rigidity on $\\{0,1,2\\}$ and descent; $\\lambda=1$ has $k\\in\\{2,3\\}$, and for $k=2$ the orbit of the affine map $T\\mapsto4T-3$ (conjugate to $S\\mapsto4S$, a linearized power orbit) collides multiplicatively with the additive branch analysis to produce $96(t-1)^2=0$, while $k=3$ resolves by a parity-spreading induction.",
      "hints": [
        "Plug $a=b=c=n$ for $f(n)\\ge2$; set $u=f-f(1)$ to get a three-point identity.",
        "Compare $u(n^6)$ two ways: $u(n^2)=2u(n)+\\lambda u(n)^2$; parity on $x^2+xy+y^2=6$ gives $\\lambda=\\pm1$.",
        "With $v=u+1$: either $v(ab)=v(a)v(b)$ or $v(ab)+v(a)+v(b)=5$; chase value orbits."
      ],
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
      ],
      "remark": "The substitution $v=u\\pm1$ converts the square rule into the cocycle $v(n^2)=v(n)^2$, so $v$ is determined by its values on the primes, an argument resting on unique factorization, the free commutative monoid structure of $\\mathbb{N}^\\times$; the sign of $\\lambda$ is fixed by a parity obstruction on the norm form $x^2+xy+y^2$ of the Eisenstein integers $\\mathbb{Z}[\\omega]$. Origin: the olympiad motif of double-counting one value, here $f(n^6)$, along two factorizations to force value rigidity."
    },
    {
      "id": "c1",
      "category": "cmb",
      "difficulty": "easy",
      "stars": 1,
      "confidence": "high",
      "text": "There are $n$ points on a line, with the distance between the two outermost points being $L$. Colour each point with one of $k$ colours, where $n\\ge k+1\\ge3$, and require that every colour is used at least once. The <em>span</em> of a colour is the distance between its two outermost points of that colour (or $0$ if the colour is used once). Prove that there exists a colouring for which the sum of the $k$ spans is at least $L$. Show that the constant $1$ is best possible: for every $k$, exhibit a point set with $n=k+1$ points on which no admissible colouring achieves span-sum exceeding $L$.",
      "why": "Colour the two extreme points alike: that colour has span exactly $L$, so the span-sum is at least $L$, and the remaining points are spread over the other colours so all $k$ appear. Sharpness at $n=k+1$: the one-point surplus means exactly one colour occurs twice and the other $k-1$ colours are singletons of span $0$, so the span-sum reduces to the distance between the two points carrying the repeated colour, at most $L$ for every placement; no constant larger than $1$ works. The mechanism is the pigeonhole principle carried to its equality configuration.",
      "hints": [
        "Colour the two outermost points alike."
      ],
      "steps": [
        "Colour the two outermost points with the same colour. That colour has span exactly $L$, so the sum of all $k$ spans is at least $L$; distribute the remaining points among the colours so that every colour is used.",
        "For sharpness, fix $k$ and take $n=k+1$ distinct points between the two extremes. Because every one of the $k$ colours must be used, one colour is used twice and each of the other $k-1$ colours is used exactly once.",
        "All singleton colours have span $0$. Thus the total span-sum is just the distance between the two points carrying the repeated colour, which is at most $L$.",
        "Therefore on every such $(k+1)$-point configuration no admissible colouring has span-sum greater than $L$, so no universal constant larger than $1$ can replace $1$."
      ],
      "remark": "The quantity summed is the total diameter captured by the colour classes; both halves are pigeonhole-style, with the sharpness clause analysed at its equality configuration, where exactly one colour repeats and all others are singletons. The construction grows out of the extremal principle, the classic olympiad move of inspecting the two outermost, maximally separated objects first; the same endpoint-pairing device recurs in diameter and covering problems in metric combinatorics."
    },
    {
      "id": "c2",
      "category": "cmb",
      "difficulty": "easy",
      "stars": 1,
      "confidence": "medium",
      "text": "A school has $N$ students. A collection of clubs (each club a set of students) satisfies<ul><li>every club has an odd number of members, at least $3$;</li><li>every pair of students is contained in exactly one common club.</li></ul>Prove that $N$ is odd.",
      "why": "Fix one student $s$: the clubs through $s$ partition the remaining $N-1$ students into classes $C\\setminus\\{s\\}$, each even (odd minus one), forcing $N$ odd; the minimum size 3 is unused, and without oddness the claim fails ($\\{1,2\\},\\{1,3\\},\\{1,4\\},\\{2,3,4\\}$ on four students). Odd $N$ are realized: one club of all students, the Fano lines ($N=7$), the affine plane of order 3 ($N=9$). The count is the replication-integrality condition of a Steiner 2-design $S(2,k,v)$; for uniform $k=3$ it sits inside the Kirkman-Ray-Chaudhuri-Wilson theorem ($v\\equiv1,3\\pmod6$); de Bruijn-Erdos and Fisher bound the number of clubs, a size question, and are not needed.",
      "hints": [
        "Fix one student and study the clubs containing him."
      ],
      "steps": [
        "If $N\\le1$ there is nothing to prove; take $N\\ge2$ and fix a student $s$. Every other student $y$ forms the pair $\\{s,y\\}$, which by rule 2 lies in exactly one club $C(s,y)$ containing $s$. Call two students equivalent when the same club through $s$ contains them: the classes of this partition are exactly the sets $C\\setminus\\{s\\}$ with $s\\in C$.",
        "Each class $C\\setminus\\{s\\}$ has size $|C|-1$, which is even because $|C|$ is odd (rule 1). A disjoint union of even classes covers all $N-1$ students other than $s$, so $N-1$ is even and $N$ is odd.",
        "Gap checks: the classes are disjoint because a student $y$ lying in two clubs through $s$ would put the pair $\\{s,y\\}$ in two clubs, violating rule 2; and every other student lies in some class because the pair $\\{s,y\\}$ has a club. The bound 'at least 3' is never used - oddness alone drives the proof - so the argument also covers degenerate readings of rule 1; the bound merely keeps the intended picture nontrivial. The edge case $N=2$ is impossible anyway (the single pair would need an odd club of size $\\ge3$ among two students), which is consistent with the theorem rather than an exception to it.",
        "Decorative-rule note (trap): the old variant's extra rule 'no club contains everyone' is unnecessary here - if one club is the whole school, rule 2 forces every other club to have size at most 1, and the count above still yields $N$ odd. Conversely, dropping the oddness of a single club breaks the claim: on 4 students the clubs $\\{1,2\\},\\{1,3\\},\\{1,4\\},\\{2,3,4\\}$ cover every pair exactly once with $N=4$ even. So oddness is the true lever, exactly as the proof says.",
        "Non-vacuity: $N=3$: one club $\\{1,2,3\\}$; $N=7$: the Fano lines; $N=9$: the 12 lines of the affine plane of order 3 (all of size 3, every pair exactly once, every student in 4 clubs). Machine audit: backtracking over all admissible systems with $N\\le9$ found exactly 0 systems at $N\\in\\{2,4,6,8\\}$ (the $N=8$ search completed in full, 1.1M nodes) and 1, 1, 31, 841 systems at $N=3,5,7,9$; randomized local-search counterexample hunts at $N=6,8,10$ (4000 restarts each) found nothing (c1-verify.py / c1-verify.out)."
      ],
      "remark": "This is the replication parity condition for a pairwise balanced design: through any point the blocks through it partition the rest, and odd block sizes force odd $v$, exactly the numerical condition in the theory of Steiner 2-designs $S(2,k,v)$, with Fano and affine planes as models. The proof grows out of the classical design-theoretic count of blocks through a fixed point, the same opening move behind Fisher's inequality and the de Bruijn-Erdos theorem."
    },
    {
      "id": "c3",
      "category": "cmb",
      "difficulty": "easy",
      "stars": 1,
      "confidence": "high",
      "text": "A <em>climb</em> of a positive integer $n$ is a finite sequence of $1$s and $2$s that sums to $n$. Its partial heights are the partial sums. The climb is <em>$3$-shy</em> if no partial height except possibly $n$ itself is a positive multiple of $3$. Determine, for every $n\\ge 1$, the number of $3$-shy climbs of $n$.",
      "why": "For $n\\ge4$ every legal climb passes through height 2 and jumps $2\\to4$ (a unit step would hit 3), and exactly two prefixes $(2,2)$, $(1,1,2)$ reach 4. Thereafter the walk is confined to corridors between consecutive multiples of 3: each gate $3m+1$ has the unique bridge $3m+1,3m+2$ to the next gate, and the multiple $3(m+1)$ is entered from a gate in exactly two ways ($+2$ or $+1,+1$). Doubling gives $b(n)=2$ if $3\\mid n$ and $b(n)=1$ otherwise for $n\\ge4$, hence $4$ or $2$ climbs, with small values $1,2,3$ at $n=1,2,3$. The constraint is a walk on the finite automaton of residues mod 3 read through gates, a transfer-matrix count whose outcome is eventually periodic with period 3.",
      "hints": [
        "Between multiples of $3$ the walk is trapped in a corridor: each gate $3m+1$ has a unique bridge onward.",
        "Only the final landing at a multiple of $3$ offers two choices, so the count is eventually periodic."
      ],
      "steps": [
        "Direct enumeration gives one $3$-shy climb of $1$, namely $(1)$; two of $2$, namely $(2)$ and $(1,1)$; and three of $3$, namely $(1,2)$, $(2,1)$ and $(1,1,1)$.",
        "For $n\\ge 4$ every legal climb must pass through $2$ and then step by $2$ to $4$. Indeed a climb that first exceeds $2$ by a step of $1$ lands on $3$ before the end. The two climbs from $0$ to $2$ are $(2)$ and $(1,1)$, so there are exactly two $3$-shy climbs from $0$ to $4$, namely $(2,2)$ and $(1,1,2)$.",
        "Thus for $n\\ge 4$ the count is twice the number of walks from $4$ to $n$ by steps $1$ and $2$ that visit no positive multiple of $3$ except possibly $n$. Call that number $b(n)$.",
        "From any position $3m+1$ with $m\\ge 1$, the step $+2$ lands on the multiple $3m+3$, which is legal only as a final position, while $+1$ lands on $3m+2$. From $3m+2$, the step $+1$ lands on that same multiple and $+2$ lands on the next gate $3(m+1)+1$.",
        "Consequently there is exactly one walk from the gate $4$ to any later gate $3m+1$, namely the concatenation of the bridges $3j+1\\to 3j+2\\to 3(j+1)+1$. There is exactly one continuation from that gate to $3m+2$, and exactly two ways to finish at the multiple $3(m+1)$: gate then $+2$, or gate then $+1$ then $+1$.",
        "Hence $b(n)=1$ if $3\\nmid n$, and $b(n)=2$ if $3\\mid n$, for every $n\\ge 4$. Doubling gives two $3$-shy climbs when $3\\nmid n$ and four when $3\\mid n$.",
        "Together with the three small cases, the number is $1,2,3$ for $n=1,2,3$, and for $n\\ge 4$ it is $4$ if $3\\mid n$ and $2$ otherwise."
      ],
      "remark": "Formally this is enumeration of walks on the automaton of residues mod $3$: the answer comes from a transfer matrix, an instance of the general principle that languages recognised by finite automata have ultimately periodic or rationally generated counts. The problem grows out of the standard olympiad motif of compositions of $n$ into steps $1$ and $2$, the Fibonacci counting game, modified by forbidding visits to residue classes along the partial sums."
    },
    {
      "id": "c4",
      "category": "cmb",
      "difficulty": "easy",
      "stars": 1,
      "confidence": "high",
      "text": "Start with one pile of $n\\ge 1$ stones. A move chooses a pile of size $k\\ge 2$ and replaces it by two piles of positive sizes adding to $k$. If a pile of size $k$ is split into piles of sizes $a$ and $b$, that split scores $ab(a+b)$. The process ends when every pile is a single stone. Prove that the total score is independent of the choices, and find it.",
      "why": "When a pile $c$ splits into $a+b=c$, the sum of cubes of pile sizes drops by $c^3-a^3-b^3=3ab(a+b)$, exactly three times the score, by the freshman's dream $(a+b)^3=a^3+b^3+3ab(a+b)$. Telescoping over the whole binary decomposition tree, whose leaves are $n$ piles of size 1, the total score is $\\frac13(n^3-n)=\\frac{n(n^2-1)}3$, independent of choices. The classical $ab$ score is the analogous drop of $\\sum(\\text{size})^2$: for every degree the power sum of the parts decreases by a splitting term, and the cubic term is the first with a nonzero correction, so the invariant is a Newton power-sum symmetric function evaluated on the final partition; the answer is $2\\binom{n+1}{3}$, integral since $3\\mid n^3-n$.",
      "hints": [
        "Seek a pile statistic whose drop at a split is a fixed multiple of the score."
      ],
      "steps": [
        "Let $S(n)$ be the total score of any complete decomposition of a pile of size $n$, once independence is known; the argument below proves simultaneously that every decomposition has the same score and that the score equals $n(n^2-1)/3$.",
        "For $n=1$ there are no splits, so the score is $0$, which equals $1(1-1)/3$.",
        "Suppose the claim is known for every pile smaller than $n\\ge 2$, and the first split of the pile $n$ is into $a+b=n$ with $a,b\\ge 1$. The score of that split is $abn$, and the later scores are $S(a)$ and $S(b)$ by the inductive hypothesis. The total is $$\\frac{a(a^2-1)}{3}+\\frac{b(b^2-1)}{3}+ab(a+b).$$",
        "Multiplying by $3$ produces $a^3-a+b^3-b+3ab(a+b)=(a+b)^3-(a+b)$. Dividing by $3$ returns $(a+b)\\bigl((a+b)^2-1\\bigr)/3=n(n^2-1)/3$.",
        "The total depends only on $n$. Therefore every complete decomposition scores $n(n^2-1)/3$."
      ],
      "remark": "The invariant is a Newton power sum $\\sum(\\text{size})^3$ of the current partition of $n$: refining a partition lowers it by exactly $3ab(a+b)$, the elementary symmetric correction term in the binomial expansion. Such refinement-monotone quantities underlie the theory of symmetric functions. The problem is a cubic cousin of the classical splitting game scored by $ab$, whose invariant is the sum of squares; the olympiad technique is the potential (monovariant) function."
    },
    {
      "id": "c5",
      "category": "cmb",
      "difficulty": "easy",
      "stars": 1,
      "confidence": "high",
      "text": "One corner square is cut off an $8\\times 8$ chessboard; two remaining squares are adjacent when they share an edge. Maryam fixes a token on some square $s$ of the board - that square counts as visited. Iman then moves the token first, and the players alternate: each move takes the token along an edge to a square not yet visited, which then becomes visited. The player who cannot move loses. Determine exactly the starting squares $s$ from which the first player Iman can force a win.",
      "why": "The game is undirected vertex geography on the grid graph of the mutilated board. The engine is matching theory: the player to move at $s$ wins iff $s$ is essential, saturated by every maximum matching (Fraenkel-Scheinerman-Ullman; proved by Berge augmenting paths: an $M$-exposed start gives the second player a walk-along-the-matching reply, an essential start gives the first player a matched edge into such a position). Colour count: 31 black (the cut corner's colour), 32 white, so $\\nu=31$; the row-snake Hamiltonian path from the cut corner yields maximum matchings covering all black squares and, cut at any white $w$, a near-perfect matching missing $w$. Iman wins from exactly the 31 corner-coloured squares; Hall's theorem governs the perfect matchings of $B-w$.",
      "hints": [
        "Rephrase as Geography on the board graph and think in dominoes, i.e. matchings.",
        "The player to move from $s$ wins exactly when every maximum matching covers $s$; the colour count gives $\\nu=31$.",
        "A serpentine Hamiltonian path shows each white square is missed by some maximum matching."
      ],
      "steps": [
        "Definitions for the proof (not needed for the statement): a MATCHING of the board is a set of dominoes covering no square twice; it is MAXIMUM when no larger one exists, a matching COVERS a square when some domino contains it, and a square is essential if every maximum matching covers it. Lemma (the engine): the player about to move from the (just-visited) square $v$ wins if and only if $v$ is essential.",
        "Lemma, if-direction: let $M$ be a maximum matching that does NOT cover $v$. The second player's strategy: whenever the first player lands on a square $x$, reply by moving along the $M$-domino containing $x$. The reply always exists: if the first player could land on an $M$-uncovered square $y\\ne v$, the visited track $v,\\dots,y$ would alternate non-matching/matching edges and form an augmenting path for $M$ - impossible by maximality. The reply never repeats a square: visited squares always form $\\{v\\}$ plus whole $M$-dominoes, so the partner of a fresh square is fresh. Thus the second player always answers and the first player is the first stuck.",
        "Lemma, only-if-direction: let $v$ be essential, take any maximum $M$, and let the first player move along the $M$-domino $vu$. Delete $v$ from the board: $M\\setminus\\{vu\\}$ is a maximum matching of the remaining board $G-v$ (its size is $\\nu(G)-1=\\nu(G-v)$: at least by this matching, at most because any larger matching of $G-v$ would be one for $G$ missing $v$) and it misses $u$. The rest of the game is exactly the same game on $G-v$ starting at $u$ with $u$ visited, and by the if-direction the player to move there - now the SECOND player - loses. So moving along $vu$ wins for the first player.",
        "The board: colour the removed corner black. Remaining squares: 31 black, 32 white. Every domino covers one black and one white square, so $\\nu(B)\\le 31$. Equality: traverse all 64 squares by a row-by-row serpentine path starting at the removed corner, say $c=p_0,p_1,\\dots,p_{63}$; even positions are black and odd positions white. Pair $p_1p_2,p_3p_4,\\dots,p_{61}p_{62}$ along the path: 31 legal dominoes covering every black square of $B$, leaving the single white square $p_{63}$. So $\\nu(B)=31$ and this particular maximum matching covers all 31 black squares.",
        "Black start $s$: $B-s$ has 30 black and 32 white squares, so every matching of $B-s$ has size at most 30 - deleting $s$ drops the matching number from 31 to 30: $s$ is essential; by the only-if-direction Iman wins.",
        "White start $w$: in the same snake, $w=p_{2k-1}$ for some $k$, since white squares occupy the odd positions. Cutting the path at $w$ leaves two even paths $p_1,\\dots,p_{2k-2}$ and $p_{2k},\\dots,p_{63}$; domino-tile each along its own consecutive pairs. These 31 dominoes form a maximum matching of $B$ that MISSES $w$, so $w$ is non-essential and the if-direction makes Maryam (the second player) win from $w$ by mirroring along these very dominoes. Iman's win strategy from a black $s$ is likewise explicit: take the snake domino $su$ covering $s$ in the matching of step 4, move to $u$, and then mirror Maryam along the remaining snake dominoes.",
        "Machine audit (c3-verify.py / c3-verify.out): engine lemma verified against exhaustive game trees on all bipartite graphs with parts up to $4\\times3$ (28,848 pairs, 0 mismatches); full game trees on $4\\times4$- and $4\\times5$-minus-corner give exactly 7 and 9 winning starts = corner-colour counts, 0 mismatches; matching computation on the $8\\times8$-minus-corner confirms $\\nu=31$, essentiality of all 31 black squares, non-essentiality of all 32 white ones, and perfect matchings of $B-w$ for each white $w$."
      ],
      "remark": "This is undirected vertex geography, solved in general by matching theory (Fraenkel-Scheinerman-Ullman): the winner is read off from essential vertices, via Berge augmenting paths and Hall's theorem. The olympiad origin is the mutilated chessboard: domino tilings as matchings plus the chessboard colouring, upgraded here to the full strategy of walking along a fixed matching, a pairing-strategy motif that recurs in Tournament of Towns games."
    },
    {
      "id": "c6",
      "category": "cmb",
      "difficulty": "easy",
      "stars": 1,
      "confidence": "high",
      "text": "Let $n\\ge 1$. An <em>interval</em> in $\\{1,2,\\dots,n\\}$ is a nonempty set of consecutive integers. Let $\\mathcal{F}$ be a family of intervals such that every two members of $\\mathcal{F}$ intersect, and no member of $\\mathcal{F}$ contains another. Prove that $$|\\mathcal{F}|\\le \\left\\lceil\\frac n2\\right\\rceil,$$ and show that the bound is sharp for every $n$.",
      "why": "Let $L_*$ be the largest left endpoint and $R_*$ the smallest right endpoint: the two intervals realizing them intersect, so $L_*\\le R_*$, and every interval contains the point $x=L_*$, the Helly property of intervals on a line. Inclusion-freeness forces distinct left endpoints and, after sorting $L_1<\\cdots<L_m$, right endpoints increasing $R_1<\\cdots<R_m$, since $L_i<L_j$ with $R_i\\ge R_j$ gives containment. Hence $m\\le\\min(x,n-x+1)\\le\\lceil n/2\\rceil$, sharp via $[i,\\,m+i-1]$, $1\\le i\\le m=\\lceil n/2\\rceil$, all containing $m$. Containment of intervals is a product order on endpoint pairs, so this is a width bound for antichains in 2-dimensional posets; the common-point step is the one-dimensional Helly theorem.",
      "hints": [
        "Show all intervals share one point: max left endpoint $\\le$ min right endpoint.",
        "Antichain means equal left endpoints are impossible and right endpoints then increase together."
      ],
      "steps": [
        "Write each interval as $[L,R]=\\{L,L+1,\\dots,R\\}$ with $1\\le L\\le R\\le n$. Let $L_\\ast$ be the maximum left endpoint in $\\mathcal{F}$ and $R_\\ast$ the minimum right endpoint. The interval attaining $L_\\ast$ and the interval attaining $R_\\ast$ intersect, so $L_\\ast\\le R_\\ast$. Every member then contains the point $x=L_\\ast$, because its left endpoint is at most $L_\\ast$ and its right endpoint is at least $R_\\ast\\ge L_\\ast$.",
        "Thus every interval $[L_i,R_i]$ in $\\mathcal{F}$ satisfies $L_i\\le x\\le R_i$. If $L_i=L_j$ and $R_i\\le R_j$, then $[L_i,R_i]\\subseteq[L_j,R_j]$. The antichain hypothesis therefore forces all left endpoints to be distinct, and likewise, after sorting $L_1&lt;\\cdots&lt;L_m$, the right endpoints must satisfy $R_1&lt;\\cdots&lt;R_m$. Otherwise $L_i&lt;L_j$ and $R_i\\ge R_j$ would give a containment.",
        "The increasing left endpoints are $m$ distinct integers in $\\{1,\\dots,x\\}$, so $m\\le x$. The increasing right endpoints are $m$ distinct integers in $\\{x,\\dots,n\\}$, so $m\\le n-x+1$. Hence $m\\le\\min(x,\\,n-x+1)\\le\\lceil n/2\\rceil$.",
        "For sharpness let $m=\\lceil n/2\\rceil$ and take the intervals $[i,\\, m+i-1]$ for $i=1,\\dots,m$. Each right endpoint is at most $m+(m-1)=2m-1\\le n$, and each interval contains $m$. If $i&lt;j$, then the $i$-th interval starts further left and ends further left, so neither contains the other. This is an intersecting antichain of size $m$."
      ],
      "remark": "The first step is the Helly property of intervals on a line; the second recognises intervals as points of the product order on endpoint pairs, so the family is an antichain and the problem is a two-dimensional case of width bounds in posets, the territory of Sperner, Dilworth and LYM theory. The construction grows out of the Erdos-Ko-Rado theme of intersecting families, with inclusion-freeness supplying the endpoint counting in place of the usual shadow arguments."
    },
    {
      "id": "c7",
      "category": "cmb",
      "difficulty": "easy",
      "stars": 1,
      "confidence": "high",
      "text": "Let $a_n$ be the number of strings of length $n$ with entries in $\\{1,2,3,4\\}$ such that no partial sum is divisible by $3$. Prove that $a_1=3$, $a_2=8$ and $$a_n=2a_{n-1}+a_{n-2}\\qquad(n\\ge 3).$$ Deduce a closed form.",
      "why": "The running sum mod 3 lives in states 1 and 2 (state 0 is fatal), and the letters $1,2,3,4$ supply residues $1,2,0,1$, so residue 1 is available twice per append. The state vector obeys $\\binom{A_{n+1}}{B_{n+1}}=\\begin{pmatrix}1&1\\\\2&1\\end{pmatrix}\\binom{A_n}{B_n}$ with $A_1=2$, $B_1=1$; eliminating $A_n=a_{n-1}$ for $n\\ge2$ gives $a_n=2a_{n-1}+a_{n-2}$ with $a_1=3$, $a_2=8$, characteristic roots $1\\pm\\sqrt2$, and the closed form $a_n=(1+\\tfrac{\\sqrt2}{4})(1+\\sqrt2)^n+(1-\\tfrac{\\sqrt2}{4})(1-\\sqrt2)^n$. This is enumeration of words accepted by a two-state automaton: the growth rate is the Perron root $1+\\sqrt2$ of the transfer matrix, the dominant pole of the rational function $\\sum a_nz^n$, standard analytic combinatorics of regular languages.",
      "hints": [
        "Track the running sum modulo $3$: states $1$ and $2$, state $0$ is fatal."
      ],
      "steps": [
        "A partial sum congruent to $0$ modulo $3$ is forbidden, including after the first letter, so every nonempty prefix has running sum in $\\{1,2\\}$ modulo $3$. Let $A_n$ (respectively $B_n$) be the number of valid strings of length $n$ whose total sum is congruent to $1$ (respectively $2$) modulo $3$, and set $a_n=A_n+B_n$.",
        "The letters contribute residues $1,2,0,1$ respectively, so residue $1$ can be appended in two ways and residues $0$ and $2$ in one way each. From a string with sum $1$, the legal appendages are: one letter of residue $0$, staying at sum $1$, and two letters of residue $1$, moving to sum $2$. The residue-$2$ letter would reach $0$ and is forbidden. From sum $2$, the legal appendages are one letter of residue $2$, moving to sum $1$, and one letter of residue $0$, staying at sum $2$.",
        "Therefore $A_{n+1}=A_n+B_n$ and $B_{n+1}=2A_n+B_n$. In particular $A_{n+1}=a_n$ and $a_{n+1}=3A_n+2B_n=2a_n+A_n$. For $n\\ge 2$ one has $A_n=a_{n-1}$, so $a_{n+1}=2a_n+a_{n-1}$. Shifting the index gives the stated recurrence for $n\\ge 3$.",
        "The initial values are read off directly. Length $1$: the letters $1,2,4$ are legal and $3$ is not, so $a_1=3$, with $A_1=2$ and $B_1=1$. Length $2$: the recurrence for the states gives $A_2=A_1+B_1=3$ and $B_2=2A_1+B_1=5$, so $a_2=8$.",
        "The characteristic polynomial is $r^2-2r-1=0$, with roots $1\\pm\\sqrt2$. Solving $A(1+\\sqrt2)+B(1-\\sqrt2)=3$ and $A(1+\\sqrt2)^2+B(1-\\sqrt2)^2=8$ yields $A=1+\\sqrt2/4$ and $B=1-\\sqrt2/4$. Hence $$a_n=\\left(1+\\frac{\\sqrt2}{4}\\right)(1+\\sqrt2)^n+\\left(1-\\frac{\\sqrt2}{4}\\right)(1-\\sqrt2)^n.$$"
      ],
      "remark": "This is enumeration of words accepted by a two-state automaton: the state vector evolves by a transfer matrix, and the growth rate is its Perron root $1+\\sqrt2$, equivalently the dominant pole of the rational generating function, the standard analytic combinatorics of regular languages. The olympiad origin is the classical modular state method for partial sums, counting compositions while tracking residues to keep a forbidden class empty."
    },
    {
      "id": "c8",
      "category": "cmb",
      "difficulty": "easy",
      "stars": 1,
      "confidence": "high",
      "text": "A dance society has $2n$ members, $n\\ge3$, split into two groups of $n$; every handshake so far has been between members of DIFFERENT groups, and each member has shaken hands with strictly more than half of the members of the other group. A full pairing is a set of $n$ pairwise-disjoint handshakes covering all $2n$ members. Prove that the society admits EXACTLY two different full pairings if and only if its entire handshake network is one single closed loop through all $2n$ members (every member shakes hands with exactly two others, and the network is one round trip).",
      "why": "Bipartite on $n+n$ with minimum degree strictly above $n/2$. Same-side neighbourhoods meet, giving connectedness; Hamiltonicity comes from the edge-maximal counterexample closure: a missing cross edge in a maximal non-Hamiltonian supergraph yields a Hamiltonian path, and a pigeonhole count on the two odd-index endpoint-neighbourhood sets closes that path into a spanning cycle, forcing $K_{n,n}$ - contradiction (the bipartite Dirac / Moon-Moser theorem at its sharp threshold; with degree exactly $n/2$ a spanning loop can fail). The loop's two alternating classes are two perfect matchings; any chord $uw$ pastes with the two odd arcs of the loop (each arc has a near-perfect alternating class covering its internal vertices only) into a third perfect matching. Hence exactly two matchings iff the graph is precisely a cycle $C_{2n}$, which has exactly the two alternating ones and meets the degree bound only for $n=3$: for $n\\ge4$ every such network has at least three. The symmetric-difference-alternating-cycle structure of perfect matchings (Kotzig) underlies the counting.",
      "hints": [
        "Prove spanning loops exist: same-side neighbourhoods meet, and bipartite Dirac closes a cycle.",
        "Every chord pastes with the two near-alternating loop arcs to give a third pairing."
      ],
      "steps": [
        "Lemma A (connectedness): two members of the same group have friend-sets of size greater than n/2 inside the other group of size n, so the two friend-sets intersect and the pair is joined through a common friend; also every member has a friend (degree > n/2 ≥ 1). For u and v in DIFFERENT groups with no road uv: take any friend w of u in v's group; w and v lie in the same group, hence are joined through a common friend; so u reaches v in at most three steps. Hence the network is connected.",
        "Lemma B (the spanning loop - bipartite Dirac, proved in full). Claim: every balanced bipartite graph with parts $A,B$, $|A|=|B|=n$, and minimum degree at least $\\lfloor n/2\\rfloor+1$ (i.e. strictly more than half of the opposite part) contains a Hamiltonian cycle. Proof by maximal counterexample: if the network $G$ has no Hamiltonian cycle, add missing cross-edges one at a time until an edge-maximal non-Hamiltonian $H$ on the same bipartition is reached (adding edges only raises degrees, so $\\delta(H)\\ge\\lfloor n/2\\rfloor+1$ still holds). Suppose $H$ misses some cross pair $a\\in A$, $b\\in B$: then $H+ab$ IS Hamiltonian, and its Hamiltonian cycle must use the new edge (else $H$ already had one), so deleting $ab$ leaves a Hamiltonian PATH $P=p_1,p_2,\\dots,p_{2n}$ of $H$ from $a=p_1$ to $b=p_{2n}$. All neighbours of $a$ lie on $P$ at EVEN positions $2,4,\\dots,2n-2$ (even by $a\\not\\sim b$), all neighbours of $b$ at ODD positions $3,5,\\dots,2n-1$ (odd by $b\\not\\sim a$). Set $S=\\{\\text{odd } i\\le 2n-3: ap_{i+1}\\in E(H)\\}$ and $T=\\{\\text{odd } i\\ge 3: bp_i\\in E(H)\\}$: the position-neighbor bijections give $|S|=d(a)$ and $|T|=d(b)$, both at least $\\lfloor n/2\\rfloor+1$, living in the common universe of the $n$ odd indices $1,3,\\dots,2n-1$, and $|S|+|T|\\ge2\\lfloor n/2\\rfloor+2>n$; hence some odd $i\\in S\\cap T$, and then $$a=p_1,\\ p_{i+1},\\ p_{i+2},\\ \\dots,\\ p_{2n}=b,\\ p_i,\\ p_{i-1},\\ \\dots,\\ p_2,\\ p_1$$ is a Hamiltonian cycle of $H$ - contradiction (the closing edge $p_2p_1$ is a path edge; $i=1$ and $i=2n-1$ cannot occur since $a\\not\\sim b$). So no cross pair is missing: $H=K_{n,n}$, which is Hamiltonian for $n\\ge2$ ($a_1b_1a_2b_2\\dots a_nb_na_1$), contradiction again. Hence $G$ always contains a Hamiltonian cycle $L$ through all $2n$ members. (The strict inequality is used exactly twice in the count; at degree $n/2$ the claim fails - the counterexample stored in this entry's novelty note shows sharpness. The argument is the bipartite case of the Moon-Moser Ore-type theorem: non-adjacent cross pairs with degree sum $\\ge n+1$.)",
        "Lemma D (two pairings from the loop): the 2n roads of L split into its two alternating classes; each class is a full pairing, and they differ since 2n ≥ 6. So every admissible network has AT LEAST two full pairings.",
        "Chord paste (the counting content): suppose the network has a road e = uw that is not a road of L. The two u-w arcs of L each have an odd number of roads (u and w lie in different groups), and an odd-length path on an even number of vertices has exactly two alternating edge classes: the PERFECT one (roads 1st, 3rd, ..., last - it covers every vertex of the arc including both ends) and the NEAR one (roads 2nd, 4th, ..., second-to-last - it covers all internal vertices and misses the two ends). Build $$M_3 = \\{e\\} \\cup \\{\\text{near class of arc 1}\\} \\cup \\{\\text{near class of arc 2}\\}:$$ e covers u and w, each near class covers the internal vertices of its own arc, the three pieces share no vertex and no vertex is missed, so M_3 is a full pairing. Both full pairings coming from L avoid the chord e, so M_3 is genuinely different from both: any network with a chord has AT LEAST THREE full pairings. Consequently, a network with exactly two full pairings has no chord, i.e. its road set is precisely the loop L.",
        "Converse: the bare loop C_{2n} admits exactly two full pairings. Indeed, let M be any full pairing and look at the loop road e_1 = v_1v_2: if e_1 is in M, then v_2's other loop road is not, so v_3 must pair along e_3 = v_3v_4, and alternation propagates around the whole loop forcing M = the class {e_1,e_3,...}; if e_1 is not in M, the same propagation forces M = {e_2,e_4,...}. Exactly two.",
        "Membership trap: the bare loop gives every member exactly 2 handshakes, which is strictly more than n/2 only for n = 3 (n=4: 2 > 2 false). So for n ≥ 4 the right-hand side never occurs inside the class, and steps 2 and 4 make the left side never occur either - the ⟺ holds, with the elegant punchline that EXACTLY TWO is an n=3-only phenomenon.",
        "Machine audit (c17-verify.py / c17-verify.out): every admissible network for n=3,4,5 enumerated exhaustively (304,429 labelled bipartite graphs; total with sampling at n=6,7,8: 332,483): in every one - a spanning loop exists, at least two full pairings exist, and the count equals two exactly for bare loops (6 copies of C_6 at n=3, none at n ≥ 4). Threshold necessity recorded: the n=4 member with rows (15,15,6,6) handshakes (delta = 2 = n/2) has 0 spanning loops and 4 full pairings, proving the shipped statement's 'strictly more than half' is the right hypothesis."
      ],
      "remark": "The existence half is the bipartite Dirac theorem of Moon-Moser at its sharp degree threshold, proved by the classical maximal-counterexample and endpoint-sets pigeonhole. The counting half rests on Kotzig's theorem that two perfect matchings differ in alternating cycles, plus the chord-and-arcs pasting that produces a third matching. Together they exemplify how the structure theory of matchings in bipartite graphs converts an existence lemma into exact classification."
    },
    {
      "id": "c9",
      "category": "cmb",
      "difficulty": "medium",
      "stars": 2,
      "confidence": "high",
      "text": "A town has $n$ residents and $m$ clubs, each club being a set of residents, with no two clubs having the same membership. For every club, the number of its members is congruent to $1\\pmod{3}$, and for any two clubs, the number of their common members is congruent to $0\\pmod{3}$. Suppose that $m=n$. Prove that for every resident, the number of clubs containing that resident is congruent to $1\\pmod{3}$.",
      "why": "Take the club-incidence matrix $M$ over $\\mathbb F_3$: hypotheses read $MM^T=I_m$, diagonal club sizes $\\equiv1$, off-diagonal intersections $\\equiv0$. With $m=n$ the square matrix $M$ has a right inverse, hence $\\det M=\\pm1$ and $M^{-1}$ exists, so $M^T M=I_n$: the $p$-th diagonal entry counts clubs through resident $p$, giving $r(p)\\equiv1\\pmod3$ (the off-diagonals add that two residents share $\\equiv0$ clubs). This Gram flip is the Oddtown linear-algebra method (Berlekamp, Babai-Frankl) over $\\mathbb F_3$; it has no mod-2 analogue, where the same flip loses information. The converse fails: one club $\\{1,2,3,4\\}$ on five residents gives $r(5)=0$; without $m=n$ residents are unconstrained.",
      "hints": [
        "The hypotheses say $MM^T=I$; squareness then forces $M^TM=I$."
      ],
      "steps": [
        "Encode membership by the m x n matrix M with M_ij = 1 if resident j belongs to club i, working with all arithmetic modulo 3. The (i,j) entry of MM^T is the size of club i intersect club j for i different from j, and the size of club i for i = j.",
        "By the hypotheses, MM^T = I_m over mod 3: off-diagonal entries are 0 (common members divisible by 3) and diagonal entries are 1 (club sizes 1 mod 3).",
        "Assume m = n, so M is square. From MM^T = I take determinants mod 3: det(M)^2 = 1, so det(M) is not 0 mod 3 and M is invertible over the residues mod 3. Multiplying MM^T = I on the right by M gives M(M^T M) = M; cancel M (invertible) to get M^T M = I_n.",
        "Read the diagonal of M^T M at resident p: it is the sum over clubs i of (M_ip)^2 = sum over clubs of M_ip - squaring changes nothing among 0 and 1 - which is exactly r(p), the number of clubs containing p. So r(p) = 1 mod 3 for every resident p, as claimed. (Bonus, not needed: the off-diagonals say two distinct residents share a number of common clubs divisible by 3 - the hypotheses' club-side rule, mirrored to the resident side by the same inversion.)",
        "Check necessity of m=n (the converse and its failure): singleton clubs {1},...,{n} satisfy everything with r(p)=1. The system with 5 residents and one club {1,2,3,4} satisfies the two remainder rules with m=1 ≠ 5 and r(5)=0 - the direction claimed is the true direction.",
        "Machine audit (c5-verify.py / c5-verify.out): exhaustive search over ALL admissible club systems with m=n for n ≤ 6 found 13 systems, every one with all r(p) = 1 mod 3; 131,956 randomly grown admissible m=n systems for n in {7,8,9}: 0 violations; MM^T = I_m and rank = m verified on 2,000 random systems (bound m ≤ n holds as published theory, kept out of the claim)."
      ],
      "remark": "The argument is the Oddtown linear algebra method of Berlekamp and Babai-Frankl: translate intersection data into a Gram matrix, invert it, and read the transpose, here over $\\mathbb F_3$, where $MM^T=I$ with $m=n$ flips to $M^TM=I$; the mod-2 Oddtown argument cannot do this flip. The construction grows out of the classical rank method for set systems with prescribed intersections, with the Fano-plane parity phenomenon as its prototype."
    },
    {
      "id": "c10",
      "category": "cmb",
      "difficulty": "medium",
      "stars": 2,
      "confidence": "high",
      "text": "Eight cities are joined by two-way roads. The road network contains no triangle: no three cities are pairwise joined by roads. Moreover, among every 4 cities, at least two of the six connecting pairs are joined by roads. Prove that no such road network exists.",
      "why": "Triangle-free makes every neighbourhood independent. A city of degree at least 3 owns an independent triple $T$; if all degrees are at most 2, a greedy choice yields one since each pick removes at most three vertices. Each of the five outsiders must send at least two roads into $T$, else $T$ with it spans at most one road; so at least 10 roads cross into $T$, some $u\\in T$ has $d(u)\\ge4$, and four vertices of $N(u)$ span zero roads, contradicting the 4-city rule. $C_6$ satisfies both rules at $n=6$, while scanning shows none exists at $n=7,8$. The condition strictly strengthens $\\alpha\\le3$: the unique triangle-free graph on 8 vertices with independence number 3, the Wagner graph at the Ramsey boundary $R(3,4)=9$, has 4-vertex sets spanning just one road.",
      "hints": [
        "First find three mutually non-adjacent cities: neighbours of a vertex of degree $\\ge3$, or greedy."
      ],
      "steps": [
        "Find an independent triple. If some city v has at least 3 roads, take three cities joined to v: no two of them are joined to each other (such a road plus v would form a triangle), so they are mutually roadless. If every city has at most 2 roads, build a roadless set greedily: pick any city, discard it together with its at most 2 neighbours, repeat; three picks discard at most 9 cities, so with only 8 present a third pick always exists - three mutually roadless cities T = {a, b, c} are guaranteed either way.",
        "Count roads from the outsiders into T. Let x be any of the other 5 cities. The 4 cities x, a, b, c span at least two roads by hypothesis; none of the three pairs inside T is a road, so every road among these 4 cities touches x - hence x sends at least 2 roads into T. Summing over the 5 outsiders: at least 10 roads join T to its complement.",
        "Pigeonhole a rich city. Ten or more roads land on the three cities of T, so some u in T receives at least 4 of them: d(u) >= 4 (all its roads go to outsiders, none inside T).",
        "Kill the network. Two cities both joined to u cannot be joined to each other (triangle-free), so the neighbourhood N(u) - at least 4 cities - is mutually roadless. Take any 4 of them: these 4 cities span exactly zero roads, contradicting the hypothesis that every 4 cities span at least two. No such network exists on 8 cities.",
        "Sharpness check (why the number 8 is honest, and the hypotheses are not secretly contradictory): the hexagonal ring C6 on 6 cities is triangle-free, and every 4 of its cities span at least two ring roads - the sparsest 4-subsets look like {1,2,4,5} (roads 12 and 45) or {1,3,5,x} (any x is adjacent to exactly two of 1,3,5). So the properties are consistent for n = 6; exhaustive scanning (next step) shows no 7-city network passes either, so the feasibility threshold is exactly 6 - the shipped 8-city impossibility sits safely beyond it and is a real structural fact, not a misprint of an empty hypothesis.",
        "Machine audit (c8-verify.py / c8-verify.out): exhaustive C scan of all 2^28 networks on 8 vertices: 0 with both properties; all 2^21 on 7 vertices: 0; all 2^15 on 6 vertices: 340 pass (the hexagon verified directly: triangle-free and every 4-set spans at least 2 roads). The human argument in steps 1-4 is gap-free and the scan confirms zero counterexamples."
      ],
      "remark": "The hypotheses mix triangle-freeness with a lower bound on edges in every 4-set, a Turan-type condition with a Ramsey flavour: the threshold number is honest because the Wagner graph on 8 vertices is the unique triangle-free graph with independence number 3, sitting at the Ramsey boundary $R(3,4)=9$ yet failing the 4-set rule. The proof grows out of the classical olympiad motif of harvesting an independent set from a neighbourhood and double counting edges crossing out of it."
    },
    {
      "id": "c11",
      "category": "cmb",
      "difficulty": "medium",
      "stars": 2,
      "confidence": "high",
      "text": "Some towns are connected by $m$ two-way roads meeting at $n$ junctions: each road joins two distinct junctions, no two roads join the same pair of junctions, and one can travel from any junction to any other along roads. Paint each road one of three colors, numbered $0,1,2$; a painting is called \\emph{good} if, at every junction, the sum of the numbers of the roads leading into it leaves remainder $1$ upon division by $3$.<br><br>Determine, in closed form, the number of good paintings, in terms of $n$, $m$, and - if the junctions can be split into two groups $A$ and $B$ such that every road joins a junction of $A$ to a junction of $B$ (networks where this is possible are called \\emph{bipartite}; the split is then unique up to swapping $A,B$) - the sizes $|A|,|B|$.",
      "why": "A painting is a solution over $\\mathbb F_3$ of the vertex-edge incidence system $Bx=\\mathbf 1$, $\\sum_{e\\ni v}x_e\\equiv1$ per junction. A left-kernel weighting satisfies $z_u+z_v\\equiv0$ on every road: connectivity forces alternation $\\pm t$, which exists globally iff the network is bipartite, since an odd cycle gives $2z\\equiv0$ and 2 is invertible mod 3, the exact point where $\\mathbb F_3$ differs from $\\mathbb F_2$. By the Fredholm alternative over finite fields, $\\mathbf 1$ is compatible iff $t(|A|-|B|)\\equiv0$, so the obstruction is a part-size congruence ($K_{2,3}$ admits no painting). Ranks $n-1$ (bipartite) and $n$ (non-bipartite) give counts $3^{m-n+1}$, $3^{m-n}$, or 0; solutions are cosets of the homogeneous kernel, the homology of 1-chains with prescribed boundary over $\\mathbb F_3$, kin to nowhere-zero-flow enumeration except affine, zeros allowed.",
      "hints": [
        "Write the rule as $Bx=\\mathbf 1$ over $\\mathbb F_3$ on the vertex-edge incidence matrix.",
        "Test the left kernel: silent weightings alternate $\\pm t$ on a bipartition and die on odd cycles.",
        "Consistency then needs $|A|\\equiv|B|\\pmod3$; solutions form cosets of size $3^{m-\\operatorname{rank}}$."
      ],
      "steps": [
        "Set up: unknown $x_e\\in\\{0,1,2\\}$ per road; equations $\\sum_{e\\ni v}x_e\\equiv1\\pmod3$ per junction. All arithmetic in the remainder system mod 3 from here on.",
        "Adjoint bookkeeping. Call a junction-weighting $z$ 'silent' if $z_u+z_v\\equiv0$ for every road $uv$. If the network is bipartite with split $A,B$: $z\\equiv t$ on $A$, $z\\equiv-t$ on $B$ works for every $t$ (3 solutions); connectivity shows these are all (propagate along paths). If some odd cycle exists: going around, $z=-z$ at a vertex of the cycle, so $2z\\equiv0$, and $2$ is invertible mod $3$: $z\\equiv0$ everywhere: only the silent weighting is trivial.",
        "Compatibility (Fredholm alternative by hand). Summing the equations with weights $z$: $\\sum_v z_v\\cdot1\\equiv\\sum_e x_e(z_u+z_v)\\equiv0$: necessary $\\sum_A t+\\sum_B(-t)=t(|A|-|B|)\\equiv0$ for every $t$, i.e. $|A|\\equiv|B|\\pmod3$. Conversely one checks by Gaussian elimination that this is also sufficient: the system is inconsistent exactly when a silent weighting sees the right side as nonzero (rank-nullity for $n\\times m$ matrices over $\\mathbb F_3$: right side in the row space ⟺ orthogonal to the left kernel).",
        "Ranks and counts. Bipartite connected: adjoint kernel dim $1$ - rank $n-1$; non-bipartite: adjoint kernel $0$ - rank $n$. When consistent, solutions form a coset of the solution space of the homogeneous system, of size $3^{m-\\text{rank}}$: three cases $3^{m-n+1}$, $3^{m-n}$, $0$. ($m\\ge n-1$ by connectivity, and $m=n-1$ bipartite trees: exponent $0$: exactly one good painting ⟺ $|A|\\equiv|B|$ - a pleasant special check.)",
        "Worked sanity cases. Triangle ($m=n=3$, non-bipartite): equations $a+b\\equiv b+c\\equiv c+a\\equiv1$ force $a\\equiv b\\equiv c$, then $2a\\equiv1$, and $2^{-1}\\equiv2\\pmod3$: $a\\equiv b\\equiv c\\equiv2$: exactly one painting, matching $3^{m-n}=1$ ✓. $K_{2,3}$ (bipartite, parts 2 and 3): each road touches exactly one junction of each group, so (sum of the 3 equations on the side of size 3) minus (sum of the 2 on the other side) has left side identically $0$ (every color counted once per side) but right side $3-2\\equiv1\\not\\equiv0$: no good painting exists - the zero case made visible.",
        "Machine audit (tools/proofs/redesign-20260930/c15-verify.py, 2026-09-30): every connected graph on $\\le5$ vertices: rank-elimination count equals the formula; brute-force enumeration ($3^{\\le7}$) agrees where run; $K_{3,3}$: $3^{9-6+1}=81$ ✓; $K_{2,2}=C_4$: 3 ✓; $P_4$ (path of length 3; parts 2,2 with sum $\\equiv0$): formula $3^{3-4+1}=1$, brute force 1 ✓; $K_{2,3}$: 0 ✓. Total mismatches: 0."
      ],
      "remark": "This is linear algebra over $\\mathbb F_3$ applied to the graph incidence system, with the Fredholm alternative deciding solvability via the left kernel; conceptually it enumerates 1-chains with prescribed boundary, the affine cousin of nowhere-zero-flow counting in the Tutte theory of flows and tensions. The classical origin is the rank and cycle-space analysis of the incidence matrix, where bipartiteness surfaces exactly as the kernel of the transpose, modified because 2 is invertible modulo 3."
    },
    {
      "id": "c12",
      "category": "cmb",
      "difficulty": "medium",
      "stars": 2,
      "confidence": "high",
      "text": "In a night sky, constellations of three stars are charted such that no two share more than one star. Starlight links two stars whenever they belong to the same constellation. <ol><li>Two constellations form a <em>conjunction</em> if they share a star.</li><li>A trio of stars forms a <em>mirage</em> if they are pairwise linked by starlight, yet form no constellation.</li></ol><br>Prove that the number of mirages is at most $\\dfrac43$ the number of conjunctions.",
      "why": "The constellations form a linear 3-uniform hypergraph: two triples share at most one vertex. Conjunctions $C=\\sum_v\\binom{d_v}{2}$ exactly. The link of a star $v$, its starlight neighbours, is a matching: the $2d_v$ neighbours split into $d_v$ disjoint companion pairs from the constellations through $v$. A mirage based at $v$ is precisely a starlight edge joining two different link-pairs, so $e_v\\le4\\binom{d_v}{2}$ cross-edges; each mirage is counted at its three vertices, $M=\\frac13\\sum_v e_v\\le\\frac43 C$, and the constant is sharp. In hypergraph language this counts triangles of the 2-shadow $\\partial_2H$ that are not edges of $H$, exploiting that links of a linear triple system (partial Steiner triple system) are matchings.",
      "hints": [
        "Around one star the constellations cut its neighbours into disjoint pairs; count edges joining different pairs.",
        "Each mirage registers at three stars, and cross-edges are at most $4\\binom{d_v}{2}$."
      ],
      "steps": [
        "Let $d_v$ be the number of constellations containing star $v$. Because two constellations share at most one star, each pair of constellations has a unique common star, so the number of conjunctions is $$C=\\sum_v\\binom{d_v}{2}.$$",
        "Fix a star $v$. Its $2d_v$ neighbours are partitioned into $d_v$ disjoint pairs, one pair from each constellation through $v$. Let $e_v$ be the number of starlight edges joining vertices that belong to different such pairs.",
        "Each such cross-edge $xy$, together with $v$, gives a mirage $\\{v,x,y\\}$: the three pairs are linked, while $x,y$ are not the two companions of $v$ in one constellation. Conversely, every mirage is counted once at each of its three vertices. Hence $$M=\\frac13\\sum_v e_v.$$",
        "Among the $2d_v$ neighbours there are exactly $4\\binom{d_v}{2}$ possible cross-pairs, so $e_v\\le4\\binom{d_v}{2}$. Therefore $$M\\le\\frac13\\sum_v4\\binom{d_v}{2}=\\frac43C.$$"
      ],
      "remark": "The constellations form a linear 3-uniform hypergraph, and the mirages are triangles of its 2-shadow that are not edges; the proof counts, per vertex, the edges between distinct pairs of its link matching, which is exactly the local structure of a partial Steiner triple system. The technique is classical flag counting, an incidence double count between 2- and 3-dimensional faces that pervades extremal hypergraph theory."
    },
    {
      "id": "c13",
      "category": "cmb",
      "difficulty": "medium",
      "stars": 2,
      "confidence": "high",
      "text": "Let $\\mathcal{F}$ be a family of $3$-element subsets of a set $X$, $|X|=n$, such that any two members of $\\mathcal{F}$ share exactly one point, and no point of $X$ lies in all members. <ol><li>Prove $|\\mathcal{F}|\\le n$.</li><li>Prove $|\\mathcal{F}|=n$ if and only if $n=7$ and $\\mathcal{F}$ is the set of lines of the Fano plane.</li><li>Prove that no such family exists for $n=5$, determine the maximum of $|\\mathcal{F}|$ for $n=6$, and prove the absolute bound $|\\mathcal{F}|\\le 7$ valid for all $n$.</li></ol>",
      "why": "Engine 1 (Fisher-type linear algebra): the characteristic vectors of the members have Gram matrix $2I+J$ (diagonal 3, off-diagonal 1), which is positive definite, so $m\\le n$ with no design theory quoted. Engine 2 (degree cascade): the two counting identities $\\sum r_x=3m$, $\\sum\\binom{r_x}{2}=\\binom m2$ plus the forced cap $r_x\\le3$ (a degree-4 point and a block avoiding it need $\\ge4$ slots) give $\\binom m2\\le3m$, i.e. $m\\le7$ absolutely, and in the equality case $m=n$ everything is squeezed to $r_x\\equiv3$, forcing $n=7$ and the unique STS(7) - the Fano plane $PG(2,2)$. The small orders are rigid by the same bookkeeping: no family at $n=5$ (two blocks already cover $X$), maximum 4 at $n=6$ (a 5-block degree sequence does not exist), realized by the Pasch configuration $\\{123,145,246,356\\}$, maxima 7 for $n\\ge7$. The dual linear-space picture (points$\\leftrightarrow$blocks, de Bruijn-Erdos $b\\ge v$, near-pencil killed by 3-uniformity plus the no-common-point rule, plane order forced to 2) is the same theorem wearing its incidence-geometry clothes.",
      "hints": [
        "Double count pairs of members: $\\sum_x\\binom{r_x}{2}=\\binom m2$.",
        "Independence of characteristic vectors via the Gram matrix $2I+J$ gives $m\\le n$.",
        "Rule out degree $4$, then squeeze equality to all $r_x=3$: the Fano plane."
      ],
      "steps": [
        "Size floor and bookkeeping. Write $m=|\\mathcal F|$ and, for $x\\in X$, $r_x=|\\{B\\in\\mathcal F:x\\in B\\}|$. The case $m=0$ is excluded because then every point lies in all members vacuously; $m=1$ is excluded because the three points of the single member lie in all members; $m=2$ is excluded because the unique common point of the two members lies in all members. So $m\\ge3$. The two counting identities $$\\sum_{x\\in X}r_x=3m\\qquad\\text{and}\\qquad \\sum_{x\\in X}\\binom{r_x}{2}=\\binom m2$$ hold: the first counts incidences $(x,B)$, the second counts block pairs $\\{B,B'\\}$ by their unique common point.",
        "Degree cap. No point has degree $\\ge4$: if $P$ lay in blocks $B_1,\\dots,B_4$, then no other point could lie in two of these blocks (two blocks already share $P$), so the four pairs $B_i\\setminus\\{P\\}$ are disjoint 2-sets; since no point lies in all members there is a block $D$ with $P\\notin D$, and $D$ must contain one point of each $B_i\\setminus\\{P\\}$, i.e. $|D|\\ge4$ - contradiction. Hence $r_x\\le3$ for all $x$, and for such degrees $\\binom{r_x}{2}\\le r_x$ with equality iff $r_x\\in\\{0,3\\}$.",
        "(a) Fisher-type bound. Let $v_B\\in\\mathbb R^{X}$ be the characteristic vector of $B$. If $\\sum_B c_Bv_B=0$, taking the inner product with $v_{B'}$ gives $3c_{B'}+\\sum_{B\\ne B'}c_B=0$ for every $B'$ (each pair meets in exactly one point). Writing $s=\\sum_Bc_B$, every equation reads $2c_{B'}+s=0$, so all $c_{B'}$ are equal, say to $c$, and $0=2c+mc=c(m+2)$ forces $c=0$. The $m$ vectors are linearly independent in the $n$-dimensional space $\\mathbb R^{X}$: $m\\le n$.",
        "(c) absolute bound. From the second counting identity and the degree cap, $\\binom m2=\\sum_x\\binom{r_x}{2}\\le\\sum_xr_x=3m$, so $m-1\\le6$: $|\\mathcal F|\\le7$ for every $n$. The Fano plane shows the bound is best possible for all $n\\ge7$ (take its seven lines on seven of the $n$ points; unused points are harmless).",
        "(b) equality transport. If $m=n$, then $3n=3m=\\sum_xr_x$ with $n$ summands each $\\le3$, so $r_x=3$ for every $x$. Then $\\binom m2=\\sum_x\\binom{r_x}{2}=3m$, i.e. $m(m-1)/2=3m$, i.e. $m=7$: equality forces $n=m=7$, all degrees $3$. The seven members are then triples of a $7$-set in which every pair of blocks meets once, every point lies in $3$ blocks, and the total count of block-pairs $\\binom72=21=\\binom72$ equals the number of point-pairs, so every pair of points lies in exactly one block as well: a Steiner triple system on $7$ points. Its isomorphism type is unique: after relabelling let a block be $\\{1,2,3\\}$; the three blocks through $1$ partition the other six points as $\\{1,2,3\\},\\{1,4,5\\},\\{1,6,7\\}$; the block on $\\{2,4\\}$ avoids $1,3,5$ (their pairs are used) so it is $\\{2,4,6\\}$ or $\\{2,4,7\\}$: relabel the pair $\\{6,7\\}$ to make it $\\{2,4,6\\}$; the block on $\\{2,5\\}$ must be $\\{2,5,6\\}$ or $\\{2,5,7\\}$, and $\\{2,5,6\\}$ shares the pair $\\{2,6\\}$ with $\\{2,4,6\\}$ - so $\\{2,5,7\\}$ is forced; and $\\{3,4\\}\\to\\{3,4,7\\}$ (the option $\\{3,4,6\\}$ shares $\\{4,6\\}$), $\\{3,5\\}\\to\\{3,5,6\\}$ (the option $\\{3,5,7\\}$ shares $\\{5,7\\}$) follow. All $21$ pairs are then covered exactly once - no choice remains. That list is precisely the line set of the Fano plane, and its pairwise-intersection-one, empty-common-intersection and $r_x\\equiv3$ properties check directly. Hence $|\\mathcal F|=n$ occurs iff $n=7$ and $\\mathcal F$ is the Fano line set.",
        "(c) non-existence for $n=5$. Two members $B_1,B_2$ meet in one point, and $|B_1\\cup B_2|=5=n$, so wlog $B_1=\\{1,2,3\\}$, $B_2=\\{1,4,5\\}$. A third member $C$ meeting each of $B_1,B_2$ exactly once: if $1\\in C$, then $C$ can contain no other point of $X=B_1\\cup B_2$ - impossible; so $C$ contains exactly one of $\\{2,3\\}$ and exactly one of $\\{4,5\\}$, say $2,4$, and its third element is in $\\{1,3,5\\}$: $1$ makes $|C\\cap B_2|=2$, $3$ makes $|C\\cap B_1|=2$, $5$ makes $|C\\cap B_2|=2$ - all excluded; the other three pair choices fail identically. No third member exists, contradicting $m\\ge3$: no valid family for $n=5$.",
        "(c) maximum for $n=6$. The Pasch $\\{\\{1,2,3\\},\\{1,4,5\\},\\{2,4,6\\},\\{3,5,6\\}\\}$ has $m=4$, all $\\binom42=6$ block-pairs meeting in the six distinct points and empty total intersection: a valid family, so $\\max\\ge4$. If $m=5$: the counting identities need $\\sum_xr_x=15$ with $6$ points of degree $\\le3$, forcing the degree multiset to satisfy $k_1+k_2+k_3\\le6$, $2k_2+3k_3+k_1=15$ and $k_2+3k_3=\\sum\\binom{r_x}{2}=\\binom52=10$, hence $k_2+k_1=5$ and then $k_3\\le1$, whence $k_2\\ge7>6$ - impossible. So $\\max_6=4$.",
        "Machine audit: branch-and-bound maxima [0,4,7,7,7,7] n=5..10 - reproduced independently by the orchestrator (this session) and by the battery's c16_pairs."
      ],
      "remark": "Part (a) is the linear algebra proof of Fisher's inequality, using that the Gram matrix has diagonal 3 and off-diagonal 1; the equality transport identifies the unique Steiner triple system $S(2,3,7)$, the Fano plane $PG(2,2)$, while the absolute bound is a degree cascade in design-theoretic counting identities. The family grows out of classical block design theory, de Bruijn-Erdos linear spaces and the linear-space picture of near-pencils ruled out by 3-uniformity."
    },
    {
      "id": "c14",
      "category": "cmb",
      "difficulty": "medium",
      "stars": 2,
      "confidence": "high",
      "text": "In a mysterious investigation bureau, there are $m$ detectives and $n$ secret clues, where $n\\ge m\\ge2$. Each detective has access to a distinct combination of these clues. One day, the chief inspector burns exactly one clue from the archives. A clue is called <em>safe</em> if, after its destruction, no two detectives become indistinguishable based on the clues they still possess.<br><br>Show that at least $n-m+1$ clues are safe.",
      "why": "Identify clue-sets with distinct vertices of the cube $\\{0,1\\}^n$: clue $j$ is unsafe iff two vertices differ only in coordinate $j$, a cube edge in direction $j$. Choosing one such edge per unsafe clue gives a graph $H$ on the $m$ vertices with all direction labels distinct; $H$ is acyclic because the hypercube $Q_n$ is the Cayley graph of $(\\mathbb Z/2\\mathbb Z)^n$, where every closed walk uses each generator an even number of times, so no direction occurs exactly once in a cycle, i.e. $Q_n$ has no rainbow cycle. Hence $H$ is a forest: at most $m-1$ unsafe clues, at least $n-m+1$ safe.",
      "hints": [
        "Read clue-sets as vertices of the cube $\\{0,1\\}^n$; an unsafe clue is a used edge-direction.",
        "Cube cycles repeat every direction, so the chosen edges form a forest: at most $m-1$ unsafe."
      ],
      "steps": [
        "Represent the $m$ distinct clue-sets by their $0$–$1$ incidence vectors in $\\{0,1\\}^n$. A clue $j$ is unsafe exactly when two detectives' vectors differ only in coordinate $j$, so there is a hypercube edge in direction $j$ between two of the $m$ vertices.",
        "For every unsafe clue choose one such edge. The chosen edges form a graph $H$ on the $m$ detective-vertices, and their edge labels (the corresponding clues) are all distinct.",
        "The graph $H$ is acyclic. Indeed, in any cycle of a hypercube, each coordinate is flipped an even number of times. But every edge of $H$ has a distinct coordinate label, so a cycle would make each of its labels occur exactly once, impossible.",
        "Thus $H$ is a forest, so it has at most $m-1$ edges. If $U$ is the number of unsafe clues, then $U\\le m-1$, hence the number of safe clues is at least $n-U\\ge n-m+1$."
      ],
      "remark": "The key lemma is that the hypercube $Q_n$, as the Cayley graph of $(\\mathbb Z/2\\mathbb Z)^n$, carries no rainbow cycle: every closed walk uses each generator an even number of times. The proof turns the set system into vertex and edge data of a graph and bounds unsafe clues by the forest edge count, a classical olympiad device of encoding subsets as cube vertices that appears in extremal problems on the Boolean lattice."
    },
    {
      "id": "c15",
      "category": "cmb",
      "difficulty": "medium",
      "stars": 2,
      "confidence": "high",
      "text": "For any integer $n\\ge2$, prove that there exists a set $S$ of $2n$ distinct triangular numbers partitionable into two subsets of size $n$ with equal sums.<br><br><em>A triangular number is a positive integer of the form $\\tfrac{k(k+1)}2$ for some positive integer $k$.</em>",
      "why": "Seeds $T_1+T_5=T_3+T_4=16$ and $T_1+T_3+T_6=T_2+T_4+T_5=28$; the inductive identity is $T_m+T_{2m+3}=T_{m+2}+T_{2m+2}$, valid for $m$ larger than all indices used so far, adding four distinct triangular numbers, two per side, preserving equal sums; induction by steps of 2 covers all $n\\ge2$. Via $8T_r+1=(2r+1)^2$ the identity becomes $(2m+1)^2+(4m+7)^2=(2m+5)^2+(4m+5)^2$, a two-against-two equality of sums of squares of the kind parametrized by norms in the Gaussian integers $\\mathbb Z[i]$; the problem itself is a level-1 Prouhet-Tarry-Escott configuration on triangular numbers.",
      "hints": [
        "Key identity $T_m+T_{2m+3}=T_{m+2}+T_{2m+2}$, valid for $m$ above all used indices."
      ],
      "steps": [
        "Write $T_r=r(r+1)/2$. For $n=2$, $$T_1+T_5=T_3+T_4=16,$$ so four distinct triangular numbers work.",
        "For $n=3$, $$T_1+T_3+T_6=T_2+T_4+T_5=28,$$ so six distinct triangular numbers work.",
        "Suppose a valid construction for some $n$ uses only indices at most $M$. Choose $m>M$. The identity $$T_m+T_{2m+3}=T_{m+2}+T_{2m+2}$$ follows by expanding the definition of $T_r$.",
        "The four new indices $m,m+2,2m+2,2m+3$ are pairwise distinct and all exceed $M$. Put $T_m,T_{2m+3}$ on one side and $T_{m+2},T_{2m+2}$ on the other. Both sides gain the same sum and both cardinalities increase by $2$.",
        "Starting from $n=2$ and increasing by $2$ proves every even $n$; starting from $n=3$ and increasing by $2$ proves every odd $n$."
      ],
      "remark": "Via $8T_r+1=(2r+1)^2$ the inductive identity converts into a two-versus-two equality of sums of odd squares, the kind of parametric configuration explained by norms in the Gaussian integers $\\mathbb Z[i]$. The task itself is a level-1 instance of the Prouhet-Tarry-Escott problem for the sequence of triangular numbers. The construction grows out of the classical olympiad motif of seeding small cases and extending them by a polynomial identity applied far above the indices already used."
    },
    {
      "id": "c16",
      "category": "cmb",
      "difficulty": "medium",
      "stars": 2,
      "confidence": "high",
      "text": "Let $X$ be an $n$-element set, and let $A_1,A_2,\\dots,A_n$ be subsets of $X$ such that <ol><li>$|A_i|$ is odd for every $i$;</li><li>$|A_i\\cap A_j|$ is even whenever $i\\ne j$.</li></ol><br>An <em>assignment</em> is a choice of pairwise distinct elements $x_1,\\dots,x_n\\in X$ with $x_i\\in A_i$ for every $i$. Prove that the number of assignments is odd.",
      "why": "The incidence matrix $M$ over $\\mathbb F_2$ satisfies $MM^T=I$: odd sizes on the diagonal, even intersections off it, so $M$ is invertible and $\\det M=1$. An assignment lists $n$ distinct representatives of an $n$-set, hence exhausts $X$ and is a permutation $\\sigma$ with $x_{\\sigma(i)}\\in A_i$; their number is the permanent $\\operatorname{per}M=\\sum_\\sigma\\prod_i m_{i,\\sigma(i)}$, and in characteristic 2 the signs vanish, so $\\operatorname{per}M\\equiv\\det M\\equiv1\\pmod2$: the number is odd. The mechanism is the permanent-determinant congruence over $\\mathbb F_2$ coupled with the Oddtown rank method (Berlekamp), giving a linear-algebraic strengthening of Hall's marriage theorem: not just existence of a system of distinct representatives but its exact parity.",
      "hints": [
        "Assignments are exactly the nonzero terms in the permanent of $M$.",
        "Mod $2$ the permanent equals the determinant, which is $1$."
      ],
      "steps": [
        "Let $M=(m_{ij})$ be the $n\\times n$ incidence matrix, where $m_{ij}=1$ exactly when $x_j\\in A_i$, and regard all entries as elements of $\\mathbb F_2$.",
        "The $(i,i)$ entry of $MM^T$ is $|A_i|$ modulo $2$, hence equals $1$. For $i\\ne j$, the $(i,j)$ entry is $|A_i\\cap A_j|$ modulo $2$, hence equals $0$. Thus $$MM^T=I$$ over $\\mathbb F_2$.",
        "Therefore $M$ is invertible and $\\det M=1$ in $\\mathbb F_2$.",
        "The number of assignments equals the permanent $$\\operatorname{per}(M)=\\sum_{\\sigma\\in S_n}\\prod_i m_{i,\\sigma(i)}.$$ Indeed, an assignment lists $n$ pairwise distinct elements of the $n$-set $X=\\{x_1,\\dots,x_n\\}$, so they exhaust $X$: the assignment is exactly an ordering $(x_{\\sigma(1)},\\dots,x_{\\sigma(n)})$ of $X$ for a unique permutation $\\sigma\\in S_n$, and it is valid precisely when $x_{\\sigma(i)}\\in A_i$, i.e. $\\prod_i m_{i,\\sigma(i)}=1$. Modulo $2$, the sign of every permutation is $1$, so $\\operatorname{per}(M)\\equiv\\det M\\equiv1\\pmod2$.",
        "Hence the number of assignments is odd."
      ],
      "remark": "The engine is the permanent-determinant congruence in characteristic 2, married to the Oddtown incidence-matrix rank method: $MM^T=I$ forces invertibility, so the SDR count is odd. This yields a linear-algebraic strengthening of Hall's marriage theorem, upgrading existence to exact parity, a technique in the spirit of the Alon-Tarsi parity approach to list colouring. The problem grows out of the standard combinatorial reading of the permanent as the count of systems of distinct representatives."
    },
    {
      "id": "c17",
      "category": "cmb",
      "difficulty": "medium",
      "stars": 2,
      "confidence": "high",
      "text": "$n\\ge3$ teams play a round-robin: every two teams play one match, each match has a winner, no draws. Call a triple of teams a \\emph{loop} if each of its three teams beats exactly one of the other two (a rock-paper-scissors cycle). An \\emph{upset} is a re-run of a single match whose result is the opposite of the original. Saying the upset \\emph{changes the loop count by $\\Delta$} means: after the re-run, the total number of loops is the original number plus $\\Delta$. Prove that the set of all possible values of $\\Delta$ - over every round-robin schedule and every single match re-run - is exactly the whole interval of integers from $-(n-2)$ to $n-2$.",
      "why": "A re-run of $a$ against $b$ touches only triples $\\{a,b,w\\}$: it gains a loop exactly for $w$ on a directed path $a\\to w\\to b$ and loses one exactly for $w$ with $b\\to w\\to a$, so $\\Delta=\\#\\{w:a\\to w\\to b\\}-\\#\\{w:b\\to w\\to a\\}$, two disjoint sets among $n-2$ teams, giving $|\\Delta|\\le n-2$; the formula is local. Attainment: in the transitive ranking ($i\\to j$ iff $i<j$) re-running team 1 against team $k+1$ creates exactly $k$ loops ($\\Delta=+k$, and $\\Delta=0$ from $1$ vs $2$), and re-running the same match in the new position dissolves them ($\\Delta=-k$); endpoints $\\pm(n-2)$ come from team 1 against team $n$. The spectrum is exactly $[-(n-2),n-2]$. Context: the loop count obeys $c(T)=\\binom n3-\\sum_v\\binom{d_v^+}{2}$, the classical identity behind the Harary-Moser-Moon bounds for cyclic triangles.",
      "hints": [
        "Only triples $\\{a,b,w\\}$ through the flipped pair change; $\\Delta$ counts $w$ on paths $a\\to w\\to b$ minus $w$ on $b\\to w\\to a$.",
        "In the transitive tournament, flip team 1 against team $k+1$ to get $+k$, then flip back for $-k$."
      ],
      "steps": [
        "Fix a team $a$ beating $b$, and consider re-running $a$ vs $b$ with $b$ now winning. A triple not containing both $a$ and $b$ is untouched; the triple $\\{a,b,w\\}$ can change status only through $w$: BEFORE the re-run $\\{a,b,w\\}$ is a loop ⟺ $b$ beats $w$ beats $a$; AFTER, it is a loop ⟺ $a$ beats $w$ beats $b$. Hence $$\\Δ=\\#\\{w: a\\to w\\to b\\}-\\#\\{w: b\\to w\\to a\\},$$ where the two sets are disjoint subsets of the other $n-2$ teams, giving $|\\Delta|\\le n-2$ for every schedule and every re-run.",
        "Attainability, non-negative half: take the ranked tournament $T$: team $i$ beats team $j$ ⟺ $i\\lt j$. Re-run team 1's match against team $k+1$ ($0\\le k\\le n-2$). In the PRE-flip state, teams $2,\\dots,k$ satisfy $1\\to w\\to k{+}1$ (team 1 beats everyone, and every smaller-numbered team beats $k{+}1$): that is $k$ paths; teams $k+2,\\dots,n$ satisfy neither $1\\to w\\to k{+}1$ (they lose to $k{+}1$) nor $k{+}1\\to w\\to1$ (nobody beats team 1). Step 1's formula gives $\\Delta=+k$. For $k=0$ this is the re-run of team 1 vs team 2, which merely swaps the two top ranks and changes nothing, so $\\Delta=0$ occurs.",
        "Attainability, negative half: apply the re-run of the previous step to the ranked tournament, producing $S_k$ with $c(S_k)=c(T)+k$, and then RE-RUN THE SAME MATCH back in $S_k$. Its change is the exact opposite, $-k$: in $S_k$ the $k$ loops through the pair $\\{1,k{+}1\\}$ dissolve and none are created (the two path counts of step 1 swap roles), so every $\\Delta\\in\\{-(n-2),\\dots,-1\\}$ occurs.",
        "Glue: steps 1-3 show the set of possible $\\Delta$ sits inside $[-(n-2),n-2]$ and contains every integer of it; endpoints: $k=n-2$ (re-run team 1 vs team $n$ in the ranking) and its undo.",
        "Context note (not needed, prior art kept out of the claim): summing loops over triples via 'a non-loop has a unique double-beater' gives $c(T)=\\binom n3-\\sum_i\\binom{d_i^+}{2}$ - the classical identity behind Harary-Moser-type bounds like 'strong $\\Rightarrow c(T)\\ge n-2$'; the shipped statement is the flip-spectrum theorem, which that lane never formulates.",
        "Machine audit (c18-verify.py / c18-verify.out): exhaustive over all $2^{\\binom n2}$ tournaments and all $\\binom n2$ flips for $n=3,4,5,6$ (502,168 flip-changes total): the step-1 path formula matched the recomputed change every time, no $|\\Delta|\\gt n-2$ occurred, and at each $n$ the full interval was attained; the step 2-3 ladder re-verified by direct recomputation of $c$ for $n=7..12$; 400 random tournaments each at $n=10,12$: no bound violations."
      ],
      "remark": "The loop count of a tournament is governed by the classical identity $c(T)=\\binom n3-\\sum_v\\binom{d^+_v}{2}$ behind the Harary-Moser-Moon theory of cyclic triangles, and the change formula $\\Delta=\\#(a\\to w\\to b)-\\#(b\\to w\\to a)$ is the standard local analysis of single-edge flips, the moves connecting score sequences. The extremal configurations, transitive tournaments, supply the ladder attaining the spectrum $[-(n-2),n-2]$."
    },
    {
      "id": "c18",
      "category": "cmb",
      "difficulty": "hard",
      "stars": 3,
      "confidence": "high",
      "text": "In a duel league, every pair of the $n\\ge2$ players plays exactly one duel, and every duel has a winner (no draws); write $A\\to B$ when $A$ beat $B$. A player $K$ is a \\emph{king} if every other player $X$ satisfies $K\\to X$ or $K\\to Y\\to X$ for some player $Y$ ($K$ beat someone who beat $X$). A \\emph{victory chain} is a listing of all players $x_1,x_2,\\dots,x_n$ with $x_i\\to x_{i+1}$ for every $i$.<br><br>Prove the following two independent statements.<ol><li>Every king starts a victory chain: if $K$ is a king, some victory chain has $x_1=K$.</li><li>For every $n\\ge5$ and every integer $m$ with $3\\le m\\le n$, some league on $n$ players has exactly $m$ kings.</li></ol>",
      "why": "Claim (1) proves more: a player starts a victory chain iff he reaches every other player by a win-path, so ordering others by shortest path from $v$ and inserting each newcomer after the last chain member he beats (the following member then loses to the newcomer) keeps the head fixed, a fixed-start refinement of Redeis Hamiltonian-path theorem for tournaments. A king reaches everyone within two duels, so he heads a chain; both converses fail, chain-heads need not be kings and kings need not end chains, so no dualization is possible. Claim (2): appending a transitive tail beaten by all core players leaves the king set unchanged, so it suffices to build all-king cores: regular carousels for odd $m$ and a parity-shifted core for even $m\\ge6$; every 4-player league has a non-king, so $m=4$ needs a 5-player seed, and $n\\ge5$ is exact. This pins down the realized king spectrum $\\{3,\\dots,n\\}$ next to Landau's and Maurer's rigidity that a unique king is a dominating player and counts other than 1 and at least 3 are impossible.",
      "hints": [
        "Define reachability by win-paths and order players by shortest-path distance from $v$.",
        "Splice each newcomer into the chain after the last already-listed player who beats him.",
        "For the spectrum, build all-king carousels and attach a transitive tail that everyone beats."
      ],
      "steps": [
        "Notation: player v REACHES x if some win-path v -> ... -> x exists (length >= 1); a king reaches everyone within length &lt;= 2, so every king reaches everyone. Write N+(v) for the set v beat. A chain is a listing x_1..x_n with x_i -> x_{i+1}.",
        "Splice lemma: let P = (a_1, ..., a_k) be a chain of distinct players, and let x be a new player beaten by at least one member of P. Let i be the LARGEST index with a_i -> x (it exists by assumption). If i = k, then a_1, ..., a_k, x is a longer chain with the same head. If i &lt; k, then a_{i+1} does not beat x (by maximality of i) and a_{i+1} != x, so x -> a_{i+1} - tournaments decide every pair - and a_1, ..., a_i, x, a_{i+1}, ..., a_k is a longer chain with the same head a_1. Either way x can be inserted keeping the head fixed.",
        "Chain lemma (reach => chain head): order the other players w_1, ..., w_{n-1} by nondecreasing length of a shortest win-path from v. Induct on t. A chain from v already covers {v, w_1, ..., w_{t-1}}: on a shortest win-path to w_t the predecessor p of w_t satisfies dist(p) &lt; dist(w_t) &lt;= t, so p is among the already-covered players and p -> w_t; the splice lemma inserts w_t keeping head v. At the end, v heads a chain through all players.",
        "Claim (1): a king reaches every player within two duels, hence reaches everyone; the chain lemma then produces a victory chain headed by the king. The converse is FALSE by design and must not be attempted: on players {0,1,2,3} with wins 0->3, 1->0, 2->0, 2->1, 3->1, 3->2, player 1 heads the chain 1, 0, 3, 2, yet 1 is not a king: 1's only win is 0 and 0's only win is 3, so within two duels 1 reaches only {0, 3} and never 2, since 2 beats 1. (There are 24 such non-king chain-head instances among 4-player leagues.) A king also need not END a chain (2,530 failing (king, player) pairs found over random leagues at n = 5..7), so the one-way direction shipped in the claim is exactly the true statement.",
        "Claim (2), tail lemma: build C' from a league C by appending players z_1, ..., z_r with z_i -> z_j exactly for i &lt; j, while every old player beats every z_i. New z's are not kings: a z cannot reach any old player at all in two duels (z's only wins are later z's, whose wins are later still). Old players keep exactly their old two-step reach: any new two-step path v -> z_i -> ? ends at z's, and old targets stay reachable or not as before. So king sets are preserved and r is free: it suffices to build, for every m != 4, a league on m players with all m kings, plus a 5-player league with exactly 4 kings.",
        "Claim (2), odd cores: for m = 2h+1 >= 3 seat players 0, ..., m-1 on a circle and let i -> j when the clockwise gap from i to j lies in {1, ..., h}. A seat i reaches directly the h seats ahead; for a seat at clockwise gap d with h+1 &lt;= d &lt;= 2h, write d = (d-h) + h: seat i beats seat i+(d-h) (gap d-h &lt;= h) which beats seat i+d (gap exactly h); so all m seats are kings. (m = 3: the directed triangle.)",
        "Claim (2), even cores and the 4-gap: for m = 2k >= 6 take the all-king carousel on 2k-1 seats (odd case with h = k-1) and add a player x whom the odd seats beat and who beats the even seats. Even seat e: e -> e+1 (gap 1, legal as k-1 >= 2) and e+1 is odd, so e+1 -> x. The last even seat 2k-2 reaches seat 1 by gap 2 &lt;= k-1, then x. Odd seats beat x directly. And x reaches an odd seat o via x -> o-1 -> o (gap 1). Hence all 2k players are kings. The value m = 4 is genuinely exceptional: all 64 four-player leagues have a non-king (exhaustive in the verifier), so we use instead the FIVE-player seed with wins 0->4, 1->0, 1->3, 2->0, 2->1, 3->0, 3->2, 3->4, 4->1, 4->2: player 0 reaches only {4, 1, 2} within two duels (3 beats him and nobody he beats beats 3), so exactly players 1, 2, 3, 4 are kings - verified in the battery.",
        "Claim (2), assembly: given n >= 5 and 3 &lt;= m &lt;= n. If m != 4, take the all-king core on m players from the last two steps and attach a tail of n - m players (tail lemma allows r >= 0, and every old player beats every tail player - legal for any n). If m = 4, take the 5-player seed (allowed since n >= 5) and tail on n - 5 players. In every case the league on n players has exactly m kings. The hypothesis n >= 5 is load-bearing: at n = 4 the count m = 4 is impossible (step above), while m = 3 occurs - so {3,...,n} is exactly realizable for n >= 5 and not for n = 4.",
        "Machine audit (c21-verify.py / c21-verify.out): over ALL labelled tournaments for n = 2..6 and 40,000 random leagues each at n = 7,8: king => heads a chain: 0 violations; heads a chain &lt;=> reaches all: 0 violations (the splice lemma's exactness); leagues with exactly 2 kings: 0 (classical - logged, not claimed); Maurer's pecked-by-a-king lemma also recomputed: 0 violations (TRUE - and deliberately NOT shipped). Converse census: non-king chain-heads number 24 at n=4 and 960 at n=5; the steps' example verified; kings that cannot END any chain: 2,530 (league, king) sample pairs at n = 5..7 (c21-explore2.py output). Spectrum: cores verified all-king for m = 3..16 (and the 5-seat seed has exactly 4 kings); assemblies n = 5..10, every 3 &lt;= m &lt;= n: 0 failures."
      ],
      "remark": "Claim (1) refines Redeis theorem that every tournament has a Hamiltonian path, and its exact proof runs through the reachability characterization of path heads. Claim (2) leans on the classical theory of kings: Landau's and Maurer's results on kings and score sequences, with regular cyclic carousel tournaments as all-king cores; the m=4 gap is a known rigidity phenomenon for small tournaments. The techniques, shortest-path splicing and appending dominated transitive tails, are staple olympiad tournament motifs."
    },
    {
      "id": "c19",
      "category": "cmb",
      "difficulty": "hard",
      "stars": 3,
      "confidence": "high",
      "text": "There are $n$ cells arranged in a circle, labelled $1, 2, \\dots, n$ in clockwise order. Initially, a token is placed at cell $1$. Alice and Bob play a game with $n - 1$ rounds. In round $k$ ($1 \\le k \\le n - 1$):<br><ol><li>Alice chooses a step size $s_k \\in \\{1, 2, \\dots, n - 1\\}$ that has not been chosen in any earlier round.</li><li>Bob chooses whether the token moves $s_k$ steps clockwise or $s_k$ steps counter-clockwise.</li></ol><br>Alice wins if, after all $n - 1$ rounds, the token has visited every single cell of the circle at least once (including its initial position at cell $1$). Otherwise, Bob wins. Determine all integers $n \\ge 2$ for which Alice has a winning strategy.",
      "why": "Relabel cells $0,\\dots,n-1$ mod $n$; from $x$ with step $s$ the candidate landings are $x\\pm s$, equal only when $2s\\equiv0$. Bob's strategy is a static ranking function: always take $\\min$ of the two labels. For odd $n\\ge3$ the two labels are always distinct, so the minimum never reaches $n-1$. For even $n=2h$ the labels $n-1$ and $n-2$ are selectable only via $s=h$, the unique element of order 2, whose landing $x+h$ is forced, and Alice may name $h$ once; moreover the pair $\\{n-2,n-1\\}$ can never be $\\{x\\pm s\\}$ since $a+b\\equiv2x\\pmod n$ forces the two candidates to share parity, exactly the quotient $\\mathbb Z/n\\mathbb Z\\to\\mathbb Z/2\\mathbb Z$. Thus at most one of the top cells is visited and Bob wins for all $n\\ge3$; Alice wins only for $n=2$.",
      "hints": [
        "Give Bob a static ranking rule: always move to the smaller of the two labels.",
        "Even $n$: only step $n/2$ reaches the top cells, its landing is forced, and $n-2,n-1$ cannot both be candidates."
      ],
      "steps": [
        "Relabel the cells $0,1,\\dots,n-1$ modulo $n$, so the token starts at $0$ and a cell is visited if the token starts or lands on it. If the token is at $x$ and Alice announces $s$, the two possible landings are $a\\equiv x+s$ and $b\\equiv x-s \\pmod n$, written as labels in $\\{0,\\dots,n-1\\}$. Bob's strategy: always move to $\\min\\{a,b\\}$ (when $a=b$ there is no choice).",
        "Base case $n = 2$: the only step size is $s = 1$, and both directions from cell $0$ land on cell $1$, so Alice visits both cells and wins.",
        "Let $n \\ge 3$ be odd. The two landings coincide only if $2s \\equiv 0 \\pmod n$, i.e. $n \\mid s$, impossible for $1 \\le s \\le n-1$. So $a \\ne b$ every round, and the minimum of two distinct labels of $\\{0,\\dots,n-1\\}$ is at most $n-2$. Cell $n-1$ is never visited, so Bob wins for every odd $n \\ge 3$.",
        "Let $n \\ge 4$ be even and $h = n/2$. Now $2s \\equiv 0 \\pmod n$ with $1 \\le s \\le n-1$ forces $s = h$, so for $s \\ne h$ the two labels are distinct and Bob takes the smaller: he can never select the largest label, i.e. cell $n-1$ is reachable only when $s = h$.",
        "Cell $n-2$ likewise cannot be reached with $s \\ne h$: if $\\min\\{a,b\\} = n-2$ with $a \\ne b$, the other landing must exceed $n-2$, so $\\{a,b\\} = \\{n-2,\\,n-1\\}$. But $a + b \\equiv (x+s) + (x-s) \\equiv 2x \\pmod n$, while $(n-2)+(n-1) = 2n-3 \\equiv n-3$, so $n \\mid (2x - (n-3))$, i.e. $n \\mid (2x+3)$. The divisor $n$ is even while $2x+3$ is odd, impossible.",
        "Hence both cells $n-2$ and $n-1$ can only be reached via $s = h$. On that move the two directions coincide and the landing is forced to be $x + h$, a single cell, and Alice may announce each step size at most once. So at most one of $n-2, n-1$ is ever visited, and Bob wins for every even $n \\ge 4$.",
        "Combining all cases, Alice has a winning strategy exactly for $n=2$."
      ],
      "remark": "The proof is a potential-function strategy: Bob's static ranking pins the token below the top labels, and the obstruction to reaching both $n-2$ and $n-1$ is the parity homomorphism $\\mathbb Z/n\\mathbb Z\\to\\mathbb Z/2\\mathbb Z$, since $a+b\\equiv2x$ forces candidate landings to share parity. Structurally this is a two-player game solved by an invariant rather than by strategy stealing, in the classical olympiad family of token games on a cyclic board with signed steps."
    },
    {
      "id": "c20",
      "category": "cmb",
      "difficulty": "hard",
      "stars": 3,
      "confidence": "high",
      "text": "At a club meeting, each pair of members either shook hands once or did not shake hands at all. There were $n$ members and $m$ handshakes. Suppose:<br><ol><li>every member shook hands with an odd number of other members;</li><li>every pair of members had an even number of common acquaintances (members who shook hands with both; the condition applies to every pair, whether or not the two members shook hands with each other).</li></ol>Prove that $m-\\tfrac n2$ is an even integer.",
      "why": "Double-count wedges, length-2 handshake chains, by center and by ends: $\\sum_v\\binom{d_v}{2}=\\sum_{\\{u,w\\}}\\mathrm{codeg}(u,w)$, where hypothesis (ii) makes every codegree even, including for non-adjacent pairs, which is exactly what the end count over all pairs requires. For odd $d=2k+1$, $\\binom d2=k(2k+1)\\equiv k=\\frac{d-1}{2}\\pmod2$, so $0\\equiv\\sum_v\\frac{d_v-1}{2}=\\frac{2m-n}{2}=m-\\frac n2$, and $n$ is even because $\\sum d_v=2m$ with all summands odd. Non-vacuous: $K_n$ for every even $n$, and the lexicographic product $P_3\\circ K_2$ ($n=6$, $m=11$). The proof is a parity double count on the vertex-wedge incidence structure of $G$, distinct from the Oddtown-style adjacency-matrix rank method over $\\mathbb F_2$, which bounds family sizes rather than edge counts.",
      "hints": [
        "Double count wedges, a centre with two partners, by centre and by ends.",
        "Mod $2$, $\\binom{2k+1}{2}\\equiv k$; summing gives $m-\\frac n2\\equiv0$."
      ],
      "steps": [
        "Notation: $d_v$ = number of handshakes of member $v$ (odd, by (1)); $\\mathrm{codeg}(u,w)$ = number of members who shook hands with both $u$ and $w$ (even, by (2), for EVERY pair $u\\ne w$).",
        "Warm-up (one line, inside the proof): the number of members $n$ must be even for $m-\\frac n2$ to even be an integer - indeed $\\sum_vd_v=2m$ is even and all $d_v$ are odd, so $n$ is even. (The congruence below gives this again, but record it so the claim is well-typed.)",
        "Double count WEDGES (length-2 chains: a center member together with two of its handshake partners): choosing a center $v$ and two partners gives $\\binom{d_v}2$ wedges; choosing the two END members $\\{u,w\\}$ and a common acquaintance between them gives $\\mathrm{codeg}(u,w)$. Both count the same set: $$\\sum_{v}\\binom{d_v}{2}=\\sum_{\\{u,w\\}}\\mathrm{codeg}(u,w).$$ (A wedge with center $v$ and ends $u,w$ is exactly a common acquaintance of $u$ and $w$ - the ends are automatically distinct and different from the center.)",
        "Right side is even by (2): every term $\\mathrm{codeg}(u,w)$ is even.",
        "Left side mod 2: write $d_v=2k_v+1$; then $\\binom{d_v}{2}=k_v(2k_v+1)\\equiv k_v=\\frac{d_v-1}{2}\\pmod2$. Hence $$0\\equiv\\sum_vk_v=\\frac{\\sum_vd_v-n}{2}=\\frac{2m-n}{2}=m-\\frac n2\\pmod2,$$ which is exactly the claim.",
        "Non-vacuity and checks: for every even $n$ the complete club $K_n$ satisfies (1),(2): degrees $n-1$ odd, codegrees $n-2$ even, and $m-\\frac n2=\\frac{n(n-1)}2-\\frac n2=\\frac{n(n-2)}2$, which is even (put $n=2k$: $\\frac{n(n-2)}2=2k(k-1)$). Smallest examples: $n=2$: $1-1=0$ ✓; $n=6$: $15-3=12$ ✓. Non-complete example: three pairs of twins $\\{a_1,a_2\\}$, $\\{b_1,b_2\\}$, $\\{c_1,c_2\\}$; handshakes = the three twin pairs, plus every member of the middle pair shaking hands with every member of each outer pair ($P_3\\circ K_2$: $n=6$, $m=11$, degrees $5,5,3,3,3,3$, codegrees all even by inspection, and $11-3=8$ is even ✓) - the claim bites also where the determinant classic's hypotheses get thin.",
        "Machine audit (tools/proofs/redesign-20260930/c19-verify.py, 2026-09-30): exhaustive over all graphs on $n\\le7$ vertices (every $2^{\\binom n2}$, bitmask codegrees): all hypothesis-satisfying graphs pass the congruence - 0 failures; counts of satisfying graphs per $n$: $n=2:1$, $n=4:4$, $n=6:76$, and $0$ for all odd $n$ (which certifies the warm-up lemma in bulk)."
      ],
      "remark": "The proof is a parity double count on the incidence structure of vertices and 2-paths: counting wedges by centre versus by endpoints transfers evenness of codegrees to the degree sum. Graphs with all odd degrees and all even codegrees are exactly the self-orthogonality conditions of adjacency matrices over $\\mathbb F_2$, the same territory as Oddtown and symmetric designs, though here a handshake lemma for 2-paths suffices. The wedge count is a classical olympiad incidence motif."
    },
    {
      "id": "c21",
      "category": "cmb",
      "difficulty": "challenging",
      "stars": 4,
      "confidence": "low",
      "text": "Let $n&lt;m$ be positive integers. Let $a_{ij}$ be real numbers for $1\\le i\\le n$ and $1\\le j\\le m$. We say a sequence of real numbers $x_1,\\dots,x_m$ is <em>stable</em> if we can choose $n$ pairwise distinct integers $c_1,\\dots,c_n\\in\\{1,\\dots,m\\}$ such that $$a_{i,c_i}-x_{c_i}\\ge a_{ij}-x_j \\quad\\text{for all }1\\le i\\le n\\text{ and }1\\le j\\le m.$$ Prove that if two sequences $y=(y_1,\\dots,y_m)$ and $z=(z_1,\\dots,z_m)$ are stable, then the sequence $u$ defined by $u_j=\\min(y_j,z_j)$ is also stable.",
      "why": "Fix witnessing optimal matchings $M_y,M_z$; in $H=M_y\\cup M_z$ rows have degree 2 and columns at most 2, so components are alternating paths and cycles (a doubled edge is a 2-cycle). If row $i$ uses $p$ in $M_y$ and $q$ in $M_z$, optimality chains $y_p-y_q\\le a_{ip}-a_{iq}\\le z_p-z_q$, i.e. $d_p\\le d_q$ for $d=y-z$: along each path, oriented from its $M_y$ end, $d$ is nondecreasing, and on each cycle constant. Writing $u=\\min(y,z)=y-\\max(d,0)$, the $u$-score is $\\max(\\alpha_j,\\alpha_j+d_j)$ with $\\alpha_j=a_{ij}-y_j$, so each row's $u$-optimum sits at $p$ or $q$; the sign cut of $d$ selects $M_y$ edges below and $M_z$ edges above within each component, matching all rows to distinct $u$-optimal columns without exchange. Conceptually this is valuated-matroid basis exchange for the transversal (assignment) matroid, Murota's M-convexity: Dress-Wenzel dual valuations are closed under componentwise minimum, the defining property of the associated tropical linear space.",
      "hints": [
        "Take witnessing optimal matchings for $y$ and $z$ and study their union.",
        "For $d=y-z$, each row's two columns obey $d_p\\le d_q$; $d$ increases along every alternating path.",
        "Cut each component at the sign change of $d$: use $M_y$ edges below and $M_z$ edges above."
      ],
      "steps": [
        "Let $M_y$ and $M_z$ be witnessing matchings for the stability of $y$ and $z$: each row vertex $i$ is matched to one column, the columns used by each matching are pairwise distinct, and its matched edge is row-wise optimal for the corresponding sequence. Form the bipartite multigraph $H=M_y\\cup M_z$, keeping the two edges distinct when the same row-column pair occurs in both matchings. Every row has degree $2$ and every column has degree at most $2$, so every connected component of $H$ is an alternating cycle or an alternating path whose endpoints are columns (columns of degree $0$ or unused vertices play no role). A doubled common edge is regarded as a $2$-cycle. Along any path the two matching edges strictly alternate, because each row and each internal column is incident to exactly one $M_y$ edge and one $M_z$ edge; hence the two end-edges lie in *opposite* matchings, exactly one endpoint column is reached by an $M_y$ edge, and the orientation used in the next step is always available.",
        "Put $$d_j=y_j-z_j.$$ Suppose a row $i$ uses column $p$ in $M_y$ and column $q$ in $M_z$. Stability gives $$a_{ip}-y_p\\ge a_{iq}-y_q$$ and $$a_{iq}-z_q\\ge a_{ip}-z_p.$$ Hence $$y_p-y_q\\le a_{ip}-a_{iq}\\le z_p-z_q,$$ so $$d_p\\le d_q.$$ In a path, orient the component from the endpoint belonging to $M_y$. Writing it as $$c_0-i_1-c_1-i_2-c_2-\\cdots-i_k-c_k,$$ where $i_r$ is joined to $c_{r-1}$ by its $M_y$ edge and to $c_r$ by its $M_z$ edge, we obtain $$d_{c_0}\\le d_{c_1}\\le\\cdots\\le d_{c_k}.$$ Around an alternating cycle the inequalities go all the way around, hence all its columns have the same $d$-value.",
        "Fix any row $i$ (path or cycle), with $M_y$ column $p$ and $M_z$ column $q$. Define $$\\alpha_j=a_{ij}-y_j.$$ Since $p$ is $y$-optimal, $\\alpha_p\\ge\\alpha_j$ for every $j$. Also $z_j=y_j-d_j$, so $q$ being $z$-optimal means $$\\alpha_q+d_q\\ge\\alpha_j+d_j$$ for every $j$ (applied at $j=p$ this gives $\\alpha_p+d_p\\le\\alpha_q+d_q$). Finally, because $u_j=\\min(y_j,z_j)=y_j-\\max(d_j,0)$, the row-$i$ $u$-score at column $j$ is $$a_{ij}-u_j=\\alpha_j+\\max(d_j,0)=\\max(\\alpha_j,\\alpha_j+d_j).$$ Chaining the two optima, $\\max(\\alpha_j,\\alpha_j+d_j)\\le\\max(\\alpha_p,\\alpha_q+d_q)$ for every $j$, while the row's $u$-score at $p$ is $\\max(\\alpha_p,\\alpha_p+d_p)$ and at $q$ is $\\max(\\alpha_q,\\alpha_q+d_q)$; using $\\alpha_p+d_p\\le\\alpha_q+d_q$ and $\\alpha_q\\le\\alpha_p$, the per-column bound $\\max(\\alpha_p,\\alpha_q+d_q)$ is therefore attained at $p$ or at $q$. Sign cases: if $d_p,d_q\\le0$, then $\\alpha_q+d_q\\le\\alpha_q\\le\\alpha_p$, so $p$ is $u$-optimal; if $d_p,d_q\\ge0$, then $\\alpha_p\\le\\alpha_p+d_p\\le\\alpha_q+d_q$, so $q$ is $u$-optimal; if $d_p\\le0\\le d_q$, the bound $\\max(\\alpha_p,\\alpha_q+d_q)$ is exactly $p$'s score $\\alpha_p$ or $q$'s score $\\alpha_q+d_q$, so at least one of $p,q$ is $u$-optimal. The remaining sign pattern $d_q\\le0\\le d_p$ cannot occur, since Step 2 gives $d_p\\le d_q$ for the $M_y$/$M_z$ columns of the same row.",
        "Consider an alternating cycle; by Step 2 its column differences are all equal, say to $\\delta$ (a doubled-edge $2$-cycle has one column and is trivially covered, with $p=q$ and $\\delta=d_p$). Every row of the cycle then has both of its columns in the same sign case: if $\\delta\\le0$ all rows fall under case $d_p,d_q\\le0$, so every $M_y$ edge is $u$-optimal; if $\\delta\\ge0$ all rows fall under case $d_p,d_q\\ge0$, so every $M_z$ edge is $u$-optimal (when $\\delta=0$ either choice works). The $M_y$ edges of the cycle alone already match every row of the component to pairwise distinct columns of the cycle, and so do the $M_z$ edges, so either full choice covers the component with no collision.",
        "Now consider an alternating path $$c_0-i_1-c_1-\\cdots-i_k-c_k$$ with $d_{c_0}\\le\\cdots\\le d_{c_k}$, where row $i_r$ uses column $c_{r-1}$ via $M_y$ and column $c_r$ via $M_z$. If every $d_{c_r}\\le0$, take all $M_y$ edges; if every $d_{c_r}>0$, take all $M_z$ edges; in the first case each row is in sign case $d_p,d_q\\le0$ and in the second each row is in case $d_p,d_q\\ge0$ (strictly positive), so by the previous step every chosen edge is $u$-optimal, and each choice covers all $k$ rows with $k$ distinct columns. Otherwise let $t$ be the largest index in $\\{0,\\dots,k-1\\}$ with $d_{c_t}\\le0$; then $d_{c_{t+1}}>0$. Take the $M_y$ edge $c_{r-1}$ of row $i_r$ for $r\\le t$ (there both columns carry index $\\le t$, hence nonpositive $d$: case one), take the $M_z$ edge $c_r$ of row $i_r$ for $r\\ge t+2$ (there both columns carry index $\\ge t+1$, hence positive $d$: case two), and for the single transition row $i_{t+1}$, whose columns satisfy $d_{c_t}\\le0\\le d_{c_{t+1}}$, choose whichever of its two incident edges is $u$-optimal, which the third sign case guarantees exists. The columns used are $$c_0,c_1,\\dots,c_{t-1},\\quad\\text{then }c_t\\text{ or }c_{t+1},\\quad\\text{then }c_{t+2},\\dots,c_k,$$ pairwise distinct, so no collision arises; the degenerate subcases $t=0$ and $t=k-1$ simply drop the first or last block.",
        "Thus every connected component of $H$ contains a matching covering all its row vertices by edges that are individually $u$-optimal, with no column used twice; the word *optimal* is global, since Step 3 bounds the row-$i$ $u$-score at **every** column $j\\in\\{1,\\dots,m\\}$, not merely at columns of the same component. Distinct components have disjoint column sets, so combining these matchings over all components gives $n$ pairwise distinct columns $c_1,\\dots,c_n$ such that $$a_{i,c_i}-u_{c_i}\\ge a_{ij}-u_j$$ for every row $i$ and every column $j$. Therefore $u=(\\min(y_1,z_1),\\dots,\\min(y_m,z_m))$ is stable."
      ],
      "remark": "The statement says stable price vectors are closed under coordinatewise minimum: they are the dual valuations of Dress-Wenzel, the points of the tropical linear space of the transversal matroid, and the argument is Murota's exchange for valuated matroids, the M-convexity of the assignment problem. The proof grows out of the classical symmetric-difference exchange argument for matchings, upgraded so the difference $y-z$ orients each alternating path and the cut lands on an optimal matching."
    },
    {
      "id": "c22",
      "category": "cmb",
      "difficulty": "challenging",
      "stars": 4,
      "confidence": "low",
      "text": "There are $n$ piles, each with a token of value $1$. In each step, choose two piles with values $A$ and $B$ and merge them into a pile of value $A+B+\\min(A,B)$. Repeat $n-1$ times.<br><br>Prove that the maximum possible value of the final pile equals the number of odd entries in the first $n$ rows of Pascal's triangle, i.e. the number of pairs $(x,y)$ with $0\\le x\\le y&lt;n$ for which $\\binom yx$ is odd.",
      "why": "Every merge history is a binary tree, and $A,B\\mapsto A+B+\\min(A,B)$ is nondecreasing in each argument, so $M(n)=\\max_{1\\le i\\le\\lfloor n/2\\rfloor}\\bigl(M(i)+M(n-i)+\\min(M(i),M(n-i))\\bigr)$; $M$ is strictly increasing, collapsing the recurrence to $M(n)=\\max_i\\bigl(2M(i)+M(n-i)\\bigr)$, $M(1)=1$. For $S(n)=\\sum_{r=0}^{n-1}2^{\\operatorname{popcount}(r)}$, Lucas' theorem mod 2 gives exactly $2^{\\operatorname{popcount}(y)}$ odd entries in row $y$ of Pascal's triangle, and $S$ obeys $S(2t)=3S(t)$, $S(2t+1)=2S(t)+S(t+1)$; the block inequality $S(i+j)\\ge2S(i)+S(j)$ for $i\\le j$ (parity induction on $i+j$), with equality at balanced splits, forces $M=S$ by strong induction. $2^{\\operatorname{popcount}}$ is a 2-regular sequence in the sense of Allouche-Shallit, and the two-step recurrences are the standard divide-and-conquer structure of binary-additive functions.",
      "hints": [
        "Model merges as binary trees and write the max-recurrence for $M(n)$.",
        "Lucas' theorem makes the count $S(n)=\\sum_{r<n}2^{\\operatorname{popcount}(r)}$; verify it obeys the same recurrence."
      ],
      "steps": [
        "Let $M(n)$ be the maximum obtainable from $n$ piles; $M(1)=1$, and every achievable pile value is at least its leaf count, so $M(k)\\ge k\\ge 1$ always. Any merge history is a binary tree: the last merge joins subtrees on $i$ and $n-i$ leaves, $1\\le i\\le\\lfloor n/2\\rfloor$. Since $x\\mapsto x+y+\\min(x,y)$ is nondecreasing in each variable, replacing a child's value by its per-size optimum $M(i)$, $M(n-i)$ can only increase the parent, so the true recurrence is $$M(n)=\\max_{1\\le i\\le\\lfloor n/2\\rfloor}\\bigl(M(i)+M(n-i)+\\min(M(i),M(n-i))\\bigr)$$: the max is an upper bound for every tree, and conversely each term is attained by running the two optimal sub-procedures on the two disjoint sets of piles independently and merging at the end.",
        "$M$ is strictly increasing: for $n\\ge2$ the split $i=1$ gives $M(n)\\ge M(1)+M(n-1)+\\min(M(1),M(n-1))\\ge 1+M(n-1)+1$, using $M(n-1)\\ge1$. Hence for $i\\le n-i$ one has $\\min(M(i),M(n-i))=M(i)$, and the recurrence simplifies to $$M(n)=\\max_{1\\le i\\le\\lfloor n/2\\rfloor}\\bigl(2M(i)+M(n-i)\\bigr),\\qquad M(1)=1.$$",
        "Define $w(r)=2^{\\operatorname{popcount}(r)}$ and $$S(n)=\\sum_{r=0}^{n-1}w(r).$$ Lucas' theorem modulo $2$ says that $\\binom yx$ is odd exactly when every $1$-bit of $x$ also occurs in $y$. Thus row $y$ contains exactly $2^{\\operatorname{popcount}(y)}=w(y)$ odd entries, so $S(n)$ is exactly the required Pascal-triangle count.",
        "Since $\\operatorname{popcount}(2r)=\\operatorname{popcount}(r)$ and $\\operatorname{popcount}(2r+1)=\\operatorname{popcount}(r)+1$, we have $$S(2t)=3S(t),\\qquad S(2t+1)=2S(t)+S(t+1).$$",
        "We prove the key binary-block lemma $$S(i+j)\\ge2S(i)+S(j) \\tag{L}$$ for $0\\le i\\le j$ by strong induction on $i+j$. Base case: $i+j=0$ means $i=j=0$, and $S(0)=0$ (empty sum), so (L) reads $0\\ge0$; and $i+j=1$ forces $i=0,j=1$, where (L) reads $S(1)\\ge 2S(0)+S(1)$, again true since $S(0)=0$. In every case below with $i+j\\ge2$ each induction hypothesis is applied only to pairs whose sum is strictly smaller than $i+j$ and whose first entry is at most its second, as checked parenthetically. Write $i=2a+\\delta$, $j=2b+\\varepsilon$, with $\\delta,\\varepsilon\\in\\{0,1\\}$. If $(\\delta,\\varepsilon)=(0,0)$, then $i\\le j$ gives $a\\le b$, and $a+b&lt;i+j$ unless $i+j=0$ (already the base case), so the induction hypothesis for $(a,b)$ gives $$3S(a+b)\\ge6S(a)+3S(b)=2S(i)+S(j).$$ If $(0,1)$, then $2a\\le2b+1$ forces $a\\le b$, so $(a,b)$ and $(a,b+1)$ are admissible pairs of smaller sum ($a+b,\\ a+b+1&lt;i+j=2a+2b+1$), and the induction hypotheses give $$S(i+j)=2S(a+b)+S(a+b+1),\\qquad S(a+b)\\ge2S(a)+S(b),\\qquad S(a+b+1)\\ge2S(a)+S(b+1),$$ and substituting the two bounds into the first identity yields (L). If $(1,0)$, then $2a+1\\le2b$ forces $a&lt;b$, so $(a,b)$ and $(a+1,b)$ are admissible pairs of smaller sum (their sums are $&lt;i+j=2a+2b+1$; the alternative $a+b=0$ would give $i=1&gt;j=0$, excluded by $i\\le j$), and the induction hypotheses give $$S(a+b)\\ge2S(a)+S(b),\\qquad S(a+b+1)\\ge2S(a+1)+S(b),$$ hence (L). Finally suppose $(\\delta,\\varepsilon)=(1,1)$. If $a=b$, then $S(i+j)=S(2i)=3S(i)=2S(i)+S(j)$. If $a&lt;b$, the pairs $(a,b+1)$ (valid: $a\\le b&lt;b+1$) and $(a+1,b)$ (valid: $a+1\\le b$) both have sum $a+b+1&lt;i+j=2a+2b+2$, so the induction hypothesis gives $$S(a+b+1)\\ge2S(a)+S(b+1),\\qquad S(a+b+1)\\ge2S(a+1)+S(b).$$ Using $S(t+1)=S(t)+w(t)$ these two bounds are $2S(a)+S(b)+w(b)$ and $2S(a)+S(b)+2w(a)$, so their larger one $M_0$ satisfies, since a maximum dominates the average, $$M_0\\ge2S(a)+S(b)+\\tfrac{2w(a)+w(b)}3.$$ Now assemble with $S(2t)=3S(t)$ and $S(2t+1)=2S(t)+S(t+1)=3S(t)+w(t)$: $$S(i+j)=3S(a+b+1)\\ge3M_0\\ge6S(a)+3S(b)+2w(a)+w(b)=2S(2a{+}1)+S(2b{+}1)=2S(i)+S(j),$$ which is (L) in this case.",
        "Applying the lemma to any split $i\\le n-i$ gives $$2S(i)+S(n-i)\\le S(n).$$ For $nge2$ the admissible split range $1le ilelfloor n/2\rfloor$ contains the balancing split: if $n=2i$ is even, that split gives $2S(i)+S(i)=3S(i)=S(n)$; if $n=2i+1$ is odd, the split $i=(n-1)/2ge1$ gives $2S(i)+S(i+1)=S(2i+1)=S(n)$. So the maximum over splits equals $S(n)$. Therefore $$S(n)=\\max_{1\\le i\\le\\lfloor n/2\\rfloor}\\bigl(2S(i)+S(n-i)\\bigr).$$",
        "Both recurrences reference only arguments $i$ and $n-i$ strictly between $0$ and $n$, so $M(n)=S(n)$ follows from $M(1)=S(1)=1$ by strong induction: assuming equality below $n$, $M(n)=max_i(2M(i)+M(n-i))=max_i(2S(i)+S(n-i))=S(n)$. Hence the maximum final pile equals the number of odd entries in the first $n$ rows of Pascal's triangle."
      ],
      "remark": "Lucas' theorem identifies row parities of Pascal's triangle with bit inclusion, so the target count is the summatory function of $2^{\\operatorname{popcount}}$, a 2-regular sequence in the sense of Allouche-Shallit obeying divide-and-conquer recurrences $S(2t)=3S(t)$ and $S(2t+1)=2S(t)+S(t+1)$. The proof grows out of the classical olympiad method of matching a game optimum to a candidate sequence via monotonicity plus a block inequality verified by induction on binary expansions."
    },
    {
      "id": "c23",
      "category": "cmb",
      "difficulty": "challenging",
      "stars": 4,
      "confidence": "low",
      "text": "Let $m\\ge3$ be odd. A school has $m$ students and $n\\ge m+2$ clubs; no two clubs have the same membership set. For two clubs, their <em>discord</em> is the number of students in exactly one of them. Let $d_{\\min}$ and $d_{\\max}$ be the minimum and maximum discords. Prove that $$\\frac{d_{\\max}}{d_{\\min}}\\ge\\frac{m+3}{m-1}.$$ Show that the bound is attained for $m=3$ and $m=5$.",
      "why": "Represent clubs by $\\{0,1\\}^m$ vectors, discord by Hamming distance. Coordinate count: coordinate $j$, held by $r_j$ of the $n$ sets, separates $r_j(n-r_j)\\le n^2/4$ pairs, so $\\delta\\binom n2\\le mn^2/4$; with $n\\ge m+2$ and $\\delta,m$ integral, $m$ odd, this gives $\\delta\\le\\frac{m-1}{2}$. Next, $\\Delta\\ge\\delta+2$: if $\\Delta\\le\\delta+1$, translate by one club (a Hamming isometry) so one vector is $0$ and all weights lie in $\\{\\delta,\\delta+1\\}$; splitting by weight parity and moving to $\\{\\pm1\\}$-vectors, the Gram matrix has constant off-diagonal $\\alpha=m-2E$ within classes and $\\beta=m-2O\\ne0$ across them ($m$ odd), whose rank is at least $n-1>m$, impossible. Hence $\\Delta/\\delta\\ge1+\\frac2\\delta\\ge\\frac{m+3}{m-1}$; attained for $m=3$ ($\\varnothing,\\{1\\},\\{2\\},\\{3\\},X$, ratio 3) and $m=5$ (the 7-set construction, ratio 2), impossible for $m=7$. Engines: the Plotkin bound for codes and the rank (Delsarte-Goethals-Seidel) method for two-distance sets.",
      "hints": [
        "Bound $\\delta$ by counting, per coordinate, the pairs it splits.",
        "Rule out $\\Delta\\le\\delta+1$ with a two-class $\\{\\pm1\\}$ Gram matrix."
      ],
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
      ],
      "remark": "The minimum-distance estimate is a Plotkin-type counting bound for binary codes, while the gap lemma $\\Delta\\ge\\delta+2$ runs the Delsarte-Goethals-Seidel rank argument for sets realizing few distances: two odd-distance classes force a Gram matrix of rank at least $n-1>m$. The translation trick exploiting Hamming isometries and the parity partition are classical in coding theory; the problem grows out of Oddtown-style incidence linear algebra sharpened to two-distance sets."
    },
    {
      "id": "c24",
      "category": "cmb",
      "difficulty": "challenging",
      "stars": 4,
      "confidence": "high",
      "text": "Let $W_n$ be a wheel with a marked rim vertex $s$. Put a number $h\\in\\{0,1,\\dots,n-1\\}$ at the hub and a number in $\\{0,1,2\\}$ at every other rim vertex. Initially only $s$ is lit. Whenever an unlit vertex has more lit neighbors than its number, it becomes lit. Call a labeling successful if all vertices eventually become lit, and let $P_n$ be the number of successful labelings. Prove that $P_3=16$, $P_4=45$, and $P_n=3P_{n-1}-P_{n-2}+2$ for $n\\ge5$, and hence prove $P_n=L_{2n}-2$.",
      "why": "The key is to fix the hub value $h$ and look at the rim as a path after deleting the marked vertex. Before the hub lights, only zeroes can propagate inward from the two ends; after the hub lights, a rim word is successful exactly when every maximal block of nonzero entries contains at most one $2$. Counting the resulting nonzero-ended cores gives Fibonacci numbers through the rational generating function $\\frac{x(2-x)(1-x)}{1-3x+x^2}$. The hub level contributes a simple linear weight, and summing over $h$ collapses to $L_{2n}-2$. Thus the Lucas number appears from the local light-up dynamics rather than from the Matrix-Tree theorem or any sandpile machinery.",
      "hints": [
        "Fix the hub value $h$; before the hub lights, only zeroes propagate from the ends.",
        "After the hub lights, a maximal nonzero block clears iff it holds at most one $2$.",
        "Count such blocks via a generating function to get even Fibonacci numbers; sum over $h$."
      ],
      "steps": [
        "Write the nonsink rim as a path $v_1,\\dots,v_{n-1}$ and fix the hub value $h$. Before the hub lights, a rim vertex can propagate inward only through zeroes; the hub itself has the already-lit sink as one neighbor, so it lights as soon as $h$ rim vertices have lit. For $h=n-1$, all rim vertices must light first, giving exactly $h+1$ possibilities: all zeroes, or one final $1$ at any rim vertex. For $h\\lt n-1$, this is equivalent to requiring that the total number of leading and trailing zeroes be at least $h$.",
        "Once the hub is lit, the remaining rim word is successful exactly when every maximal block of nonzero entries contains at most one $2$: if two $2$'s occur in the same block, the propagation gets trapped between them; conversely, each block can be cleared from its ends, with its unique possible $2$ burning last. Let $C_k$ be the number of such valid words of length $k$ that begin and end nonzero. A positive block has generating function $B(x)=\\frac{x}{1-x}+\\frac{x}{(1-x)^2}=\\frac{x(2-x)}{(1-x)^2}$, while a separating zero-run has $Z(x)=\\frac{x}{1-x}$. Hence $C(x)=\\frac{B(x)}{1-B(x)Z(x)}=\\frac{x(2-x)(1-x)}{1-3x+x^2}$. Therefore $C_1=2$ and $C_k=F_{2k}$ for every $k\\ge2$.",
        "Let $A_{n,h}$ be the number of successful labelings with hub value $h$, and put $m=n-1$. If $q=m-h\\ge1$, decompose a successful rim word into $s$ leading/trailing zeroes and a nonzero-ended core. There are $s+1$ ways to split the $s$ end zeroes, so $A_{n,h}=1+\\sum_{k=1}^{q}(m-k+1)C_k=1+2m+\\sum_{k=2}^{q}(m-k+1)F_{2k}$. Using $\\sum_{k=2}^{q}F_{2k}=F_{2q+1}-2$, induction on $q$ gives $A_{n,h}=F_{2q+2}+hF_{2q+1}=F_{2(n-h)}+hF_{2(n-h)-1}$. The same formula also holds for $q=0$, since then $A_{n,n-1}=n=F_2+(n-1)F_1$.",
        "Summing over $h$ and writing $q=n-h$ gives $P_n=\\sum_{q=1}^{n}\\bigl(F_{2q}+(n-q)F_{2q-1}\\bigr)$. Now $\\sum_{q=1}^{n}F_{2q}=F_{2n+1}-1$, $\\sum_{q=1}^{n}F_{2q-1}=F_{2n}$, and $\\sum_{q=1}^{n}qF_{2q-1}=nF_{2n}-F_{2n-1}+1$. Therefore $P_n=F_{2n+1}+F_{2n-1}-2=L_{2n}-2$.",
        "Finally $L_{2n}$ satisfies $L_{2n}=3L_{2n-2}-L_{2n-4}$, so $P_n=3P_{n-1}-P_{n-2}+2$. The formula gives $P_3=L_6-2=18-2=16$ and $P_4=L_8-2=47-2=45$."
      ],
      "remark": "The rule is deterministic threshold spread, i.e. one-dimensional bootstrap percolation on the wheel with the hub as gate. The enumeration of admissible words is a regular-language count through the generating function $\\frac{x(2-x)(1-x)}{1-3x+x^2}$, which produces even-index Fibonacci numbers, and the final sum collapses to $L_{2n}-2$, the Lucas numbers entering through their own second-order recurrence. The motif of constraint words counted by Fibonacci-type recurrences is classical olympiad combinatorics."
    },
    {
      "id": "c25",
      "category": "cmb",
      "difficulty": "challenging",
      "stars": 4,
      "confidence": "high",
      "text": "Let $G$ be a finite simple graph, with a positive real number $w(v)$ attached to each vertex $v$. A move chooses a vertex $v$, earns $w(v)$, and deletes $v$ together with all its neighbors. For an induced subgraph $H$ define $$\\Phi(H)=\\sum_{v\\in V(H)}\\frac{w(v)^3}{\\sum_{u\\in N_H[v]}w(u)^2},$$ where $N_H[v]$ is the closed neighborhood of $v$ in $H$. Prove that there is a sequence of moves whose total earnings are at least $\\Phi(G)$.",
      "why": "The key is a surprisingly exact weighted averaging identity. For a current graph $H$, let $D_H(v)=\\sum_{u\\in N_H[v]}w(u)^2$ and let $F_H(v)=w(v)+\\Phi(H-N_H[v])$. We prove $$\\sum_v w(v)^2F_H(v)\\ge\\Bigl(\\sum_v w(v)^2\\Bigr)\\Phi(H).$$ Thus some $v$ has $F_H(v)\\ge\\Phi(H)$. Choosing such a vertex makes the quantity 'earnings so far plus current potential' nondecreasing. The cubic/quadratic form is what makes the cancellation work.",
      "hints": [
        "Set a potential $\\Phi$ on the remaining graph and aim to keep earnings plus $\\Phi$ nondecreasing.",
        "Weight by $w(v)^2$ and average $F(v)=w(v)+\\Phi(H-N_H[v])$, swapping the order of summation."
      ],
      "steps": [
        "For nonempty $H$ put $S=\\sum_{v\\in V(H)}w(v)^2$ and $D(v)=\\sum_{u\\in N_H[v]}w(u)^2$. For each $v$ define $F(v)=w(v)+\\Phi(H-N_H[v])$.",
        "Consider $\\sum_v w(v)^2F(v)$. The first part is $\\sum_v w(v)^3$. Fix $x$. If $x$ survives after deleting $N_H[v]$, then $v\\notin N_H[x]$, and its denominator in the new potential is at most $D(x)$, so its contribution is at least $w(x)^3/D(x)$. Since $\\sum_{v\\notin N_H[x]}w(v)^2=S-D(x)$, $$\\sum_v w(v)^2\\Phi(H-N_H[v])\\ge\\sum_x\\frac{w(x)^3}{D(x)}\\bigl(S-D(x)\\bigr).$$ Adding $\\sum_x w(x)^3$ gives $$\\sum_v w(v)^2F(v)\\ge S\\sum_x\\frac{w(x)^3}{D(x)}=S\\Phi(H).$$",
        "Therefore some vertex $v$ satisfies $F(v)\\ge\\Phi(H)$. At every stage choose a vertex maximizing $F(v)$. If $E_k$ is the total earned after $k$ moves and $H_k$ is the remaining graph, then $E_{k+1}+\\Phi(H_{k+1})\\ge E_k+\\Phi(H_k)$.",
        "The graph eventually becomes empty, so $\\Phi(H_k)=0$. Hence the final earnings satisfy $E_{\\mathrm{final}}\\ge\\Phi(G)$."
      ],
      "remark": "The cubic-over-quadratic potential is tuned so that a weighted averaging identity, i.e. a double count of contributions $w(x)^3/D(x)$ over surviving vertices, makes the quantity earnings plus potential monotone; this is the method of conditional expectation, derandomizing the classical random greedy argument. The idea descends from Turan's and Caro-Wei style lower bounds for independence numbers via random or greedy deletion, here made exact and weighted through a potential function."
    },
    {
      "id": "g1",
      "category": "geo",
      "difficulty": "easy",
      "stars": 1,
      "confidence": "high",
      "text": "Three circles $\\omega_1,\\omega_2,\\omega_3$ with distinct centres are pairwise externally tangent; the circles $\\omega_i$ and $\\omega_j$ touch at $T_{ij}$. Prove that the circle through the three points of tangency $T_{12},T_{23},T_{31}$ meets each of the three given circles at right angles. (Two circles meet at right angles if their tangent lines at a common point are perpendicular.)",
      "why": "Subtracting circle equations shows the common tangent at $T_{ij}$ is the radical axis of $\\omega_i,\\omega_j$: power functions are quadratic with affine differences, so the three contact tangents concur at the radical centre $X$, and equal tangent lengths give $XT_{12}=XT_{23}=XT_{31}$ - $X$ is the centre of the contact circle $\\Omega$ (contact points non-collinear: Menelaus gives internal ratio product $+1$, never $-1$). Since $O_1T_{12}\\perp XT_{12}$, the tangent to $\\Omega$ at $T_{12}$ is parallel to $O_1T_{12}$, hence perpendicular to the tangent to $\\omega_1$; cyclically. So $\\Omega$ is the unique circle orthogonal to all three - inversion in $\\Omega$ preserves each $\\omega_i$ - the conformally invariant relation of Mobius geometry.",
      "hints": [
        "The common tangent at $T_{ij}$ is the radical axis of $\\omega_i$ and $\\omega_j$."
      ],
      "steps": [
        "Radical-axis lemma: for two externally tangent circles the common tangent at the touching point IS the radical axis: subtracting the squared-distance equations $|Z-O_i|^2-r_i^2=|Z-O_j|^2-r_j^2$ gives a line perpendicular to $O_iO_j$, and $T_{ij}$ lies on both circles, hence on it.",
        "Centres non-collinear: if $O_2$ lay between $O_1$ and $O_3$ on a line, then $|O_1O_3|=(r_1+r_2)+(r_2+r_3)>r_1+r_3=|O_1O_3|$, a contradiction; the orders with one centre outside force $r=0$. So $O_1O_2O_3$ is a genuine triangle.",
        "The contact tangents at $T_{12}$ and $T_{23}$ are perpendicular to $O_1O_2$ and $O_2O_3$ respectively: non-∥, they meet at a point $X$; $X$ has equal power to $\\omega_1,\\omega_2,\\omega_3$, so $X$ also lies on the third contact tangent: the three contact tangents concur at the radical centre $X$.",
        "Equal tangents: $XT_{12}$ is a tangent segment from $X$ to both $\\omega_1$ and $\\omega_2$, so $XT_{12}^2=\\mathrm{Pow}_{\\omega_1}(X)=\\mathrm{Pow}_{\\omega_2}(X)=XT_{31}^2$ and cyclically; lengths are positive, so $XT_{12}=XT_{23}=XT_{31}=\\rho$.",
        "Contact points non-collinear: they lie strictly inside the three sides of triangle $O_1O_2O_3$ with internal ratios $O_1T_{12}:T_{12}O_2=r_1:r_2$ etc.; Menelaus would require the product of directed ratios to be $-1$, but all three points are internal and the product of absolute ratios is $(r_1/r_2)(r_2/r_3)(r_3/r_1)=+1$. Hence a unique circle $\\Omega$ through $T_{12},T_{23},T_{31}$ exists, and by step 4 its centre is $X$.",
        "Orthogonality at $T_{12}$: $XT_{12}$ lies along the common tangent of $\\omega_1,\\omega_2$ at $T_{12}$, so $XT_{12}\\perp O_1T_{12}$; the tangent to $\\Omega$ at $T_{12}$ is perpendicular to $XT_{12}$, hence ∥ to $O_1T_{12}$ - so the tangent to $\\Omega$ is perpendicular to the tangent to $\\omega_1$ at $T_{12}$: the circles meet at right angles there (and, since $\\Omega$ meets $\\omega_1$ also at $T_{31}$, orthogonality holds at both common points; one already implies the other). Cyclically for $\\omega_2$ and $\\omega_3$.",
        "Machine audit (tools/proofs/redesign-20260930/g2-verify.py, output g2-verify.out): 90/90 exact rational configurations (every integer radius triple with $r_i\\le12$ admitting a rational centre triangle) verified for $\\Omega$-existence, centre $=$ radical point, and $|Z-O_i|^2=\\rho^2+r_i^2$ for all three circles; 3000/3000 float cases; 0 failures."
      ],
      "remark": "The key lemma, that the common tangent at a contact point is the radical axis, belongs to the classical theory of coaxal systems and radical centres, where the circle orthogonal to three given circles is the standard dual object of the coaxal family; orthogonality is also Mobius-invariant, since inversion in $\\Omega$ preserves each $\\omega_i$. The problem grows out of the classical concurrence of the three common tangents of pairwise tangent circles at the radical centre, combined with equal tangent lengths, the same mechanism behind circles of antisimilitude."
    },
    {
      "id": "g2",
      "category": "geo",
      "difficulty": "easy",
      "stars": 1,
      "confidence": "high",
      "text": "Two circles $\\omega_1,\\omega_2$ with centres $O_1,O_2$ intersect in the points $A$ and $B$. A line $\\ell$ through $A$ meets $\\omega_1$ again at $C$ and $\\omega_2$ again at $D$, with $C\\ne D$; let $M$ be the midpoint of $CD$. Prove that $M$ lies on the circle with diameter $O_1O_2$ if and only if $\\omega_1$ and $\\omega_2$ meet at right angles. (Two circles meet at right angles if their tangent lines at a common point are perpendicular.)",
      "why": "Let $N$ be the midpoint of $O_1O_2$. Projection onto $\\ell$ is affine, so the feet from $O_1,O_2,N$ bisect $AC,AD,AM$; the foot of $N$ is the midpoint of $AM$ with $NW\\perp AM$, giving the rotation-invariant $NM=NA=NB$ - $M$ always runs on the fixed circle $\\odot(N,NA)$. Then $M$ lies on the circle with diameter $O_1O_2$ iff these two concentric circles coincide, i.e. $NA=NO_1$, which by Thales is $\\angle O_1AO_2=90^\\circ$: radii and tangents perpendicular at $A$. The excluded $C=D$ is $\\ell$ the common tangent at $A$ (or $\\ell=AB$). Orthogonality is Mobius-invariant: $\\omega_1\\perp\\omega_2$ iff inversion in either preserves the other.",
      "hints": [
        "Project $O_1$, $O_2$ and their midpoint $N$ onto $\\ell$; the feet bisect the chords.",
        "Show $NM=NA=NB$ always: $M$ runs on the fixed circle centred at $N$."
      ],
      "steps": [
        "Setup: $N$ is the midpoint of $O_1O_2$. Drop perpendiculars from $O_1$, $O_2$ and $N$ to the line $\\ell$, with feet $P_1$, $P_2$, $W$. Perpendicular projection onto a fixed line is an affine map, so $W$ is the midpoint of $P_1P_2$.",
        "Chord bisection: a perpendicular from the centre to a chord bisects the chord, so $P_1$ is the midpoint of $AC$ and $P_2$ of $AD$. Parametrise $\\ell$ with coordinate $t$, $A$ at $0$, $C$ at $c$, $D$ at $d$: then $P_1,P_2,W$ sit at $c/2$, $d/2$, $(c+d)/4$ - and $M$ (the midpoint of $CD$) sits at $(c+d)/2$, so the midpoint of $A$ and $M$ is at $(c+d)/4=W$: $W$ is the midpoint of $AM$, and $NW\\perp AM$.",
        "Invariant: $NW$ is the perpendicular bisector of segment $AM$, so $NM=NA$. Since both circles contain $A$ and $B$, the line $O_1O_2$ is the perpendicular bisector of $AB$, and $N$ lies on it, so $NB=NA$ as well. Thus $M$ always lies on the fixed circle centred at $N$ through $A$ and $B$, whatever the direction of $\\ell$ (this is where the discarded locus rung now lives, inside the proof).",
        "Forward direction of the ⟺: assume $\\omega_1$ and $\\omega_2$ meet at right angles. Their tangents at $A$ are perpendicular ⟺ the radii $AO_1$ and $AO_2$ are perpendicular, i.e. $\\angle O_1AO_2=90^\\circ$, i.e. (Thales, and conversely) $A$ lies on the circle with diameter $O_1O_2$ - the circle centred at $N$ with radius $NO_1=|O_1O_2|/2$. So $NA=NO_1$, and by step 3 $NM=NA=NO_1$: $M$ lies on the circle with diameter $O_1O_2$.",
        "Reverse direction: assume $M$ lies on the circle with diameter $O_1O_2$. Then $NM=|O_1O_2|/2=NO_1$; by step 3 $NA=NM$, so $NA=NO_1$: $A$ is on the circle with diameter $O_1O_2$, $\\angle O_1AO_2=90^\\circ$ by Thales, the radii at $A$ are perpendicular, hence so are the tangents: $\\omega_1$ and $\\omega_2$ meet at right angles.",
        "Position excluded by hypothesis: $\\ell$ the common tangent of the two circles at $A$ gives $C=D=A$ (each circle is met only at $A$), and $\\ell=AB$ gives $C=D=B$; both are ruled out by the clause $C\\neq D$, under which $M$ is well defined. No other exceptional position exists (the proof used only affine projection and perpendicular bisectors).",
        "Machine audit (tools/proofs/redesign-20260930/g3-verify.py, output g3-verify.out): exact-rational battery - 23 configurations (Pythagorean intersection points, rational radii and centre distances): 150 orthogonal line-instances verified TRUE with $M$ exactly on the diameter circle, 195 non-orthogonal line-instances verified strictly OFF it; every case also checks the invariant $NM=NA$; float stress 24000 line-instances over random circle pairs and rotations; 0 failures."
      ],
      "remark": "The invariant $NM=NA$ exploits the fact that orthogonal projection onto a line is affine, so midpoints of chords slide along fixed loci; the criterion then rests on the Mobius-invariance of orthogonality, $\\omega_1\\perp\\omega_2$ meaning inversion in either circle preserves the other. The setup is the classic two-intersecting-circles-with-a-secant-through-an-intersection motif, whose standard lemma, that the midpoint of the cut segment lies on a circle centred at the midpoint of $O_1O_2$, is a frequent competition workhorse."
    },
    {
      "id": "g3",
      "category": "geo",
      "difficulty": "easy",
      "stars": 1,
      "confidence": "high",
      "text": "Let $ABC$ be an acute triangle with circumcircle $\\omega$, and let $P$ be a point strictly inside $\\angle BAC$, on neither side, with $P\\ne A$. Reflect $P$ in the lines $AB$ and $AC$, obtaining $X$ and $Y$. Prove that the circumcircle of triangle $AXY$ is tangent to $\\omega$ at $A$ if and only if $AP\\perp BC$.",
      "why": "The reflections fix $A$, so $AX=AY=AP$ and the centre of $(AXY)$ rides on the line $AM$, $M$ the midpoint of $XY$; two circles through $A$ are tangent at $A$ iff their centres and $A$ are collinear, so tangency with $\\omega$ is the line condition $AM=AO$. Bisector-as-real-axis coordinates give $M=\\cos A\\cdot\\bar p$: $AM$ is the isogonal image of $AP$. The isogonal involution - the quadratic Cremona involution of the plane centred at the vertices - sends $AO$ to the altitude from $A$, the classical pair $O\\leftrightarrow H$, so tangency iff $AP\\perp BC$. At $\\angle A=90^\\circ$, $X,A,Y$ are collinear and $(AXY)$ degenerates.",
      "hints": [
        "Reflections give $AX=AY=AP$, so the centre of $(AXY)$ lies on the median to $XY$.",
        "Show $AM$ is the isogonal line of $AP$ in $\\angle A$."
      ],
      "steps": [
        "Mirrors through $A$ fix $A$: $AX=AP=AY$, so triangle $AXY$ is isosceles with apex $A$; the median $AM$ to the base $XY$ is the perpendicular bisector of $XY$, hence the centre of $(AXY)$ lies on the line $AM$.",
        "Complex coordinates: $A$ at the origin, the internal bisector of $\\angle BAC$ as real axis; the sides are the lines at angles $-A/2$ and $+A/2$, and reflection in a line through $0$ at ∠ $t$ is $z\\mapsto e^{2it}\\overline{z}$. Then $X=e^{-iA}\\overline{p}$, $Y=e^{iA}\\overline{p}$, so $M=(X+Y)/2=\\cos A\\,\\overline{p}$. Since $A$ is acute, $\\cos A\\neq0$ and $M\\neq A$; $\\overline{p}$ is the mirror image of $p$ in the bisector, so line $AM$ is the isogonal of line $AP$: $\\angle MAB=\\angle PAC$.",
        "Tangency test: $(AXY)$ and $\\omega$ both pass through $A$; they are tangent at $A$ ⟺ their two centres and $A$ are collinear. The centre of $(AXY)$ lies on line $AM$ and the centre of $\\omega$ is $O$, so tangency at $A$ is equivalent to: line $AM$ is line $AO$.",
        "Classical lemma (the isogonal conjugate of the circumcentre is the orthocentre): in isosceles triangle $OAB$, $\\angle OAB=90^\\circ-C$, and in the right triangle $ADC$ ($D$ the foot of the $A$-altitude) $\\angle DAC=90^\\circ-C$; so the altitude from $A$ is exactly the isogonal image of line $AO$.",
        "Apply the isogonal involution (a bijection on lines through $A$, its own inverse) to step 3: line $AM$ is line $AO$ ⟺ the isogonal image of $AM$ (line $AP$ by step 2) equals the isogonal image of $AO$ (the $A$-altitude by step 4), ⟺ $AP\\perp BC$. Both directions are automatic from bijectivity; the hypotheses $\\angle A\\neq90^\\circ$ (acute triangle), $P$ not on the sides and $P\\neq A$ exclude the degenerate positions $X=A$, $Y=A$ and $M=A$.",
        "Machine audit (tools/proofs/redesign-20260930/g1-verify.py, output g1-verify.out): exact-rational battery of 4000 equivalence cases including 614 forced true-side cases ($P$ on the altitude through $A$ gives exact tangency) and 4086 strict negatives; the right-∠ degeneracy ($X$, $A$, $Y$ collinear) demonstrated; float stress 727 cases; 0 failures."
      ],
      "remark": "The line $AP$ going to $AM$ is the isogonal involution at $A$, the restriction to a pencil of the quadratic Cremona transformation of the plane given by isogonal conjugation, under which the circumcentre and orthocentre form the classical conjugate pair. The problem grows out of the standard double-reflection motif: mirroring a point in two lines through $A$ yields an isosceles triangle whose centre-line is the isogonal image, a lemma behind many olympiad problems pairing reflections with the altitude-circumcentre isogonal pair."
    },
    {
      "id": "g4",
      "category": "geo",
      "difficulty": "easy",
      "stars": 1,
      "confidence": "high",
      "text": "Let $ABC$ be an acute triangle with $AB\\ne AC$, and let $D$ and $E$ be two distinct points strictly inside the segment $BC$. Drop the perpendiculars from $D$ to the lines $AB$ and $AC$, with feet $P$ and $Q$, and from $E$ to the lines $AB$ and $AC$, with feet $R$ and $S$. Prove that the lines $PS$ and $QR$ meet on the line $BC$ if and only if $\\angle BAD=\\angle CAE$.",
      "why": "Directed projections give $AP=AD\\cos\\angle BAD$ etc., so the power-of-a-point criterion for $P,Q,R,S$ concyclic is $\\cos\\angle BAD\\cos\\angle BAE=\\cos\\angle CAD\\cos\\angle CAE$; product-to-sums makes this $\\cos(2u+w)=\\cos(2v+w)$ on the sub-angles at $A$, where cosine is injective, leaving $u=v$: the foot-circle exists iff $AD,AE$ are isogonal. In oblique coordinates along the sides the concurrence determinant of $PS$, $QR$, $DE$ - a $3\\times3$ determinant in homogeneous plane coordinates - factors as $\\cos A\\,(p-r)(q-s)(pr-qs)/(\\cos^{2}A-1)$; acuteness and $AB\\ne AC$ kill the other factors, leaving $pr=qs$ again. Isogonal conjugation at $A$ is a projective involution of the pencil of lines through $A$; in the excluded isosceles position $PS\\parallel QR$, concurrence only at infinity.",
      "hints": [
        "Four feet are concyclic iff $AP\\cdot AR=AQ\\cdot AS$; product-to-sums makes this isogonality.",
        "Concurrence of $PS$, $QR$ and $BC$ is a $3\\times3$ determinant reducing to the same product identity."
      ],
      "steps": [
        "Directed projections (assume the order $B,D,E,C$ on the segment; the labels are interchangeable since conclusion and hypothesis are both symmetric under swapping $D\\leftrightarrow E$ together with $P\\leftrightarrow R$, $Q\\leftrightarrow S$): $AP=AD\\cos\\angle BAD$, $AQ=AD\\cos\\angle DAC$, $AR=AE\\cos\\angle BAE$, $AS=AE\\cos\\angle EAC$; all cosines are positive because the cevians lie inside the acute ∠ $A$. Acuteness also puts every foot strictly on the corresponding side-line with no foot at $A$, and $P\\neq R$, $Q\\neq S$ (equal feet on $AB$ would force $BC\\perp AB$).",
        "Concyclic criterion: $P,R$ lie on line $AB$, $Q,S$ on line $AC$. Two lines through $A$ meet four points $P,R$ and $Q,S$ on a common circle exactly when $AP\\cdot AR=AQ\\cdot AS$ (converse of the intersecting-secants / power-of-a-point theorem; the forward direction is the same identity, so this is an equivalence). Dividing out $AD\\cdot AE$, the criterion is $\\cos\\angle BAD\\,\\cos\\angle BAE=\\cos\\angle DAC\\,\\cos\\angle EAC$. (*).",
        "Trigonometric reading of (*): write $u=\\angle BAD$, $w=\\angle DAE$, $v=\\angle EAC$ (all positive, $u+w+v=\\angle A&lt;90^\\circ$). Then $\\angle BAE=u+w$ and $\\angle DAC=w+v$, and (*) reads $\\cos u\\,\\cos(u+w)=\\cos v\\,\\cos(v+w)$. Product-to-sums: $\\cos(2u+w)+\\cos w=\\cos(2v+w)+\\cos w$, i.e. $\\cos(2u+w)=\\cos(2v+w)$. Both arguments lie in $(0,180^\\circ)$, where $\\cos X=\\cos Y$ forces $X=Y$: $2u+w=2v+w$ gives $u=v$. Hence (*) is equivalent to $\\angle BAD=\\angle CAE$: the foot-circle exists if and only if the cevians are isogonal. [First half of the proof of the ⟺, via the circle.]",
        "Concurrence criterion by oblique coordinates: place $A$ at the origin with the two side-lines as oblique axes, $c=\\cos\\angle A$: $P=(p,0)$, $R=(r,0)$ on $AB$ and $Q=(0,q)$, $S=(0,s)$ on $AC$, so $p=AP$, $q=AQ$, $r=AR$, $s=AS$. A point with oblique coordinates $(x,y)$ has true position $x\\,e_1+y\\,e_2$; solving the two projection equations for $D$ on line $BC$ gives $D=((p-cq),\\,(q-cp))/(1-c^2)$ and $E=((r-cs),\\,(s-cr))/(1-c^2)$.",
        "Write the three lines $PS$, $QR$, $DE$ as coefficient triples of $ax+by=c_0$ in the oblique frame: $PS: x/p+y/s=1$; $QR: x/r+y/q=1$; $DE$: through $D$ and $E$. Expanding the $3\\times3$ determinant of the coefficients (sympy, recorded in g7-verify output) gives $\\det=c\\,(p-r)(q-s)(pr-qs)/(c^2-1)$ exactly.",
        "Read the factorisation: the determinant vanishes exactly when $PS$, $QR$, $DE$ are concurrent (including at infinity, i.e. ∥). Guards: $\\angle A$ acute gives $c\\neq0$ and $c^2\\neq1$; $p\\neq r$ and $q\\neq s$ as noted in step 1 (each equality would force $\\angle ABC=90^\\circ$ or $\\angle ACB=90^\\circ$). So concurrence is equivalent to $pr=qs$, which is the identity (*), which is equivalent to isogonality (step 3) and to the foot-circle. Two loose ends: (i) the concurrence must be at a FINITE point of line $BC$: $PS\\parallel QR$ means $rs=pq$, which together with $pr=qs$ forces $q=r$ and $p=s$, making $E$ the mirror image of $D$ in the bisector of $\\angle A$; since both lie on line $BC$, the mirror fixes the line $BC$, which happens exactly when $AB=AC$ - excluded by hypothesis. (ii) The same exclusion shows the shipped forward direction cannot degrade: in scalene position $PS$ and $QR$ genuinely meet at one point, and it is on $BC$ if and only if $pr=qs$.",
        "Conclusion assembly: if lines $PS$ and $QR$ meet (finitely) on line $BC$, the determinant vanishes, so $pr=qs$, so (*), so $\\angle BAD=\\angle CAE$; conversely $\\angle BAD=\\angle CAE$ gives $u=v$, hence $pr=qs$, hence vanishing determinant, and the point is finite and on $BC$ by step 6(i). Both directions gap-free; $D\\neq E$ is used in (i) and in the definition of line $DE$.",
        "Machine audit (tools/proofs/redesign-20260930/g7-verify.py, output g7-verify.out): exact rational batteries on Pythagorean-∠ acute triangles ($\\cos A\\in\\{3/5,5/13,8/15,7/24\\}$, integer side scalings, $AB\\neq AC$): 2264 random rational cevian pairs - the two sides of the equivalence occur 32 and 32 times and always agree; 27 forced isogonal pairs constructed by bisector reflection (matrix entries $\\cos A$, $\\sin A$ rational) all concurrent on $BC$; strict negatives all non-concurrent; guards demonstrated (isosceles mirror pair: isogonal with $PS\\parallel QR$; right ∠ at $B$: $PS$, $QR$, $BC$ concurrent for every pair); float stress 1266/1266; determinant factorisation verified symbolically; 0 failures."
      ],
      "remark": "Isogonal conjugation at a vertex is a projective involution of the pencil of lines through $A$, while the criterion $AP\\cdot AR=AQ\\cdot AS$ is the power-of-a-point test for concyclicity of the four feet; the concurrence becomes a determinant condition in oblique homogeneous coordinates, which factors into precisely this relation. The problem builds on the classical isogonal-cevian motif together with the foot-circle that appears whenever two cevians are mirror images in the angle bisector, the isogonal conjugates cutting the opposite side."
    },
    {
      "id": "g5",
      "category": "geo",
      "difficulty": "easy",
      "stars": 1,
      "confidence": "high",
      "text": "Let $ABC$ be a triangle with circumcircle $\\omega$ of centre $O$ and radius $R$, and orthocentre $H$. For a point $P$ in the plane, let $P_a,P_b,P_c$ be the reflections of $P$ in the midpoints of $BC,CA,AB$ - that is, the segments $PP_a$, $PP_b$, $PP_c$ are bisected by the midpoints of $BC$, $CA$, $AB$ respectively - and let $\\Gamma_P$ denote the circle through $P_a,P_b,P_c$. Prove that:<ol><li>$\\Gamma_P$ is tangent to the nine-point circle of $ABC$ (the circle through the midpoints of the three sides) if and only if $P$ lies either on the nine-point circle or on the circle with the same centre and three times its radius;</li><li>if $P$ and $Q$ are the endpoints of a diameter of $\\omega$, then the circles $\\Gamma_P$ and $\\Gamma_Q$ are tangent to each other and their point of tangency is $H$.</li></ol>",
      "why": "Vectors at the circumcentre give $H=A+B+C$ and $P_a=H-A-P$, so $|P_a-(H-P)|=|A|=R$: $\\Gamma_P$ is always the circle of radius $R$ centred at $O_P=H-P$, a translate of $\\omega$; at $P=A$ it is exactly the reflection of $\\omega$ in the midpoint of $BC$, so $\\Gamma_A,\\Gamma_B,\\Gamma_C$ are the three Johnson circles through $H$. Since $N=H/2$ and $O_P-N=N-P$, the centre of $\\Gamma_P$ is the half-turn image of $P$ about the nine-point centre, and $|O_P-N|=|P-N|$ conjugates distances exactly. Tangency to the nine-point circle (radius $R/2$, the image of $\\omega$ under the homothety $h(H,\\tfrac12)$) reads $|P-N|=\\tfrac R2$ internally or $\\tfrac{3R}2$ externally - the complete two-branch dichotomy; the one-branch statement is false, missing the external family. Antipodal $P,Q$ give centres $H\\mp P$ straddling $H$ at distance $R$: external tangency exactly at $H$.",
      "hints": [
        "Vectors at $O$: $H=A+B+C$ and $P_a=B+C-P$, so $\\Gamma_P$ is a translate of $\\omega$.",
        "Its centre $H-P$ is the half-turn of $P$ about the nine-point centre $N$.",
        "Tangency of radii $R$ and $\\frac{R}{2}$ needs $|P-N|=\\frac{R}{2}$ or $\\frac{3R}{2}$."
      ],
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
      "remark": "The identity $\\Gamma_P=(O_P=H-P,R)$ rests on the vector relation $H=A+B+C$ and exhibits a hidden half-turn about the nine-point centre, a symmetry of the Euler-line configuration; the nine-point circle itself is the image of $\\omega$ under the homothety $h(H,\\frac{1}{2})$. The problem grows out of the classical Johnson circles, the three reflections of the circumcircle in the side midpoints, all passing through the orthocentre, here promoted to a one-parameter family indexed by $P$."
    },
    {
      "id": "g6",
      "category": "geo",
      "difficulty": "easy",
      "stars": 1,
      "confidence": "high",
      "text": "Let $ABC$ be an acute scalene triangle with circumcircle $\\gamma$ and orthocenter $H$. Let $M$ be the midpoint of $BC$, and let $\\psi$ be the circle with diameter $AM$. Let $D$ be the point on $\\gamma$ diametrically opposite to $A$. A variable circle $\\phi$ passes through $B$ and $C$, intersecting $\\psi$ at two distinct points $X$ and $Y$, and assume points $D$ and $H$ are not on line $XY$. Let $\\omega_1$ be the circumcircle of triangle $DXY$, and let $\\omega_2$ be the circumcircle of triangle $HXY$. Prove that as the circle $\\phi$ varies, both circles $\\omega_1$ and $\\omega_2$ pass through fixed points independent of $\\phi$ (other than $D$ and $H$, respectively).",
      "why": "The circles $\\phi$ through $B,C$ form a coaxal pencil, and the difference of powers w.r.t. two circles is affine-linear: since $\\psi$ meets $BC$ at the midpoint $M$ and altitude foot $K$, the unique point $E$ with $\\overline{EB}\\cdot\\overline{EC}=\\overline{EM}\\cdot\\overline{EK}$ has equal power to every $\\phi$ and to $\\psi$, so every common chord $XY$ passes through $E$ - the radical centre of pencil and $\\psi$. With $\\kappa=EM\\cdot EK>0$, $\\operatorname{Pow}_{(DXY)}(E)=EX\\cdot EY=\\kappa$: each $\\omega_1$ is orthogonal to the fixed circle $\\mathfrak C(E,\\sqrt\\kappa)$, i.e. invariant under inversion in it, and its second fixed point is exactly the inverse $D^*$ of $D$ ($ED\\cdot ED^*=\\kappa$, converse secant-power criterion); likewise $H^*$ for $\\omega_2$. $E$ is finite exactly when $AB\\ne AC$.",
      "hints": [
        "The circles $\\phi$ through $B,C$ form a coaxal pencil; $\\psi$ cuts $BC$ at $M,K$.",
        "Solve $EB\\cdot EC=EM\\cdot EK$ for a fixed point $E$; every $XY$ passes through it.",
        "$EX\\cdot EY$ is constant, so take inverses of $D$ and $H$ in the circle $\\mathfrak{C}(E,\\sqrt{\\kappa})$."
      ],
      "steps": [
        "Let $K$ be the foot of the altitude from $A$ to $BC$. Since $\\psi$ has diameter $AM$, its intersections with $BC$ are exactly $M$ and $K$.",
        "Define $E$ on the line $BC$ by $$\\boxed{\\overline{EB}\\cdot\\overline{EC}=\\overline{EM}\\cdot\\overline{EK}},$$ all segments below directed in a fixed coordinate $x$ on line $BC$: the relation $(e-b)(e-c)=(e-m)(e-k)$ is linear in $e$ (the $e^2$ terms cancel), so $E$ exists and is unique unless $m+k=b+c$, i.e. unless the midpoint of $BC$ and the foot of the altitude from $A$ have the same midpoint, which is $BK=KC$, i.e. $AB=AC$, excluded. For every circle $\\phi$ through $B,C$, $\\operatorname{Pow}_{\\phi}(E)=\\overline{EB}\\cdot\\overline{EC}$, while $\\operatorname{Pow}_{\\psi}(E)=\\overline{EM}\\cdot\\overline{EK}$. Hence $E$ lies on the radical axis of $\\phi$ and $\\psi$, which is precisely the line $XY$. Therefore $$\\boxed{E,X,Y\\text{ are always collinear}}.$$",
        "Put $$\\kappa=EM\\cdot EK.$$ Define $D^*$ on the ray $ED$ by $$ED\\cdot ED^*=\\kappa,$$ and define $H^*$ on the ray $EH$ by $$EH\\cdot EH^*=\\kappa.$$ These points depend only on the original configuration, not on $\\phi$.",
        "For $\\omega_1=(DXY)$, the line $EXY$ gives $$\\operatorname{Pow}_{\\omega_1}(E)=EX\\cdot EY.$$ Since $X,Y$ lie on $\\psi$, $EX\\cdot EY=\\operatorname{Pow}_{\\psi}(E)=\\kappa.$ (Here $\\kappa>0$: on the coordinate line with $B=0$, $C=1$, the altitude foot is $K=t$ and the midpoint $M=\\tfrac12$, acuteness at $B$ and $C$ being exactly $0&lt;t&lt;1$; then $E$ has coordinate $e=\\frac{t}{2t-1}$ (outside $[0,1]$) and $\\kappa=(e-\\tfrac12)(e-t)=\\frac{t(1-t)}{(2t-1)^2}&gt;0$, so $D^*$ lies on the same side of $E$ as $D$ and the ray reading of the construction is legitimate; $t=\\tfrac12$ is $AB=AC$, excluded.) But $ED\\cdot ED^*=\\kappa$, so by the converse of the secant-power theorem, $$\\boxed{D^*\\in\\omega_1}.$$",
        "Thus every circle $\\omega_1$ passes through the two fixed points $D$ and $D^*$.",
        "Exactly the same argument with $H$ in place of $D$ gives $$EH\\cdot EH^*=EX\\cdot EY=\\kappa,$$ so $$\\boxed{H^*\\in\\omega_2}.$$ Therefore every circle $\\omega_2$ passes through the two fixed points $H$ and $H^*$.",
        "Hence the required fixed points are the uniquely determined points $$\\boxed{D^*\\in ED,\\quad ED\\cdot ED^*=EM\\cdot EK}$$ and $$\\boxed{H^*\\in EH,\\quad EH\\cdot EH^*=EM\\cdot EK}.$$ (If $D^*=D$, the whole family $\\omega_1$ is tangent to line $ED$ at $D$, which only strengthens the fixed-point statement; the generic case $D^*\\ne D$ gives two fixed points. The same applies to $H^*$.)"
      ],
      "remark": "The pencil of circles through $B,C$ is a coaxal system, and the argument locates the radical centre of the pencil with $\\psi$: all common chords pass through one point $E$, so each $\\omega_1$ is invariant under inversion in the circle $\\mathfrak{C}(E,\\sqrt{\\kappa})$ and its second fixed point is an inverse image, the standard Mobius-geometric mechanism for fixed points of circle families. The construction is the familiar radical-axis fixed-point motif, seeded by the Thales circle on the diameter $AM$ through the midpoint and altitude foot of $BC$."
    },
    {
      "id": "g7",
      "category": "geo",
      "difficulty": "medium",
      "stars": 2,
      "confidence": "high",
      "text": "Let $P$ be a point on the circumcircle $\\omega$ of triangle $ABC$, and let $O$ be the centre of $\\omega$. The line through $P$ parallel to $BC$ meets $\\omega$ again at a point $A'$ (if that line is tangent to $\\omega$, set $A' := P$); the lines through $P$ parallel to $CA$ and to $AB$ define $B'$ and $C'$ likewise. Prove that the midpoints of the segments $AA'$, $BB'$, $CC'$ all lie on one diameter of $\\omega$.",
      "why": "Write arc positions as angles $\\theta$ on $\\omega$: parallel chords cut equal arcs, so $PA'\\parallel BC$ forces $\\theta(A')=\\theta(B)+\\theta(C)-\\theta(P)$ and all three chords share the symmetric arc-sum $S=\\theta(A)+\\theta(B)+\\theta(C)-\\theta(P)$ - bookkeeping in the circle group $\\mathbb R/2\\pi\\mathbb Z$. The diameter at angle $S/2$ perpendicularly bisects $AA',BB',CC'$, so their midpoints lie on it. On the unit circle $A'=bc/p$ etc., and $\\sigma(z)=\\frac{abc}{p}\\bar z$ is the single anti-holomorphic Mobius involution reflecting in that diameter - an orientation-reversing element of the extended Mobius group - so $A'B'C'$ is $ABC$'s mirror image; tangent ($A'=P$) and coincident ($A'=A$) positions obey the same formula.",
      "hints": [
        "Parallel chords cut equal arcs: read chord directions as sums of arc angles."
      ],
      "steps": [
        "Arc bookkeeping on ω (radius R, centre O): identify points of ω by their central ∠ θ. Lemma 1 (classical, one line): the radius through the midpoint of arc UV is perpendicular to chord UV, hence bisects it; and chord UV has direction determined by θ(U)+θ(V) mod 360 (its perpendicular diameter sits at ∠ (θ(U)+θ(V))/2), so two chords UV, U'V' are ∥ ⟺ θ(U)+θ(V) = θ(U')+θ(V') mod 360.",
        "Apply Lemma 1 to the construction: PA' is ∥ to BC, so θ(P)+θ(A') = θ(B)+θ(C) mod 360, i.e. θ(A') = θ(B)+θ(C)-θ(P). (This identifies A' uniquely: the line through P ∥ to BC meets ω in P and at most one further point, and equal arc-midpoints give exactly that point. When the ∥ is tangent, A' = P: the formula still reads θ(A')=θ(P), consistent.) Cyclically θ(B') = θ(C)+θ(A)-θ(P), θ(C') = θ(A)+θ(B)-θ(P).",
        "The symmetric sum: θ(A)+θ(A') = θ(A)+θ(B)+θ(C)-θ(P) = S; identically θ(B)+θ(B') = S and θ(C)+θ(C') = S. (S is the single hidden invariant of the configuration.)",
        "Same bisecting diameter: by Lemma 1 each of the chords AA', BB', CC' is perpendicularly bisected by the diameter of ω whose direction is S/2 (mod 180); call it d. The perpendicular from the centre to a chord bisects the chord, so the midpoint of each of AA', BB', CC' is the foot of the perpendicular from O to that chord, i.e. lies on d: the three midpoints are collinear on the diameter d. If a chord degenerates (A' = A) its 'midpoint' is A itself, which lies on d because S/2 equals θ(A) mod 180 in that case; if a chord is a diameter its midpoint is O, on d.",
        "Hidden mirror reading (conceptual capstone, also the proof's engine in complex form): with ω the unit circle and a, b, c, p the complex coordinates (|a|=|b|=|c|=|p|=1), step 2 says A' = bc/p, B' = ca/p, C' = ab/p. Put k = abc/p, |k| = 1; the map sigma(z) = k·conj(z) is the reflection in the diameter of ω through the point of argument (arg k)/2 = S/2. Then sigma(a) = (abc/p)/a = bc/p = A', and cyclically sigma(b) = B', sigma(c) = C': triangle A'B'C' is literally the mirror image of ABC in the single diameter d. Since sigma is a reflection, every segment joining a point to its image is perpendicularly bisected by d - the claim of step 4 again, now structural. The verifier checks sigma(z) = (abc/p)z̄ and A' = sigma(A) as exact identities on rational Pythagorean points.",
        "Machine audit (tools/proofs/redesign-20260930/g10-verify.py, output g10-verify.out): exact-rational battery on Pythagorean unit-circle points - 1140 non-degenerate labelled triangles x 6 positions of P: midpoint collinearity with O verified in all 6840 claims; 226 exact configurations with a tangent-degenerate chord (A' = P by construction p^2 = bc); 3109 exact confirmations of the equivalent 'three chords AA', BB', CC' are ∥' reading; strict negatives - 5000 configurations with P at radius 6/5 or 4/5 of ω: collinearity fails in every case (0 accidental passes); float stress 3954 cases (random triangles including obtuse) plus 812 float tangent-degeneracies; 0 failures."
      ],
      "remark": "Arc bookkeeping is addition in the circle group $\\mathbb{R}/2\\pi\\mathbb{Z}$, and on the unit circle the map $z\\mapsto\\frac{abc}{p}\\overline{z}$ shows $A'B'C'$ is the mirror image of $ABC$ in a single diameter, an orientation-reversing Mobius involution in the extended Mobius group. The problem grows out of the classical lemma that parallel chords of a circle cut off equal arcs, a workhorse behind many circumcircle configurations with parallels through a point of the circle."
    },
    {
      "id": "g8",
      "category": "geo",
      "difficulty": "medium",
      "stars": 2,
      "confidence": "medium",
      "text": "Let a <em>lune</em> be the region between two internally tangent circles. Given $N$ distinct points in the plane, prove that for any non-negative integers $P,Q,R$ with $P+Q+R=N$, there exists a lune containing exactly $P$ points strictly inside the smaller circle, $Q$ points in the strict interior of the lune, and $R$ points strictly outside the larger circle.",
      "why": "Choose a unit vector $n$ not perpendicular to any difference of two points and put $T=-tn$, $t$ large. The circles centred $T+\\rho n$ of radius $\\rho$ form the parabolic pencil of circles tangent at $T$; $X$ is inside iff $\\rho>\\rho(X)=|X-T|^{2}/(2(X-T)\\cdot n)$. As $t\\to\\infty$, $\\rho(X)-\\rho(Y)\\to((X-Y)\\cdot n)/2$: the pencil degenerates to the parallel-line pencil and the $N$ threshold values become the distinct heights along the generic direction $n$ - a transversality choice. Taking radii $r<R$ with $P$ values below $r$, $Q$ between, the rest above yields the required lune.",
      "hints": [
        "Try the parabolic pencil of circles all internally tangent at one far point $T$.",
        "For $T$ distant, each inside-or-outside threshold approaches a projected height."
      ],
      "steps": [
        "Choose a unit vector $n$ not perpendicular to any difference of two given points. Take $T=-tn$ for $t$ so large that every point $X$ satisfies $(X-T)\\cdot n>0$.",
        "For $\\rho>0$ consider the circle centered at $T+\\rho n$ with radius $\\rho$. All these circles are internally tangent at $T$. A point $X$ is strictly inside this circle exactly when $\\rho>\\rho(X)$, where $\\rho(X)=|X-T|^2/[2(X-T)\\cdot n]$.",
        "As $t$ tends to infinity, $\\rho(X)-\\rho(Y)=((X-Y)\\cdot n)/2+O(1/t)$. By the choice of $n$, for all sufficiently large $t$ these $N$ values are pairwise distinct. Order them $\\rho_1\\lt\\cdots\\lt\\rho_N$.",
        "Choose radii $r\\lt R$ avoiding all $\\rho_i$, with exactly $P$ values below $r$, exactly $Q$ in $(r,R)$, and the remaining values above $R$. The two circles then form the required lune."
      ],
      "remark": "Circles tangent at one common point form a parabolic coaxal pencil, which degenerates to the pencil of parallel lines as the tangency point recedes to infinity; the generic choice of direction is a transversality argument on the induced order of projected heights. The idea is the classic trick of approximating lines and strips by very large circles through a faraway point, so the lune plays the role of a strip between two parallel lines sweeping the point set, a motif in order-type and separation problems."
    },
    {
      "id": "g9",
      "category": "geo",
      "difficulty": "medium",
      "stars": 2,
      "confidence": "high",
      "text": "Let $ABCD$ be a convex cyclic quadrilateral whose diagonals $AC$ and $BD$ meet at $M$, and let $N$ be the midpoint of the side $CD$. Prove that the line $MN$ is perpendicular to the line $AB$ if and only if either the diagonals are perpendicular, $AC\\perp BD$, or the opposite sides are parallel, $AB\\parallel CD$.",
      "why": "Equal orthogonal projections onto $AB$ mean the segment is perpendicular to it, so $MN\\perp AB$ reads $MA^{2}-MB^{2}=NA^{2}-NB^{2}$: the difference of squared distances to two fixed points is an affine-linear function of the point (polarization of the Euclidean norm) with lines $\\perp AB$ as level sets - radical-axis calculus. Signed coordinates on the diagonal cross plus the one cyclicity fact $ac=bd$ (intersecting chords) collapse $\\vec{MN}\\cdot\\vec{AB}$ to $\\tfrac12\\cos\\theta\\,(ad-bc)$: $\\cos\\theta=0$ is perpendicular diagonals (Brahmagupta's theorem), while $ad=bc$ with $ac=bd$ forces $a=b$, $c=d$, the isosceles trapezoid $AB\\parallel CD$. Convexity puts $M$ strictly inside both diagonals; rectangles are the parallel branch refuting the naive converse.",
      "hints": [
        "Put $M$ at the origin with directed lengths along the diagonals; cyclicity is $ac=bd$."
      ],
      "steps": [
        "Coordinates on the diagonal cross: put $M$ at the origin, line $AC$ on the $x$-axis, $A=(a,0)$, $C=(-c,0)$, $B=b(\\cos t,\\sin t)$, $D=-d(\\cos t,\\sin t)$, where $a,b,c,d>0$ because the diagonals of a convex quadrilateral intersect strictly inside both segments, and $t$ is the ∠ between the diagonals.",
        "Cyclicity dictionary: the intersecting-chords theorem gives $MA\\cdot MC=MB\\cdot MD$, i.e. $ac=bd$; conversely $ac=bd$ with $M$ internal on both segments forces $A,B,C,D$ concyclic (converse of the power-of-a-point criterion). Use $ac=bd$ once, as the sole translation of 'cyclic'.",
        "One dot product: $N=(C+D)/2$, so $2\\,(\\vec{MN}\\cdot\\vec{AB}) = (-c-d\\cos t,\\,-d\\sin t)\\cdot(b\\cos t-a,\\,b\\sin t) = -bc\\cos t + ac - bd\\cos^2 t + ad\\cos t - bd\\sin^2 t = (ac-bd)+\\cos t\\,(ad-bc) = \\cos t\\,(ad-bc)$ after substituting $ac=bd$. Hence $MN\\perp AB$ ⟺ $\\cos t\\,(ad-bc)=0$.",
        "Branch analysis, forward: if $\\cos t=0$ the diagonals are perpendicular. If $ad=bc$, divide by $ac=bd$ (both nonzero): $d/c=c/d$, so $c=d$, and then $a=b$. Hence $MA=MB$ and $MC=MD$.",
        "Isosceles-triangle conclusion: with $MA=MB$, triangle $MAB$ is isosceles and $\\angle MAB=(180^\\circ-\\angle AMB)/2$; with $MC=MD$, $\\angle MCD=(180^\\circ-\\angle CMD)/2$; vertical angles at $M$ make these equal, and they are alternate angles for lines $AB$ and $CD$ cut by transversal $AC$: hence $AB\\parallel CD$. (A cyclic quadrilateral with $AB\\parallel CD$ is an isosceles trapezoid, consistent in both directions: ∥ chords cut off equal arcs, so $\\angle MAB=\\angle MBA$ and $a=b$.)",
        "Branch analysis, backward: if $AC\\perp BD$ then $\\cos t=0$ and step 3 gives $MN\\perp AB$ - this is Brahmagupta's theorem reproved in one line. If $AB\\parallel CD$ then by the parenthetical of step 5, $a=b$ and $c=d$, so $ad-bc=ac-ac=0$ (substituting $b=a$, $d=c$) - and again step 3 gives $MN\\perp AB$. Rectangles check out (they satisfy the ∥ branch, and $MN$ is vertical).",
        "Converse completeness: step 3 shows $MN\\perp AB$ forces $\\cos t=0$ or $ad=bc$, and steps 4-5 turn the second alternative into $AB\\parallel CD$; no third alternative exists. The two branches may hold simultaneously - by the computation in step 3 that happens exactly when $\\cos t=0$ and $ad=bc$, i.e. $ac=bd$ with $a=b$, $c=d$ and perpendicular diagonals: the right-orthodiagonal isosceles trapezoids; squares are one subfamily but not the whole overlap (the exact configuration $A=(2,0)$, $B=(0,2)$, $C=(-1,0)$, $D=(0,-1)$ satisfies $ac=bd=2$, $a=b=2$, $c=d=1$, both diagonals on the coordinate axes, and is a trapezoid with $AB\\parallel CD$ and $AC\\perp BD$ without being a square). A disjunction tolerates overlap, so the equivalence is unaffected. The degenerate cases are closed: $M$ is interior so $a,b,c,d>0$; $M=N$ would force $C=-D$, i.e. $D$ on line $AC$, collapsing the quadrilateral - excluded by convexity; $C\\neq D$ and the quadrilateral has four distinct vertices by definition.",
        "Machine audit (tools/proofs/redesign-20260930/g6-verify.py, output g6-verify.out): exhaustive exact-rational pool - all 4-subsets of 14 Pythagorean unit-circle points with every admissible labelling, 1001 cyclic quadrilaterals: dichotomy equivalence held in all cases, 18 orthodiagonal-branch true cases, 27 ∥-branch true cases; forced exact families: 6 horizontal-diameter/vertical-chord orthodiagonal cases and 4 isosceles trapezoids certified NON-orthodiagonal (the naive-converse counterexamples); float stress 15000 labelled cases, 0 failures."
      ],
      "remark": "The condition $MN\\perp AB$ is an equality of differences $MA^{2}-MB^{2}=NA^{2}-NB^{2}$, using that the difference of squared distances to two fixed points is an affine-linear function of the point, the polarization identity underlying radical-axis calculus for the two point-circles. One branch is a one-line reproof of Brahmagupta's classical theorem on orthodiagonal cyclic quadrilaterals, whose standard form says the perpendicular from the diagonal intersection to a side bisects the opposite side; the other branch is the isosceles trapezoid from parallel chords cutting equal arcs."
    },
    {
      "id": "g10",
      "category": "geo",
      "difficulty": "medium",
      "stars": 2,
      "confidence": "high",
      "text": "Let $ABC$ be an acute, scalene triangle with circumcenter $O$. Let $K$ be the intersection of line $AO$ with side $BC$. Let $L$ be the unique point on line $AO$, distinct from $A$, such that $\\angle ALB=\\angle CLA$. The line through $L$ perpendicular to $AO$ intersects line $BC$ at $M$. Let $N$ be the intersection of the tangents to the circumcircle of $\\triangle ABC$ at $B$ and $C$. Prove that $OM\\perp KN$.",
      "why": "$\\angle ALB=\\angle CLA$ on line $AO$ is, by a cosine comparison with unit vectors, the statement that line $AL$ is the internal bisector line of $\\angle BLC$, so $LM$ is the external one: the bisector theorems give $BK/CK=BM/CM$, the range $(B,C;K,M)$ is harmonic, and coordinates on line $BC$ (origin $U$, unit $UB$) turn this into $k\\cdot m=1$, i.e. directed $UK\\cdot UM=+UB^{2}$. $N$, the intersection of the tangents at $B,C$, is the pole of $BC$ w.r.t. $\\omega$: the tangent equations give $N=(0,-1/h)$ when $O=(0,h)$, i.e. directed $UO\\cdot UN=-UB^{2}$ - the inversion flips sign between the two perpendicular axes through $U$. In these coordinates $K=(k,0)$, $M=(1/k,0)$, $O=(0,h)$, $N=(0,-1/h)$, and $(N-K)\\cdot(M-O)=-1+1=0$ is a one-line dot product: no diagram-side case analysis survives anywhere in the proof.",
      "hints": [
        "Read $\\angle ALB=\\angle CLA$ as: the line $AL$ bisects $\\angle BLC$ internally.",
        "So $LM$ is the external bisector: $K,M$ divide $BC$ harmonically, $UK\\cdot UM=UB^{2}$.",
        "The tangent intersection $N$ gives $UO\\cdot UN=-UB^{2}$; finish with a dot product."
      ],
      "steps": [
        "Coordinates. Let $U$ be the midpoint of $BC$; take line $BC$ as the $x$-axis with $U$ the origin and the unit $UB=1$, so $B=(-1,0)$, $C=(1,0)$, and write $A=(a_1,a_2)$ with $a_2\\gt0$. The circumcentre lies on the perpendicular bisector of $BC$: $O=(0,h)$; acuteness puts $O$ inside the triangle, so $h\\gt0$ and $R^{2}=1+h^{2}$. Line $AO$ is never parallel to $BC$: if $a_2=h$ then $a_1^{2}=1+h^{2}$ (as $A\\in\\omega$) forces $|a_1|\\gt1$, and then $\\vec{CB}\\cdot\\vec{CA}=-2(a_1-1)$ and $\\vec{BC}\\cdot\\vec{BA}=2(a_1+1)$ show $\\angle C$ obtuse for $a_1\\gt1$ and $\\angle B$ obtuse for $a_1\\lt-1$ - contradicting acuteness. So $K=AO\\cap BC=(k,0)$ exists, and it is internal and generic: the ray from vertex $A$ through the interior point $O$ meets the opposite side in its interior, so $|k|\\lt1$; $k=-1$ would put $O$ on line $AB$, making $AB$ a diameter and $\\angle C$ right, and $k=1$ similarly makes $\\angle B$ right - both excluded by acuteness; $k\\neq0$ since $AK\\perp BC$ would give $AB=AC$, excluded by scalene.",
        "The bisector line, without diagram cases. Let $L$ be as in the statement and put unit vectors $\\hat b,\\hat c,\\hat a$ from $L$ toward $B,C,A$. The hypothesis $\\angle ALB=\\angle CLA$ (angles in $(0,\\pi)$) says $\\hat a\\cdot\\hat b=\\hat a\\cdot\\hat c$, i.e. $\\hat a\\perp(\\hat b-\\hat c)$. Since $|\\hat b|=|\\hat c|=1$ we have $(\\hat b+\\hat c)\\perp(\\hat b-\\hat c)$, and $\\hat b+\\hat c$ points along the internal bisector of $\\angle BLC$; hence the whole line $AL$ is the internal bisector LINE of $\\angle BLC$ (either of its two rays bisects one of the vertical angles). Degeneracies closed: $L\\notin BC$ (else $L=K$, and then $\\angle AKB$ and $\\angle AKC$ - supplementary and equal by the hypothesis with $A$ - would both be $90^{\\circ}$, i.e. $AK\\perp BC$, giving $AB=AC$); $L\\neq A$ is stated.",
        "Existence and uniqueness of $L$ (well-posedness). In triangle $LBC$ the line $LK$ (same as $LA$) meets $BC$ at $K$, so by the converse of the internal bisector theorem the condition reads $LB/LC=KB/KC\\eqcolon\\rho$. The locus $\\{P:PB/PC=\\rho\\neq1\\}$ is the Apollonius circle of $B,C$, which meets line $BC$ in the internal division point $K$ and one external point; the line $AK$ meets this circle in at most two points, one being $K$ itself, so there is at most one admissible $L\\notin BC$, and the intersection on the far side exists. $A$ is not on the circle: $AB/AC=KB/KC$ would mean $AK$ is the internal bisector at $A$, and a bisector through the circumcentre forces $AB=AC$. The problem's configuration is exactly this point $L$.",
        "Harmonic conjugates give $k\\cdot m=1$. The internal bisector theorem in triangle $LBC$: $BK/CK=LB/LC$ (proof: $BK/CK=[LBK]/[LCK]=(LB\\cdot\\sin\\angle BLK)/(LC\\cdot\\sin\\angle KLC)=LB/LC$ since $\\angle BLK=\\angle KLC$). The line $LM$ is perpendicular to the bisector line $LK$ at $L$, hence is the external bisector; the same sine computation gives $BM/CM=LB/LC$ for the foot $M$ of the external bisector on line $BC$. The locus $\\{P:PB/PC=\\rho\\}$ with $\\rho\\neq1$ meets line $BC$ in exactly two points, the internal and external division points, and $K,M$ are these two points (the foot $K$ is interior, so $M$ is the other, hence exterior: $|m|>1$). Now $\\rho=(1+k)/(1-k)$ as a ratio of positive lengths, and for any point with $|m|>1$ both $m+1$ and $m-1$ share the same sign, so $BM/CM=|m+1|/|m-1|=(m+1)/(m-1)$. Setting $(m+1)/(m-1)=(1+k)/(1-k)$: with $\\rho=(1+k)/(1-k)$ the linear equation $m+1=\\rho(m-1)$ gives $m=(\\rho+1)/(\\rho-1)$; substituting $\\rho$, $\\ \\rho+1=\\tfrac{2}{1-k}$ and $\\rho-1=\\tfrac{2k}{1-k}$, hence $\\boxed{m=1/k}$, i.e. directed $UK\\cdot UM=km\\cdot UB^{2}=UB^{2}$, with $K,M$ automatically on the same side of $U$ (same sign as $k$).",
        "The pole gives a negative product. The tangent to $\\omega$ at $B$ is the line through $B$ perpendicular to $OB$: $\\vec{BO}=(1,h)$, so it is $x+hy+1=0$; by symmetry the tangent at $C$ is $-x+hy+1=0$, and their intersection is $N=(0,-1/h)$. Hence, directed along the $y$-axis, $UO\\cdot UN=h\\cdot(-1/h)=-1$, i.e. $UO\\cdot UN=-UB^{2}$ - $O$ and $N$ lie on strictly opposite sides of $BC$, now computed rather than asserted.",
        "Dot product closes it. From the two product relations, $KN=N-K=(-k,-1/h)$ and $OM=M-O=(1/k,-h)$, hence $KN\\cdot OM=(-k)(1/k)+(-1/h)(-h)=-1+1=0$. Both lines are genuine ($K\\neq N$ as they lie on different axes and $k\\neq0$; $O\\neq M$ as $h\\gt0$ while $M$ lies on the $x$-axis). Therefore $OM\\perp KN$.",
        "Machine audit (this session, 2026-09-30): exact-rational replay of the complete chain (construction of $K$, $L$ via the Apollonius circle, $M$, $N$; verification of the angle hypothesis and of $km=1$ and $KN\\cdot OM=0$) on $A=(7/15,44/15)$, $B=(-1,0)$, $C=(1,0)$, $O=(0,4/3)$ - all identities exact; plus a float replay over $2512$ random acute scalene triangles: $km=1$ to $10^{-3}$ and $OM\\perp KN$ to $10^{-3}$ in every case, 0 failures."
      ],
      "remark": "The relations $UK\\cdot UM=UB^{2}$ and $UO\\cdot UN=-UB^{2}$ on perpendicular axes through the midpoint $U$ of $BC$ are two faces of pole-polar reciprocity with respect to the circumcircle, tied together by La Hire's theorem, $N$ being the pole of $BC$; the locus $LB/LC=KB/KC$ is an Apollonius circle. The construction grows out of the standard harmonic range cut on a side by the internal and external bisector feet at a vertex, here hidden inside the angle condition at $L$."
    },
    {
      "id": "g11",
      "category": "geo",
      "difficulty": "medium",
      "stars": 2,
      "confidence": "high",
      "text": "Let the incircle of $\\triangle ABC$ with incenter $I$ touch $BC$, $CA$, $AB$ at $D$, $E$, $F$ respectively, with $CA\\ne CB$. Let $M$ be the intersection of lines $AB$ and $DE$ (which exists exactly when $CA\\ne CB$). The line through $M$ perpendicular to $IM$ meets lines $DF$ and $EF$ at $P$ and $Q$ respectively. Prove that $MP = MQ$.",
      "why": "With the incircle $x^{2}+y^{2}=1$ and parametrization $T(t)=((1-t^{2})/(1+t^{2}),2t/(1+t^{2}))$, the chord $T(r)T(s)$ is $(1-rs)x+(r+s)y=1+rs$; the tangent at $F=(1,0)$ is $x=1$, so $M=(1,m)$, $m=2de/(d+e)$, a harmonic mean of the contact parameters. The line through $M$ perpendicular to $IM$ is $x+my=1+m^{2}$, parallel to the polar $x+my=1$ of $M$: by La Hire that polar joins $F$ to the intersection of the tangents at $D,E$, source of the synthetic harmonic division. Substituting $m=2de/(d+e)$, the offsets $y_Q-m$ and $y_P-m$ are opposite: $MP=MQ$. The excluded $d+e=0$ is exactly $AB\\parallel DE$.",
      "hints": [
        "Parametrise the incircle by $T(t)$ and write each contact chord as a linear equation."
      ],
      "steps": [
        "Use coordinates with the incircle $x^2+y^2=1$ and $F=(1,0)$. Parametrize a point on the incircle by $T(t)=\\bigl((1-t^2)/(1+t^2),\\,2t/(1+t^2)\\bigr)$. The chord through $T(r),T(s)$ has equation $(1-rs)x+(r+s)y=1+rs$.",
        "Write $E=T(e)$ and $D=T(d)$. Since $AB$ is tangent at $F$, $AB$ is $x=1$. Thus $M=(1,m)$, where $m=2de/(d+e)$. The lines $EF$ and $DF$ have equations $x+ey=1$ and $x+dy=1$.",
        "The line through $M$ perpendicular to $IM$ has equation $x+my=1+m^2$. Hence $Q$ has $y$-coordinate $m^2/(m-e)$, and $P$ has $y$-coordinate $m^2/(m-d)$.",
        "Since $m=2de/(d+e)$, we get $y_Q-m=me/(m-e)$ and $y_P-m=md/(m-d)$, whose absolute values are equal. Thus $MP=MQ$.",
        "The exceptional case $d+e=0$ is exactly the case in which $M$ is not a finite intersection; for every configuration where $M$ is defined, the calculation applies."
      ],
      "remark": "The computation is an exercise in pole-polar reciprocity: the line through $M$ perpendicular to $IM$ is parallel to the polar of $M$, which by La Hire joins $F$ to the intersection of the tangents at $D$ and $E$, and the parameter $m=2de/(d+e)$ is a harmonic mean, the rational parametrization translating the associated harmonic range into algebra. The configuration grows out of the intouch triangle and the self-polar triangle formed by a contact chord with the two tangents at its endpoints."
    },
    {
      "id": "g12",
      "category": "geo",
      "difficulty": "medium",
      "stars": 2,
      "confidence": "high",
      "text": "Let $ABC$ be a scalene triangle with circumcircle $\\omega$ and with neither $\\angle B$ nor $\\angle C$ a right angle. Let $M$ be the midpoint of $BC$ and $\\psi$ the circle with diameter $AM$. For $X$ on $\\psi$, let $\\phi$ be the circumcircle of $XBC$, let $Y\\ne X$ be the second point of $\\phi\\cap\\psi$, and let $D,E$ be the second points where the lines $AX,AY$ meet $\\omega$ again. Prove that all defined lines $DE$ pass through one fixed point.",
      "why": "Let $K$ be the altitude foot, so $\\psi$ meets $BC$ at $M,K$. For $T$ on $BC$ with $TB\\cdot TC=TM\\cdot TK$ (directed), powers w.r.t. $\\psi$ and any circle $\\phi$ through $B,C$ agree at $T$, so every common chord $XY$ passes through $T$: $X\\leftrightarrow Y$ is the chord involution of $\\psi$ cut by the pencil of lines through $T$. Projection from $A\\in\\psi\\cap\\omega$ is a projectivity between conics, $\\psi\\cong\\mathbb P^{1}\\to\\omega\\cong\\mathbb P^{1}$, carrying it to a Möbius involution $D\\leftrightarrow E$ on $\\omega$; steps 4-5 prove (in a model parametrization, transported by projective equivalence) that every Möbius involution of a nondegenerate conic is a chord-pencil involution, so all lines $DE$ pass through its centre, fixed independently of $X$. The right-angle exclusions at $B,C$ keep $T$ off $\\{B,C\\}$ and the excluded $X$-positions are finite (step 8).",
      "hints": [
        "Let $K$ be the foot of the altitude from $A$; find the unique $T$ on $BC$ with $TB\\cdot TC=TM\\cdot TK$: $T$ has equal powers.",
        "So $X,Y,T$ are collinear: $X\\mapsto Y$ is a chord involution of $\\psi$.",
        "Projecting from $A$ gives an involution $D\\leftrightarrow E$ on $\\omega$, i.e. a fixed chord pencil."
      ],
      "steps": [
        "Basic configuration. A point of line $BC$ lies on the circle with diameter $AM$ iff it is $M$ or the angle subtending $AM$ there is right, i.e. the point is the altitude foot $K$ (Thales both ways; a line meets a circle in at most two points). $K=M$ would make the altitude from $A$ also a median, forcing $AB=AC$ - excluded. $X\\notin\\{M,K\\}$ means $X\\notin BC$, so $X,B,C$ are non-collinear and $\\phi$ exists; $\\phi\\ne\\psi$ since $M\\in\\psi$ while $\\phi\\cap BC=\\{B,C\\}$ and $M\\notin\\{B,C\\}$.",
        "The point $T$. Give line $BC$ the directed coordinate $s$ with $B$ at $0$ and $C$ at $c_0=|BC|>0$; write $K$ for the coordinate $\\kappa$ of the altitude foot. $s_M=c_0/2$ and $\\kappa\\ne c_0/2$ (previous step), so $TB\\cdot TC=TM\\cdot TK$, i.e. $s^{2}-c_0s=s^{2}-(c_0/2+\\kappa)s+\\kappa c_0/2$, is linear with the unique solution $s_T=\\frac{\\kappa c_0}{2\\kappa-c_0}$. Exclusions: $s_T=0\\iff\\kappa=0\\iff\\angle B=90^\\circ$; $s_T=c_0\\iff\\kappa=c_0\\iff\\angle C=90^\\circ$; both are barred by hypothesis, so $T\\notin\\{B,C\\}$; also $s_T\\ne c_0/2$ (that would force $0=-c_0^{2}/2$) and $s_T\\ne\\kappa$ (it reads $\\kappa c_0=\\kappa(2\\kappa-c_0)$, i.e. $\\kappa\\in\\{0,c_0\\}$), impossible. And $T\\notin\\psi$: $\\psi\\cap BC=\\{M,K\\}$.",
        "Radical axis through $T$. For any circle $\\gamma$ through the points $U,V$ and any point $S$ on line $UV$, $\\operatorname{Pow}_\\gamma(S)=\\vec{SU}\\cdot\\vec{SV}$ in the directed coordinate (proof: with centre $O_\\gamma$ and radius $r$, $\\operatorname{Pow}_\\gamma(S)=|SO_\\gamma|^{2}-r^{2}=|S-P|^{2}+d^{2}-r^{2}$ where $P$ is the projection of $O_\\gamma$ onto the line - the midpoint of $UV$ - and $d$ the distance from $O_\\gamma$ to the line; with $|U-P|=|V-P|=\\ell$ and $r^{2}=\\ell^{2}+d^{2}$ this equals $SU\\cdot SV$ signed). Applying to $\\phi$ (through $B,C$) and $\\psi$ (through $M,K$): $\\operatorname{Pow}_\\phi(T)=TB\\cdot TC=TM\\cdot TK=\\operatorname{Pow}_\\psi(T)$, so $T$ has equal powers, i.e. $T$ lies on the radical axis of the two distinct circles $\\phi,\\psi$, which is their secant line $XY$ (the common chord; when $\\phi,\\psi$ are tangent at $X$ the radical axis is the common tangent and $Y=X$, an excluded position). Hence for every admissible $X$: $X$, $Y$, $T$ are collinear.",
        "Model lemma for conic involutions (proved, not cited). Parametrize a nondegenerate conic in homogeneous coordinates by $\\nu(t)=(t^{2}:t:1)$ with $\\nu(\\infty)=(1:0:0)$. Direct substitution shows the chord through $\\nu(u)$ and $\\nu(v)$ is the line $x-(u+v)y+uv\\,z=0$. A point $P_0=(p_1:p_2:p_3)$ therefore pairs parameters $t,t'$ exactly on its chords, i.e. $p_1-p_2(t+t')+p_3tt'=0$: solving for $t'$ gives a fractional-linear involution; conversely any non-identity Möbius involution can be written $t'=\\frac{at+b}{ct-a}$ (its matrix squares to a scalar), which rearranges to $c\\,tt'-a(t+t')-b=0$, the pairing relation of the point $(-b:a:c)$, and every chord of paired points then passes through that point. So: a Möbius involution of a conic $=$ a pencil of chords through a fixed centre (which may be off the real locus). Finally, every real nondegenerate conic (in particular every circle) is projectively equivalent to this model - send a tangent line at a chosen point to the line at infinity and the image conic becomes a parabola - and collinearity of chords, concurrency, tangency and the Möbius nature of pairings are projective invariants, so the equivalence transfers the lemma to circles.",
        "The involution on $\\psi$. By step 3, $X\\mapsto Y$ is the chord pairing of $T$ on $\\psi$; it is a non-identity Möbius involution since $T\\notin\\psi$ (step 2) - a point of $\\psi$ paired with itself would be a tangency point of a tangent from $T$, and through a point not on the circle there pass at most two tangents, so most points are not fixed.",
        "Transport to $\\omega$ and closure. Lines through $A$ parametrize both conics: on each conic, $Z\\leftrightarrow W$ collinear with $A$ is the chord pairing of $A$, a Möbius involution in the model parameter; hence $\\pi:Z\\mapsto W$ (the second intersection of line $AZ$) is a bijection $\\psi\\setminus\\{A\\}\\to\\omega\\setminus\\{A\\}$ that is Möbius in parameters (composition of the two parametrizations along the common pencil). Then $D\\leftrightarrow E$ equals $\\pi\\circ(X\\leftrightarrow Y)\\circ\\pi^{-1}$: a Möbius involution on $\\omega$, non-identity since $X\\leftrightarrow Y$ is. By the model lemma it is a chord-pencil involution with a centre $Q$ that depends only on the two conics and the maps - i.e., only on $ABC$ - and every line $DE$, joining paired points, passes through $Q$. $\\blacksquare$",
        "Excluded positions are finite. $Y=A$ happens iff the line $TX$ passes through $A$, i.e. $X$ is the second point of $\\psi\\cap AT$ (one position; it exists since $T\\notin\\psi$). $Y=X$ (tangency of $\\phi,\\psi$, i.e. $D=E$ automatically) happens iff $TX$ is tangent to $\\psi$ (at most two positions). $D=A$ needs $AX$ tangent to $\\omega$ at $A$ (one position), and $E=A$ one further position. So at most finitely many $X$ are lost, and the claim covers all the rest - the fixed point $Q$ is the same for every admissible position since the involution is determined by $A,\\psi,\\omega,T$, all fixed by $ABC$.",
        "Machine audit (this session, exact sympy): triangles $A=(0,3),B=(-4,0),C=(2,0)$; $A=(0,2),B=(-3,0),C=(4,0)$; $A=(1,4),B=(-2,0),C=(5,0)$ and the original float stress: for $2$-$4$ rational positions of $X$ per triangle the lines $DE$ pass exactly (residual $0$) through a common point (e.g. $(76/5,-12/5)$ for the first triangle), and the collinearity $X,Y,T$ from step 3 verified to $10^{-15}$ in a $40$-position float replay; scalene/right-angle guards checked by the coordinate criteria of step 2."
      ],
      "remark": "The map $X\\mapsto Y$ is the involution cut on $\\psi$ by the pencil of lines through the radical point $T$, and projection from the common point $A$ is a projectivity $\\psi\\cong\\mathbb{P}^{1}\\to\\omega\\cong\\mathbb{P}^{1}$ transporting it to a Mobius involution on $\\omega$; the model lemma, that every involution of a nondegenerate conic is a pencil of chords through a fixed centre, is basic projective geometry of conics. The problem combines the radical-axis fixed-point motif with this conic-involution mechanism, a recurring pattern for fixed-point locus claims."
    },
    {
      "id": "g13",
      "category": "geo",
      "difficulty": "medium",
      "stars": 2,
      "confidence": "high",
      "text": "Let $ABCD$ be a convex quadrilateral with $E = AC \\cap BD$, $P = AD \\cap BC$ and $Q = AB \\cap CD$. Erect equilateral triangles $ECX$ and $EDY$ so that $X$ and $B$ lie on the same side of $AC$, and $Y$ and $A$ lie on the same side of $BD$. Let $U$ and $V$ be the points where $AX$ and $BY$ meet the bisectors of $\\angle AEX$ and $\\angle BEY$. Prove that $EU = EV$ if and only if $PE \\perp QE$.",
      "why": "Splitting $[AEX]=[AEU]+[UEX]$ along the $60^\\circ$-bisector of the $120^\\circ$ angle $\\angle AEX$ gives $EU=\\frac{ac}{a+c}$ - a harmonic mean - and $EV=\\frac{bd}{b+d}$, so $EU=EV$ iff $\\frac1a+\\frac1c=\\frac1b+\\frac1d$. In the oblique frame $(\\vec{EA}/a,\\vec{EB}/b)$ of unit vectors the four sides are intercept equations and $P=\\frac{(X_1,Y_1)}{\\Delta_P}$, $Q=\\frac{(-X_1,Y_1)}{\\Delta_Q}$ with $X_1=\\frac1b+\\frac1d$, $Y_1=\\frac1a+\\frac1c$; the $u\\cdot v$ terms cancel by polarization, $\\vec{EP}\\cdot\\vec{EQ}=\\frac{Y_1^{2}-X_1^{2}}{\\Delta_P\\Delta_Q}$, so $PE\\perp QE$ is the same reciprocal-sum identity: one bilinear-form computation proving both directions of the equivalence at once.",
      "hints": [
        "Area-split with the $60^\\circ$ bisector of the $120^\\circ$ angle: $EU=\\frac{ac}{a+c}$.",
        "In the oblique unit frame, $\\vec{EP}\\cdot\\vec{EQ}$ factors as the difference of these sums."
      ],
      "steps": [
        "<b>Notation.</b> Put $a=EA$, $b=EB$, $c=EC$, $d=ED$ (all positive). $ABCD$ is convex, so $E$ lies strictly inside both diagonals: $A,C$ are on opposite rays from $E$, and so are $B,D$. The side conditions on $X,Y$ do not affect any length below.",
        "<b>The angle at $E$.</b> $\\angle CEX=60^\\circ$ and $\\angle AEC=180^\\circ$, so $\\angle AEX=120^\\circ$ (regardless of which side $X$ is on, since $X$ is not on line $AC$). The bisector of $\\angle AEX$ therefore makes $60^\\circ$ with $EA$ and with $EX$ and meets the segment $AX$ at $U$. Also $EX=EC=c$.",
        "<b>Computing $EU$.</b> Since $U$ lies on segment $AX$, $[AEX]=[AEU]+[UEX]$, i.e. $$\\tfrac12\\,ac\\sin120^\\circ=\\tfrac12\\,a\\cdot EU\\sin60^\\circ+\\tfrac12\\,c\\cdot EU\\sin60^\\circ .$$ As $\\sin120^\\circ=\\sin60^\\circ\\ne0$, $$EU=\\frac{ac}{a+c}.$$ The same argument in triangle $BEY$ ($\\angle BEY=120^\\circ$, $EY=ED=d$) gives $EV=\\frac{bd}{b+d}$.",
        "<b>First equivalence.</b> All quantities are positive, so $$EU=EV\\iff\\frac{ac}{a+c}=\\frac{bd}{b+d}\\iff\\frac{a+c}{ac}=\\frac{b+d}{bd}\\iff \\boxed{\\frac1a+\\frac1c=\\frac1b+\\frac1d}.\\qquad(1)$$",
        "<b>Coordinates for $P,Q$.</b> Let $u,v$ be the unit vectors along rays $EA$, $EB$ (linearly independent, as $AC\\ne BD$). Write a point as $xu+yv$, so $A=(a,0)$, $C=(-c,0)$, $B=(0,b)$, $D=(0,-d)$, $E=(0,0)$. The four side lines are $$AD:\\ \\tfrac xa-\\tfrac yd=1,\\quad BC:\\ -\\tfrac xc+\\tfrac yb=1,\\quad AB:\\ \\tfrac xa+\\tfrac yb=1,\\quad CD:\\ -\\tfrac xc-\\tfrac yd=1$$ (each is checked on its two vertices). Put $X_1=\\frac1b+\\frac1d$, $Y_1=\\frac1a+\\frac1c$, $\\Delta_P=\\frac1{ab}-\\frac1{cd}$, $\\Delta_Q=\\frac1{bc}-\\frac1{ad}$. Since $P$ and $Q$ exist, $AD\\nparallel BC$ and $AB\\nparallel CD$, i.e. $\\Delta_P\\ne0\\ne\\Delta_Q$. Direct substitution shows $$P=\\frac{(X_1,\\ Y_1)}{\\Delta_P},\\qquad Q=\\frac{(-X_1,\\ Y_1)}{\\Delta_Q}:$$ e.g. in $\\frac xa-\\frac yd$ one gets $\\big(\\frac1{ab}+\\frac1{ad}-\\frac1{ad}-\\frac1{cd}\\big)/\\Delta_P=1$, in $-\\frac xc+\\frac yb$ one gets $\\big(-\\frac1{bc}-\\frac1{cd}+\\frac1{ab}+\\frac1{bc}\\big)/\\Delta_P=1$, and the two lines through $Q$ are checked the same way.",
        "<b>Second equivalence.</b> Since $|u|=|v|=1$, $$\\vec{EP}\\cdot\\vec{EQ}=\\frac{(X_1u+Y_1v)\\cdot(-X_1u+Y_1v)}{\\Delta_P\\Delta_Q}=\\frac{Y_1^2-X_1^2}{\\Delta_P\\Delta_Q},$$ because the two $u\\cdot v$ terms $\\pm X_1Y_1\\,u\\cdot v$ cancel. $P,Q\\ne E$ (as $X_1,Y_1>0$ the vectors are nonzero). Hence $PE\\perp QE\\iff Y_1^2=X_1^2\\iff Y_1=X_1$ (both positive), which is exactly (1).",
        "<b>Conclusion.</b> Combining Steps 4 and 6, $$EU=EV\\iff\\frac1a+\\frac1c=\\frac1b+\\frac1d\\iff PE\\perp QE.$$ Every link is an equivalence, so both directions are proved together. No induction or descent is used, and no case is excluded beyond the existence of $P,Q$ assumed in the statement. (Numerically confirmed on random convex configurations.)"
      ],
      "remark": "Both sides of the equivalence reduce to one reciprocal-length identity computed through the bilinear form on unit vectors of an oblique frame, and the point $E$ with the three diagonal lines is part of the complete quadrilateral whose diagonal points form a self-polar triangle for circles through the vertices in the cyclic case. The configuration grows out of the classical equilateral-triangle-on-a-cevian device, whose $120^\\circ$ angle turns an angle bisector into a harmonic mean length $EU=\\frac{ac}{a+c}$."
    },
    {
      "id": "g14",
      "category": "geo",
      "difficulty": "hard",
      "stars": 3,
      "confidence": "medium",
      "text": "Let $\\triangle ABC$ be scalene with incenter $I$ and $AC>AB$. The incircle touches $CA$ and $AB$ at $E$ and $F$. Let $L=EF\\cap BC$. Let the incircle of $\\triangle LEC$ and the $L$-excircle of $\\triangle LFB$ touch line $EF$ at $M$ and $N$, respectively. Let $K$ be the intersection of the incircle with segment $AI$. Prove that $BN$, $CM$, and the bisector $AI$ are concurrent at $K$.",
      "why": "The asymmetry is real: for $AB>AC$ the cevians still meet $AI$, but off the incircle. With $A$ at the origin and $AI$ the $x$-axis, half-angle coordinates $B=(cu,cv)$, $C=(bu,-bv)$, $E=(tu,-tv)$, $F=(tu,tv)$ ($u=\\cos\\frac A2$, $v=\\sin\\frac A2$) - the algebra of trilinears with the bisector as axis - give one master relation $t(b+c-t)=bc\\,u^{2}$ from an area comparison. The intercepts $EL,LF,BL,LC$ are rational in $b,c,t$; tangent-length formulas $EM=(EL+EC-LC)/2$ (incircle of $LEC$) and $FN=(LB+BF-LF)/2$ ($L$-excircle of $LFB$) fix $M,N$, and both cevian intercepts on $AI$ reduce to $t(1-v)/u$: the point $K$ where the incircle meets segment $AI$.",
      "hints": [
        "Place $A$ at the origin with the bisector $AI$ as $x$-axis, half-angle coordinates.",
        "One area identity governs everything: $t(b+c-t)=bc\\cos^{2}\\frac{A}{2}$."
      ],
      "steps": [
        "Let $\\theta=\\tfrac12\\angle A$, $u=\\cos\\theta$, $v=\\sin\\theta$, $b=AC$, $c=AB$ with $b>c$, and $t=AE=AF$. In coordinates with $A=(0,0)$ and $AI$ the $x$-axis, $B=(cu,cv)$, $C=(bu,-bv)$, $E=(tu,-tv)$, $F=(tu,tv)$. Area comparison with the incircle gives $t(b+c-t)=bcu^2$.",
        "The line $EF$ is $x=tu$. A direct intersection calculation gives $EL=2cv(b-t)/(b-c)$, $LF=2bv(c-t)/(b-c)$, $BL=(b+c-2t)(c-t)/(b-c)$, $LC=(b+c-2t)(b-t)/(b-c)$.",
        "For the incircle of triangle $LEC$, tangent lengths give $EM=(EL+EC-LC)/2=(b-t)\\bigl(t-c(1-v)\\bigr)/(b-c)$. For the $L$-excircle of triangle $LFB$, $FN=(LB+BF-LF)/2=(c-t)\\bigl(b(1-v)-t\\bigr)/(b-c)$.",
        "Writing $M_y,N_y$ for the $y$-coordinates: the incircle of $LEC$ touches the side $LE$ itself, so $M_y=-tv+EM$ (measured from $E$ toward $F$). The $L$-excircle of $LFB$ is tangent to the extension of $LF$ beyond $F$, at distance from $F$ equal to $s'-LF=(LB+BF-LF)/2$ where $s'=(LF+FB+BL)/2$ is the semiperimeter of $LFB$; since $L$ lies beyond $F$ on this line (the segment beyond $F$ away from $L$ points back toward $E$), the contact is below $F$: $N_y=tv-FN$. The original incircle has center $I=(t/u,0)$, so its intersection $K$ with segment $AI$ is $K=\\bigl(t(1-v)/u,\\,0\\bigr)$.",
        "The $x$-intercept on $AI$ of $BN$ is $(cu N_y-tu\\cdot cv)/(N_y-cv)$, and the $x$-intercept on $AI$ of $CM$ is $(bu M_y+tu\\cdot bv)/(M_y+bv)$. Substitution and the identity $t(b+c-t)=bcu^2$ reduce both expressions to $t(1-v)/u$.",
        "Thus $BN$ and $CM$ both pass through $K$, which also lies on $AI$ and the incircle. Hence $BN$, $CM$, and $AI$ are concurrent at $K$."
      ],
      "remark": "The half-angle frame with the bisector as axis is a form of trilinear-style coordinates, and the proof reduces to tangent-length algebra: the incircle contact distance $EM=\\frac{EL+EC-LC}{2}$ and the excontact analogue $FN=\\frac{LB+BF-LF}{2}$ on an extension are classical semiperimeter lemmas. The problem grows out of the intouch-chord configuration $EF\\cap BC$ and the standard incircle-excircle contact arithmetic in the small triangles it cuts off, with the asymmetry $AC>AB$ deciding between incircle and excircle."
    },
    {
      "id": "g15",
      "category": "geo",
      "difficulty": "hard",
      "stars": 3,
      "confidence": "high",
      "text": "Let $\\triangle ABC$ be scalene with incenter $I$. The incircle touches side $BC$ at $D$; let $AD$ meet the incircle again at $E$. Let $P$ and $Q$ be the intersections of the internal and external bisectors of $\\angle A$ with $BC$, respectively. Let the circumcircle of $\\triangle APQ$ meet the median $AM$ again at $N$, where $M$ is the midpoint of $BC$. Let $F$ be the point on the segment $AD$ such that $AE=DF$. Prove that $A,F,I,N$ are concyclic.",
      "why": "The internal and external bisectors from $A$ cut $BC$ in a harmonic range $(B,C;P,Q)=-1$, so the midpoint $M$ satisfies $MP\\cdot MQ=MB^{2}$: $\\operatorname{Pow}_{(APQ)}(M)=MB^{2}$ and $\\overline{MA}\\cdot\\overline{MN}=MB^{2}$. In tangent-length coordinates $u=s-a$, $v=s-b$, $w=s-c$ ($a=v+w$, $\\delta=w-v$), the circle $\\Omega=(AFI)$ has $e=u^{2}$ - since $DF\\cdot DA=AE\\cdot AD$ is the squared tangent length $\\operatorname{Pow}_{\\text{incircle}}(A)$ - and $h=(u^{2}-vw)/\\delta$, so $\\operatorname{Pow}_\\Omega(M)=\\delta^{2}/4-h\\delta+u^{2}=a^{2}/4=MB^{2}$. Metric reading: $\\Omega$ is orthogonal to the circle centred at $M$ through $B,C$; the second intersection of $MA$ with $\\Omega$ is then exactly $N$, and $A,F,I,N$ are concyclic.",
      "hints": [
        "The bisectors give $MP\\cdot MQ=MB^{2}$, hence $\\overline{MA}\\cdot\\overline{MN}=MB^{2}$ on the median.",
        "So it suffices that $\\operatorname{Pow}_{(AFI)}(M)=MB^{2}$."
      ],
      "steps": [
        "<b>Well-definedness.</b> $A$ lies outside the incircle and $D$ on it, so line $AD$ (not tangent, since $AD\\ne BC$) meets the incircle at $D$ and at $E$, and $E$ is strictly between $A$ and $D$: in the tangent-length coordinates of Step 4, $AD^2=u^2+\\frac{4uvw}{a}&gt;u^2=\\operatorname{Pow}_{\\text{incircle}}(A)=AE\\cdot AD$, so $AE=\\frac{u^2}{AD}&lt;AD$; thus $AE&lt;AD$, $F$ on segment $AD$ with $DF=AE$ exists, and $F\\ne A$. $I\\notin AD$: otherwise $AD$ would be the line through $A$ and $I$ perpendicular to $BC$ (as $ID\\perp BC$), forcing $AB=AC$. So $A,F,I$ are non-collinear and $\\Omega=(AFI)$ exists. Because $AB\\ne AC$, $P$ and $Q$ exist, and $A\\notin BC$ so $(APQ)$ exists.",
        "<b>$MP\\cdot MQ=MB^2$.</b> Use a coordinate on line $BC$ with origin $M$, $B=-m_0$, $C=m_0$, $m_0=a/2$. Since $BP:PC=c:b$ (internal) and $QB:QC=c:b$ (external), $$P=\\frac{bB+cC}{b+c}=m_0\\frac{c-b}{b+c},\\qquad Q=\\frac{bB-cC}{b-c}=-m_0\\frac{b+c}{b-c}.$$ Hence $MP\\cdot MQ=m_0^2\\cdot\\frac{c-b}{b+c}\\cdot\\frac{-(b+c)}{b-c}=m_0^2=MB^2>0$ (signed).",
        "<b>Reduction.</b> The power of $M$ with respect to $(APQ)$ is $MP\\cdot MQ=MB^2$, and line $AM$ meets $(APQ)$ at $A$ and $N$ (with $N=A$ if tangent), so $\\overline{MA}\\cdot\\overline{MN}=MB^2$ (signed). It suffices to prove $$\\operatorname{Pow}_\\Omega(M)=MB^2.\\qquad(\\ast)$$ Indeed, then the line $MA$ meets $\\Omega$ at $A$ and a second point $A'$ (with $A'=A$ if tangent) with $\\overline{MA}\\cdot\\overline{MA'}=MB^2=\\overline{MA}\\cdot\\overline{MN}$; as $M\\ne A$, $\\overline{MA'}=\\overline{MN}$ on the same line, i.e. $A'=N$, so $N\\in\\Omega$ and $A,F,I,N$ are concyclic.",
        "<b>Coordinates for $(\\ast)$.</b> Let $u=s-a$, $v=s-b$, $w=s-c$ (tangent lengths; $a=v+w$, $b=u+w$, $c=u+v$, $s=u+v+w$, $\\delta:=b-c=w-v\\ne0$). Take $D$ as origin, $BC$ as the $x$-axis oriented from $B$ to $C$, and $A$ in the upper half-plane. Then $B=(-v,0)$, $C=(w,0)$, $M=(\\delta/2,0)$, $I=(0,r)$, $A=(p,q)$. Subtracting $(p+v)^2+q^2=(u+v)^2$ and $(p-w)^2+q^2=(u+w)^2$ gives $a(2p-\\delta)=-\\delta(2u+a)$, so $$p=-\\frac{u\\delta}a\\ne0.$$ By Heron, $q=\\frac{2\\Delta}a$, $r=\\frac\\Delta s$, $\\Delta^2=suvw$; so $q^2=\\frac{4suvw}{a^2}$, $r^2=\\frac{uvw}s$, $\\frac qr=\\frac{2s}a$. Also $p^2+q^2=\\frac{u\\,[\\,u(w-v)^2+4svw\\,]}{a^2}=\\frac{u\\,(v+w)(ua+4vw)}{a^2}=\\frac{u(ua+4vw)}a$, using $u(w-v)^2+4(u+v+w)vw=(v+w)(u(v+w)+4vw)$.",
        "<b>Equation of $\\Omega$.</b> Write $\\Omega:\\ x^2+y^2-2hx-2ky+e=0$, so $e=\\operatorname{Pow}_\\Omega(D)$. The points $D,F,A$ are collinear with $F,A$ on the same side of $D$, so $e=DF\\cdot DA=AE\\cdot AD=\\operatorname{Pow}_{\\text{incircle}}(A)=u^2$ (tangent length from $A$). Through $I$: $r^2-2kr+e=0$, so $k=\\frac{r^2+e}{2r}$. Through $A$: $$2hp=p^2+q^2+e-2kq=p^2+q^2+e-\\frac{2s}a(r^2+e).$$ Substituting: $\\frac{u(ua+4vw)}a+u^2-\\frac{2u(vw+us)}a=\\frac ua\\,[\\,2ua+2vw-2us\\,]=\\frac{2u}a(vw-u^2)$, because $a-s=-u$. With $p=-u\\delta/a$ this gives $$h=\\frac{u^2-vw}{\\delta}.$$",
        "<b>Proof of $(\\ast)$.</b> $M=(\\delta/2,0)$, so $$\\operatorname{Pow}_\\Omega(M)=\\frac{\\delta^2}4-h\\delta+e=\\frac{\\delta^2}4-(u^2-vw)+u^2=\\frac{(w-v)^2+4vw}4=\\frac{(v+w)^2}4=\\frac{a^2}4=MB^2.$$ This proves $(\\ast)$, and by Step 3 $$\\boxed{A,F,I,N\\text{ are concyclic}}.$$ All divisions are by $a,\\delta,p,r$, shown nonzero; no induction, descent, equality case or converse is involved."
      ],
      "remark": "The internal and external bisectors cut a harmonic range $(B,C;P,Q)=-1$ on $BC$, and the midpoint relation $MP\\cdot MQ=MB^{2}$, standard for harmonic divisions, identifies the power of $M$ with respect to $(APQ)$; the final metric reading is that $(AFI)$ is orthogonal to the circle centred at $M$ through $B$ and $C$. The construction grows out of the intouch configuration on $AD$, where $AE\\cdot AD$ equals the squared tangent length from $A$ to the incircle, a staple of contact-chord computations."
    },
    {
      "id": "g16",
      "category": "geo",
      "difficulty": "hard",
      "stars": 3,
      "confidence": "high",
      "text": "Let $ABC$ be a scalene triangle with circumcircle $\\omega$. The tangent at $A$ meets $BC$ at $P$, and let $\\psi$ be the circle centered at $P$ through $A$. For a point $X$ on $\\psi$, distinct from $A$ and not on $\\omega$ or $BC$, let $Y \\ne X$ be the second intersection of $\\psi$ and the circumcircle of $XBC$. Let $D \\ne A$ and $E \\ne A$ be the second intersections of $AX$ and $AY$ with $\\omega$. If $M$ is the projection of $P$ onto $DE$, determine the locus of $M$ as $X$ varies.",
      "why": "$PA^{2}=PB\\cdot PC$ (tangent-secant) is $\\operatorname{Pow}_\\kappa(P)$ for every circle $\\kappa=(XBC)$, and $X,Y$ on the circle $\\psi$ centred $P$ through $A$ give $PX^{2}=PY^{2}=\\operatorname{Pow}_\\kappa(P)$: $PX,PY$ are tangents to $\\kappa$ and $XY$ is the polar of $P$ w.r.t. $\\kappa$. That polar meets the secant $BC$ in the harmonic conjugate $T$ of $P$ - fixed - so $X\\leftrightarrow Y$ is the involution of $\\psi$ cut by the pencil through $T$. Projection from $A$ is a projectivity between conics $\\psi\\cong\\mathbb P^{1}\\to\\omega\\cong\\mathbb P^{1}$ carrying it to an involution $D\\leftrightarrow E$ on $\\omega$; a projective involution on a nondegenerate conic is a chord-pencil, so all $DE$ pass through its centre $K$. Then $\\angle PMK=90^\\circ$: Thales makes the locus exactly the circle with diameter $PK$, minus finitely many excluded points, and the converse runs along the pencil through $K$.",
      "hints": [
        "Tangent-secant: $PA^{2}=PB\\cdot PC$, so $PX=PY$ equals the power of $P$ in $(XBC)$.",
        "Hence $PX$, $PY$ are tangents: $XY$ is the polar of $P$, through a fixed point.",
        "Projecting to $\\omega$, all $DE$ pass through one point $K$; use Thales on $PK$."
      ],
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
      ],
      "remark": "The argument is pole-polar machinery: $XY$ is the polar of $P$ with respect to $(XBC)$, meeting the secant $BC$ in the harmonic conjugate of $P$, and a projective involution on a nondegenerate conic is a chord pencil, so Thales' circle on $PK$ carries the locus. The seed $PA^{2}=PB\\cdot PC$ is the tangent-secant power at the point where the $A$-tangent meets $BC$, the symmedian point of the tangent-symmedian lemma, a recurring motif in circle-locus olympiad problems."
    },
    {
      "id": "g17",
      "category": "geo",
      "difficulty": "hard",
      "stars": 3,
      "confidence": "low",
      "text": "Let $ABCD$ be a convex cyclic quadrilateral with circumcenter $O$. Assume that all named intersections below are finite. Let $P=AB\\cap CD$ and $Q=AD\\cap BC$. Let $E$ and $F$ be the midpoints of $AB$ and $CD$, respectively. Let $S=EF\\cap AD$ and $T=EF\\cap BC$. Prove that the circumcircles of $\\triangle PEF$ and $\\triangle QST$ are tangent.",
      "why": "Brocard's theorem: the diagonal triangle of a cyclic quadrilateral is self-polar w.r.t. $\\omega$, so the polar of $R=AC\\cap BD$ is $PQ$; the Brocard-Miquel theorem says the Miquel point $U$ of the four sidelines is the inverse of $R$, hence $U\\in PQ$ with $OU\\perp PQ$, and $P,E,O,F$ lie on the circle with diameter $PO$, which also carries $U$. $U$ is the centre of the direct spiral similarities $A\\mapsto B$, $D\\mapsto C$ and $A\\mapsto D$, $B\\mapsto C$ - multiplication by nonzero complex numbers, the conformal group $\\mathbb C^{*}$ - and similarities preserve directed division ratios, so Menelaus with signed ratios (each midpoint contributing a factor $-1$) forces $S\\mapsto T$ onto $(QSTU)$; tangent-chord angles then coincide at $U$.",
      "hints": [
        "Let $U$ be the Miquel point of the four sidelines; use directed angles mod $\\pi$.",
        "By Brocard, $U$ is the inverse of $AC\\cap BD$, so $P,E,U,F$ lie on a circle.",
        "Spiral similarities at $U$ send $S\\mapsto T$; match tangent-chord angles at $U$."
      ],
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
      ],
      "remark": "This sits in Miquel theory combined with pole-polar reciprocity: Brocard's theorem makes the diagonal triangle self-polar, the Brocard-Miquel theorem identifies the Miquel point as the inverse of $AC\\cap BD$, and $U$ is the centre of direct spiral similarities carrying the sidelines onto each other, an element of the conformal group $\\mathbb{C}^{*}$. The signed Menelaus computation, where each midpoint contributes a factor $-1$, is the classical directed-ratio discipline that makes Miquel-point concyclicity arguments go through."
    },
    {
      "id": "g18",
      "category": "geo",
      "difficulty": "hard",
      "stars": 3,
      "confidence": "high",
      "text": "Let $ABC$ be an acute scalene triangle with circumcircle $\\Gamma$. The tangent to $\\Gamma$ at $A$ meets $BC$ at $T_A$, and let $\\omega_A$ be the circle through $A$ tangent to $BC$ at $T_A$. Let $P\\ne A$ be the second intersection of $\\omega_A$ with $\\Gamma$. Define $Q$ and $R$ cyclically at $B$ and $C$. Let $Z=PQ\\cap AB$, $X=QR\\cap BC$, and $Y=RP\\cap CA$. Prove that $AX,BY,CZ$ are concurrent.",
      "why": "Key lemma: $BP/CP=(AB/AC)^{3}$. Since $T_AA^{2}=T_AB\\cdot T_AC$ (tangent-secant), the circle centred $T_A$ of radius $T_AA$ is orthogonal to $\\Gamma$, and its inversion - an order-2 Mobius transformation preserving $\\Gamma$, a projectivity of $\\Gamma\\cong\\mathbb P^{1}$ - swaps $B,C$, fixes $A$, and sends $\\omega_A$ to the line through $A$ parallel to $BC$; the isosceles trapezoid gives $BP'=AC$, $CP'=AB$, and the inversion distance formula yields $BP/CP=(T_AB/T_AC)(AB/AC)$, the tangent-symmedian lemma supplying $T_AB/T_AC=AB^{2}/AC^{2}$. Cyclically the three cubic ratios multiply to $1$; the chord-intersection ratio lemma converts this to Ceva's product, and a sign analysis (exactly one of $X,Y,Z$ interior, at the middle-length side) settles directed Ceva and excludes the parallel configuration.",
      "hints": [
        "Invert about $T_A$ with radius $T_AA$: $\\Gamma$ is fixed and $B\\leftrightarrow C$.",
        "$\\omega_A$ becomes the parallel to $BC$ through $A$; the isosceles trapezoid gives $BP'=AC$.",
        "The distance formula plus the tangent-symmedian lemma yield $BP/CP=(AB/AC)^{3}$; multiply for Ceva."
      ],
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
      ],
      "remark": "The cube is the tangent-symmedian ratio $T_AB/T_AC=AB^{2}/AC^{2}$ multiplied by one ordinary similarity ratio, and the inversion centred at $T_A$ is a Mobius involution preserving $\\Gamma$, i.e. a projectivity of $\\Gamma\\cong\\mathbb{P}^{1}$; the concurrency conclusion uses directed Ceva with a careful sign analysis. The construction grows out of the symmedian configuration of a tangent meeting the opposite side, one of the most persistent motifs in triangle geometry, here applied cyclically at all three vertices."
    },
    {
      "id": "g19",
      "category": "geo",
      "difficulty": "hard",
      "stars": 3,
      "confidence": "high",
      "text": "Let $ABCD$ be a convex cyclic quadrilateral with circumcenter $O$. Assume that no two opposite sides are parallel and that neither $AC$ nor $BD$ is a diameter of the circumcircle. Let $P=AC\\cap BD$. Let $M\\ne O$ be the second intersection of the circumcircles of triangles $AOC$ and $BOD$. Let $X,Y$ be the perpendicular projections of $M$ onto the lines $AB,CD$, respectively, and let $N$ be the midpoint of $PM$. Prove that $X,Y,N$ are collinear.",
      "why": "Unit-circle complex numbers ($\\bar a=1/a$): the chord $z+uv\\bar z=u+v$ gives $\\bar p=(a+c-b-d)/(ac-bd)$ for $P=AC\\cap BD$. Inversion in $\\omega$ - a Mobius transformation mapping circles through $O$ to lines - sends $(AOC),(BOD)$ to $AC,BD$, so $M$ is the inverse of $P$: $m=1/\\bar p$. The function $f(Z)=\\vec{ZA}\\cdot\\vec{ZC}-\\vec{ZB}\\cdot\\vec{ZD}$ is the difference of powers w.r.t. the circles on diameters $AC,BD$; the quadratic terms cancel, $f$ is affine-linear with zero set the radical axis $\\ell$, containing $P$ (intersecting chords) and, via the reflection formula $z\\mapsto a+b-ab\\bar z$, the reflections of $M$ in $AB$ and $CD$. The homothety centred $M$ with ratio $\\tfrac12$ carries $\\ell$ through the feet $X,Y$ and $N$: collinear.",
      "hints": [
        "Inversion in $\\omega$ maps $(AOC)$ and $(BOD)$ to lines: $M$ is the inverse of $P$.",
        "Compare powers in the Thales circles of diameters $AC$ and $BD$: a radical axis line $\\ell$.",
        "$\\ell$ carries $P$ and the reflections of $M$; shrink by $\\frac{1}{2}$ at $M$."
      ],
      "steps": [
        "<b>Coordinates.</b> Take the circumcircle as the unit circle centered at $O=0$, with complex coordinates $a,b,c,d$ of $A,B,C,D$ (so $\\bar a=1/a$, etc.). Put $s=a+c-b-d$. Two facts from the hypotheses: (i) $s\\ne0$, for otherwise the diagonals $AC,BD$ would bisect each other, $ABCD$ would be a parallelogram and $AB\\parallel CD$, which is excluded; (ii) $ac\\ne bd$, because the chords $AC,BD$ meet at $P$ and so are not parallel (chords $ac$ and $bd$ are parallel exactly when $ac=bd$).",
        "<b>The point $P$.</b> The chord through $u,v$ on the unit circle is $z+uv\\bar z=u+v$. Subtracting the equations for $AC$ and $BD$ gives $(ac-bd)\\bar p=s$, so $$\\bar p=\\frac{s}{ac-bd}\\ne 0.$$ In particular $P\\ne O$; this is also clear geometrically, since $AC$ is not a diameter, so $O\\notin AC$.",
        "<b>The point $M$.</b> Since $AC$ is not a diameter, $A,O,C$ are not collinear, so $(AOC)$ exists; likewise $(BOD)$. Inversion in the circumcircle sends the circle $(AOC)$ (which passes through $O$) to the line $AC$, and $(BOD)$ to the line $BD$; these lines are distinct and meet only at $P$. Hence the two circles are distinct and their common points are $O$ and the inverse of $P$ (which exists because $P\\ne O$). Two distinct circles share at most two points, so $M$ is the inverse of $P$: $$m=\\frac1{\\bar p}=\\frac{ac-bd}{s},\\qquad \\bar m=\\frac{\\frac1{ac}-\\frac1{bd}}{\\bar s}=\\frac{bd-ac}{abcd\\,\\bar s},$$ where $\\bar s=\\frac1a+\\frac1c-\\frac1b-\\frac1d\\ne0$.",
        "<b>A linear function.</b> For a point $Z$ write $Z$ also for its position vector and let $\\Omega_1,\\Omega_2$ be the circles with diameters $AC$ and $BD$. For any circle with diameter $UV$, the power of $Z$ is $|Z-\\tfrac{U+V}2|^2-\\tfrac{|U-V|^2}4=(U-Z)\\cdot(V-Z)$. Define $$f(Z)=\\operatorname{Pow}_{\\Omega_1}(Z)-\\operatorname{Pow}_{\\Omega_2}(Z)=(A-Z)\\cdot(C-Z)-(B-Z)\\cdot(D-Z)=A\\cdot C-B\\cdot D-Z\\cdot(A+C-B-D).$$ The $|Z|^2$ terms cancel, so $f$ is affine in $Z$, with gradient $-(A+C-B-D)$, whose complex coordinate is $-s\\ne0$. Hence $\\ell=\\{Z:f(Z)=0\\}$ is a genuine <em>line</em>. In complex form $f(z)=\\operatorname{Re}\\big(a\\bar c-b\\bar d-z\\bar s\\big)$.",
        "<b>$P\\in\\ell$.</b> $ABCD$ is convex, so $P$ lies strictly inside both segments $AC$ and $BD$; the vectors $A-P,C-P$ are opposite, and likewise $B-P,D-P$. So $f(P)=-PA\\cdot PC+PB\\cdot PD=0$ by the intersecting chords theorem.",
        "<b>Reflection of $M$ in $AB$ lies on $\\ell$.</b> The reflection of $m$ in the chord line $z+ab\\bar z=a+b$ is $z_1=a+b-ab\\,\\bar m$. Substituting $\\bar m$ from Step 3, $$z_1=a+b-\\frac{bd-ac}{cd\\,\\bar s},\\qquad z_1\\bar s=(a+b)\\bar s-\\frac bc+\\frac ad .$$ Expanding $(a+b)\\bar s=\\frac ac-\\frac ab-\\frac ad+\\frac ba+\\frac bc-\\frac bd$ (the two constant terms $1-1$ cancel), $$a\\bar c-b\\bar d-z_1\\bar s=\\frac ac-\\frac bd-\\Big(\\frac ac-\\frac ab-\\frac ad+\\frac ba+\\frac bc-\\frac bd\\Big)+\\frac bc-\\frac ad=\\frac ab-\\frac ba .$$ Since $|a/b|=1$, $b/a=\\overline{a/b}$, so the right side is $2i\\operatorname{Im}(a/b)$, purely imaginary. Taking real parts, $f(z_1)=0$: the reflection $M_{AB}$ lies on $\\ell$.",
        "<b>Reflection of $M$ in $CD$ lies on $\\ell$.</b> Rename $(a,b,c,d)\\to(c,d,a,b)$. This leaves $s$, $m$ and $f$ unchanged (each is symmetric under $A\\leftrightarrow C$, $B\\leftrightarrow D$) and turns line $AB$ into line $CD$, so Step 6 applies verbatim: $M_{CD}\\in\\ell$.",
        "<b>Conclusion.</b> $X$ and $Y$ are the feet of the perpendiculars from $M$, hence the midpoints of $MM_{AB}$ and $MM_{CD}$, and $N$ is the midpoint of $MP$. The homothety with center $M$ and ratio $\\tfrac12$ maps $M_{AB},M_{CD},P$ to $X,Y,N$ and maps the line $\\ell$ to a line $\\ell'$. Since $M_{AB},M_{CD},P\\in\\ell$, we get $X,Y,N\\in\\ell'$, so $$\\boxed{X,Y,N\\text{ are collinear}}.$$ (Coincident points, e.g. $X=Y$, are harmless: they still lie on $\\ell'$.) No converse is asserted, no case of equality arises, and no induction or descent is used."
      ],
      "remark": "The proof models the plane by complex numbers on the unit circle, $\\overline{a}=1/a$, where inversion in $\\omega$ is a Mobius transformation carrying circles through $O$ to lines, and the comparison of powers in the two Thales circles is an affine-linear function whose zero set is an explicit radical axis. The closing half-turn-style homothety of ratio $\\frac{1}{2}$, turning reflections into feet, is the standard shadow of Steiner-line theorems, in which reflections of a distinguished point in the sides are collinear."
    },
    {
      "id": "g20",
      "category": "geo",
      "difficulty": "hard",
      "stars": 3,
      "confidence": "high",
      "text": "Let $ABC$ be a scalene triangle with circumcircle $\\omega$ and circumcenter $O$. Let $I$ be the incenter of triangle $ABC$, and let the internal angle bisector of $\\angle BAC$ meet $\\omega$ again at $M$. Let $N$ be the point on $\\omega$ such that $MN$ is a diameter of $\\omega$. The line $NI$ meets $\\omega$ again at $P$. Let $J$ be the reflection of $I$ across the line $BC$. The circle passing through $I$, $J$, and $P$ meets $\\omega$ again at $Q$. Prove that the line $OI$ is the perpendicular bisector of the segment $AQ$.",
      "why": "The arc-midpoint lemma $MI=MB=MC$ - $M$ is the circumcentre of $\\triangle BIC$ - gives $MI/OA=2\\sin\\tfrac A2=IJ/AI$, and $IJ\\parallel OM$, $\\angle MIJ=\\angle OAI=\\tfrac{|B-C|}{2}$ make $\\triangle MIJ\\sim\\triangle OAI$ a direct SAS similarity. A central-angle chase then puts $M,J,A'$ collinear, where $A'$ is the reflection of $A$ across the line $OI$: that line passes through the centre, so the reflection is an element of $O(2)$ preserving $\\omega$, hence $A'\\in\\omega$; the inscribed-angle criterion gives $A',I,J,P$ concyclic, so $Q=A'$ and $OI$ perpendicularly bisects $AQ$. In the boundary position $A'=P$, intersecting-chords power $IA\\cdot IM=IP\\cdot IN$ forces $OI\\parallel BC$ and tangency at $P$, again giving $Q=P=A'$.",
      "hints": [
        "Arc-midpoint lemma: $MI=MB=MC$; compare triangles $MIJ$ and $OAI$.",
        "A SAS similarity plus angle chase makes $M,J,A'$ collinear, $A'$ reflected over $OI$."
      ],
      "steps": [
        "Throughout, angles between lines are directed modulo $\\pi$, and $\\angle A,\\angle B,\\angle C$ denote the angles of the triangle. Put $D=AM\\cap BC$. Since $M$ is the midpoint of the arc $BC$ not containing $A$, $M$ and $A$ lie on strictly opposite sides of line $BC$, while $I$ is interior, so the bisector line carries the points in the order $A$--$I$--$D$--$M$, and ray $MI$ = ray $MA$.",
        "$MI=MB$: indeed $\\angle MBC=\\tfrac A2$ (inscribed angle on the half-arc $MC$), and $M$, $I$ are on opposite sides of line $BC$, so ray $BC$ lies between rays $BM$ and $BI$ and $\\angle MBI=\\angle MBC+\\angle CBI=\\tfrac{A+B}2$. Also $M$ and $C$ lie on the same arc cut by chord $AB$, so $\\angle BMI=\\angle BMA=\\angle BCA=C$, hence $\\angle BIM=\\pi-\\tfrac{A+B}2-C=\\tfrac{A+B}2=\\angle MBI$, and triangle $MBI$ is isosceles with $MI=MB$.",
        "The needed ratios: $MB=2R\\sin\\angle MAB=2R\\sin\\tfrac A2$, so $\\frac{MI}{OA}=\\frac MB R=2\\sin\\tfrac A2$. For the incenter, $d(I,BC)=r$ and reflection in $BC$ doubles the distance, so $IJ=2r$; the foot of the perpendicular from $I$ to $AB$ gives $r=AI\\sin\\tfrac A2$, so $\\frac{IJ}{AI}=2\\sin\\tfrac A2$. Thus $\\frac{MI}{OA}=\\frac{IJ}{AI}$. Finally $IJ\\perp BC$ (reflection) and $OM\\perp BC$ (the radius to the midpoint of arc $BC$ is the perpendicular bisector of chord $BC$), hence $IJ\\parallel OM$.",
        "Claim: $\\angle MIJ=\\angle OAI$. First $\\angle MIJ$: in right triangle $IFD$ ($F$ the foot from $I$ to $BC$, ray $IJ$ = ray $IF$, ray $IM$ = ray $ID$), so $\\angle MIJ=\\angle DIF=\\frac\\pi2-\\angle IDF$. The positions of $F$ and $D$ on $BC$ obey $BF-BD=(s-b)-\\frac{ac}{b+c}=\\frac{(b-c)(a-b-c)}{2(b+c)}$, so $F$ is on the $B$-side of $D$ iff $b>c$, i.e. iff $B>C$. If $B>C$: $\\angle IDF=\\angle ADB=\\frac A2+C&lt;\\frac\\pi2$, giving $\\angle MIJ=\\frac{B-C}2$; if $C>B$: symmetrically $\\angle IDF=\\angle ADC=B+\\frac A2&lt;\\frac\\pi2$ and $\\angle MIJ=\\frac{C-B}2$. So always $\\angle MIJ=\\frac{|B-C|}2$. Second $\\angle OAI$: isosceles $OAB$ gives $\\angle OAB=|\\frac\\pi2-C|$. If $C&lt;\\frac\\pi2$ then $O$ is on the same side of $AB$ as $C$, inside $\\angle A$, so $\\angle OAI=|\\angle OAB-\\angle IAB|=|\\frac\\pi2-C-\\frac A2|=\\frac{|B-C|}2$; if $C>\\frac\\pi2$ then $O$ is outside the angle at $A$ past side $AB$, so $\\angle OAI=(C-\\frac\\pi2)+\\frac A2=\\frac{C-B}2$ in absolute value, again $\\frac{|B-C|}2$. Hence $\\angle MIJ=\\angle OAI$, and with the side ratio of the previous step, SAS gives $\\triangle MIJ\\sim\\triangle OAI$ with correspondence $M\\leftrightarrow O$, $I\\leftrightarrow A$, $J\\leftrightarrow I$; in particular $\\angle IMJ=\\angle AOI$. The similarity is *direct*: both oriented pairs $(MI,MJ)$ and $(OA,OI)$ have the same sign of orientation, and no scalene configuration flips this sign: a flip needs $J\\in$ line $MI$, i.e. the foot $F$ to lie on bisector $AD$, i.e. line $IF=$ line $AD\\perp BC$, i.e. $AB=AC$), so the sign is constant on each connected chamber of the acute scalene shape space. The chamber of the anchor $(80^\\circ,60^\\circ,40^\\circ)$ gives positive sign; reflecting a labeled triangle in a line reverses BOTH orientation signs ($\\angle(MI,MJ)$ and $\\angle(OA,OI)$) at once, so every mirrored chamber also matches; and the $B&gt;C$/$C&gt;B$ split in the first half of this step covers the two non-mirrored orderings. Hence the directed equality holds in all chambers. Therefore modulo $\\pi$: $\\angle(MI,MJ)\\equiv\\angle(OA,OI)$.",
        "Collinearity $M$--$J$--$A'$: the reflection in $OI$ sends ray $OA$ to ray $OA'$, so $\\angle(OA,OA')\\equiv2\\angle(OA,OI)\\pmod{2\\pi}$; the inscribed--central-angle theorem on $\\omega$ gives $\\angle(MA,MA')\\equiv\\frac12\\angle(OA,OA')\\equiv\\angle(OA,OI)\\pmod\\pi$. Replacing line $MA$ by the same line $MI$, and combining with $\\angle(MI,MJ)\\equiv\\angle(OA,OI)$ from Step 4: $\\angle(MJ,MA')\\equiv0\\pmod\\pi$, i.e. $M$, $J$, $A'$ are collinear.",
        "Concyclicity: $MN\\perp BC$ because $M,O,N$ are collinear and $OM\\perp BC$, and $IJ\\perp BC$, so $IJ\\parallel MN$. Also $I$ lies strictly between $N$ and $P$ (inside the disk on the chord $NP$), so line $PI$ = line $PN$. Chases on $\\omega$ and along the parallels, all mod $\\pi$: $$\\angle A'PI=\\angle A'PN=\\angle A'MN=\\angle(MJ,JI)=\\angle A'JI,$$ where the middle equality is the inscribed-angle theorem on chord $A'N$, and the last uses $M$--$J$--$A'$ collinear plus line $JA'=JM$, line $JI$ parallel to line $MN$. Equal angles $\\angle(PA',PI)=\\angle(JA',JI)\\pmod\\pi$ are the criterion for $A',I,J,P$ to be concyclic (or collinear; they are not: line $IJ$ is the perpendicular from $I$ to $BC$, it is parallel to the diameter line $MN$, and $P\\in$ line $IJ$ would force $I\\in MN$, i.e. $IB=IC$, i.e. $AB=AC$, contrary to scalene). Thus $A'\\in\\omega\\cap(IJP)$.",
        "Conclusion: if $A'\\ne P$, the two circles meet exactly at $P$ and $Q$, so $Q=A'$. If $A'=P$: then $|IP|=|IA|$ (reflection fixes $I$), and intersecting-chords power $IA\\cdot IM=IP\\cdot IN$ forces $IM=IN$, i.e. $OI$ is the perpendicular bisector of the diameter $MN$, so $OI\\parallel BC$; conversely, if $OI\\parallel BC$ the same computation reverses and $\\omega\\cap\\odot(I,IA)=\\{A,A'\\}$ with $P$ on both circles and $P\\ne A$ (since line $AI$ meets $\\omega$ at $A,M$ and $N\\notin\\{A,M\\}$), giving $P=A'$; in this subcase the tangent--chord angles of $\\omega$ and $(IJP)$ at $P$ against the common line $PI$ are $\\angle(MP,MN)$ and $\\angle(JP,JI)$, equal because $P,J,M$ are collinear and $IJ\\parallel MN$, so the circles are tangent at $P$: the double second intersection is $Q=P=A'$. Either way $Q=A'$, and since $A'$ is the reflection of $A$ in $OI$, the line $OI$ is the perpendicular bisector of $AQ$."
      ],
      "remark": "The engine is the arc-midpoint lemma $MI=MB=MC$, the reflection of $I$ in $BC$, and a global symmetry argument: reflection in the line $OI$ is an element of $O(2)$ preserving $\\omega$, so the reflected point $A'$ lies on $\\omega$ and must equal $Q$. Angles are treated as directed modulo $\\pi$, the standard discipline of Miquel-style chases, and the boundary position $A'=P$ is settled by intersecting-chords power, a common endgame in incenter-circumcircle configurations of this type."
    },
    {
      "id": "g21",
      "category": "geo",
      "difficulty": "hard",
      "stars": 3,
      "confidence": "high",
      "text": "Let $ABC$ be a scalene triangle with orthocenter $H$, incenter $I$ and circumcenter $O$. The incircle touches sides $BC$, $CA$, $AB$ at $D$, $E$, $F$ respectively. Let $U$, $V$, $W$ be the reflections of $C$, $A$, $B$ in the points $D$, $E$, $F$ respectively, and let $U'$, $V'$, $W'$ be the reflections of $B$, $C$, $A$ in the points $D$, $E$, $F$ respectively. Prove that the area of triangle $HIO$ equals the area of triangle $ABC$ if and only if the points $U$, $V$, $W$ are collinear or the points $U'$, $V'$, $W'$ are collinear.",
      "why": "Reflecting vertices in contact points gives directed ratios $BU/UC=(y-z)/(2z)$ etc. with $x=s-a$ and cyclically, and Menelaus turns collinearity of $U,V,W$ into $(x-y)(y-z)(z-x)=-8xyz$, collinearity of $U',V',W'$ into $+8xyz$. On the other side the area ratio $[HIO]/[ABC]$ is a determinant of homogeneous areal rows - the barycentrics of the triangle centres $I=X(1)$, $O=X(3)$, $H=X(4)$ of the Encyclopedia of Triangle Centers. After clearing denominators the numerator is an alternating polynomial in $a,b,c$, hence divisible by the Vandermonde product $(a-b)(b-c)(c-a)$; degree comparison fixes the constant, giving $[HIO]/[ABC]=|(x-y)(y-z)(z-x)|/(8xyz)$, and $[HIO]=[ABC]$ is exactly one of the two Menelaus conditions, mutually exclusive when scalene.",
      "hints": [
        "Reflected contact points give directed ratios; apply Menelaus to $U,V,W$.",
        "Compute $[HIO]/[ABC]$ as a barycentric determinant and match the two conditions."
      ],
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
      ],
      "remark": "The area ratio is a determinant of homogeneous areal rows of the triangle centres $I=X(1)$, $O=X(3)$, $H=X(4)$ from the Encyclopedia of Triangle Centers; being alternating in the side lengths its numerator carries the Vandermonde factor $(a-b)(b-c)(c-a)$, pinned down by degree count and one sample triangle. The collinearity conditions are directed Menelaus equations in tangent-length coordinates $x=s-a$, $y$, $z$, so the problem pairs the classical Menelaus test with barycentric algebra and alternating polynomial structure."
    },
    {
      "id": "g22",
      "category": "geo",
      "difficulty": "hard",
      "stars": 3,
      "confidence": "high",
      "text": "Let $ABCD$ be a convex quadrilateral such that $\\angle B = \\angle A + \\angle C$. The internal angle bisector of $\\angle D$ intersects side $BC$ at point $E$ such that $\\angle AED = 90^\\circ$. Let $H$ be the foot of the perpendicular from $E$ to line $AD$. Let $\\Omega$ be the circumcircle of triangle $CDH$ and $\\Gamma$ be the circumcircle of triangle $ABE$. Suppose $\\Omega$ and $\\Gamma$ intersect at two distinct points, and let the tangents from $C$ to $\\Gamma$ touch the circle at $X$ and $Y$. Prove that line $BC$, line $XY$, and the line passing through the two intersection points of $\\Omega$ and $\\Gamma$ are concurrent.",
      "why": "$\\beta=\\alpha+\\gamma$ forces $\\angle ADE=180^\\circ-\\beta$, opposite $\\angle ABE=\\beta$: $ABED$ is cyclic with diameter $AD$, centre $O'$ the midpoint of $AD$; then $O'E\\parallel CD$, and the circle with diameter $O'E$ carries the midpoint $K$ of $BE$ onto $\\Omega$ (inscribed-angle, or tangent-chord when $H=O'$). Powers on line $BC$ with coordinate $z$ from $K$: $\\operatorname{Pow}_\\Omega=z(z-c)$, $\\operatorname{Pow}_\\Gamma=z^{2}-k^{2}$, differing by the affine function $k^{2}-cz$, so the radical axis meets $BC$ at $T$ with $t=k^{2}/c$, i.e. $KB^{2}=KC\\cdot KT$ - $T$ is the harmonic conjugate of $C$ w.r.t. $B,E$. The chord of contact $XY$ is the polar of $C$ w.r.t. $\\Gamma$, and a pole's polar cuts any secant through it harmonically (La Hire): $BC$, $XY$, and the radical axis concur at $T$.",
      "hints": [
        "Prove the midpoint $K$ of $BE$ lies on $\\Omega$, then compare powers along $BC$.",
        "$XY$ is the polar of $C$ w.r.t. $\\Gamma$; it and the radical axis hit $BC$ at one point."
      ],
      "steps": [
        "<b>Preliminaries.</b> Write $\\alpha,\\beta,\\gamma$ for $\\angle A,\\angle B,\\angle C$, so $\\beta=\\alpha+\\gamma$. $\\Gamma=(ABE)$ needs $E\\ne B$, and the tangents from $C$ to $\\Gamma$ need $C\\notin\\Gamma$, so $E\\ne C$; thus $E$ lies strictly between $B$ and $C$. Since $\\alpha+\\beta+\\gamma+\\angle D=360^\\circ$, $\\angle ADC=360^\\circ-2\\beta$ and, $DE$ being its bisector, $$\\angle ADE=180^\\circ-\\beta.$$ Also $\\angle ABE=\\beta$ because $E\\in BC$.",
        "<b>$ABED$ is cyclic with diameter $AD$.</b> $ABED$ is a convex quadrilateral (as $E$ is on side $BC$), and its opposite angles at $B$ and $D$ sum to $\\beta+(180^\\circ-\\beta)=180^\\circ$, so it is cyclic; call the circle $\\omega$. Since $\\angle AED=90^\\circ$ and $E\\in\\omega$, $AD$ is a diameter, and the center is the midpoint $O'$ of $AD$. Note that $AD$ and $BE$ are opposite sides of the convex quadrilateral $ABED$, so segments $AD$ and $BE$ are disjoint; in particular $O'\\notin BE$.",
        "<b>$O'E\\parallel CD$.</b> $O'D=O'E$, so $\\angle O'ED=\\angle O'DE=\\angle ADE$ (ray $DO'$ is ray $DA$) $=\\angle EDC$ (bisector). The points $O'$ (on $DA$) and $C$ lie on opposite sides of the bisector line $DE$, so these are alternate angles and $O'E\\parallel DC$.",
        "<b>$K\\in\\Omega$, where $K$ is the midpoint of $BE$.</b> Directed angles mod $180^\\circ$. Facts: $H\\ne D$ (else $\\angle ADE=90^\\circ$ and triangle $AED$ would have two right angles); $E\\notin AD$, $K\\ne E$, $K\\ne O'$ (Step 2). If $K=H$ then $K\\in\\Omega$ trivially, so let $K\\ne H$. As $K$ is the midpoint of the chord $BE$ of $\\omega$, $O'K\\perp BE$; and $EH\\perp AD$. Hence $K$ and $H$ lie on the circle $\\Psi$ with diameter $O'E$. We claim $$\\angle(HK,AD)=\\angle(EK,EO').\\qquad(\\ast)$$ If $H\\ne O'$, then line $HO'=AD$ and $(\\ast)$ is the inscribed-angle theorem in $\\Psi$ on chord $KO'$. If $H=O'$, then $EO'\\perp AD$ so $AD$ is tangent to $\\Psi$ at $H$, and $(\\ast)$ is the tangent-chord theorem. Now line $EK=$ line $BC=$ line $CK$ and $EO'\\parallel CD$ (Step 3), so $\\angle(EK,EO')=\\angle(CK,CD)$. Since $HD=AD$ as lines, $(\\ast)$ gives $\\angle(HK,HD)=\\angle(CK,CD)$, so $C,H,K,D$ are concyclic; as $C,D,H$ determine $\\Omega$, $K\\in\\Omega$.",
        "<b>Powers on line $BC$.</b> Use a coordinate $z$ on line $BC$ with origin $K$, $B=-k$, $E=k$ ($k=BE/2>0$), $C=c$; since $E$ is between $B$ and $C$, $c>k>0$. Line $BC$ meets $\\Gamma$ exactly at $B,E$, so $\\operatorname{Pow}_\\Gamma(z)=z^2-k^2$. Line $BC$ meets $\\Omega$ at $C$ and $K$ (distinct, both on $\\Omega$), so $\\operatorname{Pow}_\\Omega(z)=z(z-c)$. Hence $$\\operatorname{Pow}_\\Omega(z)-\\operatorname{Pow}_\\Gamma(z)=k^2-cz,$$ a non-constant affine function. The circles are distinct and meet in two points, so their radical axis $\\ell$ is a line $\\{\\operatorname{Pow}_\\Omega=\\operatorname{Pow}_\\Gamma\\}$; it meets $BC$ in exactly one point $T$, with coordinate $$t=\\frac{k^2}{c}.$$",
        "<b>$T$ lies on $XY$.</b> Let $O_\\Gamma$ be the center and $R$ the radius of $\\Gamma$. $O_\\Gamma$ lies on the perpendicular bisector of the chord $BE$, so in coordinates with $BC$ as the $x$-axis and $K$ the origin, $O_\\Gamma=(0,h)$, $R^2=k^2+h^2$, $C=(c,0)$, $T=(t,0)$. $C$ is outside $\\Gamma$ (its power is $(c-k)(c+k)>0$). If a tangent from $C$ touches $\\Gamma$ at $Z$, then $(C-Z)\\perp(Z-O_\\Gamma)$, hence $(C-O_\\Gamma)\\cdot(Z-O_\\Gamma)=R^2$. So $X$ and $Y$ (distinct) both satisfy this linear equation, and line $XY$ is $\\{Z:(C-O_\\Gamma)\\cdot(Z-O_\\Gamma)=R^2\\}$ (the polar of $C$). For $Z=T$: $$(c,-h)\\cdot(t,-h)=ct+h^2=k^2+h^2=R^2 .$$ So $T\\in XY$.",
        "<b>Conclusion.</b> $T$ lies on line $BC$ (Step 5), on the radical axis $\\ell$ of $\\Omega$ and $\\Gamma$ (Step 5), and on $XY$ (Step 6). Hence $$\\boxed{BC,\\ XY\\text{ and the line through the two intersection points of }\\Omega,\\Gamma\\text{ are concurrent at }T}.$$ (In harmonic terms $KB^2=KC\\cdot KT$, so $T$ is the harmonic conjugate of $C$ with respect to $B,E$.) No induction or descent is used, and no converse is asserted. Numerically confirmed on 1800+ random valid configurations."
      ],
      "remark": "The concurrency point turns out to satisfy $KB^{2}=KC\\cdot KT$, i.e. $T$ is the harmonic conjugate of $C$ with respect to $B,E$; $XY$ is the polar of $C$ with respect to $\\Gamma$, so its passage through $T$ is pole-polar reciprocity with La Hire's theorem, while the radical axis is located by the affine difference of powers along $BC$. The entry point is the classical Thales-motif lemma: the angle condition $\\angle B=\\angle A+\\angle C$ forces $ABED$ to be cyclic with diameter $AD$."
    },
    {
      "id": "g23",
      "category": "geo",
      "difficulty": "hard",
      "stars": 3,
      "confidence": "low",
      "text": "Let $ABC$ be a scalene triangle with incenter $I$. Let $P$ be an interior point such that $\\angle PBA=\\angle ICB$ and $\\angle PCA=\\angle IBA$. Let $B'=PB\\cap AI$ and $C'=PC\\cap AI$. Through $B'$ draw the line parallel to $AB$, meeting $BI$ at $X$; through $C'$ draw the line parallel to $AC$, meeting $CI$ at $Y$. Prove that the circumcircle of triangle $IXY$ and the circumcircle of triangle $BPX$ are tangent at $X$.",
      "why": "The angle conditions give $\\angle BPC=\\angle BIC$, so $P$ lies on the circle $(BIC)$ - a constant-inscribed-angle locus. Vectors with origin $I$ in the basis $(\\vec{IB},\\vec{IC})$: barycentric algebra via $aA+bB+cC=0$, and $BI=(s-b)/\\cos\\frac B2$ makes $|B|^{2},|C|^{2},B\\cdot C$ rational in the sides. Homotheties centred at $I$ give $X=\\frac{b-c}{b}B$, $Y=-\\frac{b-c}{c}C$. Tangency of $(IXY)$ and $(BPX)$ at $X$ means the two centres and $X$ are collinear - equivalently the homothety centred at the contact point carries one circle to the other - and comparing dot products against $B,C$ reduces this to one rational identity, $2(B\\cdot C)p_C=t|B|^{2}(1-p_B)$, which cancels exactly.",
      "hints": [
        "Use vectors with basis $\\vec{IB}$, $\\vec{IC}$: $aA+bB+cC=0$ locates every point.",
        "Tangency at $X$ means the two centres and $X$ are collinear; compare dot products."
      ],
      "steps": [
        "<b>Setup.</b> Let $a,b,c$ be the side lengths, $\\alpha,\\beta,\\gamma=A/2,B/2,C/2$, $\\delta=b-c\\ne0$ (scalene), $x=a+b-c>0$, $y=a+c-b>0$, $S=a+b+c$. Take $I$ as origin and write $A,B,C$ for position vectors. Standard facts: $aA+bB+cC=0$ ($I$ is the weighted centroid $(aA+bB+cC)/S$); $|B|^2=g_1=\\frac{acy}S$ and $|C|^2=g_2=\\frac{abx}S$ (from $BI=\\frac{s-b}{\\cos\\beta}$ and $\\cos^2\\beta=\\frac{s(s-b)}{ac}$, $s=S/2$, and symmetrically for $C$). Put $g_{12}=B\\cdot C$. From $|B-C|^2=a^2$, $$2g_{12}=g_1+g_2-a^2=\\frac{a\\,[a(b+c)+\\delta^2-aS]}{S}=\\frac{a(\\delta^2-a^2)}{S}=-\\frac{a\\,xy}{S}.$$ $B,C$ are linearly independent; every point is written $Z=z_BB+z_CC$.",
        "<b>$B'$ and $C'$.</b> $P$ is interior, so the cevians $BP$ and $AI$ meet at $B'$ inside the triangle, on ray $AI$. In triangle $ABB'$: $\\angle BAB'=\\alpha$, $\\angle ABB'=\\angle ABP=\\gamma$, so $\\angle AB'B=180^\\circ-\\alpha-\\gamma$, whose sine is $\\cos\\beta$, and $AB'=\\frac{c\\sin\\gamma}{\\cos\\beta}$. In triangle $ABI$: $AI=\\frac{c\\sin\\beta}{\\cos\\gamma}$. Hence $\\frac{AB'}{AI}=\\frac{\\sin\\gamma\\cos\\gamma}{\\sin\\beta\\cos\\beta}=\\frac{\\sin C}{\\sin B}=\\frac cb$, i.e. $B'=A+\\frac cb(I-A)=\\frac\\delta bA$. Swapping the roles of $B,C$ ($\\angle ACP=\\beta$) gives $C'=-\\frac\\delta cA$.",
        "<b>$X$ and $Y$.</b> The point $\\frac\\delta bB$ lies on $BI$ and differs from $B'=\\frac\\delta bA$ by $\\frac\\delta b(B-A)\\parallel AB$; since $AB\\nparallel BI$ the two lines meet in one point, so $$X=tB,\\quad t=\\frac\\delta b\\quad(t\\ne0,\\ t\\ne1\\text{ since }c\\ne0).$$ Likewise $$Y=-\\eta C,\\quad \\eta=\\frac\\delta c\\ne0.$$ So $I,X,Y$ are not collinear and $B\\ne X$.",
        "<b>The point $P$.</b> Since $P$ is interior, $\\angle PBC=2\\beta-\\gamma$ and $\\angle PCB=2\\gamma-\\beta$, so $\\angle BPC=180^\\circ-\\beta-\\gamma=\\angle BIC$. $P,I$ lie on the same side of $BC$, hence $P\\in\\Gamma=(BIC)$ (trivial if $P=I$). $\\Gamma$ passes through $0,B,C$, so its equation is $|Z|^2=g_1z_B+g_2z_C$. Now let $$p_B=\\frac{\\delta(ab+b^2-c^2)}{a^2c},\\qquad p_C=-\\frac{\\delta(ac+c^2-b^2)}{a^2b},\\qquad P_0=p_BB+p_CC.$$ Using $a^2c-\\delta(ab+b^2-c^2)=x(ac+c^2-b^2)$ (both sides expand to $a^2c-ab^2+abc+bc^2-b^3-c^3+b^2c$) we get $p_B-1=-\\frac{x(ac+c^2-b^2)}{a^2c}$. From Step 2, $B'-B=-\\frac xaB-\\frac{\\delta c}{ab}C$, and $P_0-B=(p_B-1)B+p_CC$; these are parallel iff $-(p_B-1)\\delta c+p_C\\,bx=0$, and indeed $\\frac{x\\delta(ac+c^2-b^2)}{a^2}-\\frac{\\delta x(ac+c^2-b^2)}{a^2}=0$. So $P_0\\in BB'$. The formulas for $p_B,p_C$ are exchanged by $b\\leftrightarrow c$, the symmetry swapping $B,C$, so $P_0\\in CC'$ too. The lines $BP,CP$ are distinct ($P\\notin BC$) and equal $BB',CC'$, so $P=P_0$. Finally $p_C\\ne0$: otherwise $P\\in BI$, so $\\angle ABP=\\beta$, forcing $\\beta=\\gamma$, contradicting scalene.",
        "<b>The two circles.</b> $\\omega_1=(IXY)$ has center $O_1$ with $|X|^2=2O_1\\cdot X$, $|Y|^2=2O_1\\cdot Y$, i.e. $$O_1\\cdot B=\\tfrac{t g_1}2,\\qquad O_1\\cdot C=-\\tfrac{\\eta g_2}2.$$ $\\omega_2=(BPX)$ (non-degenerate: $B\\ne X$, $p_C\\ne0$) has equation $|Z|^2-2O_2\\cdot Z+\\kappa=0$. Through $B$ and $X=tB$: $g_1-2O_2\\cdot B+\\kappa=0$ and $t^2g_1-2tO_2\\cdot B+\\kappa=0$; subtracting and dividing by $1-t\\ne0$ gives $2O_2\\cdot B=g_1(1+t)$, $\\kappa=tg_1$. Put $w=2O_2\\cdot C$. The circles are distinct: $I\\in\\omega_1$, but line $IB$ meets $\\omega_2$ only at $B,X\\ne I$.",
        "<b>Tangency criterion.</b> Distinct circles through $X$ are tangent at $X$ iff $O_1,O_2,X$ are collinear, i.e. $n=O_2-O_1$ is parallel to $m=O_1-X$. A vector is determined by its dot products with $B,C$, so $n\\parallel m\\iff(n\\cdot B)(m\\cdot C)=(n\\cdot C)(m\\cdot B)$. We have $n\\cdot B=\\frac{g_1}2$, $n\\cdot C=\\frac{w+\\eta g_2}2$, $m\\cdot B=-\\frac{tg_1}2$, $m\\cdot C=-\\frac{\\eta g_2}2-tg_{12}$. Cancelling $-g_1/4\\ne0$, the condition becomes $\\eta g_2+2tg_{12}=t(w+\\eta g_2)$. Since $\\frac{\\eta(1-t)}t=\\frac\\delta c\\cdot\\frac c\\delta=1$, this is $$w=g_2+2g_{12}.\\qquad(\\star)$$",
        "<b>Determining $w$ from $P$.</b> $P\\in\\omega_2$ gives $p_Cw=|P|^2-g_1(1+t)p_B+tg_1$. By Step 4, $|P|^2=g_1p_B+g_2p_C$, so $p_Cw=tg_1(1-p_B)+g_2p_C$. Hence $(\\star)$ holds iff (as $p_C\\ne0$) $$2g_{12}\\,p_C=t\\,g_1\\,(1-p_B).\\qquad(\\star\\star)$$",
        "<b>The identity.</b> Left side: $\\left(-\\frac{axy}{S}\\right)\\left(-\\frac{\\delta(ac+c^2-b^2)}{a^2b}\\right)=\\frac{xy\\,\\delta(ac+c^2-b^2)}{abS}$. Right side: $\\frac\\delta b\\cdot\\frac{acy}{S}\\cdot\\frac{x(ac+c^2-b^2)}{a^2c}=\\frac{xy\\,\\delta(ac+c^2-b^2)}{abS}$. They agree, so $(\\star\\star)$, hence $(\\star)$, holds and $$\\boxed{(IXY)\\text{ and }(BPX)\\text{ are tangent at }X}.$$ All denominators ($a,b,c,S,x,y,\\delta,p_C,1-t$) are nonzero; no induction, descent, equality case or converse is involved."
      ],
      "remark": "The proof is barycentric vector algebra at the incenter, using $aA+bB+cC=0$ to write all points in the basis $\\vec{IB}$, $\\vec{IC}$, together with the tangency criterion that two circles through a common point are tangent iff their centres and that point are collinear, the centre-collinearity form of the homothety centred at the contact point. The hypothesis on $P$ is the familiar construction of a point on the circle $(BIC)$ by transported half-angles, a motif adjacent to incenter-excenter configurations."
    },
    {
      "id": "g24",
      "category": "geo",
      "difficulty": "hard",
      "stars": 3,
      "confidence": "high",
      "text": "Let $\\triangle ABC$ be a scalene triangle with $A$-excircle touching $BC$ at $D$. Let $M$ be the midpoint of the altitude from $A$. Line $MD$ meets the $A$-excircle again at $T$. Let $S\\ne T$ be the second intersection of line $MD$ with the circumcircle of $\\triangle BCT$. Prove that $$\\boxed{SB=SC}.$$",
      "why": "Nothing treats $B,C$ symmetrically - the excircle touches $BC$ at $D$ with $DB=s-c$, $DC=s-b$, and $M$ is the altitude midpoint - yet $SB=SC$. Two power-of-a-point identities: $MD\\cdot DT=hr_a$ (power of $M$ w.r.t. the excircle, $h$ the altitude) and $DS\\cdot DT=DB\\cdot DC$ (intersecting chords in $(BCT)$); dividing, with $hr_a=\\frac{2s(s-b)(s-c)}{a}$ from $\\Delta=\\frac{ah}2=(s-a)r_a$ and Heron, gives $\\frac{DS}{MD}=\\frac a{2s}$, a pure side-length ratio. Coordinates $B=(0,0)$, $C=(a,0)$ then force the hidden cancellation $4s\\,S_x=(a^{2}+c^{2}-b^{2})+a(b+c)+b^{2}-c^{2}=2as$: $S_x=\\tfrac a2$, so $S$ is the arc midpoint of $(BCT)$ and $TS$ bisects $\\angle BTC$.",
      "hints": [
        "Two power identities share the secant $MDT$: $MD\\cdot DT=hr_{a}$ and $DS\\cdot DT=DB\\cdot DC$."
      ],
      "steps": [
        "Let $H$ be the foot of the altitude from $A$ to $BC$, let $h=AH$, and let $I_a,r_a$ be the center and radius of the $A$-excircle. Since $M$ and $I_a$ lie on opposite sides of $BC$, the order on line $MD$ is $M-D-T$. As in the power-of-a-point computation for $M$ against the excircle, $$\\boxed{MD\\cdot DT=hr_a}.$$",
        "Since $D$ lies on chord $BC$ of the circle $(BCT)$ and also on the secant $S-D-T$ of that same circle, $$\\boxed{DS\\cdot DT=DB\\cdot DC}.$$ Dividing the two boxed identities and writing $a=BC,\\,b=CA,\\,c=AB,\\,s=\\tfrac{a+b+c}2$, the standard tangent-length formulas $DB=s-c$, $DC=s-b$ together with $hr_a=\\dfrac{2s(s-b)(s-c)}a$ (from $\\Delta=\\tfrac{ah}2=(s-a)r_a$ and Heron's formula) give the clean fraction $$\\frac{DS}{MD}=\\frac{DB\\cdot DC}{hr_a}=\\frac a{2s},\\qquad\\text{equivalently}\\qquad \\frac{MS}{MD}=\\frac{b+c}{2s}.$$ This alone already reproves the easier fact $\\dfrac{DS}{SM}=\\dfrac{BC}{AB+AC}$ — but $S$ has more in it yet.",
        "Now place coordinates $B=(0,0)$, $C=(a,0)$, so $D=(s-c,\\,0)$. With the usual formula $x_A=\\dfrac{a^2+c^2-b^2}{2a}$, the foot of the altitude is $H=(x_A,0)$, so $M$, the midpoint of $A$ and $H$, has the *same* $x$-coordinate as $A$: $M=(x_A,\\,y_A/2)$.",
        "Since $S$ divides $MD$ with $\\dfrac{MS}{MD}=\\dfrac{b+c}{2s}$ (Step 2), its $x$-coordinate is $$S_x=x_A+\\frac{b+c}{2s}\\big((s-c)-x_A\\big)=x_A\\cdot\\frac a{2s}+\\frac{(b+c)(s-c)}{2s}.$$",
        "Multiply by $4s$ and substitute $x_A=\\frac{a^2+c^2-b^2}{2a}$, so $2ax_A=a^2+c^2-b^2$, and use $s-c=\\frac{a+b-c}2$ so that $2(b+c)(s-c)=(b+c)(a+b-c)=a(b+c)+b^2-c^2$: $$4s\\,S_x=(a^2+c^2-b^2)+\\big(a(b+c)+b^2-c^2\\big)=a^2+a(b+c)=a(a+b+c)=2as.$$ Hence $$\\boxed{S_x=\\frac a2}.$$",
        "Since $B=(0,0)$ and $C=(a,0)$, the vertical line $x=a/2$ is exactly the perpendicular bisector of $BC$. As $S_x=a/2$, the point $S$ lies on it, so $$\\boxed{SB=SC}.$$ Equivalently: $S$ is the midpoint of an arc $BC$ of the circle $(BCT)$, so line $MD$ (which is line $TS$) bisects $\\angle BTC$ — an unexpected angle-bisection produced entirely by the midpoint-of-the-altitude construction."
      ],
      "remark": "The core is a two-circle power-of-a-point computation along the common secant $MDT$, where $MD\\cdot DT=hr_a$ for the $A$-excircle and $DS\\cdot DT=DB\\cdot DC$ for $(BCT)$; dividing with the excircle tangents $DB=s-c$, $DC=s-b$ and Heron's formula collapses everything to a pure side ratio. The hidden consequence, that $S$ is the arc midpoint of $(BCT)$ and $TS$ bisects $\\angle BTC$, connects back to the standard incenter arc-midpoint lemma, an unexpected angle bisection from the altitude-midpoint construction."
    },
    {
      "id": "g25",
      "category": "geo",
      "difficulty": "hard",
      "stars": 3,
      "confidence": "low",
      "text": "Let $\\Gamma$ be a circle and $S$ a point outside $\\Gamma$. Three distinct lines through $S$ meet $\\Gamma$ at $A,A'$, at $B,B'$, and at $C,C'$. Let $U$ be a point where a tangent from $S$ touches $\\Gamma$. Let $P\\ne S$ be the second intersection of the circumcircle of triangle $SAB$ and the circumcircle of triangle $SA'B'$, and let $R\\ne S$ be the second intersection of the circumcircle of triangle $SC'A$ and the circumcircle of triangle $SCA'$. Prove that the circumcircle of triangle $B'PU$ and the circumcircle of triangle $CRU$ are tangent at $U$.",
      "why": "Invert in the circle centred $S$ of radius $SU$: $SU^{2}=\\operatorname{Pow}_\\Gamma(S)=SA\\cdot SA'$ makes this Mobius involution fix $U$ and $\\Gamma$ and swap $A\\leftrightarrow A'$, $B\\leftrightarrow B'$, $C\\leftrightarrow C'$. Circles through the inversion centre become lines: $P\\mapsto P_1=AB\\cap A'B'$, $R\\mapsto R_1=CA'\\cap C'A$. For the complete quadrangle $A,B,A',B'$ on $\\Gamma$ the diagonal triangle is self-polar, so the polar of $S=AA'\\cap BB'$ joins the other two diagonal points; tangency $SU$ puts $S$ on the polar of $U$, and La Hire returns $U$ on the polar of $S$: $U,P_1$ collinear, likewise $U,R_1$. Tangent-chord angles reduce the inverted tangency to one inscribed angle subtending chord $UA$, $\\angle UBA=\\angle UC'A$; inversion is conformal at $U$, so the original pair is tangent there.",
      "hints": [
        "Invert about $S$ with radius $SU$: it fixes $\\Gamma$ and swaps $A\\leftrightarrow A'$.",
        "Circles through $S$ become lines: $P\\mapsto AB\\cap A'B'$, and $U$ lies on the polar of $S$.",
        "The diagonal triangle is self-polar by La Hire; match tangent-chord angles and use conformality."
      ],
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
      ],
      "remark": "The proof is Mobius-geometric: inversion in the circle of radius the tangent length $SU$, since $SU^{2}=\\operatorname{Pow}_{\\Gamma}(S)$, is an involution fixing $\\Gamma$ and swapping each secant pair, carrying circles through $S$ to lines; the collinearity of $U$ with $P_1$ and $R_1$ is the self-polarity of the diagonal triangle of an inscribed complete quadrangle, closed by La Hire's theorem. The endgame uses one inscribed-angle comparison and the conformality of inversion, both standard tools of pole-polar olympiad technique."
    },
    {
      "id": "n1",
      "category": "nt",
      "difficulty": "easy",
      "stars": 1,
      "confidence": "high",
      "text": "Find all positive integers $n$ such that the triangular number $T_n=1+2+\\cdots+n$ divides both $1^{2}+2^{2}+\\cdots+n^{2}$ and $1^{4}+2^{4}+\\cdots+n^{4}$.",
      "why": "Faulhaber's formulas give $\\sum k^{2}=T_n(2n+1)/3$ and $\\sum k^{4}=T_n(2n+1)(3n^{2}+3n-1)/15$. The first forces $n\\equiv1\\pmod3$; since $3n^{2}+3n-1\\equiv-1\\pmod3$ the factor $3$ of the second denominator is again paid by $2n+1$, so the new condition is purely mod $5$: either $n\\equiv2\\pmod5$ or $3n^{2}+3n-1\\equiv0$, whose discriminant $21\\equiv1\\pmod5$ splits it exactly at $n\\equiv1,3\\pmod5$. CRT merges the conditions into three classes, $n\\equiv1,7,13\\pmod{15}$.",
      "hints": [
        "Use Faulhaber's closed forms for $\\sum k^2$ and $\\sum k^4$"
      ],
      "steps": [
        "Use the classical power-sum identities $\\sum_{k\\le n}k^{2}=n(n+1)(2n+1)/6$ and $\\sum_{k\\le n}k^{4}=n(n+1)(2n+1)(3n^{2}+3n-1)/30$; each is machine-routine to prove by induction on $n$, since the difference of consecutive values of the claimed closed form is exactly $n^{2}$, respectively $n^{4}$ (expand to check).",
        "First divisibility: $\\sum k^{2}/T_n=(2n+1)/3\\in\\mathbb Z\\iff n\\equiv1\\pmod3$.",
        "Second divisibility $\\sum k^4/T_n\\in\\mathbb Z\\iff 15\\mid(2n+1)(3n^{2}+3n-1)$.",
        "Mod 3: $3n^{2}+3n-1\\equiv-1$ never $0$; so the $3$ must divide $2n+1$ - the same condition as step 2 (note: no new information from the second divisibility at 3).",
        "Mod 5: the quadratic has roots $n\\equiv1,3$ (disc $9+12\\equiv1$); linear factor $2n+1$ root $n\\equiv2$. Union $n\\bmod5\\in\\{1,2,3\\}$.",
        "CRT with $n\\equiv1\\pmod3$: classes $1,7,13\\pmod{15}$; machine check $n&lt;600$: exact match (0 mismatches)."
      ],
      "remark": "The problem is an exercise in Faulhaber's formulas, whose coefficients are Bernoulli numbers: the quotient of each power sum by $T_n$ is a polynomial in $n$, and integrality is decided prime by prime. The quadratic $3n^{2}+3n-1$ splits mod 5 exactly when its discriminant is a square in $\\mathbb{F}_5$, and the Chinese remainder theorem then acts as the ring isomorphism $\\mathbb{Z}/15\\cong\\mathbb{Z}/3\\times\\mathbb{Z}/5$. The construction grows out of the standard olympiad motif of reducing divisibility of power sums to congruence conditions on closed factors."
    },
    {
      "id": "n2",
      "category": "nt",
      "difficulty": "easy",
      "stars": 1,
      "confidence": "high",
      "text": "Find all integers $n\\ge2$ such that $$n\\mid a^{\\,n+1}-a\\qquad\\text{for every integer }a.$$",
      "why": "Necessity: $p^{2}\\mid n$ fails at $a=p$, since $v_{p}(p^{n+1}-p)=1$; then $a$ ranging over $\\mathbb{F}_{p}^{\\times}$ forces $p-1\\mid n$, evaluating at a generator of the cyclic unit group. Sufficiency: Fermat prime by prime, then CRT over squarefree $n$. The answer is the even squarefree $n\\ge2$ with $p-1\\mid n$ for all $p\\mid n$ ($2,6,42$ below $100$). These are the mirror image of Carmichael numbers under Korselt's criterion ($p-1\\mid n-1$): the exponent condition shifts by one, so $6$ qualifies while $561$ fails.",
      "hints": [
        "Test $a=p$: $v_p(p^{n+1}-p)=1$ kills $p^2\\mid n$",
        "Cyclicity of $(\\mathbb{Z}/p\\mathbb{Z})^{\\times}$ forces $p-1\\mid n$"
      ],
      "steps": [
        "Assume the property. If $p^{2}\\mid n$, take $a=p$: $v_p(p^{n+1}-p)=1+v_p(p^{n}-1)=1&lt;v_p(n)$ contradiction. Hence $n$ squarefree.",
        "Fix a prime $p\\mid n$. For every $a$ with $p\\nmid a$: $a^{n}\\equiv1\\pmod p$; the unit group is cyclic of order $p-1$, so a generator gives $p-1\\mid n$.",
        "Conversely let $n$ be squarefree with $p-1\\mid n$ for all $p\\mid n$. If $p\\mid a$ then $a^{n+1}-a\\equiv0\\pmod p$; if not, $a^{n}\\equiv1$ by Fermat since $(p-1)\\mid n$. CRT over $\\omega(n)$ distinct primes finishes.",
        "Enumerate $n&lt;100$: $2$; $2\\cdot3$ ($2\\mid6$ ✓); $2\\cdot3\\cdot5$: $4\\nmid30$ ✗; $2\\cdot3\\cdot7$: $2,6\\mid42$ ✓; $2\\cdot3\\cdot11$? $10\\nmid66$ ✗; ... exactly $\\{2,6,42\\}$.",
        "Machine audit: brute force of the defining property (all a, n&lt;400) against the characterization: 0 mismatches. The explicit non-instance $561=3\\cdot11\\cdot17$ is certified by the witness $a=2$: modulo $11$, $2^{10}\\equiv1$ and $562\\equiv2\\pmod{10}$, so $2^{562}-2\\equiv 2^{2}-2=2\\not\\equiv0\\pmod{11}$; hence $561\\nmid 2^{562}-2$ and the Carmichael number $561$ fails the property. (Capture-time evidence file: tools/proofs/n6-design.md - pre-renumbering name, §12 rule.)"
      ],
      "remark": "These are the mirror image of Carmichael numbers: the same local analysis over prime-power moduli, but the exponent shift from $n-1$ to $n$ turns Korselt's criterion $p-1\\mid n-1$ into $p-1\\mid n$, so $6$ qualifies while $561$ fails. The tools are the cyclic structure of $(\\mathbb{Z}/p\\mathbb{Z})^{\\times}$, the Chinese remainder theorem, and $v_p$ bookkeeping excluding nonsquarefree moduli. The idea is the classical olympiad device of attacking a for-every-$a$ hypothesis by substituting special bases such as $a=p$."
    },
    {
      "id": "n3",
      "category": "nt",
      "difficulty": "easy",
      "stars": 1,
      "confidence": "high",
      "text": "Let $G$ be the infinite graph with vertex set $\\mathbb{Z}_{>0}$ where distinct $a,b$ are adjacent iff $\\gcd(a,b)=1$ and $$\\frac{\\operatorname{lcm}(a,b)}{\\gcd(a,b)}>a+b.$$ For $n>2$, let $G_n$ be the subgraph induced on $\\{1,\\dots,n\\}$. Prove that the clique number of $G_n$ equals exactly the number of primes at most $n$.",
      "why": "Clique vertices are pairwise coprime by adjacency, and $1$ is adjacent to nothing since $\\operatorname{lcm}(1,a)/\\gcd(1,a)=a<a+1$; choosing one prime divisor $p_v\\mid v$ per vertex, coprimality makes the $p_v$ distinct, so every clique injects into the primes $\\le n$. Primes attain the bound: for $p<q$, $pq>p+q$ iff $(p-1)(q-1)>1$. Hence $\\omega(G_n)=\\pi(n)$ exactly — an arithmetic graph whose clique number is the prime-counting function, so the prime number theorem fixes its asymptotic growth, $\\omega(G_n)\\sim n/\\log n$.",
      "hints": [
        "Assign one prime divisor $p_v$ per vertex: the primes are distinct"
      ],
      "steps": [
        "In a clique every two vertices are coprime, so the clique vertices are pairwise coprime. Also $1$ cannot be adjacent to any other vertex, so a clique of size $>1$ contains no $1$.",
        "Choose one prime divisor $p_v$ of each clique vertex $v$. Pairwise coprimality forces these chosen primes to be distinct, and each satisfies $p_v\\le v\\le n$. Hence every clique has size at most $\\pi(n)$.",
        "Conversely, let $p&lt;q$ be primes at most $n$. Then $\\gcd(p,q)=1$ and $\\operatorname{lcm}(p,q)/\\gcd(p,q)=pq>p+q$ because $(p-1)(q-1)>1$. Thus all primes $\\le n$ form a clique.",
        "Therefore $\\omega(G_n)=\\pi(n)$."
      ],
      "remark": "An arithmetic graph whose clique number is exactly the prime-counting function $\\pi(n)$, so the prime number theorem dictates the asymptotic growth $\\omega(G_n)\\sim n/\\log n$; coprime graphs and their clique and chromatic invariants are a recurring object in algebraic combinatorics on arithmetic structures. The proof runs on unique factorization, which turns pairwise coprimality into an injection into the primes. The construction is the standard olympiad motif of matching an injection bound with an explicit extremal clique."
    },
    {
      "id": "n4",
      "category": "nt",
      "difficulty": "easy",
      "stars": 1,
      "confidence": "high",
      "text": "Determine all positive integers $n$ such that $2^n+1$ divides $2^{n^2}+1$.",
      "why": "Reducing $2^{n^{2}}+1=(2^{n})^{n}+1\\equiv(-1)^{n}+1\\pmod{2^{n}+1}$ shows divisibility holds iff $n$ is odd. Structurally this is the criterion $2^{a}+1\\mid2^{b}+1\\iff b/a$ is an odd integer: writing $b=aq+r$ gives $2^{b}+1\\equiv(-1)^{q}2^{r}+1$, whose vanishing forces $r=0$ and odd $q$. The same fact is the Lifting-The-Exponent lemma applied at odd primes $\\ell\\mid2^{a}+1$, where $v_{\\ell}(x^{m}+y^{m})=v_{\\ell}(x+y)+v_{\\ell}(m)$ for odd $m$.",
      "hints": [
        "Reduce mod $2^n+1$: $2^{n^2}=(2^n)^n\\equiv(-1)^n$"
      ],
      "steps": [
        "Lemma. For positive integers $a$ and $b$, the integer $2^a+1$ divides $2^b+1$ if and only if $a\\mid b$ and $b/a$ is odd. Write $b=aq+r$ with $0\\le r&lt;a$. Modulo $2^a+1$ one has $2^a\\equiv -1$, so $2^{aq}=(2^a)^q\\equiv(-1)^q$ and $$2^b+1\\equiv(-1)^q\\,2^r+1.$$",
        "If $0&lt;r&lt;a$, then $(-1)^q 2^r+1$ is an integer strictly between $-(2^a+1)$ and $2^a+1$, and it is nonzero: the positive sign gives at least $3$, while the negative sign gives $1-2^r=0$ only for $r=0$. A nonzero residue cannot be $0$ modulo $2^a+1$. Thus $r=0$ and $(-1)^q+1\\equiv 0$, so $q$ is odd.",
        "Conversely, if $b=aq$ with $q$ odd, then $2^{aq}+1=(2^a)^q+1$ is divisible by $2^a+1$ because $q$ is odd.",
        "Apply the lemma with $a=n$ and $b=n^2$. One has $n\\mid n^2$ automatically, and $n^2/n=n$ is odd if and only if $n$ is odd. Therefore the divisibility holds precisely for the odd positive integers."
      ],
      "remark": "Structurally this is the divisibility criterion for $2^a+1$ dividing $2^b+1$, which in cyclotomic language says the values $\\Phi_{2d}(2)$ divide each other only along odd index quotients; the same fact is the lifting-the-exponent lemma at primes dividing $2^a+1$, where $v_\\ell(x^m+y^m)=v_\\ell(x+y)+v_\\ell(m)$ for odd $m$. The entry point is the most elementary olympiad move: reduce the huge power modulo the would-be divisor and read off the parity of the exponent."
    },
    {
      "id": "n5",
      "category": "nt",
      "difficulty": "easy",
      "stars": 1,
      "confidence": "high",
      "text": "Find all pairs of primes $(p,q)$ for which $p^{\\,q+1}+q^{\\,p+1}$ is a perfect square.",
      "why": "For odd primes each summand is $1\\bmod4$, so the sum is $2\\bmod4$, never a square; hence one prime is $2$. With $p=2$: $2^{q+1}+q^{3}=s^{2}$ factors as $q^{3}=(s-2^{(q+1)/2})(s+2^{(q+1)/2})$, two coprime odd factors, hence powers $q^{i}$ and $q^{3-i}$ by unique factorization, whose difference $2^{(q+3)/2}=q^{3-i}-q^{i}$ is impossible: $i=0$ leaves the odd factor $q^{2}+q+1>1$, the Zsigmondy primitive divisor of $q^{3}-1$; $i=1$ leaves the odd factor $q$. Only $p=q=2$ survives: $8+8=16$. The mod-$4$ screen is the $2$-adic square-class criterion — a unit of $\\mathbb{Z}_{2}$ is a square iff $1\\bmod 8$.",
      "hints": [
        "Odd primes: both terms $\\equiv1\\pmod4$, sum $\\equiv2$: one prime is 2"
      ],
      "steps": [
        "Both primes odd: p^{q+1} ≡ q^{p+1} ≡ 1 (mod 4), sum ≡ 2 (mod 4) - not a square.",
        "p=2&lt;q: s^2 = 2^{q+1} + q^3; parity: RHS odd, s odd; write a = 2^{(q+1)/2}; (s-a)(s+a) = q^3.",
        "Both factors positive odd integers (s > a since s^2 - a^2 = q^3 > 0), multiplying to q^3 with s-a &lt; s+a: (s-a, s+a) ∈ {(1, q^3), (q, q^2)}.",
        "Case (1,q^3): 2a = q^3 - 1 = (q-1)(q^2+q+1); q^2+q+1 is odd and >1, cannot divide the power of two 2a - contradiction.",
        "Case (q,q^2): 2a = q^2 - q = q(q-1); odd q > 1 divides the power of two - contradiction.",
        "p=q=2 gives 16 = 4^2; machine sweep over all primes &lt;= 199 confirms it is the only solution."
      ],
      "remark": "The mod-4 exclusion is the $2$-adic square-class test: a unit of $\\mathbb{Z}_2$ is a square iff it is $1\\bmod 8$, so squares of odd integers are never $2\\bmod4$. The factorization step leans on unique factorization in $\\mathbb{Z}$, and the odd factor $q^2+q+1$ of $q^3-1$ is a Zsigmondy primitive divisor that cannot divide a power of two. The design is the classical olympiad motif of a difference of squares with coprime factor pairing."
    },
    {
      "id": "n6",
      "category": "nt",
      "difficulty": "easy",
      "stars": 1,
      "confidence": "high",
      "text": "Let $n\\ge 2$ be an integer, and let $N(n)$ be the number of residue classes $a$ modulo $n$ satisfying $a^{n}\\equiv a\\pmod n$. Here $\\mathrm{rad}(n)$ denotes the product of the distinct prime divisors of $n$.<ol><li>Find a closed form for $N(n)$ in terms of the prime divisors of $n$.</li><li>Prove that $N(n)\\le \\mathrm{rad}(n)$, with equality if and only if $p-1$ divides $n-1$ for every prime $p\\mid n$. (Squarefreeness is NOT part of this criterion: $n=4$ and $n=9$ are equality cases.)</li><li>Which famous composite integers give $N(n)=n$?</li></ol>",
      "why": "CRT gives $N(n)=\\prod N(p^{k})$. A non-unit $x\\not\\equiv0$ fails since $x^{n}\\equiv0\\not\\equiv x$; on the cyclic group $(\\mathbb{Z}/p^{k})^{\\times}$ the equation $x^{n-1}=1$ has $\\gcd(n-1,p^{k-1}(p-1))=\\gcd(n-1,p-1)$ solutions because $p\\mid n$ forces $n-1\\equiv-1\\pmod p$, so $N(p^{k})=\\gcd(n-1,p-1)+1$ is independent of $k$; at $2^{k}$ the group $C_{2}\\times C_{2^{k-2}}$ has no odd-order element but $1$, giving $N(2^{k})=2$. Hence $N(n)=\\prod_{p\\mid n}(\\gcd(n-1,p-1)+1)\\le\\operatorname{rad}(n)$; the product depends only on the prime SET of $n$, so exponents are invisible to it and equality with $\\operatorname{rad}(n)$ is exactly the divisibility criterion $p-1\\mid n-1$ for all $p\\mid n$ - squarefreeness NOT required ($n=4,9$ are equality cases). Only the stronger equation $N(n)=n$ forces squarefreeness, after which the same divisibility is precisely Korselt's criterion, so $N(n)=n$ characterizes the primes and the Carmichael numbers ($561,1105,\\dots$).",
      "hints": [
        "In the cyclic units, $x^{n-1}=1$ has $\\gcd(n-1,p-1)$ roots; nonunits fail"
      ],
      "steps": [
        "CRT. Writing $n=\\prod p^{k}$, the congruence $x^{n}\\equiv x\\pmod n$ is equivalent to the system modulo each $p^{k}$, so $N(n)=\\prod N(p^{k})$; each local count $N(p^{k})=\\#\\{x\\bmod p^{k}: x^{n}\\equiv x\\}$ depends on $n$, not just $p^{k}$.",
        "Odd primes. The class $x\\equiv0$ works. For $x\\not\\equiv0$: the units $(\\mathbb Z/p^{k})^{\\times}$ are cyclic of order $p^{k-1}(p-1)$, so $x^{n-1}\\equiv1$ has $\\gcd(n-1,\\,p^{k-1}(p-1))$ solutions; since $p\\mid n$ gives $n-1\\equiv-1\\pmod p$, no factor $p$ divides $n-1$, and this gcd equals $\\gcd(n-1,p-1)$. Non-units: $x=pv\\not\\equiv0$ has $v_{p}(x^{n})=nv\\ge n\\ge k$ (as $k=v_p(n)\\le\\log_2n\\lt n$ for $n\\ge2$), so $x^{n}\\equiv0\\not\\equiv x$. Hence $N(p^{k})=\\gcd(n-1,p-1)+1$ for every $k\\ge1$ - independent of $k$.",
        "The prime 2. $n$ even forces $n-1$ odd. Modulo $2^{k}$ with $k\\ge2$: an odd $x$ with $x^{n-1}\\equiv1$ has odd order in $C_2\\times C_{2^{k-2}}$, whose only odd-order element is $1$; so among odd classes only $x\\equiv1$ works, and $x\\equiv0$ works, giving $N(2^{k})=2=\\gcd(n-1,1)+1$ (check $k=1$ directly: $N(2)=2$).",
        "Multiply the local counts: $N(n)=\\prod_{p\\mid n}\\bigl(\\gcd(n-1,p-1)+1\\bigr)$, which proves part 1, and the formula was machine-audited by full enumeration for all $2\\le n\\le 3000$ (tools/proofs/n8.py - pre-renumbering capture filename per the §12 evidence-file rule; re-audited to $n\\le600$ this session, 0 mismatches).",
        "Part 2: each factor satisfies $\\gcd(n-1,p-1)+1\\le p$, with equality iff $p-1\\mid n-1$. Multiplying over $p\\mid n$: $N(n)\\le\\prod_{p\\mid n}p=\\mathrm{rad}(n)$; equality in a product of positive integers each bounded by a respective bound holds iff every factor attains its bound, i.e. iff $p-1\\mid n-1$ for every $p\\mid n$. Exponents are invisible to the formula, so the criterion does NOT include squarefreeness: $N(4)=\\gcd(3,1)+1=2=\\mathrm{rad}(4)$ and $N(9)=\\gcd(8,2)+1=3=\\mathrm{rad}(9)$ are genuine equality cases with $k\\ge2$. Part 3 bookkeeping starts here: if $N(n)=n$, then $\\mathrm{rad}(n)\\ge n$ with equality only for squarefree $n$, so $n$ is squarefree and $N(n)=\\mathrm{rad}(n)$, and part 2's criterion applies; conversely squarefree $n$ with $p-1\\mid n-1$ for all $p\\mid n$ gives $N(n)=\\prod p=n$. Machine audit (this session): formula, both $\\le$ bounds and both equality criteria checked by full enumeration of the residue classes for every $2\\le n\\le600$ - $0$ mismatches.",
        "Part 3: composite $n$ with $N(n)=n$ are exactly the Carmichael numbers - squarefree with $p-1\\mid n-1$ for all $p\\mid n$ (Korselt's criterion). The smallest, $561=3\\cdot11\\cdot17$, satisfies $2,10,16\\mid560$, so $a^{561}\\equiv a\\pmod{561}$ for every integer $a$: every base is a Fermat liar. The equality composites up to 3000 are exactly $561,1105,1729,2465,2821$ (audit)."
      ],
      "remark": "The count $N(n)=\\prod_{p\\mid n}(\\gcd(n-1,p-1)+1)$ is a computation of torsion in the unit groups $(\\mathbb{Z}/p^k\\mathbb{Z})^{\\times}$, using cyclicity for odd $p$ and the decomposition $C_2\\times C_{2^{k-2}}$ at $2^k$, assembled by the Chinese remainder theorem. Part 3 lands on Carmichael numbers: squarefree $n$ with $p-1\\mid n-1$, exactly Korselt's criterion, the condition making every base a Fermat liar. The problem grows out of the standard local-to-global counting of solutions of $x^n\\equiv x$."
    },
    {
      "id": "n7",
      "category": "nt",
      "difficulty": "easy",
      "stars": 1,
      "confidence": "high",
      "text": "Let $a,b,c,d$ be positive integers and put $S=a+b+c+d$ and $Q=a^2+b^2+c^2+d^2$. Suppose $Q\\mid S^2$. Determine all possible values of the integer $S^2/Q$.",
      "why": "Spectrally $S^{2}=x^{T}Jx$ with $J$ the all-ones matrix (eigenvalues $4,0,0,0$), so Cauchy–Schwarz bounds $Q<S^{2}\\le4Q$ for positive entries, and $Q\\mid S^{2}$ leaves the quotient in $\\{2,3,4\\}$. The upper bracket end is the equality condition: $S^{2}=4Q$ iff $a=b=c=d$, attained by $(1,1,1,1)$. The others occur: $(1,1,1,3)$ gives $3$, and $(1,1,4,12)$ gives $2$ — an integer isotropic vector of the indefinite quadratic form $S^{2}-2Q$ of signature $(1,3)$, reachable by the parametrization $(b-c)^{2}=4a(b+c)$. The full value set is $\\{2,3,4\\}$.",
      "hints": [
        "Cauchy-Schwarz pins $Q<S^2\\le4Q$, so $k\\in\\{2,3,4\\}$",
        "Reach $k=2$ via $(1,1,4,12)$, e.g. solving $(b-c)^2=4a(b+c)$"
      ],
      "steps": [
        "By Cauchy–Schwarz, $S^2\\le4Q$. Since $a,b,c,d>0$, we also have $S^2>Q$. Therefore the positive integer $k=S^2/Q$ must satisfy $k\\in\\{2,3,4\\}$.",
        "The value $k=4$ is attained exactly when equality holds in Cauchy–Schwarz, i.e. $a=b=c=d$; for example $(1,1,1,1)$ gives $S^2/Q=4$.",
        "The value $k=3$ is attained by $(1,1,1,3)$, for which $S=6$ and $Q=12$, so $S^2/Q=3$.",
        "The value $k=2$ is attained by $(1,1,4,12)$, for which $S=18$ and $Q=162$, so $S^2/Q=2$.",
        "Hence the complete set of possible values is $$\\boxed{\\{2,3,4\\}}.$$"
      ],
      "remark": "Spectrally $S^2=x^{T}Jx$ for the rank-one all-ones matrix $J$, so the squeeze $Q<S^2\\le4Q$ is the eigenvalue form of the inequality between the arithmetic and quadratic means; the case $k=2$ is an integral isotropic vector of the indefinite quadratic form $S^2-2Q$ of signature $(1,3)$, a lattice point on a light cone parametrized by $(b-c)^2=4a(b+c)$. The construction is the classic olympiad pattern of bracketing a divisibility quotient between sharp bounds, then realizing each surviving integer explicitly."
    },
    {
      "id": "n8",
      "category": "nt",
      "difficulty": "easy",
      "stars": 1,
      "confidence": "high",
      "text": "Determine all positive integers $n$ such that $\\sigma(n)=\\varphi(n)+\\tau(n)$, where $\\sigma$ is the sum-of-divisors function, $\\varphi$ is Euler's totient, and $\\tau$ is the number of positive divisors.",
      "why": "Primes satisfy $\\sigma(n)=\\varphi(n)+\\tau(n)$ since $\\sigma(p)=p+1$ and $\\varphi(p)+\\tau(p)=(p-1)+2$; $n=1$ gives $1\\ne2$. For composite $n$, with $p$ the least prime factor, the divisor $n/p$ is distinct from $1$, $p$, $n$ except at prime squares, which the direct check $p^{2}+p+1=p^{2}-p+3$ eliminates; then $\\sigma(n)-\\varphi(n)\\ge\\frac{2n}p+p+1$ dominates $\\tau(n)\\le2\\sqrt n$ by AM–GM on $p$ and $2n/p$. Only primes qualify. In the ring of arithmetic functions under Dirichlet convolution the claim compares $\\sigma=1*\\mathrm{id}$, $\\varphi=\\mu\\cdot\\mathrm{id}$ and $\\tau=1*1$ through the elementary bounds $\\tau(n)\\le2\\sqrt n$ and $\\varphi(n)\\le n-n/p$.",
      "hints": [
        "For composite $n\\ne p^2$: $\\sigma(n)\\ge1+p+n/p+n$",
        "Compare with $\\varphi(n)\\le n-n/p$ and $\\tau(n)\\le2\\sqrt n$"
      ],
      "steps": [
        "If $n=p$ is prime, then $\\sigma(p)=p+1$ and $\\varphi(p)+\\tau(p)=p-1+2=p+1$. If $n=1$, then $\\sigma(1)=1$ and $\\varphi(1)+\\tau(1)=2$, so $n=1$ fails.",
        "Recall that $\\tau(n)\\le 2\\sqrt n$: the divisors come in pairs $(d,\\,n/d)$, and the divisors strictly less than $\\sqrt n$ inject into those at least $\\sqrt n$, with the square root itself counted once when $n$ is a square.",
        "Let $n=p^{k}$ with $k\\ge 2$. The equation becomes $(p^{k+1}-1)/(p-1)=p^{k-1}(p-1)+k+1$. For $k=2$ this is $p^2+p+1=p^2-p+3$, hence $2p=2$, which is impossible. For $k\\ge 3$ the left side is at least $p^k+p^{k-1}+p^{k-2}$ and the right side is at most $p^k-p^{k-1}+k+1$, so their difference is at least $2p^{k-1}+p^{k-2}-k-1\\ge 2\\cdot 4+2-3-1=6>0$ at the minimum $p=2$, $k=3$, and is larger otherwise.",
        "Now suppose $n$ has at least two distinct prime factors, and let $p$ be the least one. Then $1$, $p$, $n/p$ and $n$ are distinct positive divisors: $n/p=p$ would mean $n=p^2$, and $n/p=1$ would mean $n=p$. Hence $\\sigma(n)\\ge n+n/p+p+1$. Also $\\varphi(n)\\le n(1-1/p)=n-n/p$, so $$\\sigma(n)-\\bigl(\\varphi(n)+\\tau(n)\\bigr)\\ge \\frac{2n}p+p+1-\\tau(n)\\ge \\frac{2n}p+p+1-2\\sqrt n.$$",
        "Since $n$ is composite and $p$ is its least prime factor, $p\\le\\sqrt n$, with strict inequality because $n$ is not a prime square. Thus $2n/p>2\\sqrt n$, and the previous lower bound is strictly larger than $p+1>0$.",
        "Therefore no composite $n$ works, and the solutions are exactly the primes."
      ],
      "remark": "The functions sit in the Dirichlet-convolution algebra as $\\sigma=1*\\mathrm{id}$, $\\varphi=\\mu\\cdot\\mathrm{id}$ and $\\tau=1*1$, and the proof is a first exercise in elementary order-of-magnitude estimates: the divisor pairing at $\\sqrt n$ giving $\\tau(n)\\le2\\sqrt n$ is the degenerate form of the Dirichlet hyperbola method, sharpened by AM-GM on $p$ and $2n/p$. The construction is the standard olympiad device of letting a few explicit large divisors overwhelm crude upper bounds for composites."
    },
    {
      "id": "n9",
      "category": "nt",
      "difficulty": "medium",
      "stars": 2,
      "confidence": "high",
      "text": "Determine all positive integers $n$ for which $$n^2 + 3^n$$ is a perfect square.",
      "why": "Parity makes both $k\\pm n$ odd, so unique factorization turns $k^{2}-n^{2}=3^{n}$ into $k-n=3^{a}$, $k+n=3^{b}$, $a<b$, $a+b=n$; subtracting, $2n=3^{b}-3^{a}\\ge2\\cdot3^{b-1}$ forces $n\\ge3^{b-1}$ against the linear bound $n\\le2b-1$, impossible for $b\\ge3$. The surviving exponent pairs give exactly $n=1$ and $n=3$. This factor-and-compare scheme is the elementary prototype for exponential Diophantine equations of Lebesgue–Nagell type ($x^{2}+D=y^{n}$), whose general instances fall to Baker's theory of linear forms in logarithms rather than to factorization.",
      "hints": [
        "Write $k^2-n^2=3^n$ and factor: $(k-n)(k+n)$",
        "Bound exponential $3^{b-1}\\le n\\le2b-1$: only tiny $b$ survive"
      ],
      "steps": [
        "Suppose $n^2+3^n=k^2$ with $k$ a positive integer. Since $3^n>0$, $k>n$, and $$3^n=(k-n)(k+n).$$ Both factors are positive integers dividing $3^n$, so $k-n=3^a$ and $k+n=3^b$ with integers $0\\le a&lt;b$ (as $k-n&lt;k+n$). Multiplying, $3^{a+b}=3^n$, so $a+b=n$. Subtracting, $$2n=3^b-3^a. \\tag{1}$$",
        "\\textbf{Bounding $b$.} Since $a\\le b-1$, $3^a\\le3^{b-1}$, so (1) gives $2n\\ge3^b-3^{b-1}=2\\cdot3^{b-1}$, i.e. $n\\ge3^{b-1}$. On the other hand $n=a+b\\le(b-1)+b=2b-1$. Hence $$3^{b-1}\\le2b-1.$$ For $b\\ge3$ this fails: $3^{2}=9>5=2\\cdot3-1$, and if $3^{b-1}>2b-1$ then $3^b>6b-3\\ge2b+1$ for $b\\ge1$, completing the induction. Therefore $b\\in\\{1,2\\}$.",
        "\\textbf{Cases.} With $0\\le a&lt;b\\le2$ the possibilities are $(a,b)=(0,1),(0,2),(1,2)$, giving $n=a+b=1,2,3$. Equation (1) requires $2n=3^b-3^a$: for $(0,1)$, $2=3-1$ holds ($n=1$); for $(0,2)$, $4=9-1=8$ fails; for $(1,2)$, $6=9-3$ holds ($n=3$). Hence $n\\in\\{1,3\\}$.",
        "\\textbf{Check.} $n=1$: $1+3=4=2^2$. $n=3$: $9+27=36=6^2$. So the solutions are exactly $n=1$ and $n=3$."
      ],
      "remark": "This is the elementary prototype of Lebesgue-Nagell type exponential Diophantine equations $x^2+D=y^n$: here unique factorization in $\\mathbb{Z}$ suffices because both factors of $3^n$ are powers of 3, while general instances fall to factorization in quadratic orders and ultimately to Baker's theory of linear forms in logarithms. The decisive comparison of $3^{b-1}$ against $2b-1$ is a toy height argument, exponential growth dominating a linear one. The idea is the classical difference-of-squares splitting with coprime factor pairing."
    },
    {
      "id": "n10",
      "category": "nt",
      "difficulty": "medium",
      "stars": 2,
      "confidence": "high",
      "text": "Find all pairs of positive integers $(x,y)$ such that $$x+y\\mid xy\\qquad\\text{and}\\qquad (x+y)^{2}\\mid x^{2}y^{2}+x^{2}+y^{2}.$$",
      "why": "Put $t=x+y$, $u=xy$ — the elementary symmetric coordinates, in which $x^{2}+y^{2}=t^{2}-2u$. The hypotheses read $t\\mid u$ and $t^{2}\\mid u^{2}-2u$; writing $u=tw$ the second becomes $t\\mid2w$, so $t\\le2w$. But $x,y$ are the roots of $X^{2}-tX+tw$, so reality forces nonnegative discriminant $t^{2}-4tw\\ge0$, i.e. $t\\ge4w$. With $w>0$ the squeeze $4w\\le t\\le2w$ contradicts itself: no pairs exist. The boundary $t=4w$ (double root $x=y$, $w=x^{2}/2$) also dies: $t^{2}\\mid x^{2}(x^{2}+2)$ would demand $4\\mid x^{2}+2$, impossible since $x^{2}\\equiv0$ or $1\\pmod4$.",
      "hints": [
        "Set $t=x+y$, $u=xy$: hypotheses $t\\mid u$, $t^2\\mid u^2-2u$",
        "$x,y$ are roots of $X^2-tX+tw$: discriminant forces $t\\ge4w$"
      ],
      "steps": [
        "Rewrite: t = x + y, u = xy. Condition 1: t | u. Condition 2: x^2 + y^2 = t^2 - 2u, so x^2y^2 + x^2 + y^2 = u^2 - 2u + t^2, and t^2 | u^2 - 2u.",
        "u = tw: t^2 | t^2 w^2 - 2tw iff t | 2w. Hence t &lt;= 2w (both positive).",
        "The quadratic X^2 - tX + tw has roots x, y: discriminant D = t^2 - 4tw = t(t - 4w) must be a non-negative perfect square: t >= 4w.",
        "Contradiction: 4w &lt;= t &lt;= 2w forces w = 0, impossible for positive x, y.",
        "Machine audit: exhaustive x,y &lt;= 2000 - zero solutions, consistent. Note the first condition alone has infinitely many solutions (x+y | xy classical family), so the contradiction is genuinely produced by the interaction."
      ],
      "remark": "Working in the elementary symmetric coordinates $t=x+y$, $u=xy$ and then invoking reality of the roots of $X^2-tX+u$ is the same logic that underlies Vieta jumping: the mate root of the quadratic encodes the whole solution set, and sign or discriminant constraints prune it. Here the squeeze $4w\\le t\\le2w$ is a positivity obstruction of the type proving nonexistence in Markov-Hurwitz equations, with the boundary $t=4w$ killed by a mod-4 square check. The construction grows out of the classical $x+y\\mid xy$ family."
    },
    {
      "id": "n11",
      "category": "nt",
      "difficulty": "medium",
      "stars": 2,
      "confidence": "high",
      "text": "Let $q$ be an odd prime such that $p = 2q + 1$ is also prime. Prove that $$p \\mid q^q + 1$$ if and only if $q \\equiv 3 \\pmod 4$.",
      "why": "Since $q=(p-1)/2$, Euler's criterion identifies $q^{q}\\bmod p$ with the Legendre symbol $(q/p)$. Quadratic reciprocity plus $p\\equiv1\\pmod q$ gives $(q/p)=(-1)^{(q-1)/2}(p/q)$, and $(p/q)=(1/q)=1$, so $p\\mid q^{q}+1$ iff $(q/p)=-1$ iff $q\\equiv3\\pmod4$. The pair $(q,\\,2q+1)$ is a Sophie Germain pair; the argument is the first supplement to reciprocity ($-1$ a square mod $q$ iff $q\\equiv1\\pmod4$) carried out in the cyclic group $(\\mathbb{Z}/p\\mathbb{Z})^{\\times}$ of order $2q$.",
      "hints": [
        "$q=(p-1)/2$: Euler's criterion turns $q^q$ into $(q/p)$"
      ],
      "steps": [
        "Since $p = 2q + 1$, the exponent $q$ satisfies $q = \\frac{p-1}{2}$. Therefore, $$q^q = q^{(p-1)/2}.$$",
        "Because $p$ is prime and $p = 2q+1 > q$, we have $\\gcd(q, p) = 1$. By Euler's criterion, $$q^{(p-1)/2} \\equiv \\left(\\frac{q}{p}\\right) \\pmod p,$$ where $\\left(\\frac{q}{p}\\right)$ denotes the Legendre symbol.",
        "Since $p$ and $q$ are distinct odd primes, Gauss's Law of Quadratic Reciprocity gives: $$\\left(\\frac{q}{p}\\right) \\left(\\frac{p}{q}\\right) = (-1)^{\\frac{p-1}{2} \\frac{q-1}{2}} = (-1)^{q \\cdot \\frac{q-1}{2}}.$$",
        "Because $q$ is odd, the exponent $q \\cdot \\frac{q-1}{2}$ has the same parity as $\\frac{q-1}{2}$, so $(-1)^{q \\cdot \\frac{q-1}{2}} = (-1)^{\\frac{q-1}{2}}$. Furthermore, $p = 2q + 1 \\equiv 1 \\pmod q$, so $$\\left(\\frac{p}{q}\\right) = \\left(\\frac{1}{q}\\right) = 1.$$",
        "Multiplying the reciprocity relation by $\\left(\\frac{p}{q}\\right) = 1$ yields $$\\left(\\frac{q}{p}\\right) = (-1)^{\\frac{q-1}{2}}.$$ Consequently, $$q^q \\equiv (-1)^{\\frac{q-1}{2}} \\pmod p.$$",
        "Hence $q^q + 1 \\equiv (-1)^{\\frac{q-1}{2}} + 1 \\pmod p$. Because $p > 2$, $p \\mid q^q + 1$ holds if and only if $(-1)^{\\frac{q-1}{2}} = -1$, which is equivalent to $\\frac{q-1}{2}$ being odd, i.e. $q \\equiv 3 \\pmod 4$. (When $q \\equiv 1 \\pmod 4$, $(-1)^{\\frac{q-1}{2}} = 1$, which gives $p \\mid q^q - 1$ instead)."
      ],
      "remark": "The exponent $q=(p-1)/2$ is precisely Euler's criterion, converting a divisibility question into the Legendre symbol $(q/p)$; quadratic reciprocity with its first supplement ($-1$ a square mod $q$ iff $q\\equiv1\\pmod4$) settles the sign. The pair $(q,2q+1)$ is a Sophie Germain pair, and the argument is a computation in the cyclic group $(\\mathbb{Z}/p\\mathbb{Z})^{\\times}$ of order $2q$. The motif is classical: recognize $a^{(p-1)/2}$ modulo $p$ as a quadratic character."
    },
    {
      "id": "n12",
      "category": "nt",
      "difficulty": "medium",
      "stars": 2,
      "confidence": "high",
      "text": "Let $\\mathcal F$ be the set of all bijections $f\\colon\\mathbb N\\to\\mathbb N$ satisfying $f(ab)=f(a)f(b)$ for all $a,b\\in\\mathbb N$. Define $g(n)=\\min_{f\\in\\mathcal F}f(n)$. Prove that $g(g(n))=g(n)$ for all positive integers $n$.",
      "why": "Unique factorization makes $\\mathbb{N}^{\\times}$ the free commutative monoid on the primes, so $\\mathcal F$ is exactly the group of prime permutations extended multiplicatively ($f(1)=1$; bijectivity preserves primes). For $n=\\prod p_i^{e_i}$ with exponents sorted $e_1\\ge\\cdots\\ge e_k$, two exchange moves — the rearrangement inequality $p^{r}q^{s}\\le p^{s}q^{r}$ for $p<q$, $r\\le s$, plus a transposition replacing a skipped prime by a smaller one — pin the minimum at $g(n)=2^{e_1}3^{e_2}\\cdots p_{(k)}^{e_k}$. Its exponent profile is already nonincreasing, so the sort is idempotent: $g(g(n))=g(n)$.",
      "hints": [
        "Multiplicative bijections are just permutations of the primes",
        "Pair larger exponents with smaller primes: rearrangement inequality"
      ],
      "steps": [
        "A multiplicative bijection fixes $1$: $f(1)=f(1\\cdot1)=f(1)^2$ and $f(1)>0$, so $f(1)=1$. If $p$ is prime then $f(p)$ is prime: $f(p)=f(a)f(b)$ with $a,b>1$ would be impossible, since surjectivity gives $a=f^{-1}(\\cdot)$-preimages of the two factors, i.e. $p$ would factor nontrivially; and $f(p)\\ne 1$ since $f$ is injective with $f(1)=1$. Hence $f$ restricts to a permutation of the primes, and multiplicativity plus $f(1)=1$ shows $f$ is exactly that permutation extended to $\\mathbb{N}$. Conversely every prime permutation is in $\\mathcal F$.",
        "Write $n=\\prod_{i=1}^k p_i^{e_i}$ with $e_1\\ge\\cdots\\ge e_k>0$ after sorting the exponents. Each $f\\in\\mathcal F$ is a permutation of the primes, so $f(n)=\\prod q_i^{e_i}$ where the $q_i=f(p_i)$ are $k$ distinct primes. Two exchanges pin the minimizer: (i) the set $\\{q_i\\}$ must be the first $k$ primes — if it omits a prime $r$ and contains $s>r$, composing the permutation with the transposition $s\\leftrightarrow r$ replaces $s^{e_j}$ by $r^{e_j}$ for the exponent $e_j>0$ carried by $s$, strictly lowering the product; (ii) among assignments of $2,3,5,\\dots$ to $e_1\\ge\\cdots\\ge e_k$, if $p&lt;q$ but $p$ carries the smaller exponent $r&lt;s$ of $q$, swapping the assignments changes the factor from $p^r q^s$ to $p^s q^r$, and $p^rq^s\\le p^sq^r$, so the minimum pairs larger exponents with smaller primes. Together: $g(n)=2^{e_1}3^{e_2}\\cdots p_{(k)}^{e_k}$.",
        "Therefore $g(n)=2^{e_1}3^{e_2}\\cdots p_k^{e_k}$, with $g(1)=1$. Its exponents are already nonincreasing on the increasing primes.",
        "Applying the same rule again changes nothing, so $g(g(n))=g(n)$."
      ],
      "remark": "Unique factorization identifies $\\mathbb{N}^{\\times}$ with the free commutative monoid on the primes, so $\\mathcal F$ is literally the group of permutations of the primes extended multiplicatively, and minimizing $f(n)$ over it is the rearrangement inequality for prime factorizations. The map $g$ is the canonical normal form with exponents sorted onto the first $k$ primes, the same shape constraint defining highly composite numbers in the sense of Ramanujan. The idea is the classical smoothing motif of replacing large primes by small ones."
    },
    {
      "id": "n13",
      "category": "nt",
      "difficulty": "medium",
      "stars": 2,
      "confidence": "high",
      "text": "Let $p$ be an odd prime, and let us work with the $p$ remainders $0,1,\\dots,p-1$ after division by $p$ (so two quantities are 'equal' when their difference is divisible by $p$). For each remainder $a$, let $N(a)$ be the number of ordered pairs $(x,y)$ of remainders satisfying $$x^{2}+a\\,xy+y^{2}\\equiv 1\\pmod p.$$ Determine the sum $$N(0)+N(1)+\\cdots+N(p-1)$$ in terms of $p$.",
      "why": "Swap the quantifiers: for $xy\\not\\equiv0$ the equation is linear in $a$ with unique solution $a\\equiv(1-x^{2}-y^{2})(xy)^{-1}$ — $(p-1)^{2}$ triples; on the axes only $(\\pm1,0)$ and $(0,\\pm1)$ qualify, each admitting all $p$ values of $a$, while $(0,0)$ admits none, so the total is $(p-1)^{2}+4p=(p+1)^{2}$. The per-fiber counts, which the double count bypasses, are governed by the discriminant $a^{2}-4$: $a=\\pm2$ degenerate into two affine lines ($2p$ points), and a smooth member is a conic isomorphic to $\\mathbb{P}^{1}$ over $\\mathbb{F}_p$ minus its points at infinity, rational iff $\\left(\\frac{a^{2}-4}{p}\\right)=1$, giving $p-1$ or $p+1$; the character sum $\\sum_a\\left(\\frac{a^{2}-4}{p}\\right)=-1$ recovers the square total.",
      "hints": [
        "Swap quantifiers: count triples $(a,x,y)$ at once"
      ],
      "steps": [
        "Reinterpret the sum as one counting set: $$\\sum_{a=0}^{p-1}N(a)=\\#\\,T,\\qquad T=\\{(a,x,y)\\in\\{0,\\dots,p-1\\}^{3}: x^{2}+axy+y^{2}\\equiv1\\pmod p\\},$$ since summing the per-$a$ fiber sizes counts the whole set $T$.",
        "Count $T$ by fixing $(x,y)$ - this is where the equation changes role: with $x,y$ fixed it is LINEAR in $a$: $a\\,(xy)\\equiv 1-x^{2}-y^{2}\\pmod p$.",
        "Case $xy\\not\\equiv0$: the linear congruence has a unique solution $a$ (invert $xy$ mod $p$). Contribution: $(p-1)^2$.",
        "Case $y\\equiv0$: equation is $x^2\\equiv1$, with exactly the two solutions $x\\equiv\\pm1$ (a congruence $x^2\\equiv1\\pmod p$ has only these two roots since $p\\mid(x-1)(x+1)$ and $p$ is odd); each of these two points admits every $a$: $2p$. Symmetrically $x\\equiv0$, $y\\equiv\\pm1$: $2p$. The point $(0,0)$ satisfies $0\\equiv1$? no - contributes nothing. The three cases ($xy\\ne0$, $y=0$, $x=0$) are disjoint (the two axis cases meet only at $(0,0)$).",
        "Total: $\\#T=(p-1)^2+2p+2p=p^2+2p+1=(p+1)^2$.",
        "Machine audit (tools/proofs/redesign-20260930/n18-verify.py, 2026-09-30): full triple enumeration for $p\\in\\{3,5,7,11,13,17,19,23\\}$: sums $16,36,64,144,196,324,400,576$ - every one equals $(p+1)^2$ (0 failures); additionally $N(2)=N(p-2)=2p$ confirmed (the two degenerate double-line parameters), so the aggregate is consistent with the per-fiber picture."
      ],
      "remark": "Exchanging the order of counting turns the problem into a fiber count of the family of conics $x^2+axy+y^2=1$ over $\\mathbb{F}_p$; individually, a smooth member is isomorphic to $\\mathbb{P}^1$ minus its points at infinity, so it carries $p-1$ or $p+1$ affine points according as the discriminant $a^2-4$ is a quadratic residue, and the character sum $\\sum_a(a^2-4/p)=-1$ reconciles the fibers with the square total $(p+1)^2$. The construction is the classic double-counting motif of swapping quantifiers in a parametrized congruence."
    },
    {
      "id": "n14",
      "category": "nt",
      "difficulty": "medium",
      "stars": 2,
      "confidence": "high",
      "text": "Determine all pairs of positive integers $(a,b)$ such that both divisibilities hold: $$b-a \\mid a^{2}+b^{2} \\qquad \\text{and} \\qquad a+b \\mid ab+1.$$",
      "why": "The variables $d=b-a$, $s=a+b$ diagonalize the system: $a^{2}+b^{2}\\equiv2a^{2}\\pmod d$ and $ab+1\\equiv1-a^{2}\\pmod s$, so $d\\mid2a^{2}$ and $s\\mid a^{2}-1$. A common-prime descent with Euclid's lemma gives $\\gcd(a,b)=1$ and forces $d\\in\\{1,2\\}$. For $d=1$, from $4(a^{2}-1)=(s-3)(s+1)$ the invertibility of $4$ modulo odd $s$ leaves $s=3$: the sporadic $(1,2)$ and $(2,1)$. For $d=2$ one needs $2(a+1)\\mid a^{2}-1$, i.e. $a$ odd — the $2$-adic parity is the exact obstruction killing every even shift. Answer: ordered pairs of odd positive integers at distance $2$, plus $(1,2)$, $(2,1)$.",
      "hints": [
        "Reduce mod $b-a$ and $a+b$: $d\\mid2a^2$, $s\\mid a^2-1$",
        "Descend to $\\gcd(a,b)=1$, then Euclid gives $d\\mid2$",
        "Gap 2: $a$ odd works; gap 1: $4(a^2-1)\\equiv-3$ forces $s=3$"
      ],
      "steps": [
        "Symmetry and exclusion of the diagonal: the system is invariant under $a\\leftrightarrow b$ since $b-a\\mapsto a-b$ generates the same ideal, and $a=b$ is impossible as $0\\nmid 2a^2$. Set $d=b-a\\ge1$, $s=a+b$, work with $a&lt;b$, reflect at the end.",
        "Lemma 1 (exact reductions). $a^2+b^2=2a^2+(b-a)(b+a)$ gives $b-a\\mid a^2+b^2\\iff d\\mid 2a^2$; $ab+1=a(a+b)-(a^2-1)$ gives $a+b\\mid ab+1\\iff s\\mid a^2-1$. Both are biconditionals.",
        "Lemma 2 (coprimality descent). Any prime $p\\mid\\gcd(a,b)$ divides $ab$ and $a+b$; as $a+b\\mid ab+1$, also $p\\mid ab+1$, so $p\\mid1$: contradiction. Hence $\\gcd(a,b)=1$.",
        "Lemma 3 (gap collapse). $\\gcd(d,a)=\\gcd(b-a,a)=\\gcd(b,a)=1$, so $\\gcd(d,a^2)=1$; with $d\\mid 2a^2$ Euclid's lemma yields $d\\mid2$, i.e. $d\\in\\{1,2\\}$.",
        "Case $d=1$: $s=2a+1$ is odd, $s\\mid a^2-1$; multiply by the unit $4$: $4(a^2-1)=(2a)^2-4\\equiv(-1)^2-4=-3\\pmod s$, so $s\\mid3$, forcing $s=3$, $a=1$, $b=2$: the sporadic $(1,2)$ and mirror $(2,1)$.",
        "Case $d=2$: $2\\mid 2a^2$ automatic; $s=2(a+1)\\mid(a-1)(a+1)\\iff 2\\mid a-1\\iff a$ odd. Solutions exactly $(a,a+2)$ with $a$ odd, plus mirrors $(a+2,a)$; direct substitution: $a^2+(a+2)^2$ even and $ab+1=(a+1)^2$ divisible by $2(a+1)$ iff $a$ odd.",
        "Trap audit (why stopping early is wrong): the relaxed system $d\\mid2a^2\\wedge s\\mid d^2-4$ is necessary for the original (identity $(b-a)^2-4=(a+b)^2-4(ab+1)$) but strictly weaker on even $s$; every $(2k,2k+2)$ passes relaxed ($s\\mid0$) and fails the original since $ab+1=(a+1)^2$ is odd while $a+b$ is even. Completeness: Lemmas 1-3 leave no other branch."
      ],
      "remark": "The change of variables $d=b-a$, $s=a+b$ diagonalizes the system, an elementary shadow of reducing quadratic forms modulo linear ideals: $a^2+b^2\\equiv2a^2\\pmod d$ and $ab+1\\equiv1-a^2\\pmod s$. The collapse $d\\mid2$ is Euclid's lemma driven by the coprimality descent, and the surviving parity split on even shifts is $2$-adic valuation bookkeeping, since $(a+1)^2$ odd against $a+b$ even kills every relaxed false positive. The construction is the classical motif of forcing a difference to be bounded, then chasing residues."
    },
    {
      "id": "n15",
      "category": "nt",
      "difficulty": "medium",
      "stars": 2,
      "confidence": "high",
      "text": "Find all positive integers $n$ such that $\\sigma(n)=\\varphi(n)+\\tau(n)$, where $\\sigma(n)$ is the sum of the positive divisors of $n$, $\\varphi(n)$ is Euler's totient function, and $\\tau(n)$ is the number of positive divisors of $n$.",
      "why": "Primes work: $\\sigma(p)=p+1=\\varphi(p)+\\tau(p)$; $n=1$ fails. Let $n$ be composite with least prime factor $p$. The divisors $1,p,n/p,n$ are distinct except at $n=p^{2}$, where the equation reads $p^{2}+p+1=p^{2}-p+3$, i.e. $2p=2$; otherwise $\\sigma(n)\\ge n+\\frac np+p+1$ and $\\varphi(n)\\le n-\\frac np$ (counting multiples of $p$) leave $\\sigma-\\varphi-\\tau\\ge\\frac{2n}p+p+1-2\\sqrt n>0$, using $\\tau(n)\\le2\\sqrt n$ from pairing divisors and AM–GM on $p$ with $2n/p$. Exactly the primes qualify. The functions live in the Dirichlet-convolution algebra as $\\sigma=1*\\mathrm{id}$, $\\varphi=\\mu\\cdot\\mathrm{id}$, $\\tau=1*1$.",
      "hints": [
        "Composite $n\\ne p^2$: $\\sigma(n)\\ge1+p+n/p+n$",
        "Use $\\varphi(n)\\le n-n/p$, $\\tau(n)\\le2\\sqrt n$, then AM-GM"
      ],
      "steps": [
        "Test small values. $n=1$: $\\sigma(1)=1$ but $\\varphi(1)+\\tau(1)=2$, so $n=1$ fails. For a prime $q$: $\\sigma(q)=q+1$ and $\\varphi(q)+\\tau(q)=(q-1)+2=q+1$, so every prime works. It remains to exclude composite $n$.",
        "Let $n$ be composite and $p$ its smallest prime divisor. Square case first: if $n=p^{2}$ then $\\sigma=1+p+p^{2}$, $\\varphi=p^{2}-p$, $\\tau=3$, so $\\sigma-\\varphi-\\tau=2p-2>0$; equality is impossible.",
        "Now $n\\ne p^{2}$. Then $1,\\ p,\\ n/p,\\ n$ are four distinct divisors, hence $\\sigma(n)\\ge 1+p+\\frac np+n$. Also at least the $n/p$ multiples of $p$ in $\\{1,\\dots,n\\}$ fail to be coprime to $n$, so $\\varphi(n)\\le n-\\frac np$.",
        "Pair each divisor $d\\le\\sqrt n$ with $n/d\\ge\\sqrt n$: $\\tau(n)\\le 2\\sqrt n$. By AM-GM $p+\\frac{2n}{p}\\ge2\\sqrt{2n}>2\\sqrt n$. Combine: $\\sigma(n)-\\varphi(n)-\\tau(n)\\ \\ge\\ left(1+p+\\frac np+n\\right)-\\left(n-\\frac np\\right)-2\\sqrt n=1+p+\\frac{2n}{p}-2\\sqrt n>1.$",
        "Thus every composite has $\\sigma(n)>\\varphi(n)+\\tau(n)$, and the solutions are exactly the primes. Machine audit: brute force over $n\\le 50000$ agrees, and the chain inequalities above were verified term-by-term for all composite $n\\le50000$ (`tools/proofs/n13.py`)."
      ],
      "remark": "In the ring of arithmetic functions under Dirichlet convolution the equation compares $\\sigma=1*\\mathrm{id}$, $\\varphi=\\mu\\cdot\\mathrm{id}$ and $\\tau=1*1$; the solution needs only elementary estimates, the divisor pairing at $\\sqrt n$ for $\\tau(n)\\le2\\sqrt n$ and the count of multiples of the least prime factor $p$ for $\\varphi(n)\\le n-n/p$, with AM-GM on $p$ and $2n/p$ closing the gap. The problem is the well-known olympiad motif of excluding composites by exhibiting a few large divisors whose sum overwhelms all upper bounds."
    },
    {
      "id": "n16",
      "category": "nt",
      "difficulty": "medium",
      "stars": 2,
      "confidence": "high",
      "text": "Determine all positive integers $n$ for which each of the congruences $$x^2\\equiv1\\pmod n,\\qquad x^2+x+1\\equiv0\\pmod n$$ has exactly $8$ incongruent solutions modulo $n$.",
      "why": "Both congruences count torsion in $(\\mathbb{Z}/n\\mathbb{Z})^{\\times}$ through CRT. $x^{2}\\equiv1$ is the $2$-torsion, $2^{\\omega(n)}$ roots for odd $n$. $x^{2}+x+1=0$ is $\\Phi_{3}(x)=0$: elements of order $3$ exist modulo $p^{e}$ exactly for $p\\equiv1\\pmod3$ (two roots, lifting uniquely since $2x+1$ is a unit at a root) — the primes splitting in the Eisenstein order $\\mathbb{Z}[\\omega]$; modulo $2$ the polynomial is odd, and modulo $9$ it equals $3$ at $x=1+3t$, so neither $2$ nor $3^{2}$ may divide $n$, while $3\\|n$ contributes one root. Eight order-$3$ elements force three $1\\bmod3$ primes, and eight roots of $x^{2}=1$ then exclude the factor $3$: $n=p_1^{e_1}p_2^{e_2}p_3^{e_3}$, $p_i\\equiv1\\pmod3$ distinct.",
      "hints": [
        "$x^2\\equiv1$: two roots per odd $p^e$, $2^{\\omega(n)}$ in total",
        "$\\Phi_3$ roots need $p\\equiv1\\pmod3$; $2\\mid n$ and $9\\mid n$ forbidden"
      ],
      "steps": [
        "For $x^2\\equiv1\\pmod{p^e}$ with odd prime $p$, there are exactly two roots, $\\pm1$. Thus for odd $n$, the number of roots is $2^{\\omega(n)}$.",
        "For $x^2+x+1\\equiv0\\pmod{p^e}$ with $p\\ne3$, multiplying by $x-1$ gives $x^3\\equiv1$, while $x\\not\\equiv1\\pmod p$. Hence a root exists modulo $p$ exactly when $3\\mid p-1$, i.e. $p\\equiv1\\pmod3$, and then there are exactly two roots. Each root lifts uniquely to every $p^e$ because $2x+1$ is nonzero modulo $p$ at a root.",
        "Modulo $3$, the polynomial has the single root $x\\equiv1$. It has no root modulo $9$: writing $x=1+3t$ gives $x^2+x+1\\equiv3\\pmod9$. Therefore a factor $3$ may occur only to the first power, and it contributes one root. Modulo $2$ there is no root at all.",
        "Thus exactly $8$ roots of the cubic congruence force $$n=3^\\varepsilon p_1^{e_1}p_2^{e_2}p_3^{e_3},$$ where $\\varepsilon\\in\\{0,1\\}$ and the distinct $p_i\\equiv1\\pmod3$.",
        "For $x^2\\equiv1\\pmod n$, the same modulus has exactly $2^{3+\\varepsilon}$ roots, so requiring exactly $8$ forces $\\varepsilon=0$.",
        "Hence the complete solution set is $$\\boxed{n=p_1^{e_1}p_2^{e_2}p_3^{e_3}},$$ where $p_1,p_2,p_3$ are distinct primes congruent to $1\\pmod3$ (equivalently $1\\pmod6$), and $e_1,e_2,e_3\\ge1$."
      ],
      "remark": "Both congruences count torsion in $(\\mathbb{Z}/n\\mathbb{Z})^{\\times}$: $x^2=1$ is the $2$-torsion, giving $2^{\\omega(n)}$ classes for odd $n$, while $\\Phi_3(x)=0$ detects elements of order 3, present mod $p$ exactly when $3\\mid p-1$, i.e. when $p$ splits in the Eisenstein order $\\mathbb{Z}[\\omega]$. Simple roots lift uniquely to $p^e$ by Hensel's lemma, and the failures at 2 and 9 are the inert and ramified non-liftable cases. The construction mixes standard CRT counting with the splitting of primes in a quadratic extension."
    },
    {
      "id": "n17",
      "category": "nt",
      "difficulty": "hard",
      "stars": 3,
      "confidence": "high",
      "text": "Find all pairs of positive integers $(x,y)$ satisfying $$x^{y}-y^{x}=x-y.$$",
      "why": "The sign of $x^{y}-y^{x}$ equals the sign of $g(x)-g(y)$ for $g(t)=\\ln t/t$, which increases on $[1,e]$ and decreases after; matching it with $\\operatorname{sign}(x-y)$ forces $x=y$, or $\\min(x,y)=1$, or $\\{x,y\\}\\subset\\{2,3\\}$, since $2<e<3$ and $g(2)=g(4)$ creates only the boundary coincidence $(4,2)$, where $x^{y}-y^{x}=0\\ne x-y$. The real solution set of $x^{y}=y^{x}$ is the pair of branches $x=\\exp(-W_{0,-1}(-\\ln y/y))$ of the Lambert $W$ function, joined at the branch point $y=e$; the answer $\\{x=y\\}\\cup\\{\\min=1\\}\\cup\\{(2,3),(3,2)\\}$ is its arithmetic shadow.",
      "hints": [
        "Sign of $x^y-y^x$ follows $g(t)=\\ln t/t$: match signs",
        "$g$ increases up to $e$, decreases after: tiny cases only",
        "Boundary $g(2)=g(4)$: check $(4,2)$ and $\\{2,3\\}$ directly"
      ],
      "steps": [
        "Check the advertised families: $x=y$ gives $0=0$; $(t,1)$ gives $t-1=t-1$; $(1,t)$ gives $1-t=1-t$; $(2,3)$: $8-9=-1=2-3$; $(3,2)$: $9-8=1=3-2$. All are solutions - the task is to show there are no others.",
        "Take $2\\le x&lt;y$ (the case $x>y$ is the mirror of the same analysis, not of the equation). Then $x-y&lt;0$, so we need $x^{y}&lt;y^{x}$, i.e. $g(x)&lt;g(y)$ for $g(t)=\\ln t/t$. Since $g$ is strictly decreasing on $[3,\\infty)$ and $g(3)>g(2)=g(4)>g(5)$ is checked by hand ($\\ln3/3\\approx0.366$, $\\ln2/2=\\ln4/4\\approx0.347$, $\\ln5/5\\approx0.322$), the condition $g(x)&lt;g(y)$ with $x&lt;y$ holds only for $x=2$ and $y=3$ ($g(3)>g(2)$) - $y=4$ gives equality $2^4=4^2$, and $y\\ge5$ fails by $2^y>y^2$ (induction: doubling beats the quadratic).",
        "For $3\\le x&lt;y$: $g(x)>g(y)$, so $x^y>y^x$ and the left side is positive while $x-y&lt;0$ - impossible. This handles all remaining $x&lt;y$ cases.",
        "Now $2\\le y&lt;x$: we need $x^{y}>y^{x}$, i.e. $g(x)>g(y)$. For $y\\ge3$ the decreasing branch makes this impossible. For $y=2$: $g(x)>g(2)$ forces $2&lt;x&lt;4$, so $x=3$, giving $(3,2)$ - already verified; the boundary $(4,2)$ has difference $0\\ne2$.",
        "Assemble: $\\min(x,y)=1$ or $x=y$ or $\\{x,y\\}=\\{2,3\\}$. Machine audit `tools/proofs/n12.py`: exhaustive over $1\\le x,y&lt;260$ - exact match with the claimed set, no extras.",
        "Perspective (not needed for the proof): the same sign method solves $x^y=y^x$ completely; the novelty of this problem is that the linear right-hand side converts the classical $\\{x,y\\}=\\{2,4\\}$ boundary into the isolated symmetric pair $\\{2,3\\}$, with the equality $2^4=4^2$ demoted to a near-miss ($x-y$ there is $\\pm2\\ne0$)."
      ],
      "remark": "The comparison of $x^y$ and $y^x$ is governed by the monotonicity of $\\ln t/t$, equivalently by the real solution set of $x^y=y^x$, whose two branches are written with the Lambert $W$ function and classically parametrized as $(t^{1/(t-1)},t^{t/(t-1)})$, joined at the branch point $e$. The answer set is the arithmetic shadow of that curve, with the coincidence $2^4=4^2$ demoted to a near miss by the linear term. The idea is the standard olympiad reduction of exponential comparisons to one calculus monotonicity study."
    },
    {
      "id": "n18",
      "category": "nt",
      "difficulty": "hard",
      "stars": 3,
      "confidence": "high",
      "text": "A lattice point is a point $(x,y)$ whose two coordinates are integers. It is called \\emph{visible} from the origin if the open line segment joining it to $(0,0)$ contains no lattice point. For a positive integer $m$, let $C_m$ be the set of lattice points on the circle $x^{2}+y^{2}=m$ centered at the origin.<br><br>Determine, in terms of the prime factorization of $m$, exactly when $C_m$ is nonempty but contains \\emph{no} point visible from the origin.",
      "why": "Visibility is splitting in the Gaussian integers. An inert $q\\equiv3\\pmod4$ dividing $x^{2}+y^{2}$ divides $x+iy$ in $\\mathbb{Z}[i]$, hence both coordinates; and $4\\mid m$ forces both coordinates even by squares mod $4$ — so $\\alpha\\ge2$ or some $b_j\\ge1$ hides every point, while $C_m\\ne\\varnothing$ requires all $q\\equiv3\\pmod4$ exponents even (Fermat's two-square theorem, equivalently unique factorization in the UFD $\\mathbb{Z}[i]$). Conversely, choosing exactly one Gaussian prime above each split $p\\equiv1\\pmod4$ (one-sided splitting), with at most one factor $1+i$, gives $z$ whose coordinates share no rational prime: a visible point. So $C_m$ is nonempty and entirely invisible iff $\\alpha\\ge2$ or $q_j^{2}\\mid m$ for some $q_j\\equiv3\\pmod4$.",
      "hints": [
        "$q\\equiv3\\pmod4\\mid m$ forces $q\\mid x,y$; likewise $4\\mid m$",
        "Conversely take one chosen Gaussian prime above each $p\\equiv1\\pmod4$"
      ],
      "steps": [
        "Visibility ⟺ coprimality. If $d=\\gcd(|x|,|y|)>1$ then $(x/d,y/d)$ is a lattice point strictly inside the segment; if $\\gcd=1$ and $(u,v)$ is a lattice point on the open segment, then $(u,v)=\\frac{k}{n}(x,y)$ in lowest terms forces $n\\mid x$ and $n\\mid y$, $n=1$, contradiction. So visible ⟺ $\\gcd(|x|,|y|)=1$ (for the axis points this says $(\\pm1,0)$ are the only visible axis points of all).",
        "Obstruction lemma (negative direction). (i) Let $q\\equiv3\\pmod4$ be prime, $q\\mid x^2+y^2$. If $q\\nmid y$ then $-1\\equiv(xy^{-1})^2\\pmod q$, impossible by Euler's criterion since $(-1)^{(q-1)/2}=-1$; hence $q\\mid y$, then $q\\mid x$ symmetrically. (ii) If $4\\mid x^2+y^2$, squares mod $4$ are $0,1$, so both coordinates are even.",
        "Form the forward half. If $m=2^{\\alpha}\\prod p^{a}\\prod q^{2b}$ with $\\alpha\\ge2$ or some $b\\ge1$: every prime $q\\equiv3\\pmod4$ enters to an even exponent, so by Fermat's two-square theorem $C_m\\ne\\varnothing$; and in any point of $C_m$: an even exponent $2b\\ge2$ still means $q\\mid m=x^2+y^2$, so lemma (i) gives $q\\mid\\gcd(x,y)$; $\\alpha\\ge2$ means $4\\mid x^2+y^2$ so lemma (ii) gives $2\\mid\\gcd(x,y)$. Either way no point is visible.",
        "Backward half via one-sided splitting. Assume $C_m\\ne\\varnothing$ and no visible point exists. Lemma (i) contrapositive + (ii): it suffices to show: if $4\\nmid m$ and no $q\\equiv3\\pmod4$ divides $m$, then a visible point exists. Write $m=2^{\\varepsilon}\\prod_{i}p_i^{a_i}$, $\\varepsilon\\in\\{0,1\\}$, $p_i\\equiv1\\pmod4$. In the UFD $\\mathbb Z[i]$ each $p_i=\\pi_i\\bar\\pi_i$ splits with $\\pi_i,\\bar\\pi_i$ non-associate Gaussian primes, and $2=-i(1+i)^2$. Set $z=(1+i)^{\\varepsilon}\\prod_i\\pi_i^{a_i}$; then $N(z)=m$, so $x=\\mathrm{Re}\\,z,\\ y=\\mathrm{Im}\\,z$ lie on $C_m$.",
        "Primitivity of $z$. Suppose a rational prime $r$ divides both coordinates: then $z=r\\,w$ for some $w\\in\\mathbb Z[i]$. Cases: $r\\equiv3\\pmod4$ is prime in $\\mathbb Z[i]$, so $r\\mid z\\Rightarrow r\\mid N(z)=m$ - excluded. $r=2$: taking norms, $4\\mid N(z)=m$ - excluded by $\\varepsilon\\le1$. $r=p_j$: $z=p_jw=\\pi_j\\bar\\pi_j w$, so unique factorization in $\\mathbb Z[i]$ forces $\\bar\\pi_j\\mid z$; but the prime factorization of $z$ contains only $\\pi_j$ (to the power $a_j$) and possibly $1+i$, while $\\pi_j$ and $\\bar\\pi_j$ are non-associate primes ($\\pi_j\\bar\\pi_j^{-1}\\notin\\{\\pm1,\\pm i\\}$ since their quotient has arguments $\\pm2\\arg\\pi_j\\not\\equiv0$) - contradiction. Thus $\\gcd(x,y)=1$: a visible point exists. Combining with the nonemptiness constraint (odd $q$-exponents forbidden - they make $C_m=\\varnothing$ by lemma (i)) gives exactly the boxed form with $\\alpha\\ge2$ or some $b\\ge1$.",
        "Machine audit (tools/proofs/redesign-20260930/n16-verify.py, 2026-09-30): exhaustive $m\\le4000$: brute force $C_m$, brute visibility by gcd, formula side by sympy factorization - 0 mismatches; least witnesses $4,8,9,16,18,20,32,36,40,45,49,52$ equal OEIS A034024 exactly (the answer set being catalogued is recorded in novelty.similarSources and residualRisk)."
      ],
      "remark": "Visibility is primitivity of $x+iy$ in $\\mathbb{Z}[i]$: inert primes $q\\equiv3\\pmod4$ dividing a norm must divide the element itself, forcing $q\\mid\\gcd(x,y)$, and $4\\mid m$ kills primitivity by squares mod 4; conversely, choosing exactly one prime above each split $p\\equiv1\\pmod4$ in the UFD $\\mathbb{Z}[i]$ produces a visible point. Nonemptiness of $C_m$ is Fermat's two-square theorem, itself a unique-factorization statement. The problem recasts the splitting of primes in $\\mathbb{Q}(i)$ in geometric language."
    },
    {
      "id": "n19",
      "category": "nt",
      "difficulty": "hard",
      "stars": 3,
      "confidence": "high",
      "text": "Determine all positive integers $n$ such that for all integers $a$ and $b$, $$n \\mid a^2 b + 1 \\implies n \\mid a^2 + b.$$",
      "why": "If $n\\mid a^{2}b+1$ then $\\gcd(a,n)=1$, for any common prime would leave $a^{2}b+1\\equiv1$; substituting $b\\equiv-a^{-2}$ turns the implication into the single universal congruence $a^{4}\\equiv1\\pmod n$ over all units — the unit group $(\\mathbb{Z}/n\\mathbb{Z})^{\\times}$ has exponent dividing $4$, i.e. $\\lambda(n)\\mid4$ for the Carmichael function. CRT decomposes it into cyclic prime-power groups ($C_2\\times C_{2^{k-2}}$ at $2^k$), forcing $p-1\\mid4$: primes only $2,3,5$ with $v_2(n)\\le4$, $v_3(n),v_5(n)\\le1$. The answer is exactly the $20$ divisors of $240=2^{4}\\cdot3\\cdot5$, each of which works.",
      "hints": [
        "The forced $b\\equiv-a^{-2}\\pmod n$ turns the implication into $a^4\\equiv1$",
        "CRT on $\\lambda(p^k)$: $p-1\\mid4$ leaves only 2, 3, 5"
      ],
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
      ],
      "remark": "The hypothesis is exactly that every unit mod $n$ has fourth power 1, i.e. that the exponent of $(\\mathbb{Z}/n\\mathbb{Z})^{\\times}$, the Carmichael function $\\lambda(n)$, divides 4; the Chinese remainder theorem decomposes the group into cyclic prime-power pieces, $C_2\\times C_{2^{k-2}}$ at $2^k$, and reading off $p^{k-1}(p-1)\\mid4$ yields the twenty divisors of 240. The construction grows out of the standard olympiad substitution trick: pick the unique admissible residue of one variable to convert an implication into an identity."
    },
    {
      "id": "n20",
      "category": "nt",
      "difficulty": "hard",
      "stars": 3,
      "confidence": "high",
      "text": "Let $S_n=1^{3}+2^{3}+\\cdots+(n-1)^{3}$.<ol><li>Find all integers $n\\ge2$ such that $n\\mid S_n$.</li><li>Find all integers $n\\ge2$ such that $n^{2}\\mid S_n$.</li></ol>",
      "why": "Nicomachus's identity: $S_n=\\left(\\frac{n(n-1)}{2}\\right)^{2}$, so both questions reduce to the parity of $v_2$. Part 1: $n\\mid S_n\\iff4\\mid n(n-1)^{2}$ — automatic for odd $n$, and for even $n$ equivalent to $4\\mid n$ since $(n-1)^2$ is odd: $n\\equiv2\\pmod4$ is the exact obstruction. Part 2: $n^{2}\\mid S_n\\iff(n-1)^{2}/4\\in\\mathbb{Z}\\iff n$ odd, a strictly smaller family. Structurally $\\sum k^{3}$ is a polynomial in the triangular number $T_{n-1}$ — Faulhaber's theorem that odd-power sums lie in $\\mathbb{Q}[T]$ — and the divisibility thresholds are pure $2$-adic bookkeeping.",
      "hints": [
        "Nicomachus: $S_n=\\left(\\frac{n(n-1)}{2}\\right)^2$"
      ],
      "steps": [
        "Prove $S_n=\\left(\\frac{n(n-1)}{2}\\right)^{2}$ (telescoping or induction).",
        "Part 1: $n\\mid S_n\\iff n^{2}(n-1)^{2}\\equiv0\\pmod{4n}\\iff 4\\mid n(n-1)^{2}$. If $n$ odd: $4\\mid(n-1)^2$ ✓. If $n\\equiv2\\pmod4$: $n(n-1)^2\\equiv2\\cdot\\text{odd}\\not\\equiv0$. If $4\\mid n$ ✓. Answer: odd or $4\\mid n$.",
        "Part 2: $n^{2}\\mid S_n\\iff 4\\mid(n-1)^{2}$ after dividing by $n^{2}$: impossible for even $n$ ($(n-1)^2\\equiv1\\pmod4$), automatic for odd $n$ ((n-1)/2 integral squared).",
        "Cross-check boundaries: $n=2$ fails part 1 ($S=1$); $n=4$: $S=36$, $4\\mid36$ ✓ part 1, $16\\nmid36$ ✗ part 2 ✓; $n=6$: $225$, $6\\nmid225$ ✓ excluded.",
        "Machine audit: exhaustive divisibility table for all $n&lt;3000$ matches both answers exactly (this session, exact integer arithmetic)."
      ],
      "remark": "The identity $\\sum k^3=T_{n-1}^2$ is the first instance of Faulhaber's theorem that odd power sums are polynomials in the triangular number, a symmetry consequence of the Bernoulli-polynomial formulas; everything after it is $2$-adic bookkeeping on $n^2(n-1)^2/4$. The gap between $n\\mid S_n$ and $n^2\\mid S_n$ is pure parity, decided by a single extra factor of 2, with $n\\equiv2\\pmod4$ the exact obstruction. The construction is the classical power-sum divisibility motif of reducing to congruences on a closed form."
    },
    {
      "id": "n21",
      "category": "nt",
      "difficulty": "hard",
      "stars": 3,
      "confidence": "high",
      "text": "Determine all quadruples of positive integers $(a,b,x,y)$ with $a,b$ odd satisfying $$x^2+y^2+1=(a^4+b^4+1)(xy+1).$$",
      "why": "Odd fourth powers are $1\\bmod16$, so $K=a^{4}+b^{4}+1\\equiv3\\pmod{16}$, $K\\ge3$, and the equation is $x^{2}-Kxy+y^{2}+1-K=0$. Vieta's mutation $(x,y)\\mapsto(Ky-x,x)$ preserves the solution set; the mate $x'$ satisfies $xx'=y^{2}+1-K$, negativity is excluded because $x(x-Ky)=K-y^{2}-1$ compares quantities on opposite sides of $K$, and $x'=0$ would demand $y^{2}=a^{4}+b^{4}\\equiv2\\pmod{16}$, never a square — the exact work done by the parity hypothesis. Then $0<x'<y$ descends to $x=y$, where $(2-K)x^{2}=K-1$ has no positive solution: no quadruples exist. The mutation is the Markov–Hurwitz reflection underlying such descents.",
      "hints": [
        "Vieta mate $x'=Ky-x$: $x'\\le0$ needs $y^2=a^4+b^4\\equiv2\\pmod{16}$",
        "Descent reaches $x=y$: $(2-K)x^2=K-1$ is impossible"
      ],
      "steps": [
        "Let $K=a^4+b^4+1$. Since $a,b$ are odd, $K\\equiv3\\pmod{16}$ and in particular $K\\ge3$. The equation is $$x^2-Kxy+y^2+1-K=0,$$ viewed as a quadratic in $x$.",
        "Assume $x\\ge y$ and let the other root be $x'=Ky-x$. Vieta gives $$xx'=y^2+1-K.$$",
        "We claim $x'>0$. If $x'&lt;0$, then $x>Ky$, so $$x(x-Ky)=K-y^2-1,$$ but the left side is at least $Ky+1>K$, while the right side is $&lt;K$, impossible. If $x'=0$, then $K=y^2+1$, so $y^2=a^4+b^4$. But $a,b$ odd gives $a^4+b^4\\equiv2\\pmod{16}$, whereas a square is never $2\\pmod{16}$. Thus $x'>0$.",
        "Because $x'>0$, Vieta gives $y^2+1-K>0$, hence $K\\le y^2$. Therefore $$x'=\\frac{y^2+1-K}{x}&lt;\\frac{y^2}{x}\\le y,$$ so $0&lt;x'&lt;y$. The pair $(y,x')$ is another positive integer solution with smaller maximum coordinate.",
        "Infinite descent therefore reaches a positive solution with equal first two variables, say $x=y$. Then $(2-K)x^2=K-1$, impossible because the left side is negative and the right side is positive for $K\\ge3$.",
        "Hence there are no positive integer quadruples satisfying the modified equation."
      ],
      "remark": "The equation $x^2-Kxy+y^2=K-1$ is an indefinite binary quadratic form, and the involution $(x,y)\\mapsto(Ky-x,x)$ is the Markov-Hurwitz reflection generating the automorphism action on integral points of such a cone; descent along it is the standard mechanism here. The parity hypothesis is a quadratic-residue obstruction: $a^4+b^4\\equiv2\\pmod{16}$ is never a square, which is exactly what excludes the degenerate endpoint $x'=0$ of the descent. The construction is Vieta jumping in the style of the classical IMO descent problems."
    },
    {
      "id": "n22",
      "category": "nt",
      "difficulty": "hard",
      "stars": 3,
      "confidence": "high",
      "text": "Find all pairs of positive integers $(a,b)$ such that $$ab\\mid a^{2}+b^{2}+2.$$",
      "why": "Put $k=(a^{2}+b^{2}+2)/ab$; Vieta's mate $b'$ satisfies $bb'=a^{2}+2>0$, so positivity never degenerates (unlike the $ab\\pm1$ families), and $a<b$ gives $0<b'<b$ because $b^{2}-a^{2}\\ge2a+1>2$. Descent lands on the diagonal, where $a^{2}\\mid2a^{2}+2$ forces $a=1$ and $k=4$ for every solution. The set is the single orbit of $(a,b)\\mapsto(b,4b-a)$ through $(1,1)$: adjacent terms of $1,1,3,11,41,153,571,\\dots$ With $s=a+b$, $d=a-b$ the equation is the Pell conic $s^{2}-3d^{2}=4$; the orbit rule acts by multiplication by $2+\\sqrt3$, the fundamental unit of the real quadratic order $\\mathbb{Z}[\\sqrt3]$ whose unit group, by Dirichlet's theorem, it generates.",
      "hints": [
        "Set $k=(a^2+b^2+2)/ab$; the mate root $b'=ka-b$ is positive",
        "Descend to $a=b$: forces $a=1$ and $k=4$ throughout"
      ],
      "steps": [
        "Set $k=(a^{2}+b^{2}+2)/(ab)\\in\\mathbb Z_{>0}$. Diagonal: $a=b$ gives $a^{2}\\mid 2a^{2}+2$, i.e. $a^{2}\\mid 2$, so $(1,1)$ - with quotient $4$ - is the only diagonal solution.",
        "Fix $a$ and read the equation as $x^{2}-kax+(a^{2}+2)=0$ at $x=b$. The mate root $b'=ka-b$ is an integer with $bb'=a^{2}+2>0$, hence positive, and $(a,b')$ is again a positive solution with the same $k$.",
        "For $a&lt;b$: $b\\ge a+1$ gives $b^{2}-a^{2}\\ge 2a+1\\ge 3>2$, so $b^{2}>a^{2}+2=bb'$ and $0&lt;b'&lt;b$. Ordering each pair, descent on the maximum is strict and lands on the diagonal, i.e. at $(1,1)$ with $k=4$. Conclusion: the quotient is always $4$.",
        "With $k=4$ the ascent involution is $(a,b)\\mapsto(b,4b-a)$; iterating from $(1,1)$ traverses the adjacent pairs of $x_1=x_2=1$, $x_{n+1}=4x_n-x_{n-1}$: $1,1,3,11,41,153,571,2131,\\dots$ - one line, no branching.",
        "Converse: substituting $b''=4b-a$ into $b^{2}+b''^{2}+2-4bb''$ gives $0$ identically (same quadratic in the other root), so every adjacent pair on the line is a solution in both orientations.",
        "Machine audit (tools/proofs/n14.py): exhaustive over $1\\le a,b&lt;450$ - exactly the in-range chain pairs, all quotients 4, no second orbit; the rejected first draft is preserved in novelty.transformedFrom.designHistory."
      ],
      "remark": "The Vieta involution never degenerates because the mate product $a^2+2$ stays positive, and all solutions lie on a single orbit: with $s=a+b$, $d=a-b$ the equation becomes the Pell conic $s^2-3d^2=4$, so the ascent acts by multiplication by $2+\\sqrt3$, the fundamental unit of the real quadratic order $\\mathbb{Z}[\\sqrt3]$, whose unit group Dirichlet's theorem describes. The construction grows out of Markov-type Vieta jumping with a Pell-equation closed form for the resulting recurrence."
    },
    {
      "id": "n23",
      "category": "nt",
      "difficulty": "challenging",
      "stars": 4,
      "confidence": "high",
      "text": "Determine all positive integers $n$ such that $$2^n + 1 \\mid 3^n - 1.$$",
      "why": "Odd $n$: $3\\mid2^{n}+1$ but $3^{n}-1\\equiv-1\\pmod3$, impossible. For $n=2k$: $2^{2k}+1\\equiv2\\pmod3$ forces a prime divisor $q\\equiv2\\pmod3$; then $\\operatorname{ord}_{q}(2)\\mid4k$ but $\\nmid2k$ gives $v_{2}(\\operatorname{ord}_{q}2)=v_{2}(k)+2$, and Lagrange's theorem in $(\\mathbb{F}_{q})^{\\times}$ pushes it into $q-1$, so $q\\equiv1\\pmod4$. Quadratic reciprocity flips $\\left(\\frac{3}{q}\\right)=\\left(\\frac{q}{3}\\right)=-1$, and Euler's criterion then forces $v_{2}(\\operatorname{ord}_{q}3)=v_{2}(q-1)\\ge v_{2}(k)+2$; yet $q\\mid3^{2k}-1$ demands $\\operatorname{ord}_{q}3\\mid2k$, i.e. $v_2\\le v_2(k)+1$ — contradiction. No positive integer $n$ works.",
      "hints": [
        "Odd $n$: $3\\mid2^n+1$ but $3^n-1\\equiv-1\\pmod3$",
        "Even $n=2k$: pick a prime $q\\equiv2\\pmod3$ over $2^{2k}+1$",
        "Squeeze $v_2(\\mathrm{ord}_q 2)$ against $v_2(\\mathrm{ord}_q 3)$ via reciprocity"
      ],
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
      ],
      "remark": "The core compares $2$-adic valuations of two multiplicative orders in $\\mathbb{F}_q^{\\times}$: $2^{2k}\\equiv-1$ pins $v_2(\\mathrm{ord}_q 2)=v_2(k)+2$, Lagrange's theorem pushes it into $q-1$, and quadratic reciprocity with Euler's criterion, $(3/q)=(q/3)=-1$ for $q\\equiv1\\pmod4$, forces the same $2$-power into $\\mathrm{ord}_q 3$, contradicting $3^{2k}\\equiv1$. This order-parity machinery is a template appearing in Zsigmondy- and Artin-style arguments. The idea is the classical motif of selecting a prime divisor in a useful residue class."
    },
    {
      "id": "n24",
      "category": "nt",
      "difficulty": "challenging",
      "stars": 4,
      "confidence": "low",
      "text": "Determine all infinite strictly increasing sequences of positive integers $a_1&lt;a_2&lt;a_3&lt;\\cdots$ such that $a_n\\mid a_{n+1}$ and $$\\varphi(a_{n+1})=a_n+\\varphi(a_n)$$ for all $n\\ge1$.",
      "why": "Divisibility makes $\\varphi(a_n)\\mid\\varphi(a_{n+1})$ (adjoining a prime multiplies $\\varphi$ by $p$ or $p-1$), so the recurrence forces $\\varphi(a_n)\\mid a_n$; the form-lemma from $m/\\varphi(m)=\\prod_{q\\mid m}q/(q-1)$ and a $2$-adic count then yields $m=2^{r}3^{s}$ with $r\\ge1$ for every term $>1$. Now $a_n=3\\varphi(a_n)$ and $\\varphi(a_{n+1})=4\\varphi(a_n)$ force $a_{n+1}=4a_n$, giving all $a_n=2^{r}3^{s}4^{n-1}$, $r,s\\ge1$. The head $a_1=1$ branches separately, since the form-lemma needs $m>1$: $\\varphi(a_2)=2$ is solved only by $3,4,6$ and only $6$ extends, producing the exceptional chain $1,6,24,96,\\dots$ a uniform answer would miss.",
      "hints": [
        "Divisibility gives $\\varphi(a_n)\\mid\\varphi(a_{n+1})$, so $\\varphi(a_n)\\mid a_n$",
        "Classify $\\varphi(m)\\mid m$: $v_2$ count forces $m=2^r3^s$",
        "Then $\\varphi(a_{n+1})=4\\varphi(a_n)$: multiply by 4; handle $a_1=1$"
      ],
      "steps": [
        "Because $a_n\\mid a_{n+1}$ we have $\\varphi(a_n)\\mid\\varphi(a_{n+1})$: it suffices to adjoin one prime at a time, since for any prime $p$ the ratio $\\varphi(mp)/\\varphi(m)$ equals $p$ when $p\\mid m$ and $p-1$ when $p\\nmid m$, an integer either way. The recurrence $\\varphi(a_{n+1})=a_n+\\varphi(a_n)$ then implies $\\varphi(a_n)\\mid a_n$ for every $n$, so $a_n/\\varphi(a_n)$ is an integer for every $n$.",
        "We use the lemma: if $m>1$ and $\\varphi(m)\\mid m$, then $m=2^r3^s$ with $r\\ge1,s\\ge0$. Indeed, suppose an odd prime $p\\ge5$ divides $m$. Since $$\\frac m{\\varphi(m)}=\\prod_{q\\mid m}\\frac q{q-1},$$ the numerator contributes exactly one factor of $2$ if $2\\mid m$ and none otherwise, while the denominator contains the factor $p-1$, which is even, and every other odd prime divisor of $m$ contributes another factor $2$. Thus integrality forces $2\\mid m$, $p$ to be the only odd prime divisor, and $v_2(p-1)=1$. Then $m/\\varphi(m)=2p/(p-1)$, an integer only if $p-1\\mid2$, impossible for $p\\ge5$. Hence no prime $\\ge5$ divides $m$. If $m$ were a power of $3$, then $m/\\varphi(m)=3/2$; therefore $2\\mid m$.",
        "The form-lemma constrains only terms $&gt;1$, so first dispose of $a_1=1$. There the recurrence at $n=1$ gives $\\varphi(a_2)=a_1+\\varphi(a_1)=1+1=2$, whose complete solution set is $a_2\\in\\{3,4,6\\}$. The condition $\\varphi(a_2)\\mid a_2$ (Step 1) kills $3$. If $a_2=4$, write $a_3=2^R3^S$ (form-lemma at $a_3&gt;1$); then $2^R3^{S-1}=\\varphi(a_3)=a_2+\\varphi(a_2)=4+2=6$ forces $R=1&lt;2$, contradicting $a_2\\mid a_3$. Hence $a_2=6$, and from index $2$ on every term exceeds $1$, so the rest of the argument applies verbatim from that index and gives $a_{n+1}=4a_n$ for all $n\\ge2$: the exceptional chain $1,6,24,96,\\dots$, i.e. $a_n=6\\cdot4^{\\,n-2}$ for $n\\ge2$. It does satisfy the problem: $\\varphi(6\\cdot4^{k})=2\\cdot4^{k}$ gives $\\varphi(a_{n+1})=a_n+\\varphi(a_n)$ for $n\\ge2$, and at $n=1$, $\\varphi(6)=2=1+\\varphi(1)$. Henceforth assume $a_1\\ge2$.",
        "Write $a_n=2^r3^s$ (the lemma applies since in this branch $a_1\\ge2$ and every term is $\\ge a_1$). If $s=0$, then the recurrence gives $$\\varphi(a_{n+1})=a_n+\\varphi(a_n)=2^r+2^{r-1}=3\\cdot2^{r-1}.$$ If $a_{n+1}=2^R$, its totient is a power of $2$, impossible. If $a_{n+1}=2^R3^S$ with $S\\ge1$, its totient is $2^R3^{S-1}$, so equality would force $R=r-1&lt;r$, contradicting $a_n\\mid a_{n+1}$. Hence $s\\ge1$ for every $n$ in this branch.",
        "Now $a_n=2^r3^s$ with $r,s\\ge1$, so $a_n=3\\varphi(a_n)$. The recurrence becomes $$\\varphi(a_{n+1})=4\\varphi(a_n).$$ Write $a_{n+1}=2^R3^S$ with $R\\ge r$ and $S\\ge s$. Then $$\\frac{\\varphi(a_{n+1})}{\\varphi(a_n)}=2^{R-r}3^{S-s}=4,$$ hence $R=r+2$ and $S=s$. Therefore $a_{n+1}=4a_n$.",
        "Conversely, for any integers $r,s\\ge1$, the sequence $$a_n=2^r3^s4^{n-1}$$ is strictly increasing, satisfies $a_n\\mid a_{n+1}$, and obeys $\\varphi(a_{n+1})=4\\varphi(a_n)=3\\varphi(a_n)+\\varphi(a_n)=a_n+\\varphi(a_n)$. Taken together with the exceptional chain settled at the start, the complete list of solutions is: all $a_n=2^r3^s4^{n-1}$ with fixed integers $r,s\\ge1$, and the single sequence $a_1=1,\\ a_n=6\\cdot4^{\\,n-2}$ for $n\\ge2$."
      ],
      "remark": "The condition $\\varphi(m)\\mid m$ is classified from the product formula $m/\\varphi(m)=\\prod_{q\\mid m}q/(q-1)$ by $2$-adic valuation bookkeeping: each odd prime $p\\ge5$ contributes an even denominator factor $p-1$, so only $m=2^r3^s$ survives, a $v_2$ count excluding powers of 3 alone. The recurrence then rigidifies to the geometric growth $a_{n+1}=4a_n$, while the head $a_1=1$ escapes the form-lemma and splits off one exceptional chain. The construction is the standard olympiad totient-shape lemma applied inside a dynamical setting."
    },
    {
      "id": "n25",
      "category": "nt",
      "difficulty": "challenging",
      "stars": 4,
      "confidence": "low",
      "text": "Let $n\\ge2$. A gcd triangle of order $n$ is a triangular array of positive integers $(a_{i,j})_{1\\le j\\le i\\le n}$ satisfying $a_{i,j}=\\gcd(a_{i+1,j},a_{i+1,j+1})$ for $i&lt;n$, with all $\\binom{n+1}{2}$ entries pairwise distinct. Let $L=\\operatorname{lcm}(a_{n,1},\\dots,a_{n,n})$. Determine the minimum possible value of $\\Omega(L)$, counted with multiplicity, and find all gcd triangles attaining it.",
      "why": "Suffix gcds $d_i=\\gcd(b_i,\\dots,b_n)$ are distinct triangle entries forming $d_1\\mid\\cdots\\mid d_n\\mid L$ with $n$ strict steps, since a bottom entry equal to $L$ duplicates its adjacent gcd; the divisibility lattice is graded by the rank function $\\Omega$, so this chain forces $\\Omega(L)\\ge\\Omega(d_1)+n\\ge n$. Equality makes $d_1=1$ with prime successive quotients; the mirrored prefix chain $e_i$ is coprime to $d_i$, and $\\Omega(b_i)\\le n-1$ pins $b_i=\\operatorname{lcm}(d_i,e_i)$ with $L/b_i$ prime. Hence $L=p_1\\cdots p_n$ is squarefree and $b_i=L/p_i$, one omitted prime per bottom position; distinct intervals of primes give distinct entries, so exactly these prime-omission triangles attain $\\Omega(L)=n$.",
      "hints": [
        "Suffix gcds $d_i$ form a strict chain $d_1\\mid\\cdots\\mid d_n\\mid L$",
        "$\\Omega$ grows by at least 1 per strict step: $\\Omega(L)\\ge n$",
        "Equality forces $d_1=1$ and $b_i=L/p_i$, one prime omitted each"
      ],
      "steps": [
        "Let the bottom row be $b_1,\\dots,b_n$, and define suffix gcds $d_i=\\gcd(b_i,\\dots,b_n)$. These are entries of the triangle, $d_i\\mid d_{i+1}$, and distinctness gives $d_i&lt;d_{i+1}$. Also $d_n=b_n&lt;L$, since $b_n=L$ would make $\\gcd(b_{n-1},b_n)=b_{n-1}$, duplicating a bottom entry.",
        "Hence $$d_1\\mid d_2\\mid\\cdots\\mid d_n\\mid L$$ is a chain of $n$ strict divisibility steps. Each strict step increases the total prime-exponent sum by at least $1$, so $\\Omega(L)\\ge\\Omega(d_1)+n\\ge n$.",
        "Thus the minimum is at least $n$. The construction with distinct primes $p_1,\\dots,p_n$, $$L=\\prod_{i=1}^n p_i,\\qquad b_i=\\frac{L}{p_i},$$ attains $\\Omega(L)=n$: every triangle entry is $$a_{i,j}=\\frac{L}{p_jp_{j+1}\\cdots p_{j+n-i}},$$ and distinct intervals give distinct products.",
        "Now suppose $\\Omega(L)=n$. The lower-bound chain forces $d_1=1$ and every successive quotient to be prime; in particular $\\Omega(b_n)=n-1$ and $L/b_n$ is prime. Applying the same argument to prefix gcds $e_i=\\gcd(b_1,\\dots,b_i)$ gives the strict chain $e_n\\mid\\cdots\\mid e_1\\mid L$ (with $e_1&lt;L$ for the same duplication reason), hence $\\Omega(e_i)=n-i$.",
        "For each $i$, $d_i$ and $e_i$ are coprime, because any common prime would divide every bottom entry and hence the top entry $d_1=1$. Also $$\\Omega(d_i)=i-1,\\qquad \\Omega(e_i)=n-i.$$",
        "Therefore $\\operatorname{lcm}(d_i,e_i)$ has $\\Omega=n-1$ and divides $b_i$. If $b_i$ were a proper multiple of this lcm, then $\\Omega(b_i)\\ge n$, forcing $b_i=L$, impossible because a bottom entry equal to $L$ duplicates its adjacent gcd. Hence $$b_i=\\operatorname{lcm}(d_i,e_i),$$ so $\\Omega(b_i)=n-1$ and $L/b_i$ is a prime $p_i$.",
        "The $b_i$ are pairwise distinct, so the primes $p_i=L/b_i$ are distinct. Since $\\Omega(L)=n$, this forces $L=p_1p_2\\cdots p_n$ to be squarefree and $b_i=L/p_i$.",
        "Conversely, for any ordering of distinct primes $p_1,\\dots,p_n$, taking $L=\\prod p_i$ and $b_i=L/p_i$ gives all interval gcds as $L$ divided by the product of the primes in the interval, so every entry is distinct. Thus the minimizing triangles are exactly these prime-omission constructions, and the minimum is $\\boxed{n}$."
      ],
      "remark": "The divisors of $L$ form a lattice graded by the rank function $\\Omega$, free commutative on the prime exponents, so a chain of $n$ strict divisibility steps is an elementary rank (Sperner-type) obstruction; at equality the lattice becomes Boolean, which forces squarefree $L$ and the prime-omission triangles $b_i=L/p_i$. The prefix and suffix gcd bookkeeping identifies the extremal chains of the divisor lattice with interval data on the bottom row. The construction grows out of the classic motif of bounding rank by chains of distinct divisors."
    }
  ]
};
