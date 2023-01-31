import data from '../certData'

export default function Certificates() {
    return (
        <div className='certData'>
            {data.map(item => {
                return (
                    <div className='certList'>
                        <a className='certificate' target='_blank' rel='noreferrer' href={item.link} key={item.id}>{item.title}
                            <span className="cert--title">{item.title}</span>
                            <span className="cert-description">{item.description}</span>
                        </a>
                    </div>
                )
            })}
        </div>
    )
}