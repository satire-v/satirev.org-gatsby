// @flow
import * as React from "react";
import { Chip } from "@material-ui/core";
import { LocalOffer } from "@material-ui/icons";
import { css } from "@emotion/core";
import theme from "@styles/theme";

type Props = {
  tags: Array<string>,
};

const tagsRoot = css`
  display: flex;
  flex-wrap: wrap;
  & > * {
    margin: ${theme.spacing(0.5)}px;
  }
`;

function TagSection(props: Props): React.Node {
  return (
    <div css={tagsRoot}>
      <LocalOffer fontSize="large" />
      {props.tags.map((tag, i) => (
        <Chip key={i.toString()} color="primary" label={tag} />
      ))}
    </div>
  );
}

export default TagSection;
