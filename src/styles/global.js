// @flow
import { css } from "@emotion/core";
import type { ImageSize } from "@utils/image";

const colors = {
  crimson: "#A51C30",
  gray: "gray",
};

const sansSerif = "Lato Light, Lucida Sans Unicode, sans-serif";

const margins = {
  pageBody: 40,
};

const fonts = {
  serif: "Georgia, serif",
  sansSerif,
  siteTitle: "Cardinal, Georgia, serif",
  preview(size: ImageSize) {
    switch (size) {
      case "large":
        return {
          titleSize: 24,
          textSize: 14,
        };
      case "medium":
      case "small":
      default:
        return {
          titleSize: 16,
        };
    }
  },
  titleClass: "postTitle",
  headerStyle: css`
    font-family: ${sansSerif};
    text-transform: uppercase;
    font-weight: 300;
  `,
};

const global = css`
  @import url("https://fonts.googleapis.com/css?family=Lato&display=swap");
  body {
    font-family: ${fonts.serif};
    font-weight: normal;
    font-stretch: normal;
    font-size: 16px;
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
    & .${fonts.titleClass} {
      color: black;
      transition: all 0.3s;
      cursor: pointer;
      &:hover {
        color: ${colors.crimson};
      }
    }
  }
`;

export { colors, fonts, global, margins };
