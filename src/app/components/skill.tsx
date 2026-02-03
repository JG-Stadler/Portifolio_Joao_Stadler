import { ReactNode } from "react"

interface IconProps {
    icon: ReactNode;
    label:string;
    level:string;
}
export default function Skill({icon, label, level}:IconProps){
    return(
        <div className="skill">
            {icon}
            <p className="skill-name m-0">{label}</p>
            <p className="skill-level m-0">{level}</p>
        </div>
    )
}