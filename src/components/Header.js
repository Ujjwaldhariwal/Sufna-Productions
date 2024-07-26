import React, { useContext, useEffect, useState } from 'react';
import Socials from './Socials';
import MobileNav from './MobileNav';
import { Link } from 'react-router-dom';
import { CursorContext } from '../context/CursorContext';
import { debounce } from 'lodash'; // Ensure lodash is installed

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
  }, []); // No need to include lastScrollY

  return (
    <header
      className={`fixed top-0 left-0 w-full px-[30px] lg:px-[100px] z-30 h-[100px] lg:h-[140px] flex items-center transition-transform duration-300 ${
        showHeader ? 'transform translate-y-0' : 'transform -translate-y-full'
      }`}
    >
      <div className='flex flex-col lg:flex-row lg:items-center w-full justify-between'>
        {/* logo */}
        <Link
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaveHandler}
          to={'/'}
          className='max-w-[250px]' // Adjusted max width
        >
          <img src='https://ik.imagekit.io/UjjwalDhariwal/Sufna%20PRoductions/logo.svg?updatedAt=1721991050415' alt='Logo' className='w-full h-auto' />
        </Link>
      </div>
      {/* socials */}
      <Socials />
      {/* mobile nav */}
      <MobileNav />
    </header>
  );
};

export default Header;
