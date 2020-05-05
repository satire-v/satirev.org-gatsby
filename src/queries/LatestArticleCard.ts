import { graphql, useStaticQuery } from "gatsby";

import { ArticleCard, processArticleCardQuery } from "#queries/Article";
import { LatestArticleCardQuery } from "#graphql";

const latestArticleCard = (): ArticleCard => {
  const data: LatestArticleCardQuery = useStaticQuery<
    LatestArticleCardQuery
  >(graphql`
    query LatestArticleCard {
      allDataArticle(limit: 1, sort: { fields: modified_on, order: DESC }) {
        nodes {
          ...ArticleCard
        }
      }
    }
  `);
  const article = data.allDataArticle.nodes[0];
  return processArticleCardQuery(article);
};

export default latestArticleCard;
