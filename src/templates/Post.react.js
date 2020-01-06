// @flow

import * as React from "react";
import { type ArticleFullFragment } from "@queryTypes/ArticleFullFragment";
import { TwitterTimelineEmbed } from "react-twitter-embed";
import { graphql } from "gatsby";
import { processArticleQuery } from "@queries/Article";
import ArticleListBox from "@components/ArticleListBox";
import ArticleSection from "@components/ArticleSection";
import ArticleVCardGrid from "@components/ArticleVCardGrid.react";
import Columns from "@layouts/Columns";
import latestArticlesByCategoryCards from "@queries/LatestArticlesByCategoryCards";
import latestArticlesLinks from "@queries/latestArticlesLinks";

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
      <ArticleListBox title="Latest" articles={latestArticlesLinks()} />
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
