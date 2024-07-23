import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { transition1 } from '../transitions';
import { CursorContext } from '../context/CursorContext';
import './btn.css';
import './contact.css'; // Import the new CSS file
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';
import dhruv from '../img/contact/dhr2.png'; // Import the new image

const Contact = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);

  const handleEmailClick = () => {
    window.location.href = "mailto:business@sufnaproductions.com";
  };

  const handleWhatsAppClick = () => {
    window.location.href = "https://wa.me/919779426400";
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: '100%' }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: '100%' }}
      transition={transition1}
      className='section bg-white'
    >
      <div className='container mx-auto h-full'>
        <div className='flex flex-col lg:flex-row h-full items-center justify-start pt-32 gap-x-8 text-center lg:text-left'>
          {/* bg */}
          <motion.div
            initial={{ opacity: 0, y: '100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '100%' }}
            transition={transition1}
            className='hidden lg:flex bg-[#f5f5f5] absolute bottom-0 left-0 right-0 top-72 -z-10'
          ></motion.div>
          {/* text & form */}
          <div
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className='lg:flex-1 lg:pt-32 px-4'
          >
            <h1 className='h1'>Contact Us</h1>
            <div className='button-wrapper'>
              <button className="btn-abu" onClick={handleEmailClick}>
                <div> E-mail </div>
              </button>
              <button className='btn-abu' onClick={handleWhatsAppClick}>
                <div>Whatsapp</div>
              </button>
            </div>
            <div className='flex justify-center lg:hidden gap-x-4 mt-4'>
              <a href="https://www.facebook.com/people/Sufna-Productions/61550937880697/?mibextid=LQQJ4d">
                <FaFacebookF className='social-icon1' />
              </a>
              <a href="https://www.instagram.com/sufna.productions/">
                <FaInstagram className='social-icon2' />
              </a>
              <a href="https://www.youtube.com/@Sufna.Productions">
                <FaYoutube className='social-icon3' />
              </a>
            </div>
          </div>
          {/* image */}
          <motion.div
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            initial={{ opacity: 0, y: '100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '100%' }}
            transition={{ transition: transition1, duration: 1.5 }}
            className='lg:flex-1'
          >
            <img src={dhruv} alt='Contact' className='woman-img' />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
