import React from "react";


const LoginForm = () => {
  return (
    
      <div className="login-card">
        <h2 className="login-title">Welcome</h2>
        <p className="login-subtitle">Login to your account</p>
        
        <form className="login-form">
          <input
            type="email"
            className="login-input"
            placeholder="Enter email or phone number"
          />
          
          <input
            type="password"
            className="login-input"
            placeholder="Enter Password"
          />
          
          <div className="login-options">
            <label className="remember-me">
              <input type="checkbox" />
              Remember me
            </label>
            <a href="#" className="forgot-password">Forget Password?</a>
          </div>
          
          <button className="login-btn">Login</button>
          
          <div className="signup-link">
            Don’t have an account? <a href="#">Sign up</a>
          </div>
        </form>
      </div>
    
  );
};

export default LoginForm;
