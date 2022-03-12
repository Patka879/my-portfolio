import data from "../data"

export default function Projects() {

    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
      }

    return (
        <div className="projects-container">
            {data.map(item => {
                return (  
                    <a className="project" target="_blank" rel="noreferrer" href={item.link} key={item.id}>
                        <span className="project--title">{item.title}</span>
                        <img className="project--icon" src={item.coverImg} alt="project icon" />
                        <span className="project-description">{item.description}</span>
                    </a>  
                )
            })}
        </div>
    )
}