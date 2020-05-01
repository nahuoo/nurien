import React, { useEffect, useState } from 'react'
import ModalImg from './Modal-img'
import { Wrapper, ImgContainer } from '../assets/css/StyledModalImg'
import Slides from './Carrousel'
import { Burger } from '../assets/css/StyledNavbar'
import { Image,Transformation } from 'cloudinary-react'

const Portfolio = () => {

  const [ gallery, setGallery ] = useState([])
  const [ selectedPhoto, setSelectedPhoto ] = useState('')
  const [ showModal, setShowModal ] = useState(false)
  const [ landscapeImg, setLandscapeImg ] = useState(false)

  // Funcion que se ejecuta al dar click en una imagen y recibe el src de la imagen desde el hijo
  const handleModal = (src) => {
    
    handleLandscape()
    
    setSelectedPhoto(src)
    setShowModal(!showModal)

  }
// Funcion que detecta la orientacion de la pantalla para ajustar la imagen en landscape
  const handleLandscape = () => {

    if (window.innerWidth > window.innerHeight) {
      setLandscapeImg(true)
    }
    else{
      setLandscapeImg(false)
    }
  }

  useEffect( () => {
  
    fetch('https://res.cloudinary.com/nurienstudio/image/list/nurien.json')
    .then(res => res.json())
    .then(data => {
        setGallery(data.resources)
      })
    
      window.addEventListener('resize', handleLandscape)

      return () => window.removeEventListener('resize', handleLandscape)
  }, [])

  return (
    <div>
      <Slides images={gallery} interval={3000} selectedPhoto={handleModal}/>
      {/* aca iria los thumnails con las miniaturas para dar click y cambiar array supongo */}
      { showModal &&
       <ModalImg>
        <Wrapper>
          <Burger modal={showModal} onClick={handleModal}>
            <div className="on1"></div>
            <div className="on2"></div>
            <div className="on3"></div>
          </Burger>
          <ImgContainer>
            <Image cloudName="nurienstudio" publicId={selectedPhoto} alt="FullScreen">
              { landscapeImg ? <Transformation height={window.innerHeight} crop="fit" />
                             : <Transformation width={window.innerWidth} crop="fit" /> }
            </Image>
          </ImgContainer>
        </Wrapper>
      </ModalImg>  
      }
    </div>
  )
}

export default Portfolio
