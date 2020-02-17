// @flow
import * as React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@material-ui/core";
import { css } from "@emotion/core";

import theme from "#styles/theme";
import type { ArticleLink } from "#queries/Article";
import Link from "#common/Link";

type Props = { articles: Array<ArticleLink>, title: string };

const cardHeader = css`
  background: ${theme.palette.grey["300"]};
`;

const cardContent = css`
  padding-top: 0;
`;

const cardRoot = css`
  height: fit-content;
`;

const listItemCategory = css`
  display: block;
`;

const listItemArticle = css`
  display: list-item;
`;

const listRoot = css`
  list-style-type: decimal;
  padding-left: ${theme.spacing(1)}px;
`;

const listItem = css`
  flex-direction: column;
  align-items: flex-start;
  & > * {
    padding-left: ${theme.spacing(2)}px;
  }
`;

function ArticleList(props: Props): React.Node {
  return (
    <Card css={cardRoot} variant="outlined">
      <CardHeader
        title={props.title}
        titleTypographyProps={{ variant: "h5" }}
        css={cardHeader}
      />
      <CardContent css={cardContent}>
        <List component="ol" css={listRoot}>
          {props.articles.map(article => (
            <ListItem key={article.id} css={listItem}>
              <Typography
                css={listItemCategory}
                color="textSecondary"
                component="h5"
                variant="body2"
              >
                {article.category}
              </Typography>
              <Link to={article.slug} css={listItemArticle} variant="h4">
                {article.title}
              </Link>
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
}

export default ArticleList;
