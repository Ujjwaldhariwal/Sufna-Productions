import React, { useContext, useState, useEffect } from 'react';
// import images
import WomanImg from '../img/home/woman.gif';
import WomanImg2 from '../img/home/woman2.gif';
import WomanImg3 from '../img/home/woman3.gif';

// import link
import { Link } from 'react-router-dom';
// import motion
import { motion } from 'framer-motion';
// import transition
import { transition1 } from '../transitions';
// cursor context
import { CursorContext } from '../context/CursorContext';
// import Typed
import { ReactTyped as Typed } from 'react-typed';

const Home = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);

  const images = [WomanImg, WomanImg2, WomanImg3];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 6000); // Change image every 6 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={transition1}
      className='section'
    >
      <div className='container mx-auto h-full relative'>
        {/* text & img wrapper */}
        <div className='flex flex-col justify-center h-full'>
          {/* text */}
          <motion.div
            initial={{ opacity: 0, y: '-50%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-50%' }}
            transition={transition1}
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className='w-full pt-36 pb-14 lg:pt-0 lg:pb-0 lg:w-auto z-10 lg:absolute flex flex-col justify-center items-center lg:items-start'
          >
            <h1 className='h1 text-[#0a5647]'>
              We Are <br />
              <Typed
                strings={['Young', 'Artists', 'Filmmakers']}
                typeSpeed={100}
                backSpeed={50}
                loop
              />
            </h1>
            <Link to={'/contact'} className='btn mb-[30px]'>
              Hire Us
            </Link>
          </motion.div>
          {/* image */}
          <div className='flex justify-end items-end h-full w-full'>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              transition={transition1}
              className='relative overflow-hidden'
              style={{ position: 'absolute', bottom: 0, right: 0, width: '500px', height: '775px',marginRight:'30px' }}
            >
              <motion.img
                whileHover={{ scale: 1.1 }}
                transition={transition1}
                src={images[currentImage]}
                alt=''
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Home;
