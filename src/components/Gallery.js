import React from 'react';
import "../styles/Gallery.css"
import { Link, NavLink } from "react-router-dom";
import products from "../data/products"

const Gallery = () => {


  return (
    <section className="gallery-section">
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
  );
};

export default Gallery;



