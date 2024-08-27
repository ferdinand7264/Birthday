// HomePage.js
import React from 'react';
import PhotoPopup from './PhotoPopup';
import FallingImages from './FallingImages';
import { useNavigate } from 'react-router-dom';
import frontImage from '../assets/images/front.jpg'; // Import images
import fall1 from '../assets/images/fall1.png';
import fall2 from '../assets/images/fall2.png';
import './HomePage.css';

const HomePage = () => {
    const navigate = useNavigate();
    const images = [frontImage];
    const fallingImages = [fall1, fall2];

    return (
        <div className="home-page">
            <FallingImages imageSrcs={fallingImages} />
            <h1>Happy Birthday, [Her Name]!</h1>
            <PhotoPopup images={images} />
            <p className="message">Wishing you a day filled with love and joy!</p>
            <button className="gallery-button" onClick={() => navigate('/gallery')}>Our Memories</button>
        </div>
    );
};

export default HomePage;
