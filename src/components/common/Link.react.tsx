import * as React from "react";
import { Link as GatsbyLink } from "gatsby";
import { css } from "@emotion/core";

const root = css`
  color: var(--font-color-primary);
  text-decoration: none;
  &:hover {
    color: var(--crimson);
    text-decoration: none;
  }
  &:active,
  &.active {
    color: var(--crimson-dark);
    text-decoration: none;
  }
`;

type Props = {
  children: ?JSX.Element,
};

function Link(props: Props): JSX.Element {
  const { children, ...rest } = props;
  return (
    <GatsbyLink {...rest} activeClassName="active" css={root} underline="none">
      {children}
    </GatsbyLink>
  );
}

export default Link;
