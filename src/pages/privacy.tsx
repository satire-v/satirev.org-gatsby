import * as React from "react";
import { css } from "@emotion/core";

import topArticlesLinks from "#queries/TopArticlesLinks";
import Columns from "#layouts/Columns.react";
import BreakingNewsBar from "#components/BreakingNewsBar.react";
import ArticleListBox from "#components/article/ArticleListBox.react";
import TwitterTimeline from "#common/TwitterTimeline.react";

const root = css`
  margin-bottom: calc(6 * var(--spacing));
`;

export default function AboutPage(): JSX.Element {
  return (
    <>
      <BreakingNewsBar />
      <Columns>
        <div css={root}>
          <p>
            This is the privacy policy of Satire V: We don't care about your
            privacy.
          </p>
        </div>
        <>
          <ArticleListBox title="Top Stories" articles={topArticlesLinks()} />
          <TwitterTimeline />
        </>
      </Columns>
    </>
  );
}
