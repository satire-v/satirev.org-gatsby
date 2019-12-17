exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;
  const typeDefs = `
    type DataArticle implements Node {
      title: String!
    }
  `;
  createTypes(typeDefs);
};
