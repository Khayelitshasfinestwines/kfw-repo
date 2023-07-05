import React from 'react';
import './redWine.css';
import StoryImage from './redwineImages/storyimage1.jpg';
import { Link } from 'react-router-dom';
import { firebase } from '../../../firebase/firebase';
import { v4 as uuidv4 } from 'uuid';

const RedWine = () => {
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
          name: 'Red Blend',
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
          name: 'Red Blend',
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
          <h1 className='wine-title mb-5'>Red Blend </h1>
            <p><em>Khayelitsa's Red Blend is an extraordinary wine that captures the essence of the renowned Khayelitsa vineyards, skillfully blending different grape varieties to create a symphony of flavors. With a captivating bouquet, it unfolds a mesmerizing array of aromas, including luscious ripe cherries, vibrant blackcurrants, delicate hints of exotic spices, and a subtle touch of earthiness. On the palate, it showcases impeccable balance and finesse, seamlessly marrying its robust structure with velvety tannins that caress the senses. The integration of oak is executed with artistry, adding a gentle nuance and enhancing the wine's overall character without overpowering its inherent charm. As you indulge in this wine and allow it to breathe, it gradually unveils a complex tapestry of flavors, offering layers of intrigue and delight with every sip. </em></p>
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
Red Blend
  
</h3>
<p class="lead">
  R 220
</p>

          <br />
          <br />
          <p><em>Khayelitsa's Red Blend is an extraordinary wine that captures the essence of the renowned Khayelitsa vineyards, skillfully blending different grape varieties to create a symphony of flavors. With a captivating bouquet, it unfolds a mesmerizing array of aromas, including luscious ripe cherries, vibrant blackcurrants, delicate hints of exotic spices, and a subtle touch of earthiness. On the palate, it showcases impeccable balance and finesse, seamlessly marrying its robust structure with velvety tannins that caress the senses. The integration of oak is executed with artistry, adding a gentle nuance and enhancing the wine's overall character without overpowering its inherent charm. </em></p>
        <hr/>

        <p><em>These extraordinary wines, have been stored and matured under optimal conditions , for you to get the very best out of your fine wine experience.</em></p>
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

export default RedWine;
