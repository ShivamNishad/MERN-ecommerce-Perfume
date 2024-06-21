import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';

const videos = [
  'https://www.w3schools.com/html/mov_bbb.mp4',
  'https://www.w3schools.com/html/movie.mp4',
  'https://www.w3schools.com/html/mov_bbb.mp4',
  'https://www.w3schools.com/html/movie.mp4',
];

const VideoSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [clickedIndex, setClickedIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setActiveIndex(index);
  };

  const handleMouseLeave = () => {
    setActiveIndex(null);
  };

  const handleClick = (index) => {
    setClickedIndex(index);
  };

  const handleCloseClick = () => {
    setClickedIndex(null);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % videos.length);
    }, 10000); // Change video every 10 seconds

    return () => clearInterval(intervalId);
  }, []);

  const handleVideoError = (index, error) => {
    console.error(`Error loading video at index ${index}:`, error);
  };

  return (
    <div className="py-8 text-center bg-[#001c25]">
      <h2 style={{ fontFamily: 'Abril Fatface', fontSize: '3rem', fontWeight: 400, color: 'rgb(222, 194, 126)', textAlign: 'center', marginBottom: '1rem' }}>
        MUFA  FRAGRANCE x  TRENDING
      </h2>
      <div className="flex flex-wrap overflow-hidden">
        {videos.map((video, index) => (
          <div 
            key={index} 
            className="flex-1 min-w-300px h-200px relative overflow-hidden"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleClick(index)}
          >
            {clickedIndex === index ? (
              <div className="absolute inset-0 flex justify-center items-center">
                <ReactPlayer
                  url={video}
                  playing
                  loop
                  muted
                  width="100%"
                  height="100%"
                  onClick={(e) => e.stopPropagation()} // Prevent closing on click inside the player
                  onError={(e) => handleVideoError(index, e)}
                />
                <button className="absolute top-2 right-2 bg-white text-gray-800 rounded-full p-2" onClick={handleCloseClick}>
                  Close
                </button>
              </div>
            ) : (
              <ReactPlayer
                url={video}
                playing={index === activeIndex || activeIndex === null}
                loop
                muted
                width="100%"
                height="100%"
                onError={(e) => handleVideoError(index, e)}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoSection;
