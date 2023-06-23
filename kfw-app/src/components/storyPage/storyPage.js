import React from 'react';
import './storyPage.css';
import StoryPageImage from './storyPageImages/storypage2.jpg';
import QRCode from './storyPageImages/StoryQR.jpg';

const StoryPage = () => {
  return (
    <div>
      <div className="heading-container">
        <img src={StoryPageImage} alt="story header" style={{ width: '100%' }} />
        <div className="centered">Our Story</div>
      </div>

      <div className="container">
        <p class="h1 mt-5 header">The Origin</p>

        <div className="text">
          <p>Dummy</p>
        </div>

        <img src={QRCode} alt="QR Code" style={{ width: '50%' }} />
      </div>
    </div>
  );
};

export default StoryPage;
