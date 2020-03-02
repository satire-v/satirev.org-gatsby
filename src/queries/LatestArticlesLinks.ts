import { graphql, useStaticQuery } from "gatsby";

import { ArticleLink, processArticleLinkQuery } from "#queries/Article";
import { LatestArticlesLinksQuery } from "#graphql";

const latestArticlesLinks = (): Array<ArticleLink> => {
  // LatestArticlesLinks
  const data: LatestArticlesLinksQuery = useStaticQuery(graphql`
    query LatestArticlesLinks {
      allDataArticle(limit: 5, sort: { fields: modified_on, order: DESC }) {
        nodes {
          ...ArticleLink
        }
      }
    }
  `);
  const articles: Array<ArticleLink> = [];
  data.allDataArticle.nodes.forEach(article => {
    articles.push(processArticleLinkQuery(article));
  });
  return articles;
};

export default latestArticlesLinks;
