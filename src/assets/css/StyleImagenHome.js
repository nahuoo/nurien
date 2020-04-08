import styled from 'styled-components';

  

const PageHeader = styled.div `

  
  display: flex;  
  flex-wrap: nowrap;
  margin: 0px; 
  padding: 0px;
  position: absolute;
  align-items:center;
  
  background: linear-gradient(128deg, rgba(37,2,70,1) 0%, rgba(3,0,5,1) 10%, rgba(3,0,5,1) 90%, rgba(37,2,70,1) 100%);
  background: white;
  width: 100%;
  max-width: 100%;
  height: 120vh;  
  background-position: center;

  background-repeat: no-repeat; 
  background-size: cover;


    .filtro{
        background-color: #16A1B2; 
        background-size: cover;
        position: relative;
    }

    .contenedor{
        text-align: left;
        position: relative;
        align-items: center;           
    }

    .imagen{
        width: "150";
        align-content:center;
        justify-content: flex-start;
        margin-left: 24px;
        margin-top: 15%;
        z-index: 1;
    }

    
   
@media screen and (max-height: 800px) {
    h1{
        font-size:3rem;
        max-width: 100vh;
    }
}
    h2{
        font-family: 'Roboto', sans-serif;
        font-size:1rem;
        letter-spacing: 1.5px;
        color: black;
        margin-left: 1vw;
    }
    @media screen and (max-width: 400px) {
        height: 117vh;   
    }
    @media screen and (max-width: 800px) {
        height: 122vh; 
    }
    @media screen and (max-height: 700px) {
        height: 118vh; 
    }
`;

export default PageHeader;