import data from '../certData'

export default function Certificates() {
    return (
        <div className='certData'>
            {data.map(item => {
                return (
                    <div className='certList'>
                        <p className='certTitle'>{item.title}</p>
                        <p className='certDescription'>{item.description}</p>
                    </div>
                )
            })}
        </div>
    )
}