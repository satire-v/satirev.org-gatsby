import * as React from "react";
import { css } from "@emotion/core";

import breakpoints from "#styles/breakpoints";

const root = css`
  box-sizing: border-box;
  width: 100%;
  margin-top: calc(3 * var(--spacing));
  margin-right: auto;
  margin-left: auto;
  padding-right: calc(2 * var(--spacing));
  padding-left: calc(2 * var(--spacing));

  @media (min-width: ${breakpoints.sm}px) {
    padding-right: calc(3 * var(--spacing));
    padding-left: calc(3 * var(--spacing));
  }

  @media (min-width: ${breakpoints.xl}px) {
    max-width: ${breakpoints.xl}px;
  }

  .column-grid-root {
    display: grid;
    grid-gap: calc(3 * var(--spacing));
    grid-template-columns: repeat(12, 1fr);
    .column {
      display: grid;
      grid-gap: calc(2 * var(--spacing));
      grid-template-rows: min-content;
      grid-template-columns: 1fr;
    }
    .col-1-of-3 {
      @media (min-width: ${breakpoints.xs}px) {
        grid-column: span 12;
      }
      @media (min-width: ${breakpoints.md}px) {
        grid-column: 1 / span 6;
      }
      @media (min-width: ${breakpoints.lg}px) {
        grid-column: 1 / span 6;
      }
    }
    .col-2-of-3 {
      @media (min-width: ${breakpoints.xs}px) {
        grid-row: span 1;
        grid-column: span 12;
      }
      @media (min-width: ${breakpoints.md}px) {
        grid-row: 1 / span 2;
        grid-column: 7 / span 6;
      }
      @media (min-width: ${breakpoints.lg}px) {
        grid-row: span 1;
        grid-column: 7 / span 3;
      }
    }
    .col-3-of-3 {
      @media (min-width: ${breakpoints.xs}px) {
        grid-column: span 12;
      }
      @media (min-width: ${breakpoints.md}px) {
        grid-column: 1 / span 6;
      }
      @media (min-width: ${breakpoints.lg}px) {
        grid-column: 10 / span 3;
      }
    }
    .col-1-of-2 {
      @media (min-width: ${breakpoints.xs}px) {
        grid-column: span 12;
      }
      @media (min-width: ${breakpoints.md}px) {
        grid-column: 1 / span 8;
      }
    }
    .col-2-of-2 {
      @media (min-width: ${breakpoints.xs}px) {
        grid-column: span 12;
      }
      @media (min-width: ${breakpoints.md}px) {
        grid-column: 9 / span 4;
      }
    }
  }
`;

interface Props {
  children:
    | [JSX.Element, JSX.Element]
    | [JSX.Element, JSX.Element, JSX.Element];
}

export default (props: Props): JSX.Element => {
  const total = React.Children.count(props.children);
  return (
    <div css={root}>
      <div className="column-grid-root">
        {React.Children.map(props.children, (child, i) => (
          <div className={`column col-${(i + 1).toString()}-of-${total}`}>
            {child}
          </div>
        ))}
      </div>
    </div>
  );
};
