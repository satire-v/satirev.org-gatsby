import * as React from "react";
import { css } from "@emotion/core";

const root = css`
  height: calc(10 * var(--spacing));
  margin-top: calc(3 * var(--spacing));
  background: var(--crimson);
`;

function Footer(): JSX.Element {
  return (
      <footer css={root}>
        <div class="row">
            <div class="button">hello</div>
        </div>
      </footer>
  )
}

export default Footer;
