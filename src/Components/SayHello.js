import React from 'react';

export default function SayHello() {
  return (
    <>
      <div className="w-11/12 px-4 py-20 mx-auto text-center md:w-3/4 lg:w-2/4  ">
        <h2 className="mb-2 text-3xl md:text-4xl font-extrabold tracking-tight  md:mb-6 md:leading-tight">
          Get In Touch!
        </h2>
        <p className="mb-7 text-gray-900 dark:text-gray-300 w-5/6 sm:w-3/4 lg:w-5/6 xl:w-3/4 m-auto text-center md:font-medium ">
          Whether you have an idea for a project or just want to say hi, feel
          free to shoot me an email!
        </p>
        <div className="mb-0 space-x-0 md:space-x-2">
          <a
            href="mailto:pranavkhapra23@gmail.com?subject=Hey, I know an awesome anime&body=So The story of the anime goes like......."
            className=" bg-indigo-800 bg-opacity-90 hover:bg-indigo-900 focus:bg-indigo-900 text-indigo-100 mt-6 text-sm font-bold lg:text-base tracking-normal my-5 md:my-7 p-3 px-4 md:px-5 rounded ring-2 ring-gray-400 ring-opacity-50 shadow "
          >
            Say Hello!
          </a>
        </div>
      </div>
    </>
  );
}
