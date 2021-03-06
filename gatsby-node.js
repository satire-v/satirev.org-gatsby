/* eslint-disable @typescript-eslint/camelcase */
const { google } = require("googleapis");

require("dotenv").config();

const key = process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n");

const createSchemaCustomization = async ({ actions, schema }) => {
  const scopes = "https://www.googleapis.com/auth/analytics.readonly";
  const jwt = new google.auth.JWT(
    process.env.GOOGLE_CLIENT_EMAIL,
    null,
    key,
    scopes
  );
  const viewId = 69975916;
  await jwt.authorize();
  const result = await google.analytics("v3").data.ga.get({
    auth: jwt,
    ids: `ga:${viewId}`,
    "start-date": "7daysAgo",
    "end-date": "today",
    dimensions: "ga:pagePath",
    metrics: "ga:pageviews",
    sort: "-ga:pageviews",
  });
  const colHeaders = result.data.columnHeaders.map(obj => obj.name);
  const pagePathIndex = colHeaders.indexOf("ga:pagePath");
  const pageViewsIndex = colHeaders.indexOf("ga:pageviews");
  const pageMap = {};
  if (result.data.rows) {
    result.data.rows.forEach(row => {
      pageMap[row[pagePathIndex]] = row[pageViewsIndex];
    });
  }
  const { createTypes } = actions;
  const typeDefs = [
    `type DataFileData {
        full_url: String!
    }
    type DataCategory implements Node @infer {
      slug: String!
      name: String!
    }`,
    schema.buildObjectType({
      name: "DataArticle",
      fields: {
        title: "String!",
        slug: "String!",
        category: {
          type: "DataCategory!",
          extensions: {
            link: { from: "category___NODE" },
          },
        },
        body: "String!",
        page_views_past_week: {
          type: "Int",
          resolve: source => {
            const pageViews =
              parseInt(
                pageMap[
                  // eslint-disable-next-line no-underscore-dangle
                  `/${source.__gatsby_resolved.category.slug}/${source.slug}`
                ],
                10
              ) || 0;
            const legacyViews =
              parseInt(pageMap[`/${source.legacy_slug}`], 10) || 0;
            return pageViews + legacyViews;
          },
        },
      },
      interfaces: ["Node"],
    }),
  ];

  createTypes(typeDefs);
};

module.exports.createSchemaCustomization = createSchemaCustomization;

const createPages = async ({ actions, graphql }) => {
  const { data } = await graphql(`
    query {
      allDataArticle {
        nodes {
          id
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
      component: require.resolve(`./src/templates/Post.react.tsx`),
      context: { id: node.id },
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
        component: require.resolve("./src/templates/PostList.react.tsx"),
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

module.exports.createPages = createPages;

const createResolversFn = async ({ createResolvers }) => {
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

module.exports.createResolvers = createResolversFn;
