import data from "../skillsData"

export default function Skills() {

    return (
        <div className="skills-container">
            {data.map(item => {
                return (  
                    <span className="skills-list" key={item.id}>
                        <img className="skill--icon" alt="skill icon"src={item.coverImg} />
                        <p className="skill--title">{item.title}
                        </p>
                    </span>    
                )
            })}
        </div>
    )
}