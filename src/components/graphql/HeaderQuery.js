/* @flow */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: HeaderQuery
// ====================================================

export type HeaderQuery_file_childImageSharp_fixed = {
  __typename: "ImageSharpFixed",
  base64: ?string,
  width: number,
  height: number,
  src: string,
  srcSet: string,
  srcWebp: ?string,
  srcSetWebp: ?string,
};

export type HeaderQuery_file_childImageSharp = {
  __typename: "ImageSharp",
  fixed: ?HeaderQuery_file_childImageSharp_fixed,
};

export type HeaderQuery_file = {
  __typename: "File",
  childImageSharp: ?HeaderQuery_file_childImageSharp,
};

export type HeaderQuery = {
  file: ?HeaderQuery_file
};/* @flow */
/* eslint-disable */
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

//==============================================================
// END Enums and Input Objects
//==============================================================