document.addEventListener('DOMContentLoaded', function() {
    const servicesDecor = document.querySelector('.services-decor');
    const aboutShape2 = document.querySelector('.about-shape-2');
    let isAnimatingServices = false;
    let isAnimatingAbout = false;

    window.addEventListener('scroll', function() {
        // Animación para servicios
        if (!isAnimatingServices) {
            isAnimatingServices = true;
            servicesDecor.classList.add('bounce');

            servicesDecor.addEventListener('animationend', function() {
                servicesDecor.classList.remove('bounce');
                isAnimatingServices = false;
            }, { once: true });
        }

        // Animación para about-shape-2
        if (!isAnimatingAbout) {
            isAnimatingAbout = true;
            aboutShape2.classList.add('bounce');

            aboutShape2.addEventListener('animationend', function() {
                aboutShape2.classList.remove('bounce');
                isAnimatingAbout = false;
            }, { once: true });
        }
    });

 // Animación de Rebote para Imágenes Decorativas al Scroll
    window.addEventListener('scroll', function() {
        // Animación para servicios
        if (!isAnimatingServices && servicesDecor) {
            isAnimatingServices = true;
            servicesDecor.classList.add('bounce');

            // Removemos la clase después de que la animación termine
            servicesDecor.addEventListener('animationend', function() {
                servicesDecor.classList.remove('bounce');
                isAnimatingServices = false;
            }, { once: true });
        }

        // Animación para Sobre Nosotros
        if (!isAnimatingAbout && aboutShape2) {
            isAnimatingAbout = true;
            aboutShape2.classList.add('bounce');

            // Removemos la clase después de que la animación termine
            aboutShape2.addEventListener('animationend', function() {
                aboutShape2.classList.remove('bounce');
                isAnimatingAbout = false;
            }, { once: true });
        }
    });
});



