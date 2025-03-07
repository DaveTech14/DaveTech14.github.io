// script.js
document.addEventListener('DOMContentLoaded', () => {
    const text = document.querySelector('.text');
    const stars = document.querySelector('.stars');
    const grid = document.querySelector('.grid');

    // Animación de dibujo de texto
    text.addEventListener('animationend', () => {
        // Rellenar las letras con colores alternados
        const letters = document.querySelectorAll('.text-copy');
        letters.forEach((letter, index) => {
            setTimeout(() => {
                letter.style.fill = index % 2 === 0 ? '#00FFFF' : '#00FF00';
            }, index * 500);
        });

        // Mostrar estrellas y cuadrícula
        setTimeout(() => {
            stars.style.display = 'block';
            grid.style.display = 'block';
        }, letters.length * 500);

        // Redirigir a otra página después de 10 segundos
        setTimeout(() => {
            window.location.href = 'Portafolio/Portafolio.html';
        }, 10000);
    });
});