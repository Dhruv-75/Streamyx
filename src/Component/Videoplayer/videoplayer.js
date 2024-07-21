<<<<<<< Updated upstream
import React, { useRef } from 'react';
import './videoplayer.css'
=======
import React, { useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './videoplayer.css';
import { VideoSuggestion } from '../VideoSuggestion/VideoSuggestion';
>>>>>>> Stashed changes

const Videoplayer = ({ src, type }) => {
  const videoRef = useRef(null);

  const handlePlay = () => {
    videoRef.current.play().catch(error => {
      console.error("Play request failed", error);
    });
  };

  const handlePause = () => {
    videoRef.current.pause();
  };

  const handleForward = () => {
    const currentTime = videoRef.current.currentTime;
    videoRef.current.currentTime = currentTime + 10; // Forward 10 seconds (adjust as needed)
  };

  const handleBackward = () => {
    const currentTime = videoRef.current.currentTime;
    videoRef.current.currentTime = currentTime - 10; // Backward 10 seconds (adjust as needed)
  };

  return (
    <div className='container'>
    <div className="video-container left">
      <video ref={videoRef} width="600" controls>
        <source src={src} type={type} />
        Your browser does not support the video tag.
      </video>
      {/* <div>
        <button class="play" onClick={handlePlay}>Play</button>
        <button class="pause" onClick={handlePause}>Pause</button>
        <button className="forward" onClick={handleForward}>Forward 10s</button>
        <button className="backward" onClick={handleBackward}>Backward 10s</button>
<<<<<<< Updated upstream
      </div> */}
    </div>
=======
      </div>
      </div> 
      <div className=' right'>
      <VideoSuggestion/>
      </div>
      </div>
>>>>>>> Stashed changes
  );
};

export default Videoplayer;
