import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import shopping from '../assets/shopping.jpg';
import axios from 'axios';

const Home = ({ addToCart }) => {
  const [products, setProducts] = useState([]);
  const [quantity, setQuantity] = useState([]);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
    .then(response => {
      setProducts(response.data);
    })
    .catch(error => console.error("Error fetching products:", error));
  }, []);

  const handleQuantityChange = (productId, value) => {
    setQuantity((prevQuantity) => ({
      ...prevQuantity,
      [productId]: value
    }));
  };

  const increment = (productId) => {
    setQuantity((prevQuantity) => ({
      ...prevQuantity,
      [productId]: (prevQuantity[productId] || 0) + 1
    }));
  };

  const decrement = (productId) => {
    setQuantity((prevQuantity) => ({
      [productId]: Math.max((prevQuantity[productId] || 0) - 1, 0)
    }));
  };

  const handleAddToCart = (product) => {
    const productQuantity = quantity[productId] || 1;
    addToCart(product, productQuantity);
  };

  return (
    <div>
      <h2>Home</h2>
      <img src={shopping} alt="Shopping Image" />
      <div className="product-list">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <h3>{product.title}</h3>
            <img src={product.image} alt={product.title} />
            <div>
              <button onClick={() => decrement(product.id)}>-</button>
              <input
              type="number"
              value={quantity[product.id] || 1}
              onChange={(e) => handleQuantityChange(product.id, Number(e.target.value))}
              min="1"
               />
               <button onClick={() => increment(product.id)}>+</button>
            </div>
            <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
