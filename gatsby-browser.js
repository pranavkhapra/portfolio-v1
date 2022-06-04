/* eslint-disable react/jsx-props-no-spreading */
import './src/styles/global.css';
import React from 'react';
import { Helmet } from 'react-helmet';
// import favicon from '/rainbow.png';
import Layout from './src/components/Layout';
import 'typeface-fira-mono';
import { ThemeProvider } from './src/components/ThemeContext';

export const wrapPageElement = ({ element, props }) => (
  <ThemeProvider>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Pranav Khapra</title>
      <link rel="icon" type="image/png" href="/rainbow.png" sizes="32x32" />
    </Helmet>
    <Layout className="scrollbar" {...props}>
      {element}
    </Layout>
  </ThemeProvider>
);
