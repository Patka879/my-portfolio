export default function WelcomePage() {
    return(
        <div className='welcome-container'>
            <div className='welcome-message'>
                <h1 className='welcome-header'>Hello, I am <span>Patrycja</span></h1>
                <h1 className='welcome-header'>I'am a Frontend Developer.</h1>
                <a href='#anchor'>
                    <button className='welcome-btn'>See my work </button>
                </a>
            </div>
            <div id="anchor"></div>
        </div>
    )
}