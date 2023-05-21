import React from 'react';
import { useParams } from 'react-router-dom';
import "../styles/ProductDetails.css"
import products from '../data/products';

const ProductDetails = (props) => {
  const { id } = useParams();

  // Fetch the product details based on the ID
  const product = products.find(p => p.id === parseInt(id));
  console.log(product);

  const redirectToWhatsApp = () => {
    const phoneNumber = '+2347013957216';
    const message = `Hello Mo'Adunni, I would like to place an order for this product.\nProduct Name: ${product.name}\nProduct details: ${product.description}`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.location.href = url;
  };

  return (
    <div className="product-details">
      <div className="product-image">
        <img src={product.image} alt={product.name} className='' />
      </div>
      <div className="product-info">
        <h1>{product.name}</h1>
        <p>{product.description}</p>
        <p className="price">{product.price}</p>
        <button className="add-to-cart-btn text-sm" onClick={redirectToWhatsApp}>
          Order From Mo'Adunni Now
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
