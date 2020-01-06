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
      byCategory: allDataArticle {
        group(field: category___slug, limit: 1) {
          fieldValue
          totalCount
          field
          nodes {
            category {
              name
            }
          }
        }
      }
    }
  `);
  const posts = data.allDataArticle.nodes;
  posts.forEach(node => {
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

  const categories = data.byCategory.group;
  const postsPerPage = 10;

  categories.forEach(category => {
    const numPages = Math.ceil(category.totalCount / postsPerPage);
    Array.from({ length: numPages }).forEach((_, i) => {
      actions.createPage({
        path:
          i === 0
            ? `/${category.fieldValue}`
            : `/${category.fieldValue}/${i + 1}`,
        component: require.resolve("./src/templates/PostList.react.js"),
        context: {
          category: category.nodes[0].category.name,
          categorySlug: category.fieldValue,
          limit: postsPerPage,
          skip: i * postsPerPage,
          numPages,
          currentPage: i + 1,
        },
      });
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
