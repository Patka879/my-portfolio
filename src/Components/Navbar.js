import {GitLogo} from "../images/index.js"
import {LinkedinLogo} from "../images/index.js"
import {NavLink} from "react-router-dom"
import classNames from "classnames"
import useSticky from "../useSticky"


const generateLinkClass = ({isActive}) => 
isActive ? "nav-link-active" : "nav-link"

export default function Navbar() {
    const { sticky, stickyRef } = useSticky();
    return(
        <>
        <nav ref={stickyRef} className={classNames('nav', { sticky })}>
            <div className="nav-left" id='nav'>
                <span className="nav-left-name">patrycja.mysiak</span>
            </div>
            <div className="nav-center">
            <NavLink 
                    to="projects" 
                    className={generateLinkClass}
                    >projects
                </NavLink>
                <NavLink 
                    to="experience" 
                    className={generateLinkClass}
                    >experience
                </NavLink>
                <NavLink 
                    to="skills" 
                    className={generateLinkClass}
                    >skills
                </NavLink>
            </div>
            <div className="nav-right">
                <a className="github-link" href="https://github.com/Patka879" target="_blank" rel="noreferrer"> 
                    <GitLogo className="gitlogo" />
                </a>
                <a className="linkedin-link" href="https://www.linkedin.com/in/patrycja-mysiak-20a46099/" target="_blank" rel="noreferrer">
                    <LinkedinLogo className="linklogo" />
                </a>
            </div>
        </nav>
        </>
    )
}