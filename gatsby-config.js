// eslint-disable-next-line @typescript-eslint/no-var-requires
import { aliases, extensions } from "./alias.config";

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
      extensions,
      alias: aliases,
    },
  },
  "gatsby-plugin-netlify",
  "gatsby-plugin-netlify-cache",
];

if (process.env.NODE_ENV !== "production") {
  plugins.push(
    // {
    //   resolve: "gatsby-plugin-codegen",
    //   options: {
    //     output: "graphql",
    //     includes: [
    //       "./src/**/*.ts",
    //       "./src/**/*.tsx",
    //       "./node_modules/@directus/gatsby-source-directus/src/*.js",
    //       "./node_modules/gatsby-transformer-sharp/src/*.js",
    //       "./node_modules/gatsby-image/src/*.js",
    //       // "./node_modules/gatsby-*/**/*.js" Direct includes prefered, because of performance reasons
    //     ],
    //   },
    // },
    {
      resolve: "gatsby-plugin-typegen",
      options: {
        emitSchema: {
          "src/__generated__/gatsby-introspection.json": true,
        },
      },
    }
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
