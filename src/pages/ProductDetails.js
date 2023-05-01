import React from 'react';
import { useParams } from 'react-router-dom';
import "../styles/ProductDetails.css"
import products from '../data/products';

const ProductDetails = (props) => {
  const { id } = useParams();


  // Fetch the product details based on the ID
  const product = products.find(p => p.id === parseInt(id));

  return (
    <div className="product-details">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="product-info">
        <h1>{product.name}</h1>
        <p>{product.description}</p>
        <p className="price">{product.price}</p>
        <button className="add-to-cart-btn">Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductDetails;

