import React from 'react';
import './contactPage.css';
import ContactPageImage from './contactPageImages/contactpageimage1.jpg';
import { BsFillEnvelopeFill } from 'react-icons/bs';
import { BsFillTelephoneFill } from 'react-icons/bs';

const ContactPage = () => {
  return (
    <div>
      <div className="heading-container">
        <img src={ContactPageImage} alt="contact header" style={{ width: '100%' }} />
        <div className="centered">Contact Us</div>
      </div>

      <div className="container">
        <div className="text">
          <div className="spacing">
            <p>If you have any questions about our products or are interested in booking a wine tour, please use the contact below</p>
            </div>
            <div className="contact-container mt-2">
              <div className="contact-row name">
                <p>Lindile Ndzaba</p>
              </div>
              <div className="contact-row">
                <BsFillEnvelopeFill />
                <p>lindilendzaba@gmail.com</p>
              </div>
              <div className="contact-row">
                <BsFillTelephoneFill />
                <p>+27 73 081 3691</p>
              </div>
          </div>
          <p className="caption mt-5">Connect With Us</p>
          <p className="caption-sub">Explore our Wine Journey on Social Media</p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
