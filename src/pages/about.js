import React from 'react';
import Icons from '../Components/Icon';
// import harrypotter from '../../images/harry-potter.svg';
// import profilepic from '../../images/baby_profile_naruto.jpg';

import ScrollToTop from '../Components/ScrollToTop';
import ScrollToDown from '../Components/ScrollToDown';

export default function about() {
  return (
    <>
      <section className=" w-11/12 px-4 md:px-0 pt-24 md:pt-28 lg:pt-32 mx-auto md:w-3/4 lg:w-10/12 dark:text-gray-300">
        <div className="divide-y divide-gray-800">
          <div className="space-y-2 md:space-y-5  ">
            <h1 className="pb-3 lg:pb-1 lg:mb-5 text-3xl font-extrabold leading-9 tracking-tight dark:text-darkBackgroundYellow sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
              About Me
            </h1>
          </div>
          <div className="items-start space-y-2 lg:grid lg:grid-cols-3 lg:space-y-0 lg:pt-4">
            <div className="flex flex-col items-center pt-6 xl:pt-5">
              <img
                src="/pranav.jpeg"
                alt="avatar"
                className="w-48 h-48 rounded-xl"
              />
              <h3 className="pt-4 text-2xl text-gray-900  dark:text-gray-200 md:text-3xl font-bold leading-8 tracking-tight">
                Pranav Khapra
              </h3>
              <div className="md:text-lg text-gray-800  dark:text-gray-400 mb-1 md:mt-1">
                Web Developer
              </div>
              <div className="md:text-lg text-gray-800  dark:text-gray-400 mb-2 md:mt-1">
                he/him
              </div>
              <Icons />
            </div>
            <div className="font-normal lg:pt-4 pb-8 lg:col-span-2 text-base sm:w-9/12 md:w-10/12 mx-auto  lg:mx-0">
              <p className="mb-4">
                Hello! I&apos;m Pranav Khapra, a web developer.
              </p>
              <p className="mb-4">
                Web Developer with a passion for coding and embracing
                challenges.On a forever journey of professional growth as well
                as learning from and sharing with other creators.
              </p>
              <p className="mb-4">
                I’m a self-taught developer (as we all are bootcamp students or
                not we all have to study on our own so lets put that aside). I
                like to code things for web, and enjoy bringing ideas to life in
                the browser. I'm always open to adapt to work with team and work
                on new frontend skills and technology.
              </p>
              <p className="mb-4">
                When I’m not on the front of a computer screen, I am probably
                watching an anime which is technically also on a computer screen
                ....
              </p>
              <p className="mb-4">
                Here are a few technologies I&apos;ve been working with
                recently:
              </p>
              <ul className="md:flex ">
                <div>
                  <li className="mb-0.25">▸ React</li>
                  {/* <li className="mb-0.25">▸ TypeScript</li> */}
                  <li className="mb-0.25">▸ JavaScript</li>
                  <li className="mb-0.25">▸ Next Js</li>
                  <li className="mb-0.25">▸ Graphql</li>
                  <li className="mb-0.25">▸ Sanity</li>
                </div>

                <div className="md:ml-20">
                  <li className="mb-0.25">▸ Firebase</li>
                  <li className="mb-0.25">▸ Gatbsy</li>
                  <li className="mb-0.25">▸ TailWind</li>
                  <li className="mb-0.25">▸ Apollo Client</li>
                  <li className="mb-0.25">▸ Keystonejs</li>
                  {/* <li className="mb-0.25">▸ </li> */}
                </div>
              </ul>
              <div>
                <p className="mb-4 mt-8">
                  A Secret between us...... i have a intel that Brendan Eich is
                  still learning javascript .......yaa you are right after all
                  these years.....ALWAYSSS
                  <img
                    src="/harry-potter.svg"
                    fill="#eb4471"
                    viewBox="0 0 42.21 42.21"
                    className="h-8 w-8  hover:text-red-300 focus:text-red-300 dark:text-red-300"
                    alt="harrypotter"
                  />
                </p>
              </div>
            </div>
          </div>
        </div>
        <ScrollToTop />
        <ScrollToDown />
      </section>
    </>
  );
}
