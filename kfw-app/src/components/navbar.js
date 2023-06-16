
import React from 'react'
import './navbar.css'

const NavBar = () =>{

return (
    <div className='text-light absolute-nav-bar'>
        <nav class="navbar navbar-expand-lg navbar-light bg-dark p-4 absolute-nav-bar">
  <a class="navbar-brand text-light" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto text-light">
      <li class="nav-item active">
        <a class="nav-link text-light" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link text-light" href="#">Link</a>
      </li>
      <li class="nav-item dropdown">
      </li>
    </ul>
  </div>
</nav>
    </div>
    
);

};
export default NavBar;