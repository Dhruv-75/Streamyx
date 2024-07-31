import React, { useEffect, useState } from 'react';
import './login.css'; // Import the CSS file
import { Route, useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';

const Login = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({ email: '', password: '' })

  function handleCallbackResponse(response){
    console.log("=============== App.js Call ==============");
    console.log("Encoded JWT ID token: " + response.credential);
    const token = "eyJhbGciOiJSUzI1NiIsImtpZCI6IjBlMzQ1ZmQ3ZTRhOTcyNzFkZmZhOTkxZjVhODkzY2QxNmI4ZTA4MjciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhenAiOiI5MTY1NzIwMDcwNDItaXBrZWV0dDNnZHQwMG05YTl0NjF2ZGxkZjI3azhvbGkuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJhdWQiOiI5MTY1NzIwMDcwNDItaXBrZWV0dDNnZHQwMG05YTl0NjF2ZGxkZjI3azhvbGkuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJzdWIiOiIxMDIxODgzMjY0OTI4NDA2OTYzNzgiLCJlbWFpbCI6ImRocnV2bWlzdHJ5MTU3N0BnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwibmJmIjoxNzIwODgwMjAzLCJuYW1lIjoiRGhydXYgTWlzdHJ5IiwicGljdHVyZSI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hL0FDZzhvY0toS1hDOG5XclFGaXY3Y0ZXakl5WWJGaDBaR3FkOUl4Um5GRUNRS3FzaXR4cmZNWmlZPXM5Ni1jIiwiZ2l2ZW5fbmFtZSI6IkRocnV2IiwiZmFtaWx5X25hbWUiOiJNaXN0cnkiLCJpYXQiOjE3MjA4ODA1MDMsImV4cCI6MTcyMDg4NDEwMywianRpIjoiNGZiYTI3MWRhZTFiODMwZDBmOWRjOTJjMDJhN2I4ZjdmYWFhZTgxNyJ9.C6YSnDUX6yN8pcVZpJlFVZAanAWnHXviVYTfV0e2hu2ksLrZBhNPhRkWr_ZUJGvjjKMsf9DCf07QoSAGtyX7pQm__9kmHmyTXNY03WGFPmE9rN0jWVmI5cHOr-mx5ky7L2G_VV-HZeq4G_37meKVRvrgLOprzCBOZCJtXduB4itGR4H-bMkNT1Ia7nmLiMIGuq4knyoXDEmsvh8TSVOIb5nGrin1VmancAnvEslmhU7D8QERar27fdnZhCt-5R34dt1WV6iNqv1Fb4WyKdICdiIfnZFfT_sR4efImolrOlK10isj4j-5W_YObrKoiTkCCz9x7UJXMbzzjBx7zknpGQ";
    const userObject = jwtDecode(token);
    setUser(userObject);
    console.log(userObject)
    localStorage.setItem('user', JSON.stringify(userObject)); //To set user details in local storage
    document.getElementById("signInDiv").hidden = true;
    document.getElementById("ContentDiv").hidden = false;
    window.location.href = '/mainpage';
  }

  useEffect(() => {

    localStorage.setItem('user', JSON.stringify("")); //To set user details in local storage

    const loadGoogleScript = () => {
      const script = document.createElement('script');
      script.src = "https://accounts.google.com/gsi/client";
      script.async = true;
      script.onload = () => {
        if (window.google) {
          window.google.accounts.id.initialize({
            client_id: "916572007042-ipkeett3gdt00m9a9t61vdldf27k8oli.apps.googleusercontent.com",
            callback: handleCallbackResponse
          });

          window.google.accounts.id.renderButton(
            document.getElementById("signInDiv"),
            { theme: "outline", size: "large" }
          );

          window.google.accounts.id.prompt();
        } else {
          console.error("Google API not loaded");
        }
      };
      document.body.appendChild(script);
    };

    loadGoogleScript();

    return () => {
      // Cleanup script if component unmounts
      const existingScript = document.querySelector('script[src="https://accounts.google.com/gsi/client"]');
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);




  
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
  // return (
  //   <div className="login-container">
  //     <h2>Login</h2>
  //     <form>
  //       <div>
  //         <label>Email:</label>
  //         <input type="email" name="email" onChange={(e)=>inputHandeler("email",e.target.value)}/>
  //       </div>
  //       <div>
  //         <label>Password:</label>
  //         <input type="password" name="password" onChange={(e)=>inputHandeler("password",e.target.value)} />
  //       </div>
  //       <button type="submit" onClick={()=>submitTheForm()}>Login</button>
  //     </form>
  //   </div>
  // );
};

export default Login;