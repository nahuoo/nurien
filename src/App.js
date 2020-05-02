import React from 'react';
import Styled from 'styled-components'
import GlobalStyle from './assets/css/GlobalStyles'
import { Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import SeccionVideos from './pages/SeccionVideos'
import Navbar from './components/Navbar'
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
        <Navbar />
        <GlobalStyle />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/videos" exact component={SeccionVideos} />
        </Switch>
        <Footer /> 
    </Wrapper>
  );
}

export default App;
