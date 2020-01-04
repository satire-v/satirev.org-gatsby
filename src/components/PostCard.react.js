// @flow
import * as React from "react";
import { type ArticleCard } from "@queries/Article";
import { css } from "@emotion/core";
import { useTheme } from "emotion-theming";
import FlexLayout from "@common/FlexLayout";
import FlexLayoutItem from "@common/FlexLayoutItem";
import Img from "gatsby-image";
import analyze from "rgbaster";
import image, { type ImageRatio, type ImageSize } from "@utils/image";

type Props = {
  size: ImageSize,
  article: ArticleCard,
  direction: "horizontal" | "vertical",
  imgRatio: ImageRatio,
  excerpt: boolean,
  img: boolean,
};

function genWhites() {
  const whites = [];
  for (let i = 250; i < 256; i += 1) {
    for (let j = 250; j < 256; j += 1) {
      for (let k = 250; k < 256; k += 1) {
        whites.push(`rgb(${i},${j},${k})`);
      }
    }
  }
  return whites;
}

function PostCard(props: Props): React.Node {
  const theme = useTheme();
  const [background, setBackground] = React.useState(null);

  React.useEffect(() => {
    async function getBackgroundColor() {
      const result = await analyze(props.article.imgFluid?.base64, {
        ignore: genWhites(),
        scale: 0.2,
      });
      setBackground(result[0].color);
    }
    getBackgroundColor();
  }, []);

  const rootStyles = css`
    background: ${theme.testing ? "lightgray" : "none"};
    display: grid;
    max-width: ${
      props.direction === "horizontal"
        ? image.sizes[props.size].width * 1.6
        : image.sizes[props.size].width
    }px;
    min-width: ${image.sizes.small.width}px;
    /* max-height: ${
      props.direction === "horizontal"
        ? "100%"
        : image.sizes[props.size].width * 1.6
    }px;  may not be necessary */
    grid-template: ${
      props.direction === "horizontal"
        ? "auto / 1fr .6fr"
        : "min-content / auto "
    };
  `;

  const titleStyles = css`
    text-align: left;
    padding-bottom: 10px;
  `;

  const textStyles = css`
    text-align: left;
    width: 100%;
  `;

  const imageWrapper = css`
    border: ${theme.testing ? "5px black solid" : "none"};
  `;

  const contentWrapper = css`
    padding: ${props.direction === "horizontal"
      ? "0px 10px"
      : "10px 0px"}; /* change to grid? */
    &,
    & > div {
      overflow: hidden;
      text-overflow: ellipsis;
      max-width: 100%;
      max-height: 100%;
    }
  `;

  return (
    <div css={rootStyles}>
      {props.img ? (
        <Img
          fluid={props.article.imgFluid}
          css={css`
            ${imageWrapper}
            background: ${background};
          `}
        />
      ) : null}

      <FlexLayout direction="vertical" css={contentWrapper} align="start">
        <FlexLayoutItem css={titleStyles} grow={0} tag="h3">
          {/*  make dependent on size */}
          {props.article.title}
        </FlexLayoutItem>

        {props.excerpt ? (
          <FlexLayoutItem
            css={textStyles}
            basis={props.direction === "horizontal" ? 0 : "auto"}
          >
            {props.article.fullExcerpt}
          </FlexLayoutItem>
        ) : null}
      </FlexLayout>
    </div>
  );
}

PostCard.defaultProps = {
  size: "small",
  imgRatio: "default",
  excerpt: true,
  img: true,
};

export default PostCard;
