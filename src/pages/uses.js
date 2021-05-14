import React from 'react';

export default function uses() {
  return (
    <>
      <div className="relative min-h-screen pb-20 font-mono text-cyan-900 dark:text-darkText">
        <div className="w-full flex justify-center h-20 text-cyan-900" />
        <div className="flex justify-center py-5">
          <div className="container max-w-3xl p-4">
            <div className=" space-y-2 md:space-y-5">
              <h1 className="pb-3 lg:pb-1 lg:mb-5 text-3xl font-extrabold leading-9 tracking-tight  dark:text-darkBackgroundYellow sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
                Uses
              </h1>
            </div>
            <div>
              <p>
                Sharing my setup and tools I use. Inspired by the
                <a
                  target="_blank"
                  href="https://uses.tech/"
                  rel="noreferrer"
                  className="ml-2 mr-2 inline  pb-1 border-b-2 border-green-500 dark:border-darkBackgroundPink"
                >
                  uses.tech
                </a>
                website.
              </p>
            </div>
            <h1 className="py-5">Last updated on April 18, 2021</h1>
            <div className="post py-5">
              <h2 className="inline mr-3 pb-1 border-b-2 border-green-500 dark:border-darkBackgroundPink">
                Hardware:
              </h2>

              <div className="mt-2">
                <p>Lenovo IdeaPad -330 (15-Inch, 2018) for work </p>
                <p>OS: Linux Distro:KUbuntu</p>
              </div>
            </div>
            <div className="post py-5">
              <h2 className="inline mr-3 pb-1 border-b-2 border-green-500 dark:border-darkBackgroundPink">
                Technologies I like to work with
              </h2>

              <div className="max-w-xl px-4 py-4 my-4 hover:text-cyan-900">
                <div className="sm:grid sm:h-32 sm:grid-flow-row sm:gap-4 sm:grid-cols-3 dark:text-indigo-100">
                  <div className="hover:bg-green-500 flex flex-col justify-center px-4 py-4  dark:bg-darkBackgroundPink bg-gray-300 dark:hover:bg-indigo-900  rounded">
                    <div>
                      <p className="text-lg text-center text-gray-900 dark:text-indigo-100 text-base md:text-lg font-medium">
                        React
                      </p>
                    </div>
                  </div>
                  <div className="hover:bg-green-500 flex flex-col justify-center px-4 py-4 mt-2  dark:bg-darkBackgroundPink bg-gray-300 dark:hover:bg-indigo-900 rounded sm:mt-0">
                    <div>
                      <p className="text-lg text-center text-gray-900 dark:text-indigo-100 text-base md:text-lg font-medium">
                        Apollo
                      </p>
                    </div>
                  </div>
                  <div className="hover:bg-green-500 flex flex-col justify-center px-4 py-4 mt-4  dark:bg-darkBackgroundPink bg-gray-300 dark:hover:bg-indigo-900 rounded sm:mt-0">
                    <div>
                      <p className="text-lg text-center text-gray-900 dark:text-indigo-100 text-base md:text-lg font-medium">
                        GraphQL
                      </p>
                    </div>
                  </div>
                  <div className="hover:bg-green-500 flex flex-col justify-center px-4 py-4 mt-4 dark:bg-darkBackgroundPink bg-gray-300 dark:hover:bg-indigo-900 rounded sm:mt-0">
                    <div>
                      <p className="text-lg text-center text-gray-900 dark:text-indigo-100 text-base md:text-lg font-medium">
                        Next.js
                      </p>
                    </div>
                  </div>
                  <div className="hover:bg-green-500 flex flex-col justify-center px-4 py-4 mt-4  dark:bg-darkBackgroundPink bg-gray-300 dark:hover:bg-indigo-900 rounded sm:mt-0">
                    <div>
                      <p className="text-lg text-center text-gray-900 dark:text-indigo-100 text-base md:text-lg font-medium">
                        Sanity.io
                      </p>
                    </div>
                  </div>
                  <div className="hover:bg-green-500 flex flex-col justify-center px-4 py-4 mt-4  dark:bg-darkBackgroundPink bg-gray-300 dark:hover:bg-indigo-900 rounded sm:mt-0">
                    <div>
                      <p className="text-lg text-center text-gray-900 dark:text-indigo-100 text-base md:text-lg font-medium">
                        KeystoneJS
                      </p>
                    </div>
                  </div>
                  <div className="hover:bg-green-500 flex flex-col justify-center px-4 py-4 mt-4  dark:bg-darkBackgroundPink bg-gray-300 dark:hover:bg-indigo-900 rounded sm:mt-0">
                    <div>
                      <p className="text-lg text-center text-gray-900 dark:text-indigo-100 text-base md:text-lg font-medium">
                        Tailwind CSS
                      </p>
                    </div>
                  </div>
                  <div className="hover:bg-green-500 flex flex-col justify-center px-4 py-4 mt-4  dark:bg-darkBackgroundPink bg-gray-300 dark:hover:bg-indigo-900 rounded sm:mt-0">
                    <div>
                      <p className="text-lg text-center text-gray-900 dark:text-indigo-100 text-base md:text-lg font-medium">
                        TypeScript
                      </p>
                    </div>
                  </div>

                  <div className="hover:bg-green-500 flex flex-col justify-center px-4 py-4 mt-4  dark:bg-darkBackgroundPink   bg-gray-300 dark:hover:bg-indigo-900 rounded sm:mt-0">
                    <div>
                      <p className="text-lg text-center text-gray-900 dark:text-indigo-100 text-base md:text-lg font-medium">
                        Firebase
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <p className="mt-24">
                And, of course, the good old trio HTML, CSS and JavaScript! 🤠
              </p>
              <div className="post py-5">
                <h2 className="inline mr-3 pb-1 border-b-2 border-green-500 dark:border-darkBackgroundPink">
                  Software:
                </h2>

                <div className="mt-2">
                  <p>Firefox for browsing and development</p>
                  <p>Visual Studio Code</p>
                  <p> Postman </p>
                  <p>GitHub </p>
                  <p>Figma </p>
                  <p>MongoDb Compass </p>
                  <p>oh-my-zsh </p>
                </div>
              </div>
              {/* <div className="post py-5">
                <a href="#">
                  <h2 className="underline hover:text-cyan-900">
                    Lorem ipsum dolor sit amet consectetur.
                  </h2>
                </a>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Deleniti repudiandae quae praesentium architecto tempora
                  suscipit nesciunt sunt hic optio vitae.
                </p>
              </div>
              <div className="post py-5">
                <a href="#">
                  <h2 className="underline hover:text-cyan-900">
                    Lorem ipsum dolor sit amet consectetur.
                  </h2>
                </a>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Deleniti repudiandae quae praesentium architecto tempora
                  suscipit nesciunt sunt hic optio vitae.
                </p>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
