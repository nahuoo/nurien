import React from 'react'
import StyledNavbar from '../assets/css/StyledNavbar'
import Logo from '../assets/img/nurien_studio.png'

const Navbar = () => {
    return (
    <StyledNavbar> 
        <div className='linea-azul'></div>
        <div className='linea-morada'></div>
        <div className="burger">
            <div></div>
            <div></div>
            <div></div>
        </div>
        <div className='logo'>
            <img src={Logo} alt='Logo'/>
        </div>
        <ul className="ListaLink">
            <li><span className="link" data-glitch="PORTFOLIO">PORTFOLIO</span></li>
            <li><span className="link" data-glitch="¿QUIENES SOMOS?">¿QUIENES SOMOS?</span></li>
            <li><span className="link" data-glitch="CONTACTO">CONTACTO</span></li>
        </ul>
    </StyledNavbar>
    )
}

export default Navbar