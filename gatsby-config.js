module.exports = {
  siteMetadata: {
    title: "Gatsby From Scratch",
    description: "A minimal Gatsby project built without the CLI",
    author: "@yourhandle",
  },
  plugins: [
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Tim Upchurch`,       
        short_name: `timup`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#000000`,
        display: `standalone`,
        icon: `static/favicon-32x32.png`, // Path to your favicon
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-react-helmet-async`,
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-transformer-yaml',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'projects',
        path: `${__dirname}/src/data/`,
      },
    },
  ],
};
