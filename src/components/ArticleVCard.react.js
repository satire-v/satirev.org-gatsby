// @flow
import * as React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  CardMedia,
} from "#common/Card";
import { css } from "@emotion/core";

import { type ArticleCard } from "#queries/Article";
import Link from "#common/Link";
import ImageFluid from "#common/ImageFluid";

type Props = {|
  article: ArticleCard,
  isFeatured: boolean,
|};

function ArticleVCard(props: Props): React.Node {
  let hasExcerpt = false;
  let hasHeader = true;
  let titleTag = "h4";

  if (props.isFeatured) {
    hasExcerpt = true;
    hasHeader = false;
    titleTag = "h3";
  }

  const cardRoot = css`
    min-width: 160px;
    display: flex;
    flex-direction: column;
  `;

  const cardActionArea = css`
    flex: 1;
  `;

  return (
    <Card css={cardRoot} component="article">
      {hasHeader ? (
        <CardHeader
          css={css`
            padding: calc(1 * var(--spacing)) calc(2 * var(--spacing));
            color: var(--crimson);
          `}
          title={props.article.category}
        />
      ) : null}
      <CardActionArea css={cardActionArea}>
        <Link
          to={props.article.slug}
          css={css`
            word-break: break-word;
          `}
        >
          <CardMedia title={props.article.title}>
            <ImageFluid fluid={props.article.imgFluid} />
          </CardMedia>
          <CardContent>
            <titleTag>{props.article.title}</titleTag>
            {hasExcerpt ? (
              <p className="body2 excerpt">{props.article.shortExcerpt}</p>
            ) : null}
          </CardContent>
        </Link>
      </CardActionArea>
    </Card>
  );
}

ArticleVCard.defaultProps = {
  isFeatured: false,
};

export default ArticleVCard;
