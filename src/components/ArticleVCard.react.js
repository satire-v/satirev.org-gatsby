// @flow
import * as React from "react";
import { type ArticleCard } from "#queries/Article";
import {
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from "@material-ui/core";
import { css } from "@emotion/core";
import ImageFluid from "#common/ImageFluid";
import Link from "#common/Link";
import theme from "#styles/theme";

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
            padding: ${theme.spacing(1)}px ${theme.spacing(2)}px;
            color: ${theme.palette.primary.main};
          `}
          titleTypographyProps={{ variant: "h6" }}
          title={props.article.category}
        />
      ) : null}
      <CardActionArea component="div" css={cardActionArea}>
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
            <Typography variant={titleTag} gutterBottom={props.isFeatured}>
              {props.article.title}
            </Typography>
            {hasExcerpt ? (
              <Typography variant="body2" component="p">
                {props.article.shortExcerpt}
              </Typography>
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
