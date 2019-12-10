// @flow
import * as React from "react";
import { colors, fonts, margins } from "@styles/global";
import { css } from "@emotion/core";
import FlexLayout from "@common/FlexLayout";

function BreakingNewsBar(): React.Node {
  const breakingBarRootStyle = css`
    border-bottom: 1px solid lightgray;
    margin: 0px -${margins.pageBody}px 24px;
    padding: 12px ${margins.pageBody}px;
    font-weight: 700;
    font-family: ${fonts.sansSerif};
    font-size: 1.1em;
  `;

  const breakingTitleStyle = css`
    color: black;
    text-transform: uppercase;
    padding-right: 1em;
    border-right: 1px solid gray;
  `;

  const breakingItemStyle = css`
    color: ${colors.gray};
    padding-left: 1em;
  `;

  return (
    <FlexLayout
      direction="horizontal"
      css={breakingBarRootStyle}
      justify="start"
      align="center"
    >
      <div css={breakingTitleStyle} grow={0}>
        Breaking
      </div>
      <div css={breakingItemStyle}>Placeholder</div>
    </FlexLayout>
  );
}

export default BreakingNewsBar;
