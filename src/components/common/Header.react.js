// @flow
import * as React from "react";
import { colors, fonts } from "@styles/global";
import { css } from "@emotion/core";
import { css as cssClass } from "emotion";
import FlexLayout from "@common/FlexLayout";
import FlexLayoutItem from "@common/FlexLayoutItem";
import logo from "@img/logo.png";

type Props = {||};

const headerStyle = css`
  background: ${colors.crimson};
  width: 100%;
  height: 130px;
  overflow: hidden;
  color: white;
`;

const logoStyle = css`
  height: 100%;
  width: auto;
  padding: 16px;
`;

const titleStyle = css`
  font-family: ${fonts.title};
  font-size: 3.5em;
  &:hover {
    content: "Veritas";
  }
`;

const subtitleStyle = css`
  text-indent: 1em;
  margin-top: -10px;
`;

function Header(props: Props): React.Node {
  return (
    <header css={headerStyle}>
      <FlexLayout style={{ height: "100%" }}>
        <FlexLayoutItem style={{ height: "100%" }}>
          <img alt="Satire V logo" src={logo} css={logoStyle} />
        </FlexLayoutItem>
        <FlexLayoutItem>
          <div css={titleStyle}>Satire V</div>
          <div css={subtitleStyle}>Holding a Mirror Up to Truth</div>
        </FlexLayoutItem>
      </FlexLayout>
    </header>
  );
}

export default Header;
