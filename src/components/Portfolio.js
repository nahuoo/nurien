import React, { useEffect, useState } from 'react'

import Slides from './Carrousel'


const Portfolio = () => {

  const [ width, setWidth ] = useState('')
  const [ size, setSize ] = useState(window.innerWidth)
  const [ gallery, setGallery ] = useState([])

  const handleSize = () => {
    setSize(window.innerWidth)
  }
  
  useEffect(() => {
    switch (true){
      case (size < 650):
        setWidth('mobile')
      break
      case (size < 1000) :
        setWidth('tablet')
      break
      default:
        setWidth('desktop')
      break
    }
    window.addEventListener('resize', handleSize)

    fetch('https://res.cloudinary.com/nurienstudio/image/list/nurien.json')
    .then(res => res.json())
    .then(data => {
        setGallery(data.resources)
      })
    return () => {
      window.removeEventListener('resize', handleSize)
    }
  }, [size])

  return (
    <div>
      <Slides perPages={width} images={gallery} interval={3000}/>
      {/* aca iria los thumnails con las miniaturas para dar click y cambiar array supongo */}
    </div>
  )
}

export default Portfolio
