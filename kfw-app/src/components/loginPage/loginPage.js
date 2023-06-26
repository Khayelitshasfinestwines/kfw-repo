import React from "react";
import "./loginPage.css";

const LoginPage = () => {
  return (
    <div className="card mt-5 card-layout p-3">
      <h3 className="text-center mt-3">Login </h3>
      <form>
        <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label">
            Email address:
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder=" "
          ></input>
        </div>
        <div className="mb-3">
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
        <div class="row mb-4">
          <div class="col d-flex justify-content-center">
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="form2Example31"
                checked
              />
              <label class="form-check-label" for="form2Example31">
                {" "}
                Remember me{" "}
              </label>
            </div>
          </div>

          <div class="col">
            <a href="#!">Forgot password?</a>
          </div>
        </div>
        <div>
          <button type="button" class="btn btn-primary mt-3">
            Sign In
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
