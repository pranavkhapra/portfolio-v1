module.exports = {
  siteMetadata: {
    title: 'portfolio-v2',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    'gatsby-plugin-postcss',

    {
      resolve: `gatsby-plugin-scroll-indicator`,
      options: {
        // Configure color of the scroll indicator
        color: '#64ffda',
        // Height of the scroll indicator
        height: '3px',
        // Configure paths where the scroll indicator will appear
        paths: ['/', '/projects', '/uses', '/about', '/anime'],
        // Configure the z-index of the indicator element
        zIndex: `9999`,
      },
    },
  ],
};
