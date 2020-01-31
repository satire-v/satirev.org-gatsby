const React = require("react");

const Page = require("./src/layouts/PageGlobal.react").default;
const fonts = [
  require.resolve("typeface-crimson-text"),
  require.resolve("typeface-lato"),
  require.resolve("typeface-merriweather"),
  require.resolve("#assets/fonts/cardinal/index.css"),
];

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents(
    fonts.map(href => {
      return (
        <link
          key={href}
          as="font"
          href={href}
          rel="preload"
          crossOrigin="anonymous"
        />
      );
    })
  );
};

export const wrapPageElement = ({ element }) => <Page>{element}</Page>;
