import Projects from "./Projects"
import {Routes, Route, Navigate} from "react-router-dom"
import Experience from "./Experience"
import Skills from "./Skills"


export default function Content() {   
    

    return (
        <Routes>
            <Route path="experience" element={<Experience />}></Route>
            <Route path="skills" element={<Skills />}></Route>
            <Route path="projects" element={<Projects />}></Route>
            <Route path="*" element={<Navigate to="/experience" replace />} />
        </Routes>
        
    )
}