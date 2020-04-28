import React from 'react'
import StyledFormulario from '../assets/css/StyledFormulario'
import Snackbar from '../assets/css/StyledSnackbar'


/* El formulario */
const Formulario = () => {

  /*state del Modal */
  const [visible, setVisible] = React.useState(false)
  

  const handleClick = () => {
    setVisible(!visible)
    setTimeout(() => {
      setVisible(!visible)
    }, 3000);
    console.log(visible)
  }


 const handleSubmit = (event) => { 
  
  event.preventDefault()
  let Mensaje = `nombre=${event.target[0].value}&localidad=${event.target[1].value}&tipo=${event.target[2].value}&pacientes=${event.target[3].value}&email=${event.target[4].value}&mensaje=${event.target[5].value}`
  
  fetch('http://192.168.0.1asd', {
   method: 'post',
   headers: {'Content-Type':'application/x-www-form-urlencoded'},
   body: Mensaje
  })
  .then(response => response.text())
  .then(data => console.log(data));
  
  }
 

  return(
    <StyledFormulario>
     
    <form onSubmit={handleSubmit}>

    {/* input del nombre */}    
      <input 
       
        placeholder='Nombre...'
        type='text'
        required
      />
     {/* input del localidad */}    

     <input 

         placeholder='Localidad...'
        type='text'
        required
      />

      {/* input del mail */}
      <input 
       type='email'
        placeholder='Email...'
        name='email'
        required
        
      />

      {/* input del mensaje */}
      
      <textarea 

        placeholder='Escribe un mensaje...'
        cols='80'
        rows='2'
        type='textarea'
        className='texto'
        
      />

      {/* el boton Submit*/}
    <input 
      className='submit' 
      type='submit' 
      value='Enviar'
      onClick={() => handleClick() }
      />
    </form>
    <Snackbar visible={visible}> Mensaje enviado! </Snackbar>
    </StyledFormulario>
  )
}

export default Formulario