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

type Props = {
  children?: JSX.Element[] | JSX.Element;
  to: string;
};

function Link(props: Props): JSX.Element {
  const { children, to, ...rest } = props;
  return (
    <GatsbyLink {...rest} to="to" activeClassName="active" css={root}>
      {children}
    </GatsbyLink>
  );
}

export default Link;
