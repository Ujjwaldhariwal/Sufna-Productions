import React, { useContext, useEffect, useState } from 'react';
import Socials from './Socials';
import MobileNav from './MobileNav';
import { Link } from 'react-router-dom';
import { CursorContext } from '../context/CursorContext';
import { debounce } from 'lodash'; // Ensure lodash is installed
import './Header.css'; // Import the CSS file

const Header = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showHeader, setShowHeader] = useState(true);

  const handleScroll = debounce(() => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > lastScrollY) {
      // Scrolling down
      setShowHeader(false);
    } else {
      // Scrolling up
      setShowHeader(true);
    }
    setLastScrollY(currentScrollY);
  }, 10); // Adjust the debounce delay if needed

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]); // Include handleScroll in dependencies

  return (
    <header
      className={`fixed top-0 left-0 w-full px-4 md:px-8 lg:px-12 xl:px-16 2xl:px-24 z-30 h-16 md:h-20 lg:h-24 xl:h-28 2xl:h-32 flex items-center justify-between transition-transform duration-300 ${
        showHeader ? 'transform translate-y-0' : 'transform -translate-y-full'
      }`}
    >
      <div className='flex flex-col lg:flex-row lg:items-center w-full'>
        {/* logo */}
        <Link
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaveHandler}
          to={'/'}
          className='flex-shrink-0 max-w-[120px] md:max-w-[150px] lg:max-w-[200px] xl:max-w-[250px] 2xl:max-w-[300px]'
        >
          <img
            src='https://ik.imagekit.io/UjjwalDhariwal/Sufna%20PRoductions/logo.svg?updatedAt=1721991050415'
            alt='Logo'
            className='w-full h-auto'
          />
        </Link>
      </div>
      {/* socials */}
      <div className='social-icons-desktop'>
        <Socials />
      </div>
      {/* mobile nav */}
      <MobileNav />
    </header>
  );
};

export default Header;
