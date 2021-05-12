import React from 'react';
import Icons from './Icon';

export default function Footer() {
  return (
    <>
      <footer className="pt-32 flex flex-col sm:flex-row sm:w-11/12 md:w-3/4 lg:w-2/4 m-auto sm:justify-between items-center w-full">
        <Icons />
        <p className="text-sm mb-6 sm:mb-4 text-gray-800 dark:text-gray-400 sm:self-center">
          Pranav Khapra &copy; 2021
        </p>
      </footer>
    </>
  );
}
