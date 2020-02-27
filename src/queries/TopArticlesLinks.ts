import { graphql, useStaticQuery } from "gatsby";

import { type TopArticlesLinks } from "./graphql/TopArticlesLinks";

import { type ArticleLink, processArticleLinkQuery } from "#queries/Article";

const topArticlesLinks = (): Array<ArticleLink> => {
  const data: TopArticlesLinks = useStaticQuery(graphql`
    query TopArticlesLinks {
      allDataArticle(
        limit: 5
        sort: { fields: page_views_past_week, order: DESC }
      ) {
        nodes {
          ...ArticleLinkFragment
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
