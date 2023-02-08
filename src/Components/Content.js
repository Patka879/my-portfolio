import Projects from './Projects'
import { useEffect } from 'react'
import { useLocation } from 'react-router'
import Experience from './Experience'
import Skills from './Skills'
import { Slide } from 'react-awesome-reveal'


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
            <Slide duration={2000}>
            <h1 className='container-title'>Projects</h1>
            <Projects />
            </Slide>
            <div className='anchor-div' id='experience'></div>
            <Slide duration={2000}>
            <h1 className='container-title'>Experience</h1>
            <Experience />
            </Slide>
            <div className='anchor-div' id='skills'></div>
            <Slide duration={2000}>
            <h1 className='container-title'>Skills</h1>
            <Skills />
            </Slide>
        </div>
    )
}