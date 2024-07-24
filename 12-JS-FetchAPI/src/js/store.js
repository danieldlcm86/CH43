/** Fetch API. Consumiendo APIs
 * Trabajamos con promesas que se deben cumplir o rechazar. Para ello realizamos peticiones específicas.
 * Necesitamos una API que viva en un servidor 
 */

const url = `https://jsonplaceholder.typicode.com/users`;

//--- Creando el fetch para obtener (GET) datos de una API
fetch(url)
    // Guardo los datos de la API en una variable data, la mando a llamar y la convierto de JSON a Object
    .then(data => data.json())
    // Ya puedo usar esa información para realizar accioens
    .then(data => {
        console.log(data); //Consumiendo la API
        console.log(data[0]); //Recuperando el primer elemento de la API
        console.log(data[4].name);
    })
    .catch(error => console.error('Cuidado, ¡Es un error!', error));


// Objeto que enviaremos a la API mediante método POST
const publicacion = {
    userId: 1986,
    id: 123456789,
    title: 'Creando API',
    body: 'Estoy consumiendo una API y enviando información al servidor remoto para visualizarlo en la consola'
}

//--- Creando el fetch para enviar (POST) datos a una API
fetch(`https://jsonplaceholder.typicode.com/posts`, {
    // Indicar el tipo de método HTTP
    method: 'POST',
    // Definir los headers
    headers: {'Content-type': 'application/json; charset=UTF-8'},
    // Definir el cuerpo del Objeto que se va a enviar a la API
    body: JSON.stringify(publicacion)
})
    .then(response => response.json())
    .then(response => {
        console.log(response);
    })
    .catch(error => console.error(error))


//--- asynch - await. Consumir APIs mediante funciones asíncronas
const getUser = async () => {
    try {
        // Controlar el tiempo de ejecución de la función a través de un delay
        await new Promise(resolve => {
            setTimeout(resolve, 100)
        });

        // Intentar que se cumpla la promesa
        const response = await fetch(`https://fakestoreapi.com/products`);
        const data = await response.json();
        console.log(data);
    }
    catch(error) {
        console.error(error);
    }
};

getUser();



















//--- Consumir una API y usar su información para mostrar algo en el frontend (Manipulación del DOM)