import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../Card/Card.js';
import ShoppingImage from './cardImages/wineImage.jpg';
import ShoppingImage2 from './cardImages/wineImage2.jpg';
import ShoppingImage3 from './cardImages/comingsoonNEW3Shopping.jpg';
import './shoppingPage.css';
import BackgroundImage from './shopImage.png';
import { v4 as uuidv4 } from 'uuid';
import { firebase } from '../../firebase/firebase';

const Home = () => {


  const addToCart = async (item) => {
    try {
      const user = firebase.auth().currentUser;
      const userId = user ? user.uid : null;

      if (user && user.isAnonymous) {
        const anonymousUserId = firebase.auth().currentUser.uid;
        const itemId = uuidv4();
        const itemWithUserId = {
          ...item,
          itemId: itemId,
          userId: anonymousUserId
        };
        await firebase.firestore().collection('cartItems').doc(itemId).set(itemWithUserId);
      } else {
        const itemId = uuidv4();
        const itemWithoutUserId = {
          ...item,
          itemId: itemId
        };
        await firebase.firestore().collection('cartItems').doc(itemId).set(itemWithoutUserId);
      }
    } catch (error) {
      console.log('Error adding item to cart:', error);
    }
  };

  return (
    <div>
      <div className="heading-container mb-2">
        <img src={BackgroundImage} alt="collection header" style={{ width: '100%', opacity: '75%' }} />
        <div className="centered">Our Collection</div>
      </div>
      <div className='container-shopping '>
        <div className='imageArea'>
          <div className='row'>
            <div className='column'>
              <div className='image-container-shopping mb-5 mt-5 me-5 ms-5' >

                  <Card 
                    title='Red Blend'
                    imageUrl={ShoppingImage2}
                    body='A Blend of: SYRAH & CABERNET SAUVIGNON'
                    wineBlend = '/redblend'
                    // addToCart={() =>
                    //   addToCart({
                    //     name: 'Red Blend',
                    //     price: 200,
                    //     quantity: 1
                    //   })
                    // }
                  />

              </div>
            </div>
            <div className='column'>
              <div className='image-container-shopping mb-5 mt-5 me-5 ms-5'>

                  <Card
                    title='White Blend'
                    imageUrl={ShoppingImage}
                    body='A Blend of: CHENIN BLANC, SAUVIGNON BLANC & SÉMILLON'
                    wineBlend='/whiteblend'
                    
                  />


              </div>
            </div>
          </div>
          {/* <div className='image-container bottom-card'>
            <Card
              title='Check back soon!'
              imageUrl={ShoppingImage3}
              body='It is a surprise'
              addToCart={() =>
                addToCart({
                  name: 'Surprise Item',
                  price: 180,
                  quantity: 1
                })
              }
            />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
