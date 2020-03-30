import React from 'react';
import Navbar from './components/Navbar'
import styled from 'styled-components'
import ImagenHome from './components/ImagenHome'
import GlobalStyle from './assets/css/GlobalStyles'
  


const App = () => {
  return (
    <div>
  
      <GlobalStyle />
    <Navbar />
    <ImagenHome />
     
        
      
  
    </div>
  );
}

export default App;
