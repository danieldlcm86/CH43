import './Astro.css'

const Astro = ({ name, craft }) => {
    return(
        <>
        <div className="astro--container">
            <h3>{ name }</h3>
            <p>{ craft }</p>

        </div>
        </>
    )
}

export default Astro