import React, {useState} from 'react'
import  { StyledNav, Line, Logo, Burger, ListUL, ListLi, MenuLinks, SubMenu, SubMenuItem } from '../assets/css/StyledNavbar'
import LogoIMG from '../assets/img/nurien_studio.png'
import {Link} from 'react-router-dom'
import ScrollIntoView from 'react-scroll-into-view'

const LinkStyle = {
textDecoration: 'none' 
}

const Navbar = (props) => {

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

    const handleBothMenus = () => {
        handleMenu()
        handleSubMenu()
    }

    const handleAcordeon = () => {
        props.acordeon()
    }


    return (
    <StyledNav> 
        <Line color={'#0deefe60'} top={'20%'}/>
        <Line color={'#FC1EDF60'} top={'50%'}/>
        <Burger onClick={handleMenu}>
            <div className={menu ? 'on1' : ''}></div>
            <div className={menu ? 'on2' : ''}></div>
            <div className={menu ? 'on3' : ''}></div>
        </Burger>
        <Link to="/">
        <Logo>
            <img src={LogoIMG} alt='Logo'/>
        </Logo>
        </Link>
        <ListUL active={menu}>
            <ListLi>
                <SubMenu subMenu={subMenu}>
                    <SubMenuItem onClick={handleBothMenus}><Link to="/fotos" style={LinkStyle}><MenuLinks Glitch={'FOTOGRAFIAS'}>FOTOGRAFIAS</MenuLinks></Link></SubMenuItem>
                    <SubMenuItem onClick={handleBothMenus}><Link to="/videos" style={LinkStyle}><MenuLinks Glitch={'VIDEOS'}>VIDEOS</MenuLinks></Link></SubMenuItem>
                </SubMenu>
                <div><MenuLinks Glitch={'PORTFOLIO'} onClick={handleSubMenu}>PORTFOLIO</MenuLinks></div>
            </ListLi>
            <ListLi subMenu={subMenu}><ScrollIntoView selector="#nosotros" onClick={handleAcordeon}><MenuLinks Glitch={'¿QUIENES SOMOS?'} subMenu={subMenu} onClick={handleMenu}>¿QUIENES SOMOS?</MenuLinks></ScrollIntoView></ListLi>
            <ListLi subMenu={subMenu}><ScrollIntoView selector="#contacto"><MenuLinks Glitch={'CONTACTO'} subMenu={subMenu} onClick={handleMenu}>CONTACTO</MenuLinks></ScrollIntoView></ListLi>
        </ListUL>
    </StyledNav>
    )
}

export default Navbar