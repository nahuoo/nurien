import styled, {keyframes} from 'styled-components'

const spin = keyframes`
      0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
`
const Loader = styled.div`

  border: 5px solid #0deefe;
  border-top: 8px solid #FC1EDF;
  border-bottom: 7px solid #0deefe ;
  border-radius: 50%;
  width: 45px;
  height: 45px;
  animation: ${spin} 1s ease-out infinite;

`
export default Loader 