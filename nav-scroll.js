(function () {
  var nav = document.querySelector('nav:not(.section-nav)');
  if (!nav) return;

  function onScroll() {
    if (window.scrollY > 24) {
      nav.classList.add('is-scrolled');
    } else {
      nav.classList.remove('is-scrolled');
    }
  }
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  var hamburger = nav.querySelector('.nav-hamburger');
  if (!hamburger) return;

  function closeMenu() {
    nav.classList.remove('menu-open');
    hamburger.setAttribute('aria-expanded', 'false');
  }
  function toggleMenu() {
    var open = nav.classList.toggle('menu-open');
    hamburger.setAttribute('aria-expanded', open ? 'true' : 'false');
  }

  hamburger.addEventListener('click', toggleMenu);
  nav.querySelectorAll('.nav-links a, .nav-right a').forEach(function (link) {
    link.addEventListener('click', closeMenu);
  });
  document.addEventListener('click', function (e) {
    if (!nav.contains(e.target)) closeMenu();
  });
  window.addEventListener('resize', function () {
    if (window.innerWidth > 900) closeMenu();
  });
})();
