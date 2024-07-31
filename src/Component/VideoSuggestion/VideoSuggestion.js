import React from 'react';
import './VideoSuggestion.css';

export const VideoSuggestion = () => {
  const videosuggestionArray = [
    {
      "thumbnail": "https://via.placeholder.com/300x180",
      "title": "Exploring the Universe: A Journey Through Space",
      "description": "Join us as we delve into the mysteries of the cosmos, exploring planets, stars, and galaxies far, far away.",
      "channel": "Space Enthusiasts",
      "duration": "15:37",
      "views": "1.2M",
      "uploadDate": "2023-06-15",
      "channelThumbnail": "https://via.placeholder.com/50",
      "likes": "45K"
    },
    {
      "thumbnail": "https://via.placeholder.com/300x180",
      "title": "The Art of Cooking: Mastering the Basics",
      "description": "Learn essential cooking techniques and recipes to elevate your culinary skills to the next level.",
      "channel": "Culinary Arts",
      "duration": "10:22",
      "views": "850K",
      "uploadDate": "2023-05-10",
      "channelThumbnail": "https://via.placeholder.com/50",
      "likes": "30K"
    },
    {
      "thumbnail": "https://via.placeholder.com/300x180",
      "title": "Tech Trends 2024: What to Expect",
      "description": "Stay ahead of the curve with our comprehensive guide to the latest and greatest in technology for 2024.",
      "channel": "Tech Talks",
      "duration": "8:45",
      "views": "500K",
      "uploadDate": "2024-01-01",
      "channelThumbnail": "https://via.placeholder.com/50",
      "likes": "20K"
    },
    {
      "thumbnail": "https://via.placeholder.com/300x180",
      "title": "Yoga for Beginners: Start Your Journey",
      "description": "Discover the benefits of yoga and learn basic poses and techniques to begin your practice.",
      "channel": "Wellness Warriors",
      "duration": "12:30",
      "views": "2.1M",
      "uploadDate": "2023-08-20",
      "channelThumbnail": "https://via.placeholder.com/50",
      "likes": "60K"
    },
    {
      "thumbnail": "https://via.placeholder.com/300x180",
      "title": "DIY Home Projects: Tips and Tricks",
      "description": "Get inspired with creative and budget-friendly DIY home improvement projects.",
      "channel": "Home Hacks",
      "duration": "9:15",
      "views": "950K",
      "uploadDate": "2023-11-05",
      "channelThumbnail": "https://via.placeholder.com/50",
      "likes": "35K"
    }
  ];

  return (
    <>
      {videosuggestionArray.map((video, index) => (
        <div key={index} className="card">
          <img src={video.thumbnail} alt="Video Thumbnail" />
          <div className="card-content">
            <h3 className="card-title">{video.title}</h3>
            <p className="card-description">{video.description}</p>
            <div className="card-channel">
              <img src={video.channelThumbnail} alt="Channel Thumbnail" />
              <span>{video.channel}</span>
            </div>
        
          </div>
        </div>
      ))}
    </>
  );
}
