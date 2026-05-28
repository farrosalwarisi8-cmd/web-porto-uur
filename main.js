// ══════════════════════════════════════
// CUSTOM CURSOR
// ══════════════════════════════════════
const cursor = document.getElementById('cursor');
const ring = document.getElementById('cursorRing');
let mouseX = 0, mouseY = 0;
let ringX = 0, ringY = 0;

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  cursor.style.left = mouseX + 'px';
  cursor.style.top = mouseY + 'px';
});

function animateRing() {
  ringX += (mouseX - ringX) * 0.12;
  ringY += (mouseY - ringY) * 0.12;
  ring.style.left = ringX + 'px';
  ring.style.top = ringY + 'px';
  requestAnimationFrame(animateRing);
}
animateRing();

// ══════════════════════════════════════
// SCROLL REVEAL
// ══════════════════════════════════════
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      setTimeout(() => e.target.classList.add('visible'), i * 80);
    }
  });
}, { threshold: 0.1 });

reveals.forEach((el) => observer.observe(el));

// ══════════════════════════════════════
// NAVBAR SCROLL EFFECT
// ══════════════════════════════════════
window.addEventListener('scroll', () => {
  document.querySelector('nav').style.background =
    window.scrollY > 60
      ? 'rgba(11, 15, 26, 0.97)'
      : 'rgba(11, 15, 26, 0.85)';
});

const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = contactForm.querySelector('input[name="name"]').value.trim();
    const email = contactForm.querySelector('input[name="email"]').value.trim();
    const subject = contactForm.querySelector('input[name="subject"]').value.trim();
    const message = contactForm.querySelector('textarea[name="message"]').value.trim();
    const phone = '6282138661552';

    const text = `Halo, saya ${name || 'ingin menghubungi Anda'}.

Subject: ${subject || '-'}
Email: ${email || '-'}

${message || '-'}
`;
    const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank');
  });
}