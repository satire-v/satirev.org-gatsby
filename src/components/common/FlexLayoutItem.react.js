// @flow

import * as React from "react";
import { css } from "@emotion/core";
import { getFlexProp } from "@utils/flex";

type Props = {
  order: number,
  grow: number,
  shrink: number,
  basis: number | string,
  align?: "start" | "end" | "center",
  children: React.Node,
  className?: string,
  style?: Object,
  tag: string,
};

const FlexLayoutItem = (props: Props): React.Node => {
  const FlexLayoutItemRootStyle = css`
    flex: ${props.grow} ${props.shrink} ${props.basis};
    ${props.align ? `align-self:${getFlexProp(props.align)};` : ""}
    overflow: hidden;
  `;
  const Tag = `${props.tag}`;

  return (
    <Tag
      className={props.className}
      style={props.style}
      css={FlexLayoutItemRootStyle}
    >
      {props.children}
    </Tag>
  );
};

FlexLayoutItem.defaultProps = {
  order: 0,
  grow: 1,
  shrink: 1,
  basis: "auto",
  tag: "div",
};

export default FlexLayoutItem;
