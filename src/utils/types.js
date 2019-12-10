// @flow

export type ArticleCard = {
  id: number,
  slug: string,
  title: string,
  excerpt: string,
  imgUrl: string,
  category: string,
};

export type Article = {
  ...ArticleCard,
  body: string,
  tags: Array<string>,
  published: Date,
  imageCaption: string,
  legacySlug: string,
};
