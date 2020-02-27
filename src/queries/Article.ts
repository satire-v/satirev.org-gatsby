/* eslint-disable camelcase */

import { graphql } from "gatsby";

import { type ArticleLinkFragment } from "./graphql/ArticleLinkFragment";
import { type ArticleFullFragment } from "./graphql/ArticleFullFragment";
import {
  type ArticleCardFragment,
  type ArticleCardFragment_featured_image_localFile_childImageSharp_fluid,
} from "./graphql/ArticleCardFragment";

export type ArticleLink = {|
  id: string,
  slug: string,
  title: string,
  category: string,
|};

export const articleLinkFragment = graphql`
  fragment ArticleLinkFragment on DataArticle {
    id
    slug
    title
    category {
      name
      slug
    }
  }
`;

export const processArticleLinkQuery = (
  article: ArticleLinkFragment
): ArticleLink => {
  return {
    id: article.id,
    slug: `/${article.category.slug}/${article.slug}`,
    title: article.title,
    category: article.category.name,
  };
};

export type ArticleCard = {|
  ...ArticleLink,
  fullExcerpt: string,
  shortExcerpt: string,
  imgUrl: ?string,
  imgTitle: ?string,
  imgFluid: ?ArticleCardFragment_featured_image_localFile_childImageSharp_fluid, // eslint-disable-line camelcase
  published: string,
  tags: Array<string>,
  category: string,
|};

export const articleCardFragment = graphql`
  fragment ArticleCardFragment on DataArticle {
    ...ArticleLinkFragment
    excerpt
    body
    published: created_on(formatString: "MMM D, YYYY [at] h:mm a")
    tags
    featured_image {
      title
      data {
        full_url
      }
      localFile {
        childImageSharp {
          fluid(
            maxWidth: 960
            maxHeight: 540
            fit: CONTAIN
            srcSetBreakpoints: [240, 480]
          ) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  }
`;

const EXCERPT_WORD_LIMIT = 40;
export const processArticleCardQuery = (
  article: ArticleCardFragment
): ArticleCard => {
  const fullExcerpt = article.excerpt ?? "";
  let shortExcerpt = fullExcerpt;
  if (fullExcerpt.split(" ").length > EXCERPT_WORD_LIMIT) {
    shortExcerpt = `${fullExcerpt
      .split(" ")
      .slice(0, EXCERPT_WORD_LIMIT)
      .join(" ")}...`;
  }
  return {
    ...processArticleLinkQuery(article),
    fullExcerpt,
    shortExcerpt,
    imgUrl: article?.featured_image?.data?.full_url,
    imgTitle: article?.featured_image?.title,
    imgFluid: article.featured_image?.localFile?.childImageSharp?.fluid,
    published: article.published,
    tags:
      (article.tags &&
        article.tags
          .filter(Boolean)
          .filter(val => val != null || val !== "")) ??
      [],
    category: article.category.name,
  };
};

export const articleFullFragment = graphql`
  fragment ArticleFullFragment on DataArticle {
    ...ArticleCardFragment
    tags
    modified_on(formatString: "MMM D, YYYY [at] h:mm a")

    year: created_on(formatString: "YYYY")
    featured_image_caption
    legacy_slug
  }
`;

export type ArticleFull = {|
  ...ArticleCard,
  body: string,
  published: string,
  year: string,
  imageCaption: ?string,
  legacySlug: ?string,
|};

export const processArticleQuery = (
  article: ArticleFullFragment
): ArticleFull => {
  const articleCardObj = processArticleCardQuery(article);
  return {
    ...articleCardObj,
    body: article.body,
    published: article.published,
    year: article.year,
    imageCaption: article.featured_image_caption ?? "",
    legacySlug: article.legacy_slug,
  };
};
