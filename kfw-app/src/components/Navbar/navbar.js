import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './navbar.css';
import LogoComponent from './logo/LogoComponent';
import Icon from './iconComponentFolder/IconComponent';
import { BsFillCartFill } from 'react-icons/bs';
import LoginPage from '../loginPage/loginPage';
import Overlay from './overlay';
import RegisterPage from '../registerPage/register';

const NavBar = () => {
  const [isLoginPageVisible, setIsLoginPageVisible] = useState(false);
  const [isRegisterPageVisible, setIsRegisterPageVisible] = useState(false);


  const loginButtonClicked = () => {
    setIsLoginPageVisible((prevState) => !prevState);
    setIsRegisterPageVisible(false);
  };

  const renderRegisterPage = () => {
    setIsLoginPageVisible(false);
    setIsRegisterPageVisible(true);

  };

  const closeLogin = () => {
    setIsLoginPageVisible(false);
    setIsRegisterPageVisible(false);

  };



  return (
    
  
    <div className='text-light fixed-nav-bar'>
            
            <div className={`login-page ${isLoginPageVisible ? 'visible' : ''}`}>
            {isLoginPageVisible && <LoginPage renderRegisterPage={renderRegisterPage} />}
          
            </div>

            <div className={`register-page ${isRegisterPageVisible ? 'visible' : ''}`}>
        {isRegisterPageVisible && <RegisterPage showLogin={loginButtonClicked}/>}
      </div>

      <nav className="navbar navbar-expand-lg navbar-dark p-3 position-sticky color-black opacity">
        <Link className="navbar-brand text-light" to="/"> <LogoComponent/></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse nav-bar-text-elements" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto text-light">
            <li className="nav-item active nav-bar-spacing">
              <Link className="nav-link text-light" to="/shopping">Shop</Link>
            </li>
            <li className="nav-item active nav-bar-spacing">
              <Link className="nav-link text-light" to="/wineclub">Wine Club</Link>
            
            </li>
            <li className="nav-item active nav-bar-spacing">
              <Link className="nav-link text-light" to="/story">Our Story</Link>
            </li>
            <li className="nav-item active nav-bar-spacing">
              <Link className="nav-link text-light" to="/tastings">Wine Tour</Link>
            </li>
            <li className="nav-item nav-bar-spacing">
              <Link className="nav-link text-light" to="/international">International</Link>
            </li>
            <li className="nav-item nav-bar-spacing">
              <Link className="nav-link text-light" to="/contact">Contact Us</Link>
            </li>

            <li className="nav-item nav-bar-spacing">
              <Link className = "nav-link text-light" to ="/cart">
                <button className=" btn nav-link text-light"><BsFillCartFill/> </button></Link>
            </li>

            <li className="nav-item nav-bar-spacing">
                <button className="nav-link text-light" onClick={loginButtonClicked}><Icon/> </button>
            </li>
          </ul>
        </div>
      </nav>
 <Overlay isVisible={isLoginPageVisible || isRegisterPageVisible} onClose={closeLogin} />
    </div>

  );
};

export default NavBar;