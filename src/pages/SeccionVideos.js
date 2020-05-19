import React from 'react'
import Video from '../components/Video'
import Styled from 'styled-components'
import NurienLean from '../assets/img/NurienLean.jpg'                      
import Nurienags from '../assets/img/Nurienags.jpg'
import Nurienbasket from '../assets/img/Nurienbasket.jpg'
import Nurienbroll from '../assets/img/Nurienbroll.jpg'
import Nuriennike from '../assets/img/Nuriennike.jpg'
import Nurienreel from '../assets/img/Nurienreel.jpg'
import Nurienreel2020 from '../assets/img/Nurienreel2020.jpg'
import Nurienwoodland from '../assets/img/Nurienwoodland.jpg'
import NurienLyrics from '../assets/img/NurienLyrics.jpg'
import Nurienmax from '../assets/img/Nurienmax.jpg'
import Nurienfad from '../assets/img/Nurienfad.jpg'
import Nurienhuellas from '../assets/img/Nurienhuellas.jpg'

export const Seccion = Styled.section`
    @media (min-width: 630px){
        margin-top: 10vh;
    }
    @media (min-width: 1000px){
        margin-top: 30px;
    }
`
const Imagenes = Styled.div `
    width: 95%;
    padding-left: 5%;
    margin-top:3%;
    display: grid;
    grid-gap: 5vh;
    grid-template-columns: 1fr 1fr 1fr;
    color:white;
    font-family: 'Caviar Dreams';
    
   img{ 
       transition: .5s ease;
       cursor:pointer;
       border: 1px groove #FC1EDF; 
       :hover {
            opacity: .5;
            
       }
    }

    @media screen and (max-width: 600px) {
        display:flex;
        flex-direction: column;
        img {
            width:90%;
            margin: 10px;
        }
    }

    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr 1fr;
        img {
            width:90%;
            margin: 10px;
        }
    }
    @media screen and (min-width: 1550px) {
        font-size: 22px;
    }
    
`

export const Slogan = Styled.h2`
    user-select:none;
    margin-top:5vh;
    width: 100%;
    color: white;
    padding: .5em 0;
    height: ${(props) => props.abierto ? '40vh' : '10vh'};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    font-size: 1em;
    user-select:none;
    font-family: 'Caviar Dreams';
    border-bottom: 1px solid #FC1EDF;

    @media screen and (min-width: 1550px) {
        font-size: 35px;
    }
`

const ruta1 = "https://www.youtube.com/embed/A6XIpbDP2U0"
const ruta2 = "https://www.youtube.com/embed/r9df0_JJ0uo"
const ruta3 = "https://www.youtube.com/embed/qj_3KblvQ9Y"
const ruta4 = "https://www.youtube.com/embed/3sHWaD7pakI"
const ruta5 = "https://www.youtube.com/embed/Mc2AgK43DlA"
const ruta6 = "https://www.youtube.com/embed/UxNu7wilrWs"
const ruta7 = "https://www.youtube.com/embed/sHR4qJBz_1w"
const ruta8 = "https://www.youtube.com/embed/ddE6ksAhZx4"
const ruta9 = "https://www.youtube.com/embed/Qb-Ah5QfMi4"
const ruta10 = "https://www.youtube.com/embed/GDFvEkdPO7I"
const ruta11 = "https://www.youtube.com/embed/ALI45eyoQA0"
const ruta12 = "https://www.youtube.com/embed/0o8CaH1aO70"


const SeccionVideos = () => {

    const [cambioVideo,setCambioVideo] = React.useState(ruta9)
    
    const handleClick = (e) => {
        document.getElementById("video").scrollIntoView({behavior: 'smooth' })
        setCambioVideo(e)
    }

    return (
        <Seccion>
            <Slogan>-We make your proyect reality-</Slogan>
          <Video  video={cambioVideo} />
           
        <Imagenes>
            <div>
                <img src={Nurienbroll} alt="Onlycars - B-roll" onClick={() => handleClick(ruta1)} />
                <p>Onlycars - B-roll</p> 
           </div>
          
           <div>   
                <img src={Nurienags} alt='ArgentinaGameShow' onClick={() => handleClick(ruta2)} />
                <p>ArgentinaGameShow</p>
           </div>

           <div>
                <img src={NurienLean} alt='cortometraje' onClick={() => handleClick(ruta4)} />
                <p>Lean: El Origen - (Cortometraje)</p>
            </div>
              
           <div>   
                <img src={Nurienwoodland} alt='WoodlandCamp' onClick={() => handleClick(ruta3)} />
                <p>WoodlandCamp Trailer</p>
           </div>
               
           <div>
                <img src={Nuriennike} alt='what moves you?' onClick={() => handleClick(ruta5)} />
                <p>You move Nike, what moves you?</p>
            </div>
            <div>           
                <img src={Nurienbasket} alt='Just Dunks' onClick={() => handleClick(ruta6)} />
                <p>Just Dunks - Street Basketball</p>
            </div>

            <div>
                <img src={Nurienreel} alt='reel' onClick={() => handleClick(ruta7)} />
                <p>Nurien reel</p>
            </div>
           
            <div>
                <img src={Nurienreel2020} alt='reel2020' onClick={() => handleClick(ruta8)} />
                <p>Nurien reel 2020</p>
            </div>
  
            <div>
                <img src={NurienLyrics} alt='Dope Friends' onClick={() => handleClick(ruta9)} />
                <p>R CA$H x HANZO - DOPE FIENDS (Lyrics Video)</p>
            </div>
            <div>
                <img src={Nurienmax} alt='Dope Friends' onClick={() => handleClick(ruta10)} />
                <p>Morwen "Un Futuro" Video Oficial</p>
            </div>
            <div>
                <img src={Nurienfad} alt='Dope Friends' onClick={() => handleClick(ruta11)} />
                <p>R.CA$H - F.A.D (Shot by NURIEN)</p>
            </div>
            <div>
                <img src={Nurienhuellas} alt='Dope Friends' onClick={() => handleClick(ruta12)} />
                <p>Pura Vida - Huellas (Video Oficial)</p>
            </div>
            </Imagenes>
        </Seccion>

    )
}

export default SeccionVideos


