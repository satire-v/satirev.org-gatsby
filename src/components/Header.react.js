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

const titleWrapper = css`
  padding: 10px 10px 12px;
`;

const Header = (): React.Node => (
  <header css={headerStyle}>
    <div css={titleWrapper}>
      <MirrorTitle />
    </div>

    <Navbar />
  </header>
);

export default Header;
