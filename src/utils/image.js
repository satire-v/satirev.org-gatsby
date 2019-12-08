// @flow
export type ImageSize = "small" | "medium" | "large";

const imgMaxWidth = (size: ImageSize): number => {
  switch (size) {
    case "large":
      return 600;
    case "medium":
      return 400;
    case "small":
      return 220;
    default:
      return 400;
  }
};

const imgRatio = 0.5625;
export type imgRatioType = 0.5625;

export { imgMaxWidth, imgRatio };
