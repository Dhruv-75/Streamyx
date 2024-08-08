import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode'; // Corrected import statement
import './login.css'; // Import the CSS file

const Login = () => {
  // This hook helps with navigation
  const navigate = useNavigate();

  // This sets up the user state, initially with empty email and password
  const [user, setUser] = useState({ email: '', password: '' });

  // This function handles the response from Google sign-in
  function handleCallbackResponse(response) {
    console.log("Encoded JWT ID token: " + response.credential);
    const token = "eyJhbGciOiJSUzI1NiIsIm..."; // This should be replaced with the actual token from response
    const userObject = jwtDecode(token); // Decode the JWT token to get user details
    setUser(userObject); // Save user details in the state
    console.log(userObject);
    localStorage.setItem('user', JSON.stringify(userObject)); // Save user details in local storage
    document.getElementById("signInDiv").hidden = true; // Hide the sign-in button
    document.getElementById("ContentDiv").hidden = false; // Show the main content (if applicable)
    window.location.href = '/mainpage'; // Navigate to the main page
  }

  // This effect runs once when the component mounts
  useEffect(() => {
    localStorage.setItem('user', JSON.stringify("")); // Clear user details in local storage

    // Load the Google API script
    const loadGoogleScript = () => {
      const script = document.createElement('script');
      script.src = "https://accounts.google.com/gsi/client";
      script.async = true;
      script.onload = () => {
        if (window.google) {
          window.google.accounts.id.initialize({
            client_id: "916572007042-ipkeett3gdt00m9a9t61vdldf27k8oli.apps.googleusercontent.com",
            callback: handleCallbackResponse // Set the callback for when a user signs in
          });

          // Render the Google sign-in button
          window.google.accounts.id.renderButton(
            document.getElementById("signInDiv"),
            { theme: "outline", size: "large" }
          );

          window.google.accounts.id.prompt(); // Prompt the user to sign in
        } else {
          console.error("Google API not loaded");
        }
      };
      document.body.appendChild(script);
    };

    loadGoogleScript();

    return () => {
      // Clean up the script when the component unmounts
      const existingScript = document.querySelector('script[src="https://accounts.google.com/gsi/client"]');
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);

  // This function handles input changes
  const inputHandler = (key, value) => {
    setUser({ ...user, [key]: value });
  };

  // This function handles form submission
  const submitTheForm = () => {
    if (user.email === '' || user.password === '') {
      alert("Please fill all the fields");
    } else {
      const fetchUser = JSON.parse(localStorage.getItem('user'));
      if (fetchUser) {
        if (fetchUser.email === user.email && fetchUser.password === user.password) {
          navigate("/mainpage"); // Navigate to the main page
        } else {
          alert("Invalid Credentials");
        }
      }
    }
  };

  return (
    <div>
      <video id="bg-video" autoPlay loop muted>
        <source src="https://video-streaming-service-storage.s3.amazonaws.com/Background+Fitness.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* <div className="login-container">
        <h2>Login</h2>
        <form>
          <div>
            <label>Email:</label>
            <input type="email" name="email" onChange={(e) => inputHandler("email", e.target.value)} />
          </div>
          <div>
            <label>Password:</label>
            <input type="password" name="password" onChange={(e) => inputHandler("password", e.target.value)} />
          </div>
          <button type="button" onClick={() => submitTheForm()}>Login</button>
        </form>
        <div id="signInDiv"></div>
      </div> */}
    </div>
  );
};

export default Login;
