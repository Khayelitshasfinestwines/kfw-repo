import React from 'react';
import logo from './logo.png';
import './LogoComponent.css';

const LogoComponent = () => {
  return (
    <div >
      <img src={logo} alt="Logo" className="inverted sizing" />
    </div>
  );
};

export default LogoComponent;