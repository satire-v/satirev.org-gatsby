// @flow
import { type ArticleCard, processArticleCardQuery } from "@queries/Article";
import { graphql, useStaticQuery } from "gatsby";

import { type MostRecentArticle } from "./graphql/MostRecentArticle";

const mostRecentArticle = (): ArticleCard => {
  const data: MostRecentArticle = useStaticQuery(graphql`
    query MostRecentArticle {
      allDataArticle(limit: 1, sort: { fields: modified_on, order: DESC }) {
        nodes {
          ...ArticleCardFragment
        }
      }
    }
  `);
  const article = data.allDataArticle.nodes[0];
  return processArticleCardQuery(article);
};

export default mostRecentArticle;
