import { graphql, useStaticQuery } from "gatsby";

import { type LatestArticlesLinks } from "./graphql/LatestArticlesLinks";

import { type ArticleLink, processArticleLinkQuery } from "#queries/Article";

const latestArticlesLinks = (): Array<ArticleLink> => {
  const data: LatestArticlesLinks = useStaticQuery(graphql`
    query LatestArticlesLinks {
      allDataArticle(limit: 5, sort: { fields: modified_on, order: DESC }) {
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

export default latestArticlesLinks;
