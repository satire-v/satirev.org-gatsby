import { graphql, useStaticQuery } from "gatsby";

// import { TopArticlesLinks } from "./graphql/TopArticlesLinks";

import { ArticleLink, processArticleLinkQuery } from "#queries/Article";

const topArticlesLinks = (): Array<ArticleLink> => {
  // TopArticlesLinks
  const data: any = useStaticQuery(graphql`
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
  // TODO: type
  const articles: Array<ArticleLink> = [];
  data.allDataArticle.nodes.forEach((article: any) => {
    articles.push(processArticleLinkQuery(article));
  });
  return articles;
};

export default topArticlesLinks;
