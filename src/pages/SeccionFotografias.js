import React, {useState, useEffect} from 'react'
import {Slogan} from './SeccionVideos'
import { Image,Transformation } from 'cloudinary-react'
import { GalleryWrapper } from '../assets/css/StyledFotografias'

const SeccionFotografias = () => {

    const [ gallery, setGallery ] = useState([])

    useEffect(() => {
        fetch('https://res.cloudinary.com/nurienstudio/image/list/nurien.json')
        .then(res => res.json())
        .then(data => {
            setGallery(data.resources)
        })
    })

    return (
        <section>
            <Slogan>
                -We make your proyect reality-
            </Slogan>
            <GalleryWrapper>
                {gallery.map((image, index)=> (
                    <div key={index}>
                        <Image cloudName="nurienstudio" publicId={image.public_id} alt={index}>
                            <Transformation height="500" crop="scale"/>
                        </Image> 
                    </div>
                ))}
            </GalleryWrapper>
        </section>
    )
}

export default SeccionFotografias
