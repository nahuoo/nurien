import React, {useState, useEffect} from 'react'
import {Slogan} from './SeccionVideos'
import { Image,Transformation } from 'cloudinary-react'
import { GalleryWrapper } from '../assets/css/StyledFotografias'
import CarrouselFotos from '../components/CarrouselFotos'

const SeccionFotografias = () => {

    const [ gallery, setGallery ] = useState([])
    const [ selectedIndex, setSelectedIndex ] = useState(-1)
    const [ crop, setCrop ] = useState('')
    const [ height, setHeight] = useState(0)

    const handleSelectedImage = (e) => {
        console.log(e.target.alt)
        setSelectedIndex(e.target.alt)
    }

    useEffect(() => {
        fetch('https://res.cloudinary.com/nurienstudio/image/list/nurien.json')
        .then(res => res.json())
        .then(data => {
            setGallery(data.resources)
        })
        
        if (window.innerWidth < 650) {
            setHeight(150)
            setCrop("limit")
        }
        else if(window.innerWidth < 1500) {
            setHeight(300)
            setCrop("scale")
        }
        else {
            setHeight(500)
            setCrop("scale")
        }
    }, [])
         return(
            <section>
            <Slogan>
                -Portfolio-
            </Slogan>
            <CarrouselFotos selectedIndex={selectedIndex} gallery={gallery}/>
            <Slogan>
                -Fotografías-
            </Slogan>
            <GalleryWrapper >
                {gallery.map((image, index)=> (
                    <div key={index}>
                        <Image cloudName="nurienstudio" publicId={image.public_id} alt={index} onClick={handleSelectedImage}>
                            <Transformation height={height} crop={crop} />
                        </Image> 
                    </div>
                ))}
            </GalleryWrapper>
            <Slogan>
                -We make your proyect reality-
            </Slogan>

            
        </section>
    ) 
}

export default SeccionFotografias