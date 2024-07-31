import { useEffect, useState } from "react";
import Footer from "../Footer/Footer"
import NavBar from "../NavBar/NavBar"
import Astro from "./Astro/Astro"
import './Astros.css'

// Utilizamos el componente Astros para actualizar el estado del mismo (useState), y consumiendo una API (useEffect).

// 1. Mandar a llamar el enlace de la API y la guardamos en una constante
const URL_ASTROS = `http://api.open-notify.org/astros.json`;

const Astros = () => {
// 2. Aplicando hooks: definir useState
    const [astros, setAstros] = useState([]);

// 3. Implementar useEffect
    useEffect(() => {
        getAstros();
    }, []);

// 4. Crear una función que nos permita consumir una API (function getAstros)
    const getAstros = () => {
        fetch(URL_ASTROS)
            .then(response => response.json())
            .then(data => setAstros(data.people))
            .catch(error => console.error(error));
    }

    return(
        <>
            <NavBar />

            <h1>Astros API</h1>

            <div className="card--container">
            {/* Itero sobre astros (useState) para llenar el componente <Astro /> con la información contenida, utilizando un .map*/}
            {
                astros.map((astro, index) => 
                    <Astro key={index} {...astro} />
                )
            }
            </div>

            <Footer />
        </>
    )
}

export default Astros