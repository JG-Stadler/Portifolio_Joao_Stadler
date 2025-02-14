import "../styles/navigation.css"

export default function NavigationMenu(){
    return(
        <section className="navigation-menu d-flex align-items-center">
            <button className="open-menu-btn btn d-flex flex-column
            justify-content-between">
                <div id="bar1"></div>
                <div id="bar2"></div>
                <div id="bar3"></div>
            </button>        
            <nav className="nav">
                <ul className="nav-list d-flex align-items-center m-0">
                    <li className="nav-item"><a href="#" className="nav-link">Linkedin</a></li>
                    <li className="nav-item"><a href="#" className="nav-link">GitHub</a></li>
                    <li className="nav-item"><a href="#" className="nav-link">Curriculo</a></li>
                    <li className="nav-item"><a href="#" className="nav-link">Sobre Mim</a></li>
                    <li className="nav-item"><a href="#" className="nav-link">Projetos</a></li>
                </ul>
            </nav>
        </section>
    )
}