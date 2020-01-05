// @flow
import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";
import { css } from "@emotion/core";
import { red, yellow } from "@material-ui/core/colors";

const colors = {
  crimson: "#A51C30",
  goldLeaf: "#d09d2f",
};

const titleFont = "Cardinal, Georgia, serif";

const global = css`
  body {
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
  // "Merriweather",
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
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 768,
      lg: 960,
      xl: 1400,
    },
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        html: {
          WebkitFontSmoothing: "subpixel-antialiased",
          MozOsxFontSmoothing: "none",
        },
      },
    },
  },
  typography: {
    fontFamily: sansSerif,
    h2: {
      // Article Title
      fontFamily: serif,
      fontSize: "2rem",
    },
    h3: {
      // Article Card Title
      fontFamily: serif,
      fontSize: "1.6rem",
      lineHeight: 0.95,
      // letterSpacing: "-0.00833em",
      fontWeight: 400,
    },
    h4: {
      // Article Card Title
      fontFamily: serif,
      fontSize: "1.05rem",
      lineHeight: 1.1,
      // letterSpacing: "-0.00833em",
      fontWeight: 400,
    },
    h5: {
      // Default for card headers
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
      fontSize: "0.9rem",
      lineHeight: 1.3,
    },
    subtitle1: {
      fontFamily: serif,
    },
    caption: {
      fontSize: "0.9rem",
      fontWeight: 700,
    },
  },
  shape: {
    borderRadius: 2,
  },
});

export default responsiveFontSizes(theme, {
  factor: 2,
  variants: ["h1", "h2", "h5"],
});
