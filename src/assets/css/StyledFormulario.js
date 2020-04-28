import styled from 'styled-components'



const StyledFormulario = styled.div ` 
   top:0px;
form{
   display:flex;
   flex-direction: column;
   justify-content: center ;
   align-items: center;
   
}

 input,textarea,select{ 
    position:relative;
    background: transparent;
    border:none;
    border-bottom: 1px solid #FC1EDF;
    color: #fff;
    height: 2em;
    width: 40vw;
    font-size: 0.8571em;
    margin: 10px;
    font-family: 'Caviar Dreams';
    padding-left:20px;
      input:focus,
      select:focus,
      textarea:focus,
      button:focus {
         border: 1px solid #FC1EDF;
         outline: none;
         
      }
    


  -webkit-transition: color 0.3s ease-in-out, border-color 0.3s ease-in-out, background-color 0.3s ease-in-out;
  -moz-transition: color 0.3s ease-in-out, border-color 0.3s ease-in-out, background-color 0.3s ease-in-out;
  -o-transition: color 0.3s ease-in-out, border-color 0.3s ease-in-out, background-color 0.3s ease-in-out;
  -ms-transition: color 0.3s ease-in-out, border-color 0.3s ease-in-out, background-color 0.3s ease-in-out;
  transition: color 0.3s ease-in-out, border-color 0.3s ease-in-out, background-color 0.3s ease-in-out;
  -webkit-box-shadow: none;
  box-shadow: none; 
 }

 .texto{
    height: 100px;
    padding-top:10px;
 }

 .submit{
      width: 3vw;
      color: black;
      background: #F000DB;
      text-align: center;
      padding-left: 0;
      border-radius: 5%;
      width: 20%;
      min-width:60px;
    }
 
 

 input:focus, textarea:focus{
    border-radius: 0.50rem 0.50rem 0 0; 
 
    
 }

 
 h2{
   font-family: 'Neuton', serif;
   font-size: 2rem;
   letter-spacing: 0.5px;
   color: black;
   text-align: center;   
   padding-top: 10px;
   padding-bottom: 10px;
   margin-bottom: 30px;
 }

 .left{
   justify-content:left;
}

 /* mobil */
 @media screen and (max-width: 500px){

   
   input,textarea, select{ 
      width: 60vw;
      padding: 0vh;
      padding-left:10px;
      
      
 }

 .submit{
   text-align: center;
   color:white;
   left:0px;
   background: #FC1EDF ;
   padding-left:0px;
   width: 30%;

 }
 }
 
  /* tablet */
  @media screen and (max-height: 500px){
   height: 200vh;
  }
 `
  export default StyledFormulario



  /* 

  display: flex;
    flex-direction: column;
    padding:10vh;
    margin-top:0px;
    align-content: center;
    justify-content:center;
    font-family: 'Roboto', sans-serif;
    background: rgba(255, 255, 255, 0.5);
    padding-left: 15%;

 input,textarea{ 
    position:relative;
    background-color: white;
    border: 1px solid #E3E3E3;
    border-radius: 30px;
    color: #2c2c2c;
    height: 2em;
    width: 55%;
    min-width:200px;
    font-size: 0.8571em;
    display: flex;
    flex-direction: column;
    margin: 2%;
    align-items: center;
    justify-content:center;
    font-family: 'Roboto', sans-serif;
    padding-left:20px;


    */