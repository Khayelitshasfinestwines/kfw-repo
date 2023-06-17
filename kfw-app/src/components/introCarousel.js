import React, { useState } from 'react';
import './introCarousel.css'
import FirstSlideImage from './introCarouselImages/test.png';
import SecondSlideImage from './introCarouselImages/wine.jpg';
import ThirdSlideImage from './introCarouselImages/Lindile-Ndzaba-(11-of-13).jpg';

const IntroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? 2 : prevSlide - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 2 ? 0 : prevSlide + 1));
  };

  return (
    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
      <div className="carousel-inner">
        <div className={`carousel-item ${currentSlide === 0 ? 'active' : ''}`}>
          <img className="d-block w-100" src={FirstSlideImage} alt="First slide" />
        </div>
        <div className={`carousel-item ${currentSlide === 1 ? 'active' : ''}`}>
          <img className="d-block w-100" src={SecondSlideImage} alt="Second slide" />
        </div>
        <div className={`carousel-item ${currentSlide === 2 ? 'active' : ''}`}>
          <img className="d-block w-100" src={ThirdSlideImage} alt="Third slide" />
        </div>
      </div>
      <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev" onClick={handlePrevSlide}>
        <span className="custom-carousel-control-prev-icon" aria-hidden="true"></span>
      </a>
      <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next" onClick={handleNextSlide}>
        <span className="custom-carousel-control-next-icon" aria-hidden="true"></span>
      </a>
    </div>
  );
};

export default IntroCarousel;
