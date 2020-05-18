import React, { useEffect, useState } from 'react'
import ModalImg from './Modal-img'
import Slides from './Carrousel'


const Portfolio = () => {

  const [ gallery, setGallery ] = useState([])
  const [ selectedPhoto, setSelectedPhoto ] = useState('')
  const [ showModal, setShowModal ] = useState(false)

  // Funcion que se ejecuta al dar click en una imagen y recibe el src de la imagen desde el hijo
  const handleModal = (src) => {
    
    setSelectedPhoto(src)
    setShowModal(!showModal)

  }

  useEffect( () => {
  
    fetch('https://res.cloudinary.com/nurienstudio/image/list/INICIO.json')
    .then(res => res.json())
    .then(data => {
        setGallery(data.resources)
      })
    
  }, [])

  return (
    <div>
      <Slides images={gallery} interval={3000} selectedPhoto={handleModal}/>
      { showModal &&
       <ModalImg modalToggle={handleModal} selectedPhoto={selectedPhoto}/>
      }
    </div>
  )
}

export default Portfolio
