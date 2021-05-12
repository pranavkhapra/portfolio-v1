import React from 'react';
import profilePic from '../images/profilepic.jpeg';

export default function about() {
  return (
    <>
      <section className=" w-11/12 px-4 md:px-0 pt-24 md:pt-28 lg:pt-32 mx-auto md:w-3/4 lg:w-10/12 dark:text-gray-300">
        <div className="divide-y divide-gray-800">
          <div className=" space-y-2 md:space-y-5">
            <h1 className="pb-3 lg:pb-1 lg:mb-5 text-3xl font-extrabold leading-9 tracking-tight  dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
              About Me
            </h1>
          </div>
          <div className="items-start space-y-2 lg:grid lg:grid-cols-3 lg:space-y-0 lg:pt-4">
            <div className="flex flex-col items-center pt-6 xl:pt-5">
              <img
                src={profilePic}
                alt="avatar"
                className="w-48 h-48 rounded-xl"
              />
              <h3 className="pt-4 text-2xl text-gray-900  dark:text-gray-200 md:text-3xl font-bold leading-8 tracking-tight">
                Pranav Khapra
              </h3>
              <div className="md:text-lg text-gray-800  dark:text-gray-400 mb-2 md:mt-1">
                Web Developer
              </div>
            </div>
            <div className="font-normal lg:pt-4 pb-8 lg:col-span-2 text-base sm:w-9/12 md:w-10/12 mx-auto  lg:mx-0">
              <p className="mb-4">
                Hello! I&apos;m Pranav Khapra, a web developer based in India.
              </p>
              <p className="mb-4">
                I’m a self-taught developer (as we all are bootcamp or not all
                have to study self) working on all things. I have experience
                developing applications for the web, from simple landing pages
                to other applications.
              </p>
              <p className="mb-4">
                I aspire toward a career that will allow me to build inclusive
                and accessible applications through carefully crafted code and
                user-centric design that result in engaging experiences.
              </p>

              <p className="mb-4">
                When I’m not in front of a computer screen, I am probably
                watching an anime ofc on a computer screen going out and
                all....not so much..
              </p>
              <p className="mb-4">
                Here are a few technologies I&apos;ve been working with
                recently:
              </p>
              <ul className="md:flex ">
                <div>
                  <li className="mb-0.25">▸ React</li>
                  <li className="mb-0.25">▸ TypeScript</li>
                  <li className="mb-0.25">▸ JavaScript</li>
                  <li className="mb-0.25">▸Next Js</li>
                  <li className="mb-0.25">▸Graphql</li>
                </div>

                <div className="md:ml-20">
                  <li className="mb-0.25">▸Firebase</li>
                  <li className="mb-0.25">▸Gatbsy</li>
                  <li className="mb-0.25">▸TailWind</li>
                  <li className="mb-0.25">▸Apollo Client</li>
                  <li className="mb-0.25">▸Headless CMS(Keystone,Sanity)</li>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
