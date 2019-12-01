// @flow
export type Size = "small" | "medium" | "large";

const imgMaxHeight = (size: Size) => (size === "large" ? 300 : 170);
const imgMaxWidth = (size: Size) => (size === "large" ? 560 : 170);

export { imgMaxHeight, imgMaxWidth };
