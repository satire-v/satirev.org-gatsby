// @flow
import * as React from "react";
import {
  type ImageRatio,
  type ImageSize,
  getImgRatioValue,
} from "@utils/image";
import { css } from "@emotion/core";

type Props = {
  src: string,
  alt: string,
  size: ImageSize,
  ratio: ImageRatio,
  className?: string,
};

// TODO: some sort of way to have full images BUT within GRID, keep them the same size (images AND cards)

function ImageBox(props: Props): React.Node {
  const aspectRatioBox = css`
    width: 100%;
    padding-top: ${getImgRatioValue(props.ratio) * 100}%;
    height: 0;
    overflow: hidden;
    background: none;
    position: relative;
  `;

  const innerAbsBox = css`
    position: absolute;
    display: flex;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: lightgray;
  `;

  const imgStyles = css`
    width: 100%;
    height: auto;
  `;

  return (
    <div css={aspectRatioBox} className={props.className}>
      <div css={innerAbsBox}>
        <img css={imgStyles} alt={props.alt} src={props.src} />
      </div>
    </div>
  );
}

ImageBox.defaultProps = {
  ratio: "default",
};

export default ImageBox;
