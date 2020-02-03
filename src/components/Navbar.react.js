// @flow
import * as React from "react";
import { css } from "@emotion/core";
import { graphql, useStaticQuery } from "gatsby";

import Button from "#common/Button";
import theme from "#styles/theme";

const PADDING_HORIZONTAL = 16;
const MARGIN_HORIZONTAL = 4;
const FONT_SIZE = "16px";
const MARGIN_OF_ERROR = "40px";

const buttonHoverStyle = {
  background: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
};

const buttonStyle = css`
  margin: 0 ${MARGIN_HORIZONTAL}px;
  background: none;
  color: ${theme.palette.primary.main};
  &:hover {
    ${css(buttonHoverStyle)}
  }
`;

function Navbar(): React.Node {
  const { allDataCategory } = useStaticQuery(graphql`
    query NavQuery {
      allDataCategory {
        nodes {
          name
          slug
          id
        }
      }
    }
  `);

  function reducer(total, node) {
    let counter = 0;
    node.name.split("").forEach(el => {
      if (el.match(/(?![i])[a-z0-9]/gi)) {
        counter += 1;
      } else {
        counter += 0.4;
      }
    });
    return total + counter;
  }

  const letterCount = allDataCategory.nodes.reduce(reducer, 0);
  const marginLength =
    +allDataCategory.nodes.length *
    ((MARGIN_HORIZONTAL + PADDING_HORIZONTAL) * 2);

  const navRootStyle = css`
    background: white;
    text-align: center;
    white-space: nowrap;
    @media (max-width: calc(
      ${marginLength}px + (205px * 2) + (${letterCount} * ${FONT_SIZE} * 2 / 3)
    + ${MARGIN_OF_ERROR})) {
      grid-column: span 3; /* this is just for the header....might want to idk, factor out */
    }
  `;

  return (
    <nav css={navRootStyle}>
      {allDataCategory.nodes.map(node => (
        <Button
          to={`/${node.slug}`}
          key={node.id}
          variant="contained"
          color="primary"
          css={buttonStyle}
          activeStyle={buttonHoverStyle}
          partiallyActive
          disableElevation
        >
          {node.name}
        </Button>
      ))}
    </nav>
  );
}

export default Navbar;
