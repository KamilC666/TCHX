document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const header = document.querySelector('header');

    function adjustNavigation() {
        const containerWidth = header.querySelector('.container').offsetWidth;
        const logoWidth = header.querySelector('.logo-link').offsetWidth;
        const navItems = navMenu.querySelectorAll('li');
        let totalNavWidth = 0;

        navItems.forEach(item => {
            totalNavWidth += item.offsetWidth;
        });

        if (containerWidth - logoWidth < totalNavWidth + 20) {
            navToggle.style.display = 'block';
            navMenu.style.display = 'none';
        } else {
            navToggle.style.display = 'none';
            navMenu.style.display = 'flex';
        }
    }

    navToggle.addEventListener('change', function() {
        if (this.checked) {
            navMenu.style.display = 'flex';
        } else {
            navMenu.style.display = 'none';
        }
    });

    // Close menu when a link is clicked
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navToggle.checked = false;
            if (window.innerWidth <= 768) {
                navMenu.style.display = 'none';
            }
        });
    });

    //window resize
    window.addEventListener('resize', adjustNavigation);

    // Initial adjustment
    adjustNavigation();
});
