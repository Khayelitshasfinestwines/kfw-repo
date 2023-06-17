import React, { useState } from 'react';
import './newsletter.css'

const Newsletter = () => {
    return(
        <div>
            <h1 className = "newsletterheader">Subscribe to our newsletter</h1>
            <p className = 'newslettersubheader'>Stay up to date with the latest news and offerings</p>
            <div className = "overallformcontainer">
            <input class="form-control formcontainer" type="text" placeholder="First Name" aria-label="first name input"></input>
            <input class="form-control formcontainer" type="text" placeholder="Last Name" aria-label="last name input"></input>
            <input class="form-control formcontainer" type="text" placeholder="Email Address" aria-label="email input"></input>
            </div>
            <div className = "subscribebutton">
            <button type="button" class="btn btn-dark btn-lg mt-4 mb-5">Subscribe</button>
            </div>
        </div>
    );
};
export default Newsletter;