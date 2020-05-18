import ReactDOM from 'react-dom'
import React, {useState, useEffect} from 'react'
import { Wrapper, ImgContainer } from '../assets/css/StyledModalImg'
import { Burger } from '../assets/css/StyledNavbar'
import { Image,Transformation } from 'cloudinary-react'


const ModalImg = ({modalToggle, selectedPhoto}) => {

    const [ landscapeImg, setLandscapeImg ] = useState(false)

    const handleLandscape = () => {

        if (window.innerWidth > window.innerHeight) {
          setLandscapeImg(true)
        }
        else{
          setLandscapeImg(false)
        }
      }
      
    const handleModal = () => {
        modalToggle()
    }

    useEffect( () => {

        handleLandscape()

        window.addEventListener('resize', handleLandscape)
    
        return () => window.removeEventListener('resize', handleLandscape)
      }, [])

    return ReactDOM.createPortal((
        <Wrapper onClick={handleModal}>
        <Burger modal onClick={handleModal}>
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
    ), document.getElementById("modal-img"))
}

export default ModalImg
