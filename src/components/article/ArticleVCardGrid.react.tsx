import * as React from "react";
import { css } from "@emotion/core";

import ArticleVCard from "./ArticleVCard";

import type { ArticleCard } from "#queries/Article";

type Props = {
  articles: Array<ArticleCard>,
  gridDirection: "horizontal" | "vertical",
  // TODO: this is to accomodate a list of article cards...tbd
};

const gridRoot = css`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: calc(1 * var(--spacing));
`;

function ArticleVCardGrid(props: Props): React.Node {
  return (
    <div css={gridRoot}>
      {props.articles.map(article => (
        <ArticleVCard key={article.id} article={article} />
      ))}
    </div>
  );
}

ArticleVCardGrid.defaultProps = {
  gridDirection: "horizontal",
};

export default ArticleVCardGrid;
