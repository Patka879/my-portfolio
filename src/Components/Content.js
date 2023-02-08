import Projects from "./Projects"
import { useEffect } from "react"
import { useLocation } from "react-router"
import Experience from "./Experience"
import Skills from "./Skills"
import { Fade } from "react-reveal"


export default function Content() {
    const location = useLocation()   
    useEffect(
        function() {
            console.log("changed location", window.scrollY)
            window.scrollTo(0, 0)
        }, 
        [location]
    )

    return (
        <div>
            <div className='anchor-div' id="projects"></div>
            <Fade left>
            <h1 className='container-title'>Projects</h1>
            <Projects />
            </Fade>
            <div className='anchor-div' id="experience"></div>
            <Fade right>
            <h1 className='container-title'>Experience</h1>
            <Experience />
            </Fade>
            <div className='anchor-div' id="skills"></div>
            <Fade left>
            <h1 className="container-title">Skills</h1>
            <Skills />
            </Fade>
        </div>
    )
}