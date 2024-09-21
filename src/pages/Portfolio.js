import React, { useContext } from 'react';
import { Link } from 'react-router-dom'; // Import Link for internal navigation
import { CursorContext } from '../context/CursorContext';
import './Portfolio.css';
import './btn.css';

const Portfolio = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);

  return (
    <section className='section'>
      <div className='container mx-auto h-full relative'>
        <div className='flex flex-col lg:flex-row h-full items-center justify-start gap-x-24 text-center lg:text-left pt-24 lg:pt-36 pb-8'>
          <div
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className='flex flex-col lg:items-start'
          >
            <h1 className='h1'>Portfolio</h1>
            <p className='text'>
              Our portfolio showcases a diverse range of work including
              photoshoots, ad campaigns, brand shoots and more.
              <br />
              <br />
            </p>
            <div className="portfolio-button-container">
              <Link to="/image-gallery" >
                <button className="btn-abu">
                  <div>Photos</div>
                </button>
              </Link>
              <br />
              <Link to="/video-gallery">
                <button className="btn-abu">
                  <div>Videos</div>
                </button>
              </Link>
            </div>
          </div>
          <div
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className='grid grid-cols-2 lg:gap-2 hidden lg:grid'
          >
            <div className='image-container'>
              <img
                className='portfolio-image'
                src="https://ik.imagekit.io/UjjwalDhariwal/Sufna%20PRoductions/p1.jpg?updatedAt=1721991594640"
                alt='1'
              />
            </div>
            <div className='image-container'>
              <img
                className='portfolio-image'
                src="https://ik.imagekit.io/UjjwalDhariwal/Sufna%20PRoductions/p2.jpg?updatedAt=1721991594800"
                alt='2'
              />
            </div>
            <div className='image-container'>
              <img
                className='portfolio-image'
                src="https://ik.imagekit.io/UjjwalDhariwal/Sufna%20PRoductions/p3.jpg?updatedAt=1721991594768"
                alt='3'
              />
            </div>
            <div className='image-container'>
              <img
                className='portfolio-image'
                src="https://ik.imagekit.io/UjjwalDhariwal/Sufna%20PRoductions/p4.jpg?updatedAt=1721991594711"
                alt='4'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
