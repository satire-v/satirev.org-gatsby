import * as React from "react";

import topArticlesLinks from "#queries/TopArticlesLinks";
import Columns from "#layouts/Columns.react";
import MainRecent from "#components/MainRecent.react";
import BreakingNewsBar from "#components/BreakingNewsBar.react";
import ArticleVCardGrid from "#components/article/ArticleVCardGrid.react";
import ArticleListBox from "#components/article/ArticleListBox.react";
import TwitterTimeline from "#common/TwitterTimeline.react";
import SearchSection from "#components/search/SearchSection.react";

export default (props): JSX.Element => {
  return (
  <>
    <BreakingNewsBar />
    <Columns>
      <>
        <SearchSection initialSearch={props.location.state.text}/>
      </>
      <>
        <ArticleListBox title="Top Stories" articles={topArticlesLinks()} />
        <TwitterTimeline />
      </>
    </Columns>
  </>
)};
