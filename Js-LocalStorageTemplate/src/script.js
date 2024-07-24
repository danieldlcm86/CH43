/** LocalStorage. Permite almacenar datos en la memoria local mediante la Storage API. */

// Crear constantes para los formularios
const registroFormulario = document.querySelector('#registerForm');
const inicioFormulario = document.querySelector('#loginForm');

//--- Creando evento en formulario para Registrar nuevos Usuarios
registroFormulario.addEventListener('submit', () => {

    // Guardar los inputs en constantes
    const nuevoUsuario = document.getElementById('username').value;
    const nuevoPassword = document.getElementById('password').value;

    // Guardamos los valores de los inputs en el almacenamiento local (Local Storage)
    // Sintaxis para guardarlos: localStorage.setItem("nombreItem", valor);
    // localStorage(key-value)
    localStorage.setItem("username", nuevoUsuario);
    localStorage.setItem("password", nuevoPassword);

    alert('Registro exitoso!!!');

    registroFormulario.reset();

});

// Creando evento para formulario que me permite iniciar sesión con la información almacenada en localStorage
inicioFormulario.addEventListener('submit', () => {

    // Guardar los inputs en constantes
    const usuario = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    // Obtener los valores del localStorage
    // Sintaxis: localStorage.getItem('nombreItem');
    const getUsername = localStorage.getItem('username');
    const getPassword = localStorage.getItem('password');

    // Validar mediante sentencias condicionales si el usuario existe en localStorage
    if(usuario === getUsername && password === getPassword) {
        alert(`Bienvenido ${getUsername}, inicio de sesión exitoso`);
        inicioFormulario.reset();
    } else {
        alert(`Usuario o contraseña incorrecto`);
    }
});