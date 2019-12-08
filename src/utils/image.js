// @flow
export type ImageSize = "small" | "medium" | "large";

const imgMaxWidth = (size: ImageSize) =>
  size === "large" ? 580 : size === "medium" ? 340 : 170;

const imgRatio = 0.75;

export { imgMaxWidth, imgRatio };
