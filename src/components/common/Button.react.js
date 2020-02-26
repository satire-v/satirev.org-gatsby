// @flow

import * as React from "react";
import { Link as GatsbyLink } from "gatsby";
import { cx } from "emotion";
import { css } from "@emotion/core";

const root = css`
  color: var(--crimson);
  /* Normal buttons */
  &.button {
    min-width: 64px;
    padding: 6px 16px;
  }

  /* Floating Action Button (round) */
  &.fab {
    width: 56px;
    min-width: 0;
    height: 56px;
    min-height: 36px;
    padding: 0;
    border-radius: 50%;
  }
  &::-moz-focus-inner {
    border-style: none;
  }
  &.disabled,
  &.disabled:hover,
  &.disabled:active {
    color: var(--disabled);
    text-decoration: none;
    background-color: var(--disabled-background);
  }
  &&:hover {
    color: #fff;
    text-decoration: none;
    background-color: var(--crimson);
    @media (hover: none) {
      background-color: none;
    }
  }
  &:active,
  &&.active {
    color: #fff;
    text-decoration: none;
    background-color: var(--crimson-dark);
  }

  &.size-small {
    padding: 4px 10px;
    font-size: calc(13rem / 16);
  }
  &.size-large {
    padding: 8px 22px;
    font-size: calc(15rem / 16);
  }

  &.outlined {
    &.size-small {
      padding: 3px 9px;
    }
    &.size-large {
      padding: 7px 21px;
    }
    padding: 5px 15px;
    color: var(--crimson);
    border: 1px solid var(--crimson-light);
    &.disabled {
      border: 1px solid var(--disabled);
    }
    &:hover,
    &:active {
      background-color: var(--crimson-light);
      border: 1px solid var(--crimson);
      @media (hover: none) {
        background-color: transparent;
      }
    }
  }
`;

type Props = {
  children: ?React.Node,
  disabled: boolean,
  type: "button" | "fab",
  size: "small" | "default" | "large",
  className?: string,
};

function Button(props: Props): React.Node {
  const { children, disabled, type, size, className, ...rest } = props;
  return (
    <GatsbyLink
      {...rest}
      activeClassName="active"
      partiallyActive
      className={cx(
        {
          [`size-${size}`]: size !== "default",
          disabled,
          [`${type}`]: type,
          "button-base": true,
          "button-text": true,
        },
        className
      )}
      css={root}
    >
      {children}
    </GatsbyLink>
  );
}

Button.defaultProps = {
  type: "button",
  size: "default",
  disabled: false,
};

export default Button;
