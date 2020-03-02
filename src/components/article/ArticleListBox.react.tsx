import React from "react";
import { css } from "@emotion/core";

import { ArticleLink } from "#queries/Article";
import { List, ListItem } from "#common/List.react";
import Link from "#common/Link.react";
import { Card, CardContent, CardHeader } from "#common/Card.react";

const root = css`
  height: fit-content;

  & .header {
    background: var(--grey-300);
  }

  & .card-content {
    padding-top: 0;

    & .list-root {
      padding-left: calc(1 * var(--spacing));
      list-style-type: decimal;

      & .list-item {
        flex-direction: column;
        align-items: flex-start;

        & .list-item-category {
          display: block;
        }

        & .list-item-link {
          display: list-item;
        }

        & > * {
          padding-left: calc(2 * var(--spacing));
        }
      }
    }
  }
`;

interface Props {
  articles: Array<ArticleLink>;
  title: string;
}

function ArticleList({ articles, title }: Props): JSX.Element {
  return (
    <Card css={root}>
      <CardHeader title={title} component="h5" className="header" />
      <CardContent className="card-content">
        <List component="ol" className="list-root">
          {articles.map(article => (
            <ListItem key={article.id} className="list-item">
              <h5 className="body2 list-item-category secondary-text">
                {article.category}
              </h5>
              <Link to={article.slug} className="h4 list-item-link">
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
