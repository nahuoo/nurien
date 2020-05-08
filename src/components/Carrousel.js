import React, { useState, useEffect } from 'react'
import { Image,Transformation } from 'cloudinary-react'
import { Wrapper, SlideContainer, SlideImg } from '../assets/css/StyledSlide'
import Loader from '../assets/css/loader'

const Slides = ({images, interval, selectedPhoto}) => {
  
  const [ activeIndex, setActiveIndex ] = useState(0)
  const [ activeImages, setActiveImages ] = useState([])
  const [ activePerPage, setActivePerPage ] = useState(0)
  const [ size, setSize ] = useState(window.innerWidth)
  const [ imgSize, setImageSize ] = useState(0)
  const [ isFetching, setIsFetching ] = useState(true)

  // Funcion que detecta los cambios a la ventana para ajustar
  const handleSize = () => {
    setSize(window.innerWidth)
  }
  // Onlick de la imagen que extrae el public_id y manda la data al padre
  const showFullImg = (e) => {
    selectedPhoto(e.target.src.slice(66), size)
  }

const handleFetch = () => {
  setIsFetching(false)
}

  useEffect(() => {

    window.addEventListener('resize', handleSize)

    //Switch para ajustar la resolucion de la imagen para el responsive
    switch (true){
      case (size < 630):
        setActivePerPage(1)
        setImageSize(500)
      break
      case (size < 1000) :
        setActivePerPage(3)
        setImageSize(300)
      break
      default:
        setActivePerPage(4)
        setImageSize(450)
      break
    }

    // Carrousel automatico
    const tick = setInterval(() => {
      if ( ((activeIndex - 1) * activePerPage) < images.length) {
        setActiveIndex(activeIndex + 1)
        setActiveImages([])
        setActiveImages(images.slice( (activeIndex - 1)  * activePerPage, ( (activeIndex - 1)  * activePerPage) + activePerPage ))
      }
      else {
        setActiveIndex(2)
        setActiveImages([])
        setActiveImages(images.slice(0, activePerPage))
      }
      
    }, interval)

    

    return () => {
      clearInterval(tick)
      window.removeEventListener('resize', handleSize)
    }
  }, [interval, size, activeIndex, activePerPage, images] )
  


  return(
    <Wrapper>
      <SlideContainer>
        {isFetching && <Loader />}
        {activeImages.map((image, index) => {
          if (isFetching){
          handleFetch()
          }
          /* setIsFetching(false)  */
        
          return(
          <SlideImg
            key={index}
            onClick={showFullImg}
          >
          <Image cloudName="nurienstudio" publicId={image.public_id} alt={index}>
            <Transformation height={imgSize} crop="scale"/>
          </Image> 
          </SlideImg>
        )})}
      </SlideContainer>
    </Wrapper>
  )

}

export default Slides