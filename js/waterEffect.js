document.addEventListener('DOMContentLoaded', function() {
    const servicesDecor = document.querySelector('.services-decor');
    const aboutShape2 = document.querySelector('.about-shape-2');
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    let isAnimatingServices = false;
    let isAnimatingAbout = false;

    // Funcionalidad del menú hamburguesa
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');

            // Crear overlay si no existe
            let overlay = document.querySelector('.mobile-menu-overlay');
            if (!overlay) {
                overlay = document.createElement('div');
                overlay.className = 'mobile-menu-overlay';
                document.body.appendChild(overlay);

                // Cerrar menú al hacer clic en el overlay
                overlay.addEventListener('click', function() {
                    navMenu.classList.remove('active');
                    navToggle.classList.remove('active');
                    overlay.classList.remove('active');
                });
            }

            overlay.classList.toggle('active');
        });

        // Cerrar menú al hacer clic en un enlace
        const navLinks = navMenu.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
                const overlay = document.querySelector('.mobile-menu-overlay');
                if (overlay) {
                    overlay.classList.remove('active');
                }
            });
        });

        // Cerrar menú al redimensionar la ventana
        window.addEventListener('resize', function() {
            if (window.innerWidth > 768) {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
                const overlay = document.querySelector('.mobile-menu-overlay');
                if (overlay) {
                    overlay.classList.remove('active');
                }
            }
        });
    }

    // Animación de Rebote para Imágenes Decorativas al Scroll
    window.addEventListener('scroll', function() {
        // Animación para servicios
        if (!isAnimatingServices && servicesDecor) {
            isAnimatingServices = true;
            servicesDecor.classList.add('bounce');

            servicesDecor.addEventListener('animationend', function() {
                servicesDecor.classList.remove('bounce');
                isAnimatingServices = false;
            }, { once: true });
        }

        // Animación para Sobre Nosotros
        if (!isAnimatingAbout && aboutShape2) {
            isAnimatingAbout = true;
            aboutShape2.classList.add('bounce');

            aboutShape2.addEventListener('animationend', function() {
                aboutShape2.classList.remove('bounce');
                isAnimatingAbout = false;
            }, { once: true });
        }
    });
});



