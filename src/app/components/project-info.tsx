interface ProjectInfo{
    p_id:number;
    name:string;
    description:string;
    img:string;
    i_state:string;
}

export default function ProjectInfo({i_state,p_id,name,img,description}:ProjectInfo){
    return(
        <div className={i_state} id={String(p_id)}>
            <button className="close-window align-self-end">X</button>
            <h1 className="m-0">{name}</h1>
            <div className="links">
                <a href="" className="project-link">Visualizar projeto</a>
                <a href="" className="project-repository-link">Acessar Repositório</a>
            </div>
            <img src={img} alt="" />
            <p className="project-description m-0">{description}</p>
        </div>
    )
}