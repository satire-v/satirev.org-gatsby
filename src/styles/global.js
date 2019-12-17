// @flow
import { css } from "@emotion/core";

const colors = {
  crimson: "#A51C30",
  gray: "gray",
};

const sansSerif = "Lato Light, Lucida Sans Unicode, sans-serif";

const margins = {
  pageContent: "80px",
  layoutColumns: "16px",
};

const text = {
  fonts: {
    serif: "Georgia, serif",
    sansSerif,
  },
  meta: {
    title: css`
      font-family: Cardinal, Georgia, serif;
    `,
    headers: css`
      text-transform: uppercase;
      font-weight: 300;
      font-family: ${sansSerif};
    `,
  },
  link: css`
    color: black;
    transition: all 0.1s;
    cursor: pointer;
    &:hover,
    &:active {
      color: ${colors.crimson};
    }
  `,
};

const global = css`
  @import url("https://fonts.googleapis.com/css?family=Lato&display=swap");
  body {
    font-family: ${text.fonts.serif};
    font-weight: normal;
    font-stretch: normal;
    font-size: 14px;
    line-height: 1.3em;
    &,
    & * {
      margin: 0;
      padding: 0;
    }
    img {
      object-fit: contain;
    }
    & a {
      color: inherit;
      text-decoration: none;
    }
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      line-height: 0.95em;
      font-weight: normal;
      margin: 0;
      margin-block-start: 0;
      margin-block-end: 0;
    }
    h1 {
      font-size: 28px;
    }
    h2 {
      font-size: 24px;
    }
    h3 {
      font-size: 20px;
    }
    h4 {
      font-size: 18px;
    }
    h5 {
      font-size: 16px;
    }
    h6 {
      font-size: 14px;
    }
  }
`;

export { colors, text, global, margins };
