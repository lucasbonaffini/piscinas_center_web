document.addEventListener('DOMContentLoaded', () => {
    const waterImage = document.getElementById('waterImage');
    let position = 0;

    function animateWater() {
        position -= 1;
        waterImage.style.backgroundPosition = `${position}px 0`;
        requestAnimationFrame(animateWater);
    }

    animateWater();
});
