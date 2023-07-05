import React, { useState } from 'react';
import './Card.css';
import { Link } from 'react-router-dom';

function Card({ title, imageUrl, body, addToCart }) {
  const [addedToCart, setAddedToCart] = useState(false);

  const handleAddToCart = () => {
    addToCart();
    setAddedToCart(true);
  };

  const linkUrl = title.toLowerCase().replace(/\s/g, '') !== 'checkbacksoon!' ? `/${title.toLowerCase().replace(/\s/g, '')}` : null;

  return (
    <div className="card-container">
      <div className="image-container">
        {linkUrl && title.toLowerCase().replace(/\s/g, '') !== 'checkbacksoon' ? (
          <Link to={linkUrl}>
            <img src={imageUrl} alt="Shopping Image" /> 
          </Link>
        ) : (
          <img src={imageUrl} alt="Shopping Image" />
        )}
      </div>

      <div className="card-content">
        <div className="card-title">
          <h3>{title}</h3>
        </div>
        <div className="card-body">
          <p>{body}</p>
        </div>
      </div>

      <div className="btn">
        {!addedToCart ? (
          <button type="button" className="btn btn-dark btn-lg mt-4 mb-5" onClick={handleAddToCart}>
            Add to Cart
          </button>
        ) : (
          <button type="button" className="btn btn-secondary btn-lg mt-4 mb-5" disabled>
            Added to Cart
          </button>
        )}
      </div>
    </div>
  );
}

export default Card;
