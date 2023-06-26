import React from 'react'
import "./register.css"

const RegisterPage = ({showLogin})=>{

    const regButtonClicked = () => {
        showLogin();
    }

    return (
<div> 
        <div>
    <div className="card card-layout p-3">
      <h3 className="text-center mt-3 mb-3">REGISTER </h3>
      <form>
        <div className="mb-3 ms-3 me-3">
          <label for="exampleFormControlInput1" className="form-label">
            Name:
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder=" "
          ></input>
        </div>

        <div className="mb-3 ms-3 me-3">
          <label for="exampleFormControlInput1" className="form-label">
            Surname:
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder=" "
          ></input>
        </div>

        

        

        <div className="mb-3 ms-3 me-3">
          <label for="exampleFormControlInput1" className="form-label">
            Email:
          </label>
          <input
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
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder=" "
          ></input>

        </div>
        <div className="mb-3 ms-3 me-3">
          <label for="exampleFormControlInput1" className="form-label">
            Confirm Password:
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder=" "
          ></input>
        </div>

        <div className='center'>
          <button type="button" className="btn btn-dark mt-2 " onClick={regButtonClicked}>
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