/* @flow */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: ArticleCard
// ====================================================

export type ArticleCard_featured_image_data = {
  __typename: "DataFileData",
  full_url: ?string,
};

export type ArticleCard_featured_image_localFile_childImageSharp_fluid = {
  __typename: "ImageSharpFluid",
  base64: ?string,
  aspectRatio: ?number,
  src: ?string,
  srcSet: ?string,
  srcWebp: ?string,
  srcSetWebp: ?string,
  sizes: ?string,
};

export type ArticleCard_featured_image_localFile_childImageSharp = {
  __typename: "ImageSharp",
  fluid: ?ArticleCard_featured_image_localFile_childImageSharp_fluid,
};

export type ArticleCard_featured_image_localFile = {
  __typename: "File",
  childImageSharp: ?ArticleCard_featured_image_localFile_childImageSharp,
};

export type ArticleCard_featured_image = {
  __typename: "DataFile",
  data: ?ArticleCard_featured_image_data,
  localFile: ?ArticleCard_featured_image_localFile,
};

export type ArticleCard_category = {
  __typename: "DataCategory",
  name: ?string,
  slug: ?string,
};

export type ArticleCard = {
  __typename: "DataArticle",
  id: string,
  slug: ?string,
  title: ?string,
  excerpt: ?string,
  featured_image: ?ArticleCard_featured_image,
  category: ?ArticleCard_category,
};/* @flow */
/* eslint-disable */
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

//==============================================================
// END Enums and Input Objects
//==============================================================