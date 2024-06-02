import React, { useState } from 'react';
import './signup.css'; // Import the CSS file

const Signup = () => {

    const [user, setUser] = useState({ email: '', password: '' })
  
    const inputHandeler = (key, value) => { 
      setUser({...user, [key]: value})
    }
  
    const submitTheForm = () => { 

        if (user.email === '' || user.password === '') {
          alert("Please fill all the fields")
        } else {
          console.log(user)
          localStorage.setItem('user', JSON.stringify(user))
        }
    }
    
  return (
    <div className="signup-container">
      <h2>Signup</h2>
      <form>
        <div>
          <label>Email:</label>
          <input type="email" name="email" onChange={(e)=>inputHandeler("email",e.target.value)}/>
        </div>
        <div>
          <label>Password:</label>
          <input type="password" name="password" onChange={(e)=>inputHandeler("password",e.target.value)}  />
        </div>
        <div>
          <label>Confirm Password:</label>
          <input type="password" name="confirmPassword" />
        </div>
              <button type="submit" onClick={() => submitTheForm()}>Signup</button>
      </form>
    </div>
  );
};

export default Signup;
