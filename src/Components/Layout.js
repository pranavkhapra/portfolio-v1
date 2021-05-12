/* eslint-disable react/prop-types */
import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import SayHello from './SayHello';

export default function Layout({ children }) {
  return (
    <>
      <NavBar />
      {children}
      <section className="w-full mt-8 ">
        <SayHello />
        <Footer />
      </section>
    </>
  );
}
