const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');

hamburger.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
  const spans = hamburger.querySelectorAll('span');
  const isOpen = mobileMenu.classList.contains('open');
  if (isOpen) {
    spans[0].style.transform = 'rotate(45deg) translate(4px, 4px)';
    spans[1].style.opacity = '0';
    spans[2].style.transform = 'rotate(-45deg) translate(4px, -4px)';
  } else {
    spans[0].style.transform = '';
    spans[1].style.opacity = '';
    spans[2].style.transform = '';
  }
});

mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
    hamburger.querySelectorAll('span').forEach(span => {
      span.style.transform = '';
      span.style.opacity = '';
    });
  });
});

const observerOptions = {
  threshold: 0.12,
  rootMargin: '0px 0px -40px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document.querySelectorAll('.product-card').forEach((card, i) => {
  card.style.opacity = '0';
  card.style.transform = 'translateY(32px)';
  card.style.transition = `opacity 0.6s ${i * 0.1}s ease, transform 0.6s ${i * 0.1}s ease`;
  observer.observe(card);
});

document.querySelectorAll('.ritual-card').forEach((card, i) => {
  card.style.opacity = '0';
  card.style.transform = 'translateY(32px)';
  card.style.transition = `opacity 0.6s ${i * 0.15}s ease, transform 0.6s ${i * 0.15}s ease`;
  observer.observe(card);
});

document.querySelectorAll('.testimonial-card').forEach((card, i) => {
  card.style.opacity = '0';
  card.style.transform = 'translateY(24px)';
  card.style.transition = `opacity 0.6s ${i * 0.12}s ease, transform 0.6s ${i * 0.12}s ease`;
  observer.observe(card);
});

document.querySelectorAll('.section-header').forEach(header => {
  header.style.opacity = '0';
  header.style.transform = 'translateY(24px)';
  header.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
  observer.observe(header);
});

document.querySelectorAll('.btn-add').forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    btn.textContent = '✓';
    btn.style.background = 'var(--pink-500)';
    btn.style.color = 'var(--white)';
    
    const cartCount = document.querySelector('.cart-count');
    if (cartCount) {
      cartCount.textContent = parseInt(cartCount.textContent) + 1;
      cartCount.style.transform = 'scale(1.4)';
      setTimeout(() => {
        cartCount.style.transform = '';
      }, 300);
    }

    setTimeout(() => {
      btn.textContent = '+';
      btn.style.background = '';
      btn.style.color = '';
    }, 1800);
  });
});

const newsletterInput = document.querySelector('.newsletter-form input');
const newsletterBtn = document.querySelector('.newsletter-form .btn-primary');

if (newsletterBtn) {
  newsletterBtn.addEventListener('click', () => {
    const email = newsletterInput?.value?.trim();
    if (!email || !email.includes('@')) {
      newsletterInput.style.borderColor = '#e87070';
      newsletterInput.placeholder = 'Ingresa un email válido';
      setTimeout(() => {
        newsletterInput.style.borderColor = '';
        newsletterInput.placeholder = 'tu@email.com';
      }, 2000);
      return;
    }
    newsletterBtn.textContent = '¡Suscrito! ✓';
    newsletterBtn.style.background = 'linear-gradient(135deg, #5a9a6a, #4a8a5a)';
    newsletterInput.value = '';
    setTimeout(() => {
      newsletterBtn.textContent = 'Suscribirse';
      newsletterBtn.style.background = '';
    }, 3000);
  });
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

window.addEventListener('mousemove', (e) => {
  const { clientX, clientY } = e;
  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;
  const moveX = (clientX - centerX) / centerX;
  const moveY = (clientY - centerY) / centerY;

  const blob1 = document.querySelector('.blob1');
  const blob2 = document.querySelector('.blob2');
  const blob3 = document.querySelector('.blob3');

  if (blob1) blob1.style.transform = `translate(${moveX * 20}px, ${moveY * 15}px)`;
  if (blob2) blob2.style.transform = `translate(${moveX * -15}px, ${moveY * -12}px)`;
  if (blob3) blob3.style.transform = `translate(${moveX * 10}px, ${moveY * 8}px)`;
});

console.log('%c✦ Aurora — Estética Avanzada', 'color: #d4706f; font-family: serif; font-size: 16px; font-style: italic;');
