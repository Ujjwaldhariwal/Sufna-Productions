import React, { useEffect, useRef, useState } from 'react';
import Header from './components/Header';
import AnimRoutes from './components/AnimRoutes';
import { BrowserRouter as Router } from 'react-router-dom';
import Flower from './pages/Flower';
import backgroundMusic from './audio/bgmusic.mp3';

const App = () => {
  const [showLoader, setShowLoader] = useState(true);
  const audioRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 3600); // 2 seconds

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const playAudio = () => {
      if (audioRef.current) {
        audioRef.current.play().catch(error => {
          console.error('Failed to play audio:', error);
        });
      }
    };

    playAudio();

    window.addEventListener('click', playAudio);

    return () => {
      window.removeEventListener('click', playAudio);
    };
  }, []);

  return (
    <>
      {showLoader && <Flower />} {/* Render the Flower loader if showLoader is true */}
      <div style={{ display: showLoader ? 'none' : 'block' }}> {/* Hide content while loader is visible */}
        <Router>
          <Header />
          <AnimRoutes />
        </Router>
      </div>
      {/* background music */}
      <audio ref={audioRef} src={backgroundMusic} loop />
    </>
  );
};

export default App;
