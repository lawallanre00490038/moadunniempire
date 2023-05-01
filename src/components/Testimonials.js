import React from 'react';
import '../styles/Testimonials.css';

function Testimonials() {
  return (
    <div className='testimonials'>
      <h2>What Our Customers Are Saying</h2>
      <div className='testimonial'>
        <img src='images/testimonial/1.jpg' alt='Customer' />
        <div>
          <p>"I love the dress I bought from Mo'Adunni Empire's ready-to-wear collection. It was beautifully made and fit perfectly. I received so many compliments when I wore it to my friend's wedding"</p>
          <h3>Mrs. Toyin</h3>
        </div>
        
      </div>
      <div className='testimonial'>
        <img src='images/testimonial/3.jpg' alt='Customer' />
        <div>
          <p>"I finally found clothes that fit me perfectly thanks to Mo'Adunni Empire's ready-to-wear collection. The skirt and top I bought were comfortable, stylish, and well-made. I highly recommend them!"</p>
          <h3>Mrs. Lola</h3>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
