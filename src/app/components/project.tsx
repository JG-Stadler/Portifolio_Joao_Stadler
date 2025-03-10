"use client"
import { useState } from "react";
import ProjectInfo from "./project-info";

interface Project{
    p_id:number;
    img: string;
    ProjectName:string;
    technologies:string;
    description:string
}

export default function Project({p_id,img, ProjectName, technologies,description}:Project){

    const [Info_state,SetInfo_state] = useState("project-info");
    
    return(
    <>
        <div className="project" onClick={()=>SetInfo_state("project-info open")}>
            <img src={img} alt="Foto do projeto"/>
            <div className="info">
                <h1 className="project-name">{ProjectName}</h1>
                <p className="technologies">{technologies}</p>
            </div>
        </div>
        <ProjectInfo
            setValue={SetInfo_state}
            i_state={Info_state}
            p_id={p_id}
            name={ProjectName}
            img={img}
            description={description}
        />
    </>
    )
}