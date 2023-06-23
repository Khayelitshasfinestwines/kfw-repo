import React, { useState, useEffect } from 'react';
import './introCarousel.css';
import FirstSlideImage from './introCarouselImages/icstoryimg.JPG';
import SecondSlideImage from './introCarouselImages/storyic.jpg';
import ThirdSlideImage from './introCarouselImages/testwinetastingintro.jpeg';

const IntroCarousel = () => {
  return (
    <div id="carouselExampleRide" className="carousel slide" data-bs-ride="true">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="imagecenter">
            <img src={FirstSlideImage} className="d-block w-100" alt="Shop Link" />
          </div>
          <div className="carousel-content">
            <h2>Taste Khayletsha's Finest</h2>
            <button type="button" class="btn btn-dark btn-lg carousel-content-button">Shop</button>
          </div>
        </div>

        <div className="carousel-item">
          <div className="imagecenter">
            <img src={SecondSlideImage} className="d-block w-100" alt="Story Link" />
          </div>
          <div className="carousel-content">
            <h2>Discover the Passion and History Infused in Every Bottle</h2>
            <button type="button" class="btn btn-dark btn-lg">Our Story</button>
          </div>
        </div>

        <div className="carousel-item">
          <div className="imagecenter">
            <img src={ThirdSlideImage} className="d-block w-100" alt="Wine Tasting Link" />
          </div>
          <div className="carousel-content">
            <h2>Experience our Way with the Best Pairings</h2>
            <button type="button" class="btn btn-dark btn-lg">Wine Tasting</button>
          </div>
        </div>
      </div>

      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
        <span className="custom-carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
        <span className="custom-carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default IntroCarousel;
