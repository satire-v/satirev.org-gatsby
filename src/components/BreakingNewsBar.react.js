// @flow
import * as React from "react";
import { Typography } from "@material-ui/core";
import { css } from "@emotion/core";
import { useTheme } from "@material-ui/core/styles";
import FlexLayout from "@common/FlexLayout";

function BreakingNewsBar(): React.Node {
  const theme = useTheme();

  const breakingBarRootStyle = css`
    border-bottom: 1px solid ${theme.palette.grey["300"]};
    border-top: 1px solid ${theme.palette.grey["300"]};
    margin: 0px 0px 24px;
    padding: 12px min(10%, 80px);
  `;

  const breakingTitleStyle = css`
    padding-right: 1em;
    border-right: 1px solid ${theme.palette.grey["400"]};
  `;

  const breakingItemStyle = css`
    padding-left: 1em;
  `;

  return (
    <FlexLayout
      direction="horizontal"
      css={breakingBarRootStyle}
      justify="start"
      align="center"
    >
      <Typography css={breakingTitleStyle} variant="h6" grow={0}>
        Breaking
      </Typography>
      <Typography css={breakingItemStyle} color="textSecondary" variant="h6">
        Placeholder
      </Typography>
    </FlexLayout>
  );
}

export default BreakingNewsBar;
