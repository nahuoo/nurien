import styled,{ css, keyframes } from 'styled-components'

const show = keyframes`
  0% {
    z-index: 1;
    transform: scale(0.8);
    opacity: 0;
  }
  100% {
    z-index: 1;
    transform: scale(1);
    opacity: 1;
  }
`
const hide = keyframes`
  0% {
    opacity: 1;
  }
  100% { 
    opacity: 0;
  }
`
export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  color: #FFF;
  padding-top: 2vw;
`
export const SlideContainer = styled.div`
  width: 100%;
  max-width: 400px;
  height: 100vh;
  overflow: hidden;
  margin: 0 auto;
  position: relative;
  top: 0;
`
export const SlideImg = styled.img`
  width: 100%;
  position: absolute;
  top: 0;
  animation: ${props => props.show ? css`650ms ${show} ease-out` : css`650ms ${hide} ease-out`};
  animation-fill-mode: forwards;
`
export const SlideTitle = styled.div`
  position: absolute;
  bottom: 0;
  z-index: 50;
  width: 100%;
  line-height: 10;
  background: linear-gradient(0deg, black, transparent);
  padding: 0 1em;
  text-shadow: 1px 1px black;
`
