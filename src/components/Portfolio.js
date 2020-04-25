import React, { useEffect, useState } from 'react'
import Slides from './Carrousel'


const Portfolio = () => {

  const [ width, setWidth ] = useState('')


  useEffect(() => {
    let size = window.innerWidth
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
  }, [])
  
  return (
    <div>
      <Slides perPages={width}/>
      {/* aca iria los thumnails con las miniaturas para dar click y cambiar array supongo */}
    </div>
  )
}

export default Portfolio
