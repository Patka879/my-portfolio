import gitlogo from "../images/gitlogo.svg"
import {NavLink} from "react-router-dom"
import cloud from "../images/cloud.png"

const generateLinkClass = ({isActive}) => 
isActive ? "nav-link-active nav-link" : "nav-link"

export default function Navbar() {
    return(
        <nav>
             <div className="nav-left">
                <a className="nav-logo" href="https://www.linkedin.com/in/patrycja-mysiak-20a46099/" target="_blank">
                    <img src={cloud} alt="logo img" className="nav-logo-icon" /><span className="nav-left-name">PATRYCJA MYSIAK</span>
                </a>
            </div>
            <div className="nav-center">
            <NavLink 
                    to="projects" 
                    className={generateLinkClass}
                    >PROJECTS</NavLink>
                <NavLink 
                    to="experience" 
                    className={generateLinkClass}
                >EXPERIENCE</NavLink>
                <NavLink 
                    to="skills" 
                    className={generateLinkClass}
                >SKILLS</NavLink>
            </div>
            <div className="nav-right">
                <a className="github-link" href="https://github.com/Patka879" target="_blank" rel="noreferrer"> 
                <img src={gitlogo} className="gitlogo" alt="git logo" /><span className="github-text">GitHub</span>
                </a>
            </div>
        </nav>
    )
}