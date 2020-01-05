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
import latestArticlesByCategoryCards from "@queries/LatestArticlesByCategoryCards";
import latestArticlesLinks from "@queries/latestArticlesLinks";
import theme from "@styles/theme";

// TODO: make a generic column number layout

const gridRoot = css`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: ${theme.spacing(3)}px;
  margin-top: ${theme.spacing(3)}px;
  .column {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: min-content;
    grid-gap: ${theme.spacing(2)}px;
  }
  .column-1 {
    ${theme.breakpoints.up("xs")} {
      grid-column: span 12;
    }
    ${theme.breakpoints.up("md")} {
      grid-column: 1 / span 8;
    }
  }
  .column-2 {
    ${theme.breakpoints.up("xs")} {
      grid-column: span 12;
    }
    ${theme.breakpoints.up("md")} {
      grid-column: 9 / span 4;
    }
  }
`;

type Props = {
  data: { dataArticle: ArticleFullFragment },
};

const PageTemplate = (props: Props): React.Node => (
  <Container maxWidth="xl">
    <div css={gridRoot}>
      <div className="column column-1">
        <ArticleSection article={processArticleQuery(props.data.dataArticle)} />
        <ArticleVCardGrid articles={latestArticlesByCategoryCards()} />
      </div>
      <div className="column column-2">
        <ArticleList title="Latest" articles={latestArticlesLinks()} />
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="therealsatirev"
          options={{ height: 600 }}
        />
      </div>
    </div>
  </Container>
);

export const query = graphql`
  query FullArticle($dataId: Int!) {
    dataArticle(dataId: { eq: $dataId }) {
      ...ArticleFullFragment
    }
  }
`;

export default PageTemplate;
