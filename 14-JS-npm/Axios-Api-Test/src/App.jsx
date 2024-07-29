import './App.css'
import axios from 'axios'

function App() {

// --- Utilizando Axios, voy a realizar una solicitud de tipo Get. Al presionar el botón "Get Method" voy a mostrar en consola los datos de una API.
// Axios utilizará async-await para la promesa
// La función se vincula con el botón utilizando la propiedad "onClick"
const getInfo = async () => {
  try {
    const response = await axios.get(`https://eldenring.fanapis.com/api/bosses`);
    console.log(response);
    console.log(response.data.data[0].name); // Nombre del primer jefe
    console.log(response.data.data[1].name); // Nombre del segundo jefe
  } catch(error) {
    console.error(error);
  }
}

// --- Utilizando Axios, voy a realizar una solicitud de tipo Post. Al presionar el botón "Post Method" voy a mostrar en consola los datos de una API.
// Axios utilizará async-await para la promesa
// La función se vincula con el botón utilizando la propiedad "onClick"
const postInfo = async () => {
  try {
    // Crear objeto que se enviará como nueva información (body)
    const user = {
      userId: 2024,
      id: 150,
      title: "Axios",
      body: "Realizando peticiones utilizando Axios"
    }
    // Crear una constante para guardar el header
    const header = {
      'Content-type': 'application/json; charset=UTF-8'
    }

    // Utilizando Axios como manejador de peticiones, realizamos el envío de tipo POST
    const response = await axios.post(`https://jsonplaceholder.typicode.com/posts`, user, header);
    console.log(response);

  } catch(error) {
    console.error(error);
  }
}

  return (
    <>
      <div>
        <h1 className="box">HTTP - Axios</h1>
      </div>
      <div className="card">
        <button onClick={getInfo}>
          Get Method
        </button>
        <button onClick={postInfo}>
          Post Method
        </button>
      </div>
    </>
  )
}

export default App
