import React from 'react'
import Styled from 'styled-components'

const AcordeonNegro = Styled.div`

    width: 100%;
    height: auto;
    text-align:center;
    color:white;
    @media screen and (min-width: 1000px) {
        width:95vw;
    }

`
const Botton = Styled.div`

    width: 100%;
    color: white;
    padding: 1em 0;
    height: ${(props) => props.abierto ? '40vh' : '10vh'};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:${(props) => props.abierto ? 'space-between' : 'center'};
    font-size: 2em;
    user-select:none;
    font-family: 'Caviar Dreams';
    cursor: pointer;
    background: transparent;
    transition: all 0.5s ease-in-out; 
    animation: ${(props) => props.abierto ? 'fade' : ''} 2s;
    @keyframes fade{
        0% { opacity: 0};
        100% { opacity: 1};
    }
      :hover{
         background: rgba(35, 34, 36,0.6);
       }

    @media screen and (min-width: 1000px) {
        height: ${(props) => props.abierto ? '40vh' : '20vh'};
        display: grid;
        width: 100%;
    }
`


const Clientes = Styled.div`

    display: ${(props) => props.abierto ? 'block' : 'none'};
    width:30%;
    color: black;
    background: white;
    transition: all 5s ease;
    overflow: hidden;
    @media screen and (min-width: 1000px) {
        width:40%;
    }
    
`
const Contacto = Styled.div`
    
    display: ${(props) => props.abierto ? '' : 'none'};
    width:90%;
    font-size: 1rem;
    transition: 2s ease-in;
    animation: ${(props) => props.abierto ? 'fade' : ''} 2s;
    @media screen and (min-width: 1000px) {
        width:100%;
        padding-top:10vh;
    }
    @keyframes fade{
        0% { opacity: 0};
        100% { opacity: 1};
    }
`

const DivContacto = Styled.div `
    
    padding: 10px 0;
    display:flex;
    flex-direction: column;
    padding:20px;
    align-items: center;
    border-bottom: 1px solid #FC1EDF;
    color: #ddd;
    font-size: 14px;
    align-items: space-between;
        p{
            margin:1em;
        }
    @media screen and (min-width: 1000px) {
        height: ${(props) => props.abierto ? '40vh' : '20vh'};
    }

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
            >
                {props.titulo2}
                <Contacto abierto={abierto2}>
                        <h4>Tomás P. Musacchio Garrot</h4> 
                        <DivContacto>
                            <p>email: tomasmusacchio@nurienstudio.com</p>
                            <p>teléfono: +54 9 223 449-9953</p>    
                        </DivContacto>
                </Contacto>
            </Botton>
               
        </AcordeonNegro>
    )
}

export default Acordeon