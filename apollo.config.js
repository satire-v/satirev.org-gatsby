module.exports = {
  client: {
    addTypename: true,
    excludes: [],
    includes: [
      "./src/**/*.tsx",
      "./src/**/*.ts",
      "./src/**/*.js",
      "./node_modules/gatsby-transformer-sharp/src/*.js",
      "./node_modules/gatsby-image/src/*.js",
      "./node_modules/@directus/gatsby-source-directus/src/*.js",
    ],
    service: {
      name: "gatsbySchema",
      localSchemaFile: "./src/__generated__/gatsby-introspection.json",
    },
    tagName: "graphql",
  },
};
