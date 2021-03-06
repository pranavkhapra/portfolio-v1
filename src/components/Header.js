import React from 'react';

export default function Header() {
  return (
    <>
      <main className="flex flex-col space-y-12 divide-y divide-gray-200 mb-32 font-firamono">
        <div>
          <p className="mt-3 sm:w-9/12 mb-2  text-lightPurple dark:text-darkBackgroundYellow md:w-10/12 lg:w-full text-base md:text-lg font-bold ">
            HEY THERE,
          </p>
          <h1 className="text-4xl md:mb-5  md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight dark:text-darkBackgroundYellow  sm:leading-10   md:leading-14">
            I&apos;m Pranav Khapra👋
          </h1>

          <p className="mt-3 mb-6 md:mb-8 sm:w-9/12  text-gray-900 dark:text-gray-300 md:w-10/12 lg:w-full text-base md:text-lg font-medium ">
            A Web Developer. I love solving problems even though I end up
            searching for the solution and I think if statement curly braces
            don't deserve their own lines.I&apos;m glad you&apos;re here!
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
            className="dark:bg-darkBackgroundPink bg-lightPurple bg-opacity-90 hover:bg-red-600 focus:bg-indigo-900 dark:hover:bg-indigo-900 text-indigo-100 mt-6 text-sm font-bold lg:text-base tracking-normal my-5 md:my-7 p-3 px-4 md:px-5 rounded  shadow "
          >
            Say Hello!
          </a>
        </div>
      </main>
    </>
  );
}
