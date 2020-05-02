import React from 'react'
import styled from 'styled-components'

const StyledVideo = styled.div`
    position:relative;
    margin-top: 7vh;
    padding:0px;
    height: 315px;
    width: 100%;

    @media (min-width: 650px) {
        margin-top: 7vh;
        height: 315px;
        width: 100%;
    }
   @media (min-width: 1000px) {
        margin-top: 12vh;
        height: 88vh;
        width: 100%;
    }
`
const Video = (props) => {
    return(
        <StyledVideo>
            <iframe 
                width="100%" 
                height="100%" 
                src={props.video}
                frameBorder="0" 
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                > 
            </iframe>
        </StyledVideo>
    )
}

export default Video