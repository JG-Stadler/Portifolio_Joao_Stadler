"use client"

import { useState } from "react"
import "../styles/navigation.css"

export default function NavigationMenu(){
    const [MenuState,SetMenuState] = useState('nav');
    const [ButtonState,SetButtonState] = useState('btn-container');
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
                <ul className="nav-list d-flex align-items-center m-0">
                    <li className="nav-item"><a href="#" className="nav-link">Linkedin</a></li>
                    <li className="nav-item"><a href="#" className="nav-link">GitHub</a></li>
                    <li className="nav-item"><a href="#" className="nav-link">Curriculo</a></li>
                    <li className="nav-item"><button className="nav-link">Sobre Mim</button></li>
                    <li className="nav-item"><button className="nav-link">Projetos</button></li>
                </ul>
            </nav>
        </section>
    )
}