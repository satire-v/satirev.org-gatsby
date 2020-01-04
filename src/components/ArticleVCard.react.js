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
import analyze from "rgbaster";
import image, { type ImageRatio, type ImageSize } from "@utils/image";

type Props = {|
  maxSize: ImageSize,
  article: ArticleCard,
  imgRatio: ImageRatio,
  hasExcerpt: boolean,
  hasHeader: boolean,
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

const headerMapping = {
  small: "h4",
  medium: "h3",
  large: "h2",
};

function ArticleVCard(props: Props): React.Node {
  const [background, setBackground] = React.useState(null);

  const cardRoot = css`
    max-width: ${image.sizes[props.maxSize].width}px;
    min-width: ${image.sizes.small.width}px;
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
      {props.hasHeader ? <CardHeader title={props.article.category} /> : null}
      <CardMedia title={props.article.title}>
        <Img
          fluid={props.article.imgFluid}
          css={css`
            background: ${background};
          `}
        />
      </CardMedia>
      <CardContent>
        <Typography
          variant={headerMapping[props.maxSize]}
          gutterBottom
          css={css`
            word-break: break-word;
            color: black;
          `}
        >
          {props.article.title}
        </Typography>
        {props.hasExcerpt ? (
          <Typography variant="body2" component="p">
            {props.article.shortExcerpt}
          </Typography>
        ) : null}
      </CardContent>
    </Card>
  );
}

ArticleVCard.defaultProps = {
  maxSize: "small",
  imgRatio: "default",
  hasExcerpt: true,
  hasHeader: true,
};

export default ArticleVCard;
