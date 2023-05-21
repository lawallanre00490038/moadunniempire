import React from 'react';
import "../styles/Gallery.css"
import { Link, NavLink } from "react-router-dom";
import products from "../data/products"

const Gallery = () => {


  return (
    <>
      <h1 className="text-center p-3 text-3xl font-extrabold">See Our Gallery</h1>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#4c0082" fill-opacity="1" d="M0,160L30,154.7C60,149,120,139,180,128C240,117,300,107,360,122.7C420,139,480,181,540,186.7C600,192,660,160,720,144C780,128,840,128,900,138.7C960,149,1020,171,1080,165.3C1140,160,1200,128,1260,128C1320,128,1380,160,1410,176L1440,192L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path></svg>

      <section className="gallery-section" id="gallery">
      {products.map((product) => (
        <div className="gallery-item" key={product.id}>
          <Link to={`/productDetails/${product.id}`} className='link'>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <button className="more-details-btn">More Details</button>
          </Link>
        </div>
      ))}
    </section>
    <svg className='md:w-100' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#4c0082" fill-opacity="1" d="M0,224L20,202.7C40,181,80,139,120,149.3C160,160,200,224,240,234.7C280,245,320,203,360,192C400,181,440,203,480,186.7C520,171,560,117,600,117.3C640,117,680,171,720,192C760,213,800,203,840,192C880,181,920,171,960,192C1000,213,1040,267,1080,272C1120,277,1160,235,1200,229.3C1240,224,1280,256,1320,272C1360,288,1400,288,1420,288L1440,288L1440,0L1420,0C1400,0,1360,0,1320,0C1280,0,1240,0,1200,0C1160,0,1120,0,1080,0C1040,0,1000,0,960,0C920,0,880,0,840,0C800,0,760,0,720,0C680,0,640,0,600,0C560,0,520,0,480,0C440,0,400,0,360,0C320,0,280,0,240,0C200,0,160,0,120,0C80,0,40,0,20,0L0,0Z"></path></svg>
    </>
    
  );
};

export default Gallery;



