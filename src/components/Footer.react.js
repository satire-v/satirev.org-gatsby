// @flow
import * as React from "react";
import { css } from "@emotion/core";
import theme from "@styles/theme";

const footerRoot = css`
  height: ${theme.spacing(10)}px;
  background: ${theme.palette.primary.main};
  margin-top: ${theme.spacing(3)}px;
`;
function Footer(): React.Node {
  return <footer css={footerRoot} />;
}

export default Footer;
