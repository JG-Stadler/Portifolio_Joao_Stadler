import "../styles/presentation.css"
import NavigationMenu from "./navigation-menu"

export default function Presentation(){
    return(
        <header className="presentation d-flex align-items-center">
            <NavigationMenu/>
            <div className="hello">
                <p className="m-0">Olá, eu sou</p>
                <h1 className="m-0">João Stadler</h1>
                <p className="ocupation m-0">Web Developer</p>
            </div>
            <img src="./images/tecnologias.png" alt="tecnologias"  className="technology"/>
        </header>
    )
}