import React, { useEffect, useRef } from 'react';
import bgVideom from '../img/header/bg-videom.mp4'; // Importing the video
import './Home.css';


const Home = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.addEventListener('timeupdate', handleTimeUpdate);
    }
    return () => {
      if (videoRef.current) {
        videoRef.current.removeEventListener('timeupdate', handleTimeUpdate);
      }
    };
  }, []);

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      if (videoRef.current.currentTime >= videoRef.current.duration - 2) {
        videoRef.current.currentTime = 0;
        videoRef.current.play();
      }
    }
  };

  return (
    <>
      <div className="video-bg">
        <video autoPlay loop muted className="bg-video" ref={videoRef}>
          <source src={bgVideom} type="video/mp4" /> {/* Using imported video */}
          Your browser does not support the video tag.
        </video>
        <div className="main">
          <h1 className='middle'>Who Are We?
             <div className="roller">
              <span id="rolltext">
                Artists ?<br />
                Creators ?<br />
                Film-Makers ?<br />
                <span id="spare-time">We Are Sufna Productions</span><br />
              </span>
            </div> 
          </h1>
        </div>
      </div>
    </>
  );
};

export default Home;
