import './Button.css'
// Props. Pueden ser estructurados o desestructurados.
// - Estructuros, utilizamos la palabra reservada `props` que pasa a formar parte de los parámetros de la función.

function Button( props ) {
    return(
        <>
        <button>{ props.text }</button>
        </>
    )
}

export default Button