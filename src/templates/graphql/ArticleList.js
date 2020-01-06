/* @flow */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ArticleList
// ====================================================

export type ArticleList_allDataArticle_nodes_category = {
  __typename: "DataCategory",
  name: string,
  slug: string,
};

export type ArticleList_allDataArticle_nodes_featured_image_data = {
  __typename: "DataFileData",
  full_url: string,
};

export type ArticleList_allDataArticle_nodes_featured_image_localFile_childImageSharp_fluid = {
  __typename: "ImageSharpFluid",
  base64: ?string,
  aspectRatio: ?number,
  src: ?string,
  srcSet: ?string,
  srcWebp: ?string,
  srcSetWebp: ?string,
  sizes: ?string,
};

export type ArticleList_allDataArticle_nodes_featured_image_localFile_childImageSharp = {
  __typename: "ImageSharp",
  fluid: ?ArticleList_allDataArticle_nodes_featured_image_localFile_childImageSharp_fluid,
};

export type ArticleList_allDataArticle_nodes_featured_image_localFile = {
  __typename: "File",
  childImageSharp: ?ArticleList_allDataArticle_nodes_featured_image_localFile_childImageSharp,
};

export type ArticleList_allDataArticle_nodes_featured_image = {
  __typename: "DataFile",
  title: ?string,
  data: ?ArticleList_allDataArticle_nodes_featured_image_data,
  localFile: ?ArticleList_allDataArticle_nodes_featured_image_localFile,
};

export type ArticleList_allDataArticle_nodes = {
  __typename: "DataArticle",
  id: string,
  slug: string,
  title: string,
  category: ArticleList_allDataArticle_nodes_category,
  excerpt: ?string,
  body: string,
  published: any,
  tags: ?Array<?string>,
  featured_image: ?ArticleList_allDataArticle_nodes_featured_image,
};

export type ArticleList_allDataArticle = {
  __typename: "DataArticleConnection",
  nodes: Array<ArticleList_allDataArticle_nodes>,
};

export type ArticleList = {
  allDataArticle: ArticleList_allDataArticle
};

export type ArticleListVariables = {
  limit: number,
  skip: number,
  category: string,
};/* @flow */
/* eslint-disable */
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

//==============================================================
// END Enums and Input Objects
//==============================================================