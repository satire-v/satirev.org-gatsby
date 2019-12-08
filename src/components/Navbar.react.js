// @flow
import * as React from "react";
import { colors, fonts } from "@styles/global";
import { css } from "@emotion/core";
import { graphql, useStaticQuery } from "gatsby";

const navRootStyle = css`
  background: white;
  text-align: center;
`;

const buttonStyle = css`
  display: inline-block;
  padding: 8px 16px;
  margin: 0 4px;
  font-size: 1em;
  text-align: center;
  cursor: pointer;
  transition: all 0.5s;
  color: ${colors.crimson};
  ${fonts.headerStyle}
  &:hover {
    color: white;
    background: ${colors.crimson};
  }
`;

function Navbar(): React.Node {
  const { allDataCategory } = useStaticQuery(graphql`
    query NavQuery {
      allDataCategory {
        nodes {
          name
          id
        }
      }
    }
  `);
  return (
    <nav css={navRootStyle}>
      {allDataCategory.nodes.map(node => (
        <div key={node.id} css={buttonStyle}>
          {node.name}
        </div>
      ))}
    </nav>
  );
}

export default Navbar;
