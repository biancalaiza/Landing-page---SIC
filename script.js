/* ══════════════════════════════════
   script.js  ·  Bianca Laiza  v3
   ══════════════════════════════════ */

// ── TERMINAL TYPEWRITER ──
;(function () {
  const LINES = [
    { k: 'nome',       v: '"Bianca Laiza"',                          c: 'tv' },
    { k: 'cargo',      v: '"Estagiária de Qualidade e Processos"',   c: 'tv' },
    { k: 'empresa',    v: '"Naja Soluções"',                         c: 'tv' },
    { k: 'tambem_em',  v: '"Rede ICC Saúde"',                        c: 'tv' },
    { k: 'formacao',   v: '"Eng. Produção — IFCE · 5° período"',     c: 'tv' },
    { k: 'curso_ia',   v: '"Samsung SIC — IA & Machine Learning"',   c: 'tv' },
    { k: 'skills',     v: '["Bizagi", "POP", "KPIs", "PDCA"]',       c: 'tn' },
    { k: 'status',     v: 'ABERTA_A_OPORTUNIDADES',                  c: 'ts' },
  ]

  const body   = document.getElementById('term-body')
  const cursor = document.getElementById('term-cursor')
  if (!body || !cursor) return

  let i = 0
  function next() {
    if (i >= LINES.length) return
    const { k, v, c } = LINES[i++]
    const s = document.createElement('span')
    s.className = 'tl'
    s.innerHTML =
      `&nbsp;&nbsp;<span class="tk">"${k}"</span>` +
      `<span class="tb">: </span>` +
      `<span class="${c}">${v}</span>` +
      `<span class="tb">,</span>`
    body.insertBefore(s, cursor)
    setTimeout(next, 260)
  }
  setTimeout(next, 800)
})()


// ── NAV ACTIVE ──
;(function () {
  const secs  = document.querySelectorAll('section[id]')
  const links = document.querySelectorAll('.nav-links a')
  const obs   = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return
      links.forEach(a =>
        a.classList.toggle('active', a.getAttribute('href') === '#' + e.target.id)
      )
    })
  }, { threshold: 0.35 })
  secs.forEach(s => obs.observe(s))
})()


// ── SCROLL REVEAL ──
;(function () {
  const els = document.querySelectorAll(
    '.card, .tl-item, .v-item, .obj-box, .exp-card, .stat-row, .contact-item'
  )
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return
      e.target.classList.add('visible')
      obs.unobserve(e.target)
    })
  }, { threshold: 0.1 })
  els.forEach(el => { el.classList.add('reveal'); obs.observe(el) })
})()


// ── SKILL PILLS TOGGLE ──
document.querySelectorAll('.skill-pill').forEach(p =>
  p.addEventListener('click', () => p.classList.toggle('on'))
)


// ── COUNTERS ANIMADOS ──
;(function () {
  function run(el) {
    const target = parseInt(el.dataset.count)
    const suffix = el.dataset.suffix || ''
    let v = 0
    const step = Math.max(1, Math.ceil(target / 50))
    const t = setInterval(() => {
      v = Math.min(v + step, target)
      el.textContent = v + suffix
      if (v >= target) clearInterval(t)
    }, 28)
  }
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return
      obs.unobserve(e.target)
      e.target.querySelectorAll('[data-count]').forEach(run)
    })
  }, { threshold: 0.4 })
  document.querySelectorAll('.stat-row').forEach(el => obs.observe(el))
})()


// ── GLITCH INTRO ──
window.addEventListener('load', () => {
  setTimeout(() => {
    const h = document.querySelector('h1')
    if (!h) return
    h.style.animation = 'glitch .5s ease'
    h.addEventListener('animationend', () => h.style.animation = '', { once: true })
  }, 1600)
})


// ── BACK TO TOP ──
;(function () {
  const btn = document.createElement('button')
  btn.id = 'back-top'
  btn.textContent = '↑'
  btn.setAttribute('aria-label', 'Voltar ao topo')
  document.body.appendChild(btn)
  window.addEventListener('scroll', () => btn.classList.toggle('show', scrollY > 500))
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }))
})()
