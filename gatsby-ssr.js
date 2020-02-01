const React = require("react");
// The .default has something to do with export nonsense, idk
const Page = require("./src/layouts/PageGlobal.react").default;

export const wrapPageElement = ({ element }) => <Page>{element}</Page>;
