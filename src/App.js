import React from 'react';
import Navbar from './components/Navbar'
import GlobalStyle from './assets/css/GlobalStyles'
import Video from './components/Video'
import Acordeon from './components/AcordeonBody'
import Styled from 'styled-components'
import Portfolio from './components/Portfolio';
import Footer from './components/Footer'

const Wrapper = Styled.div`
  display: grid;  
  grid-auto-columns: 1fr;
  margin: 0px; 
  padding: 0px;
  background: linear-gradient(128deg, rgba(37,2,70,1) 0%, rgba(3,0,5,1) 10%, rgba(3,0,5,1) 90%, rgba(37,2,70,1) 100%);
  width: 100%;
  height: 100%; 
  background-position: center;
  background-repeat: no-repeat; 
  background-size: cover;
`

const App = () => {
  return (
    <Wrapper>
        <GlobalStyle />
        <Navbar />
        <Video />
        <Portfolio />
        <Acordeon titulo='Clientes' titulo2='Contacto'/>
        <Footer />
    </Wrapper>
  );
}

export default App;
