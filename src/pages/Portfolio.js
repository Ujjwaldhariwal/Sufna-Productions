import React, { useContext } from 'react';
// import link
import { Link } from 'react-router-dom';
// import motion
import { motion } from 'framer-motion';
// import transition
import { transition1 } from '../transitions';
// import cursor context
import { CursorContext } from '../context/CursorContext';
import './Portfolio.css';

const Portfolio = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);

  return (
    <motion.section
      initial={{ opacity: 0, y: '100%' }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: '100%' }}
      transition={transition1}
      className='section'
    >
      <div className='container mx-auto h-full relative'>
        <div className='flex flex-col lg:flex-row h-full items-center justify-start gap-x-24 text-center lg:text-left pt-24 lg:pt-36 pb-8'>
          <motion.div
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            initial={{ opacity: 0, y: '-80%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-80%' }}
            transition={transition1}
            className='flex flex-col lg:items-start'
          >
            
            <h1 className='h1'>Portfolio</h1>
            <p className='mb-12 max-w-sm'>
              Our portfolio showcases a diverse range of work including
              <b style={{ color: '#0a5647' }}> photoshoots, ad campaigns, brand shoots</b> and more.
              <br />
              <br />
              Click the <span style={{ color: '#fdde00' }}>yellow</span> button to explore our Photography Content and click the <span style={{ color: '#ff5a78' }}>pink</span> button to delve into our Video Content.
            </p>
            <div className="button-container">
              <Link to="https://sufna-img.vercel.app/" target='_blank'>
                <button className="btn-class-name1">
                  <span className="back"></span>
                  <span className="front"></span>
                </button>
              </Link>
              <Link to="https://sufna-vid.vercel.app/" target='_blank'>
                <button className="btn-class-name2">
                  <span className="back"></span>
                  <span className="front"></span>
                </button>
              </Link>
            </div>
          </motion.div>
          <div
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className='grid grid-cols-2 lg:gap-2 hidden lg:grid'
          >
            <div className='image-container'>
              <img
                className='portfolio-image'
                src="https://i.ibb.co/SfSyf9K/1.jpg"
                alt='1'
              />
            </div>
            <div className='image-container'>
              <img
                className='portfolio-image'
                src="https://i.ibb.co/Np6k4qR/2.jpg"
                alt='2'
              />
            </div>  
            <div className='image-container'>
              <img
                className='portfolio-image'
                src="https://i.ibb.co/LCn1kns/3.jpg"
                alt='3'
              />
            </div>
            <div className='image-container'>
              <img
                className='portfolio-image'
                src="https://i.ibb.co/LCC29HP/4.jpg"
                alt='4'
              />
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Portfolio;
