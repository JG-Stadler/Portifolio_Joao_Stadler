import "../styles/aboutMe.css"

export default function AboutMe(){
    return(
        <section className="about-me-section d-flex align-items-center
        justify-content-around" id="about">
            <picture className="j_stadler-picture">
                <img src="./images/jg-foto-principal.jpg" alt="Foto João Stadler" />
            </picture>
            <main className="about-me-txt">
                <h1>Muito prazer! Eu me chamo <span>João Gabriel Rodrigues Stadler</span>.</h1>
                <p>
                    Sou desenvolvedor web apaixonado pelo que faço. <br /> 
                    Conheci a programação aos 14 anos, quando estava buscando um rumo para o meu futuro.
                    Desde então, venho me aperfeiçoando a cada dia, criando sites e sistemas cada vez mais completos. <br />
                    Buscando mais conhecimento, formei-me técnico em Informática em 2025 pela FAETEC e, atualmente, 
                    estou cursando Análise e Desenvolvimento de Sistemas pela Estácio.
                    Meu maior objetivo hoje é usar meu conhecimento para contribuir com a criação de sistemas que possam 
                    oferecer aos usuários uma experiência intuitiva, incrível e confortável.
                </p>
            </main>
        </section>
    )
}