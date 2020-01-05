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
import Img from "gatsby-image";
import Link from "@common/Link";
import analyze from "rgbaster";
import theme from "@styles/theme";

type Props = {|
  article: ArticleCard,
  isFeatured: boolean,
|};

const genWhites = (() => {
  const whites = [];
  for (let i = 250; i < 256; i += 1) {
    for (let j = 250; j < 256; j += 1) {
      for (let k = 250; k < 256; k += 1) {
        whites.push(`rgb(${i},${j},${k})`);
      }
    }
  }
  return whites;
})();

function ArticleVCard(props: Props): React.Node {
  const [background, setBackground] = React.useState(null);
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

  React.useEffect(() => {
    async function getBackgroundColor() {
      const result = await analyze(props.article.imgFluid?.base64, {
        ignore: genWhites,
        scale: 0.2,
      });
      setBackground(result[0].color);
    }
    getBackgroundColor();
  }, []);

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
        <Img
          fluid={props.article.imgFluid}
          css={css`
            background: ${background};
          `}
        />
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
