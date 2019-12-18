// @flow
import { graphql } from "gatsby";

import {
  type ArticleCardFragment,
  type ArticleCardFragment_featured_image_localFile_childImageSharp_fluid, // eslint-disable-line camelcase
} from "./graphql/ArticleCardFragment";
import { type ArticleFragment } from "./graphql/ArticleFragment";

const cheerio = require("cheerio");

export type ArticleCard = {
  id: string,
  slug: string,
  title: string,
  fullExcerpt: string,
  shortExcerpt: string,
  imgUrl: ?string,
  imgFluid: ?ArticleCardFragment_featured_image_localFile_childImageSharp_fluid, // eslint-disable-line camelcase
  category: string,
};

export const articleCardFragment = graphql`
  fragment ArticleCardFragment on DataArticle {
    id
    slug
    title
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
    category {
      name
      slug
    }
  }
`;

export const processArticleCardQuery = (
  article: ArticleCardFragment
): ArticleCard => {
  let fullExcerpt = article.excerpt ?? "";
  if (fullExcerpt === "") {
    const $ = cheerio.load(article.body);
    const texts = $("p, div");
    texts.each(() => {
      if (cheerio.text($(this)).match(/by/gi)) {
        $(this).remove();
      }
      if (!/^\s+$/.test(cheerio.text($(this)))) {
        fullExcerpt = cheerio.text($(this));
        return false;
      }
      return true;
    });
  }
  let shortExcerpt = fullExcerpt;
  if (fullExcerpt.split(" ").length > 50) {
    shortExcerpt = fullExcerpt
      .split(" ")
      .slice(0, 50)
      .join(" ");
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

export const articleFragment = graphql`
  fragment ArticleFragment on DataArticle {
    ...ArticleCardFragment
    tags
    modified_on
    featured_image_caption
    legacy_slug
  }
`;

export type Article = {
  ...ArticleCard,
  tags: Array<string>,
  published: Date,
  imageCaption: ?string,
  legacySlug: ?string,
};

export const processArticleQuery = (article: ArticleFragment): Article => {
  const articleCardObj = processArticleCardQuery(article);
  return {
    ...articleCardObj,
    tags:
      (article.tags &&
        article.tags
          .filter(Boolean)
          .filter(val => val != null || val !== "")) ??
      [],
    published: article.modified_on,
    imageCaption: article.featured_image_caption ?? "",
    legacySlug: article.legacy_slug,
  };
};
