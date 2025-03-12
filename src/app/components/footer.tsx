"use client"

import "../styles/footer.css"
import "../globals.css"

export default function Footer(){
    //Função para descer a página até o ponto desejado
    const scrollToSection = (destino:string) => {
        const targetElement = document.getElementById(`${destino}`);
        if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
        }
    };

    return(
        <footer className="main-page-footer d-flex align-items-center justify-content-around">
            <p className="copyright m-0">© 2025 João Stadler</p>
            <nav className="footer-nav">
                <ul className="nav-list-ft d-flex align-items-center p-0 m-0">
                    <li className="nav-item"><a href="https://www.linkedin.com/in/joão-stadler-988619243" className="nav-link" target="_blank">Linkedin</a></li>
                    <li className="nav-item"><a href="https://github.com/JG-Stadler" className="nav-link" target="_blank">GitHub</a></li>
                    <li className="nav-item"><a href="https://drive.google.com/file/d/1x6cI0P4qiYdfqfPLbNeVrdNmB7xTxBqw/view?usp=drive_link" className="nav-link" target="_blank">Curriculo</a></li>
                    <li className="nav-item"><button className="nav-link" onClick={()=>scrollToSection("about")}>Sobre Mim</button></li>
                    <li className="nav-item"><button className="nav-link" onClick={()=>scrollToSection("projects")}>Projetos</button></li>
                </ul>
            </nav>
        </footer>
    )
}