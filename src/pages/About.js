import React, { useContext } from 'react';
// import link
import { Link } from 'react-router-dom';
// import cursor context
import { CursorContext } from '../context/CursorContext';
import './btn.css';
import './about.css';

const About = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  return (
    <section className='section'>
      <div
        onMouseEnter={mouseEnterHandler}
        onMouseLeave={mouseLeaveHandler}
        className='container mx-auto h-full relative'
      >
        {/* text & img wrapper */}
        <div className='flex flex-col lg:flex-row h-full items-center justify-center gap-x-24 text-center lg:text-left lg:pt-16'>
          {/* image */}
          <div className='flex-1 max-h-96 lg:max-h-max order-2 lg:order-none overflow-hidden hidden lg:block'>
            <img src="https://ik.imagekit.io/UjjwalDhariwal/Sufna%20PRoductions/dhr1%20(1).jpg?updatedAt=1721991344486" alt="About Us" />
          </div>
          {/* text */}
          <div className='flex-1 pt-20 pb-14 lg:pt-0 lg:w-auto z-10 flex flex-col items-center lg:items-start connect-section'>
            <h1 className='h1'>About Us</h1>
            <p className='mb-12 max-w-sm para'>
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
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
