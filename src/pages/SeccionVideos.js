import React from 'react'
import Video from '../components/Video'
import Styled from 'styled-components'

const VideosDiv = Styled.div`
    background:white;
    display:grid;
    grid-gap: 20px;
`

const Slogan = Styled.p`
    user-select:none;
    width: 100%;
    color: white;
    padding: 1em 0;
    height: ${(props) => props.abierto ? '40vh' : '10vh'};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:space-between;
    font-size: 2em;
    user-select:none;
    font-family: 'Caviar Dreams';
`

const SeccionVideos = () => {
    return (
        <VideosDiv>
            <Slogan>-We make your proyect reality-</Slogan>
            
          <Video video={"https://www.youtube.com/embed/watch?v=A6XIpbDP2U0"} />
           <Video video={"https://www.youtube.com/embed/watch?v=r9df0_JJ0uo"} />
           <Slogan>-We make your proyect reality-</Slogan>
           <Video video={"https://www.youtube.com/embed/watch?v=qj_3KblvQ9Y"} />
           <Video video={"https://www.youtube.com/embed/watch?v=3sHWaD7pakI"} />   
        </VideosDiv>
    )
}

export default SeccionVideos