/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable camelcase */

import { graphql } from "gatsby";

import {
  ArticleFullFragment,
  ArticleCardFragment,
  ArticleLinkFragment,
  GatsbyImageSharpFluid_withWebpFragment,
  Maybe,
} from "#graphql";

export interface ArticleLink {
  id: string;
  slug: string;
  title: string;
  category: string;
}

export const articleLinkFragment = graphql`
  fragment ArticleLink on DataArticle {
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

export interface ArticleCard extends ArticleLink {
  fullExcerpt: string;
  shortExcerpt: string;
  imgUrl: Maybe<string>;
  imgTitle: Maybe<string>;
  imgFluid: Maybe<GatsbyImageSharpFluid_withWebpFragment>;
  published: string;
  tags: string[];
  category: string;
}

export const articleCardFragment = graphql`
  fragment ArticleCard on DataArticle {
    ...ArticleLink
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
    published: article.published.toString(),
    tags: article.tags?.filter((tag): tag is string => tag !== "") ?? [], // filters any falsy value
    category: article.category.name,
  };
};

export const articleFullFragment = graphql`
  fragment ArticleFull on DataArticle {
    ...ArticleCard
    tags
    modified_on(formatString: "MMM D, YYYY [at] h:mm a")
    year: created_on(formatString: "YYYY")
    featured_image_caption
    legacy_slug
  }
`;

export interface ArticleFull extends ArticleCard {
  body: string;
  published: string;
  year: string;
  imageCaption: Maybe<string>;
  legacySlug: Maybe<string>;
}

export const processArticleQuery = (
  article: ArticleFullFragment
): ArticleFull => {
  const articleCardObj = processArticleCardQuery(article);
  return {
    ...articleCardObj,
    body: article.body,
    year: article.year,
    imageCaption: article.featured_image_caption,
    legacySlug: article.legacy_slug,
  };
};
