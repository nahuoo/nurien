import React from 'react'
import Video from '../components/Video'
import Acordeon from '../components/AcordeonBody'
import Portfolio from '../components/Portfolio';


const Home = () => {
    return (
        <div>
            
            <Video video={"https://www.youtube.com/embed/ddE6ksAhZx4"} />
            <Portfolio />
            <Acordeon titulo='Clientes' titulo2='¿Quiénes somos?'/>
            
        </div>
    )
}

export default Home