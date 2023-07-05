import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../Card/Card.js';
import ShoppingImage from './cardImages/wineImage.jpg';
import ShoppingImage2 from './cardImages/wineImage2.jpg';
import ShoppingImage3 from './cardImages/comingsoonNEW3Shopping.jpg';
import './shoppingPage.css';
import BackgroundImage from './shopImage.png'

const Home = () => {
  return (
    <div>
      <div className="heading-container mb-2">
      <img src={BackgroundImage} alt="collection header" style={{ width: '100%', opacity: '75%'}} />
      <div className="centered">Our Collection</div>
            </div>
      <div className='container '>
        <div className='imageArea'>

          <div className='row'>
          <div className='column'>

          <div className='image-container'> 
            <Link to="/redwine">
              <Card
                title='Red Blend'
                imageUrl={ShoppingImage2}
                body='A Blend of: SYRAH & CABERNET SAUVIGNON'
              />
            </Link>
          </div>
          </div>
          
          <div className='column'>
          <div className='image-container'>
          <Link to="/whitewine">
            <Card
              title='White Blend'
              imageUrl={ShoppingImage}
              body='A Blend of: CHENIN BLANC, SAUVIGNON BLANC & SÉMILLON'
            />
            </Link>
           </div>
           </div>
           </div>


          <div className='image-container bottom-card'>
            <Card
              title='Check back soon!'
              imageUrl={ShoppingImage3}
              body='It is a surprise'
            />
          </div>


        </div>
      </div>

      <div className='centerText'>
        <Link className="btn btn-dark btn-lg mt-4 mb-5" to="/cart" >Check Out</Link>
      </div>
    </div>
  );
};

export default Home;
