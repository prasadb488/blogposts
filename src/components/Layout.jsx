import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import './Layout.css';

const Layout = ({ children, onSearch }) => {
    return (
        <div className="layout">
            <header>
                <NavBar onSearch={onSearch} />
            </header>
            <main className="main-content">
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
