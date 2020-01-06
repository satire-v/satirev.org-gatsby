// @flow

import * as React from "react";
import { type ArticleCardFragment } from "@queryTypes/ArticleCardFragment";
import { TwitterTimelineEmbed } from "react-twitter-embed";
import { graphql } from "gatsby";
import { processArticleCardQuery } from "@queries/Article";
import ArticleListBox from "@components/ArticleListBox";
import ArticleListFull from "@components/ArticleListFull";
import Columns from "@layouts/Columns";
import Pagination from "@components/Pagination";
import latestArticlesLinks from "@queries/latestArticlesLinks";
// TODO: make a generic column number layout

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
      <TwitterTimelineEmbed
        sourceType="profile"
        screenName="therealsatirev"
        options={{ height: 600 }}
      />
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
