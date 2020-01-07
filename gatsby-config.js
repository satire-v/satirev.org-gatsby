/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
// @flow
// const queries = require("./src/utils/algolia");
require("dotenv").config();

module.exports = {
  siteMetadata: {
    title: `Satire V`,
    description: `Holding a Mirror Up to Truth`,
    author: `Satire V`,
  },
  plugins: [
    "gatsby-plugin-flow",
    {
      resolve: `gatsby-plugin-material-ui`,
      options: {
        stylesProvider: {
          injectFirst: true,
        },
      },
    },
    {
      resolve: "gatsby-plugin-emotion",
      options: {
        labelFormat: "[filename]-[local]",
      },
    },
    // {
    //   resolve: `gatsby-plugin-algolia`,
    //   options: {
    //     appId: process.env.GATSBY_ALGOLIA_APP_ID,
    //     apiKey: process.env.ALGOLIA_ADMIN_KEY,
    //     queries,
    //     chunkSize: 10000, // default: 1000
    //   },
    // },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Lato", "Merriweather", "Crimson Text"],
        },
        custom: {
          families: ["Cardinal"],
          urls: ["/src/assets/fonts/cardinal/stylesheet.css"],
        },
      },
    },
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
          "@queryTypes": "src/queries/graphql",
        },
      },
    },
  ],
};
