import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import  { StyledNav, Line, Logo, Burger, ListUL, ListLi, MenuLinks, SubMenu, SubMenuItem } from '../assets/css/StyledNavbar'
import LogoIMG from '../assets/img/nurien_studio.png'


    


const Navbar = () => {

    const [menu, setMenu] = useState(false)
    const [subMenu, setSubMenu] = useState(false)

    const handleClick = (e) => {
        e.preventDefault()
        document.getElementById('nosotros').scrollIntoView({behavior: 'smooth' })
    }

    const handleClick2 = (e) => {
        e.preventDefault()
        document.getElementById('contacto').scrollIntoView({behavior: 'smooth' })
    }

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
    <StyledNav> 
            <Line color={'#0deefe60'} top={'20%'}/>
            <Line color={'#FC1EDF60'} top={'55%'}/>
            <Burger onClick={handleMenu}>
                <div className={menu ? 'on1' : ''}></div>
                <div className={menu ? 'on2' : ''}></div>
                <div className={menu ? 'on3' : ''}></div>
            </Burger>
            <Logo>
                <Link className="link" to="/">
                    <img src={LogoIMG} alt='Logo'/>
                </Link>
            </Logo>
            <ListUL active={menu}>
                <ListLi>
                    <MenuLinks Glitch={'PORTFOLIO'} onClick={handleSubMenu} Left={'50vw'}>PORTFOLIO</MenuLinks>
                    <SubMenu subMenu={subMenu}>
                        <SubMenuItem>
                            <MenuLinks Glitch={'FOTOGRAFIAS'}>
                                <Link className="link" to="/fotografias">
                                    FOTOGRAFIAS
                                </Link>
                            </MenuLinks>
                        </SubMenuItem>
                        <SubMenuItem><MenuLinks Glitch={'VIDEOS'}><Link className="link" to="/videos">VIDEOS</Link></MenuLinks></SubMenuItem>
                    </SubMenu>
                </ListLi>
                <ListLi subMenu={subMenu}>
                    <MenuLinks  Glitch={'¿QUIENES SOMOS?'} subMenu={subMenu} Left={'63vw'} onClick={handleClick} >
                            ¿QUIENES SOMOS?     
                    </MenuLinks>
                </ListLi>
                <ListLi subMenu={subMenu}>
                    <MenuLinks Glitch={'CONTACTO'} subMenu={subMenu} Left={'83vw'} onClick={handleClick2} >
                        CONTACTO
                    </MenuLinks>
                </ListLi>
            </ListUL>
    </StyledNav>
    )
}

export default Navbar