// Mobile nav toggle
const navToggle = document.querySelector('.nav-toggle');
const nav = document.getElementById('site-nav');
if (navToggle && nav) {
	navToggle.addEventListener('click', () => {
		const expanded = navToggle.getAttribute('aria-expanded') === 'true';
		navToggle.setAttribute('aria-expanded', String(!expanded));
		nav.classList.toggle('show');
	});
}

// Smooth scroll enhancement for in-page links
document.querySelectorAll('a[href^="#"]').forEach(link => {
	link.addEventListener('click', (e) => {
		const target = document.querySelector(link.getAttribute('href'));
		if (target) {
			e.preventDefault();
			target.scrollIntoView({ behavior: 'smooth', block: 'start' });
			nav?.classList.remove('show');
			navToggle?.setAttribute('aria-expanded', 'false');
		}
	});
});

// Contact form basic validation and fake submit
const form = document.getElementById('contact-form');
const statusEl = document.querySelector('.form-status');
if (form && statusEl) {
	form.addEventListener('submit', (e) => {
		e.preventDefault();
		const formData = new FormData(form);
		const name = (formData.get('name') || '').toString().trim();
		const email = (formData.get('email') || '').toString().trim();
		const message = (formData.get('message') || '').toString().trim();

		if (!name || !email || !message) {
			statusEl.textContent = 'Please fill out all fields.';
			statusEl.style.color = '#b91c1c';
			return;
		}

		statusEl.textContent = 'Thanks! Your message has been sent (demo).';
		statusEl.style.color = '#16a34a';
		form.reset();
	});
}

// Set current year in footer
const yearEl = document.getElementById('year');
if (yearEl) {
	yearEl.textContent = String(new Date().getFullYear());
}

// Theme toggle with localStorage and system preference
const themeToggleBtn = document.getElementById('themeToggle');
const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
const savedTheme = localStorage.getItem('theme');

function applyTheme(theme) {
	if (theme === 'dark') {
		document.body.classList.add('theme-dark');
		themeToggleBtn?.setAttribute('aria-pressed', 'true');
		themeToggleBtn && (themeToggleBtn.textContent = 'Light Mode');
	} else {
		document.body.classList.remove('theme-dark');
		themeToggleBtn?.setAttribute('aria-pressed', 'false');
		themeToggleBtn && (themeToggleBtn.textContent = 'Dark Mode');
	}
}

// Initialize theme on load
applyTheme(savedTheme ? savedTheme : (prefersDark ? 'dark' : 'light'));

// Toggle handler
themeToggleBtn?.addEventListener('click', () => {
	const isDark = document.body.classList.toggle('theme-dark');
	localStorage.setItem('theme', isDark ? 'dark' : 'light');
	applyTheme(isDark ? 'dark' : 'light');
});


