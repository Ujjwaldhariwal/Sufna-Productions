import React, { useEffect, useRef, useState } from 'react';
import Header from './components/Header';
import AnimRoutes from './components/AnimRoutes';
import { BrowserRouter as Router } from 'react-router-dom';
import Flower from './pages/Flower';
import { SpeedInsights } from "@vercel/speed-insights/react"

const App = () => {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 3600); // 2 seconds

    return () => clearTimeout(timer);
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
      <SpeedInsights/>
      {/* background music */}
    </>
  );
};

export default App;
