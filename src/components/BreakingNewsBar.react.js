// @flow
import * as React from "react";
import { colors, fonts, margins } from "@styles/global";
import { css } from "@emotion/core";
import FlexLayout from "@common/FlexLayout";
import FlexLayoutItem from "@common/FlexLayoutItem";

const breakingBarStyle = css`
  border-bottom: 1px solid lightgray;
  border-top: 1px solid lightgray;
  margin: 0px 0px 12px;
  padding: 12px 0px;
  font-weight: 700;
  font-family: ${fonts.sansSerif};
`;

const breakingTitleStyle = css`
  color: black;
  text-transform: uppercase;
  padding: 0px 16px 0px 0;
  font-size: 16px;
`;

const breakingItemStyle = css`
  color: ${colors.gray};
  font-size: 16px;
  padding-left: 16px;
  border-left: 1px solid gray;
`;

function BreakingNewsBar(): React.Node {
  return (
    <FlexLayout
      direction="horizontal"
      css={breakingBarStyle}
      justify="start"
      align="center"
    >
      <FlexLayoutItem css={breakingTitleStyle} grow={0}>
        Breaking
      </FlexLayoutItem>
      <FlexLayoutItem css={breakingItemStyle}>Placeholder</FlexLayoutItem>
    </FlexLayout>
  );
}

export default BreakingNewsBar;
