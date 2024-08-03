import React from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import './mainpage.css';

function MainPage() {
  // This hook lets you move to different pages in your app
  const navigate = useNavigate();

  // List of video details, like title, thumbnail image, description, and video URL
  const videos = [
    { title: 'Fountain', thumbnail: 'https://video-streaming-service-storage.s3.amazonaws.com/Thumbnails/video1.png', description: 'A beautiful Fountain.', videoUrl: 'https://video-streaming-service-storage.s3.amazonaws.com/Videos/video1.mp4' },
    { title: 'City', thumbnail: 'https://video-streaming-service-storage.s3.amazonaws.com/Thumbnails/video2.png', description: 'A bustling cityscape.', videoUrl: 'https://video-streaming-service-storage.s3.amazonaws.com/Videos/video2.mp4' },
    { title: 'Animals', thumbnail: 'https://video-streaming-service-storage.s3.amazonaws.com/Thumbnails/video3.png', description: 'Wild animals in their natural habitat.', videoUrl: 'https://video-streaming-service-storage.s3.amazonaws.com/Videos/video3.mp4' },
    { title: 'Work', thumbnail: 'https://video-streaming-service-storage.s3.amazonaws.com/Thumbnails/video4.png', description: 'People working in an office.', videoUrl: 'https://video-streaming-service-storage.s3.amazonaws.com/Videos/video4.mp4' },
    { title: 'Photography', thumbnail: 'https://video-streaming-service-storage.s3.amazonaws.com/Thumbnails/video5.png', description: 'Tips and tricks for photography.', videoUrl: 'https://video-streaming-service-storage.s3.amazonaws.com/Videos/video5.mp4' },
    { title: 'Beach', thumbnail: 'https://video-streaming-service-storage.s3.amazonaws.com/Thumbnails/video6.png', description: 'A relaxing beach view.', videoUrl: 'https://video-streaming-service-storage.s3.amazonaws.com/Videos/video6.mp4' },
    { title: 'City Traffic', thumbnail: 'https://video-streaming-service-storage.s3.amazonaws.com/Thumbnails/video7.png', description: 'Busy city traffic.', videoUrl: 'https://video-streaming-service-storage.s3.amazonaws.com/Videos/video7.mp4' },
    { title: 'Ocean', thumbnail: 'https://video-streaming-service-storage.s3.amazonaws.com/Thumbnails/video8.png', description: 'Calm ocean waves.', videoUrl: 'https://video-streaming-service-storage.s3.amazonaws.com/Videos/video8.mp4' },
    { title: 'Dancing Lights', thumbnail: 'https://video-streaming-service-storage.s3.amazonaws.com/Thumbnails/video9.png', description: 'Colorful lights dancing.', videoUrl: 'https://video-streaming-service-storage.s3.amazonaws.com/Videos/video9.mp4' },
    { title: 'Dancing Lights 2', thumbnail: 'https://video-streaming-service-storage.s3.amazonaws.com/Thumbnails/video10.png', description: 'Another view of dancing lights.', videoUrl: 'https://video-streaming-service-storage.s3.amazonaws.com/Videos/video10.mp4' },
    { title: 'Birds', thumbnail: 'https://video-streaming-service-storage.s3.amazonaws.com/Thumbnails/video11.png', description: 'Birds flying in the sky.', videoUrl: 'https://video-streaming-service-storage.s3.amazonaws.com/Videos/video11.mp4' },
    { title: 'Love', thumbnail: 'https://video-streaming-service-storage.s3.amazonaws.com/Thumbnails/video12.png', description: 'A romantic love story.', videoUrl: 'https://video-streaming-service-storage.s3.amazonaws.com/Videos/video12.mp4' }
  ];

  // This function is called when a thumbnail is clicked, and it navigates to the video player page with the video URL and title
  const handleThumbnailClick = (video) => {
    const { videoUrl, title } = video;
    navigate(`/videoplayer?src=${encodeURIComponent(videoUrl)}&type=video/mp4&title=${encodeURIComponent(title)}`);
  };

  return (
    <div className='mainContainer'>
      {/* This adds the navigation bar to the top */}
      <NavBar />
      <div className="content-container">
        <div className="container">
          {/* This creates a card for each video in the list */}
          {videos.map((video, index) => (
            <div className="video-card" key={index} onClick={() => handleThumbnailClick(video)}>
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
