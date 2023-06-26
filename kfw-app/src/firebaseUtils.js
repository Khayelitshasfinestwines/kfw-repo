import { auth, firestore } from './firebase/firebase';

// Function to get the current user ID
export const getCurrentUserId = () => {
  return auth.currentUser ? auth.currentUser.uid : null;
};

// Function to add an item to the cart
export const addToCart = async (item) => {
  const userId = getCurrentUserId();
  if (!userId) return;

  const cartRef = firestore.collection('users').doc(userId).collection('cart');

  try {
    await cartRef.add(item);
  } catch (error) {
    console.log('Error adding item to cart:', error);
  }
};

// Function to remove an item from the cart
export const removeFromCart = async (itemId) => {
  const userId = getCurrentUserId();
  if (!userId) return;

  const cartRef = firestore.collection('users').doc(userId).collection('cart');

  try {
    await cartRef.doc(itemId).delete();
  } catch (error) {
    console.log('Error removing item from cart:', error);
  }
};

// Function to get the cart items for the current user
export const getCartItems = async () => {
  const userId = getCurrentUserId();
  if (!userId) return [];

  const cartRef = firestore.collection('users').doc(userId).collection('cart');

  try {
    const snapshot = await cartRef.get();
    const cartItems = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    return cartItems;
  } catch (error) {
    console.log('Error getting cart items:', error);
    return [];
  }
};
