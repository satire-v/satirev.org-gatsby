import * as React from "react";
import { css } from "@emotion/core";

import ArticleListItem from "./ArticleListItem.react";

import { ArticleCard } from "#queries/Article";
import List from "#common/List.react";

const titleRoot = css`
  border-bottom: 1px solid var(--grey-500);
`;

interface Props {
  articles: Array<ArticleCard>;
  title: string;
}

function ArticleListFull({ articles, title }: Props): JSX.Element {
  return (
    <div>
      <h1 css={titleRoot}>{title}</h1>
      <List>
        {articles.map(article => (
          <ArticleListItem key={article.id} article={article} />
        ))}
      </List>
    </div>
  );
}

export default ArticleListFull;
