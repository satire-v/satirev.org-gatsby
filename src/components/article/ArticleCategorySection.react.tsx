import React from "react";
import { css } from "@emotion/core";

import SvgIcon from "#assets/SvgIcon.react";

const root = css`
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  & .category-text {
    padding-left: calc(1 * var(--spacing));
  }
`;

interface Props {
  category: string;
}

function CategorySection({ category }: Props): JSX.Element {
  return (
    <div css={root}>
      <SvgIcon size="large" icon="labelArrow" color="primary" />
      <h6 className="category-text">{category}</h6>
    </div>
  );
}

export default CategorySection;
