// @flow
const colors = {
  crimson: "#A51C30",
};
const fonts = {
  serif: "Georgia, serif",
  sansSerif: "Lucida Sans Unicode, sans-serif",
};
const global: string = `html, body {
    font-family: ${fonts.serif};
    font-weight: normal;
    font-stretch: normal;
    font-size: 1em;
  }`;

const test: Object = {
  body: { fontSize: 40 },
};

module.exports = { colors, fonts, global, test };
