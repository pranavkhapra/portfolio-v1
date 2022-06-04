import React, { useEffect, useState } from 'react';
import { ScrollDown } from './Icon';

export default function ScrollToDown() {
  const [isVisible, setIsVisible] = useState(true);
  // Set the top cordinate to 0
  // make scrolling smooth
  const scrollToDown = () => {
    window.scroll({
      top: document.body.offsetHeight,
      left: 0,
      behavior: 'smooth',
    });
  };
  useEffect(() => {
    // Button is invisible after scrolling for 50 pixels
    const toggleVisibility = () => {
      if (window.pageYOffset > 50) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);
  return (
    <>
      {isVisible && (
        <div
          aria-hidden="true"
          onClick={scrollToDown}
          className="bg-white fixed w-10 left-3 bottom-3 lg:bottom-5 lg:right-5  hover:bg-red-600 focus:bg-indigo-400 dark:hover:bg-darkBackgroundPink dark:focus:bg-indigo-900 dark:bg-gray-700 shadow p-2 rounded cursor-pointer"
        >
          <ScrollDown />
        </div>
      )}
    </>
  );
}
