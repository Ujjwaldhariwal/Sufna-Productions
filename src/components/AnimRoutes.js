import React, { useEffect } from 'react';
// import pages
import Home from '../pages/Home';
import About from '../pages/About';
import Portfolio from '../pages/Portfolio';
import Contact from '../pages/Contact';
// import the Clients component
import Clients from '../pages/Our_Clients';


// import routes route & useLocation hook
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

const AnimRoutes = () => {
  const location = useLocation();

  useEffect(() => {
    // Conditionally apply overflow-x-hidden class based on the current route
    if (location.pathname !== '/') {
      document.body.classList.add('overflow-x-hidden');
    } else {
      document.body.classList.remove('overflow-x-hidden');
    }
  }, [location]);

  return (
    <AnimatePresence initial={true} mode='wait'>
      <Routes key={location.pathname} location={location}>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/contact' element={<Contact />} />
        {/* Add the route for the Clients component */}
        <Route path='/clients' element={<Clients />} />
        
      </Routes>
    </AnimatePresence>
  );
};

export default AnimRoutes;
