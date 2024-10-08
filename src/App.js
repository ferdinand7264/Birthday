import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import GalleryPage from './components/GalleryPage';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/Birthday/" element={<HomePage />} />
                <Route path="/Birthday/gallery" element={<GalleryPage />} />
            </Routes>
        </Router>
    );
};

export default App;
