import React from 'react';
import './whiteWine.css';
import StoryImage from './whitewineImages/whitewine.jpg';
import { Link } from 'react-router-dom';
import { firebase } from '../../../firebase/firebase';
import { v4 as uuidv4 } from 'uuid';

const WhiteWine = () => {
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
      //DON'T TOUCH ANYTHING ABOVE!!!!!



  return (
    <div>
      <div className="twocolumns">
          <div className = "column1">
            <img src={StoryImage} alt="Story Image" />
          </div>

          <div>
            <p><em>The Saxenburg Select Shiraz 2015 is an incredible expression of Shiraz and a true showcase of the heights the variety can reach on Saxenburg soils. An impressive nose showing cranberry, black pepper, blueberries and a hint of dried herbs. The palate is beautifully focused and tight, bringing balance to the incredible structure and dense tannins. The oak is beautifully integrated and this wine develops wonderfully with time in the glass – revealing more of its beauty and complexity over time.</em></p>
            <hr/>

            <p><em>These extraordinary wines, have been stored and matured under optimal conditions in our Vinotéque, for you to get the very best out of your fine wine experience.</em></p>
            <div className="centerText">
              <button type="button" className="btn btn-dark btn-lg mt-4 mb-5" onClick={addToCart}>
                Add to Cart
              </button>
          </div>
        </div>
    </div>

    </div>

  /*
    <>
      <div className="container2">
        <div className="column1">
          <div>
            <img src={StoryImage} alt="Story Image" style={{ width: '500px' }} />
          </div>
        </div>

        <div className="column2" >
        <h3>
White Blend
  
</h3>
<p class="lead">
  R 220
</p>

          <br />
          <br />
          <p><em>Khayelitsa's White Blend is an enchanting wine that showcases the artful blending of different white grape varieties sourced from the esteemed Khayelitsa vineyards. With its alluring aromas, it delights the senses with notes of tropical fruits, citrus blossoms, and a touch of honeyed sweetness. The palate is a harmonious balance of vibrant flavors, where juicy pineapple, ripe peach, and zesty lemon intertwine with subtle hints of floral undertones. The wine's refreshing acidity adds a lively zest, while its silky texture provides a pleasing mouthfeel. Crafted with finesse, the oak influence is delicately integrated, enhancing the wine's complexity without overpowering its inherent elegance.</em></p>
        <hr/>

        <p><em>These extraordinary wines, have been stored and matured under optimal conditions in our Vinotéque, for you to get the very best out of your fine wine experience.</em></p>
        <div className="centerText">
        <button type="button" className="btn btn-dark btn-lg mt-4 mb-5" onClick={addToCart}>
          Add to Cart
        </button>
      </div>
        </div>
      </div>

   
    </>
    */
  );
};

export default WhiteWine;
