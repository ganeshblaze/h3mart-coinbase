import React from 'react';  
import '../common/footer.css';
import facebook from '../images/icons8-facebook.svg';
import twitter from '../images/icons8-twitter.svg';

class Footer extends React.Component {  
 
   render() {  
      return (  
         <div className='footer-container'> 
         <div className='footer-links'>
            <div>
            <ul className='footer-section'>
            <h1>COINCAP.IO</h1>
                <li>Methodology</li>
                <li>Support</li>
                <li>Our API</li>
                <li>Rate Comparison</li>
                <li>Careers</li>
            </ul>
            </div>
            <div>
            <ul className='footer-section'>
                <h1>LEGALS</h1>
                <li>Terms of Service</li>
                <li>Privacy Policy</li>
            </ul>
            <span className='disclaimer'>
                <h1>DISCLAIMER</h1>
                <p>Neither ShapeShift AG nor
                     CoinCap are in any way associated.</p>
                      </span>
            </div>
            <div className='disclaimer'>
                <h1>FOLLOW US</h1>
                <img src={twitter} alt='text' />
                <img src={facebook} alt='text' />
            </div>
            <div className='disclaimer'>
                <h1>COINCAP APP AVAILABLE ON</h1>
            </div>
        </div> 
         </div> 
      );  
   }  
}  


export default Footer;  