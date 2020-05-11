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
    }
    :active{
        border: 15px solid #640c59;
        border-top: 3px solid #640c59;
        border-bottom: 8px solid #640c59;
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
    position:absolute;
    top: 25%;
    transition: 1s ease-out;
    clip-path: ${(props) => props.animation ? 'inset(0 0% 0 100% )' : 'inset(0 0% 0 0%)'};
 
    
`
const Virgo3 = Styled.div`
    position: absolute;
    top: 25%;
    align-content:center;
    transition: 1s ease-out;
    clip-path: ${(props) => props.animation ? 'inset(0 0% 0 0% )' : 'inset(0 100% 0 0%)'};
   
`

const Hola = () => {

 const [animation,setAnimation] = React.useState('')
 const [gallery,setGallery] = React.useState([])
 const [i,setI] = React.useState(-1)
 const [j,setJ] = React.useState(0)
 const [index,setIndex] = React.useState('DSC02736_vud8gi')
 const [index2,setIndex2] = React.useState('DSC02736_vud8gi')
 const [ isFetching, setIsFetching ] = React.useState(true)

 React.useEffect( () => {
  
    fetch('https://res.cloudinary.com/nurienstudio/image/list/nurien.json')
    .then(res => res.json())
    .then(data => {
        setGallery(data.resources)
        setIsFetching(false)
    })  
    
    }, [] )

 const handleClick = ()  => { 
    
       
        setAnimation(!animation) 
        setIndex(gallery[i+2].public_id)
        setIndex2(gallery[j+2].public_id)
        if (i < j) {
            setTimeout(() => { 
                setI(i+2)
                
            }, 1000);}
        else { setTimeout(() => { 
            setJ(j+2)
            if ( i+2 === 25) { 
                setI(0)
                setJ(1)}                  
          }, 1000)}
        
    }  

    if (window.innerWidth < 650) { 
        return(
            isFetching ? <h2>cargando...</h2> : 
            <Virgo>
                <DivNegro />
                <Virgo2 animation={animation} >
                <Image cloudName="nurienstudio" publicId={index} alt="FullScreen">
                <Transformation height='450' width="300" crop="fill" />
                </Image>
                </Virgo2>
                <Boton onClick={handleClick} >Próxima foto</Boton>
                <Virgo3 animation={animation} >
                <Image cloudName="nurienstudio" publicId={index2} alt="FullScreen">
                <Transformation height='450' width="300" crop="fill" />
                </Image>
                </Virgo3>
             </Virgo>
        ) } 
    else {

    return (
        isFetching ? <h2>cargando...</h2> : 
            <Virgo>
                <DivNegro />
                <Virgo2 animation={animation} >
                <Image cloudName="nurienstudio" publicId={index} alt="FullScreen">
                <Transformation height='550' width="1000" crop="fit" />
                </Image>
                </Virgo2>
                <Boton onClick={handleClick} >Próxima foto</Boton>
                <Virgo3 animation={animation} >
                <Image cloudName="nurienstudio" publicId={index2} alt="FullScreen">
                <Transformation height='550' width="1000" crop="fit" />
                </Image>
                </Virgo3>
             </Virgo>
    )}
}

export default Hola