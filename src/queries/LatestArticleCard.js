// @flow
import { graphql, useStaticQuery } from "gatsby";

import { type LatestArticleCard } from "./graphql/LatestArticleCard";

import { type ArticleCard, processArticleCardQuery } from "#queries/Article";

const latestArticleCard = (): ArticleCard => {
  const data: LatestArticleCard = useStaticQuery(graphql`
    query LatestArticleCard {
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

export default latestArticleCard;
