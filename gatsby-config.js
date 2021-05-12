module.exports = {
  siteMetadata: {
    title: 'portfolio-v2',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    'gatsby-plugin-postcss',
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Karla', 'sans-serif'],
        },
      },
    },
  ],
};
