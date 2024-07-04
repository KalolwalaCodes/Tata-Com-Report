import React from 'react'
import "./Footer.css"
import { color } from 'framer-motion';
const Footer = () => {
  return (
    <div className='footer-main'>
    <div className='footer-social'>
      <div className='icons-footer'>
        <a target='_blank' href="https://www.linkedin.com/company/tata-communication/"><img src="./in.svg" alt="" /></a>
      <a target='_blank' href="https://twitter.com/tata_comm"><img src="./x.svg" alt="" /></a>
      <a target='_blank' href="https://www.instagram.com/tata_comm/"><img src="./insta.svg" alt="" /></a>
      <a target='_blank' href="https://www.youtube.com/user/tatacomms"> <img src="./yt.svg" alt="" /></a>
      </div>
    </div>

    <div className='footer-parent'>
    <div className="footer-children">
        <li className="footer-list-items"> <a style={{color:"inherit"}} href="https://www.tatacommunications.com/policies/">Policies |</a></li>
        <li className="footer-list-items"><a style={{color:"inherit"}} href="https://www.tatacommunications.com/legal/">Legal |</a></li>
        <li className="footer-list-items"><a style={{color:"inherit"}} href="https://www.tatacommunications.com/sitemap/">Sitemap |</a></li>
        <li className="footer-list-items"><a style={{color:"inherit"}} href="https://www.tatacommunications.com/preferences/">Preferences |</a></li>
        <li className="footer-list-items"><a style={{color:"inherit"}} href="https://www.tatacommunications.com/policies/privacy/">Privacy</a></li>
    </div>
    <div className="footer-children">
        <p className='fotter-paragraph'>©2024 Tata Communications. All rights reserved. TATA COMMUNICATIONS and TATA are trademarks of Tata Sons Private Limited.</p>
        </div>  
    </div>
    </div>
  )
}

export default Footer
