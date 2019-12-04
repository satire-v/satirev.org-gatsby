// @flow

import { graphql, useStaticQuery } from "gatsby";
import type { ArticlePreview } from "@utils/types";

const mostRecentArticle = (): ArticlePreview => {
  const data = useStaticQuery(graphql`
    query MostRecentArticle {
      allDataArticle(limit: 1, sort: { fields: modified_on, order: DESC }) {
        nodes {
          id
          slug
          title
          excerpt
          featured_image {
            data {
              full_url
            }
          }
          category {
            name
            slug
          }
        }
      }
    }
  `);
  const article = data.allDataArticle[0];
  const previewObj: ArticlePreview = {
    id: article.id,
    slug: `${article.category.slug}/${article.slug}`,
    title: article.title,
    excerpt: article.excerpt,
    imgUrl: article.featured_image.data.full_url,
    category: article.category.name,
  };
  return previewObj;
};

export default mostRecentArticle;
