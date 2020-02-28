import React from "react";
import { graphql } from "gatsby";

// import { ArticleFullFragment } from "#queryTypes/ArticleFullFragment";
import latestArticlesLinks from "#queries/LatestArticlesLinks";
import latestArticlesByCategoryCards from "#queries/LatestArticlesByCategoryCards";
import { processArticleQuery } from "#queries/Article";
import Columns from "#layouts/Columns.react";
import ArticleVCardGrid from "#components/article/ArticleVCardGrid.react";
import ArticleSection from "#components/article/ArticleSection.react";
import ArticleListBox from "#components/article/ArticleListBox.react";
import TwitterTimeline from "#common/TwitterTimeline.react";

// ArticleFullFragment
type Props = {
  data: { dataArticle: any };
};

const PageTemplate = (props: Props): React.ReactNode => (
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
