/* @flow */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: LatestArticleCard
// ====================================================

export type LatestArticleCard_allDataArticle_nodes_category = {
  __typename: "DataCategory",
  name: string,
  slug: string,
};

export type LatestArticleCard_allDataArticle_nodes_featured_image_data = {
  __typename: "DataFileData",
  full_url: string,
};

export type LatestArticleCard_allDataArticle_nodes_featured_image_localFile_childImageSharp_fluid = {
  __typename: "ImageSharpFluid",
  base64: ?string,
  aspectRatio: ?number,
  src: ?string,
  srcSet: ?string,
  srcWebp: ?string,
  srcSetWebp: ?string,
  sizes: ?string,
};

export type LatestArticleCard_allDataArticle_nodes_featured_image_localFile_childImageSharp = {
  __typename: "ImageSharp",
  fluid: ?LatestArticleCard_allDataArticle_nodes_featured_image_localFile_childImageSharp_fluid,
};

export type LatestArticleCard_allDataArticle_nodes_featured_image_localFile = {
  __typename: "File",
  childImageSharp: ?LatestArticleCard_allDataArticle_nodes_featured_image_localFile_childImageSharp,
};

export type LatestArticleCard_allDataArticle_nodes_featured_image = {
  __typename: "DataFile",
  title: ?string,
  data: ?LatestArticleCard_allDataArticle_nodes_featured_image_data,
  localFile: ?LatestArticleCard_allDataArticle_nodes_featured_image_localFile,
};

export type LatestArticleCard_allDataArticle_nodes = {
  __typename: "DataArticle",
  id: string,
  slug: string,
  title: string,
  category: LatestArticleCard_allDataArticle_nodes_category,
  excerpt: ?string,
  body: string,
  published: any,
  tags: ?Array<?string>,
  featured_image: ?LatestArticleCard_allDataArticle_nodes_featured_image,
};

export type LatestArticleCard_allDataArticle = {
  __typename: "DataArticleConnection",
  nodes: Array<LatestArticleCard_allDataArticle_nodes>,
};

export type LatestArticleCard = {
  allDataArticle: LatestArticleCard_allDataArticle
};/* @flow */
/* eslint-disable */
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

//==============================================================
// END Enums and Input Objects
//==============================================================