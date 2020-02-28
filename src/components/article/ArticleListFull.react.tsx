import * as React from "react";
import { css } from "@emotion/core";

import ArticleListItem from "./ArticleListItem";

import { ArticleCard } from "#queries/Article";
import List from "#common/List";

type Props = {
  articles: Array<ArticleCard>;
  title: string;
};

const titleRoot = css`
  border-bottom: 1px solid var(--grey-500);
`;

function ArticleListFull(props: Props): JSX.Element {
  return (
    <div>
      <h1 css={titleRoot}>{props.title}</h1>
      <List>
        {props.articles.map(article => (
          <ArticleListItem key={article.id} article={article} />
        ))}
      </List>
    </div>
  );
}

export default ArticleListFull;
