import * as React from "react";
import { css } from "@emotion/core";

import ArticleTagSection from "./ArticleTagSection.react";
import ArticleCategorySection from "./ArticleCategorySection.react";

import breakpoints from "#styles/breakpoints";
import { ArticleFull } from "#queries/Article";
import ImageFluid from "#common/ImageFluid.react";
import { Card, CardContent, CardMedia } from "#common/Card.react";

type Props = {
  article: ArticleFull;
};

const root = css`
  padding-right: calc(6 * var(--spacing));
  padding-left: calc(6 * var(--spacing));

  & .image-card-root {
    @media (min-width: ${breakpoints.sm}px) {
      float: right;
      max-width: 400px;
      margin-top: 0;
      margin-bottom: calc(2 * var(--spacing));
      margin-left: calc(2 * var(--spacing));
    }
    margin-top: calc(2 * var(--spacing));
  }

  & .body-text {
    & > *:last-child {
      margin-block-end: 1em;
      margin-block-start: 1em;
    }
    & img {
      max-width: 100%;
    }
  }
`;

function ArticleSection(props: Props): JSX.Element {
  const { article } = props;
  return (
    <article css={root}>
      <h2>{article.title}</h2>
      <div className="subtitle1 secondary-text gutter-bottom">
        {article.published}
      </div>
      <div>
        <Card className="image-card-root">
          <CardMedia title={article.imgTitle}>
            <ImageFluid fluid={article.imgFluid} />
          </CardMedia>
          <CardContent>
            <div className="caption">{article.imageCaption}</div>
          </CardContent>
        </Card>
        <div
          className="body-text body1"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: article.body }}
        />
      </div>
      <ArticleCategorySection category={article.category} />
      <ArticleTagSection tags={article.tags} />
      <div className="button-text secondary-text">&#169; {article.year}</div>
    </article>
  );
}

export default ArticleSection;
