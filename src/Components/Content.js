import Projects from './Projects'
import { useEffect } from 'react'
import { useLocation } from 'react-router'
import Experience from './Experience'
import Skills from './Skills'


export default function Content() {
    const location = useLocation()   
    useEffect(
        function() {
            console.log('changed location', window.scrollY)
            window.scrollTo(0, 0)
        }, 
        [location]
    )

    return (
        <div>
            <div className='anchor-div' id='projects'></div>
            <h1 className='container-title'>Projects</h1>
            <Projects />
            <div className='anchor-div' id='experience'></div>
            <h1 className='container-title'>Experience</h1>
            <Experience />
            <div className='anchor-div' id='skills'></div>
            <h1 className='container-title'>Skills</h1>
            <Skills />
        </div>
    )
}