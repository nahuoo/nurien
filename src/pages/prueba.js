import React from 'react'
import Styled from 'styled-components'
import { Image,Transformation } from 'cloudinary-react'


const Virgo = Styled.div`
    height: 80vh;
    button{
        position:absolute;
        top:100vh;
    }
    
   
`

const Virgo2 = Styled.div`
    position: absolute;
    top: 15%;
    left: 10%;
    transition: 1s ease-out;
    clip-path: ${(props) => props.animation ? 'inset(0 0% 0 100% )' : 'inset(0 0% 0 0%)'};
 
    
`
const Virgo3 = Styled.div`
    position: absolute;
    top: 15%;
    left: 10%;
    transition: 1s ease-out;
    clip-path: ${(props) => props.animation ? 'inset(0 0% 0 0% )' : 'inset(0 100% 0 0%)'};
   
`

const Hola = () => {

 const [animation,setAnimation] = React.useState('')
 const [i,setI] = React.useState(0)
 const [index,setIndex] = React.useState(i)
 const [index2,setIndex2] = React.useState(i)
 const [gallery,setGallery] = React.useState([])
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
     
    
        setIndex(gallery[i+2].public_id) 
        if (i === 0) { setIndex2(gallery[i+1].public_id) }
        else {
         setIndex2(gallery[i+2].public_id)}
     
     setI(i+1)
  }
  

    return(
        isFetching ? <h2>cargando...</h2> : 
            <Virgo>
                <Virgo2 animation={animation} >
                <Image cloudName="nurienstudio" publicId={index} alt="FullScreen">
                <Transformation height='550' width="1000" crop="fill" />
                </Image>
                </Virgo2>
                <button onClick={handleClick} >boton</button>
                <Virgo3 animation={animation} >
                <Image cloudName="nurienstudio" publicId={index2} alt="FullScreen">
                <Transformation height='550' width="1000" crop="fill" />
                </Image>
                </Virgo3>
             </Virgo>
    )
}

export default Hola