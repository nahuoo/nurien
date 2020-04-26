import React from "react"
import '../assets/font-awesome-4.7.0/css/font-awesome.min.css'
import StyledFooter from '../assets/css/StyledFooter'


function Footer() {
  return (
    <StyledFooter>
        <div>
          <ul>
            <li>
              <a to="/contact">
                hola
              </a>
            </li>
            <li>
            
              <a to="/about">
                Sobre Nosotros 
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://www.google.com.ar/maps/place/Chaco+801,+B7600BKQ+Mar+del+Plata,+Buenos+Aires/@-37.9833588,-57.5609986,17z/data=!4m5!3m4!1s0x9584d95a18c9fcd9:0x9d2f9ec1205da2e9!8m2!3d-37.9829465!4d-57.5590997"
                rel="noopener noreferrer"
                >
                  <p>Mar del Plata</p><p className="direction">(B7600BKQ)</p>
              </a>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li>
              <i className="fa fa-envelope-o icon" aria-hidden="true">&nbsp;</i>
              <a href="mailto:unoelectromedicina@gmail.com" target="_blank" rel="noopener noreferrer">
                e-mail:&nbsp;tomasmucchio@nurienstudio.com
              </a>
            </li>
            <li>
              <i className="fa fa-facebook-official icon" aria-hidden="true">&nbsp;</i>
              <a href="https://www.facebook.com/NurienProducciones/" target="_blank" rel="noopener noreferrer">
                Facebook:&nbsp;/NurienProducciones
              </a>
            </li>
            <li>
              <i className="fa fa-instagram icon" aria-hidden="true">&nbsp;</i>
              <a href="https://www.instagram.com/nurien.studio/">
                Instagram:&nbsp;/nurienstudio
              </a>
            </li>
            
            <li>
              <i className="fa fa-instagram icon" aria-hidden="true">&nbsp;</i>
              <a href="https://www.youtube.com/channel/UC-Pi6Tkx_cUEtK7eft0QEyA">
                YouTube&nbsp;/nurien
              </a>
            </li>
          </ul>
        </div>
        <div className="copyright">
          {new Date().getFullYear()}, Uno Electromedicina © Todos los derechos reservados.
        </div>
        
      </StyledFooter>
  );
}

export default Footer;