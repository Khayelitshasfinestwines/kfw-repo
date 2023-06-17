import React, { useState } from 'react';
import './newsletter.css'

const Newsletter = () => {
    return(
        <div>
            <input class="form-control" type="text" placeholder="First Name" aria-label="first name input"></input>
            <input class="form-control" type="text" placeholder="Last Name" aria-label="last name input"></input>
            <input class="form-control" type="text" placeholder="Email Address" aria-label="email input"></input>
        </div>
    );
};
export default Newsletter;