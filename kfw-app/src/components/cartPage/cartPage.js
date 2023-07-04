import React, { useState, useEffect } from 'react';
import { firebase } from '../../firebase/firebase';
import CartItem from './cartitem';
import './cartPage.css';
import { v4 as uuidv4 } from 'uuid';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetch cart items and user on component mount
    firebase.auth().onAuthStateChanged((currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        fetchCartItems(currentUser.uid);
      } else {
        firebase
          .auth()
          .signInAnonymously()
          .catch((error) => {
            console.log('Error signing in anonymously:', error);
          });
      }
    });
  }, []);

  const fetchCartItems = async (userId) => {
    try {
      setIsLoading(true);

      const snapshot = await firebase
        .firestore()
        .collection('cartItems')
        .where('userId', '==', userId)
        .get();
      const items = snapshot.docs.map((doc) => doc.data());
      setCartItems(items);
      setIsLoading(false);
    } catch (error) {
      console.log('Error fetching cart items:', error);
      setIsLoading(false);
    }
  };

  const removeFromCart = async (item) => {
    if (user) {
      try {
        await firebase.firestore().collection('cartItems').doc(item.itemId).delete();
        fetchCartItems(user.uid);
      } catch (error) {
        console.log('Error removing item from cart:', error);
      }
    }
  };

  const increaseQuantity = async (item) => {
    if (user) {
      try {
        await firebase
          .firestore()
          .collection('cartItems')
          .doc(item.itemId)
          .update({ quantity: item.quantity + 1 });
        fetchCartItems(user.uid);
      } catch (error) {
        console.log('Error increasing item quantity:', error);
      }
    }
  };

  const decreaseQuantity = async (item) => {
    if (user && item.quantity > 1) {
      try {
        await firebase
          .firestore()
          .collection('cartItems')
          .doc(item.itemId)
          .update({ quantity: item.quantity - 1 });
        fetchCartItems(user.uid);
      } catch (error) {
        console.log('Error decreasing item quantity:', error);
      }
    }
  };

  const calculateTotal = () => {
    const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    return totalPrice.toFixed(2);
  };

  return (
    <div className="cart-container">
      <h1>Cart</h1>

      {isLoading ? (
        <p>Loading...</p>
      ) : cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <CartItem
              key={item.itemId}
              item={item}
              removeFromCart={removeFromCart}
              increaseQuantity={increaseQuantity}
              decreaseQuantity={decreaseQuantity}
            />
          ))}

          <div className="total-price">
            <p>Total: ZAR {calculateTotal()}</p>
          </div>

          <button type="button" className="btn btn-dark btn-lg mt-4 mb-5">
            Check Out
          </button>
        </div>
      )}
    </div>
  );
};

export default CartPage;
