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
      created_on(
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

exports.createPages = async function({ actions, graphql }) {
  const { data } = await graphql(`
    query {
      allDataArticle {
        nodes {
          dataId
          legacy_slug
          slug
          category {
            slug
          }
        }
      }
    }
  `);
  data.allDataArticle.nodes.forEach(node => {
    const slug = `/${node.category.slug}/${node.slug}`;
    actions.createRedirect({
      fromPath: node.legacy_slug,
      toPath: slug,
      isPermanent: true,
    });
    actions.createPage({
      path: slug,
      component: require.resolve(`./src/templates/Post.react.js`),
      context: { dataId: node.dataId },
    });
  });
};
