import { Player } from "@lottiefiles/react-lottie-player"
import { Link } from "react-router-dom"
import './App.css'


function Projetos() {


    return (
        <>
            <header>
                <h1>MEUS PROJETOS</h1>
            </header>
            <main>
                <figure>
                    <Player src='https://lottie.host/c6f8b745-3f64-4126-9b60-e67987a11a07/eM0cA575le.json'
                        autoplay loop style={{ height: "100px", width: "100px" }} />
                </figure>
                <section>
                    <h2>PRIMEIRA FASE:</h2>
                    Número Mágico /
                    Sistema de Irrigação
                </section>
                <section>
                    <h2>SEGUNDA FASE:</h2>
                    Banco de Dados /
                    React Native (App Santander)
                </section>
                <section>
                    <h2>TERCEIRA FASE:</h2>
                    Modelagem de Sistemas /
                    Internet das Coisas
                </section>
                <section>
                    <h2>QUARTA FASE:</h2>
                    PetFlix /
                    Portfólio
                </section>
            </main>
            <footer>
                <Link to="/">HOME</Link>
            </footer>
        </>
    )
}

export default Projetos
