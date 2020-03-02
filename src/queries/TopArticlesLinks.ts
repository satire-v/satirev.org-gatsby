import { graphql, useStaticQuery } from "gatsby";

import { ArticleLink, processArticleLinkQuery } from "#queries/Article";
import { TopArticlesLinksQuery } from "#graphql";

const topArticlesLinks = (): Array<ArticleLink> => {
  // TopArticlesLinks
  const data: TopArticlesLinksQuery = useStaticQuery(graphql`
    query TopArticlesLinks {
      allDataArticle(
        limit: 5
        sort: { fields: page_views_past_week, order: DESC }
      ) {
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

export default topArticlesLinks;
