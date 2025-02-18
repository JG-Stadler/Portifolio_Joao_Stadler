import Presentation from "./components/presentation"
import AboutMe from "./components/about-me"

export default function Page(){
    return(
        <div className="app">
           <Presentation/>
           <AboutMe/>
        </div>
    )
}