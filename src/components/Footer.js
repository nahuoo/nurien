import React from "react"
import '../assets/font-awesome-4.7.0/css/font-awesome.min.css'
import StyledFooter from '../assets/css/StyledFooter'
import Formulario from './Formulario'

function Footer() {
  return (
    <StyledFooter>
        <div>
            <Formulario />
        </div>
        <div>
            <h4>Tomás P. Musacchio Garrot</h4> 
            <br></br>
            <br></br>
            
          <ul>      
          <li> <a href="tel:+5492234499953"><i className="fa fa-phone"></i> teléfono: +54 9 223 449-9953 </a> </li>              
            <li>
              <i className="fa fa-envelope-o icon" aria-hidden="true">&nbsp;</i>
              <a href="mailto:tomasmusacchio@nurienstudio.com" target="_blank" rel="noopener noreferrer">
                e-mail:&nbsp;tomasmusacchio@nurienstudio.com
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
              <a href="https://www.instagram.com/nurien.studio/" target="_blank" rel="noopener noreferrer">
                Instagram:&nbsp;/nurienstudio
              </a>
            </li>
            <li>
              <i className="fa fa-youtube icon" aria-hidden="true">&nbsp;</i>
              <a href="https://www.youtube.com/channel/UC-Pi6Tkx_cUEtK7eft0QEyA"target="_blank" rel="noopener noreferrer">
                YouTube:&nbsp;/nurien
              </a>
            </li>
          </ul>
        </div>
        <div className="copyright">
          {new Date().getFullYear()}, Nurien Studio  ♡  Mar del Plata.
        </div>
        
      </StyledFooter>
  );
}

export default Footer;