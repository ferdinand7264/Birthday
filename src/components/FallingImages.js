import React, { useEffect } from 'react';
import './FallingImages.css';

const FallingImages = ({ imageSrcs }) => {
    useEffect(() => {
        const numberOfImages = 10; // Reduced to 10 instances
        const container = document.querySelector('.falling-images-container');

        for (let i = 0; i < numberOfImages; i++) {
            const img = document.createElement('img');
            const randomImage = imageSrcs[Math.floor(Math.random() * imageSrcs.length)];
            img.src = randomImage;
            img.className = 'falling-image';
            img.style.left = `${Math.random() * 100}vw`;
            img.style.animationDelay = `${Math.random() * 2}s`;
            img.style.animationDuration = `${Math.random() * 3 + 2}s`;
            container.appendChild(img);
        }
    }, [imageSrcs]);

    return <div className="falling-images-container"></div>;
};

export default FallingImages;
