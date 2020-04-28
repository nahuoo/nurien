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
  height: 60vh;
  color: #FFF;
  padding-top: 2vw;
`
export const SlideContainer = styled.div`
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
`
export const SlideImg = styled.div`
  width: 250px;
  height: 400px;
  margin: 0px 20px;
  overflow: hidden;
  border-radius: 3%;
  text-align: center;
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
`
