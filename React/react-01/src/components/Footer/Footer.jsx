import './Footer.css'

const Footer = () => {
    return (
        <>
            <footer>
                <main className="footer--sections">
                    <section className="section">Sobre nosotros
                        <a href="">Historia</a>
                        <a href="">Misión</a>
                        <a href="">Visión</a>
                    </section>
                    <section className="section">Menú
                        <a href="">Astros</a>
                        <a href="">Nasa</a>
                        <a href="">ISS</a>
                    </section>
                    <section className="section">Legales
                        <a href="">T&C</a>
                        <a href="">Aviso de privacidad</a>
                        <a href="">FAQs</a>
                    </section>
                </main>
                <div id="copyright">
                    <p>&copy; Derechos reservados. 2024</p>
                </div>
            </footer>
        </>
    )
}

export default Footer