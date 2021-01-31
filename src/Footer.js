import React from 'react'
import "./Footer.css"
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import { Link } from "react-router-dom";
function Footer() {
    return (
        <div className="footer">
          
            <h3 > Contact Information </h3>
             <div className="footer__media">
             <button className="footer__btn--facebook"> 
              <a href="https://www.facebook.com/">
             <FacebookIcon/>
             </a>
             </button>
             <button className="footer__btn--instagram"> 
            <a href="https://www.instagram.com/">
            <InstagramIcon/>
            </a>
              </button>
             </div>
           
        </div>
    )
}

export default Footer
