import React, { useState, useEffect } from 'react';
import Hero from '../components/Hero';
// import Products from '../components/Products';
import Testimonials from '../components/Testimonials';
import Milestones from '../components/Milestones';
import Footer from '../components/Footer';
import Gallery from '../components/Gallery';

function Home() {
  const [products, setProducts] = useState([]);

  //   useEffect(() => {
  //   fetch('http://localhost:3005/api/products')
  //     .then(res => res.json())
  //     .then(data => setProducts(data))
  //     .catch(err => console.log(err));
  // }, []);


  return (
    <div className='home'>
      <Hero />
      <Gallery />
      <Testimonials />
      <Milestones />
    </div>
  );
}

export default Home;
