import React, { useState, useEffect } from 'react';
import './introCarousel.css';
import FirstSlideImage from './introCarouselImages/testshop1.JPG';
import SecondSlideImage from './introCarouselImages/storyic.jpg';
import ThirdSlideImage from './introCarouselImages/testwinetastingintro.jpeg';
import {Link} from "react-router-dom"

const IntroCarousel = () => {

  const buttonScrollClick = ()=>{
    window.scrollTo(0,0)
  }
  return (
    <div id="carouselExampleRide" className="carousel slide" data-bs-ride="true">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="imagecenter">
            <img src={FirstSlideImage} className="d-block w-100" alt="Shop Link" />
          </div>
          <div className="carousel-content">
            <div className="first-slide-text">
            <h2>Taste Khayelitsha's Finest Here</h2>
            </div>
            <Link to = '/shopping'> 
            <button type="button" class="btn btn-dark btn-lg carousel-content-button" onClick={buttonScrollClick}>Shop</button>
            </Link>
          </div>
        </div>

        <div className="carousel-item">
          <div className="imagecenter">
            <img src={SecondSlideImage} className="d-block w-100" alt="Story Link" />
          </div>
          <div className="carousel-content">
            <h2>Discover the Passion and History Infused in Every Bottle</h2>
            <Link to='/story'>
            <button type="button" class="btn btn-dark btn-lg" onClick={buttonScrollClick}>Our Story</button>
            </Link>
          </div>
        </div>

        <div className="carousel-item">
          <div className="imagecenter">
            <img src={ThirdSlideImage} className="d-block w-100" alt="Wine Tasting Link" />
          </div>
          <div className="carousel-content">
          <h2>Reach out to learn more about the finest</h2>
            <Link to='/contact'>
            <button type="button" class="btn btn-dark btn-lg" onClick={buttonScrollClick}>Contact Us</button>
            </Link>

            {/*
            <h2>Experience our Wine with the Best Pairings</h2>
            <Link to='/tastings'>
            <button type="button" class="btn btn-dark btn-lg" onClick={buttonScrollClick}>Wine Tour</button>
            </Link>
            */}
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
