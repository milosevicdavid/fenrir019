module.exports = {
  siteMetadata: {
    title: `Fenrir019`,
    description: `Fenrir019 veterinarska ambulanta je specijalizovana za pružanje preventive i terapije Vašim ljubimcima. Nalazimo se na Karaburmi, u ulici Marijane Gregoran 34a.`,
    author: '@milosevicdavid',
    instagramUsername: '@fenrir019veterinar',
    image:  'top.jpg',
    siteUrl: 'https://fenrir019.rs',

  },
  plugins: [
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://fenrir019bgd.netlify.app',
        sitemap: 'https://fenrir019bgd.netlify.app/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },

        
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-netlify-headers`,
    `gatsby-plugin-playground`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logomain.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
