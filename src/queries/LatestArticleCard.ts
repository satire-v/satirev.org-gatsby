import { graphql, useStaticQuery } from "gatsby";

// import { LatestArticleCard } from "./graphql/LatestArticleCard";

import { ArticleCard, processArticleCardQuery } from "#queries/Article";

const latestArticleCard = (): ArticleCard => {
  // LatestArticleCard
  const data: any = useStaticQuery(graphql`
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
