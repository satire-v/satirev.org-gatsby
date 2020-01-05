// @flow
import { graphql } from "gatsby";

import {
  type ArticleCardFragment,
  type ArticleCardFragment_featured_image_localFile_childImageSharp_fluid, // eslint-disable-line camelcase
} from "./graphql/ArticleCardFragment";
import { type ArticleFullFragment } from "./graphql/ArticleFullFragment";
import { type ArticleLinkFragment } from "./graphql/ArticleLinkFragment";

const cheerio = require("cheerio");

export type ArticleLink = {
  id: string,
  slug: string,
  title: string,
  category: string,
};

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
    slug: `${article.category.slug}/${article.slug}`,
    title: article.title,
    category: article.category.name,
  };
};

export type ArticleCard = {
  ...ArticleLink,
  fullExcerpt: string,
  shortExcerpt: string,
  imgUrl: ?string,
  imgFluid: ?ArticleCardFragment_featured_image_localFile_childImageSharp_fluid, // eslint-disable-line camelcase
  category: string,
};

export const articleCardFragment = graphql`
  fragment ArticleCardFragment on DataArticle {
    ...ArticleLinkFragment
    excerpt
    body
    featured_image {
      data {
        full_url
      }
      localFile {
        childImageSharp {
          fluid(
            maxWidth: 960
            maxHeight: 540
            fit: CONTAIN
            background: "rgba(0,0,0,0)"
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
  let fullExcerpt = article.excerpt ?? "";
  if (fullExcerpt === "") {
    const $ = cheerio.load(article.body);
    const texts = $("p, div");
    texts.toArray().every(el => {
      if (cheerio.text($(el)).match(/by/gi)) {
        $(el).remove();
      }
      if (!/^\s+$/.test(cheerio.text($(el)))) {
        fullExcerpt = cheerio.text($(el));
        return false;
      }
      return true;
    });
  }
  let shortExcerpt = fullExcerpt;
  if (fullExcerpt.split(" ").length > EXCERPT_WORD_LIMIT) {
    shortExcerpt = `${fullExcerpt
      .split(" ")
      .slice(0, EXCERPT_WORD_LIMIT)
      .join(" ")}...`;
  }
  return {
    id: article.id,
    slug: `${article.category.slug}/${article.slug}`,
    title: article.title,
    fullExcerpt,
    shortExcerpt,
    imgUrl: article?.featured_image?.data?.full_url, // eslint-disable-line camelcase
    imgFluid: article.featured_image?.localFile?.childImageSharp?.fluid,
    category: article.category.name,
  };
};

export const articleFullFragment = graphql`
  fragment ArticleFullFragment on DataArticle {
    ...ArticleCardFragment
    tags
    modified_on
    created_on
    featured_image_caption
    legacy_slug
  }
`;

export type ArticleFull = {
  ...ArticleCard,
  tags: Array<string>,
  published: Date,
  imageCaption: ?string,
  legacySlug: ?string,
};

export const processArticleQuery = (
  article: ArticleFullFragment
): ArticleFull => {
  const articleCardObj = processArticleCardQuery(article);
  return {
    ...articleCardObj,
    tags:
      (article.tags &&
        article.tags
          .filter(Boolean)
          .filter(val => val != null || val !== "")) ??
      [],
    published: article.created_on,
    imageCaption: article.featured_image_caption ?? "",
    legacySlug: article.legacy_slug,
  };
};
