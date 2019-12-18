/* @flow */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: MostRecentInEachCategory
// ====================================================

export type MostRecentInEachCategory_allDataArticle_group_edges_node_featured_image_data = {
  __typename: "DataFileData",
  full_url: string,
};

export type MostRecentInEachCategory_allDataArticle_group_edges_node_featured_image_localFile_childImageSharp_fluid = {
  __typename: "ImageSharpFluid",
  base64: ?string,
  aspectRatio: ?number,
  src: ?string,
  srcSet: ?string,
  srcWebp: ?string,
  srcSetWebp: ?string,
  sizes: ?string,
};

export type MostRecentInEachCategory_allDataArticle_group_edges_node_featured_image_localFile_childImageSharp = {
  __typename: "ImageSharp",
  fluid: ?MostRecentInEachCategory_allDataArticle_group_edges_node_featured_image_localFile_childImageSharp_fluid,
};

export type MostRecentInEachCategory_allDataArticle_group_edges_node_featured_image_localFile = {
  __typename: "File",
  childImageSharp: ?MostRecentInEachCategory_allDataArticle_group_edges_node_featured_image_localFile_childImageSharp,
};

export type MostRecentInEachCategory_allDataArticle_group_edges_node_featured_image = {
  __typename: "DataFile",
  data: ?MostRecentInEachCategory_allDataArticle_group_edges_node_featured_image_data,
  localFile: ?MostRecentInEachCategory_allDataArticle_group_edges_node_featured_image_localFile,
};

export type MostRecentInEachCategory_allDataArticle_group_edges_node_category = {
  __typename: "DataCategory",
  name: string,
  slug: string,
};

export type MostRecentInEachCategory_allDataArticle_group_edges_node = {
  __typename: "DataArticle",
  id: string,
  slug: string,
  title: string,
  excerpt: ?string,
  body: string,
  featured_image: ?MostRecentInEachCategory_allDataArticle_group_edges_node_featured_image,
  category: MostRecentInEachCategory_allDataArticle_group_edges_node_category,
};

export type MostRecentInEachCategory_allDataArticle_group_edges = {
  __typename: "DataArticleEdge",
  node: MostRecentInEachCategory_allDataArticle_group_edges_node,
};

export type MostRecentInEachCategory_allDataArticle_group = {
  __typename: "DataArticleGroupConnection",
  edges: Array<MostRecentInEachCategory_allDataArticle_group_edges>,
  fieldValue: ?string,
};

export type MostRecentInEachCategory_allDataArticle = {
  __typename: "DataArticleConnection",
  group: Array<MostRecentInEachCategory_allDataArticle_group>,
};

export type MostRecentInEachCategory = {
  allDataArticle: MostRecentInEachCategory_allDataArticle
};/* @flow */
/* eslint-disable */
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

//==============================================================
// END Enums and Input Objects
//==============================================================