/* @flow */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: ArticleFullFragment
// ====================================================

export type ArticleFullFragment_category = {
  __typename: "DataCategory",
  name: string,
  slug: string,
};

export type ArticleFullFragment_featured_image_data = {
  __typename: "DataFileData",
  full_url: string,
};

export type ArticleFullFragment_featured_image_localFile_childImageSharp_fluid = {
  __typename: "ImageSharpFluid",
  base64: ?string,
  aspectRatio: ?number,
  src: ?string,
  srcSet: ?string,
  srcWebp: ?string,
  srcSetWebp: ?string,
  sizes: ?string,
};

export type ArticleFullFragment_featured_image_localFile_childImageSharp = {
  __typename: "ImageSharp",
  fluid: ?ArticleFullFragment_featured_image_localFile_childImageSharp_fluid,
};

export type ArticleFullFragment_featured_image_localFile = {
  __typename: "File",
  childImageSharp: ?ArticleFullFragment_featured_image_localFile_childImageSharp,
};

export type ArticleFullFragment_featured_image = {
  __typename: "DataFile",
  title: ?string,
  data: ?ArticleFullFragment_featured_image_data,
  localFile: ?ArticleFullFragment_featured_image_localFile,
};

export type ArticleFullFragment = {
  __typename: "DataArticle",
  id: string,
  slug: string,
  title: string,
  category: ArticleFullFragment_category,
  excerpt: ?string,
  body: string,
  published: any,
  tags: ?Array<?string>,
  featured_image: ?ArticleFullFragment_featured_image,
  modified_on: any,
  year: any,
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