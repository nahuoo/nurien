import React, { useState, useEffect } from 'react'
import propTypes from 'prop-types'
import { Image,Transformation } from 'cloudinary-react'
import { Wrapper, SlideContainer, SlideImg } from '../assets/css/StyledSlide copy'

const Slides = ({images, interval, perPages}) => {
  
  const [ activeIndex, setActiveIndex ] = useState(0)
  const [ activeImages, setActiveImages ] = useState([])
  const [ activePerPage, setActivePerPage ] = useState(0)

  useEffect(() => {

    if (perPages === 'mobile'){
      setActivePerPage(1)
    }
    else if (perPages === 'tablet'){
      setActivePerPage(2)
    }
    else {
      setActivePerPage(4)
    }

    
    const tick = setInterval(() => {
      if ( ((activeIndex - 1) * activePerPage) < images.length) {
        setActiveImages([])
        setActiveIndex(activeIndex + 1)
        setActiveImages(images.slice( (activeIndex - 1)  * activePerPage, ( (activeIndex - 1)  * activePerPage) + activePerPage ))
      }
      else {
        setActiveIndex(2)
        setActiveImages([])
        setActiveImages(images.slice(0, activePerPage))
      }
      
    }, interval)

    return () => clearInterval(tick)
  }, [activeIndex, images, interval, activeImages, activePerPage, perPages])
  
  const showFullImg = (e) => {
    console.log(e.target.src)
  }

  return(
    <Wrapper>
      <SlideContainer>
        {activeImages.map((image, index) => (
          <SlideImg
            key={index}
            onClick={showFullImg}
          >
          <Image cloudName="nurienstudio" publicId={image.public_id} alt={index}>
            <Transformation height="450" crop="scale"/>
          </Image> 
          </SlideImg>
        ))}
      </SlideContainer>
    </Wrapper>
  )

}
/* 
Slides.defaultProps = {
  interval: 3000,
  images: [
    {
      src: 'https://res.cloudinary.com/nurienstudio/image/upload/c_scale,h_440/v1587937529/DSC01403_bysa3o.jpg',
    },
    {
      src: 'https://res.cloudinary.com/nurienstudio/image/upload/c_scale,h_400/v1587938008/IMG_7545_gf7oyd.jpg',
    },
    {
      src: 'https://res.cloudinary.com/nurienstudio/image/upload/c_scale,h_400/v1587937251/miniatura_b679ig.jpg',
    },
    {
      src: 'https://res.cloudinary.com/nurienstudio/image/upload/c_scale,h_400/v1587939848/cyberpounk_city_bdchsz.jpg',
    },
    {
      src: 'https://res.cloudinary.com/nurienstudio/image/upload/c_scale,h_400/v1587937385/IMG_9419_zndgj2.jpg',
    },
    {
      src: 'https://res.cloudinary.com/nurienstudio/image/upload/c_scale,h_400/v1587937484/IMG_7902_zoyzoo.jpg',
    },
    {
      src: 'https://res.cloudinary.com/nurienstudio/image/upload/v1587937251/miniatura_b679ig.jpg',
    },
    {
      src: 'https://res.cloudinary.com/nurienstudio/image/upload/v1587937838/covid_19_baja_calidad_h4zjur.jpg',
    },
  ]
  
} */

Slides.propTypes = {
  interval: propTypes.number,
  images: propTypes.arrayOf(
    propTypes.shape({
      public_id: propTypes.string.isRequired
    })
  )
}
export default Slides