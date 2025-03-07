// Selecciona el botón y el ícono
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');

// Verifica el modo actual al cargar la página
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
    themeIcon.textContent = '☀️'; // Cambia el ícono a sol
} else {
    themeIcon.textContent = '🌙'; // Cambia el ícono a luna
}

// Función para cambiar entre modos
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
        themeIcon.textContent = '☀️'; // Cambia el ícono a sol
    } else {
        localStorage.setItem('theme', 'light');
        themeIcon.textContent = '🌙'; // Cambia el ícono a luna
    }
});