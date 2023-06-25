import React from 'react';
import './shopping.css';
import ShoppingImage from './shoppingImages/wineImage2.jpg';
import ShoppingImage2 from './shoppingImages/wineImage.jpg';
import ShoppingImage3 from './shoppingImages/wineImage3.jpg';
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
         Wines we have available! We have a surprise third wine coming soon. 
        </div>

        <div className='imageArea'>
          <div className='image-container2'>
            <div className='image-card'>
              <img src={ShoppingImage} alt='Shopping Image' className='small-image' />
              <div className='image-card-back'>
                <div className='image-card-text'>
                  A Blend of: SYRAH & CABERNET SAUVIGNON
                </div>
              </div>
            </div>
          </div>

          <div className='image-container2'>
            <div className='image-card'>
              <img src={ShoppingImage2} alt='Shopping Image' className='small-image2' />
              <div className='image-card-back'>
                <div className='image-card-text'>
                  A Blend of: CHENIN BLANC, SAUVIGNON BLANC & SÉMILLON
                </div>
              </div>
            </div>
          </div>

          <div className='image-container2'>
            <div className='image-card'>
              <img src={ShoppingImage3} alt='Shopping Image' className='small-image' />
              <div className='image-card-back'>
                <div className='image-card-text'>
                  <div className='coming-soon-overlay'>
                    Coming Soon!
                  </div>
                </div>
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
