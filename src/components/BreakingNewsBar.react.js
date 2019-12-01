// @flow
import * as React from "react";
import { colors, fonts } from "@styles/global";
import { css } from "@emotion/core";
import FlexLayout from "@common/FlexLayout";
import FlexLayoutItem from "@common/FlexLayoutItem";

const breakingBarStyle = css`
  border-bottom: 1px solid black;
  padding: 6px 0px;
  font-weight: 700;
  font-family: ${fonts.sansSerif};
`;

const breakingTitleStyle = css`
  color: black;
  text-transform: uppercase;
  padding: 0px 16px 0px 30px;
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
    <FlexLayout direction="horizontal" css={breakingBarStyle}>
      <FlexLayoutItem css={breakingTitleStyle}>Breaking News</FlexLayoutItem>
      <FlexLayoutItem css={breakingItemStyle}>Placeholder</FlexLayoutItem>
    </FlexLayout>
  );
}

export default BreakingNewsBar;
