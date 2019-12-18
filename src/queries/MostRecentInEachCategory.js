// @flow

import { type ArticleCard, processArticleCardQuery } from "@queries/Article";
import { graphql, useStaticQuery } from "gatsby";

import { type MostRecentInEachCategory } from "./graphql/MostRecentInEachCategory";

const mostRecentInEachCategory = (): Array<ArticleCard> => {
  const data: MostRecentInEachCategory = useStaticQuery(graphql`
    query MostRecentInEachCategory {
      allDataArticle(sort: { fields: modified_on, order: DESC }) {
        group(field: category___name, limit: 1) {
          edges {
            node {
              ...ArticleCardFragment
            }
          }
          fieldValue
        }
      }
    }
  `);
  const articles: Array<ArticleCard> = [];
  data.allDataArticle.group.forEach(group => {
    const article = group.edges[0].node;
    articles.push(processArticleCardQuery(article));
  });
  return articles;
};

export default mostRecentInEachCategory;
