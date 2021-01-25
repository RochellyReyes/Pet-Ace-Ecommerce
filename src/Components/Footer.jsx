import React from 'react';
import '../styling/footer.css';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab, faFacebookSquare, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//https://fontawesome.com/how-to-use/on-the-web/using-with/react

const Footer = () => {
    library.add(fab, faFacebookSquare)
    library.add(fab, faTwitterSquare)

    return(
        <div className="Footer">     
            <div className="CopyRight">© Road2Hire</div>

            <div className="Social">
                <a href="https://www.facebook.com/" aria-label="Link to facebook page">
                    <FontAwesomeIcon 
                        icon={['fab', 'facebook-square']} 
                        alt="facebook icon"/>
                </a>
                
                <a href="https://twitter.com/?lang=en" aria-label="Link to twitter page">
                    <FontAwesomeIcon 
                        icon={['fab', 'twitter-square']} 
                        alt="twitter icon"/>
                </a>
            </div>
            
            <div className="Logo">
                <img 
                    src="/imgs/petace-logo.jpg" 
                    alt="logo"
                    width="640"
                    height="360"/>
            </div>
        </div>
    )
}


export default Footer;