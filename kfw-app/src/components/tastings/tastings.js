import React from 'react';
import './tastings.css';
import TastingImage from './tastingsimages/tastingplaceholder.jpg';

const Tastings = () => {
  return (
    <div className="container">
      <div className="image-container">
        <img src={TastingImage} alt="Tasting" className="image" />
        <div className="overlay">
        <p className = "header">Wine Tastings</p>
          <p className="text">Experience the culture of Khayletisha with your wine with a tasting in the township itself.</p>
          <button className = "button"> Book Now </button>
        </div>
      </div>
    </div>
  );
};

export default Tastings;
