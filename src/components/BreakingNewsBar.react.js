// @flow
import * as React from "react";
import { useTheme } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import { css } from "@emotion/core";

function BreakingNewsBar(): React.Node {
  const theme = useTheme();

  const breakingBarRootStyle = css`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    border-bottom: 1px solid ${theme.palette.grey["300"]};
    border-top: 1px solid ${theme.palette.grey["300"]};
    margin: 0px 0px ${theme.spacing(3)}px;
    padding: 6px min(10%, 80px);
  `;

  const breakingTitleStyle = css`
    padding-right: 1em;
    border-right: 1px solid ${theme.palette.grey["400"]};
  `;

  const breakingItemStyle = css`
    padding-left: 1em;
  `;

  return (
    <div css={breakingBarRootStyle}>
      <Typography css={breakingTitleStyle} variant="h6" grow={0}>
        Breaking
      </Typography>
      <Typography css={breakingItemStyle} color="textSecondary" variant="h6">
        Placeholder
      </Typography>
    </div>
  );
}

export default BreakingNewsBar;
