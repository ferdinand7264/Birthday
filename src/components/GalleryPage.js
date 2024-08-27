// GalleryPage.js
import React from 'react';
import photo1 from '../assets/images/mem1.jpg'; // Import images
import photo2 from '../assets/images/mem2.jpg'; // Import images
import photo3 from '../assets/images/mem3.jpg'; // Import images
import photo4 from '../assets/images/mem4.jpg'; // Import images
import photo5 from '../assets/images/mem5.jpg';
import './GalleryPage.css';

const GalleryPage = () => {
    const images = [photo1, photo2, photo3, photo4, photo5];

    return (
        <div className="gallery-page">
            <h2>Our Memories</h2>
            <div className="gallery-grid">
                {images.map((image, index) => (
                    <img key={index} src={image} alt="memory" className="gallery-image" />
                ))}
            </div>
        </div>
    );
};

export default GalleryPage;
