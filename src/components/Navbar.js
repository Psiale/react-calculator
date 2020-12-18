import React from 'react';
import { Link } from 'react-router-dom';
import '../navbar.css';

function Navbar() {
  return (
    <div className="navbar-container">
      <div className="title-container">
        <h2>Math Magicians</h2>
      </div>
      <div className="link-container">
        <Link to="/">Home </Link>
        <span> | </span>
        <Link to="/Calculator">About Us </Link>
        <span> | </span>
        <Link to="/Quote">Quote </Link>
        <span> | </span>
      </div>
    </div>
  );
}

export default Navbar;
