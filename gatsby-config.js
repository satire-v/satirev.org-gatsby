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
        extensions: [".js", ".jsx", ".react.js"],
        alias: {
          "@styles": "src/styles",
          "@utils": "src/utils",
          "@common": "src/components/common",
          "@layouts": "src/layouts",
          "@img": "src/assets/img",
          "@assets": "src/assets",
        },
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