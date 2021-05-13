/* eslint-disable react/prop-types */
import React, { createContext, useState, useEffect } from 'react';

// basically based on the local storage and context api
const getInitialTheme = () => {
  // if windows is not not undefined
  if (typeof window !== 'undefined' && window.localStorage) {
    // access the local storage with window.localStorage
    // if there is something the local storage
    // we will call this storedPrefs
    // get item the current-theme
    const storedPrefs = window.localStorage.getItem('current-theme');
    // if the type of storedPrefs in localStorage is string
    // return storedPrefs
    if (typeof storedPrefs === 'string') {
      return storedPrefs;
    }
    // whether we have a match of dark or light
    // if its dark return dark and vice versa light
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
  }
  return 'light';
};

// provider from context api to set item and get item
export const ThemeContext = createContext();

// take inital theme and children
export const ThemeProvider = ({ initialTheme, children }) => {
  const [theme, setTheme] = useState(getInitialTheme);

  const checkTheme = (existing) => {
    const root = window.document.documentElement;
    const isDark = existing === 'dark';

    root.classList.remove(isDark ? 'light' : 'dark');
    root.classList.add(existing);
    // setting the item
    localStorage.setItem('current-theme', existing);
  };
  // if we have intial theme
  if (initialTheme) {
    checkTheme(initialTheme);
  }

  useEffect(() => {
    checkTheme(theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
