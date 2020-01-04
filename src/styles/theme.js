// @flow
import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";
import { css } from "@emotion/core";
import { red, yellow } from "@material-ui/core/colors";

const colors = {
  crimson: "#A51C30",
  goldLeaf: "#d09d2f",
};

const titleFont = "Cardinal, Georgia, serif";

const link = css`
  color: black;
  transition: all 0.1s;
  cursor: pointer;
  &:hover,
  &:active {
    color: ${colors.crimson};
  }
`;

const global = css`
  body {
    img {
      object-fit: contain;
    }
    & a {
      color: inherit;
      text-decoration: none;
    }
  }
`;

export { global, titleFont };

const sansSerif = [
  "Lato",
  "Lucida Sans Unicode",
  "sans-serif",
  '"Apple Color Emoji"',
  '"Segoe UI Emoji"',
  '"Segoe UI Symbol"',
].join(",");
const serif = [
  "Merriweather",
  "Georgia",
  "serif",
  '"Apple Color Emoji"',
  '"Segoe UI Emoji"',
  '"Segoe UI Symbol"',
].join(",");

const theme = createMuiTheme({
  palette: {
    primary: { main: colors.crimson },
    secondary: { main: colors.goldLeaf },
    error: { main: red.A700 },
    warning: { main: yellow["500"] },
  },
  typography: {
    fontFamily: sansSerif,
    h2: {
      // Article Card Title
      fontFamily: serif,
      fontSize: "1.7rem",
      lineHeight: 0.95,
      letterSpacing: "-0.00833em",
      fontWeight: 400,
    },
    h3: {
      // Article Card Title
      fontFamily: serif,
      fontSize: "1.3rem",
      lineHeight: 1,
      letterSpacing: "-0.00833em",
      fontWeight: 400,
    },
    h4: {
      // Article Card Title
      fontFamily: serif,
      fontSize: "1.1rem",
      lineHeight: 1.2,
      letterSpacing: "-0.00833em",
      fontWeight: 400,
    },
    h5: {
      // Default for card headers
      fontSize: "1.4rem",
    },
    h6: {
      // Breaking news header
      fontSize: "1rem",
      fontWeight: 700,
      textTransform: "uppercase",
    },
    body1: {
      fontFamily: serif,
    },
    body2: {
      fontFamily: serif,
      fontSize: "0.8rem",
      lineHeight: 1.3,
    },
  },
  shape: {
    borderRadius: 2,
  },
});

export default responsiveFontSizes(theme, {
  factor: 2,
  variants: ["h1", "h2", "h3"],
});
