function toggleDarkMode() {
  document.body.classList.toggle('darkMode');
  document.getElementById('darkModeButton').textContent = document.body.classList.contains('darkMode') ? '☀️' : '🌙';
}

