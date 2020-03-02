import * as React from "react";
import { css } from "@emotion/core";

import { ArticleCard } from "#queries/Article";
import Link from "#common/Link.react";
import ImageFluid from "#common/ImageFluid.react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  CardMedia,
} from "#common/Card.react";

const cardRoot = css`
  display: flex;
  flex-direction: column;
  box-sizing: inherit;
  min-width: 160px;
  & .header {
    padding: calc(1 * var(--spacing)) calc(2 * var(--spacing));
    color: var(--crimson);
  }
  & .action-area {
    flex: 1;

    & .link {
      word-wrap: break-word;
    }
  }
`;

interface Props {
  article: ArticleCard;
  isFeatured?: boolean;
}

function ArticleVCard({ article, isFeatured = false }: Props): JSX.Element {
  let hasExcerpt = false;
  let hasHeader = true;
  let TitleTag: keyof JSX.IntrinsicElements = "h4";

  if (isFeatured) {
    hasExcerpt = true;
    hasHeader = false;
    TitleTag = "h3";
  }

  return (
    <Card css={cardRoot} component="article">
      {hasHeader ? (
        <CardHeader className="header" title={article.category} />
      ) : null}
      <CardActionArea className="action-area">
        <Link to={article.slug} className="link">
          <CardMedia>
            <ImageFluid fluid={article.imgFluid} />
          </CardMedia>
          <CardContent>
            <TitleTag className="gutter-bottom">{article.title}</TitleTag>
            {hasExcerpt ? (
              <p className="body2">{article.shortExcerpt}</p>
            ) : null}
          </CardContent>
        </Link>
      </CardActionArea>
    </Card>
  );
}

export default ArticleVCard;
