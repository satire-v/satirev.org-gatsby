// @flow
export type ImageSize = "small" | "medium" | "large";

export type ImageRatio = "square" | "4:3" | "16:9" | "default";

const ratios: { [ImageRatio]: number } = {
  square: 1,
  "4:3": 3 / 4,
  "16:9": 9 / 16,
  default: 9 / 16,
};

const sizes: {
  [ImageSize]: {
    width: number,
    height: (ratio: ImageRatio) => number,
  },
} = {
  large: {
    width: 640,
    height: (ratio: ImageRatio) => 640 * ratios[ratio],
  },
  medium: {
    width: 480,
    height: (ratio: ImageRatio) => 480 * ratios[ratio],
  },
  small: {
    width: 180,
    height: (ratio: ImageRatio) => 180 * ratios[ratio],
  },
};

const image = {
  ratios,
  sizes,
};

export default image;
