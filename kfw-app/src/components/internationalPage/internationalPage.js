import React from 'react';
import './internationalPage.css';
import { BsFillTelephoneFill } from 'react-icons/bs';
import InternationalImage from './internationalPageImages/international4.jpg';

const InternationalPage = () => {
  return (
    <div>
      <div className="heading-container-int">
        <img src={InternationalImage} alt="international header-int" style={{ width: '100%' }} />
        <div className="centered-int">International</div>
      </div>

      <div className="container-int">
        <div className="text-int">
          <div className="spacing-int">
            <p className="addington-cf-thin-int">For those interested in our product that live overseas, please contact our partner for information on how we can bring our wine to you:</p>
            <p className="addington-cf-thin-int">United States Contacts:</p>
          </div>

          <div className="contact-container-int mb-5">
            <div className="contact-row-int name-int">
              <p className="addington-cf-thin-int">Daniel Levitt</p>
            </div>
    
            <div className="contact-row-int">
              <BsFillTelephoneFill />
              <p>+27 82 785 8731</p>
            </div>
            
            <div className="contact-row-int">
              <p>daniel@southernyardimporting.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InternationalPage;
