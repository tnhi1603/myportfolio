// Intersection observer for reveal animations
const observer = new IntersectionObserver((entries) => {
entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
    entry.target.style.transitionDelay = (i * 0.05) + 's';
    entry.target.classList.add('visible');
    }
});
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Typing effect
const typed = document.querySelector('.hero-intro h2 span');
const words = ['.NET Developer', 'ASP.NET Core Dev', 'Backend Engineer', 'Problem Solver'];
let wi = 0, ci = 0, deleting = false;

function type() {
    const word = words[wi];
    if (!deleting) {
        typed.textContent = word.slice(0, ++ci);
        if (ci === word.length) {
        deleting = true;
        setTimeout(type, 1800);
        return;
        }
    } else {
        typed.textContent = word.slice(0, --ci);
        if (ci === 0) {
        deleting = false;
        wi = (wi + 1) % words.length;
        }
    }
    setTimeout(type, deleting ? 50 : 90);
    }
type();

// Hamburger menu
    function toggleMenu() {
    const nav = document.getElementById('navLinks');
    const btn = document.getElementById('hamburger');
    nav.classList.toggle('open');
    btn.classList.toggle('open');
    document.body.style.overflow = nav.classList.contains('open') ? 'hidden' : '';
    }

    function closeMenu() {
        const nav = document.getElementById('navLinks');
        const btn = document.getElementById('hamburger');
        nav.classList.remove('open');
        btn.classList.remove('open');
        document.body.style.overflow = '';
    }

// Close menu on outside click
document.addEventListener('click', (e) => {
const nav = document.getElementById('navLinks');
const btn = document.getElementById('hamburger');
    if (nav.classList.contains('open') && !nav.contains(e.target) && !btn.contains(e.target)) {
        closeMenu();
    }
});

const year = new Date().getFullYear();
document.getElementById("year").textContent = new Date().getFullYear();