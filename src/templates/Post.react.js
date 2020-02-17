// @flow

import * as React from "react";
import { graphql } from "gatsby";

import { type ArticleFullFragment } from "#queryTypes/ArticleFullFragment";
import latestArticlesLinks from "#queries/LatestArticlesLinks";
import latestArticlesByCategoryCards from "#queries/LatestArticlesByCategoryCards";
import { processArticleQuery } from "#queries/Article";
import Columns from "#layouts/Columns";
import ArticleVCardGrid from "#components/ArticleVCardGrid";
import ArticleSection from "#components/ArticleSection";
import ArticleListBox from "#components/ArticleListBox";
import TwitterTimeline from "#common/TwitterTimeline";

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
