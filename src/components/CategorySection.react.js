// @flow
import * as React from "react";
import { LabelImportant } from "@material-ui/icons";
import { Typography } from "@material-ui/core";
import { css } from "@emotion/core";
import theme from "@styles/theme";

type Props = {
  category: string,
};

const categoryRoot = css`
  display: flex;
  flexwrap: wrap;
  align-items: center;
`;

const category = css`
  padding-left: ${theme.spacing(1)}px;
`;

function CategorySection(props: Props): React.Node {
  return (
    <div css={categoryRoot}>
      <LabelImportant color="primary" fontSize="large" />
      <Typography css={category} variant="h6">
        {props.category}
      </Typography>
    </div>
  );
}

export default CategorySection;
