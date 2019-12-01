// @flow
import * as React from "react";
import { colors, fonts } from "@styles/global";
import { css } from "@emotion/core";
import { graphql, useStaticQuery } from "gatsby";
import FlexLayout from "@common/FlexLayout";

const navStyle = css`
  background: white;
`;

const buttonStyle = css`
  padding: 8px 20px 10px;
  border-radius: 0 0 8px 8px;
  font-size: 14px;
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
    <nav css={navStyle}>
      <FlexLayout justify="center" align="center" direction="horizontal">
        {allDataCategory.nodes.map(node => (
          <div key={node.id} css={buttonStyle}>
            {node.name}
          </div>
        ))}
      </FlexLayout>
    </nav>
  );
}

export default Navbar;
