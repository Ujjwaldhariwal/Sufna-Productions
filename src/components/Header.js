import React, { useContext, useEffect, useState } from 'react';
import Socials from './Socials';
import Logo from '../img/header/logo.svg';
import MobileNav from './MobileNav';
import { Link } from 'react-router-dom';
import { CursorContext } from '../context/CursorContext';
import { debounce } from 'lodash'; // You need to install lodash for this

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
  }, [lastScrollY]);

  return (
    <header
      className={`fixed w-full px-[30px] lg:px-[100px] z-30 h-[100px] lg:h-[140px] flex items-center transition-transform duration-300 ${
        showHeader ? 'transform translate-y-0' : 'transform -translate-y-full'
      }`}
    >
      <div className='flex flex-col lg:flex-row lg:items-center w-full justify-between'>
        {/* logo */}
        <Link
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaveHandler}
          to={'/'}
          className='max-w-[250px]' // Increased max width
        >
          <img src={Logo} alt='' className='w-full h-auto' />
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
