// @flow

import * as React from "react";
import Header from "@components/Header";
import Page from "@layouts/Page";

export default (): React.Node => (
  <Page>
    <Header />
    <div>Hello world!</div>
    <div>And hello to you too</div>
  </Page>
);
