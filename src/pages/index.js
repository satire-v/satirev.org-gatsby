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
      <>
        {/* TODO: make skeleton/placeholder actually do that, not makeshift */}
        <div
          style={{
            height: 600,
            background: theme.palette.grey["300"],
            borderRadius: "6px",
          }}
        >
          <a
            className="twitter-timeline"
            data-height="600"
            href="https://twitter.com/therealsatirev"
          >
            Tweets by Satire V
          </a>
        </div>
      </>
    </Columns>
  </>
);
