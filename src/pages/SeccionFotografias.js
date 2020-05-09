import React, {useState, useEffect} from 'react'
import {Slogan} from './SeccionVideos'
import { Image,Transformation } from 'cloudinary-react'
import { GalleryWrapper, Titulo } from '../assets/css/StyledFotografias'

const SeccionFotografias = () => {

    const [ gallery, setGallery ] = useState([])

    useEffect(() => {
        fetch('https://res.cloudinary.com/nurienstudio/image/list/nurien.json')
        .then(res => res.json())
        .then(data => {
            setGallery(data.resources)
        })
    })

    let imagenes = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 0.5;
        imagenes.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });
    return (
        <section>
           <Titulo ref={imagenes}>
                Fotografías
            </Titulo>
            <GalleryWrapper >
                {gallery.map((image, index)=> (
                    <div key={index}>
                        <Image cloudName="nurienstudio" publicId={image.public_id} alt={index} >
                            <Transformation height="500" crop="scale"/>
                        </Image> 
                    </div>
                ))}
            </GalleryWrapper>
            <Slogan >
                -We make your proyect reality-
            </Slogan>

            
        </section>
    )
}

export default SeccionFotografias
