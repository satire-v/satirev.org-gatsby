// @flow
import * as React from "react";
import { css } from "@emotion/core";
import ArticleVCard from "@components/ArticleVCard";
import theme from "@styles/theme";
import type { ArticleCard } from "@queries/Article";

type Props = {
  articles: Array<ArticleCard>,
  gridDirection: "horizontal" | "vertical",
};

const gridRoot = css`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: ${theme.spacing(1)}px;
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
