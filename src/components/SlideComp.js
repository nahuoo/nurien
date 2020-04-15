import React, { useState, useEffect } from 'react'
import propTypes from 'prop-types'
import { Wrapper, SlideContainer, SlideImg, SlideTitle } from '../assets/css/StyledSlide'

const Slides = ({images, interval}) => {
  
  const [ activeIndex, setActiveIndex ] = useState(0)

  useEffect(() => {
    const tick = setInterval(() => {
      if (activeIndex < images.length - 1) {
        setActiveIndex(activeIndex + 1)
      }
      else {
        setActiveIndex(0)
      }
      
    }, interval)

    return () => clearInterval(tick)
  }, [activeIndex, images.length, interval])
  

  return(
    <Wrapper>
      <SlideContainer>
        {images.map((image, index) => (
          <SlideImg
            src={image.src}
            alt={image.title}
            key={image.src}
            show={
              index === activeIndex 
              ? true
              : false
            }
          />
        ))}
        <SlideTitle>
          {images[activeIndex].title}
        </SlideTitle>
      </SlideContainer>
    </Wrapper>
  )

}

Slides.defaultProps = {
  interval: 5000,
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
    }
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