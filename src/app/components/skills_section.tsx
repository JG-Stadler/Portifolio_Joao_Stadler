import Skill from "./skill";
import "../styles/skills_seciton.css"
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { FaPhp } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { SiDotnet } from "react-icons/si";

export default function MySkills(){
    return(
        <section className="skills-section">
            <h1>Minhas habilidades</h1>
            <main className="my-skills">
                <Skill icon={<FaHtml5 size={50} color="#ffff"/>} label="HTML 5" level="Avançado" skill_class="Advanced"/>
                <Skill icon={<FaCss3Alt size={50} color="#ffff"/>} label="CSS 3" level="Avançado" skill_class="Advanced"/>
                <Skill icon={<FaBootstrap size={50} color="#ffff"/>} label="BootsTrap" level="Avançado" skill_class="Advanced"/>
                <Skill icon={<IoLogoJavascript size={50} color="#ffff"/>} label="JavaScript" level="Avançado" skill_class="Advanced"/>
                <Skill icon={<FaReact size={50} color="#ffff"/>} label="React.js" level="Intermediário" skill_class="Intermediary"/>
                <Skill icon={<SiNextdotjs size={50} color="#ffff"/>} label="Next" level="Intermediário" skill_class="Intermediary"/>
                <Skill icon={<GrMysql size={50} color="#ffff"/>} label="MySQL" level="Intermediário" skill_class="Intermediary"/>
                <Skill icon={<SiDotnet size={50} color="#ffff"/>} label=".NET FrameWork" level="Básico" skill_class="Basic"/>
                <Skill icon={<FaPhp size={50} color="#ffff"/>} label="PHP 8" level="Básico" skill_class="Basic"/>
            </main>
        </section>
    );
}