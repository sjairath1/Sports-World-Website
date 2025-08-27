import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          <i className="fas fa-trophy"></i>
          <span>Elite Sports Hub</span>
        </Link>

        <ul className="navbar-links">
          <li>
            <Link 
              to="/" 
              className={location.pathname === '/' ? 'active' : ''}
              onClick={closeMobileMenu}
            >
              <i className="fas fa-home"></i>
              Home
            </Link>
          </li>
          <li>
            <Link 
              to="/soccer" 
              className={location.pathname === '/soccer' ? 'active' : ''}
              onClick={closeMobileMenu}
            >
              <i className="fas fa-futbol"></i>
              Soccer
            </Link>
          </li>
          <li>
            <Link 
              to="/basketball" 
              className={location.pathname === '/basketball' ? 'active' : ''}
              onClick={closeMobileMenu}
            >
              <i className="fas fa-basketball-ball"></i>
              Basketball
            </Link>
          </li>
        </ul>

        <button 
          className={`mobile-menu-btn ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <motion.div 
          className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ 
            opacity: isMobileMenuOpen ? 1 : 0, 
            y: isMobileMenuOpen ? 0 : -20 
          }}
          transition={{ duration: 0.3 }}
        >
          <Link to="/" onClick={closeMobileMenu}>
            <i className="fas fa-home"></i>
            Home
          </Link>
          <Link to="/soccer" onClick={closeMobileMenu}>
            <i className="fas fa-futbol"></i>
            Soccer
          </Link>
          <Link to="/basketball" onClick={closeMobileMenu}>
            <i className="fas fa-basketball-ball"></i>
            Basketball
          </Link>
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;
