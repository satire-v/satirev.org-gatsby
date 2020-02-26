// @flow
import * as React from "react";
import { css } from "@emotion/core";

const list = css`
  position: relative;
  margin: 0;
  padding: 0;
  list-style: none;
`;

type Props = {
  children: ?React.Node,
  component: React.ElementType,
};

function List(props: Props): React.Node {
  const { children, component, ...rest } = props;
  return (
    <component {...rest} css={list}>
      {children}
    </component>
  );
}

List.defaultProps = {
  component: "ul",
};

const listItem = css`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  box-sizing: border-box;
  width: 100%;
  padding-top: 8px;
  padding-bottom: 8px;
  text-align: left;
  text-decoration: none;
`;

function ListItem(props: Props): React.Node {
  const { children, component, ...rest } = props;
  return (
    <component {...rest} css={listItem}>
      {children}
    </component>
  );
}

ListItem.defaultProps = {
  component: "li",
};

export { List, ListItem };
export default List;
