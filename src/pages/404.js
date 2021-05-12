import React from 'react';

export default function NotFoundPage() {
  return (
    <>
      <section className="w-11/12 px-4 md:px-0 pt-44 md:pt-52 lg:pt-52 mx-auto md:w-3/4 lg:w-10/12 text-gray-300">
        <div className="divide-y divide-gray-800">
          <div className="items-start space-y-2 h-72 lg:pt-4">
            <div className="flex flex-col items-center pt-6 xl:pt-5">
              <h1 className="pb-3 lg:pb-1 text-3xl font-extrabold leading-9 tracking-tight text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
                404
              </h1>
              <div className="text-base font-medium text-gray-400 mb-2 md:mt-2">
                Sorry, page not found.
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
