import Presentation from "./components/presentation"
import AboutMe from "./components/about-me"
import MySkills from "./components/skills_section"

export default function Page(){
    return(
        <div className="app">
           <Presentation/>
           <AboutMe/>
           <MySkills/>
        </div>
    )
}