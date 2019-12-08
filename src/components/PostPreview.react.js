// @flow
import * as React from "react";
import { type ImageSize, imgMaxWidth } from "@utils/image";
import { css } from "@emotion/core";
import { fonts } from "@styles/global";
import FlexLayout from "@common/FlexLayout";
import FlexLayoutItem from "@common/FlexLayoutItem";
import RatioImage from "@common/RatioImage";
import type { ArticlePreview } from "@utils/types";

type Props = {
  size: ImageSize,
  article: ArticlePreview,
};

const rootStyles = css`
  box-sizing: content-box;
  background: lightgray;
  max-width: ${imgMaxWidth("large")}px;
`;

const titleStyles = size => css`
  text-align: left;
  padding: 8px 0px;
  font-size: ${fonts.preview(size).title.size};
`;

const textStyles = size => css`
  text-align: left;
  font-size: ${fonts.preview(size).text.size};
  line-height: ${fonts.preview(size).title.lineHeight};
`;

function PostPreview(props: Props): React.Node {
  return (
    <FlexLayout direction="vertical" css={rootStyles}>
      <RatioImage src={props.article.imgUrl} alt="" size={props.size} />
      <FlexLayoutItem align="center">
        <div css={titleStyles(props.size)} className={fonts.titleClass}>
          {props.article.title}
        </div>
      </FlexLayoutItem>
      <FlexLayoutItem align="start">
        <div css={textStyles(props.size)}>{props.article.excerpt}</div>
      </FlexLayoutItem>
    </FlexLayout>
  );
}

PostPreview.defaultProps = {
  size: "small",
};

export default PostPreview;
