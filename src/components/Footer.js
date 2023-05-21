import React from 'react';

function Footer() {
  return (
    <div className='text-white bg-[#4c0082]'>
      <div className=' flex justify-between p-10 overflow-hidden'>
        <div className='flex-1 mr-8 md:mr-0'>
          <h3>Mo'Adunni Fashion Store</h3>
          <p>Abina Omolulu Street</p>
          <p>Surulere, Lagos</p>
          <p>+234-7013957216</p>
          <p>morayo234@gmail.com</p>
        </div>
        <div className='flex-1'>
          <div className='flex flex-col'>
            <h3 className='md:self-end'>Connect With Us</h3>
            <div className='flex justify-start md:self-end'>
              <a href='path/to/facebook'><i className='fab fa-facebook mr-3'></i></a>
              <a href='path/to/twitter'><i className='fab fa-twitter mr-3'></i></a>
              <a href='path/to/instagram'><i className='fab fa-instagram'></i></a>
            </div>
          </div>
          
        </div>
      </div>
      <span className='block text-center'>Designed by CodeBrains</span>
    </div>
  );
}

export default Footer;
