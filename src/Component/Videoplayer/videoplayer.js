import React, { useRef, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './videoplayer.css';

const Videoplayer = () => {
  const location = useLocation();
  const videoRef = useRef(null);
  const navigate = useNavigate();

  const query = new URLSearchParams(location.search);
  const src = query.get('src');
  const type = query.get('type');
  const title = query.get('title') || 'Video Title';

  const allSuggestedVideos = [
    { title: 'Fountain', thumbnail: 'https://video-streaming-service-storage.s3.amazonaws.com/Thumbnails/video1.png', videoUrl: 'https://video-streaming-service-storage.s3.amazonaws.com/Videos/video1.mp4', description: 'A beautiful Fountain.', uploadDate: 'March 21, 2024', views: '10,000 views' },
    { title: 'City', thumbnail: 'https://video-streaming-service-storage.s3.amazonaws.com/Thumbnails/video2.png', videoUrl: 'https://video-streaming-service-storage.s3.amazonaws.com/Videos/video2.mp4', description: 'A bustling cityscape.', uploadDate: 'April 15, 2024', views: '20,000 views' },
    { title: 'Animals', thumbnail: 'https://video-streaming-service-storage.s3.amazonaws.com/Thumbnails/video3.png', videoUrl: 'https://video-streaming-service-storage.s3.amazonaws.com/Videos/video3.mp4', description: 'Wild animals in their natural habitat.', uploadDate: 'May 10, 2024', views: '30,000 views' },
    { title: 'Work', thumbnail: 'https://video-streaming-service-storage.s3.amazonaws.com/Thumbnails/video4.png', videoUrl: 'https://video-streaming-service-storage.s3.amazonaws.com/Videos/video4.mp4', description: 'People working in an office.', uploadDate: 'June 5, 2024', views: '15,000 views' },
    { title: 'Photography', thumbnail: 'https://video-streaming-service-storage.s3.amazonaws.com/Thumbnails/video5.png', videoUrl: 'https://video-streaming-service-storage.s3.amazonaws.com/Videos/video5.mp4', description: 'Tips and tricks for photography.', uploadDate: 'July 1, 2024', views: '25,000 views' },
    { title: 'Beach', thumbnail: 'https://video-streaming-service-storage.s3.amazonaws.com/Thumbnails/video6.png', videoUrl: 'https://video-streaming-service-storage.s3.amazonaws.com/Videos/video6.mp4', description: 'A relaxing beach view.', uploadDate: 'August 15, 2024', views: '5,000 views' },
    { title: 'City Traffic', thumbnail: 'https://video-streaming-service-storage.s3.amazonaws.com/Thumbnails/video7.png', videoUrl: 'https://video-streaming-service-storage.s3.amazonaws.com/Videos/video7.mp4', description: 'Busy city traffic.', uploadDate: 'September 10, 2024', views: '12,000 views' },
    { title: 'Ocean', thumbnail: 'https://video-streaming-service-storage.s3.amazonaws.com/Thumbnails/video8.png', videoUrl: 'https://video-streaming-service-storage.s3.amazonaws.com/Videos/video8.mp4', description: 'Calm ocean waves.', uploadDate: 'October 20, 2024', views: '18,000 views' },
    { title: 'Dancing Lights', thumbnail: 'https://video-streaming-service-storage.s3.amazonaws.com/Thumbnails/video9.png', videoUrl: 'https://video-streaming-service-storage.s3.amazonaws.com/Videos/video9.mp4', description: 'Colorful lights dancing.', uploadDate: 'November 11, 2024', views: '22,000 views' },
    { title: 'Dancing Lights 2', thumbnail: 'https://video-streaming-service-storage.s3.amazonaws.com/Thumbnails/video10.png', videoUrl: 'https://video-streaming-service-storage.s3.amazonaws.com/Videos/video10.mp4', description: 'Another view of dancing lights.', uploadDate: 'December 5, 2024', views: '16,000 views' },
    { title: 'Birds', thumbnail: 'https://video-streaming-service-storage.s3.amazonaws.com/Thumbnails/video11.png', videoUrl: 'https://video-streaming-service-storage.s3.amazonaws.com/Videos/video11.mp4', description: 'Birds flying in the sky.', uploadDate: 'January 14, 2024', views: '28,000 views' },
    { title: 'Love', thumbnail: 'https://video-streaming-service-storage.s3.amazonaws.com/Thumbnails/video12.png', videoUrl: 'https://video-streaming-service-storage.s3.amazonaws.com/Videos/video12.mp4', description: 'A romantic love story.', uploadDate: 'February 14, 2024', views: '35,000 views' }
  ];
  
  const [videoDetails, setVideoDetails] = useState({
    description: '',
    uploadDate: '',
    views: ''
  });
  
  const [suggestedVideos, setSuggestedVideos] = useState([]);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play().catch(error => {
        console.error("Play request failed", error);
      });
    }
  }, [src, type]);

  useEffect(() => {
    const currentVideo = allSuggestedVideos.find(video => video.videoUrl === src);
    if (currentVideo) {
      setVideoDetails({
        description: currentVideo.description,
        uploadDate: currentVideo.uploadDate,
        views: currentVideo.views
      });
    }

    const filteredVideos = allSuggestedVideos.filter(video => video.videoUrl !== src);
    const shuffleArray = (array) => {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    };

    const shuffledVideos = shuffleArray(filteredVideos);
    setSuggestedVideos(shuffledVideos.slice(0, 5));
  }, [src]);

  const handlePlay = () => {
    videoRef.current.play().catch(error => {
      console.error("Play request failed", error);
    });
  };

  const handleThumbnailClick = (videoUrl) => {
    navigate(`/videoplayer?src=${encodeURIComponent(videoUrl)}&type=video/mp4`);
  };

  return (
    <div className="video-page">
      <div className="video-container">
        <video ref={videoRef} controls>
          <source src={src} type={type} />
          Your browser does not support the video tag.
        </video>
        <div className="video-details">
          <h2>{title}</h2>
          <p>{videoDetails.description}</p>
          <p>{videoDetails.views}</p>
          <p>{videoDetails.uploadDate}</p>
        </div>
      </div>
      <div className="suggested-videos">
        {suggestedVideos.map((video, index) => (
          <div className="suggested-video-card" key={index} onClick={() => handleThumbnailClick(video.videoUrl)}>
            <img src={video.thumbnail} alt={video.title} />
            <div className="suggested-video-info">
              <div className="suggested-video-title">{video.title}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Videoplayer;
