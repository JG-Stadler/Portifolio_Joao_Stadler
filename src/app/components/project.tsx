interface Project{
    img: string;
    name:string;
    technologies:string;
}

export default function Project({img, name, technologies}:Project){
    return(
        <div className="project">
            <img src={img} alt="Foto do projeto"/>
            <h1 className="project-name">{name}</h1>
            <p className="technologies">{technologies}</p>
        </div>
    )
}