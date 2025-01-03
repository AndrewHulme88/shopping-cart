import React from 'react';
import { Link } from 'react-router-dom';
import '../Navbar.css';

const Navbar = ({ cartCount}) => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/cart">Shopping Cart ({cartCount})</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
