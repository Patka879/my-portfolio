import Projects from "./Projects"
import {Routes, Route, Navigate,} from "react-router-dom"
import { useEffect } from "react"
import { useLocation } from "react-router"
import Experience from "./Experience"
import Skills from "./Skills"


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
        // <Routes>
        //     <Route path="/" element={<Navigate to="projects" />}></Route>
        //     <Route path="experience" element={<Experience />}></Route>
        //     <Route path="skills" element={<Skills />}></Route>
        //     <Route path="projects" element={<Projects />}></Route>
        //     <Route path="*" element={<Navigate to="/projects" replace />} />
        // </Routes> 
        <div>
            <h1 className='container-title' id="projects">Projects</h1>
            <Projects />
            <h1 className='container-title' id="experience">Experience</h1>
            <Experience />
            <h1 className='container-title' id="skills">Skills</h1>
            <Skills />
        </div>
    )
}