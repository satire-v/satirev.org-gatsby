// @flow

import * as React from "react";
import { graphql } from "gatsby";

import { type ArticleCardFragment } from "#queryTypes/ArticleCardFragment";
import latestArticlesLinks from "#queries/LatestArticlesLinks";
import { processArticleCardQuery } from "#queries/Article";
import Columns from "#layouts/Columns";
import Pagination from "#components/Pagination";
import ArticleListFull from "#components/article/ArticleListFull";
import ArticleListBox from "#components/article/ArticleListBox";
import TwitterTimeline from "#common/TwitterTimeline";

type Props = {
  data: { allDataArticle: { nodes: Array<ArticleCardFragment> } },
  pageContext: any,
  path: string,
};

const PageTemplate = (props: Props): React.Node => (
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
