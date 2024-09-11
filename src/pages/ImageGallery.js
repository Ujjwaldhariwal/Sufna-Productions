import React, { useEffect, useState, useRef } from 'react';
import Masonry from 'react-masonry-css';
import { Parallax } from 'react-parallax';
import LazyLoad from 'react-lazyload';
import './ImageGallery.css';

const images = [
  'https://ik.imagekit.io/UjjwalDhariwal/Sufna%20PRoductions/1.jpg?updatedAt=1722069423773',
  'https://ik.imagekit.io/UjjwalDhariwal/Sufna%20PRoductions/2.jpg?updatedAt=1722069437647',
  'https://ik.imagekit.io/UjjwalDhariwal/Sufna%20PRoductions/DSC07023.jpg?updatedAt=1722362352105',
  'https://ik.imagekit.io/UjjwalDhariwal/Sufna%20PRoductions/3.jpg?updatedAt=1722069354326',
  'https://ik.imagekit.io/UjjwalDhariwal/Sufna%20PRoductions/4.jpg?updatedAt=1722069470486',
  'https://ik.imagekit.io/UjjwalDhariwal/Sufna%20PRoductions/5.jpg?updatedAt=1722069468716',
  'https://ik.imagekit.io/UjjwalDhariwal/Sufna%20PRoductions/6.jpg?updatedAt=1722069461689',
  'https://ik.imagekit.io/UjjwalDhariwal/Sufna%20PRoductions/8.jpg?updatedAt=1722069359628',
  'https://ik.imagekit.io/UjjwalDhariwal/Sufna%20PRoductions/9.jpg?updatedAt=1722069361206',
  'https://ik.imagekit.io/UjjwalDhariwal/Sufna%20PRoductions/10.jpg?updatedAt=1722069477128',
  'https://ik.imagekit.io/UjjwalDhariwal/Sufna%20PRoductions/11.jpg?updatedAt=1722069457387',
  'https://ik.imagekit.io/UjjwalDhariwal/Sufna%20PRoductions/DSC07103.jpg?updatedAt=1722362350967',

  'https://ik.imagekit.io/UjjwalDhariwal/Sufna%20PRoductions/13.jpg?updatedAt=1722069374398',

  'https://ik.imagekit.io/UjjwalDhariwal/Sufna%20PRoductions/DSC07223.jpg?updatedAt=1722362349867',
  'https://ik.imagekit.io/UjjwalDhariwal/Sufna%20PRoductions/15.jpg?updatedAt=1722069381268',
  'https://ik.imagekit.io/UjjwalDhariwal/Sufna%20PRoductions/16.jpg?updatedAt=1722069406379',
  'https://ik.imagekit.io/UjjwalDhariwal/Sufna%20PRoductions/17.jpg?updatedAt=1722069426961',
  'https://ik.imagekit.io/UjjwalDhariwal/Sufna%20PRoductions/18.jpg?updatedAt=1722069425089',
  'https://ik.imagekit.io/UjjwalDhariwal/Sufna%20PRoductions/19.jpg?updatedAt=1722069429720',
  'https://ik.imagekit.io/UjjwalDhariwal/Sufna%20PRoductions/20.jpg?updatedAt=1722069432732',
  'https://ik.imagekit.io/UjjwalDhariwal/Sufna%20PRoductions/21.jpg?updatedAt=1722069431364',
  'https://ik.imagekit.io/UjjwalDhariwal/Sufna%20PRoductions/22.jpg?updatedAt=1722069353580',
  'https://ik.imagekit.io/UjjwalDhariwal/Sufna%20PRoductions/23.jpg?updatedAt=1722069352838',
  'https://ik.imagekit.io/UjjwalDhariwal/Sufna%20PRoductions/25.jpg?updatedAt=1722069353714',
  'https://ik.imagekit.io/UjjwalDhariwal/Sufna%20PRoductions/26.jpg?updatedAt=1722069352839',
  'https://ik.imagekit.io/UjjwalDhariwal/Sufna%20PRoductions/DSC07260.jpg?updatedAt=1722362346207'

];

const breakpoints = {
  default: 3,
  1100: 2,
  700: 1
};

const shuffleArray = (array) => {
  let shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

const ImageGallery = () => {
  const [shuffledImages, setShuffledImages] = useState(images);
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollTimeoutRef = useRef(null);
  const shuffleIntervalRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(true);
      clearTimeout(scrollTimeoutRef.current);
      scrollTimeoutRef.current = setTimeout(() => {
        setIsScrolling(false);
      }, 10000); // 10 seconds of no scroll
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeoutRef.current);
    };
  }, []);

  useEffect(() => {
    if (!isScrolling) {
      shuffleIntervalRef.current = setInterval(() => {
        setShuffledImages(shuffleArray(images));
      }, 20000); // Change every 20 seconds
    } else {
      clearInterval(shuffleIntervalRef.current);
    }

    return () => clearInterval(shuffleIntervalRef.current);
  }, [isScrolling]);

  return (
    <div className="image-gallery">
      <Parallax
        blur={{ min: -5, max: 15 }}
        bgImage="https://source.unsplash.com/random/1920x1080"
        bgImageAlt="background"
        strength={200}
      >
        <div className="parallax-content">
          <h1>Image Gallery</h1>
          <Masonry
            breakpointCols={breakpoints}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {shuffledImages.map((src, idx) => (
              <LazyLoad key={idx} height={200} offset={100} once>
                <div className="image-item">
                  <img src={src} alt={`Gallery ${idx}`} style={{ width: '100%', height: 'auto' }} />
                </div>
              </LazyLoad>
            ))}
          </Masonry>
        </div>
      </Parallax>
    </div>
  );
};

export default ImageGallery;
