import React from 'react';
import { Link } from 'react-router-dom';
import navbar from './navbar.module.css';

const Navbar = () => {

    return (
      <nav className={navbar.navbar}>
        <div className={navbar.links}>
          <Link to="/">Home</Link>
        </div>
      </nav>
    );
};

export default Navbar;