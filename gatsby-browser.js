const React = require("react");
require("typeface-crimson-text");
require("typeface-lato");
require("typeface-merriweather");
require("#assets/fonts/cardinal/index.css");
// The .default has something to do with export nonsense, idk
const Page = require("./src/layouts/PageGlobal.react").default;

export const wrapPageElement = ({ element }) => <Page>{element}</Page>;
