// @flow
import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";
import { red, yellow } from "@material-ui/core/colors";
import { css } from "@emotion/core";

import lato from "#styles/fontSheets/lato";
import crimsonText from "#styles/fontSheets/crimson-text";
import cardinal from "#styles/fontSheets/cardinal";

const colors = {
  crimson: "#A51C30",
  goldLeaf: "#d09d2f",
};

const titleFont = "Cardinal, Georgia, serif";
// import merriweather from "#styles/fontSheets/merriweather";

const global = css`
  ${cardinal}
  ${crimsonText}
  ${lato}
  ${"" /* ${merriweather} */}
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
  "Crimson Text",
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
  props: {
    MuiCard: {
      elevation: 2,
    },
    MuiButtonBase: {
      disableRipple: true,
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
    h1: {
      // Section Title
      fontSize: "4rem",
    },
    h2: {
      // Article Title
      fontFamily: serif,
      fontSize: "2rem",
    },
    h3: {
      // Featured Article Card Title
      fontFamily: serif,
      fontSize: "1.6rem",
      lineHeight: 0.95,
      // letterSpacing: "-0.00833em",
      fontWeight: 400,
    },
    h4: {
      // Article Card Title
      fontFamily: serif,
      fontSize: "1.1rem",
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
    button: {
      fontWeight: 400,
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
  variants: ["h5"],
});
