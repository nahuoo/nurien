import React, {useState} from 'react'
import  { StyledNav, Line, Logo, Burger, ListUL, ListLi, MenuLinks, SubMenu, SubMenuItem } from '../assets/css/StyledNavbar'
import LogoIMG from '../assets/img/nurien_studio.png'

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
    <StyledNav> 
        <Line color={'#0deefe60'} top={'20%'}/>
        <Line color={'#FC1EDF60'} top={'55%'}/>
        <Burger onClick={handleMenu}>
            <div className={menu ? 'on1' : ''}></div>
            <div className={menu ? 'on2' : ''}></div>
            <div className={menu ? 'on3' : ''}></div>
        </Burger>
        <Logo>
            <img src={LogoIMG} alt='Logo'/>
        </Logo>
        <ListUL active={menu}>
            <ListLi>
                <MenuLinks Glitch={'PORTFOLIO'} onClick={handleSubMenu} Left={'50vw'}>PORTFOLIO</MenuLinks>
                <SubMenu subMenu={subMenu}>
                    <SubMenuItem><MenuLinks Glitch={'FOTOGRAFIAS'}>FOTOGRAFIAS</MenuLinks></SubMenuItem>
                    <SubMenuItem><MenuLinks Glitch={'VIDEOS'}>VIDEOS</MenuLinks></SubMenuItem>
                    <SubMenuItem><MenuLinks Glitch={'FOTOMONTAJE'}>FOTOMONTAJE</MenuLinks></SubMenuItem>
                </SubMenu>
            </ListLi>
            <ListLi subMenu={subMenu}><MenuLinks  Glitch={'¿QUIENES SOMOS?'} subMenu={subMenu} Left={'63vw'}>¿QUIENES SOMOS?</MenuLinks></ListLi>
            <ListLi subMenu={subMenu}><MenuLinks Glitch={'CONTACTO'} subMenu={subMenu} Left={'83vw'}>CONTACTO</MenuLinks></ListLi>
        </ListUL>
    </StyledNav>
    )
}

export default Navbar