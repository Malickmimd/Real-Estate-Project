import { FaDollarSign } from "react-icons/fa";
import { RiCommunityLine } from "react-icons/ri";
import { IoIosCall } from "react-icons/io";
import { RiPlantLine } from "react-icons/ri";
import { MdOutlineSecurity } from "react-icons/md";
import { FaMoneyBillAlt } from "react-icons/fa";
import Offre1 from './assets/Asset3.png'
import Offre2 from './assets/landingAsset.png'
import Offre3 from './assets/Asset.png'

export const services = [
    {
        icon: <FaDollarSign color='red'/>,
        label: 'Payez aussi peu que possible'
    },
    {
        icon: <RiCommunityLine color='red'/>,
        label: 'Profitez de la sagesse de la communauté'
    },
    {
        icon: <IoIosCall color='red'/>,
        label: 'Contactez facilement'
    },
    {
        icon: <RiPlantLine color='red'/>,
        label: "La tranquilité d'esprit"
    },
    {
        icon: <MdOutlineSecurity color='red'/>,
        label: 'Soyez en sécurité, Economisez'
    },
    {
        icon: <FaMoneyBillAlt color='red' />,
        label: 'Payez pour ce que vous utilisez'
    },
]

export const offres = [
    {
        picture: Offre1,
        location: 'Sandaga',
        description: 'Très belle',
        price: 'CFA 250000/mois'
    },
    {
        picture: Offre2,
        location: 'Foire',
        description: 'Très belle',
        price: 'CFA 250000/mois'
    },
    {
        picture: Offre3,
        location: 'Parcelles',
        description: 'Très belle',
        price: 'CFA 250000/mois'
    },
]