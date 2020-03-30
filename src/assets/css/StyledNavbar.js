import styled from 'styled-components'

const StyledNavbar = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    margin:0;
    padding:0;
    height: 15%;
    width:100%;
    align-items: center;
    background: transparent;
    z-index: 2;
    color: #fff;

    .linea-azul{
        background: #0deefe;
        height:15%;
        width: 100%;
        margin-top: 1%;
        margin-bottom: 1vh;
    }
    .linea-morada{
        background: #fc1edf;
        height:15%;
        width: 100%;
        margin:0%;
    }
    
    .nav-links{
        display: flex;
        justify-content: flex-end; 
        flex-direction: row;
        flex-wrap: nowrap;
        align-items: center;
        position: fixed;
        width: 100vw;
        height: 50px;
        padding: 4px;
    }
    .nav-links li{
    display: inline-block;
    padding: 0px 3px;
    }
`   

export default StyledNavbar