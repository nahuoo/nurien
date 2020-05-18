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
    top: 70vh;
    left: ${(props) => props.left};
    color: #FC1EDF;
    background: transparent;
    font-size: 1.5em;
    border: 1px solid #FC1EDF;
    border-top: 2px solid #FC1EDF;
    border-bottom: 2px solid #FC1EDF;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    transition: .2s linear;
    :hover{
        border: 4px solid #055f65;
        border-top: 3px solid #055f65;
        outline: none;
        box-shadow: none;
    }
    :active{
        border-right: 8px solid #640c59;
        border: 15px solid #640c59;
        border-top: 3px solid #640c59;
        text-align: right;
        border-bottom: 8px solid #640c59;
        outline: none;
         box-shadow: none;
    }
    @media (max-width: 650px) {
        top: 65vh;
        font-size: 1em;
        height: 40px;
    }

    @media (min-width: 1400px) {
        top: 70%;
        font-size: 2em;
        height: 40px;
        width: 60px;
        height: 60px;
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
    height: 85%;
    position: absolute;
    top: 25%;
    transition: 1s ease-out;
    clip-path: ${(props) => props.animation ? 'inset(0 0% 0 100% )' : 'inset(0 0% 0 0%)'};
 
    
`
const Card2 = Styled.div`
    height: 85%;
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
 const [index,setIndex] = React.useState('IMG_2591_uqcwvn')
 const [index2,setIndex2] = React.useState('IMG_2591_uqcwvn')
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
        if (i < j) {
             setI(i+2)
             if ( i >= Number(tamano)-2) { 
                setI(-1)
                setJ(0)
                }
            if ( j >= Number(tamano)-1) {
                setJ(0)
                setI(-1)
            }}
        else { 
            setJ(j+2)              
            if ( i >= Number(tamano)-2) { 
                setI(-1)
                setJ(0)
                }
            if ( j >= Number(tamano)-1) {
                setJ(0)
                setI(-1)
    } }
    }  

    const handleClickReversa = ()  => { 
        setAnimation(!animation) 
        setIndex(gallery[i-1].public_id)
        setIndex2(gallery[j-1].public_id)
        if  (i <= 1 || j <= 1) {
            setI(Number(tamano))
            setJ(Number(tamano))
        }
        if (i > j) { 
            setI(i-2)
            if ( i <= 2 ) { 
                setI(Number(tamano))
                setJ(Number(tamano))
                }
            if ( j <= 2 ) {
                setJ(Number(tamano))
                setI(Number(tamano))

                }
            }
        else { 
            setJ(j-2)              
            if ( i <= 2 ) { 
                setI(Number(tamano))
                setJ(Number(tamano))
                }
            if ( j <= 2 ) {
                setJ(Number(tamano))
                setI(Number(tamano))

    } }
    }  

    return (
        isFetching ? <h2>cargando...</h2> : 
            <WrapperCarrousel id='carrousel'>
                <DivNegro />
                <Card1 animation={animation} >
                    <Image cloudName="nurienstudio" publicId={index} alt="FullScreen">
                        <Transformation height={height+(window.innerWidth/100*20)} width={window.innerWidth/2} crop='fill' />
                    </Image>
                </Card1>
                <Boton onClick={handleClick} left='85%' ><i class="fa fa-arrow-right"></i></Boton>
                <Boton onClick={handleClickReversa} left='10%' ><i class="fa fa-arrow-left"></i></Boton>
                <Card2 animation={animation} >
                    <Image cloudName="nurienstudio" publicId={index2} alt="FullScreen">
                        <Transformation height={height+(window.innerWidth/100*20)} width={window.innerWidth/2} crop='fit' />
                    </Image>
                </Card2>
             </WrapperCarrousel>
    )}


export default CarrouselFotos