import React from 'react';
import {
  catchOfTheDay,
  covid19Tracker,
  minimialV0,
  netflixApi,
  sickSlice,
  tweet,
  uzumakiStore,
  youtubeApi,
  markDownViewer,
  konohaGram,
} from '../components/ProjectData';
import {
  ProjectLayoutMed,
  LeftProjectLayoutLarge,
  RightProjectLayoutLarge,
} from '../components/ProjectLayout';
import ScrollToTop from '../components/ScrollToTop';
import ScrollToDown from '../components/ScrollToDown';

export default function projects() {
  // console.log(sickSlice);
  return (
    <>
      <section className="w-11/12 px-4 md:px-0 pt-24 md:pt-28 lg:pt-32 mx-auto md:w-3/4 lg:w-10/12 dark:text-gray-300 ">
        <div className="divide-y divide-gray-800">
          <div className=" pb-6 space-y-2 md:space-y-5 ">
            <h1 className=" text-4xl font-extrabold leading-9 tracking-tight dark:text-darkBackgroundYellow sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
              Projects
            </h1>
            <p className="font-normal tracking-tight sm:w-9/12 md:w-10/12 lg:w-9/12 text-base md:text-lg ">
              My personal projects are a way for me to chronicle my growth as a
              developer.
            </p>
          </div>
          <div className="space-y-6 ">
            <ProjectLayoutMed project={uzumakiStore} />
            <ProjectLayoutMed project={sickSlice} />
            <ProjectLayoutMed project={catchOfTheDay} />
            <ProjectLayoutMed project={konohaGram} />
            <ProjectLayoutMed project={markDownViewer} />
            <ProjectLayoutMed project={tweet} />
            <ProjectLayoutMed project={netflixApi} />
            <ProjectLayoutMed project={minimialV0} />
            <ProjectLayoutMed project={covid19Tracker} />
            <ProjectLayoutMed project={youtubeApi} />
            <LeftProjectLayoutLarge project={uzumakiStore} />
            <RightProjectLayoutLarge project={sickSlice} />
            <LeftProjectLayoutLarge project={catchOfTheDay} />
            <RightProjectLayoutLarge project={konohaGram} />
            <LeftProjectLayoutLarge project={markDownViewer} />
            <RightProjectLayoutLarge project={tweet} />
            <LeftProjectLayoutLarge project={netflixApi} />
            <RightProjectLayoutLarge project={minimialV0} />
            <LeftProjectLayoutLarge project={covid19Tracker} />
            <RightProjectLayoutLarge project={youtubeApi} />
          </div>
        </div>
        <ScrollToTop />
        <ScrollToDown />
      </section>
    </>
  );
}
