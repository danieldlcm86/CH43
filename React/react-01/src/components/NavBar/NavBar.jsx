// Crear componente como función de JavaScript. Debe retornar lenguaje de marcado (HTML) y debe contener un fragmento para poder agregar múltiples nodos.
// Las clases de los elementos se definen con la palabra className y se mandan a llamar en CSS de forma habitual (.)
// Para vincular el archivo .jsx con la hoja de estilos, tenemos que importar el archivo CSS
// Puedo importar la imagen y utlizarla la veces que yo quiera dentro de la función
import './NavBar.css'
import logoNasa from '../../assets/NASA_logo.png'
import Button from '../Button/Button'

const NavBar = () => {
    
    return (
        <>
        <nav className="navbar--container">
            <div className="navbar--logo">
                <img src={logoNasa} alt="logo nasa" />
            </div>
            <div className="navbar--menu">
                <a href="http://open-notify.org/Open-Notify-API/People-In-Space/" target="_blank">Astros</a>
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