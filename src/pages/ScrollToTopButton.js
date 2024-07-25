import React, { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa'; // Using react-icons for the arrow up icon
import './ScrollToTopButton.css'; // Add styles in this file

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const halfPageHeight = document.documentElement.scrollHeight / 2;
      setVisible(scrollPosition > halfPageHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    visible && (
      <button className="scroll-to-top" onClick={scrollToTop}>
        <FaArrowUp />
      </button>
    )
  );
};

export default ScrollToTopButton;
