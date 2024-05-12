import Menu from "../../components/Menu"
import { offres } from "../../utils/constant";
import OffreCard from "../../components/Card/OffreCard";


export default function Home() {
    return (
        <div className='offres'>
            <Menu/>
            <div className='container'>
                <div className='content'>
                    {offres.map((item, index) => 
                        <OffreCard key={`item-${index}`} picture={item.picture} description={item.description} location={item.location} price={item.price}/>
                    )}
                </div>
            </div>
        </div>
    )
}