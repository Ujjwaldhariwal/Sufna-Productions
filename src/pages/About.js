import React, { useContext } from 'react';
// import link
import { Link } from 'react-router-dom';
// import motion
import { motion } from 'framer-motion';
// import transition
import { transition1 } from '../transitions';
// import cursor context
import { CursorContext } from '../context/CursorContext';
import './btn.css';

const About = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  return (
    <motion.section
      initial={{ opacity: 0, y: '100%' }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: '100%' }}
      transition={transition1}
      className='section'
    >
      <div
        onMouseEnter={mouseEnterHandler}
        onMouseLeave={mouseLeaveHandler}
        className='container mx-auto h-full relative'
      >
        {/* text & img wrapper */}
        <div className='flex flex-col lg:flex-row h-full items-center justify-center gap-x-24 text-center lg:text-left lg:pt-16'>
          {/* image */}
          <div className='flex-1 max-h-96 lg:max-h-max order-2 lg:order-none overflow-hidden hidden lg:block'>
            <img src="https://i.ibb.co/0jz3C5c/dhr1.jpg" alt="Woman" />
          </div>
          {/* text */}
          <motion.div
            initial={{ opacity: 0, y: '-80%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-80%' }}
            transition={transition1}
            className='flex-1 pt-36 pb-14 lg:pt-0 lg:w-auto z-10 flex flex-col justify-center items-center lg:items-start'
          >
            <h1 className='h1'>About Us</h1>
            <p className='mb-12 max-w-sm'>
              At Sufna Productions, we're not just another media production agency - we're the
              <b> storytellers, the visionaries</b> and the creative engine that brings your brand's narrative to life.
              <br />
              <br />
              We are passionate about helping modern-day brands make captivating, creative, and high-quality advertisements
              that leave a lasting impression.
            </p>
            <Link to={'/portfolio'} >
              <button className="btn-abu">
                <div> Our Work</div>
                <svg fill="none" viewBox="0 0 24 24" height="25px" width="25px" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" stroke="white" d="M11.6801 14.62L14.2401 12.06L11.6801 9.5"></path>
                  <path stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" stroke="white" d="M4 12.0601H14.17"></path>
                  <path stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" stroke="white" d="M12 4C16.42 4 20 7 20 12C20 17 16.42 20 12 20"></path>
                </svg>
              </button>
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
