import React from "react";

// The .default has something to do with export nonsense, idk
import Page from "./src/layouts/PageGlobal.react";

// eslint-disable-next-line import/prefer-default-export
export const wrapPageElement = ({ element }: any) => <Page>{element}</Page>;
