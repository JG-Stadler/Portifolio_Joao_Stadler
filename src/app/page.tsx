import Presentation from "./components/presentation"
import AboutMe from "./components/about-me"
import MySkills from "./components/skills_section"
import ProjectsSection from "./components/projectsSection"
import Footer from "./components/footer"

export default function Page(){
    return(
        <div className="app">
           {/* <Presentation/> */}
           <AboutMe/>
           {/* <MySkills/>
           <ProjectsSection/>
           <Footer/> */}
        </div>
    )
}