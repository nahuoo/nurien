import React from 'react'
import Styled from 'styled-components'

const AcordeonNegro = Styled.div`
    width: 80%;
    height: auto;
    text-align:center;
    color:white;
    margin:0px;
    @media screen and (min-width: 1000px) {
        width:95vw;
    }
`
const Botton = Styled.a`
    
    width: 100%;
    color: white;
    height: 10vh;
    display: flex;
    justify-content: center;
    align-items:center;
    padding: 1em;
    font-size: 2em;
    font-family: 'Caviar Dreams';
    cursor: pointer;
    background: black;
    transition: all 0.5s ease-in-out; 
      :hover{
         background: rgba(35, 34, 36,0.6);
       }

    @media screen and (min-width: 1000px) {
        height: 20vh;
    }
`


const Clientes = Styled.div`
    height: ${(props) => props.abierto ? 'auto' : '0'};
    width:100%;
    padding: 0 1em;
    color: black;
    background: white;
    transition: all 0.5s ease-in;
    overflow: hidden;
    
`
const Contacto = Styled.div`
    max-height: ${(props) => props.abierto ? 'auto' : '0'};
    width:100%;
    padding: 0 1em;
    color: black;
    background: white;
    transition: all 0.5s ease-in;
    overflow: hidden;
    transform: ${(props) => props.abierto ? 'translateY(0%)' : 'translateY(-56%)'};
`

const Acordeon = (props) => {

    const [abierto,setAbierto] = React.useState(false)
    const [abierto2,setAbierto2] = React.useState(false)

    const handleClick1 = (e) => {
        e.preventDefault()
        setAbierto(!abierto)
    }
    
    const handleClick2 = (e) => {
        e.preventDefault()
        setAbierto2(!abierto2)
    }
    
    return(
        <AcordeonNegro>
        
        <Botton 
            onClick={handleClick1}
        >{props.titulo}
        </Botton>
        <Clientes abierto={abierto}>
            hay si soy re virgo
            <p>asldkaskdj</p>
            <p>asldkaskdj</p>
        </Clientes>
       
        <Botton 
            onClick={handleClick2}
        >{props.titulo2}
        </Botton>
        <Contacto abierto={abierto2}>

            hay soy re virgo
            <p>asldkaskdj</p>
            <p>asldkaskdj</p>
            <p>asldkaskdj</p>
            <p>asldkaskdj</p>
            <p>asldkaskdj</p>
            <p>asldkaskdj</p>

        </Contacto>

        
        </AcordeonNegro>
    )
}

export default Acordeon