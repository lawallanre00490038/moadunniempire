import React from 'react';
import navbarStyles from '../styles/Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
        <div className="logo">
            <h1>Mo'Adunni Empire</h1>
        </div>
        <ul className="navbarLinks">
            <li className="navbarLink">
            <a href="/">Home</a>
            </li>
            <li className="navbarLink">
            <a href="/products">Products</a>
            </li>
            <li className="navbarLink">
            <a href="/blog">Blog</a>
            </li>
            <li className="navbarIcon">
              <a href="/cart">
                  <i className="fa fa-shopping-cart"></i>
              </a>
            </li>
             {/* <li className="cartIcon">
              <Link to="/cart">
                <FaShoppingCart />
                {cartItems.length > 0 && (
                  <span className={navbarStyles.cartCount}>{cartItems.length}</span>
                )}
              </Link>
            </li> */}
        </ul>
    </nav>
  );
}

export default Navbar;
