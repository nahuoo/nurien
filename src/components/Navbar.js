import React, {useState} from 'react'
import StyledNavbar from '../assets/css/StyledNavbar'
import Logo from '../assets/img/nurien_studio.png'

const Navbar = () => {

    const [menu, setMenu] = useState(false)
    const [subMenu, setSubMenu] = useState(false)

    const handleMenu = () => {
        if(subMenu){
            setSubMenu(!subMenu)
        }
        setMenu(!menu)
    }
    const handleSubMenu = () => {
        setSubMenu(!subMenu)
    }

    return (
    <StyledNavbar> 
        <div className='linea-azul'></div>
        <div className='linea-morada'></div>
        <div className="burger" onClick={handleMenu}>
            <div className={menu ? 'on1' : ''}></div>
            <div className={menu ? 'on2' : ''}></div>
            <div className={menu ? 'on3' : ''}></div>
        </div>
        <div className='logo'>
            <img src={Logo} alt='Logo'/>
        </div>
        <ul className={`ListaLink ${menu ? 'active' : 'hidden'}`}>
            <li>
                <span className="link" data-glitch="PORTFOLIO" onClick={handleSubMenu}>PORTFOLIO</span>
                <ul className={`ListaSub ${subMenu ? 'subActive' : ''}`}>
                    <li className="link" data-glitch="FOTOGRAFIAS"><span>FOTOGRAFIAS</span></li>
                    <li className="link" data-glitch="VIDEOS">VIDEOS</li>
                    <li className="link" data-glitch="PORNOGRAGIA">PORNOGRAFIA</li>
                </ul>
            </li>
            <li><span className="link" data-glitch="¿QUIENES SOMOS?">¿QUIENES SOMOS?</span></li>
            <li><span className="link" data-glitch="CONTACTO">CONTACTO</span></li>
        </ul>
    </StyledNavbar>
    )
}

export default Navbar