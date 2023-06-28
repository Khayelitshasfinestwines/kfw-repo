import React, { useState } from 'react';
import './newsletter.css';
import { firestore } from '../../../firebase/firebase';

const handleSubscribe = (firstName, lastName, email, setFirstName, setLastName, setEmail, setSubscriptionStatus) => {
  // Create a new document in the 'newsletter_subscribers' collection
  console.log("been clicked");
  firestore
    .collection('newsletter_subscribers')
    .add({
      firstName,
      lastName,
      email,
    })
    .then(() => {
      // Reset the form after successful submission
      setFirstName('');
      setLastName('');
      setEmail('');
      setSubscriptionStatus(true); // Set subscription status to true
    })
    .catch((error) => {
      console.error('Error adding subscriber:', error);
    });
};

const Newsletter = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [subscriptionStatus, setSubscriptionStatus] = useState(false); // Initialize subscription status as false

  return (
    <div>
      <h1 className="newsletterheader mt-5">Subscribe to our newsletter</h1>
      <p className="newslettersubheader">Stay up to date with the latest news and offerings</p>
      <div className="overallformcontainer">
        <input
          class="form-control formcontainer"
          type="text"
          placeholder="First Name"
          aria-label="first name input"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          class="form-control formcontainer"
          type="text"
          placeholder="Last Name"
          aria-label="last name input"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <input
          class="form-control formcontainer"
          type="text"
          placeholder="Email Address"
          aria-label="email input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="subscribebutton">
        <button
          type="button"
          class="btn btn-dark btn-lg mt-4 mb-5"
          onClick={() =>
            handleSubscribe(firstName, lastName, email, setFirstName, setLastName, setEmail, setSubscriptionStatus)
          }
        >
          Subscribe
        </button>
      </div>
      {subscriptionStatus && <p className="newslettersubheader mb-5">Thank you for subscribing!</p>}
    </div>
  );
};

export default Newsletter;
