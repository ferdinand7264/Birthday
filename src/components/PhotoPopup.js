// PhotoPopup.js
import React, { useState, useEffect } from 'react';
import './PhotoPopup.css';

const PhotoPopup = ({ images }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 1000);

        return () => clearInterval(interval);
    }, [images]);

    return (
        <div className="photo-popup-container">
            {images.map((image, index) => (
                <img
                    key={index}
                    src={image}
                    alt="popup"
                    className={`photo-popup ${index === currentImageIndex ? 'visible' : 'hidden'}`}
                />
            ))}
        </div>
    );
};

export default PhotoPopup;
