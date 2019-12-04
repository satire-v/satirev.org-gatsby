// @flow
import * as React from "react";
import { type ImageSize } from "@utils/image";
import { css } from "@emotion/core";
import { fonts } from "@styles/global";
import FlexLayout from "@common/FlexLayout";
import FlexLayoutItem from "@common/FlexLayoutItem";
import type { ArticlePreview } from "@utils/types";

type Props = {
  size: ImageSize,
  article: ArticlePreview,
};

const rootStyles = css`
  box-sizing: content-box;
`;

const imageWrapper = css`
  background: gray;
`;

const imgStyles = size => css``;

const titleStyles = size => css`
  text-align: left;
  padding: 16px 0px;
  font-size: ${fonts.preview(size).titleSize}px;
`;

function PostPreview(props: Props): React.Node {
  return (
    <FlexLayout direction="vertical" css={rootStyles}>
      <FlexLayoutItem css={imageWrapper}>
        <img alt="" src={props.article.imgUrl} css={imgStyles} />
      </FlexLayoutItem>
      <FlexLayoutItem align="start">
        <div css={titleStyles(props.size)} className={fonts.titleClass}>
          {props.article.title}
        </div>
      </FlexLayoutItem>
      <FlexLayoutItem align="start">
        <div>{props.article.excerpt}</div>
      </FlexLayoutItem>
    </FlexLayout>
  );
}

PostPreview.defaultProps = {
  size: "small",
};

export default PostPreview;
