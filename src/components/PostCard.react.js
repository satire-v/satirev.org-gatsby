// @flow
import * as React from "react";
import { type ImageRatio, type ImageSize, getImgMaxWidth } from "@utils/image";
import { css } from "@emotion/core";
import { fonts } from "@styles/global";
import { useTheme } from "emotion-theming";
import FlexLayout from "@common/FlexLayout";
import FlexLayoutItem from "@common/FlexLayoutItem";
import ImageBox from "@common/ImageBox";
import type { ArticleCard } from "@utils/types";

type Props = {
  size: ImageSize,
  article: ArticleCard,
  direction: "horizontal" | "vertical",
  imgRatio: ImageRatio,
  excerpt: boolean,
  img: boolean,
};

function PostCard(props: Props): React.Node {
  const theme = useTheme();
  const rootStyles = css`
    background: ${theme.testing ? "lightgray" : "none"};
    display: grid;
    max-width: ${
      props.direction === "horizontal"
        ? getImgMaxWidth(props.size) * 1.6
        : getImgMaxWidth(props.size)
    }px;
    /* max-height: ${
      props.direction === "horizontal"
        ? "100%"
        : getImgMaxWidth(props.size) * 1.6
    }px;  may not be necessary */
    grid-template: ${
      props.direction === "horizontal"
        ? "auto / 1fr .6fr"
        : "min-content / auto "
    };
  `;

  const titleStyles = css`
    text-align: left;
    font-size: ${fonts.card(props.size).title.size};
    line-height: ${fonts.card(props.size).title.lineHeight};
    padding-bottom: 10px;
  `;

  const textStyles = css`
    text-align: left;
    font-size: ${fonts.card(props.size).text.size};
    line-height: ${fonts.card(props.size).text.lineHeight};
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
        <ImageBox
          src={props.article.imgUrl}
          alt=""
          size={props.size}
          css={imageWrapper}
        />
      ) : null}

      <FlexLayout direction="vertical" css={contentWrapper}>
        <FlexLayoutItem css={titleStyles} className={fonts.titleClass} grow={0}>
          {props.article.title}
        </FlexLayoutItem>

        {props.excerpt ? (
          <FlexLayoutItem
            css={textStyles}
            basis={props.direction === "horizontal" ? 0 : "auto"}
          >
            {props.article.excerpt}
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
