import React from 'react';
import { Link } from 'gatsby';
import { ClickArrow } from './Icon';

export default function RecentProjects() {
  return (
    <>
      <section>
        <div className="text-left mt-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-5   dark:text-white text-black">
            Recent Projects
          </h2>
        </div>
        <div className="hover:shadow-lg focus:shadow-lg  mb-5 flex flex-col border border-gray-400 hover:border-gray-600  dark:border-gray-600 dark:hover:border-gray-400  rounded-lg md:mt-5">
          <a
            href="https://github.com/pranavkhapra/uzumaki-store"
            target="_blank"
            rel="noopener noreferrer"
            className="focus:bg-gray-100 dark:focus:bg-gray-900 p-4 flex"
          >
            <div>
              <h3 className="mb-2 text-xl font-semibold tracking-normal  dark:text-gray-100 ">
                Uzumaki Store
              </h3>
              <p className="text-sm md:text-base font-normal text-gray-900   dark:text-gray-300">
                Uzumaki Store a full stack online clothing store complete with
                real credit checkout. Users can search, sell, add to cart and
                checkout their favourite items.
              </p>
              <ul className="flex md:justify-end text-xs md:text-sm mt-3  font-semibold">
                <li className="md:ml-1 mr-3">
                  <i>React</i>
                </li>
                <li className="md:ml-1 mr-3">
                  <i>Keystone Headless CMS</i>
                </li>
                <li className="md:ml-1 mr-3 md:mr-0">
                  <i>Grapqhl</i>
                </li>
                <li className="md:ml-1 mr-3 md:mr-0">
                  <i>Apollo 3</i>
                </li>
                <li className="md:ml-1 mr-3 md:mr-0">
                  <i>TypeScript</i>
                </li>
                <li className="md:ml-1 mr-3 md:mr-0">
                  <i>Next.js</i>
                </li>
              </ul>
            </div>
          </a>
        </div>
        <div className="hover:shadow-lg focus:shadow-lg  flex flex-col border border-gray-400 hover:border-gray-600 dark:border-gray-600 dark:hover:border-gray-400  rounded-lg md:mt-5">
          <a
            href="https://sick-slice-pranav-khapra.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="focus:bg-gray-100 dark:focus:bg-gray-900 p-4 flex"
          >
            <div>
              <h3 className="mb-2 text-xl font-semibold tracking-normal  dark:text-gray-100">
                Sick Slice
              </h3>
              <p className="text-sm md:text-base font-normal text-gray-900  dark:text-gray-300">
                Sick Slice is a site help me to learn gatsby and fall in love
                with the headless cms which helps to comfort your taste buds
                because there is no actual pizza it just is like a example of
                food delivery sites like dominos and all.
              </p>
              <ul className="flex md:justify-end text-xs md:text-sm mt-3  font-semibold">
                <li className="md:ml-1 mr-3">
                  <i>React</i>
                </li>
                <li className="md:ml-1 mr-3">
                  <i>Gatsby</i>
                </li>
                <li className="md:ml-1 mr-3 md:mr-0">
                  <i>Sanity</i>
                </li>
                <li className="md:ml-1 mr-3 md:mr-0">
                  <i>Styled-components</i>
                </li>
              </ul>
            </div>
          </a>
        </div>
        <Link to="/projects">
          <a className=" flex justify-center p-3 focus:text-gray-800  dark:text-gray-300 dark:focus:text-white">
            <div className="text-center text-sm  md:text-base cursor-pointer">
              More Projects
            </div>
            <ClickArrow />
          </a>
        </Link>
      </section>
    </>
  );
}
