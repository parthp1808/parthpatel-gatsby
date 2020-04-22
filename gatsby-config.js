module.exports = {
  siteMetadata: {
    title: `Parth Patel - Laravel Developer`,
    author: {
      name: `Parth Patel`,
      summary: `who is a full stack developer based in Toronto.`,
    },
    description: `Personal Programming blog featuring Laravel, python, php and javascript tutorials`,
    siteUrl: `https://parthp1808.netlify.com/`,
    social: {
      twitter: `parthp1808`,
      facebook: `parthp1808`,
      stackoverflow: `6715938`,
      linkedin: `parthp1808`,
      dev: `parthp1808`,
    },
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    `gatsby-plugin-catch-links`,
    {
      resolve: 'gatsby-source-wordpress',
      options: {
        // The base url to your WP site.
        baseUrl: 'www.parthpatel.net',
        // WP.com sites set to true, WP.org set to false
        hostingWPCOM: false,
        // The protocol. This can be http or https.
        protocol: 'https',
        // Use 'Advanced Custom Fields' Wordpress plugin
        useACF: false,
        auth: {},
        // Set to true to debug endpoints on 'gatsby build'
        verboseOutput: false,
        includedRoutes: [
          "**/categories",
          "**/posts",
          "**/pages",
          "**/media",
          "**/tags",
          "**/taxonomies",
          "**/users",
        ],
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    
    'gatsby-plugin-netlify', // make sure to keep it last in the array
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [require("tailwindcss")],
      },
    },
    // {
    //   // Removes unused css rules
    //   resolve:'gatsby-plugin-purgecss',
    //   options: {
    //     // Activates purging in gatsby develop
    //     develop: true,
    //     tailwind: true,
    //     // Purge only the main css file
    //     // purgeOnly: ['/all.sass'],
    //   },
    // }, // must be after other CSS plugins
  ],
}
