import * as React from "react";
import { css } from "@emotion/core";

import { ButtonProps } from "./Button.react";

const root = css`
  display: inline-flex;
  border-radius: var(--border-radius);
  &:not(:first-child) {
    margin-left: -1px;
  }
  &:not(:last-child) {
    border-right-color: transparent;
  }
  &:hover: {
    bordercolor: var(--crimson);
  }
`;

interface Props extends WithClassName {
  disabled: boolean;
  size: "small" | "default";
  variant: "outlined" | "contained";
  children: React.ReactElement<ButtonProps> | React.ReactElement<ButtonProps>[];
}

function ButtonGroup({
  children,
  className,
  disabled = false,
  size = "default",
  variant = "contained",
}: Props): JSX.Element {
  return (
    <div css={root}>
      {React.Children.map(children, child => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, {
            className: `${child.props.className ?? null} ${className ?? null}`,
            disabled: child.props.disabled || disabled,
            size: child.props.size || size,
            variant: child.props.variant || variant,
            ...child.props,
          });
        }
        return null;
      })}
    </div>
  );
}

export default ButtonGroup;
