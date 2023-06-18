import React from 'react';
import './contacts.css';

const Contacts = () => {
  return (
    <div className="rectangle">
      <div className="leftcontainer">
        <div className="leftcontent">
          <p className="header">Contact Us</p>
          <p className="email">INSERT EMAIL</p>
          <p className="phone">INSERT NUMBER</p>
        </div>
      </div>

      <div className="rightcontainer">
        <div className="rightcontent">
          <p className="header">Socials</p>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
