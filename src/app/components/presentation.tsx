import "../styles/presentation.css"

export default function Presentation(){
    return(
        <header className="presentation d-flex align-items-center">
            <div className="hello">
                <p className="m-0">Olá, eu sou</p>
                <h1 className="m-0">João Stadler</h1>
            </div>
            <img src="./images/tecnologias.png" alt="tecnologias"  className="technology"/>
        </header>
    )
}