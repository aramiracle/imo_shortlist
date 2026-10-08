window.IMO_SHORTLIST = {
  "ratedOn": "2026-10-02",
  "criterion": "Difficulty of finding and completing a proof from scratch for a strong olympiad contestant, not how complicated the statement looks.",
  "scale": [
    {
      "id": "warmup",
      "label": "Warm-up",
      "min": 1.5,
      "max": 2.5
    },
    {
      "id": "easy",
      "label": "Easy",
      "min": 3,
      "max": 4.5
    },
    {
      "id": "medium",
      "label": "Medium",
      "min": 5,
      "max": 6.5
    },
    {
      "id": "hard",
      "label": "Hard",
      "min": 7,
      "max": 8
    },
    {
      "id": "challenging",
      "label": "Challenging",
      "min": 8.5,
      "max": 9.5
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
      "difficulty": "warmup",
      "stars": 1,
      "rating": 1.5,
      "confidence": "high",
      "text": String.raw`Find all functions $f:\mathbb{R}\to\mathbb{R}$ satisfying $$f(f(x)+y)=f(x+y)+f(y)\qquad\text{for all real }x,y.$$`,
      "why": String.raw`Only $f\equiv0$ works, and the whole proof is two substitutions that compute the same shift two ways. Setting $x=0$ with $c=f(0)$ gives $f(y+c)=2f(y)$: shifting the argument by $c$ doubles $f$. Shifting twice therefore multiplies by $4$. But $y=0$ gives $f(c)=2c$, so plugging $x=c$ into the equation reads $f(2c+y)=f(c+y)+f(y)=3f(y)$. Since $4f(y)=3f(y)$, $f$ vanishes everywhere. The nice point is that no case split is needed: if $c=0$ the same computation still works (the doubling identity already says $f=2f$). Solvers who first try to prove injectivity or look for linear solutions $f(x)=kx$ waste effort, because the only linear candidate is $k=0$. No regularity assumption is used anywhere.`,
      "hints": [
        String.raw`Substitute $x=0$ and set $c:=f(0)$: translation by $c$ rescales $f$ by a fixed factor.`,
        String.raw`Compute $f(2c+y)$ twice: iterate the shift, or plug in $x=c$.`
      ],
      "steps": [
        String.raw`Put $x=0$ and write $c=f(0)$: the equation becomes the shift identity $$f(c+y)=f(0+y)+f(y)=2f(y)\qquad\text{for all }y,$$ i.e. translation by $c$ doubles $f$.`,
        String.raw`Apply the shift twice: $f(2c+y)=f(c+(c+y))=2f(c+y)=4f(y)$. Separately, the shift identity at $y=0$ gives $f(c)=2f(0)=2c$, so the original equation at $x=c$ reads $f(2c+y)=f(f(c)+y)=f(c+y)+f(y)=3f(y)$. Hence $4f(y)=3f(y)$, so $f(y)=0$ for all $y$: $f\equiv0$, and $f\equiv0$ indeed satisfies the equation.`,
        String.raw`Structural second view (case $c=0$): with $c=0$ the original at $y=0$ reads $f(f(x))=f(x)$ - idempotence - and replacing $x$ by $f(x)$ in the original leaves the left side $f(f(x)+y)$ unchanged by idempotence, while the right side becomes $f(f(x)+y)+f(y)$, forcing $f\equiv0$ once more (at $c=0$ the shift identity itself already reads $f(y)=2f(y)$). The first route needs no case split on $c$; both close.`,
        String.raw`No regularity, boundedness, or surjectivity assumption is used anywhere.`
      ]
    },
    {
      "id": "a2",
      "category": "alg",
      "difficulty": "warmup",
      "stars": 1,
      "rating": 2,
      "confidence": "high",
      "text": String.raw`Let $(x_n)_{n\ge1}$ be a sequence of positive integers satisfying $$x_nx_{n+1}x_{n+2}=x_n+x_{n+1}+x_{n+2}$$ for every $n\ge1$. Prove that $(x_n)$ is purely periodic with period $3$, and that $(x_1,x_2,x_3)$ must be a permutation of $(1,2,3)$.`,
      "why": String.raw`The heart of the problem is that $xyz=x+y+z$ has only one solution in positive integers, $\{1,2,3\}$, and periodicity then comes almost for free. Order a consecutive triple as $x\le y\le z$. Then $xyz=x+y+z\le3z$ gives $xy\le3$, and checking $xy=1,2,3$ leaves only $(1,2,3)$. So every window of three consecutive terms is a permutation of $\{1,2,3\}$. Two overlapping windows share the distinct values $x_{n+1},x_{n+2}$, so the leftover value must agree: $x_{n+3}=x_n$. A nice extra fact: over the positive reals the map $(a,b)\mapsto\bigl(b,\frac{a+b}{ab-1}\bigr)$ already has order three, because $x_n=\tan A_n$ turns the relation into $A_n+A_{n+1}+A_{n+2}\equiv0\pmod\pi$. Integrality is only needed to pin down the actual values.`,
      "hints": [
        String.raw`Order a consecutive triple $x\le y\le z$ and squeeze $xyz=x+y+z$.`,
        String.raw`Case-check $xy$: only one multiset of three positive integers survives.`,
        String.raw`Shift the window by one: two consecutive triples share both middle terms.`
      ],
      "steps": [
        String.raw`Fix $n$ and set $x=x_n\le y=x_{n+1}\le z=x_{n+2}$ after relabelling (the equation $xyz=x+y+z$ is symmetric in the three variables). Since $x+y+z\le 3z$, the equation gives $xyz\le 3z$, hence $xy\le3$.`,
        String.raw`If $xy=1$, then $x=y=1$, and the equation becomes $z=2+z$, impossible. If $xy=2$, then $x=1,y=2$, and the equation becomes $2z=3+z$, so $z=3$; this is consistent with $z\ge y=2$. If $xy=3$, then $x=1,y=3$, and $3z=4+z$ gives $z=2$, but this contradicts $z\ge y=3$.`,
        String.raw`Hence for every $n$, the unordered triple $\{x_n,x_{n+1},x_{n+2}\}$ equals $\{1,2,3\}$ exactly, with all three values distinct.`,
        String.raw`Since $\{x_n,x_{n+1},x_{n+2}\}=\{1,2,3\}=\{x_{n+1},x_{n+2},x_{n+3}\}$ and both triples share the two distinct values $x_{n+1},x_{n+2}$, the remaining value in each triple is forced to be the same: $$x_{n+3}=\{1,2,3\}\setminus\{x_{n+1},x_{n+2}\}=x_n.$$`,
        String.raw`Thus $x_{n+3}=x_n$ for every $n\ge1$, so $(x_n)$ is purely periodic with period $3$, and the repeating block $(x_1,x_2,x_3)$ is, by the first step, some permutation of $(1,2,3)$. Conversely every such periodic sequence obviously satisfies the recurrence, since each consecutive triple is a permutation of $(1,2,3)$ and $1\cdot2\cdot3=6=1+2+3$.`
      ]
    },
    {
      "id": "a3",
      "category": "alg",
      "difficulty": "warmup",
      "stars": 1,
      "rating": 2,
      "confidence": "high",
      "text": String.raw`Find all polynomials $P:\mathbb{R}\to\mathbb{R}$ satisfying $$P(P(x))=\bigl(P(x)\bigr)^{3}\qquad\text{for all }x\in\mathbb R.$$`,
      "why": String.raw`The answer is $0,\pm1$ and $x^3$. Comparing degrees, $n^2=3n$, leaves only constants and cubics, and the leading coefficient must be $1$. The useful move is to stop expanding blindly and write $P(x)=x^3+ax^2+bx+c$, so that $P(P(x))=P(x)^3+aP(x)^2+bP(x)+c$. The equation then becomes $aP(x)^2+bP(x)+c\equiv0$. A nonconstant $P$ cannot satisfy a nontrivial polynomial relation of degree at most $2$, because the $x^6$ term of $aP^2$ has nothing to cancel it. So $a=0$, then $b=0$, then $c=0$. The trap is to compare the $x^8$ coefficients first. They agree identically, so that comparison carries no information, and a solver who stops there may think the cubic family is larger than it is.`,
      "hints": [
        String.raw`Compare degrees of $P\circ P$ and $P(x)^3$; handle constants separately.`,
        String.raw`Normalize to a monic cubic: the $x^8$ comparison is vacuous, $x^6$ is decisive.`,
        String.raw`With $a=0$ the leftover $P\circ P-P(x)^3$ is a low-degree polynomial in $P(x)$ alone.`
      ],
      "steps": [
        String.raw`Constants: $c=c^{3}$ gives $c\in\{0,\pm1\}$; all three work.`,
        String.raw`Nonconstant: $\deg(P\circ P)=n^{2}$ and $\deg(P^{3})=3n$, so $n=3$.`,
        String.raw`Leading coefficients: $p_3^4=p_3^3$ gives $p_3=1$. Write $P(x)=x^{3}+ax^{2}+bx+c$, so $P(P(x))=P(x)^{3}+a\,P(x)^{2}+b\,P(x)+c$. Compare $x^{8}$: both sides carry $3a$ (the term $aP(x)^{2}$ has degree $6$), so $x^{8}$ gives no information. Compare $x^{6}$: the part $P(x)^{3}$ contributes $a^{3}+6ab+3c$ to each side, $bP(x)+c$ contributes nothing, and $aP(x)^{2}$ contributes its leading term $a\cdot x^{6}$ only to the left side; the identity forces $a=0$.`,
        String.raw`With $a=0$ and $u=P(x)$: $P\circ P=u^{3}+bu+c=P(x)^{3}+b\,P(x)+c$. The identity forces $b\,P(x)+c\equiv0$; $P$ nonconstant gives $b=0$, then $c=0$.`,
        String.raw`Check $P=x^{3}$: $P(P(x))=x^{9}=(P(x))^{3}$; the three constants were checked in step 0. Steps 0-1 reduce every solution to one of these cases and steps 2-3 force $a=b=c=0$ in the cubic case, so the classification is complete: $\{0,\ \pm1,\ x^{3}\}$.`
      ]
    },
    {
      "id": "a4",
      "category": "alg",
      "difficulty": "warmup",
      "stars": 1,
      "rating": 2,
      "confidence": "high",
      "text": String.raw`Let $a,b,c\ge 0$ be real numbers with $a^{2}+b^{2}+c^{2}=3$. Prove that $$\frac{1}{a^{2}+a+1}+\frac{1}{b^{2}+b+1}+\frac{1}{c^{2}+c+1}\ \ge\ 1\,, $$ and determine all cases of equality.`,
      "why": String.raw`Equality holds only at $a=b=c=1$, and the inequality has two short proofs. The quickest is a tangent-line trick: each term is at least $\frac{3-x^2}{6}$, because $6-(3-x^2)(x^2+x+1)=(x-1)^2(x^2+3x+3)\ge0$ for every real $x$. Summing at $a,b,c$ and using $\sum a^2=3$ gives exactly $1$. The bound is linear in $x^2$ precisely so that the constraint can absorb it. The second proof uses Cauchy-Schwarz in Engel form: $\sum\frac1{D_a}\ge\frac9{6+a+b+c}$. Then $a+b+c\le3$ by the quadratic-mean bound finishes, and equality in that bound forces $a=b=c$. Notice that the tangent bound holds for all reals, so the hypothesis $a,b,c\ge0$ is not actually needed for this inequality.`,
      "hints": [
        String.raw`Engel form of Cauchy-Schwarz: $\sum 1/D\ge 9/\sum D$ over the three denominators.`,
        String.raw`It remains to bound the denominator — Cauchy-Schwarz on $a+b+c$.`
      ],
      "steps": [
        String.raw`Write $D_a=a^{2}+a+1$. Engel's form of Cauchy-Schwarz: $\sum 1/D_a\ge(1+1+1)^{2}/(D_a+D_b+D_c)=9/(\sum a^{2}+\sum a+3)=9/(6+a+b+c)$, with equality iff $D_a=D_b=D_c$.`,
        String.raw`Cauchy-Schwarz: $a+b+c\le\sqrt{3(a^{2}+b^{2}+c^{2})}=3$, so the denominator is at most $9$ and the sum is at least $1$.`,
        String.raw`Equality throughout: the second step forces $a=b=c$; combined with $\sum a^2=3$ this gives $a=b=c=1$, where the sum is $3\cdot\tfrac13=1$. (Engel equality $D_a=D_b=D_c$ is then automatic.)`,
        String.raw`Remark: the per-term tangent estimate gives a second one-line proof. Fitting $\alpha-\beta x^{2}$ to $1/(x^{2}+x+1)$ at $x=1$ gives $\alpha=\tfrac12,\ \beta=\tfrac16$, and clearing denominators the inequality $\frac1{x^{2}+x+1}\ge\frac{3-x^{2}}6$ is exactly $6-(3-x^{2})(x^{2}+x+1)=(x-1)^{2}(x^{2}+3x+3)\ge0$, valid for every real $x$ with equality iff $x=1$. Summing at $x=a,b,c$ and using $\sum a^{2}=3$ gives $S\ge\tfrac32-\tfrac12=1$ with equality iff $a=b=c=1$: an alternative to the Engel chain.`
      ]
    },
    {
      "id": "a5",
      "category": "alg",
      "difficulty": "easy",
      "stars": 2,
      "rating": 3,
      "confidence": "high",
      "text": String.raw`Let $a,b,c,d\gt 0$. Prove that $$(a^{2}+1)(b^{2}+1)(c^{2}+1)(d^{2}+1)\ge (a+b)(b+c)(c+d)(d+a),$$ and determine all equality cases.`,
      "why": String.raw`The key identity is $(a^2+1)(b^2+1)=(ab-1)^2+(a+b)^2$, which is just $|a+i|^2|b+i|^2=|(ab-1)+i(a+b)|^2$. It gives $(a^2+1)(b^2+1)\ge(a+b)^2$ for each adjacent pair of the cycle $a,b,c,d$. Each factor $x^2+1$ appears in exactly two of the four adjacent pairs. So multiplying the four pair inequalities gives the square of the left side on one end and the square of the right side on the other, and taking square roots finishes. Equality needs $ab=bc=cd=da=1$, which means $a=c$, $b=d$ and $ab=1$. This gives a whole one-parameter family $(t,1/t,t,1/t)$, not just the point $a=b=c=d=1$. That surprise is exactly what a solver who guesses the equality case from symmetry will miss.`,
      "hints": [
        String.raw`Pair adjacent factors and use $(a^2+1)(b^2+1)=(ab-1)^2+(a+b)^2$.`,
        String.raw`Equality: all four $(xy-1)^2$ terms vanish — solve that cyclic system.`
      ],
      "steps": [
        String.raw`Pair the factors: $[(a^2+1)(b^2+1)]\cdot[(c^2+1)(d^2+1)]$ and $[(b^2+1)(c^2+1)]\cdot[(d^2+1)(a^2+1)]$; the product of all four pair-products is LHS$^2$.`,
        String.raw`Lagrange identity: $(a^2+1)(b^2+1)=(ab-1)^2+(a+b)^2\ge(a+b)^2$, and likewise for $(b,c)$, $(c,d)$, $(d,a)$.`,
        String.raw`Multiply all four inequalities: LHS$^2\ge(a+b)^2(b+c)^2(c+d)^2(d+a)^2=$ RHS$^2$; take square roots.`,
        String.raw`Equality iff $ab=bc=cd=da=1$ simultaneously, i.e. $a=c$, $b=d$, $ab=1$; then $abcd=1$ holds automatically.`,
        String.raw`Sharpness: $a=c=t$, $b=d=1/t$ attains equality for every $t\gt 0$.`
      ]
    },
    {
      "id": "a6",
      "category": "alg",
      "difficulty": "easy",
      "stars": 2,
      "rating": 3.5,
      "confidence": "high",
      "text": String.raw`Let $a,b,c$ be real numbers satisfying $a+b+c=0$ and $abc=1$. Prove that $$a^4+b^4+c^4\ge \dfrac{9}{\sqrt[3]{2}},$$ and determine all equality cases.`,
      "why": String.raw`Sign bookkeeping does most of the work. A positive product and a zero sum force exactly one positive variable, say $c$. The other two are negative, $a=-p$ and $b=-q$ with $p+q=c$ and $pq=1/c$. For $p,q$ to be real we need $(p+q)^2\ge4pq$, which reads $c^3\ge4$. So the positive variable can never be small: $c\ge2^{2/3}$. Convexity then gives $p^4+q^4\ge c^4/8$, so the sum is at least $\frac98c^4\ge9\cdot2^{-1/3}$. Both steps are tight at the same point, $p=q$, which is the double-root boundary. So equality holds exactly at the permutations of $(2^{2/3},-2^{-1/3},-2^{-1/3})$. This is a small example of a general rule: for symmetric problems with fixed $e_1,e_3$, the extremum sits where two variables coincide.`,
      "hints": [
        String.raw`First pin the signs: exactly one of $a,b,c$ is positive.`,
        String.raw`Write $a=-p$, $b=-q$ ($p,q\gt0$): $(p-q)^2\ge0$ then bounds $c$ below.`,
        String.raw`Convexity of $t\mapsto t^4$ converts the bound on $c$ into one on $p^4+q^4$.`
      ],
      "steps": [
        String.raw`The product $abc=1\gt 0$ and the sum $a+b+c=0$ forbid three positive numbers and also forbid exactly two positive numbers. Hence exactly one of $a,b,c$ is positive; call it $c$, and write $a=-p$, $b=-q$ with $p,q\gt 0$.`,
        String.raw`Then $p+q=c$ and $pq=1/c$. The inequality $(p-q)^2\ge 0$ becomes $c^2\ge 4/c$. Since $c\gt 0$, this is $c^3\ge 4$, so $c\ge 4^{1/3}=2^{2/3}$.`,
        String.raw`By convexity of $t\mapsto t^4$, or equivalently by the power-mean inequality, $$\frac{p^4+q^4}2\ge \left(\frac{p+q}2\right)^4,$$ so $p^4+q^4\ge \tfrac18 c^4$, with equality if and only if $p=q$.`,
        String.raw`Therefore $a^4+b^4+c^4=p^4+q^4+c^4\ge \tfrac98 c^4\ge \tfrac98\,(2^{2/3})^4=\tfrac98\cdot 2^{8/3}=9\cdot 2^{-1/3}$.`,
        String.raw`Equality requires $c=2^{2/3}$ and $p=q$. Then $p+q=c$ and $pq=1/c$ give $p=q=2^{-1/3}$. Thus equality holds exactly at the permutations of $\bigl(2^{2/3},\,-2^{-1/3},\,-2^{-1/3}\bigr)$.`
      ]
    },
    {
      "id": "a7",
      "category": "alg",
      "difficulty": "easy",
      "stars": 2,
      "rating": 4.5,
      "confidence": "high",
      "text": String.raw`Find all strictly increasing functions $f:\mathbb{N}_0\to\mathbb{N}_0$ such that $$f(a^{2}+b^{2}+c^{2}+d^{2})=f(a)^{2}+f(b)^{2}+f(c)^{2}+f(d)^{2}\qquad\text{for all }a,b,c,d\in\mathbb{N}_0.$$`,
      "why": String.raw`The only solution is $f(n)=n$, and the proof is induction powered by Lagrange's four-square theorem. Setting all variables to $0$ gives $f(0)=0$. Three zeros give $f(a^2)=f(a)^2$. So $f(1)\in\{0,1\}$, and strict increase rules out $0$. The quadruples $(1,1,0,0)$, $(1,1,1,0)$ and $(1,1,1,1)$ then give $f(2)=2$, $f(3)=3$ and $f(4)=4$. For $n\ge5$, write $n$ as a sum of four squares. Each part is at most $\sqrt n$, which is less than $n$, so induction gives $f(n)=n$. Monotonicity is used exactly once, to kill $f(1)=0$. Without it, the zero function would also be a solution: the same induction shows that $f(1)=0$ forces $f\equiv0$.`,
      "hints": [
        String.raw`Plug in four zeros, then three zeros: $f(0)=0$ and $f$ commutes with squaring.`,
        String.raw`Strict increase pins $f(1)$; quadruples of $0,1$ seed the base values.`,
        String.raw`Induct using Lagrange's four-square theorem: each part is below $n$.`
      ],
      "steps": [
        String.raw`Set $a=b=c=d=0$: $f(0)=4f(0)^2$. Since $f(0)\in\mathbb{N}_0$, this forces $f(0)=0$.`,
        String.raw`Set $b=c=d=0$: $f(a^2)=f(a)^2+3f(0)^2=f(a)^2$ for all $a$.`,
        String.raw`Set $a=1$ and $b=c=d=0$: $f(1)=f(1)^2$. Strict increase with $f(0)=0$ gives $f(1)\ge 1$, so $f(1)=1$.`,
        String.raw`Seed the base values, each a direct application of the equation: $(1,1,0,0)$ gives $f(2)=f(1)^2+f(1)^2+f(0)^2+f(0)^2=1+1+0+0=2$; $(1,1,1,0)$ gives $f(3)=3$; $(1,1,1,1)$ gives $f(4)=4$ (consistent with $f(2^2)=f(2)^2=4$). Thus $f(0)=0$, $f(1)=1$, $f(2)=2$, $f(3)=3$, $f(4)=4$ are fixed.`,
        String.raw`Induction: assume $f(k)=k$ for all $k\lt n$, with $n\ge5$. By Lagrange's four-square theorem, there exist nonnegative integers $a,b,c,d$ such that $$n=a^2+b^2+c^2+d^2.$$ Because $n\ge5\gt1$ we have $a,b,c,d\le\sqrt n\lt n$, so the induction hypothesis gives $f(a)=a$, $f(b)=b$, $f(c)=c$, $f(d)=d$. Applying the defining equation, $$f(n)=f(a)^2+f(b)^2+f(c)^2+f(d)^2=a^2+b^2+c^2+d^2=n.$$ Strong induction closes on the explicit base $n\le4$ of steps 0-3, giving $f(n)=n$ for all $n\in\mathbb{N}_0$.`,
        String.raw`Verify: $f=\mathrm{id}$ is strictly increasing and satisfies $a^2+b^2+c^2+d^2=a^2+b^2+c^2+d^2$ term by term, so it is a solution. Strict increase was used exactly once, in step 2 (with $f(0)=0$ it forces $f(1)\ge1$, killing the root $f(1)=0$ of $f(1)=f(1)^2$ and with it $f\equiv0$); after the seeds, the Lagrange induction determines every value, so no further use of monotonicity is needed.`
      ]
    },
    {
      "id": "a8",
      "category": "alg",
      "difficulty": "easy",
      "stars": 2,
      "rating": 4.5,
      "confidence": "high",
      "text": String.raw`Find all polynomials $P:\mathbb{R}\to\mathbb{R}$ satisfying $$P(x)^{2}-P(x+1)\,P(x-1)=1\qquad\text{for all real }x.$$`,
      "why": String.raw`The answer is exactly $P(x)=\pm x+c$, and the sign $-$ is the family solvers tend to drop. The expression $P(x)^2-P(x+1)P(x-1)$ is a discrete analogue of $(P')^2-PP''$. For $P=ax^n+\dots$, its leading term is $na^2x^{2n-2}$, and this term never cancels. To see it, expand $P(x\pm1)$ to the three top coefficients: the lower coefficients $b,d$ drop out, leaving exactly $na^2$. So for $n\ge2$ the left side has positive degree and cannot equal the constant $1$. Constants give $0$, not $1$. For linear $P=ax+b$, $P(x\pm1)=P(x)\pm a$, so the expression is identically $a^2$. That forces $a=\pm1$, with the constant term $c$ completely free.`,
      "hints": [
        String.raw`Rule out constants, then bound $\deg P$ from above by a top-coefficient comparison.`,
        String.raw`The $x^{2n}$ and $x^{2n-1}$ terms of $P(x)^2-P(x+1)P(x-1)$ cancel; drop to $x^{2n-2}$.`,
        String.raw`Linear case: substitute $P=ax+b$; then verify both families.`
      ],
      "steps": [
        String.raw`Constant $P\equiv c$: $c^{2}-c^{2}=0\ne1$ - no constants.`,
        String.raw`Suppose $\deg P=n\ge2$ and write $$P(x)=a x^n+b x^{n-1}+d x^{n-2}+\cdots,\qquad a\ne0.$$ For $P(x+1)$, the coefficients of $x^n,x^{n-1},x^{n-2}$ are $$a,\qquad an+b,\qquad \frac{a n(n-1)}2+b(n-1)+d,$$ while for $P(x-1)$ they are $$a,\qquad -an+b,\qquad \frac{a n(n-1)}2-b(n-1)+d.$$ Hence $$[x^{2n-2}]\,P(x)^2=b^2+2ad,$$ whereas $$ \begin{aligned} [x^{2n-2}]\,P(x+1)P(x-1) &=a\!\left(an(n-1)+2d\right)+(an+b)(-an+b)\\ &=b^2+2ad-na^2. \end{aligned} $$ Thus the coefficient of $x^{2n-2}$ in $P(x)^2-P(x+1)P(x-1)$ is $na^2\ne0$: for $n\ge2$ that difference has positive degree $2n-2\ge2$ and cannot be identically the constant $1$. Therefore $\deg P\le1$.`,
        String.raw`Linear case: $P=ax+b$ gives $P(x\pm1)=P(x)\pm a$, so the residual is $P(x)^{2}-P(x+1)P(x-1)=a^{2}$; the equation forces $a=\pm1$, with $b$ arbitrary.`,
        String.raw`Conversely, both families work: for $P(x)=\pm x+c$ with $c\in\mathbb R$, the computation of step 2 gives $P(x)^{2}-P(x+1)P(x-1)=(\pm1)^{2}=1$ for every real $x$. Steps 0-3 give the full solution set $$P(x)=x+c\quad\text{or}\quad P(x)=-x+c,\qquad c\in\mathbb R.$$`
      ]
    },
    {
      "id": "a9",
      "category": "alg",
      "difficulty": "easy",
      "stars": 2,
      "rating": 4.5,
      "confidence": "high",
      "text": String.raw`Let $P(x)$ be a polynomial with real coefficients of degree at most $2$ such that $P(n)\ge 0$ for every integer $n$. Prove that, for every real number $h\ge \tfrac12$ and every real number $x$, $$P(x-h)+P(x+h)\ \ge\ 0 .$$`,
      "why": String.raw`The idea is to measure how negative $P$ can be. In vertex form $P(t)=a(t-r)^2+c$, nonnegativity at the integers forces $a\ge0$. Some integer lies within $\frac12$ of the vertex $r$, which gives the key bound $c\ge-a/4$. Then completing the square gives $P(x-h)+P(x+h)=2a(x-r)^2+2ah^2+2c\ge2a\bigl(h^2-\frac14\bigr)$, which is nonnegative once $h\ge\frac12$. The threshold is sharp: $P(t)=t(t-1)$ is nonnegative at every integer, but at $x=\frac12$ the sum equals $2h^2-\frac12$, which is negative for $h$ less than $\frac12$. The same computation shows more: any average of translates $P(x+t_i)$ with nonnegative weights stays nonnegative once the shifts have variance at least $\frac14$.`,
      "hints": [
        String.raw`Write $P(t)=a(t-r)^2+c$; the integer nearest $r$ forces $c\ge-a/4$.`,
        String.raw`Complete the square: $P(x-h)+P(x+h)=2a(x-r)^2+2(ah^2+c)\ge 2a(h^2-\tfrac14)$.`,
        String.raw`Test sharpness with $P(t)=t(t-1)$ at the centered point $x=\tfrac12$.`
      ],
      "steps": [
        String.raw`Turn the conclusion into a positive shift operator: it suffices to prove that for every $h\ge\tfrac12$, $$P(n)\ge0\ \forall n\in\mathbb Z\quad\Longrightarrow\quad P(x-h)+P(x+h)\ge0\quad\forall x\in\mathbb R,$$ since the original problem is the case $h=\tfrac12$ after replacing $x$ by $x+\tfrac12$. Write $P(t)=a(t-r)^2+c$ with $a\ge0$. Since $P(n)\ge0$ at the integer nearest $r$, we have $c\ge-\tfrac a4$.`,
        String.raw`On the other hand, $$\begin{aligned}P(x-h)+P(x+h)&=a\bigl((x-r-h)^2+(x-r+h)^2\bigr)+2c\\&=2a(x-r)^2+2ah^2+2c\\&\ge 2a(x-r)^2+2a\left(h^2-\tfrac14\right)\ge0,\end{aligned}$$ because $h^2\ge\tfrac14$. Hence $T_hP(x):=P(x-h)+P(x+h)\ge0$ for every real $x$ and every $h\ge\tfrac12$.`,
        String.raw`The threshold $h=\tfrac12$ is optimal. Take $P(t)=t(t-1)=(t-\tfrac12)^2-\tfrac14$, which satisfies $P(n)\ge0$ for every integer $n$. At the centered point $x=\tfrac12$, $$P\left(\tfrac12-h\right)+P\left(\tfrac12+h\right)=2h^2-\tfrac12,$$ which is negative exactly when $h\lt\tfrac12$.`,
        String.raw`Even broader version: for a positive linear combination of translates $\sum_{i=1}^m \lambda_iP(x+t_i)$ with $\lambda_i\ge0$ and $\sum\lambda_i\gt0$, mean $\bar t=\frac{\sum\lambda_i t_i}{\sum\lambda_i}$, the same completion of the square shows it is nonnegative on $\mathbb R$ whenever the variance of the shifts satisfies $$\frac{\sum\lambda_i(t_i-\bar t)^2}{\sum\lambda_i}\ge\tfrac14.$$ Thus a positive linear combination of translates preserves nonnegativity on the real line precisely when the variance of its shifts is at least $\tfrac14$; for $T_h$ the shifts $-h,h$ have variance $h^2$, giving exactly $h\ge\tfrac12$.`
      ]
    },
    {
      "id": "a10",
      "category": "alg",
      "difficulty": "medium",
      "stars": 3,
      "rating": 5,
      "confidence": "high",
      "text": String.raw`Find all functions $f:\mathbb Z\to\mathbb Z$ such that $$f(x+y)+f(xy)=f(x)f(y)+1\qquad\text{for all }x,y\in\mathbb Z.$$`,
      "why": String.raw`Everything hinges on $a=f(1)$. First, $f(0)=1$ is forced. Then the equations at $(1,1)$, $(2,1)$ and $(3,1)$ give $f(2),f(3),f(4)$ as polynomials in $a$. The equation at $(2,2)$ computes $f(4)$ a second way, and the two answers agree only if $a(a-1)^2(a-2)=0$. For each root, the equation at $y=1$, $f(x+1)=(a-1)f(x)+1$, is a first-order recurrence that determines $f$ on all of $\mathbb Z$ in both directions. The three solutions are the constant $1$, the shift $x+1$, and the even-indicator $\frac{1+(-1)^x}{2}$. That last solution is the surprise. A solver who assumes $f$ is a polynomial, or who works over $\mathbb R$, will miss it. It survives because the parity of $xy$ and $x+y$ is determined by the parities of $x$ and $y$.`,
      "hints": [
        String.raw`Use $P(0,0)$ to fix $f(0)$, then $P(n,1)$ to write $f(2),f(3),f(4)$ in terms of $a=f(1)$.`,
        String.raw`Compare the two routes to $f(4)$, via $P(3,1)$ and via $P(2,2)$: they force $a(a-1)^2(a-2)=0$.`,
        String.raw`For each $a\in\{0,1,2\}$ the relation $P(x,1)$ is a recurrence determining $f$ on all of $\mathbb Z$.`
      ],
      "steps": [
        String.raw`Let $P(x,y)$ denote the assertion $f(x+y)+f(xy)=f(x)f(y)+1$, and set $a:=f(1)$. Then $P(0,0)$ gives $2f(0)=f(0)^2+1$, i.e. $f(0)=1$. The remaining substitutions compute $f$ at small integers as polynomials in $a$: $$P(1,1):\ f(2)=a^2-a+1,\qquad P(2,1):\ f(3)=a^3-2a^2+2a,$$ $$P(3,1):\ f(4)=a^4-3a^3+4a^2-2a+1,\qquad P(2,2):\ 2f(4)=f(2)^2+1=a^4-2a^3+3a^2-2a+2.$$`,
        String.raw`Equating the two expressions for $2f(4)$ gives $a^4-2a^3+3a^2-2a+2=2a^4-6a^3+8a^2-4a+2$, i.e. $a^4-4a^3+5a^2-2a=0$, which factors as $$a(a-1)^2(a-2)=0 .$$ Hence $a\in\{0,1,2\}$. For each value, $P(x,1)$ (or $P(x-1,1)$) is a recurrence along $\mathbb Z$ that forces $f$ completely once $f(0)$ and $a=f(1)$ are known; each candidate is then checked directly in the original equation.`,
        String.raw`Case $a=0$. Then $f(0)=1,\ f(1)=0$, and $P(x,1)$ reads $f(x+1)=1-f(x)$, so the values alternate: $f(2n)=1$ and $f(2n+1)=0$ for every $n\in\mathbb Z$. Thus $$f(x)=\frac{1+(-1)^x}{2}\qquad\forall x\in\mathbb Z .$$ A check by parities (even/even, even/odd, odd/odd) shows $f(x+y)+f(xy)=f(x)f(y)+1$ holds in every case.`,
        String.raw`Case $a=1$. Then $f(1)=1$, and $P(x-1,1)$ gives $f(x)+f(x-1)=f(x-1)f(1)+1=f(x-1)+1$, hence $f(x)=1$ for every $x\in\mathbb Z$. This constant solution indeed fits.`,
        String.raw`Case $a=2$. Then $f(0)=1,\ f(1)=2$, and $P(x,1)$ reads $f(x+1)=2f(x)+1-f(x)=f(x)+1$. Iterating along $\mathbb Z$ gives $f(x)=x+1$ for every $x\in\mathbb Z$, which indeed fits.`,
        String.raw`The three candidates are mutually distinct and each satisfies the equation, so the solutions are exactly $$f\equiv 1,\qquad f(x)=x+1,\qquad f(x)=\frac{1+(-1)^x}{2}\qquad(x\in\mathbb Z).$$`
      ]
    },
    {
      "id": "a11",
      "category": "alg",
      "difficulty": "medium",
      "stars": 3,
      "rating": 5,
      "confidence": "high",
      "text": String.raw`Find all polynomials $P:\mathbb{R}\to\mathbb{R}$ such that $$P(x^{2}+y^{2})=P(x+y)^{2}-2P(xy)\qquad\text{for all real }x,y.$$`,
      "why": String.raw`The equation copies the identity $x^2+y^2=(x+y)^2-2xy$, so $P(x)=x$ is the obvious solution. The puzzle is whether anything else works. Setting $x=y=0$ gives $P(0)\in\{0,3\}$, and it turns out the constant $3$ is also a solution, since $3=9-6$. The decisive substitution is $y=-x$, which kills the term $P(x+y)$. It gives $P(2x^2)=P(0)^2-2P(-x^2)$. Comparing leading terms gives $2^{n-1}=(-1)^{n+1}$. Even degrees fail because the signs disagree, and odd degrees fail because of the size, unless $n=1$. Plugging $P=px+q$ back in forces $p=1$ and $q=0$, so the answer is exactly $0$, $3$ and $x$. The nice point is that one antisymmetric substitution does all the degree control at once.`,
      "hints": [
        String.raw`Put $y=0$, then $x=y=0$: the latter pins down $P(0)$.`,
        String.raw`Now substitute $(x,-x)$: the equation collapses; compare leading terms.`,
        String.raw`Then fit $P=px+q$ into the original identity; don't forget the constants.`
      ],
      "steps": [
        String.raw`Put $y=0$: $P(x^{2})=P(x)^{2}-2P(0)$ for all $x$. Put $x=y=0$: $c:=P(0)$ satisfies $c=c^{2}-2c$, hence $c^{2}-3c=0$ and $c\in\{0,3\}$. (Constant case: $P\equiv q$ gives $q=q^{2}-2q$, so the constants $0$ and $3$ are exactly the constant solutions.)`,
        String.raw`Now let $\deg P=n\ge1$ with leading coefficient $a\ne0$. Substitute $(x,y)=(x,-x)$ into the original identity: the left side is $P(x^{2}+x^{2})=P(2x^{2})$; the right side is $P(x+(-x))^{2}-2P(x(-x))=P(0)^{2}-2P(-x^{2})=c^{2}-2P(-x^{2})$. Hence $P(2x^{2})=c^{2}-2P(-x^{2})$ as polynomials in $x$.`,
        String.raw`Compare leading terms in that identity: left, $a(2x^{2})^{n}=a\,2^{n}x^{2n}$; right, $-2a(-x^{2})^{n}=-2a(-1)^{n}x^{2n}$ (the constant $c^{2}$ is immaterial for $n\ge1$). So $a\,2^{n}=-2a(-1)^{n}$; dividing by $2a\ne0$: $2^{n-1}=(-1)^{n+1}$. For $n$ even the right side is $-1$, impossible since $2^{n-1}\gt 0$; for $n$ odd it is $+1$, and $2^{n-1}=1$ forces $n=1$.`,
        String.raw`Put $P=px+q$ with $p\ne0$ and substitute into the ORIGINAL identity: $p(x^{2}+y^{2})+q=(p(x+y)+q)^{2}-2(pxy+q)=p^{2}x^{2}+p^{2}y^{2}+(2p^{2}-2p)xy+2pqx+2pqy+q^{2}-2q$. Comparing $x^{2}$: $p=p^{2}$, so $p=1$; comparing $x$: $0=2pq$, so $q=0$; the $xy$-comparison $0=2p^{2}-2p$ then reads $0=0$, and the constant comparison $q=q^{2}-2q$ is the step-0 condition $q\in\{0,3\}$, satisfied by $q=0$. Hence $P=x$ is the only nonconstant candidate.`,
        String.raw`Verify all three in the original identity: $P\equiv0$: $0=0-0$; $P=x$: $x^{2}+y^{2}=(x+y)^{2}-2xy$, an identity; $P\equiv3$: $3=9-6$. The preceding steps left nothing else, so the answer set is $\{0,\ 3,\ x\}$.`
      ]
    },
    {
      "id": "a12",
      "category": "alg",
      "difficulty": "medium",
      "stars": 3,
      "rating": 5.5,
      "confidence": "high",
      "text": String.raw`Let $a,b,c$ be positive real numbers. Prove that $$\sqrt{\frac{a+3b}{a+2b+6c}}+\sqrt{\frac{b+3c}{b+2c+6a}}+\sqrt{\frac{c+3a}{c+2a+6b}}\ \ge\ 2\,, $$ and determine all equality cases.`,
      "why": String.raw`Equality holds only at $a=b=c$. The three radicals look independent, but they are not. Write $x,y,z$ for them. Each definition clears to a linear equation in $a,b,c$, for example $(x^2-1)a+(2x^2-3)b+6x^2c=0$. A positive solution $(a,b,c)$ exists, so the $3\times3$ determinant vanishes. That gives one symmetric constraint: $x^2+y^2+z^2+17\sum x^2y^2+189x^2y^2z^2=28$. Now the problem is symmetric in $x,y,z$. The left side increases under scaling, so it is enough to show it is at most $28$ when $x+y+z=2$. In terms of $q=\sum xy$ and $r=xyz$, the defect is concave in $r$. So it suffices to check the endpoints of the allowed $r$-range, from AM-GM and Schur. Both factor nicely, and equality occurs only at $x=y=z=\frac23$, which pulls back to $a=b=c$.`,
      "hints": [
        String.raw`Let $x,y,z$ be the three radicals. Clearing each denominator gives a linear equation in $a,b,c$; since $a,b,c\gt0$ the $3\times3$ homogeneous system is singular, so set its determinant to $0$.`,
        String.raw`Expanding that determinant leaves one symmetric relation: $x^{2}+y^{2}+z^{2}+17\sum x^{2}y^{2}+189x^{2}y^{2}z^{2}=28$.`,
        String.raw`Prove the contrapositive lemma: if $x,y,z\ge0$ and $x+y+z\le2$, that left side is at most $28$, with equality only at $x=y=z=\tfrac23$.`,
        String.raw`By homogeneity it suffices to treat $x+y+z=2$; put $q=xy+yz+zx$, $r=xyz$, and the defect is $G=24+2q-17q^{2}+68r-189r^{2}$, concave in $r$.`,
        String.raw`Bound $r$ with AM-GM $r\le(q/3)^{3/2}$ and Schur $r\ge8(q-1)/9$; a concave function is minimal at an endpoint, where $G$ factors nonnegatively.`
      ],
      "steps": [
        String.raw`Substitute $x=\sqrt{\frac{a+3b}{a+2b+6c}}$, $y=\sqrt{\frac{b+3c}{b+2c+6a}}$, $z=\sqrt{\frac{c+3a}{c+2a+6b}}$. Clearing denominators gives three linear relations: $(x^{2}-1)a+(2x^{2}-3)b+6x^{2}c=0$, $6y^{2}a+(y^{2}-1)b+(2y^{2}-3)c=0$, $(2z^{2}-3)a+6z^{2}b+(z^{2}-1)c=0$. Since $a,b,c\gt0$ is a nonzero solution the determinant of this homogeneous system vanishes, and expanding it gives $$x^{2}+y^{2}+z^{2}+17(x^{2}y^{2}+y^{2}z^{2}+z^{2}x^{2})+189x^{2}y^{2}z^{2}=28.\qquad(1)$$`,
        String.raw`Lemma: for $x,y,z\ge0$ with $x+y+z\le2$ the left side of $(1)$ is at most $28$, equality only at $x=y=z=\tfrac23$. Each monomial $x^{2}$, $x^{2}y^{2}$, $x^{2}y^{2}z^{2}$ has positive degree, so scaling $(x,y,z)\mapsto\tfrac{2}{s}(x,y,z)$ (with $s=x+y+z\lt2$) strictly increases the left side; it is enough to prove the bound when $x+y+z=2$.`,
        String.raw`On $x+y+z=2$ put $q=xy+yz+zx$ and $r=xyz$, so $x^{2}+y^{2}+z^{2}=4-2q$ and $\sum x^{2}y^{2}=q^{2}-4r$. The defect to $28$ is $$G(q,r)=24+2q-17q^{2}+68r-189r^{2},$$ a quadratic in $r$ with leading coefficient $-189\lt0$, hence concave; for fixed $q$ its minimum on the admissible $r$-interval is attained at an endpoint.`,
        String.raw`The endpoints are $r_{\max}=(q/3)^{3/2}$ (AM-GM on $xy,yz,zx$) and $r_{\min}=\max\{0,8(q-1)/9\}$ (Schur: $8+9r\ge8q$), with $0\le q\le\tfrac43$. At $r=0$, $G=24+2q-17q^{2}\ge9\gt0$ for $0\le q\le1$; at $r=8(q-1)/9$, $G=(4-3q)(499q-418)/9\ge0$ for $1\le q\le\tfrac43$; at $r=r_{\max}$, writing $t=\sqrt{q/3}\in[0,\tfrac23]$, $$G(3t^{2},t^{3})=(2-3t)\left(63t^{5}+42t^{4}+79t^{3}+30t^{2}+18t+12\right)\ge0.$$ All factors are nonnegative, and equality holds only when $q=\tfrac43$, forcing $r=\tfrac8{27}$ and (from $(x+y+z)^{2}\ge3q$) $x=y=z=\tfrac23$. The lemma follows.`,
        String.raw`Contradiction: if $x+y+z\lt2$, the lemma gives the strict bound $x^{2}+y^{2}+z^{2}+17\sum x^{2}y^{2}+189x^{2}y^{2}z^{2}\lt28$, contradicting the identity $(1)$. Hence $x+y+z\ge2$, which is exactly the required inequality.`,
        String.raw`Equality requires $x=y=z=\tfrac23$, i.e. $x^{2}=\tfrac49$, so $9(a+3b)=4(a+2b+6c)$, that is $5a+19b=24c$, and cyclically $5b+19c=24a$ and $5c+19a=24b$. Let $a=\max\{a,b,c\}$; then $24a=5b+19c\le24a$, with equality only when $b=c=a$. Conversely $a=b=c$ makes each radical $\sqrt{\tfrac49}=\tfrac23$, so the sum is $2$. Thus equality holds exactly for $a=b=c$.`
      ]
    },
    {
      "id": "a13",
      "category": "alg",
      "difficulty": "medium",
      "stars": 3,
      "rating": 5.5,
      "confidence": "high",
      "text": String.raw`Find all polynomials $P\in\mathbb R[x]$ satisfying $$P(x^2+x)+P(x^2-x)=2P(x)^2-2P(0)\qquad\text{for all }x\in\mathbb R.$$`,
      "why": String.raw`The answer is $P\equiv0$, $P\equiv2$ and $P=x$. The left side is unchanged under $x\mapsto-x$, so $P(x)^2=P(-x)^2$, which forces $P$ to be even or odd. The trap is the usual top-degree comparison. It only gives a leading coefficient of $1$, because an odd $P$ may carry lower terms whose effect is invisible near the top. The right tool is to compare from the bottom. The term $x^k$ of $P$ first appears on the left in degree $k+1$, with coefficient $2k$, since $(x^2+x)^k+(x^2-x)^k=2kx^{k+1}+\dots$ for odd $k$. In the even case, the lowest term of $P-P(0)$ cannot match. In the odd case, the linear coefficient is $1$, and an upward induction gives $(2k-4)b_k=0$, killing every higher coefficient.`,
      "hints": [
        String.raw`Set $x=0$ first: the value $c:=P(0)$ is severely restricted.`,
        String.raw`The equation makes $P(x)^2$ an even polynomial. What does that say about $P$?`,
        String.raw`Even case: compare lowest nonzero degrees at the origin.`,
        String.raw`Odd case: the top degree pins only the leading coefficient — cascade upward from the lowest power.`
      ],
      "steps": [
        String.raw`Put $c=P(0)$. Setting $x=0$ gives $2c=2c^{2}-2c$, hence $c\in\{0,2\}$.`,
        String.raw`The left side is unchanged by $x\mapsto-x$, hence so is the right: $P(x)^{2}=P(-x)^{2}$, i.e. $(P(x)-P(-x))(P(x)+P(-x))\equiv0$ in the domain $\mathbb R[x]$, so $P$ is either even or odd. An odd $P$ satisfies $P(0)=0$, so $c=0$ in that branch.`,
        String.raw`Suppose $P$ is even and nonconstant, and set $q=P-c\not\equiv0$; let $kx^{m}$ be the lowest power occurring in $q$ ($m\ge2$ even, $k\ne0$). Since $c^{2}=2c$, the equation becomes $$q(x^{2}+x)+q(x^{2}-x)=4c\,q(x)+2q(x)^{2}.$$ The left's lowest-degree part is $kx^{m}[(1+x)^{m}+(1-x)^{m}]=2k\,x^{m}+O(x^{m+2})$, while the right has lowest degree $m$ with coefficient $4ck$ (the term $2q^{2}$ starts in degree $2m\gt m$). Hence $2k=4ck$: for $c=0$ this is $2k=0$, for $c=2$ it is $2k=8k$, both impossible. Every nonconstant solution is odd.`,
        String.raw`Let $P$ be odd of degree $d\ge1$ with leading coefficient $a$. Comparing the coefficient of $x^{2d}$ gives $2a=2a^{2}$, so $a=1$. (This is all the top-degree bookkeeping yields: an odd polynomial may legitimately carry an $x^{d-2}$ term - e.g. $x^{3}-x$ - so the classification must continue from the bottom, not from $x^{2d-2}$.)`,
        String.raw`Lowest-degree cascade. For odd $k$, $(x^{2}+x)^{k}+(x^{2}-x)^{k}=x^{k}\bigl[(1+x)^{k}-(1-x)^{k}\bigr]=2k\,x^{k+1}+O(x^{k+3})$, so the term $b_kx^{k}$ of $P$ first contributes to the left side in degree $k+1$ with coefficient $2kb_k$. The right side $2P(x)^{2}$ (with $c=0$) has lowest degree $2\ell$, where $x^{\ell}$ is the lowest power occurring in $P$. If $\ell\ge3$, the $x^{\ell+1}$ comparison reads $2\ell b_{\ell}=0$ (there is no right-side term of that degree since $2\ell\gt\ell+1$), impossible. Hence $\ell=1$; comparing $x^{2}$ gives $2b_1=2b_1^{2}$, so $b_1=1$.`,
        String.raw`Induction upward: fix odd $k\ge3$ and suppose $b_3=\cdots=b_{k-2}=0$. The $x^{k+1}$ coefficient of the left is $2kb_k$ (the $b_1x$ term contributes only to degree 2, and higher terms start at degree $\ge k+3$); the right side $2P^2$ contributes $2\cdot2b_1b_k=4b_k$, since any pair of odd exponents $i+j=k+1$ is either $\{1,k\}$ or has both entries in $\{3,\dots,k-2\}$, where the coefficients vanish by hypothesis. Hence $(2k-4)b_k=0$, i.e. $b_k=0$. Therefore $P(x)=x$ in the nonconstant case.`,
        String.raw`Check: $P\equiv0$ and $P\equiv2$ satisfy the equation ($2+2=2\cdot2^{2}-2\cdot2$), and $P(x)=x$ gives $(x^{2}+x)+(x^{2}-x)=2x^{2}$. Together with the parity dichotomy above this closes the classification: every solution is even or odd, and each branch left only the listed candidates.`,
        String.raw`Therefore the complete solution set is $$\boxed{P\equiv0,\quad P\equiv2,\quad P(x)=x}.$$`
      ]
    },
    {
      "id": "a14",
      "category": "alg",
      "difficulty": "medium",
      "stars": 3,
      "rating": 6,
      "confidence": "high",
      "text": String.raw`Find all polynomials $P:\mathbb{R}\to\mathbb{R}$ such that $$P(x)^{3}-P(y)^{3}=P(x-y)\,P\left(x^{2}+xy+y^{2}\right)\qquad\text{for all real }x,y.$$`,
      "why": String.raw`The answer is $P\equiv0$ and $P=x$. Setting $x=y=0$ gives $P(0)=0$, and $y=0$ then gives $P(x^2)=P(x)^2$ for nonzero $P$. This reduced equation has many solutions: every monomial $x^m$ works. To show nothing else does, track root multiplicities over $\mathbb C$. A nonzero root $r$ forces $r^2$ to be a root with twice the multiplicity, then $r^4$, and so on. A polynomial has only finitely many roots, so this chain must repeat, and it cannot. So $P=x^m$. The original two-variable equation does the rest. At $(x,y)=(2,1)$ it reads $8^m-1=7^m$, which holds only for $m=1$. The trap is to stop at the reduced equation and report all monomials. Already $x^2$ fails the full identity.`,
      "hints": [
        String.raw`Put $x=y=0$, then $y=0$: $P$ ends up commuting with the squaring map.`,
        String.raw`Root multiplicities along $r\mapsto r^2$ obey $m(r^2)=2m(r)$; orbit finiteness kills all nonzero roots.`,
        String.raw`Probe $P=x^m$ at $(x,y)=(2,1)$: only $m=1$ survives, plus $P\equiv0$.`
      ],
      "steps": [
        String.raw`Set $x=y=0$: $0=P(0)\cdot P(0)$, so $P(0)=0$.`,
        String.raw`Set $y=0$: $P(x)^{3}=P(x)\,P(x^{2})$ identically. If $P\not\equiv0$, cancel $P(x)$ to obtain $P(x)^{2}=P(x^{2})$.`,
        String.raw`Idempotents of squaring. Compare leading coefficients in $P(x)^{2}=P(x^{2})$: $c^{2}=c$, and $c\ne0$ since $P\not\equiv0$, so $c=1$. The identity is over $\mathbb R[x]$ but we argue in $\mathbb C[x]$, where $P$ splits. Let $m(r)$ denote the multiplicity of a (possibly complex) root $r\ne0$ of $P$. Compare the order of vanishing at $x=r$ on both sides: the left side vanishes to order $2m(r)$, while $P(x^{2})$ vanishes to order $m(r^{2})$, because $x^{2}-r^{2}=(x-r)(x+r)$ is a simple factor at $r\ne0$. Hence $m(r^{2})=2m(r)$, and iterating, $m(r^{2^{k}})=2^{k}m(r)$ for every $k\ge1$. Since $P$ has finitely many roots, two orbit points coincide, $r^{2^{i}}=r^{2^{j}}$ with $i\lt j$, so $2^{i}m(r)=2^{j}m(r)$ forces $m(r)=0$: contradiction. Thus $P$ has no nonzero complex root at all, and being monic with $P(0)=0$ it is exactly $P(x)=x^{m}$ for some $m\ge1$.`,
        String.raw`Test $P(x)=x^{m}$ in the original at $(x,y)=(2,1)$: $2^{3m}-1=7^{m}$. For $m=1$ equality; for $m\ge2$, $8^{m}-1\gt 7^{m}$ by induction: base $m=2$: $63\gt 49$; and if $8^{m}-1\gt 7^{m}$ then $8^{m+1}-1=8(8^{m}-1)+7\gt8\cdot7^{m}+7\gt7\cdot7^{m}=7^{m+1}$. Note the trap: $m=2$ passes the reduced idempotent step but fails here.`,
        String.raw`Verify both candidates in the original equation: $P=x$ gives $x^{3}-y^{3}=(x-y)(x^{2}+xy+y^{2})$, an identity; $P\equiv0$ reduces it to $0=0$. Hence the solutions are exactly $P\equiv0$ and $P(x)=x$.`
      ]
    },
    {
      "id": "a15",
      "category": "alg",
      "difficulty": "medium",
      "stars": 3,
      "rating": 6,
      "confidence": "high",
      "text": String.raw`Find all nonzero polynomials $P\in\mathbb{Q}[x]$ such that $P(n)$ is an integer for every positive integer $n$, and $P(a)$ divides $P(b)$ whenever $a$ and $b$ are positive integers with $a\mid b$.`,
      "why": String.raw`The answer is $P(x)=cx^d$ with $c$ a nonzero integer and $d\ge0$. The divisibility condition along $n\mid mn$ makes $P(mn)/P(n)$ an integer. For fixed $m$, this integer tends to $m^d$ as $n$ grows, because only the leading term matters at infinity. An integer sequence that converges must eventually be constant. So $P(mn)=m^dP(n)$ for all large $n$, and hence $P(mx)=m^dP(x)$ as polynomials. Comparing coefficients at $m=2$ kills every term except $x^d$, and $P(1)\in\mathbb Z$ makes the coefficient an integer. The pleasant point is that a purely arithmetic condition is turned into an exact identity by a limit argument. Integrality is essential: a nonzero integer is at least $1$ in size, so a ratio near $m^d$ must equal it.`,
      "hints": [
        String.raw`Track the ratios $P(mn)/P(n)$ for fixed $m$ as $n\to\infty$.`,
        String.raw`It is an integer tending to $m^d$, so it is eventually equal to $m^d$.`,
        String.raw`Then $P(mx)-m^dP(x)$ has infinitely many roots — an identity in $x$, for each $m$.`,
        String.raw`Compare coefficients of $x^k$: only one weight survives; $P(1)\in\mathbb Z$ fixes the rest.`
      ],
      "steps": [
        String.raw`Let $d=\deg P\ge 0$ and write $P(x)=c_d x^d+c_{d-1}x^{d-1}+\cdots+c_0$ with each $c_k\in\mathbb{Q}$ and $c_d\ne 0$. Take any positive integers $m,n$ with $P(n)\ne 0$. Both $P(n)$ and $P(mn)$ are integers by the integrality hypothesis, and $n\mid mn$, so the divisibility hypothesis gives $P(n)\mid P(mn)$ in $\mathbb{Z}$: the ratio $P(mn)/P(n)$ is a well-defined integer.`,
        String.raw`A nonzero polynomial of degree $d$ has at most $d$ real roots, so $P(n)\ne 0$ for every $n\ge n_0$ once $n_0$ is large enough. For $x\ge 1$ factor $$P(x)=c_d x^d\bigl(1+r(x)\bigr),\qquad r(x)=\sum_{j=1}^{d}\frac{c_{d-j}}{c_d}\,x^{-j},$$ where the sum is empty (so $r\equiv 0$) when $d=0$. With $C=\sum_{j=1}^d |c_{d-j}/c_d|$ we have $|r(x)|\le C/x$ for $x\ge 1$, hence $r(x)\to 0$. Therefore, for each fixed $m$, $$\frac{P(mn)}{P(n)}=m^d\cdot\frac{1+r(mn)}{1+r(n)}\longrightarrow m^d,$$ since $1+r(n)\to 1$ makes the fraction legal for large $n$. An integer-valued sequence converging to the integer $m^d$ is eventually constant: for all large $n$ the ratio is within $\tfrac12$ of $m^d$, hence equal to $m^d$.`,
        String.raw`Fix $m\ge 1$ and consider $Q_m(x):=P(mx)-m^d P(x)\in\mathbb{Q}[x]$. By the previous step $Q_m(n)=0$ for every sufficiently large integer $n$ — infinitely many roots — and a nonzero polynomial has only finitely many roots, so $Q_m\equiv 0$. Thus $P(mx)=m^d P(x)$ holds as a polynomial identity. The argument works for every fixed $m$, so the identity is valid for all positive integers $m$ simultaneously.`,
        String.raw`Substituting $P(x)=\sum_k c_k x^k$ into $P(mx)=m^d P(x)$ and comparing the coefficient of $x^k$ gives $c_k m^k=m^d c_k$, i.e. $c_k(m^k-m^d)=0$ for every $k$ and every $m\ge 1$. Taking $m=2$: $2^k-2^d\ne 0$ whenever $k\ne d$, so $c_k=0$ for all $k\ne d$, and $P(x)=c_d x^d$.`,
        String.raw`Integrality at $n=1$ forces $P(1)=c_d\in\mathbb{Z}$, and $P\not\equiv 0$ gives $c_d\ne 0$. Conversely, every $P(x)=c\,x^d$ with $c\in\mathbb{Z}\setminus\{0\}$, $d\ge 0$, satisfies both hypotheses: $P(n)=c\,n^d\in\mathbb{Z}$ for all $n$; and if $a\mid b$, writing $b=at$ with $t\in\mathbb{Z}_{\gt 0}$ gives $P(b)=c\,(at)^d=(c\,a^d)\,t^d=P(a)\,t^d$ with $t^d\in\mathbb{Z}$ — here the conclusion that $t^d$ is an integer uses $d\ge 0$, which is why negative exponents (non-polynomial $P$) never arise. Constant polynomials $d=0$ are included and check out in both conditions.`,
        String.raw`Therefore the polynomials are exactly $P(x)=c\,x^d$ with $c\in\mathbb{Z}\setminus\{0\}$ and $d\ge 0$.`
      ]
    },
    {
      "id": "a16",
      "category": "alg",
      "difficulty": "medium",
      "stars": 3,
      "rating": 6,
      "confidence": "high",
      "text": String.raw`Let $a,b,c\ge 0$ satisfy $a+b+c=1$.

(a) Find the largest real number $\lambda$ such that $$\sqrt{a+bc}+\sqrt{b+ca}+\sqrt{c+ab}\;\ge\;1+\lambda\,(ab+bc+ca)$$ holds for every admissible triple $(a,b,c)$.

(b) For that $\lambda$, determine all equality cases.`,
      "why": String.raw`The best constant is $\lambda=3$. Equality holds exactly at $a=b=c=\frac13$ and at the permutations of $(1,0,0)$. The key observation is that under $a+b+c=1$, $a+bc=(a+b)(a+c)$, so every square root becomes a geometric mean. Square the sum. The cross terms are bounded using $\sqrt{(a+c)(b+c)}\ge c+\sqrt{ab}$, whose defect is $c(\sqrt a-\sqrt b)^2$, and then AM-GM. The result is $S^2\ge1+9q$, where $q=ab+bc+ca\le\frac13$. Since $1+9q-(1+3q)^2=3q(1-3q)\ge0$, this gives $S\ge1+3q$. The centroid, with $S=2$, shows that $3$ cannot be improved. The trap is the shortcut $S\ge1+\sum\sqrt{bc}\ge1+3q$. The first step is fine, but the second is false: it fails at $\bigl(\frac1{10},\frac9{20},\frac9{20}\bigr)$.`,
      "hints": [
        String.raw`Factor $a+bc=(a+b)(a+c)$ under $a+b+c=1$; set $q=ab+bc+ca$.`,
        String.raw`Expand $S^2$ exactly and bound cross terms via $(a+c)(b+c)\ge(c+\sqrt{ab})^2$.`,
        String.raw`Close via $q\le\tfrac13$; one test triple forces $\lambda\le3$.`,
        String.raw`Equality: the last link pins $q$ to an extreme value of $q\le\tfrac13$.`
      ],
      "steps": [
        String.raw`Set $q=ab+bc+ca\le\tfrac13$ (equality iff $a=b=c$, since $(a+b+c)^{2}-3q=\tfrac12\sum(a-b)^{2}$) and note $a+bc=(a+b)(a+c)$ for $a+b+c=1$.`,
        String.raw`Expand exactly: $S^2=(1+q)+2\big[(a+b)\sqrt{(a+c)(b+c)}+(b+c)\sqrt{(b+a)(c+a)}+(c+a)\sqrt{(c+b)(a+b)}\big]$, since $\sum_{cyc}(a+bc)=1+q$ and $\sqrt{(a+bc)(b+ca)}=(a+b)\sqrt{(a+c)(b+c)}$.`,
        String.raw`Bound each cross term: $(a+c)(b+c)-(c+\sqrt{ab})^{2}=c(\sqrt a-\sqrt b)^{2}\ge0$, so with $\sum_{pairs}(a+b)c=2q$ this gives $S^2\ge1+5q+2\sum_{pairs}(a+b)\sqrt{ab}\ge1+9q$, the last step by $(a+b)\sqrt{ab}\ge2ab$ (AM-GM).`,
        String.raw`Close: $1+9q-(1+3q)^2=3q(1-3q)\ge0\Rightarrow S\ge1+3q$. At the centroid $S=2$, $q=\tfrac13$, so no $\lambda\gt3$ works.`,
        String.raw`Equality needs $q\in\{0,\tfrac13\}$ at the last link: $q=\tfrac13$ forces $a=b=c=\tfrac13$ (the squared-differences identity above), $q=0$ forces two coordinates to vanish, i.e. permutations of $(1,0,0)$; both check directly ($S=2$ at the centroid, $S=1$ at a vertex). Trap check: the tempting shortcut $S\ge1+\sum_{cyc}\sqrt{bc}\ge1+3q$ is INVALID - its first link is sound ($\sqrt{a+bc}=\sqrt{(a+b)(a+c)}\ge a+\sqrt{bc}$ by Cauchy-Schwarz, sum over cyclics), but the second already fails at $\bigl(\tfrac1{10},\tfrac9{20},\tfrac9{20}\bigr)$: there $\sum_{cyc}\sqrt{ab}=\tfrac{9+6\sqrt2}{20}$ while $3q=\tfrac{351}{400}$, and $\tfrac{9+6\sqrt2}{20}\lt\tfrac{351}{400}\iff120\sqrt2\lt171\iff28800\lt29241$.`
      ]
    },
    {
      "id": "a17",
      "category": "alg",
      "difficulty": "medium",
      "stars": 3,
      "rating": 6.5,
      "confidence": "high",
      "text": String.raw`Find all functions $f: \mathbb{R} \to \mathbb{R}$ satisfying $$f(x^3 - f(y)) = x f(x)^2 - y$$ for all real numbers $x$ and $y$.`,
      "why": String.raw`The only solution is $f(x)=x$. The proof is a chain of reductions, and the last link is the subtle one. Varying $y$ shows that $f$ is bijective. Then $x=0$ gives $f(-f(y))=-y$, and combining these turns the equation into $f(u+w)=f(u)+f(w)+c$, where $c$ is the zero of $f$. So $g=f+c$ is additive. Substituting into $f(x^3)=xf(x)^2-c$ and comparing $x$ with $-x$ isolates an even term $4cxg(x)$ that must vanish, so $c=0$. Additivity alone is not enough, because Cauchy's equation has wild solutions. The rescue is $f(x^3)=xf(x)^2\ge0$ for $x\gt0$. It makes $f$ nonnegative on the positive reals, hence monotone, hence linear. Then $k^2=k$ with $k\ne0$ leaves $f(x)=x$.`,
      "hints": [
        String.raw`Prove $f$ bijective; $x=0$ gives the involution $f(-f(y))=-y$.`,
        String.raw`Rewrite as $f(u+w)=f(u)+f(w)+c$ and shift to a Cauchy-additive $g$.`,
        String.raw`Parity in $x$ kills $c$; $f(x^3)=xf(x)^2$ forces $f\ge0$ on positives, so $f=x$.`
      ],
      "steps": [
        String.raw`Fix $x$. If $f(y_1) = f(y_2)$, then $x f(x)^2 - y_1 = f(x^3 - f(y_1)) = f(x^3 - f(y_2)) = x f(x)^2 - y_2$, which yields $y_1 = y_2$. Thus $f$ is injective. Moreover, as $y$ ranges over $\mathbb{R}$, the right-hand side $x f(x)^2 - y$ spans all of $\mathbb{R}$, so $f$ is surjective. Hence $f$ is bijective.`,
        String.raw`Since $f$ is bijective, there exists a unique real number $c$ such that $f(c) = 0$. Setting $x = 0$ in the given equation gives $f(-f(y)) = -y$ for all $y \in \mathbb{R}$. Evaluating this at $y = c$ gives $f(0) = -c$.`,
        String.raw`Setting $y = c$ in the original equation yields $f(x^3) = x f(x)^2 - c$. We can therefore rewrite the original equation as $$f(x^3 - f(y)) = f(x^3) + c - y.$$`,
        String.raw`Let $u = x^3$ and $v = f(y)$. Because $x \mapsto x^3$ and $f$ are bijections on $\mathbb{R}$, $u$ and $v$ can be arbitrary real numbers. From $f(-f(y)) = -y$, we have $f(-v) = -y$, so $y = -f(-v)$. Substituting this into the identity gives $$f(u - v) = f(u) + f(-v) + c.$$ Setting $w = -v$, we obtain $f(u + w) = f(u) + f(w) + c$ for all $u, w \in \mathbb{R}$.`,
        String.raw`Define $g(t) = f(t) + c$. Then $g(u + w) = f(u + w) + c = f(u) + f(w) + 2c = g(u) + g(w)$, so $g$ is Cauchy additive. In particular, $g(0) = 0$ and $g(-t) = -g(t)$ for all $t \in \mathbb{R}$.`,
        String.raw`Express $f$ as $f(t) = g(t) - c$ and substitute into $f(x^3) = x f(x)^2 - c$: $$g(x^3) - c = x(g(x) - c)^2 - c = x g(x)^2 - 2cx g(x) + c^2 x - c,$$ which simplifies to $g(x^3) = x g(x)^2 - 2cx g(x) + c^2 x$.`,
        String.raw`Since $g$ is additive, $g(-x^3) = -g(x^3)$. Replacing $x$ with $-x$ in the right-hand side and using $g(-x) = -g(x)$ gives $$g((-x)^3) = -x g(x)^2 - 2cx g(x) - c^2 x.$$ Equating this to $-g(x^3) = -x g(x)^2 + 2cx g(x) - c^2 x$ forces $$4cx g(x) = 0 \quad \text{for all } x \in \mathbb{R}.$$ Because $g$ is bijective, $g$ is not identically zero, which forces $c = 0$. Hence $f(0) = 0$ and $f = g$ is strictly additive.`,
        String.raw`With $c=0$, we have $f(x^3)=x f(x)^2$. For any $x\gt 0$, $f(x^3)\ge0$, and every $t\gt 0$ is the cube of a positive real number, so $f(t)\ge0$ for all $t\gt 0$. Since $f$ is additive, this implies that $f$ is nondecreasing: if $x\lt y$, then $$f(y)-f(x)=f(y-x)\ge0.$$ Additivity gives $f(q)=kq$ for rational $q$ with $k=f(1)\ge0$, and monotonicity squeezes rationals $q_1\le x\le q_2$ between $kq_1\le f(x)\le kq_2$, so $f$ is linear: $$f(x)=kx\quad\text{for all }x\in\mathbb{R}.$$`,
        String.raw`Substituting $f(x) = kx$ into $f(x^3) = x f(x)^2$ yields $k x^3 = x(kx)^2 = k^2 x^3$, so $k^2 = k$. Since $f$ is bijective, $k \ne 0$, forcing $k = 1$. Testing $f(x) = x$ in the original equation gives $x^3 - y = x(x^2) - y$, which holds identically. Thus $f(x) = x$ is the unique solution.`
      ]
    },
    {
      "id": "a18",
      "category": "alg",
      "difficulty": "medium",
      "stars": 3,
      "rating": 6.5,
      "confidence": "high",
      "text": String.raw`Let $a_1,a_2,\dots$ be positive reals with $a_1=1$ and $$a_{n+1}=a_n+\frac{n}{a_1+\cdots+a_n}.$$ Prove that $$a_n\ge\sqrt{\frac{16n-9}{7}}$$ for every $n\ge 1$.`,
      "why": String.raw`The key idea is to control $a_n^2$, not $a_n$. Its increments $2a_nd_n+d_n^2$, where $d_n=n/S_n$, turn out to be roughly constant. The increments $d_n$ are decreasing, so the sequence is concave, and that drives everything. Concavity bounds $S_n$ from above and below by its chords, which gives $2n-1$ less than $a_n^2$ and $a_n^2$ less than $4n-3$. Then a sharper upper bound $S_n\le na_n-\binom n2d_n$ gives a quadratic inequality whose smaller root bounds $d_n$ from below. Combined with $a_n^2\lt4n-3$, this pushes every increment of $a_n^2$ above $\frac{16}{7}$ once $n\ge3$. The first two increments are checked by hand, and telescoping finishes. The constant $\frac{16}{7}$ is not sharp: in fact $a_n\sim\sqrt{3n}$, as the continuous analogue $a'=n/\int a$ suggests.`,
      "hints": [
        String.raw`Set $S_n=\sum a_i$ and show the increments $d_n=n/S_n$ strictly decrease.`,
        String.raw`Chord bounds sandwich $a_{n+1}^2-a_n^2$ above and below; telescope.`,
        String.raw`Summing $d_j\ge d_n$ over $j$ yields a quadratic inequality for $d_n$.`,
        String.raw`Then for $n\ge3$ each step gains $16/7$; check $n=1,2$ by hand.`
      ],
      "steps": [
        String.raw`Put $S_n=a_1+\cdots+a_n$ and $d_n=a_{n+1}-a_n=n/S_n$. Since $a_1=1\gt 0$ and $S_n\gt 0$ for all $n$, every increment $d_n=n/S_n$ is $\gt 0$, so $(a_n)$ is strictly increasing. Then $a_i\le a_n\lt a_{n+1}$ for all $i\le n$, hence $S_n\lt n\,a_{n+1}$. But $d_{n+1}\lt d_n\iff\frac{n+1}{S_{n+1}}\lt \frac{n}{S_n}\iff S_n\lt n\,a_{n+1}$, so the increments are strictly decreasing: $(a_n)$ is concave.`,
        String.raw`First values: $d_1=1/S_1=1$, so $a_2=2$. For $n\ge2$, concavity ($d_n$ decreasing) means each $a_j$ lies on or above the chord from $(1,a_1)$ to $(n,a_n)$, i.e. $a_j\ge a_1+\frac{a_n-a_1}{n-1}(j-1)$; summing over $j=1,\dots,n$ gives $S_n\ge n a_1+\frac{a_n-a_1}{n-1}\cdot\frac{n(n-1)}2=\frac n2(a_1+a_n)=\frac n2(1+a_n)$. Hence $d_n=n/S_n\le 2/(a_n+1)$ and $$a_{n+1}^2-a_n^2=2a_nd_n+d_n^2=d_n(2a_n+d_n)\le\frac{2(2a_n)}{a_n+1}+\frac{4}{(a_n+1)^2}=4-\frac{4a_n}{(a_n+1)^2}\lt 4.$$ Telescoping from $a_2^2=4$ yields $a_n^2\lt 4n-3$ for every $n\ge2$.`,
        String.raw`On the other hand $S_n\le n\,a_n$ (every $a_i\le a_n$), so $d_n\ge n/(n a_n)=1/a_n$ and $$a_{n+1}^2-a_n^2=2a_nd_n+d_n^2\ge 2+\,d_n^2\gt 2.$$ Telescoping from $a_1^2=1$ gives $a_n^2\gt 2n-1$ for $n\ge2$, hence in particular the radicand $a_n^2-2(n-1)\gt 0$ is positive.`,
        String.raw`For $2\le j\lt n$, decreasing increments give $d_j\ge d_n$, so $a_j=a_n-\sum_{k=j}^{n-1}d_k\le a_n-(n-j)d_n$ (also true at the endpoints $j=1,n$). Summing over $j=1,\dots,n$, $$S_n\le n\,a_n-\frac{n(n-1)}2\,d_n.$$ Using $S_n=n/d_n$ and dividing by $n/d_n\gt 0$ gives $$1\le a_nd_n-\frac{n-1}{2}\,d_n^2,\qquad\text{i.e.}\quad \tfrac{n-1}{2}d_n^2-a_nd_n+1\le0 .$$ The quadratic in $y$, $g(y)=\tfrac{n-1}{2}y^2-a_ny+1$, has positive leading coefficient and discriminant $a_n^2-2(n-1)\gt 0$, so $g\le0$ exactly between its two roots; thus $d_n$ is at least the smaller root $$d_n\ge\frac{a_n-\sqrt{a_n^2-2(n-1)}}{n-1}=\frac{2}{a_n+\sqrt{a_n^2-2(n-1)}}$$ (rationalizing with $a_n^2-(a_n^2-2(n-1))=2(n-1)$).`,
        String.raw`For $n\ge3$, step 1 gives $7a_n^2\lt 7(4n-3)=28n-21\le32(n-1)$ (the last inequality is $28n-21\le32n-32\iff n\ge11/4$, true for $n\ge3$). Let $t=\sqrt{a_n^2-2(n-1)}\gt 0$. The key comparison is $3a_n\gt 4t$; since both sides are positive this is equivalent to $9a_n^2\gt 16t^2=16(a_n^2-2(n-1))$, i.e. to $32(n-1)\gt 7a_n^2$, which is exactly the bound just obtained. Hence $a_n+t\lt a_n+\tfrac34a_n=\tfrac74a_n$ and $$2a_nd_n\ge\frac{4a_n}{a_n+t}\gt \frac{4a_n}{\frac74a_n}=\frac{16}{7},$$ using step 3's $d_n\ge\frac{2}{a_n+t}$. Therefore $a_{n+1}^2-a_n^2=2a_nd_n+d_n^2\gt 16/7$ for every $n\ge3$.`,
        String.raw`The two remaining increments: $a_2^2-a_1^2=3\gt 16/7$; $d_2=2/S_2=2/3$, $a_3=2+\tfrac23=\tfrac83$, $a_3^2-a_2^2=\tfrac{64}9-4=\tfrac{28}9\gt 16/7$. Hence every increment $a_{k+1}^2-a_k^2$ ($k\ge1$) exceeds $16/7$, and telescoping for $n\ge2$ gives $$a_n^2=1+\sum_{k=1}^{n-1}(a_{k+1}^2-a_k^2)\gt 1+\frac{16(n-1)}7=\frac{16n-9}{7},$$ while equality holds at $n=1$ ($a_1^2=1=(16-9)/7$). Since $a_n\gt 0$, $a_n\gt \sqrt{(16n-9)/7}$ for all $n\ge2$ and $a_1=\sqrt{(16-9)/7}$; the claimed $\ge$ follows for every $n\ge1$.`
      ]
    },
    {
      "id": "a19",
      "category": "alg",
      "difficulty": "medium",
      "stars": 3,
      "rating": 6.5,
      "confidence": "high",
      "text": String.raw`Let $a,b,c\gt 0$. Prove that $$\frac{ab}{a^2+b^2+c^2-ab+bc-ca}+\frac{bc}{a^2+b^2+c^2-bc+ca-ab}+\frac{ca}{a^2+b^2+c^2-ca+ab-bc}\le\frac{3}{2},$$ and determine all equality cases.`,
      "why": String.raw`Equality holds only at $a=b=c$. The denominators look messy, but they are $Q+2bc$, $Q+2ca$ and $Q+2ab$, where $Q=\frac12\sum(a-b)^2\ge0$ is the same symmetric piece each time. When $a=b=c$, $Q=0$ and each fraction is exactly $\frac12$. That explains both the constant $\frac32$ and the equality case. To prove it, clear the positive denominators. The claim becomes $P\ge0$ for one cyclic polynomial $P$. Rotate so that $a$ is largest. The trap is to stop there: $P$ is cyclic but not symmetric, so both orders $a\ge b\ge c$ and $a\ge c\ge b$ must be handled. In each case, the substitution $c=x$, $b=x+y$, $a=x+y+z$ expands $P$ into terms with only nonnegative coefficients. All of them vanish only when $y=z=0$.`,
      "hints": [
        String.raw`Write the denominators as $Q+2bc$, $Q+2ca$, $Q+2ab$ with $Q=\tfrac12\sum(a-b)^2\ge0$.`,
        String.raw`Split the two orderings and substitute $c=x$, $b=x+y$, $a=x+y+z$.`,
        String.raw`Equality: the positive coefficients force $y=z=0$ in each chamber.`
      ],
      "steps": [
        String.raw`Put $$Q=\frac{(a-b)^2+(b-c)^2+(c-a)^2}{2}=a^2+b^2+c^2-ab-bc-ca.$$(Each cross term appears twice with a minus sign in the expansion of the three squares, each halved.) The three denominators are then exactly $D_1=Q+2bc$, $D_2=Q+2ca$, $D_3=Q+2ab$, since e.g. $Q+2bc=a^2+b^2+c^2-ab+bc-ca$. As $Q\ge 0$ and $a,b,c\gt 0$, all three denominators are strictly positive.`,
        String.raw`Because $D_1D_2D_3\gt 0$, multiplying the inequality by $2D_1D_2D_3$ and collecting is reversible, so the assertion is equivalent to $$P:=3D_1D_2D_3-2(abD_2D_3+bcD_3D_1+caD_1D_2)\ge 0,$$ with equality cases in bijection.`,
        String.raw`$P$ is invariant under the cyclic relabeling $(a,b,c)\mapsto(b,c,a)$: $Q$ is symmetric, the factors $D_1\to D_2\to D_3\to D_1$ and $ab\to bc\to ca\to ab$ cycle together, so $P$ maps to itself. A cyclic relabeling therefore lets us assume $a$ is maximal. But $P$ is $\mathit{not}$ symmetric under swapping $b$ and $c$, so after that normalization both order types $a\ge b\ge c$ and $a\ge c\ge b$ must still be treated separately.`,
        String.raw`If $a\ge b\ge c$, write $c=x$, $b=x+y$, $a=x+y+z$ with $x\gt 0$ and $y,z\ge 0$. Then $Q=y^2+yz+z^2$, and $$D_1=2x^2+2xy+y^2+yz+z^2,\quad D_2=D_1+2xz,\quad D_3=D_1+2xy+2xz+2y^2+2yz.$$ Substituting these three explicit quadratics into $P=3D_1D_2D_3-2(abD_2D_3+bcD_3D_1+caD_1D_2)$ and collecting in descending powers of $x$ gives exactly $$\begin{aligned} P={}&4x^4(y^2+yz+z^2)+8x^3(y^3+y^2z+2yz^2+z^3)\\ &+12x^2y^4+16x^2y^3z+36x^2y^2z^2+32x^2yz^3+12x^2z^4\\ &+8xy^5+16xy^4z+40xy^3z^2+48xy^2z^3+32xyz^4+8xz^5\\ &+3y^6+9y^5z+22y^4z^2+29y^3z^3+26y^2z^4+13yz^5+3z^6\ge 0, \end{aligned}$$ every one of whose 25 monomial coefficients being strictly positive makes the inequality immediate for $x\gt 0$, $y,z\ge 0$.`,
        String.raw`If $a\ge c\ge b$, write $b=x$, $c=x+y$, $a=x+y+z$. Again $Q=y^2+yz+z^2$, now with $$D_1=2x^2+2xy+y^2+yz+z^2,\quad D_2=D_1+2xy+2xz+2y^2+2yz,\quad D_3=D_1+2xz,$$ which is the previous parametrization with the roles of $D_2$ and $D_3$ exchanged. Collecting the resulting $P$ gives $$\begin{aligned} P={}&4x^4(y^2+yz+z^2)+8x^3y^3+16x^3y^2z+24x^3yz^2+8x^3z^3\\ &+12x^2y^4+32x^2y^3z+60x^2y^2z^2+40x^2yz^3+12x^2z^4\\ &+8xy^5+24xy^4z+56xy^3z^2+56xy^2z^3+32xyz^4+8xz^5\\ &+3y^6+9y^5z+22y^4z^2+29y^3z^3+26y^2z^4+13yz^5+3z^6\ge 0, \end{aligned}$$ again with all 25 coefficients strictly positive.`,
        String.raw`Conversely, equality needs both displayed polynomials to vanish. Since $x\gt 0$, the two $x^2$-terms $12x^2y^4$ and $12x^2z^4$ force $y=z=0$, hence $a=b=c$ in either order type. Checking the original inequality at $a=b=c$: each denominator is $0+2a^2$ and each term is $a^2/2a^2=\tfrac12$, so the sum is exactly $\tfrac32$. Equality holds precisely when $a=b=c$.`
      ]
    },
    {
      "id": "a20",
      "category": "alg",
      "difficulty": "hard",
      "stars": 4,
      "rating": 7,
      "confidence": "high",
      "text": String.raw`Let $T(x)=1-\dfrac1x$. Determine all real polynomials $P$ of degree at most $2$ for which there exists a nonzero polynomial $Q$ with $$P(x)=\frac{Q(x)}{Q(T(x))}\qquad\text{for all real }x\text{ where both sides are defined.}$$`,
      "why": String.raw`The answer is $P\in\{1,\ x^2,\ x-x^2\}$. The engine is that $T(x)=1-\frac1x$ has order three, cycling $0\to\infty\to1\to0$. Applying $P=Q/(Q\circ T)$ around the cycle gives the necessary condition $P(x)P(Tx)P(T^2x)\equiv1$. A root of $P$ outside $\{0,1\}$ would make this product vanish, so $P=Cx^r(x-1)^s$. Computing the product gives $C^3(-1)^r=1$, which leaves six candidates. The trap is to stop here. The norm condition is necessary but not sufficient. A polynomial $Q$ must actually exist, and tracking the orders of $Q$ at $0$, $\infty$ and $1$ rules out $x-1$, $-x$ and $(x-1)^2$. The survivors have explicit lifts: $Q=x^2-x+1$ for $x^2$ and $Q=x-1$ for $x-x^2$.`,
      "hints": [
        String.raw`Iterate along the cycle: any solution obeys $P(x)P(Tx)P(T^2x)\equiv1$.`,
        String.raw`Solve that norm equation for $\deg P\le2$; six real candidates appear.`,
        String.raw`Compare vanishing orders along $0\mapsto\infty\mapsto1\mapsto0$ to kill non-lifters.`
      ],
      "steps": [
        String.raw`Compute $T^{2}(x)=-\frac1{x-1}$ and check $T^{3}=\mathrm{id}$.`,
        String.raw`Necessity: the quotient relation $P=Q/(Q\circ T)$ holds on a cofinite set of reals, hence as rational functions $Q(x)=P(x)\,Q(Tx)$; iterating along the cycle gives $Q(x)=P(x)Q(Tx)=P(x)P(Tx)Q(T^{2}x)=P(x)P(Tx)P(T^{2}x)Q(x)$ (at points where $Q$ does not vanish, and $T^{3}=\mathrm{id}$), and $Q\not\equiv0$ gives the norm identity.`,
        String.raw`Solve the norm identity by hand. Since $$P(x)P(Tx)P(T^2x)\equiv1,$$ the product being $1$ already forces $P\not\equiv0$; if $\alpha$ is a root of $P$ with $\alpha\notin\{0,1\}$, then $T(\alpha)$ and $T^2(\alpha)$ are finite and all three factors are regular at $\alpha$, so the left side vanishes at $\alpha$, a contradiction. Hence every complex root of $P$ is $0$ or $1$. Thus $$P(x)=C\,x^r(x-1)^s,\qquad r,s\ge0,\quad r+s\le2,$$ with $C\ne0$ real. Now $$T(x)=\frac{x-1}{x},\qquad T(x)-1=-\frac1x,\qquad T^2(x)=\frac1{1-x},\qquad T^2(x)-1=-\frac{x}{x-1}.$$ Therefore $$ \begin{aligned} P(Tx)&=C(-1)^s\frac{(x-1)^r}{x^{r+s}},\\ P(T^2x)&=C(-1)^{r+s}\frac{x^s}{(x-1)^{r+s}}, \end{aligned} $$ and hence $$P(x)P(Tx)P(T^2x)=C^3(-1)^r.$$ The norm identity forces $C^3(-1)^r=1$, so, because $C\in\mathbb R$, $C=(-1)^r$. For $r+s\le2$ this gives exactly $$P\equiv1,\quad P=x-1,\quad P=-x,\quad P=x^2,\quad P=x-x^2,\quad P=(x-1)^2.$$`,
        String.raw`Lift test: for $P=1$: $Q\equiv1$. For $P=x^{2}$: $Q=x^{2}-x+1$ works, since $Q\circ T=(x^{2}-x+1)/x^{2}$ and the ratio is $x^{2}$. For $P=x-x^{2}$: $Q=x-1$: $Q\circ T=-1/x$, ratio $-x(x-1)=x-x^{2}$.`,
        String.raw`Kill the three non-lifting candidates by order bookkeeping along the $T$-orbit $0\mapsto\infty\mapsto1\mapsto0$ (directly: $T(0)=\infty$, $T(\infty)=1$, $T(1)=0$). Suppose $Q$ is a nonzero polynomial lift, $Q(x)=P(x)\,Q(Tx)$, of degree $m=\deg Q$. A Mobius transformation is locally invertible on $\mathbb P^{1}$ (local degree $1$ everywhere), so $v_\zeta(Q\circ T)=v_{T(\zeta)}(Q)$; comparing orders at each orbit point $\zeta$ gives $v_\zeta(Q)-v_{T(\zeta)}(Q)=v_\zeta(P)$. Write $a=v_0(Q)$, $b=v_\infty(Q)=-m$, $c=v_1(Q)$, with $a,c\ge0$. The three equations are $a-b=v_0(P)$, $b-c=v_\infty(P)$, $c-a=v_1(P)$ (their left sides sum to $0$, matching $v_0(P)+v_\infty(P)+v_1(P)=0$ in each case).
(i) $P=x-1$, orders $(v_0,v_\infty,v_1)=(0,-1,1)$: $a=b=-m$ forces $m=0$ (as $a\ge0\ge b$), hence $a=b=0$ and then $c=a+1=1$, i.e. a nonzero constant $Q$ with $Q(1)=0$ - impossible.
(ii) $P=(x-1)^{2}$, orders $(0,-2,2)$: again $a=b=-m$ gives $m=0$, then $c=a+2=2$, a nonzero constant vanishing at $1$ to order $2$ - impossible.
(iii) $P=-x$, orders $(1,-1,0)$: $a=b+1=1-m$ and $c=a=1-m$, so $m\le1$. $m=0$ makes a nonzero constant vanish at both $0$ and $1$; $m=1$ makes $a=c=0$, so the single zero $r$ of $Q$ lies off the orbit, but then $v_r(Q)-v_{T(r)}(Q)=v_r(P)=0$ propagates along the full $T$-orbit of $r$, and $T$ has no real fixed point ($T(x)=x\iff x^{2}-x+1=0$, discriminant $-3$), so $r,T(r),T^{2}(r)$ are three distinct zeros of a linear polynomial. Both impossible.`,
        String.raw`Conclusion: the three surviving candidates $P\equiv1$, $P=x^{2}$, $P=x-x^{2}$ do lift (step 3), while the other three do not (step 4), and steps 1-2 show every admissible $P$ was among the six. The answer is $\{1,\ x^{2},\ x-x^{2}\}$.`
      ]
    },
    {
      "id": "a21",
      "category": "alg",
      "difficulty": "hard",
      "stars": 4,
      "rating": 7,
      "confidence": "high",
      "text": String.raw`Let $n\ge4$ and let real numbers $x_1,\dots,x_n$ satisfy $$x_1+\cdots+x_n=0,\qquad x_1^{2}+\cdots+x_n^{2}=n(n-1),$$ with indices read cyclically ($x_{n+1}=x_1$).
(a) Prove $$\sum_{i=1}^{n}x_ix_{i+1}\le n(n-1)\cos\frac{2\pi}{n},$$ with equality if and only if $x_i=\sqrt{2(n-1)}\,\sin\!\big(\tfrac{2\pi i}{n}+\varphi\big)$ for some phase $\varphi$.
(b) Determine the minimum of $\sum x_ix_{i+1}$ under the same constraints, and characterize the minimizers.`,
      "why": String.raw`Both parts are a spectral problem for the cycle in disguise. Write $S=\sum x_i^2$ and $q=\sum x_ix_{i+1}$. At an extremum, Lagrange multipliers give $x_{i-1}+x_{i+1}=2\mu x_i$ with $\mu=q/S$. The mean-zero constraint removes the constant mode. Periodic solutions of this recurrence are discrete Fourier modes, so $\mu=\cos\frac{2\pi k}{n}$ with $1\le k\le n-1$. The maximum uses $k=1$, which gives the bound in (a) and its sine-wave equality case. Equivalently, (a) is the discrete Wirtinger inequality $\sum(x_i-x_{i+1})^2\ge4\sin^2\frac\pi n\sum x_i^2$. The minimum depends on parity. For even $n$, the alternating vector $\pm\sqrt{n-1}(-1)^i$ gives $q=-n(n-1)$. For odd $n$, no alternating vector closes up, and the best is $-n(n-1)\cos\frac\pi n$, attained by a whole circle of sine waves of frequency $\frac{\pi(n-1)}{n}$.`,
      "hints": [
        String.raw`Lagrange multipliers give $x_{i-1}+x_{i+1}=2\mu x_i$: solve the cyclic recurrence.`,
        String.raw`Try $x_i=r^i$: periodicity forces $r^n=1$, and $\mu=(r+r^{-1})/2$.`,
        String.raw`Then maximize and minimize $\cos(2\pi k/n)$ over $1\le k\le n-1$.`,
        String.raw`Equality cases: $x$ lies in the extremal mode space; scale by $\sum x_i^2$.`
      ],
      "steps": [
        String.raw`Notation. Put $S=\sum x_i^{2}=n(n-1)$ and $q=\sum x_ix_{i+1}$ (cyclic indices). Expanding the squares and using $\sum x_{i+1}^{2}=\sum x_i^{2}=S$ (shift of a cyclic sum) gives the two identities $$\sum_{i}(x_i-x_{i+1})^{2}=2S-2q,\qquad \sum_{i}(x_i+x_{i+1})^{2}=2S+2q.$$`,
        String.raw`Existence of extrema. The feasible set $K=\{x\in\mathbb R^{n}:\sum x_i=0,\ \sum x_i^{2}=S\}$ is nonempty (for $n\ge2$: $x=(t,-t,0,\dots)$ scaled), closed and bounded, hence compact; the continuous $q$ attains a maximum and a minimum on $K$.`,
        String.raw`Lagrange equations at an extremum. At an extremizer $x\in K$ the gradients of the constraints, $\mathbf 1$ and $2x$, are linearly independent ($x$ is not constant since $\sum x_i=0$ while $S=n(n-1)\gt 0$), so $\partial q/\partial x_i=x_{i-1}+x_{i+1}=2\mu x_i+\nu$ for all $i$ and some $\mu,\nu\in\mathbb R$. Summing over $i$: the left side is $2\sum x_i=0$ and the right side is $2\mu\sum x_i+n\nu=n\nu$, so $\nu=0$ and every extremizer satisfies $$x_{i-1}+x_{i+1}=2\mu x_i\qquad(\text{cyclically}).$$ Multiplying by $x_i$ and summing over $i$ gives $2q=2\mu S$, i.e. $\mu=q/S$.`,
        String.raw`Solving the cyclic recurrence. If $|\mu|\gt 1$ the characteristic roots $r_{1,2}=\mu\pm\sqrt{\mu^{2}-1}$ are real, distinct, with $r_1r_2=1$, so neither has absolute value $1$; the general solution $x_i=Ar_1^{i}+Br_2^{i}$ with the period condition $x_{i+n}=x_i$ forces $A(r_1^{n}-1)=B(r_2^{n}-1)=0$, hence $x\equiv0$, impossible. Therefore $|\mu|\le1$; write $\mu=\cos\theta$, $\theta\in[0,\pi]$. For $0\lt \theta\lt \pi$ the general real solution is $x_i=A\cos(i\theta)+B\sin(i\theta)$ (linear independence of $e^{\pm i\theta}$; verified by the addition formulas); shifting $i\mapsto i+n$ rotates the coefficient vector by angle $n\theta$, so a nonzero periodic solution exists iff $n\theta\equiv0\pmod{2\pi}$, i.e. $\theta=2\pi k/n$ with $1\le k\le n-1$. Boundary cases: $\mu=1$ gives $x_i=A+Bi$, periodic iff $B=0$ (constant, excluded by mean zero since $S\gt 0$); $\mu=-1$ requires $\theta=\pi$, i.e. $n$ even, and gives the alternating mode $x_i=A(-1)^i$ (the second solution $(A+Bi)(-1)^i$ is periodic iff $B=0$, and for odd $n$ even $A(-1)^i$ fails to close).`,
        String.raw`Attainable stationary values. For each $k\in\{1,\dots,n-1\}$, the functions $c_i^{(k)}=\cos(2\pi ki/n)$ and $s_i^{(k)}=\sin(2\pi ki/n)$ satisfy the recurrence with $\mu=\cos(2\pi k/n)$ by direct substitution. Their sums vanish by the geometric-series identity, and their squared norms are $n/2$ except for the alternating mode $k=n/2$ when $n$ is even, where $s^{(k)}\equiv0$ and $\sum(c_i^{(k)})^2=n$. Scaling a nonzero vector in each eigenspace to norm $\sqrt S$ gives an element of $K$ with $q=S\cos(2\pi k/n)$. Conversely, every extremizer satisfies the cyclic recurrence from step 3, so its $q/S=\mu$ must equal $\cos(2\pi k/n)$ for some $1\le k\le n-1$. Thus the extrema of $q$ are obtained by maximizing and minimizing $\cos(2\pi k/n)$ over $1\le k\le n-1$; the set of all values of $q$ on $K$, of course, is not finite.`,
        String.raw`Part (a): the maximum. For $n\ge4$ the angle $2\pi/n\in(0,\pi/2]$ and $\cos$ is strictly decreasing on $(0,\pi)$, so the largest value is $S\cos\frac{2\pi}{n}=n(n-1)\cos\frac{2\pi}{n}$ (modes $k$ and $n-k$ span the same plane). Equality holds iff $x$ lies in the $(c^{(1)},s^{(1)})$-plane with the right scaling, which is exactly $x_i=\sqrt{2(n-1)}\,\sin(\tfrac{2\pi i}{n}+\varphi)$ for some phase $\varphi$ (phase form of a nonzero planar vector; amplitude from $\sum\sin^{2}(\cdot+\varphi)=n/2$; mean zero from the geometric sum, valid $n\ge3$). The displayed equivalence also rewrites part (a) as the discrete Wirtinger inequality $\sum(x_i-x_{i+1})^{2}\ge4\sin^{2}(\pi/n)\sum x_i^{2}$: $2S-2q\ge2S(1-\cos\tfrac{2\pi}{n})$.`,
        String.raw`Part (b), $n$ even: the minimum $=-S$. The smallest cosine in the set is $\cos(2\pi\cdot\frac n2/n)=-1$ (unique mode $k=n/2$), so $\min q=-n(n-1)$. The eigenspace is the line $x_i=t(-1)^i$; mean zero holds ($n$ even) and $S=nt^{2}$ gives $t=\pm\sqrt{n-1}$: exactly two minimizers.`,
        String.raw`Part (b), $n$ odd: the minimum. The minimizing angles are $2\pi k/n$ with $k=\frac{n\pm1}{2}$ (closest to $\pi$), both giving $\mu=\cos(\pi\mp\frac{\pi}{n})=-\cos\frac{\pi}{n}=\cos\frac{\pi(n-1)}{n}$; so $\min q=S\cos\frac{\pi(n-1)}{n}$, and the minimizers are the scaled unit vectors of that single $2$-dimensional mode: $x_i=\sqrt{2(n-1)}\,\sin\bigl(\tfrac{\pi(n-1)}{n}i+\varphi\bigr)$, $\varphi$ arbitrary (the $k=\frac{n+1}{2}$ description is the same plane with a re-phased $\varphi$).`
      ]
    },
    {
      "id": "a22",
      "category": "alg",
      "difficulty": "hard",
      "stars": 4,
      "rating": 8,
      "confidence": "high",
      "text": String.raw`Let $1\lt u\lt v$ be integers. Define $a_1=1$ and $$a_n+a_{n/u}+a_{n/v}=0\qquad(n\ge 2),$$ where $a_k=0$ whenever $k$ is not an integer. Prove that $(a_n)$ is bounded if and only if $v=u^2$.`,
      "why": String.raw`Unrolling the recurrence shows that $a_n$ is a signed count of the ways to write $n$ as an ordered product of $u$'s and $v$'s. If no power of $u$ equals a power of $v$, these factorizations are just arrangements of letters. Then $|a_{u^mv^m}|=\binom{2m}{m}$, which is unbounded. Otherwise $u=d^r$ and $v=d^s$ with $\gcd(r,s)=1$. The sequence lives on the powers of $d$, and its generating function is $1/(1+z^r+z^s)$. A bounded integer sequence satisfying a linear recurrence is eventually periodic, so every zero of $1+z^r+z^s$ must lie on the unit circle. But $1+\zeta^r+\zeta^s=0$ with unit terms forces an equilateral triangle, so $\zeta$ is a primitive cube root of unity. The zeros are simple, so $s\le2$, giving $v=u^2$. Conversely, $1/(1+z+z^2)$ has period $1,-1,0$.`,
      "hints": [
        String.raw`Count signed words in $u,v$ with product $n$; independence gives $a_{u^mv^m}=\pm\binom{2m}m$.`,
        String.raw`Dependent case: $u=d^r$, $v=d^s$, generating function $1/(1+z^r+z^s)$.`,
        String.raw`Bounded integer blocks recur: $(c_N)$ becomes periodic, so every zero of $F$ lies on $|z|=1$.`,
        String.raw`On $|z|=1$ the terms $1,\zeta^r,\zeta^s$ form an equilateral triangle; simplicity then forces $s\le2$.`
      ],
      "steps": [
        String.raw`Word formula. For $n\ge1$, $a_n=\sum_w(-1)^{|w|}$, summed over all finite words $w$ in the letters $u,v$ whose product is $n$ (the empty word has product $1$). Proof by strong induction: for $n=1$ only the empty word has product $1$ (as $u,v\gt 1$), giving $a_1=1$. For $n\ge2$ a word with product $n$ is nonempty; grouping by its last letter, the words ending in $u$ correspond to words with product $n/u$ (present only if $u\mid n$), and similarly for $v$, each with one extra minus sign. This gives $a_n=-a_{n/u}-a_{n/v}$, the recurrence.`,
        String.raw`Independent case. Call $u,v$ multiplicatively independent if $u^av^b=1$ with integers $a,b$ forces $a=b=0$. Then $u^kv^\ell=u^{k'}v^{\ell'}$ implies $(k,\ell)=(k',\ell')$, so the words with product $u^kv^\ell$ are exactly the $\binom{k+\ell}{k}$ arrangements of $k$ letters $u$ and $\ell$ letters $v$, each of sign $(-1)^{k+\ell}$: $a_{u^kv^\ell}=(-1)^{k+\ell}\binom{k+\ell}{k}$. Then $|a_{u^mv^m}|=\binom{2m}{m}\to\infty$, so $(a_n)$ is unbounded.`,
        String.raw`Dependent case: normalization. Suppose $u,v$ are multiplicatively dependent, i.e. $u^a=v^b$ for some positive integers $a,b$ (in $u^Av^B=1$ the nonzero exponents must have opposite signs, since $u,v\gt1$). Comparing prime factorizations, the exponent vectors $x,y$ of $u,v$ satisfy $ax=by$, so they lie on a common line; let $w$ be the primitive integer vector on it, so $x=g_xw$, $y=g_yw$ with $g_x=\gcd(x)$, $g_y=\gcd(y)$, and put $g=\gcd(g_x,g_y)$. Let $d\gt 1$ be the integer with exponent vector $gw$. Then $u=d^r$, $v=d^s$ with $r=g_x/g$, $s=g_y/g$, $\gcd(r,s)=1$, and $r\lt s$ because $u\lt v$. Every word has product a power of $d$, so $a_n=0$ unless $n=d^N$. Put $c_N=a_{d^N}$. Since $d^N/u$ is an integer iff $N\ge r$, the recurrence reads $c_0=1$, $c_N=-c_{N-r}-c_{N-s}$ for $N\ge1$ (with $c_j=0$ for $j\lt 0$), i.e. $$\sum_{N\ge0}c_Nz^N=\frac1{1+z^r+z^s}.\tag{1}$$ Also $(a_n)$ is bounded iff $(c_N)$ is bounded.`,
        String.raw`If $v=u^2$ then bounded. Then $u=d$, $v=d^2$ ($r=1,s=2$) is one valid normalization, and (1) becomes $1/(1+z+z^2)=(1-z)/(1-z^3)=1-z+z^3-z^4+\cdots$, so $(c_N)=1,-1,0,1,-1,0,\dots$ and $|a_n|\le1$ for all $n$.`,
        String.raw`Bounded implies roots of unity. Suppose $(c_N)$ is bounded. The $c_N$ are integers, so the block $(c_N,\dots,c_{N+s-1})$ takes finitely many values, and the recurrence determines the next block from the previous one; hence the block sequence is eventually periodic, and so is $(c_N)$ itself with some period $T$ from some index $N_0$ (the next block is determined by the current one, so a repetition persists forever). Then $\sum c_Nz^N=P(z)+Q(z)/(1-z^T)$ for polynomials $P,Q$, so every pole of this rational function is a $T$-th root of unity. By (1) the numerator is $1$, so every zero of $F(z)=1+z^r+z^s$ is a pole, and therefore every zero $\zeta$ of $F$ satisfies $|\zeta|=1$.`,
        String.raw`Zeros are cube roots of unity. Let $F(\zeta)=0$. Then $1,\ \zeta^r,\ \zeta^s$ are three unit complex numbers summing to $0$, hence the vertices of an equilateral triangle: $\{\zeta^r,\zeta^s\}=\{\omega,\omega^2\}$ with $\omega=e^{2\pi i/3}$. So $\zeta^{3r}=\zeta^{3s}=1$, hence $\zeta^{3\gcd(r,s)}=\zeta^3=1$. As $F(1)=3\ne0$, all zeros of $F$ lie in $\{\omega,\omega^2\}$.`,
        String.raw`The zeros are simple. If $F(\zeta)=F'(\zeta)=0$ with $|\zeta|=1$, then $s\zeta^{s-1}+r\zeta^{r-1}=0$, so $s\zeta^{s-r}=-r$ and, taking absolute values, $s=r$, contradicting $r\lt s$. So $F$, whose degree is exactly $s$ because the coefficient of $z^s$ is $1$ and $s\ne r$, has $s$ distinct zeros, all in $\{\omega,\omega^2\}$; hence $s\le2$. With $1\le r\lt s$ this forces $(r,s)=(1,2)$, i.e. $u=d$, $v=d^2=u^2$.`,
        String.raw`Conclusion. If $u,v$ are independent, $(a_n)$ is unbounded. If they are dependent, $(a_n)$ is bounded iff $(r,s)=(1,2)$, i.e. iff $v=u^2$; and $v=u^2$ forces dependence. Hence $(a_n)$ is bounded if and only if $v=u^2$.`
      ]
    },
    {
      "id": "a23",
      "category": "alg",
      "difficulty": "hard",
      "stars": 4,
      "rating": 8,
      "confidence": "high",
      "text": String.raw`Find all functions $f:\mathbb{R}\to\mathbb{R}$ that are bounded above on some non-degenerate interval and satisfy $$f\bigl(2x-f(y)\bigr)=2f(x)-y\qquad\text{for all real }x,y.$$`,
      "why": String.raw`The answer is $f(x)=x$ together with the whole family $f(x)=c-x$, where $c$ is arbitrary. Many solvers find only the first. Substitutions show that $f$ is bijective with unique zero $t=f(0)$. They also give the doubling rule $f(2x)=2f(x)-t$, and from these comes $f(u+y)=f(u)+f(y)-t$. So $g=f-t$ is additive, satisfies $g(g(y))=y$, and has $g(t)=-t$. Conversely, every such $g$ gives a solution. Without regularity there are wild solutions, built from a Hamel basis by splitting $\mathbb R$ into $\mathbb Q$-subspaces on which $g$ acts as $+1$ and $-1$. The bounded-above hypothesis is exactly what excludes them: an additive function bounded above on an interval is linear. So $g(x)=\pm x$. The sign $+$ forces $t=0$, while $-$ leaves $t$ free.`,
      "hints": [
        String.raw`Get bijectivity, then linearize: set $x$ (resp. $y$) equal to $t=f(0)$.`,
        String.raw`Cocycle $f(u+y)=f(u)+f(y)-t$: $g:=f-t$ is additive with $g(g(y))=y$.`,
        String.raw`Bounded above on an interval makes $g$ continuous, hence $g(x)=cx$.`,
        String.raw`Then $g\circ g=\mathrm{id}$ and $g(t)=-t$ force $c=\pm1$; substitute back to verify.`
      ],
      "steps": [
        String.raw`Injective: $f(y_1)=f(y_2)$ collapses the two RHS of (E). Surjective: the $x=0$ line $f(-f(y))=2t-y$ covers $\mathbb{R}$ (t=f(0)). With $f(y_0)=0$: $x=0$ gives $t=2t-y_0$, so the unique zero is $y_0=t$.`,
        String.raw`Two linearizations: $y=t$: $f(2x)=2f(x)-t$; $x=t$: $f(2t-f(y))=-y$. Composing the second at $z=2t-f(y)$ gives the anti-periodicity $f(y+2t)=f(y)-2t$ (its orbits are unbounded below, consistent with the branch $f=-x+t$ where $t=f(0)$ - so this alone does not force $t=0$).`,
        String.raw`Cocycle identity: pick $z$ with $f(z)=-y$ and substitute $y\mapsto z$ in (E): $f(2x+y)=2f(x)-z$ for all $x$; writing $u=2x$ and using the doubling $2f(u/2)=f(u)+t$ from step 1 gives $f(u+y)=f(u)+t-z$ for every $u$; $u=0$ resolves $z=2t-f(y)$, hence $f(u+y)=f(u)+f(y)-t$.`,
        String.raw`Conjugation $g(x):=f(x)-t$: the cocycle reads $g(u+y)=g(u)+g(y)$, so $g$ is additive; $g(t)=-t$ since $f(t)=0$; and (E) becomes $g(g(y))=y$: an additive involution. Conversely, any additive involution $g$ with $g(t)=-t$ yields a solution $f=g+t$: $f(2x-f(y))=g(2x-g(y)-t)+t=2g(x)-g(g(y))-g(t)+t=2g(x)-y+2t=2f(x)-y$, so (E) is *classified*, not merely narrowed.`,
        String.raw`Regularity lemma. Let $g$ be additive and bounded above by $M$ on a non-degenerate interval. Choose $x_0$ in its interior and $\delta\gt 0$ such that $(x_0-\delta,x_0+\delta)$ lies inside that interval. For every $|h|\lt \delta$, both $x_0+h$ and $x_0-h$ belong to the interval, so $$g(h)=g(x_0+h)-g(x_0)\le M-g(x_0),$$ and $$-g(h)=g(x_0-h)-g(x_0)\le M-g(x_0).$$ Thus $|g(h)|\le C:=M-g(x_0)$ for $|h|\lt \delta$. Given $\varepsilon\gt 0$, choose $N$ with $C/N\lt \varepsilon$. If $|x|\lt \delta/N$, then $|Nx|\lt \delta$, so by additivity $$|g(x)|=\frac{|g(Nx)|}{N}\le\frac CN\lt \varepsilon.$$ Hence $g$ is continuous at $0$, and therefore continuous everywhere. Since $g(q)=qg(1)$ for rational $q$, continuity and density of $\mathbb Q$ give $$g(x)=xg(1)$$ for all real $x$. Apply this to $g=f-t$: subtracting the constant $t$ leaves $f$'s upper bound on the same interval intact ($M\mapsto M-t$), so the lemma forces $g(x)=xg(1)$.`,
        String.raw`Dichotomy: $g(x)=cx$ with $c^2=1$. $c=1$: $g(t)=-t$ forces $t=0$, so $f(x)=x$ (equivalently, the translation branch $f(x)=x+t$ leaves residual $-2t$ in (E)). $c=-1$: $g(t)=-t$ is automatic and $f(x)=g(x)+t=-x+t$, with $t=f(0)\in\mathbb{R}$ free.`,
        String.raw`Check: $f(x)=x$: LHS $=2x-y=$ RHS. $f(x)=-x+t$: LHS $=-(2x-(y-t))+t=-2x-y+2t$ and RHS $=2(-x+t)-y=-2x-y+2t$ - equal; both branches are continuous, hence bounded above on every bounded interval. Conversely, substituting the affine ansatz $f(x)=ax+b$ into (E) gives the residual $y(1-a^2)-b(a+1)$, so the identity system is $1-a^2=0$ and $-b(a+1)=0$: its solutions are exactly $(a,b)=(1,0)$ and $(-1,b)$ with $b$ free - the two branches above and no others.`
      ]
    },
    {
      "id": "a24",
      "category": "alg",
      "difficulty": "challenging",
      "stars": 5,
      "rating": 8.5,
      "confidence": "high",
      "text": String.raw`Find all functions $f: \mathbb{R} \to \mathbb{R}$ satisfying $$f(x f(y) - y f(x)) = f(x) f(y) - xy$$ for all real numbers $x$ and $y$.`,
      "why": String.raw`The answers are $x$, $-x$, $|x|$ and $\sqrt{x^2+1}$. The last two are easy to miss. Setting $x=y$ gives $f(x)^2=x^2+c$ with $c\in\{0,1\}$, so only the sign of $f$ at each point is unknown. If $c=0$, write $f(x)=\sigma(x)x$. The equation becomes a rule about how signs combine. Sorting each $p\gt0$ by the pair $(\sigma(p),\sigma(-p))$ shows the sign pattern is either constant or behaves like a $\pm1$-valued multiplicative function on the positive reals. Such a function is trivial, since every positive real is a square, and this gives $|x|$. If $c=1$, set $x=\sinh\alpha$. The equation becomes the identity $\cosh(\alpha-\beta)=\cosh\alpha\cosh\beta-\sinh\alpha\sinh\beta$. The values of $\alpha$ with positive sign form a subgroup of index at most two in $(\mathbb R,+)$. Halving shows the index is one.`,
      "hints": [
        String.raw`Substitute $x=y$: $f(x)^2$ becomes $x^2$ plus a fixed constant.`,
        String.raw`Case $c=0$: write $f(x)=\sigma(x)x$; a rule links $\sigma$ at opposite-sign pairs.`,
        String.raw`Type analysis of $\sigma(p),\sigma(-p)$: the surviving rule is multiplicative on positives.`,
        String.raw`Case $c=1$: set $x=\sinh\alpha$; the equation is the $\cosh$ subtraction law.`,
        String.raw`The good-parameter set is a subgroup of $(\mathbb R,+)$; halving kills its coset.`
      ],
      "steps": [
        String.raw`Setting $x=y$ gives $f(0)=f(x)^2-x^2$, so $f(x)^2=x^2+c$ with $c=f(0)$. At $x=0$: $c=c^2$, so $c\in\{0,1\}$.`,
        String.raw`Case $c=0$: sign rule. Then $f(0)=0$ and $f(x)=\sigma(x)x$ with $\sigma(x)\in\{\pm1\}$ for $x\ne0$. For $x,y\ne0$ the equation reads $$f\bigl(xy(\sigma(y)-\sigma(x))\bigr)=xy\bigl(\sigma(x)\sigma(y)-1\bigr).$$ If $\sigma(x)=\sigma(y)$ both sides are $0=f(0)$: no condition. If $\sigma(x)=1,\sigma(y)=-1$ it says $f(-2xy)=-2xy$, i.e. $\sigma(-2xy)=1$; if $\sigma(x)=-1,\sigma(y)=1$ it says $f(2xy)=-2xy$, i.e. $\sigma(2xy)=-1$. Applying the first to $(x,y)$ and the second to $(y,x)$, the equation is equivalent (for nonzero arguments) to $$\sigma(x)\ne\sigma(y)\ \Longrightarrow\ \sigma(2xy)=-1\ \text{and}\ \sigma(-2xy)=+1. \tag{R}$$`,
        String.raw`Types. For $p\gt 0$ let $a(p)=\sigma(p)$, $b(p)=\sigma(-p)$, and call $p$ of type $E^+=(1,1)$, $E^-=(-1,-1)$, $G=(1,-1)$, $H=(-1,1)$. Applying (R) to $(p,q)$, $(-p,-q)$, $(p,-q)$, $(-p,q)$ with $p,q\gt 0$ gives: (i) $a(p)\ne a(q)\Rightarrow 2pq\in H$; (ii) $b(p)\ne b(q)\Rightarrow 2pq\in H$; (iii) $a(p)\ne b(q)$ or $a(q)\ne b(p)$ $\Rightarrow 2pq\in G$. (For instance (iii) with $(p,-q)$: $2xy=-2pq$, so $\sigma(-2pq)=b(2pq)=-1$ and $\sigma(2pq)=a(2pq)=1$.)`,
        String.raw`No $G$ or $H$. If every positive number has type $E^\pm$, then $\sigma$ is even, $\sigma(x)=a(|x|)$. If $a(p)\ne a(q)$ for some $p,q\gt 0$, (i) gives $2pq\in H$, contradicting that no $H$ exists; so $a$ is constant and $f(x)=x$ or $f(x)=-x$.`,
        String.raw`Some $G$ or $H$ exists. Let $r$ be of type $G$ or $H$; then $a(r)\ne b(r)$, so (iii) with $p=q=r$ gives $2r^2\in G$. Fix $t\in G$. If $q$ had type $E^+$, then (iii) gives $2tq\in G$ (as $a(q)=1\ne b(t)=-1$) while (ii) gives $2tq\in H$ (as $b(t)=-1\ne b(q)=1$), impossible. If $q$ had type $E^-$, then (iii) gives $2tq\in G$ ($a(t)=1\ne b(q)=-1$) while (i) gives $2tq\in H$ ($a(t)=1\ne a(q)=-1$), impossible. So every positive number has type $G$ or $H$.`,
        String.raw`Put $\varepsilon(p)=+1$ for $p\in G$ and $-1$ for $p\in H$. For $p,q\gt 0$: if both are of type $G$, (iii) gives $2pq\in G$; if both are $H$, (iii) gives $2pq\in G$ ($a(p)=-1\ne b(q)=1$); if the types differ, (i) gives $2pq\in H$. Hence $\varepsilon(2pq)=\varepsilon(p)\varepsilon(q)$. With $e(u)=\varepsilon(u/2)$ this says $e(uv)=e(u)e(v)$ for $u,v\gt 0$, so $e(u)=e(\sqrt u)^2=1$. Thus every positive number is of type $G$: $\sigma(p)=1$, $\sigma(-p)=-1$, i.e. $f(x)=|x|$.`,
        String.raw`Check for $c=0$. $f(x)=\pm x$ satisfy the equation directly ($\sigma$ constant, so (R) is vacuous). For $f=|x|$, $\sigma=\operatorname{sgn}$: if $\sigma(x)\ne\sigma(y)$ then $xy\lt 0$, so $\sigma(2xy)=-1$ and $\sigma(-2xy)=1$, which is (R). So the solutions with $c=0$ are exactly $x$, $-x$, $|x|$.`,
        String.raw`Case $c=1$. Then $f(0)=1$ and $f(x)^2=x^2+1$. Write $f(\sinh\alpha)=\sigma(\alpha)\cosh\alpha$ with $\sigma(\alpha)=\pm1$ ($\sinh$ is a bijection of $\mathbb{R}$). For $x=\sinh\alpha$, $y=\sinh\beta$ the equation becomes $$f\bigl(\sigma(\beta)\sinh\alpha\cosh\beta-\sigma(\alpha)\sinh\beta\cosh\alpha\bigr)=\sigma(\alpha)\sigma(\beta)\cosh\alpha\cosh\beta-\sinh\alpha\sinh\beta.$$ Let $B=\{\sigma=1\}$, $A=\{\sigma=-1\}$; $0\in B$ since $f(0)=1$. Verification that $f=\sqrt{x^2+1}$ ($A=\varnothing$) works: the argument is $\sinh(\alpha-\beta)$ and the right side is $\cosh(\alpha-\beta)=\sqrt{\sinh^2(\alpha-\beta)+1}$.`,
        String.raw`(a) $\alpha,\beta\in B$: the argument is $\sinh(\alpha-\beta)$, the right side is $\cosh(\alpha-\beta)\gt 0$, so $\sigma(\alpha-\beta)=1$. Hence $B$ is an additive subgroup. (b) $\alpha,\beta\in A$: the argument is $\sinh(\beta-\alpha)$, the right side is $\cosh(\alpha-\beta)\gt 0$, so $\beta-\alpha\in B$. (c) $\alpha\in A,\beta\in B$: the argument is $\sinh(\alpha+\beta)$, the right side is $-\cosh(\alpha+\beta)\lt 0$, so $\sigma(\alpha+\beta)=-1$, i.e. $\alpha+\beta\in A$.`,
        String.raw`$A\ne\varnothing$. Suppose $\alpha_0\in A$. By (b), every $\alpha\in A$ has $\alpha-\alpha_0\in B$, and by (c), $\alpha_0+B\subseteq A$; so $A=\alpha_0+B$ and $\mathbb R=B\sqcup(\alpha_0+B)$. Consider $\alpha_0/2$. If $\alpha_0/2\in B$, then $\alpha_0=2(\alpha_0/2)\in B$ because $B$ is an additive subgroup; if $\alpha_0/2\in\alpha_0+B$, say $\alpha_0/2=\alpha_0+b$ with $b\in B$, then $\alpha_0=-2b\in B$. Both contradict $\alpha_0\in A$. Hence $A=\varnothing$, $\sigma\equiv1$, and $f(x)=\sqrt{x^2+1}$.`,
        String.raw`Combining both cases, the solutions are exactly $f(x)=x$, $f(x)=-x$, $f(x)=|x|$ and $f(x)=\sqrt{x^2+1}$.`
      ]
    },
    {
      "id": "a25",
      "category": "alg",
      "difficulty": "challenging",
      "stars": 5,
      "rating": 9,
      "confidence": "high",
      "text": String.raw`Find all functions $f:\mathbb{N}\to\mathbb{N}$ satisfying $$f(abc)+f(2af(b))+f(2bf(c))+f(2cf(a))=f(a)f(b)f(c)$$ for all $a,b,c\in\mathbb{N}$.`,
      "why": String.raw`The answer is $f\equiv2$ or $f(n)=n+2$. The first step is to recenter. With $k=f(1)$ and $u=f-k$, combining several instances of the equation removes the awkward inner terms $f(2af(b))$ and leaves a purely multiplicative identity for $u$. Comparing two ways of expanding $u(a^2b^2)$ gives $u(n^2)=2u(n)+\lambda u(n)^2$ for a single constant $\lambda$. Expanding $u(n^6)$ two ways forces $\lambda=\pm1$, after a parity argument rules out the integer solutions of $x^2+xy+y^2=6$. If $\lambda=-1$, iterating squares drives values below the lower bound, so $f\equiv2$. If $\lambda=1$, then $v=u+1$ satisfies $v(n^2)=v(n)^2$, and $k\in\{2,3\}$. For $k=2$, two formulas for one value differ by $96(t-1)^2$, a contradiction. For $k=3$, chains of fixed points force $v(n)=n$.`,
      "hints": [
        String.raw`Plug $a=b=c=n$ for $f(n)\ge2$; set $u=f-f(1)$ to get a three-point identity.`,
        String.raw`Compare $u(n^6)$ two ways: $u(n^2)=2u(n)+\lambda u(n)^2$; parity on $x^2+xy+y^2=6$ gives $\lambda=\pm1$.`,
        String.raw`With $v=u+1$: either $v(ab)=v(a)v(b)$ or $v(ab)+v(a)+v(b)=5$; chase value orbits.`
      ],
      "steps": [
        String.raw`Let $P(a,b,c)$ denote the given equation. At $a=b=c=n$: $$f(n)^3=f(n^3)+3f(2nf(n))\ge 4,$$ so $f(n)\ge2$ for all $n$. Write $k:=f(1)\ge2$ and $u(n):=f(n)-k\ (\ge 2-k)$, so $u(1)=0$.`,
        String.raw`$P(1,1,1)$: $k+3f(2k)=k^3$, so $f(2k)=(k^3-k)/3$ (integral since $3\mid k(k-1)(k+1)$); set $q:=u(2k)=k(k^2-4)/3$. $P(a,1,1)$: $f(a)+f(2ak)+f(2k)+f(2f(a))=k^2f(a)$ becomes, in terms of $u$:  (2)  $u(2ka)+u\bigl(2(k+u(a))\bigr)=(k^2-1)u(a)+2q$  for all $a$.`,
        String.raw`Main identity: add $P(a,b,1)+P(b,c,1)+P(c,a,1)$; replace $f(2af(b))+f(2bf(c))+f(2cf(a))$ by $f(a)f(b)f(c)-f(abc)$ (from $P(a,b,c)$) and each pair $f(2ak)+f(2f(a))$ (and its cousins in $b,c$) by $(k^2-1)f(x)-f(2k)$, from $P(x,1,1)$; substitute $f=k+u$. With $3f(2k)=k(k^2-1)$ all constants collapse to $-2k$ on both sides, leaving  (8)  $u(abc)-u(ab)-u(bc)-u(ca)=u(a)u(b)u(c)-u(a)-u(b)-u(c)$.`,
        String.raw`Quadratic relation: (8) at $(a,a,b)$ gives $u(a^2b)=u(a^2)+2u(ab)+u(a)^2u(b)-2u(a)-u(b)$; at $(a,b,b)$ symmetrically; at $(a,a,b^2)$ and $(a^2,b,b)$ it gives two expressions for $u(a^2b^2)$. Equating the two expressions and cancelling common terms yields  (9)  $u(a)^2\bigl(u(b^2)-2u(b)\bigr)=u(b)^2\bigl(u(a^2)-2u(a)\bigr)$.`,
        String.raw`If $u\equiv0$: $f\equiv k$, then $f(2k)=k$, while step 1 gives $f(2k)=(k^3-k)/3$ from $P(1,1,1)$; hence $k=(k^3-k)/3$, i.e. $k^2=4$, $k=2$: solution $f\equiv2$. Assume now $u\not\equiv0$, fix $r$ with $u(r)\ne0$. By (9), $\bigl(u(n^2)-2u(n)\bigr)/u(n)^2$ equals a fixed constant $\lambda\in\mathbb{Q}$ whenever $u(n)\ne0$ (plug $b=r$), and (9) also forces $u(n)=0\Rightarrow u(n^2)=0$. Hence  (14)  $u(n^2)=2u(n)+\lambda u(n)^2$ for every $n$.`,
        String.raw`Pinning $\lambda$: fix $n$, $x:=u(n)\ne0$, $x_i:=u(n^i)$. (8) at $(n,n,n)$: $x_3=3x_2+x^3-3x$, with $x_2=2x+\lambda x^2$ by (14). Since $n^6=(n^3)^2$, (14) gives $x_6=2x_3+\lambda x_3^2$; since $n^6=(n^2)^3$, (8) at $(n^2,n^2,n^2)$ gives $x_6=3x_4+x_2^3-3x_2$ with $x_4=2x_2+\lambda x_2^2$. Subtracting the two expressions for $x_6$ and factoring: $0=-x^3(\lambda-1)(\lambda+1)(\lambda x^3-6\lambda x-6)$.`,
        String.raw`Suppose $\lambda\ne\pm1$; the factor $\lambda x^3-6\lambda x-6$ is $-6$ at $\lambda=0$, so also $\lambda\ne0$. Since $n$ was arbitrary, $\lambda(t^3-6t)=6$ holds for *every* nonzero value $t$ of $u$. Put $y:=u(n^2)=x(2+\lambda x)$. $y=0\Rightarrow\lambda x=-2\Rightarrow-2(x^2-6)=6\Rightarrow x^2=3$, not integral; $y=x\Rightarrow\lambda x=-1\Rightarrow x=0$; both absurd. So $x\ne y$ are distinct nonzero solutions of $t^3-6t=6/\lambda$: $x^2+xy+y^2=6$. Mod $2$ this forces $x,y$ both even, making the left side divisible by $4$: contradiction. Hence $\lambda=\pm1$.`,
        String.raw`Case $\lambda=-1$: (14) reads $u(n^2)=u(n)(2-u(n))$. If $u(n)\le-1$, iterating $n,n^2,n^4,\dots$ strictly decreases each value (a step $t\le-1$ moves to $t(2-t)$, a drop of $t(1-t)\ge2$), so $u$ drops below the bound $u\ge2-k$; if $u(n)\ge3$ then $u(n^2)\le-3$, previous case. So all values lie in $\{0,1,2\}$. But $q=u(2k)$ is a value of $u$ and $q=k(k^2-4)/3\ge5$ for $k\ge3$, contradiction; hence $k=2$, $q=0$, $u\ge0$.`,
        String.raw`Still $\lambda=-1,k=2$: (2) is $u(4a)+u(2u(a)+4)=3u(a)$. $a=1$: $2u(4)=0$. $u(2)\in\{0,2\}$ from $0=u(4)=u(2)(2-u(2))$. If $u(2)=2$: $a=2$ gives $2u(8)=6$, i.e. $u(8)=3$, out. So $u(2)=0$, and $a=2$ then gives $u(8)=0$. Any $u(n)=2$ gives $u(4n)+u(8)=6$, out; so $u\in\{0,1\}$. Any $u(n)=1$: (8) at $(2,2,n)$ gives $u(4n)-2u(2n)=-1$, forcing $u(2n)=u(4n)=1$; iterating, $u(8n)=1$; (2) at $a=2n$ gives $1+u(6)=3$, i.e. $u(6)=2$, contradiction. Hence $u\equiv0$: $f\equiv2$.`,
        String.raw`Case $\lambda=1$: (14) becomes $v(n^2)=v(n)^2$ for $v:=u+1$ (so $v\ge 3-k$). If $k\ge4$: $q=k(k^2-4)/3=k^2+k(k-4)(k+1)/3\ge k^2$; (2) at $a=2k$, using $u((2k)^2)=q^2+2q$, gives $u(2(k+q))=q(k^2-1-q)\le-q\le-k^2\lt 2-k$, violating $u\ge2-k$. Hence $k\in\{2,3\}$.`,
        String.raw`Second key identity ($\lambda=1$): (8) at $(a,b,ab)$, writing $A=u(a)$, $B=u(b)$, $E=u(ab)$, with $u(a^2)=A^2+2A$, $u(b^2)=B^2+2B$, $u(a^2b^2)=E^2+2E$ and the Step-3 formulas for $u(a^2b),u(ab^2)$, reduces to $E^2-(AB+2)E+2A+2B-A^2B-AB^2-A^2-B^2=0$, which factors as $(E-A-B-AB)(E+A+B-2)=0$; in terms of $v$:  (36)  $\bigl(v(ab)-v(a)v(b)\bigr)\bigl(v(ab)+v(a)+v(b)-5\bigr)=0$  for all $a,b$.`,
        String.raw`Subcase $k=2$: $u\ge0$, so $v\ge1$, $q=0$. (2) at $a=1$ gives $u(4)=0$, so $v(4)=1$ and $v(2)^2=v(4)$ gives $v(2)=1$. (2) in $v$-form becomes  (38)  $$v(4a)+v\bigl(2(v(a)+1)\bigr)=3v(a)-1.$$ Suppose $u\not\equiv0$; then some value $t=v(n)\ge4$ exists, because any value $v(n)\gt 1$ has the square value $v(n^2)=v(n)^2\ge4$. By (36) at $(4,n)$, the additive branch would give $$v(4n)=5-v(4)-v(n)=4-t\le0,$$ impossible because $v\ge1$. Hence $v(4n)=t$, and (38) gives $$v(2(t+1))=2t-1.$$ Now apply (36) at $(2,t+1)$. Its additive branch would give $$v(2(t+1))=5-v(2)-v(t+1)=4-v(t+1)\le3,$$ whereas $v(2(t+1))=2t-1\ge7$. Thus the additive branch is impossible and $$v(t+1)=2t-1.$$`,
        String.raw`Set $s:=2t-1=v(t+1)$, an image value $\ge7$. Repeating the previous step's two moves with the value $s$: $v(2(s+1))=2s-1$ and $v(s+1)=2s-1$; since $s+1=2t$, this says $v(2t)=4t-3$, and (36) at $(2,t)$: its additive branch would give $v(2t)=5-v(2)-v(t)=4-v(t)\le3$ (as $v\ge1$ for $k=2$), impossible against $v(2t)=4t-3\ge13$; so $v(2t)=v(2)v(t)=v(t)$, i.e. $v(t)=4t-3$. In general: *every image value $T\ge4$ satisfies $v(T)=4T-3$*.`,
        String.raw`Apply the general rule to the values $r:=v(t)=4t-3\ (\ge13)$ and $s:=v(t+1)=2t-1$: $v(r)=16t-15$, $v(s)=8t-7$. Show $rs$ is a value: (36) at $(t,t+1)$ has additive branch $5-v(t)-v(t+1)=9-6t\lt 1$, impossible, so $v\bigl(t(t+1)\bigr)=v(t)v(t+1)=rs$. (36) at $(r,s)$: additive branch $5-v(r)-v(s)=27-24t\lt 1$, so $v(rs)=v(r)v(s)=(16t-15)(8t-7)$.`,
        String.raw`But $rs\ge4$ is an image value, so the general rule gives $v(rs)=4rs-3=4(4t-3)(2t-1)-3$. The two expressions cannot agree: $(16t-15)(8t-7)-\bigl[4(4t-3)(2t-1)-3\bigr]=(128t^2-232t+105)-(32t^2-40t+9)=96(t-1)^2\gt 0$ for $t\ge4$. Contradiction: no value $\ge4$ is attained; any value $v(m)\gt 1$ would force the value $v(m^2)=v(m)^2\ge4$, so $v\equiv1$, $u\equiv0$, contradicting the standing $u\not\equiv0$ - the branch $k=2,\lambda=1$ yields only $f\equiv2$.`,
        String.raw`Subcase $k=3$: $q=5$, i.e. $u(6)=5$, $v(6)=6$. By (36) at $(6,n)$, the additive branch would give $$v(6n)=5-v(6)-v(n)=-1-v(n)\le-1,$$ impossible since $v\ge0$ ($u\ge 2-k=-1$). Hence $$v(6n)=6v(n).$$ Equation (2) at $k=3$ is $$u(6a)+u(2u(a)+6)=8u(a)+10,$$ which in $v$-form gives $$v\bigl(2(v(n)+2)\bigr)=2(v(n)+2).$$ At $n=6$, $v(16)=16$; since $16=2^4$ and $v(n^2)=v(n)^2$, we have $v(16)=v(2)^4$, so $v(2)=2$. At $(2,3)$, (36) has additive branch $$v(6)=5-v(2)-v(3)=3-v(3)\le2\lt 6=v(6),$$ so it is impossible. Therefore the multiplicative branch holds: $$v(6)=v(2)v(3),$$ hence $v(3)=3$.`,
        String.raw`Finally, for any image value $t$: setting $m:=t+2$, the identity $v(2m)=2m$ holds; (36) at $(3,2m)$: additive branch $5-3-2m=2-2m\le-2\lt 0$, so $v(6m)=v(3)v(2m)=6m$, while $v(6m)=6v(m)$ gives $v(m)=m$ — and $m$ is again an image value. From $v(1)=1$: $1\mapsto3\mapsto5\mapsto\cdots$ fixes all odds; from $v(2)=2$: $2\mapsto4\mapsto6\mapsto\cdots$ fixes all evens. Thus $v(n)=n$ for all $n$, i.e. $f(n)=n+2$.`,
        String.raw`Converse: $f\equiv2$ gives $2+2+2+2=8$ on both sides. For $f(n)=n+2$: LHS $=(abc+2)+(2ab+4a+2)+(2bc+4b+2)+(2ca+4c+2)=(a+2)(b+2)(c+2)=f(a)f(b)f(c)$. Complete solution set: $f\equiv2$ or $f(n)=n+2$.`
      ]
    },
    {
      "id": "c1",
      "category": "cmb",
      "difficulty": "warmup",
      "stars": 1,
      "rating": 2,
      "confidence": "high",
      "text": String.raw`Start with one pile of $n\ge 1$ stones. A move chooses a pile of size $k\ge 2$ and replaces it by two piles of positive sizes adding to $k$. If a pile of size $k$ is split into piles of sizes $a$ and $b$, that split scores $ab(a+b)$. The process ends when every pile is a single stone. Prove that the total score is independent of the choices, and find it.`,
      "why": String.raw`The score looks path-dependent, but $ab(a+b)$ is secretly a difference of cubes: $(a+b)^3-a^3-b^3=3ab(a+b)$. So every split lowers the sum of the cubes of the pile sizes by exactly three times the points it scores. That sum starts at $n^3$ (one pile) and ends at $n$ (all singletons) whatever you do, so the total score is always $(n^3-n)/3=n(n^2-1)/3=2\binom{n+1}{3}$, an integer because $3\mid n^3-n$. The official solution packages the same identity as a strong induction on the first split. The trick generalizes: the familiar version scoring $ab$ uses squares instead, since $(a+b)^2-a^2-b^2=2ab$, and gives $\binom n2$. Whenever a score is a symmetric polynomial difference, look for the matching power sum.`,
      "hints": [
        String.raw`Seek a pile statistic whose drop at a split is a fixed multiple of the score.`
      ],
      "steps": [
        String.raw`Let $S(n)$ be the total score of any complete decomposition of a pile of size $n$, once independence is known; the argument below proves simultaneously that every decomposition has the same score and that the score equals $n(n^2-1)/3$.`,
        String.raw`For $n=1$ there are no splits, so the score is $0$, which equals $1(1-1)/3$.`,
        String.raw`Suppose the claim is known for every pile smaller than $n\ge 2$, and the first split of the pile $n$ is into $a+b=n$ with $a,b\ge 1$. The score of that split is $abn$, and the later scores are $S(a)$ and $S(b)$ by the inductive hypothesis. The total is $$\frac{a(a^2-1)}{3}+\frac{b(b^2-1)}{3}+ab(a+b).$$`,
        String.raw`Multiplying by $3$ produces $a^3-a+b^3-b+3ab(a+b)=(a+b)^3-(a+b)$. Dividing by $3$ returns $(a+b)\bigl((a+b)^2-1\bigr)/3=n(n^2-1)/3$.`,
        String.raw`The total depends only on $n$. Therefore every complete decomposition scores $n(n^2-1)/3$.`
      ]
    },
    {
      "id": "c2",
      "category": "cmb",
      "difficulty": "warmup",
      "stars": 1,
      "rating": 2.5,
      "confidence": "high",
      "text": String.raw`Let $n\ge 1$. An $\mathit{interval}$ in $\{1,2,\dots,n\}$ is a nonempty set of consecutive integers. Let $\mathcal{F}$ be a family of intervals such that every two members of $\mathcal{F}$ intersect, and no member of $\mathcal{F}$ contains another. Prove that $$|\mathcal{F}|\le \left\lceil\frac n2\right\rceil,$$ and show that the bound is sharp for every $n$.`,
      "why": String.raw`Two conditions that look unrelated combine into a squeeze. First, pairwise intersecting intervals all share a point: the interval with the largest left endpoint meets the one with the smallest right endpoint, so that largest left endpoint $x$ lies in every member (Helly's theorem on a line). Second, no containment means that left endpoints are distinct and, once sorted increasingly, the right endpoints increase too. Now the $m$ left endpoints are distinct numbers in $\{1,\dots,x\}$ and the $m$ right endpoints are distinct numbers in $\{x,\dots,n\}$, so $m\le\min(x,n-x+1)\le\lceil n/2\rceil$. Equality comes from sliding a window: with $m=\lceil n/2\rceil$, the intervals $[i,i+m-1]$ for $1\le i\le m$ all have length $m$, all contain the point $m$, and fit inside $\{1,\dots,n\}$.`,
      "hints": [
        String.raw`Show all intervals share one point: max left endpoint $\le$ min right endpoint.`,
        String.raw`Antichain means equal left endpoints are impossible and right endpoints then increase together.`,
        String.raw`Sharpness: $m=\lceil n/2\rceil$ equal-length windows $[i,\,i+m-1]$, all containing $m$.`
      ],
      "steps": [
        String.raw`Write each interval as $[L,R]=\{L,L+1,\dots,R\}$ with $1\le L\le R\le n$. Let $L_\ast$ be the maximum left endpoint in $\mathcal{F}$ and $R_\ast$ the minimum right endpoint. The interval attaining $L_\ast$ and the interval attaining $R_\ast$ intersect, so $L_\ast\le R_\ast$. Every member then contains the point $x=L_\ast$, because its left endpoint is at most $L_\ast$ and its right endpoint is at least $R_\ast\ge L_\ast$.`,
        String.raw`Thus every interval $[L_i,R_i]$ in $\mathcal{F}$ satisfies $L_i\le x\le R_i$. If $L_i=L_j$ and $R_i\le R_j$, then $[L_i,R_i]\subseteq[L_j,R_j]$. The antichain hypothesis therefore forces all left endpoints to be distinct, and likewise, after sorting $L_1\lt \cdots\lt L_m$, the right endpoints must satisfy $R_1\lt \cdots\lt R_m$. Otherwise $L_i\lt L_j$ and $R_i\ge R_j$ would give a containment.`,
        String.raw`The increasing left endpoints are $m$ distinct integers in $\{1,\dots,x\}$, so $m\le x$. The increasing right endpoints are $m$ distinct integers in $\{x,\dots,n\}$, so $m\le n-x+1$. Hence $m\le\min(x,\,n-x+1)\le\lceil n/2\rceil$.`,
        String.raw`For sharpness let $m=\lceil n/2\rceil$ and take the intervals $[i,\, m+i-1]$ for $i=1,\dots,m$. Each right endpoint is at most $m+(m-1)=2m-1\le n$, and each interval contains $m$. If $i\lt j$, then the $i$-th interval starts further left and ends further left, so neither contains the other. This is an intersecting antichain of size $m$.`
      ]
    },
    {
      "id": "c3",
      "category": "cmb",
      "difficulty": "easy",
      "stars": 2,
      "rating": 3,
      "confidence": "high",
      "text": String.raw`A town has $n$ residents and $m$ clubs, each club being a set of residents, with no two clubs having the same membership. For every club, the number of its members is congruent to $1\pmod{3}$, and for any two clubs, the number of their common members is congruent to $0\pmod{3}$. Suppose that $m=n$. Prove that for every resident, the number of clubs containing that resident is congruent to $1\pmod{3}$.`,
      "why": String.raw`Turn the clubs into the 0-1 incidence matrix $M$ (rows clubs, columns residents) over $\mathbb F_3$. Both hypotheses become the single equation $MM^T=I$: club sizes sit on the diagonal and pairwise intersections off it. With $m=n$, $M$ is square, $\det(M)^2=1$, so $M$ is invertible and its right inverse $M^T$ is also a left inverse: $M^TM=I$. The diagonal of $M^TM$ counts the clubs through each resident, so each count is $1$ mod 3 (and, as a bonus, any two residents share a multiple of 3 clubs). The whole content is that a one-sided inverse of a square matrix is two-sided, and that is exactly why $m=n$ is needed: one club $\{1,2,3,4\}$ among five residents satisfies both rules, yet resident 5 is in no club.`,
      "hints": [
        String.raw`Encode club membership as a $0$-$1$ matrix $M$ and work modulo $3$.`,
        String.raw`The two congruences are one equation: $MM^T=I$ over $\mathbb F_3$.`,
        String.raw`With $m=n$, $M$ is invertible, so $M^TM=I$ too; read off its diagonal.`
      ],
      "steps": [
        String.raw`Encode membership by the $m\times n$ matrix $M$ with $M_{ij}=1$ if resident $j$ belongs to club $i$, working with all arithmetic modulo $3$. The $(i,j)$ entry of $MM^{T}$ is the size of club $i$ intersected with club $j$ for $i\ne j$, and the size of club $i$ for $i=j$.`,
        String.raw`By the hypotheses, $MM^{T}=I_m$ over $\mathbb{F}_3$: off-diagonal entries are $0$ (common members divisible by $3$) and diagonal entries are $1$ (club sizes $\equiv 1\pmod 3$).`,
        String.raw`Assume $m=n$, so $M$ is square. From $MM^{T}=I$ take determinants modulo $3$: $\det(M)^2=1$, so $\det(M)\not\equiv 0\pmod 3$ and $M$ is invertible over $\mathbb{F}_3$. Multiplying $MM^{T}=I$ on the right by $M$ gives $M(M^{T}M)=M$; cancel the invertible $M$ to get $M^{T}M=I_n$.`,
        String.raw`Read the diagonal of $M^{T}M$ at resident $p$: it is $\sum_i (M_{ip})^2=\sum_i M_{ip}$, since squaring changes nothing among $0$ and $1$, and this sum is exactly $r(p)$, the number of clubs containing $p$. Hence $r(p)\equiv 1\pmod 3$ for every resident $p$, as claimed.`,
        String.raw`The regime is nonempty: singleton clubs $\{1\},\dots,\{n\}$ satisfy every hypothesis with $m=n$ and $r(p)=1$. The hypothesis $m=n$ is used exactly once, in step 2, and cannot be dropped: one club $\{1,2,3,4\}$ on five residents satisfies both congruence rules with $m=1\ne 5$ and $r(5)\equiv 0$. The converse also fails: one club $\{1,2,3,4\}$ on four residents has $r(p)\equiv 1$ for all $p$ although $m=1\ne 4$ (the congruences alone force only $m\le n$).`
      ]
    },
    {
      "id": "c4",
      "category": "cmb",
      "difficulty": "easy",
      "stars": 2,
      "rating": 3,
      "confidence": "high",
      "text": String.raw`At a club meeting, each pair of members either shook hands once or did not shake hands at all. There were $n$ members and $m$ handshakes. Suppose:

(a) every member shook hands with an odd number of other members;
(b) every pair of members had an even number of common acquaintances (members who shook hands with both; the condition applies to every pair, whether or not the two members shook hands with each other). Prove that $m-\tfrac n2$ is an even integer.`,
      "why": String.raw`Count wedges, meaning a member together with two of its handshake partners, in two ways. By the middle member, the count is $\sum_v\binom{d_v}{2}$. By the two outer members, it is the sum of common-acquaintance counts over all pairs, adjacent or not, which is why condition (b) has to cover every pair; each term is even. For odd $d=2k+1$ we have $\binom d2=k(2k+1)\equiv k=\frac{d-1}{2}\pmod 2$, so $\sum_v\frac{d_v-1}{2}=m-\frac n2$ is even. (Also $n$ is even because the odd degrees sum to $2m$, so $m-\frac n2$ is an integer at all.) Examples exist: $K_n$ for even $n$, or three pairs in a row where each pair is joined internally and to its neighbouring pairs, giving $n=6$ and $m=11$.`,
      "hints": [
        String.raw`Double count wedges, a centre with two partners, by centre and by ends.`,
        String.raw`First note $n$ is even: odd degrees sum to $2m$, so $m-\frac n2$ is an integer.`,
        String.raw`Mod $2$, $\binom{2k+1}{2}\equiv k$; summing gives $m-\frac n2\equiv0$.`
      ],
      "steps": [
        String.raw`Notation: $d_v$ = number of handshakes of member $v$ (odd, by (1)); $\mathrm{codeg}(u,w)$ = number of members who shook hands with both $u$ and $w$ (even, by (2), for EVERY pair $u\ne w$).`,
        String.raw`The statement is about an integer, so first note $n$ is even: $\sum_v d_v=2m$ is even and each $d_v$ is odd, hence the number $n$ of odd summands is even. Thus $\tfrac n2$ and $m-\tfrac n2$ are integers.`,
        String.raw`Double count WEDGES (length-2 chains: a center member together with two of its handshake partners): choosing a center $v$ and two partners gives $\binom{d_v}2$ wedges; choosing the two END members $\{u,w\}$ and a common acquaintance between them gives $\mathrm{codeg}(u,w)$. Both count the same set: $$\sum_{v}\binom{d_v}{2}=\sum_{\{u,w\}}\mathrm{codeg}(u,w).$$ (A wedge with center $v$ and ends $u,w$ is exactly a common acquaintance of $u$ and $w$; the two ends are distinct and neither equals the center, since $G$ is simple.)`,
        String.raw`Right side is even by (2): every term $\mathrm{codeg}(u,w)$ is even.`,
        String.raw`Left side mod 2: write $d_v=2k_v+1$; then $\binom{d_v}{2}=k_v(2k_v+1)\equiv k_v=\frac{d_v-1}{2}\pmod2$. Hence $$0\equiv\sum_vk_v=\frac{\sum_vd_v-n}{2}=\frac{2m-n}{2}=m-\frac n2\pmod2,$$ which is exactly the claim.`,
        String.raw`Non-vacuity: for every even $n$, the complete graph $K_n$ satisfies (1) and (2): every degree is $n-1$, hence odd, every codegree is $n-2$, hence even, and $$m-\frac n2=\frac{n(n-1)}2-\frac n2=\frac{n(n-2)}2,$$ which is even when $n$ is even.`
      ]
    },
    {
      "id": "c5",
      "category": "cmb",
      "difficulty": "easy",
      "stars": 2,
      "rating": 3,
      "confidence": "high",
      "text": String.raw`Let $a_n$ be the number of strings of length $n$ with entries in $\{1,2,3,4\}$ such that no partial sum is divisible by $3$. Prove that $a_1=3$, $a_2=8$ and $$a_n=2a_{n-1}+a_{n-2}\qquad(n\ge 3).$$ Deduce a closed form.`,
      "why": String.raw`Only the running sum mod 3 matters, and it must stay in $\{1,2\}$. The letters $1,2,3,4$ have residues $1,2,0,1$, so residue 1 comes in two flavours. From sum 1 you may add a 3 (stay) or a 1 or 4 (move to 2), while a 2 is fatal; from sum 2 you may add a 3 (stay) or a 2 (move to 1). With $A_n,B_n$ the counts ending at 1 and 2, this gives $A_{n+1}=A_n+B_n$ and $B_{n+1}=2A_n+B_n$. The neat point is $A_{n+1}=a_n$: every valid string of length $n$ extends in exactly one way to sum 1. Eliminating $A$ yields $a_n=2a_{n-1}+a_{n-2}$ with $a_1=3$, $a_2=8$; the roots are $1\pm\sqrt2$, and $a_n=(1+\frac{\sqrt2}{4})(1+\sqrt2)^n+(1-\frac{\sqrt2}{4})(1-\sqrt2)^n$.`,
      "hints": [
        String.raw`Track the running sum modulo $3$: states $1$ and $2$, state $0$ is fatal.`,
        String.raw`Letters contribute residues $1,2,0,1$: residue $1$ has two choices - tabulate the transitions.`
      ],
      "steps": [
        String.raw`A partial sum congruent to $0$ modulo $3$ is forbidden, including after the first letter, so every nonempty prefix has running sum in $\{1,2\}$ modulo $3$. Let $A_n$ (respectively $B_n$) be the number of valid strings of length $n$ whose total sum is congruent to $1$ (respectively $2$) modulo $3$, and set $a_n=A_n+B_n$.`,
        String.raw`The letters contribute residues $1,2,0,1$ respectively, so residue $1$ can be appended in two ways and residues $0$ and $2$ in one way each. From a string with sum $1$, the legal appendages are: one letter of residue $0$, staying at sum $1$, and two letters of residue $1$, moving to sum $2$. The residue-$2$ letter would reach $0$ and is forbidden. From sum $2$, the legal appendages are one letter of residue $2$, moving to sum $1$, and one letter of residue $0$, staying at sum $2$.`,
        String.raw`Therefore $A_{n+1}=A_n+B_n$ and $B_{n+1}=2A_n+B_n$. In particular $A_{n+1}=a_n$ and $a_{n+1}=3A_n+2B_n=2a_n+A_n$. For $n\ge 2$ one has $A_n=a_{n-1}$, so $a_{n+1}=2a_n+a_{n-1}$. Shifting the index gives the stated recurrence for $n\ge 3$.`,
        String.raw`The initial values are read off directly. Length $1$: the letters $1,2,4$ are legal and $3$ is not, so $a_1=3$, with $A_1=2$ and $B_1=1$. Length $2$: the recurrence for the states gives $A_2=A_1+B_1=3$ and $B_2=2A_1+B_1=5$, so $a_2=8$.`,
        String.raw`The characteristic polynomial is $r^2-2r-1=0$, with roots $1\pm\sqrt2$. Solving $A(1+\sqrt2)+B(1-\sqrt2)=3$ and $A(1+\sqrt2)^2+B(1-\sqrt2)^2=8$ yields $A=1+\sqrt2/4$ and $B=1-\sqrt2/4$. Hence $$a_n=\left(1+\frac{\sqrt2}{4}\right)(1+\sqrt2)^n+\left(1-\frac{\sqrt2}{4}\right)(1-\sqrt2)^n.$$`
      ]
    },
    {
      "id": "c6",
      "category": "cmb",
      "difficulty": "easy",
      "stars": 2,
      "rating": 3.5,
      "confidence": "high",
      "text": String.raw`Eight cities are joined by two-way roads. The road network contains no triangle: no three cities are pairwise joined by roads. Moreover, among every 4 cities, at least two of the six connecting pairs are joined by roads. Prove that no such road network exists.`,
      "why": String.raw`This is a hands-on proof that the Ramsey number $R(3,4)$ is not 8. Read the 4-city rule as "no four cities span fewer than two roads". First find three mutually unjoined cities $T$: the neighbours of any city of degree at least 3 work, since a road among them would close a triangle, and if all degrees are at most 2 a greedy pick succeeds among 8 cities. Each of the 5 other cities forms a 4-set with $T$, so it sends at least two roads into $T$. That is at least 10 roads landing on 3 cities, so some $u\in T$ has degree at least 4. But triangle-freeness makes the neighbours of $u$ pairwise unjoined, and four of them span zero roads, a contradiction. Indeed $R(3,4)=9$, and a 9th city genuinely breaks the argument.`,
      "hints": [
        String.raw`First find three mutually non-adjacent cities: neighbours of a vertex of degree $\ge3$, or greedy.`,
        String.raw`Then count roads from the other five cities into this triple.`,
        String.raw`Apply the 4-city rule to each outsider together with the triple to get two roads each.`,
        String.raw`Pigeonhole a triple member of degree $\ge4$; its neighbourhood spans no roads.`
      ],
      "steps": [
        String.raw`Find an independent triple. If some city $v$ has at least $3$ roads, take three cities joined to $v$: no two of them are joined to each other (such a road plus $v$ would form a triangle), so they are mutually roadless. If every city has at most $2$ roads, build a roadless set greedily: pick any city, discard it together with its at most $2$ neighbours, repeat; the first two picks discard at most $3 + 3 = 6$ of the $8$ cities, so some city survives for a third pick - three mutually roadless cities $T = \{a, b, c\}$ are guaranteed either way.`,
        String.raw`Count roads from the outsiders into $T$. Let $x$ be any of the other $5$ cities. The $4$ cities $x, a, b, c$ span at least two roads by hypothesis; none of the three pairs inside $T$ is a road, so every road among these $4$ cities touches $x$ - hence $x$ sends at least $2$ roads into $T$. Summing over the $5$ outsiders: at least $10$ roads join $T$ to its complement.`,
        String.raw`Pigeonhole a rich city. Ten or more roads land on the three cities of $T$, so some $u \in T$ receives at least $4$ of them: $d(u) \ge 4$ (all its roads go to outsiders, none inside $T$).`,
        String.raw`Kill the network. Two cities both joined to $u$ cannot be joined to each other (triangle-free), so the neighbourhood $N(u)$ - at least $4$ cities - is mutually roadless. Take any $4$ of them: these $4$ cities span exactly zero roads, contradicting the hypothesis that every $4$ cities span at least two. No such network exists on $8$ cities.`
      ]
    },
    {
      "id": "c7",
      "category": "cmb",
      "difficulty": "easy",
      "stars": 2,
      "rating": 3.5,
      "confidence": "high",
      "text": String.raw`For any integer $n\ge2$, prove that there exists a set $S$ of $2n$ distinct triangular numbers partitionable into two subsets of size $n$ with equal sums.

A triangular number is a positive integer of the form $\tfrac{k(k+1)}2$ for some positive integer $k$.`,
      "why": String.raw`Small cases and one renewable identity do all the work. The seeds are $T_1+T_5=T_3+T_4=16$ for $n=2$ and $T_1+T_3+T_6=T_2+T_4+T_5=28$ for $n=3$. Then, for any $m$, $T_m+T_{2m+3}=T_{m+2}+T_{2m+2}$: both sides double to $5m^2+15m+12$. Choosing $m$ larger than every index already used adds four new distinct triangular numbers, two to each side, so the sums stay equal and each side grows by 2. Induction in steps of 2 from the two seeds covers all $n\ge2$. The only subtlety is distinctness, which "fresh, large $m$" handles automatically. Using $8T_r+1=(2r+1)^2$, the identity is equivalent to $(2m+1)^2+(4m+7)^2=(2m+5)^2+(4m+5)^2$, a two-way sum of squares.`,
      "hints": [
        String.raw`Induct by steps of $2$ from seeds $n=2$ and $n=3$, adding two numbers per side.`,
        String.raw`Key identity $T_m+T_{2m+3}=T_{m+2}+T_{2m+2}$, valid for $m$ above all used indices.`
      ],
      "steps": [
        String.raw`Write $T_r=r(r+1)/2$. For $n=2$, $$T_1+T_5=T_3+T_4=16,$$ so four distinct triangular numbers work.`,
        String.raw`For $n=3$, $$T_1+T_3+T_6=T_2+T_4+T_5=28,$$ so six distinct triangular numbers work.`,
        String.raw`Suppose a valid construction for some $n$ uses only indices at most $M$. Choose $m\gt M$. The identity $$T_m+T_{2m+3}=T_{m+2}+T_{2m+2}$$ follows by expanding the definition of $T_r$.`,
        String.raw`The four new indices $m,m+2,2m+2,2m+3$ are pairwise distinct and all exceed $M$. Put $T_m,T_{2m+3}$ on one side and $T_{m+2},T_{2m+2}$ on the other. Both sides gain the same sum and both cardinalities increase by $2$.`,
        String.raw`Starting from $n=2$ and increasing by $2$ proves every even $n$; starting from $n=3$ and increasing by $2$ proves every odd $n$.`
      ]
    },
    {
      "id": "c8",
      "category": "cmb",
      "difficulty": "easy",
      "stars": 2,
      "rating": 4,
      "confidence": "high",
      "text": String.raw`Let $X$ be an $n$-element set, and let $A_1,A_2,\dots,A_n$ be subsets of $X$ such that
(a) $|A_i|$ is odd for every $i$;
(b) $|A_i\cap A_j|$ is even whenever $i\ne j$. An $\mathit{assignment}$ is a choice of pairwise distinct elements $x_1,\dots,x_n\in X$ with $x_i\in A_i$ for every $i$. Prove that the number of assignments is odd.`,
      "why": String.raw`An assignment uses $n$ distinct elements of an $n$-element set, so it is really a permutation $\sigma$ with $y_{\sigma(i)}\in A_i$. The number of assignments is therefore the permanent of the incidence matrix $M$. The permanent is hard to control, but mod 2 it equals the determinant, because the signs disappear. The hypotheses say exactly that $MM^T=I$ over $\mathbb F_2$ (odd sizes on the diagonal, even intersections off it), so $\det M=1$ and the count is odd. The surprise is that purely parity information about the sets forces not just existence but an odd number of systems of distinct representatives. The same matrix fact is the engine of the Oddtown theorem, which uses it to bound the number of sets by $n$.`,
      "hints": [
        String.raw`Encode membership as the $n\times n$ incidence matrix $M$ over $\mathbb F_2$; the hypotheses read $MM^T=I$.`,
        String.raw`Assignments are exactly the nonzero terms in the permanent of $M$.`,
        String.raw`Mod $2$ the permanent equals the determinant, which is $1$.`
      ],
      "steps": [
        String.raw`Fix an enumeration $X=\{y_1,\dots,y_n\}$ and let $M=(m_{ij})$ be the $n\times n$ incidence matrix, where $m_{ij}=1$ exactly when $y_j\in A_i$; regard all entries as elements of $\mathbb F_2$.`,
        String.raw`The $(i,i)$ entry of $MM^T$ is $|A_i|$ modulo $2$, hence equals $1$. For $i\ne j$, the $(i,j)$ entry is $|A_i\cap A_j|$ modulo $2$, hence equals $0$. Thus $$MM^T=I$$ over $\mathbb F_2$.`,
        String.raw`Therefore $M$ is invertible and $\det M=1$ in $\mathbb F_2$.`,
        String.raw`The number of assignments equals the permanent $$\operatorname{per}(M)=\sum_{\sigma\in S_n}\prod_i m_{i,\sigma(i)}.$$ Indeed, an assignment $x_1,\dots,x_n$ lists $n$ pairwise distinct elements of the $n$-set $X$, so they exhaust $X$: there is a unique permutation $\sigma\in S_n$ with $x_i=y_{\sigma(i)}$ for every $i$, and the assignment is valid precisely when $y_{\sigma(i)}\in A_i$, i.e. $\prod_i m_{i,\sigma(i)}=1$; conversely every such $\sigma$ arises from exactly one assignment, so the count is exactly $\operatorname{per}(M)$ over the integers. Reducing modulo $2$, the sign of every permutation is $1$, so $\operatorname{per}(M)\equiv\det M\equiv1\pmod2$.`,
        String.raw`Hence the number of assignments is odd.`
      ]
    },
    {
      "id": "c9",
      "category": "cmb",
      "difficulty": "easy",
      "stars": 2,
      "rating": 4,
      "confidence": "high",
      "text": String.raw`Let $G=(X\sqcup Y,E)$ be a bipartite graph with a perfect matching $M$. Contract every edge of $M$ into one vertex, and for every edge $xy\in E\setminus M$ with $x\in X$ and $y\in Y$, direct the resulting edge from the matched pair containing $x$ to the matched pair containing $y$. Prove that $M$ is the unique perfect matching of $G$ if and only if the resulting directed graph is acyclic. Deduce that every bipartite graph in which every vertex has degree at least $2$ has either no perfect matching or at least two perfect matchings.`,
      "why": String.raw`Uniqueness of a perfect matching is a statement about alternating cycles: $M$ is unique exactly when no cycle alternates between non-matching and matching edges, since the symmetric difference of two perfect matchings is a union of such cycles, and flipping one produces a new matching. Contracting each matched edge turns an alternating cycle into a directed cycle, because consecutive non-matching edges enter a pair at its $Y$-end and leave at its $X$-end; conversely a directed cycle lifts back. So uniqueness is the same as acyclicity. For the corollary, minimum degree 2 gives each matched pair an extra edge at its $X$-vertex (an outgoing arc) and at its $Y$-vertex (an incoming arc). A finite digraph with no sinks contains a directed cycle, so a perfect matching, if one exists, is never unique.`,
      "hints": [
        String.raw`The symmetric difference of two perfect matchings is a disjoint union of alternating cycles.`,
        String.raw`After contraction, an alternating cycle becomes a directed cycle.`,
        String.raw`For the corollary: min degree $2$ gives each contracted vertex in- and outdegree $\ge1$ - extend a path.`
      ],
      "steps": [
        String.raw`Fix the perfect matching $M$ and contract every matched edge to a single vertex. An arc $P\to Q$ of the resulting digraph records a non-matching edge joining the $X$-vertex of the pair $P$ to the $Y$-vertex of the pair $Q$. No vertex carries a loop: a loop on $P$ would be a second edge between the two endpoints of $P$'s matched edge, impossible in a simple graph.`,
        String.raw`Suppose the digraph contains a directed cycle $P_1\to P_2\to\cdots\to P_k\to P_1$ on distinct contracted vertices (indices mod $k$). Each arc $P_t\to P_{t+1}$ is carried by a unique non-matching edge, and the arcs entering and leaving one pair $P_t$ use its two different vertices, so these $k$ non-matching edges together with the $k$ matched edges form one cycle of length $2k$ in $G$ alternating between $E\setminus M$ and $M$; in particular a $2$-cycle lifts to a $4$-cycle of $G$.`,
        String.raw`Flip that alternating cycle: delete its $k$ matched edges and insert its $k$ non-matching edges. Every vertex of the cycle is incident with exactly one chosen edge again and all other vertices are untouched, so this is a second perfect matching of $G$.`,
        String.raw`Conversely, let $M'\ne M$ be perfect matchings of $G$. In $M\triangle M'$ every vertex is incident with exactly one edge of $M$ and one edge of $M'$, so each component is $2$-regular; $G$ is finite, hence each component is an even cycle alternating between $M$ and $M'$, and $M\triangle M'$ is nonempty, so at least one $M$-alternating cycle $C$ exists.`,
        String.raw`The $2k$ vertices of $C$ occupy $k$ distinct matched pairs, and if $C$ runs $x_1,y_1,x_2,y_2,\dots$ with $x\in X$, $y\in Y$, the non-matching edge $y_t x_{t+1}$ contracts to the arc from the pair of $x_{t+1}$ to the pair of $y_t$: the images of the non-matching edges of $C$ chain into one directed cycle. So $M$ is the unique perfect matching if and only if the contracted digraph is acyclic.`,
        String.raw`For the deduction, let every vertex of $G$ have degree at least $2$ and let $M$ be a perfect matching. The $X$-end $x$ of a matched edge $xy\in M$ carries a further edge $xy'\notin M$; $y'$ lies in another pair, since the pair of $xy$ contains no $Y$-vertex but $y$. Hence every contracted vertex has outdegree at least $1$, and symmetrically at the $Y$-end it has indegree at least $1$.`,
        String.raw`Since the contracted digraph is finite, a path extended as far as possible ends at a vertex all of whose out-neighbours already lie on the path, so it contains a directed cycle. By the first part $M$ is not unique: a bipartite graph with minimum degree at least $2$ has either no perfect matching or at least two.`
      ]
    },
    {
      "id": "c10",
      "category": "cmb",
      "difficulty": "easy",
      "stars": 2,
      "rating": 4,
      "confidence": "high",
      "text": String.raw`$n\ge3$ teams play a round-robin: every two teams play one match, each match has a winner, no draws. Call a triple of teams a $\mathit{loop}$ if each of its three teams beats exactly one of the other two (a rock-paper-scissors cycle). An $\mathit{upset}$ is a re-run of a single match whose result is the opposite of the original. Saying the upset changes the loop count by $\Delta$ means: after the re-run, the total number of loops is the original number plus $\Delta$. Prove that the set of all possible values of $\Delta$ - over every round-robin schedule and every single match re-run - is exactly the whole interval of integers from $-(n-2)$ to $n-2$.`,
      "why": String.raw`Flipping the match between $a$ and $b$ (originally $a$ won) can only affect triples $\{a,b,w\}$. Such a triple becomes a loop exactly when $a\to w\to b$, and stops being one exactly when $b\to w\to a$. So $\Delta$ is the number of teams of the first kind minus the number of the second kind, two disjoint sets drawn from the other $n-2$ teams, giving $|\Delta|\le n-2$. Every value is attained using the transitive ranking where $i$ beats $j$ whenever $i\lt j$. Flipping the match between teams 1 and $k+2$ creates the loops through teams $2,\dots,k+1$, so $\Delta=k$ for each $0\le k\le n-2$. Flipping that same match back in the new schedule gives $\Delta=-k$. The whole problem is the observation that a flip has a purely local effect.`,
      "hints": [
        String.raw`Only triples $\{a,b,w\}$ through the flipped pair can change; $\Delta$ is a local count of $w$.`,
        String.raw`New loops sit on paths $a\to w\to b$, lost ones on $b\to w\to a$: disjoint, over $n-2$ teams.`,
        String.raw`In the transitive tournament, flip team 1's match against team $k+2$ (for $0\le k\le n-2$) to get $+k$, then flip it back for $-k$.`
      ],
      "steps": [
        String.raw`Fix a team $a$ beating $b$, and consider re-running $a$ vs $b$ with $b$ now winning. A triple not containing both $a$ and $b$ is untouched; the triple $\{a,b,w\}$ can change status only through $w$: BEFORE the re-run $\{a,b,w\}$ is a loop ⟺ $b$ beats $w$ beats $a$; AFTER, it is a loop ⟺ $a$ beats $w$ beats $b$. Hence $$\Delta=\#\{w: a\to w\to b\}-\#\{w: b\to w\to a\},$$ where the two sets are disjoint subsets of the other $n-2$ teams, giving $|\Delta|\le n-2$ for every schedule and every re-run.`,
        String.raw`Attainability, non-negative half: take the ranked tournament $T$: team $i$ beats team $j$ iff $i\lt j$. Re-run team 1's match against team $k+2$, where $0\le k\le n-2$, and let team $k+2$ now win. Before the re-run, exactly the teams $2,\dots,k+1$ satisfy $1\to w\to k+2$, giving $k$ paths; no team satisfies $k+2\to w\to1$ because nobody beats team 1. Therefore $\Delta=k$. For $k=0$ this is the re-run of the match between teams 1 and 2, which changes no loop count.`,
        String.raw`Attainability, negative half: perform the re-run of the previous step on the ranked tournament, producing $S_k$ with $c(S_k)=c(T)+k$, and then re-run the same match back in $S_k$, restoring team 1's win. Its change is the exact opposite, $-k$: in $S_k$ the $k$ loops through the pair $\{1,k+2\}$ dissolve and none are created (the two path counts of step 1 swap roles, and team 1 is beaten by no one but team $k+2$ in $S_k$), so every $\Delta\in\{-(n-2),\dots,-1\}$ occurs.`,
        String.raw`Glue: steps 1-3 show the set of possible $\Delta$ sits inside $[-(n-2),n-2]$ and contains every integer of it; endpoints: $k=n-2$ (re-run team 1 vs team $n$ in the ranking) and its undo.`,
        String.raw`Context (not used in the argument): counting each non-loop triple by its unique double-beater gives $c(T)=\binom n3-\sum_i\binom{d_i^+}{2}$ - the classical identity behind Harary-Moser-type bounds such as $c(T)\ge n-2$ for strong tournaments, with equality for the near-transitive ranking in which team $n$ upsets team 1; its endpoint $n-2$ matches the flip spectrum just proved.`
      ]
    },
    {
      "id": "c11",
      "category": "cmb",
      "difficulty": "easy",
      "stars": 2,
      "rating": 4.5,
      "confidence": "high",
      "text": String.raw`In a mysterious investigation bureau, there are $m$ detectives and $n$ secret clues, where $n\ge m\ge2$. Each detective has access to a distinct combination of these clues. One day, the chief inspector burns exactly one clue from the archives. A clue is called $\mathit{safe}$ if, after its destruction, no two detectives become indistinguishable based on the clues they still possess.

Show that at least $n-m+1$ clues are safe.`,
      "why": String.raw`Think of each detective's clue-set as a vertex of the cube $\{0,1\}^n$. Clue $j$ is unsafe exactly when two detectives differ only in clue $j$, which is a cube edge in direction $j$ between two of the $m$ chosen vertices. Pick one such edge for each unsafe clue. The resulting graph has all edge directions distinct, and it cannot contain a cycle, since walking around a closed loop in the cube flips every coordinate an even number of times, so no direction can appear just once. An acyclic graph on $m$ vertices has at most $m-1$ edges, so at most $m-1$ clues are unsafe and at least $n-m+1$ are safe. The bound is sharp: $\varnothing,\{1\},\dots,\{m-1\}$ makes clues $1,\dots,m-1$ unsafe.`,
      "hints": [
        String.raw`Read clue-sets as vertices of the cube $\{0,1\}^n$; an unsafe clue is a used edge-direction.`,
        String.raw`Cube cycles repeat every direction, so the chosen edges form a forest: at most $m-1$ unsafe.`
      ],
      "steps": [
        String.raw`Represent the $m$ distinct clue-sets by their $0$–$1$ incidence vectors in $\{0,1\}^n$. A clue $j$ is unsafe exactly when two detectives' vectors differ only in coordinate $j$, so there is a hypercube edge in direction $j$ between two of the $m$ vertices.`,
        String.raw`For every unsafe clue choose one such edge. The chosen edges form a graph $H$ on the $m$ detective-vertices, and their edge labels (the corresponding clues) are all distinct.`,
        String.raw`The graph $H$ is acyclic. Indeed, in any cycle of a hypercube, each coordinate is flipped an even number of times. But every edge of $H$ has a distinct coordinate label, so a cycle would make each of its labels occur exactly once, impossible.`,
        String.raw`Thus $H$ is a forest, so it has at most $m-1$ edges. If $U$ is the number of unsafe clues, then $U\le m-1$, hence the number of safe clues is at least $n-U\ge n-m+1$.`
      ]
    },
    {
      "id": "c12",
      "category": "cmb",
      "difficulty": "easy",
      "stars": 2,
      "rating": 4.5,
      "confidence": "high",
      "text": String.raw`In a night sky, constellations of three stars are charted such that no two share more than one star. Starlight links two stars whenever they belong to the same constellation.
(a) Two constellations form a $\mathit{conjunction}$ if they share a star.
(b) A trio of stars forms a $\mathit{mirage}$ if they are pairwise linked by starlight, yet form no constellation. Prove that the number of mirages is at most $\dfrac43$ the number of conjunctions.`,
      "why": String.raw`Count both quantities star by star. Two constellations share at most one star, so conjunctions are counted at their common star: $C=\sum_v\binom{d_v}{2}$. Around a star $v$ lying in $d_v$ constellations, its $2d_v$ partners split into $d_v$ disjoint companion pairs. A mirage through $v$ is exactly a starlight link between partners from different pairs, and there are at most $4\binom{d_v}{2}$ such cross pairs. Each mirage is seen from all three of its stars, so $3M\le4C$. The constant $\frac43$ is sharp: in the Fano plane every pair of points is linked, the 7 lines give $C=7\binom32=21$, and the $35-7=28$ non-line triples are all mirages, so $M/C=\frac43$ exactly.`,
      "hints": [
        String.raw`Around one star the constellations cut its neighbours into disjoint pairs; count edges joining different pairs.`,
        String.raw`Each mirage registers at three stars, and cross-edges are at most $4\binom{d_v}{2}$.`
      ],
      "steps": [
        String.raw`Let $d_v$ be the number of constellations containing star $v$. A conjunction is a pair of constellations sharing a star. Since two constellations share at most one star, each conjunction contributes exactly one $\binom{d_v}{2}$ count, at its common star, and pairs of constellations with no common star contribute nothing. Hence the number of conjunctions is $$C=\sum_v\binom{d_v}{2}.$$`,
        String.raw`Fix a star $v$. Its $2d_v$ neighbours are partitioned into $d_v$ disjoint pairs, one pair from each constellation through $v$. Let $e_v$ be the number of starlight edges joining vertices that belong to different such pairs.`,
        String.raw`Each such cross-edge $xy$, together with $v$, gives a mirage $\{v,x,y\}$: the three pairs are linked, while $x,y$ are not the two companions of $v$ in one constellation. Conversely, every mirage is counted once at each of its three vertices. Hence $$M=\frac13\sum_v e_v.$$`,
        String.raw`Among the $2d_v$ neighbours there are exactly $4\binom{d_v}{2}$ possible cross-pairs, so $e_v\le4\binom{d_v}{2}$. Therefore $$M\le\frac13\sum_v4\binom{d_v}{2}=\frac43C.$$`
      ]
    },
    {
      "id": "c13",
      "category": "cmb",
      "difficulty": "medium",
      "stars": 3,
      "rating": 5,
      "confidence": "high",
      "text": String.raw`Some towns are connected by $m$ two-way roads meeting at $n$ junctions: each road joins two distinct junctions, no two roads join the same pair of junctions, and one can travel from any junction to any other along roads. Paint each road one of three colors, numbered $0,1,2$; a painting is called $\mathit{good}$ if, at every junction, the sum of the numbers of the roads leading into it leaves remainder $1$ upon division by $3$.

Determine, in closed form, the number of good paintings, in terms of $n$, $m$, and - if the junctions can be split into two groups $A$ and $B$ such that every road joins a junction of $A$ to a junction of $B$ (networks where this is possible are called $\mathit{bipartite}$; the split is then unique up to swapping $A,B$) - the sizes $|A|,|B|$.`,
      "why": String.raw`Goodness is a linear system over $\mathbb F_3$: one unknown per road and the equation "sum around $v$ equals 1" per junction. Solvability is decided by the junction weightings $z$ that annihilate every road, meaning $z_u+z_v=0$ on each road. Connectivity forces such a $z$ to alternate $t,-t$, which is consistent only on a bipartite network; an odd cycle forces $2z=0$, hence $z=0$ because 2 is invertible mod 3 (over $\mathbb F_2$ this step would fail). In the bipartite case the system is solvable iff $t(|A|-|B|)=0$, i.e. $|A|\equiv|B|\pmod 3$. The rank is $n-1$ or $n$, so the answer is: $3^{m-n}$ if the network is not bipartite, $3^{m-n+1}$ if it is bipartite with $|A|\equiv|B|\pmod3$, and $0$ otherwise, as for $K_{2,3}$.`,
      "hints": [
        String.raw`Write the rule as $Bx=\mathbf 1$ over $\mathbb F_3$ on the vertex-edge incidence matrix.`,
        String.raw`Test the left kernel: silent weightings alternate $\pm t$ on a bipartition and die on odd cycles.`,
        String.raw`Consistency then needs $|A|\equiv|B|\pmod3$; solutions form cosets of size $3^{m-\operatorname{rank}}$.`
      ],
      "steps": [
        String.raw`Set up: unknown $x_e\in\{0,1,2\}$ per road; equations $\sum_{e\ni v}x_e\equiv1\pmod3$ per junction. All arithmetic in the remainder system mod 3 from here on.`,
        String.raw`Adjoint bookkeeping. Call a junction-weighting $z$ 'silent' if $z_u+z_v\equiv0$ for every road $uv$. If the network is bipartite with split $A,B$: $z\equiv t$ on $A$, $z\equiv-t$ on $B$ works for every $t$ (3 solutions); connectivity shows these are all (propagate along paths). If some odd cycle exists: going once around forces $z\equiv-z$ at a vertex of the cycle, so $2z\equiv0$; $2$ is invertible mod $3$, so $z\equiv0$ at that vertex, and connectivity propagates it: $z\equiv0$ everywhere - the only silent weighting is the trivial one.`,
        String.raw`Compatibility (Fredholm alternative by hand). Summing the equations with weights $z$: $\sum_v z_v\cdot1\equiv\sum_e x_e(z_u+z_v)\equiv0$, so solvability requires every silent weighting to see the right side as zero. Necessity: in the bipartite case $\sum_A t+\sum_B(-t)=t(|A|-|B|)\equiv0$ for every $t$, i.e. $|A|\equiv|B|\pmod3$; in the non-bipartite case there is nothing to require. This is also sufficient: the row space of an $n\times m$ matrix over $\mathbb F_3$ is exactly the orthogonal complement of its left kernel (rank-nullity duality), so $Bx=\mathbf 1$ is solvable iff every silent weighting is orthogonal to $\mathbf 1$ - and step 2 has listed all silent weightings, so the congruence above is the only obstruction.`,
        String.raw`Ranks and counts. Bipartite connected: adjoint kernel dim $1$ - rank $n-1$; non-bipartite: adjoint kernel $0$ - rank $n$ (rank $=n-\dim\ker B^{\top}$, so also $m\ge n$ here, consistent with the odd cycle supplying the extra edge beyond a spanning tree). When consistent, solutions form a coset of the solution space of the homogeneous system, of size $3^{m-\text{rank}}$: three cases $3^{m-n+1}$, $3^{m-n}$, $0$ - the claimed closed form. ($m\ge n-1$ by connectivity, and $m=n-1$ bipartite trees: exponent $0$: exactly one good painting iff $|A|\equiv|B|\pmod3$ - a pleasant special check.)`,
        String.raw`Worked examples. Triangle ($m=n=3$, non-bipartite): equations $a+b\equiv b+c\equiv c+a\equiv1$ force $a\equiv b\equiv c$, then $2a\equiv1$, and $2^{-1}\equiv2\pmod3$: $a\equiv b\equiv c\equiv2$: exactly one painting, matching $3^{m-n}=1$ ✓. $K_{2,3}$ (bipartite, parts 2 and 3): each road touches exactly one junction of each group, so (sum of the 3 equations on the side of size 3) minus (sum of the 2 on the other side) has left side identically $0$ (every color counted once per side) but right side $3-2\equiv1\not\equiv0$: no good painting exists - the zero case, witnessed by an explicit dependence.`
      ]
    },
    {
      "id": "c14",
      "category": "cmb",
      "difficulty": "medium",
      "stars": 3,
      "rating": 5.5,
      "confidence": "high",
      "text": String.raw`Let $G=(X\sqcup Y,E)$ be a connected simple bipartite graph with $|X|=|Y|$ and minimum degree at least $2$. Suppose that $G$ has exactly two perfect matchings. Prove that $G$ is an even cycle.`,
      "why": String.raw`Fix one perfect matching $M$ and contract its edges; each other edge becomes an arc from its $X$-end's pair to its $Y$-end's pair. Directed cycles then correspond exactly to $M$-alternating cycles, and flipping such a cycle gives another perfect matching. Having exactly two perfect matchings forces exactly one directed cycle, since two distinct cycles would each flip to a different third matching (the symmetric difference of two perfect matchings is a disjoint union of alternating cycles, and flipping only some of them gives yet another). Minimum degree 2 means every contracted vertex has an incoming and an outgoing arc. A connected digraph with that property and a unique directed cycle is just that cycle: any extra vertex or chord would create a second cycle. Undoing the contraction yields an even cycle.`,
      "hints": [
        String.raw`Fix one perfect matching and encode every other edge as an arrow between matched pairs.`,
        String.raw`An alternating cycle can be flipped to obtain another perfect matching. What does 'exactly two' say about directed cycles?`,
        String.raw`Min degree $2$ gives every vertex of the digraph indegree and outdegree $\ge1$; it stays connected.`,
        String.raw`A connected digraph with a unique directed cycle and no sources or sinks is just that cycle - chords too.`
      ],
      "steps": [
        String.raw`Let $M$ and $M'$ be the two perfect matchings. Every vertex of $G$ is incident with exactly one edge of $M$ and one edge of $M'$, so in $M\triangle M'$ every vertex has degree $0$ or $2$: the components are $M$-alternating even cycles together with isolated vertices (the edges shared by $M$ and $M'$). If there were two or more cycles, flipping $M$ on a single one of them would give a perfect matching distinct from both $M$ and $M'$, a third matching. Hence $M\triangle M'$ is a single alternating cycle $C$.`,
        String.raw`Contract every edge $xy\in M$ to one vertex. For each edge $ab\in E\setminus M$ with $a\in X$ and $b\in Y$, direct the resulting edge from the contracted vertex containing $a$ to the contracted vertex containing $b$; call the digraph $D$. It has no loops: an arc $v\to v$ would come from an edge joining the two endpoints of the matching edge contracted to $v$, and $G$ is simple, so that edge would be the matching edge itself.`,
        String.raw`A directed cycle of $D$ lifts, by restoring between consecutive arcs the matching edges they point into, to an $M$-alternating cycle of $G$, and flipping $M$ along it gives a perfect matching $N$ with $M\triangle N$ equal to that cycle; distinct directed cycles give distinct matchings. Conversely, for any perfect matching $N$ the difference $M\triangle N$ is a union of $M$-alternating cycles, i.e. of directed cycles of $D$. Since $M$ has exactly one partner $M'$, the digraph $D$ contains exactly one directed cycle, the lift of $C$; denote it again by $C$.`,
        String.raw`Each vertex of $D$ has outdegree at least $1$ and indegree at least $1$: the contracted vertex stands for an edge $xy\in M$; since $d_G(x)\ge2$ some non-matching edge leaves $x$, producing an outgoing arc, and since $d_G(y)\ge2$ some non-matching edge leaves $y$, producing an incoming arc. Because $G$ is connected, $D$ is weakly connected.`,
        String.raw`Suppose a vertex $v$ of $D$ lies outside $C$. Outdegrees are at least $1$, so from $v$ one can follow outgoing arcs indefinitely; since $D$ is finite, along this walk some vertex is the first to repeat, and the segment between its two occurrences is a directed cycle, hence it is $C$; cutting the walk at its first entry into $C$ yields a directed path from $v$ to $C$ whose internal vertices lie off $C$. Running the same argument along incoming arcs backwards yields a directed path from $C$ to $v$ whose internal vertices lie off $C$.`,
        String.raw`Paste the path from $C$ to $v$ and the path from $v$ to $C$; if their two vertices on $C$ are distinct, close the result by the directed path along $C$ from the exit vertex of the second path back to the entry vertex of the first. This is a closed directed walk through $v$. Choose a shortest closed subwalk of it starting and ending at $v$ (delete the excursions between repeated vertices); it has no repeated vertex, so it is a directed cycle through $v$, and it is distinct from $C$ since $v$ lies off $C$ - contradiction. Hence every vertex of $D$ lies on $C$.`,
        String.raw`Now exclude extra arcs: any arc $a\to b$ of $D$ has both endpoints on $C$ and $b\ne a$ (there are no loops). If $b$ is not the successor of $a$ on $C$, then this arc together with the directed path along $C$ from $b$ back to $a$ forms a second directed cycle, contradiction. Thus $E(D)=E(C)$ exactly, and $D$ is a directed cycle through all its vertices.`,
        String.raw`Undo the contraction: $E(G)$ is exactly the matching edges $M$ together with the arcs of $C$, each contracted vertex re-expands to the matching edge joining two consecutive arcs, and every vertex of $G$ lies in this single expanded cycle; so $G$ itself is one cycle on all $2|X|$ vertices. It is even because $G$ is bipartite (and $|X|\ge2$, since a simple balanced bipartite graph with minimum degree $2$ has $|X|\ge2$).`,
        String.raw`Conversely, an even cycle has exactly two perfect matchings, namely its two alternating edge sets.`
      ]
    },
    {
      "id": "c15",
      "category": "cmb",
      "difficulty": "medium",
      "stars": 3,
      "rating": 6,
      "confidence": "high",
      "text": String.raw`There are $n$ cells arranged in a circle, labelled $1, 2, \dots, n$ in clockwise order. Initially, a token is placed at cell $1$. Alice and Bob play a game with $n - 1$ rounds. In round $k$ ($1 \le k \le n - 1$):

(a) Alice chooses a step size $s_k \in \{1, 2, \dots, n - 1\}$ that has not been chosen in any earlier round.
(b) Bob chooses whether the token moves $s_k$ steps clockwise or $s_k$ steps counter-clockwise. Alice wins if, after all $n - 1$ rounds, the token has visited every single cell of the circle at least once (including its initial position at cell $1$). Otherwise, Bob wins. Determine all integers $n \ge 2$ for which Alice has a winning strategy.`,
      "why": String.raw`Surprisingly, Alice wins only for $n=2$, and Bob's strategy is a fixed rule: label the cells $0,\dots,n-1$ and always move to the smaller of the two candidate cells $x+s$ and $x-s$. The two candidates coincide only when $2s\equiv0\pmod n$. For odd $n\ge3$ that never happens, so Bob always has a genuine choice and never picks the top cell $n-1$. For even $n=2h$, only the step $h$ forces the landing. Cell $n-1$ cannot be chosen otherwise, and neither can $n-2$, because $\{n-2,n-1\}$ would have to be the candidate pair, yet the candidates sum to $2x$, which is even mod an even $n$, while $2n-3$ is odd. Since step $h$ can be used only once, at most one of the top two cells is ever visited.`,
      "hints": [
        String.raw`Give Bob a static ranking rule: always move to the smaller of the two labels.`,
        String.raw`For odd $n$ the two landings never coincide, so the minimum can never select the top label.`,
        String.raw`Even $n$: only step $n/2$ reaches the top cells, its landing is forced, and $n-2,n-1$ cannot both be candidates.`
      ],
      "steps": [
        String.raw`Relabel the cells $0,1,\dots,n-1$ modulo $n$, so the token starts at $0$ and a cell is visited if the token starts or lands on it. If the token is at $x$ and Alice announces $s$, the two possible landings are $a\equiv x+s$ and $b\equiv x-s \pmod n$, written as labels in $\{0,\dots,n-1\}$. Bob's strategy: always move to $\min\{a,b\}$ (when $a=b$ there is no choice).`,
        String.raw`Base case $n = 2$: the only step size is $s = 1$, and both directions from cell $0$ land on cell $1$, so Alice visits both cells and wins.`,
        String.raw`Let $n \ge 3$ be odd. The two landings coincide only if $2s \equiv 0 \pmod n$, i.e. $n \mid s$, impossible for $1 \le s \le n-1$. So $a \ne b$ every round, and the minimum of two distinct labels of $\{0,\dots,n-1\}$ is at most $n-2$. Cell $n-1$ is never visited, so Bob wins for every odd $n \ge 3$.`,
        String.raw`Let $n \ge 4$ be even and $h = n/2$. Now $2s \equiv 0 \pmod n$ with $1 \le s \le n-1$ forces $s = h$, so for $s \ne h$ the two labels are distinct and Bob takes the smaller: he can never select the largest label, i.e. cell $n-1$ is reachable only when $s = h$.`,
        String.raw`Cell $n-2$ likewise cannot be reached with $s \ne h$: if $\min\{a,b\} = n-2$ with $a \ne b$, the other landing must exceed $n-2$, so $\{a,b\} = \{n-2,\,n-1\}$. But $a + b \equiv (x+s) + (x-s) \equiv 2x \pmod n$, while $(n-2)+(n-1) = 2n-3 \equiv n-3$, so $n \mid (2x - (n-3))$, i.e. $n \mid (2x+3)$. The divisor $n$ is even while $2x+3$ is odd, impossible.`,
        String.raw`Hence both cells $n-2$ and $n-1$ can only be reached via $s = h$. On that move the two directions coincide and the landing is forced to be $x + h$, a single cell, and Alice may announce each step size at most once. So at most one of $n-2, n-1$ is ever visited, and Bob wins for every even $n \ge 4$.`,
        String.raw`Combining all cases, Alice has a winning strategy exactly for $n=2$.`
      ]
    },
    {
      "id": "c16",
      "category": "cmb",
      "difficulty": "medium",
      "stars": 3,
      "rating": 6,
      "confidence": "high",
      "text": String.raw`Let $\mathcal{F}$ be a family of $3$-element subsets of a set $X$, $|X|=n\ge1$, such that any two members of $\mathcal{F}$ share exactly one point, and no point of $X$ lies in all members.
(a) Prove $|\mathcal{F}|\le n$.
(b) Prove $|\mathcal{F}|=n$ if and only if $n=7$ and $\mathcal{F}$ is the set of lines of the Fano plane.
(c) Prove that no such family exists for $n=5$, determine the maximum of $|\mathcal{F}|$ for $n=6$, and prove the absolute bound $|\mathcal{F}|\le 7$ valid for all $n$.`,
      "why": String.raw`Two simple counts drive everything. Counting incidences gives $\sum r_x=3m$, and counting pairs of members by their unique common point gives $\sum\binom{r_x}{2}=\binom m2$. The key lemma is $r_x\le3$: if four members passed through $P$, a member avoiding $P$ (which must exist) would need a point from each of four disjoint pairs. Then $\binom m2\le\sum r_x=3m$ gives the absolute bound $m\le7$. For $m\le n$, the characteristic vectors have Gram matrix $2I+J$, which is invertible, so they are linearly independent, a Fisher-type argument. If $m=n$, every $r_x=3$, forcing $m=7$ and a Steiner triple system on 7 points, whose structure is forced: the Fano plane. For $n=5$ two members already cover everything and no third fits; for $n=6$ the maximum is 4, attained by $\{123,145,246,356\}$.`,
      "hints": [
        String.raw`Double count pairs of members: $\sum_x\binom{r_x}{2}=\binom m2$.`,
        String.raw`Independence of characteristic vectors via the Gram matrix $2I+J$ gives $m\le n$.`,
        String.raw`Rule out degree $4$, then squeeze equality to all $r_x=3$: the Fano plane.`
      ],
      "steps": [
        String.raw`Size floor and bookkeeping. Write $m=|\mathcal F|$ and, for $x\in X$, $r_x=|\{B\in\mathcal F:x\in B\}|$. The case $m=0$ is excluded because then every point lies in all members vacuously; $m=1$ is excluded because the three points of the single member lie in all members; $m=2$ is excluded because the unique common point of the two members lies in all members. So $m\ge3$. The two counting identities $$\sum_{x\in X}r_x=3m\qquad\text{and}\qquad \sum_{x\in X}\binom{r_x}{2}=\binom m2$$ hold: the first counts incidences $(x,B)$, the second counts block pairs $\{B,B'\}$ by their unique common point.`,
        String.raw`Degree cap. No point has degree $\ge4$: if $P$ lay in blocks $B_1,\dots,B_4$, then no other point could lie in two of these blocks (two blocks already share $P$), so the four pairs $B_i\setminus\{P\}$ are disjoint 2-sets; since no point lies in all members there is a block $D$ with $P\notin D$, and $D$ must contain one point of each $B_i\setminus\{P\}$, i.e. $|D|\ge4$ - contradiction. Hence $r_x\le3$ for all $x$, and for such degrees $\binom{r_x}{2}\le r_x$ with equality iff $r_x\in\{0,3\}$.`,
        String.raw`(a) Fisher-type bound. Let $v_B\in\mathbb R^{X}$ be the characteristic vector of $B$. If $\sum_B c_Bv_B=0$, taking the inner product with $v_{B'}$ gives $3c_{B'}+\sum_{B\ne B'}c_B=0$ for every $B'$ (each pair meets in exactly one point). Writing $s=\sum_Bc_B$, every equation reads $2c_{B'}+s=0$, so all $c_{B'}$ are equal, say to $c$, and $0=2c+mc=c(m+2)$ forces $c=0$. The $m$ vectors are linearly independent in the $n$-dimensional space $\mathbb R^{X}$: $m\le n$.`,
        String.raw`(c) absolute bound. From the second counting identity and the degree cap, $\binom m2=\sum_x\binom{r_x}{2}\le\sum_xr_x=3m$, so $m-1\le6$: $|\mathcal F|\le7$ for every $n$. The Fano plane shows the bound is best possible for all $n\ge7$ (take its seven lines on seven of the $n$ points; unused points are harmless).`,
        String.raw`(b) equality transport. If $m=n$, then $3n=3m=\sum_xr_x$ with $n$ summands each $\le3$, so $r_x=3$ for every $x$. Then $\binom m2=\sum_x\binom{r_x}{2}=3m$, i.e. $m(m-1)/2=3m$, i.e. $m=7$: equality forces $n=m=7$, all degrees $3$. The seven blocks contain $7\cdot\binom32=21$ point-pairs and no point-pair can lie in two blocks (two blocks sharing a point-pair would share two points), so these cover each of the $\binom72=21$ point-pairs of $X$ exactly once: a Steiner triple system on $7$ points. Its isomorphism type is unique: after relabelling let a block be $\{1,2,3\}$; the three blocks through $1$ partition the other six points as $\{1,2,3\},\{1,4,5\},\{1,6,7\}$; the block on $\{2,4\}$ avoids $1,3,5$ (their pairs are used) so it is $\{2,4,6\}$ or $\{2,4,7\}$: relabel the pair $\{6,7\}$ to make it $\{2,4,6\}$; the block on $\{2,5\}$ must be $\{2,5,6\}$ or $\{2,5,7\}$, and $\{2,5,6\}$ shares the pair $\{2,6\}$ with $\{2,4,6\}$ - so $\{2,5,7\}$ is forced; and $\{3,4\}\to\{3,4,7\}$ (the option $\{3,4,6\}$ shares $\{4,6\}$), $\{3,5\}\to\{3,5,6\}$ (the option $\{3,5,7\}$ shares $\{5,7\}$) follow. All $21$ pairs are then covered exactly once - no choice remains. That list is precisely the line set of the Fano plane, and its pairwise-intersection-one, empty-common-intersection and $r_x\equiv3$ properties check directly. Hence $|\mathcal F|=n$ occurs iff $n=7$ and $\mathcal F$ is the Fano line set.`,
        String.raw`(c) non-existence for $n=5$. Two members $B_1,B_2$ meet in one point, and $|B_1\cup B_2|=5=n$, so wlog $B_1=\{1,2,3\}$, $B_2=\{1,4,5\}$. A third member $C$ meeting each of $B_1,B_2$ exactly once: if $1\in C$, then $C$ can contain no other point of $X=B_1\cup B_2$ - impossible; so $C$ contains exactly one of $\{2,3\}$ and exactly one of $\{4,5\}$, say $2,4$, and its third element is in $\{1,3,5\}$: $1$ makes $|C\cap B_2|=2$, $3$ makes $|C\cap B_1|=2$, $5$ makes $|C\cap B_2|=2$ - all excluded; the other three pair choices fail identically. No third member exists, contradicting $m\ge3$: no valid family for $n=5$.`,
        String.raw`(c) maximum for $n=6$. The Pasch $\{\{1,2,3\},\{1,4,5\},\{2,4,6\},\{3,5,6\}\}$ has $m=4$, all $\binom42=6$ block-pairs meeting in the six distinct points and empty total intersection: a valid family, so $\max\ge4$. By (a) only $m=5,6$ remain. If $m=6$: the counting identities give $\sum_xr_x=18$ with six points of degree $\le3$, so all $r_x=3$, and then $\sum_x\binom{r_x}{2}=6\cdot3=18\ne15=\binom62$ (this is the $m=n$ case of (b), which forces $n=7$). If $m=5$: the counting identities need $\sum_xr_x=15$ with $6$ points of degree $\le3$, forcing the degree multiset to satisfy $k_1+k_2+k_3\le6$, $2k_2+3k_3+k_1=15$ and $k_2+3k_3=\sum\binom{r_x}{2}=\binom52=10$, hence $k_2+k_1=5$ and then $k_3\le1$, whence $k_2\ge7\gt 6$ - impossible. So $\max_6=4$.`
      ]
    },
    {
      "id": "c17",
      "category": "cmb",
      "difficulty": "medium",
      "stars": 3,
      "rating": 6,
      "confidence": "high",
      "text": String.raw`In a duel league, every pair of the $n\ge2$ players plays exactly one duel, and every duel has a winner (no draws); write $A\to B$ when $A$ beat $B$. A player $K$ is a $\mathit{king}$ if every other player $X$ satisfies $K\to X$ or $K\to Y\to X$ for some player $Y$ ($K$ beat someone who beat $X$). A victory chain is a listing of all players $x_1,x_2,\dots,x_n$ with $x_i\to x_{i+1}$ for every $i$.

Prove the following two independent statements.
(a) Every king starts a victory chain: if $K$ is a king, some victory chain has $x_1=K$.
(b) For every $n\ge5$ and every integer $m$ with $3\le m\le n$, some league on $n$ players has exactly $m$ kings.`,
      "why": String.raw`Part (a) proves more: anyone who reaches every player by some chain of wins heads a victory chain. Add the others in order of their win-distance from $K$. Each newcomer is beaten by someone already in the chain, namely its predecessor on a shortest path, so insert it right after the last chain member who beats it; the next member then loses to the newcomer, and the head never moves. This is Redei's theorem with a prescribed starting player. The converse fails, since a chain head need not be a king. For (b), a tail of players beaten by everyone, arranged transitively, leaves the king set unchanged, so it is enough to build leagues in which everyone is a king. Rotational leagues on odd $m$ work, an added player fixes even $m\ge6$, but every 4-player league has a non-king, so $m=4$ needs a 5-player seed. That is why $n\ge5$.`,
      "hints": [
        String.raw`Define reachability by win-paths and order players by shortest-path distance from $v$.`,
        String.raw`Splice each newcomer into the chain after the last already-listed player who beats him.`,
        String.raw`For the spectrum, build all-king carousels and attach a transitive tail that everyone beats.`,
        String.raw`Case $m=4$ is exceptional: on four players some seat is no king, so seed it with five players.`
      ],
      "steps": [
        String.raw`Notation: player $v$ reaches $x$ if some win-path $v\to\cdots\to x$ exists (of length at least $1$); a king reaches every other player within two duels, hence reaches everyone. A victory chain is a listing $x_1,\dots,x_n$ of all players with $x_i\to x_{i+1}$ for every $i$.`,
        String.raw`Splice lemma: let $P=(a_1,\dots,a_k)$ be a chain of distinct players and let $x$ be a new player beaten by at least one member of $P$. Choose the largest index $i$ with $a_i\to x$ (it exists by assumption). If $i=k$, then $a_1,\dots,a_k,x$ is a longer chain with the same head. If $i\lt k$, then $a_{i+1}$ does not beat $x$ (by maximality of $i$) and $a_{i+1}\ne x$, so $x\to a_{i+1}$ since every pair of players has played; and $a_1,\dots,a_i,x,a_{i+1},\dots,a_k$ is a longer chain with the same head $a_1$. Either way $x$ can be inserted into $P$ keeping the head fixed.`,
        String.raw`Chain lemma (reach $\Rightarrow$ chain head): suppose $v$ reaches every other player. Order the other players $w_1,\dots,w_{n-1}$ by nondecreasing length $\operatorname{dist}(v,\cdot)$ of a shortest win-path from $v$. Start with the one-vertex chain $(v)$. Inductively, suppose a chain starting at $v$ lists $v,w_1,\dots,w_{t-1}$. Choose a shortest win-path from $v$ to $w_t$ and let $p$ be the predecessor of $w_t$ on it; a prefix of a shortest path is shortest, so $\operatorname{dist}(v,p)=\operatorname{dist}(v,w_t)-1\lt\operatorname{dist}(v,w_t)$, hence $p$ occurs among $v,w_1,\dots,w_{t-1}$; also $p\to w_t$. Thus $w_t$ is beaten by a member of the current chain, and the splice lemma inserts $w_t$ without changing the first vertex. At $t=n-1$ this gives a victory chain beginning at $v$.`,
        String.raw`Claim (1): a king reaches every other player within two duels, hence reaches every other player. Applying the chain lemma with $v=K$ gives a victory chain whose first player is $K$. The converse is not claimed and is false: on players $\{0,1,2,3\}$ with wins $0\to3$, $1\to0$, $2\to0$, $2\to1$, $3\to1$, $3\to2$, the listing $1,0,3,2$ is a victory chain headed by player $1$, who is no king - he beats only $0$, who beats only $3$, so player $1$ does not reach $2$ within two duels.`,
        String.raw`Claim (2), tail lemma: build $C'$ from a league $C$ by appending players $z_1,\dots,z_r$ with $z_i\to z_j$ exactly for $i\lt j$, while every old player beats every $z_i$. A new $z$ is not a king: its only wins are later $z$'s, whose wins are later still, so no $z$ reaches any old player in any number of duels. Old players keep exactly their old two-step reach among old players, since a path $v\to z_i\to u$ through a new player ends at a new $u$; and every old player beats every new player at once. So the king set is preserved and $r\ge0$ is free: it suffices to build, for every $m\ne4$, a league on $m$ players with all $m$ kings, plus a five-player league with exactly four kings.`,
        String.raw`Claim (2), odd cores: for $m=2h+1\ge3$ seat players $0,\dots,m-1$ on a circle and let $i\to j$ when the clockwise gap from $i$ to $j$ lies in $\{1,\dots,h\}$; of the two gaps between any pair of seats exactly one lies in this range, so this is a league. A seat $i$ directly reaches the $h$ seats ahead; for a seat at clockwise gap $d$ with $h+1\le d\le 2h$, write $d=(d-h)+h$: seat $i$ beats seat $i+(d-h)$ (gap $d-h\le h$) which beats seat $i+d$ (gap exactly $h$); so all $m$ seats are kings. ($m=3$: the directed triangle.)`,
        String.raw`Claim (2), even cores and the 4-gap: for $m=2k\ge6$ take the all-king carousel on $2k-1$ seats (odd case with $h=k-1\ge2$) and add a player $x$ whom the odd seats beat and who beats the even seats. Even seat $e$ with $e\le 2k-4$: $e\to e+1$ (gap $1\le h$) and $e+1$ is odd, so $e+1\to x$; the last even seat $2k-2$ reaches seat $1$ by gap $2\le h$, which beats $x$. Odd seats beat $x$ directly, and $x$ reaches an odd seat $o$ via $x\to o-1\to o$ (gap $1\le h$) and every even seat directly. Carousel seats still reach one another as in the odd case, so all $2k$ players are kings. The value $m=4$ is genuinely exceptional: in a league on four players the scores sum to $6$; a player of score $0$ reaches nobody, so with all four players kings every score is at least $1$ and the score multiset is $\{1,1,1,3\}$ or $\{1,1,2,2\}$ - in either case two score-$1$ players $P,Q$ meet (the three score-$1$ players form a directed cycle, or the two score-$1$ players play each other), say $P\to Q$; then $P$ reaches in two duels only $Q$ and $Q$'s single victim, at most two of the three others, so $P$ is no king. Thus every four-player league has a non-king. So we use instead the five-player seed with wins $0\to4$, $1\to0$, $1\to3$, $2\to0$, $2\to1$, $3\to0$, $3\to2$, $3\to4$, $4\to1$, $4\to2$: player $0$ beats only $4$, who beats only $1,2$, so $0$ reaches nobody else and is no king, while $1$ reaches everyone via $0\to4$ and $3\to2$, $2$ via $0\to4$ and $1\to3$, $3$ via $4\to1$, and $4$ via $1\to0$ and $1\to3$ - exactly four kings.`,
        String.raw`Claim (2), assembly: given $n\ge5$ and $3\le m\le n$. If $m\ne4$, take the all-king core on $m$ players from the last two steps and attach a tail of $n-m$ players (legal since $m\le n$, and the tail lemma allows $r\ge0$; every old player beats every tail player). If $m=4$, take the five-player seed (allowed since $n\ge5$) and a tail of $n-5$ players. In every case the league on $n$ players has exactly $m$ kings. The hypothesis $n\ge5$ is load-bearing: at $n=4$ the count $m=4$ is impossible (previous step), while $m=3$ occurs - the league with $0\to1\to2\to3\to0$ plus $0\to2$ and $1\to3$ has kings exactly $0,1,3$ - so $\{3,\dots,n\}$ is exactly realizable for $n\ge5$ and not for $n=4$.`
      ]
    },
    {
      "id": "c18",
      "category": "cmb",
      "difficulty": "medium",
      "stars": 3,
      "rating": 6.5,
      "confidence": "high",
      "text": String.raw`Let $3\le k\le n$. Color each edge of the complete graph $K_n$ red or blue. Call the coloring $k$-odd if every set of $k$ vertices spans an odd number of red edges. Determine exactly for which pairs $(n,k)$ a $k$-odd coloring exists. Moreover, determine the number of such colorings when $n=k$ and $n=k+1$, and, when $n\ge k+2$, classify all of them.`,
      "why": String.raw`Work over $\mathbb F_2$. When $n\ge k+2$, swapping one vertex of a $k$-set for another shows that $x_{at}+x_{bt}$ does not depend on $t$, and this rigidity forces $x_{ij}=u_i+u_j+c$. Summing over a $k$-set gives $1=(k-1)\sum_S u_i+\binom k2c$, and $k$ mod 4 decides: for $k\equiv0,1$ there is no coloring; for $k\equiv2$ only the all-red one; for $k\equiv3$ exactly the $2^{n-1}$ colorings that are red inside the two parts of a bipartition and blue between them. The small cases are looser. For $n=k$ we need only an odd number of red edges, giving $2^{\binom k2-1}$. For $n=k+1$ all red degrees must share a parity tied to the total edge parity, giving $2^{\binom n2-n}$ for odd $n$ and $2^{\binom n2-n+1}$ for even $n$. So a coloring exists iff $n\le k+1$ or $k\equiv2,3\pmod4$.`,
      "hints": [
        String.raw`Work in $\mathbb F_2$: compare the red-edge parities of two $k$-sets differing in one vertex.`,
        String.raw`For $n\ge k+2$, show that $x_{ij}+x_{i1}+x_{j1}$ is independent of $i,j$, hence $x_{ij}=u_i+u_j+c$.`,
        String.raw`Sum that form over a $k$-set: it forces $\binom{k}{2}c=1$, and the split by $k\bmod 4$ gives the classification.`,
        String.raw`For $n=k+1$, use the parities of red vertex degrees and the cycle space of $K_n$.`,
        String.raw`For $n=k$, toggling a fixed edge is a parity-reversing involution: exactly half of the colorings count.`
      ],
      "steps": [
        String.raw`For $n=k$ the condition touches only the whole vertex set, so the colorings are exactly the red graphs with an odd number of edges; toggling a fixed edge is a parity-reversing involution on all $2^{\binom{k}{2}}$ colorings, so exactly half qualify and the number of colorings is $2^{\binom{k}{2}-1}$.`,
        String.raw`Now let $n=k+1$. Let $G$ be the red graph, let $E=e(G)\pmod2$, and let $d_v=\deg_G(v)\pmod2$. The $k$-set obtained by deleting $v$ has red-edge parity $E+d_v$, so the condition is $$E+d_v=1$$ for every $v$. Thus all $d_v$ are equal to the same value $p=1+E$.`,
        String.raw`If $n$ is odd, then $\sum_v d_v=np=0$ in $\mathbb F_2$, so $p=0$ and therefore $E=1$. Thus $G$ is Eulerian and has an odd number of edges. The Eulerian subgraphs of $K_n$ form the cycle space of dimension $\binom n2-n+1$. Since $K_n$ contains a triangle, edge-parity is a nonzero linear functional on that cycle space, so exactly half of its elements have odd size. Hence the number of colorings is $$2^{\binom n2-n}.$$`,
        String.raw`If $n$ is even, the two possibilities are $p=0,E=1$ and $p=1,E=0$. The graphs with degree-parity vector $0$ form the cycle space, while the graphs with degree-parity vector $\mathbf1$ form its affine coset obtained, for example, by adding a perfect matching. Each class has size $2^{\binom n2-n+1}$, and adding a triangle preserves all degree parities while reversing edge-parity. Thus exactly half of each class satisfies the required value of $E$, giving $$2^{\binom n2-n+1}$$ colorings in total.`,
        String.raw`Assume now $n\ge k+2$, and let $x_{ij}\in\mathbb F_2$ indicate whether $ij$ is red. Fix distinct vertices $a,b$, and let $T$ be any $(k-1)$-set disjoint from $a,b$. Comparing $T\cup\{a\}$ and $T\cup\{b\}$ gives $$\sum_{t\in T}(x_{at}+x_{bt})=0.$$ Since $n-2\ge k$, any two vertices $p,q$ outside $\{a,b\}$ can be completed with the same $(k-2)$-set, so $$x_{ap}+x_{bp}=x_{aq}+x_{bq}.$$ Thus, for every pair $a,b$, the quantity $x_{at}+x_{bt}$ is independent of $t\notin\{a,b\}$.`,
        String.raw`Fix a vertex $1$. For distinct $i,j\ne1$ put $q(i,j)=x_{ij}+x_{1j}+x_{i1}$. The relation of the previous step applied to the pair $(i,1)$ with $t=j$ gives $q(i,j)=\lambda+x_{i1}$, where $\lambda$ depends only on the pair $\{i,1\}$, so $q(i,j)$ is independent of $j$; the pair $(j,1)$ with $t=i$ makes it independent of $i$ as well. Since $n\ge k+2\ge5$, given pairs $\{i,j\}$ and $\{i',j'\}$ there is an index $m$ different from $1,i,i',j'$, and then $q(i,j)=q(i,m)=q(i',m)=q(i',j')$; hence $q$ is a single constant $c$: $$x_{ij}=x_{i1}+x_{j1}+c\qquad(i,j\ne1).$$ Put $u_1=0$ and $u_i=x_{i1}+c$ for $i\ne1$. Then for every edge $$\boxed{x_{ij}=u_i+u_j+c}.$$`,
        String.raw`For a $k$-set $S$, summing this formula over its $\binom{k}{2}$ edges gives $$1=(k-1)\sum_{i\in S}u_i+\binom{k}{2}c.$$`,
        String.raw`If $k$ is even, then $k-1$ is odd, so Step 7's identity forces $\sum_{i\in S}u_i$ to take the same value for every $k$-set $S$. Since $n\ge k+2$, any two vertices $i,j$ lie outside some common $(k-1)$-set $U$, and comparing $U\cup\{i\}$ with $U\cup\{j\}$ gives $u_i=u_j$: all $u_i$ are equal. Their sum over a $k$-set is then $0$ because $k$ is even, so $$\binom{k}{2}c=1.$$ This is possible exactly when $\binom{k}{2}$ is odd, i.e. $k\equiv2\pmod4$. Then $c=1$, all $u_i$ are equal, and therefore every edge is red: for $k\equiv2\pmod4$ there is at most one coloring.`,
        String.raw`If $k$ is odd, then $k-1$ is even and the $u_i$ drop out of Step 7's identity, leaving $$\binom{k}{2}c=1.$$ For $k\equiv1\pmod4$ the left side vanishes for every $c$, so no coloring exists; for $k\equiv3\pmod4$ we must have $c=1$ with the $u_i$ free, so any coloring satisfies $$x_{ij}=u_i+u_j+1,$$ an edge being red exactly when $u_i=u_j$. Thus every coloring comes from a bipartition of the vertices, with red edges inside the two parts and blue edges between them. Replacing every $u_i$ by $u_i+1$ gives the same coloring, and these are the only duplications, so there are at most $2^{n-1}$ colorings.`,
        String.raw`Conversely, all exhibited colorings work, which turns the bounds of the last two steps into equalities. Substituting into Step 7's identity: for $k\equiv2\pmod4$ (all $u_i=u$, $c=1$) the red-edge parity of any $k$-set is $(k-1)ku+\binom{k}{2}\equiv1$ since $k(k-1)$ is even and $\binom{k}{2}$ is odd; for $k\equiv3\pmod4$ (any $u$, $c=1$) it is $0+\binom{k}{2}\equiv1$. So the unique all-red coloring and the $2^{n-1}$ bipartition colorings are genuinely $k$-odd, and since the counts of Steps 1-4 are positive, a $k$-odd coloring exists exactly in the cases the classification lists.`,
        String.raw`Thus a $k$-odd coloring exists precisely when $n=k$ or $n=k+1$, or when $k\equiv2,3\pmod4$. For $n\ge k+2$, the classification is: no colorings for $k\equiv0,1\pmod4$; the unique all-red coloring for $k\equiv2\pmod4$; and exactly the bipartition colorings above, numbering $2^{n-1}$, for $k\equiv3\pmod4$.`
      ]
    },
    {
      "id": "c19",
      "category": "cmb",
      "difficulty": "hard",
      "stars": 4,
      "rating": 7,
      "confidence": "high",
      "text": String.raw`One corner square is cut off an $8\times 8$ chessboard; two remaining squares are adjacent when they share an edge. Maryam fixes a token on some square $s$ of the board - that square counts as visited. Iman then moves the token first, and the players alternate: each move takes the token along an edge to a square not yet visited, which then becomes visited. The player who cannot move loses. Determine exactly the starting squares $s$ from which the first player Iman can force a win.`,
      "why": String.raw`This is undirected vertex geography, governed by matchings: the player to move from $v$ wins exactly when every maximum matching covers $v$. If some maximum matching misses $v$, the second player answers every move along its domino, and an unanswerable move would yield an augmenting path. If $v$ is always covered, the first player moves along its domino and becomes the second player on the board with $v$ deleted. On the board, call the removed corner's colour black: 31 black squares against 32 white, so a matching has at most 31 dominoes, and a serpentine path through all 63 squares, starting next to the cut corner, attains 31 while covering every black square. Hence Iman wins exactly from the 31 squares of the removed corner's colour. Cutting the serpentine at any white square gives a maximum matching that misses it.`,
      "hints": [
        String.raw`Rephrase as Geography on the board graph and think in dominoes, i.e. matchings.`,
        String.raw`The player to move from $s$ wins exactly when every maximum matching covers $s$.`,
        String.raw`A colour count bounds $\nu\le31$ and a snake matching attains it: corner-colour squares are essential.`,
        String.raw`Cut the snake path at any white square to get a maximum matching missing it.`
      ],
      "steps": [
        String.raw`Definitions for the proof (not needed for the statement): a MATCHING of the board is a set of dominoes covering no square twice; it is MAXIMUM when no larger one exists, a matching COVERS a square when some domino contains it, and a square is essential if every maximum matching covers it. Lemma (the engine): the player about to move from the (just-visited) square $v$ wins if and only if $v$ is essential.`,
        String.raw`Lemma, if-direction: let $M$ be a maximum matching that does NOT cover $v$. The second player's strategy: whenever the first player lands on a square $x$, reply by moving along the $M$-domino containing $x$. The reply always exists: if the first player could land on an $M$-uncovered square $y\ne v$, the visited track $v,\dots,y$ would alternate non-matching/matching edges and form an augmenting path for $M$ - impossible for a maximum matching, by Berge's augmenting-path criterion. The reply never repeats a square: visited squares always form $\{v\}$ plus whole $M$-dominoes, so the partner of a fresh square is fresh. Thus the second player always answers and the first player is the first stuck.`,
        String.raw`Lemma, only-if-direction: let $v$ be essential, take any maximum $M$, and let the first player move along the $M$-domino $vu$. Delete $v$ from the board: $M\setminus\{vu\}$ is a maximum matching of the remaining board $B-v$ (its size is $\nu(B)-1=\nu(B-v)$: at least by this matching, at most because any larger matching of $B-v$ would be a maximum of $B$ missing $v$, contradicting essentiality) and it misses $u$. The rest of the game is exactly the same game on $B-v$ starting at $u$ with $u$ visited, and by the if-direction the player to move there - now the SECOND player - loses. So moving along $vu$ wins for the first player.`,
        String.raw`The removed corner is not a vertex of the board; name its colour black (a naming only - the answer is stated in colour-relative form below). Label the 63 remaining squares as $p_1,p_2,\dots,p_{63}$ in row-by-row serpentine order, beginning with the square adjacent to the removed corner. Consecutive squares $p_i,p_{i+1}$ are joined by board edges; $p_1$ neighbours the black corner so it is white, and the path alternates colours, so the odd-indexed $p_i$ are white and the even-indexed $p_i$ are black. Pair $p_1p_2,p_3p_4,\dots,p_{61}p_{62}$ along the path. This gives 31 legal dominoes, covers every black square, and leaves only the white square $p_{63}$ uncovered; and no matching has more than 31 dominoes, since each domino covers exactly one of the 31 black squares. Hence $\nu(B)=31$, and this maximum matching covers every black square.`,
        String.raw`Black start $s$: $B-s$ has 30 black and 32 white squares, so every matching of $B-s$ has size at most 30 - deleting $s$ drops the matching number from 31 to 30: $s$ is essential; by the only-if-direction Iman wins.`,
        String.raw`White start $w$: in the same snake, $w=p_{2k-1}$ for some $k$, since white squares occupy the odd positions. Cutting the path at $w$ leaves two even paths $p_1,\dots,p_{2k-2}$ and $p_{2k},\dots,p_{63}$; domino-tile each along its own consecutive pairs. These 31 dominoes form a maximum matching of $B$ that MISSES $w$, so $w$ is non-essential and the if-direction makes Maryam (the second player) win from $w$ by mirroring along these very dominoes. Iman's win strategy from a black $s$ is likewise explicit: take the snake domino $su$ covering $s$ in the matching of step 3, move to $u$, and then mirror Maryam along the remaining snake dominoes.`,
        String.raw`Assemble the answer: Iman can force a win exactly from the $31$ squares sharing the colour of the cut-off corner, and Maryam wins from each of the other $32$ squares - a description independent of the colour naming of step 3.`
      ]
    },
    {
      "id": "c20",
      "category": "cmb",
      "difficulty": "hard",
      "stars": 4,
      "rating": 7,
      "confidence": "high",
      "text": String.raw`Let $W_n$ be a wheel with a marked rim vertex $s$, where $n\ge3$. Put a number $h\in\{0,1,\dots,n-1\}$ at the hub and a number in $\{0,1,2\}$ at every other rim vertex. Initially only $s$ is lit. Whenever an unlit vertex has more lit neighbors than its number, it becomes lit. Call a labeling successful if all vertices eventually become lit, and let $P_n$ be the number of successful labelings. Let $L_0=2$, $L_1=1$, and $L_{r+2}=L_{r+1}+L_r$ be the Lucas numbers. Prove that $P_3=16$, $P_4=45$, and $P_n=3P_{n-1}-P_{n-2}+2$ for $n\ge5$, and hence prove $P_n=L_{2n}-2$.`,
      "why": String.raw`Fix the hub value $h$ and treat the rim minus $s$ as a path. While the hub is dark, a 2 can never light, and a 1 lights only when both neighbours are lit, which happens only for words $0^a10^b$, and those light the whole rim. So for $h\lt n-1$ the hub lights exactly when the leading plus trailing zeros number at least $h$. Once the hub is lit, a word succeeds iff every maximal block of nonzero labels contains at most one 2, since a stretch of 1s between two 2s stays stuck forever. Counting nonzero-ended cores gives $C_1=2$ and $C_k=F_{2k}$ for $k\ge2$, which leads to $F_{2q}+(n-q)F_{2q-1}$ labelings with $q=n-h$ (the case $h=n-1$, worth $n$, is checked separately). Summing over $q$ gives $P_n=L_{2n}-2$, and the recurrence follows from $L_{2n}=3L_{2n-2}-L_{2n-4}$.`,
      "hints": [
        String.raw`Fix the hub value $h$; delete $s$ and watch propagation along the rim path.`,
        String.raw`Pre-hub only end zero-runs (or lone-$1$ words $0^a10^b$) light; for $h\lt n-1$ the hub lights iff the end zeroes total $\ge h$.`,
        String.raw`After the hub lights, a maximal nonzero block clears iff it holds at most one $2$.`,
        String.raw`Count such blocks via a generating function: even-index Fibonacci numbers; sum over $h$, treating $h=n-1$ separately.`
      ],
      "steps": [
        String.raw`Write the nonsink rim as a path $v_1,\dots,v_{n-1}$, put $m=n-1$, and fix the hub value $h$. The hub has $s$ as an already-lit neighbour, so the hub lights as soon as $h$ of the other rim vertices are lit. Track who can light before the hub: a vertex labelled $2$ cannot, since with the hub dark it has at most two lit neighbours; a vertex labelled $1$ lights only when both of its rim neighbours are lit ($s$ counts as lit). Taking the first labelled-$1$ vertex $x$ to light, its lit neighbours lie in the zero-runs propagating inward from the two ends, so $x$ is the only nonzero symbol and the rim word has the shape $0^a10^{m-1-a}$, in which case the whole rim lights before the hub. Hence for $h\lt m$ the hub lights exactly when the total number $z$ of leading and trailing zeroes satisfies $z\ge h$ (the single-$1$ words have $z=m-1\ge h$), and a labeling is successful iff $z\ge h$ and the remaining word also clears once the hub is lit (Step 2). For $h=m=n-1$ success forces the whole rim to light before the hub, which happens exactly for $0^m$ and the $m$ words $0^a10^{m-1-a}$; hence $A_{n,n-1}=n$.`,
        String.raw`Let $F_0=0$, $F_1=1$, and $F_{r+2}=F_{r+1}+F_r$ be the Fibonacci numbers. Once the hub is lit, the remaining rim word is successful exactly when every maximal block of nonzero entries contains at most one $2$: if a block contains two $2$'s, the run of $1$'s between two consecutive ones, together with those two $2$'s, can never light: each of its $1$'s sees at most one lit vertex outside the run (the hub) and each of its $2$'s at most two (the hub and the outer neighbour), so this remains true inductively as the closure grows and the block never clears; conversely, a block with at most one $2$ can be cleared from its two ends, with its unique possible $2$ burning last. Let $C_k$ be the number of such valid words of length $k$ that begin and end nonzero. A positive block has generating function $B(x)=\frac{x}{1-x}+\frac{x}{(1-x)^2}=\frac{x(2-x)}{(1-x)^2}$, while a separating zero-run has $Z(x)=\frac{x}{1-x}$. Hence $$C(x)=\frac{B(x)}{1-B(x)Z(x)}=\frac{x(2-x)(1-x)}{1-3x+x^2}.$$ Therefore $C_1=2$ and $C_k=F_{2k}$ for every $k\ge2$.`,
        String.raw`Let $A_{n,h}$ be the number of successful labelings with hub value $h$. For $q=m-h\ge1$, Step 1 says a rim word succeeds iff $z\ge h$ and its nonzero core (if any) is valid in the sense of Step 2. Decompose the word into a nonzero-ended core of length $k\ge1$ surrounded by $s=m-k$ end zeroes, plus the all-zero word: the core is one of $C_k$ words, placed in $s+1$ ways, and $z=s\ge h$ reads $k\le q$, so $$A_{n,h}=1+\sum_{k=1}^{q}(m-k+1)C_k=1+2m+\sum_{k=2}^{q}(m-k+1)F_{2k}.$$ Using $\sum_{k=2}^{q}F_{2k}=F_{2q+1}-2$, induction on $q$ gives $A_{n,h}=F_{2q+2}+hF_{2q+1}=F_{2(n-h)}+hF_{2(n-h)-1}$. At $q=0$ this decomposition sum degenerates to $1$ (the all-zero word) and must be supplemented by the $m$ single-$1$ words of Step 1, so $A_{n,n-1}=m+1=n$ in agreement with the same closed form $F_2+(n-1)F_1$.`,
        String.raw`Summing over $h$ and writing $q=n-h$ gives $P_n=\sum_{q=1}^{n}\bigl(F_{2q}+(n-q)F_{2q-1}\bigr)$. Now $\sum_{q=1}^{n}F_{2q}=F_{2n+1}-1$, $\sum_{q=1}^{n}F_{2q-1}=F_{2n}$, and $\sum_{q=1}^{n}qF_{2q-1}=nF_{2n}-F_{2n-1}+1$. Therefore $P_n=F_{2n+1}+F_{2n-1}-2=L_{2n}-2$.`,
        String.raw`Finally $L_{2n}$ satisfies $L_{2n}=3L_{2n-2}-L_{2n-4}$, so $P_n=3P_{n-1}-P_{n-2}+2$. The formula gives $P_3=L_6-2=18-2=16$ and $P_4=L_8-2=47-2=45$.`
      ]
    },
    {
      "id": "c21",
      "category": "cmb",
      "difficulty": "hard",
      "stars": 4,
      "rating": 7,
      "confidence": "high",
      "text": String.raw`There are $n$ piles, each with a token of value $1$. In each step, choose two piles with values $A$ and $B$ and merge them into a pile of value $A+B+\min(A,B)$. Repeat $n-1$ times.

Prove that the maximum possible value of the final pile equals the number of odd entries in the first $n$ rows of Pascal's triangle, i.e. the number of pairs $(x,y)$ with $0\le x\le y\lt n$ for which $\binom yx$ is odd.`,
      "why": String.raw`A merge history is a binary tree, and $A+B+\min(A,B)$ is increasing in both arguments, so each subtree should be optimal: $M(n)$ is the maximum over splits $i\le n-i$ of $M(i)+M(n-i)+\min$. Since $M$ is increasing, the min is the smaller part's value, so $M(n)=\max_i(2M(i)+M(n-i))$. On the Pascal side, Lucas's theorem says row $y$ has $2^{s(y)}$ odd entries, where $s(y)$ is the number of 1s in binary, so the target is $S(n)=\sum_{r\lt n}2^{s(r)}$. It satisfies $S(2t)=3S(t)$ and $S(2t+1)=2S(t)+S(t+1)$, which say balanced splits achieve the recursion with equality. The heart is the inequality $S(i+j)\ge2S(i)+S(j)$ for $i\le j$, proved by induction on parities, so no unbalanced split does better. Thus $M=S$, for example $M(8)=27=3^3$.`,
      "hints": [
        String.raw`Model merges as binary trees and write the max-recurrence for $M(n)$.`,
        String.raw`Prove $M$ strictly increasing; the recurrence collapses to $\max_i\,(2M(i)+M(n-i))$.`,
        String.raw`Lucas' theorem: row $y$ has $2^{\operatorname{popcount}(y)}$ odd entries; the count is $S(n)=\sum_{r\lt n}2^{\operatorname{popcount}(r)}$.`,
        String.raw`Get $S(2t)=3S(t)$, then $S(i+j)\ge2S(i)+S(j)$ for $i\le j$ by parity induction; strong induction ends it.`
      ],
      "steps": [
        String.raw`Let $M(n)$ be the maximum obtainable from $n$ piles; $M(1)=1$, and every achievable pile value is at least its leaf count, so $M(k)\ge k\ge 1$ always. Any merge history is a binary tree: the last merge joins subtrees on $i$ and $n-i$ leaves, $1\le i\le\lfloor n/2\rfloor$. Since $x\mapsto x+y+\min(x,y)$ is nondecreasing in each variable, replacing a child's value by its per-size optimum $M(i)$, $M(n-i)$ can only increase the parent, so the true recurrence is $$M(n)=\max_{1\le i\le\lfloor n/2\rfloor}\bigl(M(i)+M(n-i)+\min(M(i),M(n-i))\bigr)$$: the max is an upper bound for every tree, and conversely each term is attained by running the two optimal sub-procedures on the two disjoint sets of piles independently and merging at the end.`,
        String.raw`$M$ is strictly increasing: for $n\ge2$ the split $i=1$ gives $M(n)\ge M(1)+M(n-1)+\min(M(1),M(n-1))\ge 1+M(n-1)+1$, using $M(n-1)\ge1$. Hence for $i\le n-i$ one has $\min(M(i),M(n-i))=M(i)$, and the recurrence simplifies to $$M(n)=\max_{1\le i\le\lfloor n/2\rfloor}\bigl(2M(i)+M(n-i)\bigr),\qquad M(1)=1.$$`,
        String.raw`Define $w(r)=2^{\operatorname{popcount}(r)}$, where $\operatorname{popcount}(r)$ is the number of $1$-bits in the binary expansion of $r$, and $$S(n)=\sum_{r=0}^{n-1}w(r).$$ Lucas' theorem modulo $2$ says that $\binom yx$ is odd exactly when every $1$-bit of $x$ also occurs in $y$. Thus row $y$ contains exactly $2^{\operatorname{popcount}(y)}=w(y)$ odd entries, so $S(n)$ is exactly the required Pascal-triangle count.`,
        String.raw`Since $\operatorname{popcount}(2r)=\operatorname{popcount}(r)$ and $\operatorname{popcount}(2r+1)=\operatorname{popcount}(r)+1$, we have $$S(2t)=3S(t),\qquad S(2t+1)=2S(t)+S(t+1).$$`,
        String.raw`We prove the key binary-block lemma $$S(i+j)\ge2S(i)+S(j) \tag{L}$$ for $0\le i\le j$ by strong induction on $i+j$. Base cases $i+j=0,1$ are immediate from $S(0)=0$. For $i+j\ge2$, write $i=2a+\delta$, $j=2b+\varepsilon$, with $\delta,\varepsilon\in\{0,1\}$. If $(\delta,\varepsilon)=(0,0)$, then $a\le b$ and the induction hypothesis for $(a,b)$ gives $$3S(a+b)\ge6S(a)+3S(b)=2S(i)+S(j).$$ If $(0,1)$, then $a\le b$, and the induction hypotheses for $(a,b)$ and $(a,b+1)$ give the required inequality after using $$S(2t)=3S(t),\qquad S(2t+1)=2S(t)+S(t+1).$$ If $(1,0)$, then $a\lt b$, so the induction hypotheses for $(a,b)$ and $(a+1,b)$ give the same conclusion. Finally, if $(1,1)$ and $a=b$, then $i=j=2a+1$ and equality $S(i+j)=S(4a+2)=3S(2a+1)=2S(i)+S(j)$ follows from $S(2t)=3S(t)$. If $(1,1)$ and $a\lt b$, the induction hypotheses for $(a,b+1)$ and $(a+1,b)$ imply $$S(a+b+1)\ge2S(a)+S(b)+w(b),$$ $$S(a+b+1)\ge2S(a)+S(b)+2w(a).$$ Hence, with $M_0$ the larger right-hand side, $$M_0\ge2S(a)+S(b)+\frac{2w(a)+w(b)}3.$$ Therefore $$S(i+j)=3S(a+b+1)\ge6S(a)+3S(b)+2w(a)+w(b)=2S(i)+S(j).$$`,
        String.raw`Applying the lemma to any split $i\le n-i$ gives $$2S(i)+S(n-i)\le S(n).$$ For $n\ge2$, the admissible range $1\le i\le\lfloor n/2\rfloor$ contains the balancing split: if $n=2i$ is even, then $$2S(i)+S(i)=3S(i)=S(n);$$ if $n=2i+1$ is odd, then $i=(n-1)/2\ge1$ and $$2S(i)+S(i+1)=S(2i+1)=S(n).$$ Thus $$S(n)=\max_{1\le i\le\lfloor n/2\rfloor}\bigl(2S(i)+S(n-i)\bigr).$$`,
        String.raw`Both recurrences reference only arguments $i$ and $n-i$ strictly between $0$ and $n$, so $M(n)=S(n)$ follows from $M(1)=S(1)=1$ by strong induction: assuming equality below $n$, $$M(n)=\max_{1\le i\le\lfloor n/2\rfloor}\bigl(2M(i)+M(n-i)\bigr)=\max_{1\le i\le\lfloor n/2\rfloor}\bigl(2S(i)+S(n-i)\bigr)=S(n).$$ Hence the maximum final pile equals the number of odd entries in the first $n$ rows of Pascal's triangle.`
      ]
    },
    {
      "id": "c22",
      "category": "cmb",
      "difficulty": "hard",
      "stars": 4,
      "rating": 7.5,
      "confidence": "high",
      "text": String.raw`Let $G$ be a finite simple graph, with a positive real number $w(v)$ attached to each vertex $v$. A move chooses a vertex $v$, earns $w(v)$, and deletes $v$ together with all its neighbors. For an induced subgraph $H$ define $$\Phi(H)=\sum_{v\in V(H)}\frac{w(v)^3}{\sum_{u\in N_H[v]}w(u)^2},$$ where $N_H[v]$ is the closed neighborhood of $v$ in $H$. Prove that there is a sequence of moves whose total earnings are at least $\Phi(G)$.`,
      "why": String.raw`The proof is a potential argument: show that some move earns at least the drop in $\Phi$, so that earnings plus the current potential never decrease, then iterate until the graph is empty. Write $F(v)=w(v)+\Phi(H-N[v])$ for the value of moving at $v$. Rather than finding the good $v$ directly, average $F$ with weights $w(v)^2$. Fix a surviving vertex $x$. Deleting $N[v]$ can only shrink its denominator, so it contributes at least $w(x)^3/D(x)$, where $D(x)=\sum_{u\in N[x]}w(u)^2$, and it survives for $v$ of total weight $S-D(x)$, with $S=\sum w^2$. Adding the immediate earnings $\sum w^3$, the $D(x)$ terms cancel exactly, leaving $\sum_v w(v)^2F(v)\ge S\,\Phi(H)$. Hence some $v$ has $F(v)\ge\Phi(H)$. With equal weights this is the Caro-Wei independent set bound $\sum1/(d(v)+1)$.`,
      "hints": [
        String.raw`Set a potential $\Phi$ on the remaining graph and aim to keep earnings plus $\Phi$ nondecreasing.`,
        String.raw`Weight by $w(v)^2$ and average $F(v)=w(v)+\Phi(H-N_H[v])$, swapping the order of summation.`
      ],
      "steps": [
        String.raw`For nonempty $H$ put $S=\sum_{v\in V(H)}w(v)^2$ and $D(v)=\sum_{u\in N_H[v]}w(u)^2$. For each $v$ define $F(v)=w(v)+\Phi(H-N_H[v])$.`,
        String.raw`Consider $\sum_v w(v)^2F(v)$. The first part is $\sum_v w(v)^3$. Fix $x$. If $x$ survives after deleting $N_H[v]$, then $v\notin N_H[x]$, and its denominator in the new potential is at most $D(x)$, so its contribution is at least $w(x)^3/D(x)$. Since $\sum_{v\notin N_H[x]}w(v)^2=S-D(x)$, $$\sum_v w(v)^2\Phi(H-N_H[v])\ge\sum_x\frac{w(x)^3}{D(x)}\bigl(S-D(x)\bigr).$$ Adding $\sum_x w(x)^3$ gives $$\sum_v w(v)^2F(v)\ge S\sum_x\frac{w(x)^3}{D(x)}=S\Phi(H).$$`,
        String.raw`Therefore some vertex $v$ satisfies $F(v)\ge\Phi(H)$. At every stage choose a vertex maximizing $F(v)$. If $E_k$ is the total earned after $k$ moves and $H_k$ is the remaining graph, then $E_{k+1}+\Phi(H_{k+1})\ge E_k+\Phi(H_k)$.`,
        String.raw`The graph eventually becomes empty, so $\Phi(H_k)=0$. Hence the final earnings satisfy $E_{\mathrm{final}}\ge\Phi(G)$.`
      ]
    },
    {
      "id": "c23",
      "category": "cmb",
      "difficulty": "challenging",
      "stars": 5,
      "rating": 8.5,
      "confidence": "high",
      "text": String.raw`Let $m\ge3$ be odd. A school has $m$ students and $n\ge m+2$ clubs; no two clubs have the same membership set. For two clubs, their $\mathit{discord}$ is the number of students in exactly one of them. Let $d_{\min}$ and $d_{\max}$ be the minimum and maximum discords. Prove that $$\frac{d_{\max}}{d_{\min}}\ge\frac{m+3}{m-1}.$$ Show that the bound is attained for $m=3$ and $m=5$.`,
      "why": String.raw`Two separate bounds multiply together. First, $d_{\min}$ is small: coordinate $j$ separates at most $n^2/4$ pairs of clubs, so $\binom n2d_{\min}\le mn^2/4$, and with $n\ge m+2$ and $m$ odd this gives $d_{\min}\le\frac{m-1}{2}$, a Plotkin-type averaging. Second, the discords cannot take only two consecutive values. Translate so that one club is $\varnothing$, split the clubs by weight parity, and pass to $\pm1$ vectors. Same-parity pairs then have one inner product, opposite-parity pairs another inner product, which is odd and so nonzero because $m$ is odd, and the Gram matrix has rank at least $n-1\gt m$, impossible in $\mathbb R^m$. Hence $d_{\max}\ge d_{\min}+2$ and the ratio is at least $1+\frac{4}{m-1}=\frac{m+3}{m-1}$. Equality: $\varnothing,\{1\},\{2\},\{3\},\{1,2,3\}$ gives 3; seven sets with discords 2 and 4 give 2 for $m=5$.`,
      "hints": [
        String.raw`Represent clubs as vectors in $\{0,1\}^m$; discord is Hamming distance.`,
        String.raw`Bound $\delta$ by counting, per coordinate, the pairs it splits.`,
        String.raw`Rule out $\Delta\le\delta+1$: translate one club to $\mathbf 0$, then split by weight parity.`,
        String.raw`Switch to $\{\pm1\}$-vectors: two constant inner products force a Gram matrix of rank $\ge n-1\gt m$.`
      ],
      "steps": [
        String.raw`Represent each club by its incidence vector in $\{0,1\}^m$. Let $\delta=d_{\min}$ and $\Delta=d_{\max}$. Since the clubs have distinct membership sets, $\delta\ge1$. For each student-coordinate $j$, suppose $r_j$ of the $n$ clubs contain that student. Exactly $r_j(n-r_j)$ unordered pairs of clubs differ in coordinate $j$, and $$r_j(n-r_j)\le\frac{n^2}{4}.$$ Hence the sum of all pairwise discords satisfies $$\sum_{a\lt b}d(a,b)\le m\frac{n^2}{4}.$$ On the other hand every pair has discord at least $\delta$, so $$\binom n2\delta\le m\frac{n^2}{4},$$ giving $$\delta\le\frac{mn}{2(n-1)}.$$ Since $n\ge m+2$, the right-hand side is at most $$\frac{m(m+2)}{2(m+1)}=\frac{m+1}{2}-\frac1{2(m+1)}\lt \frac{m+1}{2}.$$ As $m$ and $\delta$ are integers and $m$ is odd, $$\boxed{\delta\le\frac{m-1}{2}}.$$`,
        String.raw`We next prove $$\boxed{\Delta\ge\delta+2}.$$ Suppose for contradiction that $\Delta\le\delta+1$. Replace every incidence vector $x$ by $x\oplus x_0$ for one fixed club $x_0$. This is an isometry of Hamming space, so all pairwise discords are unchanged; after the replacement, one club is the zero vector and, since every pairwise distance is either $\delta$ or $\delta+1$, every club other than $x_0$ has weight $\delta$ or $\delta+1$, namely its distance to the zero vector.`,
        String.raw`Partition the clubs according to the parity of their weights. Two clubs in the same parity class have even Hamming distance, while two clubs in opposite parity classes have odd Hamming distance. Because the only possible distances are the consecutive integers $\delta,\delta+1$, all pairs within the same parity class have one common distance $E$, namely the even member of $\{\delta,\delta+1\}$, and every pair from opposite parity classes has the other common distance $O$, the odd member.`,
        String.raw`Replace each binary vector by its $\{\pm1\}$-vector obtained from $0\mapsto1$ and $1\mapsto-1$. For two such vectors, inner product equals $m-2d$, where $d$ is their Hamming distance. Thus vectors in the same parity class have constant off-diagonal inner product $$\alpha=m-2E,$$ while vectors in opposite parity classes have constant inner product $$\beta=m-2O.$$ Since $m$ is odd, $\beta$ is odd and therefore $\beta\ne0$.`,
        String.raw`If all clubs have the same weight parity, their Gram matrix is $$G=(m-\alpha)I_n+\alpha J_n.$$ Here $$m-\alpha=2E\gt 0,$$ so $G$ has the positive eigenvalue $2E$ with multiplicity $n-1$. Hence $\operatorname{rank}G\ge n-1$. But $G=VV^T$ for vectors in $\mathbb R^m$, so $\operatorname{rank}G\le m$, contradicting $n\ge m+2$.`,
        String.raw`Suppose instead that both parity classes are nonempty, of sizes $p$ and $q$. The Gram matrix has block form $$G=\begin{pmatrix}(m-\alpha)I_p+\alpha J_p&\beta J_{p\times q}\\ \beta J_{q\times p}&(m-\alpha)I_q+\alpha J_q\end{pmatrix}.$$ On the subspace of vectors whose coordinates in each block separately sum to $0$, $G$ acts as multiplication by $m-\alpha=2E\gt 0$; this gives rank at least $n-2$. On the remaining $2$-dimensional space of vectors constant on each block, the representing matrix has off-diagonal entry $\beta\sqrt{pq}\ne0$, so it has rank at least $1$. Hence $$\operatorname{rank}G\ge n-1\gt m,$$ again impossible. Therefore $\Delta\le\delta+1$ is impossible, proving $\Delta\ge\delta+2$.`,
        String.raw`Combining the two bounds gives $$\frac{\Delta}{\delta}\ge1+\frac2\delta\ge1+\frac{4}{m-1}=\boxed{\frac{m+3}{m-1}}.$$`,
        String.raw`For $m=3$, take the five membership sets $$\varnothing,\ \{1\},\ \{2\},\ \{3\},\ \{1,2,3\}.$$ The minimum discord is $1$, the maximum is $3$, and $$\frac{d_{\max}}{d_{\min}}=3=\frac{3+3}{3-1}.$$`,
        String.raw`For $m=5$, take the seven membership sets $$\varnothing,\ \{1,2\},\ \{1,3\},\ \{1,4\},\ \{1,5\},\ \{2,3\},\ \{1,2,3,4\}.$$ Every pair has discord $2$ or $4$, both values occur, so $d_{\min}=2$, $d_{\max}=4$, and $$\frac{d_{\max}}{d_{\min}}=2=\frac{5+3}{5-1}.$$ Thus the stated bound is attained in these two cases.`
      ]
    },
    {
      "id": "c24",
      "category": "cmb",
      "difficulty": "challenging",
      "stars": 5,
      "rating": 8.5,
      "confidence": "high",
      "text": String.raw`Let $n\lt m$ be positive integers. Let $a_{ij}$ be real numbers for $1\le i\le n$ and $1\le j\le m$. We say a sequence of real numbers $x_1,\dots,x_m$ is $\mathit{stable}$ if we can choose $n$ pairwise distinct integers $c_1,\dots,c_n\in\{1,\dots,m\}$ such that $$a_{i,c_i}-x_{c_i}\ge a_{ij}-x_j \quad\text{for all }1\le i\le n\text{ and }1\le j\le m.$$ Prove that if two sequences $y=(y_1,\dots,y_m)$ and $z=(z_1,\dots,z_m)$ are stable, then the sequence $u$ defined by $u_j=\min(y_j,z_j)$ is also stable.`,
      "why": String.raw`Take matchings witnessing stability for $y$ and $z$ and overlay them. Each row has one edge from each, so the union splits into alternating paths and cycles. If row $i$ is matched to $p$ under $y$ and to $q$ under $z$, the two optimality conditions combine to $d_p\le d_q$ for $d=y-z$, so $d$ is monotone along each path and constant around each cycle. Under $u=\min(y,z)$, row $i$'s score at column $j$ is $\max(a_{ij}-y_j,a_{ij}-z_j)$, so its $u$-optimum is attained at $p$ or $q$. Cut each component where $d$ changes sign, use the $y$-edges on one side and the $z$-edges on the other, and every row gets a distinct $u$-optimal column. Maximum is not preserved: with two rows of zeros and $m=3$, $(0,0,1)$ and $(1,0,0)$ are stable but $(1,0,1)$ is not.`,
      "hints": [
        String.raw`Take witnessing optimal matchings $M_y,M_z$ for $y$ and $z$ and study their union.`,
        String.raw`For $d=y-z$, a row's columns obey $d_p\le d_q$: $d$ is nondecreasing along paths oriented from the $M_y$ end.`,
        String.raw`Rewrite $a_{ij}-u_j=\max(\alpha_j,\alpha_j+d_j)$ with $\alpha_j=a_{ij}-y_j$: optima live at $p$ or $q$.`,
        String.raw`Cut each component at the sign change of $d$: use $M_y$ edges below and $M_z$ edges above.`
      ],
      "steps": [
        String.raw`Let $M_y$ and $M_z$ be witnessing matchings for the stability of $y$ and $z$: each row vertex $i$ is matched to one column, the columns used by each matching are pairwise distinct, and its matched edge is row-wise optimal for the corresponding sequence. Form the bipartite multigraph $H=M_y\cup M_z$ on the finite vertex set of the $n$ row and $m$ column vertices, keeping the two edges distinct when the same row-column pair occurs in both matchings. Every row has degree $2$ and every column has degree at most $2$, and $H$ is finite, so every connected component of $H$ is an alternating cycle or an alternating path whose endpoints are columns (columns of degree $0$ or unused vertices play no role). A doubled common edge is regarded as a $2$-cycle. Along any path the two matching edges strictly alternate, because each row and each internal column is incident to exactly one $M_y$ edge and one $M_z$ edge; hence the two end-edges lie in $\mathit{opposite}$ matchings, exactly one endpoint column is reached by an $M_y$ edge, and the orientation used in the next step is always available.`,
        String.raw`Put $$d_j=y_j-z_j.$$ Suppose a row $i$ uses column $p$ in $M_y$ and column $q$ in $M_z$. Stability gives $$a_{ip}-y_p\ge a_{iq}-y_q$$ and $$a_{iq}-z_q\ge a_{ip}-z_p.$$ Hence $$y_p-y_q\le a_{ip}-a_{iq}\le z_p-z_q,$$ so $$d_p\le d_q.$$ In a path, orient the component from the endpoint belonging to $M_y$. Writing it as $$c_0-i_1-c_1-i_2-c_2-\cdots-i_k-c_k,$$ where $i_r$ is joined to $c_{r-1}$ by its $M_y$ edge and to $c_r$ by its $M_z$ edge, we obtain $$d_{c_0}\le d_{c_1}\le\cdots\le d_{c_k}.$$ Around an alternating cycle the inequalities go all the way around, hence all its columns have the same $d$-value.`,
        String.raw`Fix any row $i$ (path or cycle), with $M_y$ column $p$ and $M_z$ column $q$. Define $$\alpha_j=a_{ij}-y_j.$$ Since $p$ is $y$-optimal, $\alpha_p\ge\alpha_j$ for every $j$. Also $z_j=y_j-d_j$, so $q$ being $z$-optimal means $$\alpha_q+d_q\ge\alpha_j+d_j$$ for every $j$ (applied at $j=p$ this gives $\alpha_p+d_p\le\alpha_q+d_q$). Finally, because $u_j=\min(y_j,z_j)=y_j-\max(d_j,0)$, the row-$i$ $u$-score at column $j$ is $$a_{ij}-u_j=\alpha_j+\max(d_j,0)=\max(\alpha_j,\alpha_j+d_j).$$ Chaining the two optima, $\max(\alpha_j,\alpha_j+d_j)\le\max(\alpha_p,\alpha_q+d_q)$ for every $j$, while the row's $u$-score at $p$ is $\max(\alpha_p,\alpha_p+d_p)$ and at $q$ is $\max(\alpha_q,\alpha_q+d_q)$; using $\alpha_p+d_p\le\alpha_q+d_q$ and $\alpha_q\le\alpha_p$, the per-column bound $\max(\alpha_p,\alpha_q+d_q)$ is therefore attained at $p$ or at $q$. Sign cases: if $d_p,d_q\le0$, then $\alpha_q+d_q\le\alpha_q\le\alpha_p$, so $p$ is $u$-optimal; if $d_p,d_q\ge0$, then $\alpha_p\le\alpha_p+d_p\le\alpha_q+d_q$, so $q$ is $u$-optimal; if $d_p\le0\le d_q$, the bound $\max(\alpha_p,\alpha_q+d_q)$ is exactly $p$'s score $\alpha_p$ or $q$'s score $\alpha_q+d_q$, so at least one of $p,q$ is $u$-optimal. The remaining sign pattern $d_q\le0\le d_p$ forces $d_p=d_q=0$ by Step 2's $d_p\le d_q$, which is already inside the first two cases; the three sign cases therefore cover every row.`,
        String.raw`Consider an alternating cycle; by Step 2 its column differences are all equal, say to $\delta$ (a doubled-edge $2$-cycle has one column and is trivially covered, with $p=q$ and $\delta=d_p$). Every row of the cycle then has both of its columns in the same sign case: if $\delta\le0$ all rows fall under case $d_p,d_q\le0$, so every $M_y$ edge is $u$-optimal; if $\delta\ge0$ all rows fall under case $d_p,d_q\ge0$, so every $M_z$ edge is $u$-optimal (when $\delta=0$ either choice works). The $M_y$ edges of the cycle alone already match every row of the component to pairwise distinct columns of the cycle, and so do the $M_z$ edges, so either full choice covers the component with no collision.`,
        String.raw`Now consider an alternating path $$c_0-i_1-c_1-\cdots-i_k-c_k$$ with $d_{c_0}\le\cdots\le d_{c_k}$, where row $i_r$ uses column $c_{r-1}$ via $M_y$ and column $c_r$ via $M_z$. If every $d_{c_r}\le0$, take all $M_y$ edges; if every $d_{c_r}\gt 0$, take all $M_z$ edges; in the first case each row is in sign case $d_p,d_q\le0$ and in the second each row is in case $d_p,d_q\ge0$ (strictly positive), so by Step 3 every chosen edge is $u$-optimal, and each choice covers all $k$ rows with $k$ distinct columns. Otherwise let $t$ be the largest index in $\{0,\dots,k-1\}$ with $d_{c_t}\le0$; then $d_{c_{t+1}}\gt 0$. Take the $M_y$ edge $c_{r-1}$ of row $i_r$ for $r\le t$ (there both columns carry index $\le t$, hence nonpositive $d$: case one), take the $M_z$ edge $c_r$ of row $i_r$ for $r\ge t+2$ (there both columns carry index $\ge t+1$, hence positive $d$: case two), and for the single transition row $i_{t+1}$, whose columns satisfy $d_{c_t}\le0\le d_{c_{t+1}}$, choose whichever of its two incident edges is $u$-optimal, which the third sign case guarantees exists. The columns used are $$c_0,c_1,\dots,c_{t-1},\quad\text{then }c_t\text{ or }c_{t+1},\quad\text{then }c_{t+2},\dots,c_k,$$ pairwise distinct, so no collision arises; the degenerate subcases $t=0$ and $t=k-1$ simply drop the first or last block.`,
        String.raw`Thus every connected component of $H$ contains a matching covering all its row vertices by edges that are individually $u$-optimal, with no column used twice; the word $\mathit{optimal}$ is global, since Step 3 bounds the row-$i$ $u$-score at every column $j\in\{1,\dots,m\}$, not merely at columns of the same component. Distinct components have disjoint column sets, so combining these matchings over all components gives $n$ pairwise distinct columns $c_1,\dots,c_n$ such that $$a_{i,c_i}-u_{c_i}\ge a_{ij}-u_j$$ for every row $i$ and every column $j$. Therefore $u=(\min(y_1,z_1),\dots,\min(y_m,z_m))$ is stable.`
      ]
    },
    {
      "id": "c25",
      "category": "cmb",
      "difficulty": "challenging",
      "stars": 5,
      "rating": 9,
      "confidence": "high",
      "text": String.raw`For $n\ge2$, identify the vertices of the $n$-dimensional cube with the binary vectors in $\{0,1\}^n$. Color every vertex black or white, and call the coloring square-odd if every $2$-dimensional face contains an odd number of black vertices. Determine the minimum possible number of black vertices, and determine the number of square-odd colorings attaining that minimum.`,
      "why": String.raw`The local rule pins down a global formula. The coloring $q(x)=\binom{|x|}{2}$ mod 2 (black when the weight is 2 or 3 mod 4) puts an odd count on every square, and the difference of any two square-odd colorings is even on every square. A strong induction on weight shows such a difference is affine, $c+a\cdot x$. So there are exactly $2^{n+1}$ square-odd colorings, $q+c+a\cdot x$. Counting black vertices means bounding the sign sum $W_n(a)=\sum_x(-1)^{q(x)+a\cdot x}$. Splitting off the last coordinate gives $W_n(b,t)=W_{n-1}(b)\pm W_{n-1}(b+\mathbf1)$, and induction yields $|W_n|=2^{n/2}$ for all $a$ when $n$ is even, while for odd $n$ one of each complementary pair is 0 and the other $2^{(n+1)/2}$. Hence the minimum is $2^{n-1}-2^{\lfloor(n-1)/2\rfloor}$, attained by $2^n$ colorings ($n$ even) or $2^{n-1}$ ($n$ odd).`,
      "hints": [
        String.raw`Subtract the coloring $q(x)=\sum_{i\lt j}x_ix_j$ modulo $2$; the difference has even parity on every square.`,
        String.raw`Use strong induction on the Hamming weight of a vertex to show that every zero-square-parity function is affine.`,
        String.raw`Translate the number of black vertices into a signed character sum and study the pair $W_n(a),W_n(a+\mathbf1)$ recursively.`,
        String.raw`The dichotomy of $|W_n(a)|$ by parity of $n$ yields the minimum and counts the extremal colorings.`
      ],
      "steps": [
        String.raw`Identify a vertex with its support $S\subseteq[n]$. Work modulo $2$. Define $$q(S)=\binom{|S|}{2}\pmod2.$$ If a square toggles coordinates $i,j$, its four vertices are $T,T\cup\{i\},T\cup\{j\},T\cup\{i,j\}$ for some $T$ disjoint from $\{i,j\}$. Since $$q(T\cup\{i\})=q(T)+|T|,$$ $$q(T\cup\{i,j\})=q(T)+2|T|+1,$$ the sum of the four $q$-values is $1$. Hence $q$ itself is square-odd.`,
        String.raw`Let $f(S)\in\mathbb F_2$ be the indicator of a black vertex in a square-odd coloring, and put $g=f+q$. Then every square has sum of its four $g$-values equal to $0$. We now prove by STRONG INDUCTION on $r=|S|$ that there are constants $c,a_1,\dots,a_n\in\mathbb F_2$ such that $$g(S)=c+\sum_{i\in S}a_i.$$ For $r=0,1$ this is the definition of $c=g(\varnothing)$ and $a_i=g(\{i\})+g(\varnothing)$. For $r\ge2$, choose distinct $i,j\in S$. The zero-parity condition on the corresponding square gives $$g(S)=g(S\setminus\{i\})+g(S\setminus\{j\})+g(S\setminus\{i,j\}).$$ All three sets have smaller cardinality, so the strong induction hypothesis applies and yields exactly $$g(S)=c+\sum_{i\in S}a_i.$$`,
        String.raw`Therefore every square-odd coloring has the form $$f(S)=\binom{|S|}{2}+c+\sum_{i\in S}a_i\pmod2.$$ This representation is unique, because $c=f(\varnothing)$ and each $a_i=f(\{i\})+f(\varnothing)$ since $q(\varnothing)=q(\{i\})=0$. Conversely, every choice of $(c,a_1,\dots,a_n)$ does give a square-odd coloring: on any square the affine part $c+\sum_{i\in S}a_i$ contributes $4c+2a_i+2a_j+4\sum_{t\in T}a_t=0$ modulo $2$, while the quadratic part contributes $1$ by the first step. Hence the square-odd colorings are in bijection with the pairs $(c,a)$ and there are exactly $2^{n+1}$ of them.`,
        String.raw`For $a=(a_1,\dots,a_n)\in\mathbb F_2^n$, define the signed sum $$W_n(a)=\sum_{S\subseteq[n]}(-1)^{\binom{|S|}{2}+\sum_{i\in S}a_i}.$$ If $N_n$ is the number of black vertices, then $$N_n=\frac{2^n-(-1)^cW_n(a)}2.$$ Thus, for a fixed $a$, the better of the two choices of $c$ gives $$N_n=\frac{2^n-|W_n(a)|}{2}.$$ Hence the global minimum is determined by the maximum possible value of $|W_n(a)|$.`,
        String.raw`Write $a=(b,t)$ with $b\in\mathbb F_2^{n-1}$ and $t\in\mathbb F_2$, corresponding to the last coordinate. If $S\subseteq[n-1]$, then adding the last coordinate changes $\binom{|S|}{2}$ by $|S|$. Therefore $$W_n(b,t)=W_{n-1}(b)+(-1)^tW_{n-1}(b+\mathbf1),$$ where $\mathbf1=(1,\dots,1)\in\mathbb F_2^{n-1}$.`,
        String.raw`We prove the following dichotomy by induction on $n$. If $n$ is odd, then for every $a$, exactly one of $W_n(a)$ and $W_n(a+\mathbf1)$ is $0$, while the other has absolute value $2^{(n+1)/2}$. If $n$ is even, then both have absolute value $2^{n/2}$. For $n=1$, $$W_1(0)=2,\qquad W_1(1)=0,$$ so the odd case holds. Suppose first that $n$ is even and the assertion holds for $n$. Then $W_n(b)$ and $W_n(b+\mathbf1)$ have equal absolute value $M=2^{n/2}$. Their sum and difference are therefore either $0$ or $2M$ in absolute value; applying the recurrence to $b,t$ and to $b+\mathbf1,t+1$ shows that exactly one of the two new values is zero and the other has absolute value $2M=2^{(n+2)/2}$. This proves the odd case for $n+1$. Conversely, if $n$ is odd, exactly one of $W_n(b),W_n(b+\mathbf1)$ is nonzero, of magnitude $M=2^{(n+1)/2}$. The recurrence then gives $$|W_{n+1}(b,t)|=M$$ for every $t$, and the same holds for its complementary coefficient vector, proving the even case.`,
        String.raw`Consequently, for every $n\ge2$, $$\max_{a\in\mathbb F_2^n}|W_n(a)|=2^{\lceil n/2\rceil}.$$ Substituting into the black-vertex formula gives $$\boxed{N_n^{\min}=\frac{2^n-2^{\lceil n/2\rceil}}2=2^{n-1}-2^{\lfloor(n-1)/2\rfloor}}.$$`,
        String.raw`It remains to count extremal colorings. If $n$ is even, every one of the $2^n$ coefficient vectors $a$ has $|W_n(a)|=2^{n/2}$, and for each $a$ exactly one of the two choices of $c$ realizes the minimum. Hence there are exactly $$\boxed{2^n}$$ extremal colorings.`,
        String.raw`If $n$ is odd, the dichotomy says that among each complementary pair $\{a,a+\mathbf1\}$ exactly one coefficient vector has nonzero $W_n$. There are $2^{n-1}$ such pairs, so exactly $2^{n-1}$ choices of $a$ can be extremal, and again each determines exactly one optimal $c$. Hence the number of extremal colorings is $$\boxed{2^{n-1}}.$$`,
        String.raw`Thus the final answer is $$\boxed{2^{n-1}-2^{\lfloor(n-1)/2\rfloor}}$$ black vertices at minimum, attained by exactly $2^n$ colorings when $n$ is even and exactly $2^{n-1}$ colorings when $n$ is odd.`
      ]
    },
    {
      "id": "g6",
      "category": "geo",
      "difficulty": "easy",
      "stars": 2,
      "rating": 3.5,
      "confidence": "high",
      "text": String.raw`Let $ABC$ be a non-isosceles triangle. Its incircle $\omega$ touches $BC$ at $D$, and its $A$-excircle $\omega_A$ touches $BC$ at $K$. Let $\Gamma$ be the circle with diameter $DK$. The circle $\Gamma$ meets $\omega$ again at $P\ne D$, and meets $\omega_A$ again at $Q\ne K$. Let $X=DP\cap KQ$. Prove that $AX\perp BC$.`,
      "why": String.raw`The key is two hidden collinearities: $A,P,K$ and $A,Q,D$. The homothety at $A$ taking the incircle to the excircle sends the antipode $E$ of $D$ to $K$, so $A,E,K$ are collinear. The second point $P'$ of line $AK$ on $\omega$ sees the diameter $DE$ at a right angle, so $\angle DP'K=90^\circ$, which puts $P'$ on $\Gamma$; hence $P'=P$. The symmetric argument gives $A,Q,D$ collinear. Now $\angle APX=\angle AQX=90^\circ$, so $A,P,X,Q$ lie on the circle with diameter $AX$. An angle chase through this circle and $\Gamma$ gives $\angle XAD+\angle ADB=90^\circ$, i.e. $AX\perp BC$. What solvers usually miss is the classical fact that $A$, the incircle antipode of $D$, and the excircle touch point $K$ are collinear; once you see it, $\Gamma$ stops being a mysterious circle.`,
      "hints": [
        String.raw`The homothety at $A$ sending $\omega$ to $\omega_A$ maps the antipode of $D$ to $K$; deduce $A,P,K$ are collinear.`,
        String.raw`Cyclically, $A,D,Q$ are collinear, and Thales on $\Gamma$ gives $\angle APX=\angle AQX=90^\circ$.`,
        String.raw`$APXQ$ is cyclic; chase $\angle XAD=\angle DKQ$ and $\angle ADB=\angle QDK$ to conclude $AX\perp BC$.`
      ],
      "steps": [
        String.raw`Let $E$ be the point of $\omega$ antipodal to $D$. The homothety $h$ centered at $A$ sending the incircle $\omega$ to the $A$-excircle $\omega_A$ preserves the common tangent line $BC$ and the radii perpendicular to it, so it carries the touchpoint $D$ to the point of $\omega_A$ antipodal to $K$; equivalently $h(E)=K$. Hence $A$, $E$, $K$ are collinear, and the line $AK$ meets $\omega$ at $E$ and one further point $P'$, with $E$ closer to $A$.`,
        String.raw`Since $E$ is the antipode of $D$ on $\omega$, $\angle EP'D=90^\circ$, i.e. $\angle AP'D=90^\circ$ and (as $A,E,K$ are collinear) $\angle DP'K=90^\circ$. Thus $P'$ lies on the circle $\Gamma$ of diameter $DK$; as $P'\in\omega$ and $P'\ne D$ it is the second intersection, so $P'=P$ and $A,P,K$ are collinear. The same argument with $\omega$ and $\omega_A$ exchanged (line $AD$ meets $\omega_A$ again at the point $Q'$ that sees $DK$ under a right angle) shows $A,D,Q$ are collinear.`,
        String.raw`Because $X=DP\cap KQ$, the ray $PX$ is ray $PD$ and the ray $PA$ is ray $PK$; as $P\in\Gamma$ with $DK$ a diameter, $\angle KPD=90^\circ$, so $\angle APX=90^\circ$. Likewise $\angle AQX=\angle DQK=90^\circ$. Hence $P$ and $Q$ both lie on the circle with diameter $AX$, i.e. $A,P,X,Q$ are concyclic.`,
        String.raw`It remains to prove $\angle XAD+\angle ADB=90^\circ$. Using $A,P,K$ collinear, $A,D,Q$ collinear and $D,P,K,Q\in\Gamma$: $\angle XAD=\angle XAQ=\angle XPQ$ (subtending chord $XQ$ of $(APXQ)$) $=\angle DPQ=\angle DKQ$ (subtending chord $DQ$ of $\Gamma$). Also $\angle ADB$ is the angle between rays $DA=DQ$ and $DB=DK$, i.e. $\angle ADB=\angle QDK$. Therefore $\angle XAD+\angle ADB=\angle DKQ+\angle QDK=180^\circ-\angle DQK=90^\circ$ since $\angle DQK=90^\circ$ ($Q\in\Gamma$, $DK$ a diameter). Thus $AX\perp BC$. $\blacksquare$`
      ]
    },
    {
      "id": "g1",
      "category": "geo",
      "difficulty": "warmup",
      "stars": 1,
      "rating": 2,
      "confidence": "high",
      "text": String.raw`Let $ABC$ be an acute triangle with circumcircle $\omega$, and let $P$ be a point strictly inside $\angle BAC$, not on $AB$ or $AC$, with $P\ne A,H$, where $H$ is the orthocentre. Reflect $P$ in the lines $AB$ and $AC$, obtaining $X$ and $Y$. Prove that the circumcircle of triangle $AXY$ is tangent to $\omega$ at $A$ if and only if $AP\perp BC$.`,
      "why": String.raw`Reflecting $P$ in two lines through $A$ keeps $AX=AY=AP$, so $\triangle AXY$ is isosceles and the centre of $(AXY)$ sits on the bisector of $\angle XAY$. A short angle chase shows this bisector is the isogonal of $AP$ at $A$. Now tangency at $A$ just means the two centres are collinear with $A$, i.e. that this isogonal line is $AO$. Since $AO$ and the altitude $AH$ are the classical isogonal pair, the condition is exactly $AP\perp BC$. The hypothesis $P\ne H$ is there for one reason: the reflections of $\omega$ in $AB$ and $AC$ are $(ABH)$ and $(ACH)$, so $(AXY)=\omega$ precisely when $P=H$, and then we would have a coincidence rather than a tangency. So the whole problem is a single isogonal swap, $AO\leftrightarrow AH$, in disguise.`,
      "hints": [
        String.raw`Since $AX=AY=AP$, the centre of $(AXY)$ lies on the line from $A$ to the midpoint of $XY$.`,
        String.raw`Angle-chase: that line is the isogonal of $AP$, and $AO$ is isogonal to the altitude from $A$.`,
        String.raw`Tangency at $A$ means collinear centres; $\omega'\ne\omega$ since $P\ne H$.`
      ],
      "steps": [
        String.raw`Since $AB$ and $AC$ pass through $A$, reflection in them fixes $A$, so $AX=AY=AP$ and $\triangle AXY$ is isosceles with apex angle $\angle XAY=2\angle BAC$. If $M$ is the midpoint of $XY$ then $AM\perp XY$ and $AM$ bisects $\angle XAY$, so the centre of $\omega':=(AXY)$ lies on line $AM$. As $\angle XAM=\angle BAC=\angle XAB+\angle BAP$, we get $\angle BAM=\angle XAM-\angle XAB=\angle BAC-\angle BAP=\angle PAC$: line $AM$ is the isogonal image of the ray $AP$ at $A$.`,
        String.raw`The circles $\omega'$ and $\omega$ are distinct. Reflection in $AB$ carries $\omega$ to $(ABH)$, for the reflection $H'$ of $H$ in $AB$ satisfies $\angle AH'B=\angle AHB=180^\circ-\angle C$, so $H'\in\omega$. Thus $X\in\omega$ iff $P\in(ABH)$ and, cyclically, $Y\in\omega$ iff $P\in(ACH)$; hence $\omega'=\omega$ iff $P\in(ABH)\cap(ACH)=\{A,H\}$, excluded.`,
        String.raw`Two distinct circles through $A$ are tangent at $A$ exactly when their centres and $A$ are collinear, i.e. when line $AM=AO$. The isogonal of $AO$ at $A$ is the altitude line $AH$, since $\angle OAB=90^\circ-\angle C=\angle DAC$ for the altitude foot $D$. The isogonal map is an involution on the pencil at $A$ swapping $AM\leftrightarrow AP$ and $AO\leftrightarrow AH$, so $\omega'$ is tangent to $\omega$ at $A$ iff $AM=AO$ iff $AP=AH$ iff $AP\perp BC$.`
      ]
    },
    {
      "id": "g2",
      "category": "geo",
      "difficulty": "warmup",
      "stars": 1,
      "rating": 2,
      "confidence": "high",
      "text": String.raw`Let $P$ be a point on the circumcircle $\omega$ of triangle $ABC$, and let $O$ be the centre of $\omega$. The line through $P$ parallel to $BC$ meets $\omega$ again at a point $A'$ (if that line is tangent to $\omega$, set $A' := P$); the lines through $P$ parallel to $CA$ and to $AB$ define $B'$ and $C'$ likewise. Prove that the midpoints of the segments $AA'$, $BB'$, $CC'$ all lie on one diameter of $\omega$.`,
      "why": String.raw`Measure points of $\omega$ by their arc position $\theta$. Two chords are parallel exactly when their endpoint sums $\theta(U)+\theta(V)$ agree modulo a full turn, because a chord is perpendicular to the diameter through the midpoint of its arc. The three parallels $PA'\parallel BC$, $PB'\parallel CA$, $PC'\parallel AB$ then say that $\theta(A)+\theta(A')$, $\theta(B)+\theta(B')$ and $\theta(C)+\theta(C')$ all equal $\theta(A)+\theta(B)+\theta(C)-\theta(P)$. So $AA'$, $BB'$, $CC'$ are three parallel chords. The diameter perpendicular to them bisects all three, and that is the required line. Seen this way, a statement about midpoints is really a statement about directions, and the proof is one line of arc arithmetic. The tangent case $A'=P$ fits in automatically if you read the chord $PP$ as the tangent at $P$.`,
      "hints": [
        String.raw`Use directed arcs modulo $2\pi$: a chord's direction is fixed by $\theta(U)+\theta(V)$, so parallel chords give equal sums.`,
        String.raw`Show the three sums $\theta(A)+\theta(A')$, $\theta(B)+\theta(B')$, $\theta(C)+\theta(C')$ all agree.`,
        String.raw`A chord's midpoint is the foot from $O$ onto its perpendicular diameter.`
      ],
      "steps": [
        String.raw`Fix an orientation of $\omega$ and let $\theta(X)\in\mathbb R/2\pi\mathbb Z$ be the directed arc to a point $X\in\omega$. The midpoint $M$ of arc $UV$ satisfies $2\theta(M)\equiv\theta(U)+\theta(V)$, and from $MU=MV$ and $OU=OV$ the diameter $OM$ is the perpendicular bisector of the chord $UV$. Thus every chord $UV$ is perpendicular to the diameter of arc-position $\theta(U)+\theta(V)$, and two chords are parallel iff the sums of their endpoint-arcs agree modulo $2\pi$.`,
        String.raw`By construction $PA'\parallel BC$, so $\theta(P)+\theta(A')\equiv\theta(B)+\theta(C)$, and cyclically $\theta(P)+\theta(B')\equiv\theta(C)+\theta(A)$, $\theta(P)+\theta(C')\equiv\theta(A)+\theta(B)$. Adding $\theta(A)$, $\theta(B)$, $\theta(C)$ to these gives $\theta(A)+\theta(A')\equiv\theta(B)+\theta(B')\equiv\theta(C)+\theta(C')=:S\pmod{2\pi}$.`,
        String.raw`Hence the chords $AA',BB',CC'$ are all perpendicular to the single diameter $d$ of arc-position $S/2$, so $d$ bisects each of them; their midpoints are the feet of the perpendiculars from $O$, and therefore lie on $d$.`
      ]
    },
    {
      "id": "g3",
      "category": "geo",
      "difficulty": "warmup",
      "stars": 1,
      "rating": 2.5,
      "confidence": "high",
      "text": String.raw`Let $ABC$ be a non-equilateral triangle with circumcenter $O$ and orthocenter $H$. For each vertex $V\in\{A,B,C\}$, let $\omega_V$ be the circle centered at $V$ and passing through $H$. A line $\ell$ through $H$ meets $\omega_A,\omega_B,\omega_C$ again at $X,Y,Z$, respectively. Let $M$ be the centroid of $XYZ$. Let $J$ be the point on $OH$ satisfying $OJ=\frac13OH$ and lying on the ray $OH$. Prove that the locus of $M$ is the circle centered at $J$ with radius $\frac23OH$.`,
      "why": String.raw`It looks like a hard locus, but it is only a projection. Because $\omega_A$ is centred at $A$, the second point $X$ is the reflection of $H$ in the foot $A'$ of the perpendicular from $A$ to $\ell$, and the same holds for $Y$ and $Z$. So the homothety at $H$ with ratio $\tfrac12$ sends $M$ to the centroid of $A'B'C'$. Orthogonal projection onto $\ell$ is affine, so that centroid is just the foot $G'$ of the centroid $G$ on $\ell$. As $\ell$ turns about $H$, $G'$ runs over the circle with diameter $HG$ by Thales. Doubling from $H$ gives a circle centred at $G$ with radius $HG$, and the Euler line, with $HG=\tfrac23 OH$, identifies $G$ as the point $J$. The non-equilateral hypothesis simply keeps $G\ne H$, so the circle does not shrink to a point.`,
      "hints": [
        String.raw`$X$ is the reflection of $H$ in the foot of the perpendicular from $A$ to $\ell$.`,
        String.raw`The homothety with centre $H$ and ratio $\tfrac12$ sends $M$ to the projection of the centroid $G$ onto $\ell$.`,
        String.raw`Those feet trace the circle with diameter $HG$ by Thales; double it and use $HG=2\,GO$.`
      ],
      "steps": [
        String.raw`Let $A'$ be the foot of the perpendicular from $A$ to $\ell$. Since $\omega_A$ has centre $A$ and chord $HX$ lying on $\ell$, the point $A'$ is the midpoint of $HX$, i.e.\ $X$ is the reflection of $H$ in $A'$; define $B',C'$ and $Y,Z$ likewise, all on $\ell$.`,
        String.raw`The homothety $h(H,\tfrac12)$ sends $X\mapsto A'$, $Y\mapsto B'$, $Z\mapsto C'$, and carries the centroid $M$ of $XYZ$ to the centroid $G'$ of $A'B'C'$. Thus $H,G',M$ are collinear with $M=h(H,2)(G')$.`,
        String.raw`Orthogonal projection onto $\ell$ is affine and sends $A,B,C$ to $A',B',C'$, hence sends the centroid $G$ of $ABC$ to the centroid $G'$ of $A'B'C'$: the point $G'$ is precisely the foot of the perpendicular from $G$ to $\ell$.`,
        String.raw`As $\ell$ rotates about $H$ the foot $G'$ satisfies $\angle GG'H=90^\circ$, so $G'$ runs over the circle $\Gamma$ with diameter $HG$ (converse of Thales), and every point of $\Gamma$ is attained. Hence $M=h(H,2)(G')$ runs over the circle $\Gamma_2=h(H,2)(\Gamma)$ with diameter $HG_2$, where $G_2=h(H,2)(G)$ lies on ray $HG$ with $HG_2=2\,HG$.`,
        String.raw`By the Euler line, $G$ lies on $OH$ with $HG=\tfrac23 OH$. The centre of $\Gamma_2$ is the midpoint of $HG_2$, which is $G$, and its radius is $\tfrac12 HG_2=HG=\tfrac23 OH$; the point $G$ is exactly the $J$ of the statement ($OJ=\tfrac13 OH$ on ray $OH$). The locus of $M$ is the circle centred at $J$ with radius $\tfrac23 OH$. $\blacksquare$`
      ]
    },
    {
      "id": "g4",
      "category": "geo",
      "difficulty": "easy",
      "stars": 2,
      "rating": 3,
      "confidence": "high",
      "text": String.raw`Let $ABC$ be a triangle with circumcircle $\omega$ of centre $O$ and radius $R$, and orthocentre $H$. For a point $P$ in the plane, let $P_a,P_b,P_c$ be the reflections of $P$ in the midpoints of $BC,CA,AB$ - that is, the segments $PP_a$, $PP_b$, $PP_c$ are bisected by the midpoints of $BC$, $CA$, $AB$ respectively - and let $\Gamma_P$ denote the circle through $P_a,P_b,P_c$. Prove that:
(a) $\Gamma_P$ is tangent to the nine-point circle of $ABC$ (the circle through the midpoints of the three sides) if and only if $P$ lies either on the nine-point circle or on the circle with the same centre and three times its radius;
(b) if $P$ and $Q$ are the endpoints of a diameter of $\omega$, then the circles $\Gamma_P$ and $\Gamma_Q$ are tangent to each other and their point of tangency is $H$.`,
      "why": String.raw`The point reflections are hiding a half-turn. Since $PP_a$ and $BC$ bisect each other, $PBP_aC$ is a parallelogram, and chaining the three parallelograms shows that $AP_a$, $BP_b$, $CP_c$ share a common midpoint. The half-turn about that point carries $ABC$ to $P_aP_bP_c$, so $\Gamma_P$ is a congruent copy of $\omega$, with radius $R$ and centre $O_P$. Next, the homothety at $P$ with ratio $\tfrac12$ maps $P_a,P_b,P_c$ to the side midpoints, which shows that the nine-point centre $N$ is the midpoint of $PO_P$. Part (a) then reduces to comparing radii: $NO_P=NP$ equals $\tfrac R2$ or $\tfrac{3R}2$. For (b), $N$ also bisects $OH$, so $POO_PH$ is a parallelogram and $HO_P=R$. Antipodal $P,Q$ give opposite translations, and so the two circles touch at $H$.`,
      "hints": [
        String.raw`The midpoint reflections give parallelograms; chained, $\Gamma_P$ is the image of $\omega$ under a half-turn.`,
        String.raw`Show the nine-point centre $N$ is the midpoint of $PO_P$, where $O_P$ is the centre of $\Gamma_P$.`,
        String.raw`Tangency of circles of radii $R$ and $R/2$: centre distance $R/2$ or $3R/2$.`,
        String.raw`For (ii), $POO_PH$ is a parallelogram, so $HO_P=OP=R$.`
      ],
      "steps": [
        String.raw`Let $L,M,N_c$ be the midpoints of $BC,CA,AB$. Since $PP_a$ and $BC$ bisect each other at $L$, the quadrilateral $PBP_aC$ is a parallelogram, and cyclically $PCP_bA$ and $PAP_cB$. Hence $ABP_aP_b$ is a parallelogram, so $AP_a$ and $BP_b$ bisect each other, and cyclically $BP_b,CP_c$ do: the three segments $AP_a,BP_b,CP_c$ share one midpoint $Q_0$. The half-turn about $Q_0$ sends $A,B,C$ to $P_a,P_b,P_c$ and $O$ to a point $O_P$; it preserves distances, so $\Gamma_P$ is the image of $\omega$, with centre $O_P$ and radius $R$.`,
        String.raw`Let $X$ be the midpoint of $PO_P$. The homothety with centre $P$ and ratio $\tfrac12$ sends $O_P$ to $X$ and $P_a$ to $L$, so $XL=\tfrac12\,O_PP_a=\tfrac R2$, and cyclically $XM=XN_c=\tfrac R2$. The unique point equidistant from the non-collinear $L,M,N_c$ is their circle's centre, the nine-point centre $N$, so $X=N$: $N$ is the midpoint of $PO_P$ and $NO_P=NP$ for every $P$.`,
        String.raw`Claim (i). The nine-point circle has centre $N$ and radius $\tfrac R2$, being $h(H,\tfrac12)(\omega)$; $\Gamma_P$ has centre $O_P$, radius $R$, and $NO_P=NP$. Two circles are tangent exactly when their centre distance equals the sum or difference of their radii, so $\Gamma_P$ touches the nine-point circle iff $NP=\tfrac R2$ or $NP=\tfrac{3R}2$ — precisely the nine-point circle and its concentric circle of triple radius. On the inner branch $N$ bisects $PO_P$ with $NP=NO_P=\tfrac R2$, so $PO_P=R$ and the contact point is $P$ (internal); the outer branch is external.`,
        String.raw`Claim (ii). Take $P,Q$ antipodal on $\omega$, so $O$ is the midpoint of $PQ$ with $OP=OQ=R$. As $N$ bisects both $PO_P$ and $OH$, the quadrilateral $POO_PH$ is a parallelogram, giving $HO_P=OP=R$, so $H\in\Gamma_P$; cyclically $H\in\Gamma_Q$. The translations $H\to O_P$ and $H\to O_Q$ equal the translations $P\to O$ and $Q\to O$, which are opposite along $PQ$, so $O_P,H,O_Q$ are collinear with $H$ the midpoint of $O_PO_Q$ and the centre distance $O_PO_Q=2R$. Two circles of radius $R$ at distance $2R$ are externally tangent, and $H$ is their only common point, since any common point $X$ has $XO_P+XO_Q=O_PO_Q$ and so lies on the segment $O_PO_Q$ at distance $R$ from $O_P$, i.e. $X=H$.`
      ]
    },
    {
      "id": "g5",
      "category": "geo",
      "difficulty": "easy",
      "stars": 2,
      "rating": 3,
      "confidence": "high",
      "text": String.raw`Let $ABCD$ be a convex cyclic quadrilateral whose diagonals $AC$ and $BD$ meet at $M$, and let $N$ be the midpoint of the side $CD$. Prove that the line $MN$ is perpendicular to the line $AB$ if and only if either the diagonals are perpendicular, $AC\perp BD$, or the opposite sides are parallel, $AB\parallel CD$.`,
      "why": String.raw`The clean test for $MN\perp AB$ is that $M$ and $N$ have the same difference of squared distances to $A$ and $B$. Because projection is affine, the midpoint $N$ contributes the average of $C$ and $D$. Write $x,y,u,v$ for the four diagonal segments from $M$. Cyclicity enters only through the intersecting-chords relation $xu=yv$, and the condition collapses to the factored form $m(xv-yu)=0$, where $m$ is the projection of $MA$ onto $BD$. The two factors are exactly the two answers. If $m=0$ then $AC\perp BD$, which is Brahmagupta's theorem. If $xv=yu$, combining it with $xu=yv$ forces $x=y$ and $u=v$, i.e. an isosceles trapezoid with $AB\parallel CD$. The pleasant surprise is that a single computation yields both the converse and the classical Brahmagupta direction.`,
      "hints": [
        String.raw`$MN\perp AB$ is one equality of squared distances: $MA^{2}-MB^{2}=NA^{2}-NB^{2}$.`,
        String.raw`The foot of $N$ on $AB$ is the midpoint of the feet of $C$ and $D$; reduce to $MA,MB,MC,MD$ with $MA\cdot MC=MB\cdot MD$.`,
        String.raw`The condition splits: either the projection of $MA$ on $BD$ vanishes (perpendicular diagonals), or $MA=MB$ and $MC=MD$.`,
        String.raw`Backward branches: median to the hypotenuse in $\triangle MCD$, then equal angles on the same chord.`
      ],
      "steps": [
        String.raw`Put $x=MA$, $y=MB$, $u=MC$, $v=MD$ and $\theta=\angle AMB$. Convexity makes all four positive and puts $A,C$ on opposite rays from $M$ and $B,D$ on opposite rays from $M$, so $\angle CMD=\theta$, and the intersecting-chords theorem gives $xu=yv$.`,
        String.raw`For a point $P$ let $P^*$ be its foot on line $AB$. Pythagoras gives $PA^2-PB^2=P^*A^2-P^*B^2$, so $PQ\perp AB\iff PA^2-PB^2=QA^2-QB^2$. Orthogonal projection onto $AB$ is affine, so the foot of the midpoint $N$ of $CD$ is the midpoint of $C^*D^*$; the criterion for $MN\perp AB$ becomes $2(MA^2-MB^2)=(CA^2-CB^2)+(DA^2-DB^2)$.`,
        String.raw`With $CA=x+u$, $DB=y+v$, and $A',C'$ the projections of $A,C$ onto line $BD$ (coordinates $m,c'$ from $M$ toward $D$, where $D,v$ and $B,-y$), similarity of the right triangles $MAA',MCC'$ on opposite rays gives $c'=-(u/x)m$, and substituting the four squared lengths into the criterion reduces it to $x(xu-yv)=m(xv-yu)$. Since $xu=yv$, the perpendicularity $MN\perp AB$ is equivalent to $m(xv-yu)=0$.`,
        String.raw`If $m=0$ then $AM\perp BD$, i.e.\ $AC\perp BD$. If $xv=yu$, dividing by $xu=yv$ gives $x=y$ and then $u=v$, so $\triangle MAB$ and $\triangle MCD$ are isosceles and $\angle MAB=\angle MCD=\tfrac12(180^\circ-\theta)$; equal alternate angles on transversal $AC$ give $AB\parallel CD$.`,
        String.raw`Conversely, if $AC\perp BD$ then in right triangle $MCD$ the median satisfies $NM=NC$, so $\angle NMC=\angle NCM=\angle ABD$ (angles on chord $AD$); with $T=MN\cap AB$ the angles in $\triangle AMT$ give $\angle MTA=180^\circ-(\angle MAB+\angle MBA)=90^\circ$, hence $MN\perp AB$. If $AB\parallel CD$ then alternate and same-arc angles give $\angle MCD=\angle MDC$, so $MC=MD$ and the median $MN$ to the base is $\perp CD\parallel AB$. Therefore $MN\perp AB$ iff $AC\perp BD$ or $AB\parallel CD$.`
      ]
    },
    {
      "id": "g7",
      "category": "geo",
      "difficulty": "easy",
      "stars": 2,
      "rating": 3.5,
      "confidence": "high",
      "text": String.raw`Let $ABC$ be an acute triangle with $AB\ne AC$, and let $D$ and $E$ be two distinct points strictly inside the segment $BC$. Drop the perpendiculars from $D$ to the lines $AB$ and $AC$, with feet $P$ and $Q$, and from $E$ to the lines $AB$ and $AC$, with feet $R$ and $S$. Prove that the lines $PS$ and $QR$ meet on the line $BC$ if and only if $\angle BAD=\angle CAE$.`,
      "why": String.raw`The four feet lie on two Thales circles, with diameters $AD$ and $AE$, and the angle condition is exactly what makes all four concyclic. By power of $A$, $P,Q,R,S$ are concyclic iff $AP\cdot AR=AQ\cdot AS$, iff $\triangle APQ\sim\triangle ASR$, and the angles in the Thales circles turn this into $\angle BAD=\angle CAE$: the feet of two isogonal points are concyclic. The centre of this pedal circle is the midpoint of $DE$, since it projects to the midpoints of $PR$ and $QS$, so it lies on $BC$. A circle centred on $BC$ makes $BC$ a symmetry axis for the complete quadrangle $PQRS$, and this puts $PS\cap QR$ on $BC$. The converse is the harder direction. Menelaus twice, together with powers of $B$ and $C$ in the Thales circles, recovers the same isogonality.`,
      "hints": [
        String.raw`The four feet lie two by two on the Thales circles with diameters $AD$ and $AE$.`,
        String.raw`$P,Q,R,S$ are concyclic exactly when $AP\cdot AR=AQ\cdot AS$ — read this as a similarity at $A$, i.e. the isogonal condition.`,
        String.raw`For the concurrence, show the foot-circle's centre lies on $BC$ and use the radical axis through $A$.`,
        String.raw`Converse: two Menelaus applications through the point on $BC$, plus the intersecting-secant identities on the Thales circles.`
      ],
      "steps": [
        String.raw`Let $\omega_D,\omega_E$ be the circles with diameters $AD,AE$. Since $\angle APD=\angle AQD=90^\circ$ and $\angle ARE=\angle ASE=90^\circ$ we have $A,P,Q,D\in\omega_D$ and $A,R,S,E\in\omega_E$, with $P,R\in AB$ and $Q,S\in AC$. Equal inscribed angles give $\angle APQ=\angle ADQ=90^\circ-\angle CAD$ and $\angle ARS=90^\circ-\angle CAE$.`,
        String.raw`Since $P,R$ lie on $AB$ and $Q,S$ on $AC$, power of $A$ makes $P,Q,R,S$ concyclic $\Longleftrightarrow AP\cdot AR=AQ\cdot AS\Longleftrightarrow\triangle APQ\sim\triangle ASR$ (they share $\angle A$) $\Longleftrightarrow\angle AQP=\angle ARS\Longleftrightarrow\angle BAD=\angle CAE$. Thus the foot-circle $\kappa=(PQRS)$ exists exactly when $AD,AE$ are isogonal.`,
        String.raw`Forward: assume $AD,AE$ isogonal, let $O$ be the centre of $\kappa$ and $M$ the midpoint of $DE$. Projection onto $AB$ sends $M$ to the midpoint of $PR$, so the perpendicular bisector of $PR$ is the line through $M$ perpendicular to $AB$; $O$ lies on it, hence $OM\perp AB$, and cyclically $OM\perp AC$, so $O=M\in BC$. For $Y=PQ\cap RS$ the common value $YP\cdot YQ=YR\cdot YS$ is the power of $Y$ in both $\omega_D$ and $\omega_E$, so $AY$ is their radical axis, perpendicular to the line of centres, a midline of $\triangle ADE$ parallel to $BC$; thus $AY\perp BC$. The diagonal points $X=PS\cap QR$, $Y=PQ\cap RS$, $A=PR\cap QS$ of the cyclic quadrangle $PQRS$ form a self-polar triangle, so $OX\perp AY$; as $O\in BC$ and $BC\perp AY$ the line $OX$ is $BC$, i.e. $X\in BC$.`,
        String.raw`Reverse: suppose $X=PS\cap QR$ lies on $BC$. Menelaus in $\triangle ABC$ for the transversals $P,S,X$ and $Q,R,X$ eliminates $BX/XC$ to give $AP\cdot AQ\cdot BR\cdot CS=AR\cdot AS\cdot BP\cdot CQ$. With $K$ the foot of the altitude from $A$, intersecting secants on $\omega_D,\omega_E$ give $BA\cdot BP=BD\cdot BK$, $BA\cdot BR=BE\cdot BK$, $CA\cdot CQ=CD\cdot CK$, $CA\cdot CS=CE\cdot CK$. Writing $AK=h$, $BK=m$, $CK=n$, $BD=d$, $BE=e$ and using $AB^2=m^2+h^2$, $AC^2=n^2+h^2$, these relations reduce the preceding equality to $AP\cdot AR=AQ\cdot AS$, the difference factoring with non-vanishing prefactors $h^2\gt mn$ and $e\ne d$ under acuteness and $D\ne E$; step 2 then gives $\angle BAD=\angle CAE$.`
      ]
    },
    {
      "id": "g8",
      "category": "geo",
      "difficulty": "easy",
      "stars": 2,
      "rating": 4,
      "confidence": "high",
      "text": String.raw`Let $ABC$ be an acute scalene triangle with circumcircle $\gamma$ and orthocenter $H$. Let $M$ be the midpoint of $BC$, and let $\psi$ be the circle with diameter $AM$. Let $D$ be the point on $\gamma$ diametrically opposite to $A$. A variable circle $\phi$ passes through $B$ and $C$, intersecting $\psi$ at two distinct points $X$ and $Y$, and assume points $D$ and $H$ are not on line $XY$. Let $\omega_1$ be the circumcircle of triangle $DXY$, and let $\omega_2$ be the circumcircle of triangle $HXY$. Prove that as the circle $\phi$ varies, both circles $\omega_1$ and $\omega_2$ pass through fixed points independent of $\phi$ (other than $D$ and $H$, respectively).`,
      "why": String.raw`Every common chord $XY$ passes through one fixed point $E$ of line $BC$. Indeed $\psi$ meets $BC$ at $M$ and the altitude foot $K$, and the point $E$ with $EB\cdot EC=EM\cdot EK$ has the same power $\kappa$ with respect to $\psi$ and to every circle through $B,C$. This uses $AB\ne AC$, which keeps $K\ne M$. So $EX\cdot EY=\kappa$ for every $\phi$, and every circle through $X,Y$ has power $\kappa$ at $E$. The inversion at $E$ with power $\kappa$ therefore fixes $\omega_1$ and $\omega_2$, and the inverses $D^*$ of $D$ and $H^*$ of $H$ are the fixed points. It remains to check $D^*\ne D$ and $H^*\ne H$. The half-turn about $M$ swaps $H$ and $D$, and this gives $ED^2\gt\kappa\gt EH^2$.`,
      "hints": [
        String.raw`$\psi$ meets $BC$ at $M$ and the altitude foot $K$; find the point $E$ on line $BC$ with equal powers w.r.t. $\psi$ and every $\phi$.`,
        String.raw`Then every $XY$ passes through $E$ and $EX\cdot EY$ is constant — mark points on rays $ED$, $EH$ by the converse of intersecting secants.`,
        String.raw`Compare $ED^{2}$ and $EH^{2}$ with that constant to get new points; the half-turn about $M$ swaps $H$ and $D$.`
      ],
      "steps": [
        String.raw`Let $K$ be the foot of the altitude from $A$ to $BC$. By Thales on the circle $\psi$ with diameter $AM$, the line $BC$ meets $\psi$ exactly at $M$ and $K$; acuteness and scalene make $K$ interior to $BC$ with $K\ne M$, and $B,C\notin\psi$, so $\psi$ differs from every admissible $\phi$ and their common chord $XY$ is the radical axis of $\phi$ and $\psi$.`,
        String.raw`Work with directed segments on $BC$. Since $M$ is the midpoint of $BC$, $\overline{TB}\cdot\overline{TC}=\overline{TM}^2-MB^2$ for all $T$. The unique point $E$ on $BC$ with $\overline{ME}\cdot\overline{MK}=MB^2$ (well defined as $K\ne M$) then has $\overline{EB}\cdot\overline{EC}=\overline{EM}\cdot\overline{EK}$, so $E$ has the same power $\kappa:=\overline{EM}\cdot\overline{EK}$ toward $\psi$ and toward every $\phi$; hence $E$ lies on $XY$ for all $\phi$. As $\overline{ME},\overline{MK}$ share sign and $ME\gt MB$, $\kappa\gt0$, and $E,\kappa$ depend only on $ABC$.`,
        String.raw`Let $\iota$ be the inversion with centre $E$ and power $\kappa$. The line $EXY$ gives $EX\cdot EY=\operatorname{Pow}_\psi(E)=\kappa$, and as it meets $\omega_1$ and $\omega_2$ at $X,Y$ their powers at $E$ also equal $\kappa$. A circle not through the centre is invariant under an inversion exactly when the power of the centre equals the inversion power, so $\iota$ fixes $\omega_1$ and $\omega_2$. Hence $D^*:=\iota(D)\in\omega_1$ and $H^*:=\iota(H)\in\omega_2$ for every $\phi$, and both are independent of $\phi$.`,
        String.raw`It remains $D^*\ne D$ and $H^*\ne H$, i.e. $ED^2\gt\kappa$ and $EH^2\lt\kappa$. The half-turn about $M$ swaps $H$ and $D$ (as $BHCD$ is a parallelogram, $AD$ a diameter of $\gamma$) and $K$ with the foot $D'$ of $D$, so $E,M,D'$ are collinear with $M$ between $E$ and $D'$. Then $\kappa=EM(EM-MK)=EM^2-MB^2$ while $ED^2=ED'^2+DD'^2\ge(EM+MK)^2\gt\kappa$. For $H$, from $EM=EK+KM$ one gets $\kappa=EK\cdot EM=EK^2+BK\cdot KC$, and $EH^2=EK^2+KH^2$; the similar right triangles $\triangle BKH\sim\triangle AKC$ give $KH\cdot AK=BK\cdot KC$, and $H$ lying on the segment $AK$ forces $KH\lt AK$, so $KH^2\lt BK\cdot KC$ and $EH^2\lt\kappa$.`,
        String.raw`Thus, for every admissible $\phi$, $\omega_1$ passes through the fixed point $D^*\ne D$ and $\omega_2$ through the fixed point $H^*\ne H$, both independent of $\phi$. $\blacksquare$`
      ]
    },
    {
      "id": "g9",
      "category": "geo",
      "difficulty": "easy",
      "stars": 2,
      "rating": 4.5,
      "confidence": "high",
      "text": String.raw`Let the incircle of $\triangle ABC$ with incenter $I$ touch $BC$, $CA$, $AB$ at $D$, $E$, $F$ respectively, with $CA\ne CB$. Let $M$ be the intersection of lines $AB$ and $DE$ (which exists exactly when $CA\ne CB$). The line through $M$ perpendicular to $IM$ meets lines $DF$ and $EF$ at $P$ and $Q$ respectively. Prove that $MP = MQ$.`,
      "why": String.raw`This is the butterfly theorem in projective dress. $M$ lies on the tangent at $F$, so its polar with respect to the incircle is a line through $F$ perpendicular to $IM$, i.e. parallel to the line $PQ$. On the secant $MDE$, the polar meets $DE$ at the harmonic conjugate of $M$. Project the line $DE$ from $F$ onto $PQ$. This preserves cross-ratio and sends $D,E,M$ to $P,Q,M$, while the harmonic conjugate goes to the point at infinity, because the polar through $F$ is parallel to $PQ$. A harmonic range whose fourth point is at infinity has its third point as the midpoint, so $MP=MQ$. The perpendicularity to $IM$ is no accident: it is precisely what pushes the harmonic partner to infinity. The hypothesis $CA\ne CB$ only ensures that $M$ exists.`,
      "hints": [
        String.raw`$AB$ is the tangent at $F$, so the polar of $M$ w.r.t. the incircle passes through $F$ and is perpendicular to $IM$.`,
        String.raw`A polar cuts every secant through its pole harmonically: show $(D,E;M,M^{*})=-1$ via a power computation on the circle with diameter $IM^{*}$.`,
        String.raw`Project that division from $F$ onto line $PQ$; the parallel sends the fourth point to infinity, so $M$ is the midpoint of $PQ$.`
      ],
      "steps": [
        String.raw`Line $AB$ is tangent to the incircle $\omega$ (centre $I$, radius $r$) at $F$, and $CA\ne CB$ is exactly the condition that $DE$ meets $AB$ in a finite point $M$. As $M$ lies on the tangent at $F$, its power in $\omega$ is $MF^2\gt 0$, and its polar $m$ is the chord of contact from $M$, hence $m\perp IM$ and passes through $F$.`,
        String.raw`A polar cuts every secant through its pole harmonically, so on the secant $MDE$ the point $M^*=m\cap DE$ satisfies $(D,E;M,M^*)=-1$.`,
        String.raw`Projecting line $DE$ from centre $F$ onto the line $PQ$ through $M$ perpendicular to $IM$ sends $D,E,M,M^*$ to $P,Q,M,R$, where $P=FD\cap PQ$, $Q=FE\cap PQ$ and $R=FM^*\cap PQ$; cross-ratio is preserved, giving $(P,Q;M,R)=-1$. But $FM^*=m$ is parallel to $PQ$ (both $\perp IM$), so $R$ is the point at infinity of $PQ$, and a range whose harmonic mate of $M$ is the ideal point has $M$ as midpoint: $MP=MQ$.`
      ]
    },
    {
      "id": "g10",
      "category": "geo",
      "difficulty": "easy",
      "stars": 2,
      "rating": 4.5,
      "confidence": "high",
      "text": String.raw`Let $ABC$ be an acute, scalene triangle with circumcenter $O$. Let $K$ be the intersection of line $AO$ with side $BC$. Let $L$ be the unique point on line $AO$, distinct from $A$, such that $\angle ALB=\angle CLA$. The line through $L$ perpendicular to $AO$ intersects line $BC$ at $M$. Let $N$ be the intersection of the tangents to the circumcircle of $\triangle ABC$ at $B$ and $C$. Prove that $OM\perp KN$.`,
      "why": String.raw`The angle condition is a disguised bisector. $\angle ALB=\angle CLA$ makes line $LA$, through $K$, the internal bisector of $\angle BLC$. The perpendicular $LM$ is then the external bisector, so $(B,C;K,M)$ is harmonic and, with $U$ the midpoint of $BC$, $UK\cdot UM=UB^2$. On the other side, in the right triangle $OBN$, $BU$ is the altitude to the hypotenuse, so $UO\cdot UN=UB^2$. These two products are equal, and $UK\perp UO$. So the rotation by $90^\circ$ about $U$ combined with scaling by $UK/UO$ sends $O\mapsto K$ and $M\mapsto N$. A spiral similarity through a right angle turns line $OM$ into line $KN$, hence $OM\perp KN$. What solvers miss is that $L$ only matters through the harmonic division it produces on $BC$.`,
      "hints": [
        String.raw`$\angle ALB=\angle CLA$ makes $A$ equidistant from the lines $LB$ and $LC$: $AL$ is the internal bisector at $L$, so $LB/LC=KB/KC$.`,
        String.raw`Thus $L$ sits on an Apollonius circle of $BC$; the perpendicular $LM$ is the external bisector, so $(B,C;K,M)$ is harmonic.`,
        String.raw`Newton's relation gives $UK\cdot UM=UB^{2}$; the altitude to the hypotenuse of right triangle $OBN$ gives $UO\cdot UN=UB^{2}$.`,
        String.raw`Match the two products with a quarter-turn spiral similarity about the midpoint $U$.`
      ],
      "steps": [
        String.raw`As $ABC$ is acute the circumcentre $O$ is interior, so $K=AO\cap BC$ lies strictly inside $BC$; scalene gives $K\ne U$ (the midpoint of $BC$) and $AO$ meets $BC$ obliquely.`,
        String.raw`The condition $\angle ALB=\angle CLA$ makes $A$ equidistant from the lines $LB,LC$, so $AL$ is the internal bisector of $\angle BLC$; the bisector theorem gives $LB/LC=KB/KC=:\rho$. Thus $L$ lies on the Apollonius circle $\Gamma$ of $BC$ for the ratio $\rho$, whose internal division point is $K$. The point $A\notin\Gamma$, for $AB/AC=\rho$ would make $AK$ the bisector at $A$, forcing $AB=AC$; and $AO$ is not the tangent to $\Gamma$ at $K$ (which is $\perp BC$), so $L$ is the well-defined second intersection of $AO$ with $\Gamma$.`,
        String.raw`The line $LM$ is perpendicular to $AO=LK$, hence is the external bisector of $\angle BLC$, and its foot $M$ on $BC$ satisfies $MB/MC=\rho=KB/KC$: the range $(B,C;K,M)$ is harmonic, so Newton's relation gives $UK\cdot UM=UB^2$ with $K,M$ on the same side of $U$.`,
        String.raw`The point $N$ lies on the perpendicular bisector $OU$ of $BC$ (equal tangent lengths $NB=NC$), and $OB\perp BN$, so in the right triangle $OBN$ the segment $BU$ is the altitude to the hypotenuse $ON$; the geometric-mean relation gives $UB^2=UO\cdot UN$, with $O,N$ on opposite sides of $U$.`,
        String.raw`The spiral similarity $\sigma$ about $U$ that rotates $UO$ onto $UK$ (a right angle) with ratio $\lambda=UK/UO$ sends $O\mapsto K$. From $UK\cdot UM=UO\cdot UN$ we get $UN/UM=\lambda$; as $UM$ lies along $UK$ its image is the ray opposite $UO$, i.e. $UN$, at distance $\lambda\,UM=UN$, so $M\mapsto N$. Hence $\sigma$ carries line $OM$ onto line $KN$, turning it by $90^\circ$: $OM\perp KN$.`
      ]
    },
    {
      "id": "g11",
      "category": "geo",
      "difficulty": "medium",
      "stars": 3,
      "rating": 5,
      "confidence": "high",
      "text": String.raw`Let $\triangle ABC$ be a scalene triangle with $A$-excircle touching $BC$ at $D$. Let $M$ be the midpoint of the altitude from $A$. Line $MD$ meets the $A$-excircle again at $T$. Let $S\ne T$ be the second intersection of line $MD$ with the circumcircle of $\triangle BCT$. Prove that $$\boxed{SB=SC}.$$`,
      "why": String.raw`Turn $SB=SC$ into an angle bisector. $S$ is the second point of line $TD$ on $(BCT)$, so $SB=SC$ means $S$ is an arc midpoint of $BC$, i.e. $TD$ bisects $\angle BTC$. By the bisector theorem that is the ratio statement $TB/TC=DB/DC$. Thus the real content is that the excircle point $T$ sees $B$ and $C$ in the ratio of the tangent lengths $s-c$ and $s-b$. Two power computations along the line $MDT$ supply it. Pythagoras on the trapezoid from $M$ to the excentre gives $MD\cdot DT=h\,r_a$, with $h$ the altitude, which fixes where $T$ sits. Dropping the foot of $T$ onto $BC$ and using similar right triangles at $D$ then yields the ratio. The proof is metric rather than slick, but every step is elementary, and the midpoint of the altitude is exactly what makes the product come out clean.`,
      "hints": [
        String.raw`Chain two power identities along the common secant $MDT$: $MD\cdot DT=h\,r_a$ in the $A$-excircle and $DB\cdot DC=DS\cdot DT$ in $(BCT)$.`,
        String.raw`Reformulate $SB=SC$ as $TS$ bisecting $\angle BTC$, i.e. — by the angle-bisector theorem in $\triangle BTC$ — as $TB/TC=DB/DC$.`,
        String.raw`Get the chord ratio from the foot of the perpendicular from $T$: the slope given by the similar right triangles at $D$, plus Pythagoras.`
      ],
      "steps": [
        String.raw`Let $H$ be the foot of the altitude from $A$ to line $BC$, let $h=AH$, and let $M$ be the midpoint of $AH$; let the $A$-excircle $\mathcal E_a$ have centre $I_a$ and radius $r_a$, touching $BC$ at $D$. The $A$-excircle lies on the side of $BC$ opposite $A$, while $M$ lies on the same side as $A$, so $M$ is exterior to $\mathcal E_a$; on the secant $MDT$ the nearer intersection is therefore $D$, giving the order $M\text{--}D\text{--}T$. All segment ratios below are directed lengths on the line in question.`,
        String.raw`Drop the perpendicular from $M$ to line $DI_a$, meeting it at $P$. Since $DI_a\perp BC$ and $MH\perp BC$, line $MP\parallel BC$, so $MPDH$ is a rectangle with $MP=DH$ and $DP=MH=\tfrac{h}{2}$; hence $PI_a=PD+DI_a=\tfrac{h}{2}+r_a$. Two Pythagoras steps give $MD^2=MP^2+\tfrac{h^2}{4}$ and $MI_a^2=MP^2+\left(\tfrac{h}{2}+r_a\right)^2$, so $MI_a^2-r_a^2=MD^2+hr_a$. But $MI_a^2-r_a^2=\operatorname{Pow}_{\mathcal E_a}(M)=MD\cdot MT=MD(MD+DT)=MD^2+MD\cdot DT$. Therefore $\boxed{MD\cdot DT=hr_a}$.`,
        String.raw`Point $D$ lies on chords $BC$ and $TS$ of circle $(BCT)$, so equal powers give $DB\cdot DC=DS\cdot DT$ (undirected lengths). Since $DB\cdot DC\gt 0$, points $S$ and $T$ lie on opposite sides of $D$; with the order $M\text{--}D\text{--}T$ this places $S$ on ray $DM$. Divide this by the identity of Step 2's boxed result, using the $A$-excircle tangent lengths $DB=s-c$, $DC=s-b$, the relations $h=\tfrac{2\Delta}{a}$, $r_a=\tfrac{\Delta}{s-a}$, and Heron's $\Delta^2=s(s-a)(s-b)(s-c)$: $$\frac{DS}{MD}=\frac{DB\cdot DC}{hr_a}=\frac{(s-b)(s-c)}{\;2s(s-b)(s-c)/a\;}=\frac{a}{2s}.$$ Because $a\lt 2s$, one has $DS\lt MD$, so $S$ lies strictly between $M$ and $D$ (in particular $S\ne T$, so $S$ is the genuine second intersection on $(BCT)$).`,
        String.raw`We prove the chord ratio $TB/TC=DB/DC$ by directed lengths on $BC$. Let $N$ be the foot of the perpendicular from $T$ to $BC$; set $p=DB=s-c$, $q=DC=s-b$, $x=DN$, $y=TN$ (directed along $BC$ from $D$ toward $C$; $y$ is the depth of $T$ below $BC$). Because $M$ and $T$ lie on opposite rays from $D$ along line $MDT$ and $MH\parallel TN$, the right triangles $\triangle DHM$ and $\triangle DNT$ are similar, so $\frac{x}{y}=-\frac{DH}{MH}=-\frac{2\,DH}{h}$. With $DH=x_A-DB=\frac{(c-b)s}{a}$ and $h=\tfrac{2\Delta}{a}$ this is $\frac{x}{y}=\frac{(b-c)s}{\Delta}$. As $TI_a=r_a$ and $DI_a\perp BC$, the right triangle with legs $x$ and $r_a-y$ gives $x^2+y^2=2r_a y$. Pythagoras in $\triangle TNB$ and $\triangle TNC$ gives $TB^2=(x+p)^2+y^2$ and $TC^2=(x-q)^2+y^2$. Then $\frac{TB^2}{TC^2}=\frac{p^2}{q^2}$ is, after cross-multiplying, the equation $(q^2-p^2)(x^2+y^2)+2xypq=0$, i.e. $(q+p)\big[(q-p)(x^2+y^2)+2xpq\big]=0$, and since $q+p=a\ne0$ it reduces to $(q-p)(x^2+y^2)+2xpq=0$. Substituting $x^2+y^2=2r_a y$ and dividing by $2y$ gives $(q-p)r_a+\frac{x}{y}\,pq=0$, i.e. $\frac{x}{y}=-\frac{(q-p)r_a}{pq}=\frac{(b-c)\,\Delta}{(s-a)(s-b)(s-c)}$; Heron's identity $(s-a)(s-b)(s-c)=\Delta^2/s$ turns this into $\frac{x}{y}=\frac{(b-c)s}{\Delta}$, exactly the value found above. Hence $\boxed{\dfrac{TB}{TC}=\dfrac{DB}{DC}}$.`,
        String.raw`In $\triangle BTC$ the point $D$ lies on side $BC$ and, by Step 4, $\dfrac{DB}{DC}=\dfrac{TB}{TC}$. By the converse of the internal angle-bisector theorem, $TD$ bisects $\angle BTC$. Line $TS$ is line $TD$; its second intersection with $(BCT)$, the point $S$ from the statement, is therefore the midpoint of the arc $BC$ not containing $T$, and equal arcs subtend equal chords. Thus $\boxed{SB=SC}$.`,
        String.raw`Closing the equivalences: $SB=SC$ ($S$ the midpoint of the arc $BC$ of $(BCT)$ not containing $T$) $\Longleftrightarrow$ $TS$ bisects $\angle BTC$ (inscribed angles on equal arcs, both directions) $\Longleftrightarrow$ $\dfrac{TB}{TC}=\dfrac{DB}{DC}$ (internal angle-bisector theorem in $\triangle BTC$ at $D$, both directions). Steps 2--4 establish the right-hand ratio without assuming any converse, so the chain closes and $SB=SC$ is proved. The altitude-midpoint hypothesis is used precisely in the value $MH=h/2$ (Steps 2 and 4) and in the secant ratio $DS/MD=a/2s$ (Step 3), which also guarantees $S$ lies between $M$ and $D$.`
      ]
    },
    {
      "id": "g12",
      "category": "geo",
      "difficulty": "medium",
      "stars": 3,
      "rating": 5,
      "confidence": "high",
      "text": String.raw`Let a $\mathit{lune}$ be the region between two internally tangent circles. Given $N$ distinct points in the plane, prove that for any non-negative integers $P,Q,R$ with $P+Q+R=N$, there exist two internally tangent circles bounding a lune such that exactly $P$ of the points lie strictly inside the smaller circle, exactly $Q$ lie strictly inside the lune, and exactly $R$ lie strictly outside the larger circle.`,
      "why": String.raw`Invert at a point $T$ on a line $\ell$ that leaves all the points on one side. The circles tangent to $\ell$ at $T$, a family of nested, mutually internally tangent circles, become the lines parallel to $\ell$, and the inside of each circle becomes a half-plane. A lune between two such circles becomes a strip between two parallel lines. So the problem reduces to choosing two parallel lines that split the inverted points into groups of sizes $P$, $Q$, $R$. That is trivial once the distances of the inverted points from $\ell$ are pairwise distinct. Genericity takes care of this: choose $\ell$ not parallel to any line through two of the points, and then only finitely many positions of $T$ on $\ell$ create a tie. The whole difficulty is spotting that internally tangent circles are parallel lines viewed through an inversion.`,
      "hints": [
        String.raw`Invert about a point $T$ on a line $\ell$ with all points strictly on one side: circles through $T$ tangent to $\ell$ become parallel lines, and lunes become strips.`,
        String.raw`Choose $\ell$ and $T$ so the $N$ inverted heights are distinct — the bad positions of $T$ lie on finitely many Apollonius circles.`,
        String.raw`Cut the ordered heights at two gaps.`
      ],
      "steps": [
        String.raw`Pick a line $\ell$ with all $N$ points strictly on one side and not parallel to $XY$ for any pair. Fix a point $T\in\ell$ and invert in the unit circle $\kappa$ centred at $T$: $X\mapsto X'$ on ray $TX$ with $TX\cdot TX'=1$. The distance of $X'$ from $\ell$ is $h(X):=d_X/TX^2$, where $d_X$ is the distance from $X$ to $\ell$; all heights are positive.`,
        String.raw`If $h(X)=h(Y)$ then $TX^2/TY^2=d_X/d_Y\ne1$ (as $\ell$ is not parallel to $XY$), so $T$ lies on the Apollonius circle of $\{X,Y\}$ for the ratio $\sqrt{d_X/d_Y}$. Each such circle meets $\ell$ in at most two points, so avoiding the finitely many forbidden positions of $T$ makes the $N$ heights pairwise distinct, say $0\lt a_1\lt\cdots\lt a_N$.`,
        String.raw`A line $g(u)$ parallel to $\ell$ at distance $u$ on the side of the points inverts to the circle $\Gamma(u)$ through $T$ with diameter on the normal to $\ell$, namely $\Gamma(u)$ is tangent to $\ell$ at $T$ with radius $1/(2u)$. A point $X$ is strictly inside $\Gamma(u)$ iff $h(X)\gt u$.`,
        String.raw`For $0\lt u_1\lt u_2$ the circle $\Gamma(u_2)$ lies inside $\Gamma(u_1)$, internally tangent at $T$, bounding a lune; the points strictly in the smaller circle are those with $h\gt u_2$, strictly in the lune those with $u_1\lt h\lt u_2$, strictly outside the larger those with $h\lt u_1$.`,
        String.raw`Given non-negative $P,Q,R$ with $P+Q+R=N$, set $a_0=0$, $a_{N+1}=\infty$ and choose $u_2$ strictly between $a_{N-P}$ and $a_{N-P+1}$ and $u_1$ strictly between $a_R$ and $a_{R+1}$. The inequalities $R+1\le N-P$ when $Q\gt0$ (and a shared gap when $Q=0$) give $u_1\lt u_2$. The circles $\Gamma(u_1),\Gamma(u_2)$ then bound a lune containing exactly $P$ points in the smaller circle, $Q$ in the lune, and $R$ outside, the cuts avoiding all heights and covering the boundary cases $P,Q,R=0$.`
      ]
    },
    {
      "id": "g13",
      "category": "geo",
      "difficulty": "medium",
      "stars": 3,
      "rating": 5.5,
      "confidence": "high",
      "text": String.raw`Let $ABC$ be a scalene triangle with incenter $I$, and assume $\angle A\ne90^\circ$. The incircle touches side $BC$ at $D$; let $AD$ meet the incircle again at $E$. Let $P$ and $Q$ be the intersections of the internal and external bisectors of $\angle A$ with the line $BC$, respectively. Let the circumcircle of $\triangle APQ$ meet the median $AM$ again at $N$, where $M$ is the midpoint of $BC$. Let $F$ be the point on the segment $AD$ such that $AE=DF$. Prove that $A,F,I,N$ are concyclic.`,
      "why": String.raw`The harmonic range $(B,C;P,Q)=-1$ cut out by the two bisectors gives $MP\cdot MQ=MB^2$, so the power of $M$ with respect to $(APQ)$ is $MB^2$ and $MA\cdot MN=MB^2$. Note that $N$ is not the second point $W$ of the median on the circumcircle. Since $MA\cdot MW=-MB^2$, $N$ is the reflection of $W$ in $M$. The problem therefore reduces to one metric fact: $M$ also has power $MB^2$ with respect to $(AFI)$. The point $F$ is designed for this. Since $DF=AE$, the power of $D$ along the secant $DFA$ equals $DF\cdot DA=AE\cdot AD=(s-a)^2$, the squared tangent length. The rest is honest computation in tangent lengths $s-a$, $s-b$, $s-c$: locate the centre of $(AFI)$ from the powers of $D$, $I$ and $A$, then evaluate the power at $M$, which comes out as exactly $a^2/4$.`,
      "hints": [
        String.raw`$(B,C;P,Q)$ is harmonic, so $MP\cdot MQ=MB^{2}$; the secant from $M$ through $(APQ)$ turns this into $MA\cdot MN=MB^{2}$.`,
        String.raw`Reduce to showing $M$ has power $MB^{2}$ with respect to $(AFI)$.`,
        String.raw`Work in tangent lengths: $AE\cdot AD=(s-a)^{2}$ evaluates the power of $D$, and Stewart on the cevian $AD$ supplies the rest.`
      ],
      "steps": [
        String.raw`Configuration and non-degeneracy. Write $a=BC$, $b=CA$, $c=AB$; scalene means $a$, $b$, $c$ are pairwise distinct, in particular $b\ne c$, so the external bisector of $\angle A$ is not parallel to $BC$ and $Q$ exists, and $M\ne D$. The tangent length from $A$ to the incircle is $u=s-a$, and by tangent-secant $AE\cdot AD=u^{2}$; since $AD\gt u$ (the tangent segment is shorter than the secant to a further point; also $AD^{2}=u^{2}+4uvw/a\gt u^{2}$ by Stewart's theorem applied to cevian $AD$ with $BD=v=s-b$, $DC=w=s-c$), $E$ lies strictly between $A$ and $D$ and $0\lt AE\lt AD$. $F$ on segment $AD$ with $DF=AE$ is then well-defined, $F\ne A$, and $AE\cdot AD=DF\cdot DA=u^{2}$. $A,F,I$ are non-collinear: if $I\in AD$, then line $AD$ carries the incenter and, since $ID\perp BC$, $AD$ is perpendicular to $BC$, forcing $AB=AC$. So $\Omega:=(AFI)$ exists. The internal and external bisectors at $A$ are perpendicular, so $\angle PAQ=90^{\circ}$ and $(APQ)$ is the circle with diameter $PQ$; $A\notin BC$ gives a genuine circle, and $N$ is its second point on line $MA$; $M\notin(APQ)$ since $M\notin PQ$ and $\angle PAQ=90^{\circ}$, so $(APQ)$ meets the line $MA$ in two (possibly coincident) points and $N$ is well defined, with $N\ne A$ shown next. Finally, $\angle A\ne90^{\circ}\ \Leftrightarrow\ MA\ne MB=MC$ (Thales and its converse), which excludes $N=A$ and $N=M$.`,
        String.raw`Harmonic range and the power of $M$ w.r.t. $(APQ)$. The internal bisector theorem gives $BP:PC=c:b$ and the external bisector theorem gives $BQ:QC=c:b$ (external division); hence $(B,C;P,Q)=-1$. On the line $BC$ use directed distances from $M$: with $MB=MC=m_{0}=a/2$, the harmonic relation is equivalent to $MP\cdot MQ=MB^{2} \gt 0$. Concretely $MP=m_{0}(c-b)/(b+c)$ and $MQ=m_{0}(b+c)/(c-b)$, whose product is $+m_{0}^{2}$; in particular $P$ and $Q$ lie on the SAME side of $M$, so $M$ is OUTSIDE the segment $PQ$ and outside the circle with diameter $PQ$, i.e. $(APQ)$. Therefore $Pow_{(APQ)}(M)=MP\cdot MQ=+MB^{2}$, and the secant line $MAN$ yields the directed identity $MA\cdot MN=MB^{2}$, where $N$ lies on the same ray from $M$ as $A$.`,
        String.raw`Reduction. We prove $Pow_{\Omega}(M)=MB^{2}$. Once this is known, $Pow_{\Omega}(M)\gt 0$ places $M$ outside $\Omega$, so the line $MA$ meets $\Omega$ in two points on the same ray from $M$, one of them $A$; call the other $N'$. The directed secant identity gives $MA\cdot MN'=Pow_{\Omega}(M)=MB^{2}=MA\cdot MN$. Since $MA\ne0$ we get $MN'=MN$, and both $N,N'$ lie on the ray $MA$, so $N'=N$; hence $N\in\Omega$, i.e. $A,F,I,N$ are concyclic. All that remains is the metric identity $Pow_{\Omega}(M)=MB^{2}$.`,
        String.raw`Classical metric data. Use the tangent lengths $u=s-a$, $v=s-b$, $w=s-c$ (so $a=v+w$, $b=u+w$, $c=u+v$, with $u,v,w\gt 0$ and $w\ne v$ because $b\ne c$) and the inradius $r$. Directed lengths are taken along the single line $BC$, counted positively from $D$ toward $C$. Then: $DM=(w-v)/2$, since $BD=v$, $DC=w$ and $M$ is the midpoint of $BC$; $ID=r$ with $ID\perp BC$; $AD^{2}=u^{2}+4uvw/a$ by Stewart's theorem on cevian $AD$ ($b^{2}v+c^{2}w=a(AD^{2}+vw)$); letting $K$ be the foot of the perpendicular from $A$ to $BC$, the difference $DK=\frac{c^{2}-b^{2}+v^{2}-w^{2}}{2a}=-\frac{u(w-v)}{a}$ follows by subtracting the two Pythagorean identities $AB^{2}-KB^{2}=AC^{2}-KC^{2}=AK^{2}$; writing $g=AK$, one has $g/r=2s/a$ (both ratios equal $2\Delta/a$ divided by $\Delta/s$) and $g^{2}+DK^{2}=AD^{2}$; finally $AI^{2}=u^{2}+r^{2}$, from the right triangle $AT_{c}I$ where $T_{c}$ is the touchpoint on $AB$, $AT_{c}=u$ and $T_{c}I=r$.`,
        String.raw`The circle $(AFI)$ and the power of $M$. Let $O$ be the centre of $\Omega$, $\rho$ its radius, and $H$ the foot of the perpendicular from $O$ to $BC$; $DH$ denotes the directed segment on line $BC$ and $k$ the signed distance $OH$, positive on the side of $A$. The right trapezoid $O\,H\,X'\,X$, for any point $X$ with foot $X'$ on $BC$ and signed height $XX'$, yields by two applications of Pythagoras the decomposition $XO^{2}=HX'^{2}+(XX'-k)^{2}$. Apply it to the four points whose feet and heights are known from Step 4: $D$ (foot $D$, height 0), $I$ (foot $D$, height $r$), $A$ (foot $K$, height $g$), $M$ (foot $M$, height 0). The secant $DAF$ of $\Omega$ gives $\operatorname{Pow}_{\Omega}(D)=DA\cdot DF=u^{2}$ (Step 1). Writing $\operatorname{Pow}_{\Omega}(X)=XO^{2}-\rho^{2}$: for $D$, $u^{2}=DO^{2}-\rho^{2}=DH^{2}+k^{2}-\rho^{2}$; for $I$, $A$, $M$, which give $\rho^{2}=IO^{2}=AO^{2}$: subtracting the relation for $D$ from those for $I$ and $A$ turns both into difference-of-squares identities along the single line $BC$: I: $(r-k)^{2}-k^{2}=-u^{2}$, hence $r^{2}+u^{2}=2kr$, i.e. $k=\frac{r^{2}+u^{2}}{2r}$; A: $HK^{2}-HD^{2}+g^{2}-2gk=-u^{2}$, and since $HK=DK-DH$ as directed segments, $HK^{2}-HD^{2}=DK^{2}-2\,DK\cdot DH$, so that $2\,DK\cdot DH=DK^{2}+g^{2}+u^{2}-2gk=AD^{2}+u^{2}-(g/r)(r^{2}+u^{2})$. Substituting $AD^{2}=u^{2}+4uvw/a$, $DK=-\frac{u(w-v)}{a}$, $g/r=\frac{2s}{a}$, $r^{2}=\frac{uvw}{s}$ (Heron: $\Delta^{2}=suvw$, $r=\Delta/s$, $\Delta=\frac12 ag$) gives $2DK\cdot DH=2u^{2}+\frac{4uvw}{a}-\frac{2s}{a}\left(\frac{uvw}{s}+u^{2}\right)=\frac{2u}{a}(au+2vw-su)=\frac{2u}{a}(vw-u^{2})$, using $a-s=-u$; hence $DH=\frac{u^{2}-vw}{w-v}$ ($DK\ne0$ since $w\ne v$). Finally for $M$: $\operatorname{Pow}_{\Omega}(M)=MO^{2}-\rho^{2}=HM^{2}+k^{2}-\rho^{2}=(DM-DH)^{2}-DH^{2}+u^{2}=DM^{2}-2\,DM\cdot DH+u^{2}=\frac{(w-v)^{2}}{4}-(u^{2}-vw)+u^{2}=\frac{(v+w)^{2}}{4}=\frac{a^{2}}{4}=MB^{2}$, where $HM=DM-DH$ is read as a difference of directed segments on $BC$. The point $F$ lies on $\Omega$ by definition, and its own decomposition adds no further equation: line $DAF$ is a secant and $DA\cdot DF=u^{2}$ is exactly the power of $D$ already used.`,
        String.raw`Closing. By the Reduction step, $N\in\Omega=(AFI)$. Hence $A$, $F$, $I$, $N$ are concyclic. $\boxed{\blacksquare}$`
      ]
    },
    {
      "id": "g14",
      "category": "geo",
      "difficulty": "medium",
      "stars": 3,
      "rating": 5.5,
      "confidence": "high",
      "text": String.raw`Let $\triangle ABC$ be scalene with incenter $I$ and $AC\gt AB$. The incircle touches $CA$ and $AB$ at $E$ and $F$. Let $L=EF\cap BC$. Let the incircle of $\triangle LEC$ and the $L$-excircle of $\triangle LFB$ touch line $EF$ at $M$ and $N$, respectively. Let $K$ be the intersection of the incircle with segment $AI$. Prove that $BN$, $CM$, and the bisector $AI$ are concurrent at $K$.`,
      "why": String.raw`Everything takes place on three lines: the bisector $AI$, the contact chord $EF$, which is perpendicular to $AI$ at the midpoint of $EF$, and $BC$. Together they bound a triangle with vertices $L$, $W=AI\cap BC$ and $P=AI\cap EF$. Both collinearities, $C,M,K$ and $B,N,K$, are Menelaus statements in this triangle. The ingredients are classical lengths in the tangent lengths $s-a$, $s-b$, $s-c$: the contact distance from $E$ to the incircle touch point of $\triangle LEC$, and the analogous excircle distance in $\triangle LFB$. One also needs $LE/LF$ from the sine rule, and the position of $K$, the touch point nearest to $A$, at distance $AI-r$ from $A$. The route is computational, honestly so. The surprise is that the incircle of one triangle and the excircle of another both aim at the same point of $AI$.`,
      "hints": [
        String.raw`Write the tangent lengths $m=s-a$, $n=s-b$, $p=s-c$; then $AI$ is the perpendicular bisector of $EF$.`,
        String.raw`Menelaus puts $L$ beyond $B$ with $BL:LC=n:p$, so $(B,C;D,L)$ is harmonic; perpendiculars to $BC$ give $EL:FL=pc:nb$.`,
        String.raw`The contact distances (semiperimeter minus opposite side) satisfy $EM+FN=\frac{EF}{2}$ — this fixes the order of $M,N$ on $EF$.`,
        String.raw`Prove both collinearities by Menelaus in the triangle bounded by $BC$, $EF$, $AI$.`
      ],
      "steps": [
        String.raw`Let $D$ be the point where the incircle $\omega$ (centre $I$, radius $r$) touches $BC$, and set $m=AE=AF=s-a$, $n=BF=BD=s-b$, $p=CE=CD=s-c$ (equal tangent segments from a point to a circle). Then $a=n+p$, $b=m+p$, $c=m+n$, and the hypothesis $AC\gt AB$ reads $p\gt n$. Since $AE=AF$ and $IE=IF$, the bisector $AI$ is the perpendicular bisector of $EF$; call their intersection $P$, so $P$ is the midpoint of $EF$. If $EF\parallel BC$, then $\angle AEF=\angle ACB$ and $\angle AFE=\angle ABC$, and $\angle AEF=\angle AFE$ would force $AB=AC$; hence $L=EF\cap BC$ exists. Menelaus in $\triangle ABC$ with the line through $E$, $F$, $L$ gives $\frac{AF}{FB}\cdot\frac{BL}{LC}\cdot\frac{CE}{EA}=1$, so $\frac{BL}{LC}=\frac{n}{p}$; the transversal cuts two sides internally, hence $L$ divides $BC$ externally, and $BL\lt LC$ puts $L$ beyond $B$: $BL=\frac{n(n+p)}{p-n}$, $CL=\frac{p(n+p)}{p-n}$. Since $D$ divides $BC$ internally in the same ratio $n:p$, the range $(B,C;D,L)$ is harmonic.`,
        String.raw`Drop perpendiculars $EE'$ and $FF'$ from $E$ and $F$ to line $BC$. Right triangles sharing the angle at $L$ give $\frac{LE}{LF}=\frac{EE'}{FF'}$; the right triangles with hypotenuses $CE=p$ and $BF=n$ give $EE'=p\sin C$, $FF'=n\sin B$; and the sine rule gives $\sin C:\sin B=c:b$. Hence $\frac{LE}{LF}=\frac{pc}{nb}$, and since $pc-nb=m(p-n)\gt 0$ we have $LE\gt LF$, i.e. $F$ lies between $E$ and $L$. Set $\sigma=\sin\frac A2$, $\kappa=\cos\frac A2$: the isosceles triangle $AEF$ with equal sides $m$ and apex angle $A$ has $EF=2m\sigma$, so $EP=m\sigma$, and $LE-LF=EF$ with $\frac{LE}{LF}=\frac{pc}{nb}$ yields $LE=\frac{2\sigma pc}{p-n}$ and $LF=\frac{2\sigma nb}{p-n}$. In right triangle $AEI$ (the radius $IE$ is perpendicular to the tangent $AE$, and $\angle EAI=\frac A2$): $AI=\frac{m}{\kappa}$, $r=m\tan\frac A2$, and the altitude relation $AE^{2}=AP\cdot AI$ gives $AP=m\kappa$. Finally $\sigma^{2}=\frac{(s-b)(s-c)}{bc}=\frac{np}{bc}$ is the classical half-angle identity obtained from the cosine rule.`,
        String.raw`In $\triangle LEC$ the incircle touches $LE$, $EC$, $CL$ at $M$, $Q$, $R$; equal tangent pairs give $EM=MQ$, $LM=LR$, $CQ=CR$, hence $EL+EC-LC=(EM+ML)+(MQ+QC)-(LR+RC)=2EM$: the contact distance from a vertex to the incircle touch point is the semiperimeter minus the opposite side, $EM=\frac{EL+EC-LC}{2}$. The $L$-excircle of $\triangle LFB$ is tangent to side $FB$ and to $LF$, $LB$ produced beyond $F$, $B$; counting the same pairs, its contact $N$ with line $EF$ lies on the extension past $F$ at distance $FN=\frac{LB+BF-LF}{2}$. Substituting Steps 1-2: $EM=\frac{p(\sigma c-n)}{p-n}$ and $FN=\frac{n(p-\sigma b)}{p-n}$, and $EM+FN=\frac{\sigma(pc-nb)}{p-n}=m\sigma=\frac{EF}{2}$. From $p\gt n\iff pc\gt nb$: squaring positive numbers, $\sigma c\gt n\iff\frac{np}{bc}\gt \frac{n^{2}}{c^{2}}\iff pc\gt nb$ and $\sigma b\lt p\iff\frac{np}{bc}\lt \frac{p^{2}}{b^{2}}\iff nb\lt pc$; hence $EM\gt 0$, $FN\gt 0$, $EM\lt EP$, $FN\lt FP$: both contact points lie strictly on segment $EF$, in the order $E$, $M$, $P$, $N$, $F$, $L$, with $PM=\frac{EF}{2}-EM=FN$ and $PN=EM$. The triangles $LEC$ and $LFB$ are nondegenerate: $LE$, $LF$, $LB$, $LC$ are positive, and lines $EF$ and $BC$ meet only at $L$.`,
        String.raw`The line $AI$ passes through the centre of $\omega$, so $\omega$ meets it in two endpoints of a diameter; $A$ is exterior ($AI=\frac{m}{\kappa}$, which exceeds $r=m\tan\frac A2$, since $1\gt \sigma$), so exactly one point of $\omega$ lies on segment $AI$, the point $K$ with $AK=AI-r=\frac{m(1-\sigma)}{\kappa}$, and this $K$ is unique. Let $W=AI\cap BC$, the foot of the internal bisector; by $[ABC]=[ABW]+[WAC]$ and the sine rule, $AW=\frac{2bc\kappa}{b+c}$. Comparisons on line $AI$: $AK\lt AP\iff 1-\sigma\lt \kappa^{2}=1-\sigma^{2}$ (true since $0\lt \sigma\lt 1$), $AP\lt AI$ is $\kappa\lt \frac1\kappa$, and $AI\lt AW\iff m(b+c)\lt 2bc\kappa^{2}=2sm\iff b+c\lt 2s$. So the order is $A$, $K$, $P$, $I$, $W$, and $KP=AP-AK=\frac{m\sigma(1-\sigma)}{\kappa}$, $KW=AW-AK=\frac{m[2sm-(1-\sigma)(b+c)]}{\kappa(b+c)}=\frac{m[a+(b+c)\sigma]}{\kappa(b+c)}$ (using $2s-(b+c)=a$), whence $\frac{KP}{KW}=\frac{\sigma(1-\sigma)(b+c)}{a+(b+c)\sigma}$.`,
        String.raw`Apply Menelaus in $\triangle LWP$, whose sidelines are exactly the lines $EF$, $BC$, $AI$: the three lines are pairwise distinct and not concurrent ($L\notin AI$ since $L\ne W$, $P\notin BC$ since $P$ is interior to $\triangle ABC$ while $W\in BC$, $W\notin EF$ since $W$ divides $BC$ internally and $L$ externally). The points $M\in LP$, $C\in WL$, $K\in PW$ divide all three sidelines externally (the orders of Steps 2-4), so by the converse of Menelaus they are collinear if and only if $\frac{LM}{MP}\cdot\frac{WC}{CL}\cdot\frac{KP}{KW}=1$. The three factors: $\frac{LM}{MP}=\frac{LE-EM}{EP-EM}=\frac{p(\sigma c+n)}{n(p-\sigma b)}$; $\frac{WC}{CL}=\frac{ab/(b+c)}{pa/(p-n)}=\frac{b(p-n)}{p(b+c)}$, since $BW:WC=c:b$; and $\frac{KP}{KW}=\frac{\sigma(1-\sigma)(b+c)}{a+(b+c)\sigma}$. The product equals $1$ exactly when $b(p-n)(\sigma c+n)\,\sigma(1-\sigma)=n(p-\sigma b)\,(a+(b+c)\sigma)$. Expanding with $\sigma^{2}=\frac{np}{bc}$ and $\sigma^{3}=\frac{\sigma np}{bc}$: the left side is $b(p-n)[\sigma^{2}c+\sigma n-\sigma^{3}c-\sigma^{2}n]=b(p-n)[\sigma n+\sigma^{2}(c-n)-\sigma^{3}c]=b(p-n)\cdot\frac{m}{b}\big(n\sigma+\frac{np}{c}\big)=mn(p-n)\big(\sigma+\frac{p}{c}\big)$, using $c-n=m$; the right side is $n[\sigma(pb+pc-ab)+pa-\sigma^{2}b(b+c)]$, where $pb+pc-ab=pc-nb=m(p-n)$ and $pa-\frac{np(b+c)}{c}=\frac{p(pc-nb)}{c}=\frac{mp(p-n)}{c}$, so it too equals $mn(p-n)\big(\sigma+\frac{p}{c}\big)$. Hence $C$, $M$, $K$ are collinear.`,
        String.raw`Apply Menelaus in $\triangle LWP$ once more, for $N\in LP$, $B\in WL$, $K\in PW$: here $N$ and $B$ divide their sidelines internally and $K$ externally, so the converse of Menelaus gives collinearity if and only if $\frac{LN}{NP}\cdot\frac{WB}{BL}\cdot\frac{KP}{KW}=1$. The three factors: $\frac{LN}{NP}=\frac{LF+FN}{EN-EP}=\frac{LF+FN}{m\sigma-FN}=\frac{n(p+\sigma b)}{p(\sigma c-n)}$, since $LF+FN=\frac{n(p+\sigma b)}{p-n}$ and $m\sigma-FN=\frac{p(\sigma c-n)}{p-n}$; $\frac{WB}{BL}=\frac{ac/(b+c)}{na/(p-n)}=\frac{c(p-n)}{n(b+c)}$; and $\frac{KP}{KW}$ as in Step 5. The product equals $1$ exactly when $c(p-n)(p+\sigma b)\,\sigma(1-\sigma)=p(\sigma c-n)\,(a+(b+c)\sigma)$. With the same substitutions: the left side is $c(p-n)[p\sigma-\sigma^{3}b+\sigma^{2}b-\sigma^{2}p]=c(p-n)\big[\sigma p\cdot\frac{c-n}{c}+\sigma^{2}(b-p)\big]=c(p-n)\cdot\frac{m}{c}\big(p\sigma+\frac{np}{b}\big)=mp(p-n)\big(\sigma+\frac{n}{b}\big)$; the right side is $p[\sigma(ca-nb-nc)+\sigma^{2}c(b+c)-na]=p[\sigma(cp-nb)+\frac{np(b+c)}{b}-na]=p\big[\sigma m(p-n)+\frac{n(pc-nb)}{b}\big]=mp(p-n)\big(\sigma+\frac{n}{b}\big)$. Hence $B$, $N$, $K$ are collinear.`,
        String.raw`Both lines $CM$ and $BN$ pass through the same point $K$ of $AI$, so $BN$, $CM$ and the bisector $AI$ are concurrent at $K$; the three lines are distinct since $B\notin AI$, $C\notin AI$, and $K\ne W$.`
      ]
    },
    {
      "id": "g15",
      "category": "geo",
      "difficulty": "medium",
      "stars": 3,
      "rating": 6,
      "confidence": "high",
      "text": String.raw`Let $ABC$ be a scalene triangle with circumcircle $\omega$ and circumcenter $O$. Let $I$ be the incenter of triangle $ABC$, and let the internal angle bisector of $\angle BAC$ meet $\omega$ again at $M$. Let $N$ be the point on $\omega$ such that $MN$ is a diameter of $\omega$. The line $NI$ meets $\omega$ again at $P$. Let $J$ be the reflection of $I$ across the line $BC$. Let $Q$ be the second intersection of the circle through $I,J,P$ with $\omega$, counted with multiplicity; thus $Q=P$ in the tangency case. Prove that the line $OI$ is the perpendicular bisector of the segment $AQ$.`,
      "why": String.raw`Guess the answer first: $Q$ should be the reflection $A'$ of $A$ in $OI$, which lies on $\omega$ because $OI$ passes through the centre. The engine is a similarity. With $J$ the reflection of $I$ in $BC$, the incenter lemma $MI=MB=2R\sin\tfrac A2$ and $IJ=2r=2\,AI\sin\tfrac A2$ give $MI/OA=IJ/AI$. Since $IJ\parallel OM$, the included angles match, so $\triangle MIJ\sim\triangle OAI$. A central-angle chase then shows that $M,J,A'$ are collinear. Using $IJ\parallel MN$, inscribed angles give $\angle A'PI=\angle A'MN=\angle A'JI$, so $A'$ lies on $(IJP)$, hence $Q=A'$ and $OI$ is the perpendicular bisector of $AQ$. In the boundary case $A'=P$ the same angles show that the two circles are tangent, which is why the statement counts intersections with multiplicity.`,
      "hints": [
        String.raw`Arc-midpoint lemma: $MI=MB=MC$; this makes $\triangle MIJ\sim\triangle OAI$.`,
        String.raw`Reflect $A$ in the line $OI$ to $A'$; a central-angle chase puts $M$, $J$, $A'$ on one line.`,
        String.raw`Then $A',I,J,P$ are concyclic (chase with $IJ\parallel MN$), so $Q=A'$; the limiting case $A'=P$ is tangent-chord.`
      ],
      "steps": [
        String.raw`Throughout, angles between lines are directed modulo $\pi$, and $\angle A,\angle B,\angle C$ denote the angles of the triangle. Put $D=AM\cap BC$. Since $M$ is the midpoint of the arc $BC$ not containing $A$, $M$ and $A$ lie on strictly opposite sides of line $BC$, while $I$ is interior, so the bisector line carries the points in the order $A$--$I$--$D$--$M$, and ray $MI$ = ray $MA$.`,
        String.raw`$MI=MB$: indeed $\angle MBC=\tfrac A2$ (inscribed angle on the half-arc $MC$), and $M$, $I$ are on opposite sides of line $BC$, so ray $BC$ lies between rays $BM$ and $BI$ and $\angle MBI=\angle MBC+\angle CBI=\tfrac{A+B}2$. Also $M$ and $C$ lie on the same arc cut by chord $AB$, so $\angle BMI=\angle BMA=\angle BCA=C$, hence $\angle BIM=\pi-\tfrac{A+B}2-C=\tfrac{A+B}2=\angle MBI$, and triangle $MBI$ is isosceles with $MI=MB$.`,
        String.raw`The needed ratios: $MB=2R\sin\angle MAB=2R\sin\tfrac A2$, so $\frac{MI}{OA}=\frac MB R=2\sin\tfrac A2$. For the incenter, $d(I,BC)=r$ and reflection in $BC$ doubles the distance, so $IJ=2r$; the foot of the perpendicular from $I$ to $AB$ gives $r=AI\sin\tfrac A2$, so $\frac{IJ}{AI}=2\sin\tfrac A2$. Thus $\frac{MI}{OA}=\frac{IJ}{AI}$. Finally $IJ\perp BC$ (reflection) and $OM\perp BC$ (the radius to the midpoint of arc $BC$ is the perpendicular bisector of chord $BC$), hence $IJ\parallel OM$.`,
        String.raw`Claim: $\angle MIJ=\angle OAI$, and the similarity is direct. First $\angle MIJ$: in right triangle $IFD$ ($F$ the foot from $I$ to $BC$; ray $IJ$ = ray $IF$, ray $IM$ = ray $ID$), $\angle MIJ=\angle DIF=\frac\pi2-\angle IDF$. Position of $F$ and $D$ on $BC$: $BF=s-b$ (equal tangents) while the bisector theorem gives $BD=\frac{ac}{b+c}$, so $BD-BF=\frac{(b-c)(b+c-a)}{2(b+c)}$, of the sign of $b-c$ since $b+c\gt a$; also $BD\lt \frac a2\iff c\lt b$. Hence $F$ lies strictly between $B$ and $D$ exactly when $B\gt C$. If $B\gt C$: $\angle IDF=\angle ADB=\frac A2+C\lt \frac\pi2$, giving $\angle MIJ=\frac{B-C}2$; if $C\gt B$: symmetrically $\angle IDF=\angle ADC=B+\frac A2\lt \frac\pi2$ and $\angle MIJ=\frac{C-B}2$. So always $\angle MIJ=\frac{|B-C|}2$. Second $\angle OAI$: the isosceles triangle $OAB$ gives $\angle OAB=|\frac\pi2-C|$. If $C\lt \frac\pi2$: $O$ is on the same side of $AB$ as $C$, inside $\angle A$, so $\angle OAI=|\angle OAB-\angle IAB|=|\frac\pi2-C-\frac A2|=\frac{|B-C|}2$; if $C\gt \frac\pi2$ (forcing $C\gt B$): $O$ is outside the angle at $A$ past side $AB$, and $\angle OAI=(C-\frac\pi2)+\frac A2=\frac{C-B}2$. Hence $\angle MIJ=\angle OAI$, and with the side ratio of Step 3, SAS gives $\triangle MIJ\sim\triangle OAI$ with correspondence $M\leftrightarrow O$, $I\leftrightarrow A$, $J\leftrightarrow I$; in particular $\angle IMJ=\angle AOI$. Directness (equal signs of the two oriented angles $\angle(MI,MJ)$ and $\angle(OA,OI)$, as cross products): interchanging the labels $B\leftrightarrow C$ reflects the entire construction in the perpendicular bisector of $BC$ — it fixes $A$, $I$, $M$, $N$, $O$, $J$ and the circle, and reverses the sign of both cross products simultaneously — so it suffices to treat the chamber $B\gt C$. In that chamber $C\lt \frac\pi2$ (else $B+C\gt \pi$). (i) $\mathrm{cross}(\overrightarrow{MI},\overrightarrow{MJ})\gt 0$: the ray $MI$ equals ray $MA$; the line $AM$ meets $BC$ at $D$, and from $D$ toward $M$ its signed distance from $B$ along $BC$ increases strictly (it equals $a/2\gt a c/(b+c)=BD$ at $M$), so at the height of $J$ the line stands strictly to the $C$-side of $F$, while $J$ sits on the perpendicular through $F$ below $BC$; thus $J$ is on the $B$-side of directed line $MA$, i.e. counterclockwise from ray $MA$. (ii) $\mathrm{cross}(\overrightarrow{OA},\overrightarrow{OI})\gt 0$: the ray $AI$ lies inside $\angle BAO$ since $\angle BAI=\frac A2\lt \frac\pi2-C=\angle BAO\iff C\lt B$, so $I$ and $B$ are on the same side of line $AO$; and $\overrightarrow{OB}$ is counterclockwise from $\overrightarrow{OA}$ through the central angle $\angle AOB=2C\lt \pi$ on the arc not containing $C$, so the $B$-side of line $AO$ is the counterclockwise side of ray $OA$, where $I$ lies. Both cross products are therefore positive in the chamber $B\gt C$; by the mirror reduction the two signs are always equal. Hence modulo $\pi$: $\angle(MI,MJ)\equiv\angle(OA,OI)$, and the similarity is direct.`,
        String.raw`Collinearity $M$--$J$--$A'$: the reflection in $OI$ sends ray $OA$ to ray $OA'$, so $\angle(OA,OA')\equiv2\angle(OA,OI)\pmod{2\pi}$; the inscribed--central-angle theorem on $\omega$ gives $\angle(MA,MA')\equiv\frac12\angle(OA,OA')\equiv\angle(OA,OI)\pmod\pi$. Replacing line $MA$ by the same line $MI$, and combining with $\angle(MI,MJ)\equiv\angle(OA,OI)$ from Step 4: $\angle(MJ,MA')\equiv0\pmod\pi$, i.e. $M$, $J$, $A'$ are collinear.`,
        String.raw`Concyclicity: $MN\perp BC$ because $M,O,N$ are collinear and $OM\perp BC$, and $IJ\perp BC$, so $IJ\parallel MN$. Also $I$ lies strictly between $N$ and $P$ (inside the disk on the chord $NP$), so line $PI$ = line $PN$. Chases on $\omega$ and along the parallels, all modulo $\pi$: $$\angle A'PI=\angle A'PN=\angle A'MN=\angle(MJ,JI)=\angle A'JI,$$ where the middle equality is the inscribed-angle theorem on chord $A'N$, and the last uses $M$--$J$--$A'$ collinear plus line $JA'=JM$, line $JI$ parallel to line $MN$. Equal angles $\angle(PA',PI)=\angle(JA',JI)\pmod\pi$ are the criterion for $A',I,J,P$ to be concyclic (or collinear; they are not: line $IJ$ is the perpendicular from $I$ to $BC$, it is parallel to the diameter line $MN$, and $P\in$ line $IJ$ would force $I\in MN$, i.e. $IB=IC$, i.e. $AB=AC$, contrary to scalene). Thus $A'\in\omega\cap(IJP)$.`,
        String.raw`If $A'\ne P$, the two distinct circles $\omega$ and $(IJP)$ meet at $P$ and $A'$, so $Q=A'$. If $A'=P$ (the boundary position), then $M$, $J$, $P$ are collinear by Step 5 and $N$, $I$, $P$ are collinear by definition, while $O$ lies on the diameter line $MN$. Let $t$ be the tangent to $\omega$ at $P$. Since $A$, $I$, $M$ are collinear and $J\in MP$, the tangent–chord theorem on $\omega$ (chord $PM$, angles in the alternate segment) gives, modulo $\pi$, $\angle(t,PJ)=\angle(t,PM)=\angle PAM=\angle PNM$; and since $P$, $I$, $N$ are collinear and $IJ\parallel OM$ (Step 3), with $O\in MN$, $\angle PNM=\angle(NP,NM)=\angle(IP,IJ)=\angle PIJ$. Thus $\angle(t,PJ)\equiv\angle PIJ\pmod\pi$, and the converse of the tangent–chord theorem applied to the circle $(IJP)$ with chord $PJ$ and vertex $I$ shows that $t$ is tangent to $(IJP)$ at $P$ as well: the two circles are tangent at $P$, the second intersection is a double point, and the multiplicity convention of the statement gives $Q=P=A'$. In either case $Q=A'$; but $A'$ is by definition the reflection of $A$ in the line $OI$, so $OI$ is the perpendicular bisector of $AQ$. $\boxed{OI\text{ perpendicularly bisects }AQ}$`
      ]
    },
    {
      "id": "g16",
      "category": "geo",
      "difficulty": "medium",
      "stars": 3,
      "rating": 6,
      "confidence": "high",
      "text": String.raw`Let $ABCD$ be a convex quadrilateral with $E=AC\cap BD$, $P=AD\cap BC$, and $Q=AB\cap CD$. Assume $AD\not\parallel BC$ and $AB\not\parallel CD$, so $P,Q$ are finite. Erect equilateral triangles $ECX$ and $EDY$ so that $X$ and $B$ lie on the same side of $AC$, and $Y$ and $A$ lie on the same side of $BD$. Let $U$ and $V$ be the points where $AX$ and $BY$ meet the internal bisectors of $\angle AEX$ and $\angle BEY$, respectively. Prove that $EU=EV$ if and only if $PE\perp QE$.`,
      "why": String.raw`Both sides of the equivalence reduce to the same reciprocal identity. The $60^\circ$ bisector of the $120^\circ$ angle $AEX$ splits the triangle's area, so $EU=\frac{ac}{a+c}$ with $a=EA$ and $c=EC$; likewise $EV=\frac{bd}{b+d}$. Hence $EU=EV$ iff $\frac1a+\frac1c=\frac1b+\frac1d$, i.e. $r=1$, where $r=\frac{bd(a+c)}{ac(b+d)}$. On the other side, Menelaus locates $P$ and $Q$ on lines $AD$ and $AB$, and the sine form of a cevian ratio converts this into the directions of $EP$ and $EQ$: $\sin\delta_1=r\sin(\theta-\delta_1)$ and $\sin\delta_2=-r\sin(\theta-\delta_2)$, with $\theta=\angle AEB$. When $r=1$ these say that $EP$ and $EQ$ are the internal and external bisectors of $\angle AEB$, hence perpendicular, and a trigonometric computation gives the converse. The equilateral triangles are decoration; their only role is to produce harmonic-mean lengths.`,
      "hints": [
        String.raw`Since $\angle AEX=120^{\circ}$ and $EU$ bisects it, splitting the area of $\triangle AEX$ gives $EU=\frac{ac}{a+c}$.`,
        String.raw`So $EU=EV$ is a reciprocal identity in $a,b,c,d$.`,
        String.raw`Two Menelaus applications (transversals $PBC$ and $QCD$), each fed into the sine-ratio lemma for a cevian, give $EP$ and $EQ$ one common ratio $r$.`,
        String.raw`$r=1$ exactly when $EP,EQ$ are the internal and external bisectors of $\angle AEB$; for the converse square the two sine identities and add.`
      ],
      "steps": [
        String.raw`Put $a=EA$, $b=EB$, $c=EC$, $d=ED$ and $\theta=\angle AEB\in(0^\circ,180^\circ)$; convexity gives $a,b,c,d\gt0$ with $EA,EC$ opposite rays and $EB,ED$ opposite rays. The equilateral triangles yield $\angle AEX=\angle BEY=120^\circ$ with $EX=c$, $EY=d$; the bisectors of these angles meet $AX,BY$ at points $U,V$. Orient angles at $E$ from ray $EA$ and write $\delta_1,\delta_2$ for the directed angles of $EP,EQ$.`,
        String.raw`Splitting $[AEX]=[AEU]+[UEX]$ by the sine area formula, $\tfrac12 ac\sin120^\circ=\tfrac12(a+c)\,EU\sin60^\circ$, and $\sin120^\circ=\sin60^\circ$ give $EU=\dfrac{ac}{a+c}$; likewise $EV=\dfrac{bd}{b+d}$. As all of $a,b,c,d$ are positive, $EU=EV\iff\frac1a+\frac1c=\frac1b+\frac1d\iff bd(a+c)=ac(b+d)$. Define $r:=\dfrac{bd(a+c)}{ac(b+d)}\gt0$; it remains to show $r=1\iff PE\perp QE$.`,
        String.raw`(Cevian sine-ratio.) For a point $T$ and the feet on a line, combining the sine area formula $[ETX]=\tfrac12|EX||ET|\sin(\delta(T)-\delta(X))$ with the common-altitude fact $\frac{[ETX]}{[ETY]}=\frac{t-x}{t-y}$ gives $\dfrac{\sin(\delta(T)-\delta(X))}{\sin(\delta(T)-\delta(Y))}=\dfrac{t-x}{t-y}\cdot\dfrac{|EY|}{|EX|}$, with no case split under the directed conventions.`,
        String.raw`Menelaus in $\triangle EAD$ with transversal $P$-$B$-$C$ and in $\triangle EAB$ with transversal $Q$-$C$-$D$ give, in magnitudes, $\frac{|AP|}{|PD|}=\frac{b(a+c)}{c(b+d)}$ and $\frac{|AQ|}{|QB|}=\frac{d(a+c)}{c(b+d)}$; $P$ and $Q$ are external to the respective segments, so the position ratio is positive. Feeding these into the sine-ratio with $(X,Y,T)=(D,A,P)$ and $(B,A,Q)$ and using $\delta(ED)=\theta-180^\circ$, $\delta(EB)=\theta$ yields the two identities $$\sin\delta_1=r\sin(\theta-\delta_1),\qquad \sin\delta_2=r\sin(\delta_2-\theta).$$`,
        String.raw`If $r=1$: since $\sin x=\sin y$ iff $x\equiv y$ or $x+y\equiv180^\circ$, the first identity gives $\delta_1\equiv\theta/2$ and the second $\delta_2\equiv90^\circ+\theta/2$ (the other family forces $\theta\equiv180^\circ$ or $0^\circ$, impossible as $\theta\in(0^\circ,180^\circ)$); so $EP,EQ$ are the internal and external bisectors of $\angle AEB$, which are perpendicular. Conversely, if $\delta_2\equiv\delta_1\pm90^\circ$ then $\sin\delta_2=\pm\cos\delta_1$ and $\sin(\delta_2-\theta)=\pm\cos(\theta-\delta_1)$, so the second identity becomes $\cos\delta_1=r\cos(\theta-\delta_1)$; squaring and adding to the first and applying $\sin^2+\cos^2=1$ at both angles gives $1=r^2$, hence $r=1$.`,
        String.raw`Chaining, $EU=EV\iff r=1\iff PE\perp QE$.`
      ]
    },
    {
      "id": "g17",
      "category": "geo",
      "difficulty": "medium",
      "stars": 3,
      "rating": 6.5,
      "confidence": "high",
      "text": String.raw`Let $ABCD$ be a convex quadrilateral such that $\angle B = \angle A + \angle C$. The internal angle bisector of $\angle D$ intersects side $BC$ at point $E$ such that $\angle AED = 90^\circ$. Let $H$ be the foot of the perpendicular from $E$ to line $AD$. Let $\Omega$ be the circumcircle of triangle $CDH$ and $\Gamma$ be the circumcircle of triangle $ABE$. Suppose $\Omega$ and $\Gamma$ intersect at two distinct points, and let the tangents from $C$ to $\Gamma$ touch the circle at $X$ and $Y$. Prove that line $BC$, line $XY$, and the line passing through the two intersection points of $\Omega$ and $\Gamma$ are concurrent.`,
      "why": String.raw`The angle condition $\angle B=\angle A+\angle C$ makes $\angle ADE=180^\circ-\angle B$, so $ABED$ is cyclic, and $\angle AED=90^\circ$ makes $AD$ its diameter. Hence $\Gamma=(ABE)$ is the circle on $AD$ with centre $O'$, the midpoint of $AD$. The isosceles triangle $O'DE$ gives $O'E\parallel CD$, and this places the midpoint $K$ of $BE$ on $\Omega=(CDH)$. Now line $BC$ meets $\Gamma$ at $B,E$ and meets $\Omega$ at $K,C$. The radical axis therefore crosses $BC$ at the point $T$ with $TB\cdot TE=TK\cdot TC$, which, since $K$ is the midpoint of $BE$, is exactly the harmonic conjugate of $C$ with respect to $B,E$. The polar of $C$ in $\Gamma$, which is the chord of contact $XY$, meets $BC$ at that same harmonic conjugate. All three lines pass through $T$. Spotting $K\in\Omega$ is the hard step.`,
      "hints": [
        String.raw`$\angle B=\angle A+\angle C$ forces $ABED$ cyclic with diameter $AD$; then $O'E\parallel CD$.`,
        String.raw`Show the midpoint $K$ of $BE$ lies on $\Omega$ (use the circle with diameter $O'E$).`,
        String.raw`Compare directed powers along $BC$: the radical axis meets it at the unique $T$ with $\overline{KC}\cdot\overline{KT}=KB^{2}$.`,
        String.raw`$XY$ is the polar of $C$ w.r.t. $\Gamma$ — the same relation, read off the right triangles at the centre.`
      ],
      "steps": [
        String.raw`Preliminaries. Write $\alpha,\beta,\gamma$ for $\angle A,\angle B,\angle C$, so $\beta=\alpha+\gamma$. $\Gamma=(ABE)$ needs $E\ne B$, and the tangents from $C$ to $\Gamma$ need $C\notin\Gamma$, so $E\ne C$; thus $E$ lies strictly between $B$ and $C$. Since $\alpha+\beta+\gamma+\angle D=360^\circ$, $\angle ADC=360^\circ-2\beta$ and, $DE$ being its bisector, $$\angle ADE=180^\circ-\beta.$$ Also $\angle ABE=\beta$ because $E\in BC$.`,
        String.raw`$ABED$ is cyclic with diameter $AD$. $ABED$ is a convex quadrilateral (as $E$ is on side $BC$), and its opposite angles at $B$ and $D$ sum to $\beta+(180^\circ-\beta)=180^\circ$, so it is cyclic; call the circle $\omega$. Since $\angle AED=90^\circ$ and $E\in\omega$, $AD$ is a diameter, and the center is the midpoint $O'$ of $AD$. Note that $AD$ and $BE$ are opposite sides of the convex quadrilateral $ABED$, so segments $AD$ and $BE$ are disjoint; in particular $O'\notin BE$.`,
        String.raw`$O'E\parallel CD$. $O'D=O'E$, so $\angle O'ED=\angle O'DE=\angle ADE$ (ray $DO'$ is ray $DA$) $=\angle EDC$ (bisector). The points $O'$ (on $DA$) and $C$ lie on opposite sides of the bisector line $DE$, so these are alternate angles and $O'E\parallel DC$.`,
        String.raw`$K\in\Omega$, where $K$ is the midpoint of $BE$. Directed angles mod $180^\circ$. Facts: $H\ne D$ (else $\angle ADE=90^\circ$ and triangle $AED$ would have two right angles); $E\notin AD$, $K\ne E$, $K\ne O'$ (Step 2). If $K=H$ then $K\in\Omega$ trivially, so let $K\ne H$. As $K$ is the midpoint of the chord $BE$ of $\omega$, $O'K\perp BE$; and $EH\perp AD$. Hence $K$ and $H$ lie on the circle $\Psi$ with diameter $O'E$. We claim $$\angle(HK,AD)=\angle(EK,EO').\qquad(\ast)$$ If $H\ne O'$, then line $HO'=AD$ and $(\ast)$ is the inscribed-angle theorem in $\Psi$ on chord $KO'$. If $H=O'$, then $EO'\perp AD$ so $AD$ is tangent to $\Psi$ at $H$, and $(\ast)$ is the tangent-chord theorem. Now line $EK=$ line $BC=$ line $CK$ and $EO'\parallel CD$ (Step 3), so $\angle(EK,EO')=\angle(CK,CD)$. Since $HD=AD$ as lines, $(\ast)$ gives $\angle(HK,HD)=\angle(CK,CD)$, so $C,H,K,D$ are concyclic; as $C,D,H$ determine $\Omega$, $K\in\Omega$.`,
        String.raw`Powers along line $BC$ in directed segments. The order on line $BC$ is $B,K,E,C$: $K$ is the midpoint of $BE$ and $E$ is strictly between $B$ and $C$. Also $\Omega\ne\Gamma$: otherwise their common circle would meet line $BC$ at the three distinct points $B$, $K$, $C$, impossible for a circle and a line. So $\Omega,\Gamma$ have a radical axis $\ell$, which is the common chord's line (the two circles meet in two points by hypothesis). Line $BC$ meets $\Gamma$ exactly at $B,E$ and meets $\Omega$ exactly at $K,C$ ($K\ne C$ by the order). For any point $P$ of line $BC$, the secant form of the power of a point, in directed segments along the line, gives $\operatorname{Pow}_\Gamma(P)=\overline{PB}\cdot\overline{PE}$ and $\operatorname{Pow}_\Omega(P)=\overline{PK}\cdot\overline{PC}$. Since $K$ is the midpoint of $BE$, $\overline{KE}=-\overline{KB}$, so by Chasles $\overline{PB}=\overline{PK}+\overline{KB}$, $\overline{PE}=\overline{PK}-\overline{KB}$, $\overline{PC}=\overline{PK}+\overline{KC}$, and subtracting gives $$\operatorname{Pow}_\Omega(P)-\operatorname{Pow}_\Gamma(P)=\overline{PK}\cdot\overline{KC}+KB^{2},\qquad KB^{2}:=\overline{KB}^{2}.$$ Hence $P\in\ell$ iff $\overline{KP}\cdot\overline{KC}=KB^{2}$. Orient the line $B\to C$, so $\overline{KE}=-\overline{KB}=:e\gt 0$ and $\overline{KC}\gt e$: the equation becomes $\overline{KP}=KB^{2}/\overline{KC}=e^{2}/\overline{KC}$, and as $P$ runs along the line $\overline{KP}$ takes each directed value exactly once - so $\ell$ meets $BC$ in exactly one point $T$ (neither parallel to $BC$ nor equal to it), and $$KB^{2}=\overline{KC}\cdot\overline{KT},\qquad 0\lt \overline{KT}\lt \overline{KE}\qquad(\dagger)$$ i.e. $T$ lies strictly between $K$ and $E$. Equivalently, $T$ is the unique point of $BC$ with $\overline{TK}\cdot\overline{TC}=\overline{TB}\cdot\overline{TE}$.`,
        String.raw`$T$ lies on $XY$. Since $B,E$ lie on the same ray from $C$, $\operatorname{Pow}_\Gamma(C)=\overline{CB}\cdot\overline{CE}\gt 0$: $C$ is exterior to $\Gamma$, and its chord of contact $XY$ is the polar of $C$ w.r.t. $\Gamma$ (classical: the tangents' contact chord is the polar). We show the polar meets $BC$ at the same point $T$ of $(\dagger)$. Let $O_\Gamma$, $R$ be the center and radius of $\Gamma$. The center $O_\Gamma$ lies on the perpendicular bisector of the chord $BE$, so its foot on line $BC$ is the midpoint $K$, and $O_\Gamma\notin BC$ (else $BE$ is a diameter, $\angle BAE=90^\circ$, so right triangle $ABE$ gives $\beta\lt 90^\circ$ and Step 1's $\angle ADC=360^\circ-2\beta$ exceeds $180^\circ$, impossible in the convex $ABCD$). The polar of $C$ is perpendicular to $CO_\Gamma$; it would fail to meet $BC$ only if $CO_\Gamma\perp BC$, but the perpendicular to $BC$ through $O_\Gamma$ meets $BC$ at $K$, so then $C=K$ - excluded. Thus the polar meets $BC$ at a unique point $T'$. Let $D_0:=XY\cap CO_\Gamma$. By symmetry ($O_\Gamma X=O_\Gamma Y$ and $CX=CY$ make $CO_\Gamma$ the perpendicular bisector of $XY$) the polar $XY\perp CO_\Gamma$; so $XD_0$ is the altitude to the hypotenuse of the right triangle $O_\Gamma XC$ (right angle at $X$: tangent $\perp$ radius), and the leg-projection rule in the right triangle gives $R^{2}=O_\Gamma X^{2}=D_0O_\Gamma\cdot CO_\Gamma$, with $D_0$ between $C$ and $O_\Gamma$ since $C$ is exterior. Now $\angle O_\Gamma D_0T'=\angle O_\Gamma KT'=90^\circ$, so $O_\Gamma,D_0,T',K$ lie on the circle with diameter $O_\Gamma T'$. The power of $C$ in this circle, read along the secants $C\text{-}K\text{-}T'$ and $C\text{-}D_0\text{-}O_\Gamma$, gives $\overline{CK}\cdot\overline{CT'}=\overline{CD_0}\cdot\overline{CO_\Gamma}=(\overline{CO_\Gamma}-\overline{D_0O_\Gamma})\cdot\overline{CO_\Gamma}=CO_\Gamma^{2}-R^{2}$ (Chasles: $\overline{CD_0}=\overline{CO_\Gamma}-\overline{D_0O_\Gamma}$); and by Pythagoras in the right triangles $O_\Gamma KC$ and $O_\Gamma KB$ (right angles at $K$), $CO_\Gamma^{2}-R^{2}=(CK^{2}+KO_\Gamma^{2})-(KB^{2}+KO_\Gamma^{2})=CK^{2}-KB^{2}$. So $KB^{2}=\overline{CK}^{2}-\overline{CK}\cdot\overline{CT'}=\overline{CK}\cdot(\overline{CK}-\overline{CT'})=\overline{CK}\cdot\overline{T'K}=\overline{KC}\cdot\overline{KT'}$ (Chasles: $\overline{CK}-\overline{CT'}=\overline{T'K}$). This is exactly the relation $(\dagger)$ defining $T$; by its uniqueness, $T'=T$. Therefore $T$ lies on the polar of $C$, i.e. on line $XY$.`,
        String.raw`Conclusion. $T$ lies on line $BC$ (Step 5), on the radical axis $\ell$ of $\Omega$ and $\Gamma$ - the common chord's line (Step 5), and on $XY$ (Step 6). Hence $$\boxed{BC,\ XY\text{ and the line through the two intersection points of }\Omega,\Gamma\text{ are concurrent at }T}.$$ Position and degeneracies: $T$ is strictly between $K$ and $E$, so $T\ne B,E,C,K$; $\ell\ne BC$ and $\ell$ is not parallel to $BC$, and $XY\ne BC$ since $C\notin\operatorname{polar}(C)$ ($\operatorname{Pow}_\Gamma(C)\gt 0$) - the concurrence is proper. In classical language, $(\dagger)$ says exactly that $T$ is the harmonic conjugate of $C$ w.r.t. $B,E$, i.e. $(B,E;C,T)=-1$: with directed positions $b,-b,c,t$ on the line measured from $K$, the relation $\overline{CB}\cdot\overline{TE}=-\overline{CE}\cdot\overline{TB}$ reads $(b-c)(-b-t)=(b+c)(b-t)$; the $bt$ and $bc$ terms cancel and it reduces to $ct=b^{2}$, which is $(\dagger)$.`
      ]
    },
    {
      "id": "g18",
      "category": "geo",
      "difficulty": "medium",
      "stars": 3,
      "rating": 6.5,
      "confidence": "high",
      "text": String.raw`Let $ABC$ be a scalene triangle with circumcircle $\omega$ and with neither $\angle B$ nor $\angle C$ a right angle. Let $M$ be the midpoint of $BC$, let $K$ be the foot of the altitude from $A$ to $BC$, and let $\psi$ be the circle with diameter $AM$. For each admissible point $X\in\psi$, meaning that $X\notin\{A,M,K\}$, the circle $\phi=(XBC)$ is not tangent to $\psi$ at $X$, its second intersection $Y$ satisfies $Y\notin\{A,X\}$, and the lines $AX,AY$ meet $\omega$ again at distinct points $D,E\ne A$, prove that all defined lines $DE$ pass through one fixed point.`,
      "why": String.raw`All chords $XY$ pass through a fixed point $T$ on $BC$. Indeed $\psi$ meets $BC$ at $M$ and the altitude foot $K$, and the point with $TB\cdot TC=TM\cdot TK$ has equal power with respect to $\psi$ and every circle through $B,C$. This uses $AB\ne AC$ to keep $K\ne M$, and the excluded right angles keep $T\notin\{B,C\}$. So $X\leftrightarrow Y$ is the involution cut on $\psi$ by lines through $T$. Since $A$ lies on both $\psi$ and $\omega$, projecting from $A$ maps $\psi$ to $\omega$ and preserves cross-ratio, so it carries this to a projective involution $D\leftrightarrow E$ on $\omega$. Fregier's theorem says that the chords joining the pairs of an involution on a conic all pass through one point, so every line $DE$ is concurrent. The real lesson is that pairs of points cut on a circle by a pencil of lines survive projection through a common point.`,
      "hints": [
        String.raw`$\psi$ meets line $BC$ at $M$ and the altitude foot $K$; there is a unique $T$ on $BC$ with $TB\cdot TC=TM\cdot TK$.`,
        String.raw`Equal powers put $T$ on the radical axis $XY$: $X\leftrightarrow Y$ is the involution cut on $\psi$ by the pencil through $T$.`,
        String.raw`Projection from $A$ onto $\omega$ preserves cross-ratios — conclude with the Fr'egier correspondence (concurrent chords of a conic involution).`
      ],
      "steps": [
        String.raw`Basic configuration. A point $P$ of line $BC$ lies on $\psi$ iff $\angle APM$ is right, i.e. iff $P\in\{M,K\}$ (converse of Thales on diameter $AM$); thus $X\notin\{M,K\}$ makes $X,B,C$ non-collinear, so $\phi=(XBC)$ exists, and $X\ne A$ makes the line $AX$ defined. Also $\psi\ne\phi$: the point $B$ lies on $\phi$ but not on $\psi$, because $B\in\psi\cap BC$ would force $B\in\{M,K\}$, and $B=K$ is exactly $\angle B=90^{\circ}$ while $B=M$ contradicts $B\ne C$. Hence $\phi$ and $\psi$ are two distinct circles meeting in the two points $X,Y$, and their radical axis is the line $XY$.`,
        String.raw`The fixed point $T$ on $BC$. Choose one directed unit of length along the single line $BC$, and write a point of that line by its signed distance $s$ from $B$. For the points $B,C,M,K$ of the line write $b,c,m,k$ for their signed distances from $B$, and for a variable point $S$ its signed distance $s$; then $SB=s-b$ and so on are signed lengths. The products $SB\cdot SC=(s-b)(s-c)$ and $SM\cdot SK=(s-m)(s-k)$ are quadratics in $s$ with the same leading term $s^{2}$, so their difference $f(s)=SB\cdot SC-SM\cdot SK=(m+k-b-c)\,s+(bc-mk)$ is an affine-linear function of the signed position $s$. With $B$ as origin $b=0$, and since $M$ is the midpoint of $BC$ one has $m=c/2$, so the leading coefficient $m+k-b-c$ equals $k-m$. This vanishes exactly when $K=M$, i.e. when $AB=AC$; the scalene hypothesis makes $f$ a nonzero linear function with a unique zero $T$, the single point of $BC$ with $TB\cdot TC=TM\cdot TK$. Exclusions: $T=B$ would give $0=MB\cdot MK$, so $M=B$ or $K=B$, i.e. $B=M$ (absurd, $B\ne C$) or $\angle B=90^{\circ}$ (barred); symmetrically $T\ne C$. Also $T\notin\{M,K\}$, for there $TM\cdot TK=0$ forces $TB\cdot TC=0$, i.e. $T\in\{B,C\}$, just excluded. Finally $T\notin\psi$ since $\psi\cap BC=\{M,K\}$. So $T$ is a finite point distinct from $A,B,C,M,K$ and off $\psi$.`,
        String.raw`Radical axis passes through $T$. Lemma (power via a secant): if a circle $\gamma$ meets a line at $U,V$, then for any point $S$ of that line $\operatorname{Pow}_\gamma(S)=\overline{SU}\cdot\overline{SV}$ (directed). Apply it to $\phi$, which meets $BC$ at $B,C$, and to $\psi$, which meets $BC$ at $M,K$: at $T\in BC$ these give $\operatorname{Pow}_\phi(T)=TB\cdot TC=TM\cdot TK=\operatorname{Pow}_\psi(T)$. Equal powers characterise the radical axis, which for the two distinct circles of Step 1 is their common secant $XY$; the tangent case (radical axis $=$ common tangent, $Y=X$) is precisely an excluded admissibility failure. Hence $T$ lies on $XY$ for every admissible $X$, i.e. $X,Y,T$ are collinear.`,
        String.raw`The involution cut on $\psi$. From Step 3, $X$ and $Y$ are the two points in which the line $XT$ meets $\psi$, so the pairing $X\mapsto Y$ is the involution that the pencil of all lines through $T$ cuts on the conic $\psi$ - Fr\'egier's involution of $\psi$ from $T$, whose projectivity is half of Fr\'egier's theorem (Step 6(i)). It is not the identity: only the two contact points of the tangents from $T$ to $\psi$ would give $Y=X$, and these are excluded by admissibility since $T\notin\psi$. The single extra position $X=\psi\cap AT\setminus\{A\}$ would force $Y=A$ and is likewise excluded.`,
        String.raw`Transport to $\omega$ by projection from $A$. Lines through $A$ define a bijection $\pi\colon Z\mapsto W$ from $\psi\setminus\{A\}$ onto $\omega\setminus\{A\}$, where $W$ is the second point of $\omega$ on line $AZ$. This $\pi$ is a projectivity: it preserves cross-ratios, by the inscribed-angle theorem. For four points $Z_1,Z_2,Z_3,Z_4$ of $\psi$ the cross-ratio $(Z_1,Z_2;Z_3,Z_4)_\psi$ is the cross-ratio of the pencil of the lines $AZ_i$ (a cross-ratio on a conic equals the pencil from any point of the conic, here $A$); those same four lines join $A$ to $\pi(Z_1),\ldots,\pi(Z_4)$ on $\omega$, so their pencil cross-ratio is also $(\pi(Z_1),\ldots,\pi(Z_4))_\omega$. Both equal one pencil cross-ratio, hence $\pi$ preserves cross-ratios. Consequently the transported pairing $\tau=\pi\circ(X\mapsto Y)\circ\pi^{-1}$ is a projective involution of $\omega$, and it joins $D=\pi(X)$ to $E=\pi(Y)$ by the definitions of $D,E$; it is non-identity because $X\mapsto Y$ is.`,
        String.raw`Fr\'egier's theorem for a conic (stated and applied). Classical statement: a pairing of points of a non-degenerate conic $\Gamma$ is a projective involution if and only if the chords joining paired points belong to a single pencil (through the Fr\'egier point $Q$, which may be ideal, the chords being parallel). Direction (i) pencil $\Rightarrow$ involution: pairing two points on each line through $O$ is the composition of perspectivities $Z\mapsto$(line $OZ$)$\mapsto Z'$, a projectivity of $\Gamma$ of order two, and it is equivalent to the concurrency that Pascal's theorem gives for the three chords of any three such pairs. Direction (ii) uniqueness: a projectivity of $\Gamma$ that fixes three points is the identity (a conic is in projective correspondence with a line by projection from one of its points, and a projectivity of a line is fixed by three point-images), so a projective involution is determined by two pairs - indeed if $\iota,\kappa$ are involutions with $\iota(P)=\kappa(P)=P'$ and $\iota(Q)=\kappa(Q)=Q'$, then $\kappa\iota$ fixes $P,P',Q$ and equals $\mathrm{id}$. Apply this to the involution $\tau$ on $\omega$: take two admissible pairs $D\leftrightarrow E$, $D'\leftrightarrow E'$ and set $Q=DE\cap D'E'$. By (i) the pencil-through-$Q$ pairing is a projective involution sharing the two pairs $(D,E),(D',E')$ with $\tau$, so (ii) gives $\tau=$ pencil-through-$Q$, and every chord $DE$ of $\tau$ passes through $Q$. As $\omega,\tau$ depend only on $A,B,C$, so does $Q$.`,
        String.raw`The point $Q$ is well defined and finitely many positions of $X$ are lost, so infinitely many $DE$ verify the claim at once. The intersection $Q=DE\cap D'E'$ of Step 6 is a genuine point: if some pair $D,E$ gave lines $DE,D'E'$ that are the same line, that line is still a chord through $Q$, and two distinct admissible positions yield two distinct chords because $D\leftrightarrow E$ is a non-identity involution (only the two tangent positions of Step 4 are fixed). The excluded configurations - $Y=A$ (one position), $Y=X$ (the at most two tangents from $T$ to $\psi$), and $AX$ or $AY$ tangent to $\omega$ at $A$ so that $D$ or $E$ is not a new point (at most two positions each) - form a finite set; on the infinite remaining set of admissible $X$ all lines $DE$ pass through the single fixed point $Q$. $\blacksquare$`
      ]
    },
    {
      "id": "g19",
      "category": "geo",
      "difficulty": "hard",
      "stars": 4,
      "rating": 7,
      "confidence": "high",
      "text": String.raw`Let $ABC$ be a scalene triangle with circumcircle $\omega$. The tangent at $A$ meets $BC$ at $P$, and let $\psi$ be the circle centered at $P$ through $A$. For each admissible point $X\in\psi$, meaning $X\ne A$, $X\notin\omega\cup BC$, the circle $(XBC)$ has a second intersection $Y\ne X,A$ with $\psi$, and the second intersections $D\ne A$ and $E\ne A$ of $AX$ and $AY$ with $\omega$ exist and satisfy $D\ne E$. If $M$ is the projection of $P$ onto $DE$, determine the locus of $M$ as $X$ varies over all admissible positions.`,
      "why": String.raw`Since $PA^2=PB\cdot PC$, every circle $(XBC)$ has power $PA^2$ at $P$, and $X,Y$ lie on the circle of radius $PA$ about $P$. So $PX$ and $PY$ are tangents to $(XBC)$ and $XY$ is the polar of $P$. That polar meets $BC$ at the harmonic conjugate $T$ of $P$ with respect to $B,C$, a fixed point, and $PT=PA^2/PN$ with $N$ the midpoint of $BC$, which places $T$ inside $\psi$. So $X\leftrightarrow Y$ is the involution cut on $\psi$ by lines through $T$. Projecting from $A$, a common point of $\psi$ and $\omega$, transports it to an involution of $\omega$ without fixed points. By Fregier's theorem all chords $DE$ then pass through one interior point $K$. Thus $\angle PMK=90^\circ$, and the locus is the circle with diameter $PK$ minus the finitely many points coming from excluded positions.`,
      "hints": [
        String.raw`$PX=PY=PA$ and $PA^{2}$ is the power of $P$ w.r.t. $(XBC)$: $PX,PY$ are tangents, and $XY$ is the polar of $P$.`,
        String.raw`The polar meets the secant $PBC$ at the harmonic conjugate of $P$ — a fixed point $T$ — and $T$ lies strictly inside $\psi$.`,
        String.raw`The pencil through $T$ cuts an involution on $\psi$; project it from $A$ to $\omega$ — the Fr'egier theorem puts all $DE$ through one interior point $K$.`,
        String.raw`$\angle PMK=90^{\circ}$: the locus is the circle with diameter $PK$, minus finitely many excluded feet.`
      ],
      "steps": [
        String.raw`Fix an admissible $X$ and write $\kappa$ for the circle $(XBC)$. Because $PA$ is tangent to $\omega$ at $A$ and $PBC$ is a secant line of $\omega$, the tangent-secant theorem gives $PB\cdot PC=PA^{2}$ (directed segments on line $BC$). As $B,C$ also lie on $\kappa$ and $P\in BC$, the same product $PB\cdot PC$ is the power of $P$ with respect to $\kappa$, so $\operatorname{Pow}_\kappa(P)=PA^{2}$.`,
        String.raw`By definition of $\psi$, $PX=PA$; and $Y\in\psi$ likewise gives $PY=PA$. Hence $PX^{2}=PY^{2}=PA^{2}=\operatorname{Pow}_\kappa(P)$. A segment from $P$ to a point of $\kappa$ whose square equals the power of $P$ is a tangent segment (the converse of tangent-secant): $PX$ and $PY$ are the two tangents drawn from $P$ to $\kappa$, touching at $X$ and $Y$.`,
        String.raw`Lemma (polar = chord of contact): if the two tangents from $P$ to a circle touch it at $X,Y$, then the line $XY$ is the polar of $P$. Proof: the centre $O_\kappa$, $P$, $X$, $Y$ give $O_\kappa X\perp PX$ and $O_\kappa Y\perp PY$, so $X,Y$ lie on the circle with diameter $PO_\kappa$; $O_\kappa$ is its centre, the line $XY$ is its radical axis with the point-circle... rather: $O_\kappa X^{2}=O_\kappa P\cdot$(projection), and the foot $H$ of $X$ on $PO_\kappa$ satisfies $O_\kappa H\cdot O_\kappa P=O_\kappa X^{2}=r^{2}$, the pole-polar incidence for $P$; as $X,Y$ both satisfy it, $XY$ is exactly the polar of $P$. Thus $XY$ is the polar of $P$ w.r.t. $\kappa$.`,
        String.raw`Let $T=XY\cap BC$. Since $BC$ is a secant through $P$ meeting $\kappa$ at $B,C$, and $XY$ is the polar of $P$, the pole-polar secant theorem (La Hire) yields that $T$ is the harmonic conjugate of $P$ with respect to $(B,C)$, i.e. $(B,C;P,T)=-1$. This condition involves only the fixed points $B,C,P$, so $T$ is a fixed point of the plane, independent of $X$.`,
        String.raw`Reality of the involution. Let $N$ be the midpoint of $BC$ on the line $BC$. For a harmonic range $(B,C;P,T)=-1$ with midpoint $N$, the classical metric form is $PN\cdot PT=NB^{2}$ (equal affine parameters from $N$ give $t=d^{2}/p$ for $b=-d,c=d,p$). Writing $PB\cdot PC=PA^{2}$ as $(PN- NB)(PN+NB)=PN^{2}-NB^{2}=PA^{2}$ gives $PA^{2}=PN^{2}-NB^{2}$. Then $PT=NB^{2}/PN$ and $PT/PA=(NB^{2}/PN)/\sqrt{PN^{2}-NB^{2}}$, so $PT\lt PA\iff NB^{2}\lt PN\sqrt{PN^{2}-NB^{2}}$, which after using $PA=\sqrt{PN^{2}-NB^{2}}$ is exactly $PA^{2}/PN\lt PA\iff PA\lt PN\iff PN^{2}-NB^{2}\lt PN^{2}$, true since $NB\gt 0$. Hence $T$ lies strictly inside $\psi$ (distance $PT$ below the radius $PA$).`,
        String.raw`Because $T$ is interior to $\psi$, every line through $T$ meets $\psi$ in two distinct real points. By Step 3 the line $XT$ meets $\psi$ again at $Y$, so as $X$ varies the pairing $X\leftrightarrow Y$ is precisely the involution that the pencil of lines through $T$ cuts on the conic $\psi$; it has no fixed point (a fixed point would force $XT$ tangent to $\psi$, impossible for interior $T$), and every pair is real.`,
        String.raw`Transport to $\omega$. Projection from $A$ maps $\psi\setminus\{A\}$ bijectively onto $\omega\setminus\{A\}$ by $Z\mapsto W$, where $W$ is the second intersection of line $AZ$ with $\omega$; the parameter by which each conic is swept is the slope of the line $AZ$, so this bijection preserves cross-ratios and is a projectivity $\psi\cong\omega$. It carries $X\mapsto D$ and $Y\mapsto E$, hence carries the involution of Step 6 to an involution $D\leftrightarrow E$ on the non-degenerate conic $\omega$. The hypothesis $D\ne E$ just says this transported involution has no fixed point, which is automatic from $T$ interior.`,
        String.raw`Fr\'egier's theorem (stated and applied): a pairing of the points of a non-degenerate conic is a projective involution if and only if the lines joining paired points belong to a single pencil; the pencil centre $K$ is interior to the conic exactly when the involution has no fixed point, and exterior when it has two. Applying the forward direction to the involution $D\leftrightarrow E$ of Step 7, all chords $DE$ pass through one fixed point $K$, and as that involution is fixed-point-free, $K$ lies strictly inside $\omega$.`,
        String.raw`Since $P$ lies outside $\omega$ (it is the intersection of the $A$-tangent with $BC$) while $K$ lies strictly inside, $K\ne P$, so the circle $\Gamma$ with diameter $PK$ is a genuine circle. Now $M$ is the foot of the perpendicular from $P$ to the line $DE$, which always passes through $K$; therefore $PM\perp KM$ and $\angle PMK=90^{\circ}$. By the converse of Thales' theorem $M\in\Gamma$. This proves the locus is contained in $\Gamma$.`,
        String.raw`Converse and exclusions. Rotating a line $\ell$ about the interior point $K$, $\ell$ meets $\omega$ in a conjugate pair $(D,E)$ of the involution (real and distinct because $K$ is interior), which maps back through $\pi^{-1}$ to an admissible pair $(X,Y)$ on $\psi$, and the foot of $P$ on $\ell$ traces all of $\Gamma$: the foot map $\ell\mapsto M$ from the pencil through $K$ to $\Gamma$ is a bijection. Removing from $\Gamma$ the finitely many images of the lines $\ell$ for which the recovered $X$ fails admissibility (those with $X=A$, $X\in\omega\cup BC$, or $Y\in\{A,X\}$, and the tangent-at-$A$ limit $X$ equal to the point of $\psi$ antipodal to $A$) leaves exactly the attainable positions of $M$.`,
        String.raw`Therefore the locus of $M$ is the circle with diameter $PK$ with a finite set of points deleted; equivalently every line $\ell$ through $K$ other than the finitely many exceptional ones occurs as some $DE$, and the only points of $\Gamma$ lost are the feet of $P$ on those exceptional lines.`,
        String.raw`Closing (iff): we have shown $M$ arises from an admissible $X$ if and only if $M\in\Gamma$ and $M$ is not one of the finitely many deleted feet, completing the description of the locus.`
      ]
    },
    {
      "id": "g20",
      "category": "geo",
      "difficulty": "hard",
      "stars": 4,
      "rating": 7,
      "confidence": "high",
      "text": String.raw`Let $ABCD$ be a convex cyclic quadrilateral with circumcenter $O$. Assume that no two opposite sides are parallel and that neither $AC$ nor $BD$ is a diameter of the circumcircle. Let $P=AC\cap BD$. Let $M\ne O$ be the second intersection of the circumcircles of triangles $AOC$ and $BOD$. Let $X,Y$ be the perpendicular projections of $M$ onto the lines $AB,CD$, respectively, and let $N$ be the midpoint of $PM$. Prove that $X,Y,N$ are collinear.`,
      "why": String.raw`First identify $M$: inverting in $\omega$ sends $(AOC)$ and $(BOD)$ to the lines $AC$ and $BD$, so $M$ is the inverse of $P$, and for every point $Z$ of $\omega$ the ratio $MZ/PZ$ is the constant $\sqrt{OM/OP}$. The real claim is that the reflections $M_1,M_2$ of $M$ in $AB$ and $CD$ lie on the radical axis $\ell$ of the circles with diameters $AC$ and $BD$, a line through $P$. Once that is shown, the homothety at $M$ with ratio $\tfrac12$ maps $M_1,M_2,P$ to $X,Y,N$, which are therefore collinear. Proving $M_1\in\ell$ is the computational core. Projecting squared distances onto $AB$ reduces it to one scalar identity, which becomes a trigonometric tautology once the four arcs are written as $2x,2y,2z,2w$ with $x+y+z+w=\pi$. By symmetry the same identity handles $M_2$.`,
      "hints": [
        String.raw`Invert in $\omega$: $M$ is the inverse of $P$, so $OP\cdot OM=R^{2}$; similar triangles then compare $MX$ with $PX$ for $X\in\omega$.`,
        String.raw`Work with the radical axis of the Thales circles on $AC$ and $BD$ — it passes through $P$.`,
        String.raw`Test membership by squared distances projected on the two chords; show the reflections of $M$ in $AB$ and $CD$ both lie on that axis.`,
        String.raw`Close with the homothety with centre $M$ and ratio $\tfrac12$.`
      ],
      "steps": [
        String.raw`Inversion: $M$ is the inverse of $P$. Let $R$ be the radius of $\omega$ and $\iota$ the inversion in $\omega$. Since neither diagonal is a diameter, $A,O,C$ and $B,O,D$ are non-collinear triples, so the circles $(AOC)$ and $(BOD)$ exist and $O\notin AC\cup BD$; as $P\in AC$ this gives $P\ne O$. Inversion maps a circle through the centre to a line, and fixes $A,C\in\omega$, so $(AOC)\setminus\{O\}$ maps onto the line $AC$ and $(BOD)\setminus\{O\}$ onto $BD$. The image lines meet only at $P$, hence the two circles have exactly the two common points $O$ and $\iota(P)$; two distinct circles share at most two points, so the second intersection is forced: $M=\iota(P)$. Thus $O,P,M$ are collinear, $OP\cdot OM=R^2$, and (convexity puts $P$ strictly inside $\omega$) $M$ lies outside $\omega$ on ray $OP$. From now on scale so that $R=1$, and set $\kappa:=OM/OP=1/OP^{2}$, so $M=\kappa P$ is the dilation of $P$ from centre $O$; also $q:=PA\cdot PC=PB\cdot PD=1-OP^2$ (intersecting chords, equal powers), so $\kappa=1/(1-q)$ and $\kappa-1=q/(1-q)$.`,
        String.raw`Distance lemma. For any $X\in\omega$, triangles $OMX$ and $OXP$ share the angle at $O$ and satisfy $OM/OX=OX/OP$ (equivalent to $OM\cdot OP=1=OX^{2}$); by SAS they are similar, whence $$MX=\kappa^{1/2}\,PX\qquad\text{i.e.}\quad MX^{2}=\kappa\,PX^{2}\quad (X\in\omega).\tag{1}$$`,
        String.raw`The radical axis $\ell$. Let $\Omega_1,\Omega_2$ be the Thales circles with diameters $AC,BD$, centres $O_1,O_2$ the diagonal midpoints. If $O_1=O_2$ the diagonals bisect each other, so $ABCD$ is a parallelogram and $AB\parallel CD$, contrary to hypothesis; hence $\ell$ is a genuine line, perpendicular to the line of centres $O_1O_2$. Since $P$ lies between $A,C$ and between $B,D$, its powers are $\operatorname{Pow}_{\Omega_1}(P)=-PA\cdot PC=-q=-PB\cdot PD=\operatorname{Pow}_{\Omega_2}(P)$: $P\in\ell$. Equivalently $\ell$ is the unique line through $P$ perpendicular to $O_1O_2$, and by Apollonius' median formula $PO_1^2=AC^2/4-q$, $PO_2^2=BD^2/4-q$, so for any point $Z$: $$Z\in\ell\iff ZO_1^{2}-ZO_2^{2}=PO_1^{2}-PO_2^{2}=\tfrac14(AC^{2}-BD^{2})\iff Q(Z):=ZA^{2}-ZB^{2}+ZC^{2}-ZD^{2}-(AC^{2}-BD^{2})=0,\tag{2}$$ the last equivalence being twice the Apollonius expansions of $ZO_1^2,ZO_2^2$.`,
        String.raw`Projection lemma. Orient the lines $A\to B$ and $C\to D$. For a chord $UV$ of $\omega$ and any point $Z$, let $t_Z$ be the signed coordinate on line $UV$ of the foot of the perpendicular from $Z$, measured from the midpoint of $UV$ (positive toward $V$), and $h$ the perpendicular distance: then $ZU^{2}-ZV^{2}=(t_Z+UV/2)^{2}+h^{2}-(t_Z-UV/2)^{2}-h^{2}=2\,UV\cdot t_Z$ by Pythagoras twice, with all coordinates directed. Write $t_Z$ for $UV=AB$ and $u_Z$ for $UV=CD$; then $Q(Z)=2AB\,t_Z+2CD\,u_Z-(AC^2-BD^2)$ and $Q(P)=0$ by (2), i.e. $2AB\,t_P+2CD\,u_P=AC^2-BD^2$. Moreover, for any two points $Z,Z'$, $Q(Z')-Q(Z)=2AB\,(t_{Z'}-t_Z)+2CD\,(u_{Z'}-u_Z)$, since each term of $Q$ depends only on the corresponding foot coordinate.`,
        String.raw`Reflection lemma for $M_1$: equivalence with $(\star)$. Let $M_1$ be the reflection of $M$ in line $AB$, and $r$ the reflection. (i) $r$ is an isometry fixing $A,B$ pointwise, so $M_1A=MA$ and $M_1B=MB$, hence by (1): $M_1A^2-M_1B^2=\kappa(PA^2-PB^2)=2\kappa\,AB\,t_P$. (ii) $t_{M_1}=t_M$ because $MM_1\perp AB$: the foot on $AB$ is unchanged. (iii) Since $M=\kappa P$ is a dilation from $O$ and $O$'s foot on $AB$ is the midpoint of $AB$ ($t_O=0$, the radius to a chord midpoint is perpendicular to it; likewise $u_O=0$ on $CD$), the foot coordinates scale: $t_M=\kappa t_P$, $u_M=\kappa u_P$. (iv) Let $\hat n=\mathrm{rot}_{+90^\circ}(\hat s)$ be the directed normal to $AB$, $h(Z)$ the signed distance from $Z$ to line $AB$ along $\hat n$, and $\sin\varphi:=\hat s\times\hat\tau=\hat n\cdot\hat\tau$ the directed angle between the lines. The reflection displacement is $M_1-M=-2h(M)\hat n$, whose component along $\hat\tau$ is $-2h(M)\sin\varphi$; hence $u_{M_1}=u_M-2h(M)\sin\varphi$. (v) The distance to the mirror dilates by similar right triangles on the perpendicular to $AB$: $h(M)=\kappa h(P)-(\kappa-1)h(O)$. Assembling (i)-(v): $$Q(M_1)=2AB(t_M-t_P)+2CD(u_M-u_P-2h(M)\sin\varphi)=(\kappa-1)\big(2AB\,t_P+2CD\,u_P\big)-4\,CD\,h(M)\sin\varphi,$$ so by (2): $$M_1\in\ell\iff Q(M_1)=0\iff (\kappa-1)\,(AC^2-BD^2)/2=2\,CD\,h(M)\sin\varphi.\tag{$\star$}$$`,
        String.raw`Verification of $(\star)$. Parametrize the four arcs by half-angles $x,y,z,w$: $\text{arc }AB=2x,\ \text{arc }BC=2y,\ \text{arc }CD=2z,\ \text{arc }DA=2w$, with $x+y+z+w=\pi$ and all in $(0,\pi)$; convexity with counterclockwise order $A,B,C,D$ fixes the signs below. Each chord equals $2\sin$(its half-arc): $AB=2\sin x$, $CD=2\sin z$, $AC=2\sin(x+y)$, $BD=2\sin(y+z)$. (a) $h(O)=\cos x$: the right triangle on half-chord $AB$ and radius. (b) In triangle $PAB$: $\angle PAB=\angle CAB=y$ and $\angle PBA=\angle DBA=w$ (inscribed angles on arcs $BC,DA$), so $\angle APB=\pi-y-w$ and the sine rule in $\triangle PAB$ gives $PA=2\sin x\sin w/\sin(y+w)$; then $h(P)=PA\sin\angle(AC,AB)=PA\sin y=2\sin x\sin y\sin w/\sin(y+w)\gt 0$ (as $P$ is between $A$ and $C$, it lies on the $C$-side of $AB$, the positive $\hat n$-side). (c) The direction of a chord equals the radius to its midpoint rotated by $90^\circ$, so $\hat s$ makes angle $x+\pi/2$ with the axis $OA$, $\hat\tau$ makes angle $2x+2y+z+\pi/2$, and $\sin\varphi=\sin(x+2y+z)$. (d) The power computation: $q=PA\cdot PC$, where likewise $PC=2\sin z\sin y/\sin(y+w)$ from triangle $PCD$ ($\angle PCD=w$, $\angle PDC=y$), so with $S:=\sin^{2}(y+w)$ and $D:=4\sin x\sin y\sin z\sin w$: $q=D/S$, $\kappa=S/(S-D)$, $\kappa-1=D/(S-D)$, and (v) above gives $h(M)=[2\sin x\sin y\sin w\,\sqrt S-D\cos x]/(S-D)$. Substituting into $(\star)$, both sides carry the common nonzero factor $2\sin(x+2y+z)/(S-D)$ (nonzero: $AB$ not parallel $CD$), and cancelling the positive common factor $2D=8\sin x\sin y\sin z\sin w$ then leaves exactly $\sin(x-z)=\sin(y+w)-2\sin z\cos x$, i.e. $\sin(y+w)=\sin x\cos z+\cos x\sin z=\sin(x+z)$, while $x+z=\pi-(y+w)$ gives $\sin(x+z)=\sin(y+w)$. Hence $(\star)$ holds and $M_1\in\ell$.`,
        String.raw`Second reflection. The configuration with the opposite side pairs exchanged, $(A,B,C,D)\mapsto(C,D,A,B)$, satisfies all the same hypotheses (convex, no opposite parallels, diagonals $CA,BD$ not diameters, and $P$, $M$, $\Omega_1\leftrightarrow\Omega_2$, $Q$ are invariant), and $t\leftrightarrow u$, $x\leftrightarrow z$, $y\leftrightarrow w$, $\varphi\mapsto-\varphi$; repeating Steps 4-5 verbatim yields the mirror equivalence $M_2\in\ell\iff(\kappa-1)(BD^2-AC^2)/2=-2\,AB\,\tilde h(M)\sin\varphi$, and Step 6's substitution $x\leftrightarrow z,\,y\leftrightarrow w$ maps the tautology $\sin(y+w)=\sin(x+z)$ to itself. Hence $M_2\in\ell$, where $M_2$ is the reflection of $M$ in $CD$.`,
        String.raw`Homothety: the conclusion. The foot $X$ of the perpendicular from $M$ to $AB$ is the midpoint of $MM_1$ (a reflection's segment is perpendicular to the mirror and bisected by it), $Y$ is the midpoint of $MM_2$, and $N$ is the midpoint of $MP$. The homothety $\zeta$ with centre $M$ and ratio $\tfrac12$ maps the line $\ell$ (containing $M_1,M_2,P$) to a line $\zeta(\ell)$ containing $X,Y,N$; hence $X,Y,N$ are collinear (coincidences among them are harmless, since a line contains them).`
      ]
    },
    {
      "id": "g21",
      "category": "geo",
      "difficulty": "hard",
      "stars": 4,
      "rating": 7.5,
      "confidence": "high",
      "text": String.raw`Let $ABC$ be an acute scalene triangle with circumcircle $\Gamma$. The tangent to $\Gamma$ at $A$ meets $BC$ at $T_A$, and let $\omega_A$ be the circle through $A$ tangent to $BC$ at $T_A$. Let $P\ne A$ be the second intersection of $\omega_A$ with $\Gamma$. Define $Q$ and $R$ cyclically at $B$ and $C$, and assume $P,Q,R$ are pairwise distinct. Let $Z=PQ\cap AB$, $X=QR\cap BC$, and $Y=RP\cap CA$. Prove that $AX,BY,CZ$ are concurrent.`,
      "why": String.raw`The whole problem rests on a cubic lemma, $BP/CP=(AB/AC)^3$. Invert at $T_A$ with radius $T_AA$. This fixes $\Gamma$ and $A$, swaps $B$ and $C$, and sends $\omega_A$ to the parallel to $BC$ through $A$, which meets $\Gamma$ at a point $P'$ with $BP'=AC$ and $CP'=AB$. The inversion distance formula, together with $T_AB/T_AC=(AB/AC)^2$ from the symmedian, then gives the cube. The three cubic ratios multiply to $1$. For chords of one circle, $BX/XC=(BQ\cdot BR)/(CQ\cdot CR)$, so the Ceva product for $X,Y,Z$ telescopes to $1$ in absolute value. The real work is that Ceva's converse needs signs. Monotonicity of $BU/CU$ along an arc locates $P,Q,R$ and shows the directed product is $+1$, and an inequality excludes the case of three parallel cevians.`,
      "hints": [
        String.raw`Invert about $T_A$ with radius $T_AA$: $\Gamma$ is fixed, $B\leftrightarrow C$, and $\omega_A$ becomes the line through $A$ parallel to $BC$.`,
        String.raw`The inversion's similar triangles give the cubic ratio $BP/CP=(AB/AC)^{3}$; the cyclic product of the three cubics is $1$.`,
        String.raw`Convert to Ceva ratios via Ptolemy and a chord-intersection lemma; fix the signs from the arc positions of $P,Q,R$ (nested Apollonius circles).`,
        String.raw`Directed Ceva leaves one escape — mutual parallelism; rule it out from the explicit ratio formulas.`
      ],
      "steps": [
        String.raw`We first prove a lemma for the construction at $A$. Let $T_A$ be the intersection of the tangent to $\Gamma$ at $A$ with $BC$, and let $P$ be the second point where the circle through $A$ tangent to $BC$ at $T_A$ meets $\Gamma$. Then $$\frac{BP}{CP}=\left(\frac{AB}{AC}\right)^3.$$`,
        String.raw`By the tangent--secant theorem applied to $\Gamma$ at $T_A$, $$T_AA^2=T_AB\cdot T_AC.$$ Consider the inversion $\iota$ centered at $T_A$ with radius $T_AA$. Thus $A$ is fixed and, by the displayed equality, $B$ and $C$ are interchanged.`,
        String.raw`The circle $\omega_A$ passes through the inversion center $T_A$ and is tangent there to $BC$. Under the inversion it therefore becomes a line through the fixed point $A$ parallel to $BC$. Let $P'$ be the inverse image of $P$. Since $A$ is fixed and $B,C$ are interchanged while both $B,C,A$ lie on $\Gamma$, the circumcircle $\Gamma$ is invariant under the inversion. Hence $P'\in\Gamma$ and $$AP'\parallel BC.$$`,
        String.raw`Because $A,B,C,P'$ are concyclic and $AP'\parallel BC$, we have $$\angle BAP'=\angle ABC,$$ so the corresponding chords are equal: $$BP'=AC.$$ Similarly, $$\angle CAP'=\angle ACB,$$ giving $$CP'=AB.$$`,
        String.raw`An inversion with center $O$ and radius $\rho$ sends a point $X\ne O$ to the point $X'$ on ray $OX$ with $OX\cdot OX'=\rho^{2}$. We record the inversion distance-ratio lemma synthetically: for two non-central points $X,Y$ with images $X',Y'$ the triangles $\triangle OXY$ and $\triangle OY'X'$ are similar, so $$X'Y'=\frac{\rho^{2}}{OX\cdot OY}\,XY.$$
Indeed $OX\cdot OX'=OY\cdot OY'=\rho^{2}$ gives $OX/OY'=OY/OX'$, and $\angle XOY=\angle Y'OX'$ because the two sides lie on the same rays from $O$; hence $\triangle OXY\sim\triangle OY'X'$ by SAS, and the ratio of the third sides is the displayed one.
Apply it with center $T_A$, radius $\rho=T_AA$, to the points $B$ and $P$, whose images are $C$ (Step 2) and $P'$: $$CP'=\frac{T_AA^{2}}{T_AB\cdot T_AP}\,BP=\frac{T_AC}{T_AP}\,BP,$$ using $T_AA^{2}=T_AB\cdot T_AC$. Interchanging $B$ and $C$ gives $BP'=\dfrac{T_AB}{T_AP}\,CP$. Dividing the two equations and substituting $BP'=AC$, $CP'=AB$ from Step 4 yields $$\frac{BP}{CP}=\frac{T_AB}{T_AC}\cdot\frac{AB}{AC}.$$`,
        String.raw`The tangent--symmedian lemma gives $$\frac{T_AB}{T_AC}=\frac{AB^2}{AC^2}.$$ Therefore $$\boxed{\frac{BP}{CP}=\left(\frac{AB}{AC}\right)^3}.$$`,
        String.raw`Applying the same lemma cyclically gives $$\frac{CQ}{AQ}=\left(\frac{BC}{BA}\right)^3,\qquad \frac{AR}{BR}=\left(\frac{CA}{CB}\right)^3.$$ Multiplying, $$\boxed{\frac{BP}{CP}\frac{CQ}{AQ}\frac{AR}{BR}=1}.$$`,
        String.raw`We now use the following chord-intersection lemma. If $M,N,U,V$ lie on one circle and the chords $UV$ and $MN$ meet at $X$, then, with *unsigned* chord lengths, $$\frac{MX}{XN}=\frac{MU\cdot MV}{NU\cdot NV}.$$ Indeed, triangles $MUX$ and $NUX$ have the same altitude from $U$ to the line $MN$, so $$\frac{MX}{XN}=\frac{[MUX]}{[NUX]}=\frac{MU\sin\angle MUX}{NU\sin\angle NUX}.$$ Since $X$ lies on the line $UV$, the sines of $\angle MUX$ and $\angle NUX$ are the sines of the inscribed angles $\angle MUV$ and $\angle NUV$; an inscribed angle subtending a chord $c$ of a circle of radius $\mathcal R$ has sine $c/(2\mathcal R)$, so this ratio is $\frac{MV/2\mathcal R}{NV/2\mathcal R}=\frac{MV}{NV}$, giving the formula. Note the lemma is a magnitude statement only: the directed ratio $(x-m)/(n-x)$ is positive iff $X$ lies inside the segment $MN$ while the right side is always positive, so the directed ratio carries the sign $\pm$ of $X$'s interior/exterior position.`,
        String.raw`Apply this lemma to $X=QR\cap BC$, $Y=RP\cap CA$, and $Z=PQ\cap AB$, which is legitimate because all six points $A,B,C,P,Q,R$ lie on $\Gamma$. Taking absolute values of the directed ratios, $$\left|\frac{BX}{XC}\right|=\frac{BQ\cdot BR}{CQ\cdot CR},\qquad \left|\frac{CY}{YA}\right|=\frac{CR\cdot CP}{AR\cdot AP},\qquad \left|\frac{AZ}{ZB}\right|=\frac{AP\cdot AQ}{BP\cdot BQ}.$$`,
        String.raw`Multiplying the three absolute values from Step 9 telescopes to $$\left|\frac{BX}{XC}\frac{CY}{YA}\frac{AZ}{ZB}\right|=\frac{BR\cdot CP\cdot AQ}{CQ\cdot AR\cdot BP}=1,$$ because Step 7 gives the cubic product $BP\cdot CQ\cdot AR=CP\cdot AQ\cdot BR$. It remains to fix the signs; this is a purely order-theoretic discussion on the circumcircle.
(i) $P$ lies on the same side of line $BC$ as $A$: the inversion of Steps 2--5 fixes $A$ and maps $P$ to $P'$ on the line through $A$ parallel to $BC$, and an inversion with center $T_A\in BC$ carries every open half-plane bounded by $BC$ onto itself, since it preserves each ray emanating from $T_A$. Cyclically, $Q$ is on the same side of $CA$ as $B$ and $R$ on the same side of $AB$ as $C$.
(ii) The Apollonius circles of the segment $BC$ are the loci $\{U:BU/CU=r\}$; each is a genuine circle whose diameter is the pair of internal and external division points of $BC$ in the ratio $r$, the two division points being always on the same side of the midpoint, so for $r\ne1$ these circles form a nested coaxal family with limiting points $B$ and $C$. Distinct members are disjoint, and every circle of the family that meets the arc $BAC$ does so in exactly one point: an arc $BAC$ of $\Gamma$ has no point in common with line $BC$ except the limiting points $B,C$ themselves, while two disjoint nested circles separate $\Gamma$ so that the arc, running from the limiting point $B$ (where $r=0$) through $A$ to the limiting point $C$ (where $r=\infty$), must cross each member once and cannot double back without meeting a member twice. Hence $BU/CU$ is a strictly increasing function of the position of $U$ along arc $BAC$; at $U=A$ it equals $BA/CA=AB/AC$.
(iii) Combining (i)--(ii) with the cubic $BP/CP=(AB/AC)^{3}$: $P$ lies on arc $AB$ not containing $C$ (strictly between $B$ and $A$ along $BAC$) if and only if $BP/CP\lt BA/CA$, i.e.\ $(AB/AC)^{3}\lt AB/AC$, i.e.\ $AB\lt AC$. Cyclically, $Q$ lies on the minor arc $BC$ if and only if $BC\lt BA$, and $R$ on the minor arc $CA$ if and only if $CA\lt CB$.
(iv) $X$ lies in the interior of segment $BC$ if and only if the chords $QR$ and $BC$ cross inside $\Gamma$, i.e.\ iff $Q$ and $R$ lie on opposite sides of line $BC$, i.e.\ iff exactly one of $Q,R$ lies on the minor arc $BC$. By (iii) applied to the two relevant memberships this happens exactly when precisely one of $BC\lt BA$, $BC\lt CA$ holds, which is to say that $BC$ is the side of middle length. Thus $X$ is interior iff $BC$ is the middle side, and cyclically for $Y,Z$. A scalene triangle has exactly one middle side, so exactly one of $X,Y,Z$ lies inside its segment while the other two lie outside; by the sign convention of Step 8 this contributes the sign pattern $(+,-,-)$ in some order. Therefore the directed product is positive: $$\boxed{\frac{BX}{XC}\cdot\frac{CY}{YA}\cdot\frac{AZ}{ZB}=+1}.$$
(Note this Step 10 is the equivalence structure: the cubic Step 7 forces the magnitude product $1$, and (i)--(iv) — using acuteness only through the arc-membership dichotomies — force the sign product $+1$.)`,
        String.raw`It remains to rule out the alternative directed Ceva leaves open — the cevians $AX,BY,CZ$ being mutually parallel — and to check the three intersections are finite. For both we need the actual values of $|BX/XC|$ etc. Let $a=BC,b=CA,c=AB$, so $x=a^{2},y=b^{2},z=c^{2}$. Step 9 gives $|BX/XC|=(BQ/CQ)(BR/CR)$, a product of two scale-free ratios, so Ptolemy on $\Gamma$ supplies them with no radius. We use Ptolemy in signed form: for four concyclic points among $A,B,C$ and a point $U$, $$\text{(side opposite the isolated vertex)}\cdot(\text{chord to it})=\left|\,\textstyle\sum_{\pm}\,(\text{opposite side})\cdot(\text{chord})\right|,$$ with the sign chosen by which arc $U$ occupies, as fixed in Step 10(iii) -- the two possible circular orders give the two sides of an absolute value.
For $Q$ (constructed at $B$), Step 7 gives $CQ/AQ=(a/c)^{3}$, i.e.\ $AQ=(c/a)^{3}CQ$. Ptolemy on the four concyclic points $A,B,C,Q$, isolating chord $BQ$ (opposite side $b=CA$), reads $b\cdot BQ=|a\cdot AQ-c\cdot CQ|=|\,(c^{3}/a^{2})-c\,|\,CQ=\dfrac{c\,|a^{2}-c^{2}|}{a^{2}}\,CQ$, so $$\frac{BQ}{CQ}=\frac{c\,|a^{2}-c^{2}|}{a^{2}b}.$$ The absolute value exactly absorbs the two arc cases ($Q$ on minor arc $BC$ when $a\lt c$, on the other arc otherwise) of Step 10(iii).
For $R$ (constructed at $C$), Step 7 gives $AR/BR=(b/a)^{3}$, i.e.\ $AR=(b/a)^{3}BR$. Ptolemy isolating $CR$ (opposite side $c=AB$) reads $c\cdot CR=|a\cdot AR-b\cdot BR|=\left|\dfrac{b^{3}}{a^{2}}-b\right|BR=\dfrac{b\,|a^{2}-b^{2}|}{a^{2}}\,BR$, so $$\frac{BR}{CR}=\frac{a^{2}c}{b\,|a^{2}-b^{2}|}.$$ Multiplying the two scale-free ratios, $$\left|\frac{BX}{XC}\right|=\frac{BQ}{CQ}\cdot\frac{BR}{CR}=\frac{c^{2}\,|a^{2}-c^{2}|}{b^{2}\,|a^{2}-b^{2}|}=\frac{z\,|x-z|}{y\,|x-y|}.$$
Cyclic rotation gives $$\left|\frac{CY}{YA}\right|=\frac{x\,|x-y|}{z\,|y-z|},\qquad \left|\frac{AZ}{ZB}\right|=\frac{y\,|y-z|}{x\,|z-x|},$$ whose product is $1$.`,
        String.raw`Parallel-cevian lemma (intercept theorem / similar triangles only). Suppose $AX\parallel BY\parallel CZ$ with $X\in BC,\;Y\in CA,\;Z\in AB$. Exactly one foot is interior and it lies on the middle side, matching Step 10(iv); take that foot to be $X$ and write $m=|BX/XC|,\;n=|CY/YA|,\;\ell=|AZ/ZB|$, and on line $BC$ let $BX=u$ and $XC=v$ so $BC=u+v$ and $m=u/v$.
From $BY\parallel AX$ the two transversals $CB$ and $CA$ through $C$ give $\triangle CBY\sim\triangle CXA$ (shared angle $\angle C$ and the equal angles made by the parallel lines), hence $\dfrac{CY}{CA}=\dfrac{CB}{CX}=\dfrac{u+v}{v}$. The point $Y$ is then exterior on $CA$, so $n=\left|\dfrac{CY}{YA}\right|=\dfrac{CY}{|CY-CA|}=\dfrac{(u+v)/v}{(u+v)/v-1}=\dfrac{u+v}{u}=1+\dfrac{1}{m}$, i.e.\ $mn=m+1$.
Likewise $AX\parallel CZ$ with transversals $BA,BC$ through $B$ gives $\triangle BAX\sim\triangle BZC$, so $\dfrac{BZ}{BA}=\dfrac{BC}{BX}=\dfrac{u+v}{u}\gt 1$; $Z$ is exterior on $AB$ beyond $A$, and $\ell=\left|\dfrac{AZ}{ZB}\right|=\dfrac{BZ-BA}{BZ}=1-\dfrac{u}{u+v}=\dfrac{1}{1+m}$. The interior-$Y$ and interior-$Z$ configurations are cyclic rotations: interior $Y$ forces $n\ell=n+1$, interior $Z$ forces $\ell m=\ell+1$. Hence mutual parallelism forces the relation $pq=p+1$ for the absolute ratio $p$ of the middle side and that of its cyclic successor.`,
        String.raw`We now show $pq=p+1$ is impossible for the formulas of Step 11, using only ordered-field arguments on positive segment quantities. Suppose $X$ interior, so $BC$ is the middle side by 10(iv): $y\lt x\lt z$ or $z\lt x\lt y$ with $m=|BX/XC|,n=|CY/YA|$. Parallelism needs $mn=m+1$. If $z\lt x\lt y$ then $|x-z|=x-z,|x-y|=y-x,|y-z|=y-z$, so $$m=\frac{z(x-z)}{y(y-x)},\qquad n=\frac{x(y-x)}{z(y-z)},\qquad mn=\frac{x(x-z)}{y(y-z)}.$$ The relation $mn=m+1$ is then equivalent, after clearing the positive denominators $y^{2}(y-x)(y-z)$, to the single strict positivity of $$F:=(y-z)^{2}(y+z-x)-x(x-z)(y-x).$$ The case $y\lt x\lt z$ gives the identical inequality with $y,z$ interchanged, so one claim covers both.`,
        String.raw`Claim: $F=(L-s)^{2}(L+s-x)-x(x-s)(L-x)\gt 0$ for all $0\lt s\lt x\lt L$ (here $s=\min\{y,z\}$, $x=a^{2}$, $L=\max\{y,z\}$). Put $u=L-x\gt 0$ and $v=x-s\gt 0$; then $s=x-v$, $L=x+u$, $L-s=u+v$ and $L-x=u$, so $$F=(u+v)^{2}(u+2v)-x\,v\,u.$$ Expanding the first term, $(u+v)^{2}(u+2v)=u^{3}+4u^{2}v+5uv^{2}+2v^{3}$, and as $0\lt s\lt x$ we have $x=v+s$ with $s\gt 0$, hence $x\gt v$; therefore $$F\gt (u^{3}+4u^{2}v+5uv^{2}+2v^{3})-v^{2}u=u^{3}+4u^{2}v+4uv^{2}+2v^{3}\gt 0.$$ In fact the term $xvu$ is dominated by the expansion even at $x=v$ (giving $u^{3}+2u^{2}v\gt 0$), and $F$ increases with $x$ replaced by its lower bound, so the inequality is strict throughout.`,
        String.raw`The strict inequality of Step 14 gives $mn\gt m+1$ (in the interior-$X$ labelling), so $pq=p+1$ can never hold. By Step 12 the cevians $AX,BY,CZ$ are therefore not mutually parallel. Together with the directed Ceva equality $\dfrac{BX}{XC}\cdot\dfrac{CY}{YA}\cdot\dfrac{AZ}{ZB}=+1$ of Step 10 — whose ratios are finite real numbers because each intersection $X,Y,Z$ exists (Step 16) — directed Ceva now yields the concurrency of $AX,BY,CZ$. (For a triangle, $+1$ is precisely the concurrency sign; the parallel alternative is the only way Ceva's $+1$ does not give a common point, and it has just been excluded.)`,
        String.raw`It remains to check $X,Y,Z$ are finite, i.e.\ no chord $QR,RP,PQ$ is parallel to the opposite side. Suppose $QR\parallel BC$. Parallel chords cut equal arcs between them, so chord $QB=RC$, i.e.\ $BQ=CR$. Using the Step 11 chord ratios together with the cubics, $BQ=CR$ forces $z\,|x-z|=y\,|x-y|$ after cancelling common positive factors, which is exactly the condition that $|BX/XC|=1$ with $X$ at infinity. Squaring and factoring gives $$-(y-z)(x-y-z)(xy+xz-y^{2}-z^{2})=0.$$ Scalene kills $y=z$; acuteness kills $x=y+z$ (a right angle would give $a^{2}=b^{2}+c^{2}$); so it would force $x=\dfrac{y^{2}+z^{2}}{y+z}$, a number lying strictly between $y$ and $z$. But then $a^{2}$ is the middle square, i.e.\ $BC$ the middle side, and by Step 10(iv) $X$ would be the interior foot with directed ratio $+1$, contradicting $QR\parallel BC$ (which makes the directed ratio $-1$). Hence $QR\not\parallel BC$; the two cyclic cases $RP\not\parallel CA$ and $PQ\not\parallel AB$ are identical. Thus $X,Y,Z$ are three well-defined finite points.`,
        String.raw`Conclusion. The directed Ceva product equals $+1$ (Step 10), the intersections $X,Y,Z$ are finite (Step 16), and the cevians are not mutually parallel (Steps 12--15); the only non-concurrent realisation of product $+1$ being mutual parallelism, directed Ceva gives that $AX,BY,CZ$ are concurrent. $\blacksquare$`
      ]
    },
    {
      "id": "g22",
      "category": "geo",
      "difficulty": "hard",
      "stars": 4,
      "rating": 7.5,
      "confidence": "high",
      "text": String.raw`Let $ABCD$ be a convex cyclic quadrilateral with circumcenter $O$. Assume that all named intersections below are finite. Let $P=AB\cap CD$ and $Q=AD\cap BC$. Let $E$ and $F$ be the midpoints of $AB$ and $CD$, respectively. Let $S=EF\cap AD$ and $T=EF\cap BC$. Prove that the circumcircles of $\triangle PEF$ and $\triangle QST$ are tangent.`,
      "why": String.raw`The point of tangency is the Miquel point $U$ of the complete quadrilateral. For a cyclic quadrilateral, $U$ is the inverse of $AC\cap BD$ and therefore the foot of the perpendicular from $O$ to $PQ$. Since $OE\perp AB$ and $OF\perp CD$, the points $E,F,U$ all lie on the circle with diameter $OP$, so $U\in(PEF)$. Next, $U$ is the centre of the spiral similarity taking $A\mapsto B$ and $D\mapsto C$. Menelaus shows that $S$ and $T$ divide $AD$ and $BC$ in the same ratio, so this similarity sends $S\mapsto T$, which puts $Q,S,T,U$ on one circle. Both circles pass through $U$ and their chords $UP$ and $UQ$ lie on one line, so a tangent-chord comparison through the concyclic points $A,E,S,U$ shows that their tangents at $U$ coincide. Recognising the Miquel point is the whole problem.`,
      "hints": [
        String.raw`Let $U$ be the Miquel point of the four sidelines; Brocard-Miquel makes it the inverse of $AC\cap BD$, so $U\in PQ$ and $OU\perp PQ$.`,
        String.raw`Thales on the diameter $PO$ then puts $U$ on $(PEF)$.`,
        String.raw`$U$ is the centre of the spiral similarity $AD\to BC$; two directed Menelaus applications give $AS:SD=BT:TC$, so $S\mapsto T$.`,
        String.raw`Then $Q,S,T,U$ and $A,E,S,U$ are concyclic; finish with tangent-chord angles at $U$.`
      ],
      "steps": [
        String.raw`Throughout, all angles between lines are directed modulo $\pi$, and for collinear points written in order on a chosen direction of their line, $(XY/YZ)$ denotes the ratio of directed segments; a line meets the three sidelines of a triangle in collinear points if and only if the product of the three such ratios equals $-1$ (Menelaus, directed form). Let $\ell_1=AB$, $\ell_2=BC$, $\ell_3=CD$, $\ell_4=DA$. The four triangles of the complete quadrilateral are $QAB$ (lines $\ell_1,\ell_2,\ell_4$), $QDC$ (lines $\ell_2,\ell_3,\ell_4$), $PAD$ (lines $\ell_1,\ell_3,\ell_4$) and $PBC$ (lines $\ell_1,\ell_2,\ell_3$). Miquel's theorem: the circles $(QAB)$ and $(QDC)$ are distinct (a common circle would be $\omega$, forcing $Q\in\omega$, impossible since $Q$ is exterior to the circle as it lies on the chord-lines $AD$, $BC$ outside the chords) and meet again at a point $U$: tangency at $Q$ would, by the tangent--chord theorem on the chord line $\ell_4$, force the lines $\ell_1,\ell_3$ to make equal directed angles with $\ell_2$, i.e. $AB\parallel CD$, contrary to the finiteness of $P$. For this second intersection: $\angle(UA,UD)=\angle(UA,UQ)+\angle(UQ,UD)=\angle(BA,BQ)+\angle(CQ,CD)=\angle(\ell_1,\ell_2)+\angle(\ell_2,\ell_3)=\angle(PA,PD)$, the middle equalities being inscribed angles on chords $QA$ and $QD$ in $(QABU)$ and $(QDCU)$; hence $A,D,P,U$ are concyclic. Similarly $\angle(UB,UC)=\angle(UB,UA)+\angle(UA,UD)+\angle(UD,UC)=\angle(\ell_2,\ell_4)+\angle(\ell_1,\ell_3)+\angle(\ell_4,\ell_2)=\angle(PB,PC)$, so $B,C,P,U$ are concyclic: the four circles share $U$. Brocard's theorem: the diagonal triangle $PQR$, with $R=AC\cap BD$, is self-polar with respect to $\omega$; in particular the polar of $R$ is the line $PQ$ (the pole of chord $AC$ is $T_{AC}$, the intersection of the tangents at $A$ and $C$, and likewise $T_{BD}$; $R=AC\cap BD$ forces its polar to be the line $T_{AC}T_{BD}$ by La Hire, and degenerate Pascal on $A\,A\,B\,C\,C\,D$ and on $D\,D\,C\,B\,B\,A$ shows $P,Q$ both lie on that line, since the three pairs of opposite sides of the first hexagon meet at $P$, $Q$, $T_{AC}$ and of the second at $P$, $Q$, $T_{BD}$; the other two polars are obtained by permuting the roles of $P,Q,R$). Brocard--Miquel theorem: $U$ is the inverse of $R$ in $\omega$. Since the inverse of a point is the foot of the perpendicular from $O$ to its polar (the pole--polar distance relation $OF\cdot OR=\rho^2$), $U\in PQ$ and $OU\perp PQ$.`,
        String.raw`Since $E$ is the midpoint of the chord $AB$, the radius $OE$ is perpendicular to $AB$; as $P,E,A,B$ are collinear, $\angle PEO=90^\circ$. Since $F$ is the midpoint of the chord $CD$, $OF\perp CD$, and as $P,F,C,D$ are collinear, $\angle PFO=90^\circ$. By Thales' theorem $E$ and $F$ lie on the circle $\Omega_0$ with diameter $PO$.`,
        String.raw`Because $P,U,Q$ are collinear and $OU\perp PQ$, the angle $\angle PUO=90^\circ$, so $U\in\Omega_0$ as well. Hence $P,E,F,U$ are concyclic; write $\Omega_1$ for the circle $(PEF)$, which contains $U$. The three points $P,E,F$ are not collinear: their line would meet $\ell_1$ at both $E$ and $P$, so $P=E$, impossible since $P$ lies outside the chord $AB$ while $E$ is its midpoint.`,
        String.raw`Claim: $U$ is the centre of two direct spiral similarities. In $(ADPU)$ the angles $\angle UAD$ and $\angle UPD$ subtend chord $UD$, and $\angle UDA,\ \angle UPA$ subtend chord $UA$; in $(BCPU)$ the angles $\angle UBC,\ \angle UPC$ subtend $UC$, and $\angle UCB,\ \angle UPB$ subtend $UB$; since $D,P,C$ are collinear and $A,P,B$ are collinear, $\angle UPD=\angle UPC$ and $\angle UPA=\angle UPB$, so $\angle UAD=\angle UBC$ and $\angle UDA=\angle UCB$: $\triangle UAD\sim\triangle UBC$ (AA), giving $UA/UB=UD/UC$ and, subtracting the equal apex angles, $\angle AUB=\angle DUC$. By the Miquel pivot theorem -- the Miquel point of a complete quadrilateral is the centre of the direct spiral similarity carrying the segment cut on one sideline by two others to the segment cut on the other, here on $\ell_4$ to $\ell_2$ with $A\mapsto B$, $D\mapsto C$, the similarity being direct as the angle chase just shows, with matching cyclic order of the equal angles -- there is a direct similarity $\sigma_1$, fixing $U$, composed of a rotation by an angle $\rho_1$ about $U$ and a homothety centred at $U$, with $\sigma_1(A)=B$, $\sigma_1(D)=C$; in particular $\sigma_1$ is affine and maps the line $AD$ onto the line $BC$. The same argument on $(ABQU)$ and $(CDQU)$ gives $\triangle UAB\sim\triangle UDC$, hence a direct similarity $\sigma_2$ fixing $U$ with $\sigma_2(A)=D$, $\sigma_2(B)=C$; an affine map preserves midpoints, so $\sigma_2(E)=F$.`,
        String.raw`Claim: $\dfrac{AS}{SD}=\dfrac{BT}{TC}$ as directed ratios. Introduce directed coordinates on the two secants through $P$: on $\ell_1$ put $P=0$, $A=a$, $B=b$, and on $\ell_3$ put $P=0$, $C=c$, $D=d$; then $E=\frac{a+b}{2}$ and $F=\frac{c+d}{2}$ (affine parameters along a single line, $a\ne b$, $c\ne d$). The transversal $EF$ meets the sidelines of triangle $PAD$ at $E\in PA$, $S\in AD$, $F\in DP$; directed Menelaus gives $\dfrac{AS}{SD}\cdot\dfrac{DF}{FP}\cdot\dfrac{PE}{EA}=-1$, and from the coordinates $\dfrac{PE}{EA}=\dfrac{a+b}{a-b}$ and $\dfrac{DF}{FP}=\dfrac{d-c}{c+d}$, so $\dfrac{AS}{SD}=\dfrac{(a-b)(c+d)}{(a+b)(c-d)}$. The transversal $EF$ meets the sidelines of triangle $PBC$ at $E\in PB$, $T\in BC$, $F\in PC$; directed Menelaus gives $\dfrac{BT}{TC}\cdot\dfrac{CF}{FP}\cdot\dfrac{PE}{EB}=-1$ with $\dfrac{PE}{EB}=\dfrac{a+b}{b-a}$ and $\dfrac{CF}{FP}=\dfrac{c-d}{c+d}$, so $\dfrac{BT}{TC}=\dfrac{(a-b)(c+d)}{(a+b)(c-d)}$. The two values coincide (here $a+b\ne0$ and $c+d\ne0$ since $E,F\ne P$).`,
        String.raw`The direct similarity $\sigma_1$ is affine with $A\mapsto B$ and $D\mapsto C$, so it sends the point dividing $AD$ in the directed ratio $\dfrac{AS}{SD}$ to the point dividing $BC$ in the same directed ratio (an affine map preserves directed division ratios on a line: with $S=\frac{SD\cdot A+AS\cdot D}{AD}$ one computes $\sigma_1(S)=\frac{SD\cdot B+AS\cdot C}{AD}$, so $B\sigma_1(S):\sigma_1(S)C=AS:SD$). By Step 5 that point is $T$, and a point of a line with a given directed division ratio is unique: $\sigma_1(S)=T$. The circle $\Omega_2$ we next construct is genuine: $Q\notin EF$, for otherwise $S=EF\cap AD=Q=T$, so $Q,S,T$ would be collinear, contradicting the statement's provision that the circumcircle of $\triangle QST$ exists (three collinear points have no circumcircle).`,
        String.raw`Claim: $Q,S,T,U$ are concyclic. The similarity $\sigma_1$ fixes $U$ and sends $S$ to $T$, so the directed angle $\angle SUT$ from ray $US$ to ray $UT$ equals the rotation angle $\rho_1$ of $\sigma_1$; and $\sigma_1$ carries the line $AD$ onto the line $BC$, so the angle from $AD$ to $BC$ equals $\rho_1$ modulo $\pi$ as well. As $S\in AD$, $T\in BC$ and $Q=AD\cap BC$, the angle $\angle SQT$ from line $QS=AD$ to line $QT=BC$ is that same angle $\rho_1$ modulo $\pi$. Hence $\angle SUT=\angle SQT$ modulo $\pi$: $U$ and $Q$ see the segment $ST$ under equal directed angles, so $Q,S,T,U$ are concyclic. Denote their circle by $\Omega_2$; it is genuine, since $Q,S,T$ are non-collinear and $U$ lies exterior to $\omega$ as the inverse of the interior point $R=AC\cap BD$, so $U\notin\{Q,S,T\}$.`,
        String.raw`Claim: $A,E,S,U$ are concyclic. Write $\sigma_2$ as rotation by $\rho_2$ about $U$ followed by homothety of ratio $k$: then ray $UD$ = ray $UA$ rotated by $\rho_2$, ray $UF$ = ray $UE$ rotated by $\rho_2$, and $UD=k\,UA$, $UF=k\,UE$. Let $\nu$ be the direct similarity consisting of the rotation about $U$ through the angle from ray $UA$ to ray $UE$ followed by the homothety centred at $U$ of ratio $UE/UA$. Then $\nu(A)=E$ by construction; the angle from ray $UD$ to its $\nu$-image equals the rotation of $\nu$, which is the angle from $UD$ to $UF$, while the $\nu$-image distance is $(UE/UA)\cdot UD=(UE/UA)\cdot k\,UA=k\,UE=UF$, so $\nu(D)=F$. A direct similarity rotates every line by its rotation angle, so the angle from line $AD$ to line $EF=\nu(AD)$ equals the angle $\angle AUE$ from ray $UA$ to ray $UE$; and $S=AD\cap EF$ gives $\angle(AD,EF)=\angle(SA,SE)$ with the rays $SA\subset AD$, $SE\subset EF$. Thus $\angle ASE=\angle AUE$ modulo $\pi$: $S$ and $U$ see segment $AE$ under equal directed angles, so $A,E,S,U$ are concyclic.`,
        String.raw`Tangency at $U$. The points $P,U,Q$ are collinear, so the chord-lines $UP$ of $\Omega_1$ and $UQ$ of $\Omega_2$ coincide. By the tangent--chord (alternate segment) theorem, the angle between the tangent to $\Omega_1$ at $U$ and the chord $UP$ equals the inscribed angle $\angle UEP$; as $A,E,P$ are collinear this is the line-angle $\angle(EU,EA)$. On $\Omega_2$ the tangent--chord theorem gives the angle between the tangent at $U$ and the chord $UQ$ as the inscribed angle $\angle USQ$; as $A,S,Q$ are collinear this is the line-angle $\angle(SU,SA)$. By the circle $AESU$ of Step 8, $\angle(SU,SA)=\angle(EU,EA)$: inscribed angles at $S$ and $E$ subtending the chord $UA$, equal modulo $\pi$ in the directed form of the inscribed-angle theorem. Hence the two tangent lines make equal directed angles with the common line $UP=UQ$ at $U$: they coincide.`,
        String.raw`Therefore the circumcircles $\Omega_1=(PEF)$ and $\Omega_2=(QST)$ share the point $U$ with a common tangent there, i.e. they are tangent at the Miquel point $U$. $\blacksquare$`
      ]
    },
    {
      "id": "g23",
      "category": "geo",
      "difficulty": "hard",
      "stars": 4,
      "rating": 8,
      "confidence": "high",
      "text": String.raw`Let $ABC$ be a scalene triangle with orthocenter $H$, incenter $I$ and circumcenter $O$. The incircle touches sides $BC$, $CA$, $AB$ at $D$, $E$, $F$ respectively. Let $U$, $V$, $W$ be the reflections of $C$, $A$, $B$ in the points $D$, $E$, $F$ respectively, and let $U'$, $V'$, $W'$ be the reflections of $B$, $C$, $A$ in the points $D$, $E$, $F$ respectively. Prove that the area of triangle $HIO$ equals the area of triangle $ABC$ if and only if the points $U$, $V$, $W$ are collinear or the points $U'$, $V'$, $W'$ are collinear.`,
      "why": String.raw`Both sides of the equivalence turn out to be the same cubic in the tangent lengths $x=s-a$, $y=s-b$, $z=s-c$. Each reflected point has a simple position on its side: $U$ sits at $y-z$ from $B$ and $U'$ at $2y$. Menelaus therefore gives that $U,V,W$ are collinear iff $(x-y)(y-z)(z-x)=-8xyz$, and $U',V',W'$ are collinear iff it equals $+8xyz$. The area side is the computational core. Writing $O$, $H$, $I$ in areal coordinates from their distances to the sides ($R\cos A$, $2R\cos B\cos C$, $r$) and evaluating a determinant with standard trigonometric identities gives $[HIO]/[ABC]=|(x-y)(y-z)(z-x)|/(8xyz)$. The equation $[HIO]=[ABC]$ is the absolute value of the cubic, and its two signs are precisely the two collinearities. This is a computational problem, and an attractive formula for $[HIO]$ is the real takeaway.`,
      "hints": [
        String.raw`Read $U,V,W$ and $U',V',W'$ as directed coordinates on the sidelines in the tangent lengths $x,y,z$; Menelaus turns each collinearity into a cubic equation.`,
        String.raw`For the area, the signed distances $R\cos A$, $2R\cos B\cos C$, $r$ of $O$, $H$, $I$ from the sidelines give areal coordinates, and the areal area lemma evaluates $[HIO]/[ABC]$.`,
        String.raw`The determinant collapses by the cosine-difference factorization to the same cubic $|(x-y)(y-z)(z-x)|/(8xyz)$.`
      ],
      "steps": [
        String.raw`Setup. Let $a=BC$, $b=CA$, $c=AB$, let $2s=a+b+c$, and put $x=s-a$, $y=s-b$, $z=s-c$; then $a=y+z$, $b=z+x$, $c=x+y$, and $x,y,z\gt0$ are pairwise distinct because $ABC$ is scalene. Equal tangent lengths from each vertex to the incircle give $BD=BF=y$, $CD=CE=z$, $AE=AF=x$.`,
        String.raw`Directed readings of $U,V,W$. Put a directed coordinate on each sideline, oriented $B\to C$ on $BC$, $C\to A$ on $CA$, $A\to B$ on $AB$, with origin at the first-named vertex. On $BC$ the point $D$ sits at $y$ and $C$ at $y+z$, so the reflection $U$ of $C$ in $D$ sits at $2y-(y+z)=y-z$, and $BU/UC=(y-z)/((y+z)-(y-z))=(y-z)/(2z)$. Cyclically, on $CA$ the point $V$, the reflection of $A$ in $E$, sits at $2z-(z+x)=z-x$ with $CV/VA=(z-x)/(2x)$, and on $AB$ the point $W$, the reflection of $B$ in $F$, sits at $x-y$ with $AW/WB=(x-y)/(2y)$. All denominators $2x,2y,2z$ are nonzero; no ratio is singular (e.g. $U=C$ would need $z=0$); and $U,V,W$ are distinct non-vertices (e.g. $U=B$ would force $y=z$, i.e. $b=c$, and $V=C$ would force $z=x$, i.e. $c=a$), so the directed Menelaus ratios are well defined.`,
        String.raw`First Menelaus equation. By directed Menelaus together with its converse, $U,V,W$ are collinear if and only if the product of the three directed ratios equals $-1$, i.e. $\dfrac{(y-z)(z-x)(x-y)}{8xyz}=-1$. Since $(y-z)(z-x)(x-y)=(x-y)(y-z)(z-x)$, with $P:=(x-y)(y-z)(z-x)$ this reads $$U,V,W\ \text{collinear}\iff P=-8xyz.$$`,
        String.raw`Second Menelaus equation. The reflection $U'$ of $B$ in $D$ sits at $2y$ on $BC$, so $BU'/U'C=2y/((y+z)-2y)=2y/(z-y)$; cyclically $CV'/V'A=2z/(x-z)$ and $AW'/W'B=2x/(y-x)$ (all denominators nonzero since $x,y,z$ are distinct). Menelaus and its converse give $U',V',W'$ collinear if and only if $\dfrac{8xyz}{(z-y)(x-z)(y-x)}=-1$; because $(z-y)(x-z)(y-x)=-(x-y)(y-z)(z-x)=-P$, $$U',V',W'\ \text{collinear}\iff P=+8xyz.$$ The two equations cannot hold at once: $P=8xyz=-8xyz$ would force $xyz=0$.`,
        String.raw`Signed distance of $O$ from a sideline. Let $M$ be the midpoint of $BC$, and take signed distances positive on the side of $A$. The central angle $\angle BOC=2A$ is bisected by $OM$, and $\triangle OMB$ is right at $M$ with $OB=R$, so $OM=R\cos A$; when $A$ is obtuse, $O$ and $A$ lie on opposite sides of $BC$ and $\cos A\lt0$, so the signed distance from $O$ to $BC$ equals $R\cos A$ in every case. Cyclically, the signed distances from $O$ to $CA$ and $AB$ are $R\cos B$ and $R\cos C$.`,
        String.raw`Signed distance of $H$ from a sideline. Let $P$ be the foot of the altitude from $A$, so $HP$ is the signed distance from $H$ to $BC$; if $C=90^\circ$ then $H=C$ and $HP=0=2R\cos B\cos C$. Otherwise $BH$ is the line of the altitude from $B$: if $E$ is the foot from $B$ to $AC$, the right triangle $BEC$ gives $\angle EBC=90^\circ-C$, and the right triangle $BPH$ (right angle at $P$) gives, in directed lengths along $BC$, $$HP=BP\cdot\tan(90^\circ-C)=(c\cos B)\cdot\frac{\cos C}{\sin C}=2R\cos B\cos C,$$ since the directed projection is $BP=c\cos B$ and $c=2R\sin C$. The directed reading covers the obtuse positions of $H$; cyclically the signed distances from $H$ to $CA$, $AB$ are $2R\cos C\cos A$ and $2R\cos A\cos B$. The incenter sits at distance $r$ from each sideline, the radius to the tangent point being perpendicular to the side.`,
        String.raw`Signed distances become normalized areal coordinates. A point $X$ at signed distance $d$ from $BC$ has normalized areal coordinate $[XBC]/[ABC]=d/h_a$, because the triangles $XBC$ and $ABC$ share the base $BC$ and their altitudes are the distances to it. With $h_a=c\sin B=2R\sin B\sin C$, $a=2R\sin A$, $\Delta=\tfrac12(a+b+c)r=rs$, and $\Sigma_1:=\sin A+\sin B+\sin C=s/R$, the first coordinates of the three centers are $$\alpha_I=\frac{r}{h_a}=\frac{a}{2s}=\frac{\sin A}{\Sigma_1},\qquad \alpha_O=\frac{R\cos A}{h_a}=\frac{\sin 2A}{4\Pi},\qquad \alpha_H=\frac{2R\cos B\cos C}{h_a}=\frac{\sin A\cos B\cos C}{\Pi},$$ where $\Pi:=\sin A\sin B\sin C$; for $\alpha_H$ the row sums to $1$ by $\sin A\cos B\cos C+\sin B\cos C\cos A+\sin C\cos A\cos B=\Pi$, which follows by dividing $\tan A+\tan B+\tan C=\tan A\tan B\tan C$ (true as $A+B+C=\pi$) by the cosine product, and which is checked directly when one angle is right (e.g. $C=90^\circ$: both sides equal $\sin A\sin B$). The second and third coordinates are the cyclic analogues, so the full rows $p,q,t$ of $I,O,H$ each sum to $1$.`,
        String.raw`Areal area lemma. If three points have normalized areal rows $p,q,t$, then $[PQR]/[ABC]=|\det[p;q;t]|$. Proof: the signed area is affine-linear in each vertex when the other two are fixed (moving a vertex parallel to a line preserves area ratios), so the map $(p,q,t)\mapsto[PQR]/[ABC]$ is alternating trilinear on rows summing to $1$, and every such row is an affine combination of the vertex rows $(1,0,0),(0,1,0),(0,0,1)$; an alternating trilinear map is a scalar multiple of the determinant, and the scalar is $1$ at the vertices. This is the classical area-coordinates reading of same-base area ratios, the same bookkeeping device as Menelaus.`,
        String.raw`Assembly of the determinant (classical-metric bookkeeping). By the last two steps, $$\frac{[HIO]}{[ABC]}=\frac{\left|\det\begin{pmatrix}\sin A&\sin B&\sin C\\ \sin2A&\sin2B&\sin2C\\ \sin A\cos B\cos C&\sin B\cos C\cos A&\sin C\cos A\cos B\end{pmatrix}\right|}{(s/R)\cdot4\Pi\cdot\Pi}.$$ Factoring $\sin A,\sin B,\sin C$ from the three columns and $2$ from the middle row, then applying the alternant identity $\det[(1,1,1),(u,v,w),(vw,wu,uv)]=(u-v)(v-w)(w-u)$ (two column differences give $vw-uv$, $wu-uw$; expand along the first row) with $u=\cos A$, $v=\cos B$, $w=\cos C$, the numerator becomes $2\Pi\,(\cos A-\cos B)(\cos B-\cos C)(\cos C-\cos A)$. Each cosine difference factorizes by the Law of Cosines: $$\cos A-\cos B=\frac{a(b^2+c^2-a^2)-b(c^2+a^2-b^2)}{2abc}=\frac{(a-b)(a+b+c)(c-a-b)}{2abc}=\frac{2sz\,(x-y)}{abc},$$ since $a-b=y-x$, $a+b+c=2s$, $c-a-b=-2z$; the other two differences are cyclic. So the product of differences equals $8s^3xyz\,P/(abc)^3$. Dividing by $(s/R)\cdot4\Pi\cdot\Pi$ and substituting the classical identities $\Pi=abc/8R^3$, $abc=4R\Delta=4Rrs$ and $r^2s=xyz$ (Heron's theorem $\Delta^2=sxyz$ with $\Delta=rs$), the whole expression collapses to $$\left|\frac{P}{8xyz}\right|,$$ all steps being plain division by the strictly positive quantities $x,y,z,s,r,R,\Pi$.`,
        String.raw`Area criterion. Therefore $$\frac{[HIO]}{[ABC]}=\frac{|(x-y)(y-z)(z-x)|}{8xyz}=\frac{|(a-b)(b-c)(c-a)|}{8(s-a)(s-b)(s-c)},$$ and because only strictly positive quantities were divided by, and the right-angle rows remain valid ($C=90^\circ$ gives $\alpha_H=(0,0,1)$, i.e. $H=C$), the formula covers acute, right and obtuse triangles alike.`,
        String.raw`Closing the equivalence. From Step 10, $[HIO]=[ABC]$ holds if and only if $|P|=8xyz$, i.e. if and only if $P=-8xyz$ or $P=+8xyz$. By Steps 3 and 4 these two equations are precisely the collinearity of $U,V,W$ and the collinearity of $U',V',W'$, and Step 4 showed they are mutually exclusive. Hence, in both directions, $$[HIO]=[ABC]\iff U,V,W\ \text{are collinear or}\ U',V',W'\ \text{are collinear}.\qquad\blacksquare$$`
      ]
    },
    {
      "id": "g24",
      "category": "geo",
      "difficulty": "challenging",
      "stars": 5,
      "rating": 8.5,
      "confidence": "high",
      "text": String.raw`Let $ABC$ be a scalene triangle with incenter $I$. Let $P$ be an interior point such that $\angle PBA=\angle ICB$ and $\angle PCA=\angle IBA$. Let $B'=PB\cap AI$ and $C'=PC\cap AI$. Through $B'$ draw the line parallel to $AB$, meeting $BI$ at $X$; through $C'$ draw the line parallel to $AC$, meeting $CI$ at $Y$. Prove that the circumcircle of triangle $IXY$ and the circumcircle of triangle $BPX$ are tangent at $X$.`,
      "why": String.raw`The angle conditions place $P$ on the circle $(BIC)$, since $\angle BPC=180^\circ-\tfrac B2-\tfrac C2=\angle BIC$. The parallels then produce simple lengths: $\triangle ABB'\sim\triangle ACI$ gives $BX=\frac cb\,BI$, and symmetrically $CY=\frac bc\,CI$. The decisive idea is a hidden fifth point. Let $U=BP\cap CI$ and $V=CP\cap BI$. The sine rule, using $\angle BPC=\angle BIC$, gives $BV\cdot BX=BU\cdot BP$ and $CU\cdot CY=CV\cdot CP$, so $X,Y,P,U,V$ all lie on one circle. Tangency at $X$ is then a single inscribed angle in that circle: by tangent-chord, both tangents at $X$ make the angle $\angle(PX,PU)=\angle(YX,YU)$ with line $BI$. The scalene hypothesis keeps $P$ off the bisectors, so that the five points are genuinely distinct.`,
      "hints": [
        String.raw`The similar triangles $ABB'\sim ACI$ give $BX=\frac cb\,BI$; likewise $CY=\frac bc\,CI$.`,
        String.raw`The angle conditions put $P$ on the circle $(BIC)$.`,
        String.raw`With $U=BP\cap CI$ and $V=CP\cap BI$, the sine rule gives $BV\cdot BX=BU\cdot BP$ and $CU\cdot CY=CV\cdot CP$: $X,Y,P,U,V$ concyclic.`,
        String.raw`Tangency at $X$ reduces, by tangent-chord, to one inscribed-angle equality in $(XYPU)$.`
      ],
      "steps": [
        String.raw`Conventions. Let $\alpha,\beta,\gamma=A/2,B/2,C/2$, so $\alpha+\beta+\gamma=90^\circ$ and $b\ne c$ gives $\beta\ne\gamma$. The hypotheses read $\angle PBA=\gamma$ and $\angle PCA=\beta$. Since $P$ is interior, $\angle PBC=2\beta-\gamma$ and $\angle PCB=2\gamma-\beta$. Put $U=BP\cap CI$ and $V=CP\cap BI$. The claim '$X,Y,P,U,V$ are concyclic' is symmetric under $B\leftrightarrow C$ (which swaps $X\leftrightarrow Y$ and $U\leftrightarrow V$), so in Steps 4-6 we assume $\beta\gt \gamma$, i.e. $b\gt c$. Lengths on a line are signed in the power-of-a-point statements. $\angle(\ell,m)$ denotes a directed angle modulo $180^\circ$.`,
        String.raw`$P$ lies on $\Gamma=(BIC)$. $\angle BPC=180^\circ-(2\beta-\gamma)-(2\gamma-\beta)=180^\circ-\beta-\gamma=\angle BIC$. $P$ and $I$ are on the same side of $BC$, so $P\in\Gamma$. Also $P\notin BI$: otherwise $\angle PBA=\beta$, so $\gamma=\beta$, contradicting scalene. Likewise $P\notin CI$ (otherwise $\angle PCA=\gamma$, so $\beta=\gamma$). In particular $P\ne I$.`,
        String.raw`The points $X$ and $Y$. $P$ is interior, so the cevians $BP$ and $AI$ meet at $B'$ inside the triangle, on ray $AI$ and on ray $BP$. In triangles $ABB'$ and $ACI$: $\angle BAB'=\angle CAI=\alpha$ and $\angle ABB'=\angle ABP=\gamma=\angle ACI$. So $ABB'\sim ACI$ (with $A\to A$, $B\to C$, $B'\to I$) and $\frac{AB'}{AI}=\frac{AB}{AC}=\frac cb$. Hence $B'=A+\frac cb(I-A)$. The homothety $h$ centred at $I$ with $h(A)=B'$ has ratio $\frac{b-c}{b}$ (as a signed ratio, since $\vec{IB'}=\frac{b-c}{b}\vec{IA}$). It maps line $AB$ to the parallel line through $B'$, and it maps line $BI$ to itself. So $h(B)$ is the intersection of that parallel with $BI$, i.e. $X=h(B)$, and $\overrightarrow{IX}=\frac{b-c}b\overrightarrow{IB}$. Therefore $$\overrightarrow{BX}=\overrightarrow{IX}-\overrightarrow{IB}=-\tfrac cb\overrightarrow{IB}=\tfrac cb\overrightarrow{BI}.$$ Symmetrically, $C'=PC\cap AI$, $\angle CAC'=\alpha=\angle BAI$ and $\angle ACC'=\beta=\angle ABI$ give $ACC'\sim ABI$, $\frac{AC'}{AI}=\frac bc$, and the homothety at $I$ of ratio $\frac{c-b}{c}$ sends $C$ to $Y$, so $$\overrightarrow{CY}=\tfrac bc\overrightarrow{CI}.$$ Consequently $X\ne I$, $Y\ne I$, $X\ne B$, $X\ne Y$ (a common point of lines $BI$ and $CI$ is $I$), so the circles $(IXY)$ and $(BPX)$ both exist ($P\notin BI$).`,
        String.raw`The points $U,V$ and their positions (assume $\beta\gt \gamma$). (i) $\angle PCB=2\gamma-\beta\lt \gamma=\angle ICB$, so ray $CP$ lies inside angle $BCI$ and meets segment $BI$ at $V$. $V$ is an interior point of chord $BI$ of $\Gamma$, so it is inside $\Gamma$ and strictly between $C$ and $P$. (ii) $\angle PBC=2\beta-\gamma\gt \beta=\angle IBC$ and $\angle PBA=\gamma\lt \beta$, so ray $BP$ lies between rays $BI$ and $BA$ and meets line $CI$ at a point $U$ beyond $I$ (on ray $CI$, with $CU\gt CI$). $U$ is outside $\Gamma$, and the chord $BP$ of $\Gamma$ lies inside it, so $P$ is strictly between $B$ and $U$. (iii) By Step 3, $BX=\frac cb BI\lt BI$, so $X$ is on segment $BI$ in the same direction from $B$ as $V$; and $CY=\frac bc CI\gt CI$, so $Y$ is on ray $CI$ beyond $I$, in the same direction from $C$ as $U$. Angles: in triangle $BCU$, $\angle UBC=2\beta-\gamma$ and $\angle BCU=\gamma$, so $\angle BUC=180^\circ-2\beta$ and $\sin\angle BUC=\sin B$. In triangle $BCV$, $\angle VCB=2\gamma-\beta$ and $\angle CBV=\beta$, so $\angle BVC=180^\circ-2\gamma$ and $\sin\angle BVC=\sin C$.`,
        String.raw`Power of $B$: $BV\cdot BX=BU\cdot BP$. Let $\theta=\angle BPC=\angle BIC$. In triangle $BPV$, $\angle BPV=\theta$ (as $V$ lies on segment $PC$) and $\angle BVP=180^\circ-\angle BVC$, whose sine is $\sin C$. The law of sines gives $BV=\frac{BP\sin\theta}{\sin C}$. In triangle $BIU$, $\angle BIU=180^\circ-\theta$ (as $U$ lies beyond $I$ on ray $CI$) and $\angle BUI=\angle BUC$ has sine $\sin B$. The law of sines gives $BU=\frac{BI\sin\theta}{\sin B}$. Dividing, $$\frac{BV}{BU}=\frac{BP}{BI}\cdot\frac{\sin B}{\sin C}=\frac{BP}{BI}\cdot\frac bc,$$ so $BV\cdot\frac cb BI=BU\cdot BP$, i.e. $BV\cdot BX=BU\cdot BP$.`,
        String.raw`Power of $C$ and the common circle. In triangle $CPU$, $\angle CPU=180^\circ-\theta$ (as $P$ lies between $B$ and $U$) and $\angle CUP=\angle BUC$ has sine $\sin B$, so $CU=\frac{CP\sin\theta}{\sin B}$. In triangle $CIV$, $\angle CIV=\angle CIB=\theta$ (as $V$ lies on segment $BI$) and $\angle CVI=180^\circ-\angle BVC$ has sine $\sin C$, so $CV=\frac{CI\sin\theta}{\sin C}$. Dividing, $\frac{CU}{CV}=\frac{CP}{CI}\cdot\frac cb$, i.e. $CU\cdot\frac bc CI=CV\cdot CP$, so $$CU\cdot CY=CV\cdot CP.$$ The points $U,V,P$ are not collinear ($V\in CP$, $V\ne P$ since $P\notin BI$, and $U\in BP$ is not on line $CP$). Let $\omega_0=(UVP)$. Line $BI$ meets $\omega_0$ at $V$ and a second point $X^*$ (with $X^*=V$ if tangent), and the power of $B$ gives $BV\cdot BX^*=BU\cdot BP$. The signed products agree with $BV\cdot BX$ and $V,X$ lie on the same side of $B$, so $X=X^*\in\omega_0$. Similarly, line $CI$ meets $\omega_0$ at $U$ and a second point $Y^*$ with $CU\cdot CY^*=CV\cdot CP$, so $Y=Y^*\in\omega_0$. Thus $X,Y,P,U,V$ are concyclic. This statement is symmetric in $B,C$, so it also holds when $b\lt c$, and from here on no assumption on the order of $b,c$ is needed.`,
        String.raw`Tangency. Let $\ell$ be the tangent to $(BPX)$ at $X$ and $\ell'$ the tangent to $(IXY)$ at $X$. By the tangent-chord theorem, $\angle(\ell,XB)=\angle(PX,PB)$ and $\angle(\ell',XI)=\angle(YX,YI)$. Since $X,B,I$ are collinear, $XB=XI$ as lines, so $\ell=\ell'$ iff $$\angle(PX,PB)=\angle(YX,YI).$$ Now $P,U,X,Y\in\omega_0$; the lines $PB$ and $PU$ coincide, and $P\ne U$, $P\ne X$ (as $P\notin BI,CI$) and $X\ne Y$. If $Y\ne U$, the lines $YU$ and $YI$ coincide (both are $CI$), and the inscribed-angle theorem in $\omega_0$ gives $\angle(PX,PU)=\angle(YX,YU)$, which is the required equality. If $Y=U$, then $CU\cdot CY=CV\cdot CP$ reads $CU^2=CV\cdot CP$, so line $CI$ meets $\omega_0$ only at $Y$, i.e. $CI$ is tangent to $\omega_0$ at $Y$, and the tangent-chord theorem gives $\angle(PX,PU)=\angle(YX,CI)=\angle(YX,YI)$. Hence $\ell=\ell'$. The circles are distinct: $I\in(IXY)$, while line $BI$ meets $(BPX)$ only at $B$ and $X$, both different from $I$ (indeed $B\ne I$, $X\ne I$). Two distinct circles through $X$ with a common tangent at $X$ are tangent at $X$. $\blacksquare$`
      ]
    },
    {
      "id": "g25",
      "category": "geo",
      "difficulty": "challenging",
      "stars": 5,
      "rating": 9,
      "confidence": "high",
      "text": String.raw`Let $\Gamma$ be a circle and $S$ a point outside $\Gamma$. Three distinct lines through $S$ meet $\Gamma$ at $A,A'$, at $B,B'$, and at $C,C'$. Let $U$ be a point where a tangent from $S$ touches $\Gamma$. Let $P\ne S$ be the second intersection of the circumcircle of triangle $SAB$ and the circumcircle of triangle $SA'B'$, and let $R\ne S$ be the second intersection of the circumcircle of triangle $SC'A$ and the circumcircle of triangle $SCA'$. Prove that the circumcircle of triangle $B'PU$ and the circumcircle of triangle $CRU$ are tangent at $U$.`,
      "why": String.raw`Invert at $S$ with radius $SU$. Since $SU^2=SA\cdot SA'=SB\cdot SB'=SC\cdot SC'$, this swaps the endpoints of each secant, fixes $U$, and maps $\Gamma$ to itself. Circles through $S$ become lines, so $P$ goes to $P_1=AB\cap A'B'$ and $R$ goes to $R_1=CA'\cap C'A$. Brocard's theorem says the diagonal points of an inscribed quadrangle lie on the polars of one another, so $P_1$ and $R_1$ both lie on the polar of $S$, the chord of contact through $U$. So the image circles $(BP_1U)$ and $(C'R_1U)$ have their chords $UP_1$ and $UR_1$ on one line. By tangent-chord their tangents at $U$ make the angles $\angle UBA$ and $\angle UC'A$ with it, and these are equal inscribed angles on chord $UA$ of $\Gamma$. Inversion preserves tangency, so the original circles touch at $U$.`,
      "hints": [
        String.raw`Invert about $S$ with radius $SU$: the secant pairs swap, $U$ is fixed, and $P$ becomes $AB\cap A'B'$.`,
        String.raw`Both image points lie on the polar of $S$ — the chord of contact through $U$ (Brocard's self-polar diagonal triangle).`,
        String.raw`Compare the two tangents at $U$ against that common line with tangent-chord angles and one inscribed angle on chord $UA$.`,
        String.raw`Invert back: inversion is conformal at $U$.`
      ],
      "steps": [
        String.raw`As $S$ is exterior, each line through $S$ meets $\Gamma$ in two points on one ray, and the tangent--secant relation gives $SU^{2}=SA\cdot SA'=SB\cdot SB'=SC\cdot SC'$. Let $\iota$ be the inversion with centre $S$ and radius $SU$; it swaps $A\leftrightarrow A'$, $B\leftrightarrow B'$, $C\leftrightarrow C'$, fixes $U$, and preserves $\Gamma$ as a set.`,
        String.raw`For $X,Y$ on distinct rays the triangles $SXY$ and $SY'X'$ are similar by SAS (as $SX\cdot SX'=SY\cdot SY'$ and the rays coincide), so a circle through $S$ inverts to a line: $(SAB)\mapsto A'B'$ and $(SA'B')\mapsto AB$. Hence $P_{1}:=\iota(P)=AB\cap A'B'$ (finite, for $P$ exists) and likewise $R_{1}:=\iota(R)=CA'\cap C'A$.`,
        String.raw`The diagonal triangle of the inscribed complete quadrangle $A,A',B,B'$ is self-polar (Brocard), so $P_{1}=AB\cap A'B'$ lies on the polar of $S=AA'\cap BB'$. As $SU$ is a tangent this polar is the chord of contact through $U$, whence $P_{1},U$ lie on it and $P_{1}\ne U$; cyclically $R_{1}$ lies on the same line, so $P_{1},U,R_{1}$ are collinear on the chord of contact.`,
        String.raw`Compare the two tangents at $U$ by directed angles mod $\pi$. On $\odot(BP_{1}U)$ the tangent at $U$ meets the chord line $UP_{1}$ in the alternate-segment angle $\angle UBP_{1}=\angle UBA$ (as $P_{1}\in AB$); on $\odot(C'R_{1}U)$ the tangent at $U$ meets the same line $UR_{1}=UP_{1}$ in the angle $\angle UC'R_{1}=\angle UC'A$ (as $R_{1}\in AC'$). Both $\angle UBA$ and $\angle UC'A$ are inscribed angles of $\Gamma$ subtending the chord $UA$, hence equal; so the two tangent lines coincide and $\odot(BP_{1}U)$, $\odot(C'R_{1}U)$ are tangent at $U$.`,
        String.raw`The inversion $\iota$ is conformal at $U$ and sends $(B'PU)\mapsto\odot(BP_{1}U)$ and $(CRU)\mapsto\odot(C'R_{1}U)$; hence the circumcircles of $B'PU$ and $CRU$ are tangent at $U$.`
      ]
    },
    {
      "id": "n1",
      "category": "nt",
      "difficulty": "warmup",
      "stars": 1,
      "rating": 2,
      "confidence": "high",
      "text": String.raw`Determine all positive integers $n$ for which $$n^2 + 3^n$$ is a perfect square.`,
      "why": String.raw`The whole problem is a race between an exponential and a linear quantity. Writing $n^2+3^n=k^2$ as $(k-n)(k+n)=3^n$, both factors must be powers of $3$, say $3^a$ and $3^b$ with $a\lt b$ and $a+b=n$. Subtracting gives $2n=3^b-3^a\ge 2\cdot 3^{b-1}$, so $n\ge 3^{b-1}$, while $a+b=n$ with $a\le b-1$ gives $n\le 2b-1$. Since $3^{b-1}$ outruns $2b-1$ as soon as $b\ge3$, only $b\le2$ survives, and checking the three exponent pairs leaves $n=1$ ($1+3=4$) and $n=3$ ($9+27=36$); $n=2$ fails because $4+9=13$. The skeleton is: factor a difference of squares, use unique factorization to make both factors prime powers, then play a growth bound against a linear bound. The trap is stopping at the factorization without noticing that the exponent sum and the difference pin each other down.`,
      "hints": [
        String.raw`Write $k^2-n^2=3^n$ and factor: $(k-n)(k+n)$`,
        String.raw`Bound exponential $3^{b-1}\le n\le2b-1$: only tiny $b$ survive`
      ],
      "steps": [
        String.raw`Suppose $n^2+3^n=k^2$ with $k$ a positive integer. Since $3^n\gt 0$, $k\gt n$, and $$3^n=(k-n)(k+n).$$ Both factors are positive integers dividing $3^n$, so $k-n=3^a$ and $k+n=3^b$ with integers $0\le a\lt b$ (as $k-n\lt k+n$). Multiplying, $3^{a+b}=3^n$, so $a+b=n$. Subtracting, $$2n=3^b-3^a. \tag{1}$$`,
        String.raw`Bounding $b$. Since $a\le b-1$, $3^a\le3^{b-1}$, so (1) gives $2n\ge3^b-3^{b-1}=2\cdot3^{b-1}$, i.e. $n\ge3^{b-1}$. On the other hand $n=a+b\le(b-1)+b=2b-1$. Hence $$3^{b-1}\le2b-1.$$ For $b\ge3$ this fails: $3^{2}=9\gt 5=2\cdot3-1$, and if $3^{b-1}\gt 2b-1$ then $3^b\gt 6b-3\ge2b+1$ for $b\ge1$, completing the induction. Therefore $b\in\{1,2\}$.`,
        String.raw`Cases. With $0\le a\lt b\le2$ the possibilities are $(a,b)=(0,1),(0,2),(1,2)$, giving $n=a+b=1,2,3$. Equation (1) requires $2n=3^b-3^a$: for $(0,1)$, $2=3-1$ holds ($n=1$); for $(0,2)$, $4=9-1=8$ fails; for $(1,2)$, $6=9-3$ holds ($n=3$). Hence $n\in\{1,3\}$.`,
        String.raw`Check. $n=1$: $1+3=4=2^2$. $n=3$: $9+27=36=6^2$. So the solutions are exactly $n=1$ and $n=3$.`
      ]
    },
    {
      "id": "n2",
      "category": "nt",
      "difficulty": "warmup",
      "stars": 1,
      "rating": 2.5,
      "confidence": "high",
      "text": String.raw`Let $S_n=1^{3}+2^{3}+\cdots+(n-1)^{3}$.
(a) Find all integers $n\ge2$ such that $n\mid S_n$.
(b) Find all integers $n\ge2$ such that $n^{2}\mid S_n$.`,
      "why": String.raw`Everything hinges on Nicomachus's identity $1^3+\cdots+(n-1)^3=\left(\frac{n(n-1)}{2}\right)^2$: the sum of cubes is the square of a triangular number. Once that is in hand, both questions are only about how many factors of $2$ the denominator $4$ can steal. For $n\mid S_n$ we need $4\mid n(n-1)^2$: odd $n$ works because $n-1$ is even, multiples of $4$ work, and $n\equiv2\pmod 4$ fails because then $n(n-1)^2$ has exactly one factor of $2$ (the smallest failure is $n=2$, with $S_2=1$). For $n^2\mid S_n$ the $n^2$ cancels and we need $\frac{n-1}{2}$ to be an integer, so exactly the odd $n$ work; $n=4$ shows the second family is strictly smaller ($S_4=36$ is divisible by $4$ but not by $16$). Skeleton: prove the closed form by induction, cancel $n$ or $n^2$, then do a parity case split.`,
      "hints": [
        String.raw`Nicomachus: $S_n=\left(\frac{n(n-1)}{2}\right)^2$`,
        String.raw`The rest is $2$-adic bookkeeping: compare $v_2(n)$ with $v_2((n-1)^2)$.`
      ],
      "steps": [
        String.raw`Prove $S_n=\left(\frac{n(n-1)}{2}\right)^{2}$ by induction on $n\ge2$: base $n=2$ reads $1=1$; if it holds at $n$, then $S_{n+1}-S_n=n^{3}$ while the difference of consecutive closed forms is $\left(\frac{n(n+1)}{2}\right)^{2}-\left(\frac{n(n-1)}{2}\right)^{2}=\frac{n^{2}}{4}\left((n+1)^{2}-(n-1)^{2}\right)=n^{3}$ (expand), so the identity holds for all $n\ge2$.`,
        String.raw`Part 1: $n\mid S_n\iff n^{2}(n-1)^{2}\equiv0\pmod{4n}\iff 4\mid n(n-1)^{2}$. If $n$ odd: $4\mid(n-1)^2$ ✓. If $n\equiv2\pmod4$: $n(n-1)^2\equiv2\cdot\text{odd}\not\equiv0$. If $4\mid n$ ✓. Answer: odd or $4\mid n$.`,
        String.raw`Part 2: $n^{2}\mid S_n\iff 4\mid(n-1)^{2}$ after dividing by $n^{2}$: impossible for even $n$ ($(n-1)^2\equiv1\pmod4$), automatic for odd $n$ since then $n-1$ is even and $S_n/n^2=\left(\frac{n-1}{2}\right)^{2}\in\mathbb{Z}$. Answer: $n$ odd.`,
        String.raw`Cross-check boundaries: $n=2$ fails part 1 ($S=1$); $n=4$: $S=36$, $4\mid36$ ✓ part 1, $16\nmid36$ ✗ part 2 ✓; $n=6$: $225$, $6\nmid225$ ✓ excluded. Answer: part 1 holds exactly for the odd $n\ge3$ together with the multiples of $4$; part 2 holds exactly for the odd $n\ge3$.`
      ]
    },
    {
      "id": "n3",
      "category": "nt",
      "difficulty": "easy",
      "stars": 2,
      "rating": 3,
      "confidence": "medium",
      "text": String.raw`Find all pairs of positive integers $(x,y)$ such that $$x+y\mid xy\qquad\text{and}\qquad xy\mid (x+y)^{3}.$$`,
      "why": String.raw`The key move is to strip off the common part: write $x=ga$, $y=gb$ with $g=\gcd(x,y)$ and $a,b$ coprime. Because $a+b$ and $ab$ share no prime, the condition $x+y\mid xy$ collapses to $a+b\mid g$, and then $xy\mid(x+y)^3$ collapses to $ab\mid g/(a+b)$. Together they say exactly $ab(a+b)\mid g$, so the solutions are $x=m a^2b(a+b)$, $y=m ab^2(a+b)$ with $m\ge1$ and $a,b$ coprime; the diagonal $a=b=1$ gives $(2m,2m)$, and the smallest off-diagonal solution is $(6,12)$. The exponent $3$ matters: with $(x+y)^2$ in place of $(x+y)^3$ the second condition would force $ab\mid 1$, leaving only $x=y$. Skeleton: gcd substitution, two applications of Euclid's lemma using $\gcd(a+b,ab)=1$, then a direct check of the converse.`,
      "hints": [
        String.raw`Both hypotheses talk only about $t=x+y$ and $u=xy$: they form a divisibility ladder $t\mid u\mid t^{3}$.`,
        String.raw`Parametrise the first rung: $g=\gcd(x,y)$ with coprime parts $a,b$ forces $g=k(a+b)$; substituting into $u\mid t^{3}$ and using $\gcd(ab,a+b)=1$ leaves exactly $ab\mid k$.`,
        String.raw`For the converse, verify the family as stated with arbitrary $a,b$ - common factors are absorbed by $m$ - and do not smuggle coprimality into the answer.`
      ],
      "steps": [
        String.raw`Put $g=\gcd(x,y)$, $x=ga$, $y=gb$ with coprime positive integers $a,b$, and write $t=x+y=g(a+b)$, $u=xy=g^{2}ab$. The first hypothesis $t\mid u$ is $g(a+b)\mid g^{2}ab$, i.e. $(a+b)\mid gab$. Coprimality gives $\gcd(a+b,a)=\gcd(b,a)=1$ and symmetrically $\gcd(a+b,b)=1$, hence $\gcd(a+b,ab)=1$, and Euclid's lemma turns the hypothesis into $(a+b)\mid g$. Write $g=k(a+b)$ with $k\ge 1$; then $t=k(a+b)^{2}$, $u=k^{2}ab(a+b)^{2}$, and conversely every $k\ge 1$ with any coprime $a,b$ satisfies the first hypothesis: this reduction is an equivalence.`,
        String.raw`The second hypothesis is $u\mid t^{3}$: the quotient is $t^{3}/u=k(a+b)^{4}/(ab)$, so the condition reads $ab\mid k(a+b)^{4}$. Since $\gcd(ab,a+b)=1$ gives $\gcd(ab,(a+b)^{4})=1$, Euclid's lemma again collapses it to $ab\mid k$. Write $k=mab$; then $g=mab(a+b)$ and every solution has the shape $$x=ma^{2}b(a+b),\qquad y=mab^{2}(a+b)$$ with coprime $a,b$ and $m\ge 1$, where the triple is unique: $a,b$ are the coprime parts of the pair and $m=k/(ab)$.`,
        String.raw`Converse, with the coprimality on $a,b$ dropped: for arbitrary positive integers $m,a,b$ set $x=ma^{2}b(a+b)$, $y=mab^{2}(a+b)$. Then $t=mab(a+b)^{2}$, $u=m^{2}a^{3}b^{3}(a+b)^{2}$, and the two quotients $u/t=ma^{2}b^{2}$ and $t^{3}/u=m(a+b)^{4}$ are integers: both hypotheses hold. Common factors of $a,b$ are harmless here - e.g.\ $(2,2,m)$ reproduces $(32m,32m)$, already produced by $(1,1,16m)$ - and the uniqueness in step 2 shows the relaxed converse neither misses a pair nor mislabels one.`,
        String.raw`Sanity anchors: $a=b=1$ gives the diagonal family $(2m,2m)$, and $\{a,b\}=\{1,2\}$ gives $(6m,12m)$ with its swap. Check $(6,12)$: $18\mid 72$ and $72\mid 18^{3}=5832=81\cdot 72$. The ladder constrains the scale, not the ratio: $(4,12)$ satisfies the first hypothesis $16\mid 48$ but fails the second, $48\nmid 4096$, while the same ratio $1:3$ does occur at the admissible scale $12$: $(12,36)$ has $48\mid 432$ and $432\mid 48^{3}=110592=256\cdot 432$.`,
        String.raw`Therefore the complete solution set is $$\boxed{(x,y)=\bigl(m\,a^{2}b\,(a+b),\; m\,a\,b^{2}\,(a+b)\bigr)\quad\text{for arbitrary positive integers }m,a,b,}$$ equivalently: a pair $(x,y)$ is a solution if and only if, with $g=\gcd(x,y)$ and coprime parts $a=x/g$, $b=y/g$, one has $ab(a+b)\mid g$. No restriction on the ratio $x/y$ is implied.`
      ]
    },
    {
      "id": "n4",
      "category": "nt",
      "difficulty": "easy",
      "stars": 2,
      "rating": 3,
      "confidence": "high",
      "text": String.raw`Determine all positive integers $n$ such that $\sigma(n)=\varphi(n)+\tau(n)$, where $\sigma$ is the sum-of-divisors function, $\varphi$ is Euler's totient, and $\tau$ is the number of positive divisors.`,
      "why": String.raw`Primes work for a one-line reason: $\sigma(p)=p+1$ and $\varphi(p)+\tau(p)=(p-1)+2$. The real content is that nothing else does, and the reason is size: for composite $n$, the gap $\sigma(n)-\varphi(n)$ grows roughly like $n$, while $\tau(n)$ grows at most like $2\sqrt n$. Concretely, if $p$ is the least prime factor, the divisors $1,p,n/p,n$ give $\sigma(n)\ge n+n/p+p+1$, and $\varphi(n)\le n-n/p$, so $\sigma(n)-\varphi(n)\ge 2n/p+p+1$, which exceeds $2\sqrt{2n}$ by AM-GM and hence exceeds $\tau(n)$. The one leak is $n=p^2$, where $n/p=p$ is counted twice; there the equation reads $p^2+p+1=p^2-p+3$, forcing $p=1$. Also $n=1$ fails since $1\ne 2$. Skeleton: verify primes, bound $\tau(n)\le2\sqrt n$ by pairing divisors, then compare.`,
      "hints": [
        String.raw`Test small $n$ first: which familiar family of $n$ satisfies the equation?`,
        String.raw`Composite $n\ne p^{2}$, $p$ the least prime divisor: the distinct divisors $1,p,n/p,n$ bound $\sigma(n)$ below.`,
        String.raw`Compare with $\varphi(n)\le n-n/p$ and $\tau(n)\le2\sqrt n$`
      ],
      "steps": [
        String.raw`If $n=p$ is prime, then $\sigma(p)=p+1$ and $\varphi(p)+\tau(p)=p-1+2=p+1$. If $n=1$, then $\sigma(1)=1$ and $\varphi(1)+\tau(1)=2$, so $n=1$ fails.`,
        String.raw`Recall that $\tau(n)\le 2\sqrt n$: the divisors come in pairs $(d,\,n/d)$, and the divisors strictly less than $\sqrt n$ inject into those at least $\sqrt n$, with the square root itself counted once when $n$ is a square.`,
        String.raw`Let $n=p^{k}$ with $k\ge 2$. The equation becomes $(p^{k+1}-1)/(p-1)=p^{k-1}(p-1)+k+1$. For $k=2$ this is $p^2+p+1=p^2-p+3$, hence $2p=2$, i.e. $p=1$, not a prime. For $k\ge 3$ the left side is at least $p^k+p^{k-1}+p^{k-2}$ and the right side equals $p^k-p^{k-1}+k+1$, so their difference is at least $2p^{k-1}+p^{k-2}-k-1$. This increases with $p$, and for $p\ge2$ with $k$ (the step $k\to k+1$ adds $2p^{k-1}(p-1)+p^{k-2}(p-1)-1\ge 9\gt 0$), so its minimum is at $p=2$, $k=3$, where it equals $2\cdot 4+2-3-1=6\gt 0$.`,
        String.raw`Now suppose $n$ has at least two distinct prime factors, and let $p$ be the least one. Then $1$, $p$, $n/p$ and $n$ are distinct positive divisors: $n/p=p$ would mean $n=p^2$, and $n/p=1$ would mean $n=p$. Hence $\sigma(n)\ge n+n/p+p+1$. Also $\varphi(n)\le n(1-1/p)=n-n/p$, so $$\sigma(n)-\bigl(\varphi(n)+\tau(n)\bigr)\ge \frac{2n}p+p+1-\tau(n)\ge \frac{2n}p+p+1-2\sqrt n.$$`,
        String.raw`Since $n$ is composite and $p$ is its least prime factor, $p\le\sqrt n$, with strict inequality because $n$ is not a prime square. Thus $2n/p\gt 2\sqrt n$, and the previous lower bound is strictly larger than $p+1\gt 0$.`,
        String.raw`Therefore no composite $n$ works, and the solutions are exactly the primes.`
      ]
    },
    {
      "id": "n5",
      "category": "nt",
      "difficulty": "easy",
      "stars": 2,
      "rating": 4,
      "confidence": "high",
      "text": String.raw`Let $n=p^k$ where $p$ is prime and $k\ge1$. Determine all prime powers satisfying $$\sigma(n)=2\varphi(n)+\tau(n),$$ where $\sigma$ is the sum-of-divisors function, $\varphi$ Euler's totient, and $\tau$ the number-of-divisors function.`,
      "why": String.raw`For a prime power every function in the equation is explicit, so the problem becomes a small exponential equation in $k$ for each $p$, and the answer is the pleasant surprise $n=4$ and $n=27$. Primes never work: $p+1=2(p-1)+2$ forces $p=1$. For $p=2$ the equation simplifies to $2^k=k+2$, solved only by $k=2$; for $p=3$ it simplifies to $3^{k-1}=2k+3$, solved only by $k=3$, since $9=9$ while $3^{k-1}$ wins outright from $k=4$ on. For $p\ge5$ the factor $2$ in front of $\varphi$ is too heavy: $\sigma(p^k)$ is only about $p^k\cdot\frac{p}{p-1}$ while $2\varphi(p^k)=2p^{k-1}(p-1)$, so $\sigma-2\varphi$ is already negative and adding $\tau$ cannot repair it. Skeleton: compute the three functions on $p^k$, treat $p=2$, $p=3$, $p\ge5$ separately, and finish each with an induction showing the exponential side eventually dominates.`,
      "hints": [
        String.raw`Write the three arithmetic functions explicitly for $p^k$.`,
        String.raw`Handle $p=2$, $p=3$, and $p\ge5$ separately.`,
        String.raw`Each case is an exponential equation in $k$: growth beats the linear side, leaving only tiny $k$.`
      ],
      "steps": [
        String.raw`For $k=1$, the equation becomes $$p+1=2(p-1)+2,$$ hence $p=1$, impossible. So $k\ge2$.`,
        String.raw`For $p=2$, $$\sigma(2^k)=2^{k+1}-1,\qquad \varphi(2^k)=2^{k-1},\qquad \tau(2^k)=k+1.$$ Hence $$2^{k+1}-1=2^k+k+1\iff2^k=k+2.$$ At $k=2$ this reads $4=4$; for $k\ge3$ it fails since $2^k\gt k+2$ by induction: true at $k=3$, and $2^{k+1}\gt 2(k+2)\ge k+3$. So $k=2$ is the only solution.`,
        String.raw`Thus $n=4$ is one solution.`,
        String.raw`For $p=3$, $$\sigma(3^k)=\frac{3^{k+1}-1}{2},\qquad \varphi(3^k)=2\cdot3^{k-1},\qquad \tau(3^k)=k+1.$$ Hence $$\frac{3^{k+1}-1}{2}=4\cdot3^{k-1}+k+1\iff3^{k-1}=2k+3.$$ At $k=2$ this reads $3\ne7$, at $k=3$ it reads $9=9$, and at $k=4$ it reads $27\gt11$. For $k\ge4$ the excess propagates: $3^{k-1}\gt2k+3$ gives $3^k\gt6k+9\gt2k+5$, so no solution exists beyond $k=3$.`,
        String.raw`Thus $n=27$ is the second solution.`,
        String.raw`Now let $p\ge5$. Since $$\sigma(p^k)-2\varphi(p^k)=-p^k+3p^{k-1}+p^{k-2}+\cdots+1=-p^k+3p^{k-1}+\frac{p^{k-1}-1}{p-1},$$ we have $$\sigma(p^k)-2\varphi(p^k)\lt -p^k+3p^{k-1}+\frac{p^{k-1}}{p-1}=-\frac{p^{k-1}(p^2-4p+2)}{p-1}\lt0,$$ because $p^2-4p+2=(p-2)^2-2\gt0$ for $p\ge4$. Since $\tau(p^k)=k+1\gt0$, the required equality is impossible.`,
        String.raw`Therefore the complete set is $$\boxed{n=4,\ 27}.$$`
      ]
    },
    {
      "id": "n6",
      "category": "nt",
      "difficulty": "easy",
      "stars": 2,
      "rating": 4,
      "confidence": "high",
      "text": String.raw`Find all pairs of primes $(p,q)$ for which $p^{\,q+1}+q^{\,p+1}$ is a perfect square.`,
      "why": String.raw`A parity screen does most of the work. If both primes are odd, each term is an odd number raised to an even power, hence $1\bmod 4$, so the sum is $2\bmod 4$ and cannot be a square. So one prime is $2$; if both are, $2^3+2^3=16$ works. With $p=2\lt q$, write $2^{q+1}+q^3=s^2$ as $(s-a)(s+a)=q^3$ with $a=2^{(q+1)/2}$; both factors are odd, so they are $1,q^3$ or $q,q^2$. Their difference $2a$ is a power of $2$, but $q^3-1=(q-1)(q^2+q+1)$ has the odd factor $q^2+q+1\gt1$, and $q^2-q=q(q-1)$ has the odd factor $q$. Hence $(2,2)$ is the only pair. Skeleton: reduce mod $4$, factor a difference of squares, and show neither factor split can differ by a power of two. The trap is forgetting the case $p=q=2$, the one place the mod-$4$ argument does not apply.`,
      "hints": [
        String.raw`Odd primes: both terms $\equiv1\pmod4$, sum $\equiv2$: one prime is 2`,
        String.raw`WLOG $p=2$: then $s^2-2^{q+1}=q^3$ is a difference of squares: factor it and list the factor pairs.`
      ],
      "steps": [
        String.raw`Both primes odd: $p^{q+1}\equiv q^{p+1}\equiv 1\pmod4$, sum $\equiv 2\pmod4$ - not a square.`,
        String.raw`The sum $p^{q+1}+q^{p+1}$ is symmetric in $p,q$, and $p=q=2$ is settled in the last step, so we may take $p=2\lt q$. Then $q$ is odd, so $s^2 = 2^{q+1} + q^3$ has odd RHS and odd $s$; write $a = 2^{(q+1)/2}$ (an integer, $q+1$ even, and even since $q\ge3$): $(s-a)(s+a) = s^2 - a^2 = q^3$; $s+a$ is odd forces $s-a$ odd too.`,
        String.raw`Both factors positive odd integers ($s \gt a$ since $s^2 - a^2 = q^3 \gt 0$), multiplying to $q^3$ with $s-a \lt s+a$: $(s-a, s+a) \in \{(1, q^3), (q, q^2)\}$.`,
        String.raw`Case $(1, q^3)$: $2a = q^3 - 1 = (q-1)(q^2+q+1)$; $q^2+q+1$ is odd and $\gt 1$, cannot divide the power of two $2a$ - contradiction.`,
        String.raw`Case $(q, q^2)$: $2a = q^2 - q = q(q-1)$; odd $q \gt 1$ divides the power of two - contradiction.`,
        String.raw`$p=q=2$ gives $16 = 4^2$, the only solution.`
      ]
    },
    {
      "id": "n7",
      "category": "nt",
      "difficulty": "easy",
      "stars": 2,
      "rating": 4,
      "confidence": "high",
      "text": String.raw`Let $q$ be an odd prime such that $p = 2q + 1$ is also prime. Prove that $$p \mid q^q + 1$$ if and only if $q \equiv 3 \pmod 4$.`,
      "why": String.raw`The exponent $q$ is not arbitrary: since $p=2q+1$, it is exactly $(p-1)/2$, so $q^q\bmod p$ is Euler's criterion in disguise and equals the Legendre symbol $\left(\frac{q}{p}\right)$. The question becomes: when is $q$ a non-residue modulo $2q+1$? Quadratic reciprocity answers it instantly, because the flipped symbol $\left(\frac{p}{q}\right)=\left(\frac{1}{q}\right)=1$ is trivial, as $p\equiv1\pmod q$. What remains is the sign $(-1)^{\frac{p-1}{2}\cdot\frac{q-1}{2}}=(-1)^{(q-1)/2}$, which is $-1$ exactly when $q\equiv3\pmod4$. Examples: $q=3$, $p=7$ gives $28=4\cdot7$, while $q=5$, $p=11$ gives $3126\equiv2\pmod{11}$. Skeleton: recognise $q=(p-1)/2$, apply Euler's criterion, apply reciprocity, and read off the sign. The hypothesis that $2q+1$ is prime is what makes Euler's criterion and reciprocity available at all.`,
      "hints": [
        String.raw`$q=(p-1)/2$: Euler's criterion turns $q^q$ into $(q/p)$`,
        String.raw`Now apply quadratic reciprocity to $(q/p)$: what is $p\bmod q$?`
      ],
      "steps": [
        String.raw`Since $p = 2q + 1$, the exponent $q$ satisfies $q = \frac{p-1}{2}$. Therefore, $$q^q = q^{(p-1)/2}.$$`,
        String.raw`Because $p$ is prime and $p = 2q+1 \gt  q$, we have $\gcd(q, p) = 1$. By Euler's criterion, $$q^{(p-1)/2} \equiv \left(\frac{q}{p}\right) \pmod p,$$ where $\left(\frac{q}{p}\right)$ denotes the Legendre symbol.`,
        String.raw`Since $p$ and $q$ are distinct odd primes, Gauss's Law of Quadratic Reciprocity gives: $$\left(\frac{q}{p}\right) \left(\frac{p}{q}\right) = (-1)^{\frac{p-1}{2} \frac{q-1}{2}} = (-1)^{q \cdot \frac{q-1}{2}}.$$`,
        String.raw`Because $q$ is odd, the exponent $q \cdot \frac{q-1}{2}$ has the same parity as $\frac{q-1}{2}$, so $(-1)^{q \cdot \frac{q-1}{2}} = (-1)^{\frac{q-1}{2}}$. Furthermore, $p = 2q + 1 \equiv 1 \pmod q$, so $$\left(\frac{p}{q}\right) = \left(\frac{1}{q}\right) = 1.$$`,
        String.raw`Multiplying the reciprocity relation by $\left(\frac{p}{q}\right) = 1$ yields $$\left(\frac{q}{p}\right) = (-1)^{\frac{q-1}{2}}.$$ Consequently, $$q^q \equiv (-1)^{\frac{q-1}{2}} \pmod p.$$`,
        String.raw`Hence $q^q + 1 \equiv (-1)^{\frac{q-1}{2}} + 1 \pmod p$. Because $p \gt  2$, $p \mid q^q + 1$ holds if and only if $(-1)^{\frac{q-1}{2}} = -1$, which is equivalent to $\frac{q-1}{2}$ being odd, i.e. $q \equiv 3 \pmod 4$. (When $q \equiv 1 \pmod 4$, $(-1)^{\frac{q-1}{2}} = 1$, which gives $p \mid q^q - 1$ instead).`
      ]
    },
    {
      "id": "n8",
      "category": "nt",
      "difficulty": "easy",
      "stars": 2,
      "rating": 4,
      "confidence": "high",
      "text": String.raw`Find all positive integers $n$ such that the triangular number $T_n=1+2+\cdots+n$ divides both $1^{2}+2^{2}+\cdots+n^{2}$ and $1^{4}+2^{4}+\cdots+n^{4}$.`,
      "why": String.raw`The trick is to divide out $T_n$ from the closed forms instead of handling three separate sums. Since $\sum k^2=T_n\frac{2n+1}{3}$ and $\sum k^4=T_n\frac{(2n+1)(3n^2+3n-1)}{15}$, the problem asks when $3\mid 2n+1$ and $15\mid(2n+1)(3n^2+3n-1)$. The first condition means $n\equiv1\pmod3$. In the second, the $3$ gives nothing new, because $3n^2+3n-1\equiv-1\pmod3$ means the $3$ must again come from $2n+1$. Only the $5$ is new: it divides $2n+1$ when $n\equiv2$, and it divides the quadratic when $n\equiv1$ or $3\pmod5$. Combining by CRT gives exactly $n\equiv1,7,13\pmod{15}$. For example $n=1$ and $n=7$ work, while $n=4$ fails because $4\equiv4\pmod5$. Skeleton: Faulhaber closed forms, cancel $T_n$, local conditions at $3$ and $5$, CRT.`,
      "hints": [
        String.raw`Use Faulhaber's closed forms for $\sum k^2$ and $\sum k^4$`,
        String.raw`Divide each sum by $T_n$: both divisibilities become congruence conditions on $n$.`,
        String.raw`Mod $5$, the quadratic factor $3n^{2}+3n-1$ splits: check its discriminant.`
      ],
      "steps": [
        String.raw`Use the classical power-sum identities $\sum_{k\le n}k^{2}=n(n+1)(2n+1)/6$ and $\sum_{k\le n}k^{4}=n(n+1)(2n+1)(3n^{2}+3n-1)/30$; both hold at $n=1$, and the difference of consecutive values of each closed form is exactly $n^{2}$, respectively $n^{4}$, by direct expansion, so each follows by induction on $n$.`,
        String.raw`First divisibility: $\sum k^{2}/T_n=(2n+1)/3\in\mathbb Z\iff n\equiv1\pmod3$.`,
        String.raw`Second divisibility $\sum k^4/T_n\in\mathbb Z\iff 15\mid(2n+1)(3n^{2}+3n-1)$.`,
        String.raw`Mod 3: $3n^{2}+3n-1\equiv-1$ never $0$; so the $3$ must divide $2n+1$ - the same condition as step 2 (note: no new information from the second divisibility at 3).`,
        String.raw`Mod 5: the quadratic has roots $n\equiv1,3$ (disc $9+12\equiv1$); linear factor $2n+1$ root $n\equiv2$. Union $n\bmod5\in\{1,2,3\}$.`,
        String.raw`CRT with $n\equiv1\pmod3$: classes $1,7,13\pmod{15}$.`
      ]
    },
    {
      "id": "n9",
      "category": "nt",
      "difficulty": "easy",
      "stars": 2,
      "rating": 4,
      "confidence": "high",
      "text": String.raw`Determine all integers $n\gt 1$ such that $$d^2-1\mid n^2-1$$ for every divisor $d\gt 1$ of $n$.`,
      "why": String.raw`The answer is the primes and the squares of primes, and the reason is one well-chosen divisor. For $n$ with at least two distinct prime factors, take $p$ the smallest one and $d=n/p$, so that $d\gt p$. The identity $n^2-1=p^2(d^2-1)+(p^2-1)$ turns $d^2-1\mid n^2-1$ into $d^2-1\mid p^2-1$, impossible because $0\lt p^2-1\lt d^2-1$; for example $n=6$ fails at $d=3$, since $8\nmid35$. For $n=p^k$ with $k\ge3$, the divisor $d=p^{k-1}$ fails by the lemma $x^a-1\mid x^b-1\iff a\mid b$, since $k-1\nmid k$; for example $n=8$ fails at $d=4$, since $15\nmid63$. Prime squares survive because $p^2-1\mid p^4-1$. Skeleton: verify the two good families, then kill everything else with $d=n/p$, using the remainder identity or the exponent lemma.`,
      "hints": [
        String.raw`Check small powers of a single prime first: which of $p,p^2,p^3,p^4$ pass?`,
        String.raw`If $n$ has two distinct prime divisors, try $d=n/p$ where $p$ is the smallest prime divisor; also recall when $x^a-1\mid x^b-1$ holds.`
      ],
      "steps": [
        String.raw`Prime case: if $n=p$, the only divisor $d\gt 1$ is $n$ itself and $d^2-1=n^2-1$ divides trivially. Every prime satisfies the condition.`,
        String.raw`Square case: if $n=p^2$, the divisors $d\gt 1$ are $p$ and $p^2$, and $$p^2-1\mid p^4-1=(p^2-1)(p^2+1)$$ covers both. Every prime square satisfies the condition.`,
        String.raw`Higher prime powers fail. Let $n=p^k$ with $k\ge3$ and take the divisor $d=p^{k-1}$. The standard lemma says that for an integer $x\ge2$, $x^a-1\mid x^b-1$ iff $a\mid b$: writing $b=qa+r$ with $0\le r\lt a$, one has $x^b-1\equiv x^r-1\pmod{x^a-1}$ and $0\le x^r-1\lt x^a-1$, so divisibility forces $r=0$; the converse is the geometric sum $y^q-1=(y-1)(y^{q-1}+\cdots+1)$ with $y=x^a$, $b=qa$. With $x=p^2$, $a=k-1$, $b=k$, since $k=1\cdot(k-1)+1$ and $k-1\ge2$ leaves remainder $1\neq0$, $k-1$ does not divide $k$, and $$d^2-1=p^{2k-2}-1\nmid p^{2k}-1=n^2-1,$$ a contradiction.`,
        String.raw`Non-prime-powers fail. Let $n$ have at least two distinct prime divisors, let $p$ be its smallest prime divisor, and put $d=n/p$. Then $d\gt 1$ divides $n$, and $d\gt p$: otherwise all prime factors of $d$ are at least $p$ and $d\le p$ forces $d=p$, i.e. $n=p^2$, excluded.`,
        String.raw`By hypothesis $d^2-1\mid n^2-1=p^2d^2-1=p^2(d^2-1)+(p^2-1)$, hence $d^2-1\mid p^2-1$.`,
        String.raw`But $d\gt p\gt 1$ gives $0\lt p^2-1\lt d^2-1$, and no positive integer is divisible by a strictly larger positive integer - contradiction.`,
        String.raw`Therefore the complete set is $$\boxed{n=p\ \text{or}\ n=p^{2}\quad(p\ \text{prime}).}$$`
      ]
    },
    {
      "id": "n10",
      "category": "nt",
      "difficulty": "easy",
      "stars": 2,
      "rating": 4,
      "confidence": "high",
      "text": String.raw`Let $a,b,c,d$ be positive integers and put $S=a+b+c+d$ and $Q=a^2+b^2+c^2+d^2$. Suppose $Q\mid S^2$. Determine all possible values of the integer $S^2/Q$.`,
      "why": String.raw`Two inequalities do almost everything. Cauchy-Schwarz gives $S^2\le4Q$, and positivity gives $S^2=Q+2\sum ab\gt Q$, so the integer $k=S^2/Q$ must lie in $\{2,3,4\}$. The real question is whether all three values occur, and they do: $(1,1,1,1)$ gives $16/4=4$ (the Cauchy-Schwarz equality case, which needs $a=b=c=d$), $(1,1,1,3)$ gives $36/12=3$, and $(1,1,4,12)$ gives $324/162=2$. The value $k=2$ is the hardest to find, since it needs $\sum ab$ exactly equal to $Q/2$, which forces one entry to be much larger than the others. Skeleton: bracket $k$ between $1$ and $4$ and exclude both ends ($k=1$ is impossible because the cross terms are positive), then exhibit a witness for each remaining value. The trap is assuming $k=2$ cannot happen just because small searches with nearly equal entries find nothing.`,
      "hints": [
        String.raw`Bound $S^{2}/Q$ between $1$ and $4$: Cauchy-Schwarz gives the upper end, positivity of the cross terms the strict lower one.`,
        String.raw`For $k=2$, view $S^{2}=2Q$ as a quadratic in $d$: integer roots ask $ab+ac+bc$ to be a perfect square.`
      ],
      "steps": [
        String.raw`By Cauchy–Schwarz, $S^2\le4Q$. Since $a,b,c,d\gt 0$, we also have $S^2\gt Q$. Therefore the positive integer $k=S^2/Q$ must satisfy $k\in\{2,3,4\}$.`,
        String.raw`The value $k=4$ is attained exactly when equality holds in Cauchy–Schwarz, i.e. $a=b=c=d$; for example $(1,1,1,1)$ gives $S^2/Q=4$.`,
        String.raw`The value $k=3$ is attained by $(1,1,1,3)$, for which $S=6$ and $Q=12$, so $S^2/Q=3$.`,
        String.raw`The value $k=2$ is attained by $(1,1,4,12)$, for which $S=18$ and $Q=162$, so $S^2/Q=2$.`,
        String.raw`Hence the complete set of possible values is $$\boxed{\{2,3,4\}}.$$`
      ]
    },
    {
      "id": "n11",
      "category": "nt",
      "difficulty": "easy",
      "stars": 2,
      "rating": 4.5,
      "confidence": "high",
      "text": String.raw`Find all pairs of positive integers $(x,y)$ satisfying $$x^{y}-y^{x}=x-y.$$`,
      "why": String.raw`Compare the signs of the two sides. For $x,y\ge2$, $x^y\gt y^x$ holds exactly when $\frac{\ln x}{x}\gt\frac{\ln y}{y}$, and the function $\frac{\ln t}{t}$ increases up to $t=e$ and decreases after it. So once both numbers are at least $3$, the larger number has the smaller power, so $x^y-y^x$ and $x-y$ have opposite signs and no solution with $x\ne y$ exists. This leaves the trivial families $x=y$ and $\min(x,y)=1$, plus pairs involving $2$. Among these, $(2,3)$ and $(3,2)$ work ($8-9=-1$), $(2,4)$ fails because $16-16=0\ne-2$, and from $y=5$ on, $2^y\gt y^2$ gives the wrong sign again. Skeleton: check the obvious families, convert to a comparison of $\frac{\ln t}{t}$, use its single maximum at $e$, and check the few pairs with a $2$ by hand. The pair $(2,3)$ exists only because $2\lt e\lt3$ straddles the maximum.`,
      "hints": [
        String.raw`Sign of $x^y-y^x$ follows $g(t)=\ln t/t$: match signs`,
        String.raw`$g$ increases up to $e$, decreases after: tiny cases only`,
        String.raw`Boundary $g(2)=g(4)$: check $(4,2)$ and $\{2,3\}$ directly`
      ],
      "steps": [
        String.raw`Check the claimed families: $x=y$ gives $0=0$; $(t,1)$ gives $t-1=t-1$; $(1,t)$ gives $1-t=1-t$; $(2,3)$: $8-9=-1=2-3$; $(3,2)$: $9-8=1=3-2$. All are solutions - the task is to show there are no others.`,
        String.raw`Put $g(t)=\ln t/t$. Since $\ln$ is increasing, for $x,y\ge2$ we have $x^y\gt y^x\iff y\ln x\gt x\ln y\iff g(x)\gt g(y)$. Both sides of the equation change sign under the swap $(x,y)\mapsto(y,x)$ (the equation itself is symmetric), so any solution with $x\ne y$ needs $\operatorname{sign}(g(x)-g(y))=\operatorname{sign}(x-y)$. From $g'(t)=(1-\ln t)/t^2$, $g$ strictly increases on $[1,e]$ and strictly decreases on $[e,\infty)$, in particular on $[3,\infty)$. Exact comparisons: $g(3)\gt g(2)\iff\ln9\gt\ln8$, $g(2)=g(4)$, and $g(2)\gt g(5)\iff 2^5=32\gt25=5^2$.`,
        String.raw`Take $2\le x\lt y$: we need $g(x)\lt g(y)$. If $x\ge3$, then $x,y\in[3,\infty)$ and strict decrease gives $g(x)\gt g(y)$: impossible. If $x=2$: $y=3$ works ($2^3=8\lt9=3^2$, and $8-9=-1=2-3$); $y=4$ fails with equality ($2^4=4^2$ gives $0\ne-2$); and $y\ge5$ fails because $2^y\gt y^2$, i.e. $g(2)\gt g(y)$, by induction with base $32\gt25$ at $y=5$: $2^y\gt y^2$ gives $2^{y+1}\gt2y^2\ge(y+1)^2$ for $y\ge5$. So $x\lt y$ forces $(x,y)=(2,3)$.`,
        String.raw`Now $2\le y\lt x$: we need $g(x)\gt g(y)$. For $y\ge3$ strict decrease on $[3,\infty)$ gives $g(x)\lt g(y)$: impossible. For $y=2$: $g$ rises to $e$, then falls, and $g(4)=g(2)$, so the set $\{t\ge2:g(t)\gt g(2)\}$ is exactly $(2,4)$, forcing $x=3$: the pair $(3,2)$, already verified; the boundary $(4,2)$ gives $4^2-2^4=0\ne2$.`,
        String.raw`Assemble: the solution set is exactly $\{x=y\}\cup\{\min(x,y)=1\}\cup\{(2,3),(3,2)\}$.`
      ]
    },
    {
      "id": "n12",
      "category": "nt",
      "difficulty": "medium",
      "stars": 3,
      "rating": 5,
      "confidence": "high",
      "text": String.raw`Determine all positive integers $n$ such that for all integers $a$ and $b$, $$n \mid a^2 b + 1 \implies n \mid a^2 + b.$$`,
      "why": String.raw`First note that $n\mid a^2b+1$ forces $\gcd(a,n)=1$. Then $b$ is determined modulo $n$ as $b\equiv-a^{-2}$, and the conclusion $b\equiv-a^2$ says exactly $a^4\equiv1\pmod n$. So the strange implication is really the statement that every unit modulo $n$ has order dividing $4$. By CRT this is a condition on each prime power: an odd prime $p$ needs $p-1\mid4$, so $p\in\{3,5\}$, and only to the first power, since $p\mid\varphi(p^2)$; for powers of $2$ the unit group modulo $2^k$ has exponent $2^{k-2}$ for $k\ge3$, allowing at most $16$. Hence the answer is exactly the $20$ divisors of $240=16\cdot3\cdot5$. For instance $n=7$ fails: $a=3$, $b=3$ gives $28$, but $9+3=12$. Skeleton: show $a$ is a unit, eliminate $b$, reduce to $a^4\equiv1$, then classify prime powers.`,
      "hints": [
        String.raw`The premise forces $\gcd(a,n)=1$: fix such an $a$ and choose the $b$ it allows.`,
        String.raw`Premise and conclusion fuse into one universal congruence on units: which classical function records it?`,
        String.raw`Demand this exponent divide $4$: via CRT check prime powers to bound the primes and exponents in $n$.`
      ],
      "steps": [
        String.raw`Suppose $n$ satisfies the condition. Let $a$ be any integer such that $\gcd(a, n) = 1$. Then $\gcd(a^2, n) = 1$, so $a^2$ is invertible modulo $n$.`,
        String.raw`Choose $b \in \mathbb{Z}$ such that $a^2 b \equiv -1 \pmod n$. Then $n \mid a^2 b + 1$. By the given hypothesis, we must have $n \mid a^2 + b$, which means $b \equiv -a^2 \pmod n$.`,
        String.raw`Substitute $b \equiv -a^2 \pmod n$ back into the congruence $a^2 b \equiv -1 \pmod n$: $$a^2(-a^2) \equiv -1 \pmod n \implies -a^4 \equiv -1 \pmod n \implies a^4 \equiv 1 \pmod n.$$ Thus, $a^4 \equiv 1 \pmod n$ must hold for every integer $a$ coprime to $n$.`,
        String.raw`The exponent of the multiplicative group $(\mathbb{Z}/n\mathbb{Z})^\times$ is given by the Carmichael function $\lambda(n)$. Therefore, the condition $a^4 \equiv 1 \pmod n$ for all $\gcd(a, n) = 1$ is equivalent to $$\lambda(n) \mid 4.$$`,
        String.raw`Let $n = 2^e p_1^{e_1} p_2^{e_2} \cdots p_k^{e_k}$ be the prime factorization of $n$. Then $\lambda(n) = \operatorname{lcm}(\lambda(2^e), \lambda(p_1^{e_1}), \dots, \lambda(p_k^{e_k}))$. Hence $\lambda(n) \mid 4$ if and only if $\lambda(2^e) \mid 4$ and $\lambda(p_i^{e_i}) \mid 4$ for every odd prime factor $p_i$.`,
        String.raw`For the power of $2$: the case $e = 0$ (odd $n$) contributes $\lambda(1) = 1$, and for $e \ge 1$ recall $\lambda(2) = 1$, $\lambda(4) = 2$, and $\lambda(2^e) = 2^{e-2}$ for $e \ge 3$ (so $\lambda(8) = 2$, $\lambda(16) = 4$). For $e \ge 3$, $\lambda(2^e) \mid 4$ holds if and only if $2^{e-2} \mid 4$, i.e. $e - 2 \le 2$, i.e. $e \le 4$; the small cases $e \in \{0, 1, 2\}$ give $\lambda \in \{1, 1, 2\}$, all dividing $4$. Therefore $v_2(n) \le 4$.`,
        String.raw`For each odd prime power $p^k$: recall $\lambda(p^k) = p^{k-1}(p - 1)$. For $p^{k-1}(p - 1)$ to divide $4$, since $p$ is an odd prime, we must have $k - 1 = 0 \implies k = 1$. Furthermore, $p - 1$ must divide $4$. The divisors of $4$ are $1, 2, 4$, so $p - 1 \in \{2, 4\}$, which gives $p \in \{3, 5\}$. No prime $p \ge 7$ is allowed, and no higher powers of $3$ or $5$ are allowed.`,
        String.raw`Consequently, $n$ must be of the form $n = 2^e \cdot 3^f \cdot 5^g$ with $0 \le e \le 4$, $0 \le f \le 1$, and $0 \le g \le 1$. These are precisely all positive integers dividing $2^4 \cdot 3 \cdot 5 = 240$.`,
        String.raw`Conversely, suppose $n \mid 240$, so $\lambda(n) \mid 4$. Let $a, b \in \mathbb{Z}$ satisfy $n \mid a^2 b + 1$. Then $a^2 b \equiv -1 \pmod n$. Any prime divisor of $\gcd(a, n)$ would divide $a^2 b$ and $n$, hence divide $1$, which is impossible. Thus $\gcd(a, n) = 1$.`,
        String.raw`Because $\gcd(a, n) = 1$ and $\lambda(n) \mid 4$, we have $a^4 \equiv 1 \pmod n$. Multiplying $a^2 b \equiv -1 \pmod n$ by $a^2$ yields $$a^4 b \equiv -a^2 \pmod n \implies 1 \cdot b \equiv -a^2 \pmod n \implies a^2 + b \equiv 0 \pmod n.$$ Thus $n \mid a^2 + b$ holds identically, confirming that all 20 divisors of $240$ are valid.`
      ]
    },
    {
      "id": "n13",
      "category": "nt",
      "difficulty": "medium",
      "stars": 3,
      "rating": 5,
      "confidence": "high",
      "text": String.raw`Let $p$ be an odd prime. Let $N_p$ be the number of nonzero residues $x\pmod p$ such that both $x$ and $1-x$ are nonzero quadratic residues modulo $p$. Determine $N_p$ explicitly according as $p\equiv1$ or $3\pmod4$.`,
      "why": String.raw`Counting residues $x$ with both $x$ and $1-x$ nonzero squares looks like a combinatorial question, but the right tool is the Legendre symbol $\chi$. The indicator of a nonzero square is $(1+\chi(x))/2$, so expanding the product leaves a single interesting sum, $\sum\chi(x(1-x))$. Completing the square turns it into $\chi(-1)\sum_y\chi(y^2-1)$, and that sum equals $-1$ because $t^2=y^2-1$ is the hyperbola $(y-t)(y+t)=1$, which has exactly $p-1$ points. The only dependence on $p$ that survives is $\chi(-1)$, giving $N_p=\frac{p-5}{4}$ for $p\equiv1\pmod4$ and $N_p=\frac{p-3}{4}$ for $p\equiv3\pmod4$. For $p=5$ the count is $0$ (the squares are $1,4$, and $1-1=0$, $1-4\equiv2$), and for $p=13$ it is $2$. Skeleton: write the count with indicators, expand, complete the square, and count points on a hyperbola.`,
      "hints": [
        String.raw`Use the Legendre symbol $\chi$, with $\chi(0)=0$, to write the indicator of a nonzero square.`,
        String.raw`Complete the square in $\sum_x\chi(x(1-x))$: a factor $\chi(-1)$ emerges.`,
        String.raw`Evaluate $\sum_y\chi(y^2-1)$ by counting pairs $(y,t)$ satisfying $t^2=y^2-1$.`
      ],
      "steps": [
        String.raw`Let $\chi$ be the Legendre symbol modulo $p$, extended by $\chi(0)=0$. For $x\ne0$, the indicator that $x$ is a nonzero square is $(1+\chi(x))/2$. Thus, excluding $x=0,1$, $$N_p=\frac14\sum_{x\in\mathbb F_p}(1+\chi(x))(1+\chi(1-x))-1.$$`,
        String.raw`Since $\sum_x\chi(x)=\sum_x\chi(1-x)=0$, this becomes $$N_p=\frac{p+S-4}{4},\qquad S:=\sum_{x\in\mathbb F_p}\chi(x(1-x)).$$`,
        String.raw`Complete the square: $$x(1-x)=-\frac14\bigl((2x-1)^2-1\bigr).$$ Since $x\mapsto2x-1$ is a bijection of $\mathbb F_p$, $$S=\chi(-1)\sum_{y\in\mathbb F_p}\chi(y^2-1).$$`,
        String.raw`Let $S_0=\sum_y\chi(y^2-1)$. For each fixed $y$, the number of $t$ satisfying $t^2=y^2-1$ equals $1+\chi(y^2-1)$. Hence the total number of pairs $(y,t)$ is $p+S_0$.`,
        String.raw`But $t^2=y^2-1$ is equivalent to $(y-t)(y+t)=1$. Choosing any nonzero $u=y-t$ determines uniquely $y+t=u^{-1}$, and because $2$ is invertible modulo $p$, this gives exactly $p-1$ pairs. Therefore $$p+S_0=p-1,$$ so $S_0=-1$.`,
        String.raw`Consequently $$N_p=\frac{p-4-\chi(-1)}4.$$ Since $\chi(-1)=1$ for $p\equiv1\pmod4$ and $\chi(-1)=-1$ for $p\equiv3\pmod4$, $$\boxed{N_p=\begin{cases}\dfrac{p-5}{4},&p\equiv1\pmod4,\\[4pt]\dfrac{p-3}{4},&p\equiv3\pmod4.\end{cases}}$$`
      ]
    },
    {
      "id": "n14",
      "category": "nt",
      "difficulty": "medium",
      "stars": 3,
      "rating": 5,
      "confidence": "high",
      "text": String.raw`Let $p$ be an odd prime, and let us work with the $p$ remainders $0,1,\dots,p-1$ after division by $p$ (so two quantities are 'equal' when their difference is divisible by $p$). For each remainder $a$, let $N(a)$ be the number of ordered pairs $(x,y)$ of remainders satisfying $$x^{2}+a\,xy+y^{2}\equiv 1\pmod p.$$ Determine the sum $$N(0)+N(1)+\cdots+N(p-1)$$ in terms of $p$.`,
      "why": String.raw`The individual counts $N(a)$ depend on whether $a^2-4$ is a square modulo $p$, but their sum does not, and the clean way to see this is to swap the order of counting. Fix $(x,y)$ and ask how many $a$ satisfy $axy\equiv1-x^2-y^2$. If $xy\not\equiv0$ there is exactly one such $a$, contributing $(p-1)^2$ triples. On the axes $a$ disappears from the equation: the four points $(\pm1,0)$ and $(0,\pm1)$ work for all $p$ values of $a$, while $(0,0)$ never works. The total is $(p-1)^2+4p=(p+1)^2$; for $p=3$ this is $16$. Computing each $N(a)$ separately is the trap: it varies between $p-1$, $p+1$ and $2p$, depending on whether $a\equiv\pm2$ (two parallel lines) and on whether $a^2-4$ is a square, and it takes a character sum to recombine. Skeleton: one set of triples, count it by fixing $(x,y)$, split on $xy\equiv0$.`,
      "hints": [
        String.raw`Swap quantifiers: count triples $(a,x,y)$ at once`,
        String.raw`For fixed $(x,y)$ the condition is linear in $a$: the count hinges on whether $p\mid xy$.`
      ],
      "steps": [
        String.raw`Reinterpret the sum as one counting set: $$\sum_{a=0}^{p-1}N(a)=\#\,T,\qquad T=\{(a,x,y)\in\{0,\dots,p-1\}^{3}: x^{2}+axy+y^{2}\equiv1\pmod p\},$$ since summing the per-$a$ fiber sizes counts the whole set $T$.`,
        String.raw`Count $T$ by fixing $(x,y)$ instead: with $x,y$ fixed the condition is a congruence that is linear in $a$, $$a\,(xy)\equiv1-x^{2}-y^{2}\pmod p,$$ and the number of admissible remainders $a$ depends only on whether $xy\equiv0\pmod p$.`,
        String.raw`Case $xy\not\equiv0\pmod p$: because $p$ is prime, $xy$ is invertible, so the linear congruence has exactly one solution $a$ among the $p$ remainders — for each of the $(p-1)^{2}$ pairs with $x\not\equiv0$ and $y\not\equiv0$. Contribution: $(p-1)^{2}$.`,
        String.raw`Case $y\equiv0$: the equation reduces to $x^{2}\equiv1$, i.e. $p\mid(x-1)(x+1)$; since $p$ is an odd prime this has exactly the two solutions $x\equiv\pm1$, and each admits every one of the $p$ remainders $a$, contributing $2p$. Symmetrically, $x\equiv0$ with $y\equiv\pm1$ contributes another $2p$. The off-axis case is disjoint from both axis cases, and the axis cases overlap only at $(0,0)$, where the congruence reads $0\equiv1$ and contributes nothing.`,
        String.raw`Total: $\#T=(p-1)^2+2p+2p=p^2+2p+1=(p+1)^2$, i.e. $N(0)+N(1)+\cdots+N(p-1)=(p+1)^2$.`
      ]
    },
    {
      "id": "n15",
      "category": "nt",
      "difficulty": "medium",
      "stars": 3,
      "rating": 5,
      "confidence": "high",
      "text": String.raw`Let $\mathcal F$ be the set of all bijections $f\colon\mathbb N\to\mathbb N$ satisfying $f(ab)=f(a)f(b)$ for all $a,b\in\mathbb N$. Define $g(n)=\min_{f\in\mathcal F}f(n)$. Prove that $g(g(n))=g(n)$ for all positive integers $n$.`,
      "why": String.raw`Multiplicative bijections of $\mathbb N$ are exactly the permutations of the primes extended multiplicatively: $f(1)=1$, and a bijection cannot send a prime to a composite. So $f(n)$ keeps the exponent pattern of $n$ and only relabels the primes. To make $f(n)$ as small as possible, use the smallest primes $2,3,5,\dots$ and give the largest exponent to the smallest prime. For example, $n=5^3\cdot7$ gives $g(n)=2^3\cdot3=24$. Two exchange arguments justify this: replace a used prime by a smaller unused one, and swap exponents between $p\lt q$ when the larger one sits on $q$, since $p^sq^r\le p^rq^s$ for $r\le s$. The resulting $g(n)$ already uses the first primes with nonincreasing exponents, so applying $g$ again changes nothing, and $g(g(n))=g(n)$. Skeleton: classify $\mathcal F$, compute $g$ by exchange arguments, and observe that sorting twice gives the same result as sorting once.`,
      "hints": [
        String.raw`Multiplicative bijections are just permutations of the primes`,
        String.raw`Pair larger exponents with smaller primes: rearrangement inequality`
      ],
      "steps": [
        String.raw`A multiplicative bijection fixes $1$: $f(1)=f(1\cdot1)=f(1)^2$, so $f(1)\in\{0,1\}$, and $f(1)=0$ would force $f(n)=f(1\cdot n)=f(1)f(n)=0$ for all $n$, contradicting bijectivity; hence $f(1)=1$. Prime-to-prime: if $f(p)=uv$ with $u,v\ge2$, surjectivity writes $u=f(a)$, $v=f(b)$, and $f(n)=1$ forces $n=1$ by injectivity, so $a,b\ge2$; then $f(ab)=f(a)f(b)=f(p)$ gives $p=ab$, a nontrivial factorization of $p$. Also $f(p)\ne1$. Onto the primes: given a prime $q$, surjectivity gives $q=f(m)$, and $m$ is prime by the same factorization argument, so $f$ restricts to a bijection of the set of primes. Multiplicativity plus $f(1)=1$ then shows $f$ is exactly that prime permutation extended to $\mathbb{N}$; and every prime permutation extended this way lies in $\mathcal F$.`,
        String.raw`Write $n=\prod_{i=1}^k p_i^{e_i}$, with the exponents sorted $e_1\ge\cdots\ge e_k\ge1$ and the $p_i$ relabelled accordingly. As $f$ runs through $\mathcal F$, $f(n)=\prod_{i=1}^k q_i^{e_i}$ with the $q_i=f(p_i)$ ranging over all $k$-tuples of distinct primes; these values form a nonempty set of positive integers, so a minimum is attained, and it suffices to show every non-canonical configuration strictly lowers. Two exchanges: (i) the set $\{q_1,\dots,q_k\}$ must be the first $k$ primes - if it omits $r$ and contains $s\gt r$, compose the permutation with the transposition $(s\ r)$; since $r$ is omitted, the prime mapped to $r$ is not one of the $p_i$, so exactly one factor changes, $s^{e_j}$ becoming $r^{e_j}$ with $e_j\ge1$, strictly lowering the product. (ii) Among assignments of $2,3,5,\dots$ to $e_1\ge\cdots\ge e_k$, if $p\lt q$ but $p$ carries the smaller exponent $r\lt s$ of $q$, swapping the two assignments replaces $p^r q^s$ by $p^s q^r=(p^rq^s)\,(p/q)^{s-r}\lt p^rq^s$. Hence larger exponents go to smaller primes, and $g(n)=2^{e_1}3^{e_2}\cdots p_{(k)}^{e_k}$, where $p_{(j)}$ denotes the $j$-th prime.`,
        String.raw`Therefore $g$ is well defined by $$g(n)=2^{e_1}3^{e_2}\cdots p_{(k)}^{e_k},\qquad g(1)=1,$$ a product over the first $k$ primes whose exponents $e_1\ge\cdots\ge e_k$ already sit in nonincreasing order on increasing primes.`,
        String.raw`Apply the rule to $g(n)$: its distinct prime divisors are exactly $2,3,\dots,p_{(k)}$ (all $e_i\ge1$), with the same exponent multiset $\{e_1,\dots,e_k\}$, already sorted, so neither exchange move applies. Hence $g(g(n))=g(n)=2^{e_1}3^{e_2}\cdots p_{(k)}^{e_k}$, and $g(g(1))=g(1)=1$.`
      ]
    },
    {
      "id": "n16",
      "category": "nt",
      "difficulty": "medium",
      "stars": 3,
      "rating": 5.5,
      "confidence": "high",
      "text": String.raw`Let $n\ge2$ be an integer such that $$n\mid a^{\,n+1}-a\qquad\text{for every integer }a.$$
(a) Prove that this holds if and only if $n$ is squarefree and $p-1\mid n$ for every prime $p\mid n$.
(b) Find all such $n$ having at most three distinct prime factors.
(c) Show that $n=1806$ also has the property.`,
      "why": String.raw`This is Korselt's criterion shifted by one: instead of $a^n\equiv a$ we need $a^{n+1}\equiv a$, and correspondingly $p-1$ must divide $n$ rather than $n-1$. Squarefreeness is forced by $a=p$, since $p^{n+1}-p$ is divisible by $p$ exactly once. A primitive root modulo $p$ then forces $p-1\mid n$, and Fermat plus CRT gives the converse. The fun is the classification: $p-1\mid n$ for the largest prime $p$ of $n$ forces $p-1$ to divide the product of the smaller primes, giving the chain $2$, $2\cdot3$, $2\cdot3\cdot7$ in which each new prime is one more than the product so far. With at most three primes the answer is $2,6,42$. The chain continues once more, since $43$ is prime and $1806=42\cdot43$ works; it then stops, because $1807=13\cdot139$ is composite, and the full classification is known to be $2,6,42,1806$. Skeleton: necessity at $a=p$, then primitive roots; sufficiency by Fermat and CRT; then a greedy chain argument.`,
      "hints": [
        String.raw`Take $a=p$ to show $n$ is squarefree, then take $a$ a primitive root modulo $p$.`,
        String.raw`For the converse, apply Fermat prime by prime and glue with CRT.`,
        String.raw`For $n=pqr$ with $p\lt q\lt r$: $q-1\mid pqr$ and the coprimalities force $q-1\mid p$, then $r-1\mid6$.`
      ],
      "steps": [
        String.raw`Assume the property. If $p^{2}\mid n$, take $a=p$: $v_p(p^{n+1}-p)=1+v_p(p^{n}-1)=1\lt v_p(n)$ contradiction. Hence $n$ squarefree.`,
        String.raw`Fix a prime $p\mid n$. For every $a$ with $p\nmid a$: $a^{n}\equiv1\pmod p$; the unit group is cyclic of order $p-1$, so a generator gives $p-1\mid n$.`,
        String.raw`Conversely let $n$ be squarefree with $p-1\mid n$ for all $p\mid n$. If $p\mid a$ then $a^{n+1}-a\equiv0\pmod p$; if not, $a^{n}\equiv1$ by Fermat since $(p-1)\mid n$. Each prime divisor of $n$ divides $a^{n+1}-a$, and $n$ is their product, so CRT over the pairwise coprime prime divisors finishes.`,
        String.raw`At most three primes. If $n=p$, then $p-1\mid p$ forces $p=2$. If $n=pq$ with $p\lt q$, then $q-1\mid pq$ and $\gcd(q-1,q)=1$ give $q-1\mid p$; since $q-1\ge p$, $q=p+1$, so $(p,q)=(2,3)$ and $n=6$. If $n=pqr$ with $p\lt q\lt r$, then $q-1\mid pqr$; $\gcd(q-1,q)=1$ (as $0\lt q-1\lt q$ with $q$ prime) gives $q-1\mid pr$, and $\gcd(q-1,r)=1$ (as $q-1\lt r$) gives $q-1\mid p$, so again $(p,q)=(2,3)$. Then $r-1\mid 6r$ with $\gcd(r-1,r)=1$ gives $r-1\mid 6$, and $r\gt 3$ leaves $r=7$, so $n=42$. Checking $1,2,6\mid 42$, $1,2\mid 6$ and $1\mid2$ confirms $n=2,6,42$.`,
        String.raw`$1806=2\cdot3\cdot7\cdot43$ is squarefree and $1,2,6,42$ all divide $1806=42\cdot43$, so the criterion of part 1 holds. Hence the answer to part 2 is $\{2,6,42\}$, and the list does not stop at $42$.`
      ]
    },
    {
      "id": "n17",
      "category": "nt",
      "difficulty": "medium",
      "stars": 3,
      "rating": 5.5,
      "confidence": "high",
      "text": String.raw`Find all pairs of positive integers $(a,b)$ such that $$ab\mid a^{2}+b^{2}+2.$$`,
      "why": String.raw`The surprise is that the quotient $k=(a^2+b^2+2)/ab$ can only be $4$. Vieta jumping explains why: fixing $a$, the second root of $x^2-kax+a^2+2=0$ is $b'=ka-b=(a^2+2)/b$, which is a positive integer and is smaller than $b$ when $a\lt b$. Repeatedly replacing the larger entry by its mate keeps $k$ fixed and shrinks the pair, until it reaches a diagonal solution, and $a^2\mid2a^2+2$ forces $a=1$. So every solution descends to $(1,1)$, where $k=4$. Running the jump backwards produces all solutions: consecutive terms of $1,1,3,11,41,153,571,\dots$, defined by $x_{r+2}=4x_{r+1}-x_r$, together with their reversals. Skeleton: fix the quotient, jump to the smaller root, show the descent ends on the diagonal, then reverse the jumps. The trap is to look for many quotients; descent shows they all collapse to a single value.`,
      "hints": [
        String.raw`Set $k=(a^2+b^2+2)/ab$; the mate root $b'=ka-b$ is positive`,
        String.raw`Descend to $a=b$: forces $a=1$ and $k=4$ throughout`,
        String.raw`Reverse the descent to generate all solutions from $(1,1)$: which map does one step run?`
      ],
      "steps": [
        String.raw`Set $k=(a^{2}+b^{2}+2)/(ab)\in\mathbb Z_{\gt 0}$. Diagonal: $a=b$ gives $a^{2}\mid 2a^{2}+2$, i.e. $a^{2}\mid 2$, so $(1,1)$ - with quotient $4$ - is the only diagonal solution.`,
        String.raw`Fix $a$ and read the equation as $x^{2}-kax+(a^{2}+2)=0$ at $x=b$. The mate root $b'=ka-b$ is an integer with $bb'=a^{2}+2\gt 0$, hence positive, and $(a,b')$ is again a positive solution with the same $k$.`,
        String.raw`For $a\lt b$: $b\ge a+1$ gives $b^{2}-a^{2}\ge 2a+1\ge 3\gt 2$, so $b^{2}\gt a^{2}+2=bb'$ and $0\lt b'\lt b$. Ordering each pair, descent on the maximum is strict and lands on the diagonal, i.e. at $(1,1)$ with $k=4$. Conclusion: the quotient is always $4$.`,
        String.raw`With $k=4$, define $x_0=x_1=1$ and $x_{r+2}=4x_{r+1}-x_r$. Thus $x_0,x_1,x_2,x_3,\dots=1,1,3,11,41,153,571,2131,\dots$. The base pair $(x_0,x_1)=(1,1)$ is a solution, and whenever $(u,v)$ is a solution with quotient $4$, its Vieta shift $(v,4v-u)$ is also a solution. Hence every adjacent pair $(x_r,x_{r+1})$ is a solution.`,
        String.raw`Conversely, let $a\le b$ be any solution. If $a=b$, Step 1 gives $(a,b)=(1,1)$. Assume $a\lt b$. For $a=1$, the equation $1+b^2+2=4b$ gives $(b-1)(b-3)=0$, hence $b=3$. For $a=2$, the equation $b^2-8b+6=0$ has discriminant $40$, so there is no integer $b$. Finally suppose $a\ge3$. The Vieta mate is $$b'=4a-b=\frac{a^2+2}{b}\gt 0.$$ Since $b\ge a+1$, $$b'\le\frac{a^2+2}{a+1}\lt a,$$ because $a\gt 2$. Thus $(b',a)$ is a positive solution with strictly smaller maximum. Induction on the maximum shows $(b',a)=(x_r,x_{r+1})$ for some $r$, and then $a=x_{r+1}$ and $$b=4a-b'=x_{r+2}.$$ Therefore every solution with $a\le b$ is $(x_r,x_{r+1})$, and symmetry gives the reverses.`
      ]
    },
    {
      "id": "n18",
      "category": "nt",
      "difficulty": "medium",
      "stars": 3,
      "rating": 6.5,
      "confidence": "high",
      "text": String.raw`Determine all pairs of positive integers $(a,b)$ such that both divisibilities hold: $$b-a \mid a^{2}+b^{2} \qquad \text{and} \qquad a+b \mid ab+1.$$`,
      "why": String.raw`The natural variables are the gap $d=b-a$ and the sum $s=a+b$. Modulo $d$ we have $a^2+b^2\equiv2a^2$, and modulo $s$ we have $ab+1\equiv1-a^2$, so the system becomes $d\mid2a^2$ and $s\mid a^2-1$. The second condition makes $a$ and $b$ coprime (a common prime would divide $ab+1$), so $d$ is coprime to $a$, and the gap must be $1$ or $2$. Gap $2$ gives $2(a+1)\mid(a-1)(a+1)$, which holds exactly when $a$ is odd. Gap $1$ forces $s\mid3$, so only $(1,2)$ works. Answer: $(a,a+2)$ with $a$ odd, the pair $(1,2)$, and their reversals. The trap is the even-gap-$2$ pairs such as $(2,4)$: they pass the weaker test $s\mid d^2-4$ obtained by combining the two conditions, but fail the original one, since $ab+1=9$ is odd while $a+b=6$ is even. Skeleton: change variables, prove coprimality, bound the gap, and treat the two cases.`,
      "hints": [
        String.raw`Reduce mod $b-a$ and $a+b$: $d\mid2a^2$, $s\mid a^2-1$`,
        String.raw`Descend to $\gcd(a,b)=1$, then Euclid gives $d\mid2$`,
        String.raw`Gap 2: $a$ odd works; gap 1: $4(a^2-1)\equiv-3$ forces $s=3$`
      ],
      "steps": [
        String.raw`Symmetry and exclusion of the diagonal: the system is invariant under $a\leftrightarrow b$ since $b-a\mapsto a-b$ generates the same ideal, and $a=b$ is impossible as $0\nmid 2a^2$. Set $d=b-a\ge1$, $s=a+b$, work with $a\lt b$, reflect at the end.`,
        String.raw`Lemma 1 (exact reductions). $a^2+b^2=2a^2+(b-a)(b+a)$ gives $b-a\mid a^2+b^2\iff d\mid 2a^2$; $ab+1=a(a+b)-(a^2-1)$ gives $a+b\mid ab+1\iff s\mid a^2-1$. Both are biconditionals.`,
        String.raw`Lemma 2 (coprimality descent). Any prime $p\mid\gcd(a,b)$ divides $ab$ and $a+b$; as $a+b\mid ab+1$, also $p\mid ab+1$, so $p\mid1$: contradiction. Hence $\gcd(a,b)=1$.`,
        String.raw`Lemma 3 (gap collapse). $\gcd(d,a)=\gcd(b-a,a)=\gcd(b,a)=1$, so $\gcd(d,a^2)=1$; with $d\mid 2a^2$ Euclid's lemma yields $d\mid2$, i.e. $d\in\{1,2\}$.`,
        String.raw`Case $d=1$: $s=2a+1$ is odd, $s\mid a^2-1$; multiply by the unit $4$: $4(a^2-1)=(2a)^2-4\equiv(-1)^2-4=-3\pmod s$, so $s\mid3$, forcing $s=3$, $a=1$, $b=2$: the sporadic $(1,2)$ and mirror $(2,1)$.`,
        String.raw`Case $d=2$: $2\mid 2a^2$ automatic; $s=2(a+1)\mid(a-1)(a+1)\iff 2\mid a-1\iff a$ odd. Solutions exactly $(a,a+2)$ with $a$ odd, plus mirrors $(a+2,a)$; direct substitution: $a^2+(a+2)^2$ even and $ab+1=(a+1)^2$ divisible by $2(a+1)$ iff $a$ odd.`,
        String.raw`Pitfall (why stopping early is wrong): the relaxed system $d\mid2a^2\wedge s\mid d^2-4$ is necessary for the original (identity $(b-a)^2-4=(a+b)^2-4(ab+1)$) but strictly weaker on even $s$; every $(2k,2k+2)$ passes relaxed ($s\mid0$) and fails the original since $ab+1=(a+1)^2$ is odd while $a+b$ is even. Completeness: Lemmas 1-3 leave no other branch. The solutions are exactly the pairs $(a,a+2)$ and $(a+2,a)$ with $a\ge1$ odd, together with $(1,2)$ and $(2,1)$.`
      ]
    },
    {
      "id": "n19",
      "category": "nt",
      "difficulty": "hard",
      "stars": 4,
      "rating": 7,
      "confidence": "high",
      "text": String.raw`Let $n\ge 2$ be an integer, and let $N(n)$ be the number of residue classes $a$ modulo $n$ satisfying $a^{n}\equiv a\pmod n$. Here $\mathrm{rad}(n)$ denotes the product of the distinct prime divisors of $n$.
(a) Find a closed form for $N(n)$ in terms of the prime divisors of $n$.
(b) Prove that $N(n)\le \mathrm{rad}(n)$, with equality if and only if $p-1$ divides $n-1$ for every prime $p\mid n$. (Squarefreeness is NOT part of this criterion: $n=4$ and $n=9$ are equality cases.)
(c) Which famous composite integers give $N(n)=n$?`,
      "why": String.raw`Split by CRT and count modulo each prime power $p^k$ dividing $n$. A nonzero non-unit $x$ fails, since $x^n\equiv0\not\equiv x$, and $0$ works. A unit works when $x^{n-1}\equiv1$, which has $\gcd(n-1,p^{k-1}(p-1))$ solutions in the cyclic unit group. The decisive observation is that $p\mid n$ makes $p\nmid n-1$, so this gcd is just $\gcd(n-1,p-1)$ and the exponent $k$ disappears. (Modulo $2^k$ the unit group is not cyclic, but $n-1$ is odd, so only $x\equiv1$ works and the same formula holds.) Hence $N(n)=\prod_{p\mid n}(\gcd(n-1,p-1)+1)$, which is at most $\mathrm{rad}(n)$, with equality exactly when $p-1\mid n-1$ for all $p\mid n$. Prime powers can be equality cases: $N(9)=3$. Having $N(n)=n$ additionally requires $\mathrm{rad}(n)=n$, so the composite solutions are squarefree numbers with $p-1\mid n-1$, which is Korselt's criterion: the Carmichael numbers $561,1105,1729,\dots$. Skeleton: CRT, local count, compare with $\mathrm{rad}$.`,
      "hints": [
        String.raw`Split modulo prime powers of $n$: CRT makes $N(n)$ a product of local counts.`,
        String.raw`Units mod $p^{k}$ form a cyclic group of order $p^{k-1}(p-1)$: recall how many roots $x^{m}\equiv1$ has there.`,
        String.raw`Handle $2^{k}$ separately: $(\mathbb{Z}/2^{k}\mathbb{Z})^{\times}$ has no element of odd order besides $1$.`,
        String.raw`Bound each local factor by $p$ to get $N(n)\le\mathrm{rad}(n)$; part 3 invokes Korselt's criterion.`
      ],
      "steps": [
        String.raw`CRT. Writing $n=\prod p^{k}$, the congruence $x^{n}\equiv x\pmod n$ is equivalent to the system modulo each $p^{k}$, so $N(n)=\prod N(p^{k})$; each local count $N(p^{k})=\#\{x\bmod p^{k}: x^{n}\equiv x\}$ depends on $n$, not just $p^{k}$.`,
        String.raw`Odd primes. The class $x\equiv0$ works. For $x\not\equiv0$: the units $(\mathbb Z/p^{k})^{\times}$ are cyclic of order $p^{k-1}(p-1)$, so $x^{n-1}\equiv1$ has $\gcd(n-1,\,p^{k-1}(p-1))$ solutions; since $p\mid n$ gives $n-1\equiv-1\pmod p$, no factor $p$ divides $n-1$, and this gcd equals $\gcd(n-1,p-1)$. Non-units: $x=pv\not\equiv0$ has $v_{p}(x^{n})=nv\ge n\ge k$ (as $k=v_p(n)\le\log_2n\lt n$ for $n\ge2$), so $x^{n}\equiv0\not\equiv x$. Hence $N(p^{k})=\gcd(n-1,p-1)+1$ for every $k\ge1$ - independent of $k$.`,
        String.raw`The prime 2. $n$ even forces $n-1$ odd. Modulo $2^{k}$ with $k\ge2$: an even class $x\not\equiv0$ fails by the same count as the non-units of Step 1, since $2^{k}\mid n$ gives $n\ge 2^{k}\gt k$, hence $v_{2}(x^{n})=n\,v_{2}(x)\ge n\gt k$ so $x^{n}\equiv0\not\equiv x\pmod{2^{k}}$. An odd $x$ with $x^{n-1}\equiv1$ has odd order in $C_2\times C_{2^{k-2}}$, whose only odd-order element is $1$; so among odd classes only $x\equiv1$ works, and $x\equiv0$ works, giving $N(2^{k})=2=\gcd(n-1,1)+1$ (check $k=1$ directly: both classes work, $N(2)=2$).`,
        String.raw`Multiply the local counts: $N(n)=\prod_{p\mid n}\bigl(\gcd(n-1,p-1)+1\bigr)$, which proves part 1.`,
        String.raw`Part 2: each factor satisfies $\gcd(n-1,p-1)+1\le p$, with equality iff $p-1\mid n-1$. Multiplying over $p\mid n$: $N(n)\le\prod_{p\mid n}p=\mathrm{rad}(n)$; equality in a product of positive integers each bounded by a respective bound holds iff every factor attains its bound, i.e. iff $p-1\mid n-1$ for every $p\mid n$. Exponents are invisible to the formula, so the criterion does NOT include squarefreeness: $N(4)=\gcd(3,1)+1=2=\mathrm{rad}(4)$ and $N(9)=\gcd(8,2)+1=3=\mathrm{rad}(9)$ are genuine equality cases with $k\ge2$. Part 3 bookkeeping starts here: if $N(n)=n$, then $\mathrm{rad}(n)\ge n$ with equality only for squarefree $n$, so $n$ is squarefree and $N(n)=\mathrm{rad}(n)$, and part 2's criterion applies; conversely squarefree $n$ with $p-1\mid n-1$ for all $p\mid n$ gives $N(n)=\prod p=n$.`,
        String.raw`Part 3: composite $n$ with $N(n)=n$ are exactly the Carmichael numbers - squarefree with $p-1\mid n-1$ for all $p\mid n$ (Korselt's criterion). The smallest, $561=3\cdot11\cdot17$, satisfies $2,10,16\mid560$, so $a^{561}\equiv a\pmod{561}$ for every integer $a$: every base is a Fermat liar. The composite equality cases up to 3000 are exactly $561,1105,1729,2465,2821$.`
      ]
    },
    {
      "id": "n20",
      "category": "nt",
      "difficulty": "hard",
      "stars": 4,
      "rating": 7,
      "confidence": "high",
      "text": String.raw`Determine all positive integers $n$ for which each of the congruences $$x^2\equiv1\pmod n,\qquad x^2+x+1\equiv0\pmod n$$ has exactly $8$ incongruent solutions modulo $n$.`,
      "why": String.raw`Both counts multiply over prime powers by CRT, so the problem is purely local. The congruence $x^2\equiv1$ has two roots modulo each odd prime power, so odd $n$ with $\omega(n)$ prime factors has $2^{\omega(n)}$ roots; a factor of $2$ would change this count. The congruence $x^2+x+1\equiv0$ asks for elements of order $3$. It has two roots modulo $p^e$ when $p\equiv1\pmod3$, and these lift uniquely because $2x+1\not\equiv0$. It has one root modulo $3$ but none modulo $9$, and no roots modulo $2$ or modulo any $p\equiv2\pmod3$. Eight roots of the second congruence therefore need exactly three primes $\equiv1\pmod3$, possibly times a single factor $3$. That factor $3$ would push the count for $x^2\equiv1$ to $16$, so it is excluded. Answer: $n=p_1^{e_1}p_2^{e_2}p_3^{e_3}$ with distinct primes $p_i\equiv1\pmod3$, the smallest being $1729=7\cdot13\cdot19$. Skeleton: CRT, local root counts, then match the two totals.`,
      "hints": [
        String.raw`Count roots modulo prime powers of $n$ and glue via CRT: which classes solve $x^2\equiv1$ modulo $p^e$?`,
        String.raw`Multiply $x^2+x+1$ by $x-1$: its roots are elements of order $3$ mod $p^e$: which $p$ admit them?`,
        String.raw`Check $2$ and $3$ separately, and note each root lifts uniquely since $2x+1$ is a unit there.`,
        String.raw`Eight roots of each type: the cubic count fixes the primes, the $x^2\equiv1$ count then excludes the factor $3$.`
      ],
      "steps": [
        String.raw`By the Chinese remainder theorem, for $n=\prod p^{e}$ the number of solutions of either congruence modulo $n$ is the product of the numbers of solutions modulo the prime powers $p^{e}$. For $x^2\equiv1\pmod{p^e}$ with odd prime $p$, there are exactly two roots, $\pm1$. Thus for odd $n$, the number of roots is $2^{\omega(n)}$.`,
        String.raw`For $x^2+x+1\equiv0\pmod{p^e}$ with $p\ne3$, multiplying by $x-1$ gives $x^3\equiv1$, while $x\not\equiv1\pmod p$. Hence a root exists modulo $p$ exactly when $3\mid p-1$, i.e. $p\equiv1\pmod3$, and then there are exactly two roots. Each root lifts uniquely to every $p^e$ because $2x+1$ is nonzero modulo $p$ at a root.`,
        String.raw`Modulo $3$, the polynomial has the single root $x\equiv1$. It has no root modulo $9$: writing $x=1+3t$ gives $x^2+x+1\equiv3\pmod9$. Therefore a factor $3$ may occur only to the first power, and it contributes one root. Modulo $2$ there is no root at all.`,
        String.raw`Thus exactly $8$ roots of the cubic congruence force $$n=3^\varepsilon p_1^{e_1}p_2^{e_2}p_3^{e_3},$$ where $\varepsilon\in\{0,1\}$ and the distinct $p_i\equiv1\pmod3$.`,
        String.raw`For $x^2\equiv1\pmod n$, the same modulus has exactly $2^{3+\varepsilon}$ roots, so requiring exactly $8$ forces $\varepsilon=0$.`,
        String.raw`Hence the complete solution set is $$\boxed{n=p_1^{e_1}p_2^{e_2}p_3^{e_3}},$$ where $p_1,p_2,p_3$ are distinct primes congruent to $1\pmod3$ (equivalently $1\pmod6$), and $e_1,e_2,e_3\ge1$.`
      ]
    },
    {
      "id": "n21",
      "category": "nt",
      "difficulty": "hard",
      "stars": 4,
      "rating": 7,
      "confidence": "high",
      "text": String.raw`A lattice point is a point $(x,y)$ whose two coordinates are integers. It is called $\mathit{visible}$ from the origin if the open line segment joining it to $(0,0)$ contains no lattice point. For a positive integer $m$, let $C_m$ be the set of lattice points on the circle $x^{2}+y^{2}=m$ centered at the origin.

Determine, in terms of the prime factorization of $m$, exactly when $C_m$ is nonempty but contains $\mathit{no}$ point visible from the origin.`,
      "why": String.raw`Visible means $\gcd(x,y)=1$, so the question is when every representation $m=x^2+y^2$ has a common factor. There are exactly two ways this can be forced. First, a prime $q\equiv3\pmod4$ dividing $x^2+y^2$ must divide both $x$ and $y$, because $-1$ is not a square modulo $q$. Second, $4\mid x^2+y^2$ forces both coordinates to be even, since squares are $0$ or $1$ modulo $4$. Conversely, if $m$ has neither, it is a product of primes $p\equiv1\pmod4$ with at most one factor $2$, and choosing one Gaussian prime above each $p$ (never both conjugates) produces a primitive representation, as in $65=1^2+8^2$. So, given that $C_m$ is nonempty (every prime $q\equiv3\pmod4$ appears to an even power), it has no visible point exactly when $4\mid m$ or some $q\equiv3\pmod4$ divides $m$. The smallest examples are $m=4$ and $m=9$. Skeleton: visibility as coprimality, two obstructions, then a Gaussian-integer construction for the converse.`,
      "hints": [
        String.raw`Compute $C_m$ by hand for small $m$: what feature of $m$ forces $\gcd(x,y)\gt1$?`,
        String.raw`In $\mathbb{Z}[i]$ primes $q\equiv3\pmod4$ stay prime: how does that constrain the coordinates? Handle $4\mid m$ too.`,
        String.raw`For the converse, build the point in $\mathbb{Z}[i]$: pick one factor $\pi_i$ above each $p_i\equiv1\pmod4$.`
      ],
      "steps": [
        String.raw`Visibility ⟺ coprimality. If $d=\gcd(|x|,|y|)\gt 1$ then $(x/d,y/d)$ is a lattice point strictly inside the segment; if $\gcd=1$ and $(u,v)$ is a lattice point on the open segment, then $(u,v)=\frac{k}{n}(x,y)$ in lowest terms forces $n\mid x$ and $n\mid y$, $n=1$, contradiction. So visible ⟺ $\gcd(|x|,|y|)=1$ (the only visible axis points of all are $(\pm1,0)$ and $(0,\pm1)$).`,
        String.raw`Obstruction lemma (negative direction). (i) Let $q\equiv3\pmod4$ be prime, $q\mid x^2+y^2$. If $q\nmid y$ then $-1\equiv(xy^{-1})^2\pmod q$, impossible by Euler's criterion since $(-1)^{(q-1)/2}=-1$; hence $q\mid y$, then $q\mid x$ symmetrically. (ii) If $4\mid x^2+y^2$, squares mod $4$ are $0,1$, so both coordinates are even.`,
        String.raw`Form the forward half. If $m=2^{\alpha}\prod p^{a}\prod q^{2b}$ with $\alpha\ge2$ or some $b\ge1$: every prime $q\equiv3\pmod4$ enters to an even exponent, so by Fermat's two-square theorem $C_m\ne\varnothing$; and in any point of $C_m$: an even exponent $2b\ge2$ still means $q\mid m=x^2+y^2$, so lemma (i) gives $q\mid\gcd(x,y)$; $\alpha\ge2$ means $4\mid x^2+y^2$ so lemma (ii) gives $2\mid\gcd(x,y)$. Either way no point is visible.`,
        String.raw`Backward half via one-sided splitting. Assume $C_m\ne\varnothing$ and no visible point exists. Lemma (i) contrapositive + (ii): it suffices to show: if $4\nmid m$ and no $q\equiv3\pmod4$ divides $m$, then a visible point exists. Write $m=2^{\varepsilon}\prod_{i}p_i^{a_i}$, $\varepsilon\in\{0,1\}$, $p_i\equiv1\pmod4$. In the UFD $\mathbb Z[i]$ each $p_i=\pi_i\bar\pi_i$ splits with $\pi_i,\bar\pi_i$ non-associate Gaussian primes, and $2=-i(1+i)^2$. Set $z=(1+i)^{\varepsilon}\prod_i\pi_i^{a_i}$; then $N(z)=m$, so $x=\mathrm{Re}\,z,\ y=\mathrm{Im}\,z$ lie on $C_m$.`,
        String.raw`Primitivity of $z$. Suppose a rational prime $r$ divides both coordinates: then $z=r\,w$ for some $w\in\mathbb Z[i]$. Cases: $r\equiv3\pmod4$ is prime in $\mathbb Z[i]$, so $r\mid z\Rightarrow r\mid N(z)=m$ - excluded. $r=2$: taking norms, $4\mid N(z)=m$ - excluded by $\varepsilon\le1$. $r=p_j$: $z=p_jw=\pi_j\bar\pi_j w$, so unique factorization in $\mathbb Z[i]$ forces $\bar\pi_j\mid z$; but the prime factorization of $z$ contains only $\pi_j$ (to the power $a_j$) and possibly $1+i$, while $\pi_j$ and $\bar\pi_j$ are non-associate primes ($\pi_j\bar\pi_j^{-1}\notin\{\pm1,\pm i\}$ since their quotient has arguments $\pm2\arg\pi_j\not\equiv0$) - contradiction. Thus $\gcd(x,y)=1$: a visible point exists. Combining with the nonemptiness constraint (odd $q$-exponents forbidden - they make $C_m=\varnothing$ by lemma (i)) gives exactly the boxed form with $\alpha\ge2$ or some $b\ge1$.`
      ]
    },
    {
      "id": "n22",
      "category": "nt",
      "difficulty": "hard",
      "stars": 4,
      "rating": 7.5,
      "confidence": "high",
      "text": String.raw`Determine all quadruples of positive integers $(a,b,x,y)$ with $a,b$ odd satisfying $$x^2+y^2+1=(a^4+b^4+1)(xy+1).$$`,
      "why": String.raw`Set $K=a^4+b^4+1$; the equation $x^2-Kxy+y^2=K-1$ is a Vieta-jumping setup, and the answer is that no quadruples exist. Order a solution with $x\ge y$ and replace $x$ by its mate $x'=Ky-x=(y^2+1-K)/x$. The mate cannot be negative, since then $x(x-Ky)$ would exceed $K$ while $K-y^2-1$ is less than $K$. It cannot be zero, since that needs $a^4+b^4=y^2$, impossible because odd fourth powers are $1\bmod16$ and a square is never $2\bmod16$. So $0\lt x'\lt y$, and descent reaches a solution with $x=y$, where $(2-K)x^2=K-1$ has no positive solution since $K\ge3$. The oddness hypothesis gives a cheap proof of the zero case; even without it, $a^4+b^4=y^2$ has no positive solutions by Fermat's theorem. Skeleton: quadratic in $x$, show the mate is positive and smaller, descend, rule out the diagonal.`,
      "hints": [
        String.raw`Odd $a,b$ fix $K=a^4+b^4+1$ modulo $16$: compute it and recall square residues mod $16$.`,
        String.raw`Vieta mate $x'=Ky-x$: $x'\lt0$ overshoots in magnitude, $x'=0$ needs $y^2\equiv2\pmod{16}$.`,
        String.raw`Descent on the maximum; the minimal solution must have $x=y$, where $(2-K)x^2=K-1$ is impossible`
      ],
      "steps": [
        String.raw`Let $K=a^4+b^4+1$. Since $a,b$ are odd, $K\equiv3\pmod{16}$ and in particular $K\ge3$. The equation is $$x^2-Kxy+y^2+1-K=0,$$ viewed as a quadratic in $x$.`,
        String.raw`The equation is symmetric in $x,y$; take a positive solution and order it so that $x\ge y$. The other root of the quadratic is $x'=Ky-x$, an integer, and Vieta gives $$xx'=y^2+1-K.$$`,
        String.raw`We claim $x'\gt 0$. If $x'\lt 0$, then $x\gt Ky$, so $$x(x-Ky)=K-y^2-1,$$ but the left side is at least $Ky+1\gt K$, while the right side is $\lt K$, impossible. If $x'=0$, then $K=y^2+1$, so $y^2=a^4+b^4$. But $a,b$ odd gives $a^4+b^4\equiv2\pmod{16}$, whereas a square is never $2\pmod{16}$. Thus $x'\gt 0$.`,
        String.raw`Because $x'\gt 0$, Vieta gives $y^2+1-K\gt 0$, hence $K\le y^2$. Therefore $$x'=\frac{y^2+1-K}{x}\lt \frac{y^2}{x}\le y,$$ so $0\lt  x'\lt  y$. The pair $(y,x')$ is another positive integer solution, and whenever $x\gt  y$ its maximum coordinate $y$ is strictly smaller than the old maximum $x$.`,
        String.raw`Suppose a positive integer solution exists, and choose one whose maximum $\max(x,y)$ is minimal; order it $x\ge y$. Steps 3-4 give a solution $(y,x')$ with $0\lt  x'\lt  y$; minimality of the maximum then forces $x=y$, for $x\gt  y$ would strictly lower it. Substituting $x=y$ yields $(2-K)x^2=K-1$, whose left side is negative and right side positive for $K\ge3$ - impossible.`,
        String.raw`Hence the solution set is empty: no quadruple of positive integers $(a,b,x,y)$ with $a,b$ odd satisfies $x^2+y^2+1=(a^4+b^4+1)(xy+1)$.`
      ]
    },
    {
      "id": "n23",
      "category": "nt",
      "difficulty": "hard",
      "stars": 4,
      "rating": 8,
      "confidence": "high",
      "text": String.raw`Determine all infinite strictly increasing sequences of positive integers $a_1\lt a_2\lt a_3\lt \cdots$ such that $a_n\mid a_{n+1}$ and $$\varphi(a_{n+1})=a_n+\varphi(a_n)$$ for all $n\ge1$.`,
      "why": String.raw`The first insight is that the recurrence forces $\varphi(a_n)\mid a_n$ for every term. Indeed $a_n\mid a_{n+1}$ gives $\varphi(a_n)\mid\varphi(a_{n+1})=a_n+\varphi(a_n)$. Since $m/\varphi(m)=\prod_{q\mid m}\frac{q}{q-1}$, a $2$-adic count shows that the only $m\gt1$ with $\varphi(m)\mid m$ are $2^r$ and $2^r3^s$. A pure power of $2$ cannot be followed by a valid next term, so each term is $2^r3^s$ with $r,s\ge1$, hence $a_n=3\varphi(a_n)$ and $\varphi(a_{n+1})=4\varphi(a_n)$, which forces $a_{n+1}=4a_n$. So the sequences are $a_n=2^r3^s4^{n-1}$, plus one exception that is easy to miss: starting at $a_1=1$, the lemma does not apply, $\varphi(a_2)=2$ leaves $a_2\in\{3,4,6\}$, and only $6$ continues, giving $1,6,24,96,\dots$. Skeleton: derive $\varphi(a_n)\mid a_n$, classify such numbers, show the ratio $4$ is rigid, and treat $a_1=1$ separately.`,
      "hints": [
        String.raw`Divisibility gives $\varphi(a_n)\mid\varphi(a_{n+1})$, so $\varphi(a_n)\mid a_n$`,
        String.raw`Classify $\varphi(m)\mid m$: $v_2$ count forces $m=2^r3^s$`,
        String.raw`Then $\varphi(a_{n+1})=4\varphi(a_n)$: multiply by 4; handle $a_1=1$`
      ],
      "steps": [
        String.raw`Because $a_n\mid a_{n+1}$ we have $\varphi(a_n)\mid\varphi(a_{n+1})$: it suffices to adjoin one prime at a time, since for any prime $p$ the ratio $\varphi(mp)/\varphi(m)$ equals $p$ when $p\mid m$ and $p-1$ when $p\nmid m$, an integer either way. The recurrence $\varphi(a_{n+1})=a_n+\varphi(a_n)$ then implies $\varphi(a_n)\mid a_n$ for every $n$, so $a_n/\varphi(a_n)$ is an integer for every $n$.`,
        String.raw`We use the lemma: if $m\gt 1$ and $\varphi(m)\mid m$, then $m=2^r3^s$ with $r\ge1$ and $s\ge0$. Indeed, $$\frac{m}{\varphi(m)}=\prod_{q\mid m}\frac{q}{q-1}.$$ If $m$ were odd, the numerator would be odd while every denominator $q-1$ is even, so the ratio could not be an integer. Thus $2\mid m$, and the numerator has exactly one factor of $2$. Each distinct odd prime divisor contributes an additional factor of $2$ to the denominator, so there can be at most one distinct odd prime divisor. If there is one, say $p$, then $$\frac{m}{\varphi(m)}=\frac{2p}{p-1}\in\mathbb Z,$$ hence $p-1\mid2p$. Since $\gcd(p-1,p)=1$, we get $p-1\mid2$, so $p=3$. Therefore $m=2^r$ or $m=2^r3^s$, with $r\ge1$.`,
        String.raw`The lemma applies only to terms $\gt 1$, so first dispose of $a_1=1$. Then $\varphi(a_2)=1+\varphi(1)=2$, whose complete solution set is $a_2\in\{3,4,6\}$. Step 1 gives $\varphi(a_2)\mid a_2$, so $a_2=3$ is impossible. If $a_2=4$, then $\varphi(a_3)=4+2=6$, while Step 1 gives $\varphi(a_3)\mid a_3$; hence the lemma gives $a_3=2^R3^S$ with $R\ge2$ because $4\mid a_3$. Since $\varphi(a_3)=6$ is not a power of $2$, we have $S\ge1$, and $$2^R3^{S-1}=6$$ forces $R=1$, contradicting $R\ge2$. Hence $a_2=6$. From index $2$ onward every term is $\gt 1$, so the lemma and the subsequent argument apply from there and give $a_{n+1}=4a_n$ for all $n\ge2$. Thus the exceptional sequence is $$a_1=1,\qquad a_n=6\cdot4^{\,n-2}\quad(n\ge2).$$ It satisfies the recurrence, since $\varphi(6\cdot4^k)=2\cdot4^k$ and $\varphi(6)=2=1+\varphi(1)$. Henceforth assume $a_1\ge2$.`,
        String.raw`Write $a_n=2^r3^s$ (the lemma applies since in this branch $a_1\ge2$ and every term is $\ge a_1$). If $s=0$, then the recurrence gives $$\varphi(a_{n+1})=a_n+\varphi(a_n)=2^r+2^{r-1}=3\cdot2^{r-1}.$$ If $a_{n+1}=2^R$, its totient is a power of $2$, impossible. If $a_{n+1}=2^R3^S$ with $S\ge1$, its totient is $2^R3^{S-1}$, so equality would force $R=r-1\lt r$, contradicting $a_n\mid a_{n+1}$. Hence $s\ge1$ for every $n$ in this branch.`,
        String.raw`Now $a_n=2^r3^s$ with $r,s\ge1$, so $a_n=3\varphi(a_n)$. The recurrence becomes $$\varphi(a_{n+1})=4\varphi(a_n).$$ Write $a_{n+1}=2^R3^S$ with $R\ge r$ and $S\ge s$. Then $$\frac{\varphi(a_{n+1})}{\varphi(a_n)}=2^{R-r}3^{S-s}=4,$$ hence $R=r+2$ and $S=s$. Therefore $a_{n+1}=4a_n$.`,
        String.raw`Conversely, for any integers $r,s\ge1$, the sequence $$a_n=2^r3^s4^{n-1}$$ is strictly increasing, satisfies $a_n\mid a_{n+1}$, and obeys $\varphi(a_{n+1})=4\varphi(a_n)=3\varphi(a_n)+\varphi(a_n)=a_n+\varphi(a_n)$. Taken together with the exceptional chain settled at the start, the complete list of solutions is: all $a_n=2^r3^s4^{n-1}$ with fixed integers $r,s\ge1$, and the single sequence $a_1=1,\ a_n=6\cdot4^{\,n-2}$ for $n\ge2$.`
      ]
    },
    {
      "id": "n24",
      "category": "nt",
      "difficulty": "challenging",
      "stars": 5,
      "rating": 8.5,
      "confidence": "high",
      "text": String.raw`Determine all positive integers $n$ such that $$2^n + 1 \mid 3^n - 1.$$`,
      "why": String.raw`No $n$ works, and odd $n$ dies immediately: $3\mid2^n+1$ but $3\nmid3^n-1$. For $n=2k$ the idea is to find a prime $q\mid4^k+1$ at which the orders of $2$ and $3$ clash. Since $4^k+1\equiv2\pmod3$, some prime factor $q$ is $2\bmod3$. The order of $2$ modulo $q$ divides $4k$ but not $2k$, so its $2$-adic valuation is $v_2(k)+2$, and therefore $2^{v_2(k)+2}\mid q-1$; in particular $q\equiv1\pmod4$. Now reciprocity gives $\left(\frac{3}{q}\right)=\left(\frac{q}{3}\right)=-1$, so $3$ is a non-residue and its order has the full $2$-adic valuation of $q-1$, at least $v_2(k)+2$. But $q\mid3^{2k}-1$ requires the order of $3$ to divide $2k$, whose valuation is only $v_2(k)+1$. Skeleton: kill odd $n$ mod $3$, pick a prime $q\equiv2\pmod3$, compare $2$-adic valuations of the two orders.`,
      "hints": [
        String.raw`Odd $n$: $3\mid2^n+1$ but $3^n-1\equiv-1\pmod3$`,
        String.raw`Even $n=2k$: some prime $q\equiv2\pmod3$ divides $2^{2k}+1$: why?`,
        String.raw`Squeeze $v_2(\mathrm{ord}_q 2)$ against $v_2(\mathrm{ord}_q 3)$ via reciprocity`
      ],
      "steps": [
        String.raw`Case 1: $n$ is odd. Then $2^n + 1 = (2 + 1)(2^{n-1} - 2^{n-2} + \dots + 1)$ is divisible by $3$. However, $3^n - 1 \equiv -1 \pmod 3$, so $3 \nmid 3^n - 1$. Therefore, $2^n + 1 \nmid 3^n - 1$ for any odd integer $n$.`,
        String.raw`Case 2: $n$ is even. Write $n = 2k$ for some positive integer $k$. Then $2^n + 1 = 2^{2k} + 1 = 4^k + 1 \equiv 1^k + 1 = 2 \pmod 3$.`,
        String.raw`Because $2^{2k} + 1 \equiv 2 \pmod 3$, not all of its prime factors can be congruent to $1$ modulo $3$ (the product of primes congruent to $1 \pmod 3$ is itself $\equiv 1 \pmod 3$). Therefore, there exists at least one prime divisor $q$ of $2^{2k} + 1$ such that $$q \equiv 2 \pmod 3.$$`,
        String.raw`Since $q \mid 2^{2k} + 1$, we have $2^{2k} \equiv -1 \pmod q$, which implies $2^{4k} \equiv 1 \pmod q$. Thus, the multiplicative order $d = \operatorname{ord}_q(2)$ divides $4k$ but does not divide $2k$. This forces the $2$-adic valuation of $d$ to be $$v_2(d) = v_2(4k) = v_2(k) + 2.$$`,
        String.raw`By Fermat's Little Theorem, $d \mid q - 1$, so $v_2(q - 1) \ge v_2(d) = v_2(k) + 2 \ge 2$, meaning $q \equiv 1 \pmod 4$.`,
        String.raw`Now evaluate the Legendre symbol $\left(\frac{3}{q}\right)$. By Gauss's Law of Quadratic Reciprocity, since $q \equiv 1 \pmod 4$: $$\left(\frac{3}{q}\right) = \left(\frac{q}{3}\right).$$ Because $q \equiv 2 \pmod 3$, we have $\left(\frac{q}{3}\right) = \left(\frac{2}{3}\right) = -1$. Hence $\left(\frac{3}{q}\right) = -1$, meaning $3$ is a quadratic non-residue modulo $q$.`,
        String.raw`By Euler's criterion, $3^{(q-1)/2} \equiv \left(\frac{3}{q}\right) = -1 \pmod q$. Therefore, $\operatorname{ord}_q(3)$ does not divide $(q - 1)/2$, which means the power of $2$ in $\operatorname{ord}_q(3)$ must equal the full power of $2$ in $q - 1$: $$v_2(\operatorname{ord}_q(3)) = v_2(q - 1) \ge v_2(k) + 2.$$`,
        String.raw`On the other hand, the divisibility hypothesis requires $q \mid 2^n + 1 \mid 3^n - 1 = 3^{2k} - 1$. Thus $3^{2k} \equiv 1 \pmod q$, so $\operatorname{ord}_q(3) \mid 2k$. This implies $$v_2(\operatorname{ord}_q(3)) \le v_2(2k) = v_2(k) + 1.$$`,
        String.raw`Combining the two inequalities gives $v_2(k) + 2 \le v_2(\operatorname{ord}_q(3)) \le v_2(k) + 1$, which simplifies to $2 \le 1$, an impossible contradiction. Hence, no such positive integer $n$ exists.`
      ]
    },
    {
      "id": "n25",
      "category": "nt",
      "difficulty": "challenging",
      "stars": 5,
      "rating": 9,
      "confidence": "high",
      "text": String.raw`Let $n\ge2$. A gcd triangle of order $n$ is a triangular array of positive integers $(a_{i,j})_{1\le j\le i\le n}$ satisfying $a_{i,j}=\gcd(a_{i+1,j},a_{i+1,j+1})$ for $i\lt n$, with all $\binom{n+1}{2}$ entries pairwise distinct. Let $L=\operatorname{lcm}(a_{n,1},\dots,a_{n,n})$. Determine the minimum possible value of $\Omega(L)$, counted with multiplicity, and find all gcd triangles attaining it.`,
      "why": String.raw`Every entry of the triangle is the gcd of a contiguous block of the bottom row, so the right edge is the chain of suffix gcds $d_1\mid d_2\mid\cdots\mid d_n\mid L$. Distinctness makes every step strict, including $d_n\lt L$, because a bottom entry equal to $L$ would equal the gcd above it. Each strict step adds at least one prime factor, so $\Omega(L)\ge n$. Equality forces $d_1=1$, every step is a single prime, and the mirrored chain of prefix gcds on the left edge is equally tight. Since the two chains share no prime, each bottom entry is $L$ with exactly one prime removed. Hence the extremal triangles are exactly those with $L=p_1\cdots p_n$ for distinct primes and bottom row $L/p_1,\dots,L/p_n$. For $n=2$ this is the row $3,2$ under $1$. Skeleton: express entries as block gcds, take a divisor chain along an edge, count prime factors, then use both edges for uniqueness.`,
      "hints": [
        String.raw`Write the bottom row as $b_1,\dots,b_n$ and look at the gcds of its suffixes and of its prefixes.`,
        String.raw`Proper multiples strictly increase $\Omega$: count the strict divisibility steps below $L$ the triangle supplies.`,
        String.raw`For $\Omega(L)=n$, repeat the count with the prefix gcds and compare each $b_i$ to their lcm.`
      ],
      "steps": [
        String.raw`Let the bottom row be $b_1,\dots,b_n$, so every $b_i\mid L=\operatorname{lcm}(b_1,\dots,b_n)$. Inducting upward from the base $a_{n,j}=b_j$, and using $\gcd(\gcd S,\gcd T)=\gcd(S\cup T)$, gives $a_{i,j}=\gcd(b_j,\dots,b_{j+n-i})$: every entry is the gcd of a contiguous block of the bottom row. Define suffix gcds $d_i=\gcd(b_i,\dots,b_n)$, the right-edge entries $a_{i,i}$. Since $d_i=\gcd(b_i,d_{i+1})$, $d_i\mid d_{i+1}$, and pairwise distinctness of entries forces $d_i\lt d_{i+1}$. Also $d_n=b_n\lt L$, since $b_n=L$ would make $\gcd(b_{n-1},b_n)=b_{n-1}$ (as $b_{n-1}\mid L$), duplicating a bottom entry.`,
        String.raw`Hence $$d_1\mid d_2\mid\cdots\mid d_n\mid L$$ is a chain of $n$ strict divisibility steps. Each strict step passes to a proper multiple, quotient $\gt 1$, so $\Omega$ rises by at least $1$ per step and $\Omega(L)\ge\Omega(d_1)+n\ge n$.`,
        String.raw`Thus the minimum is at least $n$. The construction with distinct primes $p_1,\dots,p_n$, $$L=\prod_{i=1}^n p_i,\qquad b_i=\frac{L}{p_i},$$ is legitimate: $n\ge2$ makes each $p_r$ divide every $b_i$ with $i\ne r$, so the row's lcm is again $L$, and $\Omega(L)=n$. A prime $p_r$ divides the gcd of $b_j,\dots,b_k$ iff $r\notin\{j,\dots,k\}$, so every triangle entry is $$a_{i,j}=\frac{L}{p_jp_{j+1}\cdots p_{j+n-i}},$$ and distinct intervals give distinct squarefree divisors, so all $\binom{n+1}{2}$ entries are pairwise distinct.`,
        String.raw`Now suppose $\Omega(L)=n$. The lower-bound chain forces $d_1=1$ and every successive quotient to be prime; in particular $\Omega(b_n)=n-1$ and $L/b_n$ is prime. Applying the same argument to prefix gcds $e_i=\gcd(b_1,\dots,b_i)$, the left-edge entries $a_{n-i+1,1}$, gives the strict chain $e_n\mid\cdots\mid e_1\mid L$ (with $e_1\lt L$ for the same duplication reason), hence $\Omega(e_i)=n-i$.`,
        String.raw`For each $i$, $d_i$ and $e_i$ are coprime, because any common prime would divide every bottom entry and hence the top entry $d_1=1$. Also $$\Omega(d_i)=i-1,\qquad \Omega(e_i)=n-i.$$`,
        String.raw`Therefore $\operatorname{lcm}(d_i,e_i)$ has $\Omega=(i-1)+(n-i)=n-1$ and divides $b_i$. If $b_i$ were a proper multiple of this lcm, then $\Omega(b_i)\ge n$; as $b_i\mid L$ and $\Omega(L)=n$ this forces $b_i=L$, impossible because a bottom entry equal to $L$ duplicates its adjacent gcd. Hence $$b_i=\operatorname{lcm}(d_i,e_i),$$ so $\Omega(b_i)=n-1$ and $L/b_i$ is a prime $p_i$.`,
        String.raw`The $b_i$ are pairwise distinct, so the primes $p_i=L/b_i$ are distinct. Each $p_i\mid L$, and $\Omega(L)=n$ leaves no further prime factor with multiplicity: $L=p_1p_2\cdots p_n$ is squarefree and $b_i=L/p_i$.`,
        String.raw`Conversely, for any ordering of distinct primes $p_1,\dots,p_n$, taking $L=\prod p_i$ and $b_i=L/p_i$ gives all interval gcds as $L$ divided by the product of the primes in the interval, so every entry is distinct. A gcd triangle is determined by its bottom row, so the minimizing triangles are exactly these prime-omission constructions, and the minimum is $\boxed{n}$.`
      ]
    }
  ]
};
