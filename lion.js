(function () {
  var el = document.querySelector('[data-cycle]');
  if (el) {
    var words = el.getAttribute('data-cycle').split('|');
    var word = el.querySelector('.icp__word');
    var i = 0, timer = null, paused = false;
    var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    function next() {
      if (paused) return;
      word.classList.add('is-out');
      setTimeout(function () {
        i = (i + 1) % words.length;
        word.textContent = words[i];
        word.classList.remove('is-out');
      }, 200);
    }
    if (!reduce && words.length > 1) {
      timer = setInterval(next, 4000);
      el.addEventListener('mouseenter', function () { paused = true; });
      el.addEventListener('mouseleave', function () { paused = false; });
      el.addEventListener('focusin', function () { paused = true; });
      el.addEventListener('focusout', function () { paused = false; });
    }
  }
  var faqs = document.querySelectorAll('.faq__item');
  faqs.forEach(function (d) {
    d.addEventListener('toggle', function () {
      if (d.open) faqs.forEach(function (o) { if (o !== d) o.open = false; });
    });
  });
})();
(function () {
  var nav = document.querySelector('.nav');
  var btn = nav && nav.querySelector('.nav__toggle');
  if (!btn) return;
  btn.addEventListener('click', function () {
    var open = nav.classList.toggle('is-open');
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    btn.textContent = open ? 'Close' : 'Menu';
  });
  document.addEventListener('click', function (e) { if (nav.classList.contains('is-open') && !nav.contains(e.target)) { nav.classList.remove('is-open'); btn.setAttribute('aria-expanded', 'false'); btn.textContent = 'Menu'; } });
})();
