import * as React from "react";
import { css } from "@emotion/core";

const root = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin: 0 0 calc(3 * var(--spacing));
  padding: 6px min(10%, 80px);
  border-top: 1px solid var(--grey-300);
  border-bottom: 1px solid var(--grey-300);

  & {
    .breaking-news-title {
      padding-right: 1em;
      border-right: 1px solid var(--grey-400);
    }
    .breaking-news-item {
      padding-left: 1em;
    }
  }
`;

function BreakingNewsBar(): JSX.Element {
  return (
    <div css={root}>
      <h6 className="breaking-news-title h6">Breaking</h6>
      <div className="breaking-news-item secondary-text h6">Placeholder</div>
    </div>
  );
}

export default BreakingNewsBar;
