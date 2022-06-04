import React from 'react';
import Header from '../components/Header';
import RecentProjects from '../components/RecentProjects';
import ScrollToTop from '../components/ScrollToTop';
import ScrollToDown from '../components/ScrollToDown';

export default function index() {
  return (
    <>
      <section className="w-11/12 px-4 md:px-0 pt-40 md:pt-44  lg:pt-48 mx-auto md:w-3/4 lg:w-2/4 mt-0 ">
        <Header />
        <RecentProjects />
        <ScrollToTop />
        <ScrollToDown />
      </section>
    </>
  );
}
