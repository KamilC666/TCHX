document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    navToggle.addEventListener('change', function() {
        if (this.checked) {
            navMenu.style.display = 'block';
        } else {
            navMenu.style.display = 'none';
        }
    });

    // Close menu when a link is clicked
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navToggle.checked = false;
            navMenu.style.display = 'none';
        });
    });

    //window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            navMenu.style.display = 'block';
        } else {
            navMenu.style.display = navToggle.checked ? 'block' : 'none';
        }
    });
});