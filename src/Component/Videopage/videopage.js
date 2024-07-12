import React from "react";
import { useLocation } from 'react-router-dom';
import VideoSugg from "./VideoSugg/videosugg"; // Ensure the correct path to VideoSugg
import Videoplayer from "../Videoplayer/videoplayer"; // Ensure the correct path to Videoplayer
import './videopage.css'; // Ensure correct path to CSS file

const Videopage = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const videoUrl = params.get('video');

  return (
    <div className="video-page-container">
      <div className="video-player-container">
        <Videoplayer src={videoUrl} type="video/mp4" />
      </div>
      <div className="video-suggestions-container">
        <VideoSugg />
      </div>
    </div>
  );
};

export default Videopage;
