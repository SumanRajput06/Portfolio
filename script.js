// script.js - Theme Toggle and Form Behavior

function toggleTheme() {
  document.body.classList.toggle('dark');
  localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');
}

// Load saved theme on page load
window.onload = () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark');
  }

  // Dummy contact form handler
  const form = document.querySelector('form');
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('📨 Thanks for reaching out! I will get back to you soon.');
    form.reset();
  });
};
