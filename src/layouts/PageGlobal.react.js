// @flow
import * as React from "react";
import { CssBaseline } from "@material-ui/core";
import { Global } from "@emotion/core";
import { ThemeProvider } from "@material-ui/core/styles";
import Footer from "#components/Footer";
import Header from "#components/Header";
import theme, { global } from "#styles/theme";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { Helmet } from "react-helmet";

import fonts from "#assets/fonts";

type Props = {
  children?: React.Node,
};

fonts.cssFiles.forEach(e => {
  //$FlowFixMe
  require(`#assets/fonts/${e}`);
});

function Page(props: Props) {
  const responsiveTheme = {
    type: useMediaQuery("(prefers-color-scheme: dark)"),
    ...theme,
  };

  return (
    <ThemeProvider theme={responsiveTheme}>
      <CssBaseline>
        <Global styles={global} />
        <Helmet>
          <title>Satire V</title>
          <link rel="preconnect" href="https://platform.twitter.com" />
          <link rel="preconnect" href="https://pbs.twimg.com" />
          {fonts.fontFiles.map((file, i) => {
            return (
              <link
                key={i}
                rel="preload"
                as="font"
                type={`font/${file.split(".").pop()}`}
                crossOrigin="anonymous"
                href={`${file}`}
              />
            );
          })}
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#a51c30" />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="theme-color" content="#ffffff" />
        </Helmet>
        <Header />
        {props.children}
        <Footer />
      </CssBaseline>
    </ThemeProvider>
  );
}
export default Page;
