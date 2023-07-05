import React from 'react';
import './shopping.css';
import ShoppingImage from './shoppingImages/wineImage2NEW.jpg';
import ShoppingImage2 from './shoppingImages/wineImageNEW.jpg';
import ShoppingImage3 from './shoppingImages/wineImage3NEW.jpg';
import { Link } from 'react-router-dom';

const Shopping = () => {
  const buttonScrollClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div>
      <div className='container'>
        <div className='shoppingFont1'>
          Our Collection
        </div>
       
        <div className='centerText'>
         Wines we have available! We have a new product coming soon, stay tuned for future updates. 
        </div>

        <div className='imageArea-home'>
          <div className='image-container2-home'>
            <div className='image-card'>
              <img src={ShoppingImage} alt='Shopping Image' className='small-image' />
              <div className='image-card-back'>
                <div className='image-card-text'>
                  RED BLEND: Our signature mix of Syrah and Cabernet Sauvignon
                </div>
              </div>
              <div className='image-card-text-bottom'>
                RED BLEND
              </div>
            </div>
          </div>

          <div className='image-container2-home'>
            <div className='image-card'>
              <img src={ShoppingImage2} alt='Shopping Image' className='small-image2' />
              <div className='image-card-back'>
                <div className='image-card-text'>
                  WHITE BLEND: A perfect combination of Chenin Blanc, Sauvignon Blanc and Sèmillon
                </div>
              </div>
              <div className='image-card-text-bottom'>
                WHITE BLEND
              </div>
            </div>
          </div>

          <div className='image-container2-home'>
            <div className='image-card'>
              <img src={ShoppingImage3} alt='Shopping Image' className='small-image' />
              <div className='image-card-back'>
                <div className='image-card-text'>
                  <div className='coming-soon-overlay'>
                    New Products Coming Soon!
                  </div>
                </div>
              </div>
              <div className='image-card-text-bottom'>
                COMING SOON
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='centerText'>
        <Link to='/shopping'>
          <button type='button' className='btn btn-dark btn-lg mt-4 mb-5' onClick={buttonScrollClick}>
            Shop
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Shopping;
