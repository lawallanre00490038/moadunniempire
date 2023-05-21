import React from 'react';
import '../styles/Testimonials.css';

function Testimonials() {
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#4c0082" fill-opacity="1" d="M0,224L20,202.7C40,181,80,139,120,149.3C160,160,200,224,240,234.7C280,245,320,203,360,192C400,181,440,203,480,186.7C520,171,560,117,600,117.3C640,117,680,171,720,192C760,213,800,203,840,192C880,181,920,171,960,192C1000,213,1040,267,1080,272C1120,277,1160,235,1200,229.3C1240,224,1280,256,1320,272C1360,288,1400,288,1420,288L1440,288L1440,320L1420,320C1400,320,1360,320,1320,320C1280,320,1240,320,1200,320C1160,320,1120,320,1080,320C1040,320,1000,320,960,320C920,320,880,320,840,320C800,320,760,320,720,320C680,320,640,320,600,320C560,320,520,320,480,320C440,320,400,320,360,320C320,320,280,320,240,320C200,320,160,320,120,320C80,320,40,320,20,320L0,320Z"></path></svg>

      <div className='testimonials'>
        <h2 className='text-center mb-6'>What Our Customers Are Saying</h2>
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
    </>
    
  );
}

export default Testimonials;
