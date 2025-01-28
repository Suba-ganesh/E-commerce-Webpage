import React from "react";
import './CSS/loginsignup.css'

const Loginsignup =() => {
    return (<div className="loginsignup">
          <div className="loginsignup-container">
            <h1>Sign Up</h1>
            <div className="loginsignup-feilds">
                <input type="text" placeholder="Your Name" />
                <input type="text" placeholder="Email Address" />
                <input type="text"  placeholder="password"/>
            </div>
            <button>Continue</button>
            <p className="login-signup-login">Already Have a Acoount <span>login-in Here</span></p>
            <div className="login-signup-agree">
                <input type="checkbox" name="" id="" />
                <p>By, Continueing, i agree to the Terms of Use & Privacy Policy</p>
            </div>
          </div>
    </div>)
}
export default Loginsignup;