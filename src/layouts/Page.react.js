// @flow

import "@assets/fonts/cardinal/stylesheet.css";
import * as React from "react";
import { Global, css } from "@emotion/core";
import { ThemeProvider } from "emotion-theming";
import { global, margins } from "@styles/global";
import Header from "@components/header";

type Props = {
  children?: React.Node,
};

const bodyMargins = css`
  margin: 0px ${margins.pageBody}px;
`;

function Page(props: Props) {
  return (
    <ThemeProvider theme={{ testing: false }}>
      <Global styles={global} />
      <Header />
      <div css={bodyMargins}>{props.children}</div>
    </ThemeProvider>
  );
}
export default Page;
