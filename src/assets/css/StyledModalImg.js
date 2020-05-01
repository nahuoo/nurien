import styled from 'styled-components'

export const Wrapper = styled.div`
 background: #0008;
 position: fixed;
 top:0;
 left: 0;
 right: 0;
 bottom: 0;
 margin: auto;
 width: 100vw;
 min-height: 100vh;
 z-index: 105;
`
export const ImgContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    margin: auto;
    overflow: hidden;
    pointer-events: none;
`
