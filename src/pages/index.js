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
            rel="preload"
            className="twitter-timeline"
            data-height="600"
            data-width="400"
            data-dnt="true"
            href="https://twitter.com/therealsatirev?ref_src=twsrc%5Etfw"
          >
            Tweets by Satire V
          </a>
        </div>
      </>
    </Columns>
  </>
);
