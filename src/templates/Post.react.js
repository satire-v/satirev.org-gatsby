// @flow

import * as React from "react";
import { type ArticleFullFragment } from "@queryTypes/ArticleFullFragment";
import { Container } from "@material-ui/core";
import { TwitterTimelineEmbed } from "react-twitter-embed";
import { css } from "@emotion/core";
import { graphql } from "gatsby";
import { processArticleQuery } from "@queries/Article";
import ArticleList from "@components/ArticleList";
import ArticleSection from "@components/ArticleSection";
import ArticleVCardGrid from "@components/ArticleVCardGrid.react";
import Columns from "@layouts/Columns";
import latestArticlesByCategoryCards from "@queries/LatestArticlesByCategoryCards";
import latestArticlesLinks from "@queries/latestArticlesLinks";
import theme from "@styles/theme";

// TODO: make a generic column number layout

type Props = {
  data: { dataArticle: ArticleFullFragment },
};

const PageTemplate = (props: Props): React.Node => (
  <Columns>
    <>
      <ArticleSection article={processArticleQuery(props.data.dataArticle)} />
      <ArticleVCardGrid articles={latestArticlesByCategoryCards()} />
    </>
    <>
      <ArticleList title="Latest" articles={latestArticlesLinks()} />
      <TwitterTimelineEmbed
        sourceType="profile"
        screenName="therealsatirev"
        options={{ height: 600 }}
      />
    </>
  </Columns>
);

export const query = graphql`
  query FullArticle($dataId: Int!) {
    dataArticle(dataId: { eq: $dataId }) {
      ...ArticleFullFragment
    }
  }
`;

export default PageTemplate;
