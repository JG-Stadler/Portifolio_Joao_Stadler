import "../styles/aboutMe.css"

export default function AboutMe(){
    return(
        <section className="about-me-section d-flex align-items-center
        justify-content-around">
            <picture className="j_stadler-picture">
                <img src="./images/jg-foto-principal.jpg" alt="Foto João Stadler" />
            </picture>
            <main className="about-me-txt">
                <h1>Muito prazer! Eu me chamo <span>João Gabriel Rodrigues Stadler</span>.</h1>
                <p>
                    sou desenvolvedor web com foco em front-end. Estudo programação desde os 14 anos e,
                    ao longo dos anos, venho aprimorando minhas habilidades em tecnologias como HTML, CSS,
                    JavaScript, TypeScript e frameworks modernos. Além disso, tenho experiência com back-end
                    utilizando PHP e MySQL.
                    Atualmente, busco sempre criar interfaces responsivas, intuitivas e eficientes, 
                    combinando performance e boa experiência do usuário. Meu objetivo é desenvolver soluções 
                    novadoras e impactantes na web.
                    🚀 Vamos criar algo incrível juntos?
                </p>
            </main>
        </section>
    )
}