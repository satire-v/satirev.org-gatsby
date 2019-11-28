// @flow

import * as React from "react";
import { css } from "@emotion/core";
import { getFlexProp } from "@utils/flex";

type Props = {
  order: number,
  grow: number,
  shrink: number,
  align?: "start" | "end" | "center",
  children: React.Node,
  className?: string,
  style?: Object,
};

function getStyle(props: Props): string {
  return `
  flex: ${props.grow} ${props.shrink} auto;
  ${props.align ? `align-self:${getFlexProp(props.align)};` : ""}
  max-height: 100%;
  max-width: 100%;
  min-width: 0;
  min-height: 0;
  overflow: hidden;
`;
}

const FlexLayoutItem = (props: Props): React.Node => {
  const style = getStyle(props);
  return (
    <div className={props.className} style={props.style} css={css(style)}>
      {props.children}
    </div>
  );
};

FlexLayoutItem.defaultProps = {
  order: 0,
  grow: 0,
  shrink: 1,
};

export default FlexLayoutItem;
