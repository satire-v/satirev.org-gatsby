// @flow
import { graphql } from "gatsby";

import { type ArticleCard as ArticleCardQueryType } from "./graphql/ArticleCard";

export type ArticleCard = {
  id: string,
  slug: ?string,
  title: ?string,
  excerpt: ?string,
  imgUrl: ?string,
  imgFluid: ?any,
  category: ?string,
};

export const articleCardFragment = graphql`
  fragment ArticleCard on DataArticle {
    id
    slug
    title
    excerpt
    featured_image {
      data {
        full_url
      }
      localFile {
        childImageSharp {
          fluid(maxWidth: 960, maxHeight: 540) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
    category {
      name
      slug
    }
  }
`;

export const processArticleCardQuery = (
  article: ArticleCardQueryType
): ArticleCard => {
  return {
    id: article.id,
    slug: `${article.category.slug}/${article.slug}`,
    title: article.title,
    excerpt: article.excerpt,
    imgUrl: article.featured_image.data.full_url,
    imgFluid: article.featured_image.localFile.childImageSharp.fluid,
    category: article.category.name,
  };
};

export type Article = {
  ...ArticleCard,
  body: string,
  tags: Array<string>,
  published: Date,
  imageCaption: string,
  legacySlug: string,
};
