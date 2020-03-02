import React from "react";
import { graphql } from "gatsby";

import latestArticlesLinks from "#queries/LatestArticlesLinks";
import { processArticleCardQuery } from "#queries/Article";
import Columns from "#layouts/Columns.react";
import { ArticleCardFragment } from "#graphql";
import Pagination, {
  PaginationPageContext,
} from "#components/Pagination.react";
import ArticleListFull from "#components/article/ArticleListFull.react";
import ArticleListBox from "#components/article/ArticleListBox.react";
import TwitterTimeline from "#common/TwitterTimeline.react";

interface Props {
  data: { allDataArticle: { nodes: Array<ArticleCardFragment> } };
  pageContext: PaginationPageContext;
}

const PageTemplate = ({ data, pageContext }: Props): JSX.Element => (
  <Columns>
    <>
      <ArticleListFull
        articles={data.allDataArticle.nodes.map(n =>
          processArticleCardQuery(n)
        )}
        title={pageContext.category}
      />
      <Pagination pageContext={pageContext} />
    </>
    <>
      <ArticleListBox title="Latest" articles={latestArticlesLinks()} />
      <TwitterTimeline />
    </>
  </Columns>
);

export const query = graphql`
  query ArticleList($limit: Int!, $skip: Int!, $category: String!) {
    allDataArticle(
      limit: $limit
      skip: $skip
      filter: { category: { name: { eq: $category } } }
    ) {
      nodes {
        ...ArticleCard
      }
    }
  }
`;

export default PageTemplate;
