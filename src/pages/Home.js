import React from 'react'
import Video from '../components/Video'
import Portfolio from '../components/Portfolio';


const Home = () => {
    return (
        <div>
            
            <Video video={"https://www.youtube.com/embed/ddE6ksAhZx4"} />
            <Portfolio />
            
        </div>
    )
}

export default Home