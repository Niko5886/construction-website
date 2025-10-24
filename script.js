// Toggle mobile navigation visibility when the menu button or a nav link is pressed.
const navLinks = document.getElementById('navLinks');
const toggleButton = document.getElementById('mobileMenuToggle');

if (toggleButton && navLinks) {
    toggleButton.addEventListener('click', () => {
        navLinks.classList.toggle('show');
    });

    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('show');
        });
    });
}
