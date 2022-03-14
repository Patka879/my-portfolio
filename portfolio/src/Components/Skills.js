import data from "../skillsData"

export default function Skills() {
    return (
        <div className="skills-container">
            {data.slice(0, 1).map(item => {
                const Image = item.coverImg
                return (  
                    <span className="skills-list" key={item.id}>
                        <Image />
                        <p className="skill--title">{item.title}</p>
                    </span>    
                )
            })}
        </div>
    )
}