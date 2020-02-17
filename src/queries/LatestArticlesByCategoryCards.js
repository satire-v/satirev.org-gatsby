// @flow

import { graphql, useStaticQuery } from "gatsby";

import { type LatestArticlesByCategoryCards } from "./graphql/LatestArticlesByCategoryCards";

import { type ArticleCard, processArticleCardQuery } from "#queries/Article";

const latestArticlesByCategoryCards = (): Array<ArticleCard> => {
  const data: LatestArticlesByCategoryCards = useStaticQuery(graphql`
    query LatestArticlesByCategoryCards {
      allDataArticle(sort: { fields: created_on, order: DESC }) {
        group(field: category___dataId, limit: 1) {
          fieldValue
          nodes {
            ...ArticleCardFragment
          }
        }
      }
    }
  `);
  const articles: Array<ArticleCard> = [];
  const sortedGroups = data.allDataArticle.group.sort((a, b) => {
    if (a.fieldValue == null || b.fieldValue == null) {
      return 0;
    }
    return parseInt(a.fieldValue, 10) - parseInt(b.fieldValue, 10);
  });
  sortedGroups.forEach(group => {
    const article = group.nodes[0];
    articles.push(processArticleCardQuery(article));
  });
  return articles;
};

export default latestArticlesByCategoryCards;
