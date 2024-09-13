document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('nav ul');

    navToggle.addEventListener('change', function() {
        if (this.checked) {
            navMenu.style.display = 'flex';
        } else {
            navMenu.style.display = 'none';
        }
    });

    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navToggle.checked = false;
            navMenu.style.display = 'none';
        });
    });
});