import React from 'react';
import Masonry from 'react-masonry-css';
import { Parallax } from 'react-parallax';
import './ImageGallery.css';

// Updated image URLs
const images = [
  'https://i.ibb.co/6rsL3dT/1.jpg',
  'https://i.ibb.co/mqYs7gM/2.jpg',
  'https://i.ibb.co/fvNZWdr/3.jpg',
  'https://i.ibb.co/KLh1dXn/4.jpg',
  'https://i.ibb.co/B4PTVYy/5.jpg',
  'https://i.ibb.co/bFzGsB6/6.jpg',
  'https://i.ibb.co/PwY15s5/7.jpg',
  'https://i.ibb.co/X2RCTC3/8.jpg',
  'https://i.ibb.co/Z66B9hH/9.jpg',
  'https://i.ibb.co/X4dD2nb/10.jpg',
  'https://i.ibb.co/5G8Y7nq/11.jpg',
  'https://i.ibb.co/DLPwRTb/12.jpg',
  'https://i.ibb.co/g9f29zk/13.jpg',
  'https://i.ibb.co/mBB8Str/14.jpg',
  'https://i.ibb.co/rxMHz3N/15.jpg',
  'https://i.ibb.co/f89tFg2/16.jpg',
  'https://i.ibb.co/cCD7fG8/17.jpg',
  'https://i.ibb.co/LpR3Hrr/18.jpg',
  'https://i.ibb.co/4KsBgvh/19.jpg',
  'https://i.ibb.co/ZmkVscj/20.jpg',
  'https://i.ibb.co/7Kz4yhj/21.jpg',
  'https://i.ibb.co/0rNzBWB/22.jpg',
  'https://i.ibb.co/M8QdgFk/23.jpg',
  'https://i.ibb.co/mNHRW5V/25.jpg',
  'https://i.ibb.co/LdTCHGz/26.jpg'
];

const breakpoints = {
  default: 3,
  1100: 2,
  700: 1
};

const ImageGallery = () => {
  return (
    <div className="image-gallery">
      <Parallax
        blur={{ min: -5, max: 15 }}
        bgImage="https://source.unsplash.com/random/1920x1080"
        bgImageAlt="background"
        strength={200}
      >
        <div className="parallax-content">
          <h1>Artistic Image Gallery</h1>
          <Masonry
            breakpointCols={breakpoints}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {images.map((src, idx) => (
              <div key={idx} className="image-item">
                <img src={src} alt={`Gallery ${idx}`} style={{ width: '100%', height: 'auto' }} />
              </div>
            ))}
          </Masonry>
        </div>
      </Parallax>
    </div>
  );
};

export default ImageGallery;
