import styled, {keyframes} from 'styled-components'

const spin = keyframes`
      0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
`
const Loader = styled.div`

  border: 10px solid #0deefe;
  border-top: 11px solid #FC1EDF;
  border-radius: 50%;
  width: 65px;
  height: 65px;
  animation: ${spin} 2s linear infinite;
`
export default Loader 