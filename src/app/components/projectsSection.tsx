import Project from "./project";
import '../styles/projects.css'
const projects = 
[
    {img:'./images/Fotos_Projetos/capa-extreme-jump-race.png',
    name:'Extreme Jump Race',technologies:'TypeScript | HTML | CSS | BootsTrap',
    description: "blabla"
},
    {img:'./images/Fotos_Projetos/capa-nutrigraos.png',
    name:'Empório Nutrigrãos',technologies:'PHP | HTML | CSS | BootsTrap | Mysql',
    description: "blabla"
}
];

export default function ProjectsSection(){
    return(
        <section className="projects-section" id="projects">
            <h1>Meus Principais Projetos</h1>
            <main>
                {
                    projects.map((project,i)=>(
                        <Project key={i} p_id={i} img={project.img} ProjectName={project.name} technologies={project.technologies} 
                        description={project.description}/>
                    ))
                }
            </main>
        </section>
    )
}