/* eslint-disable react/prop-types */
import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import SayHello from './SayHello';
import { ThemeProvider } from './ThemeContext';

export default function Layout({ children }) {
  return (
    <>
      <ThemeProvider>
        <div className="dark:bg-black">
          <NavBar />
          {children}
          <section className="w-full mt-8 ">
            <SayHello />
            <Footer />
          </section>
        </div>
      </ThemeProvider>
    </>
  );
}
