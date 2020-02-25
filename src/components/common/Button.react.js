// @flow
import * as React from "react";
import { Link as GatsbyLink } from "gatsby";
import { Button as MuiButton } from "@material-ui/core";
import { css } from "@emotion/core";

type Props = {
  children: ?React.Node,
};

const root = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  -webkit-tap-highlight-color: transparent;
  outline: 0;
  border: 0;
  margin: 0;
  cursor: pointer;
  user-select: none;
  vertical-align: middle;
  text-decoration: none;
  color: #fff;
  &::-moz-focus-inner {
    border-style: none;
  }
  &.disabled {
    pointer-events: none;
    cursor: default;
    color: var(--disabled);
    background-color: var(--disabled-background);
  }

  box-sizing: border-box;
  min-width: 64px;
  padding: 6px 16px;
  border-radius: var(--border-radius);
  transition-property: background-color box-shadow border;
  transition-duration: var(--transition-duration-short);

  &:hover {
    text-decoration: none;
    background-color: var(--crimson);

    &.disabled {
      background-color: var(--disabled-background);
    }
  }
`;

const LinkBehavior = React.forwardRef((props, ref) => (
  <GatsbyLink
    ref={ref}
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...props}
  />
));

function Button(props: Props): React.Node {
  const { children, ...rest } = props;
  return (
    <MuiButton
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...rest}
      component={LinkBehavior}
    >
      {children}
    </MuiButton>
  );
}

export default Button;
