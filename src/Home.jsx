import { Player } from "@lottiefiles/react-lottie-player"
import {Link} from "react-router-dom"
import fotoPerfil from "./assets/FotoPerfil.jpeg"
import './App.css'


function App() {
  

  return (
    <>
    <img src={fotoPerfil} className="foto-perfil"/>
    <h1>Pedro Braga Arbo</h1>
    Tecnico Desenvolvimento de Sistemas SESI/SENAI 
    <Player src='https://lottie.host/c6f8b745-3f64-4126-9b60-e67987a11a07/eM0cA575le.json'
    autoplay loop style={{ height: "150px", width: "150px" }}/>  

    <Link to="/projetos">Projetos</Link>
    </>
  )
}

export default App
