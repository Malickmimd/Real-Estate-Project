import './Services.css'
import john from '../../utils/assets/Asset2.png'
import ServiceCard from '../../components/Card/ServiceCard';
import { services } from '../../utils/constant';

const Services = () => {
    return (
        <div className='services' id='services'>
            <div className='container'>
                <div className='div-Image' >
                    <img src={john} alt='john' />
                </div>
                <div className='col-2'>
                    <h2>Des biens abordables et accessibles en un clic</h2>
                    <span className='line'></span>
                    <div className='service-grid'>
                        {services.map((item, index) => 
                            <ServiceCard key={`item-${index}`} icon={item.icon} label={item.label} />
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services
