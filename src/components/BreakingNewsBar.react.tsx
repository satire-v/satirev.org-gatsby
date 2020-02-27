import * as React from "react";
import { css } from "@emotion/core";

const root = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin: 0px 0px calc(3 * var(--spacing));
  padding: 6px min(10%, 80px);
  border-top: 1px solid var(--grey-300);
  border-bottom: 1px solid var(--grey-300);

  & .breaking-news-title {
    padding-right: 1em;
    border-right: 1px solid var(--grey-400)};
  }

  & .breaking-news-item {
    padding-left: 1em;
  }
`;

function BreakingNewsBar(): React.Node {
  return (
    <div css={root}>
      <div className="breaking-news-title h6" variant="h6">
        Breaking
      </div>
      <div className="breaking-news-item secondary-text h6">Placeholder</div>
    </div>
  );
}

export default BreakingNewsBar;
