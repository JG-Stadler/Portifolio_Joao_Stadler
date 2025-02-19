import { ReactNode } from "react"

interface IconProps {
    icon: ReactNode;
    label:string;
    level:string;
    skill_class:string;
}
export default function Skill({icon, label, level, skill_class}:IconProps){
    return(
        <div className={`skill ${skill_class}`}>
            {icon}
            <p className="skill-name m-0">{label}</p>
            <p className="skill-level m-0">{level}</p>
        </div>
    )
}