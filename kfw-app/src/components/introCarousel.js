import React, { useState } from 'react';
import FirstSlideImage from './introCarouselImages/test.png';
import SecondSlideImage from './introCarouselImages/wine.jpg';
import ThirdSlideImage from './introCarouselImages/test.png';

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
      <ol className="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" className={currentSlide === 0 ? 'active' : ''}></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1" className={currentSlide === 1 ? 'active' : ''}></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2" className={currentSlide === 2 ? 'active' : ''}></li>
      </ol>
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
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next" onClick={handleNextSlide}>
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
};

export default IntroCarousel;
