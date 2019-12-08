// @flow
import * as React from "react";
import {
  type ImageSize,
  imgMaxWidth,
  imgRatio,
  type imgRatioType,
} from "@utils/image";
import { css } from "@emotion/core";

type Props = {
  src: string,
  alt: string,
  size: ImageSize,
  ratio: 1 | imgRatioType,
};

const aspectRatioBox = ratio => css`
  width: 100%;
  padding-top: ${ratio * 100}%;
  height: 0;
  overflow: hidden;
  background: none;
  position: relative;
`;

const maxWidthBox = (size: ImageSize) => css`
  max-width: ${imgMaxWidth(size)}px;
  height: 100%;
  width: 100%;
`;

const innerAbsBox = css`
  position: absolute;
  display: flex;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: gray;
`;

const imgStyles = css`
  width: 100%;
  height: auto;
`;

function RatioImage(props: Props): React.Node {
  return (
    <div css={maxWidthBox(props.size)}>
      <div css={aspectRatioBox(props.ratio)}>
        <div css={innerAbsBox}>
          <img css={imgStyles} alt={props.alt} src={props.src} />
        </div>
      </div>
    </div>
  );
}

RatioImage.defaultProps = {
  ratio: imgRatio,
};

export default RatioImage;
