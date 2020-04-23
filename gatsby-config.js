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
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Parth Patel",
        short_name: "Parth Blog",
        start_url: "/",
        background_color: "#6b37bf",
        theme_color: "#6b37bf",
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: "standalone",
        icon: "src/img/icon.png", // This path is relative to the root of the site.
        // An optional attribute which provides support for CORS check.
        // If you do not provide a crossOrigin option, it will skip CORS for manifest.
        // Any invalid keyword or empty string defaults to `anonymous`
        crossOrigin: `use-credentials`,
      },
    },
    {
      resolve: 'gatsby-plugin-html-attributes',
      options: {
        lang: 'en'
      }
    },
    'gatsby-plugin-offline',
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
