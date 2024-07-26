import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import About from '../pages/About';
import Portfolio from '../pages/Portfolio';
import Contact from '../pages/Contact';
import Clients from '../pages/Our_Clients';
import Footer from '../pages/footer';
import ScrollToTopButton from './ScrollToTopButton'; // Import the button
import './Home.css';

const Home = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    const handleCanPlay = () => {
      if (video) {
        video.play().catch(error => {
          console.error('Autoplay prevented:', error);
        });
      }
    };

    if (video) {
      video.addEventListener('canplay', handleCanPlay);
    }

    return () => {
      if (video) {
        video.removeEventListener('canplay', handleCanPlay);
      }
    };
  }, []);

  return (
    <>
      <div className="video-bg">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="bg-video"
          ref={videoRef}
        >
          <source src="https://ik.imagekit.io/UjjwalDhariwal/Sufna%20PRoductions/bg-videom.mp4?updatedAt=1721991051137" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="main">
          <h1 className="middle">
            Who Are We?
            <div className="roller">
              <span id="rolltext">
                Artists ?<br />
                Creators ?<br />
                Film-Makers ?<br />
              </span>
            </div>
          </h1>
        </div>
      </div>
      <br />
      <About />
      <Clients />
      <Portfolio />
      <Contact />
      <Footer />
      <ScrollToTopButton /> {/* Add the button here */}
    </>
  );
};

export default Home;
