// @flow

import * as React from "react";
import { Global, css } from "@emotion/core";
import { global } from "@styles/global";
import FlexLayout from "@utils/FlexLayout";

export default (): React.Node => (
  <div>
    <Global styles={css(global)} />
    <FlexLayout>
      <div>Hello world!</div>
    </FlexLayout>
  </div>
);
