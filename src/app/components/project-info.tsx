interface ProjectInfo{
    p_id:number;
    name:string;
    description:string;
    img:string;
    i_state:string;
    setValue: (newValue: string) => void; //Tipo de retorno da função
}

export default function ProjectInfo({i_state,p_id,name,img,description,setValue}:ProjectInfo){
    return(
        <div className={i_state} id={String(p_id)}>
            <button className="close-window align-self-end" onClick={()=>setValue("project-info")}>X</button>
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