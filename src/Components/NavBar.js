import React, { useContext, useState } from 'react';
import { Link } from 'gatsby';
import { Transition } from '@headlessui/react';
import { Moon, Sun } from './Icon';
import { ThemeContext } from './ThemeContext';

// import SoundPlay from './SoundPlay';

export default function NavBar() {
  const { theme, setTheme } = useContext(ThemeContext);

  const [burgerBar, setBurgerBar] = useState(false);
  return (
    <>
      <header className="fixed top-0 w-full bg-white dark:text-gray-100 text-black  dark:bg-darkBackgroundBlue z-20">
        <nav
        // className="border-b  border-gray-200 dark:border-gray-800"
        >
          <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className=" flex items-center justify-between h-16">
              <div className="flex items-center">
                <div
                  className="flex-shrink-0 cursor-pointer"
                  onKeyPress={() => setBurgerBar(false)}
                  onClick={() => setBurgerBar(false)}
                  role="button"
                  tabIndex={0}
                >
                  {/* <SoundPlay /> */}
                  <Link href="/">
                    <a aria-label="Logo">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#eb4471"
                        viewBox="0 0 42.21 42.21"
                        className="h-8 w-8  hover:text-red-300 focus:text-red-300 dark:text-red-300"
                      >
                        <path d="M7.016 39.154c-.127-.135-.244-.277-.35-.43-.035-.051-.065-.097-.095-.146-.575-.965-.492-1.533-.55-1.636-.023-.115-.108.213-.015.769.087.553.443 1.305 1.025 1.867.138.14.287.266.44.38.553 1.321 1.856 2.251 3.378 2.251h.685c2.022 0 3.661-1.642 3.661-3.662v-7.644c0-2.021 1.169-3.662 2.612-3.662h2.613c3.625 0 6.393-.19 8.306-.564 1.411-.309 2.793-.938 4.157-1.883 1.359-.945 2.479-2.25 3.361-3.912.89-1.662 1.33-3.703 1.33-6.144 0-2.882-.648-5.271-1.926-7.187-.101-.235-.197-.473-.313-.701-1.07-2.018-2.75-3.685-4.735-4.688-.845-.471-1.896-.867-3.048-1.014C25.156.843 22.657.909 21.24.576c-.103-.228 3.957.105 3.825-.138-2.408-.637-8.431-.527-10.1-.018L11.981.306 10.48.238C9.977.226 9.509.152 8.862.23c-1.227.155-2.363.832-3.089 1.864-.363.511-.621 1.105-.748 1.73-.07.293-.089.674-.103.909l-.037.752c-.191 4.007-.322 7.973-.208 11.763.171 1.922.321.904.482 1.474-.562 9.286.595 20.456 1.505 17.804-.872-9.665-.647-20.107-.398-30.568.03-.64-.004-1.35.092-1.901.1-.581.377-1.118.753-1.557.387-.433.879-.767 1.424-.939.285-.095.531-.138.825-.155l.245-.008.22.004.489.009c2.606.049 5.2.081 7.772.083 2.567 0 5.107-.015 7.59.102 1.25.063 2.444.157 3.589.539.261.082.517.178.77.279.042.02.082.042.124.062-.753-.294-1.525-.518-2.314-.619-.946-.104-1.958-.107-2.945-.103l-5.91.104c.2.396 5.174.547 8.13.352.624.144-.444.123-.073.241 1.167.103 2.399.376 3.571.87 1.167.487 2.24 1.218 3.07 1.973-.014-.002-.012.012-.02.014-1.199-1.043-2.562-1.774-4.1-2.176-1.479-.396-4.654-.593-9.523-.593H10.85c-2.023 0-3.662 1.64-3.662 3.661v32.348c0 .303.047.593.117.875-.034-.03-.071-.059-.104-.089-.062-.06-.126-.117-.185-.18zm8.181-26.246c0-2.021.867-3.662 1.937-3.662h1.938c2.883 0 4.802.095 5.766.272 1.295.235 2.368.823 3.218 1.761.847.936 1.271 2.129 1.271 3.572 0 1.168-.303 2.197-.91 3.084-.598.885-1.438 1.533-2.506 1.947-1.06.416-3.165.625-6.327.625h-2.193c-1.211 0-2.193-1.64-2.193-3.661l-.001-3.938z" />
                      </svg>
                    </a>
                  </Link>
                </div>
                <div className=" hidden md:block">
                  <div className="ml-10 flex items-baseline space-x-4 ">
                    <Link href="/">
                      <a className=" hover:bg-lightPurple hover:text-darkText focus:bg-red-300 dark:hover:bg-darkBackgroundPink dark:focus:bg-gray-900 px-3 py-2 rounded-md text-sm lg:text-base font-medium">
                        Home
                      </a>
                    </Link>
                    <Link href="/projects">
                      <a className=" hover:bg-lightPurple hover:text-darkText focus:bg-red-300 dark:hover:bg-darkBackgroundPink  dark:focus:bg-gray-900 px-3 py-2 rounded-md text-sm lg:text-base font-medium">
                        Projects
                      </a>
                    </Link>
                    <Link href="/uses">
                      <a className=" hover:bg-lightPurple hover:text-darkText focus:bg-red-300 dark:hover:bg-darkBackgroundPink dark:focus:bg-gray-900 px-3 py-2 rounded-md text-sm lg:text-base font-medium">
                        Uses
                      </a>
                    </Link>
                    <Link href="/about">
                      <a className=" hover:bg-lightPurple hover:text-darkText focus:bg-red-300 dark:hover:bg-darkBackgroundPink dark:focus:bg-gray-900 px-3 py-2 rounded-md text-sm lg:text-base font-medium">
                        About
                      </a>
                    </Link>
                    <Link href="/anime">
                      <a className=" hover:bg-lightPurple hover:text-darkText focus:bg-red-300 dark:hover:bg-darkBackgroundPink  dark:focus:bg-gray-900 px-3 py-2 rounded-md text-sm lg:text-base font-medium">
                        Anime
                      </a>
                    </Link>
                    <Link href="/resume">
                      <a className="hover:bg-lightPurple hover:text-darkText focus:bg-red-300 dark:hover:bg-darkBackgroundPink  dark:focus:bg-gray-900 px-3 py-2 rounded-md text-sm lg:text-base font-medium">
                        Resume
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              <button
                type="button"
                aria-label="dark mode"
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="shadow hidden md:block self-center bg-white hover:bg-gray-100 focus:ring focus:ring-gray-500  dark:bg-black dark:hover:bg-gray-900 focus:outline-none rounded-md p-1.5"
              >
                {theme === 'dark' ? (
                  <Sun aria-hidden="false" />
                ) : (
                  <Moon aria-hidden="true" />
                )}
              </button>
              <div className="-mr-2 flex md:hidden space-x-4">
                {/* <!-- Mobile menu button --> */}
                <button
                  type="button"
                  aria-label="dark mode"
                  onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                  className="shadow block md:hidden self-center bg-white hover:bg-gray-100 focus:ring focus:ring-gray-500  dark:bg-black dark:hover:bg-gray-900 focus:outline-none rounded-md p-1.5"
                >
                  {theme === 'dark' ? (
                    <Sun aria-hidden="false" />
                  ) : (
                    <Moon aria-hidden="true" />
                  )}
                </button>

                <button
                  onClick={() => setBurgerBar(!burgerBar)}
                  type="button"
                  className="bg-gray-200 dark:bg-gray-900 inline-flex items-center justify-center p-2 rounded-md dark:text-gray-300 dark:hover:text-gray-100 hover:bg-gray-300 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-400 dark:focus:ring-offset-gray-800 focus:ring-white"
                  aria-controls="mobile-menu"
                  aria-expanded="false"
                >
                  <span className="sr-only">Open main menu</span>
                  {!burgerBar ? (
                    <svg
                      className="block h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="block h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <Transition
            duration-300
            show={burgerBar}
            enter="transition duration-300 ease-out duration-200 transform"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="transition duration-300 ease-in-out duration-200 transform"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            {(ref) => (
              <div
                className="border-b dark:border-gray-600 md:hidden"
                id="mobile-menu"
              >
                <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                  <div
                    onClick={() => setBurgerBar(!burgerBar)}
                    aria-hidden="true"
                  >
                    <Link href="/">
                      <a className=" hover:bg-gray-100 focus:bg-gray-100 dark:hover:bg-gray-900  dark:focus:bg-gray-900 block px-3 py-2 rounded-md text-sm md:text-base font-medium">
                        Home
                      </a>
                    </Link>
                  </div>
                  <div
                    onClick={() => setBurgerBar(!burgerBar)}
                    aria-hidden="true"
                  >
                    <Link href="/projects">
                      <a className=" hover:bg-gray-100 focus:bg-gray-100 dark:hover:bg-gray-900  dark:focus:bg-gray-900 block px-3 py-2 rounded-md text-sm md:text-base font-medium">
                        Projects
                      </a>
                    </Link>
                  </div>
                  <div
                    onClick={() => setBurgerBar(!burgerBar)}
                    aria-hidden="true"
                  >
                    <Link href="/uses">
                      <a className=" hover:bg-gray-100 focus:bg-gray-100 dark:hover:bg-gray-900  dark:focus:bg-gray-900 block px-3 py-2 rounded-md text-sm md:text-base font-medium">
                        Uses
                      </a>
                    </Link>
                  </div>
                  <div
                    onClick={() => setBurgerBar(!burgerBar)}
                    aria-hidden="true"
                  >
                    <Link href="/about">
                      <a className=" hover:bg-gray-100 focus:bg-gray-100 dark:hover:bg-gray-900  dark:focus:bg-gray-900 block px-3 py-2 rounded-md text-sm md:text-base font-medium">
                        About
                      </a>
                    </Link>
                  </div>
                  <div
                    onClick={() => setBurgerBar(!burgerBar)}
                    aria-hidden="true"
                  >
                    <Link href="/anime">
                      <a className=" hover:bg-gray-100 focus:bg-gray-100 dark:hover:bg-gray-900  dark:focus:bg-gray-900 block px-3 py-2 rounded-md text-sm md:text-base font-medium">
                        Anime
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </Transition>
        </nav>
      </header>
    </>
  );
}
