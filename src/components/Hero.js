import React from 'react';
import '../styles/Hero.css';

function Hero() {
  return (
    <div className="hero">
      <div className="hero-bgd new"></div>
      <div className='hero-content-wrapper'>
        <div className='hero-image'>
          <img src='images/hero/moadunni.png' alt='Hero' />
        </div>
        <div className='hero-text'>
          <h1>Welcome to Our Fashion Store</h1>
          <p>Shop the latest fashion trends in our online store.</p>
          <button className="btn">Shop Now</button>
        </div>
      </div>
      
    </div>
  );
}



export default Hero;
