import React, { useState } from 'react';
import '../styles/NavbarItem.css';

const NavbarItem = ({ id, title, imageUrl, url}) => {
    const [startX, setStartX] = useState(0);

    const handleMouseDown = (e) => {
        setStartX(e.clientX);
    };

    const handleMouseUp = (e) => {
        const endX = e.clientX;
        const threshold = 5; // Adjust this threshold as needed

        if (Math.abs(endX - startX) <= threshold) {
            e.preventDefault();
            // console.log('navbar mouse up');
            // window.location.href = `${url}`;
        }
    };

    return (
        <div
            className="navbar-item"
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
        >
            <div className="navbar-image-wrapper">
                <img src={imageUrl} alt={title} className="navbar-image"/>
            </div>
            <div className="navbar-info">
                <h3>{title}</h3>
            </div>
        </div>
    );
};

export default NavbarItem;
