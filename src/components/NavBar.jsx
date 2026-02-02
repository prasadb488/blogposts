import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import './NavBar.css';

const NavBar = ({ onSearch }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <nav className="navbar" aria-label="Main Navigation">
            <Link to="/" className="navbar-logo" onClick={closeMenu}>
                Blog Application
            </Link>

            <button
                className={`hamburger ${isMenuOpen ? 'open' : ''}`}
                onClick={toggleMenu}
                aria-label="Toggle navigation menu"
                aria-expanded={isMenuOpen}
            >
                <span></span>
                <span></span>
                <span></span>
            </button>

            <div className={`navbar-links ${isMenuOpen ? 'open' : ''}`}>
                <Link to="/" className="nav-link" onClick={closeMenu}>
                    Home
                </Link>
                <Link to="/create" className="nav-link" onClick={closeMenu}>
                    New Post
                </Link>
                <SearchBar onSearch={onSearch} />
            </div>
        </nav>
    );
};

export default NavBar;
