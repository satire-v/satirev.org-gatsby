// @flow
import { css } from "@emotion/core";

const colors = {
  crimson: "#A51C30",
};
const fonts = {
  serif: "Georgia, serif",
  sansSerif: "Lucida Sans Unicode, sans-serif",
  title: "Cardinal, Georgia, serif",
};

const global = css`
  body {
    font-family: ${fonts.serif};
    font-weight: normal;
    font-stretch: normal;
    font-size: 1em;
    &,
    & * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    img {
      object-fit: contain;
    }
    & a {
      color: inherit;
      text-decoration: none;
    }
  }
`;

const test: Object = {
  body: { fontSize: 40 },
};

export { colors, fonts, global, test };