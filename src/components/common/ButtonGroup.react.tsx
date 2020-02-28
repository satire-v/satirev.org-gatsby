import * as React from "react";
import { css } from "@emotion/core";

const root = css`
  display: inline-flex;
  border-radius: var(--border-radius);
  &:not(:first-child) {
    marginleft: -1px;
  }
  &:not(:last-child) {
    borderrightcolor: transparent;
  }
  &:hover: {
    bordercolor: var(--crimson);
  }
`;

type Props = {
  children: ?JSX.Element,
  disabled: boolean,
  size: "small" | "default",
  variant: "outlined" | "contained",
};

function ButtonGroup(props: Props): JSX.Element {
  const { children, disabled, size, variant } = props;
  return (
    <div css={root}>
      {React.Children.map(children, child => {
        if (!React.isValidElement(child)) {
          return null;
        }
        return React.cloneElement(child, {
          className: child.props.className,
          disabled: child.props.disabled || disabled,
          size: child.props.size || size,
          variant: child.props.variant || variant,
        });
      })}
    </div>
  );
}

ButtonGroup.defaultProps = {
  variant: "contained",
  size: "default",
  disabled: false,
};

export default ButtonGroup;
