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
    titleTag: string,
  },
} = {
  large: {
    width: 640,
    height: (ratio: ImageRatio) => 640 * ratios[ratio],
    titleTag: "h2",
  },
  medium: {
    width: 480,
    height: (ratio: ImageRatio) => 480 * ratios[ratio],
    titleTag: "h5",
  },
  small: {
    width: 160,
    height: (ratio: ImageRatio) => 160 * ratios[ratio],
    titleTag: "h5",
  },
};

const image = {
  ratios,
  sizes,
};

export default image;
