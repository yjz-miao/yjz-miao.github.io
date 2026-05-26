/* ===========================================================
 * YJZ's Security Lab — Custom JS
 * =========================================================== */

(function () {
  'use strict';

  // Wait for DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  function init() {
    addNavScrollEffect();
    addCodeCopyFeedback();
    addHoverGlow();
  }

  /* ---------- Navbar scroll effect ---------- */
  function addNavScrollEffect() {
    const nav = document.getElementById('nav');
    if (!nav) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          nav.style.boxShadow = '0 2px 20px rgba(0, 212, 255, 0.08)';
        } else {
          nav.style.boxShadow = 'none';
        }
      },
      { threshold: 0 }
    );

    // Observe the element after the banner
    const target = document.querySelector('#page-header .menus_container') || document.querySelector('#nav-visible');
    if (target) observer.observe(target);
  }

  /* ---------- Code copy feedback ---------- */
  function addCodeCopyFeedback() {
    document.addEventListener('click', function (e) {
      const btn = e.target.closest('.copy-button');
      if (!btn) return;

      btn.textContent = '✓';
      btn.style.color = '#00ff88';
      setTimeout(() => {
        btn.textContent = '';
        btn.style.color = '';
      }, 1500);
    });
  }

  /* ---------- Subtle hover glow on cards ---------- */
  function addHoverGlow() {
    const cards = document.querySelectorAll('.recent-post-item');
    cards.forEach((card) => {
      card.addEventListener('mouseenter', function () {
        this.style.borderColor = 'rgba(0, 212, 255, 0.3)';
      });
      card.addEventListener('mouseleave', function () {
        this.style.borderColor = '';
      });
    });
  }
})();
