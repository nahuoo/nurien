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
    clip-path: inset(0 90% 0 0%);
    transition: 2s ease-in;
    clip-path: ${(props) => props.animation ? 'inset(0 0% 0 100% )' : 'inset(0 0% 0 0%)'} ;
    z-index: ${(props) => props.index ? -1 : -0};
    
`
const Virgo3 = Styled.div`
    position: absolute;
    top:0;
    transition: 2s ease-in;
    clip-path: ${(props) => props.animation ? 'inset(0 0% 0 0% )' : 'inset(0 100% 0 0%)'};

    
`
const Hola = () => {

 const [animation,setAnimation] = React.useState('')
 const [index,setIndex] = React.useState('')

 const handleClick = ()  => { 
     setAnimation(!animation) 
     setIndex(!index)
  }

    return(
        <Virgo>
            <Virgo2 animation={animation} index={index}  >
             <Image cloudName="nurienstudio" publicId='vete' alt="FullScreen">
              <Transformation height='100px'  />
              </Image>
            </Virgo2>
             <button onClick={handleClick} >boton</button>
             <Virgo3 animation={animation} index={index} >
             <Image cloudName="nurienstudio" publicId='IMG_7658_rpivqb' alt="FullScreen">
              <Transformation height='550' width="1000" crop="fill" />
              </Image>
            </Virgo3>
        </Virgo>
    )
}

export default Hola