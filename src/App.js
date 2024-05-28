import React, { useContext, useEffect, useRef } from 'react';
// import components
import Header from './components/Header';
import AnimRoutes from './components/AnimRoutes';
// import router
import { BrowserRouter as Router } from 'react-router-dom';
// import motion
import { motion } from 'framer-motion';
// import cursor context
// import { CursorContext } from './context/CursorContext';
// import audio
import backgroundMusic from './audio/bgmusic.mp3';

const App = () => {
  // const { cursorVariants, cursorBG } = useContext(CursorContext);
  const audioRef = useRef(null);

  useEffect(() => {
    const playAudio = () => {
      if (audioRef.current) {
        audioRef.current.play().catch(error => {
          console.error('Failed to play audio:', error);
        });
      }
    };

    // Try to play audio automatically (may fail due to autoplay policies)
    playAudio();

    // Add event listener for user interaction to play audio
    window.addEventListener('click', playAudio);

    return () => {
      window.removeEventListener('click', playAudio);
    };
  }, []);

  return (
    <>
      <Router>
        <Header />
        <AnimRoutes />
      </Router>
      {/* cursor */}
      {/* <motion.div
        variants={cursorVariants}
        animate={cursorBG}
        className='w-[32px] h-[32px] bg-primary fixed top-0 left-0 pointer-events-none z-50 rounded-full'
      ></motion.div> */}
      {/* background music */}
      <audio ref={audioRef} src={backgroundMusic} loop />
    </>
  );
};

export default App;
