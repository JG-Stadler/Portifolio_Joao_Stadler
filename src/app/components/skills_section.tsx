import Skill from "./skill";
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
        <section className="my-skills">
            <Skill icon={<FaHtml5/>} label="HTML 5" level="Avançado"/>
            <Skill icon={<FaCss3Alt/>} label="CSS 3" level="Avançado"/>
            <Skill icon={<FaBootstrap/>} label="BootsTrap" level="Avançado"/>
            <Skill icon={<IoLogoJavascript/>} label="JavaScript" level="Avançado"/>
            <Skill icon={<FaReact/>} label="React.js" level="intermediário"/>
            <Skill icon={<SiNextdotjs/>} label="Next" level="intermediário"/>
            <Skill icon={<FaPhp/>} label="PHP 8" level="Basico"/>
            <Skill icon={<GrMysql/>} label="MySQL" level="intermediário"/>
            <Skill icon={<SiDotnet/>} label=".NET" level="Basico"/>
        </section>
    );
}