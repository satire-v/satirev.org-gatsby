// @flow

import * as React from "react";
import { graphql } from "gatsby";

import { type ArticleFullFragment } from "#queryTypes/ArticleFullFragment";
import { processArticleQuery } from "#queries/Article";
import ArticleListBox from "#components/ArticleListBox";
import ArticleSection from "#components/ArticleSection";
import ArticleVCardGrid from "#components/ArticleVCardGrid";
import Columns from "#layouts/Columns";
import TwitterTimeline from "#common/TwitterTimeline";
import latestArticlesByCategoryCards from "#queries/LatestArticlesByCategoryCards";
import latestArticlesLinks from "#queries/LatestArticlesLinks";

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
      <TwitterTimeline />
    </>
  </Columns>
);

export const query = graphql`
  query FullArticle($id: String) {
    dataArticle(id: { eq: $id }) {
      ...ArticleFullFragment
    }
  }
`;

export default PageTemplate;
