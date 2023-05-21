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
    <div className="md:flex my-4">
      <div className="product-image">
        <img src={product.image} alt={product.name} className='' />
      </div>
      <div className="">
        <div className='flex-1 py-1'>
          <h1 className=''>{product.name}</h1>
          <hr />
          <p className='text-left'>{product.description}</p>
          <p className="price"><span>Price: {product.price}</span></p>
        </div>
        <button className="add-to-cart-btn text-sm h-[50px]" onClick={redirectToWhatsApp}>
          Order From Mo'Adunni Now
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
