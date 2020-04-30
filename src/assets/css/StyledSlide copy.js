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

export const Wrapper = styled.div`
  height: 70vh;
  padding: 1vw 0;
  border-top: 2px solid #0deefe;
  border-bottom: 2px solid #FC1EDF;

  @media (min-width: 650px) {
    height: 70vh;
    padding: 0;
  }
  @media (min-width: 1000px) {
    height: 60vh;
    padding: 2vw 0;
  }
`
export const SlideContainer = styled.div`
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`
export const SlideImg = styled.div`
  width: 250px;
  height: 90%;
  margin: 0px 20px;
  overflow: hidden;
  border-radius: 3%;
  position: relative;
  animation: ${css`650ms ${show}`};
  img {
    position: absolute;
    top: -9999px;
    bottom: -9999px;
    left: -9999px;
    right: -9999px;
    margin: auto;
  }
  @media (min-width: 630px) {
    width: 20%;
    height: 90%
  }
  @media (min-width: 1000px) {
    width: 250px;
    height: 400px;
  }
`
