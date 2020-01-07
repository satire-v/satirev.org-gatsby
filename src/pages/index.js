// @flow

import * as React from "react";
import { TwitterTimelineEmbed } from "react-twitter-embed";
import ArticleListBox from "@components/ArticleListBox";
import ArticleVCardGrid from "@components/ArticleVCardGrid.react";
import BreakingNewsBar from "@components/BreakingNewsBar";
import Columns from "@layouts/Columns";
import MainRecent from "@components/MainRecent";
import latestArticlesByCategoryCards from "@queries/LatestArticlesByCategoryCards";
import theme from "@styles/theme";
import topArticlesLinks from "@queries/TopArticlesLinks";

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
        <div style={{ height: 600, background: theme.palette.grey["300"] }}>
          <TwitterTimelineEmbed
            sourceType="profile"
            screenName="therealsatirev"
            options={{ height: 600 }}
          />
        </div>
      </>
    </Columns>
  </>
);
