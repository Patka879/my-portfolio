import data from '../certData'

export default function Certificates() {
    return (
        <div className='cert-data'>
            <p className='certificates-title'>Certificates</p>
            {data.map(item => {
                return (
                    <a className='certificate' target='_blank' rel='noreferrer' href={item.link} key={item.id}>
                        <p className="cert--title">{item.title}</p>
                        <p className="cert--description">{item.description}</p>
                    </a>
                )
            })}
        </div>
    )
}