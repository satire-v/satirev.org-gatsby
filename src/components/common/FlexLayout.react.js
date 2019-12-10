// @flow

import * as React from "react";
import { css, cx } from "emotion";
import { getFlexProp } from "@utils/flex";

type Props = {
  direction: "horizontal" | "vertical",
  wrap: "nowrap" | "wrap",
  justify: "start" | "end" | "center" | "all",
  align: "start" | "end" | "center",
  alignContent: "start" | "end" | "center" | "all",
  children: React.Node,
  tag: string,
  className?: string,
  style?: Object,
};

const FlexLayout = (props: Props): React.Node => {
  const FlexLayoutRootStyle = css`
    display: flex;
    flex-direction: ${props.direction === "horizontal" ? "row" : "column"};
    flex-wrap: ${props.wrap};
    justify-content: ${getFlexProp(props.justify)};
    align-items: ${getFlexProp(props.align)};
    align-content: ${getFlexProp(props.alignContent)};
    overflow: hidden;
  `;
  const Tag = `${props.tag}`;
  return (
    <Tag
      style={props.style}
      className={cx(FlexLayoutRootStyle, props.className || "")}
    >
      {props.children}
    </Tag>
  );
};

FlexLayout.defaultProps = {
  direction: "horizontal",
  wrap: "nowrap",
  justify: "start",
  align: "center",
  alignContent: "start",
  tag: "div",
};

export default FlexLayout;
