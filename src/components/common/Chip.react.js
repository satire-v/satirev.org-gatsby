// @flow
import * as React from "react";
import { cx } from "emotion";
import { css } from "@emotion/core";

const root = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  height: 32px;
  padding: 0;
  color: #fff;
  font-size: calc(13rem / 16);
  white-space: nowrap;
  text-decoration: none;
  vertical-align: middle;
  background-color: var(--crimson);
  border: none;
  border-radius: calc(32px / 2);
  outline: 0;
  cursor: default;
  &.size-small {
    height: 24px;
    & .label: {
      padding-right: 8px;
      padding-left: 8px;
    }
  }
  & .label {
    display: flex;
    align-items: center;
    padding-right: 12px;
    padding-left: 12px;
    white-space: nowrap;
  }
`;

type Props = {
  small: boolean,
  label: string,
};

function Chip(props: Props): React.Node {
  const { small, label, ...rest } = props;
  return (
    <div {...rest} css={root} className={cx({ "size-small": small })}>
      <span className="label">{label}</span>
    </div>
  );
}

Chip.defaultProps = {
  small: false,
};

export default Chip;
