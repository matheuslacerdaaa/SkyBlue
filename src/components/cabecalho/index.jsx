
import { useState } from "react";
import './index.scss'

export default function Cabecalho() {
    const [mobilebtn, setMobilebtn] = useState(false);

    function abrirmenu() {
        setMobilebtn(!mobilebtn);
    }

    const icones = mobilebtn ? "fa-times" : "fa-bars";

    return (
        <header className={mobilebtn ? 'mobile-active' : ''}>
            <img id="logo" src="./assets/images/cabecalho/Logo-preto.png" alt="Logo" />

            <button className="menu-btn" onClick={abrirmenu}>
                <p className={`fa-solid ${icones}`}></p>
            </button>

            <nav className={mobilebtn ? 'nav-active' : ''}>
                <a href="#inicio">Inicio</a>
                <a href="#sobre">Sobre</a>
                <a href="#recursos">Recursos</a>
                <a href="#planos">Planos</a>
                <a className="btn-contato-active" href="https://wa.me/5511993296044?text=Olá%21%21%20quero%20mais%20informações
">Contato</a>
            </nav>

            <a className="btn-contato" href="https://wa.me/5511993296044?text=Olá%21%21%20quero%20mais%20informações
">Contato</a>
           
        </header>
    );
}
