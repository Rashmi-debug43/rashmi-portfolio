/**
 * THE CURIOUS MIND — RASHMI N S PORTFOLIO
 * Vanilla JavaScript Core Engine
 * 
 * Includes:
 * 1. Theme Switcher (Dark Midnight / Light Starlight) with System Preference & LocalStorage
 * 2. Accessible Mobile Navigation with ARIA states & Escape key handling
 * 3. Smooth In-Page Navigation & Active Link Spy
 * 4. Scroll Reveal via IntersectionObserver (Respects Reduced Motion)
 * 5. Interactive Project Filtering with ARIA tab states
 * 6. Quick Email Copy to Clipboard with Feedback
 * 7. Interactive Direct Inquiry Mailto Form
 * 8. Celestial Pointer Parallax Effect for Hero
 */

(function () {
  'use strict';

  // Check reduced motion preference
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ==========================================================================
     1. Theme Switcher Engine
     ========================================================================== */
  const themeToggleBtn = document.getElementById('theme-toggle');
  const htmlElement = document.documentElement;

  function getPreferredTheme() {
    const savedTheme = localStorage.getItem('curious_mind_theme');
    if (savedTheme === 'light' || savedTheme === 'dark') {
      return savedTheme;
    }
    // Respect OS preference by default
    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  }

  function applyTheme(theme) {
    htmlElement.setAttribute('data-theme', theme);
    localStorage.setItem('curious_mind_theme', theme);

    if (themeToggleBtn) {
      const isLight = theme === 'light';
      themeToggleBtn.setAttribute('aria-label', isLight ? 'Switch to Dark Celestial Theme' : 'Switch to Light Theme');
      themeToggleBtn.setAttribute('title', isLight ? 'Switch to Dark Celestial Theme' : 'Switch to Light Theme');
    }
  }

  // Initialize theme immediately
  const initialTheme = getPreferredTheme();
  applyTheme(initialTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = htmlElement.getAttribute('data-theme') || 'dark';
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      applyTheme(newTheme);
    });
  }

  // Listen for OS theme changes if user hasn't explicitly set preference
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem('curious_mind_theme')) {
      applyTheme(e.matches ? 'dark' : 'light');
    }
  });

  /* ==========================================================================
     2. Accessible Mobile Navigation
     ========================================================================== */
  const mobileToggle = document.getElementById('mobile-nav-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  function openMenu() {
    if (!mobileToggle || !navMenu) return;
    mobileToggle.setAttribute('aria-expanded', 'true');
    mobileToggle.setAttribute('aria-label', 'Close navigation menu');
    navMenu.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    if (!mobileToggle || !navMenu) return;
    mobileToggle.setAttribute('aria-expanded', 'false');
    mobileToggle.setAttribute('aria-label', 'Open navigation menu');
    navMenu.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      const isExpanded = mobileToggle.getAttribute('aria-expanded') === 'true';
      if (isExpanded) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    // Close menu when a navigation link is clicked
    navLinks.forEach((link) => {
      link.addEventListener('click', () => {
        closeMenu();
      });
    });

    // Close menu on ESC key press
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && navMenu.classList.contains('open')) {
        closeMenu();
        mobileToggle.focus();
      }
    });
  }

  /* ==========================================================================
     3. Active Link Spy & Smooth Scroll
     ========================================================================= */
  const sections = document.querySelectorAll('section[id]');

  function updateActiveNavLink() {
    const scrollY = window.pageYOffset;

    sections.forEach((current) => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');
      const matchingLink = document.querySelector(`.nav-link[href*="${sectionId}"]`);

      if (matchingLink) {
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          matchingLink.classList.add('active');
        } else {
          matchingLink.classList.remove('active');
        }
      }
    });
  }

  window.addEventListener('scroll', updateActiveNavLink, { passive: true });

  /* ==========================================================================
     4. Scroll Reveal via IntersectionObserver
     ========================================================================== */
  const revealElements = document.querySelectorAll('.reveal-item');

  if (!prefersReducedMotion && 'IntersectionObserver' in window && revealElements.length > 0) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      rootMargin: '0px 0px -60px 0px',
      threshold: 0.12
    });

    revealElements.forEach((el) => revealObserver.observe(el));
  } else {
    // If reduced motion is preferred or IntersectionObserver unsupported, reveal immediately
    revealElements.forEach((el) => el.classList.add('revealed'));
  }

  /* ==========================================================================
     5. Interactive Project Filtering
     ========================================================================== */
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  if (filterButtons.length > 0 && projectCards.length > 0) {
    filterButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        const selectedCategory = btn.getAttribute('data-filter');

        // Update active filter button state
        filterButtons.forEach((b) => {
          b.classList.remove('active');
          b.setAttribute('aria-selected', 'false');
        });
        btn.classList.add('active');
        btn.setAttribute('aria-selected', 'true');

        // Filter projects
        projectCards.forEach((card) => {
          const cardCategories = (card.getAttribute('data-categories') || '').split(' ');
          
          if (selectedCategory === 'all' || cardCategories.includes(selectedCategory)) {
            card.style.display = 'grid';
            setTimeout(() => {
              card.style.opacity = '1';
              card.style.transform = 'translateY(0)';
            }, 10);
          } else {
            card.style.opacity = '0';
            card.style.transform = 'translateY(10px)';
            setTimeout(() => {
              card.style.display = 'none';
            }, 250);
          }
        });
      });
    });
  }

  /* ==========================================================================
     6. Quick Email Copy to Clipboard
     ========================================================================== */
  const copyEmailBtn = document.getElementById('copy-email-btn');
  const copyStatusMsg = document.getElementById('copy-status');

  if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', async () => {
      const emailToCopy = copyEmailBtn.getAttribute('data-email') || 'nsrashmi2005@gmail.com';
      try {
        if (navigator.clipboard && navigator.clipboard.writeText) {
          await navigator.clipboard.writeText(emailToCopy);
        } else {
          // Fallback for older browsers
          const tempInput = document.createElement('input');
          tempInput.value = emailToCopy;
          document.body.appendChild(tempInput);
          tempInput.select();
          document.execCommand('copy');
          document.body.removeChild(tempInput);
        }

        const originalText = copyEmailBtn.textContent;
        copyEmailBtn.textContent = 'Copied!';
        copyEmailBtn.style.color = '#34D399';
        copyEmailBtn.style.borderColor = '#34D399';

        if (copyStatusMsg) {
          copyStatusMsg.textContent = 'Email address copied to clipboard.';
        }

        setTimeout(() => {
          copyEmailBtn.textContent = originalText;
          copyEmailBtn.style.color = '';
          copyEmailBtn.style.borderColor = '';
          if (copyStatusMsg) {
            copyStatusMsg.textContent = '';
          }
        }, 3000);
      } catch (err) {
        console.warn('Clipboard copy failed:', err);
      }
    });
  }

  /* ==========================================================================
     7. Interactive Direct Inquiry Mailto Form
     ========================================================================== */
  const inquiryForm = document.getElementById('inquiry-form');
  const formStatus = document.getElementById('form-status');

  if (inquiryForm) {
    inquiryForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const senderName = (document.getElementById('sender-name') || {}).value || '';
      const senderSubject = (document.getElementById('sender-subject') || {}).value || 'Inquiry regarding potential collaboration';
      const senderMessage = (document.getElementById('sender-message') || {}).value || '';
      const targetEmail = 'nsrashmi2005@gmail.com';

      const emailSubject = encodeURIComponent(`[The Curious Mind] ${senderSubject} - from ${senderName}`);
      const emailBody = encodeURIComponent(`Hello Rashmi,\n\n${senderMessage}\n\nBest regards,\n${senderName}`);

      const mailtoUrl = `mailto:${targetEmail}?subject=${emailSubject}&body=${emailBody}`;

      if (formStatus) {
        formStatus.textContent = 'Opening your email client with your message...';
        formStatus.className = 'form-status-msg success';
        formStatus.style.display = 'block';
      }

      window.location.href = mailtoUrl;
    });
  }

  /* ==========================================================================
     8. Celestial Pointer Parallax Effect for Hero
     ========================================================================== */
  const heroCard = document.querySelector('.hero-visual-card');
  const heroSvg = document.querySelector('.hero-orbit-svg');

  if (heroCard && heroSvg && !prefersReducedMotion && window.innerWidth > 900) {
    heroCard.addEventListener('mousemove', (e) => {
      const rect = heroCard.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      const tiltX = (y / (rect.height / 2)) * -8;
      const tiltY = (x / (rect.width / 2)) * 8;

      heroSvg.style.transform = `perspective(600px) rotateX(${tiltX.toFixed(2)}deg) rotateY(${tiltY.toFixed(2)}deg) scale3d(1.02, 1.02, 1.02)`;
    });

    heroCard.addEventListener('mouseleave', () => {
      heroSvg.style.transform = 'perspective(600px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    });
  }

})();
