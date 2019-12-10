// @flow
export type ImageSize = "small" | "medium" | "large";

export type ImageRatio = "square" | "4:3" | "16:9" | "default";

const getImgMaxWidth = (size: ImageSize): number => {
  switch (size) {
    case "large":
      return 600;
    case "medium":
      return 400;
    case "small":
      return 180;
    default:
      return 400;
  }
};

const getImgRatioValue = (ratio: ImageRatio) => {
  switch (ratio) {
    case "square":
      return 1;
    case "4:3":
      return 0.75;
    case "16:9":
      return 0.5265;
    default:
      return 0.5265;
  }
};

const getImgMaxHeight = (size: ImageSize, ratio: ImageRatio) =>
  getImgMaxWidth(size) * getImgRatioValue(ratio);

export { getImgMaxWidth, getImgMaxHeight, getImgRatioValue };
