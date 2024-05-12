import './Offres.css'
import OffreCard from '../../components/Card/OffreCard'
import { offres } from '../../utils/constant'

const Offres = () => {
    return (
        <div className='offres' id='offres'>
            <div className='container'>
                <h2>Nos offres</h2>
                <span className='line'></span>
                <div className='content'>
                    {offres.map((item, index) => 
                        <OffreCard key={`item-${index}`} picture={item.picture} description={item.description} location={item.location} price={item.price}/>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Offres
