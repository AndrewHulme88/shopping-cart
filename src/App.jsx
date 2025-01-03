import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import ShoppingCart from './components/ShoppingCart';
import Navbar from './components/Navbar';
import './App.css'

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product, quantity) => {
    setCart((prevCart) => {
      const updatedCart = [...prevCart];
      const existingProduct = updatedCart.find(item.id === product.id)

      if (existingProduct) {
        existingProduct.quantity += quantity;
      }
      else
      {
        updatedCart.push({ ...product, quantity});
      }

      return updatedCart;
    });
  };

  return (
    <Router>
      <Navbar cartCount={cart.reduce((total, item) => total + item.quantity, 0)} />
      <Routes>
        <Route path="/" element={<Home addToCart={addToCart} />} />
        <Route path="/cart" element={<ShoppingCart cart={cart} />} />
      </Routes>
    </Router>
  );
}

export default App
