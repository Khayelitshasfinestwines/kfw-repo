import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../Card/Card.js';
import ShoppingImage from './cardImages/wineImage.jpg';
import ShoppingImage2 from './cardImages/wineImage2.jpg';
import ShoppingImage3 from './cardImages/wineImage3.jpg';
import { firebase } from '../../firebase/firebase.js';
import { v4 as uuidv4 } from 'uuid';
import './shoppingPage.css';

const Home = () => {
  const addToCart = async () => {
    try {
      const user = firebase.auth().currentUser;
      const userId = user ? user.uid : null;

      if (user && user.isAnonymous) {
        // If the user is anonymous, use the anonymous user ID as the userId
        const anonymousUserId = firebase.auth().currentUser.uid;
        const itemId = uuidv4(); // Generate a unique itemId using uuid
        const item = {
          itemId: itemId,
          name: 'White Blend',
          price: 220,
          quantity: 1,
          userId: anonymousUserId // Use the anonymous user ID as the userId
        };
        await firebase.firestore().collection('cartItems').doc(itemId).set(item);
      } else {
        // If the user is authenticated or not anonymous, add the item without the userId
        const itemId = uuidv4(); // Generate a unique itemId using uuid
        const item = {
          itemId: itemId,
          name: 'White Blend',
          price: 220
        };
        await firebase.firestore().collection('cartItems').doc(itemId).set(item);
      }
    } catch (error) {
      console.log('Error adding item to cart:', error);
    }
  };

  return (
    <div>
      <div className='container'>
        <div className='imageArea'>
          <div className='image-container'> 
            <Link to="/redwine">
              <Card
                title='Red Blend'
                imageUrl={ShoppingImage2}
                body='A Blend of: SYRAH & CABERNET SAUVIGNON'
                addToCart={addToCart}
              />
            </Link>
          </div>
          
          <div className='image-container2'>
          <Link to="/whitewine">
            <Card
              title='White Blend'
              imageUrl={ShoppingImage}
              body='A Blend of: CHENIN BLANC, SAUVIGNON BLANC & SÉMILLON'
              addToCart={addToCart}
            />
            </Link>
          </div>
          
          <div className='image-container2'>
            <Card
              title='Check back soon!'
              imageUrl={ShoppingImage3}
              body='It is a surprise'
              addToCart={addToCart}
            />
          </div>
        </div>
      </div>

      <div className='centerText'>
        <button type="button" className="btn btn-dark btn-lg mt-4 mb-5">Check Out</button>
      </div>
    </div>
  );
};

export default Home;
