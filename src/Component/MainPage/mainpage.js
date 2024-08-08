import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import './mainpage.css';

// Function to shuffle an array
const shuffleArray = (array) => {
  let shuffledArray = array.slice();
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

function MainPage() {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const videosPerPage = 12;
  
  // List of video details with updated URLs for Gym, Fitness, and Diet categories
  const videos = [
    // Gym Videos
    { title: 'Full Body Workout', thumbnail: 'https://video-streaming-service-storage.s3.amazonaws.com/Gym+Thumbnail/Gym1.png', description: 'Gym exercise routines.', videoUrl: 'https://video-streaming-service-storage.s3.amazonaws.com/Gym+Exercise/Gym1.mp4' },
    { title: 'Advanced Techniques', thumbnail: 'https://video-streaming-service-storage.s3.amazonaws.com/Gym+Thumbnail/Gym2.png', description: 'Advanced gym workouts.', videoUrl: 'https://video-streaming-service-storage.s3.amazonaws.com/Gym+Exercise/Gym2.mp4' },
    { title: 'Strength Training', thumbnail: 'https://video-streaming-service-storage.s3.amazonaws.com/Gym+Thumbnail/Gym3.png', description: 'Strength training exercises.', videoUrl: 'https://video-streaming-service-storage.s3.amazonaws.com/Gym+Exercise/Gym3.mp4' },
    { title: 'Cardio Routine', thumbnail: 'https://video-streaming-service-storage.s3.amazonaws.com/Gym+Thumbnail/Gym4.png', description: 'Cardio workouts.', videoUrl: 'https://video-streaming-service-storage.s3.amazonaws.com/Gym+Exercise/Gym4.mp4' },
    { title: 'Full-Body Routine', thumbnail: 'https://video-streaming-service-storage.s3.amazonaws.com/Gym+Thumbnail/Gym5.png', description: 'Full-body workouts.', videoUrl: 'https://video-streaming-service-storage.s3.amazonaws.com/Gym+Exercise/Gym5.mp4' },
    { title: 'Core Strengthening', thumbnail: 'https://video-streaming-service-storage.s3.amazonaws.com/Gym+Thumbnail/Gym6.png', description: 'Core strengthening routines.', videoUrl: 'https://video-streaming-service-storage.s3.amazonaws.com/Gym+Exercise/Gym6.mp4' },
    { title: 'Flexibility Training', thumbnail: 'https://video-streaming-service-storage.s3.amazonaws.com/Gym+Thumbnail/Gym7.png', description: 'Flexibility exercises.', videoUrl: 'https://video-streaming-service-storage.s3.amazonaws.com/Gym+Exercise/Gym7.mp4' },
    { title: 'Weight Lifting', thumbnail: 'https://video-streaming-service-storage.s3.amazonaws.com/Gym+Thumbnail/Gym8.png', description: 'Weight lifting techniques.', videoUrl: 'https://video-streaming-service-storage.s3.amazonaws.com/Gym+Exercise/Gym8.mp4' },
    { title: 'Bodyweight Workouts', thumbnail: 'https://video-streaming-service-storage.s3.amazonaws.com/Gym+Thumbnail/Gym9.png', description: 'Bodyweight exercises.', videoUrl: 'https://video-streaming-service-storage.s3.amazonaws.com/Gym+Exercise/Gym9.mp4' },
    { title: 'HIIT Training', thumbnail: 'https://video-streaming-service-storage.s3.amazonaws.com/Gym+Thumbnail/Gym10.png', description: 'High-intensity interval training.', videoUrl: 'https://video-streaming-service-storage.s3.amazonaws.com/Gym+Exercise/Gym10.mp4' },

    // Fitness Videos
    { title: 'Basic Workout', thumbnail: 'https://video-streaming-service-storage.s3.amazonaws.com/Fitness+Thumbnails/Fitness1.png', description: 'Basic fitness routines.', videoUrl: 'https://video-streaming-service-storage.s3.amazonaws.com/Fitness+Videos/Fitness1.mp4' },
    { title: 'Cardio Exercises', thumbnail: 'https://video-streaming-service-storage.s3.amazonaws.com/Fitness+Thumbnails/Fitness2.png', description: 'Cardio exercises.', videoUrl: 'https://video-streaming-service-storage.s3.amazonaws.com/Fitness+Videos/Fitness2.mp4' },
    { title: 'Strength Training', thumbnail: 'https://video-streaming-service-storage.s3.amazonaws.com/Fitness+Thumbnails/Fitness3.png', description: 'Strength training routines.', videoUrl: 'https://video-streaming-service-storage.s3.amazonaws.com/Fitness+Videos/Fitness3.mp4' },
    { title: 'Endurance Training', thumbnail: 'https://video-streaming-service-storage.s3.amazonaws.com/Fitness+Thumbnails/Fitness4.png', description: 'Endurance training.', videoUrl: 'https://video-streaming-service-storage.s3.amazonaws.com/Fitness+Videos/Fitness4.mp4' },
    { title: 'Yoga and Flexibility', thumbnail: 'https://video-streaming-service-storage.s3.amazonaws.com/Fitness+Thumbnails/Fitness5.png', description: 'Yoga and flexibility.', videoUrl: 'https://video-streaming-service-storage.s3.amazonaws.com/Fitness+Videos/Fitness5.mp4' },
    { title: 'Bodyweight Workouts', thumbnail: 'https://video-streaming-service-storage.s3.amazonaws.com/Fitness+Thumbnails/Fitness6.png', description: 'Bodyweight workouts.', videoUrl: 'https://video-streaming-service-storage.s3.amazonaws.com/Fitness+Videos/Fitness6.mp4' },
    { title: 'Interval Training', thumbnail: 'https://video-streaming-service-storage.s3.amazonaws.com/Fitness+Thumbnails/Fitness7.png', description: 'Interval training.', videoUrl: 'https://video-streaming-service-storage.s3.amazonaws.com/Fitness+Videos/Fitness7.mp4' },
    { title: 'High-Intensity Workouts', thumbnail: 'https://video-streaming-service-storage.s3.amazonaws.com/Fitness+Thumbnails/Fitness8.png', description: 'High-intensity workouts.', videoUrl: 'https://video-streaming-service-storage.s3.amazonaws.com/Fitness+Videos/Fitness8.mp4' },
    { title: 'Training for Athletes', thumbnail: 'https://video-streaming-service-storage.s3.amazonaws.com/Fitness+Thumbnails/Fitness9.png', description: 'Training for athletes.', videoUrl: 'https://video-streaming-service-storage.s3.amazonaws.com/Fitness+Videos/Fitness9.mp4' },
    { title: 'Fitness Challenges', thumbnail: 'https://video-streaming-service-storage.s3.amazonaws.com/Fitness+Thumbnails/Fitness10.png', description: 'Fitness challenges.', videoUrl: 'https://video-streaming-service-storage.s3.amazonaws.com/Fitness+Videos/Fitness10.mp4' },

    // Diet Videos
    { title: 'Healthy Eating Habits', thumbnail: 'https://video-streaming-service-storage.s3.amazonaws.com/Diet+Thumbnails/Diet1.png', description: 'Tips for healthy eating habits.', videoUrl: 'https://video-streaming-service-storage.s3.amazonaws.com/Diet+Videos/Diet1.mp4' },
    { title: 'Meal Planning Tips', thumbnail: 'https://video-streaming-service-storage.s3.amazonaws.com/Diet+Thumbnails/Diet2.png', description: 'Effective meal planning tips.', videoUrl: 'https://video-streaming-service-storage.s3.amazonaws.com/Diet+Videos/Diet2.mp4' },
    { title: 'Nutrition Basics', thumbnail: 'https://video-streaming-service-storage.s3.amazonaws.com/Diet+Thumbnails/Diet3.png', description: 'Understanding nutrition basics.', videoUrl: 'https://video-streaming-service-storage.s3.amazonaws.com/Diet+Videos/Diet3.mp4' },
    { title: 'Weight Loss Strategies', thumbnail: 'https://video-streaming-service-storage.s3.amazonaws.com/Diet+Thumbnails/Diet4.png', description: 'Strategies for effective weight loss.', videoUrl: 'https://video-streaming-service-storage.s3.amazonaws.com/Diet+Videos/Diet4.mp4' },
    { title: 'Balanced Diet Plans', thumbnail: 'https://video-streaming-service-storage.s3.amazonaws.com/Diet+Thumbnails/Diet5.png', description: 'Creating balanced diet plans.', videoUrl: 'https://video-streaming-service-storage.s3.amazonaws.com/Diet+Videos/Diet5.mp4' },
    { title: 'Healthy Recipes', thumbnail: 'https://video-streaming-service-storage.s3.amazonaws.com/Diet+Thumbnails/Diet6.png', description: 'Delicious and healthy recipes.', videoUrl: 'https://video-streaming-service-storage.s3.amazonaws.com/Diet+Videos/Diet6.mp4' },
    { title: 'Diet for Muscle Gain', thumbnail: 'https://video-streaming-service-storage.s3.amazonaws.com/Diet+Thumbnails/Diet7.png', description: 'Nutrition for muscle growth.', videoUrl: 'https://video-streaming-service-storage.s3.amazonaws.com/Diet+Videos/Diet7.mp4' },
    { title: 'Low-Carb Diets', thumbnail: 'https://video-streaming-service-storage.s3.amazonaws.com/Diet+Thumbnails/Diet8.png', description: 'Exploring low-carb diet options.', videoUrl: 'https://video-streaming-service-storage.s3.amazonaws.com/Diet+Videos/Diet8.mp4' },
    { title: 'Meal Prep for Success', thumbnail: 'https://video-streaming-service-storage.s3.amazonaws.com/Diet+Thumbnails/Diet9.png', description: 'Meal prep strategies for success.', videoUrl: 'https://video-streaming-service-storage.s3.amazonaws.com/Diet+Videos/Diet9.mp4' },
    { title: 'Eating for Energy', thumbnail: 'https://video-streaming-service-storage.s3.amazonaws.com/Diet+Thumbnails/Diet10.png', description: 'Eating habits for increased energy.', videoUrl: 'https://video-streaming-service-storage.s3.amazonaws.com/Diet+Videos/Diet10.mp4' },
];

const shuffledVideos = shuffleArray(videos);
  const indexOfLastVideo = currentPage * videosPerPage;
  const indexOfFirstVideo = indexOfLastVideo - videosPerPage;
  const currentVideos = shuffledVideos.slice(indexOfFirstVideo, indexOfLastVideo);

  const totalPages = Math.ceil(videos.length / videosPerPage);

  const nextPage = () => setCurrentPage(prevPage => prevPage + 1);
  const prevPage = () => setCurrentPage(prevPage => prevPage - 1);

  const handleThumbnailClick = (video) => {
    const { videoUrl, title } = video;
    navigate(`/videoplayer?src=${encodeURIComponent(videoUrl)}&type=video/mp4&title=${encodeURIComponent(title)}`);
  };

  return (
    <div className='mainContainer'>
      <NavBar />
      <div className="content-container">
        <div className="container">
          {currentVideos.map((video, index) => (
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
        <div className="button-container">
          <button
            className={`button ${currentPage === 1 ? 'disabled' : ''}`}
            onClick={prevPage}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <button
            className={`button ${currentPage === totalPages ? 'disabled' : ''}`}
            onClick={nextPage}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default MainPage;