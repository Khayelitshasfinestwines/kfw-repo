
import React from 'react'
import './navbar.css'
import {Link} from "react-router-dom"


const NavBar = () =>{

return (
    <div className='text-light sticky-nav-bar '>
        <nav class="navbar navbar-expand-lg navbar-light bg-dark p-3 position-sticky">
  <a class="navbar-brand text-light" href="#"></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse nav-bar-text-elements" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto text-light">
      <li class="nav-item active nav-bar-spacing">
        <Link class="nav-link text-light" to="/shopping"> Shop</Link>
      </li>
      <li class="nav-item active nav-bar-spacing">
        <Link class="nav-link text-light" to="/tastings">Wine Tastings</Link>
      </li>
      <li class="nav-item active nav-bar-spacing">
        <Link class="nav-link text-light" to="/story"> Our Story</Link>
      </li>
      <li class="nav-item nav-bar-spacing">
        <Link class="nav-link text-light" to="/newsletter">Newsletter</Link>
      </li>
      <li class="nav-item nav-bar-spacing">
        <Link class="nav-link text-light" to="/international">International</Link>
      </li>
      <li class="nav-item nav-bar-spacing">
        <Link class="nav-link text-light" to="/contact">Contact Us</Link>
      </li>
      <li class="nav-item nav-bar-spacing">
        <Link class="nav-link text-light" to="/login">Login</Link>
      </li>
    </ul>
  </div>
</nav>
    </div>
    
);

};
export default NavBar;