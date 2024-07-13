import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import './videosugg.css'; // Ensure correct path to CSS file

function Videosugg() {
  const navigate = useNavigate();
  const [hoveredVideoId, setHoveredVideoId] = useState(null);

  const videos = [
    { 
      id: 1, 
      thumbnail: process.env.PUBLIC_URL + '/konubhai.jpg',
      previewFrames: [
        process.env.PUBLIC_URL + '/frame1.jpg',
        process.env.PUBLIC_URL + '/frame2.jpg',
        process.env.PUBLIC_URL + '/frame3.jpg'
      ],
      videoUrl: '/videos/video2.mp4' 
    },
    { 
      id: 2, 
      thumbnail: process.env.PUBLIC_URL + '/konubhai.jpg', 
      previewFrames: [
        process.env.PUBLIC_URL + '/frame4.jpg',
        process.env.PUBLIC_URL + '/frame5.jpg',
        process.env.PUBLIC_URL + '/frame6.jpg'
      ],
      videoUrl: '/videos/video1.mp4' 
    },
    // Add more videos with their respective thumbnails and preview frames
  ];

  const handleImageClick = (videoUrl) => {
    navigate(`/videoplayer?video=${encodeURIComponent(videoUrl)}`);
  };

  return (
    <div className="container">
      {videos.map((video) => (
        <div 
          className="video-suggestion" 
          key={video.id} 
          onMouseEnter={() => setHoveredVideoId(video.id)}
          onMouseLeave={() => setHoveredVideoId(null)}
          onClick={() => handleImageClick(video.videoUrl)}
        >
          <img src={video.thumbnail} alt="Thumbnail" className="video-logo" />
          {hoveredVideoId === video.id && (
            <div className="sprite-preview">
              {video.previewFrames.map((frame, index) => (
                <img key={index} src={frame} alt={`Preview Frame ${index}`} />
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Videosugg;
