import React from "react";
import './register.css'
import {Link} from 'react-router-dom'

const Register = () =>(
   <div className="register">
     <div className="login-page">
  <div className="form">
    <form className="login-form">
      <input type="text" placeholder="name"/>
      <input type="password" placeholder="password"/>
      <input type="text" placeholder="email address"/>
      <button>create</button>
      <p className="message">Already registered? <Link to='/login'>Sign In</Link></p>
    </form>
  </div>
</div>
   </div>
)
export default Register