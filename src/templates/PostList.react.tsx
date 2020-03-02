import React from "react";
import { graphql } from "gatsby";

import latestArticlesLinks from "#queries/LatestArticlesLinks";
import { processArticleCardQuery } from "#queries/Article";
import Columns from "#layouts/Columns.react";
import Pagination from "#components/Pagination.react";
import ArticleListFull from "#components/article/ArticleListFull.react";
import ArticleListBox from "#components/article/ArticleListBox.react";
import TwitterTimeline from "#common/TwitterTimeline.react";

//  ArticleCardFragment
type Props = {
  data: { allDataArticle: { nodes: Array<any> } };
  pageContext: any;
  path: string;
};

const PageTemplate = (props: Props): JSX.Element => (
  <Columns>
    <>
      <ArticleListFull
        articles={props.data.allDataArticle.nodes.map(n =>
          processArticleCardQuery(n)
        )}
        title={props.pageContext.category}
      />
      <Pagination pageContext={props.pageContext} path={props.path} />
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
        ...ArticleCardFragment
      }
    }
  }
`;

export default PageTemplate;
