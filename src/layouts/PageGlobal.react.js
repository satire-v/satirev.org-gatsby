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

type Props = {
  children?: React.Node,
};

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
          <link rel="preconnect" href="https://platform.twitter.com" />
          <link rel="preconnect" href="https://pbs.twimg.com" />
        </Helmet>
        <Header />
        {props.children}
        <Footer />
      </CssBaseline>
    </ThemeProvider>
  );
}
export default Page;
