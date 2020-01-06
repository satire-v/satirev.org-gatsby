/* @flow */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: LatestArticlesLinks
// ====================================================

export type LatestArticlesLinks_allDataArticle_nodes_category = {
  __typename: "DataCategory",
  name: string,
  slug: string,
};

export type LatestArticlesLinks_allDataArticle_nodes_featured_image_data = {
  __typename: "DataFileData",
  full_url: string,
};

export type LatestArticlesLinks_allDataArticle_nodes_featured_image_localFile_childImageSharp_fluid = {
  __typename: "ImageSharpFluid",
  base64: ?string,
  aspectRatio: ?number,
  src: ?string,
  srcSet: ?string,
  srcWebp: ?string,
  srcSetWebp: ?string,
  sizes: ?string,
};

export type LatestArticlesLinks_allDataArticle_nodes_featured_image_localFile_childImageSharp = {
  __typename: "ImageSharp",
  fluid: ?LatestArticlesLinks_allDataArticle_nodes_featured_image_localFile_childImageSharp_fluid,
};

export type LatestArticlesLinks_allDataArticle_nodes_featured_image_localFile = {
  __typename: "File",
  childImageSharp: ?LatestArticlesLinks_allDataArticle_nodes_featured_image_localFile_childImageSharp,
};

export type LatestArticlesLinks_allDataArticle_nodes_featured_image = {
  __typename: "DataFile",
  title: ?string,
  data: ?LatestArticlesLinks_allDataArticle_nodes_featured_image_data,
  localFile: ?LatestArticlesLinks_allDataArticle_nodes_featured_image_localFile,
};

export type LatestArticlesLinks_allDataArticle_nodes = {
  __typename: "DataArticle",
  id: string,
  slug: string,
  title: string,
  category: LatestArticlesLinks_allDataArticle_nodes_category,
  excerpt: ?string,
  body: string,
  published: any,
  tags: ?Array<?string>,
  featured_image: ?LatestArticlesLinks_allDataArticle_nodes_featured_image,
};

export type LatestArticlesLinks_allDataArticle = {
  __typename: "DataArticleConnection",
  nodes: Array<LatestArticlesLinks_allDataArticle_nodes>,
};

export type LatestArticlesLinks = {
  allDataArticle: LatestArticlesLinks_allDataArticle
};/* @flow */
/* eslint-disable */
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

//==============================================================
// END Enums and Input Objects
//==============================================================