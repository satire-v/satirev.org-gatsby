// @flow

import * as React from "react";
import { css } from "emotion";

type Props = {
  direction: "horizontal" | "vertical",
  wrap: "nowrap" | "wrap",
  justify: "start" | "end" | "center" | "all",
  alignItems: "start" | "end" | "center",
  alignContent: "start" | "end" | "center" | "all",
  children: React.Node,
};

function getFlexProp(prop: string): string {
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

function getStyle(props: Props): string {
  return `
  display: flex;
  flex-direction: ${props.direction === "horizontal" ? "row" : "column"};
  flex-wrap: ${props.wrap};
  justify-content: ${getFlexProp(props.justify)};
  align-items: ${getFlexProp(props.alignItems)};
  align-content: ${getFlexProp(props.alignContent)};
`;
}

const FlexLayout = (props: Props): React.Node => {
  const style = getStyle(props);
  return <div css={css(style)}>{props.children}</div>;
};

FlexLayout.defaultProps = {
  direction: "horizontal",
  wrap: "wrap",
  justify: "start",
  alignItems: "start",
  alignContent: "start",
};

export default FlexLayout;
