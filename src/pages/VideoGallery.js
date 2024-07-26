import React, { useState } from 'react';
import Masonry from 'react-masonry-css';
import YouTube from 'react-youtube';
import { Parallax } from 'react-parallax';
import './VideoGallery.css';

const brands = [
  {
    name: 'Yakuza Electrics',
    videos: [
      'RAwDOZ4pz0k', // Video ID from URL
      '7vlq7fNQDWs',
      'A2djq0t_hA0',
      'eIjhsjpj7V4',
      'n38b1gysNP4'
    ]
  },
  {
    name: 'EduCaptain',
    videos: [ 
        'OLMIZ_IPijs', 
        '2Vju98MO_t8',
        '9_Sqf9UTXs8',
        'UutkEhRi7SU'
      ] 
  },
  {
    name: 'Short Films',
    videos: [
        'Vp2Wc1A7ao4',
        'suSKmHIK5NI',
        'Yzm2wJkTfs8'
      ] 
  },
  {
    name: 'Behind the Shoot',
    videos: [
        'qS7K6iy2REA',
        'FfHMyCJ2nPY',
        'dQ7RwZ5ZKy4', 
        'HjqUiaZw4Qg',
        '52-LRaICdo8'
      ] 
  },
];

const breakpoints = {
  default: 3,
  1100: 2,
  700: 1
};

const VideoGallery = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    document.body.classList.toggle('dark-mode');
  };

  return (
    <div className={`video-gallery ${theme}`}>
      <button className="theme-toggle-btn" onClick={toggleTheme}>
        <span className={`sun-moon-icon ${theme}`}></span>
      </button>
      <Parallax
        blur={{ min: -5, max: 15 }}
        bgImage="https://source.unsplash.com/random/1920x1080"
        bgImageAlt="background"
        strength={200}
      >
        <div className="parallax-content">
          <h1>Sufna Productions</h1>
          {brands.map((brand, index) => (
            <div key={index} className="brand-section">
              <h2>{brand.name}</h2>
              <Masonry
                breakpointCols={breakpoints}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column"
              >
                {brand.videos.map((videoId, idx) => (
                  <div key={idx} className="video-item">
                    <YouTube videoId={videoId} opts={{ height: '200', width: '100%' }} />
                  </div>
                ))}
              </Masonry>
            </div>
          ))}
        </div>
      </Parallax>
    </div>
  );
};

export default VideoGallery;
