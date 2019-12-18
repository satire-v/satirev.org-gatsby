exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;
  const typeDefs = `
    type DataArticle implements Node {
      title: String!
      slug: String!
      category: DataCategory!
      body: String!
      modified_on(
        formatString: String
        fromNow: Boolean
        difference: String
        locale: String
      ): Date!
    }
    type DataFileData {
      full_url: String!
    }
    type DataCategory implements Node {
      name: String!
      slug: String!
    }
  `;
  createTypes(typeDefs);
};
