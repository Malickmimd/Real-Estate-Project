import { useState } from 'react'
import {Link} from 'react-scroll'
import { FaBars, FaTimes } from 'react-icons/fa'

import './Header.css'

const Header = () => {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const closeMenu = () => setClick(false)

    return (
        <div className='header'>
            <nav className='navbar'>
                <a href='/' className='logo'>
                    <span>Jàppaleen Jëfandikat</span>
                </a>
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={30} style={{ color: '#ffffff' }} />)
                        : (<FaBars size={30} style={{ color: '#ffffff' }} />)}

                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className='nav-item'>
                        <Link to="accueil" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>Accueil</Link>
                    </li>
                    <li className='nav-item'>
                    <Link to="services" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>Services</Link>
                    </li>
                    <li className='nav-item'>
                    <Link to="offres" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>Offres</Link>
                    </li>
                    <li className='nav-item'>
                    <Link to="contact" spy={true} smooth={true} offset={-150} duration={500} onClick={closeMenu}>Contact</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Header