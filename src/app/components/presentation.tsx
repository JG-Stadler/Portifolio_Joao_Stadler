import "../styles/presentation.css"
import NavigationMenu from "./navigation-menu"
import ShootingStars from "./stars-background"

export default function Presentation(){
    return(
        <header className="presentation d-flex align-items-center">
            <ShootingStars/>
            <NavigationMenu/>
            <div className="hello">
                <p className="m-0">Olá, eu sou</p>
                <h1 className="m-0">João Stadler</h1>
                <p className="ocupation m-0">Web Developer</p>
            </div>
        </header>
    )
}