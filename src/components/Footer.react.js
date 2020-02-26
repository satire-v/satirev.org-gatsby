// @flow
import * as React from "react";
import { css } from "@emotion/core";

const root = css`
  height: calc(10 * var(--spacing));
  margin-top: calc(3 * var(--spacing));
  background: var(--crimson);
`;

function Footer(): React.Node {
  return <footer css={root} />;
}

export default Footer;
