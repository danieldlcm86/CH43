import './App.css'
import NavBar from './components/NavBar/NavBar'
import Button from './components/Button/Button'
import Products from './components/Products/Products'
import Footer from './components/Footer/Footer';

/* Con los fragmentos, le digo a React que puede recibir múltiples nodos hijos */
function App() {

  // En estas tres constantes vivirán las url de las imágenes
  const tenisMorados = 'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/82/6142201/1.jpg?2933';
  const tenisDark = 'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/01/241417/1.jpg?6747';
  const tenisBrown = 'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/06/4410121/1.jpg?4437';

  return (
    <>
      <NavBar />
      <h1>
        React
      </h1>

      <Button 
        text='Botón'
      />

      <Products
        image = { tenisMorados }
        title = 'Tenis morados' 
        description = 'Fabricados en México con materiales reutilizados' 
        price = '$ 2599.00'
      />
      <Products
        image={ tenisDark }
        title='Tenis Speed Dark'
        description='Velocidad al máximo con los tenis runners'
        price='$ 1598.00'
      />
      <Products
        image = { tenisBrown }
        title = 'Tenis Camel'
        description = 'Vive a la vanguardia con estos elegantes tenis que puedes usar en cualquier lugar' 
        price = '$ 574.00'
      />

      <hr />
      <h2 style={{ color: '#fff176', fontSize: 25 }}>Material UI - Components</h2>
      {/* Ejemplo de MUI */}

      <br />

      {/* Footer */}
      <Footer />
    </>
  )
}

export default App
