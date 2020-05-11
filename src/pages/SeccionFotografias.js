import React, {useState, useEffect} from 'react'
import {Slogan} from './SeccionVideos'
import { Image,Transformation } from 'cloudinary-react'
import { GalleryWrapper } from '../assets/css/StyledFotografias'
import CarrouselFotos from '../components/CarrouselFotos'

const SeccionFotografias = () => {

    const [ gallery, setGallery ] = useState([])

    useEffect(() => {
        fetch('https://res.cloudinary.com/nurienstudio/image/list/nurien.json')
        .then(res => res.json())
        .then(data => {
            setGallery(data.resources)
        })
    })
    if (window.innerWidth < 650) {
         return(
            <section>
            <Slogan>
                -Portfolio-
            </Slogan>
            <CarrouselFotos />
            <Slogan>
                -Fotografías-
            </Slogan>
            <GalleryWrapper >
                {gallery.map((image, index)=> (
                    <div key={index}>
                        <Image cloudName="nurienstudio" publicId={image.public_id} alt={index} >
                            <Transformation height="150" crop="limit"/>
                        </Image> 
                    </div>
                ))}
            </GalleryWrapper>
            <Slogan>
                -We make your proyect reality-
            </Slogan>

            
        </section>
         ) 
     } else {
    return (
        <section>
            <Slogan>
                -Portfolio-
            </Slogan>
            <CarrouselFotos />
            <Slogan>
                -Fotografías-
            </Slogan>
            <GalleryWrapper >
                {gallery.map((image, index)=> (
                    <div key={index}>
                        <Image cloudName="nurienstudio" publicId={image.public_id} alt={index} >
                            <Transformation height="300" crop="scale"/>
                        </Image> 
                    </div>
                ))}
            </GalleryWrapper>
            <Slogan>
                -We make your proyect reality-
            </Slogan>
 */}
            
        </section>
    )}
}

export default SeccionFotografias
