/* @flow */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: FullArticle
// ====================================================

export type FullArticle_dataArticle_category = {
  __typename: "DataCategory",
  name: string,
  slug: string,
};

export type FullArticle_dataArticle_featured_image_data = {
  __typename: "DataFileData",
  full_url: string,
};

export type FullArticle_dataArticle_featured_image_localFile_childImageSharp_fluid = {
  __typename: "ImageSharpFluid",
  base64: ?string,
  aspectRatio: number,
  src: string,
  srcSet: string,
  srcWebp: ?string,
  srcSetWebp: ?string,
  sizes: string,
};

export type FullArticle_dataArticle_featured_image_localFile_childImageSharp = {
  __typename: "ImageSharp",
  fluid: ?FullArticle_dataArticle_featured_image_localFile_childImageSharp_fluid,
};

export type FullArticle_dataArticle_featured_image_localFile = {
  __typename: "File",
  childImageSharp: ?FullArticle_dataArticle_featured_image_localFile_childImageSharp,
};

export type FullArticle_dataArticle_featured_image = {
  __typename: "DataFile",
  title: ?string,
  data: ?FullArticle_dataArticle_featured_image_data,
  localFile: ?FullArticle_dataArticle_featured_image_localFile,
};

export type FullArticle_dataArticle = {
  __typename: "DataArticle",
  id: string,
  slug: string,
  title: string,
  category: FullArticle_dataArticle_category,
  excerpt: ?string,
  body: string,
  published: any,
  tags: ?Array<?string>,
  featured_image: ?FullArticle_dataArticle_featured_image,
  modified_on: any,
  year: any,
  featured_image_caption: ?string,
  legacy_slug: ?string,
};

export type FullArticle = {
  dataArticle: ?FullArticle_dataArticle
};

export type FullArticleVariables = {
  id?: ?string
};/* @flow */
/* eslint-disable */
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

//==============================================================
// END Enums and Input Objects
//==============================================================