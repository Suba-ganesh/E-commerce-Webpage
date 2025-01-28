import React from 'react';
import './Newsletter.css';

const Newsletter = () => {
  return (
    <div className='newsletter'>
         <h1>Get Exclusive Offers on Your Mail</h1>
         <p>Subscribe to Our Newsletter and Stay Updates</p>
         <div>
            <input type="Emial" placeholder='Type your mail Id' />
            <button>Subscribe</button>
         </div>
    </div>
  )
}

export default Newsletter