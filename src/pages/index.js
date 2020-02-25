// @flow

import * as React from "react";

import topArticlesLinks from "#queries/TopArticlesLinks";
import latestArticlesByCategoryCards from "#queries/LatestArticlesByCategoryCards";
import Columns from "#layouts/Columns";
import MainRecent from "#components/MainRecent";
import BreakingNewsBar from "#components/BreakingNewsBar";
import ArticleVCardGrid from "#components/ArticleVCardGrid";
import ArticleListBox from "#components/ArticleListBox";
import TwitterTimeline from "#common/TwitterTimeline";

export default (): React.Node => (
  <>
    <BreakingNewsBar />
    <Columns>
      <>
        <MainRecent />
        <ArticleVCardGrid articles={latestArticlesByCategoryCards()} />
      </>
      <>
        <ArticleListBox title="Top Stories" articles={topArticlesLinks()} />
      </>
      <TwitterTimeline />
    </Columns>
  </>
);
