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
    top: 50vh;
    left: 2%;
    color: #640c59;
    background: transparent;
    font-size: 2.5em;
    border: 2px solid white;
    border-top: 4px solid white;
    border-bottom: 4px solid white ;
    border-radius: 50%;
    width: 70px;
    height: 70px;
    transition: .2s linear;
    :hover{
        border: 4px solid #055f65;
        text-align: right;
        border-top: 3px solid #055f65;
        border-right: 8px solid #640c59;
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

const WrapperCarrousel = Styled.div`
    height: 80vh;
    width: 95vw;
    display:flex;
    align-content: center;
    justify-content: center;
   
`

const Card1 = Styled.div`
    height: 100%;
    position: absolute;
    top: 25%;
    transition: 1s ease-out;
    clip-path: ${(props) => props.animation ? 'inset(0 0% 0 100% )' : 'inset(0 0% 0 0%)'};
 
    
`
const Card2 = Styled.div`
    height: 100%;
    position: absolute;
    top: 25%;
    align-content:center;
    transition: 1s ease-out;
    clip-path: ${(props) => props.animation ? 'inset(0 0% 0 0% )' : 'inset(0 100% 0 0%)'};
   
`

const CarrouselFotos = ({selectedIndex, gallery, height}) => {

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
        /* animacion al cambiar el selectedIndex */
        setTamano(Number(gallery.length)-2)
        setI(Number(selectedIndex)-1)
        setJ(Number(selectedIndex))
        setIndex(gallery[Number(selectedIndex)].public_id)
        setIndex2(gallery[Number(selectedIndex)].public_id)
        setAnimation(false) 
    }
    },[selectedIndex] )

 
 const handleClick = ()  => { 
        setTamano(Number(gallery.length)-2)
        setAnimation(!animation) 
        setIndex(gallery[i+1].public_id)
        setIndex2(gallery[j+1].public_id)
        if (i < j) { setI(i+2) }
        else { 
            setJ(j+2)              
            if ( i === tamano-3) { 
                setI(-1)
                setJ(0)
                }
            if ( j === tamano-2) {
                setJ(0)
                setI(-1)
                console.log('reinicio')
    } }
    }  

    return (
        isFetching ? <h2>cargando...</h2> : 
            <WrapperCarrousel id='carrousel'>
                <DivNegro />
                <Card1 animation={animation} >
                    <Image cloudName="nurienstudio" publicId={index} alt="FullScreen">
                        <Transformation gravity='auto' height={height+250} width={height+200} crop='fill' />
                    </Image>
                </Card1>
                <Boton onClick={handleClick} ><i class="fa fa-arrow-right"></i></Boton>
                <Card2 animation={animation} >
                    <Image cloudName="nurienstudio" publicId={index2} alt="FullScreen">
                        <Transformation gravity='auto' height={height+250} width={height+200} crop='fill' />
                    </Image>
                </Card2>
             </WrapperCarrousel>
    )}


export default CarrouselFotos