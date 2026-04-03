// Mobile menu
const menuBtn = document.querySelector('.menu');
const collapse = document.querySelector('.collapse');

menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('active');
  collapse.classList.toggle('open');
});

// Sticky header
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
  header.classList.toggle('sticky', window.scrollY > 80);
});

// Smooth scroll + close mobile menu on nav click
document.querySelectorAll('nav a[href^="#"]').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth' });
    collapse.classList.remove('open');
    menuBtn.classList.remove('active');
  });
});

// Active nav on scroll
const sections = document.querySelectorAll('section[id], div[id]');
const navLinks = document.querySelectorAll('nav a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 100) current = sec.getAttribute('id');
  });
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) link.classList.add('active');
  });
});

// Testimonials auto slider
const slides = document.querySelectorAll('.inter');
const pagerLinks = document.querySelectorAll('.pager a');

function goToSlide(i) {
  slides.forEach(s => s.classList.remove('active'));
  pagerLinks.forEach(l => l.classList.remove('active'));
  slides[i].classList.add('active');
  pagerLinks[i].classList.add('active');
}

let current = 0;
let autoSlide = setInterval(() => {
  current = (current + 1) % slides.length;
  goToSlide(current);
}, 3000);

pagerLinks.forEach((link, i) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    current = i;
    goToSlide(i);
    clearInterval(autoSlide);
    autoSlide = setInterval(() => {
      current = (current + 1) % slides.length;
      goToSlide(current);
    }, 3000);
  });
});

// Accordion
document.querySelectorAll('.accordion a').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const li = link.parentElement;
    const p = li.querySelector('p');
    const isActive = link.classList.contains('active');
    document.querySelectorAll('.accordion a').forEach(a => a.classList.remove('active'));
    document.querySelectorAll('.accordion p').forEach(p => p.style.display = 'none');
    if (!isActive) {
      link.classList.add('active');
      p.style.display = 'block';
    }
  });
});

// Portfolio filter
document.querySelectorAll('.sec5 .btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.sec5 .btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  });
});

// Scroll to top
document.querySelector('.sec13 button').addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Team expand/collapse
const teamMoreBtn = document.getElementById('team-more-btn');
const teamExtra = document.querySelector('.team-extra');

teamMoreBtn.addEventListener('click', () => {
  const isOpen = teamExtra.style.display === 'flex';
  teamExtra.style.display = isOpen ? 'none' : 'flex';
  teamMoreBtn.querySelector('.fa').className = isOpen ? 'fa fa-plus-circle' : 'fa fa-minus-circle';
});
