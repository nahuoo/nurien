import styled from 'styled-components'

const StyledNav = styled.nav`
/* /////////////////////////////////////////////// */
/*                    GENERAL                      */
/* /////////////////////////////////////////////// */
  position: fixed;
  width: 97vw;
  height: 9vw;
  padding: 3vw 0;
  display: flex;
  justify-content: flex-start; 
  align-items: center;
  z-index: 1;
  background: #000;
  font-family: 'Lovelo Black', serif;
  font-size: 110%;
  color: white;
  border-bottom: 0.1px solid white;

.linea-azul{
    position: absolute;
    background: #0deefe73;
    height:30%;
    width: 100%;
    top: 20%;
    z-index: -1;
}
.linea-morada{
    position: absolute;
    background: #FC1EDF73;
    height:30%;
    width: 100%;
    top: 55%;
    z-index: -1;
}

/* /////////////////////////////////////////////// */
/*                    LOGO                         */
/* /////////////////////////////////////////////// */
.logo{
    position: absolute;
    height: 100%; 
    bottom: 15%;
    left: 30%;
  }
  .logo img {
    max-width: 150%;
    max-height: 150%;
  }
  .title{
    position: relative;
    cursor: default;
    padding-top: 3px;
    font-style: italic;
    font-weight: bold;
    font-size:1rem;
    bottom: 4.1vw;
    left: 2vw;
    letter-spacing: 0.5pt;
  }
  /* Animaciones del navbar */
  @keyframes fadeIn {
    0% {
      opacity:0;
    }
    100% {
      opacity:1;
    }
  }
  .Animation{
    animation: fadeIn ease 6s;
  }
/* /////////////////////////////////////////////// */
/*                    BURGUER                      */
/* /////////////////////////////////////////////// */
  .burger {
    margin-left: 3%;
  }
  .burger div{
   width:30px;
   height:5px;
   background-color: white;
   margin:5px;
   border-radius: 20%;
   transition: all 0.5s ease-in-out;
  }
  .on1{
    transform: translateY(10px) rotate(135deg);
  }
  .on2{
    opacity: 0;
  }
  .on3{
    transform: translateY(-10px) rotate(-135deg);
  }
/* /////////////////////////////////////////////// */
/*                    MENU                         */
/* /////////////////////////////////////////////// */
  .ListaLink{
    display: flex;
    position: fixed;
    flex-direction: column;
    /* background: rgba(05, 05, 05,0.6); */
    background: black;
    top: 15vw;
    padding: 5vw 3vw;
    transition: all 0.5s ease-in;
  }
  .ListaLink > li{
    width: 92vw;
    text-align: left;
    padding-bottom: 4vw;
    margin-bottom: 4vw; 
    padding-top: 0;
    margin-top: 0;
  }
  .link{
    padding-top: 0;
    margin-top: 0;
    text-decoration: none;
    font-size: 1em;
    /* font-weight: bold; */
    color: white;
    letter-spacing: 1pt;
    transition: all 0.2s ease 0s;
    &:before, &:after {
		display: block;
		content: attr(data-glitch);
		text-transform: uppercase;
		position: relative;
		height: 100%;
		width: 100%;
		opacity: .9;
        transition: all .9s cubic-bezier(.25, .46, .45, .94);
        font-family: 'Road Rage';
        opacity: 0;
        letter-spacing: 2pt;
	} &:after {
		color: #FC1EDF;
		z-index: -1;
        top: -1.3rem;
	} &:before {
        top: 1.3rem;
		color: #0deefe;
		z-index: -2;
	}
	&:hover {
		&:before {
			animation: glitch .4s cubic-bezier(.25, .46, .45, .94) both 1;    
		}
		&:after {
			animation: glitch .4s cubic-bezier(.25, .46, .45, .94) reverse both 1;
		}
	}
  }

  .icono {
    margin: 0 5vw;
    display: inline;
  }
  /* Animaciones del menu */
  .active{
    transform: translateY(0%) translateX(0%) scale(1);
    opacity: 100%;
  }
  .hidden{
    transform: translateY(-56%) translateX(-45%) scale(0);
    opacity: 0%;
  }
  .link:hover{
      opacity: 1;
      font-family: 'Road Rage';
      letter-spacing: 3pt;
  }

/* /////////////////////////////////////////////// */
/*                    SUBMENU                      */
/* /////////////////////////////////////////////// */
  .ListaSub{
    display: flex;
    flex-direction: column;
    position: absolute;
    left: 60%;
    top: 5%;
    padding: 5vw 3vw;
    transition: all 0.1s ease-in;
    opacity: 0;
  }
  .ListaSub > li {
    text-align: left;
    padding-bottom: 4vw;
    margin-bottom: 4vw;
    font-size: 0.8em;   
  }
  .subActive {
      opacity: 1;
      & > .link:before {
        animation: glitch .4s cubic-bezier(.25, .46, .45, .94) both 1;
      } 
      & > .link:after {
        animation: glitch .4s cubic-bezier(.25, .46, .45, .94) reverse both 1;
      } 
  }
/* /////////////////////////////////////////////// */
/*              ANIMACION GLITCH                   */
/* /////////////////////////////////////////////// */
  @keyframes glitch {
	0% {
		transform: translate(0);
        opacity: 0;
	}
	20% {
		transform: translate(-10px, 10px);
        opacity: 1;       
	}
	40% {
		transform: translate(-10px, -10px);
        opacity: 1;
	}
	60% {
		transform: translate(10px, 10px);
        opacity: 1;
	}
	80% {
		transform: translate(10px, -10px);
        opacity: 1;
	}
	to {
		transform: translate(0);
        opacity: 0;
	}
}

/* /////////////////////////////////////////////// */
/*                    Tablet                       */
/* /////////////////////////////////////////////// */
@media (min-width: 650px) {
  width: 100vw;
  height: 2.5vw;

  .logo{
    height: 5vw; 
  }
  .title{
    bottom: 2.5vw;
  }

  .ListaLink{
    top: 8.5vw;
    padding: 2.5vw 5vw;
    height: 100vh;
  }
  .ListaLink li{
    width: 40vw;
    padding-bottom: 2vw;
    margin-bottom: 2vw; 
  }
}
/* /////////////////////////////////////////////// */
/*                    Desktop                      */
/* /////////////////////////////////////////////// */
@media (min-width: 1000px) {
  height: 3vw;
  padding: 0.3vw;
  padding-bottom: 0.7vw;
/* LOGO */
  .logo{
    height: 2.4vw;
    top: 0;
  }
  .title{
    bottom: 1.3vw;
    font-size:1.5rem;
    left: 1vw;
    color: rgba(199, 0, 5, 0.8);
  }
  .burger{
    display:none;
  }
  /* MENU */
  .hidden{
    transform: none;
    opacity: 100%;
  }
  .ListaLink{
    display: initial;
    height: initial;
    position: relative;
    flex-direction: row;
    background: none;
    top: 10%;
    padding: 0;
    transition: all 0.5s ease-in;
    margin-right: 3%;
    
  }
  .ListaLink li{
    width: initial;
    text-align: center;
    border-bottom: none;
    padding-bottom: 0;
    margin-bottom: 0; 
    padding-top: 0;
    margin-top: 0;
    display: inline-block;
    padding: 0px 3px;
  }
  .link{
    margin-top: 0;
    text-decoration: none;
    font-size: 100%;
    font-weight: initial;
    color: white;
    letter-spacing: 1pt;
    transition: all 0.2s ease 0s;
    border-radius: 5px;
    padding: 10px 14px 9px;
  }
  .icono {
    margin: 0 1vw;
    display: inline;
    padding: 17px 10px 7px;
  }
  /* .link:hover{
    background-color: rgba(199, 0, 5, 0.8);
    color: #fff;   
  } */
  .navActive{
    color: rgba(199, 0, 5, 0.8);
  }
}
`  
export default StyledNav

// const StyledNavbar = styled.div`
//     position: absolute;
//     display: flex;
//     flex-direction: column;
//     margin:0;
//     padding:0;
//     height: 15%;
//     width:100%;
//     align-items: center;
//     background: transparent;
//     z-index: 2;
//     color: #fff;
//     font-family: 'Caviar Dreams', sans-serif;
//     font-size: 30px;

//    
    
//     .nav-links{
//         display: flex;
//         justify-content: flex-end; 
//         flex-direction: row;
//         flex-wrap: nowrap;
//         align-items: center;
//         position: fixed;
//         width: 100vw;
//         height: 50px;
//         padding: 4px;
//     }
//     .nav-links li{
//     display: inline-block;
//     padding: 0px 3px;
//     }
// `   

// export default StyledNavbar