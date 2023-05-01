import React from 'react';
import '../styles/Footer.css';

function Footer() {
  return (
    <div className='footer'>
      <div className='footer-left'>
        <h3>Our Fashion Store</h3>
        <p>123 Main Street</p>
        <p>Anytown, USA</p>
        <p>555-123-4567</p>
        <p>info@ourfashionstore.com</p>
      </div>
      <div className='footer-right'>
        <h3>Connect With Us</h3>
        <div className='social-icons'>
          <a href='path/to/facebook'><i className='fab fa-facebook'></i></a>
          <a href='path/to/twitter'><i className='fab fa-twitter'></i></a>
          <a href='path/to/instagram'><i className='fab fa-instagram'></i></a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
