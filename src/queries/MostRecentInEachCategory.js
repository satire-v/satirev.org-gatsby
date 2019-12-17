// @flow

import { graphql, useStaticQuery } from "gatsby";
import type { ArticleCard } from "@queries/article";

const mostRecentInEachCategory = (): Array<ArticleCard> => {
  const data = useStaticQuery(graphql`
    query MostRecentInEachCategory {
      allDataArticle(sort: { fields: modified_on, order: DESC }) {
        group(field: category___name, limit: 1) {
          edges {
            node {
              ...ArticleCard
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
    const previewObj: ArticleCard = {
      id: article.id,
      slug: `${article.category.slug}/${article.slug}`,
      title: article.title,
      excerpt: article.excerpt,
      imgUrl: article.featured_image.data.full_url,
      imgFluid: article.featured_image.localFile.childImageSharp.fluid,
      category: article.category.name,
    };
    articles.push(previewObj);
  });
  return articles;
};

export default mostRecentInEachCategory;
