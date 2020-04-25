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
const Botton = Styled.div`
    margin-top:5px;
    width: 100%;
    color: white;
    height: ${(props) => props.abierto ? '100vh' : '10vh'};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:${(props) => props.abierto ? '' : 'center'};
    padding: 1em;
    font-size: 2em;
    font-family: 'Caviar Dreams';
    cursor: pointer;
    background: black;
    transition: all 0.5s ease-in-out; 
      :hover{
         background: rgba(35, 34, 36,0.6);
         
       
       
         top:0;
       }

    @media screen and (min-width: 1000px) {
        height: 20vh;
    }
`


const Clientes = Styled.div`
    display: ${(props) => props.abierto ? 'block' : 'none'};
    width:40%;
    padding: 0 1em;
    color: black;
    background: white;
    transition: all 5s ease;
    overflow: hidden;
    
`
const Contacto = Styled.div`
    display: ${(props) => props.abierto ? 'block' : 'none'};
    width:40%;
    padding: 0 1em;
    color: black;
    background: white;
    transition: all 5s ease;
    overflow: hidden;
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
            
            <Botton abierto={abierto}
                onClick={handleClick1}
            >
                {props.titulo}
                <Clientes abierto={abierto}>
                    hola
                </Clientes >
            </Botton>
                
            <Botton abierto={abierto2}
                onClick={handleClick2}
        
            >{props.titulo2}
            </Botton>
               
        </AcordeonNegro>
    )
}

export default Acordeon