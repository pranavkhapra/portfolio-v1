module.exports = {
  siteMetadata: {
    title: 'portfolio-v2',
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          'G-V6LKRCRXL4', // Google Analytics / GA
        ],
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
        },
      },
    },
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
    {
      resolve: `gatsby-plugin-hotjar`,
      options: {
        includeInDevelopment: true, // optional parameter to include script in development
        id: 2411755,
        sv: 6,
      },
    },
    
  ],
};
