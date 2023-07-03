import React from React;
import { firebase } from '../../firebase/firebase';
import CartItem from './cartitem';
import './cartPage.css';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
        fetchCartItems(user.uid);
      } else {
        setUser(null);
        const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        setCartItems(storedCartItems);
      }
    });

    return () => unsubscribe();
  }, []);

  const fetchCartItems = async (userId) => {
    try {
      const snapshot = await firebase.firestore().collection('cartItems').where('userId', '==', userId).get();
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
      } catch (error) {
        console.log('Error adding item to cart:', error);
      }
    } else {
      const updatedCartItems = [...cartItems, item];
      setCartItems(updatedCartItems);
      localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
    }
  };

  const removeFromCart = async (item) => {
    if (user) {
      try {
        const snapshot = await firebase.firestore().collection('cartItems').where('userId', '==', user.uid).where('title', '==', item.title).get();
        snapshot.docs.forEach((doc) => doc.ref.delete());
      } catch (error) {
        console.log('Error removing item from cart:', error);
      }
    } else {
      const updatedCartItems = cartItems.filter((cartItem) => cartItem.title !== item.title);
      setCartItems(updatedCartItems);
      localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
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
            <p>Total: ${calculateTotal()}</p>
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
