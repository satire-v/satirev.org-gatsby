import React from "react";
import { graphql } from "gatsby";

import latestArticlesLinks from "#queries/LatestArticlesLinks";
import latestArticlesByCategoryCards from "#queries/LatestArticlesByCategoryCards";
import { processArticleQuery } from "#queries/Article";
import Columns from "#layouts/Columns.react";
import { ArticleFullFragment } from "#graphql";
import ArticleVCardGrid from "#components/article/ArticleVCardGrid.react";
import ArticleSection from "#components/article/ArticleSection.react";
import ArticleListBox from "#components/article/ArticleListBox.react";
import TwitterTimeline from "#common/TwitterTimeline.react";

interface Props {
  data: { dataArticle: ArticleFullFragment };
}

const PageTemplate = ({ data }: Props): JSX.Element => (
  <Columns>
    <>
      <ArticleSection article={processArticleQuery(data.dataArticle)} />
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
      ...ArticleFull
    }
  }
`;

export default PageTemplate;
