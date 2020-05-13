import React from 'react'
import Styled from 'styled-components'
import { Image,Transformation } from 'cloudinary-react'

const DivNegro = Styled.div`
    position: absolute;
    top: 80vh;
    width: 100%;
    background: black;
    color:white;
    height: 15vh;

    @media (min-width: 650px) {
        
    }
    
`
const Boton = Styled.button`
    position: absolute;
    user-select:none;
    font-family: 'Caviar Dreams';
    top: 50vh;
    left: 2%;
    color:white;
    background: transparent;
    font-size: 1.5em;
    border: 3px solid #055f65;
    border-top: 8px solid #640c59;
    border-bottom: 8px solid #055f65 ;
    border-radius: 50%;
    width: 110px;
    height: 110px;
    transition: .2s linear;
    :hover{
        border: 8px solid #055f65;
        border-top: 3px solid #055f65;
        border-bottom: 8px solid #640c59;
        outline: none;
        box-shadow: none;
    }
    :active{
        border: 15px solid #640c59;
        border-top: 3px solid #640c59;
        border-bottom: 8px solid #640c59;
        outline: none;
         box-shadow: none;
    }
    @media (max-width: 650px) {
        top: 8vh;
        font-size: 1em;
        height: 90px;
    }
    
`

const Virgo = Styled.div`
    height: 80vh;
    display:flex;
    align-content: center;
    justify-content: center;
   
`

const Virgo2 = Styled.div`
    height: 100%;
    position: absolute;
    top: 25%;
    transition: 1s ease-out;
    clip-path: ${(props) => props.animation ? 'inset(0 0% 0 100% )' : 'inset(0 0% 0 0%)'};
 
    
`
const Virgo3 = Styled.div`
    height: 100%;
    position: absolute;
    top: 25%;
    align-content:center;
    transition: 1s ease-out;
    clip-path: ${(props) => props.animation ? 'inset(0 0% 0 0% )' : 'inset(0 100% 0 0%)'};
   
`

const Hola = ({selectedIndex, gallery}) => {

 const [animation,setAnimation] = React.useState('')
 const [i,setI] = React.useState(-1)
 const [j,setJ] = React.useState(0)
 const [index,setIndex] = React.useState('DSC02736_vud8gi')
 const [index2,setIndex2] = React.useState('DSC02736_vud8gi')
 const [ isFetching, setIsFetching ] = React.useState(true)
 const [ tamano, setTamano ] = React.useState('')

 React.useEffect( () => {
    
    if (gallery !== [] ){
        setIsFetching(false)
    }

    if (selectedIndex > -1) {
        /* PONE ACA COMO INYECTAS EL INDEX DE LA FOTO CLICKEADA, PORQUE NO SE QE HICISTE ABAJO
        DE J+1 GALLERY.LENGHT-2, NO ENTIENDO NADA */
    }
    },[] )

 
 const handleClick = ()  => { 
    
        setTamano(gallery.length-2)
        setAnimation(!animation) 
        setIndex(gallery[i+1].public_id)
        setIndex2(gallery[j+1].public_id)
        console.log(tamano)
        if (i < j) {
            setTimeout(() => { 
                setI(i+2)
                console.log(i)
                console.log(j)
            }, 2);}
        else { setTimeout(() => { 
            setJ(j+2)                 
          }, 2)}
          if ( i === tamano-3) { 
            setI(-1)}
          if ( j === tamano-2) {
            setJ(0)
            console.log('reinicio')
    } 
    }  

    if (window.innerWidth < 650) { 
        return(
            isFetching ? <h2>cargando...</h2> : 
            <Virgo id="carrouselfotos">
                <DivNegro />
                <Virgo2 animation={animation} >
                    <Image cloudName="nurienstudio" publicId={index} alt="FullScreen">
                        <Transformation height='450' width="300" crop="scale" />
                    </Image>
                </Virgo2>
                <Boton onClick={handleClick} >Próxima foto</Boton>
                <Virgo3 animation={animation} >
                    <Image cloudName="nurienstudio" publicId={index2} alt="FullScreen">
                        <Transformation height='450' width="300" crop="scale" />
                    </Image>
                </Virgo3>
             </Virgo>
        ) } 
    else {

    return (
        isFetching ? <h2>cargando...</h2> : 
            <Virgo id="carrouselfotos">
                <DivNegro />
                <Virgo2 animation={animation} >
                    <Image cloudName="nurienstudio" publicId={index} alt="FullScreen">
                        <Transformation height='550' crop="scale" />
                    </Image>
                </Virgo2>
                <Boton onClick={handleClick} >Próxima foto</Boton>
                <Virgo3 animation={animation} >
                    <Image cloudName="nurienstudio" publicId={index2} alt="FullScreen">
                        <Transformation height='550' crop="scale" />
                    </Image>
                </Virgo3>
             </Virgo>
    )}
}

export default Hola