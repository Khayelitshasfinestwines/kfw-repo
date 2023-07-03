import React from 'react';
import './contactPage.css';
import ContactPageImage from './contactPageImages/contactpageimage1.jpg';
import { BsFillEnvelopeFill } from 'react-icons/bs';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { BsFacebook } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { BsTiktok } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';


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
            <p>If you have any questions about our products or are interested in booking a wine tour, please use the contact below:</p>
            </div>
            <div className="contact-container">
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

          <div className="contact-page-icons mb-5">
            <a href="https://www.facebook.com/KhayelitshasFinestWines/" className="facebook-icon">
              <BsFacebook></BsFacebook>
            </a>
            <a href="https://www.instagram.com/khayelitshasfinestwines" className="instagram-icon">
              <BsInstagram></BsInstagram>
            </a>
            <a href="https://www.tiktok.com/@khayelitshasfinestwines" className="tiktok-icon">
              <BsTiktok></BsTiktok>
            </a>
            <a href="https://twitter.com/khayelitshawine" className="twitter-icon">
              <BsTwitter></BsTwitter>
            </a>
          </div>


        </div>
      </div>
    </div>
  );
};

export default ContactPage;
