// @flow

import "@assets/fonts/cardinal/stylesheet.css";
import * as React from "react";
import { Global } from "@emotion/core";
import { global } from "@styles/global";
import Header from "@components/header";

type Props = {
  children?: React.Node,
};

function Page(props: Props) {
  return (
    <>
      <Global styles={global} />
      <Header />
      {props.children}
    </>
  );
}
export default Page;
