import React from "react";
import { css } from "@emotion/core";

const list = css`
  position: relative;
  margin: 0;
  padding: 8px 0;
  list-style: none;
`;

interface Props extends WithChildren, WithNativeComponent {}

function List({ children, component = "ul", ...rest }: Props): JSX.Element {
  const Component = component;
  return (
    <Component {...rest} css={list}>
      {children}
    </Component>
  );
}

const listItem = css`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  box-sizing: border-box;
  width: 100%;
  padding: 8px 16px;
  text-align: left;
  text-decoration: none;
`;

function ListItem({ children, component = "li", ...rest }: Props): JSX.Element {
  const Component = component;
  return (
    <Component {...rest} css={listItem}>
      {children}
    </Component>
  );
}

export { List, ListItem };
export default List;
