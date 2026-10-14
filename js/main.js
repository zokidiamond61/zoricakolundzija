(function () {
  'use strict';

  var C = window.KZ_CONTENT;
  var I18N = window.KZ_I18N;
  var LANGS = ['en', 'sr', 'de'];
  var lang = 'en';
  var lbIndex = -1;

  function $(id) { return document.getElementById(id); }
  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function pad(n) { return String(n).padStart(2, '0'); }
  function t(key) { return (I18N[lang] && I18N[lang][key]) || I18N.en[key] || ''; }
  function pick(obj) { return obj ? (obj[lang] || obj.en || obj.sr || '') : ''; }

  var ARROW = '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M4 12L12 4M5 4h7v7"></path></svg>';
  var EXPAND = '<svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M2 6V2h4M14 10v4h-4M2 2l5 5M14 14l-5-5"></path></svg>';

  /* ---------- Radovi (galerija) ---------- */
  function renderWorks() {
    var rows = '';
    for (var i = 0; i < C.works.length; i += 3) {
      var items = C.works.slice(i, i + 3).map(function (w, j) {
        var k = i + j, r = w.ratio || 1, num = pad(k + 1);
        return '' +
          '<article class="work-item rv" style="flex: ' + r.toFixed(4) + ' 1 0; min-width: 0">' +
            '<button type="button" class="work-btn" data-open="' + k + '" aria-label="' + esc(t('openWork') + ' ' + num + ' — ' + w.title) + '">' +
              '<span class="work-media" style="aspect-ratio: ' + r.toFixed(4) + '">' +
                '<img src="' + esc(w.src) + '" alt="' + esc(w.title) + '" loading="lazy" style="display: block; width: 100%; height: 100%; object-fit: cover">' +
                '<img class="work-bw" src="' + esc(w.src) + '" alt="" aria-hidden="true" loading="lazy">' +
                '<span class="work-sweep" aria-hidden="true"></span>' +
                '<span class="work-ov" style="position: absolute; right: 16px; bottom: 16px; display: inline-flex; align-items: center; gap: 8px; padding: 10px 16px; border-radius: 999px; background: var(--acc); color: #060807; font-family: \'JetBrains Mono\', monospace; font-size: 11px; text-transform: uppercase; letter-spacing: 0.04em">' + esc(t('open')) + ' ' + EXPAND + '</span>' +
              '</span>' +
              '<span style="display: flex; flex-direction: column; gap: 8px; padding-top: 18px">' +
                '<span class="work-line" style="display: block; height: 1px; background: var(--acc)"></span>' +
                '<span class="disp outline" style="display: block; font-weight: 500; font-size: clamp(40px, 4.4vw, 64px); line-height: 1; letter-spacing: 0.02em">' + num + '</span>' +
              '</span>' +
            '</button>' +
          '</article>';
      }).join('');
      rows += '<div class="wrow" style="display: flex; gap: clamp(16px, 1.6vw, 24px); align-items: flex-start">' + items + '</div>';
    }
    $('worksRows').innerHTML = rows;
    $('worksCount').textContent = C.works.length + ' ' + t('worksUnit');
  }

  /* ---------- Logotipi ---------- */
  function renderLogos() {
    $('logos').innerHTML = C.logos.map(function (l, i) {
      return '' +
        '<figure class="rv logo-tile" style="margin: 0; display: flex; flex-direction: column; gap: 14px">' +
          '<div style="aspect-ratio: 16 / 10; display: grid; place-items: center; overflow: hidden; background: ' + esc(l.bg || '#0F2E22') + '; border: 1px solid rgba(236, 241, 236, 0.12)">' +
            '<img src="' + esc(l.src) + '" alt="' + esc(l.title) + '" loading="lazy" style="display: block; max-width: 60%; max-height: 72%; object-fit: contain">' +
          '</div>' +
          '<figcaption style="display: flex; flex-direction: column; gap: 8px; padding-top: 4px">' +
            '<span style="display: block; height: 1px; width: 18%; background: var(--acc)"></span>' +
            '<span class="disp outline" style="display: block; font-weight: 500; font-size: clamp(40px, 4.4vw, 64px); line-height: 1; letter-spacing: 0.02em">' + pad(C.works.length + i + 1) + '</span>' +
          '</figcaption>' +
        '</figure>';
    }).join('');
  }

  /* ---------- Web projekti ---------- */
  function renderProjects() {
    var host = $('projects');
    host.querySelectorAll('.proj').forEach(function (n) { n.remove(); });
    var html = C.projects.slice(0, 2).map(function (p, i) {
      var num = pad(i + 1);
      var domain = p.url.replace(/^https?:\/\//, '').replace(/\/$/, '');
      var rev = i % 2 === 1;
      return '' +
        '<article class="proj rv" style="display: flex; gap: 48px clamp(40px, 6vw, 96px); align-items: flex-start; flex-direction: ' + (rev ? 'row-reverse' : 'row') + '">' +
          '<div style="flex: 1 1 58%; min-width: 0; position: relative">' +
            '<span class="proj-num disp outline" aria-hidden="true" style="position: absolute; top: -0.42em; font-weight: 500; font-size: 200px; line-height: 1; letter-spacing: -0.06em; opacity: 0.55; pointer-events: none; ' + (rev ? 'right: -0.06em' : 'left: -0.08em') + '">' + num + '</span>' +
            '<a href="' + esc(p.url) + '" target="_blank" rel="noopener noreferrer" tabindex="-1" aria-hidden="true" style="position: relative; display: block; border-radius: 14px; overflow: hidden; background: #060807; border: 1px solid rgba(236, 241, 236, 0.16); box-shadow: 0 40px 80px -30px rgba(0, 0, 0, 0.7), 18px 18px 0 0 rgba(200, 255, 46, 0.9)">' +
              '<span style="display: flex; align-items: center; gap: 14px; padding: 12px 16px; border-bottom: 1px solid rgba(236, 241, 236, 0.1)">' +
                '<span style="display: flex; gap: 6px"><span style="width: 10px; height: 10px; border-radius: 50%; background: #2A3A31"></span><span style="width: 10px; height: 10px; border-radius: 50%; background: #2A3A31"></span><span style="width: 10px; height: 10px; border-radius: 50%; background: var(--acc)"></span></span>' +
                '<span class="mono" style="flex: 1; min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; font-size: 11px; color: #93A198; text-transform: none; padding: 6px 14px; border-radius: 999px; background: #0E1712">' + esc(domain) + '</span>' +
              '</span>' +
              '<img src="' + esc(p.image) + '" alt="' + esc(p.name) + '" loading="lazy" style="display: block; width: 100%; aspect-ratio: 1902 / 1030; object-fit: cover; object-position: top">' +
            '</a>' +
          '</div>' +
          '<div style="flex: 1 1 32%; min-width: 260px; display: flex; flex-direction: column; gap: 20px; padding-top: 24px">' +
            '<span class="mono" style="font-size: 11px; color: var(--acc)">' + esc(t('projectLabel')) + ' ' + num + ' / 02</span>' +
            '<h3 class="disp" style="margin: 0; font-weight: 500; font-size: clamp(26px, 2.8vw, 40px); line-height: 1.12; letter-spacing: -0.02em">' + esc(p.name) + '</h3>' +
            '<a href="' + esc(p.url) + '" target="_blank" rel="noopener noreferrer" class="btn btn-p disp" style="align-self: flex-start; display: inline-flex; align-items: center; gap: 12px; min-height: 56px; padding: 0 28px; border-radius: 999px; background: var(--acc); color: #060807; text-decoration: none; font-weight: 600">' + esc(t('viewProject')) + ' ' + ARROW + '</a>' +
          '</div>' +
        '</article>';
    }).join('');
    host.insertAdjacentHTML('beforeend', html);
  }

  /* ---------- Vještine ---------- */
  function renderSkills() {
    $('skillsList').innerHTML = C.skills.map(function (g, i) {
      var items = g.items.map(function (it) {
        return '<li style="display: flex; align-items: center; gap: 10px; font-size: 13.5px; line-height: 1.35; color: #C9D3CC"><span aria-hidden="true" style="flex: none; width: 6px; height: 6px; border-radius: 50%; background: var(--acc)"></span>' + esc(it) + '</li>';
      }).join('');
      return '' +
        '<div class="rv" style="display: flex; flex-wrap: wrap; gap: 8px 32px; padding: 14px 0 16px; border-top: 1px solid rgba(236, 241, 236, 0.14)">' +
          '<span style="flex: 0 0 180px; display: flex; align-items: baseline; gap: 12px"><span class="mono" style="font-size: 11px; color: var(--acc)">' + pad(i + 1) + '</span><span class="mono" style="font-size: 11px; color: #ECF1EC">' + esc(pick(g.name)) + '</span></span>' +
          '<ul style="flex: 1 1 420px; margin: 0; padding: 0; list-style: none; display: grid; grid-template-columns: repeat(auto-fill, minmax(190px, 1fr)); gap: 6px 20px">' + items + '</ul>' +
        '</div>';
    }).join('');
  }

  /* ---------- Jezik ---------- */
  function applyLang(next) {
    lang = LANGS.indexOf(next) >= 0 ? next : 'en';
    document.documentElement.lang = lang;
    try { localStorage.setItem('kz-lang', lang); } catch (e) {}
    document.querySelectorAll('[data-i18n]').forEach(function (el) { el.textContent = t(el.getAttribute('data-i18n')); });
    document.querySelectorAll('[data-i18n-aria]').forEach(function (el) { el.setAttribute('aria-label', t(el.getAttribute('data-i18n-aria'))); });
    document.querySelectorAll('[data-lang]').forEach(function (b) { b.setAttribute('aria-pressed', b.getAttribute('data-lang') === lang ? 'true' : 'false'); });
    $('aboutText').textContent = pick(C.about.text);
    $('aboutBio').textContent = pick(C.about.bio);
    $('aboutText').lang = lang; $('aboutBio').lang = lang;
    renderWorks(); renderLogos(); renderProjects(); renderSkills();
    updateMailto();
    observeReveal();
  }

  /* ---------- Kontakt ---------- */
  function updateMailto() {
    var name = $('fName').value.trim(), mail = $('fEmail').value.trim(), msg = $('fMsg').value;
    var body = [msg, '', name ? '— ' + name : '', mail].filter(function (x, i) { return i < 2 || x; }).join('\n');
    $('sendLink').href = 'mailto:' + C.email + '?subject=' + encodeURIComponent(t('subject') + (name ? ' — ' + name : '')) + '&body=' + encodeURIComponent(body);
  }

  /* ---------- Veliki prikaz rada ---------- */
  function openLb(i) {
    lbIndex = (i + C.works.length) % C.works.length;
    var w = C.works[lbIndex], num = pad(lbIndex + 1);
    $('lbImg').src = w.src; $('lbImg').alt = w.title;
    $('lbNum').textContent = num;
    $('lbCounter').textContent = num + ' / ' + pad(C.works.length);
    $('lightbox').setAttribute('aria-label', w.title);
    $('lightbox').hidden = false;
    document.body.style.overflow = 'hidden';
    $('lbClose').focus();
  }
  function closeLb() {
    $('lightbox').hidden = true;
    document.body.style.overflow = '';
    var b = document.querySelector('[data-open="' + lbIndex + '"]');
    lbIndex = -1;
    if (b) b.focus();
  }

  /* ---------- Pojavljivanje pri skrolu (za preglednike bez scroll-animacija) ---------- */
  var io = null;
  var hasScrollTimeline = window.CSS && CSS.supports && CSS.supports('animation-timeline: view()');
  function observeReveal() {
    if (hasScrollTimeline || !('IntersectionObserver' in window)) return;
    document.documentElement.classList.add('io');
    if (!io) io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
    }, { rootMargin: '0px 0px -8% 0px' });
    document.querySelectorAll('.rv:not(.in)').forEach(function (el) { io.observe(el); });
  }

  /* ---------- Start ---------- */
  document.addEventListener('DOMContentLoaded', function () {
    $('aboutPhoto').src = C.about.photo;
    $('phoneLink').href = C.phoneLink; $('phoneText').textContent = C.phone;
    $('emailLink').href = 'mailto:' + C.email; $('emailText').textContent = C.email;
    $('year').textContent = new Date().getFullYear();

    var saved = null;
    try { saved = localStorage.getItem('kz-lang'); } catch (e) {}
    applyLang(saved || 'en');

    document.querySelectorAll('[data-lang]').forEach(function (b) {
      b.addEventListener('click', function () { applyLang(b.getAttribute('data-lang')); });
    });

    // hero: linije i tačka prate miša
    var hero = $('top'), raf = null, pos = null;
    hero.addEventListener('mousemove', function (e) {
      var r = hero.getBoundingClientRect();
      pos = { x: (e.clientX - r.left) / r.width, y: (e.clientY - r.top) / r.height };
      if (raf) return;
      raf = requestAnimationFrame(function () {
        raf = null; setHero(pos.x, pos.y, true);
      });
    });
    hero.addEventListener('mouseleave', function () { setHero(0.62, 0.5, false); });
    function setHero(x, y, on) {
      $('crossV').style.left = (x * 100).toFixed(2) + '%';
      $('crossH').style.top = (y * 100).toFixed(2) + '%';
      $('crossV').style.opacity = $('crossH').style.opacity = on ? '0.22' : '0';
      $('heroDot').style.left = (20 + x * 60).toFixed(2) + '%';
      $('heroDot').style.top = (20 + y * 60).toFixed(2) + '%';
      $('heroVis').style.transform = 'translate(' + ((x - 0.5) * -36).toFixed(1) + 'px, calc(-50% + ' + ((y - 0.5) * -28).toFixed(1) + 'px)) rotate(' + ((x - 0.5) * 6).toFixed(2) + 'deg)';
    }

    // galerija → veliki prikaz
    $('worksRows').addEventListener('click', function (e) {
      var b = e.target.closest('[data-open]');
      if (b) openLb(parseInt(b.getAttribute('data-open'), 10));
    });
    $('lbClose').addEventListener('click', closeLb);
    $('lbPrev').addEventListener('click', function () { openLb(lbIndex - 1); });
    $('lbNext').addEventListener('click', function () { openLb(lbIndex + 1); });
    $('lightbox').addEventListener('click', function (e) { if (e.target === e.currentTarget || e.target === $('lbStage')) closeLb(); });
    document.addEventListener('keydown', function (e) {
      if ($('lightbox').hidden) return;
      if (e.key === 'Escape') closeLb();
      else if (e.key === 'ArrowLeft') openLb(lbIndex - 1);
      else if (e.key === 'ArrowRight') openLb(lbIndex + 1);
    });

    // kopiranje e-maila
    var ct = null;
    $('copyBtn').addEventListener('click', function () {
      if (!navigator.clipboard) return;
      navigator.clipboard.writeText(C.email).then(function () {
        var lbl = $('copyLabel');
        lbl.textContent = t('copied');
        clearTimeout(ct);
        ct = setTimeout(function () { lbl.textContent = t('copy'); }, 1800);
      }, function () {});
    });

    // forma → e-mail program
    ['fName', 'fEmail', 'fMsg'].forEach(function (id) { $(id).addEventListener('input', updateMailto); });
    $('contactForm').addEventListener('submit', function (e) { e.preventDefault(); window.location.href = $('sendLink').href; });
  });
})();
