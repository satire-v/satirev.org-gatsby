import React, { FC } from "react";
import { css } from "@emotion/core";

import SvgIcon from "#assets/SvgIcon.react";

type Props = {
  category: string;
};

const root = css`
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  & .category-text {
    padding-left: calc(1 * var(--spacing));
  }
`;

function CategorySection(props: Props): React.ReactNode {
  return (
    <div css={root}>
      <SvgIcon size="large" icon="labelArrow" color="primary" />
      <h6 className="category-text">{props.category}</h6>
    </div>
  );
}

export default CategorySection;
