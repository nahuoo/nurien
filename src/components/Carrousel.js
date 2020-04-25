import React, { useState, useEffect } from 'react'
import propTypes from 'prop-types'
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
  

  return(
    <Wrapper>
      <SlideContainer>
        {activeImages.map((image, index) => (
          <SlideImg
            key={index}
          >
          <img src={image.src} alt={index} /> 
          </SlideImg>
        ))}
      </SlideContainer>
    </Wrapper>
  )

}

Slides.defaultProps = {
  interval: 3000,
  images: [
    {
      src: 'https://images.pexels.com/photos/3993212/pexels-photo-3993212.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      title: 'White Red and Blue Flower Petals'
    },
    {
      src: 'https://images.pexels.com/photos/2886284/pexels-photo-2886284.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      title: 'White and Brown House'
    },
    {
      src: 'https://images.pexels.com/photos/3617460/pexels-photo-3617460.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      title: 'Cars on Road Between High Rise Buildings'
    },
    {
      src: 'https://images.pexels.com/photos/3583568/pexels-photo-3583568.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      title: 'Aerial Photography of High-rise Buildings at Night'
    },
    {
      src: 'https://images.pexels.com/photos/3583568/pexels-photo-3583568.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      title: 'Aerial Photography of High-rise Buildings at Night'
    },
    {
      src: 'https://images.pexels.com/photos/3583568/pexels-photo-3583568.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      title: 'Aerial Photography of High-rise Buildings at Night'
    },
    {
      src: 'https://images.pexels.com/photos/3583568/pexels-photo-3583568.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      title: 'Aerial Photography of High-rise Buildings at Night'
    },
    {
      src: 'https://images.pexels.com/photos/3583568/pexels-photo-3583568.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      title: 'Aerial Photography of High-rise Buildings at Night'
    },
    {
      src: 'https://images.pexels.com/photos/3583568/pexels-photo-3583568.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      title: 'Aerial Photography of High-rise Buildings at Night'
    },
    {
      src: 'https://images.pexels.com/photos/3617460/pexels-photo-3617460.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      title: 'Cars on Road Between High Rise Buildings'
    },
  ]
  
}

Slides.propTypes = {
  interval: propTypes.number,
  images: propTypes.arrayOf(
    propTypes.shape({
      src: propTypes.string.isRequired,
      title: propTypes.string.isRequired
    })
  )
}
export default Slides