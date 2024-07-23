// --- Script para trabajar con el formulario y la card morada
// Crear información de un usuario para que viva en un objeto (clave:valor... key:value) y poder manipularlo en el DOM

const user = {
    username: 'danieldlcm',
    age: 37,
    email: 'danieldlcm@gmail.com',
    films: ['se7en', 'babylon', 'interstellar', 'the shutter island', 'beetlejuice', 'gladiator', 'shrek', 'dune', 'kill bill']
};

// Crear función que me permite agregar la información del objeto `user` dentro del div `profile`, es decir, dentro del nodo padre
const crearUsuario = (user) => {
    document.getElementById('name').textContent = user.username;
    document.getElementById('age').textContent = user.age;
    document.getElementById('e-mail').textContent = user.email;
    //document.getElementById('films').textContent = user.films;

    // Para mostrar los films como elementos de una lista desordenada(ul), debo manipularlos mediante el DOM y agregarlos como elementos de lista (li)
    // Vamos a crear los elementos de la lista (li) y meter cada uno de los elementos del Array en la lista desordenada utilizando el método .forEach()
    
    // Guardo el elemento `ul` en una constante, ya que aquí vivirán todos los elemetos de la lista (li)
    const listFilms = document.getElementById('films');

    // Recorro los elementos del Array que viven en la clave `films` del objeto `user`
    user.films.forEach(film => {
        // Crear elementos de lista (li) que viven en una constante
        const itemList = document.createElement('li');
        itemList.textContent = film;
        // Agregar en un nodo padre cada elemento de la lista
        listFilms.appendChild(itemList);
    });
    listFilms.style.listStyleType = 'none';
    listFilms.style.padding = 0;
    listFilms.style.color = 'coral';
};

crearUsuario(user);

// Crear una función para enviar información desde los inputs a la tarjetita utilizando eventos de escucha (addEventListener), modificando la información existente

// 1. Guardar en constantes los elementos que quiero manipular
const inputUsername = document.getElementById('username'); //input
const inputEmail = document.getElementById('email'); //input
const botonActualizar = document.getElementById('button--main'); //botón
const nuevoUsername = document.getElementById('name'); //card h3
const nuevoEmail = document.getElementById('e-mail'); //card <p>

// 2. Crear la función con el evento para actualizar la información
botonActualizar.addEventListener('click', () => {
    nuevoUsername.textContent = inputUsername.value;
    nuevoEmail.textContent = inputEmail.value;
});