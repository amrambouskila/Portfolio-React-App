import React, { useState } from 'react';
import '../styles/ProjectItem.css';

const ProjectItem = ({ id, title, description, imageUrl, type}) => {
    const [startX, setStartX] = useState(0);

    const handleMouseDown = (e) => {
        setStartX(e.clientX);
    };

    const handleMouseUp = (e) => {
        const endX = e.clientX;
        const threshold = 5; // Adjust this threshold as needed

        if (Math.abs(endX - startX) <= threshold) {
            e.preventDefault();
            const projectPath = type === 'solo' ? 'solo' : 'coop';
            window.location.href = `/projects/${projectPath}/${id}`;
        }
    };

    return (
        <div
            className="project-item"
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
        >
            <div className="image-wrapper">
                <img src={imageUrl} alt={title} className="project-image"/>
            </div>
            <div className="project-info">
                <h3>{title}</h3>
            </div>
        </div>
    );
};

export default ProjectItem;
