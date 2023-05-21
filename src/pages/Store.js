import React, { useState, useEffect } from 'react';

function Store() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch('/api/products');
      const data = await response.json();
      setProducts(data);
    }

    fetchProducts();
  }, []);

  return (
    <div className="gallery">
      {products.map((product) => (
        <img key={product.id} src={product.image} alt={product.name} />
      ))}
    </div>
  );
}

export default Store;

