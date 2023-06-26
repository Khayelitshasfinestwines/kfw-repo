import React from 'react';
import './contacts.css';
import { BsFacebook } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';

const Contacts = () => {
  return (
    <div className="rectangle contacts-color">
      <div className="leftcontainer">
        <div className="leftcontent">
          <p className="header">Contact Us</p>
          <p className="email">lindilendzaba@gmail.com</p>
          <p className="phone">+27 73 081 3691</p>
        </div>
      </div>

      <div className="rightcontainer">
        <div className="rightcontent">
          <p className="header">Socials</p>
          <div className="social-icons">
            <a href="https://www.instagram.com/khayelitshasfinestwines" className="btn btn-primary btn-lg instagram-icon">
              <BsInstagram></BsInstagram>
            </a>
            <a href="https://www.facebook.com/KhayelitshasFinestWines/" className="btn btn-primary btn-lg facebook-icon">
              <BsFacebook></BsFacebook>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
