import data from "../skillsData"


export default function Skills() {
    return (
        <div className="skills-container">
            {data.map(item => {
                const SkillIcon = item.coverImg
                return (  
                    <span className="skills-list" key={item.id}>
                        <SkillIcon className="skill--icon" />
                        <p className="skill--title">{item.title}</p>
                    </span>    
                )
            })}
        </div>
    )
}