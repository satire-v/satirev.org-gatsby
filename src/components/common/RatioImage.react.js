// @flow
import * as React from "react";
import { type ImageSize, imgMaxWidth, imgRatio } from "@utils/image";
import { css } from "@emotion/core";

type Props = {
  src: string,
  alt: string,
  size: ImageSize,
};

const aspectRatioBox = css`
  width: 100%;
  padding-top: ${imgRatio * 100}%;
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
      <div css={aspectRatioBox}>
        <div css={innerAbsBox}>
          <img css={imgStyles} alt={props.alt} src={props.src} />
        </div>
      </div>
    </div>
  );
}

export default RatioImage;
