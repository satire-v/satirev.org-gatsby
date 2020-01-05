// @flow
export type ImageRatio = "square" | "4:3" | "16:9" | "default";

const ratios: { [ImageRatio]: number } = {
  square: 1,
  "4:3": 3 / 4,
  "16:9": 9 / 16,
  default: 9 / 16,
};

const image = {
  ratios,
};

export default image;
