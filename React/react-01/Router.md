# React Router

1. Instalar los módulos de React Router con el comando
```bash
npm install react-router-dom
```
2. En el archivo `main.jsx` debemos crear una constante `router` donde vive el componente `createBrowserRouter` y dentro las rutas específicas que el usuario puede seguir.
3. Debo importar `createBrowserRouter` desde `react-router-dom`
4. Crear la primera ruta dentro de la const `router`
```javascript
const router = createBrowserRouter([
  // Aquí voy a crear las rutas. Una ruta se compone de dos elementos: `path` y `element`
  {
    path: '/', element: <App />
  }
]);
```
5. Para indicar en donde se renderiza react-router, debemos sustituir el componente `<App />` que se encuentra dentro de `<React.StrictMode>` y en su lugar, agregar el componente `<RouterProvider />` el cual va a recibir el conjunto de rutas a renderizar.