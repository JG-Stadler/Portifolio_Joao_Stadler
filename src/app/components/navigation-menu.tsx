"use client"
import { useState } from "react"
import "../styles/navigation.css"
export default function NavigationMenu(){

    const [MenuState,SetMenuState] = useState('nav');
    const [ButtonState,SetButtonState] = useState('btn-container');
    
    //Função para Descer a pagina até as seções selecionadas
    const scrollToSection = (destino:string) => {
        const targetElement = document.getElementById(`${destino}`);
        if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
        }
    };
    return(
        <section className="navigation-menu d-flex align-items-center">
            <div className={ButtonState}>
                <button className="open-menu-btn btn d-flex flex-column justify-content-between"
                onClick={()=>{
                    if(MenuState === "nav"){
                        SetMenuState("nav open-menu");
                        SetButtonState("btn-container activated-button");
                    }
                    else{
                        SetMenuState("nav");
                        SetButtonState("btn-container");
                    }
                }}>
                    <div id="bar1"></div>
                    <div id="bar2"></div>
                    <div id="bar3"></div>
                </button>
            </div>      
            <nav className={MenuState}>
                <ul className="nav-list d-flex align-items-center p-0 m-0">
                    <li className="nav-item"><a href="https://www.linkedin.com/in/joão-stadler-988619243" className="nav-link" target="_blank">Linkedin</a></li>
                    <li className="nav-item"><a href="https://github.com/JG-Stadler" className="nav-link" target="_blank">GitHub</a></li>
                    <li className="nav-item"><a href="https://drive.google.com/file/d/1x6cI0P4qiYdfqfPLbNeVrdNmB7xTxBqw/view?usp=drive_link" className="nav-link" target="_blank">Curriculo</a></li>
                    <li className="nav-item"><button className="nav-link" onClick={()=>scrollToSection("about")}>Sobre Mim</button></li>
                    <li className="nav-item"><button className="nav-link" onClick={()=>scrollToSection("projects")}>Projetos</button></li>
                </ul>
            </nav>
        </section>
    )
}