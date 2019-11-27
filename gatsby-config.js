/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  plugins: [
    "gatsby-plugin-flow",
    "gatsby-plugin-emotion",
    {
      resolve: "gatsby-plugin-alias-imports",
      options: {
        extensions: ["", ".js", ".jsx", ".react.js"],
      },
    },
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
        typePrefix: "data",
      },
    },
  ],
};
