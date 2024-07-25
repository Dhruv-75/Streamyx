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

  const [videoDetails, setVideoDetails] = useState({
    description: 'This is a sample description of the video.',
    uploadDate: 'July 23, 2024'
  });

  const allSuggestedVideos = [
    { title: 'Spring', thumbnail: 'https://video-streaming-storage-access.s3.amazonaws.com/thumbnails/video1.png', videoUrl: 'https://video-streaming-storage-access.s3.amazonaws.com/video1.mp4', description: 'A beautiful spring scenery.', uploadDate: 'March 21, 2024'},
    { title: 'City', thumbnail: 'https://video-streaming-storage-access.s3.amazonaws.com/thumbnails/video2.png', videoUrl: 'https://video-streaming-storage-access.s3.amazonaws.com/video2.mp4', description: 'A bustling cityscape.', uploadDate: 'April 15, 2024' },
    { title: 'Animals', thumbnail: 'https://video-streaming-storage-access.s3.amazonaws.com/thumbnails/video3.png', videoUrl: 'https://video-streaming-storage-access.s3.amazonaws.com/video3.mp4', description: 'Wild animals in their natural habitat.', uploadDate: 'May 10, 2024' },
    { title: 'Work', thumbnail: 'https://video-streaming-storage-access.s3.amazonaws.com/thumbnails/video4.png', videoUrl: 'https://video-streaming-storage-access.s3.amazonaws.com/video4.mp4', description: 'People working in an office.', uploadDate: 'June 5, 2024' },
    { title: 'Photography', thumbnail: 'https://video-streaming-storage-access.s3.amazonaws.com/thumbnails/video5.png', videoUrl: 'https://video-streaming-storage-access.s3.amazonaws.com/video5.mp4', description: 'Tips and tricks for photography.', uploadDate: 'July 1, 2024' },
    { title: 'Beach', thumbnail: 'https://video-streaming-storage-access.s3.amazonaws.com/thumbnails/video6.png', videoUrl: 'https://video-streaming-storage-access.s3.amazonaws.com/video6.mp4', description: 'A relaxing beach view.', uploadDate: 'August 15, 2024' },
    { title: 'City Traffic', thumbnail: 'https://video-streaming-storage-access.s3.amazonaws.com/thumbnails/video7.png', videoUrl: 'https://video-streaming-storage-access.s3.amazonaws.com/video7.mp4', description: 'Busy city traffic.', uploadDate: 'September 10, 2024' },
    { title: 'Ocean', thumbnail: 'https://video-streaming-storage-access.s3.amazonaws.com/thumbnails/video8.png', videoUrl: 'https://video-streaming-storage-access.s3.amazonaws.com/video8.mp4', description: 'Calm ocean waves.', uploadDate: 'October 20, 2024' },
    { title: 'Dancing Lights', thumbnail: 'https://video-streaming-storage-access.s3.amazonaws.com/thumbnails/video9.png', videoUrl: 'https://video-streaming-storage-access.s3.amazonaws.com/video9.mp4', description: 'Colorful lights dancing.', uploadDate: 'November 11, 2024' },
    { title: 'Dancing Lights 2', thumbnail: 'https://video-streaming-storage-access.s3.amazonaws.com/thumbnails/video10.png', videoUrl: 'https://video-streaming-storage-access.s3.amazonaws.com/video10.mp4', description: 'Another view of dancing lights.', uploadDate: 'December 5, 2024' },
    { title: 'Birds', thumbnail: 'https://video-streaming-storage-access.s3.amazonaws.com/thumbnails/video11.png', videoUrl: 'https://video-streaming-storage-access.s3.amazonaws.com/video11.mp4', description: 'Birds flying in the sky.', uploadDate: 'January 14, 2024' },
    { title: 'Love', thumbnail: 'https://video-streaming-storage-access.s3.amazonaws.com/thumbnails/video12.png', videoUrl: 'https://video-streaming-storage-access.s3.amazonaws.com/video12.mp4', description: 'A romantic love story.', uploadDate: 'February 14, 2024' }
  ];
  
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
        {/* <div className="video-controls">
          <button className="play" onClick={handlePlay}>Play</button>
          <button className="pause" onClick={() => videoRef.current.pause()}>Pause</button>
          <button className="forward" onClick={() => videoRef.current.currentTime += 10}>Forward 10s</button>
          <button className="backward" onClick={() => videoRef.current.currentTime -= 10}>Backward 10s</button>
        </div> */}
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
