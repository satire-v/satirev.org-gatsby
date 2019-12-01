// @flow

import "@assets/fonts/cardinal/stylesheet.css";
import * as React from "react";
import { Global, css } from "@emotion/core";
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
    <>
      <Global styles={global} />
      <Header />
      <div css={bodyMargins}>{props.children}</div>
    </>
  );
}
export default Page;
