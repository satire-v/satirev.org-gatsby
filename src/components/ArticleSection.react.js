// @flow
import * as React from "react";
import { type ArticleFull } from "@queries/Article";
import {
  Card,
  CardContent,
  CardMedia,
  Chip,
  Typography,
} from "@material-ui/core";
import { Label, LabelImportant, LocalOffer } from "@material-ui/icons";
import { css } from "@emotion/core";
import ImageFluid from "@common/ImageFluid";
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
  display: inline;
  & > *:last-child {
    margin-block-end: 1em;
    margin-block-start: 1em;
  }
`;

const categoryRoot = css`
  display: flex;
  flexwrap: wrap;
  align-items: center;
`;

const category = css`
  padding-left: ${theme.spacing(1)}px;
`;

const tagsRoot = css`
  display: flex;
  flexwrap: wrap;
  margin-bottom: ${theme.spacing(2)}px;
  & > * {
    margin: ${theme.spacing(0.5)}px;
  }
`;

function ArticleSection(props: Props): React.Node {
  const { article } = props;
  return (
    <article>
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
      <div css={categoryRoot}>
        <LabelImportant color="primary" fontSize="large" />
        <Typography css={category} variant="h6">
          {article.category}
        </Typography>
      </div>
      <div css={tagsRoot}>
        <LocalOffer fontSize="large" />
        {article.tags.map((tag, i) => (
          <Chip key={i.toString()} color="primary" label={tag} />
        ))}
      </div>
      <Typography variant="button" color="textSecondary">
        &#169; {article.year}
      </Typography>
    </article>
  );
}

export default ArticleSection;
