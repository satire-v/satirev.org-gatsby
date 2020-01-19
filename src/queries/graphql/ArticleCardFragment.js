/* @flow */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: ArticleCardFragment
// ====================================================

export type ArticleCardFragment_category = {
  __typename: "DataCategory",
  name: string,
  slug: string,
};

export type ArticleCardFragment_featured_image_data = {
  __typename: "DataFileData",
  full_url: string,
};

export type ArticleCardFragment_featured_image_localFile_childImageSharp_fluid = {
  __typename: "ImageSharpFluid",
  base64: ?string,
  aspectRatio: number,
  src: string,
  srcSet: string,
  srcWebp: ?string,
  srcSetWebp: ?string,
  sizes: string,
};

export type ArticleCardFragment_featured_image_localFile_childImageSharp = {
  __typename: "ImageSharp",
  fluid: ?ArticleCardFragment_featured_image_localFile_childImageSharp_fluid,
};

export type ArticleCardFragment_featured_image_localFile = {
  __typename: "File",
  childImageSharp: ?ArticleCardFragment_featured_image_localFile_childImageSharp,
};

export type ArticleCardFragment_featured_image = {
  __typename: "DataFile",
  title: ?string,
  data: ?ArticleCardFragment_featured_image_data,
  localFile: ?ArticleCardFragment_featured_image_localFile,
};

export type ArticleCardFragment = {
  __typename: "DataArticle",
  id: string,
  slug: string,
  title: string,
  category: ArticleCardFragment_category,
  excerpt: ?string,
  body: string,
  published: any,
  tags: ?Array<?string>,
  featured_image: ?ArticleCardFragment_featured_image,
};/* @flow */
/* eslint-disable */
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

//==============================================================
// END Enums and Input Objects
//==============================================================