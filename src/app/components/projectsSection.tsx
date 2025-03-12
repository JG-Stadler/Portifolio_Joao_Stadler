import Project from "./project";
import '../styles/projects.css'
const projects = 
[
    {img:'./images/Fotos_Projetos/capa-extreme-jump-race.png',
    name:'Extreme Jump Race',technologies:'TypeScript | HTML | CSS | BootsTrap',
    description: "Extreme Jump Race é um jogo 2D em estilo 8 bits onde o jogador controla um robô ágil que precisa saltar sobre carros em movimento para avançar o máximo possível. Desenvolvido com HTML, CSS e TypeScript, o game combina reflexos rápidos com um design retrô e desafiador. 🚀🎮",
    repository:"https://github.com/JG-Stadler/Extreme-Jump-Race",
    project_link:"https://jg-stadler.github.io/Extreme-Jump-Race/"
},
    {img:'./images/Fotos_Projetos/capa-nutrigraos.png',
    name:'Empório Nutrigrãos',technologies:'PHP | HTML | CSS | BootsTrap | Mysql',
    description: "Empório Nutrigraos é uma loja de produtos naturais que oferece uma grande variedade de alimentos saudáveis a granel. Com um sistema prático e intuitivo, os clientes podem escolher seus produtos online e finalizar a compra diretamente pelo WhatsApp. Desenvolvido com PHP e MySQL, o site garante uma experiência rápida e eficiente para quem busca uma alimentação equilibrada. 🌿🥜",
    repository:"https://github.com/JG-Stadler/Site-Emporio-Nutrigraos",
    project_link:"https://emporionutrigraos.site"
}
];

export default function ProjectsSection(){
    return(
        <section className="projects-section" id="projects">
            <h1>Meus Principais Projetos</h1>
            <main className="projects-container">
                {
                    projects.map((project,i)=>(
                        <Project key={i} p_id={i} img={project.img} ProjectName={project.name} technologies={project.technologies} 
                        description={project.description} project_link={project.project_link} repository={project.repository}/>
                    ))
                }
            </main>
        </section>
    )
}