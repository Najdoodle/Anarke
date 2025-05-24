// SMOOTH SCROLL
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      window.scrollTo({ top: target.offsetTop - 60, behavior: 'smooth' });
    }
  });
});

// THEME TOGGLE
const themeBtn = document.getElementById('theme-toggle');
themeBtn.addEventListener('click', () => {
  document.body.classList.toggle('light');
  if (document.body.classList.contains('light')) {
    document.documentElement.style.setProperty('--bg', '#f5f1e9');
    document.documentElement.style.setProperty('--fg', '#111');
    themeBtn.textContent = '☀️';
  } else {
    document.documentElement.style.setProperty('--bg', '#121212');
    document.documentElement.style.setProperty('--fg', '#f0f0f0');
    themeBtn.textContent = '🌙';
  }
});

// COUNTDOWN TIMER
const countdownEl = document.getElementById('countdown');
// Set your release date: Year, MonthIndex(0-11), Day, Hour, Minute, Second
const releaseDate = new Date(2025, 11, 1, 0, 0, 0);
function updateCountdown() {
  const now = new Date();
  let diff = releaseDate - now;
  if (diff < 0) diff = 0;
  const d = Math.floor(diff / (1000 * 60 * 60 * 24));
  const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const m = Math.floor((diff / (1000 * 60)) % 60);
  const s = Math.floor((diff / 1000) % 60);
  countdownEl.textContent =
    String(d).padStart(2, '0') + 'd ' +
    String(h).padStart(2, '0') + 'h ' +
    String(m).padStart(2, '0') + 'm ' +
    String(s).padStart(2, '0') + 's';
}
setInterval(updateCountdown, 1000);
updateCountdown();
