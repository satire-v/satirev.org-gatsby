/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: "gatsby-source-directus-cms",
      options: {
        url: "http://api.satirev.org",
        project: "satire-v",
        auth: {
          token: "letmeinyoubitch",
        },
        targetStatuses: null,
        downloadFiles: false,
        typePrefix: "d",
      },
    },
  ],
}
