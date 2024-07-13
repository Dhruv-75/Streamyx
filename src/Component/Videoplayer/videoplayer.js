import React, { useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './videoplayer.css';

const VideoPlayer = () => {
  const location = useLocation();
  const videoRef = useRef(null);

  const query = new URLSearchParams(location.search);
  const src = query.get('src');
  const type = query.get('type');

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
    }
  }, [src, type]);

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
    videoRef.current.currentTime = currentTime + 10; // Forward 10 seconds
  };

  const handleBackward = () => {
    const currentTime = videoRef.current.currentTime;
    videoRef.current.currentTime = currentTime - 10; // Backward 10 seconds
  };

  return (
    <div className="video-container">
      <video ref={videoRef} width="600" controls>
        <source src={src} type={type} />
        Your browser does not support the video tag.
      </video>
      <div>
        <button className="play" onClick={handlePlay}>Play</button>
        <button className="pause" onClick={handlePause}>Pause</button>
        <button className="forward" onClick={handleForward}>Forward 10s</button>
        <button className="backward" onClick={handleBackward}>Backward 10s</button>
      </div>
    </div>
  );
};

export default VideoPlayer;
