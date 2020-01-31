// @flow
import * as React from "react";
import { ButtonGroup } from "@material-ui/core";
import { NavigateBefore, NavigateNext } from "@material-ui/icons";
import { css } from "@emotion/core";
import { fade } from "@material-ui/core/styles/colorManipulator";
import Button from "#common/Button";
import Fab from "#common/Fab";
import theme from "#styles/theme";

type Props = {
  pageContext: any, // TODO real typing i guess
  path: string,
};

const navRoot = css`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const fabRoot = css`
  margin: ${theme.spacing(2)}px;
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
        disableElevation
        partiallyActive
        activeStyle={{
          border: `1px solid ${theme.palette.primary.main}`,
          backgroundColor: fade(
            theme.palette.primary.main,
            theme.palette.action.hoverOpacity
          ),
        }}
        to={`/${props.pageContext.categorySlug}/${i}`}
      >
        {i}
      </Button>
    );
  }
  if (start !== 1) {
    buttons.unshift(
      <Button key="more-before" to="/" disableElevation disabled>
        ...
      </Button>
    );
  }
  if (end !== numPages) {
    buttons.push(
      <Button key="more-after" to="/" disableElevation disabled>
        ...
      </Button>
    );
  }

  return (
    <div css={navRoot}>
      {!isFirst && (
        <Fab
          css={fabRoot}
          to={`/${props.pageContext.categorySlug}/${prevPage}`}
          rel="prev"
        >
          <NavigateBefore />
        </Fab>
      )}
      <ButtonGroup size="small" variant="outlined" color="primary">
        {buttons}
      </ButtonGroup>
      {!isLast && (
        <Fab
          css={fabRoot}
          to={`/${props.pageContext.categorySlug}/${nextPage}`}
          rel="next"
        >
          <NavigateNext />
        </Fab>
      )}
    </div>
  );
}

export default Pagination;
