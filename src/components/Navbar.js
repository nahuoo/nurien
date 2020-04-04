import React from 'react'
import StyledNavbar from '../assets/css/StyledNavbar'
const Navbar = () => {
    return (
    <StyledNavbar> 
        <div className='linea-azul'>azul</div>
        <div className='linea-morada'>morada</div>
        <ul classname='nav-links'>
            <li>PORTFOLIO</li>
            <li>¿QUIENES SOMOS?</li>
            <li>CONTACTO</li>
        </ul>

    </StyledNavbar>
    )
}

export default Navbar