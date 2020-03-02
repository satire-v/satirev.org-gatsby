import * as React from "react";
import { css } from "@emotion/core";

import ArticleVCard from "./ArticleVCard.react";

import { ArticleCard } from "#queries/Article";

const gridRoot = css`
  display: grid;
  grid-gap: calc(1 * var(--spacing));
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
`;

type Props = {
  articles: Array<ArticleCard>;
  gridDirection?: "horizontal" | "vertical";
  // TODO: this is to accomodate a list of article cards...tbd
};

function ArticleVCardGrid({
  articles,
  gridDirection = "horizontal",
}: Props): JSX.Element {
  return (
    <div css={gridRoot}>
      {articles.map(article => (
        <ArticleVCard key={article.id} article={article} />
      ))}
    </div>
  );
}

export default ArticleVCardGrid;
