import React, { useEffect, useState } from 'react'
import ModalImg from './Modal-img'
import { Wrapper } from '../assets/css/StyledModalImg'
import Slides from './Carrousel'


const Portfolio = () => {

  const [ gallery, setGallery ] = useState([])

  useEffect( () => {
  
    fetch('https://res.cloudinary.com/nurienstudio/image/list/nurien.json')
    .then(res => res.json())
    .then(data => {
        setGallery(data.resources)
      })

  }, [])

  return (
    <div>
{/*       <ModalImg>
        <Wrapper >
        </Wrapper>
      </ModalImg> */}
      {<Slides images={gallery} interval={3000}/>}
      {/* aca iria los thumnails con las miniaturas para dar click y cambiar array supongo */}
    </div>
  )
}

export default Portfolio
