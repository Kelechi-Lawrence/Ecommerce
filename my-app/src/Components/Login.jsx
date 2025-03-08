import React from "react";
import "../css/login.css";
const Login = () => {
  return (
    <div className="login-page">
      <div className="login-container">
        <h2> Sign up</h2>

        <div className="login-input">
          <input type="text" placeholder="Your nawme" />
          <input type="text" placeholder="Your Email" />
          <input type="password" placeholder="Password:" />
        </div>
        <button>Continue</button>
        <p>
          Already have an account? <span>Login here</span>
        </p>
        <div className="login-signupAgree">
          <input type="checkbox" name="" id="" />
          <p>By continuing, i agree to the terms and policy</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
