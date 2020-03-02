import * as React from "react";
import { css } from "@emotion/core";

import ButtonGroup from "#common/ButtonGroup.react";
import Button from "#common/Button.react";
import SvgIcon from "#assets/SvgIcon.react";

const paginationRoot = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;

  .pagination-arrows {
    margin: calc(2 * var(--spacing));
  }

  .pagination-number-active {
    background-color: var(--crimson);
    border: 1px solid var(--crimson-dark);
    filter: brightness(10%);
  }
`;

// TOOD: move to gatsby node
export interface PaginationPageContext {
  currentPage: number;
  numPages: number;
  categorySlug: string;
  category: string;
}

interface Props {
  pageContext: PaginationPageContext; // TODO real typing i guess
}

function Pagination({ pageContext }: Props): JSX.Element {
  const { currentPage, numPages } = pageContext;
  const isFirst = currentPage === 1;
  const isLast = currentPage === numPages;
  const prevPage = currentPage - 1 === 1 ? "" : (currentPage - 1).toString();
  const nextPage = (currentPage + 1).toString();
  let start = currentPage - 2;
  let end = currentPage + 2;
  start = start < 1 ? 1 : start;
  end = end > numPages ? numPages : end;
  const buttons = [];
  for (let i = start; i <= end; i += 1) {
    buttons.push(
      <Button
        key={i}
        partiallyActive
        activeClassName="pagination-number-active"
        to={`/${pageContext.categorySlug}/${i}`}
      >
        {i.toString()}
      </Button>
    );
  }
  if (start !== 1) {
    buttons.unshift(
      <Button key="more-before" to="/" disabled>
        ...
      </Button>
    );
  }
  if (end !== numPages) {
    buttons.push(
      <Button key="more-after" to="/" disabled>
        ...
      </Button>
    );
  }

  return (
    <div css={paginationRoot}>
      {!isFirst && (
        <Button
          type="fab"
          className="pagination-arrows"
          to={`/${pageContext.categorySlug}/${prevPage}`}
          rel="prev"
        >
          <SvgIcon icon="navigateBefore" />
        </Button>
      )}
      <ButtonGroup size="small" variant="outlined" color="primary">
        {buttons}
      </ButtonGroup>
      {!isLast && (
        <Button
          type="fab"
          className="pagination-arrows"
          to={`/${pageContext.categorySlug}/${nextPage}`}
          rel="next"
        >
          <SvgIcon icon="navigateNext" />
        </Button>
      )}
    </div>
  );
}

export default Pagination;
