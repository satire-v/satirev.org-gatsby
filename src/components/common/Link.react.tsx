import React from "react";
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

interface Props extends StyledWrapper {
  to: string;
}

function Link({ children, className, to, ...rest }: Props): JSX.Element {
  return (
    <GatsbyLink
      {...rest}
      to={to}
      className={className}
      activeClassName="active"
      css={root}
    >
      {children}
    </GatsbyLink>
  );
}

export default Link;
