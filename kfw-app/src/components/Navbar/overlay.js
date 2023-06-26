import React from 'react';
import "./overlay.css";

const Overlay = ({ isVisible, onClose }) => {
  const handleOverlayClick = () => {
    onClose();
  };

  return (
    <>

        <div className={`overlay ${isVisible ? 'visible' : ''}`} onClick={handleOverlayClick} />

    </>
  );
};

export default Overlay;