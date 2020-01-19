/* @flow */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: LatestArticlesByCategoryCards
// ====================================================

export type LatestArticlesByCategoryCards_allDataArticle_group_nodes_category = {
  __typename: "DataCategory",
  name: string,
  slug: string,
};

export type LatestArticlesByCategoryCards_allDataArticle_group_nodes_featured_image_data = {
  __typename: "DataFileData",
  full_url: string,
};

export type LatestArticlesByCategoryCards_allDataArticle_group_nodes_featured_image_localFile_childImageSharp_fluid = {
  __typename: "ImageSharpFluid",
  base64: ?string,
  aspectRatio: number,
  src: string,
  srcSet: string,
  srcWebp: ?string,
  srcSetWebp: ?string,
  sizes: string,
};

export type LatestArticlesByCategoryCards_allDataArticle_group_nodes_featured_image_localFile_childImageSharp = {
  __typename: "ImageSharp",
  fluid: ?LatestArticlesByCategoryCards_allDataArticle_group_nodes_featured_image_localFile_childImageSharp_fluid,
};

export type LatestArticlesByCategoryCards_allDataArticle_group_nodes_featured_image_localFile = {
  __typename: "File",
  childImageSharp: ?LatestArticlesByCategoryCards_allDataArticle_group_nodes_featured_image_localFile_childImageSharp,
};

export type LatestArticlesByCategoryCards_allDataArticle_group_nodes_featured_image = {
  __typename: "DataFile",
  title: ?string,
  data: ?LatestArticlesByCategoryCards_allDataArticle_group_nodes_featured_image_data,
  localFile: ?LatestArticlesByCategoryCards_allDataArticle_group_nodes_featured_image_localFile,
};

export type LatestArticlesByCategoryCards_allDataArticle_group_nodes = {
  __typename: "DataArticle",
  id: string,
  slug: string,
  title: string,
  category: LatestArticlesByCategoryCards_allDataArticle_group_nodes_category,
  excerpt: ?string,
  body: string,
  published: any,
  tags: ?Array<?string>,
  featured_image: ?LatestArticlesByCategoryCards_allDataArticle_group_nodes_featured_image,
};

export type LatestArticlesByCategoryCards_allDataArticle_group = {
  __typename: "DataArticleGroupConnection",
  fieldValue: ?string,
  nodes: Array<LatestArticlesByCategoryCards_allDataArticle_group_nodes>,
};

export type LatestArticlesByCategoryCards_allDataArticle = {
  __typename: "DataArticleConnection",
  group: Array<LatestArticlesByCategoryCards_allDataArticle_group>,
};

export type LatestArticlesByCategoryCards = {
  allDataArticle: LatestArticlesByCategoryCards_allDataArticle
};/* @flow */
/* eslint-disable */
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

//==============================================================
// END Enums and Input Objects
//==============================================================