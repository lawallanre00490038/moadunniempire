import React from 'react';
import '../styles/Footer.css';

function Footer() {
  return (
    <div className='text-white bg-[#4c0082]'>
      <div className=' flex justify-between p-10'>
        <div className=''>
          <h3>Mo'Adunni Fashion Store</h3>
          <p>Abina Omolulu Street</p>
          <p>Surulere, Lagos</p>
          <p>+234-7013957216</p>
          <p>morayo234@gmail.com</p>
        </div>
        <div className=''>
          <h3>Connect With Us</h3>
          <div className='flex justify-center'>
            <a href='path/to/facebook'><i className='fab fa-facebook mr-3'></i></a>
            <a href='path/to/twitter'><i className='fab fa-twitter mr-3'></i></a>
            <a href='path/to/instagram'><i className='fab fa-instagram'></i></a>
          </div>
        </div>
      </div>
      <span className='block text-center'>Designed by CodeBrains</span>
    </div>
  );
}

export default Footer;
