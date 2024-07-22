// Acceder a los elementos que voy a manipular (botón y el div container)
const button = document.getElementById('button--card');
const container = document.getElementById('card--container');

// Agregar estilos para visibilidad
container.style.visibility = 'visible';

// Manejar eventos para ocultar el container desde el botón
button.addEventListener('click', () => {
    container.style.visibility = (container.style.visibility === 'visible') ? 'hidden' : 'visible'; 
});