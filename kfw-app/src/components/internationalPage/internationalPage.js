import React from 'react';
import './internationalPage.css';
import { BsFillTelephoneFill } from 'react-icons/bs';
import InternationalImage from './internationalPageImages/international4.jpg';

const InternationalPage = () => {
  return (
    <div>
      <div className="heading-container">
        <img src={InternationalImage} alt="international header" style={{ width: '100%' }} />
        <div className="centered">International</div>
      </div>

      <div className="container">
        <div className="text">
          <div className="spacing">
            <p className="addington-cf-thin">For those interested in our product that live overseas, please contact our partner for information on how we can bring our wine to you:</p>
            <p className="addington-cf-thin">United States Contacts:</p>
          </div>

          <div className="contact-container mb-5">
            <div className="contact-row name">
              <p className="addington-cf-thin">Daniel Levitt</p>
            </div>
    
            <div className="contact-row">
              <BsFillTelephoneFill />
              <p className="fressa-regular">+27 82 785 8731</p>
            </div>
            
            <div className="contact-row">
              <p className="addington-cf-thin">daniel@southernyardimporting.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InternationalPage;
