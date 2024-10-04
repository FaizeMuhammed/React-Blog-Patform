import React from "react";


const SignUpForm = () => {
  return (
    
      <div className="signup-card">
        <h2 className="signup-title">Welcome</h2>
        <p className="signup-subtitle">Create your account</p>
        
        <form className="signup-form">
          <input
            type="text"
            className="signup-input"
            placeholder="Enter your name"
          />
          
          <input
            type="email"
            className="signup-input"
            placeholder="Enter email or phone number"
          />
          
          <input
            type="password"
            className="signup-input"
            placeholder="Create Password"
          />
          
          <input
            type="password"
            className="signup-input"
            placeholder="Confirm Password"
          />
          
          <button className="signup-btn">Sign Up</button>
          
          <div className="login-link">
            Already have an account? <a href="#">Login</a>
          </div>
        </form>
      </div>
   
  );
};

export default SignUpForm;
