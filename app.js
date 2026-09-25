/* Renders IMO Shortlist UI from window.IMO_SHORTLIST (problems.js) */

const STAR_CLASS = { easy: 'e', medium: 'm', hard: 'h', challenging: 'c' };
const DIFF_LABEL = {
    easy: 'Easy',
    medium: 'Medium',
    hard: 'Hard',
    challenging: 'Challenging'
};

function escapeHtml(s) {
    return String(s)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');
}

function starsHtml(difficulty, count) {
    const cls = STAR_CLASS[difficulty] || '';
    let html = '';
    for (let i = 0; i < 4; i++) {
        html += `<div class="star${i < count ? ' ' + cls : ''}"></div>`;
    }
    return html;
}

function problemNumber(id) {
    return parseInt(String(id).replace(/\D/g, ''), 10) || 0;
}

function formatRating(r) {
    if (r == null || r === '') return null;
    const n = Number(r);
    if (Number.isNaN(n)) return String(r);
    return n.toFixed(1);
}

function stepsHtml(p) {
    const steps = Array.isArray(p.steps)
        ? p.steps.map(s => String(s).trim()).filter(Boolean)
        : [];
    if (!steps.length) {
        return '<span class="sol-empty">No steps yet — add a <code>steps</code> array of hints in problems.js.</span>';
    }
    return steps.map((s, i) => `
                    <details class="hint">
                        <summary>Step ${i + 1}</summary>
                        <div class="hint-body">${s}</div>
                    </details>`).join('');
}

function problemCard(p, index) {
    const delay = Math.min(index * 0.03, 0.6);
    const diff = p.difficulty || 'medium';
    const rating = formatRating(p.rating);
    const pct = Math.max(0, Math.min(100, (Number(p.rating) || 0) * 10));
    const STATUS_LABEL = { false: 'False as written', open: 'Open / not ISL' };

    const ratingHtml = rating
        ? `<span class="rscore ${escapeHtml(diff)}" title="Estimated difficulty ${rating} / 10">${rating}<small>/10</small></span>`
        : '';
    const meterHtml = rating
        ? `<div class="rmeter ${escapeHtml(diff)}" title="${rating} / 10"><span style="width:${pct}%"></span></div>`
        : '';
    const statusBadge = p.status && STATUS_LABEL[p.status]
        ? `<span class="dbadge ${escapeHtml(p.status)}">${STATUS_LABEL[p.status]}</span>`
        : '';

    const conf = p.confidence ? escapeHtml(p.confidence) : '';
    const whyBody = p.why
        ? `<p>${escapeHtml(p.why)}</p>`
        : '<span class="sol-empty">No difficulty note yet.</span>';
    const analysisHtml = `
            <details class="sol">
                <summary>Difficulty analysis</summary>
                <div class="sol-body">
                    <div class="why-meta">
                        ${rating ? `<span>Rating <b>${rating}</b> / 10</span>` : ''}
                        ${conf ? `<span>Confidence <b>${conf}</b></span>` : ''}
                        <span>Tier <b>${escapeHtml(DIFF_LABEL[diff] || diff)}</b></span>
                    </div>
                    ${whyBody}
                </div>
            </details>`;

    return `
        <div id="${escapeHtml(p.id)}" class="pcard ${escapeHtml(p.category)}" data-diff="${escapeHtml(diff)}" data-rating="${escapeHtml(rating || '')}" style="animation-delay:${delay.toFixed(2)}s">
            <div class="phd">
                <div class="pid">
                    <span class="pnum">${escapeHtml(p.id.toUpperCase())}</span>
                    <div class="psep"></div>
                    <div class="stars">${starsHtml(diff, p.stars)}</div>
                </div>
                <div class="phd-right">
                    ${ratingHtml}
                    ${statusBadge}
                    <span class="dbadge ${escapeHtml(diff)}">${DIFF_LABEL[diff] || diff}</span>
                </div>
            </div>
            ${meterHtml}
            <div class="pbody"><div class="ptxt">${p.text}</div></div>
            ${analysisHtml}
            <details class="sol">
                <summary>Solution steps</summary>
                <div class="sol-body${Array.isArray(p.steps) && p.steps.some(s => String(s).trim()) ? ' steps' : ''}">${stepsHtml(p)}</div>
            </details>
        </div>`;
}

function render() {
    const data = window.IMO_SHORTLIST;
    if (!data) {
        console.error('IMO_SHORTLIST data missing — load problems.js first');
        return;
    }

    const { categories, problems } = data;
    const byCat = Object.fromEntries(categories.map(c => [c.id, []]));
    for (const p of problems) {
        if (byCat[p.category]) byCat[p.category].push(p);
    }
    // easiest -> hardest (stable; problems without a rating keep their order)
    for (const id in byCat) {
        byCat[id] = byCat[id]
            .map((p, i) => ({ p, i }))
            .sort((a, b) => ((a.p.rating ?? 0) - (b.p.rating ?? 0)) || a.i - b.i)
            .map(x => x.p);
    }

    const total = problems.length;
    const catCount = categories.length;
    const perTopic = categories.map(c => byCat[c.id].length);
    const perTopicLabel = perTopic.every(n => n === perTopic[0])
        ? String(perTopic[0])
        : perTopic.join('/');

    document.getElementById('stat-grid').innerHTML = `
        <div class="stat">
            <span class="stat-n">${total}</span>
            <span class="stat-l">Problems</span>
        </div>
        <div class="stat">
            <span class="stat-n">${catCount}</span>
            <span class="stat-l">Categories</span>
        </div>
        <div class="stat">
            <span class="stat-n">${escapeHtml(perTopicLabel)}</span>
            <span class="stat-l">Per Topic</span>
        </div>
        <div class="stat">
            <span class="stat-n" style="font-size:1rem; margin-top:4px; color: var(--challenging)">★★★★</span>
            <span class="stat-l">Olympiad</span>
        </div>`;

    document.getElementById('nav-cats').innerHTML = categories.map(c => {
        const dots = byCat[c.id].slice().sort((a, b) => problemNumber(a.id) - problemNumber(b.id)).map(p => {
            const r = formatRating(p.rating);
            const label = escapeHtml(p.id.toUpperCase());
            const tip = r ? `${label} · ${r}/10` : label;
            return `<a class="ndot ${escapeHtml(c.id)}" href="#${escapeHtml(p.id)}" title="${tip}" onclick="navTo(event,'${escapeHtml(c.id)}','${escapeHtml(p.id)}')">${label}</a>`;
        }).join('');
        return `
            <div class="nav-cat">
                <div class="nav-cat-lbl ${escapeHtml(c.id)}">${escapeHtml(c.name)}</div>
                <div class="nav-dots">${dots}</div>
            </div>`;
    }).join('');

    const scale = data.scale || [
        { id: 'easy', label: 'Easy', min: 1, max: 4 },
        { id: 'medium', label: 'Medium', min: 4, max: 6 },
        { id: 'hard', label: 'Hard', min: 6, max: 8 },
        { id: 'challenging', label: 'Challenging', min: 8, max: 10 }
    ];
    const legendEl = document.getElementById('legend');
    if (legendEl) {
        legendEl.innerHTML = scale.map(s => `
            <div class="leg-row">
                <div class="leg-dot ${escapeHtml(s.id)}"></div>
                ${escapeHtml(s.label)}
                <span class="leg-rng">${s.min}–${s.max}</span>
            </div>`).join('') + (data.criterion
            ? `<p class="leg-note">${escapeHtml(data.criterion)}</p>`
            : '');
    }

    document.getElementById('header-pills').innerHTML = `
        <span class="pill">${total} problems</span>
        <span class="pill">${catCount} categories</span>
        <span class="pill">Rated 1–10</span>`;

    document.getElementById('tabs').innerHTML = categories.map((c, i) => {
        const n = byCat[c.id].length;
        const active = i === 0 ? ' active' : '';
        const selected = i === 0 ? 'true' : 'false';
        return `
            <button class="tbtn${active}" data-tab="${escapeHtml(c.id)}" onclick="switchTab(event,'${escapeHtml(c.id)}')" role="tab" aria-selected="${selected}">
                <span class="t-ico">${c.icon}</span>
                <span class="t-nm">${escapeHtml(c.name)}</span>
                <span class="t-cnt">${escapeHtml(c.prefix)}${n}</span>
            </button>`;
    }).join('');

    document.getElementById('panel').innerHTML = categories.map((c, i) => {
        const list = byCat[c.id];
        const active = i === 0 ? ' active' : '';
        const cards = list.map((p, i) => problemCard(p, i)).join('');
        return `
            <div id="${escapeHtml(c.id)}" class="subject${active}">
                <div class="subhd">
                    <div class="sub-ico ${escapeHtml(c.id)}">${c.icon}</div>
                    <div class="sub-info">
                        <h2>${escapeHtml(c.name)}</h2>
                        <p><span class="sub-badge ${escapeHtml(c.id)}">${list.length} problems</span>${escapeHtml(c.topics)}</p>
                    </div>
                </div>
                <div class="fbar">
                    <span class="fbar-lbl">Filter:</span>
                    <button class="fbtn f-all" onclick="filt(this,'${escapeHtml(c.id)}','all')">All</button>
                    <button class="fbtn" onclick="filt(this,'${escapeHtml(c.id)}','easy')">Easy</button>
                    <button class="fbtn" onclick="filt(this,'${escapeHtml(c.id)}','medium')">Medium</button>
                    <button class="fbtn" onclick="filt(this,'${escapeHtml(c.id)}','hard')">Hard</button>
                    <button class="fbtn" onclick="filt(this,'${escapeHtml(c.id)}','challenging')">Challenging</button>
                </div>
                <div class="plist">${cards}</div>
            </div>`;
    }).join('');

    if (window.MathJax?.typesetPromise) {
        MathJax.typesetPromise();
    }
}

function switchTab(event, id) {
    document.querySelectorAll('.subject').forEach(el => el.classList.remove('active'));
    document.querySelectorAll('.tbtn').forEach(btn => {
        btn.classList.remove('active');
        btn.setAttribute('aria-selected', 'false');
    });
    document.getElementById(id).classList.add('active');
    const btn = event.currentTarget;
    btn.classList.add('active');
    btn.setAttribute('aria-selected', 'true');
    if (window.MathJax?.typesetPromise) MathJax.typesetPromise();
}

function navTo(event, tab, problemId) {
    event.preventDefault();
    document.querySelectorAll('.subject').forEach(el => el.classList.remove('active'));
    document.querySelectorAll('.tbtn').forEach(btn => {
        btn.classList.remove('active');
        btn.setAttribute('aria-selected', 'false');
    });
    document.getElementById(tab).classList.add('active');
    const tBtn = document.querySelector(`[data-tab="${tab}"]`);
    if (tBtn) {
        tBtn.classList.add('active');
        tBtn.setAttribute('aria-selected', 'true');
    }

    const scrollTo = () => {
        const el = document.getElementById(problemId);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    if (window.MathJax?.typesetPromise) MathJax.typesetPromise().then(scrollTo);
    else setTimeout(scrollTo, 60);
}

function filt(btn, tab, diff) {
    const panel = document.getElementById(tab);
    panel.querySelectorAll('.fbtn').forEach(b => { b.className = 'fbtn'; });
    btn.className = diff === 'all' ? 'fbtn f-all' : `fbtn f-${diff}`;
    panel.querySelectorAll('.pcard').forEach(card => {
        const show = diff === 'all' || card.dataset.diff === diff;
        card.classList.toggle('hidden', !show);
    });
}

document.addEventListener('keydown', e => {
    const order = (window.IMO_SHORTLIST?.categories || []).map(c => c.id);
    const cur = document.querySelector('.tbtn.active')?.dataset.tab;
    const i = order.indexOf(cur);
    if (e.key === 'ArrowRight' && i < order.length - 1)
        document.querySelector(`[data-tab="${order[i + 1]}"]`)?.click();
    if (e.key === 'ArrowLeft' && i > 0)
        document.querySelector(`[data-tab="${order[i - 1]}"]`)?.click();
});

render();

// re-typeset math when a solution is opened
document.addEventListener('toggle', e => {
    if (e.target.matches?.('details.sol, details.hint') && e.target.open && window.MathJax?.typesetPromise) {
        MathJax.typesetPromise([e.target]);
    }
}, true);
