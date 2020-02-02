// @flow

import * as React from "react";
import ArticleListBox from "#components/ArticleListBox";
import ArticleVCardGrid from "#components/ArticleVCardGrid.react";
import BreakingNewsBar from "#components/BreakingNewsBar";
import Columns from "#layouts/Columns";
import MainRecent from "#components/MainRecent";
import latestArticlesByCategoryCards from "#queries/LatestArticlesByCategoryCards";
import theme from "#styles/theme";
import topArticlesLinks from "#queries/TopArticlesLinks";
import TwitterTimeline from "#common/TwitterTimeline.react";

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
