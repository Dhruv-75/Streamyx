import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Component/Login/Login';
import Signup from './Component/Signup/Signup';
import MainPage from './Component/MainPage/mainpage';
import Videoplayer from './Component/Videoplayer/videoplayer';
import VideoSugg from './Component/VideoSugg/videosugg';

const App = () => {
  const videoSrc = "/videos/Assignment2.mp4"; // Ensure this path is correct and accessible
  const videoType = "video/mp4";

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/mainpage" element={<MainPage />} />
          <Route path="/videoplayer" element={<Videoplayer src={videoSrc} type={videoType} />} />
          <Route path="/videosugg" element={<VideoSugg />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
