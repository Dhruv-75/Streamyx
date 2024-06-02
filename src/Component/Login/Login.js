import React, { useState } from 'react';
import './login.css'; // Import the CSS file
import { Route, useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({ email: '', password: '' })
  
  const inputHandeler = (key, value) => { 
    setUser({...user, [key]: value})
  }

  const submitTheForm = () => { 

    if (user.email === '' || user.password === '') {
      alert("Please fill all the fields")
    } else {
      const fetchuser = JSON.parse(localStorage.getItem('user'));
      if (fetchuser) {
        if (fetchuser.email === user.email && fetchuser.password === user.password) {
          navigate("/mainpage")
        }else{
          alert("Invalid Credentials")
        }
      }
    }
  }
  return (
    <div className="login-container">
      <h2>Login</h2>
      <form>
        <div>
          <label>Email:</label>
          <input type="email" name="email" onChange={(e)=>inputHandeler("email",e.target.value)}/>
        </div>
        <div>
          <label>Password:</label>
          <input type="password" name="password" onChange={(e)=>inputHandeler("password",e.target.value)} />
        </div>
        <button type="submit" onClick={()=>submitTheForm()}>Login</button>
      </form>
    </div>
  );
};

export default Login;
