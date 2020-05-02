import React from 'react'
import { Video, Transformation } from 'cloudinary-react'
import {WrapperVideo} from '../assets/css/StyledIntro'

const Intro = () => {
    return (
        <WrapperVideo>
            <Video cloudName="nurienstudio" publicId="IntroNurien" autoplay="always" muted>
                <Transformation width={window.innerWidth} crop="fit"/>
            </Video>
        </WrapperVideo>
    )
}

export default Intro
