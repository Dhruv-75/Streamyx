import React from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import './mainpage.css';

function MainPage() {
  const navigate = useNavigate();

  const videos = [
    { title: 'Video Title 1', thumbnail: 'https://picsum.photos/320/180?random=1', description: 'Description 1', videoUrl: '/videos/video1.mp4' },
    { title: 'Video Title 2', thumbnail: 'https://picsum.photos/320/180?random=2', description: 'Description 2', videoUrl: '/videos/video2.mp4' },
    { title: 'Video Title 3', thumbnail: 'https://picsum.photos/320/180?random=3', description: 'Description 3', videoUrl: '/videos/video3.mp4' },
    { title: 'Video Title 4', thumbnail: 'https://picsum.photos/320/180?random=4', description: 'Description 4', videoUrl: '/videos/video2.mp4' },
    { title: 'Video Title 5', thumbnail: 'https://picsum.photos/320/180?random=5', description: 'Description 5', videoUrl: '/videos/video3.mp4' },
    { title: 'Video Title 6', thumbnail: 'https://picsum.photos/320/180?random=6', description: 'Description 6', videoUrl: '/videos/video2.mp4' },
    { title: 'Video Title 7', thumbnail: 'https://picsum.photos/320/180?random=7', description: 'Description 7', videoUrl: '/videos/video1.mp4' },
    { title: 'Video Title 8', thumbnail: 'https://picsum.photos/320/180?random=8', description: 'Description 8', videoUrl: '/videos/video2.mp4' },
    { title: 'Video Title 9', thumbnail: 'https://picsum.photos/320/180?random=9', description: 'Description 9', videoUrl: '/videos/video3.mp4' },
    { title: 'Video Title 10', thumbnail: 'https://picsum.photos/320/180?random=10', description: 'Description 10', videoUrl: '/videos/video1.mp4' },
    { title: 'Video Title 11', thumbnail: 'https://picsum.photos/320/180?random=11', description: 'Description 11', videoUrl: '/videos/video2.mp4' },
    { title: 'Video Title 12', thumbnail: 'https://picsum.photos/320/180?random=12', description: 'Description 12', videoUrl: '/videos/video3.mp4' },
    // Add the videoUrl for each video
  ];

  const handleThumbnailClick = (videoUrl) => {
    navigate(`/videoplayer?src=${encodeURIComponent(videoUrl)}&type=video/mp4`);
  };

  return (
    <div className='mainContainer'>
      <NavBar />
      <div className="content-container">
        <div className="container">
          {videos.map((video, index) => (
            <div className="video-card" key={index} onClick={() => handleThumbnailClick(video.videoUrl)}>
              <div className="thumbnail">
                <img src={video.thumbnail} alt={video.title} />
              </div>
              <div className="video-title">{video.title}</div>
              <div className="description-overlay">
                <div className="description-content">{video.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MainPage;