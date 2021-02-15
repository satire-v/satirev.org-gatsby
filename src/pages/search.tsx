import * as React from "react";

import topArticlesLinks from "#queries/TopArticlesLinks";
import Columns from "#layouts/Columns.react";
import SearchSection from "#components/search/SearchSection.react";
import BreakingNewsBar from "#components/BreakingNewsBar.react";
import ArticleListBox from "#components/article/ArticleListBox.react";
import TwitterTimeline from "#common/TwitterTimeline.react";

export default ({
  location,
}: {
  location: { state?: { text: string } };
}): JSX.Element => (
  <>
    <BreakingNewsBar />
    <Columns>
      <>
        <SearchSection
          initialSearch={location.state ? location.state.text : ""}
        />
      </>
      <>
        <ArticleListBox title="Top Stories" articles={topArticlesLinks()} />
        <TwitterTimeline />
      </>
    </Columns>
  </>
);
