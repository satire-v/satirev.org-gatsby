/* @flow */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: HeaderQuery
// ====================================================

export type HeaderQuery_logo_childImageSharp_fixed = {
  __typename: "ImageSharpFixed",
  base64: ?string,
  width: number,
  height: number,
  src: string,
  srcSet: string,
  srcWebp: ?string,
  srcSetWebp: ?string,
};

export type HeaderQuery_logo_childImageSharp = {
  __typename: "ImageSharp",
  fixed: ?HeaderQuery_logo_childImageSharp_fixed,
};

export type HeaderQuery_logo = {
  __typename: "File",
  childImageSharp: ?HeaderQuery_logo_childImageSharp,
};

export type HeaderQuery = {
  logo: ?HeaderQuery_logo
};/* @flow */
/* eslint-disable */
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

//==============================================================
// END Enums and Input Objects
//==============================================================