// @flow
import * as React from "react";
import { css } from "@emotion/core";
import PostCard from "@components/PostCard";
import image, { type ImageSize } from "@utils/image";
import type { ArticleCard } from "@queries/Article";

type Props = {
  articles: Array<ArticleCard>,
  cardDirection: "horizontal" | "vertical",
  gridDirection: "horizontal" | "vertical",
  excerpt: boolean,
  img: boolean,
  cardSize: ImageSize,
};

function PostCardGrid(props: Props): React.Node {
  const gridRoot = css`
    display: grid;
    justify-items: center;
    width: 100%;
    ${props.gridDirection === "horizontal"
      ? `grid-template-columns: repeat(
      auto-fit,
      minmax(${image.sizes.small.width}px, 1fr)
    );
    grid-auto-rows: 1fr;`
      : `grid-template-rows: repeat(
      auto-fit,
      minmax(${image.sizes.small.height("default")}px, 1fr)
    );
    grid-auto-columns: 1fr;`}
    grid-gap: 2em;
  `;
  return (
    <div css={gridRoot}>
      {props.articles.map(article => (
        <PostCard
          direction={props.cardDirection}
          key={article.id}
          article={article}
          size={props.cardSize}
          excerpt={props.excerpt}
          img={props.img}
        />
      ))}
    </div>
  );
}

PostCardGrid.defaultProps = {
  cardDirection: "vertical",
  gridDirection: "horizontal",
  excerpt: false,
  img: true,
  cardSize: "small",
};

export default PostCardGrid;
