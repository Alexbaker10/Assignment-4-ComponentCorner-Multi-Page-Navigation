import React from 'react';
import './Header.css';

function Header({ storeName, cartCount }) {
  return (
    <header className="header">
      <div className="header-container">
        <h1 className="logo">{storeName}</h1>
        <nav className="nav-menu">
          <a href="#" className="nav-link">Shop</a>
          <a href="#" className="nav-link">About</a>
          <a href="#" className="nav-link">Contact</a>
          
          <div className="cart-container">
            <span className="cart-icon">🛒</span>
            {cartCount > 0 && (
              <span className="cart-badge">{cartCount}</span>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;