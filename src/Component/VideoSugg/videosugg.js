import React from "react";
import { useNavigate } from 'react-router-dom';
import './videosugg.css';

function Videosugg() {
    const navigate = useNavigate();

    const videos = [
        { id: 1, thumbnail: process.env.PUBLIC_URL + '/konubhai.jpg', videoUrl: '/videos/Assignment2.mp4' },
        { id: 2, thumbnail: process.env.PUBLIC_URL + '/konubhai.jpg', videoUrl: '/videos/Assignment2.mp4' },
        { id: 2, thumbnail: process.env.PUBLIC_URL + '/konubhai.jpg', videoUrl: '/videos/Assignment2.mp4' },
        { id: 2, thumbnail: process.env.PUBLIC_URL + '/konubhai.jpg', videoUrl: '/videos/Assignment2.mp4' },
        { id: 2, thumbnail: process.env.PUBLIC_URL + '/konubhai.jpg', videoUrl: '/videos/Assignment2.mp4' },
      
      ];
  
      const handleImageClick = (videoUrl) => {
        navigate(`/videoplayer?video=${encodeURIComponent(videoUrl)}`);
      };
    
      return (
        <div className="container">
          {videos.map((video) => (
            <div className="video-suggestion" key={video.id} onClick={() => handleImageClick(video.videoUrl)}>
              <img src={video.thumbnail} alt="Thumbnail" className="video-logo" />
            </div>
          ))}
        </div>     );
    }
    
export default Videosugg;