// Crear componente como función de JavaScript. Debe retornar lenguaje de marcado (HTML) y debe contener un fragmento para poder agregar múltiples nodos.
// Las clases de los elementos se definen con la palabra className y se mandan a llamar en CSS de forma habitual (.)
// Para vincular el archivo .jsx con la hoja de estilos, tenemos que importar el archivo CSS
// Puedo importar la imagen y utlizarla la veces que yo quiera dentro de la función
import './NavBar.css'
import logoNasa from '../../assets/NASA_logo.png'
import Button from '../Button/Button'
import { Link } from 'react-router-dom'

const NavBar = () => {
    
    return (
        <>
        <nav className="navbar--container">
            <div className="navbar--logo">
                {/* Utilizamos Link para enlazar a otra parte de mi proyecto */}
                <Link to={'/'}>
                    <img src={logoNasa} alt="logo nasa" />
                </Link>
            </div>
            <div className="navbar--menu">
                <Link to={'/astros-api'}>
                    <a>Astros</a>
                </Link>
                <a href="https://www.nasa.gov/" target="_blank">Nasa</a>
                <a href="https://www.estacionespacial.com/" target="_blank">ISS</a>
            </div>
            <div className="navbar--search">
                <input type="text" name="search" placeholder="Escribe lo que estás buscando" />
                {/* <button>Buscar</button> */}
                <Button 
                    text='Buscar'
                />
            </div>
        </nav>
        </>
    )
}

export default NavBar