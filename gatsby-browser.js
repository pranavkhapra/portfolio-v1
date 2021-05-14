/* eslint-disable react/jsx-props-no-spreading */
import './src/styles/global.css';
import React from 'react';
import Layout from './src/Components/Layout';
import 'typeface-fira-mono';
import { ThemeProvider } from './src/Components/ThemeContext';

export const wrapPageElement = ({ element, props }) => (
  <ThemeProvider>
    <Layout {...props}>{element}</Layout>
  </ThemeProvider>
);
