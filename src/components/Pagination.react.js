// @flow
import * as React from "react";
import { css } from "@emotion/core";

import ButtonGroup from "#common/ButtonGroup";
import Button from "#common/Button";
import SvgIcon from "#assets/SvgIcon";

type Props = {
  pageContext: any, // TODO real typing i guess
  path: string,
};

const paginationRoot = css`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
  align-items: center;

  .pagination-arrows {
    margin: calc(2 * var(--spacing));
  }

  .pagination-number-active {
    border: 1px solid var(--crimson-dark);
    background-color: var(--crimson);
    filter: brightness(10%);
  }
`;

function Pagination(props: Props): React.Node {
  const { currentPage, numPages } = props.pageContext;
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
        to={`/${props.pageContext.categorySlug}/${i}`}
      >
        {i}
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
          to={`/${props.pageContext.categorySlug}/${prevPage}`}
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
          to={`/${props.pageContext.categorySlug}/${nextPage}`}
          rel="next"
        >
          <SvgIcon icon="navigateNext" />
        </Button>
      )}
    </div>
  );
}

export default Pagination;
