import React from 'react';

export default function Header() {
  return (
    <>
      <main className="flex flex-col space-y-12 divide-y divide-gray-200 mb-32 ">
        <div>
          <p className="mt-3 sm:w-9/12 mb-2  text-indigo-800 dark:text-indigo-400 md:w-10/12 lg:w-full text-base md:text-lg font-bold ">
            HEY THERE,
          </p>
          <h1 className="text-4xl md:mb-5  md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight dark:text-gray-100  sm:leading-10   md:leading-14">
            I&apos;m Pranav Khapra👋
          </h1>
          <p className="mt-3 mb-6 md:mb-8 sm:w-9/12  text-gray-900 dark:text-gray-300 md:w-10/12 lg:w-full text-base md:text-lg font-medium ">
            A Web/Game Developer from India. I love solving problems even though
            I end up searching for the solution. I&apos;m glad you&apos;re here!
          </p>
          {/* //TODO:ADD THSI TO THE NAV  */}
          {/* <button
          type="button"
          className="text-sm font-bold lg:text-base tracking-normal my-5 md:my-7 p-2.5 px-4 md:px-5 rounded ring-2 ring-gray-400 ring-opacity-50 bg-gray-900 bg-opacity-50 hover:bg-opacity-100 focus:bg-opacity-100 shadow "
        >
          Resume
        </button> */}

          <a
            href="mailto:pranavkhapra23@gmail.com?subject=Hey, I know an awesome anime&body=So The story of the anime goes like......."
            className=" bg-indigo-800 bg-opacity-90 hover:bg-indigo-900 focus:bg-indigo-900 text-indigo-100 mt-6 text-sm font-bold lg:text-base tracking-normal my-5 md:my-7 p-3 px-4 md:px-5 rounded ring-2 ring-gray-400 ring-opacity-50 shadow "
          >
            Say Hello!
          </a>
        </div>
      </main>
    </>
  );
}
