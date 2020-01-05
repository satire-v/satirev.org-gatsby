// @flow
import * as React from "react";
import { type ArticleCard } from "@queries/Article";
import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from "@material-ui/core";
import { css } from "@emotion/core";
import ImageFluid from "@common/ImageFluid";
import Link from "@common/Link";
import theme from "@styles/theme";

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
      <CardMedia title={props.article.title}>
        <ImageFluid fluid={props.article.imgFluid} />
      </CardMedia>
      <CardContent>
        <Link
          to={props.article.slug}
          variant={titleTag}
          gutterBottom
          css={css`
            word-break: break-word;
          `}
        >
          {props.article.title}
        </Link>
        {hasExcerpt ? (
          <Typography variant="body2" component="p">
            {props.article.shortExcerpt}
          </Typography>
        ) : null}
      </CardContent>
    </Card>
  );
}

ArticleVCard.defaultProps = {
  isFeatured: false,
};

export default ArticleVCard;
