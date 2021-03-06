import React from 'react';
import ScrollToTop from '../components/ScrollToTop';
import ScrollToDown from '../components/ScrollToDown';

export default function uses() {
  return (
    <>
      <div className="relative min-h-screen font-mono text-cyan-900 dark:text-darkText">
        <div className="w-full flex justify-center h-20 text-cyan-900" />
        <div className="flex justify-center py-5">
          <div className="container max-w-3xl p-4">
            <div className=" space-y-2 md:space-y-5 ">
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
            <div className="py-5">
              <h2 className="inline mr-3 pb-1 border-b-2 border-green-500 dark:border-darkBackgroundPink">
                Hardware:
              </h2>

              <div className="mt-2">
                <p>Lenovo IdeaPad -330 (15-Inch, 2018) for work </p>
                <p>OS: Linux Distro:KUbuntu</p>
              </div>
            </div>
            <div className="py-5">
              <h2 className="inline mr-3 pb-1 border-b-2 border-green-500 dark:border-darkBackgroundPink">
                Technologies I like to work with 💾
              </h2>

              <div className="flex flex-col gap-4">
                <div className="sm:grid sm:gap-4 sm:grid-cols-3 dark:text-indigo-100 px-4 py-4 hover:text-cyan-900">
                  <div className="hover:bg-green-500 flex flex-col justify-center px-4 py-4  dark:bg-darkBackgroundPink bg-gray-300 dark:hover:bg-indigo-900  rounded col-span-3">
                    <p className="text-lg text-center text-gray-900 dark:text-indigo-100  md:text-lg font-medium">
                      Programming Language
                    </p>
                  </div>
                  <div className="hover:bg-green-500 flex flex-col justify-center px-4 py-4  dark:bg-darkBackgroundPink bg-gray-300 dark:hover:bg-indigo-900  rounded sm:mt-0 mt-4">
                    <p className="text-lg text-center text-gray-900 dark:text-indigo-100  md:text-lg font-medium">
                      HTML
                    </p>
                  </div>
                  <div className="hover:bg-green-500 flex flex-col justify-center px-4 py-4 mt-4  dark:bg-darkBackgroundPink bg-gray-300 dark:hover:bg-indigo-900 rounded sm:mt-0">
                    <p className="text-lg text-center text-gray-900 dark:text-indigo-100  md:text-lg font-medium">
                      CSS3
                    </p>
                  </div>
                  <div className="hover:bg-green-500 flex flex-col justify-center px-4 py-4 mt-4  dark:bg-darkBackgroundPink bg-gray-300 dark:hover:bg-indigo-900 rounded sm:mt-0 sm:mb-0 mb-4">
                    <p className="text-lg text-center text-gray-900 dark:text-indigo-100  md:text-lg font-medium">
                      JavaScript(ES6)
                    </p>
                  </div>
                  <div className="hover:bg-green-500 flex flex-col justify-center px-4 py-4  dark:bg-darkBackgroundPink bg-gray-300 dark:hover:bg-indigo-900  rounded col-span-3">
                    <p className="text-lg text-center text-gray-900 dark:text-indigo-100  md:text-lg font-medium">
                      Libraries & Framework
                    </p>
                  </div>
                  <div className="hover:bg-green-500 flex flex-col justify-center px-4 py-4 mt-4 dark:bg-darkBackgroundPink bg-gray-300 dark:hover:bg-indigo-900 rounded sm:mt-0">
                    <p className="text-lg text-center text-gray-900 dark:text-indigo-100  md:text-lg font-medium">
                      React / React Native
                    </p>
                  </div>
                  <div className="hover:bg-green-500 flex flex-col justify-center px-4 py-4 mt-4  dark:bg-darkBackgroundPink bg-gray-300 dark:hover:bg-indigo-900 rounded sm:mt-0">
                    <p className="text-lg text-center text-gray-900 dark:text-indigo-100  md:text-lg font-medium">
                      Typescript
                    </p>
                  </div>
                  <div className="hover:bg-green-500 flex flex-col justify-center px-4 py-4 mt-4  dark:bg-darkBackgroundPink bg-gray-300 dark:hover:bg-indigo-900 rounded sm:mt-0">
                    <p className="text-lg text-center text-gray-900 dark:text-indigo-100  md:text-lg font-medium">
                      NextJs
                    </p>
                  </div>
                  <div className="hover:bg-green-500 flex flex-col justify-center px-4 py-4 mt-4  dark:bg-darkBackgroundPink bg-gray-300 dark:hover:bg-indigo-900 rounded sm:mt-0">
                    <p className="text-lg text-center text-gray-900 dark:text-indigo-100  md:text-lg font-medium">
                      GraphQL
                    </p>
                  </div>

                  <div className="hover:bg-green-500 flex flex-col justify-center px-4 py-4 mt-4  dark:bg-darkBackgroundPink   bg-gray-300 dark:hover:bg-indigo-900 rounded sm:mt-0">
                    <p className="text-lg text-center text-gray-900 dark:text-indigo-100  md:text-lg font-medium">
                      Styled-Components
                    </p>
                  </div>
                  <div className="hover:bg-green-500 flex flex-col justify-center px-4 py-4 mt-4  dark:bg-darkBackgroundPink bg-gray-300 dark:hover:bg-indigo-900 rounded sm:mt-0">
                    <p className="text-lg text-center text-gray-900 dark:text-indigo-100  md:text-lg font-medium">
                      Gatsby
                    </p>
                  </div>
                  <div className="hover:bg-green-500 flex flex-col justify-center px-4 py-4 mt-4  dark:bg-darkBackgroundPink bg-gray-300 dark:hover:bg-indigo-900 rounded sm:mt-0">
                    <p className="text-lg text-center text-gray-900 dark:text-indigo-100  md:text-lg font-medium">
                      StoryBook
                    </p>
                  </div>
                  <div className="hover:bg-green-500 flex flex-col justify-center px-4 py-4 mt-4  dark:bg-darkBackgroundPink bg-gray-300 dark:hover:bg-indigo-900 rounded sm:mt-0">
                    <p className="text-lg text-center text-gray-900 dark:text-indigo-100  md:text-lg font-medium">
                      Redux
                    </p>
                  </div>
                  <div className="hover:bg-green-500 flex flex-col justify-center px-4 py-4 mt-4  dark:bg-darkBackgroundPink bg-gray-300 dark:hover:bg-indigo-900 rounded sm:mt-0 sm:mb-0 mb-4">
                    <p className="text-lg text-center text-gray-900 dark:text-indigo-100  md:text-lg font-medium">
                      Tailwind
                    </p>
                  </div>
                  <div className="hover:bg-green-500 flex flex-col justify-center px-4 py-4  dark:bg-darkBackgroundPink bg-gray-300 dark:hover:bg-indigo-900  rounded col-span-3">
                    <p className="text-lg text-center text-gray-900 dark:text-indigo-100  md:text-lg font-medium">
                      Tool & Platform
                    </p>
                  </div>
                  <div className="hover:bg-green-500 flex flex-col justify-center px-4 py-4 mt-4  dark:bg-darkBackgroundPink bg-gray-300 dark:hover:bg-indigo-900 rounded sm:mt-0">
                    <p className="text-lg text-center text-gray-900 dark:text-indigo-100  md:text-lg font-medium">
                      Git
                    </p>
                  </div>
                  <div className="hover:bg-green-500 flex flex-col justify-center px-4 py-4 mt-4  dark:bg-darkBackgroundPink bg-gray-300 dark:hover:bg-indigo-900 rounded sm:mt-0">
                    <p className="text-lg text-center text-gray-900 dark:text-indigo-100  md:text-lg font-medium">
                      Firebase
                    </p>
                  </div>
                  <div className="hover:bg-green-500 flex flex-col justify-center px-4 py-4 mt-4  dark:bg-darkBackgroundPink bg-gray-300 dark:hover:bg-indigo-900 rounded sm:mt-0">
                    <p className="text-lg text-center text-gray-900 dark:text-indigo-100  md:text-lg font-medium">
                      Postman
                    </p>
                  </div>
                  <div className="hover:bg-green-500 flex flex-col justify-center px-4 py-4 mt-4  dark:bg-darkBackgroundPink bg-gray-300 dark:hover:bg-indigo-900 rounded sm:mt-0">
                    <p className="text-lg text-center text-gray-900 dark:text-indigo-100  md:text-lg font-medium">
                      NX Monorepo's
                    </p>
                  </div>
                  <div className="hover:bg-green-500 flex flex-col justify-center px-4 py-4 mt-4  dark:bg-darkBackgroundPink bg-gray-300 dark:hover:bg-indigo-900 rounded sm:mt-0">
                    <p className="text-lg text-center text-gray-900 dark:text-indigo-100  md:text-lg font-medium">
                      Netlify CMS
                    </p>
                  </div>
                  <div className="hover:bg-green-500 flex flex-col justify-center px-4 py-4 mt-4  dark:bg-darkBackgroundPink bg-gray-300 dark:hover:bg-indigo-900 rounded sm:mt-0">
                    <p className="text-lg text-center text-gray-900 dark:text-indigo-100  md:text-lg font-medium">
                      Strapi
                    </p>
                  </div>
                </div>
                <div>
                  <p>
                    And, of course, the good old trio HTML, CSS and JavaScript!
                    🤠
                  </p>
                  <div className="py-5">
                    <h2 className="inline mr-3 pb-1 border-b-2 border-green-500 dark:border-darkBackgroundPink">
                      Software 💿
                    </h2>

                    <div className="mt-2">
                      <p>Editor: VSCode</p>
                      <p>Editor/Terminal Theme:Cobalt 2 theme by Wes Bos</p>
                      <p>Browser: Firefox Developer Edition</p>
                      <p>Postman </p>
                      <p>Design Tool: Figma </p>
                      <p>MongoDb Compass </p>
                      <p>Trello for tracking my work (like a kanban board)</p>
                      <p>Terminal:linux with oh-my-zsh </p>
                      <p> Fira Code Font- it's free!</p>
                    </div>
                    <div className="mt-32 inline mr-3 pb-1 border-b-2 border-green-500 dark:border-darkBackgroundPink">
                      Icons made by&nbsp;
                      <a href="https://smashicons.com/" title="Smashicons">
                        Smashicons
                      </a>
                      &nbsp; from&nbsp;
                      <a href="https://www.flaticon.com/" title="Flaticon">
                        www.flaticon.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ScrollToTop />
        <ScrollToDown />
      </div>
    </>
  );
}
