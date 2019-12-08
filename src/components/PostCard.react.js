// @flow
import * as React from "react";
import { type ImageSize, imgMaxWidth } from "@utils/image";
import { css } from "@emotion/core";
import { fonts } from "@styles/global";
import RatioImage from "@common/RatioImage";
import type { ArticlePreview } from "@utils/types";

type Props = {
  size: ImageSize,
  article: ArticlePreview,
};

const rootStyles = size => css`
  box-sizing: content-box;
  background: lightgray;
  max-width: ${imgMaxWidth(size)}px;
`;

const titleStyles = size => css`
  text-align: left;
  font-size: ${fonts.preview(size).title.size};
  line-height: ${fonts.preview(size).title.lineHeight};
`;

const textStyles = size => css`
  text-align: left;
  font-size: ${fonts.preview(size).text.size};
  line-height: ${fonts.preview(size).text.lineHeight};
`;

const contentWrapper = css`
  padding: 10px; /* change to grid? */
`;

function PostCard(props: Props): React.Node {
  return (
    <div css={rootStyles(props.size)}>
      <RatioImage src={props.article.imgUrl} alt="" size={props.size} />
      <div css={contentWrapper}>
        <div css={titleStyles(props.size)} className={fonts.titleClass}>
          {props.article.title}
        </div>
        <div css={textStyles(props.size)}>{props.article.excerpt}</div>
      </div>
    </div>
  );
}

PostCard.defaultProps = {
  size: "small",
};

export default PostCard;
