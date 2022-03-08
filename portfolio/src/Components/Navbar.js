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
                    <img src={cloud} alt="logo img" className="nav-logo-icon" />Patrycja Mysiak
                </a>
            </div>
            <div className="nav-center">
                <NavLink 
                    to="experience" 
                    className={generateLinkClass}
                >Experience</NavLink>
                <NavLink 
                    to="skills" 
                    className={generateLinkClass}
                >Skills</NavLink>
                <NavLink 
                    to="projects" 
                    className={generateLinkClass}
                    >Projects</NavLink>
            </div>
            <div className="nav-right">
                <a className="github-link" href="https://github.com/Patka879" target="_blank" rel="noreferrer"> 
                <img src={gitlogo} className="gitlogo" alt="git logo" />GitHub
                </a>
            </div>
        </nav>
    )
}