// @flow

export function getFlexProp(prop: string): string {
  switch (prop) {
    case "start":
      return "flex-start";
    case "end":
      return "flex-end";
    case "center":
      return "center";
    case "all":
      return "space-between";
    default:
      return "auto";
  }
}

export default { getFlexProp };
