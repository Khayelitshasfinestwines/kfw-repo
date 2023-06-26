import React from 'react';
import './tastings.css';
import TastingImage from './tastingsimages/newtasting2.jpeg';
import { Link } from 'react-router-dom';

const Tastings = () => {
  return (
    <div className="tasting-inner">
      <div className="background-image">
        <div className="imagecenter">
          <div className="tasting-content">
            <div className="first-slide-text">
              <h2>Experience our wine while being immersed in the culture of Khayelitsha.</h2>
            </div>
            <Link to="/tastings">
              <button type="button" className="btn btn-dark btn-lg">Book Now</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tastings;
