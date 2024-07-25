import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import Login from './Component/Login/Login';
import Signup from './Component/Signup/Signup';
import MainPage from './Component/MainPage/mainpage';
import Videoplayer from './Component/Videoplayer/videoplayer';
import { Navigate } from 'react-router-dom';

const App = () => {
  
  const [ user, setUser ] = useState({});

  function uservaluereturn(response){
    const token = "eyJhbGciOiJSUzI1NiIsImtpZCI6IjBlMzQ1ZmQ3ZTRhOTcyNzFkZmZhOTkxZjVhODkzY2QxNmI4ZTA4MjciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhenAiOiI5MTY1NzIwMDcwNDItaXBrZWV0dDNnZHQwMG05YTl0NjF2ZGxkZjI3azhvbGkuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJhdWQiOiI5MTY1NzIwMDcwNDItaXBrZWV0dDNnZHQwMG05YTl0NjF2ZGxkZjI3azhvbGkuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJzdWIiOiIxMDIxODgzMjY0OTI4NDA2OTYzNzgiLCJlbWFpbCI6ImRocnV2bWlzdHJ5MTU3N0BnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwibmJmIjoxNzIwODgwMjAzLCJuYW1lIjoiRGhydXYgTWlzdHJ5IiwicGljdHVyZSI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hL0FDZzhvY0toS1hDOG5XclFGaXY3Y0ZXakl5WWJGaDBaR3FkOUl4Um5GRUNRS3FzaXR4cmZNWmlZPXM5Ni1jIiwiZ2l2ZW5fbmFtZSI6IkRocnV2IiwiZmFtaWx5X25hbWUiOiJNaXN0cnkiLCJpYXQiOjE3MjA4ODA1MDMsImV4cCI6MTcyMDg4NDEwMywianRpIjoiNGZiYTI3MWRhZTFiODMwZDBmOWRjOTJjMDJhN2I4ZjdmYWFhZTgxNyJ9.C6YSnDUX6yN8pcVZpJlFVZAanAWnHXviVYTfV0e2hu2ksLrZBhNPhRkWr_ZUJGvjjKMsf9DCf07QoSAGtyX7pQm__9kmHmyTXNY03WGFPmE9rN0jWVmI5cHOr-mx5ky7L2G_VV-HZeq4G_37meKVRvrgLOprzCBOZCJtXduB4itGR4H-bMkNT1Ia7nmLiMIGuq4knyoXDEmsvh8TSVOIb5nGrin1VmancAnvEslmhU7D8QERar27fdnZhCt-5R34dt1WV6iNqv1Fb4WyKdICdiIfnZFfT_sR4efImolrOlK10isj4j-5W_YObrKoiTkCCz9x7UJXMbzzjBx7zknpGQ";
    const userObject = jwtDecode(token)
    return setUser(userObject);
  }

  function handleCallbackResponse(response){
    console.log("=============== App.js Call ==============")
    
    console.log("Encoded JWT ID token: " + response.credential);
    const token = "eyJhbGciOiJSUzI1NiIsImtpZCI6IjBlMzQ1ZmQ3ZTRhOTcyNzFkZmZhOTkxZjVhODkzY2QxNmI4ZTA4MjciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhenAiOiI5MTY1NzIwMDcwNDItaXBrZWV0dDNnZHQwMG05YTl0NjF2ZGxkZjI3azhvbGkuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJhdWQiOiI5MTY1NzIwMDcwNDItaXBrZWV0dDNnZHQwMG05YTl0NjF2ZGxkZjI3azhvbGkuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJzdWIiOiIxMDIxODgzMjY0OTI4NDA2OTYzNzgiLCJlbWFpbCI6ImRocnV2bWlzdHJ5MTU3N0BnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwibmJmIjoxNzIwODgwMjAzLCJuYW1lIjoiRGhydXYgTWlzdHJ5IiwicGljdHVyZSI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hL0FDZzhvY0toS1hDOG5XclFGaXY3Y0ZXakl5WWJGaDBaR3FkOUl4Um5GRUNRS3FzaXR4cmZNWmlZPXM5Ni1jIiwiZ2l2ZW5fbmFtZSI6IkRocnV2IiwiZmFtaWx5X25hbWUiOiJNaXN0cnkiLCJpYXQiOjE3MjA4ODA1MDMsImV4cCI6MTcyMDg4NDEwMywianRpIjoiNGZiYTI3MWRhZTFiODMwZDBmOWRjOTJjMDJhN2I4ZjdmYWFhZTgxNyJ9.C6YSnDUX6yN8pcVZpJlFVZAanAWnHXviVYTfV0e2hu2ksLrZBhNPhRkWr_ZUJGvjjKMsf9DCf07QoSAGtyX7pQm__9kmHmyTXNY03WGFPmE9rN0jWVmI5cHOr-mx5ky7L2G_VV-HZeq4G_37meKVRvrgLOprzCBOZCJtXduB4itGR4H-bMkNT1Ia7nmLiMIGuq4knyoXDEmsvh8TSVOIb5nGrin1VmancAnvEslmhU7D8QERar27fdnZhCt-5R34dt1WV6iNqv1Fb4WyKdICdiIfnZFfT_sR4efImolrOlK10isj4j-5W_YObrKoiTkCCz9x7UJXMbzzjBx7zknpGQ";
    const userObject = jwtDecode(token) 
    console.log(userObject);
    setUser(userObject);
    
    document.getElementById("signInDiv").hidden = true;
    document.getElementById("ContentDiv").hidden = false;
    window.location.href = '/mainpage';
  }

  function handleSignOut(event) {
    setUser({});
    document.getElementById("signInDiv").hidden = false;
    document.getElementById("ContentDiv").hidden = true;
  }

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id: "916572007042-ipkeett3gdt00m9a9t61vdldf27k8oli.apps.googleusercontent.com",
      callback: handleCallbackResponse
    });

    google.accounts.id.renderButton(
      document.getElementById("signInDiv"),
      { theme: "outline", size: "large"}
    );

    google.accounts.id.prompt();

    
  }, []);
  
  return (
    <Router>
      <div>


        <div id="signInDiv" align="center"></div>
          { Object.keys(user).length != 0 &&
            <button onClick={(e) => handleSignOut(e) }>Sign Out</button>
          }
      
          { user && 
          <div>
            <img src={user.picture}></img>
            <h3>{user.name}</h3>
            <div id="ContentDiv" className='App'>
          </div>
          
      </div> }
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/mainpage" element={<MainPage/>} />
          <Route path="/videoplayer" element={<Videoplayer src="/videos/Assignment2.mp4" type="video/mp4" />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
