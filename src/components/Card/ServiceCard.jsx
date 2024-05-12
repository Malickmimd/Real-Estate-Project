/* eslint-disable react/prop-types */
import './ServiceCard.css'

export default function ServiceCard({label, icon}) {
    return(
        <div>
            <div className='service-card'>
                {icon}
            </div>
            <span>{label}</span>
        </div>
    )
}