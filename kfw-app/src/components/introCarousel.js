import React from 'react'
import FirstSlideImage from './introCarouselImages/test.png';
import SecondSlideImage from './introCarouselImages/test.png';
import ThirdSlideImage from './introCarouselImages/test.png';

const introCarousel = () =>{
    return(
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src= {FirstSlideImage} alt="First slide"></img>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src={SecondSlideImage} alt="Second slide"></img>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src={ThirdSlideImage} alt="Third slide"></img>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
    );
};
export default introCarousel;