/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
// @flow

require("dotenv").config();

const plugins = [
  {
    resolve: "gatsby-plugin-webpack-bundle-analyzer",
    options: {
      analyzerPort: 3000,
      production: true,
      disable: true,
    },
  },
  `gatsby-plugin-preact`,
  "gatsby-plugin-netlify-cache",
  `gatsby-plugin-react-helmet`,
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
  {
    resolve: "@directus/gatsby-source-directus",
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
        "#styles": "src/styles",
        "#utils": "src/utils",
        "#common": "src/components/common",
        "#components": "src/components",
        "#layouts": "src/layouts",
        "#img": "src/assets/img",
        "#assets": "src/assets",
        "#queries": "src/queries",
        "#queryTypes": "src/queries/graphql",
      },
    },
  },
];

if (process.env.NODE_ENV !== "production") {
  plugins.push({
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
  });
}

module.exports = {
  siteMetadata: {
    title: `Satire V`,
    description: `Holding a Mirror Up to Truth`,
    author: `Satire V`,
  },
  plugins: plugins,
};
