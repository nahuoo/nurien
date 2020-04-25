import styled, { keyframes, css } from 'styled-components'

/* /////////////////////////////////////////////// */
/*                    ANIMACION                    */
/* /////////////////////////////////////////////// */
const glitch = keyframes`
0% {
		transform: translate(0);
    opacity: 0;
	}
	20% {
		transform: translate(-5px, 5px);
    opacity: 1;       
	}
	40% {
		transform: translate(-5px, -5px);
    opacity: 1;
	}
	60% {
		transform: translate(5px, 5px);
    opacity: 1;
	}
	80% {
		transform: translate(5px, -5px);
    opacity: 1;
	}
	to {
		transform: translate(0);
    opacity: 0;
	}`
/* /////////////////////////////////////////////// */
/*                    GENERAL                      */
/* /////////////////////////////////////////////// */
export const StyledNav = styled.nav`
  position: fixed;
  width: 100vw;
  height: 9vw;
  padding: 3vw 0;
  display: flex;
  justify-content: flex-start; 
  align-items: center;
  z-index: 1;
  background: #000000B3;
  font-family: 'Lovelo Black', serif;
  font-size: 110%;
  color: white;
  top:0px;
  z-index: 100;
  @media (min-width: 650px) {
    height: 4vw;
  }
  @media (min-width: 1000px) {
    width: 100%;
    height: 0.5vw;
    position: absolute;
    top: 0;
    left: 0;
    justify-content: flex-end;
  }
  `
/* /////////////////////////////////////////////// */
/*                   BACKGROUND                    */
/* /////////////////////////////////////////////// */
export const Line = styled.div`
  position: absolute;
  height:30%;
  width: 100%;
  z-index: -1;
  background: ${(props) => props.color || 'black'};
  top: ${(props) => props.top || '0'};
`
/* /////////////////////////////////////////////// */
/*                    LOGO                         */
/* /////////////////////////////////////////////// */
export const Logo = styled.div`
  position: absolute;
  height: 120%; 
  bottom: 15%;
  left: 30%;
  & img {
    max-width: 150%;
    max-height: 150%;
  }
  @media (min-width: 650px) {
    height: 12vw; 
    left: 37%;
  }
  @media (min-width: 1000px) {
    height: 8vw;
    left: 3%;
  }
  `
/* /////////////////////////////////////////////// */
/*                    BURGER                       */
/* /////////////////////////////////////////////// */
export const Burger = styled.div`
  margin-left: 3%;
  & div{
    width:30px;
    height:5px;
    background-color: white;
    margin:5px;
    border-radius: 20%;
    transition: all 0.5s ease-in-out;
    }
  & .on1{
    transform: translateY(10px) rotate(135deg);
  }
  & .on2{
    opacity: 0;
  }
  & .on3{
    transform: translateY(-10px) rotate(-135deg);
  }
  @media (min-width: 1000px) {
    display: none;
  }`
/* /////////////////////////////////////////////// */
/*                    MENU                         */
/* /////////////////////////////////////////////// */
export const ListUL = styled.ul`
  display: flex;
  position: fixed;
  flex-direction: column;
  box-shadow: inset 14px -143px 200px -188px rgba(252,30,223,1);
  background: #000000B3;
  top: 15vw;
  padding: 5vw 3vw;
  transition: all 0.5s ease-in;
  user-select:none;
  opacity: ${(props) => props.active ? '100%' : '0%' };
  transform: ${(props) => props.active ? 'translateY(0%) translateX(0%) scale(1)' : 'translateY(-56%) translateX(-45%) scale(0)'};

  @media (min-width: 650px) {
    top: 10vw;
    padding: 0vw 3vw;
  }
  @media (min-width: 1024px) {
    width: 50vw;
    opacity: 100%;
    transform: none;
    box-shadow: none;
    padding: 0;
    position: initial;
    flex-direction: row;
    justify-content: space-evenly;
    background: none;
    margin-right: 3vw;
  }
  `

export const ListLi = styled.li`
  width: 94vw;
  text-align: center;
  padding-bottom: 2vw;
  padding-top: 0;
  margin-top: 0;
  &:last-child{
    margin-bottom: 0;
    padding-bottom: 0;
    
  }
  @media (min-width: 650px) {
    display: ${props => props.subMenu ? 'none' : 'initial'};
  }
  @media (min-width: 1024px) {
    padding: 0;
    width: initial; 
    display: inline;
  }
  `
 export const MenuLinks = styled.p`
  padding-top: 0;
  margin-top: 0;
  text-decoration: none;
  font-size: 1.2rem;
  color: white;
  letter-spacing: 1pt;
  transition: all 0.2s ease 0s;
  cursor: pointer;
 

    &:before, &:after {
	    display: block;
	    content: '${(props) => props.Glitch}';
	    text-transform: uppercase;
	    position: relative;
	    height: 100%;
	    width: 100%;
	    opacity: .9;
      transition: all .9s cubic-bezier(.25, .46, .45, .94);
      font-family: 'Road Rage';
      opacity: 0;
      letter-spacing: 2pt;
	    }
    &:after {
	    color: #FC1EDF;
	    z-index: -1;
      top: -1.3rem;
	  }   
    &:before {
      top: 1.3rem;
	    color: #0deefe;
	    z-index: -2;
	  }
	  &:hover {
      opacity: 1;
      font-family: 'Road Rage';
      letter-spacing: 3pt;
	    &:before {
		    animation: ${glitch} .4s cubic-bezier(.25, .46, .45, .94) both 1;    
	    }
	    &:after {
		    animation: ${glitch} .4s cubic-bezier(.25, .46, .45, .94) reverse both 1;
	    }
    }
  @media (min-width: 650px) {
    display: ${props => props.subMenu ? 'none' : 'initial'};
  }
  @media (min-width: 1000px) {
    position: absolute;
    top: 1.3vw;
    left: ${props => props.Left || '' };
    display: initial;
  }
  `
/* /////////////////////////////////////////////// */
/*                    SUBMENU                      */
/* /////////////////////////////////////////////// */
export const SubMenuItem = styled.li`
  text-align: center;
  padding-bottom: 1vw;
  font-size: 0.8rem;
  user-select:none;
  `
export const SubMenu = styled.ul`
  display: ${(props) => props.subMenu ? 'flex' : 'none'};
  flex-direction: column;
  position: relative;
  left: 0;
  top: 0;
  transition: all 0.1s ease-in;
  & > ${SubMenuItem} > ${MenuLinks}::before{
    animation: ${props => props.subMenu ? css`${glitch} .4s cubic-bezier(.25, .46, .45, .94) both 1` : ''};
  }
  & > ${SubMenuItem} > ${MenuLinks}::after{
    animation: ${props => props.subMenu ? css`${glitch} .4s cubic-bezier(.25, .46, .45, .94) reverse both 1` : ''};
  }
  @media (min-width: 650px) {
    padding-bottom: 0;
  }
  @media (min-width: 1000px) {
    width: 210px;
    top: 75%;
    left: -56%;
    box-shadow: inset 14px -143px 100px -188px rgba(252,30,223,1);
    background: #000000B3;
    transition: all 0.5s ease-in;
    & > ${SubMenuItem} > ${MenuLinks}{
      position: initial;
      font-size: 0.9rem;
    }
    & > ${SubMenuItem} > ${MenuLinks}::after{
      z-index:initial;
    }
    & > ${SubMenuItem} > ${MenuLinks}::before{
      z-index:initial;
    }
  }
  `

