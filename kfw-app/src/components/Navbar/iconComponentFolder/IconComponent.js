import React from 'react';
import icon from './loginIcon.png';
import './iconComponent.css';


const Icon = () => {
  return (
    <div className="logo-container">
      <img src={icon} alt="Login" className='icon-sizing' />
    </div>
  );
};

export default Icon;