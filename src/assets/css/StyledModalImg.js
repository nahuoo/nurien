import styled from 'styled-components'

export const Wrapper = styled.div`
 background: #0006;
 position: absolute;
 left: 0;
 right: 0;
 top: ${props => props.scroll};
 bottom: 0;
 margin: auto;
 width: 100vw;
 min-height: 100vh;
 z-index: 100;
`