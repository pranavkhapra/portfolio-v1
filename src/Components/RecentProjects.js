import React from 'react';
import { Link } from 'gatsby';
import { ClickArrow } from './Icon';

export default function RecentProjects() {
  return (
    <>
      <section>
        <div className="text-left mt-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-5   dark:text-darkBackgroundYellow text-black">
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
              <p className="text-sm md:text-base font-normal text-gray-900  dark:text-gray-300">
                Uzumaki Store a online store where you can buy overpriced
                clothing even post your own products for sale! Made it with a
                cool stack , with actual credit processing.
              </p>
              <ul className="flex md:justify-end text-xs md:text-sm mt-3  dark:text-darkVimColor font-semibold">
                <li className="md:ml-1 mr-3 ">
                  <i>Nextjs</i>
                </li>
                <li className="md:ml-1 mr-3">
                  <i>Keystone</i>
                </li>
                <li className="md:ml-1 mr-3">
                  <i>Apollo</i>
                </li>
                <li className="md:ml-1 mr-3">
                  <i>Graphql</i>
                </li>
                {/* <li className="md:ml-1 mr-3 ">
                  <i />
                </li> */}
                <li className="md:ml-1 mr-3 md:mr-0">
                  <i>TypeScript</i>
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
                Sick slice is online pizza store that includes all the features
                of a real world food delivery website.Where you can view pizza
                on based on toppings with dynamic pages for each pizza ,order
                them which is send to the shop for delivering.
              </p>
              <ul className="flex md:justify-end text-xs md:text-sm mt-3  dark:text-darkVimColor font-semibold">
                <li className="md:ml-1 mr-3">
                  <i>Gatsby</i>
                </li>
                <li className="md:ml-1 mr-3">
                  <i>Graphql</i>
                </li>
                <li className="md:ml-1 mr-3">
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
          <div className=" flex justify-center p-3 focus:text-gray-800  dark:text-gray-300 dark:focus:text-white">
            <div className="dark:hover:text-darkBackgroundYellow hover:text-lightPurple text-center text-sm  md:text-base cursor-pointer">
              More Projects
            </div>
            <ClickArrow />
          </div>
        </Link>
      </section>
    </>
  );
}
