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
    <div className="md:flex mt-10 md:my-40 md:justify-center md:items-center px-2">
      <div className="product-image md:flex-1 px-5">
        <img src={product.image} alt={product.name} className='' />
      </div>
      <div className="md:flex-1">
        <div className='flex-1 py-1'>
          <h1 className='text-4xl'>{product.name}</h1>
          <hr />
          <p className='text-left'>{product.description}</p>
          <p className="price"><span>Price: {product.price}</span></p>
        </div>
        <button className="add-to-cart-btn text-sm h-[50px] mb-10" onClick={redirectToWhatsApp}>
          Order From Mo'Adunni Now
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
