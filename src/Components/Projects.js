import data from "../projectsData"

export default function Projects() {


    return (
        <div className="projects-container">
            {data.map(item => {
                const ProjectIcon = item.coverImg
                return (  
                    <a className="project" target="_blank" rel="noreferrer" href={item.link} key={item.id}>
                        <span className="project--title">{item.title}</span>
                        <ProjectIcon className="project--icon" />
                        <span className="project--description">{item.description}</span>
                    </a>  
                )
            })}
        </div>
    )
}