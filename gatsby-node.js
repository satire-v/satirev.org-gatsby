exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;
  const typeDefs = `
    type DataArticle implements Node {
      title: String!
      slug: String!
      category: DataCategory!
      body: String!
     
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

// eslint-disable-next-line func-names
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

exports.createResolvers = ({ createResolvers }) => {
  createResolvers({
    DataArticle: {
      created_on: {
        type: `Date!`,
        resolve: async (source, args, context, info) => {
          const dateString = `${source.created_on.replace(" ", "T")}Z`;
          return info.originalResolver(
            { ...source, created_on: dateString },
            args,
            context,
            info
          );
        },
      },
      modified_on: {
        type: `Date!`,
        resolve: async (source, args, context, info) => {
          const dateString = `${source.modified_on.replace(" ", "T")}Z`;
          return info.originalResolver(
            { ...source, modified_on: dateString },
            args,
            context,
            info
          );
        },
      },
    },
  });
};
