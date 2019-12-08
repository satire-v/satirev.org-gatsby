// @flow
import * as React from "react";
import { colors } from "@styles/global";
import { css } from "@emotion/core";
import MirrorTitle from "@components/MirrorTitle";

const headerStyle = css`
  background: white;
  width: 100%;
  color: ${colors.crimson};
  border-bottom: 12px ${colors.crimson} solid;
`;

const titleWrapper = css`
  padding: 10px;
`;

const Header = (): React.Node => (
  <header css={headerStyle}>
    <div css={titleWrapper}>
      <MirrorTitle />
    </div>
  </header>
);

export default Header;
