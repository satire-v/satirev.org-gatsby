// @flow
import * as React from "react";
import { colors } from "@styles/global";
import { css } from "@emotion/core";
import MirrorTitle from "@components/MirrorTitle";
import Navbar from "@components/Navbar";

const headerStyle = css`
  background: ${colors.crimson};
  width: 100%;
  color: white;
`;

const Header = (): React.Node => (
  <header css={headerStyle}>
    <MirrorTitle />
    <Navbar />
  </header>
);

export default Header;
