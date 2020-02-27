/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

require("dotenv").config();

const plugins = [
  {
    resolve: "gatsby-plugin-webpack-bundle-analyzer",
    options: {
      analyzerPort: 3000,
      production: true,
      disable: false,
    },
  },
  "gatsby-plugin-preact",
  "gatsby-plugin-react-helmet",
  // {
  //   resolve: "gatsby-plugin-material-ui",
  //   options: {
  //     stylesProvider: {
  //       injectFirst: true,
  //     },
  //   },
  // },
  {
    resolve: "gatsby-plugin-emotion",
    options: {
      labelFormat: "[filename]-[local]",
    },
  },
  {
    resolve: "@directus/gatsby-source-directus",
    options: {
      url: "http://api.satirev.org/",
      project: "satire-v",
      auth: {
        token: "letmeinyoubitch",
      },
      targetStatuses: null,
      downloadFiles: true,
      typePrefix: "data",
    },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      path: `${__dirname}/src/assets/img/`,
    },
  },
  { resolve: "gatsby-plugin-sharp", options: {} },
  "gatsby-transformer-sharp",
  {
    resolve: "gatsby-plugin-alias-imports",
    options: {
      extensions: [".js", ".jsx", ".react.js", ".ts", ".tsx"],
      alias: {
        "#styles": "src/styles",
        "#animations": "src/animations",
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
  "gatsby-plugin-netlify",
];

if (process.env.NODE_ENV !== "production") {
  plugins.push(
    {
      resolve: "gatsby-plugin-codegen",
      options: {
        output: "graphql",
        includes: [
          "./src/**/*.ts",
          "./src/**/*.tsx",
          "./node_modules/gatsby-source-directus-cms/src/*.js",
          "./node_modules/gatsby-transformer-sharp/src/*.js",
          "./node_modules/gatsby-image/src/*.js",
          // "./node_modules/gatsby-*/**/*.js" Direct includes prefered, because of performance reasons
        ],
      },
    },
    "gatsby-plugin-netlify-cache"
  );
}

module.exports = {
  siteMetadata: {
    title: "Satire V",
    description: "Holding a Mirror Up to Truth",
    author: "Satire V",
  },
  plugins,
};
