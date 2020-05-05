import React from 'react'
import blanca from '../assets/img/blanca.png'
import hd from '../assets/img/hd.png'
import identity from '../assets/img/identity.png'
import marcos from '../assets/img/marcos.png'
import meta from '../assets/img/meta.png'
import negativo from '../assets/img/negativo.png'
import { AcordeonNegro, Botton, Contacto, DivContacto, Clientes } from '../assets/css/StyledAcordeon'

const Acordeon = React.forwardRef((props, ref) => {

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
        <AcordeonNegro id='nosotros'>
            <Botton abierto={abierto}
                onClick={handleClick1}
            >
                {props.titulo}
                <Clientes abierto={abierto}>
                    <img src={blanca} height='50px' alt="Marca" ></img>
                    <img src={hd} height='100px' alt="hd" ></img>
                    <img src={identity} height='100px' alt="identity" ></img>
                    <img src={marcos} height='200px' alt="marcos" ></img>
                    <img className='display' src={meta} height='100px' alt="meta" ></img>
                    <img className='display' src={negativo} height='70px' alt="negativo" ></img>
                </Clientes >
            </Botton>    
            <Botton abierto={abierto2}
                onClick={handleClick2}
                ref={ref}
                >
                {props.titulo2}
                <Contacto abierto={abierto2}>        
                    <h4>-We make your proyect reality-</h4> 
                    <DivContacto>                
                        <p>Nurien Studio fue fundada en 2018 con el fin de impulsar de forma artistica tu negocio </p>
                        <p>Desde Mar del Plata prestamos nuestro equipo y conocimiento para generar contenido creativo y original</p>    
                    </DivContacto>
                </Contacto>
            </Botton>   
        </AcordeonNegro>
    )
})

export default Acordeon