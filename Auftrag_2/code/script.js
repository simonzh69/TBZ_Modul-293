const darkModeButton = document.getElementById('darkModeButton');
if (darkModeButton) {
  darkModeButton.addEventListener('click', function() {
    document.body.classList.toggle('darkMode');
    darkModeButton.textContent = document.body.classList.contains('darkMode') ? '🌙' : '☀️';
  });
}