import React from 'react'
import Styled from 'styled-components'
import { Image,Transformation } from 'cloudinary-react'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import ModalImg from './Modal-img'


const Boton = Styled.button`
    position: absolute;
    user-select:none;
    top: 60%;
    left: ${(props) => props.left};
    color: #FC1EDF;
    background: transparent;
    font-size: 1.5em;
    border: 1px solid #FC1EDF;
    border-top: 2px solid #FC1EDF;
    border-bottom: 2px solid #FC1EDF;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    transition: .2s linear;
    :hover{
        border: 4px solid #055f65;
        border-top: 3px solid #055f65;
        outline: none;
        box-shadow: none;
    }
    :active{
        border-right: 8px solid #640c59;
        border: 15px solid #640c59;
        border-top: 3px solid #640c59;
        text-align: right;
        border-bottom: 8px solid #640c59;
        outline: none;
         box-shadow: none;
    }
    @media (min-width: 650px) {
        top: 65vh;
        font-size: 1em;
        height: 40px;
    }
    @media (min-width: 1000px){
      left: ${props => props.left === '85%' ? '92%' : props.left }
    }
    @media (min-width: 1400px) {
        top: 70%;
        font-size: 2em;
        height: 40px;
        width: 60px;
        height: 60px;
        
    }
    
`

const WrapperCarrousel = Styled.div`
    height: 80vh;
    width: 98vw;
    display:flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
   
.Slide-enter {
  position: absolute;
  transform: translateX(-100%);
  opacity: 0;
}

.Slide-enter-active {
  position: absolute;
  transform: translateX(0%);
  opacity: 1;
  transition: all 1s ease;
}
/*Cuando se desmonta*/
.Slide-exit {
  position: absolute;
  transform: translateX(0%);
  opacity: 1;
}

.Slide-exit-active {
  position: absolute;
  transform: translateX(100%);
  opacity: 0;
  transition: all 1s ease;
}


.Slide-reverse-enter {
  position: absolute;
  transform: translateX(100%);
  opacity: 0;
}

.Slide-reverse-enter-active {
  position: absolute;
  transform: translateX(0%);
  opacity: 1;
  transition: all 1s ease;
}
/*Cuando se desmonta*/
.Slide-reverse-exit {
  position: absolute;
  transform: translateX(0%);
  opacity: 1;
}

.Slide-reverse-exit-active {
  position: absolute;
  transform: translateX(-100%);
  opacity: 0;
  transition: all 1s ease;
}
`

const Card2 = Styled.div`
    height: 90%;
    position: relative;
    transition: 1s ease-out;
    width: 90%;
    overflow: hidden;
    border-radius: 7%;


    img {
    position: absolute;
    top: -9999px;
    bottom: -9999px;
    left: -9999px;
    right: -9999px;
    margin: auto;
    border-radius: 7%;
    }

  @media (min-width: 1000px){
    img{
      height: 100%;
      border-radius: 5%;
    }

  }
  `
    


const CarrouselFotos = ({selectedIndex, gallery, height}) => {

 const [ activeIndex,setActiveIndex ] = React.useState(-1)
 const [ isFetching, setIsFetching ] = React.useState(true)
 const [ animation, setAnimation ] = React.useState('Slide-reverse')
 const [ imgSize, setImgSize ] = React.useState(0)
 const [ selectedPhoto, setSelectedPhoto ] = React.useState('')
 const [ showModal, setShowModal ] = React.useState(false)
 
 React.useEffect( () => {

    if (gallery.length !== 0 ){   
        setIsFetching(false)
        setActiveIndex(0)
    }
    if (selectedIndex !== -1 ){
      setActiveIndex(parseInt(selectedIndex))
    }

    switch (true){
      case (height === 150):
        //tablet
        if (window.innerHeight < window.innerWidth ){
          setImgSize(250)
        }
        //mobile
        else {
          setImgSize(450)
        }
      break
      //desktop
      case (height === 400 ) :
        setImgSize(500)
      break
      //1080
      default:
        setImgSize(650)
      break
    }

    },[gallery, selectedIndex, height] )

    const left = () => {
        if(activeIndex > 0){
           setActiveIndex(activeIndex - 1)
         }
         else {
           setActiveIndex(gallery.length - 1)
         }
        setAnimation('Slide')
      }
      const right = () => {
        if(activeIndex < gallery.length - 1){
         setActiveIndex(activeIndex + 1)
        }
        else {
          setActiveIndex(0)
        }
        setAnimation('Slide-reverse')
      }
      const handleSelected = (e) => {
        handleModal(e.target.src.slice(65))
      }

      const handleModal = (src) => {

        setSelectedPhoto(src)
        setShowModal(!showModal)
    
      }

    return (
        isFetching ? <h2>cargando...</h2> : 
            <WrapperCarrousel id='carrousel'>
              <Card2>
              <TransitionGroup>
                <CSSTransition
                  timeout={1000}
                  classNames={animation}
                  key={activeIndex}
                >
                  <Image cloudName="nurienstudio" publicId={gallery[activeIndex].public_id} alt="FullScreen" onClick={handleSelected}>
                    <Transformation height={imgSize} crop='fill' />
                  </Image> 
                </CSSTransition>
              </TransitionGroup>
              </Card2>
              <Boton onClick={right} left='85%' ><i className="fa fa-arrow-right"></i></Boton>
              <Boton onClick={left} left='5%' ><i className="fa fa-arrow-left"></i></Boton>
              { showModal &&  <ModalImg modalToggle={handleModal} selectedPhoto={selectedPhoto} />}
            </WrapperCarrousel>
    )}


export default CarrouselFotos