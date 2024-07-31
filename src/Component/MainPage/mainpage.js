import React from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import './mainpage.css';

function MainPage() {
  const navigate = useNavigate();

  const videos = [
    { title: 'Spring', thumbnail: 'https://video-streaming-storage-access.s3.amazonaws.com/thumbnails/video1.png', description: 'A beautiful spring scenery.', videoUrl: 'https://video-streaming-storage-access.s3.amazonaws.com/video1.mp4' },
    { title: 'City', thumbnail: 'https://video-streaming-storage-access.s3.amazonaws.com/thumbnails/video2.png', description: 'A bustling cityscape.', videoUrl: 'https://video-streaming-storage-access.s3.amazonaws.com/video2.mp4' },
    { title: 'Animals', thumbnail: 'https://video-streaming-storage-access.s3.amazonaws.com/thumbnails/video3.png', description: 'Wild animals in their natural habitat.', videoUrl: 'https://video-streaming-storage-access.s3.amazonaws.com/video3.mp4' },
    { title: 'Work', thumbnail: 'https://video-streaming-storage-access.s3.amazonaws.com/thumbnails/video4.png', description: 'People working in an office.', videoUrl: 'https://video-streaming-storage-access.s3.amazonaws.com/video4.mp4' },
    { title: 'Photography', thumbnail: 'https://video-streaming-storage-access.s3.amazonaws.com/thumbnails/video5.png', description: 'Tips and tricks for photography.', videoUrl: 'https://video-streaming-storage-access.s3.amazonaws.com/video5.mp4' },
    { title: 'Beach', thumbnail: 'https://video-streaming-storage-access.s3.amazonaws.com/thumbnails/video6.png', description: 'A relaxing beach view.', videoUrl: 'https://video-streaming-storage-access.s3.amazonaws.com/video6.mp4' },
    { title: 'City Traffic', thumbnail: 'https://video-streaming-storage-access.s3.amazonaws.com/thumbnails/video7.png', description: 'Busy city traffic.', videoUrl: 'https://video-streaming-storage-access.s3.amazonaws.com/video7.mp4' },
    { title: 'Ocean', thumbnail: 'https://video-streaming-storage-access.s3.amazonaws.com/thumbnails/video8.png', description: 'Calm ocean waves.', videoUrl: 'https://video-streaming-storage-access.s3.amazonaws.com/video8.mp4' },
    { title: 'Dancing Lights', thumbnail: 'https://video-streaming-storage-access.s3.amazonaws.com/thumbnails/video9.png', description: 'Colorful lights dancing.', videoUrl: 'https://video-streaming-storage-access.s3.amazonaws.com/video9.mp4' },
    { title: 'Dancing Lights 2', thumbnail: 'https://video-streaming-storage-access.s3.amazonaws.com/thumbnails/video10.png', description: 'Another view of dancing lights.', videoUrl: 'https://video-streaming-storage-access.s3.amazonaws.com/video10.mp4' },
    { title: 'Birds', thumbnail: 'https://video-streaming-storage-access.s3.amazonaws.com/thumbnails/video11.png', description: 'Birds flying in the sky.', videoUrl: 'https://video-streaming-storage-access.s3.amazonaws.com/video11.mp4' },
    { title: 'Love', thumbnail: 'https://video-streaming-storage-access.s3.amazonaws.com/thumbnails/video12.png', description: 'A romantic love story.', videoUrl: 'https://video-streaming-storage-access.s3.amazonaws.com/video12.mp4' }
  ];

  const handleThumbnailClick = (video) => {
    const { videoUrl, title } = video;
    navigate(`/videoplayer?src=${encodeURIComponent(videoUrl)}&type=video/mp4&title=${encodeURIComponent(title)}`);
  };

  return (
    <div className='mainContainer'>
      <NavBar />
      <div className="content-container">
        <div className="container">
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
