import React, { useEffect, useState } from 'react';
import { ScrollUp } from './Icon';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  // Set the top cordinate to 0
  // make scrolling smooth
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  useEffect(() => {
    // Button is displayed after scrolling for 200 pixels
    const toggleVisibility = () => {
      if (window.pageYOffset > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
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
          onClick={scrollToTop}
          className="bg-white fixed bottom-3 right-3 lg:bottom-5 lg:right-5  hover:bg-indigo-400 focus:bg-indigo-400 dark:hover:bg-darkBackgroundPink dark:focus:bg-indigo-900 dark:bg-gray-700 shadow p-2 rounded cursor-pointer"
        >
          <ScrollUp />
        </div>
      )}
    </>
  );
}
