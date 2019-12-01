// @flow
import * as React from "react";
import { colors, fonts } from "@styles/global";
import { css } from "@emotion/core";
import { graphql, useStaticQuery } from "gatsby";
import FlexLayout from "@common/FlexLayout";

const navStyle = css`
  background: ${colors.crimson};
  font-family: ${fonts.sansSerif};
  font-size: 16px;
  border-top: white 2px solid;
`;

const buttonStyle = css`
  padding: 8px 12px;
  text-align: center;
  text-transform: uppercase;
  font-weight: 300;
  cursor: pointer;
  transition: all 0.5s;
  &:hover {
    background: white;
    color: ${colors.crimson};
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
        {allDataCategory.nodes.map((node, i) => (
          <div key={node.id} css={buttonStyle}>
            {node.name}
          </div>
        ))}
      </FlexLayout>
    </nav>
  );
}

export default Navbar;
