// @flow
import { css } from "@emotion/core";
import type { ImageSize } from "@utils/image";

const colors = {
  crimson: "#A51C30",
  gray: "gray",
};

const sansSerif = "Lato Light, Lucida Sans Unicode, sans-serif";

const margins = {
  pageBody: 60,
};

const fonts = {
  serif: "Georgia, serif",
  sansSerif,
  siteTitle: "Cardinal, Georgia, serif",
  preview(size: ImageSize) {
    switch (size) {
      case "large":
        return {
          title: {
            size: "1.7em",
            lineHeight: "0.95em",
          },
          text: {
            size: "0.9em",
            lineHeight: "1.3em",
          },
        };
      case "medium":
      case "small":
      default:
        return {
          title: {
            size: "1.2em",
            lineHeight: "0.95em",
          },
          text: {
            size: "0.9em",
            lineHeight: "1.3em",
          },
        };
    }
  },
  titleClass: "postTitle",
  headerStyle: css`
    font-family: ${sansSerif};
    text-transform: uppercase;
    font-weight: 300;
    font-size: 1.1em;
  `,
};

const global = css`
  @import url("https://fonts.googleapis.com/css?family=Lato&display=swap");
  body {
    font-family: ${fonts.serif};
    font-weight: normal;
    font-stretch: normal;
    font-size: 0.9em; /* .9 base, i.e. 14px */
    line-height: 1.3em;
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
      line-height: 0.95em;
      &:hover {
        color: ${colors.crimson};
      }
    }
  }
`;

export { colors, fonts, global, margins };
