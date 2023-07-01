import React from 'react'
import './contactPage.css';
import ContactPageImage from './contactPageImages/contactpageimage1.jpg';
const ContactPage = ()=>{

    return (
        <div>
            <div className="heading-container">
                <img src={ContactPageImage} alt="contact header" style={{ width: '100%' }} />
                <div className="centered">Contact Us</div>
            </div>

            <div className="container">

        <div className="text">
          <div className = "spacing">
          <p>If you have any questions about our products or are interested in booking a wine tour please use the contact below</p>
            </div>
          <p className="caption mt-3">Connect With Us</p>
          <p className="caption-sub">Explore our Wine Journey on Social Media</p>



            </div>
        </div>
        </div>
    )
}







export default ContactPage