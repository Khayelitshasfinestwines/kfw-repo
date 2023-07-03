import React, {useState} from 'react'
import "./register.css"
import {createUserWithEmailAndPassword, updateProfile} from 'firebase/auth'
import { auth } from '../../firebase/firebase.js'


const RegisterPage = ({showLogin})=>{

    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function onRegisterSubmit(e) {
      e.preventDefault();

      try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      showLogin();
      

      await updateProfile(user, {
        displayName: `${name} ${surname}`,
      });
    }
      catch (err) { 
      alert(err.message)
      }

      
    }

    return (
<div> 
        <div>
    <div className="card card-layout p-3">
      <h3 className="text-center mt-3 mb-3">REGISTER </h3>


      <form onSubmit={onRegisterSubmit}>
        <div className="mb-3 ms-3 me-3">
          <label for="exampleFormControlInput1" className="form-label">
            Name:
          </label>
          <input
            value = {name}
            onChange={(e)=>setName(e.target.value)} 
            className="form-control"
            id="exampleFormControlInput1"
            placeholder=" "
          ></input>
        </div>

        <div className="mb-3 ms-3 me-3">
          <label for="exampleFormControlInput2" className="form-label">
            Surname:
          </label>
          <input
            value = {surname}
            onChange={(e)=>setSurname(e.target.value)}
            className="form-control"
            id="exampleFormControlInput2"
            placeholder=" "
          ></input>
        </div>

        

        

        <div className="mb-3 ms-3 me-3">
          <label for="exampleFormControlInput3" className="form-label">
            Email:
          </label>
          <input
            value = {email}
            onChange={(e)=>setEmail(e.target.value)}
            type="email"
            className="form-control"
            id="exampleFormControlInput3"
            placeholder=" "
          ></input>
        </div>
        <div className="mb-3 ms-3 me-3">
          <label for="exampleFormControlInput4" className="form-label">
            Password:
          </label>
          <input
            value = {password}
            onChange={(e)=>setPassword(e.target.value)}
            type="password"
            className="form-control"
            id="exampleFormControlInput4"
            placeholder=" "
          ></input>

        </div>
        <div className="mb-3 ms-3 me-3">
          <label for="exampleFormControlInput5" className="form-label">
            Confirm Password:
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput5"
            placeholder=" "
          ></input>
        </div>

        <div className='center'>
          <button type="submit" className="btn btn-dark mt-2 " onClick={onRegisterSubmit}>
            Register
          </button>
        </div>



      </form>
    </div>
    </div>
    </div>
    )
}







export default RegisterPage