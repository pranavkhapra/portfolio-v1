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
} from '../Components/ProjectData';
import {
  ProjectLayoutMed,
  LeftProjectLayoutLarge,
  RightProjectLayoutLarge,
} from '../Components/ProjectLayout';

export default function projects() {
  return (
    <>
      <section className="w-11/12 px-4 md:px-0 pt-24 md:pt-28 lg:pt-32 mx-auto md:w-3/4 lg:w-10/12 dark:text-gray-300">
        <div className="divide-y divide-gray-800">
          <div className=" pb-6 space-y-2 md:space-y-5 ">
            <h1 className=" text-4xl font-extrabold leading-9 tracking-tight dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
              Projects
            </h1>
            <p className="font-normal tracking-tight sm:w-9/12 md:w-10/12 lg:w-9/12 text-base md:text-lg ">
              My personal projects are a way for me to chronicle my growth as a
              developer.
            </p>
          </div>
          <div className="space-y-6 ">
            <ProjectLayoutMed project={sickSlice} />
            <ProjectLayoutMed project={covid19Tracker} />
            <ProjectLayoutMed project={tweet} />
            <ProjectLayoutMed project={catchOfTheDay} />
            <LeftProjectLayoutLarge project={sickSlice} />
            <RightProjectLayoutLarge project={covid19Tracker} />
            <LeftProjectLayoutLarge project={tweet} />
            <RightProjectLayoutLarge project={catchOfTheDay} />
            <LeftProjectLayoutLarge project={uzumakiStore} />
            <RightProjectLayoutLarge project={minimialV0} />
            <LeftProjectLayoutLarge project={youtubeApi} />
            <RightProjectLayoutLarge project={netflixApi} />
          </div>
        </div>
      </section>
    </>
  );
}
