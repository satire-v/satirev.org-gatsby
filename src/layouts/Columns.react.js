// @flow

import * as React from "react";
import { Container } from "@material-ui/core";
import { css } from "@emotion/core";
import theme from "@styles/theme";

const containerRoot = css`
  margin-top: ${theme.spacing(3)}px;
`;

const gridRoot = css`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: ${theme.spacing(3)}px;
  .column {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: ${theme.spacing(2)}px;
    grid-template-rows: min-content;
  }
  .col-1-of-3 {
    ${theme.breakpoints.up("xs")} {
      grid-column: span 12;
    }
    ${theme.breakpoints.up("md")} {
      grid-column: 1 / span 6;
    }
    ${theme.breakpoints.up("lg")} {
      grid-column: 1 / span 6;
    }
  }
  .col-2-of-3 {
    ${theme.breakpoints.up("xs")} {
      grid-column: span 12;
      grid-row: span 1;
    }
    ${theme.breakpoints.up("md")} {
      grid-column: 7 / span 6;
      grid-row: 1 / span 2;
    }
    ${theme.breakpoints.up("lg")} {
      grid-column: 7 / span 3;
      grid-row: span 1;
    }
  }
  .col-3-of-3 {
    ${theme.breakpoints.up("xs")} {
      grid-column: span 12;
    }
    ${theme.breakpoints.up("md")} {
      grid-column: 1 / span 6;
    }
    ${theme.breakpoints.up("lg")} {
      grid-column: 10 / span 3;
    }
  }
  .col-1-of-2 {
    ${theme.breakpoints.up("xs")} {
      grid-column: span 12;
    }
    ${theme.breakpoints.up("md")} {
      grid-column: 1 / span 8;
    }
  }
  .col-2-of-2 {
    ${theme.breakpoints.up("xs")} {
      grid-column: span 12;
    }
    ${theme.breakpoints.up("md")} {
      grid-column: 9 / span 4;
    }
  }
`;

type Props = {
  children:
    | [React.Element<any>, React.Element<any>]
    | [React.Element<any>, React.Element<any>, React.Element<any>],
};

export default (props: Props): React.Node => {
  const total = React.Children.count(props.children);
  return (
    <Container css={containerRoot} maxWidth="xl">
      <div css={gridRoot}>
        {React.Children.map(props.children, (child, i) => (
          <div className={`column col-${(i + 1).toString()}-of-${total}`}>
            {child}
          </div>
        ))}
      </div>
    </Container>
  );
};
