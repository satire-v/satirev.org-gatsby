// eslint-disable-next-line @typescript-eslint/no-var-requires
const { aliases, extensions } = require("./alias.config");

require("dotenv").config();

const plugins = [
  { resolve: "gatsby-plugin-typescript" },
  {
    resolve: "gatsby-plugin-webpack-bundle-analyzer",
    options: {
      analyzerPort: 3000,
      production: true,
      disable: true,
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
  plugins.push({
    resolve: "gatsby-plugin-typegen",
    options: {
      outputPath: `src/__generated__/gatsby-types.ts`,
      emitSchema: {
        "src/__generated__/gatsby-introspection.json": true,
      },
    },
  });
}
module.exports = {
  siteMetadata: {
    title: "Satire V",
    description: "Holding a Mirror Up to Truth",
    author: "Satire V",
  },
  plugins,
};
