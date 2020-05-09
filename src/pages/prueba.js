import React from 'react'
import Styled from 'styled-components'
import { Image,Transformation } from 'cloudinary-react'


const Virgo = Styled.div`
    height: 80vh;
    clip-path: inset(0 90% 0 0%);
    transition: 2s ease;
    :hover{
        clip-path: inset(0 0% 0 0%);
    }
`
const Hola = () => {
    return(
        <Virgo>
             <Image cloudName="nurienstudio" publicId='vete' alt="FullScreen">
              <Transformation height='100px'  />
             </Image>
        </Virgo>
    )
}

export default Hola