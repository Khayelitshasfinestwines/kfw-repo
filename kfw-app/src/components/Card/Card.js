import React, { useState } from 'react';
import './Card.css';
import { Link } from 'react-router-dom';

function Card({ title, imageUrl, body, addToCart, wineBlend }) {
  const [addedToCart, setAddedToCart] = useState(false);

  // const handleAddToCart = () => {
  //   addToCart();
  //   setAddedToCart(true);
  // };

  const buttonScrollClick = () => {
    window.scrollTo(0, 0);
  };

  const linkUrl = title.toLowerCase().replace(/\s/g, '') !== 'checkbacksoon!' ? `/${title.toLowerCase().replace(/\s/g, '')}` : null;

  return (
    <div className="card-container-card">
      <div className="image-container">
        {linkUrl && title.toLowerCase().replace(/\s/g, '') !== 'checkbacksoon' ? (
          <Link to={linkUrl}>
            <img src={imageUrl} alt="Shopping Image" /> 
          </Link>
        ) : (
          <img src={imageUrl} alt="Shopping Image" />
        )}
      </div>

      <div className="card-content-card">
        <div className="card-title-card mt-5">
          <h3 className='text-center'>{title}</h3>
        </div>
        <div className="card-body">
          <p>{body}</p>
        </div>
      </div>

      <div className="btn">
          <Link to={wineBlend}>
          <button type="button" className="btn btn-dark btn-lg mt-4 mb-5 " onClick={buttonScrollClick}>
            Learn More
          </button>
          </Link>
      </div>
    </div>
  );
}

export default Card;
