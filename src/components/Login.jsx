import React from "react";
import {Link} from "react-router-dom";
import "../login.css";

export default function Login() {
  return (
    <div className="login">
      <Link className="imagediv" to='/'>
        <img className="login_logo" src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png'  alt=" "/>
      </Link>
      <div className="formcontainer">
      <h3>SignIn</h3>
        <form className="form">
          <p><strong>Username</strong></p>
          <input type="text" ></input>
          <p><strong>Password</strong></p>
          <input type="password" ></input>
          <button>Login</button>
          <pre>Agree to the terms and condition</pre>
          <button >Create Amazon Account</button>
        </form>
      </div>
     </div> 
  );
}
