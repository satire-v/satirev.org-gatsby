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
      resolve: "gatsby-plugin-codegen",
      options: {
        addTypename: true,
        target: "flow",
        output: "graphql",
        includes: [
          "./src/**/*.js",
          "./node_modules/gatsby-source-directus-cms/src/*.js",
          "./node_modules/gatsby-transformer-sharp/src/*.js",
          "./node_modules/gatsby-image/src/*.js",
          // "./node_modules/gatsby-*/**/*.js" Direct includes prefered, because of performance reasons
        ],
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
        downloadFiles: true,
        typePrefix: "data",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-plugin-alias-imports",
      options: {
        extensions: [".js", ".jsx", ".react.js"],
        alias: {
          "@styles": "src/styles",
          "@utils": "src/utils",
          "@common": "src/components/common",
          "@components": "src/components",
          "@layouts": "src/layouts",
          "@img": "src/assets/img",
          "@assets": "src/assets",
          "@queries": "src/queries",
        },
      },
    },
  ],
};
