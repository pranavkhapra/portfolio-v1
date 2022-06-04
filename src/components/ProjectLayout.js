/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Github, OpenLink2, OpenLink } from './Icon';

const ProjectLayoutMed = ({ project }) => (
  <section className="lg:hidden mt-6  flex w-full border hover:shadow-lg focus:shadow-lg border-gray-400 hover:border-gray-600 focus:border-gray-900 dark:hover:border-gray-600 dark:focus:border-gray-600 md:h-96 h-64 rounded-lg relative">
    <a
      href={project.site}
      target="_blank"
      rel="noopener noreferrer"
      className="dark:hidden"
    >
      <img
        className="dark:hidden block  absolute inset-0 h-full w-full object-cover sm:object-contain md:object-fill rounded-lg"
        src={project.imageLight}
        alt={project.title}
      />
      <div className="absolute inset-0 bg-gray-100 dark:bg-gray-400 bg-opacity-90 dark:bg-opacity-80  rounded-lg md:bg-opacity-30  md:hover:bg-opacity-0" />
    </a>

    <a
      href={project.site}
      target="_blank"
      rel="noopener noreferrer"
      className="hidden dark:block"
    >
      <img
        className="dark:block hidden  absolute inset-0 h-full w-full object-cover sm:object-contain md:object-fill  rounded-lg "
        src={project.imageDark}
        alt={project.title}
      />
      <div className="absolute inset-0 bg-gray-900 bg-opacity-90  rounded-lg md:bg-opacity-30  md:hover:bg-opacity-0" />
    </a>

    <div className=" md:mx-3 px-6 py-3 relative  md:w-8/12 my-auto rounded-lg  md:bg-gray-100 md:dark:bg-gray-900  md:shadow-md">
      <a href={project.site} target="_blank" rel="noopener noreferrer">
        <h1 className=" dark:text-gray-200 mt-2  text-xl sm:text-2xl md:text-3xl  font-extrabold leading-snug tracking-tight  sm:leading-10 md:leading-14">
          {project.title}
        </h1>
        <div className="  sm:w-9/12  md:w-full text-sm md:text-lg ">
          <p className="text-sm mt-2 leading-snug md:text-base dark:text-gray-900">
            {project.shortdescription}
          </p>
          <ul className="flex text-xs md:text-sm mt-3 font-semibold dark:text-gray-900 ">
            <li className=" mr-3">
              <i>{project.stack.first}</i>
            </li>
            <li className=" mr-3">
              <i>{project.stack.second}</i>
            </li>
            <li className="mr-3">
              <i>{project.stack.third}</i>
            </li>
          </ul>
        </div>
      </a>
      <div className="pt-2 mt-1 md:mt-1.5 flex">
        <a
          className="mr-5"
          href={project.gitHub}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github />
        </a>
        <a href={project.site} target="_blank" rel="noopener noreferrer">
          <OpenLink />
        </a>
      </div>
    </div>
  </section>
);

const LeftProjectLayoutLarge = ({ project }) => (
  // console.log(project.imageDark);
  <section className="hidden lg:flex w-full ">
    <div className="transition shadow duration-300 transform  hover:scale-105 border border-gray-400 hover:border-gray-600 dark:border-gray-600 dark:hover:border-gray-400 cursor-pointer w-3/5 ml-6 xl:ml-12 h-96 rounded-lg hover:shadow-lg focus:shadow-lg overflow-hidden relative">
      <a href={project.site} target="_blank" rel="noopener noreferrer">
        <img
          className="dark:hidden block absolute inset-0 h-full w-full object-cover xl:object-top rounded-lg"
          src={project.imageLight}
          alt={project.title}
        />
        <img
          className="dark:block hidden absolute inset-0 h-full w-full object-cover xl:object-top rounded-lg"
          src={project.imageDark}
          alt={project.title}
        />
        {/* <div className="absolute border rounded-lg border-gray-400 hover:border-gray-600 dark:border-gray-600 dark:hover:border-gray-400 cursor-pointer inset-0 bg-indigo-900 bg-opacity-20 hover:bg-opacity-0 " /> */}
      </a>
    </div>

    <div className="w-2/5 z-10  py-3  my-auto rounded-lg lg:-ml-12 xl:-ml-24  ">
      <a
        href={project.site}
        target="_blank"
        rel="noopener noreferrer"
        className="text-right"
      >
        <h1 className=" dark:text-gray-100 mt-2 lg:mb-5 text-xl lg:text-4xl font-extrabold leading-snug tracking-tight lg:leading-14">
          {project.title}
        </h1>
      </a>
      <div className=" w-full  ">
        <p className="text-right leading-snug  bg-gray-100 dark:bg-gray-900 p-4 rounded-lg">
          {project.description}
        </p>
        <ul className="flex text-sm font-semibold mt-4 justify-end dark:text-darkVimColor">
          <li className=" mr-3">
            <i>{project.stack.first}</i>
          </li>
          <li className="mr-3">
            <i>{project.stack.second}</i>
          </li>
          <li className="mr-3">
            <i>{project.stack.third}</i>
          </li>
          <li className="mr-3">
            <i>{project.stack.fourth}</i>
          </li>
          <li className="mr-3">
            <i>{project.stack.fivth}</i>
          </li>
          <li className="mr-3">
            <i>{project.stack.sixth}</i>
          </li>
        </ul>
      </div>

      <div className="pt-2 mt-1.5 flex justify-end">
        <a
          className="mr-5"
          href={project.gitHub}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github />
        </a>
        <a href={project.site} target="_blank" rel="noopener noreferrer">
          <OpenLink2 />
        </a>
      </div>
    </div>
  </section>
);
const RightProjectLayoutLarge = ({ project }) => (
  <section className="hidden lg:flex w-full ">
    <div className="w-2/5 z-10  py-3  my-auto rounded-lg lg:ml-6 xl:ml-12  ">
      <a href={project.site} target="_blank" rel="noopener noreferrer">
        <h1 className=" dark:text-gray-100 mt-2 lg:mb-5 text-xl lg:text-4xl font-extrabold leading-snug tracking-tight lg:leading-14">
          {project.title}
        </h1>
      </a>
      <div className=" w-full   ">
        <p className="  leading-snug  bg-gray-100 dark:bg-gray-900 p-4 rounded-lg">
          {project.description}
        </p>
        <ul className="flex text-sm font-semibold mt-4 justify-start dark:text-darkVimColor">
          <li className="mr-3">
            <i>{project.stack.first}</i>
          </li>
          <li className="mr-3">
            <i>{project.stack.second}</i>
          </li>
          <li className="mr-3">
            <i>{project.stack.third}</i>
          </li>
          <li className="mr-3">
            <i>{project.stack.fourth}</i>
          </li>
          <li className="mr-3">
            <i>{project.stack.fivth}</i>
          </li>
          <li className="mr-3">
            <i>{project.stack.sixth}</i>
          </li>
        </ul>
      </div>

      <div className="pt-2 mt-1.5 flex justify-start">
        <a
          className="mr-5"
          href={project.gitHub}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github />
        </a>
        <a href={project.site} target="_blank" rel="noopener noreferrer">
          <OpenLink2 />
        </a>
      </div>
    </div>
    <div className="transition duration-300 transform shadow  hover:scale-105 border border-gray-400 hover:border-gray-600 dark:border-gray-600 dark:hover:border-gray-400 w-3/5 -ml-12 xl:-ml-24 h-96 rounded-lg hover:shadow-lg focus:shadow-lg  overflow-hidden relative">
      <a href={project.site} target="_blank" rel="noopener noreferrer">
        <img
          className="dark:hidden block absolute inset-0 h-full w-full object-cover xl:object-top rounded-lg"
          src={project.imageLight}
          alt={project.title}
        />
        <img
          className="dark:block hidden absolute inset-0 h-full w-full object-cover xl:object-top rounded-lg"
          src={project.imageDark}
          alt={project.title}
        />
        {/* <div className="absolute border rounded-lg border-gray-400 hover:border-gray-600 dark:border-gray-600 dark:hover:border-gray-400 cursor-pointer inset-0 bg-indigo-900 bg-opacity-20 hover:bg-opacity-0 " /> */}
      </a>
    </div>
  </section>
);

export { ProjectLayoutMed, LeftProjectLayoutLarge, RightProjectLayoutLarge };
