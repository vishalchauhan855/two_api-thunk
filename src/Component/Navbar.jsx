// Component/Navbar.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        {/* Brand/Logo */}
        <Link className="navbar-brand" to="/">
          <i className="bi bi-house-door me-2"></i>
          My App
        </Link>
        
        {/* Mobile Toggle Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link 
                className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} 
                to="/"
              >
                <i className="bi bi-list-ul me-1"></i>
                Home List
              </Link>
            </li>
            
            <li className="nav-item">
              <Link 
                className={`nav-link ${location.pathname === '/HomeForm' ? 'active' : ''}`} 
                to="/HomeForm"
              >
                <i className="bi bi-plus-circle me-1"></i>
                Home Form
              </Link>
            </li>
             <li className="nav-item">
              <Link 
                className={`nav-link ${location.pathname === '/WatchLater' ? 'active' : ''}`} 
                to="/WatchLater"
              >
               <i className="bi bi-clock-history me-1"></i>
               Watch Later
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className={`nav-link ${location.pathname === '/WatchMovie' ? 'active' : ''}`} 
                to="/WatchMovie"
              >
               <i className="bi bi-clock-history me-1"></i>
               Watch Later Movie's
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;