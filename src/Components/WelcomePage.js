import AnchorLink from "react-anchor-link-smooth-scroll"

export default function WelcomePage() {
    return(
        <div className='welcome-container'>
            <div className='welcome-message'>
                <h1 className='welcome-header'>Hello, I am <span className='name'>Patrycja</span></h1>
                <h1 className='welcome-header'>I'am a Frontend Developer.</h1>
                <AnchorLink href='#nav'>
                    <button className='welcome-btn'>See my work </button>
                </AnchorLink>
            </div>
        </div>
    )
}