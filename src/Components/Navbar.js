import {GitLogo} from "../images/index.js"
import {NavLink} from "react-router-dom"
import {Cloud} from "../images/index.js"
import {useEffect, useState} from "react";


const generateLinkClass = ({isActive}) => 
isActive ? "nav-link-active" : "nav-link"

export default function Navbar() {
      

    return(
        <nav>
             <div className="nav-left">
                <a className="nav-logo" href="https://www.linkedin.com/in/patrycja-mysiak-20a46099/" target="_blank" rel="noreferrer">
                    <Cloud className="nav-logo-icon" />
                    <span className="nav-left-name">PATRYCJA MYSIAK</span>
                </a>
            </div>
            <div className="nav-center">
            <NavLink 
                    to="projects" 
                    className={generateLinkClass}
                    >PROJECTS
                </NavLink>
                <NavLink 
                    to="experience" 
                    className={generateLinkClass}
                    >EXPERIENCE
                </NavLink>
                <NavLink 
                    to="skills" 
                    className={generateLinkClass}
                    >SKILLS
                </NavLink>
            </div>
            <div className="nav-right">
                <a className="github-link" href="https://github.com/Patka879" target="_blank" rel="noreferrer"> 
                    <GitLogo className="gitlogo" />
                    <span className="github--text">GitHub</span>
                </a>
            </div>
        </nav>
    )
}