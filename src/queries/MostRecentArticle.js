// @flow

import { graphql, useStaticQuery } from "gatsby";
import type { ArticleCard } from "@queries/Article";

const mostRecentArticle = (): ArticleCard => {
  const data = useStaticQuery(graphql`
    query MostRecentArticle {
      allDataArticle(limit: 1, sort: { fields: modified_on, order: DESC }) {
        nodes {
          ...ArticleCard
        }
      }
    }
  `);
  const article = data.allDataArticle.nodes[0];
  const previewObj: ArticleCard = {
    id: article.id,
    slug: `${article.category.slug}/${article.slug}`,
    title: article.title,
    excerpt: article.excerpt,
    imgUrl: article.featured_image.data.full_url,
    imgFluid: article.featured_image.localFile.childImageSharp.fluid,
    category: article.category.name,
  };
  return previewObj;
};

export default mostRecentArticle;
