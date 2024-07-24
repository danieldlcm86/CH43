//--- Voy a mostrar los productos de la Fake Store API en el div vacío después de presionar el botón

// Mandar a llamar los elementos para poder manipular el DOM
const botonProductos = document.getElementById('button--store'); 
const tienda = document.getElementById('store');
let productos = null;
const url = `https://fakestoreapi.com/products`;

// Agregar un evento de tipo click para el botón
botonProductos.addEventListener('click', () => {
    fetch(url)
        .then(response => response.json())
        .then(response => {
            productos = response;
            // Invocar una función con parámetros para mostrar los productos (hoisting)
            mostrarProductos(productos);
        })
        .catch(error => console.error(error))
});

// Crear función `mostrarProductos` que nos permite, crear, añadir elementos mediante la manipulación del DOM
const mostrarProductos = (productos) => {
    productos.map((producto) => {
        // El método map me permite recorre toda la API como si fuera un array de arrays tomando cada producto con el nombre `producto`

        // 1. Crear elementos HTML en donde voy a ir guardando cada parte del producto (title<h2> image<img> price<h3> description<p> <hr>)
        const titulo = document.createElement('h2');
        const imagen = document.createElement('img');
        const precio = document.createElement('h3');
        const descripcion = document.createElement('p');
        const separador = document.createElement('hr');

        // 2. Llenar los elementos creados. Podemos utilizar innerHTML para llenarlo con los datos del objeto. Para ellos mandamos a llamar las claves del objeto
        titulo.innerHTML = producto.title;
        imagen.src = producto.image;
        imagen.width = 200;
        precio.innerHTML = `$${producto.price}`;
        descripcion.innerHTML = producto.description;

        // 3. Agregar los nodos en el nodo Padre
        tienda.appendChild(titulo);
        tienda.appendChild(imagen);
        tienda.appendChild(precio);
        tienda.appendChild(descripcion);
        tienda.appendChild(separador);

    })
}
