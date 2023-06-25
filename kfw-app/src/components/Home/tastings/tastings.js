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
              <h2>Experience the culture of Khayletisha with your wine with a tasting in the township itself.</h2>
            </div>
            <Link to="/tasting">
              <button type="button" className="btn btn-dark btn-lg tasting-button">Book Now</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tastings;
