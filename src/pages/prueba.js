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
    top:0;
    transition: 1.5s ease-in;
    clip-path: ${(props) => props.animation ? 'inset(0 0% 0 100% )' : 'inset(0 0% 0 0%)'} ;
   
 
    
`
const Virgo3 = Styled.div`
    position: absolute;
    top:0;
    transition: 1.5s ease-in;
    clip-path: ${(props) => props.animation ? 'inset(0 0% 0 0% )' : 'inset(0 100% 0 0%)'};
   
`

const Hola = () => {

 const [animation,setAnimation] = React.useState('')
 const [index,setIndex] = React.useState('vete')
 const handleClick = ()  => { 
     setAnimation(!animation) 
     if (index === 'vete') {
        setTimeout(() => {
            setIndex('DSC01009_hqhb3l') 
          }, 2000); 
    }}
  

    return(
        <Virgo>
            <Virgo2 animation={animation} >
             <Image cloudName="nurienstudio" publicId={index} alt="FullScreen">
              <Transformation height='550' width="1000" crop="fill" />
              </Image>
            </Virgo2>
             <button onClick={handleClick} >boton</button>
             <Virgo3 animation={animation} >
             <Image cloudName="nurienstudio" publicId='IMG_7658_rpivqb' alt="FullScreen">
              <Transformation height='550' width="1000" crop="fill" />
              </Image>
            </Virgo3>
        </Virgo>
    )
}

export default Hola