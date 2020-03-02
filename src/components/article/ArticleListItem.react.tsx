import * as React from "react";
import { css } from "@emotion/core";

import ArticleTagSection from "./ArticleTagSection.react";
import ArticleCategorySection from "./ArticleCategorySection.react";

import { ArticleCard } from "#queries/Article";
import Link from "#common/Link.react";
import ImageFluid from "#common/ImageFluid.react";
import { CardContent, CardMedia } from "#common/Card.react";

const root = css`
  padding-right: 0;
  padding-left: 0;

  & .card-content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: calc(1 * var(--spacing));

    & .card-media {
      align-self: flex-end;
      padding-left: calc(2 * var(--spacing));

      & .image-root {
        min-width: 180px;
      }
    }
  }
`;

interface Props {
  article: ArticleCard;
  hasCategory?: boolean;
}

function ArticleListItem({ article, hasCategory = false }: Props): JSX.Element {
  return (
    <CardContent css={root}>
      <div className="card-content">
        <div>
          <Link to={article.slug}>
            <h3>{article.title}</h3>
          </Link>
          <div className="gutter-bottom subtitle2 secondary-text">
            {article.published}
          </div>
          <p className="body2">{article.fullExcerpt}</p>
        </div>
        <CardMedia className="card-media">
          <ImageFluid className="image-root" fluid={article.imgFluid} />
        </CardMedia>
      </div>
      {hasCategory ? (
        <ArticleCategorySection category={article.category} />
      ) : null}
      <ArticleTagSection tags={article.tags} />
    </CardContent>
  );
}

export default ArticleListItem;
