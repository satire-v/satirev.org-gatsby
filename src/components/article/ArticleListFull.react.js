// @flow
import * as React from "react";
import { List, Typography } from "@material-ui/core";
import { css } from "@emotion/core";

import ArticleListItem from "./ArticleListItem";

import { type ArticleCard } from "#queries/Article";

type Props = {
  articles: Array<ArticleCard>,
  title: string,
};

const titleRoot = css`
  border-bottom: 1px solid var(--grey-500);
`;

function ArticleListFull(props: Props): React.Node {
  return (
    <div>
      <Typography css={titleRoot} variant="h1">
        {props.title}
      </Typography>
      <List>
        {props.articles.map(article => (
          <ArticleListItem key={article.id} article={article} />
        ))}
      </List>
    </div>
  );
}

export default ArticleListFull;
