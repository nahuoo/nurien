import React, { useEffect} from 'react'
import { Video, Transformation } from 'cloudinary-react'
import {WrapperVideo} from '../assets/css/StyledIntro'


const Intro = ({End}) => {


    useEffect(() => {
        document.getElementById("VideoIntro").addEventListener('ended', End)

        return () => document.getElementById("VideoIntro").removeEventListener('ended', End)
    })

    return (
        <WrapperVideo>
            <Video cloudName="nurienstudio" publicId="IntroNurien" autoplay="always" muted id="VideoIntro">
                <Transformation width={window.innerWidth} crop="fit"/>
            </Video>
        </WrapperVideo>
    )
}

export default Intro
