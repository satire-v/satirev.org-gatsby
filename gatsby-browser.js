const React = require("react");

const Page = require("./src/layouts/Page.react").default;

// eslint-disable-next-line import/prefer-default-export
export const wrapPageElement = ({ element }) => <Page>{element}</Page>;
