(function () {
  var S = window.SITE, MENU = window.MENU, CATS = window.CATEGORIES;
  var page = document.body.getAttribute('data-page') || '';

  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }

  /* a picture tile: real photo if item.img exists, otherwise a coloured placeholder with a glyph */
  window.tile = function (o, cls, caption) {
    return '<div class="tile tone-' + (o.tone || 'terra') + ' ' + (cls || '') + '">' +
      (o.img ? '<img src="' + esc(o.img) + '" alt="' + esc(o.name || o.label || '') + '">' : '<span class="g">' + esc(o.glyph || '') + '</span>') +
      (caption ? '<span class="cap">' + esc(caption) + '</span>' : '') + '</div>';
  };
  window.byId = function (id) { return MENU.filter(function (m) { return m.id === id; })[0]; };
  /* show a real price if the item has one, otherwise an honest fallback instead of making one up */
  window.priceLabel = function (m) { return (typeof m.price === 'number') ? 'Rs ' + m.price : 'Ask in store'; };

  var links = [
    ['index.html', 'Home', 'home'], ['menu.html', 'Menu', 'menu'], ['about.html', 'Our Story', 'about'],
    ['gallery.html', 'Gallery', 'gallery'], ['contact.html', 'Find Us', 'contact']
  ];
  var nav = links.map(function (l) {
    var on = (page === l[2] || (page === 'item' && l[2] === 'menu')) ? ' class="on"' : '';
    return '<a href="' + l[0] + '"' + on + '>' + l[1] + '</a>';
  }).join('');

  var head = document.getElementById('site-head');
  if (head) head.outerHTML =
    '<header class="site-head"><div class="wrap">' +
    '<a class="brand" href="index.html"><b>' + esc(S.name) + '</b></a>' +
    '<button class="burger" aria-label="Menu" onclick="document.querySelector(\'.nav\').classList.toggle(\'open\')">Menu</button>' +
    '<nav class="nav">' + nav + '<a class="btn sm" href="tel:' + S.phoneRaw + '">Call us</a></nav></div></header>';

  var foot = document.getElementById('site-foot');
  if (foot) foot.outerHTML =
    '<footer class="site-foot"><div class="wrap"><div class="cols">' +
    '<div><h4>' + esc(S.name) + '</h4><p>' + esc(S.tagline) + '</p>' + (S.address.length ? '<p style="margin-top:14px">' + S.address.join('<br>') + '</p>' : '') + '</div>' +
    '<div><h4>Look around</h4><ul>' + links.map(function (l) { return '<li><a href="' + l[0] + '">' + l[1] + '</a></li>'; }).join('') + '</ul></div>' +
    '<div><h4>Say hello</h4><ul><li><a href="tel:' + S.phoneRaw + '">' + esc(S.phone) + '</a></li>' + (S.email ? '<li><a href="mailto:' + S.email + '">' + esc(S.email) + '</a></li>' : '') +
    '<li><a href="' + S.social.instagram + '">Instagram</a></li><li><a href="' + S.social.facebook + '">Facebook</a></li></ul></div>' +
    '</div><div class="fine"><span>&copy; ' + new Date().getFullYear() + ' ' + esc(S.name) + '</span></div></div></footer>';

  /* ---------- HOME ---------- */
  var picks = document.getElementById('picks');
  if (picks) {
    picks.innerHTML = ['coffee', 'corn-dog', 'virgin-mojito'].map(function (id) {
      var m = byId(id);
      return '<a class="pick" href="item.html?id=' + m.id + '">' + tile(m) +
        '<h3>' + esc(m.name) + '<small>' + priceLabel(m) + '</small></h3><p>' + esc(m.desc) + '</p></a>';
    }).join('');
  }
  var strip = document.getElementById('strip');
  if (strip) {
    var words = MENU.map(function (m) { return '<span>' + esc(m.glyph) + '</span>'; }).join('');
    strip.innerHTML = '<div>' + words + words + '</div>';
  }
  var hours = document.querySelectorAll('[data-hours]');
  hours.forEach(function (el) {
    el.innerHTML = S.hours.map(function (h) { return '<div><dt>' + h[0] + '</dt><dd>' + h[1] + '</dd></div>'; }).join('');
  });

  /* ---------- MENU ---------- */
  var menuRoot = document.getElementById('menu-root');
  if (menuRoot) {
    var tabs = document.getElementById('menu-tabs');
    tabs.innerHTML = '<div class="wrap">' + CATS.map(function (c) { return '<a href="#' + c.id + '">' + c.name + '</a>'; }).join('') + '</div>';
    menuRoot.innerHTML = CATS.map(function (c) {
      var items = MENU.filter(function (m) { return m.cat === c.id; }).map(function (m) {
        return '<a class="dish-item" href="item.html?id=' + m.id + '"><div class="row"><span class="nm">' + esc(m.name) +
          '</span><span class="lead-dots"></span><span class="pr">' + priceLabel(m) + '</span></div><p>' + esc(m.desc) + ' <span class="more">See details</span></p></a>';
      }).join('');
      return '<section class="menu-cat" id="' + c.id + '"><div class="wrap"><div><h2>' + c.name + '</h2><div class="np">' + esc(c.tagline || '') + '</div></div><div>' + items + '</div></div></section>';
    }).join('');
    var as = tabs.querySelectorAll('a');
    window.addEventListener('scroll', function () {
      var cur = CATS[0].id;
      CATS.forEach(function (c) { var e = document.getElementById(c.id); if (e.getBoundingClientRect().top < 180) cur = c.id; });
      as.forEach(function (a) { a.classList.toggle('on', a.getAttribute('href') === '#' + cur); });
    }, { passive: true });
  }

  /* ---------- GALLERY ---------- */
  var gal = document.getElementById('gallery-root');
  if (gal) {
    gal.innerHTML = window.GALLERY.map(function (g, i) {
      return '<figure data-i="' + i + '"><div class="tile tone-' + g.tone + '" style="height:' + g.h + 'px">' +
        (g.img ? '<img src="' + esc(g.img) + '" alt="' + esc(g.label) + '">' : '<span class="g">' + esc(g.glyph) + '</span>') +
        '</div><figcaption>' + esc(g.label) + '</figcaption></figure>';
    }).join('');
    var lb = document.getElementById('lightbox');
    gal.addEventListener('click', function (e) {
      var f = e.target.closest('figure'); if (!f) return;
      var g = window.GALLERY[+f.getAttribute('data-i')];
      lb.querySelector('.slot').innerHTML = tile({ glyph: g.glyph, tone: g.tone, img: g.img, name: g.label });
      lb.querySelector('.lb-cap').textContent = g.label;
      lb.classList.add('open');
    });
    lb.addEventListener('click', function () { lb.classList.remove('open'); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') lb.classList.remove('open'); });
  }

  /* ---------- CONTACT ---------- */
  var map = document.getElementById('map');
  if (map) {
    if (S.mapQuery) {
      map.innerHTML = '<iframe loading="lazy" title="Map" src="https://maps.google.com/maps?q=' + encodeURIComponent(S.mapQuery) + '&output=embed"></iframe>';
    } else {
      /* no confirmed address yet - point people to Instagram/phone instead of a broken or misleading map */
      map.innerHTML = '<div class="map-fallback"><p class="big">No map yet - message us and we will send directions.</p>' +
        '<div class="btns"><a class="btn solid sm" href="' + S.social.instagram + '" target="_blank" rel="noopener">Message on Instagram</a>' +
        '<a class="btn sm" href="tel:' + S.phoneRaw + '">' + esc(S.phone) + '</a></div></div>';
    }
  }
  var dirs = document.querySelectorAll('[data-directions]');
  dirs.forEach(function (a) {
    if (S.mapQuery) { a.href = 'https://www.google.com/maps/dir/?api=1&destination=' + encodeURIComponent(S.mapQuery); }
    else { a.href = S.social.instagram; a.target = '_blank'; a.rel = 'noopener'; a.textContent = 'Message on Instagram'; }
  });

  /* ---------- ITEM ---------- */
  var itemRoot = document.getElementById('item-root');
  if (itemRoot) {
    var id = new URLSearchParams(location.search).get('id');
    var idx = MENU.map(function (m) { return m.id; }).indexOf(id);
    if (idx < 0) idx = 0;
    var m = MENU[idx], cat = CATS.filter(function (c) { return c.id === m.cat; })[0];
    document.title = m.name + ' | ' + S.name;
    var prev = MENU[(idx + MENU.length - 1) % MENU.length], next = MENU[(idx + 1) % MENU.length];
    itemRoot.innerHTML =
      '<div class="wrap"><div class="crumbs"><a href="menu.html">Menu</a> / <a href="menu.html#' + cat.id + '">' + cat.name + '</a> / ' + esc(m.name) + '</div>' +
      '<article class="item">' + tile(m, '', cat.name) +
      '<div><span class="eyebrow">' + esc(cat.name) + '</span><h1>' + esc(m.name) + '</h1>' +
      '<div class="meta"><span class="price">' + priceLabel(m) + '</span></div>' +
      '<p class="intro">' + esc(m.desc) + '</p>' + (m.story ? '<p>' + esc(m.story) + '</p>' : '') +
      (m.inside && m.inside.length ? '<h2>What is in it</h2><ul class="inside">' + m.inside.map(function (i) { return '<li>' + esc(i) + '</li>'; }).join('') + '</ul>' : '') +
      (m.pair && m.pair.length ? '<h2>Goes well with</h2><div class="pairs">' + m.pair.map(function (pid) {
        var p = byId(pid); if (!p) return '';
        return '<a href="item.html?id=' + p.id + '">' + tile(p) + '<div><b>' + esc(p.name) + '</b><span>' + priceLabel(p) + '</span></div></a>';
      }).join('') + '</div>' : '') +
      '<p style="margin-top:34px;font-size:.95rem;color:var(--ink-soft)">Tell us about allergies when you order. We will always check with the team.</p>' +
      '<div style="margin-top:24px;display:flex;gap:12px;flex-wrap:wrap"><a class="btn solid" href="tel:' + S.phoneRaw + '">Call to ask</a><a class="btn" href="contact.html">Find us</a></div>' +
      '</div></article>' +
      '<div class="pn"><a href="item.html?id=' + prev.id + '"><small>Previous</small><b>' + esc(prev.name) + '</b></a><a class="r" href="item.html?id=' + next.id + '"><small>Next</small><b>' + esc(next.name) + '</b></a></div></div>';
  }
})();
