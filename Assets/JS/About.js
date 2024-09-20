/* This is JS for About */

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.video-text').classList.add('show');

    document.querySelectorAll('nav ul li a[href="#contact"]').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });
});
