/* eslint-disable react/prop-types */
import React from 'react';
// import { Scrollbars } from 'react-custom-scrollbars';
import NavBar from './NavBar';
import Footer from './Footer';
import SayHello from './SayHello';

export default function Layout({ children }) {
  return (
    <>
      {/* <ThemeProvider> */}
      {/* <Scrollbars style={{ width: 500, height: 300 }}> */}
      <div className="dark:bg-darkBackgroundBlue font-firamono ">
        <NavBar />
        {children}
        <section className="w-full mt-8 ">
          <SayHello />
          <Footer />
        </section>
      </div>
      {/* </Scrollbars> */}
      {/* </ThemeProvider> */}
    </>
  );
}
