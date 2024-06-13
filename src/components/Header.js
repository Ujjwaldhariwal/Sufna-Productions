import React, { useContext } from 'react';
// import components
import Socials from './Socials';
import Logo from '../img/header/logo.svg';
import MobileNav from './MobileNav';
// import link
import { Link } from 'react-router-dom';
// import cursor context
import { CursorContext } from '../context/CursorContext';

const Header = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);

  return (
    <header className='fixed w-full px-[30px] lg:px-[100px] z-30 h-[100px] lg:h-[140px] flex items-center'>
      <div className='flex flex-col lg:flex-row lg:items-center w-full justify-between'>
        {/* logo */}
        <Link
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaveHandler}
          to={'/'}
          className='max-w-[250px]'  // Increased max width
        >
          <img src={Logo} alt='' className='w-full h-auto' /> 
        </Link>
        {/* nav - initially hidden - show on desktop mode */}
        <nav
          className='hidden xl:flex gap-x-12 font-semibold'
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaveHandler}
        ><Link
        to={'/'}
        className='text-[#000000] hover:text-[#FFD700] hover:font-bold transition'
      >
        Home
      </Link>
      <Link
        to={'/about'}
        className='text-[#000000] hover:text-[#FFD700] hover:font-bold transition'
      >
        About
      </Link>
      <Link
        to={'/portfolio'}
        className='text-[#000000] hover:text-[#FFD700] hover:font-bold transition'
      >
        Portfolio
      </Link>
      <Link
        to={'/contact'}
        className='text-[#000000] hover:text-[#FFD700] hover:font-bold transition'
      >
        Contact
      </Link>
      
      
        </nav>
      </div>
      {/* socials */}
      <Socials />
      {/* mobile nav */}
      <MobileNav />
    </header>
  );
};

export default Header;
