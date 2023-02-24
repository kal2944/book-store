import React from 'react';
import './navBar.css';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <div className="nav">
      <ul className="nav-links">
        <li><Link className="logo" to="/">BookStore CMS</Link></li>
        <li><Link className="links" to="/">BOOKS</Link></li>
        <li><Link className="links" to="/categories">CATEGORIES</Link></li>
      </ul>
      <ul className="icon">
        <li><Link className="user" to="/user"><FaUserCircle /></Link></li>
      </ul>
    </div>
  );
}

export default Nav;
