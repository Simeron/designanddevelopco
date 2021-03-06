module.exports = {
  siteMetadata: {
    title: `Design & Develop .Co`,
    description: `Transform your brand and web presence with Design & Develop.Co. We create bespoke solutions to suit our customers needs. We specialise in graphic design and building brands, and building websites designed around the needs of your users. `,
    author: `Design & Develop.Co`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/designAndDevelopcoThumbnail.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Josefin Slab, serif`,
          `Cutive Mono, monospace`,
          `source sans pro\:300,400,400i,700`, // you can also specify font weights and styles
          `Cookie, cursive`,
          
          `Raleway, sans-serif\:100,200,300,700`,
        ],
        display: 'swap'
      }
    }, 
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: -500
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
