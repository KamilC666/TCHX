// Pobranie elementów HTML
const menuIcon = document.getElementById('menu-icon');
const navLinks = document.getElementById('nav-links');

// Dodanie nasłuchiwania kliknięcia na ikonę menu
menuIcon.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});