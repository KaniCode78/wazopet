// FAQ Toggle
  function toggleFaq(btn) {
    const answer = btn.nextElementSibling;
    const icon = btn.querySelector('.faq-icon');
    const isOpen = answer.classList.contains('open');
    document.querySelectorAll('.faq-answer.open').forEach(a => {
      a.classList.remove('open');
      a.previousElementSibling.querySelector('.faq-icon').classList.remove('open');
    });
    if (!isOpen) {
      answer.classList.add('open');
      icon.classList.add('open');
    }
  }

  // Waitlist
  function handleWaitlist(inputId) {
    const input = document.getElementById(inputId);
    const email = input.value.trim();
    const emailRx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRx.test(email)) {
      input.style.boxShadow = '0 0 0 3px rgba(220,38,38,0.2)';
      input.focus();
      setTimeout(() => input.style.boxShadow = '', 2000);
      return;
    }
    // Show success
    if (inputId === 'ctaEmail') {
      document.getElementById('ctaForm').style.display = 'none';
      document.getElementById('successMsg').style.display = 'block';
    }
    showToast();
    input.value = '';
  }

  function showToast() {
    const t = document.getElementById('toast');
    t.classList.add('show');
    setTimeout(() => t.classList.remove('show'), 3500);
  }

  // Mobile menu
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileClose = document.getElementById('mobileClose');

  hamburger.addEventListener('click', () => mobileMenu.classList.add('open'));
  mobileClose.addEventListener('click', () => mobileMenu.classList.remove('open'));
  document.querySelectorAll('.mobile-link').forEach(link => {
    link.addEventListener('click', () => mobileMenu.classList.remove('open'));
  });

  // Keyboard enter on inputs
  document.getElementById('heroEmail').addEventListener('keydown', e => {
    if (e.key === 'Enter') handleWaitlist('heroEmail');
  });
  document.getElementById('ctaEmail').addEventListener('keydown', e => {
    if (e.key === 'Enter') handleWaitlist('ctaEmail');
  });

  // Scroll animations
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) e.target.classList.add('visible');
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

  // Nav shadow on scroll
  const nav = document.querySelector('nav');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      nav.style.boxShadow = '0 1px 0 rgba(26,43,43,0.06)';
    } else {
      nav.style.boxShadow = 'none';
    }
  });