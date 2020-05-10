import styled from 'styled-components'

export const AcordeonNegro = styled.div`
    margin:10vh 0;
    width: 100vw;
    border-bottom: 2px solid #0deefe40;
   padding-bottom: 15vh;
    height: auto;
    text-align:center;
    color:white;
    @media screen and (min-width: 1000px) {
        width:98vw;
        left:10px;
      
    }

`
export const Botton = styled.div`

    width: 100%;
    color: white;
    padding: 1em 0;
    height: ${(props) => props.abierto ? '50vh' : '10vh'};
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


export const Clientes = styled.div`
    
    display: ${(props) => props.abierto ? 'flex' : 'none'};
    flex-wrap: wrap;
    flex-direction:column;
    width:25%;
    margin-left: 25vw;
    height:200vh;
    color: black;
    justify-content:center;
    align-items: center;

   .display{
       display:none;
   }
   img{
       margin: 10px;
   }

    transition: all 5s ease;
    @media screen and (min-width: 425px) {
        .display{
       display:block;
   }
        img{
          margin: 20px;
        }     
        margin-left: 0;
        width:100%;
        display: ${(props) => props.abierto ? 'flex' : 'none'};
        flex-direction: row;
        justify-content: center;
        align-items: center;
        height:200vh;
        margin-top:20px;
        grid-template-columns: 1fr 1fr 1fr 1fr ;
        height:auto;
    }
    
`
export const Contacto = styled.div`
    
    margin-top: 10%;
    display: ${(props) => props.abierto ? '' : 'none'};
    width:90%;
    padding-left: 20px;

    font-size: 1rem;
    transition: 2s ease-in;
    animation: ${(props) => props.abierto ? 'fade' : ''} 2s;
    @media screen and (min-width: 1000px) {
        width:100%;
        padding-top:10vh;
        margin-top: 0px;
        padding-left:0px;
    }
    @keyframes fade{
        0% { opacity: 0};
        100% { opacity: 1};
    }
`

export const DivContacto = styled.div `
    
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