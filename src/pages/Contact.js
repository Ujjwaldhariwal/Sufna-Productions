import React, { useContext } from 'react';
import { CursorContext } from '../context/CursorContext';
import './btn.css';
import './contact.css'; // Import the new CSS file
import { FaFacebookF, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';

const Contact = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);

  const handleEmailClick = () => {
    window.location.href = "mailto:business@sufnaproductions.com";
  };

  const handleWhatsAppClick = () => {
    window.location.href = "https://wa.me/919779426400";
  };

  return (
    <section className='section bg-white'>
      <div className='container mx-auto h-full'>
        <div className='flex flex-col lg:flex-row h-full items-center justify-start pt-32 gap-x-8 text-center lg:text-left'>
          {/* bg */}
          <div className='hidden lg:flex bg-[#f5f5f5] absolute bottom-0 left-0 right-0 top-72 -z-10'></div>
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
              <a href="https://www.linkedin.com/company/sufnaproductions/">
                <FaLinkedin className='social-icon4' />
              </a>
            </div>
          </div>
          {/* image */}
          <div
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className='lg:flex-1'
          >
            <img src='https://ik.imagekit.io/UjjwalDhariwal/Sufna%20PRoductions/dhr2.png?updatedAt=1721991035408' alt='Contact' className='woman-img' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
