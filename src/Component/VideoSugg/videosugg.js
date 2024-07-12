import React from "react";
import { useNavigate } from 'react-router-dom';
import './videosugg.css'; // Ensure correct path to CSS file

function Videosugg() {
  const navigate = useNavigate();

  const videos = [
    { id: 1, thumbnail: process.env.PUBLIC_URL + '/konubhai.jpg', previewFrames: [
      process.env.PUBLIC_URL + '/garba.jpeg',
      process.env.PUBLIC_URL + '/konubhai.jpg',
      process.env.PUBLIC_URL + '/images.png',
    ], videoUrl: '/videos/Assignment2.mp4' },
    { id: 2, thumbnail: process.env.PUBLIC_URL + '/konubhai.jpg', previewFrames: [
      process.env.PUBLIC_URL + '/garba.jpeg',
      process.env.PUBLIC_URL + '/konubhai.jpg',
      process.env.PUBLIC_URL + '/images.png',
    ], videoUrl: '/videos/Assignment2.mp4' },
    // Add more videos with their respective thumbnails and preview frames
  ];

  const handleImageClick = (videoUrl) => {
    navigate(`/videoplayer?video=${encodeURIComponent(videoUrl)}`);
  };

  return (
    <div className="container">
      {videos.map((video) => (
        <div className="video-suggestion" key={video.id} onClick={() => handleImageClick(video.videoUrl)}>
          <img src={video.thumbnail} alt="Thumbnail" className="video-logo" />
          <div className="sprite-preview">
            {video.previewFrames.map((frame, index) => (
              <img key={index} src={frame} alt={`Preview Frame ${index}`} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Videosugg;
