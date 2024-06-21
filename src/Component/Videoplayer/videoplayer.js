import React, { useRef } from 'react';
import './videoplayer.css'

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
    <div className="video-container">
      <video ref={videoRef} width="600" controls>
        <source src={src} type={type} />
        Your browser does not support the video tag.
      </video>
      {/* <div>
        <button class="play" onClick={handlePlay}>Play</button>
        <button class="pause" onClick={handlePause}>Pause</button>
        <button className="forward" onClick={handleForward}>Forward 10s</button>
        <button className="backward" onClick={handleBackward}>Backward 10s</button>
      </div> */}
    </div>
  );
};

export default Videoplayer;
