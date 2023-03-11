import React from 'react';  
import '../common/banner.css';

class Banner extends React.Component {  
   render() {  
      return (  
         <div className='body-banner-container styling-banner'>  
            <ul className='ul-styling-banner-items'>
               <li>MARKET CAP</li>
               <li>$1.05T</li>
            </ul>
            <ul className='ul-styling-banner-items'>
               <li>EXCHANGE VOL</li>
               <li>$73.26B</li>
            </ul>
            <ul className='ul-styling-banner-items'> 
               <li>ASSETS</li>
               <li>2,295</li>
            </ul>
            <ul className='ul-styling-banner-items'>
               <li>EXCHANGES</li>
               <li>73</li>
            </ul>
            <ul className='ul-styling-banner-items'>
               <li>MARKETS</li>
               <li>12,563</li>
            </ul>
            <ul className='ul-styling-banner-items'>
               <li>BTC DOM INDEX</li>
               <li>36.2%</li>
            </ul>
         </div>  
      );  
   }  
}  


export default Banner;  