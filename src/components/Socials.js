import React, { useContext } from 'react';
import { SocialIcon } from 'react-social-icons';
import { CursorContext } from '../context/CursorContext';
import './Social.css';

const Socials = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  const iconStyle = {
    width: '24px',
    height: '24px',
  };

  return (
    <div
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
      className='hidden xl:flex ml-24'
    >
      <ul className='flex gap-x-4'>
        <li>
          <SocialIcon url="https://www.facebook.com/profile.php?id=61550937880697&mibextid=LQQJ4d" className="icon-facebook" style={iconStyle} target="_blank" />
        </li>
        <li>
          <SocialIcon url="https://www.instagram.com/sufna.productions/" className="icon-instagram" style={iconStyle} target="_blank" />
        </li>
        <li>
          <SocialIcon url="https://www.youtube.com/@Sufna.Productions" className="icon-youtube" style={iconStyle} target="_blank" />
        </li>
      </ul>
    </div>
  );
};

export default Socials;
