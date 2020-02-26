// @flow
import * as React from "react";
import { Link as GatsbyLink } from "gatsby";
import { Button as MuiButton } from "@material-ui/core";
import { css } from "@emotion/core";
import buttonBase from "#styles/buttonBase.css";

const root = css`
  ${buttonBase}

  /* Normal buttons */
  .button {
    min-width: 64px;
    padding: 6px 16px;
  }

  /* Floating Action Button (round) */
  .fab {
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
  &:hover {
    color: #fff;
    text-decoration: none;
    background-color: var(--crimson);
    @media (hover: none) {
      background-color: none;
    }
  }
  &:active,
  &.active {
    color: #fff;
    text-decoration: none;
    background-color: var(--crimson-dark);
  }
`;

type Props = {
  children: ?React.Node,
  disabled?: Boolean,
  type?: "button" | "fab",
  css: any,
  ...
};

function Button(props: Props): React.Node {
  const { children, disabled, type, css, ...rest } = props;
  return (
    <GatsbyLink
      {...rest}
      component="button"
      activeClass="active"
      className={{ disabled: disabled === true, type }}
      css={root}
    >
      {children}
    </GatsbyLink>
  );
}

Button.defaultProps = {
  type: "button",
};

export default Button;
