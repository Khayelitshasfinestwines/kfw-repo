import React, { useState, useEffect } from 'react';
import { firebase } from '../../firebase/firebase';
import CartItem from './cartitem';
import './cartPage.css';
import { v4 as uuidv4 } from 'uuid';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
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
      const snapshot = await firebase
        .firestore()
        .collection('cartItems')
        .where('userId', '==', userId)
        .get();
      const items = snapshot.docs.map((doc) => doc.data());
      setCartItems(items);
    } catch (error) {
      console.log('Error fetching cart items:', error);
    }
  };
  

  const addToCart = async (item) => {
    if (user) {
      try {
        await firebase.firestore().collection('cartItems').add({
          userId: user.uid,
          ...item,
        });
        fetchCartItems(user.uid); // Fetch updated cart items
      } catch (error) {
        console.log('Error adding item to cart:', error);
      }
    } else {
      firebase
        .auth()
        .signInAnonymously()
        .then((response) => {
          const { user } = response;
          setUser(user);
          fetchCartItems(user.uid);
          addToCart(item); // Retry adding the item after signing in anonymously
        })
        .catch((error) => {
          console.log('Error signing in anonymously:', error);
        });
    }
  };
  

  const removeFromCart = async (item) => {
    if (user) {
      try {
        const snapshot = await firebase
          .firestore()
          .collection('cartItems')
          .where('userId', '==', user.uid)
          .where('title', '==', item.title)
          .get();
        snapshot.docs.forEach((doc) => doc.ref.delete());
        fetchCartItems(user.uid); // Fetch updated cart items
      } catch (error) {
        console.log('Error removing item from cart:', error);
      }
    }
  };

  const calculateTotal = () => {
    const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);
    return totalPrice.toFixed(2);
  };

  return (
    <div className="cart-container">
      <h1>Cart</h1>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <CartItem key={item.title} item={item} removeFromCart={removeFromCart} />
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
