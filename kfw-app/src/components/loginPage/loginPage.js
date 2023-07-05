import React, {useState} from "react";
import "./loginPage.css";
import RegisterPage from "../registerPage/register";
import { signInWithEmailAndPassword } from 'firebase/auth';

import { auth } from '../../firebase/firebase';


const LoginPage = ({renderRegisterPage, closeLogin, isLoggedIn, setIsLoggedIn}) => {

  const [isRegisterPageVisible, setIsRegisterPageVisible] = useState(false);




  
  
  

  const makeRegisterPage = () => {
    setIsRegisterPageVisible(true);
    renderRegisterPage();
    
  };

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function onLoginSubmit(e) {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      closeLogin();
      setIsLoggedIn(true);
      
      

    } catch (err) {

      alert(err.message);
    }

  }
  
  return (
    <div> 
        <div className={`register-page ${isRegisterPageVisible ? 'visible' : ''}`}>
{isRegisterPageVisible && <RegisterPage/>}
          </div>
    <div className="card mt-5 card-layout p-3">
      <h3 className="text-center mt-3 mb-3">Login </h3>

      <form onSubmit={onLoginSubmit}>
        <div className="mb-3 ms-3 me-3">
          <label for="exampleFormControlInput1" className="form-label">
            Email address:
          </label>
          <input
            value = {email}
            onChange={(e)=>setEmail(e.target.value)}
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder=" "
          ></input>
        </div>
        <div className="mb-3 ms-3 me-3">
          <label for="exampleFormControlInput1" className="form-label">
            Password:
          </label>
          <input           
           value = {password}
            onChange={(e)=>setPassword(e.target.value)}
            type="password"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder=" "
          ></input>
        </div>
        <div className="row mb-3 center">
          <div className="col d-flex justify-content-center mb-3">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="form2Example31"
                
              />
              <label className="form-check-label" for="form2Example31">
                {" "}
                Remember me{" "}
              </label>
            </div>
          </div>

          <div className="col center">
            <a href="#!">Forgot password?</a>
          </div>
        </div>
        <div className='center'>
          <button type="button" className="btn btn-dark mt-2" onClick = {onLoginSubmit}>
            Sign In
          </button>
        </div>

        <div className='center mt-3'>
          <button className="btn btn-link" type='button' onClick={makeRegisterPage}> Don't have an account? Register Here!</button>
        </div>

      </form>
    </div>
    </div>
  );
};

export default LoginPage;
