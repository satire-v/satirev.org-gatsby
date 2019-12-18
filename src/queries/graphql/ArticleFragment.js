/* @flow */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: ArticleFragment
// ====================================================

export type ArticleFragment_featured_image_data = {
  __typename: "DataFileData",
  full_url: string,
};

export type ArticleFragment_featured_image_localFile_childImageSharp_fluid = {
  __typename: "ImageSharpFluid",
  base64: ?string,
  aspectRatio: ?number,
  src: ?string,
  srcSet: ?string,
  srcWebp: ?string,
  srcSetWebp: ?string,
  sizes: ?string,
};

export type ArticleFragment_featured_image_localFile_childImageSharp = {
  __typename: "ImageSharp",
  fluid: ?ArticleFragment_featured_image_localFile_childImageSharp_fluid,
};

export type ArticleFragment_featured_image_localFile = {
  __typename: "File",
  childImageSharp: ?ArticleFragment_featured_image_localFile_childImageSharp,
};

export type ArticleFragment_featured_image = {
  __typename: "DataFile",
  data: ?ArticleFragment_featured_image_data,
  localFile: ?ArticleFragment_featured_image_localFile,
};

export type ArticleFragment_category = {
  __typename: "DataCategory",
  name: string,
  slug: string,
};

export type ArticleFragment = {
  __typename: "DataArticle",
  id: string,
  slug: string,
  title: string,
  excerpt: ?string,
  body: string,
  featured_image: ?ArticleFragment_featured_image,
  category: ArticleFragment_category,
  tags: ?Array<?string>,
  modified_on: any,
  featured_image_caption: ?string,
  legacy_slug: ?string,
};/* @flow */
/* eslint-disable */
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

//==============================================================
// END Enums and Input Objects
//==============================================================