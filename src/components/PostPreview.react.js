// @flow
import * as React from "react";
import { type Size, imgMaxHeight, imgMaxWidth } from "@utils/image";
import { css } from "@emotion/core";
import { fonts } from "@styles/global";
import FlexLayout from "@common/FlexLayout";
import FlexLayoutItem from "@common/FlexLayoutItem";

type Props = {
  size: Size,
  imgUrl: string,
  title: string,
  excerpt?: string,
  slug?: string,
};

const titleSize = size =>
  size === "large"
    ? fonts.preview.big.titleSize
    : fonts.preview.small.titleSize;

const rootStyles = size => css`
  box-sizing: content-box;
  max-width: ${imgMaxWidth(size)}px;
`;

const imageWrapper = size => css`
  text-align: center;
  background: gray;
  width: ${size === "small" ? `${imgMaxWidth(size)}px` : "100%"};
  height: ${size === "small" ? `${imgMaxHeight(size)}px` : "auto"};
  max-width: ${imgMaxWidth(size)}px;
  max-height: ${imgMaxHeight(size)}px;
`;

const imgStyles = size => css`
  width: ${size === "small" ? `${imgMaxWidth(size)}px` : "100%"};
  height: ${size === "small" ? `${imgMaxHeight(size)}px` : "auto"};
  max-width: ${imgMaxWidth(size)}px;
  max-height: ${imgMaxHeight(size)}px;
`;

const titleStyles = size => css`
  text-align: left;
  padding: 16px 0px;
  font-size: ${titleSize(size)}px;
`;

function PostPreview(props: Props): React.Node {
  return (
    <FlexLayout direction="vertical" css={rootStyles(props.size)}>
      <FlexLayoutItem css={imageWrapper(props.size)}>
        <img alt="" src={props.imgUrl} css={imgStyles(props.size)} />
      </FlexLayoutItem>
      <FlexLayoutItem align="start">
        <div css={titleStyles(props.size)} className={fonts.titleClass}>
          {props.title}
        </div>
      </FlexLayoutItem>
    </FlexLayout>
  );
}

PostPreview.defaultProps = {
  size: "small",
};

export default PostPreview;
