import React, { useContext, useState } from 'react';
import { Link } from 'gatsby';
import { Transition } from '@headlessui/react';
import { Moon, Sun } from './Icon';
import { ThemeContext } from './ThemeContext';
import logo from '../images/p.svg';
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

                  <Link to="/">
                    <div aria-label="Logo">
                      <img
                        src={logo}
                        fill="#eb4471"
                        viewBox="0 0 42.21 42.21"
                        className="h-8 w-8  hover:text-red-300 focus:text-red-300 dark:text-red-300"
                        alt="Pranav Khapra"
                      />
                    </div>
                  </Link>
                </div>
                <div className=" hidden md:block">
                  <div className="ml-10 flex items-baseline space-x-4 ">
                    <Link to="/">
                      <div className=" hover:bg-lightPurple hover:text-darkText focus:bg-red-300 dark:hover:bg-darkBackgroundPink dark:focus:bg-gray-900 px-3 py-2 rounded-md text-sm lg:text-base font-medium">
                        Home
                      </div>
                    </Link>
                    <Link to="/projects">
                      <div className=" hover:bg-lightPurple hover:text-darkText focus:bg-red-300 dark:hover:bg-darkBackgroundPink  dark:focus:bg-gray-900 px-3 py-2 rounded-md text-sm lg:text-base font-medium">
                        Projects
                      </div>
                    </Link>
                    <Link to="/uses">
                      <div className=" hover:bg-lightPurple hover:text-darkText focus:bg-red-300 dark:hover:bg-darkBackgroundPink dark:focus:bg-gray-900 px-3 py-2 rounded-md text-sm lg:text-base font-medium">
                        Uses
                      </div>
                    </Link>
                    <Link to="/about">
                      <div className=" hover:bg-lightPurple hover:text-darkText focus:bg-red-300 dark:hover:bg-darkBackgroundPink dark:focus:bg-gray-900 px-3 py-2 rounded-md text-sm lg:text-base font-medium">
                        About
                      </div>
                    </Link>
                    <Link to="/anime">
                      <div className=" hover:bg-lightPurple hover:text-darkText focus:bg-red-300 dark:hover:bg-darkBackgroundPink  dark:focus:bg-gray-900 px-3 py-2 rounded-md text-sm lg:text-base font-medium">
                        Anime
                      </div>
                    </Link>
                    <a href="learn-tailwind-pdf.pdf" download>
                      <div className="hover:bg-lightPurple hover:text-darkText focus:bg-red-300 dark:hover:bg-darkBackgroundPink  dark:focus:bg-gray-900 px-3 py-2 rounded-md text-sm lg:text-base font-medium">
                        Resume
                      </div>
                    </a>
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
                    <Link to="/">
                      <div className=" hover:bg-gray-100 focus:bg-gray-100 dark:hover:bg-gray-900  dark:focus:bg-gray-900 block px-3 py-2 rounded-md text-sm md:text-base font-medium">
                        Home
                      </div>
                    </Link>
                  </div>
                  <div
                    onClick={() => setBurgerBar(!burgerBar)}
                    aria-hidden="true"
                  >
                    <Link to="/projects">
                      <div className=" hover:bg-gray-100 focus:bg-gray-100 dark:hover:bg-gray-900  dark:focus:bg-gray-900 block px-3 py-2 rounded-md text-sm md:text-base font-medium">
                        Projects
                      </div>
                    </Link>
                  </div>
                  <div
                    onClick={() => setBurgerBar(!burgerBar)}
                    aria-hidden="true"
                  >
                    <Link to="/uses">
                      <div className=" hover:bg-gray-100 focus:bg-gray-100 dark:hover:bg-gray-900  dark:focus:bg-gray-900 block px-3 py-2 rounded-md text-sm md:text-base font-medium">
                        Uses
                      </div>
                    </Link>
                  </div>
                  <div
                    onClick={() => setBurgerBar(!burgerBar)}
                    aria-hidden="true"
                  >
                    <Link to="/about">
                      <div className=" hover:bg-gray-100 focus:bg-gray-100 dark:hover:bg-gray-900  dark:focus:bg-gray-900 block px-3 py-2 rounded-md text-sm md:text-base font-medium">
                        About
                      </div>
                    </Link>
                  </div>
                  <div
                    onClick={() => setBurgerBar(!burgerBar)}
                    aria-hidden="true"
                  >
                    <Link to="/anime">
                      <div className=" hover:bg-gray-100 focus:bg-gray-100 dark:hover:bg-gray-900  dark:focus:bg-gray-900 block px-3 py-2 rounded-md text-sm md:text-base font-medium">
                        Anime
                      </div>
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
