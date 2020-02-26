// @flow

const React = require("react");

// The .default has something to do with export nonsense, idk
const Page = require("./src/layouts/PageGlobal.react").default;

// eslint-disable-next-line import/prefer-default-export
export const wrapPageElement = ({ element }: any) => <Page>{element}</Page>;
