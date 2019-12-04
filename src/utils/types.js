// @flow

export type ArticlePreview = {
  id: number,
  slug: string,
  title: string,
  excerpt: string,
  imgUrl: string,
  category: string,
};

export type Article = {
  ...ArticlePreview,
  body: string,
  tags: Array<string>,
  published: Date,
  imageCaption: string,
  legacySlug: string,
};
