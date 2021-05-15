module.exports = {
  siteMetadata: {
    title: 'portfolio-v2',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, // Needed for dynamic images

    {
      resolve: `gatsby-plugin-scroll-indicator`,
      options: {
        // Configure color of the scroll indicator
        color: '#eb4471',
        // Height of the scroll indicator
        height: '4px',
        // Configure paths where the scroll indicator will appear
        paths: ['/', '/projects', '/uses', '/about', '/anime'],
        // Configure the z-index of the indicator element
        zIndex: `9999`,
      },
    },
  ],
};
