// @flow
import * as React from "react";
import { type ArticleFull } from "@queries/Article";
import { Card, CardContent, CardMedia, Typography } from "@material-ui/core";
import { css } from "@emotion/core";
import CategorySection from "@components/CategorySection";
import ImageFluid from "@common/ImageFluid";
import TagSection from "@components/TagSection";
import theme from "@styles/theme";

type Props = {
  article: ArticleFull,
};

const cardRoot = css`
  ${theme.breakpoints.up("sm")} {
    max-width: 400px;
    float: right;
    margin-left: ${theme.spacing(2)}px;
    margin-bottom: ${theme.spacing(2)}px;
    margin-top: 0;
  }
  margin-top: ${theme.spacing(2)}px;
`;

const bodyText = css`
  & > *:last-child {
    margin-block-end: 1em;
    margin-block-start: 1em;
  }
  & img {
    max-width: 100%;
  }
`;

const articleRoot = css`
  padding-left: ${theme.spacing(6)}px;
  padding-right: ${theme.spacing(6)}px;
`;

function ArticleSection(props: Props): React.Node {
  const { article } = props;
  return (
    <article css={articleRoot}>
      <Typography variant="h2">{article.title}</Typography>
      <Typography color="textSecondary" variant="subtitle1" gutterBottom>
        {article.published}
      </Typography>
      <div>
        <Card css={cardRoot}>
          <CardMedia title={article.imgTitle}>
            <ImageFluid fluid={article.imgFluid} />
          </CardMedia>
          <CardContent>
            <Typography variant="caption">{article.imageCaption}</Typography>
          </CardContent>
        </Card>
        <Typography
          css={bodyText}
          component="div"
          variant="body1"
          dangerouslySetInnerHTML={{ __html: article.body }}
        />
      </div>
      <CategorySection category={article.category} />
      <TagSection tags={article.tags} />
      <Typography variant="button" color="textSecondary">
        &#169; {article.year}
      </Typography>
    </article>
  );
}

export default ArticleSection;
