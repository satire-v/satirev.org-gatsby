/* @flow */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: MostRecentArticle
// ====================================================

export type MostRecentArticle_allDataArticle_nodes_featured_image_data = {
  __typename: "DataFileData",
  full_url: ?string,
};

export type MostRecentArticle_allDataArticle_nodes_featured_image_localFile_childImageSharp_fluid = {
  __typename: "ImageSharpFluid",
  base64: ?string,
  aspectRatio: ?number,
  src: ?string,
  srcSet: ?string,
  srcWebp: ?string,
  srcSetWebp: ?string,
  sizes: ?string,
};

export type MostRecentArticle_allDataArticle_nodes_featured_image_localFile_childImageSharp = {
  __typename: "ImageSharp",
  fluid: ?MostRecentArticle_allDataArticle_nodes_featured_image_localFile_childImageSharp_fluid,
};

export type MostRecentArticle_allDataArticle_nodes_featured_image_localFile = {
  __typename: "File",
  childImageSharp: ?MostRecentArticle_allDataArticle_nodes_featured_image_localFile_childImageSharp,
};

export type MostRecentArticle_allDataArticle_nodes_featured_image = {
  __typename: "DataFile",
  data: ?MostRecentArticle_allDataArticle_nodes_featured_image_data,
  localFile: ?MostRecentArticle_allDataArticle_nodes_featured_image_localFile,
};

export type MostRecentArticle_allDataArticle_nodes_category = {
  __typename: "DataCategory",
  name: ?string,
  slug: ?string,
};

export type MostRecentArticle_allDataArticle_nodes = {
  __typename: "DataArticle",
  id: string,
  slug: ?string,
  title: ?string,
  excerpt: ?string,
  featured_image: ?MostRecentArticle_allDataArticle_nodes_featured_image,
  category: ?MostRecentArticle_allDataArticle_nodes_category,
};

export type MostRecentArticle_allDataArticle = {
  __typename: "DataArticleConnection",
  nodes: Array<MostRecentArticle_allDataArticle_nodes>,
};

export type MostRecentArticle = {
  allDataArticle: MostRecentArticle_allDataArticle
};/* @flow */
/* eslint-disable */
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

//==============================================================
// END Enums and Input Objects
//==============================================================