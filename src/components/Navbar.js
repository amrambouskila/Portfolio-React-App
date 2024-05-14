import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to="/" className="nav-item">Home</Link>
            <Link to="/resume" className="nav-item">Resume</Link>
            <Link to="/projects" className="nav-item">Projects</Link>
            <Link to="/contact" className="nav-item">Contact</Link>
        </nav>
    );
};

export default Navbar;
