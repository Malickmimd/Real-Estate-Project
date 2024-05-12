import { Link } from "react-router-dom";
import styled from 'styled-components'
import {colors} from '../../utils/styles/color'
import './Menu.css'

const StyledLink = styled(Link)`
    text-decoration: none;
    font-size: 18px;
    padding: 15px;
    color: #8186a0;
    ${({$isFullLink}) => 
        $isFullLink && `color: white; border-radius: 30px; background-color: ${colors.light.Solidbackgrounds};`}
`

const StyleNav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 30px;
    margin-bottom: 5%;
`
const StyleLinks = styled.div`
    margin-right: 40px;
`
const StyledP = styled.div`
    margin-left: 40px;
    font-size: 30px;
`

function Menu() {
    

    return (
            <StyleNav>
                <StyledP>Jàppaleen <span>Jëfandikat</span></StyledP>
                <StyleLinks>
                        <StyledLink to="/accueil">Accueil</StyledLink>
                        <StyledLink to="/freelance">Profil</StyledLink>
                        <StyledLink to="/freelance">Messages</StyledLink>
                        <StyledLink to="/" $isFullLink >Se déconnecter</StyledLink>
                </StyleLinks>
            </StyleNav>                
    )   
}

export default Menu
