import React from 'react'
import "./Footer.css"
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';

function Footer() {
    return (
        <div className="footer">
          
            <h3 > Contact Information </h3>
             <div className="footer__media">
             <button className="footer__btn--facebook"> <FacebookIcon/> </button>
             <button className="footer__btn--instagram"> <InstagramIcon/> </button>
             </div>
           
        </div>
    )
}

export default Footer
