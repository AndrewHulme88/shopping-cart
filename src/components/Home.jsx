import React from 'react';
import { Link } from 'react-router-dom';
import shopping from '../assets/shopping.jpg';

const Home = () => {
  return (
    <div>
      <h2>Home</h2>
      <img src={shopping} alt="Shopping Image" />
    </div>
  );
}

export default Home;
