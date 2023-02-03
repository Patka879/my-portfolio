import {GitLogo} from "../images/index.js"
import {LinkedinLogo} from "../images/index.js"
import classNames from "classnames"
import useSticky from "../useSticky"
import AnchorLink from "react-anchor-link-smooth-scroll";


export default function Navbar() {
    const { sticky, stickyRef } = useSticky();
    
    return(
        <>
        <nav ref={stickyRef} className={classNames('nav', { sticky })}>
            <div className="nav-left" id='nav'>
                <span className="nav-left-name">patrycja.mysiak</span>
            </div>
            <div className="nav-center">
                <AnchorLink 
                    href="#projects" 
                    className='nav-link'
                    activeClassName='nav-link-active'
                    >projects
                </AnchorLink>
                <AnchorLink
                    href="#experience" 
                    className='nav-link'
                    activeClassName='nav-link-active'
                    >experience
                </AnchorLink>
                <AnchorLink
                    href="#skills" 
                    className='nav-link'
                    activeClassName='nav-link-active'
                    >skills
                </AnchorLink>
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