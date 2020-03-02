import * as React from "react";
import { css } from "@emotion/core";

import Chip from "#common/Chip.react";
import SvgIcon from "#assets/SvgIcon.react";

const root = css`
  display: flex;
  flex-wrap: wrap;
  & > * {
    margin: calc(0.5 * var(--spacing));
  }
`;

interface Props {
  tags: Array<string>;
}

function TagSection({ tags }: Props): JSX.Element {
  return (
    <div css={root}>
      <SvgIcon size="large" icon="tag" />
      {tags.map((tag, i) => (
        <Chip key={i.toString()} label={tag} />
      ))}
    </div>
  );
}

export default TagSection;
