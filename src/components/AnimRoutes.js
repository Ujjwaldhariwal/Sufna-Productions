import React, { Suspense, useEffect, lazy } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import './AnimRoutes.css';

// Lazy load pages
const Home = lazy(() => import('../pages/Home'));
const About = lazy(() => import('../pages/About'));
const Portfolio = lazy(() => import('../pages/Portfolio'));
const Contact = lazy(() => import('../pages/Contact'));
const Clients = lazy(() => import('../pages/Our_Clients'));
const VideoGallery = lazy(() => import('../pages/VideoGallery'));
const ImageGallery = lazy(() => import('../pages/ImageGallery'));

const LoadingFallback = () => (
  <div className="loading-fallback">
    <p>Loading...</p>
  </div>
);

const AnimRoutes = React.memo(() => {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== '/') {
      document.body.classList.add('overflow-x-hidden');
    } else {
      document.body.classList.remove('overflow-x-hidden');
    }
  }, [location]);

  return (
    <AnimatePresence initial={true} mode='wait'>
      <Suspense fallback={<LoadingFallback />}>
        <Routes key={location.pathname} location={location}>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/clients' element={<Clients />} />
          <Route path="/video-gallery" element={<VideoGallery />} />
          <Route path="/image-gallery" element={<ImageGallery />} />
        </Routes>
      </Suspense>
    </AnimatePresence>
  );
});

export default AnimRoutes;
