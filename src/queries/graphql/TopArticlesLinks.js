/* @flow */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: TopArticlesLinks
// ====================================================

export type TopArticlesLinks_allDataArticle_nodes_category = {
  __typename: "DataCategory",
  name: string,
  slug: string,
};

export type TopArticlesLinks_allDataArticle_nodes = {
  __typename: "DataArticle",
  id: string,
  slug: string,
  title: string,
  category: TopArticlesLinks_allDataArticle_nodes_category,
};

export type TopArticlesLinks_allDataArticle = {
  __typename: "DataArticleConnection",
  nodes: Array<TopArticlesLinks_allDataArticle_nodes>,
};

export type TopArticlesLinks = {
  allDataArticle: TopArticlesLinks_allDataArticle
};/* @flow */
/* eslint-disable */
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

//==============================================================
// END Enums and Input Objects
//==============================================================