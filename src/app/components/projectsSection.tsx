import Project from "./project";
import '../styles/projects.css'
const projects = 
[
    {img:'./images/Fotos_Projetos/capa-extreme-jump-race.png',
    name:'Extreme Jump Race',technologies:'TypeScript | HTML | CSS | BootsTrap'},
    {img:'./images/Fotos_Projetos/capa-nutrigraos.png',
    name:'Empório Nutrigrãos',technologies:'PHP | HTML | CSS | BootsTrap | Mysql'}
];

export default function ProjectsSection(){
    return(
        <section className="projects-section">
            <h1>Meus Principais Projetos</h1>
            <main>
                {
                    projects.map((project,i)=>(
                        <Project key={i} img={project.img} name={project.name} technologies={project.technologies} />
                    ))
                }
            </main>
        </section>
    )
}